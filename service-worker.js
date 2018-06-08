var shellCacheName = 'food-shell-v1';

// caching.js
self.addEventListener("install", event => {
  event.waitUntil(
    // Open a cache of resources.
    caches.open(shellCacheName).then(cache => {
      // Begins the process of fetching them.
      // The coast is only clear when all the resources are ready.
      return cache.addAll([
        '/',
        './index.html',
        './restaurant.html',
        './css/styles.css',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './js/service-worker-register.js',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
