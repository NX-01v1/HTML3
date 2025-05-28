self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('p2p-cache').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
