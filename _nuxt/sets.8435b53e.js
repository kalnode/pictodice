import{a as j,b as C,E as N,J as F,B as I,P,o as l,e as d,u as O,c as $,w as h,i as k,f as y,t as S,j as V,h as x,F as T,C as E,M as L,l as M,p as W,m as z,Q as A}from"./entry.eb383ce5.js";import{_ as D}from"./StaggeredTransition.af07acda.js";import{_ as H}from"./client-only.85c1de55.js";const J=u=>(W("data-v-ed738fde"),u=u(),z(),u),Q={class:"flex items-center space-x-4 text-lg md:text-xl"},U={key:0},q=J(()=>y("span",{class:"group-hover:opacity-50"},"<<",-1)),G={class:"underline"},K={key:1},R={key:0,class:"text-xs"},X={__name:"Breadcrumbs",setup(u){const v=C(),p=N([]),g=N("mobile");F(async()=>{g!="mobile"&&await f(I())}),P(async a=>{g!="mobile"&&await f(a)});async function f(a){let n=a.path,e=[];do e.push(n),n=n.substring(0,n.lastIndexOf("/"));while(n.includes("/"));n.length&&e.push(n),e=e.reverse();let t=a.name,c=[];do c.push(t),t=t.substring(0,t.lastIndexOf("-"));while(t.includes("-"));t.length&&c.push(t),c=c.reverse();let i=[{path:"/",title:"Home",active:!0}];for(let s=0;s<c.length;s++){let o=c[s];await m(a.matched,"name","path",o).then(_=>{let r=_.meta.breadcrumb??_.meta.title??"what";const B=/\%.+\%/g,w=r.match(B);if(w){const b=w[0].substring(1,w[0].length-1);b&&r&&a.params[b]&&(r=r.replace(B,a.params[b]))}i.push({path:e[s],title:r,active:a.name!=o})}).catch(_=>{console.log("error %O",_)})}p.value=i}async function m(a,n,e,t){return new Promise(async(c,i)=>{var r;let s;for(var o of a)if(o[n]==t&&(s=o),(o[e].startsWith("/")?o[e].substr(1):o[e])==t&&(s=o),(r=o.children)!=null&&r.length){var _=await m(o.children,n,e,t);_&&(s=_)}c(s)})}return(a,n)=>{const e=M,t=D,c=H;return l(),d("div",Q,[O(v).device.viewport.context=="narrow"?(l(),d("div",U,[p.value.at(-2)?(l(),$(e,{key:0,to:p.value.at(-2).path,class:"link group",style:{"text-decoration":"none !important"}},{default:h(()=>[q,k(),y("span",G,S(p.value.at(-2).title),1)]),_:1},8,["to"])):V("",!0)])):(l(),d("div",K,[x(c,null,{default:h(()=>[x(t,{animType:"slideRight",duration:100,tag:"div",class:"flex flex-wrap space-x-1"},{default:h(()=>[(l(!0),d(T,null,E(p.value,(i,s)=>(l(),d("div",{key:"crumb-"+s,class:"flex items-center space-x-1"},[s>0?(l(),d("div",R,"/")):V("",!0),x(e,{to:i.active?i.path:null,class:L([i.active?"":"disabled","link"])},{default:h(()=>[k(S(i.title),1)]),_:2},1032,["to","class"])]))),128))]),_:1})]),_:1})]))])}}},Y=j(X,[["__scopeId","data-v-ed738fde"]]),Z={class:"w-full h-full flex justify-center overflow-hidden"},ee={class:"w-full flex flex-col items-center"},ne={__name:"sets",setup(u){const v=I();return(p,g)=>{const f=Y,m=A;return l(),d("div",Z,[y("div",ee,[x(f,{class:"app-width-max w-full my-4"}),(l(),$(m,{key:"subview-"+O(v).name}))])])}}};export{ne as default};
