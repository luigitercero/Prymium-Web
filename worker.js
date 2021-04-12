import { precacheAndRoute,createHandlerBoundToURL } from "workbox-precaching";
import {registerRoute,NavigationRoute} from 'workbox-routing';
import {CacheFirst,NetworkOnly,NetworkFirst,StaleWhileRevalidate} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
precacheAndRoute(self.__precacheManifest);
precacheAndRoute(self.__WB_MANIFEST);


registerRoute(
  /\\.(?:webp|png|svg)$/,
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        // Only cache requests for a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Only cache 10 requests.
        maxEntries: 10,
      }),
    ]
  }), 'GET'
);

registerRoute(
  /\\.(?:css)$/,
  new NetworkFirst(), 'GET'
);
registerRoute(
  /^https?.*/,
    new NetworkFirst(),'GET'
  );
registerRoute(
/^http?.*/,
  new NetworkFirst(),'GET'
);
