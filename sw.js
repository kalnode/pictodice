if(!self.define){let e,n={};const r=(r,l)=>(r=new URL(r+".js",l).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,u)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let s={};const o=e=>r(e,i),t={module:{uri:i},exports:s,require:o};n[i]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(u(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/about.a9bfccb6.js",revision:null},{url:"_nuxt/about.f185ef86.css",revision:null},{url:"_nuxt/entry.4455602b.css",revision:null},{url:"_nuxt/entry.7b628ed0.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.f9da99c2.js",revision:null},{url:"_nuxt/error-500.959b1d54.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.abac9b1b.js",revision:null},{url:"_nuxt/index.750274f0.css",revision:null},{url:"_nuxt/index.b8fd0327.js",revision:null},{url:"_nuxt/upload.12e64068.js",revision:null},{url:"_nuxt/upload.ce697b44.css",revision:null},{url:"_nuxt/web.05e1c9ad.js",revision:null},{url:"_nuxt/web.4c00337b.js",revision:null},{url:"_nuxt/web.7c09a092.js",revision:null},{url:"_nuxt/web.c040ef28.js",revision:null},{url:"_nuxt/web.f3dbb747.js",revision:null},{url:"_nuxt/web.f52fca43.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"_payload.js",revision:"bded1b4cc0340347af504339f5cb7cd2"},{url:"200",revision:"080f2f7abb5937c8b58faca01f23cb6a"},{url:"404",revision:"080f2f7abb5937c8b58faca01f23cb6a"},{url:"about/_payload.js",revision:"9b72698acf2a0b82546801bb6de51e68"},{url:"about",revision:"1d943fa44779c7c2ab19261652805f5c"},{url:"/photodice/",revision:"828978284bffd9cfab03574a53569a33"},{url:"motiontest",revision:"8794f603b51fb00b52c7579e805de93f"},{url:"upload/_payload.js",revision:"43cf788b9259068859deac0e97b1bf71"},{url:"upload",revision:"a25523a5b5dfeb6b6f7beec0b3981232"},{url:"manifest.webmanifest",revision:"01fa3f9ded9cc9a562f65905765646aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
