const CACHE_NAME = 'ninja-v2';
const ASSETS = [
    '/ninja/',
    './index.html',
    './manifest.json',
    '/icon/ninja-1.jpg',
    '/icon/ninja-2.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );

});




