// Bodega Stock service worker: keeps the app files and the Firebase code on the phone so the app opens offline.
// Kapag may binago ka sa mga file, dagdagan ang numero ng VERSION para siguradong mag-update.
const VERSION = 'v2';
const CACHE = 'bodega-stock-' + VERSION;
const FB = 'https://www.gstatic.com/firebasejs/10.14.1/';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
const SDK = [FB + 'firebase-app.js', FB + 'firebase-auth.js', FB + 'firebase-firestore.js'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all([c.addAll(ASSETS), ...SDK.map(u => c.add(u).catch(() => {}))]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('bodega-stock-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const same = url.origin === self.location.origin;
  const sdk = url.origin === 'https://www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  if (!same && !sdk) return; // Firestore and login traffic go straight to the network

  if (sdk) {
    // Firebase code never changes for a given version: use the saved copy first.
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req).then(hit => hit || fetch(req).then(res => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }))
      )
    );
    return;
  }

  // App files: open from the saved copy (works with no signal), refresh it in the background when online.
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req, { ignoreSearch: true }).then(hit => {
        const net = fetch(req).then(res => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => null);
        if (hit) { e.waitUntil(net); return hit; }
        return net.then(res => res || (req.mode === 'navigate' ? cache.match('./index.html') : Response.error()));
      })
    )
  );
});
