const CACHE_NAME = "bolajonlar-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",

  "./assets/icons/logo.png",
  "./assets/icons/harflar.png",
  "./assets/icons/mevalar.png",
  "./assets/icons/quiz.png",
  "./assets/icons/ranglar.png",
  "./assets/icons/reyting.png",
  "./assets/icons/shakllar.png",
  "./assets/icons/sonlar.png",
  "./assets/icons/tabiat.png",
  "./assets/icons/tana azolar.png",
  "./assets/icons/transport.png",
  "./assets/icons/vaqt.png"
];


// =========================
// O‘RNATISH
// =========================

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(FILES_TO_CACHE);
      })

  );

  self.skipWaiting();

});


// =========================
// AKTIVLASHTIRISH
// =========================

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames.map(cache => {

            if (cache !== CACHE_NAME) {

              return caches.delete(cache);

            }

          })

        );

      })

  );

  self.clients.claim();

});


// =========================
// INTERNET BO‘LMASA HAM
// =========================

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(cachedResponse => {

        if (cachedResponse) {

          return cachedResponse;

        }


        return fetch(event.request)

          .then(networkResponse => {

            const responseCopy =
              networkResponse.clone();


            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  event.request,
                  responseCopy
                );

              });


            return networkResponse;

          })

          .catch(() => {

            return caches.match(
              "./index.html"
            );

          });

      })

  );

});
