import { precacheAndRoute,createHandlerBoundToURL } from "workbox-precaching";
import {registerRoute,NavigationRoute} from 'workbox-routing';
import {NetworkOnly,NetworkFirst,StaleWhileRevalidate} from 'workbox-strategies';

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
precacheAndRoute(self.__precacheManifest);
precacheAndRoute(self.__WB_MANIFEST);


registerRoute(
  /\\.(?:js|css|webp|png|svg)$/,
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
