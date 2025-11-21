const CACHE_NAME = "ninja-v2";
const BASE = "/ninja/";  // GitHub Pages 子路徑

const ASSETS = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.json",
  BASE + "manifest.webmanifest",
  BASE + "icon/ninja-1.jpg",
  BASE + "icon/ninja-2.jpg"
  // Tone.js 不放在 addAll，改成 fetch 時動態 cache
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // 只處理同源請求（避免 CDN/CORS 影響）
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((resp) => resp || fetch(e.request))
    );
  }
});

