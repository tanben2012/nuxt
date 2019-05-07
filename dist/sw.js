importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28195fc937b6ef8d88d9.js",
    "revision": "ab5361ae61ae2ffb75b1962f20aa0c44"
  },
  {
    "url": "/_nuxt/491265a614f25d9a25a9.js",
    "revision": "71738fa9eceab9a6818006f0498c51b6"
  },
  {
    "url": "/_nuxt/58e10cd3d87a9df409c4.js",
    "revision": "0bbf6725ab7cecb6dde9f1f906648464"
  },
  {
    "url": "/_nuxt/708482a22395af256555.js",
    "revision": "065a9c00f9a8e7ee5197e2eaae02142b"
  },
  {
    "url": "/_nuxt/c32178ac05ae707da5b6.js",
    "revision": "15e2cd1e11f0d7a9401993790241967b"
  },
  {
    "url": "/_nuxt/d56a83aec717a93618ab.js",
    "revision": "d3b21a818ece31ca82c33352748d0adc"
  }
], {
  "cacheId": "web-msite",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
