BODEGA STOCK - OFFLINE APP (PWA)
================================

Laman ng folder na ito:
  index.html, manifest.webmanifest, sw.js, at mga icon (.png)
Kailangan ang LAHAT ng file, at dapat magkakasama sa iisang folder.

Kailangan: i-upload ito sa isang libreng hosting para magkaroon ng https link.
Mas madali kung may computer o laptop (kahit pahiram). Pagkatapos, phone na lang ang gagamit.


A. GITHUB PAGES (libre, permanente)
-----------------------------------
1. Mag-sign in o gumawa ng libreng account sa github.com.
2. New repository -> pangalan: bodega-stock -> Public -> Create repository.
3. "uploading an existing file" -> i-drag ang LAHAT ng file (hindi ang zip) -> Commit changes.
4. Settings -> Pages -> Source: "Deploy from a branch" -> Branch: main, folder: / (root) -> Save.
5. Maghintay ng mga 1-2 minuto. Lalabas sa Pages ang link, tulad ng:
   https://USERNAME.github.io/bodega-stock/


B. NETLIFY (libre)
------------------
1. Mag-sign up ng libreng account sa netlify.com (para hindi mawala ang site).
2. Add new site -> Deploy manually -> i-drag ang folder na may lahat ng file.
3. Makukuha mo ang link na .netlify.app.


SA PHONE
--------
1. Buksan ang link habang may internet. Hayaang mag-load nang buo (isang beses lang ito kailangan).
2. ANDROID (Chrome): menu na tatlong tuldok -> "Install app" o "Add to Home screen".
   IPHONE (Safari): Share button -> "Add to Home Screen".
3. Buksan ang app mula sa icon sa home screen. Gagana na ito kahit walang internet.

IMPORTANTE SA IPHONE: hiwalay ang data ng Safari at ng app sa home screen.
I-install muna ang app bago maglagay ng sarili mong stock.

Kung may data ka na sa offline na HTML file: sa file na iyon, Report -> Download backup.
Sa bagong app, Report -> Restore from backup -> piliin ang backup file.


PAALALA
-------
- Nasa phone mo lang ang data. Walang napupunta sa server. Walang sync sa pagitan ng mga phone.
- Mag-download ng backup (Report -> Download backup) paminsan-minsan.
- Kapag binura mo ang browser data o site data, mabubura rin ang stock data.
- Para mag-update ng app: palitan ang mga file sa hosting at dagdagan ang VERSION sa sw.js.
