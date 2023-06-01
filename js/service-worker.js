const CACHE_NAME = 'my-cache';

const urlsToCache = [
    '/index.html',
    'js/index.js',
    'css/style.css',
    'img/github.png',

]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});