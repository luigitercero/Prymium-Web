import { precacheAndRoute,createHandlerBoundToURL } from "workbox-precaching";
import {registerRoute,NavigationRoute} from 'workbox-routing';
import {NetworkOnly,NetworkFirst,StaleWhileRevalidate} from 'workbox-strategies';

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
precacheAndRoute(self.__precacheManifest);
precacheAndRoute(self.__WB_MANIFEST);

// This assumes /app-shell.html has been precached.
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  allowlist: [
    new RegExp('/tienda/'),
  ],
  denylist: [
    new RegExp('/blog/restricted/'),
  ],
});
registerRoute(navigationRoute);


registerRoute(
  /\\.(?:js|css|webp|png|svg)$/,
  new StaleWhileRevalidate(), 'GET'
);

registerRoute(
  /^https?.*/,
    new NetworkFirst(),'GET'
  );
registerRoute(
/^http?.*/,
  new NetworkFirst(),'GET'
);
