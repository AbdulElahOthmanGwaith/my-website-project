const CACHE_NAME = 'connecthub-v1';
const ASSETS = [
  '/my-website-project/',
  '/my-website-project/index.html',
  '/my-website-project/styles.css',
  '/my-website-project/script.js',
  '/my-website-project/translations.js',
  '/my-website-project/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
