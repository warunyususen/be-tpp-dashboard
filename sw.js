/* ============================================
   BE-TPP PWA Service Worker
   Phase 12: Offline Support
   ============================================ */

const CACHE_NAME = 'be-tpp-v1.0.0';
const CACHE_VERSION = '1.0.0';

// Static assets to cache (relative paths for GitHub Pages compatibility)
const STATIC_ASSETS = [
    './',
    './index.html',
    './dashboard.html',
    './manifest.json',
    './favicon.ico',
    './icon-192.png',
    './icon-192-maskable.png',
    './icon-512.png',
    './icon-512-maskable.png',
    './apple-touch-icon.png',
    './BE_logo.svg'
];

// External resources to cache
const EXTERNAL_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
    'https://unpkg.com/mqtt/dist/mqtt.min.js',
    'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('[SW] Installing Service Worker v' + CACHE_VERSION);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching static assets');
                // Cache static assets first
                return cache.addAll(STATIC_ASSETS)
                    .then(() => {
                        // Try to cache external assets (don't fail if some fail)
                        return Promise.allSettled(
                            EXTERNAL_ASSETS.map(url => 
                                cache.add(url).catch(err => {
                                    console.log('[SW] Failed to cache external:', url, err);
                                })
                            )
                        );
                    });
            })
            .then(() => {
                console.log('[SW] All assets cached');
                // Skip waiting to activate immediately
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('[SW] Cache failed:', err);
            })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating Service Worker v' + CACHE_VERSION);
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => {
                            console.log('[SW] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Service Worker activated');
                // Take control of all pages immediately
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip WebSocket connections (MQTT)
    if (url.protocol === 'ws:' || url.protocol === 'wss:') {
        return;
    }
    
    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Network-first strategy for API calls and dynamic content
    if (url.pathname.includes('/api/') || url.hostname.includes('emqx')) {
        event.respondWith(networkFirst(request));
        return;
    }
    
    // Cache-first strategy for static assets
    event.respondWith(cacheFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        
        if (cachedResponse) {
            // Return cached version
            // Also update cache in background (stale-while-revalidate)
            fetchAndCache(request);
            return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return await fetchAndCache(request);
    } catch (error) {
        console.log('[SW] Cache-first failed:', error);
        return fallbackResponse(request);
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        
        // Cache successful responses
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        // Network failed, try cache
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return fallbackResponse(request);
    }
}

// Fetch and update cache
async function fetchAndCache(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        throw error;
    }
}

// Fallback response for offline
function fallbackResponse(request) {
    const url = new URL(request.url);
    
    // Return cached index (login) for navigation requests
    if (request.mode === 'navigate') {
        return caches.match('./index.html');
    }
    
    // Return offline response for other requests
    return new Response('Offline', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/plain' }
    });
}

// Message handler for communication with main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

console.log('[SW] Service Worker script loaded v' + CACHE_VERSION);
