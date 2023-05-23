import{o as u,e as p,f as e,R as y,t as g,H as v,V as k,M as w,a as V,L as x,b as $,r as C,h as r,u as i,w as _,i as d,j as h,l as M,p as A,m as O}from"./entry.a6391998.js";import{C as P,_ as j}from"./ColorModePicker.00bd67db.js";import"./client-only.ce18d3a4.js";const N=["tabindex","aria-checked","aria-describedby","aria-labelledby"],q={for:"checkbox_actual",class:"relative flex justify-between w-full pointer-events-none"},B=["value","disabled"],D={class:"label"},I={class:"relative h-8 w-14"},T={inheritAttrs:!1},U=Object.assign(T,{__name:"Toggle",props:{label:String,disabled:Boolean,modelValue:{type:[String,Number,Boolean],required:!0,default:!1},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(l,{emit:b}){const o=l;function m(){n(!o.modelValue)}function n(t){b("update:modelValue",t)}return(t,s)=>(u(),p("div",y({class:[l.classes,"cursor-pointer"],tabindex:l.disabled?void 0:0,"aria-checked":l.modelValue,"aria-describedby":l.describedby,"aria-labelledby":l.labelledby,role:"switch"},l.aria,{onKeypress:s[1]||(s[1]=k(w(c=>m(),["prevent"]),["space"])),onClick:s[2]||(s[2]=c=>m())}),[e("label",q,[e("input",y({type:"checkbox",id:"checkbox_actual",value:l.modelValue,disabled:l.disabled},t.$attrs,{tabindex:"-1",onChange:s[0]||(s[0]=c=>n(c.target.checked)),class:"sr-only"}),null,16,B),e("span",D,g(l.label),1),e("div",I,[e("span",{class:v([l.modelValue?"bg-green-500":"bg-gray-300","relative h-full flex inset-0 rounded-full transition"])},null,2),e("span",{class:v([l.modelValue?"start-6":"start-0","absolute inset-y-0 m-1 h-6 w-6 rounded-full bg-white transition-all"])},null,2)])])],16,N))}});const f=l=>(A("data-v-bf833033"),l=l(),O(),l),L={class:"w-full h-full flex flex-col items-center p-4"},H={class:"max-w-lg space-y-4 pb-48"},K=f(()=>e("header",null,[e("h1",{class:"font-bold"},"Settings")],-1)),z={class:"card card_padding"},E=f(()=>e("h2",null,"General",-1)),G={class:"card card_padding"},R=f(()=>e("h2",null,"Color Mode",-1)),F={key:0},J={class:"card card_padding"},Q=f(()=>e("h2",null,"App Details",-1)),W=["innerHTML"],X={key:0},Y={key:1,class:"inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer"},Z={__name:"settings",setup(l){const b=x(),o=$();C(!1);function m(){return new Promise(async(n,t)=>{b.open(P,{context_ui:"modal"},[{callback:s=>{console.log("color modal callback selectedColorMode: %O",s),b.close(),n("Success")}}])})}return(n,t)=>{const s=U,c=j,S=M;return u(),p("div",L,[e("main",H,[K,e("section",z,[E,r(s,{modelValue:i(o).useMotionSensors,"onUpdate:modelValue":t[0]||(t[0]=a=>i(o).useMotionSensors=a),label:"Use Motion Sensors"},null,8,["modelValue"]),r(s,{modelValue:i(o).antialiasing,"onUpdate:modelValue":t[1]||(t[1]=a=>i(o).antialiasing=a),label:"Anti-aliasing"},null,8,["modelValue"]),r(s,{modelValue:i(o).showStats,"onUpdate:modelValue":t[2]||(t[2]=a=>i(o).showStats=a),label:"Show stats"},null,8,["modelValue"]),r(s,{modelValue:i(o).simulateSlowServer,"onUpdate:modelValue":t[3]||(t[3]=a=>i(o).simulateSlowServer=a),label:"Simulate Slow Server"},null,8,["modelValue"])]),e("section",G,[R,r(c,{placeholder:"...",tag:"span"},{default:_(()=>[d(" Color mode: "),e("b",null,g(n.$colorMode.preference),1),n.$colorMode.preference==="system"?(u(),p("span",F,[d(" ("),e("i",null,g(n.$colorMode.value),1),d(" mode detected)")])):h("",!0)]),_:1}),e("div",{onClick:t[4]||(t[4]=a=>m()),class:"btnapp btn_small text-center hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap"},"Change Color Mode")]),e("section",J,[Q,r(S,{to:"/privacy",class:"btnapp"},{default:_(()=>[d("Privacy Policy")]),_:1}),e("div",null,[d(" App version: "),e("span",{innerHTML:i(o).app.version},null,8,W),d(" ("+g(i(o).app.type)+") ",1)]),i(o).app.subtype=="android"?(u(),p("div",X,[e("button",{onClick:t[5]||(t[5]=a=>n.$openAndroid("ApplicationDetails")),class:"inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer"}," Open App Details "),e("button",{onClick:t[6]||(t[6]=a=>n.$openAppStore()),class:"inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer"}," Open App Store ")])):h("",!0),i(o).app.subtype=="iOS"?(u(),p("div",Y,[e("button",{onClick:t[7]||(t[7]=a=>n.$openIOS("App"))}," Open App Details "),e("button",{onClick:t[8]||(t[8]=a=>n.$openAppStore()),class:"inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer"}," Open App Store ")])):h("",!0)])])])}}},oe=V(Z,[["__scopeId","data-v-bf833033"]]);export{oe as default};
