if(!self.define){let e,r={};const n=(n,l)=>(n=new URL(n+".js",l).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,u)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let s={};const o=e=>n(e,i),d={module:{uri:i},exports:s,require:o};r[i]=Promise.all(l.map((e=>d[e]||o(e)))).then((e=>(u(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.a875d16a.js",revision:null},{url:"_nuxt/about.dd402774.css",revision:null},{url:"_nuxt/entry.c4daf112.js",revision:null},{url:"_nuxt/entry.e7b994eb.css",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.e9b8de2a.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-500.ebdd5e31.js",revision:null},{url:"_nuxt/error-component.d9f866c5.js",revision:null},{url:"_nuxt/index.750274f0.css",revision:null},{url:"_nuxt/index.ae5c35f4.js",revision:null},{url:"_nuxt/privacy.09c1a7d4.css",revision:null},{url:"_nuxt/privacy.5049da1c.js",revision:null},{url:"_nuxt/upload.ce697b44.css",revision:null},{url:"_nuxt/upload.da08defd.js",revision:null},{url:"_nuxt/web.0d6f533b.js",revision:null},{url:"_nuxt/web.62265417.js",revision:null},{url:"_nuxt/web.6cc256d7.js",revision:null},{url:"_nuxt/web.a7ac5dc0.js",revision:null},{url:"_nuxt/web.dfae9f86.js",revision:null},{url:"_nuxt/web.ec8ed3d0.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"6f359904a23cc2e4e206b02095bee2a5"},{url:"200",revision:"de101a3b5c31293a1194f1e6fb367867"},{url:"404",revision:"de101a3b5c31293a1194f1e6fb367867"},{url:"about/_payload.js",revision:"033c46554402de2c1ad22e26da927233"},{url:"about",revision:"c4d5ec42554016b4f92d72a350b2c6b9"},{url:"/",revision:"e24904fdeba2780667ebb5d9e7200ea8"},{url:"motiontest",revision:"8794f603b51fb00b52c7579e805de93f"},{url:"privacy/_payload.js",revision:"e9fdff73572e622d2a4cf9071e813dfc"},{url:"privacy",revision:"2ea6370e70d859a7d746985ce2a0e09c"},{url:"upload/_payload.js",revision:"0bbe4371b414d6192d772102f4b8ca7c"},{url:"upload",revision:"a74dd343abd6cb22ad38a4456147dbb7"},{url:"manifest.webmanifest",revision:"53a1ff266a9b29d99a165dad68c2843c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
