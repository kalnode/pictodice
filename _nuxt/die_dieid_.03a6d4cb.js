import{_ as v}from"./StaggeredTransition.017461f4.js";import{_ as b}from"./client-only.d32bc7f7.js";import{a as w,E as k,G as S,m as j,e as i,f as e,t as l,u as s,k as p,w as n,x as B,c as D,q as N,o,F as R,h as C,D as I,l as u,j as m,s as T,v as V,z as F,y as L}from"./entry.c171b81d.js";const r=c=>(T("data-v-65f6f111"),c=c(),V(),c),z={class:"w-full h-full relative flex flex-col items-center overflow-auto"},E={class:"app-width-max app-padding-x app-padding-x w-full my-8 flex items-end"},G={class:"text-3xl font-bold"},U={class:"app-width-max app-padding-x w-full flex flex-col md:flex-row"},q={class:"flex-1 diceSet_column card card_padding flex justify-center items-center mb-24"},A={class:"flex items-center mb-2 md:mb-8"},P=r(()=>e("h2",{class:"text-3xl font-bold mr-4"},"Faces",-1)),$={class:"opacity-70"},H=["data-index"],J={class:"w-48 py-8 pb-4 flex flex-col justify-center items-center"},K={key:0,class:"w-full h-full flex justify-center items-center"},M={key:1,class:"w-full h-full flex justify-center items-center"},O=["src"],Q={key:0,class:"w-full p-4 rounded text-lg bg-gray-100"},W={class:"flex justify-between"},X=r(()=>e("div",{class:"border border-black w-10 h-10 p-1 rounded-full"},"=",-1)),Y=r(()=>e("div",null,"BG Color: []",-1)),Z={class:"relative flex justify-end items-center my-3"},ee={__name:"die[dieid]",setup(c){k();const a=S(),d=j(),f=F();return(te,se)=>{const h=v,x=b,y=N,g=L("motion-slide-bottom");return o(),i("div",z,[e("header",E,[e("h1",G,"Die #"+l(s(a).params.dieid),1)]),e("main",U,[e("section",q,[e("header",A,[P,e("h3",$,"("+l(s(d).diceSets[s(a).params.setid].dies.length)+")",1)]),p(x,null,{default:n(()=>[p(h,{animType:"slideUp",duration:50,tag:"div",class:"w-full h-full gap-4 grid auto-rows-min justify-center",style:{"grid-template-columns":"repeat(auto-fit, minmax(16rem, auto))"}},{default:n(()=>[(o(!0),i(R,null,C(s(d).dice[s(a).params.dieid].faces,(t,_)=>(o(),i("div",{key:"face-"+_,"data-index":_,class:"flex justify-center"},[e("div",J,[e("div",{class:"rounded-lg border-2 border-[color:var(--color-primary)] hover:bg-white hover:bg-opacity-60 transition w-48 h-48 overflow-hidden",style:I([t.text_color?"color: "+t.text_color:"color: black",t.bg_color?"background-color: "+t.bg_color:"background-color: white"])},[t.type=="text"?(o(),i("div",K,l(t.text_src),1)):t.type=="image"?(o(),i("div",M,[e("img",{src:s(f).app.baseURL+"images/"+t.image_src},null,8,O)])):u("",!0)],4),s(d).dice[s(a).params.dieid].type=="custom"?(o(),i("div",Q,[e("div",W,[m("Type: "+l(t.type),1),X]),Y])):u("",!0)])],8,H))),128))]),_:1})]),_:1}),e("div",Z,[B((o(),D(y,{to:"/sets/"+s(a).params.setid,class:"btnapp btn_large uppercase"},{default:n(()=>[m(" Back to Set ")]),_:1},8,["to"])),[[g]])])])])])}}},ce=w(ee,[["__scopeId","data-v-65f6f111"]]);export{ce as default};
