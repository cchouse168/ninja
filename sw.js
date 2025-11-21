// ==========================
//  PWA Service Worker
// ==========================
const CACHE_NAME = "ninja-v2";
const BASE = "/ninja/";

// 📌 需要被 pre-cache 的檔案（必要）
const ASSETS = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.json",
  BASE + "icon/icon-192.png",
  BASE + "icon/icon-512.png",
  BASE + "icon/maskable-512.png",
];

// ==========================
//  install
// ==========================
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ==========================
//  activate
// ==========================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) =>
          key !== CACHE_NAME ? caches.delete(key) : null
        )
      )
    )
  );
  self.clients.claim();
});

// ==========================
//  fetch
// ==========================
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 僅處理本站資源（避免 CDN/第三方音效等被 block）
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        // 快取優先（若無則抓網路）
        return cached || fetch(event.request).then((res) => {
          // 動態快取 tone.js / js / png / mp3 等
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      })
    );
  }
});
