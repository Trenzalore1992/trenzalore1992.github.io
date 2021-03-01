"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Trenzalore"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e42c8db70153b2f2429e66899f4e770f",url:"./2021/02/27/Sport/index.html"},{revision:"365b2d452c0656b9003ca4c9fbd2c0c5",url:"./2021/02/28/poetry-and-word/index.html"},{revision:"4a96f7cbd39321b55de2af05d86519ec",url:"./404.html"},{revision:"cf52ed57e2c143e54c779422d1f52ef2",url:"./about/index.html"},{revision:"6cdd264151ec5950bced6d20fd5fd707",url:"./archives/2021/02/index.html"},{revision:"d44fc1ea1139b66a88797180103b752a",url:"./archives/2021/index.html"},{revision:"3cc7f1764a05af3e20da545a93b7e4f4",url:"./archives/index.html"},{revision:"ab4ab56814add34276e389d10c76ae39",url:"./books/index.html"},{revision:"7c810f028020e202207968bd62b16aea",url:"./categories/index.html"},{revision:"8816ff8b6ec36e380f5b327af1c8c4a8",url:"./categories/生活/index.html"},{revision:"a3f83bd849ef52d51a4ab5c90d45efa9",url:"./categories/生活/记录/index.html"},{revision:"8444a8d89dffc51d35e02c01cfbdfebd",url:"./categories/生活/记录/运动/index.html"},{revision:"76e3e1d0912537326303058b6e37a428",url:"./categories/积累/index.html"},{revision:"91298c7527f614b593970ad9b0405420",url:"./categories/积累/知识/index.html"},{revision:"f99701899e1c727e65d7f1e912193e86",url:"./categories/积累/知识/文学/index.html"},{revision:"3c9931b74d5b11dcdd497ee9d7d2afa9",url:"./css/custom.css"},{revision:"3e67c54eb1d1db7e28805fc767a45e9b",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f579237b3923c76c4cb34ff163f60644",url:"./games/index.html"},{revision:"a111681a37408d345efcc8194fcf15d0",url:"./index.html"},{revision:"284b95d3ba335fd99e07ea05d0602eb7",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"f443d72820348bbed446b9ac14113f6c",url:"./link/index.html"},{revision:"a4df13c0e4bcb5691ad77df573e845eb",url:"./manifest.json"},{revision:"a43131b23918369f42e4e3f22d36745b",url:"./movies/index.html"},{revision:"6dd125d5ef2070829657347d42f3d055",url:"./plans/index.html"},{revision:"e7cf1d8afb8b4703aa90b002773444b8",url:"./service-worker.js"},{revision:"897040c00ad268114384c5c7cdcdb4a7",url:"./tags/index.html"},{revision:"e8ece817f464531eb175decb6a7e038d",url:"./tags/Nintendo-Switch/index.html"},{revision:"5ae4a02615723ac727935930542cee9a",url:"./tags/古文字/index.html"},{revision:"520d8ffbfa431e0b0cc76c8b40b53028",url:"./tags/游戏/index.html"},{revision:"701f4ff63ba324fe92ff855fd229dd23",url:"./tags/诗词/index.html"},{revision:"d3f28cad6fa89e901215b4bc4595270d",url:"./tags/运动/index.html"},{revision:"e9b04e3834e96af7e3c348b207df5653",url:"./talking/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();