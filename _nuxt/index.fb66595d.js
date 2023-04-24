import{a as h,o as l,c as x,w as a,f as s,q as v,m as g,e as c,k as e,x as i,u,l as S,y as _,j as r,z as j,s as k,v as B}from"./entry.2820cbf6.js";const D={},N=s("h1",{class:"p-1.5 text-3xl font-bold uppercase hover:scale-110 transition-transform"}," Pictodice ",-1);function z(n,d){const m=v;return l(),x(m,{to:"/"},{default:a(()=>[N]),_:1})}const C=h(D,[["render",z]]);const b=n=>(k("data-v-6e5b8071"),n=n(),B(),n),I={id:"indexWrapper",class:"w-full h-full app-padding-x flex flex-col items-center overflow-auto"},P={class:"h-1/3 p-8 flex justify-center items-center"},R={class:"w-full max-w-4xl pb-48"},V={class:"w-full flex flex-col sm:flex-row sm:justify-center"},$={delay:700,class:"card card_padding flex-1 flex justify-end items-center mb-4 sm:mr-4"},L={class:"flex-1 mb-4 flex transition hover:scale-105 space-x-4 p-4 pb-8 sm:p-12"},q={delay:500,class:"card card_padding flex-1 flex justify-end items-center mb-4"},A={class:"flex-1 relative flex items-end"},E={key:0},T={class:"mb-4 p-6 md:p-12 transition hover:scale-105"},W={class:"relative flex items-center"},F={class:"btn_large w-full -right-14 sm:-right-18 absolute z-0",style:{"padding-right":"1em"}},G=b(()=>s("span",{class:"invisible"},"-",-1)),H={key:1},J=b(()=>s("div",{class:"border-2 border-[color:var(--color-primary)] hover:bg-white hover:scale-105 transition-all border-dashed mb-8 p-10 flex-1 flex flex-col justify-center items-center"},[s("div",{class:"text-7xl font-bold"},"?"),s("div",{class:"whitespace-nowrap"},"Select a Preset")],-1)),K={class:"w-full flex flex-col sm:flex-row sm:justify-center"},M={delay:700,class:"flex-1 card card_padding mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center overflow-hidden"},O={class:"mb-4 flex transition hover:scale-105 space-x-6 p-6"},Q={class:"flex items-end pr-6 border-r border-[color:var(--color-primary)]"},U={class:"flex items-end pr-6 border-r border-[color:var(--color-primary)]"},X={class:"flex items-end"},Y={delay:1900,class:"flex-1 card card_padding flex justify-center items-center"},Z={class:"mb-2 flex justify-center transition hover:scale-105 space-x-4 p-4"},ee={__name:"index",setup(n){const d=g();return(m,se)=>{const w=C,t=j,o=v,f=_("motion-slide-left"),y=_("motion-slide-right"),p=_("motion-slide-bottom");return l(),c("div",I,[s("div",P,[e(w,{tabindex:"0"})]),s("nav",R,[s("div",V,[i((l(),c("section",$,[e(o,{to:"/roll?classic",class:"flex-1 flex flex-col items-center",tabindex:"-1"},{default:a(()=>[s("div",L,[e(t,{name:"die",class:"w-12 h-auto"}),e(t,{name:"die",class:"w-12 h-auto"})])]),_:1}),e(o,{to:"/roll?classic",class:"btnapp btn_large hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap"},{default:a(()=>[r(" Roll Classic ")]),_:1})])),[[f]]),i((l(),c("section",q,[s("div",A,[u(d).currentDiceSet!=0?(l(),c("div",E,[e(o,{to:{name:"Roll"},class:"flex flex-col items-center z-50",tabindex:"-1"},{default:a(()=>[s("div",T,[e(t,{name:"die",class:"w-16 h-auto"})])]),_:1}),s("div",W,[e(o,{to:{name:"Roll"},class:"z-50 btnapp btn_large uppercase hover:scale-105 transition cursor-pointer"},{default:a(()=>[r(" Roll Preset ")]),_:1}),i((l(),c("div",F,[u(d).currentDiceSet!=0?(l(),x(o,{key:0,to:{name:"Sets"},class:"w-full flex-1 ml-4 flex justify-end rounded-full bg-white group hover:translate-x-2 transition-transform",style:{padding:"0.8em"}},{default:a(()=>[G,e(t,{name:"gear",class:"w-5 sm:w-6 h-auto transform scale-125 group-hover:scale-150 transition-transform"})]),_:1})):S("",!0)])),[[f]])])])):(l(),c("div",H,[e(o,{to:{name:"Sets"},class:"flex flex-col items-center z-50",tabindex:"-1"},{default:a(()=>[J]),_:1}),e(o,{to:{name:"Sets"},class:"btnapp btn_large hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap"},{default:a(()=>[r(" Roll Preset ")]),_:1})]))])])),[[y]])]),s("div",K,[i((l(),c("section",M,[e(o,{to:{name:"Sets"},class:"flex-1 flex flex-col justify-end items-center",tabindex:"-1"},{default:a(()=>[s("div",O,[s("div",Q,[s("div",null,[e(t,{name:"die",class:"w-6 h-auto"}),e(t,{name:"die",class:"w-6 h-auto"})]),s("div",null,[e(t,{name:"die",class:"w-6 h-auto"}),e(t,{name:"die",class:"w-6 h-auto"})])]),s("div",U,[e(t,{name:"die",class:"w-10 h-auto"}),e(t,{name:"die",class:"w-10 h-auto"})]),s("div",X,[s("div",null,[e(t,{name:"die",class:"w-6 h-auto"}),e(t,{name:"die",class:"w-6 h-auto"})]),s("div",null,[e(t,{name:"die",class:"w-6 h-auto"}),e(t,{name:"die",class:"w-6 h-auto"})]),e(t,{name:"die",class:"w-6 h-auto"})])])]),_:1}),e(o,{to:{name:"Sets"},class:"btnapp btn_small hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap"},{default:a(()=>[r(" Browse Dice Sets ")]),_:1})])),[[p]]),i((l(),c("section",Y,[e(o,{to:{name:"Sets"},class:"flex-1 flex flex-col justify-end items-center",tabindex:"-1"},{default:a(()=>[s("div",Z,[e(t,{name:"pencil",class:"w-20 h-auto"})])]),_:1}),e(o,{to:{name:"Sets"},class:"btnapp btn_small hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap"},{default:a(()=>[r(" Create Custom Dice ")]),_:1})])),[[p]])])])])}}},ae=h(ee,[["__scopeId","data-v-6e5b8071"]]);export{ae as default};
