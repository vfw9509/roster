// Minimal service worker so phones offer "Install / Add to Home screen".
// It caches nothing: the roster always loads fresh, and no member data is ever stored here.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* pass through to the network */ });
