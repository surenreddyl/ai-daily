// AI Daily offline helper (service worker). Hand-written, no libraries.
//
// - Pages: network first, so learners always get the latest version when online.
//   Every page they open is saved, so it still opens offline.
// - Built assets (/_astro/*, hashed file names): saved on first use, then served from the save.
// - Other files (icons, diagrams): served from the save, refreshed in the background.
// - Pages never visited show the offline page when there's no connection.
// - Only this site's own files are handled; YouTube and other sites are never touched.
//
// Bump VERSION to clear every learner's saved copy on their next visit.
const VERSION = 'v1';
const SHELL = `aidaily-shell-${VERSION}`;
const PAGES = `aidaily-pages-${VERSION}`;
const ASSETS = `aidaily-assets-${VERSION}`;

const scope = new URL(self.registration.scope);
const at = (path) => new URL(path, scope).toString();
const OFFLINE_URL = at('offline/');
const SHELL_FILES = [at(''), OFFLINE_URL, at('manifest.webmanifest'), at('favicon.svg'), at('icon-192.png')];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k.startsWith('aidaily-') && ![SHELL, PAGES, ASSETS].includes(k)).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const saved = (await cache.match(request, { ignoreSearch: true })) || (await caches.match(request, { ignoreSearch: true }));
    return saved || (await caches.match(OFFLINE_URL)) || Response.error();
  }
}

async function cacheFirst(request) {
  const saved = await caches.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) (await caches.open(ASSETS)).put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(ASSETS);
  const saved = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => saved);
  return saved || refresh;
}

// The page sends the files it loaded before this helper started, so they work offline too.
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'save' || !Array.isArray(event.data.urls)) return;
  const ours = event.data.urls
    .map((u) => {
      try {
        return new URL(u);
      } catch {
        return null;
      }
    })
    .filter((u) => u && u.origin === scope.origin && u.pathname.startsWith(scope.pathname))
    .slice(0, 60);
  event.waitUntil(
    Promise.all(
      ours.map(async (u) => {
        const isPage = u.href === event.source?.url || u.pathname.endsWith('/');
        const cache = await caches.open(isPage ? PAGES : ASSETS);
        if (await cache.match(u.href)) return;
        try {
          const response = await fetch(u.href);
          if (response.ok) await cache.put(u.href, response);
        } catch {
          // Offline or blocked: skip.
        }
      }),
    ),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstPage(request));
  } else if (url.pathname.includes('/_astro/')) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});
