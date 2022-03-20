const staticCoffeePwa = "coffee-pwa-v1"
const assets = [
    "/",
    "/index.html",
    "assets/css/style.css",
    "assets/js/index.js",
    "assets/images/coffee1.jpg",
    "assets/images/coffee2.jpg",
    "assets/images/coffee3.jpg",
    "assets/images/coffee4.jpg",
    "assets/images/coffee5.jpg",
    "assets/images/coffee6.jpg",
    "assets/images/coffee7.jpg",
    "assets/images/coffee8.jpg",
    "assets/images/coffee9.jpg",
]

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticCoffeePwa).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            console.log(res);
            return res || fetch(fetchEvent.request)

        })
    )
})