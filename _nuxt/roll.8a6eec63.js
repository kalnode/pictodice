import{_ as f}from"./threeDcanvas.3a99cb19.js";import{_ as p}from"./client-only.cae2d700.js";import{A as d,m as v,B as x,e as a,k as o,w as c,T as y,o as l,u as e,C as b,f as h,l as g}from"./entry.2820cbf6.js";const k={class:"w-full h-full flex justify-center items-center"},D={__name:"roll",setup(w){const s=d(),t=v(),{$event:i}=x();function u(){i("rollDice")}return(A,n)=>{const m=f,_=p;return l(),a("div",k,[o(_,null,{default:c(()=>[o(m,{rollOnMount:!0,Objects:e(s).query.set&&e(s).query.set=="classic"?e(t).diceSets[0].dies.map(r=>e(t).dice[r]):e(t).currentDice},null,8,["Objects"])]),_:1}),o(y,{name:"fade"},{default:c(()=>[e(t).rolling?g("",!0):(l(),a("div",{key:0,class:"absolute mb-6 pointer-events-auto z-50 flex justify-center",style:b("bottom:"+(e(t).safeAreaInset.bottom+e(t).safeAreaPadding)+"px")},[h("div",{onClick:n[0]||(n[0]=r=>u()),class:"p-4 px-8 rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"ROLL")],4))]),_:1})])}}};export{D as default};
