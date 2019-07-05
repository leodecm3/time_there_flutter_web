var statiCcacheName = 'AppXPTO-v1.0.13';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(statiCcacheName)
      .then(cache => cache.addAll([
			'/'
      ]))
  );
});

self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
//Cache First - Network Second
self.addEventListener('fetch', event => {
	event.respondWith(
		// first fire w network request
		fetch(event.request).catch(() => {
			//if request fails then look in cache
			return caches.match(event.request).then(response => {
				return caches.match('/offline.html');
			})
		})
	);
});

// Clear cache on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('AppXPTO-v')))
          .filter(cacheName => (cacheName !== statiCcacheName))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});