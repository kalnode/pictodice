import{r as w,_ as v,s as y,f as k,v as C,w as D,o,a as i,b as c,F as u,i as d,u as s,x,t as f,j as h,h as j}from"./entry.d0c4073a.js";var g;(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"})(g||(g={}));var _;(function(e){e.Rear="REAR",e.Front="FRONT"})(_||(_={}));var p;(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"})(p||(p={}));const P=w("Camera",{web:()=>v(()=>import("./web.f0e82216.js"),["./web.f0e82216.js","./entry.d0c4073a.js","./entry.63d5243b.css"],import.meta.url).then(e=>new e.CameraWeb)}),I={class:"w-full h-full flex flex-col justify-center items-center"},R={class:"flex flex-wrap justify-center px-6 mb-4"},O=["onClick"],A=["innerHTML"],T={class:"overflow-auto px-10"},F={class:"flex justify-center items-center flex-wrap pb-48"},B=["onClick"],L=["src"],M={key:1,class:"flex justify-center items-center bg-white w-full h-full"};y();const t=k(),U={name:"Upload",generate:{subFolders:!1},props:{},data(){return{showImageSelector:!1,currentDie:0}},mounted(){},methods:{async getImages(){let e=t.dice[t.currentDie].images;this.images=e},async imageClicked(e){console.log("Custom image slot index: %O",e),this.chooseAnImage(e)},async chooseAnImage(e){const n=await P.pickImages({quality:90,limit:1});this.selectedImage=n.photos[0];const m=await(await fetch(this.selectedImage.webPath)).blob();let r=await this.$convertBlobToBase64(m);t.dice[t.currentDie].images[e].url=r;let a=Date.now()+"."+this.selectedImage.format;await this.$writeFile({filename:a,data:r,directory:"images/"})},processImageFile(){}}},E=Object.assign(U,{setup(e){C();const n=D();return(l,m)=>(o(),i("div",I,[c("div",R,[(o(!0),i(u,null,d(s(t).dice,(r,a)=>(o(),i("div",{key:"die-"+a,onClick:b=>s(t).currentDie=a,class:h([s(t).currentDie==a?"border-orange-700":"border-transparent","flex items-center p-2 md:p-4 m-1 md:m-2 text-orange-700 bg-orange-200 hover:bg-orange-100 hover:scale-105 transition-transform border-2 rounded cursor-pointer"])},[c("span",null,f(r.name),1),r.icon?(o(),i("div",{key:0,innerHTML:r.icon,class:"w-8 h-8",style:{"margin-right":"-0.7em"}},null,8,A)):j("",!0)],10,O))),128))]),x(" "+f(s(n).baseURL)+" ",1),c("div",T,[c("div",F,[(o(!0),i(u,null,d(s(t).dice[s(t).currentDie].images,(r,a)=>(o(),i("div",{key:"slot-"+a,onClick:b=>s(t).dice[s(t).currentDie].type==="custom"?l.imageClicked(a):"",class:h([s(t).dice[s(t).currentDie].type==="custom"?"cursor-pointer hover:scale-105":"","w-28 sm:w-32 md:w-48 h-28 sm:h-32 md:h-48 border m-2 md:m-4 bg-white flex justify-center items-center overflow-hidden transition-transform"])},[r.url!=""?(o(),i("img",{key:0,src:s(n).baseURL+"/images/"+r.url,class:"w-full h-full object-cover object-center"},null,8,L)):(o(),i("div",M,"Add"))],10,B))),128))])])]))}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{g as C,_ as a,N as u};
