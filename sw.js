const CACHE_NAME = 'docourse-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/role-selection.html',
  '/styles.css',
  '/app.js',
  '/fonts/Inter.woff2',
  '/icons.svg'
];

// Установка и кеширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Обработка запросов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Обновление кеша
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => 
        key !== CACHE_NAME ? caches.delete(key) : null
      ))
    )
  );

  const OFFLINE_PAGE = '/offline.html';

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(OFFLINE_PAGE))
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => 
        fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => caches.match(event.request))
      )
    );
  });

  const CACHE_NAME = 'docourse-v2';  // Измените версию!

  // В sw.js
self.addEventListener('install', event => {
    self.skipWaiting();  // Немедленная активация новой версии
  });

});
