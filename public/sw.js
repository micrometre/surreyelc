if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>s(e,a),o={module:{uri:a},exports:t,require:r};i[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/O0yCIQx5cm_Jt85oPk2SE/_buildManifest.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/O0yCIQx5cm_Jt85oPk2SE/_middlewareManifest.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/O0yCIQx5cm_Jt85oPk2SE/_ssgManifest.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/1bfc9850-22ad0a25ad7b33bc.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/600-46ef27fae75f04c1.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/787-cc7c9b73c3099094.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/main-50770868367ef490.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/_app-c7b6949527462509.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/commercial-6f272db02e3ab9dc.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/contact-68ee6edd8ab0c5ae.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/exterior-224316a32edec272.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/index-5504f1eb089e7e1a.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/interior-652ab6f67f52fd8a.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/painting-22702ab660fc4f33.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/pages/river-97055ef29f2ddad3.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/_next/static/css/48e5b521ae899c42.css",revision:"O0yCIQx5cm_Jt85oPk2SE"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"4aac366294567fc43cb214d7be7c43b6"},{url:"/icon-256x256.png",revision:"79b3e58166a2f700b1b01056772e4bc1"},{url:"/icon-384x384.png",revision:"ac101191a2c3be62757e6950b0df2c81"},{url:"/icon-512x512.png",revision:"ae1dbd8cdc35df13f7e8a0b601f01535"},{url:"/img/1.webp",revision:"7b673cb59d684fa80985307acf380fe2"},{url:"/img/2.webp",revision:"12d081aab49e170cbe387566139a23b0"},{url:"/img/3.webp",revision:"bb93596e47aa4ac90f3c1c8310f2262f"},{url:"/img/4.webp",revision:"6d2ce48fba6b46f995c234ebbfcc3978"},{url:"/img/5.webp",revision:"4c192de6859b65863a5d6dae845fd00a"},{url:"/img/6.webp",revision:"78d0a00e776ad6be408f539f339c08e3"},{url:"/img/bathroom2.jpg",revision:"da86b2a76c44636225492aee6de9cbd9"},{url:"/img/bathroom2.webp",revision:"cea11f43ecf56a9e3e1d06866123837f"},{url:"/img/exterior-1.jpg",revision:"8d79c65780d0b0230ae2e22aaf8cc86f"},{url:"/img/exterior.jpg",revision:"d46e0f868d452d908548f3df5a59e6ac"},{url:"/img/exterior.webp",revision:"ee8762dc61012d8cb337e06d23186144"},{url:"/img/hair-drasers.jpg",revision:"2251c681422e7d6f03ca76f31c5cc3f8"},{url:"/img/hair-drasers.webp",revision:"6024d08ae44dcb28441720bf37f3e80d"},{url:"/img/inside-0.jpg",revision:"88cbc2a2a26389c09975cf60e6aa3601"},{url:"/img/kitchen-0.jpg",revision:"2251c681422e7d6f03ca76f31c5cc3f8"},{url:"/img/kitchen-1.jpg",revision:"6fbeec223e0de83c00aab4dbcd57327d"},{url:"/img/kitchen-2.webp",revision:"195fb96f49c0a2d0611ff31499bd3958"},{url:"/img/kitchen-3.jpg",revision:"a08c9d1e826d7153cfe49ed7fe5dac8c"},{url:"/img/kitchen-3.webp",revision:"3e1246698cc033cddd98335691e68892"},{url:"/img/kitchen-4.jpg",revision:"96c68113b6098b09f5af8c3f60fc2937"},{url:"/img/kitchen-5.jpg",revision:"a08c9d1e826d7153cfe49ed7fe5dac8c"},{url:"/img/leavingroom-0.jpg",revision:"1e49932cd3bd11450628bcc0ae069d60"},{url:"/img/leavingroom-0.webp",revision:"fdf9050bed723badbf6fc026af230090"},{url:"/img/leavingroom-1.jpg",revision:"1ae55282d806fc02ba1fdec59ed89e8b"},{url:"/img/leavingroom-1.webp",revision:"a44bb72c5828c7f479e42f304eedf8fc"},{url:"/img/logo.png",revision:"940890a379de869667a52d9f78d507d6"},{url:"/img/map.jpeg",revision:"21e1bed8b3071155b938168c08e17ebb"},{url:"/img/map.webp",revision:"d2b3b7787643272d3b6041e819490151"},{url:"/img/river.jpg",revision:"f39844b7dedadca7b0c4efed6a1b66ac"},{url:"/img/saloon.jpg",revision:"2251c681422e7d6f03ca76f31c5cc3f8"},{url:"/img/sky.jpg",revision:"e95e091e90149ddab6a003a460cf592a"},{url:"/img/sky.webp",revision:"c2b412f91322885244a49a86de19e458"},{url:"/manifest.json",revision:"ef6e96602ac0d69b683e16a40fca5e8c"},{url:"/maskable_icon.png",revision:"72d6b51f3dcc74c602a130477afa3a48"},{url:"/robots.txt",revision:"0e8552b6f127b4ca6999997cf372679a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
