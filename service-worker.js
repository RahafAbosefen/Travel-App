// Choose a cache name
const cacheName = 'travel-app-cache-v1';

// List the files to precache
const precacheResources = [
    '/',
    '/index.html',
    '/dist/main.css',
    '/dist/main.js',
    '/dist/service-worker.js',
    '/dist/1f5acbc544034cd767a4.png',
    '/dist/f5726af82ca1e4ddcdd8.jpg'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener(
    'install',
    (event) => {
        Console.log('Service worker install event!');
        event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
    }
);

self.addEventListener(
    'activate',
    (event) => {
        Console.log('Service worker activate event!');
    }
);

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener(
    'fetch',
    (event) => {
        Console.log(
            'Fetch intercepted for:',
            event.request.url
        );
        event.respondWith(caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }));
    }
);