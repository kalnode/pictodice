import{J as bl,K as mn,z as wl,b as El,r as Tl,A as Al,L as Cl,o as Ji,e as Qi,f as mt,h as Fs,w as Os,u as Pl,j as Bs,T as Gs,v as Ll}from"./entry.4d104afe.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="151",Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,Yr=1,Dl=2,Oa=1,Ba=2,zi=3,Sn=0,St=1,Wt=2,Mn=0,gi=1,$r=2,Zr=3,Kr=4,Il=5,fi=100,Ul=101,Nl=102,Jr=103,Qr=104,zl=200,Fl=201,Ol=202,Bl=203,Ga=204,ka=205,Gl=206,kl=207,Vl=208,Hl=209,Wl=210,ql=0,jl=1,Xl=2,Er=3,Yl=4,$l=5,Zl=6,Kl=7,Ur=0,Jl=1,Ql=2,fn=0,ec=1,tc=2,nc=3,ic=4,sc=5,Va=300,xi=301,yi=302,Tr=303,Ar=304,Cs=306,Cr=1e3,qt=1001,Pr=1002,yt=1003,eo=1004,ks=1005,Ft=1006,rc=1007,Vi=1008,Gn=1009,oc=1010,ac=1011,Ha=1012,lc=1013,zn=1014,Fn=1015,Hi=1016,cc=1017,hc=1018,vi=1020,uc=1021,jt=1023,dc=1024,fc=1025,On=1026,Mi=1027,pc=1028,mc=1029,gc=1030,vc=1031,_c=1033,Vs=33776,Hs=33777,Ws=33778,qs=33779,to=35840,no=35841,io=35842,so=35843,xc=36196,ro=37492,oo=37496,ao=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,_o=37818,xo=37819,yo=37820,Mo=37821,js=36492,yc=36283,So=36284,bo=36285,wo=36286,kn=3e3,je=3001,Mc=3200,Sc=3201,Nr=0,bc=1,Qt="srgb",Wi="srgb-linear",Wa="display-p3",Xs=7680,wc=519,Eo=35044,To="300 es",Lr=1035;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Bi=Math.PI/180,qi=180/Math.PI;function bi(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[l&255]+ft[l>>8&255]+ft[l>>16&255]+ft[l>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function gt(l,e,t){return Math.max(e,Math.min(t,l))}function zr(l,e){return(l%e+e)%e}function Ec(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}function Tc(l,e,t){return l!==e?(t-l)/(e-l):0}function Gi(l,e,t){return(1-t)*l+t*e}function Ac(l,e,t,n){return Gi(l,e,1-Math.exp(-t*n))}function Cc(l,e=1){return e-Math.abs(zr(l,e*2)-e)}function Pc(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function Lc(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function Rc(l,e){return l+Math.floor(Math.random()*(e-l+1))}function Dc(l,e){return l+Math.random()*(e-l)}function Ic(l){return l*(.5-Math.random())}function Uc(l){l!==void 0&&(Ao=l);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nc(l){return l*Bi}function zc(l){return l*qi}function Rr(l){return(l&l-1)===0&&l!==0}function Fc(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function qa(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function Oc(l,e,t,n,i){const s=Math.cos,o=Math.sin,r=s(t/2),a=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":l.set(r*h,a*d,a*u,r*c);break;case"YZY":l.set(a*u,r*h,a*d,r*c);break;case"ZXZ":l.set(a*d,a*u,r*h,r*c);break;case"XZX":l.set(r*h,a*g,a*p,r*c);break;case"YXY":l.set(a*p,r*h,a*g,r*c);break;case"ZYZ":l.set(a*g,a*p,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fi(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Et(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const es={DEG2RAD:Bi,RAD2DEG:qi,generateUUID:bi,clamp:gt,euclideanModulo:zr,mapLinear:Ec,inverseLerp:Tc,lerp:Gi,damp:Ac,pingpong:Cc,smoothstep:Pc,smootherstep:Lc,randInt:Rc,randFloat:Dc,randFloatSpread:Ic,seededRandom:Uc,degToRad:Nc,radToDeg:zc,isPowerOfTwo:Rr,ceilPowerOfTwo:Fc,floorPowerOfTwo:qa,setQuaternionFromProperEuler:Oc,normalize:Et,denormalize:Fi};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],a=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],_=i[1],x=i[4],M=i[7],S=i[2],C=i[5],L=i[8];return s[0]=o*v+r*_+a*S,s[3]=o*m+r*x+a*C,s[6]=o*f+r*M+a*L,s[1]=c*v+h*_+d*S,s[4]=c*m+h*x+d*C,s[7]=c*f+h*M+d*L,s[2]=u*v+p*_+g*S,s[5]=u*m+p*x+g*C,s[8]=u*f+p*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-n*s*h+n*r*a+i*s*c-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],c=e[7],h=e[8],d=h*o-r*c,u=r*a-h*s,p=c*s-o*a,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(r*n-i*o)*v,e[3]=u*v,e[4]=(h*t-i*a)*v,e[5]=(i*s-r*t)*v,e[6]=p*v,e[7]=(n*a-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*o+c*r)+o+e,-i*c,i*a,-i*(-c*o+a*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new ze;function ja(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function ji(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function _i(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function $s(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Bc=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Gc=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kc(l){return l.convertSRGBToLinear().applyMatrix3(Gc)}function Vc(l){return l.applyMatrix3(Bc).convertLinearToSRGB()}const Hc={[Wi]:l=>l,[Qt]:l=>l.convertSRGBToLinear(),[Wa]:kc},Wc={[Wi]:l=>l,[Qt]:l=>l.convertLinearToSRGB(),[Wa]:Vc},Pt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(l){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!l},get workingColorSpace(){return Wi},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.enabled===!1||e===t||!e||!t)return l;const n=Hc[e],i=Wc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(l))},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}};let $n;class Xa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=ji("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ya{constructor(e=null){this.isSource=!0,this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Zs(i[o].image)):s.push(Zs(i[o]))}else s=Zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zs(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Xa.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qc=0;class bt extends qn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=qt,i=qt,s=Ft,o=Vi,r=jt,a=Gn,c=bt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=bi(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=a,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Va;bt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,c=a[0],h=a[4],d=a[8],u=a[1],p=a[5],g=a[9],v=a[2],m=a[6],f=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,S=(f+1)/2,C=(h+u)/4,L=(d+v)/4,I=(g+m)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=L/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=I/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=I/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends qn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $a extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(r===0){e[t+0]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||a!==u||c!==p||h!==g){let m=1-r;const f=a*u+c*p+h*g+d*v,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,f*_);m=Math.sin(m*C)/S,r=Math.sin(r*C)/S}const M=r*_;if(a=a*m+u*M,c=c*m+p*M,h=h*m+g*M,d=d*m+v*M,m===1-r){const S=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=S,c*=S,h*=S,d*=S}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=r*g+h*d+a*p-c*u,e[t+1]=a*g+h*u+c*d-r*p,e[t+2]=c*g+h*p+r*u-a*d,e[t+3]=h*g-r*d-a*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,a=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),u=a(n/2),p=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],a=t[9],c=t[2],h=t[6],d=t[10],u=n+r+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>r&&n>d){const p=2*Math.sqrt(1+n-r-d);this._w=(h-a)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(r>d){const p=2*Math.sqrt(1+r-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+d-n-r);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+o*r+i*c-s*a,this._y=i*h+o*a+s*r-n*c,this._z=s*h+o*c+n*a-i*r,this._w=o*h-n*r-i*a-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-r*r;if(a<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,a=e.w,c=a*t+o*i-r*n,h=a*n+r*t-s*i,d=a*i+s*n-o*t,u=-s*t-o*n-r*i;return this.x=c*a+u*-s+h*-r-d*-o,this.y=h*a+u*-o+d*-s-c*-r,this.z=d*a+u*-r+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,a=t.z;return this.x=i*a-s*r,this.y=s*o-n*a,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new F,Co=new Hn;class $i{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox),Zn.applyMatrix4(e.matrixWorld),this.union(Zn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,r=s.count;o<r;o++)nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else i.boundingBox===null&&i.computeBoundingBox(),Zn.copy(i.boundingBox),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),ts.subVectors(this.max,Ti),Kn.subVectors(e.a,Ti),Jn.subVectors(e.b,Ti),Qn.subVectors(e.c,Ti),gn.subVectors(Jn,Kn),vn.subVectors(Qn,Jn),Cn.subVectors(Kn,Qn);let t=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-Cn.z,Cn.y,gn.z,0,-gn.x,vn.z,0,-vn.x,Cn.z,0,-Cn.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-Cn.y,Cn.x,0];return!Js(t,Kn,Jn,Qn,ts)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,Kn,Jn,Qn,ts))?!1:(ns.crossVectors(gn,vn),t=[ns.x,ns.y,ns.z],Js(t,Kn,Jn,Qn,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new F,new F,new F,new F,new F,new F,new F,new F],nn=new F,Zn=new $i,Kn=new F,Jn=new F,Qn=new F,gn=new F,vn=new F,Cn=new F,Ti=new F,ts=new F,ns=new F,Pn=new F;function Js(l,e,t,n,i){for(let s=0,o=l.length-3;s<=o;s+=3){Pn.fromArray(l,s);const r=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),a=e.dot(Pn),c=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>r)return!1}return!0}const Xc=new $i,Ai=new F,Qs=new F;class Fr{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Qs)),this.expandByPoint(Ai.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new F,er=new F,is=new F,_n=new F,tr=new F,ss=new F,nr=new F;let Yc=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){er.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(er);const s=e.distanceTo(t)*.5,o=-this.direction.dot(is),r=_n.dot(this.direction),a=-_n.dot(is),c=_n.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*a-r,u=o*r-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+o*u+2*r)+u*(o*d+u+2*a)+c}else u=s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+c;else u=-s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+c;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+c):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(er).addScaledVector(is,u),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,a=n+o;return a<0?null:r<0?this.at(a,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||r>i)||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,s){tr.subVectors(t,e),ss.subVectors(n,e),nr.crossVectors(tr,ss);let o=this.direction.dot(nr),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;_n.subVectors(this.origin,e);const a=r*this.direction.dot(ss.crossVectors(_n,ss));if(a<0)return null;const c=r*this.direction.dot(tr.cross(_n));if(c<0||a+c>o)return null;const h=-r*_n.dot(nr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,a,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=r,f[13]=a,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),s=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*d,g=r*h,v=r*d;t[0]=a*h,t[4]=-a*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-r*a,t[2]=v-u*c,t[6]=g+p*c,t[10]=o*a}else if(e.order==="YXZ"){const u=a*h,p=a*d,g=c*h,v=c*d;t[0]=u+v*r,t[4]=g*r-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=p*r-g,t[6]=v+u*r,t[10]=o*a}else if(e.order==="ZXY"){const u=a*h,p=a*d,g=c*h,v=c*d;t[0]=u-v*r,t[4]=-o*d,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*h,t[9]=v-u*r,t[2]=-o*c,t[6]=r,t[10]=o*a}else if(e.order==="ZYX"){const u=o*h,p=o*d,g=r*h,v=r*d;t[0]=a*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=a*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=r*a,t[10]=o*a}else if(e.order==="YZX"){const u=o*a,p=o*c,g=r*a,v=r*c;t[0]=a*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*a,p=o*c,g=r*a,v=r*c;t[0]=a*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=r*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($c,e,Zc)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),xn.crossVectors(n,Lt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),xn.crossVectors(n,Lt)),xn.normalize(),rs.crossVectors(Lt,xn),i[0]=xn.x,i[4]=rs.x,i[8]=Lt.x,i[1]=xn.y,i[5]=rs.y,i[9]=Lt.y,i[2]=xn.z,i[6]=rs.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],a=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],_=n[3],x=n[7],M=n[11],S=n[15],C=i[0],L=i[4],I=i[8],b=i[12],E=i[1],B=i[5],V=i[9],P=i[13],R=i[2],U=i[6],z=i[10],J=i[14],G=i[3],q=i[7],te=i[11],ue=i[15];return s[0]=o*C+r*E+a*R+c*G,s[4]=o*L+r*B+a*U+c*q,s[8]=o*I+r*V+a*z+c*te,s[12]=o*b+r*P+a*J+c*ue,s[1]=h*C+d*E+u*R+p*G,s[5]=h*L+d*B+u*U+p*q,s[9]=h*I+d*V+u*z+p*te,s[13]=h*b+d*P+u*J+p*ue,s[2]=g*C+v*E+m*R+f*G,s[6]=g*L+v*B+m*U+f*q,s[10]=g*I+v*V+m*z+f*te,s[14]=g*b+v*P+m*J+f*ue,s[3]=_*C+x*E+M*R+S*G,s[7]=_*L+x*B+M*U+S*q,s[11]=_*I+x*V+M*z+S*te,s[15]=_*b+x*P+M*J+S*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],a=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*a*d-i*c*d-s*r*u+n*c*u+i*r*p-n*a*p)+v*(+t*a*p-t*c*u+s*o*u-i*o*p+i*c*h-s*a*h)+m*(+t*c*d-t*r*p-s*o*d+n*o*p+s*r*h-n*c*h)+f*(-i*r*h-t*a*d+t*r*u+i*o*d-n*o*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*c-v*u*c+v*a*p-r*m*p-d*a*f+r*u*f,x=g*u*c-h*m*c-g*a*p+o*m*p+h*a*f-o*u*f,M=h*v*c-g*d*c+g*r*p-o*v*p-h*r*f+o*d*f,S=g*d*a-h*v*a-g*r*u+o*v*u+h*r*m-o*d*m,C=t*_+n*x+i*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=_*L,e[1]=(v*u*s-d*m*s-v*i*p+n*m*p+d*i*f-n*u*f)*L,e[2]=(r*m*s-v*a*s+v*i*c-n*m*c-r*i*f+n*a*f)*L,e[3]=(d*a*s-r*u*s-d*i*c+n*u*c+r*i*p-n*a*p)*L,e[4]=x*L,e[5]=(h*m*s-g*u*s+g*i*p-t*m*p-h*i*f+t*u*f)*L,e[6]=(g*a*s-o*m*s-g*i*c+t*m*c+o*i*f-t*a*f)*L,e[7]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*p+t*a*p)*L,e[8]=M*L,e[9]=(g*d*s-h*v*s-g*n*p+t*v*p+h*n*f-t*d*f)*L,e[10]=(o*v*s-g*r*s+g*n*c-t*v*c-o*n*f+t*r*f)*L,e[11]=(h*r*s-o*d*s-h*n*c+t*d*c+o*n*p-t*r*p)*L,e[12]=S*L,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*m+t*d*m)*L,e[14]=(g*r*i-o*v*i-g*n*a+t*v*a+o*n*m-t*r*m)*L,e[15]=(o*d*i-h*r*i+h*n*a-t*d*a-o*n*u+t*r*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,a=e.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*a,c*a+i*r,0,c*r+i*a,h*r+n,h*a-i*o,0,c*a-i*r,h*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,a=t._w,c=s+s,h=o+o,d=r+r,u=s*c,p=s*h,g=s*d,v=o*h,m=o*d,f=r*d,_=a*c,x=a*h,M=a*d,S=n.x,C=n.y,L=n.z;return i[0]=(1-(v+f))*S,i[1]=(p+M)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-M)*C,i[5]=(1-(u+f))*C,i[6]=(m+_)*C,i[7]=0,i[8]=(g+x)*L,i[9]=(m-_)*L,i[10]=(1-(u+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ei.set(i[0],i[1],i[2]).length();const o=ei.set(i[4],i[5],i[6]).length(),r=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);const c=1/s,h=1/o,d=1/r;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,a=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),p=-2*o*s/(o-s);return r[0]=a,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,a=1/(t-e),c=1/(n-i),h=1/(o-s),d=(t+e)*a,u=(n+i)*c,p=(o+s)*h;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new F,Bt=new rt,$c=new F(0,0,0),Zc=new F(1,1,1),xn=new F,rs=new F,Lt=new F,Po=new rt,Lo=new Hn;class Ps{constructor(e=0,t=0,n=0,i=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],a=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kc=0;const Ro=new F,ti=new Hn,rn=new rt,os=new F,Ci=new F,Jc=new F,Qc=new Hn,Do=new F(1,0,0),Io=new F(0,1,0),Uo=new F(0,0,1),eh={type:"added"},No={type:"removed"};class At extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new Ps,n=new Hn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ci,os,this.up):rn.lookAt(os,Ci,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(No)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(No)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Jc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,a){return r[a.uuid]===void 0&&(r[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const a=r.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let a=0,c=this.material.length;a<c;a++)r.push(s(e.materials,this.material[a]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const a=this.animations[r];i.animations.push(s(e.animations,a))}}if(t){const r=o(e.geometries),a=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const a=[];for(const c in r){const h=r[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new F,on=new F,ir=new F,an=new F,ni=new F,ii=new F,zo=new F,sr=new F,rr=new F,or=new F;let as=!1;class Ht{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gt.subVectors(i,t),on.subVectors(n,t),ir.subVectors(e,t);const o=Gt.dot(Gt),r=Gt.dot(on),a=Gt.dot(ir),c=on.dot(on),h=on.dot(ir),d=o*c-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*a-r*h)*u,g=(o*h-r*a)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,o,r,a){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),this.getInterpolation(e,t,n,i,s,o,r,a)}static getInterpolation(e,t,n,i,s,o,r,a){return this.getBarycoord(e,t,n,i,an),a.setScalar(0),a.addScaledVector(s,an.x),a.addScaledVector(o,an.y),a.addScaledVector(r,an.z),a}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),on.subVectors(e,t),Gt.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Gt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;ni.subVectors(i,n),ii.subVectors(s,n),sr.subVectors(e,n);const a=ni.dot(sr),c=ii.dot(sr);if(a<=0&&c<=0)return t.copy(n);rr.subVectors(e,i);const h=ni.dot(rr),d=ii.dot(rr);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*c;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(ni,o);or.subVectors(e,s);const p=ni.dot(or),g=ii.dot(or);if(g>=0&&p<=g)return t.copy(s);const v=p*c-a*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(ii,r);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return zo.subVectors(s,i),r=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(zo,r);const f=1/(m+v+u);return o=v*f,r=u*f,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let th=0,jn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=gi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ga,this.blendDst=ka,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const a=s[r];delete a.metadata,o.push(a)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},ls={h:0,s:0,l:0};function ar(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=zr(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ar(o,s,e+1/3),this.g=ar(o,s,e),this.b=ar(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Pt.fromWorkingColorSpace(pt.copy(this),e),gt(pt.r*255,0,255)<<16^gt(pt.g*255,0,255)<<8^gt(pt.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,i=pt.g,s=pt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let a,c;const h=(r+o)/2;if(r===o)a=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Qt){Pt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,i=pt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(ls);const n=Gi(kt.h,ls.h,t),i=Gi(kt.s,ls.s,t),s=Gi(kt.l,ls.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Be;Be.NAMES=Ka;class Or extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new F,cs=new Ee;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ja extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qa extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nh=0;const Nt=new rt,lr=new At,si=new F,Rt=new $i,Pi=new $i,ht=new F;class wn extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ja(e)?Qa:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(Rt.min,Pi.min),Rt.expandByPoint(ht),ht.addVectors(Rt.max,Pi.max),Rt.expandByPoint(ht)):(Rt.expandByPoint(Pi.min),Rt.expandByPoint(Pi.max))}Rt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],a=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)ht.fromBufferAttribute(r,c),a&&(si.fromBufferAttribute(e,c),ht.add(si)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*r),4));const a=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<r;E++)c[E]=new F,h[E]=new F;const d=new F,u=new F,p=new F,g=new Ee,v=new Ee,m=new Ee,f=new F,_=new F;function x(E,B,V){d.fromArray(i,E*3),u.fromArray(i,B*3),p.fromArray(i,V*3),g.fromArray(o,E*2),v.fromArray(o,B*2),m.fromArray(o,V*2),u.sub(d),p.sub(d),v.sub(g),m.sub(g);const P=1/(v.x*m.y-m.x*v.y);isFinite(P)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(P),_.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(P),c[E].add(f),c[B].add(f),c[V].add(f),h[E].add(_),h[B].add(_),h[V].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,B=M.length;E<B;++E){const V=M[E],P=V.start,R=V.count;for(let U=P,z=P+R;U<z;U+=3)x(n[U+0],n[U+1],n[U+2])}const S=new F,C=new F,L=new F,I=new F;function b(E){L.fromArray(s,E*3),I.copy(L);const B=c[E];S.copy(B),S.sub(L.multiplyScalar(L.dot(B))).normalize(),C.crossVectors(I,B);const P=C.dot(h[E])<0?-1:1;a[E*4]=S.x,a[E*4+1]=S.y,a[E*4+2]=S.z,a[E*4+3]=P}for(let E=0,B=M.length;E<B;++E){const V=M[E],P=V.start,R=V.count;for(let U=P,z=P+R;U<z;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new F,s=new F,o=new F,r=new F,a=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),r.add(h),a.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(r,a){const c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(a.length*h);let p=0,g=0;for(let v=0,m=a.length;v<m;v++){r.isInterleavedBufferAttribute?p=a[v]*r.data.stride+r.offset:p=a[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Mt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,i=this.attributes;for(const r in i){const a=i[r],c=e(a,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const a=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);a.push(p)}t.morphAttributes[r]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,a=o.length;r<a;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new rt,$t=new Yc,hs=new Fr,Oo=new F,ri=new F,oi=new F,ai=new F,cr=new F,us=new F,ds=new Ee,fs=new Ee,ps=new Ee,Bo=new F,Go=new F,ko=new F,ms=new F,gs=new F;class Tt extends At{constructor(e=new wn,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){us.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const h=r[a],d=s[a];h!==0&&(cr.fromBufferAttribute(d,e),o?us.addScaledVector(cr,h):us.addScaledVector(cr.sub(t),h))}t.add(us)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),$t.copy(e.ray).recast(e.near),hs.containsPoint($t.origin)===!1&&($t.intersectSphere(hs,Oo)===null||$t.origin.distanceToSquared(Oo)>(e.far-e.near)**2))||(Fo.copy(s).invert(),$t.copy(e.ray).applyMatrix4(Fo),n.boundingBox!==null&&$t.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,a=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,u=n.groups,p=n.drawRange;if(r!==null)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=i[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,S=x;M<S;M+=3){const C=r.getX(M),L=r.getX(M+1),I=r.getX(M+2);o=vs(this,f,e,$t,c,h,d,C,L,I),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),v=Math.min(r.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=r.getX(m),x=r.getX(m+1),M=r.getX(m+2);o=vs(this,i,e,$t,c,h,d,_,x,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=i[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,S=x;M<S;M+=3){const C=M,L=M+1,I=M+2;o=vs(this,f,e,$t,c,h,d,C,L,I),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,x=m+1,M=m+2;o=vs(this,i,e,$t,c,h,d,_,x,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function ih(l,e,t,n,i,s,o,r){let a;if(e.side===St?a=n.intersectTriangle(o,s,i,!0,r):a=n.intersectTriangle(i,s,o,e.side===Sn,r),a===null)return null;gs.copy(r),gs.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:l}}function vs(l,e,t,n,i,s,o,r,a,c){l.getVertexPosition(r,ri),l.getVertexPosition(a,oi),l.getVertexPosition(c,ai);const h=ih(l,e,t,n,ri,oi,ai,ms);if(h){i&&(ds.fromBufferAttribute(i,r),fs.fromBufferAttribute(i,a),ps.fromBufferAttribute(i,c),h.uv=Ht.getInterpolation(ms,ri,oi,ai,ds,fs,ps,new Ee)),s&&(ds.fromBufferAttribute(s,r),fs.fromBufferAttribute(s,a),ps.fromBufferAttribute(s,c),h.uv2=Ht.getInterpolation(ms,ri,oi,ai,ds,fs,ps,new Ee)),o&&(Bo.fromBufferAttribute(o,r),Go.fromBufferAttribute(o,a),ko.fromBufferAttribute(o,c),h.normal=Ht.getInterpolation(ms,ri,oi,ai,Bo,Go,ko,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:a,c,normal:new F,materialIndex:0};Ht.getNormal(ri,oi,ai,d.normal),h.face=d}return h}class bn extends wn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(d,2));function g(v,m,f,_,x,M,S,C,L,I,b){const E=M/L,B=S/I,V=M/2,P=S/2,R=C/2,U=L+1,z=I+1;let J=0,G=0;const q=new F;for(let te=0;te<z;te++){const ue=te*B-P;for(let K=0;K<U;K++){const j=K*E-V;q[v]=j*_,q[m]=ue*x,q[f]=R,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[f]=C>0?1:-1,h.push(q.x,q.y,q.z),d.push(K/L),d.push(1-te/I),J+=1}}for(let te=0;te<I;te++)for(let ue=0;ue<L;ue++){const K=u+ue+U*te,j=u+ue+U*(te+1),ee=u+(ue+1)+U*(te+1),re=u+(ue+1)+U*te;a.push(K,j,re),a.push(j,ee,re),G+=6}r.addGroup(p,G,b),p+=G,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(l){const e={};for(const t in l){e[t]={};for(const n in l[t]){const i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(l){const e={};for(let t=0;t<l.length;t++){const n=Si(l[t]);for(const i in n)e[i]=n[i]}return e}function sh(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}function el(l){return l.getRenderTarget()===null&&l.outputEncoding===je?Qt:Wi}const rh={clone:Si,merge:xt};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/a,t-=o.offsetY*n/c,i*=o.width/a,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ci=1;class lh extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(li,ci,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Dt(li,ci,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dt(li,ci,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Dt(li,ci,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const a=new Dt(li,ci,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const c=new Dt(li,ci,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,a,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=fn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class nl extends bt{constructor(e,t,n,i,s,o,r,a,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,s,o,r,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bn(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Mn});s.uniforms.tEquirect.value=t;const o=new Tt(i,s),r=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Ft),new lh(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const hr=new F,hh=new F,uh=new ze;let Dn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hr.subVectors(n,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uh.getNormalMatrix(e),i=this.coplanarPoint(hr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ln=new Fr,_s=new F;class Br{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],c=n[5],h=n[6],d=n[7],u=n[8],p=n[9],g=n[10],v=n[11],m=n[12],f=n[13],_=n[14],x=n[15];return t[0].setComponents(r-i,d-a,v-u,x-m).normalize(),t[1].setComponents(r+i,d+a,v+u,x+m).normalize(),t[2].setComponents(r+s,d+c,v+p,x+f).normalize(),t[3].setComponents(r-s,d-c,v-p,x-f).normalize(),t[4].setComponents(r-o,d-h,v-g,x-_).normalize(),t[5].setComponents(r+o,d+h,v+g,x+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_s.x=i.normal.x>0?e.max.x:e.min.x,_s.y=i.normal.y>0?e.max.y:e.min.y,_s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let l=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){l=s}}}function dh(l,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=l.createBuffer();l.bindBuffer(h,p),l.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,p=h.updateRange;l.bindBuffer(d,c),p.count===-1?l.bufferSubData(d,0,u):(t?l.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):l.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(l.deleteBuffer(h.buffer),n.delete(c))}function a(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:r,update:a}}class Xi extends wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),a=Math.floor(i),c=r+1,h=a+1,d=e/r,u=t/a,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const _=f*u-o;for(let x=0;x<c;x++){const M=x*d-s;g.push(M,-_,0),v.push(0,0,1),m.push(x/r),m.push(1-f/a)}}for(let f=0;f<a;f++)for(let _=0;_<r;_++){const x=_+c*f,M=_+c*(f+1),S=_+1+c*(f+1),C=_+1+c*f;p.push(x,M,C),p.push(M,S,C)}this.setIndex(p),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh="vec3 transformed = vec3( position );",yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,au=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ru=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$u=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,td=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,od=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,md=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ld=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Id=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:fh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:vh,aomap_pars_fragment:_h,begin_vertex:xh,beginnormal_vertex:yh,bsdfs:Mh,iridescence_fragment:Sh,bumpmap_pars_fragment:bh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Ah,color_fragment:Ch,color_pars_fragment:Ph,color_pars_vertex:Lh,color_vertex:Rh,common:Dh,cube_uv_reflection_fragment:Ih,defaultnormal_vertex:Uh,displacementmap_pars_vertex:Nh,displacementmap_vertex:zh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Oh,encodings_fragment:Bh,encodings_pars_fragment:Gh,envmap_fragment:kh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Hh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:nu,envmap_vertex:qh,fog_vertex:jh,fog_pars_vertex:Xh,fog_fragment:Yh,fog_pars_fragment:$h,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:eu,lights_pars_begin:tu,lights_toon_fragment:iu,lights_toon_pars_fragment:su,lights_phong_fragment:ru,lights_phong_pars_fragment:ou,lights_physical_fragment:au,lights_physical_pars_fragment:lu,lights_fragment_begin:cu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:vu,map_particle_fragment:_u,map_particle_pars_fragment:xu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphcolor_vertex:Su,morphnormal_vertex:bu,morphtarget_pars_vertex:wu,morphtarget_vertex:Eu,normal_fragment_begin:Tu,normal_fragment_maps:Au,normal_pars_fragment:Cu,normal_pars_vertex:Pu,normal_vertex:Lu,normalmap_pars_fragment:Ru,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:Iu,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Nu,output_fragment:zu,packing:Fu,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:Gu,dithering_pars_fragment:ku,roughnessmap_fragment:Vu,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:qu,shadowmap_vertex:ju,shadowmask_pars_fragment:Xu,skinbase_vertex:Yu,skinning_pars_vertex:$u,skinning_vertex:Zu,skinnormal_vertex:Ku,specularmap_fragment:Ju,specularmap_pars_fragment:Qu,tonemapping_fragment:ed,tonemapping_pars_fragment:td,transmission_fragment:nd,transmission_pars_fragment:id,uv_pars_fragment:sd,uv_pars_vertex:rd,uv_vertex:od,worldpos_vertex:ad,background_vert:ld,background_frag:cd,backgroundCube_vert:hd,backgroundCube_frag:ud,cube_vert:dd,cube_frag:fd,depth_vert:pd,depth_frag:md,distanceRGBA_vert:gd,distanceRGBA_frag:vd,equirect_vert:_d,equirect_frag:xd,linedashed_vert:yd,linedashed_frag:Md,meshbasic_vert:Sd,meshbasic_frag:bd,meshlambert_vert:wd,meshlambert_frag:Ed,meshmatcap_vert:Td,meshmatcap_frag:Ad,meshnormal_vert:Cd,meshnormal_frag:Pd,meshphong_vert:Ld,meshphong_frag:Rd,meshphysical_vert:Dd,meshphysical_frag:Id,meshtoon_vert:Ud,meshtoon_frag:Nd,points_vert:zd,points_frag:Fd,shadow_vert:Od,shadow_frag:Bd,sprite_vert:Gd,sprite_frag:kd},ae={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},en={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};en.physical={uniforms:xt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const xs={r:0,b:0,g:0};function Vd(l,e,t,n,i,s,o){const r=new Be(0);let a=s===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x));const M=l.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?v(r,a):x&&x.isColor&&(v(x,1),_=!0),(l.autoClear||_)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cs)?(h===void 0&&(h=new Tt(new bn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Si(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=x.encoding!==je,(d!==x||u!==x.version||p!==l.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=l.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Tt(new Xi(2,2),new Wn({name:"BackgroundMaterial",uniforms:Si(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.encoding!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==l.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=l.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(xs,el(l)),n.buffers.color.setClear(xs.r,xs.g,xs.b,f,o)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),a=f,v(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(r,a)},render:g}}function Hd(l,e,t,n){const i=l.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},a=m(null);let c=a,h=!1;function d(R,U,z,J,G){let q=!1;if(o){const te=v(J,z,U);c!==te&&(c=te,p(c.object)),q=f(R,J,z,G),q&&_(R,J,z,G)}else{const te=U.wireframe===!0;(c.geometry!==J.id||c.program!==z.id||c.wireframe!==te)&&(c.geometry=J.id,c.program=z.id,c.wireframe=te,q=!0)}G!==null&&t.update(G,34963),(q||h)&&(h=!1,I(R,U,z,J),G!==null&&l.bindBuffer(34963,t.get(G).buffer))}function u(){return n.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function p(R){return n.isWebGL2?l.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?l.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,U,z){const J=z.wireframe===!0;let G=r[R.id];G===void 0&&(G={},r[R.id]=G);let q=G[U.id];q===void 0&&(q={},G[U.id]=q);let te=q[J];return te===void 0&&(te=m(u()),q[J]=te),te}function m(R){const U=[],z=[],J=[];for(let G=0;G<i;G++)U[G]=0,z[G]=0,J[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:J,object:R,attributes:{},index:null}}function f(R,U,z,J){const G=c.attributes,q=U.attributes;let te=0;const ue=z.getAttributes();for(const K in ue)if(ue[K].location>=0){const ee=G[K];let re=q[K];if(re===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;te++}return c.attributesNum!==te||c.index!==J}function _(R,U,z,J){const G={},q=U.attributes;let te=0;const ue=z.getAttributes();for(const K in ue)if(ue[K].location>=0){let ee=q[K];ee===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),G[K]=re,te++}c.attributes=G,c.attributesNum=te,c.index=J}function x(){const R=c.newAttributes;for(let U=0,z=R.length;U<z;U++)R[U]=0}function M(R){S(R,0)}function S(R,U){const z=c.newAttributes,J=c.enabledAttributes,G=c.attributeDivisors;z[R]=1,J[R]===0&&(l.enableVertexAttribArray(R),J[R]=1),G[R]!==U&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),G[R]=U)}function C(){const R=c.newAttributes,U=c.enabledAttributes;for(let z=0,J=U.length;z<J;z++)U[z]!==R[z]&&(l.disableVertexAttribArray(z),U[z]=0)}function L(R,U,z,J,G,q){n.isWebGL2===!0&&(z===5124||z===5125)?l.vertexAttribIPointer(R,U,z,G,q):l.vertexAttribPointer(R,U,z,J,G,q)}function I(R,U,z,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=J.attributes,q=z.getAttributes(),te=U.defaultAttributeValues;for(const ue in q){const K=q[ue];if(K.location>=0){let j=G[ue];if(j===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const ee=j.normalized,re=j.itemSize,ce=t.get(j);if(ce===void 0)continue;const H=ce.buffer,Te=ce.type,be=ce.bytesPerElement;if(j.isInterleavedBufferAttribute){const oe=j.data,Se=oe.stride,Ge=j.offset;if(oe.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)S(K.location+xe,oe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<K.locationSize;xe++)M(K.location+xe);l.bindBuffer(34962,H);for(let xe=0;xe<K.locationSize;xe++)L(K.location+xe,re/K.locationSize,Te,ee,Se*be,(Ge+re/K.locationSize*xe)*be)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)S(K.location+oe,j.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<K.locationSize;oe++)M(K.location+oe);l.bindBuffer(34962,H);for(let oe=0;oe<K.locationSize;oe++)L(K.location+oe,re/K.locationSize,Te,ee,re*be,re/K.locationSize*oe*be)}}else if(te!==void 0){const ee=te[ue];if(ee!==void 0)switch(ee.length){case 2:l.vertexAttrib2fv(K.location,ee);break;case 3:l.vertexAttrib3fv(K.location,ee);break;case 4:l.vertexAttrib4fv(K.location,ee);break;default:l.vertexAttrib1fv(K.location,ee)}}}}C()}function b(){V();for(const R in r){const U=r[R];for(const z in U){const J=U[z];for(const G in J)g(J[G].object),delete J[G];delete U[z]}delete r[R]}}function E(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const z in U){const J=U[z];for(const G in J)g(J[G].object),delete J[G];delete U[z]}delete r[R.id]}function B(R){for(const U in r){const z=r[U];if(z[R.id]===void 0)continue;const J=z[R.id];for(const G in J)g(J[G].object),delete J[G];delete z[R.id]}}function V(){P(),h=!0,c!==a&&(c=a,p(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function Wd(l,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){l.drawArrays(s,c,h),t.update(h,s,1)}function a(c,h,d){if(d===0)return;let u,p;if(i)u=l,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=a}function qd(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&l.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=l.getParameter(34930),u=l.getParameter(35660),p=l.getParameter(3379),g=l.getParameter(34076),v=l.getParameter(34921),m=l.getParameter(36347),f=l.getParameter(36348),_=l.getParameter(36349),x=u>0,M=o||e.has("OES_texture_float"),S=x&&M,C=o?l.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function jd(l){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Dn,r=new ze,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=l.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,x=_*4;let M=f.clippingState||null;a.value=M,M=h(g,u,x,p);for(let S=0;S!==x;++S)M[S]=t[S];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=a.value,g!==!0||m===null){const f=p+v*4,_=u.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(d[x]).applyMatrix4(_,r),o.normal.toArray(m,M),m[M+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Xd(l){let e=new WeakMap;function t(o,r){return r===Tr?o.mapping=xi:r===Ar&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Tr||r===Ar)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const c=new ch(a.height/2);return c.fromEquirectangularTexture(l,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yd extends tl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,a=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Vo=[.125,.215,.35,.446,.526,.582],Un=20,ur=new Yd,Ho=new Be;let dr=null;const In=(1+Math.sqrt(5))/2,hi=1/In,Wo=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,In,hi),new F(0,In,-hi),new F(hi,0,In),new F(-hi,0,In),new F(In,hi,0),new F(-In,hi,0)];class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Hi,format:jt,encoding:kn,depthBuffer:!1},i=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$d(s)),this._blurMaterial=Zd(s,e,t)}return i}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,n,i){const r=new Dt(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ho),h.toneMapping=fn,h.autoClear=!1;const p=new Or({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Tt(new bn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Ho),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(r.up.set(0,a[f],0),r.lookAt(c[f],0,0)):_===1?(r.up.set(0,0,a[f]),r.lookAt(0,c[f],0)):(r.up.set(0,a[f],0),r.lookAt(0,0,c[f]));const x=this._cubeSize;ys(i,_*x,f>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const a=this._cubeSize;ys(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Wo[(i-1)%Wo.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Tt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Un-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Un;m>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const f=[];let _=0;for(let L=0;L<Un;++L){const I=L/v,b=Math.exp(-I*I/2);f.push(b),L===0?_+=b:L<m&&(_+=2*b)}for(let L=0;L<f.length;L++)f[L]=f[L]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-pi?i-x+pi:0),C=4*(this._cubeSize-M);ys(t,S,C,3*M,2*M),a.setRenderTarget(t),a.render(d,ur)}}function $d(l){const e=[],t=[],n=[];let i=l;const s=l-pi+1+Vo.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let a=1/r;o>l-pi?a=Vo[o-l+pi-1]:o===0&&(a=0),n.push(a);const c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,I=C>2?0:-1,b=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];_.set(b,v*g*C),x.set(u,m*g*C);const E=[C,C,C,C,C,C];M.set(E,f*g*C)}const S=new wn;S.setAttribute("position",new Mt(_,v)),S.setAttribute("uv",new Mt(x,m)),S.setAttribute("faceIndex",new Mt(M,f)),e.push(S),i>pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jo(l,e,t){const n=new Vn(l,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function Zd(l,e,t){const n=new Float32Array(Un),i=new F(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Xo(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yo(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kd(l){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const a=r.mapping,c=a===Tr||a===Ar,h=a===xi||a===yi;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new qo(l)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new qo(l));const u=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let a=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&a++;return a===c}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Jd(l){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qd(l,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],34962)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,M=_.length;x<M;x+=3){const S=_[x+0],C=_[x+1],L=_[x+2];u.push(S,C,C,L,L,S)}}else{const _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const S=x+0,C=x+1,L=x+2;u.push(S,C,C,L,L,S)}}const m=new(ja(u)?Qa:Ja)(u,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:a,getWireframeAttribute:h}}function ef(l,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,a;function c(u){r=u.type,a=u.bytesPerElement}function h(u,p){l.drawElements(s,p,r,u*a),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let v,m;if(i)v=l,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,r,u*a,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function tf(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nf(l,e){return l[0]-e[0]}function sf(l,e){return Math.abs(e[1])-Math.abs(l[1])}function rf(l,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Xe,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function a(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let R=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let I=0;_===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let b=h.attributes.position.count*I,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*E*4*g),V=new $a(B,b,E,g);V.type=Fn,V.needsUpdate=!0;const P=I*4;for(let U=0;U<g;U++){const z=S[U],J=C[U],G=L[U],q=b*E*4*U;for(let te=0;te<z.count;te++){const ue=te*P;_===!0&&(o.fromBufferAttribute(z,te),B[q+ue+0]=o.x,B[q+ue+1]=o.y,B[q+ue+2]=o.z,B[q+ue+3]=0),x===!0&&(o.fromBufferAttribute(J,te),B[q+ue+4]=o.x,B[q+ue+5]=o.y,B[q+ue+6]=o.z,B[q+ue+7]=0),M===!0&&(o.fromBufferAttribute(G,te),B[q+ue+8]=o.x,B[q+ue+9]=o.y,B[q+ue+10]=o.z,B[q+ue+11]=G.itemSize===4?o.w:1)}}v={count:g,texture:V,size:new Ee(b,E)},s.set(h,v),h.addEventListener("dispose",R)}let m=0;for(let _=0;_<u.length;_++)m+=u[_];const f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(l,"morphTargetBaseInfluence",f),d.getUniforms().setValue(l,"morphTargetInfluences",u),d.getUniforms().setValue(l,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}else{const p=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){const M=g[x];M[0]=x,M[1]=u[x]}g.sort(sf);for(let x=0;x<8;x++)x<p&&g[x][1]?(r[x][0]=g[x][0],r[x][1]=g[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(nf);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const M=r[x],S=M[0],C=M[1];S!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+x)!==v[S]&&h.setAttribute("morphTarget"+x,v[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),i[x]=C,f+=C):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(l,"morphTargetBaseInfluence",_),d.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:a}}function of(l,e,t,n){let i=new WeakMap;function s(a){const c=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function o(){i=new WeakMap}function r(a){const c=a.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const sl=new bt,rl=new $a,ol=new jc,al=new nl,$o=[],Zo=[],Ko=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function wi(l,e,t){const n=l[0];if(n<=0||n>0)return l;const i=e*t;let s=$o[i];if(s===void 0&&(s=new Float32Array(i),$o[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,l[o].toArray(s,r)}return s}function at(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function lt(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function Ls(l,e){let t=Zo[e];t===void 0&&(t=new Int32Array(e),Zo[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function af(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function lf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;l.uniform2fv(this.addr,e),lt(t,e)}}function cf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;l.uniform3fv(this.addr,e),lt(t,e)}}function hf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;l.uniform4fv(this.addr,e),lt(t,e)}}function uf(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Qo.set(n),l.uniformMatrix2fv(this.addr,!1,Qo),lt(t,n)}}function df(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Jo.set(n),l.uniformMatrix3fv(this.addr,!1,Jo),lt(t,n)}}function ff(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Ko.set(n),l.uniformMatrix4fv(this.addr,!1,Ko),lt(t,n)}}function pf(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function mf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;l.uniform2iv(this.addr,e),lt(t,e)}}function gf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;l.uniform3iv(this.addr,e),lt(t,e)}}function vf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;l.uniform4iv(this.addr,e),lt(t,e)}}function _f(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function xf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;l.uniform2uiv(this.addr,e),lt(t,e)}}function yf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;l.uniform3uiv(this.addr,e),lt(t,e)}}function Mf(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;l.uniform4uiv(this.addr,e),lt(t,e)}}function Sf(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||sl,i)}function bf(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ol,i)}function wf(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||al,i)}function Ef(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rl,i)}function Tf(l){switch(l){case 5126:return af;case 35664:return lf;case 35665:return cf;case 35666:return hf;case 35674:return uf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return vf;case 5125:return _f;case 36294:return xf;case 36295:return yf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Ef}}function Af(l,e){l.uniform1fv(this.addr,e)}function Cf(l,e){const t=wi(e,this.size,2);l.uniform2fv(this.addr,t)}function Pf(l,e){const t=wi(e,this.size,3);l.uniform3fv(this.addr,t)}function Lf(l,e){const t=wi(e,this.size,4);l.uniform4fv(this.addr,t)}function Rf(l,e){const t=wi(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function Df(l,e){const t=wi(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function If(l,e){const t=wi(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function Uf(l,e){l.uniform1iv(this.addr,e)}function Nf(l,e){l.uniform2iv(this.addr,e)}function zf(l,e){l.uniform3iv(this.addr,e)}function Ff(l,e){l.uniform4iv(this.addr,e)}function Of(l,e){l.uniform1uiv(this.addr,e)}function Bf(l,e){l.uniform2uiv(this.addr,e)}function Gf(l,e){l.uniform3uiv(this.addr,e)}function kf(l,e){l.uniform4uiv(this.addr,e)}function Vf(l,e,t){const n=this.cache,i=e.length,s=Ls(t,i);at(n,s)||(l.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||sl,s[o])}function Hf(l,e,t){const n=this.cache,i=e.length,s=Ls(t,i);at(n,s)||(l.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ol,s[o])}function Wf(l,e,t){const n=this.cache,i=e.length,s=Ls(t,i);at(n,s)||(l.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||al,s[o])}function qf(l,e,t){const n=this.cache,i=e.length,s=Ls(t,i);at(n,s)||(l.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rl,s[o])}function jf(l){switch(l){case 5126:return Af;case 35664:return Cf;case 35665:return Pf;case 35666:return Lf;case 35674:return Rf;case 35675:return Df;case 35676:return If;case 5124:case 35670:return Uf;case 35667:case 35671:return Nf;case 35668:case 35672:return zf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Bf;case 36295:return Gf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Vf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return qf}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tf(t.type)}}class Yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=jf(t.type)}}class $f{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function ea(l,e){l.seq.push(e),l.map[e.id]=e}function Zf(l,e,t){const n=l.name,i=n.length;for(fr.lastIndex=0;;){const s=fr.exec(n),o=fr.lastIndex;let r=s[1];const a=s[2]==="]",c=s[3];if(a&&(r=r|0),c===void 0||c==="["&&o+2===i){ea(t,c===void 0?new Xf(r,l,e):new Yf(r,l,e));break}else{let d=t.map[r];d===void 0&&(d=new $f(r),ea(t,d)),t=d}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Zf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],a=n[r.id];a.needsUpdate!==!1&&r.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ta(l,e,t){const n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}let Kf=0;function Jf(l,e){const t=l.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Qf(l){switch(l){case kn:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function na(l,e,t){const n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Jf(l.getShaderSource(e),o)}else return i}function ep(l,e){const t=Qf(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tp(l,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case sc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function np(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.normalMapTangentSpace||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function ip(l){const e=[];for(const t in l){const n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sp(l,e){const t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=l.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:l.getAttribLocation(e,o),locationSize:r}}return t}function Oi(l){return l!==""}function ia(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sa(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(l){return l.replace(rp,op)}function op(l,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Dr(t)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ra(l){return l.replace(ap,lp)}function lp(l,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function oa(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cp(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Oa?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===Ba?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function hp(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case xi:case yi:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function up(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function dp(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function fp(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pp(l,e,t,n){const i=l.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const a=cp(t),c=hp(t),h=up(t),d=dp(t),u=fp(t),p=t.isWebGL2?"":np(t),g=ip(s),v=i.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(m=[oa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[p,oa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==fn?tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,ep("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Dr(o),o=ia(o,t),o=sa(o,t),r=Dr(r),r=ia(r,t),r=sa(r,t),o=ra(o),r=ra(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+o,M=_+f+r,S=ta(i,35633,x),C=ta(i,35632,M);if(i.attachShader(v,S),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),l.debug.checkShaderErrors){const b=i.getProgramInfoLog(v).trim(),E=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(C).trim();let V=!0,P=!0;if(i.getProgramParameter(v,35714)===!1)if(V=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(i,v,S,C);else{const R=na(i,S,"vertex"),U=na(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+b+`
`+R+`
`+U)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(E===""||B==="")&&(P=!1);P&&(this.diagnostics={runnable:V,programLog:b,vertexShader:{log:E,prefix:m},fragmentShader:{log:B,prefix:f}})}i.deleteShader(S),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ts(i,v)),L};let I;return this.getAttributes=function(){return I===void 0&&(I=sp(i,v)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Kf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=C,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}}class vp{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function _p(l,e,t,n,i,s,o){const r=new Za,a=new gp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===1?"uv2":"uv"}function m(b,E,B,V,P){const R=V.fog,U=P.geometry,z=b.isMeshStandardMaterial?V.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),G=J&&J.mapping===Cs?J.image.height:null,q=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ue=te!==void 0?te.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let j,ee,re,ce;if(q){const fe=en[q];j=fe.vertexShader,ee=fe.fragmentShader}else j=b.vertexShader,ee=b.fragmentShader,a.update(b),re=a.getVertexShaderID(b),ce=a.getFragmentShaderID(b);const H=l.getRenderTarget(),Te=P.isInstancedMesh===!0,be=!!b.map,oe=!!b.matcap,Se=!!J,Ge=!!b.aoMap,xe=!!b.lightMap,Le=!!b.bumpMap,Ze=!!b.normalMap,Ye=!!b.displacementMap,et=!!b.emissiveMap,Ke=!!b.metalnessMap,Oe=!!b.roughnessMap,He=b.clearcoat>0,ut=b.iridescence>0,A=b.sheen>0,w=b.transmission>0,X=He&&!!b.clearcoatMap,ne=He&&!!b.clearcoatNormalMap,se=He&&!!b.clearcoatRoughnessMap,le=ut&&!!b.iridescenceMap,D=ut&&!!b.iridescenceThicknessMap,Q=A&&!!b.sheenColorMap,W=A&&!!b.sheenRoughnessMap,he=!!b.specularMap,me=!!b.specularColorMap,_e=!!b.specularIntensityMap,de=w&&!!b.transmissionMap,ve=w&&!!b.thicknessMap,Ae=!!b.gradientMap,De=!!b.alphaMap,Je=b.alphaTest>0,N=!!b.extensions,$=!!U.attributes.uv2;return{isWebGL2:h,shaderID:q,shaderName:b.type,vertexShader:j,fragmentShader:ee,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Te,instancingColor:Te&&P.instanceColor!==null,supportsVertexTextures:u,outputEncoding:H===null?l.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:kn,map:be,matcap:oe,envMap:Se,envMapMode:Se&&J.mapping,envMapCubeUVHeight:G,aoMap:Ge,lightMap:xe,bumpMap:Le,normalMap:Ze,displacementMap:u&&Ye,emissiveMap:et,normalMapObjectSpace:Ze&&b.normalMapType===bc,normalMapTangentSpace:Ze&&b.normalMapType===Nr,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&b.map.encoding===je,metalnessMap:Ke,roughnessMap:Oe,clearcoat:He,clearcoatMap:X,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,iridescence:ut,iridescenceMap:le,iridescenceThicknessMap:D,sheen:A,sheenColorMap:Q,sheenRoughnessMap:W,specularMap:he,specularColorMap:me,specularIntensityMap:_e,transmission:w,transmissionMap:de,thicknessMap:ve,gradientMap:Ae,opaque:b.transparent===!1&&b.blending===gi,alphaMap:De,alphaTest:Je,combine:b.combine,mapUv:be&&v(b.map.channel),aoMapUv:Ge&&v(b.aoMap.channel),lightMapUv:xe&&v(b.lightMap.channel),bumpMapUv:Le&&v(b.bumpMap.channel),normalMapUv:Ze&&v(b.normalMap.channel),displacementMapUv:Ye&&v(b.displacementMap.channel),emissiveMapUv:et&&v(b.emissiveMap.channel),metalnessMapUv:Ke&&v(b.metalnessMap.channel),roughnessMapUv:Oe&&v(b.roughnessMap.channel),clearcoatMapUv:X&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:D&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:W&&v(b.sheenRoughnessMap.channel),specularMapUv:he&&v(b.specularMap.channel),specularColorMapUv:me&&v(b.specularColorMap.channel),specularIntensityMapUv:_e&&v(b.specularIntensityMap.channel),transmissionMapUv:de&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:De&&v(b.alphaMap.channel),vertexTangents:Ze&&!!U.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs2:$,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(be||De),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:K,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:l.shadowMap.enabled&&B.length>0,shadowMapType:l.shadowMap.type,toneMapping:b.toneMapped?l.toneMapping:fn,useLegacyLights:l.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===St,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:N&&b.extensions.derivatives===!0,extensionFragDepth:N&&b.extensions.fragDepth===!0,extensionDrawBuffers:N&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)E.push(B),E.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(E,b),x(E,b),E.push(l.outputEncoding)),E.push(b.customProgramCacheKey),E.join()}function _(b,E){b.push(E.precision),b.push(E.outputEncoding),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.matcap&&r.enable(4),E.envMap&&r.enable(5),E.normalMapObjectSpace&&r.enable(6),E.normalMapTangentSpace&&r.enable(7),E.clearcoat&&r.enable(8),E.iridescence&&r.enable(9),E.alphaTest&&r.enable(10),E.vertexColors&&r.enable(11),E.vertexAlphas&&r.enable(12),E.vertexUvs2&&r.enable(13),E.vertexTangents&&r.enable(14),b.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.useLegacyLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.decodeVideoTexture&&r.enable(17),E.opaque&&r.enable(18),E.pointsUvs&&r.enable(19),b.push(r.mask)}function M(b){const E=g[b.type];let B;if(E){const V=en[E];B=rh.clone(V.uniforms)}else B=b.uniforms;return B}function S(b,E){let B;for(let V=0,P=c.length;V<P;V++){const R=c[V];if(R.cacheKey===E){B=R,++B.usedTimes;break}}return B===void 0&&(B=new pp(l,E,b,s),c.push(B)),B}function C(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function L(b){a.remove(b)}function I(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:C,releaseShaderCache:L,programs:c,dispose:I}}function xp(){let l=new WeakMap;function e(s){let o=l.get(s);return o===void 0&&(o={},l.set(s,o)),o}function t(s){l.delete(s)}function n(s,o,r){l.get(s)[o]=r}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function yp(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function aa(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function la(){const l=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,p,g,v,m){let f=l[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},l[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function r(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function a(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||yp),n.length>1&&n.sort(u||aa),i.length>1&&i.sort(u||aa)}function h(){for(let d=e,u=l.length;d<u;d++){const p=l[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:a,finish:h,sort:c}}function Mp(){let l=new WeakMap;function e(n,i){const s=l.get(n);let o;return s===void 0?(o=new la,l.set(n,[o])):i>=s.length?(o=new la,s.push(o)):o=s[i],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function Sp(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return l[e.id]=t,t}}}function bp(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let wp=0;function Ep(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function Tp(l,e){const t=new Sp,n=bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new F);const s=new F,o=new rt,r=new rt;function a(h,d){let u=0,p=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let v=0,m=0,f=0,_=0,x=0,M=0,S=0,C=0,L=0,I=0;h.sort(Ep);const b=d===!0?Math.PI:1;for(let B=0,V=h.length;B<V;B++){const P=h[B],R=P.color,U=P.intensity,z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=R.r*U*b,p+=R.g*U*b,g+=R.b*U*b;else if(P.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],U);else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const q=P.shadow,te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.directionalShadow[v]=te,i.directionalShadowMap[v]=J,i.directionalShadowMatrix[v]=P.shadow.matrix,M++}i.directional[v]=G,v++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(R).multiplyScalar(U*b),G.distance=z,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[f]=G;const q=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,q.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[f]=q.matrix,P.castShadow){const te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.spotShadow[f]=te,i.spotShadowMap[f]=J,C++}f++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(R).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=G,_++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),G.distance=P.distance,G.decay=P.decay,P.castShadow){const q=P.shadow,te=n.get(P);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=P.shadow.matrix,S++}i.point[m]=G,m++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(U*b),G.groundColor.copy(P.groundColor).multiplyScalar(U*b),i.hemi[x]=G,x++}}_>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==v||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==_||E.hemiLength!==x||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==C||E.numSpotMaps!==L)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,E.directionalLength=v,E.pointLength=m,E.spotLength=f,E.rectAreaLength=_,E.hemiLength=x,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=C,E.numSpotMaps=L,i.version=wp++)}function c(h,d){let u=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const M=h[_];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),r.identity(),o.copy(M.matrixWorld),o.premultiply(f),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(M.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:a,setupView:c,state:i}}function ca(l,e){const t=new Tp(l,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function a(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Ap(l,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ca(l,e),t.set(s,[a])):o>=r.length?(a=new ca(l,e),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Cp extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pp extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(l,e,t){let n=new Br;const i=new Ee,s=new Ee,o=new Xe,r=new Cp({depthPacking:Sc}),a=new Pp,c={},h=t.maxTextureSize,d={[Sn]:St,[St]:Sn,[Wt]:Wt},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Lp,fragmentShader:Rp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa,this.render=function(M,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=l.getRenderTarget(),I=l.getActiveCubeFace(),b=l.getActiveMipmapLevel(),E=l.state;E.setBlending(Mn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let B=0,V=M.length;B<V;B++){const P=M[B],R=P.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/U.x),i.x=s.x*U.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/U.y),i.y=s.y*U.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==zi?{minFilter:yt,magFilter:yt}:{};R.map=new Vn(i.x,i.y,J),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}l.setRenderTarget(R.map),l.clear();const z=R.getViewportCount();for(let J=0;J<z;J++){const G=R.getViewport(J);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),E.viewport(o),R.updateMatrices(P,J),n=R.getFrustum(),x(S,C,R.camera,P,this.type)}R.isPointLightShadow!==!0&&this.type===zi&&f(R,C),R.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(L,I,b)};function f(M,S){const C=e.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vn(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,l.setRenderTarget(M.mapPass),l.clear(),l.renderBufferDirect(S,null,C,u,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,l.setRenderTarget(M.map),l.clear(),l.renderBufferDirect(S,null,C,p,v,null)}function _(M,S,C,L){let I=null;const b=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)I=b;else if(I=C.isPointLight===!0?a:r,l.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const E=I.uuid,B=S.uuid;let V=c[E];V===void 0&&(V={},c[E]=V);let P=V[B];P===void 0&&(P=I.clone(),V[B]=P),I=P}if(I.visible=S.visible,I.wireframe=S.wireframe,L===zi?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:d[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const E=l.properties.get(I);E.light=C}return I}function x(M,S,C,L,I){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===zi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const B=e.update(M),V=M.material;if(Array.isArray(V)){const P=B.groups;for(let R=0,U=P.length;R<U;R++){const z=P[R],J=V[z.materialIndex];if(J&&J.visible){const G=_(M,J,L,I);l.renderBufferDirect(C,null,B,G,M,z)}}}else if(V.visible){const P=_(M,V,L,I);l.renderBufferDirect(C,null,B,P,M,null)}}const E=M.children;for(let B=0,V=E.length;B<V;B++)x(E[B],S,C,L,I)}}function Ip(l,e,t){const n=t.isWebGL2;function i(){let N=!1;const $=new Xe;let ie=null;const fe=new Xe(0,0,0,0);return{setMask:function(ye){ie!==ye&&!N&&(l.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){N=ye},setClear:function(ye,We,$e,dt,pn){pn===!0&&(ye*=dt,We*=dt,$e*=dt),$.set(ye,We,$e,dt),fe.equals($)===!1&&(l.clearColor(ye,We,$e,dt),fe.copy($))},reset:function(){N=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let N=!1,$=null,ie=null,fe=null;return{setTest:function(ye){ye?H(2929):Te(2929)},setMask:function(ye){$!==ye&&!N&&(l.depthMask(ye),$=ye)},setFunc:function(ye){if(ie!==ye){switch(ye){case ql:l.depthFunc(512);break;case jl:l.depthFunc(519);break;case Xl:l.depthFunc(513);break;case Er:l.depthFunc(515);break;case Yl:l.depthFunc(514);break;case $l:l.depthFunc(518);break;case Zl:l.depthFunc(516);break;case Kl:l.depthFunc(517);break;default:l.depthFunc(515)}ie=ye}},setLocked:function(ye){N=ye},setClear:function(ye){fe!==ye&&(l.clearDepth(ye),fe=ye)},reset:function(){N=!1,$=null,ie=null,fe=null}}}function o(){let N=!1,$=null,ie=null,fe=null,ye=null,We=null,$e=null,dt=null,pn=null;return{setTest:function(Qe){N||(Qe?H(2960):Te(2960))},setMask:function(Qe){$!==Qe&&!N&&(l.stencilMask(Qe),$=Qe)},setFunc:function(Qe,Ut,Yt){(ie!==Qe||fe!==Ut||ye!==Yt)&&(l.stencilFunc(Qe,Ut,Yt),ie=Qe,fe=Ut,ye=Yt)},setOp:function(Qe,Ut,Yt){(We!==Qe||$e!==Ut||dt!==Yt)&&(l.stencilOp(Qe,Ut,Yt),We=Qe,$e=Ut,dt=Yt)},setLocked:function(Qe){N=Qe},setClear:function(Qe){pn!==Qe&&(l.clearStencil(Qe),pn=Qe)},reset:function(){N=!1,$=null,ie=null,fe=null,ye=null,We=null,$e=null,dt=null,pn=null}}}const r=new i,a=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,x=null,M=null,S=null,C=null,L=null,I=null,b=!1,E=null,B=null,V=null,P=null,R=null;const U=l.getParameter(35661);let z=!1,J=0;const G=l.getParameter(7938);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=J>=2);let q=null,te={};const ue=l.getParameter(3088),K=l.getParameter(2978),j=new Xe().fromArray(ue),ee=new Xe().fromArray(K);function re(N,$,ie){const fe=new Uint8Array(4),ye=l.createTexture();l.bindTexture(N,ye),l.texParameteri(N,10241,9728),l.texParameteri(N,10240,9728);for(let We=0;We<ie;We++)l.texImage2D($+We,0,6408,1,1,0,6408,5121,fe);return ye}const ce={};ce[3553]=re(3553,3553,1),ce[34067]=re(34067,34069,6),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),H(2929),a.setFunc(Er),Ye(!1),et(Yr),H(2884),Le(Mn);function H(N){u[N]!==!0&&(l.enable(N),u[N]=!0)}function Te(N){u[N]!==!1&&(l.disable(N),u[N]=!1)}function be(N,$){return p[N]!==$?(l.bindFramebuffer(N,$),p[N]=$,n&&(N===36009&&(p[36160]=$),N===36160&&(p[36009]=$)),!0):!1}function oe(N,$){let ie=v,fe=!1;if(N)if(ie=g.get($),ie===void 0&&(ie=[],g.set($,ie)),N.isWebGLMultipleRenderTargets){const ye=N.texture;if(ie.length!==ye.length||ie[0]!==36064){for(let We=0,$e=ye.length;We<$e;We++)ie[We]=36064+We;ie.length=ye.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?l.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Se(N){return m!==N?(l.useProgram(N),m=N,!0):!1}const Ge={[fi]:32774,[Ul]:32778,[Nl]:32779};if(n)Ge[Jr]=32775,Ge[Qr]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ge[Jr]=N.MIN_EXT,Ge[Qr]=N.MAX_EXT)}const xe={[zl]:0,[Fl]:1,[Ol]:768,[Ga]:770,[Wl]:776,[Vl]:774,[Gl]:772,[Bl]:769,[ka]:771,[Hl]:775,[kl]:773};function Le(N,$,ie,fe,ye,We,$e,dt){if(N===Mn){f===!0&&(Te(3042),f=!1);return}if(f===!1&&(H(3042),f=!0),N!==Il){if(N!==_||dt!==b){if((x!==fi||C!==fi)&&(l.blendEquation(32774),x=fi,C=fi),dt)switch(N){case gi:l.blendFuncSeparate(1,771,1,771);break;case $r:l.blendFunc(1,1);break;case Zr:l.blendFuncSeparate(0,769,0,1);break;case Kr:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gi:l.blendFuncSeparate(770,771,1,771);break;case $r:l.blendFunc(770,1);break;case Zr:l.blendFuncSeparate(0,769,0,1);break;case Kr:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,S=null,L=null,I=null,_=N,b=dt}return}ye=ye||$,We=We||ie,$e=$e||fe,($!==x||ye!==C)&&(l.blendEquationSeparate(Ge[$],Ge[ye]),x=$,C=ye),(ie!==M||fe!==S||We!==L||$e!==I)&&(l.blendFuncSeparate(xe[ie],xe[fe],xe[We],xe[$e]),M=ie,S=fe,L=We,I=$e),_=N,b=!1}function Ze(N,$){N.side===Wt?Te(2884):H(2884);let ie=N.side===St;$&&(ie=!ie),Ye(ie),N.blending===gi&&N.transparent===!1?Le(Mn):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const fe=N.stencilWrite;c.setTest(fe),fe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?H(32926):Te(32926)}function Ye(N){E!==N&&(N?l.frontFace(2304):l.frontFace(2305),E=N)}function et(N){N!==Rl?(H(2884),N!==B&&(N===Yr?l.cullFace(1029):N===Dl?l.cullFace(1028):l.cullFace(1032))):Te(2884),B=N}function Ke(N){N!==V&&(z&&l.lineWidth(N),V=N)}function Oe(N,$,ie){N?(H(32823),(P!==$||R!==ie)&&(l.polygonOffset($,ie),P=$,R=ie)):Te(32823)}function He(N){N?H(3089):Te(3089)}function ut(N){N===void 0&&(N=33984+U-1),q!==N&&(l.activeTexture(N),q=N)}function A(N,$,ie){ie===void 0&&(q===null?ie=33984+U-1:ie=q);let fe=te[ie];fe===void 0&&(fe={type:void 0,texture:void 0},te[ie]=fe),(fe.type!==N||fe.texture!==$)&&(q!==ie&&(l.activeTexture(ie),q=ie),l.bindTexture(N,$||ce[N]),fe.type=N,fe.texture=$)}function w(){const N=te[q];N!==void 0&&N.type!==void 0&&(l.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function X(){try{l.compressedTexImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{l.compressedTexImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{l.texSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{l.texSubImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{l.texStorage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{l.texStorage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{l.texImage2D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{l.texImage3D.apply(l,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){j.equals(N)===!1&&(l.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function ve(N){ee.equals(N)===!1&&(l.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function Ae(N,$){let ie=d.get($);ie===void 0&&(ie=new WeakMap,d.set($,ie));let fe=ie.get(N);fe===void 0&&(fe=l.getUniformBlockIndex($,N.name),ie.set(N,fe))}function De(N,$){const fe=d.get($).get(N);h.get($)!==fe&&(l.uniformBlockBinding($,fe,N.__bindingPointIndex),h.set($,fe))}function Je(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),u={},q=null,te={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,x=null,M=null,S=null,C=null,L=null,I=null,b=!1,E=null,B=null,V=null,P=null,R=null,j.set(0,0,l.canvas.width,l.canvas.height),ee.set(0,0,l.canvas.width,l.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:H,disable:Te,bindFramebuffer:be,drawBuffers:oe,useProgram:Se,setBlending:Le,setMaterial:Ze,setFlipSided:Ye,setCullFace:et,setLineWidth:Ke,setPolygonOffset:Oe,setScissorTest:He,activeTexture:ut,bindTexture:A,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:me,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:W,texStorage3D:he,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:D,compressedTexSubImage3D:Q,scissor:de,viewport:ve,reset:Je}}function Up(l,e,t,n,i,s,o){const r=i.isWebGL2,a=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,w){return f?new OffscreenCanvas(A,w):ji("canvas")}function x(A,w,X,ne){let se=1;if((A.width>ne||A.height>ne)&&(se=ne/Math.max(A.width,A.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=w?qa:Math.floor,D=le(se*A.width),Q=le(se*A.height);v===void 0&&(v=_(D,Q));const W=X?_(D,Q):v;return W.width=D,W.height=Q,W.getContext("2d").drawImage(A,0,0,D,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+D+"x"+Q+")."),W}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Rr(A.width)&&Rr(A.height)}function S(A){return r?!1:A.wrapS!==qt||A.wrapT!==qt||A.minFilter!==yt&&A.minFilter!==Ft}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==yt&&A.minFilter!==Ft}function L(A){l.generateMipmap(A)}function I(A,w,X,ne,se=!1){if(r===!1)return w;if(A!==null){if(l[A]!==void 0)return l[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;return w===6403&&(X===5126&&(le=33326),X===5131&&(le=33325),X===5121&&(le=33321)),w===33319&&(X===5126&&(le=33328),X===5131&&(le=33327),X===5121&&(le=33323)),w===6408&&(X===5126&&(le=34836),X===5131&&(le=34842),X===5121&&(le=ne===je&&se===!1?35907:32856),X===32819&&(le=32854),X===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function b(A,w,X){return C(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==yt&&A.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function E(A){return A===yt||A===eo||A===ks?9728:9729}function B(A){const w=A.target;w.removeEventListener("dispose",B),P(w),w.isVideoTexture&&g.delete(w)}function V(A){const w=A.target;w.removeEventListener("dispose",V),U(w)}function P(A){const w=n.get(A);if(w.__webglInit===void 0)return;const X=A.source,ne=m.get(X);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(A),Object.keys(ne).length===0&&m.delete(X)}n.remove(A)}function R(A){const w=n.get(A);l.deleteTexture(w.__webglTexture);const X=A.source,ne=m.get(X);delete ne[w.__cacheKey],o.memory.textures--}function U(A){const w=A.texture,X=n.get(A),ne=n.get(w);if(ne.__webglTexture!==void 0&&(l.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)l.deleteFramebuffer(X.__webglFramebuffer[se]),X.__webglDepthbuffer&&l.deleteRenderbuffer(X.__webglDepthbuffer[se]);else{if(l.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&l.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&l.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&l.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&l.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,le=w.length;se<le;se++){const D=n.get(w[se]);D.__webglTexture&&(l.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(w[se])}n.remove(w),n.remove(A)}let z=0;function J(){z=0}function G(){const A=z;return A>=a&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a),z+=1,A}function q(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function te(A,w){const X=n.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,A,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function ue(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Te(X,A,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function K(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Te(X,A,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function j(A,w){const X=n.get(A);if(A.version>0&&X.__version!==A.version){be(X,A,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const ee={[Cr]:10497,[qt]:33071,[Pr]:33648},re={[yt]:9728,[eo]:9984,[ks]:9986,[Ft]:9729,[rc]:9985,[Vi]:9987};function ce(A,w,X){if(X?(l.texParameteri(A,10242,ee[w.wrapS]),l.texParameteri(A,10243,ee[w.wrapT]),(A===32879||A===35866)&&l.texParameteri(A,32882,ee[w.wrapR]),l.texParameteri(A,10240,re[w.magFilter]),l.texParameteri(A,10241,re[w.minFilter])):(l.texParameteri(A,10242,33071),l.texParameteri(A,10243,33071),(A===32879||A===35866)&&l.texParameteri(A,32882,33071),(w.wrapS!==qt||w.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(A,10240,E(w.magFilter)),l.texParameteri(A,10241,E(w.minFilter)),w.minFilter!==yt&&w.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===yt||w.minFilter!==ks&&w.minFilter!==Vi||w.type===Fn&&e.has("OES_texture_float_linear")===!1||r===!1&&w.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(l.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function H(A,w){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",B));const ne=w.source;let se=m.get(ne);se===void 0&&(se={},m.set(ne,se));const le=q(w);if(le!==A.__cacheKey){se[le]===void 0&&(se[le]={texture:l.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[le].usedTimes++;const D=se[A.__cacheKey];D!==void 0&&(se[A.__cacheKey].usedTimes--,D.usedTimes===0&&R(w)),A.__cacheKey=le,A.__webglTexture=se[le].texture}return X}function Te(A,w,X){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const se=H(A,w),le=w.source;t.bindTexture(ne,A.__webglTexture,33984+X);const D=n.get(le);if(le.version!==D.__version||se===!0){t.activeTexture(33984+X),l.pixelStorei(37440,w.flipY),l.pixelStorei(37441,w.premultiplyAlpha),l.pixelStorei(3317,w.unpackAlignment),l.pixelStorei(37443,0);const Q=S(w)&&M(w.image)===!1;let W=x(w.image,Q,!1,h);W=ut(w,W);const he=M(W)||r,me=s.convert(w.format,w.encoding);let _e=s.convert(w.type),de=I(w.internalFormat,me,_e,w.encoding,w.isVideoTexture);ce(ne,w,he);let ve;const Ae=w.mipmaps,De=r&&w.isVideoTexture!==!0,Je=D.__version===void 0||se===!0,N=b(w,W,he);if(w.isDepthTexture)de=6402,r?w.type===Fn?de=36012:w.type===zn?de=33190:w.type===vi?de=35056:de=33189:w.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===On&&de===6402&&w.type!==Ha&&w.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=zn,_e=s.convert(w.type)),w.format===Mi&&de===6402&&(de=34041,w.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vi,_e=s.convert(w.type))),Je&&(De?t.texStorage2D(3553,1,de,W.width,W.height):t.texImage2D(3553,0,de,W.width,W.height,0,me,_e,null));else if(w.isDataTexture)if(Ae.length>0&&he){De&&Je&&t.texStorage2D(3553,N,de,Ae[0].width,Ae[0].height);for(let $=0,ie=Ae.length;$<ie;$++)ve=Ae[$],De?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,me,_e,ve.data):t.texImage2D(3553,$,de,ve.width,ve.height,0,me,_e,ve.data);w.generateMipmaps=!1}else De?(Je&&t.texStorage2D(3553,N,de,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,me,_e,W.data)):t.texImage2D(3553,0,de,W.width,W.height,0,me,_e,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&Je&&t.texStorage3D(35866,N,de,Ae[0].width,Ae[0].height,W.depth);for(let $=0,ie=Ae.length;$<ie;$++)ve=Ae[$],w.format!==jt?me!==null?De?t.compressedTexSubImage3D(35866,$,0,0,0,ve.width,ve.height,W.depth,me,ve.data,0,0):t.compressedTexImage3D(35866,$,de,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,$,0,0,0,ve.width,ve.height,W.depth,me,_e,ve.data):t.texImage3D(35866,$,de,ve.width,ve.height,W.depth,0,me,_e,ve.data)}else{De&&Je&&t.texStorage2D(3553,N,de,Ae[0].width,Ae[0].height);for(let $=0,ie=Ae.length;$<ie;$++)ve=Ae[$],w.format!==jt?me!==null?De?t.compressedTexSubImage2D(3553,$,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(3553,$,de,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,me,_e,ve.data):t.texImage2D(3553,$,de,ve.width,ve.height,0,me,_e,ve.data)}else if(w.isDataArrayTexture)De?(Je&&t.texStorage3D(35866,N,de,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,me,_e,W.data)):t.texImage3D(35866,0,de,W.width,W.height,W.depth,0,me,_e,W.data);else if(w.isData3DTexture)De?(Je&&t.texStorage3D(32879,N,de,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,me,_e,W.data)):t.texImage3D(32879,0,de,W.width,W.height,W.depth,0,me,_e,W.data);else if(w.isFramebufferTexture){if(Je)if(De)t.texStorage2D(3553,N,de,W.width,W.height);else{let $=W.width,ie=W.height;for(let fe=0;fe<N;fe++)t.texImage2D(3553,fe,de,$,ie,0,me,_e,null),$>>=1,ie>>=1}}else if(Ae.length>0&&he){De&&Je&&t.texStorage2D(3553,N,de,Ae[0].width,Ae[0].height);for(let $=0,ie=Ae.length;$<ie;$++)ve=Ae[$],De?t.texSubImage2D(3553,$,0,0,me,_e,ve):t.texImage2D(3553,$,de,me,_e,ve);w.generateMipmaps=!1}else De?(Je&&t.texStorage2D(3553,N,de,W.width,W.height),t.texSubImage2D(3553,0,0,0,me,_e,W)):t.texImage2D(3553,0,de,me,_e,W);C(w,he)&&L(ne),D.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function be(A,w,X){if(w.image.length!==6)return;const ne=H(A,w),se=w.source;t.bindTexture(34067,A.__webglTexture,33984+X);const le=n.get(se);if(se.version!==le.__version||ne===!0){t.activeTexture(33984+X),l.pixelStorei(37440,w.flipY),l.pixelStorei(37441,w.premultiplyAlpha),l.pixelStorei(3317,w.unpackAlignment),l.pixelStorei(37443,0);const D=w.isCompressedTexture||w.image[0].isCompressedTexture,Q=w.image[0]&&w.image[0].isDataTexture,W=[];for(let $=0;$<6;$++)!D&&!Q?W[$]=x(w.image[$],!1,!0,c):W[$]=Q?w.image[$].image:w.image[$],W[$]=ut(w,W[$]);const he=W[0],me=M(he)||r,_e=s.convert(w.format,w.encoding),de=s.convert(w.type),ve=I(w.internalFormat,_e,de,w.encoding),Ae=r&&w.isVideoTexture!==!0,De=le.__version===void 0||ne===!0;let Je=b(w,he,me);ce(34067,w,me);let N;if(D){Ae&&De&&t.texStorage2D(34067,Je,ve,he.width,he.height);for(let $=0;$<6;$++){N=W[$].mipmaps;for(let ie=0;ie<N.length;ie++){const fe=N[ie];w.format!==jt?_e!==null?Ae?t.compressedTexSubImage2D(34069+$,ie,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(34069+$,ie,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+$,ie,0,0,fe.width,fe.height,_e,de,fe.data):t.texImage2D(34069+$,ie,ve,fe.width,fe.height,0,_e,de,fe.data)}}}else{N=w.mipmaps,Ae&&De&&(N.length>0&&Je++,t.texStorage2D(34067,Je,ve,W[0].width,W[0].height));for(let $=0;$<6;$++)if(Q){Ae?t.texSubImage2D(34069+$,0,0,0,W[$].width,W[$].height,_e,de,W[$].data):t.texImage2D(34069+$,0,ve,W[$].width,W[$].height,0,_e,de,W[$].data);for(let ie=0;ie<N.length;ie++){const ye=N[ie].image[$].image;Ae?t.texSubImage2D(34069+$,ie+1,0,0,ye.width,ye.height,_e,de,ye.data):t.texImage2D(34069+$,ie+1,ve,ye.width,ye.height,0,_e,de,ye.data)}}else{Ae?t.texSubImage2D(34069+$,0,0,0,_e,de,W[$]):t.texImage2D(34069+$,0,ve,_e,de,W[$]);for(let ie=0;ie<N.length;ie++){const fe=N[ie];Ae?t.texSubImage2D(34069+$,ie+1,0,0,_e,de,fe.image[$]):t.texImage2D(34069+$,ie+1,ve,_e,de,fe.image[$])}}}C(w,me)&&L(34067),le.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function oe(A,w,X,ne,se){const le=s.convert(X.format,X.encoding),D=s.convert(X.type),Q=I(X.internalFormat,le,D,X.encoding);n.get(w).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,Q,w.width,w.height,w.depth,0,le,D,null):t.texImage2D(se,0,Q,w.width,w.height,0,le,D,null)),t.bindFramebuffer(36160,A),Oe(w)?u.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(X).__webglTexture,0,Ke(w)):(se===3553||se>=34069&&se<=34074)&&l.framebufferTexture2D(36160,ne,se,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(A,w,X){if(l.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(X||Oe(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===Fn?ne=36012:se.type===zn&&(ne=33190));const le=Ke(w);Oe(w)?u.renderbufferStorageMultisampleEXT(36161,le,ne,w.width,w.height):l.renderbufferStorageMultisample(36161,le,ne,w.width,w.height)}else l.renderbufferStorage(36161,ne,w.width,w.height);l.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Ke(w);X&&Oe(w)===!1?l.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Oe(w)?u.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):l.renderbufferStorage(36161,34041,w.width,w.height),l.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<ne.length;se++){const le=ne[se],D=s.convert(le.format,le.encoding),Q=s.convert(le.type),W=I(le.internalFormat,D,Q,le.encoding),he=Ke(w);X&&Oe(w)===!1?l.renderbufferStorageMultisample(36161,he,W,w.width,w.height):Oe(w)?u.renderbufferStorageMultisampleEXT(36161,he,W,w.width,w.height):l.renderbufferStorage(36161,W,w.width,w.height)}}l.bindRenderbuffer(36161,null)}function Ge(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,se=Ke(w);if(w.depthTexture.format===On)Oe(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):l.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Mi)Oe(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):l.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function xe(A){const w=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ge(w.__webglFramebuffer,A)}else if(X){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=l.createRenderbuffer(),Se(w.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=l.createRenderbuffer(),Se(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Le(A,w,X){const ne=n.get(A);w!==void 0&&oe(ne.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&xe(A)}function Ze(A){const w=A.texture,X=n.get(A),ne=n.get(w);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=l.createTexture()),ne.__version=w.version,o.memory.textures++);const se=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,D=M(A)||r;if(se){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)X.__webglFramebuffer[Q]=l.createFramebuffer()}else{if(X.__webglFramebuffer=l.createFramebuffer(),le)if(i.drawBuffers){const Q=A.texture;for(let W=0,he=Q.length;W<he;W++){const me=n.get(Q[W]);me.__webglTexture===void 0&&(me.__webglTexture=l.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&Oe(A)===!1){const Q=le?w:[w];X.__webglMultisampledFramebuffer=l.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let W=0;W<Q.length;W++){const he=Q[W];X.__webglColorRenderbuffer[W]=l.createRenderbuffer(),l.bindRenderbuffer(36161,X.__webglColorRenderbuffer[W]);const me=s.convert(he.format,he.encoding),_e=s.convert(he.type),de=I(he.internalFormat,me,_e,he.encoding,A.isXRRenderTarget===!0),ve=Ke(A);l.renderbufferStorageMultisample(36161,ve,de,A.width,A.height),l.framebufferRenderbuffer(36160,36064+W,36161,X.__webglColorRenderbuffer[W])}l.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),ce(34067,w,D);for(let Q=0;Q<6;Q++)oe(X.__webglFramebuffer[Q],A,w,36064,34069+Q);C(w,D)&&L(34067),t.unbindTexture()}else if(le){const Q=A.texture;for(let W=0,he=Q.length;W<he;W++){const me=Q[W],_e=n.get(me);t.bindTexture(3553,_e.__webglTexture),ce(3553,me,D),oe(X.__webglFramebuffer,A,me,36064+W,3553),C(me,D)&&L(3553)}t.unbindTexture()}else{let Q=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?Q=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,ne.__webglTexture),ce(Q,w,D),oe(X.__webglFramebuffer,A,w,36064,Q),C(w,D)&&L(Q),t.unbindTexture()}A.depthBuffer&&xe(A)}function Ye(A){const w=M(A)||r,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,se=X.length;ne<se;ne++){const le=X[ne];if(C(le,w)){const D=A.isWebGLCubeRenderTarget?34067:3553,Q=n.get(le).__webglTexture;t.bindTexture(D,Q),L(D),t.unbindTexture()}}}function et(A){if(r&&A.samples>0&&Oe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,ne=A.height;let se=16384;const le=[],D=A.stencilBuffer?33306:36096,Q=n.get(A),W=A.isWebGLMultipleRenderTargets===!0;if(W)for(let he=0;he<w.length;he++)t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,Q.__webglFramebuffer),l.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer);for(let he=0;he<w.length;he++){le.push(36064+he),A.depthBuffer&&le.push(D);const me=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(me===!1&&(A.depthBuffer&&(se|=256),A.stencilBuffer&&(se|=1024)),W&&l.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[he]),me===!0&&(l.invalidateFramebuffer(36008,[D]),l.invalidateFramebuffer(36009,[D])),W){const _e=n.get(w[he]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,_e,0)}l.blitFramebuffer(0,0,X,ne,0,0,X,ne,se,9728),p&&l.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let he=0;he<w.length;he++){t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+he,36161,Q.__webglColorRenderbuffer[he]);const me=n.get(w[he]).__webglTexture;t.bindFramebuffer(36160,Q.__webglFramebuffer),l.framebufferTexture2D(36009,36064+he,3553,me,0)}t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function Ke(A){return Math.min(d,A.samples)}function Oe(A){const w=n.get(A);return r&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function He(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function ut(A,w){const X=A.encoding,ne=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Lr||X!==kn&&(X===je?r===!1?e.has("EXT_sRGB")===!0&&ne===jt?(A.format=Lr,A.minFilter=Ft,A.generateMipmaps=!1):w=Xa.sRGBToLinear(w):(ne!==jt||se!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=G,this.resetTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=ue,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Oe}function Np(l,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===Gn)return 5121;if(s===cc)return 32819;if(s===hc)return 32820;if(s===oc)return 5120;if(s===ac)return 5122;if(s===Ha)return 5123;if(s===lc)return 5124;if(s===zn)return 5125;if(s===Fn)return 5126;if(s===Hi)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===uc)return 6406;if(s===jt)return 6408;if(s===dc)return 6409;if(s===fc)return 6410;if(s===On)return 6402;if(s===Mi)return 34041;if(s===Lr)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===pc)return 6403;if(s===mc)return 36244;if(s===gc)return 33319;if(s===vc)return 33320;if(s===_c)return 36249;if(s===Vs||s===Hs||s===Ws||s===qs)if(o===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===to||s===no||s===io||s===so)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xc)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ro||s===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===ro)return o===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===oo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ao||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo||s===go||s===vo||s===_o||s===xo||s===yo||s===Mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===ao)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===co)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ho)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===po)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===go)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_o)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mo)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===js)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===js)return o===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yc||s===So||s===bo||s===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===js)return r.COMPRESSED_RED_RGTC1_EXT;if(s===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vi?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):l[s]!==void 0?l[s]:null}return{convert:i}}class zp extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return r!==null&&(r.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Op extends bt{constructor(e,t,n,i,s,o,r,a,c,h){if(h=h!==void 0?h:On,h!==On&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=zn),n===void 0&&h===Mi&&(n=vi),super(null,i,s,o,r,a,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:yt,this.minFilter=a!==void 0?a:yt,this.flipY=!1,this.generateMipmaps=!1}}class Bp extends qn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",a=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const _=[],x=[],M=new Set,S=new Map,C=new Dt;C.layers.enable(1),C.viewport=new Xe;const L=new Dt;L.layers.enable(2),L.viewport=new Xe;const I=[C,L],b=new zp;b.layers.enable(1),b.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=_[j];return ee===void 0&&(ee=new pr,_[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=_[j];return ee===void 0&&(ee=new pr,_[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=_[j];return ee===void 0&&(ee=new pr,_[j]=ee),ee.getHandSpace()};function V(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const re=_[ee];re!==void 0&&re.dispatchEvent({type:j.type,data:j.inputSource})}function P(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",R);for(let j=0;j<_.length;j++){const ee=x[j];ee!==null&&(x[j]=null,_[j].disconnect(ee))}E=null,B=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",P),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),f=new Vn(p.framebufferWidth,p.framebufferHeight,{format:jt,type:Gn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let ee=null,re=null,ce=null;v.depth&&(ce=v.stencil?35056:33190,ee=v.stencil?Mi:On,re=v.stencil?vi:zn);const H={colorFormat:32856,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(H),i.updateRenderState({layers:[u]}),f=new Vn(u.textureWidth,u.textureHeight,{format:jt,type:Gn,depthTexture:new Op(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await i.requestReferenceSpace(r),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(j){for(let ee=0;ee<j.removed.length;ee++){const re=j.removed[ee],ce=x.indexOf(re);ce>=0&&(x[ce]=null,_[ce].disconnect(re))}for(let ee=0;ee<j.added.length;ee++){const re=j.added[ee];let ce=x.indexOf(re);if(ce===-1){for(let Te=0;Te<_.length;Te++)if(Te>=x.length){x.push(re),ce=Te;break}else if(x[Te]===null){x[Te]=re,ce=Te;break}if(ce===-1)break}const H=_[ce];H&&H.connect(re)}}const U=new F,z=new F;function J(j,ee,re){U.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(re.matrixWorld);const ce=U.distanceTo(z),H=ee.projectionMatrix.elements,Te=re.projectionMatrix.elements,be=H[14]/(H[10]-1),oe=H[14]/(H[10]+1),Se=(H[9]+1)/H[5],Ge=(H[9]-1)/H[5],xe=(H[8]-1)/H[0],Le=(Te[8]+1)/Te[0],Ze=be*xe,Ye=be*Le,et=ce/(-xe+Le),Ke=et*-xe;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Oe=be+et,He=oe+et,ut=Ze-Ke,A=Ye+(ce-Ke),w=Se*oe/He*Oe,X=Ge*oe/He*Oe;j.projectionMatrix.makePerspective(ut,A,w,X,Oe,He),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function G(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=L.near=C.near=j.near,b.far=L.far=C.far=j.far,(E!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,B=b.far);const ee=j.parent,re=b.cameras;G(b,ee);for(let ce=0;ce<re.length;ce++)G(re[ce],ee);re.length===2?J(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),q(j,b,ee)};function q(j,ee,re){re===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ce=j.children;for(let H=0,Te=ce.length;H<Te;H++)ce[H].updateMatrixWorld(!0);j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return a},this.setFoveation=function(j){a=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return M};let te=null;function ue(j,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const re=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ce=!1;re.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let H=0;H<re.length;H++){const Te=re[H];let be=null;if(p!==null)be=p.getViewport(Te);else{const Se=d.getViewSubImage(u,Te);be=Se.viewport,H===0&&(e.setRenderTargetTextures(f,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(f))}let oe=I[H];oe===void 0&&(oe=new Dt,oe.layers.enable(H),oe.viewport=new Xe,I[H]=oe),oe.matrix.fromArray(Te.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Te.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(be.x,be.y,be.width,be.height),H===0&&(b.matrix.copy(oe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(oe)}}for(let re=0;re<_.length;re++){const ce=x[re],H=_[re];ce!==null&&H!==void 0&&H.update(ce,ee,c||o)}if(te&&te(j,ee),ee.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let re=null;for(const ce of M)ee.detectedPlanes.has(ce)||(re===null&&(re=[]),re.push(ce));if(re!==null)for(const ce of re)M.delete(ce),S.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of ee.detectedPlanes)if(!M.has(ce))M.add(ce),S.set(ce,ee.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const H=S.get(ce);ce.lastChangedTime>H&&(S.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}g=null}const K=new il;K.setAnimationLoop(ue),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}function Gp(l,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,el(l)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?a(m,f,_,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===St&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===St&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=l.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===St&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kp(l,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?l.getParameter(35375):0;function a(_,x){const M=x.program;n.uniformBlockBinding(_,M)}function c(_,x){let M=i[_.id];M===void 0&&(g(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(_,S);const C=e.render.frame;s[_.id]!==C&&(u(_),s[_.id]=C)}function h(_){const x=d();_.__bindingPointIndex=x;const M=l.createBuffer(),S=_.__size,C=_.usage;return l.bindBuffer(35345,M),l.bufferData(35345,S,C),l.bindBuffer(35345,null),l.bindBufferBase(35345,x,M),M}function d(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=i[_.id],M=_.uniforms,S=_.__cache;l.bindBuffer(35345,x);for(let C=0,L=M.length;C<L;C++){const I=M[C];if(p(I,C,S)===!0){const b=I.__offset,E=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let V=0;V<E.length;V++){const P=E[V],R=v(P);typeof P=="number"?(I.__data[0]=P,l.bufferSubData(35345,b+B,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=P.elements[0],I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=P.elements[0],I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=P.elements[0]):(P.toArray(I.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,b,I.__data)}}l.bindBuffer(35345,null)}function p(_,x,M){const S=_.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const C=Array.isArray(S)?S:[S],L=[];for(let I=0;I<C.length;I++)L.push(C[I].clone());M[x]=L}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const C=Array.isArray(M[x])?M[x]:[M[x]],L=Array.isArray(S)?S:[S];for(let I=0;I<C.length;I++){const b=C[I];if(b.equals(L[I])===!1)return b.copy(L[I]),!0}}return!1}function g(_){const x=_.uniforms;let M=0;const S=16;let C=0;for(let L=0,I=x.length;L<I;L++){const b=x[L],E={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let V=0,P=B.length;V<P;V++){const R=B[V],U=v(R);E.boundary+=U.boundary,E.storage+=U.storage}if(b.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,L>0){C=M%S;const V=S-C;C!==0&&V-E.boundary<0&&(M+=S-C,b.__offset=M)}M+=E.storage}return C=M%S,C>0&&(M+=S-C),_.__size=M,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),l.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const _ in i)l.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:a,update:c,dispose:f}}function Vp(){const l=ji("canvas");return l.style.display="block",l}class ll{constructor(e={}){const{canvas:t=Vp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kn,this.useLegacyLights=!0,this.toneMapping=fn,this.toneMappingExposure=1;const f=this;let _=!1,x=0,M=0,S=null,C=-1,L=null;const I=new Xe,b=new Xe;let E=null,B=t.width,V=t.height,P=1,R=null,U=null;const z=new Xe(0,0,B,V),J=new Xe(0,0,B,V);let G=!1;const q=new Br;let te=!1,ue=!1,K=null;const j=new rt,ee=new F,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return S===null?P:1}let H=n;function Te(T,k){for(let Y=0;Y<T.length;Y++){const O=T[Y],Z=t.getContext(O,k);if(Z!==null)return Z}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&k.shift(),H=Te(k,T),H===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,oe,Se,Ge,xe,Le,Ze,Ye,et,Ke,Oe,He,ut,A,w,X,ne,se,le,D,Q,W,he,me;function _e(){be=new Jd(H),oe=new qd(H,be,e),be.init(oe),W=new Np(H,be,oe),Se=new Ip(H,be,oe),Ge=new tf,xe=new xp,Le=new Up(H,be,Se,xe,oe,W,Ge),Ze=new Xd(f),Ye=new Kd(f),et=new dh(H,oe),he=new Hd(H,be,et,oe),Ke=new Qd(H,et,Ge,he),Oe=new of(H,Ke,et,Ge),le=new rf(H,oe,Le),X=new jd(xe),He=new _p(f,Ze,Ye,be,oe,he,X),ut=new Gp(f,xe),A=new Mp,w=new Ap(be,oe),se=new Vd(f,Ze,Ye,Se,Oe,u,a),ne=new Dp(f,Oe,oe),me=new kp(H,Ge,oe,Se),D=new Wd(H,be,Ge,oe),Q=new ef(H,be,Ge,oe),Ge.programs=He.programs,f.capabilities=oe,f.extensions=be,f.properties=xe,f.renderLists=A,f.shadowMap=ne,f.state=Se,f.info=Ge}_e();const de=new Bp(f,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(B,V,!1))},this.getSize=function(T){return T.set(B,V)},this.setSize=function(T,k,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,V=k,t.width=Math.floor(T*P),t.height=Math.floor(k*P),Y===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(B*P,V*P).floor()},this.setDrawingBufferSize=function(T,k,Y){B=T,V=k,P=Y,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,k,Y,O){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,k,Y,O),Se.viewport(I.copy(z).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,k,Y,O){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,k,Y,O),Se.scissor(b.copy(J).multiplyScalar(P).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){Se.setScissorTest(G=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,k=!0,Y=!0){let O=0;T&&(O|=16384),k&&(O|=256),Y&&(O|=1024),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",De,!1),A.dispose(),w.dispose(),xe.dispose(),Ze.dispose(),Ye.dispose(),Oe.dispose(),he.dispose(),me.dispose(),He.dispose(),de.dispose(),de.removeEventListener("sessionstart",ye),de.removeEventListener("sessionend",We),K&&(K.dispose(),K=null),$e.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Ge.autoReset,k=ne.enabled,Y=ne.autoUpdate,O=ne.needsUpdate,Z=ne.type;_e(),Ge.autoReset=T,ne.enabled=k,ne.autoUpdate=Y,ne.needsUpdate=O,ne.type=Z}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){const k=T.target;k.removeEventListener("dispose",Je),N(k)}function N(T){$(T),xe.remove(T)}function $(T){const k=xe.get(T).programs;k!==void 0&&(k.forEach(function(Y){He.releaseProgram(Y)}),T.isShaderMaterial&&He.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,O,Z,Me){k===null&&(k=re);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=xl(T,k,Y,O,Z);Se.setMaterial(O,we);let Re=Y.index,Ie=1;O.wireframe===!0&&(Re=Ke.getWireframeAttribute(Y),Ie=2);const Ue=Y.drawRange,Ne=Y.attributes.position;let Ve=Ue.start*Ie,vt=(Ue.start+Ue.count)*Ie;Me!==null&&(Ve=Math.max(Ve,Me.start*Ie),vt=Math.min(vt,(Me.start+Me.count)*Ie)),Re!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,Re.count)):Ne!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,Ne.count));const Ot=vt-Ve;if(Ot<0||Ot===1/0)return;he.setup(Z,O,Ce,Y,Re);let En,tt=D;if(Re!==null&&(En=et.get(Re),tt=Q,tt.setIndex(En)),Z.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*ce()),tt.setMode(1)):tt.setMode(4);else if(Z.isLine){let Fe=O.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*ce()),Z.isLineSegments?tt.setMode(1):Z.isLineLoop?tt.setMode(2):tt.setMode(3)}else Z.isPoints?tt.setMode(0):Z.isSprite&&tt.setMode(4);if(Z.isInstancedMesh)tt.renderInstances(Ve,Ot,Z.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Is=Math.min(Y.instanceCount,Fe);tt.renderInstances(Ve,Ot,Is)}else tt.render(Ve,Ot)},this.compile=function(T,k){function Y(O,Z,Me){O.transparent===!0&&O.side===Wt&&O.forceSinglePass===!1?(O.side=St,O.needsUpdate=!0,Ki(O,Z,Me),O.side=Sn,O.needsUpdate=!0,Ki(O,Z,Me),O.side=Wt):Ki(O,Z,Me)}g=w.get(T),g.init(),m.push(g),T.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(f.useLegacyLights),T.traverse(function(O){const Z=O.material;if(Z)if(Array.isArray(Z))for(let Me=0;Me<Z.length;Me++){const we=Z[Me];Y(we,T,O)}else Y(Z,T,O)}),m.pop(),g=null};let ie=null;function fe(T){ie&&ie(T)}function ye(){$e.stop()}function We(){$e.start()}const $e=new il;$e.setAnimationLoop(fe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){ie=T,de.setAnimationLoop(T),T===null?$e.stop():$e.start()},de.addEventListener("sessionstart",ye),de.addEventListener("sessionend",We),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,k,S),g=w.get(T,m.length),g.init(),m.push(g),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(j),ue=this.localClippingEnabled,te=X.init(this.clippingPlanes,ue),p=A.get(T,v.length),p.init(),v.push(p),dt(T,k,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(R,U),te===!0&&X.beginShadows();const Y=g.state.shadowsArray;if(ne.render(Y,T,k),te===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(p,T),g.setupLights(f.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let Z=0,Me=O.length;Z<Me;Z++){const we=O[Z];pn(p,T,we,we.viewport)}}else pn(p,T,k);S!==null&&(Le.updateMultisampleRenderTarget(S),Le.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(f,T,k),he.resetDefaultState(),C=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function dt(T,k,Y,O){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){O&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const we=Oe.update(T),Ce=T.material;Ce.visible&&p.push(T,we,Ce,Y,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||q.intersectsObject(T))){O&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const we=Oe.update(T),Ce=T.material;if(Array.isArray(Ce)){const Re=we.groups;for(let Ie=0,Ue=Re.length;Ie<Ue;Ie++){const Ne=Re[Ie],Ve=Ce[Ne.materialIndex];Ve&&Ve.visible&&p.push(T,we,Ve,Y,ee.z,Ne)}}else Ce.visible&&p.push(T,we,Ce,Y,ee.z,null)}}const Me=T.children;for(let we=0,Ce=Me.length;we<Ce;we++)dt(Me[we],k,Y,O)}function pn(T,k,Y,O){const Z=T.opaque,Me=T.transmissive,we=T.transparent;g.setupLightsView(Y),te===!0&&X.setGlobalState(f.clippingPlanes,Y),Me.length>0&&Qe(Z,Me,k,Y),O&&Se.viewport(I.copy(O)),Z.length>0&&Ut(Z,k,Y),Me.length>0&&Ut(Me,k,Y),we.length>0&&Ut(we,k,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Qe(T,k,Y,O){if(K===null){const Ce=oe.isWebGL2;K=new Vn(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Hi:Gn,minFilter:Vi,samples:Ce&&r===!0?4:0})}const Z=f.getRenderTarget();f.setRenderTarget(K),f.clear();const Me=f.toneMapping;f.toneMapping=fn,Ut(T,Y,O),Le.updateMultisampleRenderTarget(K),Le.updateRenderTargetMipmap(K);let we=!1;for(let Ce=0,Re=k.length;Ce<Re;Ce++){const Ie=k[Ce],Ue=Ie.object,Ne=Ie.geometry,Ve=Ie.material,vt=Ie.group;if(Ve.side===Wt&&Ue.layers.test(O.layers)){const Ot=Ve.side;Ve.side=St,Ve.needsUpdate=!0,Yt(Ue,Y,O,Ne,Ve,vt),Ve.side=Ot,Ve.needsUpdate=!0,we=!0}}we===!0&&(Le.updateMultisampleRenderTarget(K),Le.updateRenderTargetMipmap(K)),f.setRenderTarget(Z),f.toneMapping=Me}function Ut(T,k,Y){const O=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Me=T.length;Z<Me;Z++){const we=T[Z],Ce=we.object,Re=we.geometry,Ie=O===null?we.material:O,Ue=we.group;Ce.layers.test(Y.layers)&&Yt(Ce,k,Y,Re,Ie,Ue)}}function Yt(T,k,Y,O,Z,Me){T.onBeforeRender(f,k,Y,O,Z,Me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(f,k,Y,O,T,Me),Z.transparent===!0&&Z.side===Wt&&Z.forceSinglePass===!1?(Z.side=St,Z.needsUpdate=!0,f.renderBufferDirect(Y,k,O,Z,T,Me),Z.side=Sn,Z.needsUpdate=!0,f.renderBufferDirect(Y,k,O,Z,T,Me),Z.side=Wt):f.renderBufferDirect(Y,k,O,Z,T,Me),T.onAfterRender(f,k,Y,O,Z,Me)}function Ki(T,k,Y){k.isScene!==!0&&(k=re);const O=xe.get(T),Z=g.state.lights,Me=g.state.shadowsArray,we=Z.state.version,Ce=He.getParameters(T,Z.state,Me,k,Y),Re=He.getProgramCacheKey(Ce);let Ie=O.programs;O.environment=T.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(T.isMeshStandardMaterial?Ye:Ze).get(T.envMap||O.environment),Ie===void 0&&(T.addEventListener("dispose",Je),Ie=new Map,O.programs=Ie);let Ue=Ie.get(Re);if(Ue!==void 0){if(O.currentProgram===Ue&&O.lightsStateVersion===we)return qr(T,Ce),Ue}else Ce.uniforms=He.getUniforms(T),T.onBuild(Y,Ce,f),T.onBeforeCompile(Ce,f),Ue=He.acquireProgram(Ce,Re),Ie.set(Re,Ue),O.uniforms=Ce.uniforms;const Ne=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=X.uniform),qr(T,Ce),O.needsLights=Ml(T),O.lightsStateVersion=we,O.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ve=Ue.getUniforms(),vt=Ts.seqWithValue(Ve.seq,Ne);return O.currentProgram=Ue,O.uniformsList=vt,Ue}function qr(T,k){const Y=xe.get(T);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function xl(T,k,Y,O,Z){k.isScene!==!0&&(k=re),Le.resetTextureUnits();const Me=k.fog,we=O.isMeshStandardMaterial?k.environment:null,Ce=S===null?f.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:kn,Re=(O.isMeshStandardMaterial?Ye:Ze).get(O.envMap||we),Ie=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!O.normalMap&&!!Y.attributes.tangent,Ne=!!Y.morphAttributes.position,Ve=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color,Ot=O.toneMapped?f.toneMapping:fn,En=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=En!==void 0?En.length:0,Fe=xe.get(O),Is=g.state.lights;if(te===!0&&(ue===!0||T!==L)){const Ct=T===L&&O.id===C;X.setState(O,T,Ct)}let ct=!1;O.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Is.state.version||Fe.outputEncoding!==Ce||Z.isInstancedMesh&&Fe.instancing===!1||!Z.isInstancedMesh&&Fe.instancing===!0||Z.isSkinnedMesh&&Fe.skinning===!1||!Z.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Re||O.fog===!0&&Fe.fog!==Me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==X.numPlanes||Fe.numIntersection!==X.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Ue||Fe.morphTargets!==Ne||Fe.morphNormals!==Ve||Fe.morphColors!==vt||Fe.toneMapping!==Ot||oe.isWebGL2===!0&&Fe.morphTargetsCount!==tt)&&(ct=!0):(ct=!0,Fe.__version=O.version);let Tn=Fe.currentProgram;ct===!0&&(Tn=Ki(O,k,Z));let jr=!1,Ei=!1,Us=!1;const _t=Tn.getUniforms(),An=Fe.uniforms;if(Se.useProgram(Tn.program)&&(jr=!0,Ei=!0,Us=!0),O.id!==C&&(C=O.id,Ei=!0),jr||L!==T){if(_t.setValue(H,"projectionMatrix",T.projectionMatrix),oe.logarithmicDepthBuffer&&_t.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),L!==T&&(L=T,Ei=!0,Us=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ct=_t.map.cameraPosition;Ct!==void 0&&Ct.setValue(H,ee.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Z.isSkinnedMesh)&&_t.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(Z.isSkinnedMesh){_t.setOptional(H,Z,"bindMatrix"),_t.setOptional(H,Z,"bindMatrixInverse");const Ct=Z.skeleton;Ct&&(oe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),_t.setValue(H,"boneTexture",Ct.boneTexture,Le),_t.setValue(H,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ns=Y.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&oe.isWebGL2===!0)&&le.update(Z,Y,Tn),(Ei||Fe.receiveShadow!==Z.receiveShadow)&&(Fe.receiveShadow=Z.receiveShadow,_t.setValue(H,"receiveShadow",Z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(An.envMap.value=Re,An.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ei&&(_t.setValue(H,"toneMappingExposure",f.toneMappingExposure),Fe.needsLights&&yl(An,Us),Me&&O.fog===!0&&ut.refreshFogUniforms(An,Me),ut.refreshMaterialUniforms(An,O,P,V,K),Ts.upload(H,Fe.uniformsList,An,Le)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ts.upload(H,Fe.uniformsList,An,Le),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(H,"center",Z.center),_t.setValue(H,"modelViewMatrix",Z.modelViewMatrix),_t.setValue(H,"normalMatrix",Z.normalMatrix),_t.setValue(H,"modelMatrix",Z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ct=O.uniformsGroups;for(let zs=0,Sl=Ct.length;zs<Sl;zs++)if(oe.isWebGL2){const Xr=Ct[zs];me.update(Xr,Tn),me.bind(Xr,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function yl(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ml(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,k,Y){xe.get(T.texture).__webglTexture=k,xe.get(T.depthTexture).__webglTexture=Y;const O=xe.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const Y=xe.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Y=0){S=T,x=k,M=Y;let O=!0,Z=null,Me=!1,we=!1;if(T){const Re=xe.get(T);Re.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),O=!1):Re.__webglFramebuffer===void 0?Le.setupRenderTarget(T):Re.__hasExternalTextures&&Le.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);const Ue=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Z=Ue[k],Me=!0):oe.isWebGL2&&T.samples>0&&Le.useMultisampledRTT(T)===!1?Z=xe.get(T).__webglMultisampledFramebuffer:Z=Ue,I.copy(T.viewport),b.copy(T.scissor),E=T.scissorTest}else I.copy(z).multiplyScalar(P).floor(),b.copy(J).multiplyScalar(P).floor(),E=G;if(Se.bindFramebuffer(36160,Z)&&oe.drawBuffers&&O&&Se.drawBuffers(T,Z),Se.viewport(I),Se.scissor(b),Se.setScissorTest(E),Me){const Re=xe.get(T.texture);H.framebufferTexture2D(36160,36064,34069+k,Re.__webglTexture,Y)}else if(we){const Re=xe.get(T.texture),Ie=k||0;H.framebufferTextureLayer(36160,36064,Re.__webglTexture,Y||0,Ie)}C=-1},this.readRenderTargetPixels=function(T,k,Y,O,Z,Me,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){Se.bindFramebuffer(36160,Ce);try{const Re=T.texture,Ie=Re.format,Ue=Re.type;if(Ie!==jt&&W.convert(Ie)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ue===Hi&&(be.has("EXT_color_buffer_half_float")||oe.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ue!==Gn&&W.convert(Ue)!==H.getParameter(35738)&&!(Ue===Fn&&(oe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-O&&Y>=0&&Y<=T.height-Z&&H.readPixels(k,Y,O,Z,W.convert(Ie),W.convert(Ue),Me)}finally{const Re=S!==null?xe.get(S).__webglFramebuffer:null;Se.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,k,Y=0){const O=Math.pow(2,-Y),Z=Math.floor(k.image.width*O),Me=Math.floor(k.image.height*O);Le.setTexture2D(k,0),H.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,Z,Me),Se.unbindTexture()},this.copyTextureToTexture=function(T,k,Y,O=0){const Z=k.image.width,Me=k.image.height,we=W.convert(Y.format),Ce=W.convert(Y.type);Le.setTexture2D(Y,0),H.pixelStorei(37440,Y.flipY),H.pixelStorei(37441,Y.premultiplyAlpha),H.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?H.texSubImage2D(3553,O,T.x,T.y,Z,Me,we,Ce,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(3553,O,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):H.texSubImage2D(3553,O,T.x,T.y,we,Ce,k.image),O===0&&Y.generateMipmaps&&H.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,k,Y,O,Z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Re=W.convert(O.format),Ie=W.convert(O.type);let Ue;if(O.isData3DTexture)Le.setTexture3D(O,0),Ue=32879;else if(O.isDataArrayTexture)Le.setTexture2DArray(O,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment);const Ne=H.getParameter(3314),Ve=H.getParameter(32878),vt=H.getParameter(3316),Ot=H.getParameter(3315),En=H.getParameter(32877),tt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(3314,tt.width),H.pixelStorei(32878,tt.height),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Ue,Z,k.x,k.y,k.z,Me,we,Ce,Re,Ie,tt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ue,Z,k.x,k.y,k.z,Me,we,Ce,Re,tt.data)):H.texSubImage3D(Ue,Z,k.x,k.y,k.z,Me,we,Ce,Re,Ie,tt),H.pixelStorei(3314,Ne),H.pixelStorei(32878,Ve),H.pixelStorei(3316,vt),H.pixelStorei(3315,Ot),H.pixelStorei(32877,En),Z===0&&O.generateMipmaps&&H.generateMipmap(Ue),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){x=0,M=0,S=null,Se.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Hp extends ll{}Hp.prototype.isWebGL1Renderer=!0;class kr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new kr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Wp extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qp extends jn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class mr extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jp extends jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ha={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class Xp{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Yp=new Xp;class cl{constructor(e){this.manager=e!==void 0?e:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class $p extends cl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r=ji("img");function a(){h(),ha.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){r.removeEventListener("load",a,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",a,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class Zp extends cl{constructor(e){super(e)}load(e,t,n,i){const s=new bt,o=new $p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class hl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const gr=new rt,ua=new F,da=new F;class Kp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ua.setFromMatrixPosition(e.matrixWorld),t.position.copy(ua),da.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(da),t.updateMatrixWorld(),gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fa=new rt,Li=new F,vr=new F;class Jp extends Kp{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Li.setFromMatrixPosition(e.matrixWorld),n.position.copy(Li),vr.copy(n.position),vr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vr),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa)}}class Qp extends hl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class em extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ma=new Ee;class tm{constructor(e=new Ee(1/0,1/0),t=new Ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ma.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ma).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);class Xt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Xt);const n=this.elements,i=e.elements,s=t.elements,o=n[0],r=n[1],a=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],v=i[0],m=i[1],f=i[2],_=i[3],x=i[4],M=i[5],S=i[6],C=i[7],L=i[8];return s[0]=o*v+r*_+a*S,s[1]=o*m+r*x+a*C,s[2]=o*f+r*M+a*L,s[3]=c*v+h*_+d*S,s[4]=c*m+h*x+d*C,s[5]=c*f+h*M+d*L,s[6]=u*v+p*_+g*S,s[7]=u*m+p*x+g*C,s[8]=u*f+p*M+g*L,t}scale(e,t){t===void 0&&(t=new Xt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const c=a;let h;const d=4;let u;do{if(o=c-a,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const p=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*p;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Xt);const t=3,n=6,i=nm;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const a=r;let c;const h=n;let d;do{if(s=a-r,i[s+n*s]===0){for(o=s+1;o<a;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<a;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,r=n+n,a=i+i,c=t*o,h=t*r,d=t*a,u=n*r,p=n*a,g=i*a,v=s*o,m=s*r,f=s*a,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-f,_[3*0+2]=d+m,_[3*1+0]=h+f,_[3*1+1]=1-(c+g),_[3*1+2]=p-v,_[3*2+0]=d-m,_[3*2+1]=p+v,_[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new Xt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const nm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z;return t.x=r*s-a*i,t.y=a*n-o*s,t.z=o*i-r*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Xt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=im,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=sm;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ga),ga.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const im=new y,sm=new y,ga=new y;class It{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(e[0]),r&&r.vmult(s,s),o.copy(s);for(let a=1;a<e.length;a++){let c=e[a];r&&(r.vmult(c,va),c=va),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new It().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&r&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,r,a){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),r.set(c.x,c.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=_a,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=_a,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,c,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,r=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(r,a),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,a),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const va=new y,_a=[new y,new y,new y,new y,new y,new y,new y,new y];class xa{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class st{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=rm,i=om;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new st);const n=this.x,i=this.y,s=this.z,o=this.w,r=e.x,a=e.y,c=e.z,h=e.w;return t.x=n*h+o*r+i*c-s*a,t.y=i*h+o*a+s*r-n*c,t.z=s*h+o*c+n*a-i*r,t.w=o*h-n*r-i*a-s*c,t}inverse(e){e===void 0&&(e=new st);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new st),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z,c=this.w,h=c*n+r*s-a*i,d=c*i+a*n-o*s,u=c*s+o*i-r*n,p=-o*n-r*i-a*s;return t.x=h*c+p*-o+d*-a-u*-r,t.y=d*c+p*-r+u*-o-h*-a,t.z=u*c+p*-a+h*-r-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,r=this.y,a=this.z,c=this.w;switch(t){case"YZX":const h=o*r+a*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,p=a*a;n=Math.atan2(2*r*c-2*o*a,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*r*a,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),r=Math.cos(n/2),a=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*o*r+s*c*h,this.y=s*c*r-a*o*h,this.z=s*o*h+a*c*r,this.w=s*o*r-a*c*h):i==="YXZ"?(this.x=a*o*r+s*c*h,this.y=s*c*r-a*o*h,this.z=s*o*h-a*c*r,this.w=s*o*r+a*c*h):i==="ZXY"?(this.x=a*o*r-s*c*h,this.y=s*c*r+a*o*h,this.z=s*o*h+a*c*r,this.w=s*o*r-a*c*h):i==="ZYX"?(this.x=a*o*r-s*c*h,this.y=s*c*r+a*o*h,this.z=s*o*h-a*c*r,this.w=s*o*r+a*c*h):i==="YZX"?(this.x=a*o*r+s*c*h,this.y=s*c*r+a*o*h,this.z=s*o*h-a*c*r,this.w=s*o*r-a*c*h):i==="XZY"&&(this.x=a*o*r-s*c*h,this.y=s*c*r-a*o*h,this.z=s*o*h+a*c*r,this.w=s*o*r+a*c*h),this}clone(){return new st(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new st);const i=this.x,s=this.y,o=this.z,r=this.w;let a=e.x,c=e.y,h=e.z,d=e.w,u,p,g,v,m;return p=i*a+s*c+o*h+r*d,p<0&&(p=-p,a=-a,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(v=1-t,m=t),n.x=v*i+m*a,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*r+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new st);const s=e.x*n.x,o=e.y*n.y,r=e.z*n.z,a=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+o*h-r*c),i.y+=u*(o*d+r*a-s*h),i.z+=u*(r*d+s*c-o*a),i.w+=u*(-s*a-o*c-r*h),i}}const rm=new y,om=new y,am={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ge{constructor(e){e===void 0&&(e={}),this.id=ge.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ge.idCounter=0;ge.types=am;class ke{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new st,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ke.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ke.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(ya),ya.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const ya=new st;class ki extends ge{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:ge.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const o=e[s],r=o.length;for(let a=0;a!==r;a++){const c=(a+1)%r;t[o[a]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ki.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new y,o=new y;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,r,a,c){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new y;m.copy(v),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,p,r,a,c)}findSeparatingAxis(e,t,n,i,s,o,r,a){const c=new y,h=new y,d=new y,u=new y,p=new y,g=new y;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],c);const _=m.testSepAxis(c,e,t,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const f=r?r.length:m.faces.length;for(let _=0;_<f;_++){const x=r?r[_]:_;c.copy(m.faceNormals[x]),n.vmult(c,c);const M=m.testSepAxis(c,e,t,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],h);const _=m.testSepAxis(h,e,t,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const f=a?a.length:e.faces.length;for(let _=0;_<f;_++){const x=a?a[_]:_;h.copy(e.faceNormals[x]),s.vmult(h,h);const M=m.testSepAxis(h,e,t,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],u);for(let _=0;_!==e.uniqueEdges.length;_++)if(s.vmult(e.uniqueEdges[_],p),u.cross(p,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const r=this;ki.project(r,e,n,i,_r),ki.project(t,e,s,o,xr);const a=_r[0],c=_r[1],h=xr[0],d=xr[1];if(a<d||h<c)return!1;const u=a-d,p=h-c;return u<p?u:p}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*r*2*r),t.y=1/12*e*(2*s*2*s+2*r*2*r),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,r){const a=new y,c=new y,h=new y,d=new y,u=new y,p=new y,g=new y,v=new y,m=this,f=[],_=i,x=f;let M=-1,S=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){a.copy(m.faceNormals[E]),n.vmult(a,a);const B=a.dot(e);B<S&&(S=B,M=E)}if(M<0)return;const C=m.faces[M];C.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let B=0;B<m.faces[E].length;B++)C.indexOf(m.faces[E][B])!==-1&&E!==M&&C.connectedFaces.indexOf(E)===-1&&C.connectedFaces.push(E);const L=C.length;for(let E=0;E<L;E++){const B=m.vertices[C[E]],V=m.vertices[C[(E+1)%L]];B.vsub(V,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(B),n.vmult(p,p),t.vadd(p,p);const P=C.connectedFaces[E];g.copy(this.faceNormals[P]);const R=this.getPlaneConstantOfFace(P);v.copy(g),n.vmult(v,v);const U=R-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,U);_.length;)_.shift();for(;x.length;)_.push(x.shift())}g.copy(this.faceNormals[M]);const I=this.getPlaneConstantOfFace(M);v.copy(g),n.vmult(v,v);const b=I-v.dot(t);for(let E=0;E<_.length;E++){let B=v.dot(_[E])+b;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){const V=_[E];if(B<=1e-6){const P={point:V,normal:v,depth:B};r.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const r=e.length;if(r<2)return t;let a=e[e.length-1],c=e[0];s=n.dot(a)+i;for(let h=0;h<r;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const d=new y;d.copy(c),t.push(d)}else{const d=new y;a.lerp(c,s/(s-o),d),t.push(d)}else if(o<0){const d=new y;a.lerp(c,s/(s-o),d),t.push(d),t.push(c)}a=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,r,a,c,h,d,u=new y;for(let p=0;p<s.length;p++){u.copy(s[p]),t.vmult(u,u),e.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,a),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new y;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const c=t[n[r][0]],h=new y;e.vsub(c,h);const d=a.dot(h),u=new y;o.vsub(c,u);const p=a.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,r=lm;let a=0,c=0;const h=cm,d=e.vertices;h.setZero(),ke.vectorToLocalFrame(n,i,t,r),ke.pointToLocalFrame(n,i,h,h);const u=h.dot(r);c=a=d[0].dot(r);for(let p=1;p<o;p++){const g=d[p].dot(r);g>a&&(a=g),g<c&&(c=g)}if(c-=u,a-=u,c>a){const p=c;c=a,a=p}s[0]=a,s[1]=c}}const _r=[],xr=[];new y;const lm=new y,cm=new y;class Yi extends ge{constructor(e){super({type:ge.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new ki({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Yi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)yn.set(s[o][0],s[o][1],s[o][2]),t.vmult(yn,yn),e.vadd(yn,yn),n(yn.x,yn.y,yn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Zt[0].set(s.x,s.y,s.z),Zt[1].set(-s.x,s.y,s.z),Zt[2].set(-s.x,-s.y,s.z),Zt[3].set(-s.x,-s.y,-s.z),Zt[4].set(s.x,-s.y,-s.z),Zt[5].set(s.x,s.y,-s.z),Zt[6].set(-s.x,s.y,-s.z),Zt[7].set(s.x,-s.y,s.z);const o=Zt[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const a=Zt[r];t.vmult(a,a),e.vadd(a,a);const c=a.x,h=a.y,d=a.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yn=new y,Zt=[new y,new y,new y,new y,new y,new y,new y,new y],Vr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Hr={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends ul{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new st,this.initQuaternion=new st,this.previousQuaternion=new st,this.interpolatedQuaternion=new st,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Xt,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Xt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new It,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===pe.AWAKE&&n<i?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&n>i?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new st;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const r=t[s].length(),a=o.boundingSphereRadius;r+a>i&&(i=r+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=hm,o=um,r=this.quaternion,a=this.aabb,c=dm;for(let h=0;h!==i;h++){const d=e[h];r.vmult(t[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?a.copy(c):a.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=fm,i=pm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=gm;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const n=vm,i=_m;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=t,i=xm;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=ym;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const n=Mm,i=Sm;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=bm;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Yi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,a=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=r.x*p*u.x,i.y+=r.y*p*u.y,i.z+=r.z*p*u.z;const g=d.elements,v=this.angularFactor,m=a.x*v.x,f=a.y*v.y,_=a.z*v.z;s.x+=e*(g[0]*m+g[1]*f+g[2]*_),s.y+=e*(g[3]*m+g[4]*f+g[5]*_),s.z+=e*(g[6]*m+g[7]*f+g[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=Vr.DYNAMIC;pe.STATIC=Vr.STATIC;pe.KINEMATIC=Vr.KINEMATIC;pe.AWAKE=Hr.AWAKE;pe.SLEEPY=Hr.SLEEPY;pe.SLEEPING=Hr.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const hm=new y,um=new st,dm=new It,fm=new Xt,pm=new Xt,mm=new Xt,gm=new y,vm=new y,_m=new y,xm=new y,ym=new y,Mm=new y,Sm=new y,bm=new y;class wm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Em;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Tm,i=Am,s=Cm,o=e.length;for(let r=0;r!==o;r++)i[r]=e[r],s[r]=t[r];e.length=0,t.length=0;for(let r=0;r!==o;r++){const a=i[r].id,c=s[r].id,h=a<c?`${a},${c}`:`${c},${a}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const a=n.keys.pop(),c=n[a];e.push(i[c]),t.push(s[c]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Em=new y;new y;new st;new y;const Tm={keys:[]},Am=[],Cm=[];new y;new y;new y;class Pm extends wm{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,r;for(let a=0;a!==s;a++)for(let c=0;c!==a;c++)o=i[a],r=i[c],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class As{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,r){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let dl,fl,pl,ml,gl,vl,_l;const Wr={CLOSEST:1,ANY:2,ALL:4};dl=ge.types.SPHERE;fl=ge.types.PLANE;pl=ge.types.BOX;ml=ge.types.CYLINDER;gl=ge.types.CONVEXPOLYHEDRON;vl=ge.types.HEIGHTFIELD;_l=ge.types.TRIMESH;class it{get[dl](){return this._intersectSphere}get[fl](){return this._intersectPlane}get[pl](){return this._intersectBox}get[ml](){return this._intersectConvex}get[gl](){return this._intersectConvex}get[vl](){return this._intersectHeightfield}get[_l](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=it.ANY,this.result=new As,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||it.ANY,this.result=t.result||new As,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ma),yr.length=0,e.broadphase.aabbQuery(e,Ma,yr),this.intersectBodies(yr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Lm,s=Rm;for(let o=0,r=e.shapes.length;o<r;o++){const a=e.shapes[o];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(qm(s,this.direction,n)>e.boundingSphereRadius)return;const r=this[e.type];r&&r.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,r=this.to,a=this.direction,c=new y(0,0,1);t.vmult(c,c);const h=new y;o.vsub(n,h);const d=h.dot(c);r.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(r)<d)return;const p=c.dot(a);if(Math.abs(p)<this.precision)return;const g=new y,v=new y,m=new y;o.vsub(n,g);const f=-c.dot(g)/p;a.scale(f,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Dm;o.from.copy(this.from),o.to.copy(this.to),ke.pointToLocalFrame(n,t,o.from,o.from),ke.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const r=Im;let a,c,h,d;a=c=0,h=d=e.data.length-1;const u=new It;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),a=Math.max(a,r[0]),c=Math.max(c,r[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let p=a;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(p,g,!1),ke.pointToWorldFrame(n,t,e.pillarOffset,Ms),this._intersectConvex(e.pillarConvex,t,Ms,i,s,Sa),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),ke.pointToWorldFrame(n,t,e.pillarOffset,Ms),this._intersectConvex(e.pillarConvex,t,Ms,i,s,Sa)}}}_intersectSphere(e,t,n,i,s){const o=this.from,r=this.to,a=e.radius,c=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-a**2,u=h**2-4*c*d,p=Um,g=Nm;if(!(u<0))if(u===0)o.lerp(r,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(r,v,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(r,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const r=zm,a=ba,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=c?c.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<f;x++){const M=c?c[x]:x,S=h[M],C=u[M],L=t,I=n;a.copy(d[S[0]]),L.vmult(a,a),a.vadd(I,a),a.vsub(g,a),L.vmult(C,r);const b=p.dot(r);if(Math.abs(b)<this.precision)continue;const E=r.dot(a)/b;if(!(E<0)){p.scale(E,wt),wt.vadd(g,wt),Vt.copy(d[S[0]]),L.vmult(Vt,Vt),I.vadd(Vt,Vt);for(let B=1;!_.shouldStop&&B<S.length-1;B++){Kt.copy(d[S[B]]),Jt.copy(d[S[B+1]]),L.vmult(Kt,Kt),L.vmult(Jt,Jt),I.vadd(Kt,Kt),I.vadd(Jt,Jt);const V=wt.distanceTo(g);!(it.pointInTriangle(wt,Vt,Kt,Jt)||it.pointInTriangle(wt,Kt,Vt,Jt))||V>m||this.reportIntersection(r,wt,s,i,M)}}}}_intersectTrimesh(e,t,n,i,s,o){const r=Fm,a=Hm,c=Wm,h=ba,d=Om,u=Bm,p=Gm,g=Vm,v=km,m=e.indices;e.vertices;const f=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),ke.vectorToLocalFrame(n,t,x,d),ke.pointToLocalFrame(n,t,f,u),ke.pointToLocalFrame(n,t,_,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const M=u.distanceSquared(p);e.tree.rayQuery(this,c,a);for(let S=0,C=a.length;!this.result.shouldStop&&S!==C;S++){const L=a[S];e.getNormal(L,r),e.getVertex(m[L*3],Vt),Vt.vsub(u,h);const I=d.dot(r),b=r.dot(h)/I;if(b<0)continue;d.scale(b,wt),wt.vadd(u,wt),e.getVertex(m[L*3+1],Kt),e.getVertex(m[L*3+2],Jt);const E=wt.distanceSquared(u);!(it.pointInTriangle(wt,Kt,Vt,Jt)||it.pointInTriangle(wt,Vt,Kt,Jt))||E>M||(ke.vectorToWorldFrame(t,r,v),ke.pointToWorldFrame(n,t,wt,g),this.reportIntersection(v,g,s,i,L))}a.length=0}reportIntersection(e,t,n,i,s){const o=this.from,r=this.to,a=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case it.ALL:this.hasHit=!0,c.set(o,r,e,t,n,i,a),c.hasHit=!0,this.callback(c);break;case it.CLOSEST:(a<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,r,e,t,n,i,a));break;case it.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,r,e,t,n,i,a),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Nn),n.vsub(t,Ri),e.vsub(t,Mr);const s=Nn.dot(Nn),o=Nn.dot(Ri),r=Nn.dot(Mr),a=Ri.dot(Ri),c=Ri.dot(Mr);let h,d;return(h=a*r-o*c)>=0&&(d=s*c-o*r)>=0&&h+d<s*a-o*o}}it.CLOSEST=Wr.CLOSEST;it.ANY=Wr.ANY;it.ALL=Wr.ALL;const Ma=new It,yr=[],Ri=new y,Mr=new y,Lm=new y,Rm=new st,wt=new y,Vt=new y,Kt=new y,Jt=new y;new y;new As;const Sa={faceList:[0]},Ms=new y,Dm=new it,Im=[],Um=new y,Nm=new y,zm=new y;new y;new y;const ba=new y,Fm=new y,Om=new y,Bm=new y,Gm=new y,km=new y,Vm=new y;new It;const Hm=[],Wm=new ke,Nn=new y,Ss=new y;function qm(l,e,t){t.vsub(l,Nn);const n=Nn.dot(e);return e.scale(n,Ss),Ss.vadd(l,Ss),t.distanceTo(Ss)}class jm{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class wa{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Zi{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Zi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new wa,this.jacobianElementB=new wa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,a=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Ea),r.scale(h,Ta),n.invInertiaWorldSolve.vmult(o,Aa),i.invInertiaWorldSolve.vmult(a,Ca),e.multiplyVectors(Ea,Aa)+t.multiplyVectors(Ta,Ca)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let c=s+o;return r.vmult(e.rotational,bs),c+=bs.dot(e.rotational),a.vmult(t.rotational,bs),c+=bs.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Xm;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Zi.idCounter=0;const Ea=new y,Ta=new y,Aa=new y,Ca=new y,bs=new y,Xm=new y;class Ym extends Zi{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,a=$m,c=Zm,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=Km,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,a),r.cross(f,c),f.negate(v.spatial),a.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const _=f.dot(g),x=this.restitution+1,M=x*u.dot(f)-x*h.dot(f)+p.dot(c)-d.dot(a),S=this.computeGiMf();return-_*t-M*n-e*S}getImpactVelocityAlongNormal(){const e=Jm,t=Qm,n=eg,i=tg,s=ng;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const $m=new y,Zm=new y,Km=new y,Jm=new y,Qm=new y,eg=new y,tg=new y,ng=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Pa extends Zi{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=ig,o=sg,r=this.t;n.cross(r,s),i.cross(r,o);const a=this.jacobianElementA,c=this.jacobianElementB;r.negate(a.spatial),s.negate(a.rotational),c.spatial.copy(r),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const ig=new y,sg=new y;class Rs{constructor(e,t,n){n=jm.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Rs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Rs.idCounter=0;class Ds{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ds.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ds.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new it;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class rg extends ge{constructor(){super({type:ge.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){ln.set(0,0,1),t.vmult(ln,ln);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ln.x===1?i.x=e.x:ln.x===-1&&(n.x=e.x),ln.y===1?i.y=e.y:ln.y===-1&&(n.y=e.y),ln.z===1?i.z=e.z:ln.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ln=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new It;new y;new It;new y;new y;new y;new y;new y;new y;new y;new It;new y;new ke;new It;class og{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class ag extends og{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,a=t.bodies,c=a.length,h=e;let d,u,p,g,v,m;if(r!==0)for(let M=0;M!==c;M++)a[M].updateSolveMassProperties();const f=cg,_=hg,x=lg;f.length=r,_.length=r,x.length=r;for(let M=0;M!==r;M++){const S=o[M];x[M]=0,_[M]=S.computeB(h),f[M]=1/S.computeC()}if(r!==0){for(let C=0;C!==c;C++){const L=a[C],I=L.vlambda,b=L.wlambda;I.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==r;C++){const L=o[C];d=_[C],u=f[C],m=x[C],v=L.computeGWlambda(),p=u*(d-v-L.eps*m),m+p<L.minForce?p=L.minForce-m:m+p>L.maxForce&&(p=L.maxForce-m),x[C]+=p,g+=p>0?p:-p,L.addToWlambda(p)}if(g*g<s)break}for(let C=0;C!==c;C++){const L=a[C],I=L.velocity,b=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),I.vadd(L.vlambda,I),L.wlambda.vmul(L.angularFactor,L.wlambda),b.vadd(L.wlambda,b)}let M=o.length;const S=1/h;for(;M--;)o[M].multiplier=x[M]*S}return n}}const lg=[],cg=[],hg=[];pe.STATIC;class ug{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class dg extends ug{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const qe={sphereSphere:ge.types.SPHERE,spherePlane:ge.types.SPHERE|ge.types.PLANE,boxBox:ge.types.BOX|ge.types.BOX,sphereBox:ge.types.SPHERE|ge.types.BOX,planeBox:ge.types.PLANE|ge.types.BOX,convexConvex:ge.types.CONVEXPOLYHEDRON,sphereConvex:ge.types.SPHERE|ge.types.CONVEXPOLYHEDRON,planeConvex:ge.types.PLANE|ge.types.CONVEXPOLYHEDRON,boxConvex:ge.types.BOX|ge.types.CONVEXPOLYHEDRON,sphereHeightfield:ge.types.SPHERE|ge.types.HEIGHTFIELD,boxHeightfield:ge.types.BOX|ge.types.HEIGHTFIELD,convexHeightfield:ge.types.CONVEXPOLYHEDRON|ge.types.HEIGHTFIELD,sphereParticle:ge.types.PARTICLE|ge.types.SPHERE,planeParticle:ge.types.PLANE|ge.types.PARTICLE,boxParticle:ge.types.BOX|ge.types.PARTICLE,convexParticle:ge.types.PARTICLE|ge.types.CONVEXPOLYHEDRON,cylinderCylinder:ge.types.CYLINDER,sphereCylinder:ge.types.SPHERE|ge.types.CYLINDER,planeCylinder:ge.types.PLANE|ge.types.CYLINDER,boxCylinder:ge.types.BOX|ge.types.CYLINDER,convexCylinder:ge.types.CONVEXPOLYHEDRON|ge.types.CYLINDER,heightfieldCylinder:ge.types.HEIGHTFIELD|ge.types.CYLINDER,particleCylinder:ge.types.PARTICLE|ge.types.CYLINDER,sphereTrimesh:ge.types.SPHERE|ge.types.TRIMESH,planeTrimesh:ge.types.PLANE|ge.types.TRIMESH};class fg{get[qe.sphereSphere](){return this.sphereSphere}get[qe.spherePlane](){return this.spherePlane}get[qe.boxBox](){return this.boxBox}get[qe.sphereBox](){return this.sphereBox}get[qe.planeBox](){return this.planeBox}get[qe.convexConvex](){return this.convexConvex}get[qe.sphereConvex](){return this.sphereConvex}get[qe.planeConvex](){return this.planeConvex}get[qe.boxConvex](){return this.boxConvex}get[qe.sphereHeightfield](){return this.sphereHeightfield}get[qe.boxHeightfield](){return this.boxHeightfield}get[qe.convexHeightfield](){return this.convexHeightfield}get[qe.sphereParticle](){return this.sphereParticle}get[qe.planeParticle](){return this.planeParticle}get[qe.boxParticle](){return this.boxParticle}get[qe.convexParticle](){return this.convexParticle}get[qe.cylinderCylinder](){return this.convexConvex}get[qe.sphereCylinder](){return this.sphereConvex}get[qe.planeCylinder](){return this.planeConvex}get[qe.boxCylinder](){return this.boxConvex}get[qe.convexCylinder](){return this.convexConvex}get[qe.heightfieldCylinder](){return this.heightfieldCylinder}get[qe.particleCylinder](){return this.particleCylinder}get[qe.sphereTrimesh](){return this.sphereTrimesh}get[qe.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new dg,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=e,r.bj=t):r=new Ym(e,t),r.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(r.restitution=c.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,r=this.world,a=this.currentContactMaterial;let c=a.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(r.frictionGravity||r.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new Pa(n,i,u*p),m=g.length?g.pop():new Pa(n,i,u*p);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*p,v.maxForce=m.maxForce=u*p,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Rn.setZero(),ui.setZero(),di.setZero();const s=t.bi;t.bj;for(let r=0;r!==e;r++)t=this.result[this.result.length-1-r],t.bi!==s?(Rn.vadd(t.ni,Rn),ui.vadd(t.ri,ui),di.vadd(t.rj,di)):(Rn.vsub(t.ni,Rn),ui.vadd(t.rj,ui),di.vadd(t.ri,di));const o=1/e;ui.scale(o,n.ri),di.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Rn.normalize(),Rn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const a=gg,c=vg,h=pg,d=mg;for(let u=0,p=e.length;u!==p;u++){const g=e[u],v=t[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const f=g.type&pe.KINEMATIC&&v.type&pe.STATIC||g.type&pe.STATIC&&v.type&pe.KINEMATIC||g.type&pe.KINEMATIC&&v.type&pe.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],a),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const x=g.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],c),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const S=v.shapes[M];if(!(x.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+S.boundingSphereRadius)continue;let C=null;x.material&&S.material&&(C=n.getContactMaterial(x.material,S.material)||null),this.currentContactMaterial=C||m||n.defaultContactMaterial;const L=x.type|S.type,I=this[L];if(I){let b=!1;x.type<S.type?b=I.call(this,x,S,h,d,a,c,g,v,x,S,f):b=I.call(this,S,x,d,h,c,a,v,g,x,S,f),b&&f&&(n.shapeOverlapKeeper.set(x.id,S.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,t,n,i,s,o,r,a,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(r,a,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,o,r,a,c,h,d){const u=this.createContactEquation(r,a,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,ws),u.ni.scale(u.ni.dot(ws),La),ws.vsub(La,u.rj),-ws.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(r.position,p),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,o,r,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}sphereBox(e,t,n,i,s,o,r,a,c,h,d){const u=this.v3pool,p=Hg;n.vsub(i,Es),t.getSideNormals(p,o);const g=e.radius;let v=!1;const m=qg,f=jg,_=Xg;let x=null,M=0,S=0,C=0,L=null;for(let z=0,J=p.length;z!==J&&v===!1;z++){const G=Gg;G.copy(p[z]);const q=G.length();G.normalize();const te=Es.dot(G);if(te<q+g&&te>0){const ue=kg,K=Vg;ue.copy(p[(z+1)%3]),K.copy(p[(z+2)%3]);const j=ue.length(),ee=K.length();ue.normalize(),K.normalize();const re=Es.dot(ue),ce=Es.dot(K);if(re<j&&re>-j&&ce<ee&&ce>-ee){const H=Math.abs(te-q-g);if((L===null||H<L)&&(L=H,S=re,C=ce,x=q,m.copy(G),f.copy(ue),_.copy(K),M++,d))return!0}}}if(M){v=!0;const z=this.createContactEquation(r,a,e,t,c,h);m.scale(-g,z.ri),z.ni.copy(m),z.ni.negate(z.ni),m.scale(x,m),f.scale(S,f),m.vadd(f,m),_.scale(C,_),m.vadd(_,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let I=u.get();const b=Wg;for(let z=0;z!==2&&!v;z++)for(let J=0;J!==2&&!v;J++)for(let G=0;G!==2&&!v;G++)if(I.set(0,0,0),z?I.vadd(p[0],I):I.vsub(p[0],I),J?I.vadd(p[1],I):I.vsub(p[1],I),G?I.vadd(p[2],I):I.vsub(p[2],I),i.vadd(I,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;v=!0;const q=this.createContactEquation(r,a,e,t,c,h);q.ri.copy(b),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(I),q.ri.vadd(n,q.ri),q.ri.vsub(r.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(a.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(I),I=null;const E=u.get(),B=u.get(),V=u.get(),P=u.get(),R=u.get(),U=p.length;for(let z=0;z!==U&&!v;z++)for(let J=0;J!==U&&!v;J++)if(z%3!==J%3){p[J].cross(p[z],E),E.normalize(),p[z].vadd(p[J],B),V.copy(n),V.vsub(B,V),V.vsub(i,V);const G=V.dot(E);E.scale(G,P);let q=0;for(;q===z%3||q===J%3;)q++;R.copy(n),R.vsub(P,R),R.vsub(B,R),R.vsub(i,R);const te=Math.abs(G),ue=R.length();if(te<p[q].length()&&ue<g){if(d)return!0;v=!0;const K=this.createContactEquation(r,a,e,t,c,h);B.vadd(P,K.rj),K.rj.copy(K.rj),R.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(r.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(a.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}u.release(E,B,V,P,R)}planeBox(e,t,n,i,s,o,r,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}convexConvex(e,t,n,i,s,o,r,a,c,h,d,u,p){const g=l0;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,u,p)){const v=[],m=c0;e.clipAgainstHull(n,s,t,i,o,g,-100,100,v);let f=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(r,a,e,t,c,h),M=x.ri,S=x.rj;g.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,M),S.copy(v[_].point),M.vsub(n,M),S.vsub(i,S),M.vadd(n,M),M.vsub(r.position,M),S.vadd(i,S),S.vsub(a.position,S),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,s,o,r,a,c,h,d){const u=this.v3pool;n.vsub(i,Yg);const p=t.faceNormals,g=t.faces,v=t.vertices,m=e.radius;let f=!1;for(let _=0;_!==v.length;_++){const x=v[_],M=Jg;o.vmult(x,M),i.vadd(M,M);const S=Kg;if(M.vsub(n,S),S.lengthSquared()<m*m){if(d)return!0;f=!0;const C=this.createContactEquation(r,a,e,t,c,h);C.ri.copy(S),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(m,C.ri),M.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(r.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(a.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let _=0,x=g.length;_!==x&&f===!1;_++){const M=p[_],S=g[_],C=Qg;o.vmult(M,C);const L=e0;o.vmult(v[S[0]],L),L.vadd(i,L);const I=t0;C.scale(-m,I),n.vadd(I,I);const b=n0;I.vsub(L,b);const E=b.dot(C),B=i0;if(n.vsub(L,B),E<0&&B.dot(C)>0){const V=[];for(let P=0,R=S.length;P!==R;P++){const U=u.get();o.vmult(v[S[P]],U),i.vadd(U,U),V.push(U)}if(Bg(V,C,n)){if(d)return!0;f=!0;const P=this.createContactEquation(r,a,e,t,c,h);C.scale(-m,P.ri),C.negate(P.ni);const R=u.get();C.scale(-E,R);const U=u.get();C.scale(-m,U),n.vsub(i,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(R,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(a.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(r.position,P.ri),u.release(R),u.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let z=0,J=V.length;z!==J;z++)u.release(V[z]);return}else for(let P=0;P!==S.length;P++){const R=u.get(),U=u.get();o.vmult(v[S[(P+1)%S.length]],R),o.vmult(v[S[(P+2)%S.length]],U),i.vadd(R,R),i.vadd(U,U);const z=$g;U.vsub(R,z);const J=Zg;z.unit(J);const G=u.get(),q=u.get();n.vsub(R,q);const te=q.dot(J);J.scale(te,G),G.vadd(R,G);const ue=u.get();if(G.vsub(n,ue),te>0&&te*te<z.lengthSquared()&&ue.lengthSquared()<m*m){if(d)return!0;const K=this.createContactEquation(r,a,e,t,c,h);G.vsub(i,K.rj),G.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(a.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(r.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let j=0,ee=V.length;j!==ee;j++)u.release(V[j]);u.release(R),u.release(U),u.release(G),u.release(ue),u.release(q);return}u.release(R),u.release(U),u.release(G),u.release(ue),u.release(q)}for(let P=0,R=V.length;P!==R;P++)u.release(V[P])}}}planeConvex(e,t,n,i,s,o,r,a,c,h,d){const u=s0,p=r0;p.set(0,0,1),s.vmult(p,p);let g=0;const v=o0;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),p.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(r,a,e,t,c,h),x=a0;p.scale(p.dot(v),x),u.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(p),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(r.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(a.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,r,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}sphereHeightfield(e,t,n,i,s,o,r,a,c,h,d){const u=t.data,p=e.radius,g=t.elementSize,v=M0,m=y0;ke.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,_=Math.ceil((m.x+p)/g)+1,x=Math.floor((m.y-p)/g)-1,M=Math.ceil((m.y+p)/g)+1;if(_<0||M<0||f>u.length||x>u[0].length)return;f<0&&(f=0),_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),f>=u.length&&(f=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const S=[];t.getRectMinMax(f,x,_,M,S);const C=S[0],L=S[1];if(m.z-p>L||m.z+p<C)return;const I=this.result;for(let b=f;b<_;b++)for(let E=x;E<M;E++){const B=I.length;let V=!1;if(t.getConvexTrianglePillar(b,E,!1),ke.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,n,v,s,o,r,a,e,t,d)),d&&V||(t.getConvexTrianglePillar(b,E,!0),ke.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,n,v,s,o,r,a,e,t,d)),d&&V))return!0;if(I.length-B>2)return}}boxHeightfield(e,t,n,i,s,o,r,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexHeightfield(e,t,n,i,s,o,r,a,c,h,d){const u=t.data,p=t.elementSize,g=e.boundingSphereRadius,v=_0,m=x0,f=v0;ke.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-g)/p)-1,x=Math.ceil((f.x+g)/p)+1,M=Math.floor((f.y-g)/p)-1,S=Math.ceil((f.y+g)/p)+1;if(x<0||S<0||_>u.length||M>u[0].length)return;_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),S<0&&(S=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),S>=u[0].length&&(S=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const C=[];t.getRectMinMax(_,M,x,S,C);const L=C[0],I=C[1];if(!(f.z-g>I||f.z+g<L))for(let b=_;b<x;b++)for(let E=M;E<S;E++){let B=!1;if(t.getConvexTrianglePillar(b,E,!1),ke.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,v,s,o,r,a,null,null,d,m,null)),d&&B||(t.getConvexTrianglePillar(b,E,!0),ke.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,v,s,o,r,a,null,null,d,m,null)),d&&B))return!0}}sphereParticle(e,t,n,i,s,o,r,a,c,h,d){const u=f0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,r,t,e,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,r,a,c,h,d){const u=h0;u.set(0,0,1),r.quaternion.vmult(u,u);const p=u0;if(i.vsub(r.position,p),u.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,r,t,e,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=d0;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,s,o,r,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexParticle(e,t,n,i,s,o,r,a,c,h,d){let u=-1;const p=m0,g=g0;let v=null;const m=p0;if(m.copy(i),m.vsub(n,m),s.conjugate(Ra),Ra.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,_=e.faces.length;f!==_;f++){const x=[e.worldVertices[e.faces[f][0]]],M=e.worldFaceNormals[f];i.vsub(x[0],Da);const S=-M.dot(Da);if(v===null||Math.abs(S)<Math.abs(v)){if(d)return!0;v=S,u=f,p.copy(M)}}if(u!==-1){const f=this.createContactEquation(a,r,t,e,c,h);p.scale(v,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const _=f.ri,x=f.rj;_.vadd(i,_),_.vsub(a.position,_),x.vadd(n,x),x.vsub(r.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,r,a,c,h,d){return this.convexHeightfield(t,e,i,n,o,s,a,r,c,h,d)}particleCylinder(e,t,n,i,s,o,r,a,c,h,d){return this.convexParticle(t,e,i,n,o,s,a,r,c,h,d)}sphereTrimesh(e,t,n,i,s,o,r,a,c,h,d){const u=Eg,p=Tg,g=Ag,v=Cg,m=Pg,f=Lg,_=Ug,x=wg,M=Sg,S=Ng;ke.pointToLocalFrame(i,o,n,m);const C=e.radius;_.lowerBound.set(m.x-C,m.y-C,m.z-C),_.upperBound.set(m.x+C,m.y+C,m.z+C),t.getTrianglesInAABB(_,S);const L=bg,I=e.radius*e.radius;for(let P=0;P<S.length;P++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[S[P]*3+R],L),L.vsub(m,M),M.lengthSquared()<=I){if(x.copy(L),ke.pointToWorldFrame(i,o,x,L),L.vsub(n,M),d)return!0;let U=this.createContactEquation(r,a,e,t,c,h);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(r.position,U.ri),U.rj.copy(L),U.rj.vsub(a.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<S.length;P++)for(let R=0;R<3;R++){t.getVertex(t.indices[S[P]*3+R],u),t.getVertex(t.indices[S[P]*3+(R+1)%3],p),p.vsub(u,g),m.vsub(p,f);const U=f.dot(g);m.vsub(u,f);let z=f.dot(g);if(z>0&&U<0&&(m.vsub(u,f),v.copy(g),v.normalize(),z=f.dot(v),v.scale(z,f),f.vadd(u,f),f.distanceTo(m)<e.radius)){if(d)return!0;const G=this.createContactEquation(r,a,e,t,c,h);f.vsub(m,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(r.position,G.ri),ke.pointToWorldFrame(i,o,f,f),f.vsub(a.position,G.rj),ke.vectorToWorldFrame(o,G.ni,G.ni),ke.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const b=Rg,E=Dg,B=Ig,V=Mg;for(let P=0,R=S.length;P!==R;P++){t.getTriangleVertices(S[P],b,E,B),t.getNormal(S[P],V),m.vsub(b,f);let U=f.dot(V);if(V.scale(U,f),m.vsub(f,f),U=f.distanceTo(m),it.pointInTriangle(f,b,E,B)&&U<e.radius){if(d)return!0;let z=this.createContactEquation(r,a,e,t,c,h);f.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),ke.pointToWorldFrame(i,o,f,f),f.vsub(a.position,z.rj),ke.vectorToWorldFrame(o,z.ni,z.ni),ke.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}S.length=0}planeTrimesh(e,t,n,i,s,o,r,a,c,h,d){const u=new y,p=_g;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const v=new y;v.copy(u),ke.pointToWorldFrame(i,o,v,u);const m=xg;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(r,a,e,t,c,h);_.ni.copy(p);const x=yg;p.scale(m.dot(p),x),u.vsub(x,x),_.ri.copy(x),_.ri.vsub(r.position,_.ri),_.rj.copy(u),_.rj.vsub(a.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Rn=new y,ui=new y,di=new y,pg=new y,mg=new y,gg=new st,vg=new st,_g=new y,xg=new y,yg=new y,Mg=new y,Sg=new y;new y;const bg=new y,wg=new y,Eg=new y,Tg=new y,Ag=new y,Cg=new y,Pg=new y,Lg=new y,Rg=new y,Dg=new y,Ig=new y,Ug=new It,Ng=[],ws=new y,La=new y,zg=new y,Fg=new y,Og=new y;function Bg(l,e,t){let n=null;const i=l.length;for(let s=0;s!==i;s++){const o=l[s],r=zg;l[(s+1)%i].vsub(o,r);const a=Fg;r.cross(e,a);const c=Og;t.vsub(o,c);const h=a.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Es=new y,Gg=new y,kg=new y,Vg=new y,Hg=[new y,new y,new y,new y,new y,new y],Wg=new y,qg=new y,jg=new y,Xg=new y,Yg=new y,$g=new y,Zg=new y,Kg=new y,Jg=new y,Qg=new y,e0=new y,t0=new y,n0=new y,i0=new y;new y;new y;const s0=new y,r0=new y,o0=new y,a0=new y,l0=new y,c0=new y,h0=new y,u0=new y,d0=new y,f0=new y,Ra=new st,p0=new y;new y;const m0=new y,Da=new y,g0=new y,v0=new y,_0=new y,x0=[0],y0=new y,M0=new y;class Ia{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let a=0;a<s;a++){let c=!1;const h=n[a];for(;h>i[r];)r++;c=h===i[r],c||Ua(e,h)}r=0;for(let a=0;a<o;a++){let c=!1;const h=i[a];for(;h>n[r];)r++;c=n[r]===h,c||Ua(t,h)}}}function Ua(l,e){l.push((e&4294901760)>>16,e&65535)}const Sr=(l,e)=>l<e?`${l}-${e}`:`${e}-${l}`;class S0{constructor(){this.data={keys:[]}}get(e,t){const n=Sr(e,t);return this.data[n]}set(e,t,n){const i=Sr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Sr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class b0 extends ul{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Pm,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new ag,this.constraints=[],this.narrowphase=new fg(this),this.collisionMatrix=new xa,this.collisionMatrixPrevious=new xa,this.bodyOverlapKeeper=new Ia,this.shapeOverlapKeeper=new Ia,this.contactmaterials=[],this.contactMaterialTable=new S0,this.defaultMaterial=new Ds("default"),this.defaultContactMaterial=new Rs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof As?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ALL,n.from=e,n.to=t,n.callback=i,br.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ANY,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=it.CLOSEST,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=ot.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=ot.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(ot.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let r=0;r!==this.bodies.length;r++){const a=this.bodies[r];a.previousPosition.lerp(a.position,o,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,o,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=C0,i=P0,s=this.bodies.length,o=this.bodies,r=this.solver,a=this.gravity,c=this.doProfiling,h=this.profile,d=pe.DYNAMIC;let u=-1/0;const p=this.constraints,g=A0;a.length();const v=a.x,m=a.y,f=a.z;let _=0;for(c&&(u=ot.now()),_=0;_!==s;_++){const P=o[_];if(P.type===d){const R=P.force,U=P.mass;R.x+=U*v,R.y+=U*m,R.z+=U*f}}for(let P=0,R=this.subsystems.length;P!==R;P++)this.subsystems[P].update();c&&(u=ot.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ot.now()-u);let x=p.length;for(_=0;_!==x;_++){const P=p[_];if(!P.collideConnected)for(let R=n.length-1;R>=0;R-=1)(P.bodyA===n[R]&&P.bodyB===i[R]||P.bodyB===n[R]&&P.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(u=ot.now());const M=T0,S=t.length;for(_=0;_!==S;_++)M.push(t[_]);t.length=0;const C=this.frictionEquations.length;for(_=0;_!==C;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,M,this.frictionEquations,g),c&&(h.narrowphase=ot.now()-u),c&&(u=ot.now()),_=0;_<this.frictionEquations.length;_++)r.addEquation(this.frictionEquations[_]);const L=t.length;for(let P=0;P!==L;P++){const R=t[P],U=R.bi,z=R.bj,J=R.si,G=R.sj;let q;if(U.material&&z.material?q=this.getContactMaterial(U.material,z.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,U.material&&z.material&&(U.material.friction>=0&&z.material.friction>=0&&U.material.friction*z.material.friction,U.material.restitution>=0&&z.material.restitution>=0&&(R.restitution=U.material.restitution*z.material.restitution)),r.addEquation(R),U.allowSleep&&U.type===pe.DYNAMIC&&U.sleepState===pe.SLEEPING&&z.sleepState===pe.AWAKE&&z.type!==pe.STATIC){const te=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),ue=z.sleepSpeedLimit**2;te>=ue*2&&(U.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===pe.DYNAMIC&&z.sleepState===pe.SLEEPING&&U.sleepState===pe.AWAKE&&U.type!==pe.STATIC){const te=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ue=U.sleepSpeedLimit**2;te>=ue*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,z,!0),this.collisionMatrixPrevious.get(U,z)||(Di.body=z,Di.contact=R,U.dispatchEvent(Di),Di.body=U,z.dispatchEvent(Di)),this.bodyOverlapKeeper.set(U.id,z.id),this.shapeOverlapKeeper.set(J.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ot.now()-u,u=ot.now()),_=0;_!==s;_++){const P=o[_];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(x=p.length,_=0;_!==x;_++){const P=p[_];P.update();for(let R=0,U=P.equations.length;R!==U;R++){const z=P.equations[R];r.addEquation(z)}}r.solve(e,this),c&&(h.solve=ot.now()-u),r.removeAllEquations();const I=Math.pow;for(_=0;_!==s;_++){const P=o[_];if(P.type&d){const R=I(1-P.linearDamping,e),U=P.velocity;U.scale(R,U);const z=P.angularVelocity;if(z){const J=I(1-P.angularDamping,e);z.scale(J,z)}}}this.dispatchEvent(E0),c&&(u=ot.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(e,E,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ot.now()-u),this.stepnumber+=1,this.dispatchEvent(w0);let V=!0;if(this.allowSleep)for(V=!1,_=0;_!==s;_++){const P=o[_];P.sleepTick(this.time),P.sleepState!==pe.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(cn,hn),e){for(let s=0,o=cn.length;s<o;s+=2)Ii.bodyA=this.getBodyById(cn[s]),Ii.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Ii);Ii.bodyA=Ii.bodyB=null}if(t){for(let s=0,o=hn.length;s<o;s+=2)Ui.bodyA=this.getBodyById(hn[s]),Ui.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(Ui);Ui.bodyA=Ui.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,o=cn.length;s<o;s+=2){const r=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=r,un.shapeB=a,r&&(un.bodyA=r.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,o=hn.length;s<o;s+=2){const r=this.getShapeById(hn[s]),a=this.getShapeById(hn[s+1]);dn.shapeA=r,dn.shapeB=a,r&&(dn.bodyA=r.body),a&&(dn.bodyB=a.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new It;const br=new it,ot=globalThis.performance||{};if(!ot.now){let l=Date.now();ot.timing&&ot.timing.navigationStart&&(l=ot.timing.navigationStart),ot.now=()=>Date.now()-l}new y;const w0={type:"postStep"},E0={type:"preStep"},Di={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},T0=[],A0=[],C0=[],P0=[],cn=[],hn=[],Ii={type:"beginContact",bodyA:null,bodyB:null},Ui={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Na={type:"change"},wr={type:"start"},za={type:"end"};class L0 extends qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",He),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Na),n.update(),s=i.NONE},this.update=function(){const D=new F,Q=new Hn().setFromUnitVectors(e.up,new F(0,1,0)),W=Q.clone().invert(),he=new F,me=new Hn,_e=2*Math.PI;return function(){const ve=n.object.position;D.copy(ve).sub(n.target),D.applyQuaternion(Q),r.setFromVector3(D),n.autoRotate&&s===i.NONE&&b(L()),n.enableDamping?(r.theta+=a.theta*n.dampingFactor,r.phi+=a.phi*n.dampingFactor):(r.theta+=a.theta,r.phi+=a.phi);let Ae=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(Ae)&&isFinite(De)&&(Ae<-Math.PI?Ae+=_e:Ae>Math.PI&&(Ae-=_e),De<-Math.PI?De+=_e:De>Math.PI&&(De-=_e),Ae<=De?r.theta=Math.max(Ae,Math.min(De,r.theta)):r.theta=r.theta>(Ae+De)/2?Math.max(Ae,r.theta):Math.min(De,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=c,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(r),D.applyQuaternion(W),ve.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),c=1,d||he.distanceToSquared(n.object.position)>o||8*(1-me.dot(n.object.quaternion))>o?(n.dispatchEvent(Na),he.copy(n.object.position),me.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",Ye),n.domElement.removeEventListener("wheel",Oe),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",He),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new pa,a=new pa;let c=1;const h=new F;let d=!1;const u=new Ee,p=new Ee,g=new Ee,v=new Ee,m=new Ee,f=new Ee,_=new Ee,x=new Ee,M=new Ee,S=[],C={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function b(D){a.theta-=D}function E(D){a.phi-=D}const B=function(){const D=new F;return function(W,he){D.setFromMatrixColumn(he,0),D.multiplyScalar(-W),h.add(D)}}(),V=function(){const D=new F;return function(W,he){n.screenSpacePanning===!0?D.setFromMatrixColumn(he,1):(D.setFromMatrixColumn(he,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(W),h.add(D)}}(),P=function(){const D=new F;return function(W,he){const me=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;D.copy(_e).sub(n.target);let de=D.length();de*=Math.tan(n.object.fov/2*Math.PI/180),B(2*W*de/me.clientHeight,n.object.matrix),V(2*he*de/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(W*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),V(he*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(D){u.set(D.clientX,D.clientY)}function J(D){_.set(D.clientX,D.clientY)}function G(D){v.set(D.clientX,D.clientY)}function q(D){p.set(D.clientX,D.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;b(2*Math.PI*g.x/Q.clientHeight),E(2*Math.PI*g.y/Q.clientHeight),u.copy(p),n.update()}function te(D){x.set(D.clientX,D.clientY),M.subVectors(x,_),M.y>0?R(I()):M.y<0&&U(I()),_.copy(x),n.update()}function ue(D){m.set(D.clientX,D.clientY),f.subVectors(m,v).multiplyScalar(n.panSpeed),P(f.x,f.y),v.copy(m),n.update()}function K(D){D.deltaY<0?U(I()):D.deltaY>0&&R(I()),n.update()}function j(D){let Q=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),Q=!0;break}Q&&(D.preventDefault(),n.update())}function ee(){if(S.length===1)u.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);u.set(D,Q)}}function re(){if(S.length===1)v.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);v.set(D,Q)}}function ce(){const D=S[0].pageX-S[1].pageX,Q=S[0].pageY-S[1].pageY,W=Math.sqrt(D*D+Q*Q);_.set(0,W)}function H(){n.enableZoom&&ce(),n.enablePan&&re()}function Te(){n.enableZoom&&ce(),n.enableRotate&&ee()}function be(D){if(S.length==1)p.set(D.pageX,D.pageY);else{const W=le(D),he=.5*(D.pageX+W.x),me=.5*(D.pageY+W.y);p.set(he,me)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;b(2*Math.PI*g.x/Q.clientHeight),E(2*Math.PI*g.y/Q.clientHeight),u.copy(p)}function oe(D){if(S.length===1)m.set(D.pageX,D.pageY);else{const Q=le(D),W=.5*(D.pageX+Q.x),he=.5*(D.pageY+Q.y);m.set(W,he)}f.subVectors(m,v).multiplyScalar(n.panSpeed),P(f.x,f.y),v.copy(m)}function Se(D){const Q=le(D),W=D.pageX-Q.x,he=D.pageY-Q.y,me=Math.sqrt(W*W+he*he);x.set(0,me),M.set(0,Math.pow(x.y/_.y,n.zoomSpeed)),R(M.y),_.copy(x)}function Ge(D){n.enableZoom&&Se(D),n.enablePan&&oe(D)}function xe(D){n.enableZoom&&Se(D),n.enableRotate&&be(D)}function Le(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ze),n.domElement.addEventListener("pointerup",Ye)),X(D),D.pointerType==="touch"?ut(D):et(D))}function Ze(D){n.enabled!==!1&&(D.pointerType==="touch"?A(D):Ke(D))}function Ye(D){ne(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(za),s=i.NONE}function et(D){let Q;switch(D.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Xn.DOLLY:if(n.enableZoom===!1)return;J(D),s=i.DOLLY;break;case Xn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;G(D),s=i.PAN}else{if(n.enableRotate===!1)return;z(D),s=i.ROTATE}break;case Xn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;z(D),s=i.ROTATE}else{if(n.enablePan===!1)return;G(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wr)}function Ke(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;q(D);break;case i.DOLLY:if(n.enableZoom===!1)return;te(D);break;case i.PAN:if(n.enablePan===!1)return;ue(D);break}}function Oe(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(wr),K(D),n.dispatchEvent(za))}function He(D){n.enabled===!1||n.enablePan===!1||j(D)}function ut(D){switch(se(D),S.length){case 1:switch(n.touches.ONE){case Yn.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case Yn.PAN:if(n.enablePan===!1)return;re(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Yn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(),s=i.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wr)}function A(D){switch(se(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(D),n.update();break;default:s=i.NONE}}function w(D){n.enabled!==!1&&D.preventDefault()}function X(D){S.push(D)}function ne(D){delete C[D.pointerId];for(let Q=0;Q<S.length;Q++)if(S[Q].pointerId==D.pointerId){S.splice(Q,1);return}}function se(D){let Q=C[D.pointerId];Q===void 0&&(Q=new Ee,C[D.pointerId]=Q),Q.set(D.pageX,D.pageY)}function le(D){const Q=D.pointerId===S[0].pointerId?S[1]:S[0];return C[Q.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",Ye),n.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}function R0(l,e=!1){const t=l[0].index!==null,n=new Set(Object.keys(l[0].attributes)),i=new Set(Object.keys(l[0].morphAttributes)),s={},o={},r=l[0].morphTargetsRelative,a=new wn;let c=0;for(let h=0;h<l.length;++h){const d=l[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<l.length;++u){const p=l[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=l[u].attributes.position.count}a.setIndex(d)}for(const h in s){const d=Fa(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][u]);const g=Fa(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(g)}}return a}function Fa(l){let e,t,n,i=0;for(let r=0;r<l.length;++r){const a=l[r];if(a.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=a.array.constructor),e!==a.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=a.itemSize),t!==a.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=a.normalized),n!==a.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=a.array.length}const s=new e(i);let o=0;for(let r=0;r<l.length;++r)s.set(l[r].array,o),o+=l[r].array.length;return new Mt(s,t,n)}function D0(l,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=l.getIndex(),i=l.getAttribute("position"),s=n?n.count:i.count;let o=0;const r=Object.keys(l.attributes),a={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let m=0,f=r.length;m<f;m++){const _=r[m],x=l.attributes[_];a[_]=new Mt(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const M=l.morphAttributes[_];M&&(c[_]=new Mt(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized))}const p=Math.log10(1/e),g=Math.pow(10,p);for(let m=0;m<s;m++){const f=n?n.getX(m):m;let _="";for(let x=0,M=r.length;x<M;x++){const S=r[x],C=l.getAttribute(S),L=C.itemSize;for(let I=0;I<L;I++)_+=`${~~(C[d[I]](f)*g)},`}if(_ in t)h.push(t[_]);else{for(let x=0,M=r.length;x<M;x++){const S=r[x],C=l.getAttribute(S),L=l.morphAttributes[S],I=C.itemSize,b=a[S],E=c[S];for(let B=0;B<I;B++){const V=d[B],P=u[B];if(b[P](o,C[V](f)),L)for(let R=0,U=L.length;R<U;R++)E[R][P](o,L[R][V](f))}}t[_]=o,h.push(o),o++}}const v=l.clone();for(const m in l.attributes){const f=a[m];if(v.setAttribute(m,new Mt(f.array.slice(0,o*f.itemSize),f.itemSize,f.normalized)),m in c)for(let _=0;_<c[m].length;_++){const x=c[m][_];v.morphAttributes[m][_]=new Mt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)}}return v.setIndex(h),v}const Ni=new F;function zt(l,e,t,n,i,s){const o=2*Math.PI*i/4,r=Math.max(s-2*i,0),a=Math.PI/4;Ni.copy(e),Ni[n]=0,Ni.normalize();const c=.5*o/(o+r),h=1-Ni.angleTo(l)/a;return Math.sign(Ni[t])===1?h*c:r/(o+r)+c+c*(1-h)}class I0 extends bn{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const r=new F,a=new F,c=new F(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new F,v=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(r.fromArray(h,m),a.copy(r),a.x-=Math.sign(a.x)*v,a.y-=Math.sign(a.y)*v,a.z-=Math.sign(a.z)*v,a.normalize(),h[m+0]=c.x*Math.sign(r.x)+a.x*s,h[m+1]=c.y*Math.sign(r.y)+a.y*s,h[m+2]=c.z*Math.sign(r.z)+a.z*s,d[m+0]=a.x,d[m+1]=a.y,d[m+2]=a.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[f+0]=zt(g,a,"z","y",s,n),u[f+1]=1-zt(g,a,"y","z",s,t);break;case 1:g.set(-1,0,0),u[f+0]=1-zt(g,a,"z","y",s,n),u[f+1]=1-zt(g,a,"y","z",s,t);break;case 2:g.set(0,1,0),u[f+0]=1-zt(g,a,"x","z",s,e),u[f+1]=zt(g,a,"z","x",s,n);break;case 3:g.set(0,-1,0),u[f+0]=1-zt(g,a,"x","z",s,e),u[f+1]=1-zt(g,a,"z","x",s,n);break;case 4:g.set(0,0,1),u[f+0]=1-zt(g,a,"x","y",s,e),u[f+1]=1-zt(g,a,"y","x",s,t);break;case 5:g.set(0,0,-1),u[f+0]=zt(g,a,"x","y",s,e),u[f+1]=1-zt(g,a,"y","x",s,t);break}}}class U0{constructor(e,t,n,i,s,o){this.containerEl,this.canvasEl,this.renderer,this.scene,this.container,this.camera,this.mesh_classicDice,this.physicsWorld,this.controls,this.rollTimer,this.animReq,this.screenshotMode=o,this.objectGroupScreenshot,this.baseURL=i,this.rollOnMount=s,this.allowedToAnimate=!0,this.movementFinishedCounter=0,this.rolling,this.timeWork,this.containerEl=document.getElementById(t),this.canvasEl=document.getElementById(n),this.props={Objects:e},this.rollMaxTime=8e3,this.fov=30,this.floorSize=100,this.objectArray=[],this.objectParams={numObjects:{current:2,min:1,max:8},scale:10,segments:20,segments_ClassicDice:40,edgeRadius:.07,notchRadius:.12,notchDepth:.1},this.floor={mesh:null,physicsBody:null},this.walls={meshes:[],physicsBodies:[]},this.frameLengthMS=1e3/60,this.previousTime=0}init(){return new Promise((e,t)=>{this.updateContainer(),this.initPhysics(),this.initScene(),this.buildScene(),this.renderScene(),e()})}async resizeEvent(){this.stopAnimation(),await this.updateContainer(),await this.clearScene(["appRoom","appObject"]),await this.buildScene(),this.throwObjects()}updateContainer(){this.container={width:this.containerEl.clientWidth,height:this.containerEl.clientHeight,aspect:this.containerEl.clientWidth/this.containerEl.clientHeight};let e=this.props.Objects.length,t=Math.min(this.floorSize*this.container.aspect,this.floorSize),s=(t-10/100*t)/e,o=t-75/100*t;this.objectParams.scale=Math.min(s,o)}async initScene(){this.renderer=new ll({alpha:!0,antialias:!0,canvas:this.canvasEl}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ba,this.renderer.setSize(this.container.width,this.container.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.scene=new Wp,this.camera=new Dt(30,this.container.width/this.container.height,1,400),this.camera.position.set(0,1,0),this.camera.lookAt(this.scene.position),this.controls=new L0(this.camera,this.renderer.domElement);const e=(t,i)=>{var i=i||100,s;return function(o){s&&clearTimeout(s),s=setTimeout(t,i,o)}};this.controls.addEventListener("change",e(t=>{this.renderer.render(this.scene,this.camera)},10)),this.controls.update(),this.setLighting(),(!this.props.Objects||this.props.Objects.filter(t=>t.type=="classic"))&&(this.mesh_classicDice=await this.createObjectMesh(!0))}async createObject(){if(this.props&&this.props.Objects&&this.props.Objects.length>0)for(let e=0;e<this.props.Objects.length;e++)this.objectArray.push(this.createObjectGroup(this.props.Objects[e])),this.addObjectEvents(this.objectArray[e]);else for(let e=0;e<this.objectParams.numObjects.current;e++)this.objectArray.push(this.createObjectGroup()),this.addObjectEvents(this.objectArray[e]);this.rollOnMount&&(console.log("rolling on mount"),this.throwObjects())}initPhysics(){this.physicsWorld=new b0({allowSleep:!0,sleepSpeedLimit:1,gravity:new y(0,-900,0)}),this.physicsWorld.defaultContactMaterial.friction=.001,this.physicsWorld.defaultContactMaterial.restitution=.1}renderScene(e){if(this.allowedToAnimate&&this.renderer){if(e-this.previousTime>this.frameLengthMS){this.physicsWorld&&this.physicsWorld.fixedStep();for(const t of this.objectArray)t.mesh.position.copy(t.body.position),t.mesh.quaternion.copy(t.body.quaternion);this.renderer.render(this.scene,this.camera),this.previousTime=e}this.animReq=window.requestAnimationFrame(this.renderScene.bind(this))}}stopAnimation(){console.log("stop animation!"),clearTimeout(this.timeWork),this.allowedToAnimate=!1,window.cancelAnimationFrame(this.animReq)}nudge(e,t){this.camera.rotation.z=this.camera.rotation.z+t,this.controls.target.set(0,0,0),this.controls.update()}async buildScene(){this.scene&&(await this.createRoom(),await this.createObject(),this.camera.aspect=this.container.aspect,this.camera.position.y=100*this.container.aspect/this.camera.aspect/(2*Math.tan(this.fov/2*(Math.PI/180)))+20,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.width,this.container.height),this.camera.position.set(0,this.camera.position.y+20,30),this.camera.lookAt(this.scene.position),this.controls.saveState())}setLighting(){const e=new em(16777215,.8);this.scene.add(e);const t=new Qp(16777215,.3);t.position.set(0,200,0),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=80,t.shadow.camera.far=400,this.scene.add(t)}async clearScene(e){return new Promise(async(t,n)=>{if(this.scene&&this.scene.children&&this.scene.children!=null&&this.scene.children.length>0){let i=this.scene.children;e&&e.length>0&&(i=this.scene.children.filter(s=>s.appClass=="appRoom"||s.appClass=="appObject")),i.forEach(async s=>{(s.appClass=="appRoom"||s.appClass=="appObject")&&(s.mesh&&await s.mesh.dispose(),s.geometry&&await s.geometry.dispose(),s.material&&(s.material instanceof Array?await s.material.forEach(o=>o.dispose()):await s.material.dispose()),s.texture&&(s.texture instanceof Array?await s.texture.forEach(o=>o.dispose()):await s.texture.dispose()),await this.scene.remove(s))}),this.physicsWorld.bodies.forEach(async s=>{e&&!e.includes(s.appClass)||await this.physicsWorld.removeBody(s)}),this.renderer.dispose(),this.objectArray.length=0}t()})}async disposeEverything(){this.stopAnimation(),await this.clearScene(),this.renderer.clear(),this.scene&&(this.scene=null),this.physicsWorld&&(this.physicsWorld=null),this.camera=null,this.renderer&&this.renderer.renderLists.dispose(),this.renderer=null,this.container=null,this.mesh_classicDice=null,this.controls=null,this.rollTimer=null,this.animReq=null,this.screenshotMode=null,this.objectGroupScreenshot=null,this.baseURL=null,this.rollOnMount=null}async createRoom(){this.floor.mesh=null,this.floor.physicsBody=null,this.walls.meshes=[],this.walls.physicsBodies=[];let e=this.floorSize*this.container.aspect,t=this.floorSize;this.floor.mesh=new Tt(new Xi(e+50,t+50),new qp({opacity:.1})),this.floor.mesh.receiveShadow=!0,this.floor.mesh.position.y=0,this.floor.mesh.quaternion.setFromAxisAngle(new F(-1,0,0),Math.PI*.5),this.floor.mesh.name="floor",this.floor.mesh.appClass="appRoom",await this.scene.add(this.floor.mesh),this.floor.physicsBody=new pe({type:pe.STATIC,shape:new rg}),this.floor.physicsBody.position.copy(this.floor.mesh.position),this.floor.physicsBody.quaternion.copy(this.floor.mesh.quaternion),this.floor.physicsBody.appClass="appRoom",this.physicsWorld.addBody(this.floor.physicsBody);let n=6,i=200,s={back:{geometry:[e,n,i],position:[0,i/2,-(t/2)-n/2]},left:{geometry:[n,t,i],position:[-(e/2)-n/2,i/2,0]},right:{geometry:[n,t,i],position:[e/2+n/2,i/2,0]},front:{geometry:[e,n,i],position:[0,i/2,t/2+n/2]},top:{geometry:[e,t,n],position:[0,i,0]}},o=new Or({color:255,wireframe:!0}),r=new F(-1,0,0);Object.entries(s).forEach(async a=>{let[c,h]=a,d=new bn(...h.geometry),u=new Tt(d,o);u.position.x=h.position[0],u.position.y=h.position[1],u.position.z=h.position[2],u.quaternion.setFromAxisAngle(r,Math.PI*.5);let p=new pe({type:pe.STATIC,shape:new Yi(new y(...h.geometry))});p.position.copy(u.position),p.quaternion.copy(u.quaternion),p.appClass="appRoom",this.physicsWorld.addBody(p),this.walls.physicsBodies.push(u)})}createSkybox(){var e=new(void 0)(1e4,1e4,1e4),t=new jp({color:10066431,side:St}),n=new Tt(e,t);this.scene.add(n),this.scene.fog=new kr(10066431,25e-5)}createFontTexture(e){const t=document.createElement("canvas"),n=t.getContext("2d");n.fillStyle="green",n.font="60px sans-serif",n.fillText(e,0,60);const i=new bt(t);return i.needsUpdate=!0,i}getPyramidBase(e){return Math.floor(Math.sqrt(2*e)+1/2)}getRandomRotationPosition(){return[0,90,180,-90].sort(()=>.5-Math.random())[0]}setupFormation(){let e=this.getPyramidBase(this.objectArray.length),t=1,n=1,i=e*(this.objectParams.scale/3*2)+this.objectParams.scale*t+t*(this.objectParams.scale/4),s=1*this.objectParams.scale;this.floor.mesh.visible=!1;for(var o=0;o<this.objectArray.length;o++){let r=this.objectArray[o];r.body.velocity.setZero(),r.body.angularVelocity.setZero(),r.mesh.rotation.set(0,0,es.degToRad(this.getRandomRotationPosition()+bl(-15,15,0,5))),r.body.quaternion.copy(r.mesh.quaternion);let a=n*(this.objectParams.scale/3*2)+this.objectParams.scale*t+t*(this.objectParams.scale/4)-i,c=-(this.objectParams.scale*n)+s,h=0;r.body.position=new y(a,h,c),r.mesh.position.copy(r.body.position),t+1>e-(n-1)?(t=1,n=n+1):t=t+1}this.renderer.render(this.scene,this.camera)}resetOrbitControls(){this.controls.reset(),this.controls.update()}groupObjects(){this.objectGroupScreenshot=new mi,this.objectGroupScreenshot.name="objectFormation",this.objectGroupScreenshot.scale.set(2,2,2);for(var e=0;e<this.objectArray.length;e++){let t=this.objectArray[e];this.objectGroupScreenshot.add(t.mesh)}this.scene.add(this.objectGroupScreenshot),this.renderer.render(this.scene,this.camera)}rotateObject(){this.objectGroupScreenshot&&(this.objectGroupScreenshot.rotateY(es.degToRad(this.getRandomRotationPosition())),this.objectGroupScreenshot.rotateOnAxis(new F(0,1,0),es.degToRad(this.getRandomRotationPosition())),this.renderer.render(this.scene,this.camera))}nudgeRotation(e,t){this.objectGroupScreenshot&&(this.objectGroupScreenshot["rotate"+e.toUpperCase()](es.degToRad(t)),this.renderer.render(this.scene,this.camera))}async createScreenshot(e){this.renderer.render(this.scene,this.camera);let t="canvasScreenshot",n;document.getElementById(t)?n=document.getElementById(t):(n=document.createElement("canvas"),n.id=t,document.body.appendChild(n)),e||this.groupObjects();let i=e||this.objectGroupScreenshot,s=this.computeScreenSpaceBoundingBox(i,this.camera);const o=(s.min.x+1)*(this.container.width/2),r=(1-s.max.y)*(this.container.height/2),a=(s.max.x-s.min.x)*(this.container.width/2),c=(s.max.y-s.min.y)*(this.container.height/2);n.width=a,n.height=c;let h=n.getContext("2d");h.lineWidth=4,h.strokeStyle="red",h.width=a,h.height=c,n.style.width=a+"px",n.style.height=c+"px",this.renderer.render(this.scene,this.camera),h.drawImage(this.canvasEl,o,r,a,c,0,0,a,c),this.renderer.render(this.scene,this.camera),console.log("ctx work is %O",h);const d=document.createElement("a");document.body.appendChild(d),d.style.display="none",await n.toBlob(u=>{console.log("blob work is %O",u);const p=window.URL.createObjectURL(u);d.href=p,d.download="screencapture.png",d.click()}),h.clearRect(0,0,a,c)}saveBlob(e,t){return saveData(e,fileName)}computeScreenSpaceBoundingBox(e,t){var n,i;if(Array.isArray(e))for(var s=0;s<e.length;++s){let h=this.computeScreenSpaceBoundingBox(e[s],t);n===void 0?(n=h.min.clone(),i=h.max.clone()):(n.min(h.min),i.max(h.max))}if(e.geometry!==void 0){var o=e.geometry.vertices;if(o===void 0&&e.geometry.attributes!==void 0&&"position"in e.geometry.attributes){const h=new F,d=e.geometry.attributes.position;for(let u=0;u<d.count*d.itemSize;u+=d.itemSize){h.set(d.array[u],d.array[u+1],d.array[u+2]);const g=h.applyMatrix4(e.matrixWorld).project(t);n===void 0?n=new Ee(g.x,g.y):n.min(g),i===void 0?i=new Ee(g.x,g.y):i.max(g)}}else for(var r=new F,s=0;s<o.length;++s){var a=r.copy(o[s]).applyMatrix4(e.matrixWorld),c=a.project(t);n===void 0&&(n=c.clone(),i=c.clone()),n.min(c),i.max(c)}}if(e.children!==void 0)for(var s=0;s<e.children.length;++s){let d=this.computeScreenSpaceBoundingBox(e.children[s],t);n===void 0?(n=d.min.clone(),i=d.max.clone()):(n.min(d.min),i.max(d.max))}return new tm(n,i)}createObjectGroup(e){let t;if(e!=null&&e.type!="classic"){let s=new Zp,o=[];for(let a=0;a<e.faces.length;a++){let c;e.faces[a].type=="text"?c=this.createFontTexture(e.faces[a].text_src):e.faces[a].type=="image"&&(c=s.load(this.baseURL+"images/"+e.faces[a].image_src));let h=new mr({map:c,color:16777215,side:Wt,onBeforeCompile:d=>{const u=Pe.map_fragment.replace("diffuseColor *= sampledDiffuseColor;","diffuseColor = vec4( mix( diffuse, sampledDiffuseColor.rgb, sampledDiffuseColor.a ), opacity );");d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",u)}});h.width=512,h.height=512,o.push(h)}let r=new I0(1,1,1,2);o.defines={USE_UV:""},t=new Tt(r,o),t.castShadow=!0}else(!e||e.type=="classic")&&(t=this.mesh_classicDice.clone());t.scale.set(this.objectParams.scale,this.objectParams.scale,this.objectParams.scale),t.appClass="appObject",this.scene.add(t);let n=[this.objectParams.scale/2,this.objectParams.scale/2,this.objectParams.scale/2];const i=new pe({mass:1,shape:new Yi(new y(...n)),sleepTimeLimit:1,sleepSpeedLimit:.1});return i.appClass="appObject",this.physicsWorld.addBody(i),{mesh:t,body:i}}createObjectMesh(e,t){const n=new mi;let i;t?i=t:i=new mr({color:15658734});let s,o;e&&(s=new mr({color:0,roughness:0,metalness:1,side:Wt}),o=new Tt(this.createObjectMesh_InnerGeometry(),s));const r=new Tt(this.createObjectMesh_BoxGeometry(e),i);return r.castShadow=!0,e?(n.add(o,r),n):r}createObjectMesh_BoxGeometry(e){let t=e?this.objectParams.segments_ClassicDice:this.objectParams.segments,n=new bn(1,1,1,t,t,t);if(e){const i=n.attributes.position,s=.5-this.objectParams.edgeRadius;for(let o=0;o<i.count;o++){let r=new F().fromBufferAttribute(i,o);const a=new F(Math.sign(r.x),Math.sign(r.y),Math.sign(r.z)).multiplyScalar(s),c=new F().subVectors(r,a);Math.abs(r.x)>s&&Math.abs(r.y)>s&&Math.abs(r.z)>s?(c.normalize().multiplyScalar(this.objectParams.edgeRadius),r=a.add(c)):Math.abs(r.x)>s&&Math.abs(r.y)>s?(c.z=0,c.normalize().multiplyScalar(this.objectParams.edgeRadius),r.x=a.x+c.x,r.y=a.y+c.y):Math.abs(r.x)>s&&Math.abs(r.z)>s?(c.y=0,c.normalize().multiplyScalar(this.objectParams.edgeRadius),r.x=a.x+c.x,r.z=a.z+c.z):Math.abs(r.y)>s&&Math.abs(r.z)>s&&(c.x=0,c.normalize().multiplyScalar(this.objectParams.edgeRadius),r.y=a.y+c.y,r.z=a.z+c.z);const h=p=>(p=1/this.objectParams.notchRadius*p,p=Math.PI*Math.max(-1,Math.min(1,p)),this.objectParams.notchDepth*(Math.cos(p)+1)),d=p=>h(p[0])*h(p[1]),u=.23;r.y===.5?r.y-=d([r.x,r.z]):r.x===.5?(r.x-=d([r.y+u,r.z+u]),r.x-=d([r.y-u,r.z-u])):r.z===.5?(r.z-=d([r.x-u,r.y+u]),r.z-=d([r.x,r.y]),r.z-=d([r.x+u,r.y-u])):r.z===-.5?(r.z+=d([r.x+u,r.y+u]),r.z+=d([r.x+u,r.y-u]),r.z+=d([r.x-u,r.y+u]),r.z+=d([r.x-u,r.y-u])):r.x===-.5?(r.x+=d([r.y+u,r.z+u]),r.x+=d([r.y+u,r.z-u]),r.x+=d([r.y,r.z]),r.x+=d([r.y-u,r.z+u]),r.x+=d([r.y-u,r.z-u])):r.y===-.5&&(r.y+=d([r.x+u,r.z+u]),r.y+=d([r.x+u,r.z]),r.y+=d([r.x+u,r.z-u]),r.y+=d([r.x-u,r.z+u]),r.y+=d([r.x-u,r.z]),r.y+=d([r.x-u,r.z-u])),i.setXYZ(o,r.x,r.y,r.z)}}return n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=D0(n),n.computeVertexNormals(),n}createObjectMesh_InnerGeometry(){const e=new Xi(1-2*this.objectParams.edgeRadius,1-2*this.objectParams.edgeRadius),t=.48;return R0([e.clone().translate(0,0,t),e.clone().translate(0,0,-t),e.clone().rotateX(.5*Math.PI).translate(0,-t,0),e.clone().rotateX(.5*Math.PI).translate(0,t,0),e.clone().rotateY(.5*Math.PI).translate(-t,0,0),e.clone().rotateY(.5*Math.PI).translate(t,0,0)],!1)}addObjectEvents(e){e.body.addEventListener("sleep",t=>{let n=Math.round(new Date-this.rollTimer);e.body.allowSleep=!1,e.body.landed=!1;const i=new y;t.target.quaternion.toEuler(i);const s=.1;let o=h=>Math.abs(h)<s,r=h=>Math.abs(h-.5*Math.PI)<s,a=h=>Math.abs(.5*Math.PI+h)<s,c=h=>Math.abs(Math.PI-h)<s||Math.abs(Math.PI+h)<s;o(i.z)?o(i.x)?(this.showRollResults(1),e.body.landed=!0):r(i.x)?(this.showRollResults(4),e.body.landed=!0):a(i.x)?(this.showRollResults(3),e.body.landed=!0):c(i.x)?(this.showRollResults(6),e.body.landed=!0):(console.log("###### RE-SLEEPING 111 !!!!"),n<2e3&&(e.body.allowSleep=!0)):r(i.z)?(this.showRollResults(2),e.body.landed=!0):a(i.z)?(this.showRollResults(5),e.body.landed=!0):(console.log("###### RE-SLEEPING 222 !!!!"),n<2e3&&(e.body.allowSleep=!0)),(e.body.landed=!0)&&(this.movementFinishedCounter+=1),this.checkObjectStoppedMoving()})}checkObjectStoppedMoving(){console.log("checkObjectStoppedMoving ====================");let e=this.objectArray.filter(t=>t.body.velocity.z<.1&&t.body.velocity.x<.1&&t.body.velocity.y<.1&&t.body.angularVelocity.z<.1&&t.body.angularVelocity.x<.1&&t.body.angularVelocity.y<.1);console.log("objectStillMoving.length is %O",e.length),console.log("this.objectArray.length is %O",this.objectArray.length),console.log("new Date() - this.rollTimer is %O",new Date-this.rollTimer),e.length==this.objectArray.length&&(this.rolling=!1,this.stopAnimation())}async setTimer(){console.log("set timer inside 111"),timeWork=setTimeout(()=>{console.log("set timer inside 222"),console.log("timer finished"),this.rolling&&(this.rolling=!1,this.stopAnimation())},this.rollMaxTime)}throwObjects(){this.allowedToAnimate=!0,this.renderScene(),this.rolling=!0,this.rollTimer=new Date,clearTimeout(this.timeWork),console.log("set timer 111"),console.log("set timer 222"),this.timeWork=setTimeout(()=>{console.log("set timer inside 222"),console.log("timer finished"),this.rolling&&(this.rolling=!1,this.stopAnimation())},this.rollMaxTime),this.objectArray.forEach((e,t)=>{e.body.velocity.setZero(),e.body.angularVelocity.setZero(),e.body.position=new y(mn(-10,10),mn(70,150),mn(-10,10)),e.mesh.position.copy(e.body.position),e.mesh.rotation.set(1*Math.PI*Math.random(),1*Math.PI*Math.random(),1*Math.PI*Math.random()),e.body.quaternion.copy(e.mesh.quaternion);const n=33+35*Math.random();e.body.applyImpulse(new y(mn(-4,32),n,-mn(-8,32)),new y(mn(3,4)*(100/this.objectParams.scale),mn(3,4)*(100/this.objectParams.scale),-mn(3,4)*(100/this.objectParams.scale))),e.body.allowSleep=!0})}showRollResults(e){}}const N0={id:"threeDcanvas",class:"w-full h-full relative flex justify-center",style:{background:"rgb(241 241 241)"}},z0={class:"w-full h-full",style:{background:"radial-gradient(circle, rgba(238, 238, 238, 0) 30%, rgba(0, 0, 0, 0.18) 180%)"}},F0={key:0,class:"w-full h-full relative flex justify-center items-center"},O0=mt("canvas",{id:"canvas",class:"w-full h-full relative z-10"},null,-1),B0=mt("canvas",{id:"canvasScreenshot",class:"absolute w-full h-full z-50 pointer-events-none invisible"},null,-1),G0=[O0,B0],k0={key:0,class:"absolute left-8 top-1 mb-6 pointer-events-auto z-50 flex flex-col items-center justify-center space-y-4"},V0={key:0,class:"absolute right-8 top-1 mb-6 pointer-events-auto z-50 flex flex-col items-center justify-center space-y-4"},Y0={__name:"threeDcanvas",props:{Objects:Object,rollOnMount:Boolean,screenshotMode:Boolean,showDevTools:Boolean},setup(l){const e=l,t=Ll(),{$event:n,$listen:i,$debounce:s}=wl();El();const o=Tl(!0);let r;Al(()=>{setTimeout(()=>{r=new U0(e.Objects,"threeDcanvas","canvas",t.app.baseURL,e.rollOnMount,e.screenshotMode),r.init(),window.addEventListener("resize",s(()=>{console.log("threeDcanvas got Resize event"),r.resizeEvent(),r.throwObjects()},300)),i("deviceShaken",()=>{r.throwObjects()}),i("rollDice",()=>{r.throwObjects()})},500)}),Cl(async()=>{console.log("CANVAS VUE UN-MOUNTED"),await r.disposeEverything(),console.log("CANVAS VUE scene cleared"),o.value=!1});function a(){r.setupFormation()}function c(){r.rotateObject()}function h(){r.groupObjects()}function d(){r.stopAnimation()}function u(){r.createScreenshot()}function p(){r.throwObjects()}function g(){r.resetOrbitControls()}function v(m,f){r.nudgeRotation(m,f)}return(m,f)=>(Ji(),Qi("div",N0,[mt("div",z0,[Fs(Gs,{name:"fade"},{default:Os(()=>[Pl(o)?(Ji(),Qi("div",F0,G0)):Bs("",!0)]),_:1})]),Fs(Gs,{name:"fade"},{default:Os(()=>[l.showDevTools?(Ji(),Qi("div",k0,[mt("div",{onClick:f[0]||(f[0]=_=>a()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Formation"),mt("div",{onClick:f[1]||(f[1]=_=>c()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Rotate"),mt("div",{onClick:f[2]||(f[2]=_=>h()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Group Objects for Shot"),mt("div",{onClick:f[3]||(f[3]=_=>u()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Screenshot"),mt("div",{onClick:f[4]||(f[4]=_=>d()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Stop Anim"),mt("div",{onClick:f[5]||(f[5]=_=>p()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Roll"),mt("div",{onClick:f[6]||(f[6]=_=>g()),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Reset Orbit")])):Bs("",!0)]),_:1}),Fs(Gs,{name:"fade"},{default:Os(()=>[l.showDevTools?(Ji(),Qi("div",V0,[mt("div",{onClick:f[7]||(f[7]=_=>v("x",-5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"X -5"),mt("div",{onClick:f[8]||(f[8]=_=>v("x",5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"X 5"),mt("div",{onClick:f[9]||(f[9]=_=>v("y",-5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Y -5"),mt("div",{onClick:f[10]||(f[10]=_=>v("y",5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Y 5"),mt("div",{onClick:f[11]||(f[11]=_=>v("z",-5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Z -5"),mt("div",{onClick:f[12]||(f[12]=_=>v("z",5)),class:"p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer"},"Z 5")])):Bs("",!0)]),_:1})]))}};export{Y0 as _};
