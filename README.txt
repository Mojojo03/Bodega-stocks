BODEGA STOCK - BAGONG BERSYON (CLOUD SYNC)
==========================================

Iisa na ang stock ninyong lahat. Kahit sino sa inyo ang mag-stock in o out, makikita ito ng iba.
Gumagana pa rin kahit walang internet. Magsi-sync ito kapag may signal na.


A. I-UPDATE ANG APP SA GITHUB (isang beses lang)
------------------------------------------------
1. Buksan ang repository mo na bodega-stock sa github.com.
2. Add file -> Upload files.
3. I-drag ang mga file na ito mula sa zip (papalitan nila ang luma):
   index.html, sw.js, manifest.webmanifest, at ang apat na .png
   (HINDI kailangang i-upload ang README.txt at firestore.rules.)
4. Commit changes. Maghintay ng 1-2 minuto.


B. SIGURADUHIN ANG FIREBASE RULES
---------------------------------
1. Firebase console -> Firestore -> Rules tab.
2. Kung iba ang nakasulat, burahin at i-paste ang laman ng firestore.rules.
3. Publish.
Ang ibig sabihin nito: ang mga naka-login lang ang makakabasa at makakabago ng stock.


C. SA BAWAT PHONE
-----------------
1. Buksan ang app habang may internet.
2. Isara nang buo ang app (alisin sa recent apps) at buksan ulit. Gawin ito ng DALAWANG BESES.
   Kailangan ito para ma-save sa phone ang bagong bersyon at ang Firebase code.
   Pagkatapos, may login screen na.
3. Mag-login gamit ang email at password na ginawa mo sa Firebase (Authentication -> Users).
4. Para sa ibang phone: buksan ang link sa Chrome -> menu na tatlong tuldok -> Install app -> mag-login.


D. LUMANG DATA SA PHONE
-----------------------
Kung may stock ka na sa lumang offline na bersyon, may lalabas na kahon sa taas ng Stock tab:
"May nakitang ... item sa lumang offline na data..." Pindutin ang I-import. Isang beses lang ito gagawin,
at sa phone na may lumang data lang. Ang mga halimbawang item ay hindi isasama.
Puwede mo ring gamitin ang Report -> Import from backup kung may backup file ka.


PAALALA
-------
- Ang unang login sa bawat phone ay kailangan ng internet. Pagkatapos nito, gagana na offline.
- Kapag offline, makikita sa taas ang "Offline". Ang "Nagsi-sync..." ay nangangahulugang may naghihintay pang ipadala.
  Huwag mag-logout habang may naghihintay na sync.
- Kapag dalawa kayong sabay na nag-stock out, nagsasama ang bilang. Puwedeng bumaba sa zero o negative kung sobra
  ang kabuuang nailabas, kaya i-set ang bilang sa Stock tab pagkatapos mag-count.
- Mag-download ng backup (Report -> Download backup) paminsan-minsan.
- Ang libreng plan ng Firebase ay may limitasyon, pero sapat para sa isang tindahan na may 2-3 gumagamit.


KUNG MAY PROBLEMA
-----------------
- "Mali ang email o password": tingnan ang account sa Firebase -> Authentication -> Users.
- "Walang permiso" o "Hindi ma-load ang data (permission-denied)": i-publish ang rules sa bahagi B.
- "Hindi pa pinapayagan ang website na ito": Firebase -> Authentication -> Settings -> Authorized domains
  -> Add domain -> ilagay ang USERNAME.github.io (ang domain ng link mo).
- Lumang itsura pa rin ang app: isara nang buo at buksan ulit nang may internet (dalawang beses).
