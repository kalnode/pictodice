if(!self.define){let e,n={};const l=(l,r)=>(l=new URL(l+".js",r).href,n[l]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=n,document.head.appendChild(e)}else e=l,importScripts(l),n()})).then((()=>{let e=n[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let u={};const o=e=>l(e,s),d={module:{uri:s},exports:u,require:o};n[s]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(i(...e),u)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/_id_.e907528e.js",revision:null},{url:"_nuxt/about.0f911c6b.js",revision:null},{url:"_nuxt/about.e3c11b7e.css",revision:null},{url:"_nuxt/arrowBack.36dfb154.js",revision:null},{url:"_nuxt/client-only.9b8a13e0.js",revision:null},{url:"_nuxt/ColorModePicker.f39daeba.css",revision:null},{url:"_nuxt/ColorModePicker.ff7c1ecd.js",revision:null},{url:"_nuxt/create.dd2d9c94.js",revision:null},{url:"_nuxt/die_dieid_.d809f8c3.js",revision:null},{url:"_nuxt/die.4ebf1863.js",revision:null},{url:"_nuxt/entry.4d104afe.js",revision:null},{url:"_nuxt/entry.94e8f63a.css",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.ac833403.js",revision:null},{url:"_nuxt/error-500.7dc27d8c.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.9bd9bb33.js",revision:null},{url:"_nuxt/gear.20727f63.js",revision:null},{url:"_nuxt/grid.ff1ed6ef.js",revision:null},{url:"_nuxt/help.fc63f8dd.js",revision:null},{url:"_nuxt/home.903ac145.js",revision:null},{url:"_nuxt/ImageCropper.695f5655.css",revision:null},{url:"_nuxt/ImageCropper.b634ed1c.js",revision:null},{url:"_nuxt/index.31aad0db.js",revision:null},{url:"_nuxt/index.7b124247.js",revision:null},{url:"_nuxt/index.820eee46.css",revision:null},{url:"_nuxt/index.86e9a69d.js",revision:null},{url:"_nuxt/index.b27bcccd.js",revision:null},{url:"_nuxt/index.bd986913.css",revision:null},{url:"_nuxt/pencil.8bc317ae.js",revision:null},{url:"_nuxt/privacy.09c1a7d4.css",revision:null},{url:"_nuxt/privacy.9db09174.js",revision:null},{url:"_nuxt/roll.a18e3160.js",revision:null},{url:"_nuxt/sets.4dc3cb1d.js",revision:null},{url:"_nuxt/sets.56706389.css",revision:null},{url:"_nuxt/settings.0a5bfb8a.js",revision:null},{url:"_nuxt/settings.f8b17210.css",revision:null},{url:"_nuxt/StaggeredTransition.8134424c.js",revision:null},{url:"_nuxt/threeDcanvas.9b39252f.js",revision:null},{url:"_nuxt/upload.66da77f6.js",revision:null},{url:"_nuxt/web.29a3af24.js",revision:null},{url:"_nuxt/web.6431aa0a.js",revision:null},{url:"_nuxt/web.70e2ae60.js",revision:null},{url:"_nuxt/web.9dcdc29b.js",revision:null},{url:"_nuxt/web.e2963d4f.js",revision:null},{url:"_nuxt/web.f5e5f69e.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.dc90f814.js",revision:null},{url:"_payload.js",revision:"8cab67c2d993f481de663e4c054696db"},{url:"200",revision:"182e61d24fe6cafea11dc763ae3f4291"},{url:"404",revision:"182e61d24fe6cafea11dc763ae3f4291"},{url:"about/_payload.js",revision:"4ed6d0fda1f4f53ee231b6ca06bb9fb2"},{url:"about",revision:"bb5103c981ab899ed0e4eec589831daa"},{url:"dice/_payload.js",revision:"659fbc96177b77d993f93ed308da2905"},{url:"dice",revision:"3c639e3d31f8426a139fef00da14938b"},{url:"/",revision:"2390b626ef7fdad656b49f33b374b757"},{url:"privacy/_payload.js",revision:"939722996d03e34ab0ac07b6c49a9d63"},{url:"privacy",revision:"da1512f1d31e6b29bb73e25828a02261"},{url:"roll/_payload.js",revision:"12cf05115d09f5e6321166f933b7f246"},{url:"roll",revision:"d51068194e3c06ec5ade9b929b5571ed"},{url:"sets/_payload.js",revision:"84a938c6b524e0cefbcb6dfd6e83a349"},{url:"sets/create/_payload.js",revision:"77314f7e9b7baeac92180c52d6d4cb6c"},{url:"sets/create",revision:"7a7ef6c6b34a5753d5dc2006d9e0d775"},{url:"sets",revision:"ecedb0cd65b8090c494757b6067a6809"},{url:"settings/_payload.js",revision:"7d4e89243d8924700ab59bcf8be89619"},{url:"settings",revision:"4d78f5edab8e673da76eb4054d4d7e39"},{url:"upload/_payload.js",revision:"0d8beabd1908f0976bcbc2a72e406281"},{url:"upload",revision:"67591720b6ce0cc97bbe2c2cd1fac20c"},{url:"manifest.webmanifest",revision:"53a1ff266a9b29d99a165dad68c2843c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
