if(!self.define){let e,n={};const r=(r,l)=>(r=new URL(r+".js",l).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,u)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let s={};const o=e=>r(e,i),a={module:{uri:i},exports:s,require:o};n[i]=Promise.all(l.map((e=>a[e]||o(e)))).then((e=>(u(...e),s)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/_...id_.76b9cc05.js",revision:null},{url:"_nuxt/_id_.c4505f20.js",revision:null},{url:"_nuxt/about.3a36b64f.css",revision:null},{url:"_nuxt/about.3ea53662.js",revision:null},{url:"_nuxt/arrowBack.9f5a5e22.js",revision:null},{url:"_nuxt/cart.352b592d.js",revision:null},{url:"_nuxt/cart.96b254e1.js",revision:null},{url:"_nuxt/cart.bd939d27.css",revision:null},{url:"_nuxt/client-only.ce18d3a4.js",revision:null},{url:"_nuxt/ColorModePicker.00bd67db.js",revision:null},{url:"_nuxt/ColorModePicker.f39daeba.css",revision:null},{url:"_nuxt/create.11fea323.js",revision:null},{url:"_nuxt/custom.3c2bbfed.css",revision:null},{url:"_nuxt/custom.7e759243.js",revision:null},{url:"_nuxt/die_dieid_.47cb5a69.js",revision:null},{url:"_nuxt/die.a1d2091d.js",revision:null},{url:"_nuxt/entry.a6391998.js",revision:null},{url:"_nuxt/entry.f674feaf.css",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.604a997e.js",revision:null},{url:"_nuxt/error-500.13da0ece.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.c6394f28.js",revision:null},{url:"_nuxt/fullscreen.f7768409.js",revision:null},{url:"_nuxt/gear.3e5570c4.js",revision:null},{url:"_nuxt/grid.64dce53c.js",revision:null},{url:"_nuxt/help.0a100e82.js",revision:null},{url:"_nuxt/home.1c6f2c03.js",revision:null},{url:"_nuxt/ImageCropper.695f5655.css",revision:null},{url:"_nuxt/ImageCropper.7c200115.js",revision:null},{url:"_nuxt/index.201904ea.css",revision:null},{url:"_nuxt/index.8bc45829.js",revision:null},{url:"_nuxt/index.9372aff9.js",revision:null},{url:"_nuxt/index.eac3e25f.js",revision:null},{url:"_nuxt/index.ed6dacb9.js",revision:null},{url:"_nuxt/index.fe2c8ba7.css",revision:null},{url:"_nuxt/pencil.4b166ec4.js",revision:null},{url:"_nuxt/privacy.09c1a7d4.css",revision:null},{url:"_nuxt/privacy.47351655.js",revision:null},{url:"_nuxt/sets.0b521568.js",revision:null},{url:"_nuxt/sets.9174de2f.css",revision:null},{url:"_nuxt/settings.4ecd9319.css",revision:null},{url:"_nuxt/settings.d58e0362.js",revision:null},{url:"_nuxt/StaggeredTransition.511abf3f.js",revision:null},{url:"_nuxt/threeDcanvas.2711ce31.js",revision:null},{url:"_nuxt/upload.72be9ff3.js",revision:null},{url:"_nuxt/web.0b7f9db9.js",revision:null},{url:"_nuxt/web.19150a12.js",revision:null},{url:"_nuxt/web.239cdf6d.js",revision:null},{url:"_nuxt/web.abf034b6.js",revision:null},{url:"_nuxt/web.b40feeaf.js",revision:null},{url:"_nuxt/web.de2daeb4.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.dc90f814.js",revision:null},{url:"_payload.js",revision:"fa88ee61630e1b84aef2f542971a7201"},{url:"200",revision:"11a59fff425117d64530fa4c9bde39ea"},{url:"404",revision:"11a59fff425117d64530fa4c9bde39ea"},{url:"about/_payload.js",revision:"6b999d3c75c833a19724a75be6303c45"},{url:"about",revision:"2396c6c2e415cc3b0846356e76e58a05"},{url:"cart/_payload.js",revision:"0d856610bd6f441038f6f3a373b1a2a1"},{url:"cart",revision:"36508624b85ec6897e2cff88e3aaacae"},{url:"custom/_payload.js",revision:"39cbb2e66ee68c448f44923192c52ca2"},{url:"custom",revision:"0b9e5739f2ee7e59e5936dbaccf6a5c3"},{url:"dice/_payload.js",revision:"c119beef9f349ad8aff5c19ad0d65976"},{url:"dice",revision:"aad94fb9cab641204aadf90f2ed7c46c"},{url:"/",revision:"6d35304105b3795d31430b5c067e2387"},{url:"privacy/_payload.js",revision:"151706bd34d97b1759013eb15c1a1703"},{url:"privacy",revision:"6fd5e17432a7bcd31f9e91725ce38acd"},{url:"sets/_payload.js",revision:"5c19ab701c49f693de848fbab7d49e40"},{url:"sets/create/_payload.js",revision:"fb2910fd38c6518aa066dd1440a46935"},{url:"sets/create",revision:"8d365d348314850e212ceec14b0e0882"},{url:"sets",revision:"2a7786a7ea1e1f8ff274dc67d2cc03a8"},{url:"settings/_payload.js",revision:"6de4fd8b4d0dd3388e9dc9178cbee76e"},{url:"settings",revision:"146d664d2fcda6e2ca35c9c685347b8d"},{url:"upload/_payload.js",revision:"32b912d0865cdda7ad13b70efb235279"},{url:"upload",revision:"ea10c42f0bd864603c27d429a736b6c7"},{url:"manifest.webmanifest",revision:"53a1ff266a9b29d99a165dad68c2843c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
