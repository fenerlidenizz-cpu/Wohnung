const CACHE_NAME = 'wohnung-cache-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Lässt Netzwerkanfragen normal durch
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
