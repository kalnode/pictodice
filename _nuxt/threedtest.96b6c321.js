import{a as cl,q as hl,o as Sa,b as wa,e as Ni,A as ul,u as Dr,h as dl,f as fl}from"./entry.ea7fcb9e.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mr="151",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pl=0,Ir=1,ml=2,ba=1,Ea=2,Li=3,xn=0,St=1,Jt=2,vn=0,ui=1,Nr=2,Ur=3,zr=4,gl=5,ci=100,_l=101,vl=102,Fr=103,Or=104,xl=200,yl=201,Ml=202,Sl=203,Ta=204,Aa=205,wl=206,bl=207,El=208,Tl=209,Al=210,Cl=0,Pl=1,Ll=2,fr=3,Rl=4,Dl=5,Il=6,Nl=7,Ca=0,Ul=1,zl=2,un=0,Fl=1,Ol=2,Bl=3,Gl=4,Vl=5,Pa=300,pi=301,mi=302,pr=303,mr=304,xs=306,gr=1e3,kt=1001,_r=1002,vt=1003,Br=1004,Cs=1005,Nt=1006,kl=1007,Ui=1008,zn=1009,Hl=1010,Wl=1011,La=1012,ql=1013,Dn=1014,In=1015,zi=1016,Xl=1017,jl=1018,di=1020,Yl=1021,Ht=1023,$l=1024,Zl=1025,Nn=1026,gi=1027,Kl=1028,Jl=1029,Ql=1030,ec=1031,tc=1033,Ps=33776,Ls=33777,Rs=33778,Ds=33779,Gr=35840,Vr=35841,kr=35842,Hr=35843,nc=36196,Wr=37492,qr=37496,Xr=37808,jr=37809,Yr=37810,$r=37811,Zr=37812,Kr=37813,Jr=37814,Qr=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,Is=36492,ic=36283,oo=36284,ao=36285,lo=36286,Fn=3e3,Xe=3001,sc=3200,rc=3201,Ra=0,oc=1,Zt="srgb",Fi="srgb-linear",Da="display-p3",Ns=7680,ac=519,co=35044,ho="300 es",vr=1035;class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,xr=180/Math.PI;function Gi(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[c&255]+ft[c>>8&255]+ft[c>>16&255]+ft[c>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function xt(c,e,t){return Math.max(e,Math.min(t,c))}function lc(c,e){return(c%e+e)%e}function zs(c,e,t){return(1-t)*c+t*e}function uo(c){return(c&c-1)===0&&c!==0}function cc(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Wi(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Et(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,a,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],x=i[4],S=i[7],M=i[2],A=i[5],L=i[8];return s[0]=o*_+r*v+a*M,s[3]=o*m+r*x+a*A,s[6]=o*f+r*S+a*L,s[1]=l*_+h*v+d*M,s[4]=l*m+h*x+d*A,s[7]=l*f+h*S+d*L,s[2]=u*_+p*v+g*M,s[5]=u*m+p*x+g*A,s[8]=u*f+p*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8];return t*o*h-t*r*l-n*s*h+n*r*a+i*s*l-i*o*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8],d=h*o-r*l,u=r*a-h*s,p=l*s-o*a,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(r*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*a)*_,e[5]=(i*s-r*t)*_,e[6]=p*_,e[7]=(n*a-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*o+l*r)+o+e,-i*l,i*a,-i*(-l*o+a*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Fs.makeScale(e,t)),this}rotate(e){return this.premultiply(Fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new ze;function Ia(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function _s(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function fi(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Os(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const hc=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),uc=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dc(c){return c.convertSRGBToLinear().applyMatrix3(uc)}function fc(c){return c.applyMatrix3(hc).convertLinearToSRGB()}const pc={[Fi]:c=>c,[Zt]:c=>c.convertSRGBToLinear(),[Da]:dc},mc={[Fi]:c=>c,[Zt]:c=>c.convertLinearToSRGB(),[Da]:fc},Tt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return Fi},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.enabled===!1||e===t||!e||!t)return c;const n=pc[e],i=mc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(c))},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}};let qn;class Na{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=_s("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ua{constructor(e=null){this.isSource=!0,this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Bs(i[o].image)):s.push(Bs(i[o]))}else s=Bs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bs(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Na.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class Lt extends kn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=kt,i=kt,s=Nt,o=Ui,r=Ht,a=zn,l=Lt.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Gi(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=a,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Pa;Lt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,l=a[0],h=a[4],d=a[8],u=a[1],p=a[5],g=a[9],_=a[2],m=a[6],f=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(p+1)/2,M=(f+1)/2,A=(h+u)/4,L=(d+_)/4,z=(g+m)/4;return x>S&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=L/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=z/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=L/s,i=z/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends kn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class za extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Bn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(r===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||a!==u||l!==p||h!==g){let m=1-r;const f=a*u+l*p+h*g+d*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),A=Math.atan2(M,f*v);m=Math.sin(m*A)/M,r=Math.sin(r*A)/M}const S=r*v;if(a=a*m+u*S,l=l*m+p*S,h=h*m+g*S,d=d*m+_*S,m===1-r){const M=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=M,l*=M,h*=M,d*=M}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=r*g+h*d+a*p-l*u,e[t+1]=a*g+h*u+l*d-r*p,e[t+2]=l*g+h*p+r*u-a*d,e[t+3]=h*g-r*d-a*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,a=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=a(n/2),p=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],h=t[6],d=t[10],u=n+r+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>r&&n>d){const p=2*Math.sqrt(1+n-r-d);this._w=(h-a)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(r>d){const p=2*Math.sqrt(1+r-n-d);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+d-n-r);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,a=t._y,l=t._z,h=t._w;return this._x=n*h+o*r+i*l-s*a,this._y=i*h+o*a+s*r-n*l,this._z=s*h+o*l+n*a-i*r,this._w=o*h-n*r-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-r*r;if(a<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,r),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,a=e.w,l=a*t+o*i-r*n,h=a*n+r*t-s*i,d=a*i+s*n-o*t,u=-s*t-o*n-r*i;return this.x=l*a+u*-s+h*-r-d*-o,this.y=h*a+u*-o+d*-s-l*-r,this.z=d*a+u*-r+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,a=t.z;return this.x=i*a-s*r,this.y=s*o-n*a,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new V,fo=new Bn;class Vi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox),Xn.applyMatrix4(e.matrixWorld),this.union(Xn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,r=s.count;o<r;o++)en.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(en)}else i.boundingBox===null&&i.computeBoundingBox(),Xn.copy(i.boundingBox),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),qi.subVectors(this.max,Mi),jn.subVectors(e.a,Mi),Yn.subVectors(e.b,Mi),$n.subVectors(e.c,Mi),fn.subVectors(Yn,jn),pn.subVectors($n,Yn),bn.subVectors(jn,$n);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-bn.z,bn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,bn.z,0,-bn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-bn.y,bn.x,0];return!Vs(t,jn,Yn,$n,qi)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,jn,Yn,$n,qi))?!1:(Xi.crossVectors(fn,pn),t=[Xi.x,Xi.y,Xi.z],Vs(t,jn,Yn,$n,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new V,new V,new V,new V,new V,new V,new V,new V],en=new V,Xn=new Vi,jn=new V,Yn=new V,$n=new V,fn=new V,pn=new V,bn=new V,Mi=new V,qi=new V,Xi=new V,En=new V;function Vs(c,e,t,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){En.fromArray(c,s);const r=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),a=e.dot(En),l=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>r)return!1}return!0}const vc=new Vi,Si=new V,ks=new V;class Sr{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Si,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(ks)),this.expandByPoint(Si.copy(e.center).sub(ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new V,Hs=new V,ji=new V,mn=new V,Ws=new V,Yi=new V,qs=new V;let xc=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hs.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(Hs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ji),r=mn.dot(this.direction),a=-mn.dot(ji),l=mn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*a-r,u=o*r-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*r)+u*(o*d+u+2*a)+l}else u=s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),p=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Hs).addScaledVector(ji,u),p}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,a=n+o;return a<0?null:r<0?this.at(a,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||r>i)||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,i,s){Ws.subVectors(t,e),Yi.subVectors(n,e),qs.crossVectors(Ws,Yi);let o=this.direction.dot(qs),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;mn.subVectors(this.origin,e);const a=r*this.direction.dot(Yi.crossVectors(mn,Yi));if(a<0)return null;const l=r*this.direction.dot(Ws.cross(mn));if(l<0||a+l>o)return null;const h=-r*mn.dot(qs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,a,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=r,f[13]=a,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*d,g=r*h,_=r*d;t[0]=a*h,t[4]=-a*d,t[8]=l,t[1]=p+g*l,t[5]=u-_*l,t[9]=-r*a,t[2]=_-u*l,t[6]=g+p*l,t[10]=o*a}else if(e.order==="YXZ"){const u=a*h,p=a*d,g=l*h,_=l*d;t[0]=u+_*r,t[4]=g*r-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=p*r-g,t[6]=_+u*r,t[10]=o*a}else if(e.order==="ZXY"){const u=a*h,p=a*d,g=l*h,_=l*d;t[0]=u-_*r,t[4]=-o*d,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*h,t[9]=_-u*r,t[2]=-o*l,t[6]=r,t[10]=o*a}else if(e.order==="ZYX"){const u=o*h,p=o*d,g=r*h,_=r*d;t[0]=a*h,t[4]=g*l-p,t[8]=u*l+_,t[1]=a*d,t[5]=_*l+u,t[9]=p*l-g,t[2]=-l,t[6]=r*a,t[10]=o*a}else if(e.order==="YZX"){const u=o*a,p=o*l,g=r*a,_=r*l;t[0]=a*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*a,p=o*l,g=r*a,_=r*l;t[0]=a*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=r*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yc,e,Mc)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),gn.crossVectors(n,At),gn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),gn.crossVectors(n,At)),gn.normalize(),$i.crossVectors(At,gn),i[0]=gn.x,i[4]=$i.x,i[8]=At.x,i[1]=gn.y,i[5]=$i.y,i[9]=At.y,i[2]=gn.z,i[6]=$i.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],x=n[7],S=n[11],M=n[15],A=i[0],L=i[4],z=i[8],w=i[12],E=i[1],H=i[5],j=i[9],P=i[13],D=i[2],U=i[6],O=i[10],J=i[14],I=i[3],G=i[7],W=i[11],ie=i[15];return s[0]=o*A+r*E+a*D+l*I,s[4]=o*L+r*H+a*U+l*G,s[8]=o*z+r*j+a*O+l*W,s[12]=o*w+r*P+a*J+l*ie,s[1]=h*A+d*E+u*D+p*I,s[5]=h*L+d*H+u*U+p*G,s[9]=h*z+d*j+u*O+p*W,s[13]=h*w+d*P+u*J+p*ie,s[2]=g*A+_*E+m*D+f*I,s[6]=g*L+_*H+m*U+f*G,s[10]=g*z+_*j+m*O+f*W,s[14]=g*w+_*P+m*J+f*ie,s[3]=v*A+x*E+S*D+M*I,s[7]=v*L+x*H+S*U+M*G,s[11]=v*z+x*j+S*O+M*W,s[15]=v*w+x*P+S*J+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],a=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*a*d-i*l*d-s*r*u+n*l*u+i*r*p-n*a*p)+_*(+t*a*p-t*l*u+s*o*u-i*o*p+i*l*h-s*a*h)+m*(+t*l*d-t*r*p-s*o*d+n*o*p+s*r*h-n*l*h)+f*(-i*r*h-t*a*d+t*r*u+i*o*d-n*o*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],a=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=d*m*l-_*u*l+_*a*p-r*m*p-d*a*f+r*u*f,x=g*u*l-h*m*l-g*a*p+o*m*p+h*a*f-o*u*f,S=h*_*l-g*d*l+g*r*p-o*_*p-h*r*f+o*d*f,M=g*d*a-h*_*a-g*r*u+o*_*u+h*r*m-o*d*m,A=t*v+n*x+i*S+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(_*u*s-d*m*s-_*i*p+n*m*p+d*i*f-n*u*f)*L,e[2]=(r*m*s-_*a*s+_*i*l-n*m*l-r*i*f+n*a*f)*L,e[3]=(d*a*s-r*u*s-d*i*l+n*u*l+r*i*p-n*a*p)*L,e[4]=x*L,e[5]=(h*m*s-g*u*s+g*i*p-t*m*p-h*i*f+t*u*f)*L,e[6]=(g*a*s-o*m*s-g*i*l+t*m*l+o*i*f-t*a*f)*L,e[7]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*p+t*a*p)*L,e[8]=S*L,e[9]=(g*d*s-h*_*s-g*n*p+t*_*p+h*n*f-t*d*f)*L,e[10]=(o*_*s-g*r*s+g*n*l-t*_*l-o*n*f+t*r*f)*L,e[11]=(h*r*s-o*d*s-h*n*l+t*d*l+o*n*p-t*r*p)*L,e[12]=M*L,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*L,e[14]=(g*r*i-o*_*i-g*n*a+t*_*a+o*n*m-t*r*m)*L,e[15]=(o*d*i-h*r*i+h*n*a-t*d*a-o*n*u+t*r*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,a=e.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*a,l*a+i*r,0,l*r+i*a,h*r+n,h*a-i*o,0,l*a-i*r,h*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,a=t._w,l=s+s,h=o+o,d=r+r,u=s*l,p=s*h,g=s*d,_=o*h,m=o*d,f=r*d,v=a*l,x=a*h,S=a*d,M=n.x,A=n.y,L=n.z;return i[0]=(1-(_+f))*M,i[1]=(p+S)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(u+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+x)*L,i[9]=(m-v)*L,i[10]=(1-(u+_))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),r=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const l=1/s,h=1/o,d=1/r;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,a=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),p=-2*o*s/(o-s);return r[0]=a,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,a=1/(t-e),l=1/(n-i),h=1/(o-s),d=(t+e)*a,u=(n+i)*l,p=(o+s)*h;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new V,Ft=new rt,yc=new V(0,0,0),Mc=new V(1,1,1),gn=new V,$i=new V,At=new V,po=new rt,mo=new Bn;class ys{constructor(e=0,t=0,n=0,i=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mo.setFromEuler(this),this.setFromQuaternion(mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sc=0;const go=new V,Kn=new Bn,nn=new rt,Zi=new V,wi=new V,wc=new V,bc=new Bn,_o=new V(1,0,0),vo=new V(0,1,0),xo=new V(0,0,1),Ec={type:"added"},yo={type:"removed"};class wt extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new V,t=new ys,n=new Bn,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(_o,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return go.copy(e).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_o,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(wi,Zi,this.up):nn.lookAt(Zi,wi,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(nn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ec)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,a){return r[a.uuid]===void 0&&(r[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const a=r.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let a=0,l=this.material.length;a<l;a++)r.push(s(e.materials,this.material[a]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const a=this.animations[r];i.animations.push(s(e.animations,a))}}if(t){const r=o(e.geometries),a=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const a=[];for(const l in r){const h=r[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new V(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new V,sn=new V,Xs=new V,rn=new V,Jn=new V,Qn=new V,Mo=new V,js=new V,Ys=new V,$s=new V;let Ki=!1;class Vt{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ot.subVectors(i,t),sn.subVectors(n,t),Xs.subVectors(e,t);const o=Ot.dot(Ot),r=Ot.dot(sn),a=Ot.dot(Xs),l=sn.dot(sn),h=sn.dot(Xs),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(l*a-r*h)*u,g=(o*h-r*a)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,i,s,o,r,a){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),this.getInterpolation(e,t,n,i,s,o,r,a)}static getInterpolation(e,t,n,i,s,o,r,a){return this.getBarycoord(e,t,n,i,rn),a.setScalar(0),a.addScaledVector(s,rn.x),a.addScaledVector(o,rn.y),a.addScaledVector(r,rn.z),a}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),sn.subVectors(e,t),Ot.cross(sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ot.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;Jn.subVectors(i,n),Qn.subVectors(s,n),js.subVectors(e,n);const a=Jn.dot(js),l=Qn.dot(js);if(a<=0&&l<=0)return t.copy(n);Ys.subVectors(e,i);const h=Jn.dot(Ys),d=Qn.dot(Ys);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(Jn,o);$s.subVectors(e,s);const p=Jn.dot($s),g=Qn.dot($s);if(g>=0&&p<=g)return t.copy(s);const _=p*l-a*g;if(_<=0&&l>=0&&g<=0)return r=l/(l-g),t.copy(n).addScaledVector(Qn,r);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Mo.subVectors(s,i),r=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Mo,r);const f=1/(m+_+u);return o=_*f,r=u*f,t.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tc=0,vi=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=ui,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const a=s[r];delete a.metadata,o.push(a)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function Zs(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Tt.workingColorSpace){if(e=lc(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zs(o,s,e+1/3),this.g=Zs(o,s,e),this.b=Zs(o,s,e-1/3)}return Tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Oa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Tt.fromWorkingColorSpace(pt.copy(this),e),xt(pt.r*255,0,255)<<16^xt(pt.g*255,0,255)<<8^xt(pt.b*255,0,255)<<0}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,i=pt.g,s=pt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let a,l;const h=(r+o)/2;if(r===o)a=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Zt){Tt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,i=pt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Ji);const n=zs(Bt.h,Ji.h,t),i=zs(Bt.s,Ji.s,t),s=zs(Bt.l,Ji.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new ke;ke.NAMES=Oa;class wr extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new V,Qi=new Re;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ba extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ga extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Un extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ac=0;const It=new rt,Ks=new wt,ei=new V,Ct=new Vi,bi=new Vi,ht=new V;class yn extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ia(e)?Ga:Ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(Ct.min,bi.min),Ct.expandByPoint(ht),ht.addVectors(Ct.max,bi.max),Ct.expandByPoint(ht)):(Ct.expandByPoint(bi.min),Ct.expandByPoint(bi.max))}Ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],a=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ht.fromBufferAttribute(r,l),a&&(ei.fromBufferAttribute(e,l),ht.add(ei)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*r),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<r;E++)l[E]=new V,h[E]=new V;const d=new V,u=new V,p=new V,g=new Re,_=new Re,m=new Re,f=new V,v=new V;function x(E,H,j){d.fromArray(i,E*3),u.fromArray(i,H*3),p.fromArray(i,j*3),g.fromArray(o,E*2),_.fromArray(o,H*2),m.fromArray(o,j*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);const P=1/(_.x*m.y-m.x*_.y);isFinite(P)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(P),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(P),l[E].add(f),l[H].add(f),l[j].add(f),h[E].add(v),h[H].add(v),h[j].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,H=S.length;E<H;++E){const j=S[E],P=j.start,D=j.count;for(let U=P,O=P+D;U<O;U+=3)x(n[U+0],n[U+1],n[U+2])}const M=new V,A=new V,L=new V,z=new V;function w(E){L.fromArray(s,E*3),z.copy(L);const H=l[E];M.copy(H),M.sub(L.multiplyScalar(L.dot(H))).normalize(),A.crossVectors(z,H);const P=A.dot(h[E])<0?-1:1;a[E*4]=M.x,a[E*4+1]=M.y,a[E*4+2]=M.z,a[E*4+3]=P}for(let E=0,H=S.length;E<H;++E){const j=S[E],P=j.start,D=j.count;for(let U=P,O=P+D;U<O;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new V,s=new V,o=new V,r=new V,a=new V,l=new V,h=new V,d=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),r.add(h),a.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(r,a){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(a.length*h);let p=0,g=0;for(let _=0,m=a.length;_<m;_++){r.isInterleavedBufferAttribute?p=a[_]*r.data.stride+r.offset:p=a[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new yt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const r in i){const a=i[r],l=e(a,n);t.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const a=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);a.push(p)}t.morphAttributes[r]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,a=o.length;r<a;r++){const l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new rt,Xt=new xc,es=new Sr,wo=new V,ti=new V,ni=new V,ii=new V,Js=new V,ts=new V,ns=new Re,is=new Re,ss=new Re,bo=new V,Eo=new V,To=new V,rs=new V,os=new V;class Ut extends wt{constructor(e=new yn,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){ts.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=r[a],d=s[a];h!==0&&(Js.fromBufferAttribute(d,e),o?ts.addScaledVector(Js,h):ts.addScaledVector(Js.sub(t),h))}t.add(ts)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),Xt.copy(e.ray).recast(e.near),es.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(es,wo)===null||Xt.origin.distanceToSquared(wo)>(e.far-e.near)**2))||(So.copy(s).invert(),Xt.copy(e.ray).applyMatrix4(So),n.boundingBox!==null&&Xt.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,a=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,u=n.groups,p=n.drawRange;if(r!==null)if(Array.isArray(i))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=x;S<M;S+=3){const A=r.getX(S),L=r.getX(S+1),z=r.getX(S+2);o=as(this,f,e,Xt,l,h,d,A,L,z),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(r.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=r.getX(m),x=r.getX(m+1),S=r.getX(m+2);o=as(this,i,e,Xt,l,h,d,v,x,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=x;S<M;S+=3){const A=S,L=S+1,z=S+2;o=as(this,f,e,Xt,l,h,d,A,L,z),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,S=m+2;o=as(this,i,e,Xt,l,h,d,v,x,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Cc(c,e,t,n,i,s,o,r){let a;if(e.side===St?a=n.intersectTriangle(o,s,i,!0,r):a=n.intersectTriangle(i,s,o,e.side===xn,r),a===null)return null;os.copy(r),os.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(os);return l<t.near||l>t.far?null:{distance:l,point:os.clone(),object:c}}function as(c,e,t,n,i,s,o,r,a,l){c.getVertexPosition(r,ti),c.getVertexPosition(a,ni),c.getVertexPosition(l,ii);const h=Cc(c,e,t,n,ti,ni,ii,rs);if(h){i&&(ns.fromBufferAttribute(i,r),is.fromBufferAttribute(i,a),ss.fromBufferAttribute(i,l),h.uv=Vt.getInterpolation(rs,ti,ni,ii,ns,is,ss,new Re)),s&&(ns.fromBufferAttribute(s,r),is.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,l),h.uv2=Vt.getInterpolation(rs,ti,ni,ii,ns,is,ss,new Re)),o&&(bo.fromBufferAttribute(o,r),Eo.fromBufferAttribute(o,a),To.fromBufferAttribute(o,l),h.normal=Vt.getInterpolation(rs,ti,ni,ii,bo,Eo,To,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:a,c:l,normal:new V,materialIndex:0};Vt.getNormal(ti,ni,ii,d.normal),h.face=d}return h}class Gn extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(d,2));function g(_,m,f,v,x,S,M,A,L,z,w){const E=S/L,H=M/z,j=S/2,P=M/2,D=A/2,U=L+1,O=z+1;let J=0,I=0;const G=new V;for(let W=0;W<O;W++){const ie=W*H-P;for(let R=0;R<U;R++){const X=R*E-j;G[_]=X*v,G[m]=ie*x,G[f]=D,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[f]=A>0?1:-1,h.push(G.x,G.y,G.z),d.push(R/L),d.push(1-W/z),J+=1}}for(let W=0;W<z;W++)for(let ie=0;ie<L;ie++){const R=u+ie+U*W,X=u+ie+U*(W+1),$=u+(ie+1)+U*(W+1),ae=u+(ie+1)+U*W;a.push(R,X,ae),a.push(X,$,ae),I+=6}r.addGroup(p,I,w),p+=I,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _t(c){const e={};for(let t=0;t<c.length;t++){const n=_i(c[t]);for(const i in n)e[i]=n[i]}return e}function Pc(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function Va(c){return c.getRenderTarget()===null&&c.outputEncoding===Xe?Zt:Fi}const Lc={clone:_i,merge:_t};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ka extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/a,t-=o.offsetY*n/l,i*=o.width/a,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class Ic extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pt(si,ri,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Pt(si,ri,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Pt(si,ri,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Pt(si,ri,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const a=new Pt(si,ri,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new Pt(si,ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,a,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ha extends Lt{constructor(e,t,n,i,s,o,r,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,s,o,r,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gn(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:vn});s.uniforms.tEquirect.value=t;const o=new Ut(i,s),r=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Nt),new Ic(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Qs=new V,Uc=new V,zc=new ze;let Cn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qs.subVectors(n,t).cross(Uc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zc.getNormalMatrix(e),i=this.coplanarPoint(Qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Tn=new Sr,ls=new V;class br{constructor(e=new Cn,t=new Cn,n=new Cn,i=new Cn,s=new Cn,o=new Cn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],v=n[14],x=n[15];return t[0].setComponents(r-i,d-a,_-u,x-m).normalize(),t[1].setComponents(r+i,d+a,_+u,x+m).normalize(),t[2].setComponents(r+s,d+l,_+p,x+f).normalize(),t[3].setComponents(r-s,d-l,_-p,x-f).normalize(),t[4].setComponents(r-o,d-h,_-g,x-v).normalize(),t[5].setComponents(r+o,d+h,_+g,x+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wa(){let c=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Fc(c,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,p=c.createBuffer();c.bindBuffer(h,p),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,p=h.updateRange;c.bindBuffer(d,l),p.count===-1?c.bufferSubData(d,0,u):(t?c.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):c.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:a}}class Oi extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),a=Math.floor(i),l=r+1,h=a+1,d=e/r,u=t/a,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-o;for(let x=0;x<l;x++){const S=x*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/r),m.push(1-f/a)}}for(let f=0;f<a;f++)for(let v=0;v<r;v++){const x=v+l*f,S=v+l*(f+1),M=v+1+l*(f+1),A=v+1+l*f;p.push(x,S,A),p.push(S,M,A)}this.setIndex(p),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc="vec3 transformed = vec3( position );",qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jc=`#ifdef USE_IRIDESCENCE
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
#endif`,Yc=`#ifdef USE_BUMPMAP
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
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rh=`vec3 transformedNormal = objectNormal;
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
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
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
#endif`,Ah=`#if defined( USE_ENVMAP )
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
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Ih=`struct PhysicalMaterial {
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
}`,Nh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wh=`#if defined( USE_POINTS_UV )
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
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
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
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vu=`float getShadowMask() {
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
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
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
#endif`,Mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Su=`#ifdef USE_SKINNING
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
#endif`,wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#ifdef USE_TRANSMISSION
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
#endif`,Pu=`#ifdef USE_UV
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
#endif`,Lu=`#ifdef USE_UV
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
#endif`,Ru=`#ifdef USE_UV
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
#endif`,Du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`#include <common>
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
}`,Gu=`#if DEPTH_PACKING == 3200
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
}`,Vu=`#define DISTANCE
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
}`,ku=`#define DISTANCE
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qu=`uniform float scale;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,ju=`#include <common>
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
}`,Yu=`uniform vec3 diffuse;
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
}`,$u=`#define LAMBERT
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
}`,Zu=`#define LAMBERT
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
}`,Ku=`#define MATCAP
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
}`,Ju=`#define MATCAP
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
}`,Qu=`#define NORMAL
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
}`,ed=`#define NORMAL
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
}`,td=`#define PHONG
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
}`,nd=`#define PHONG
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
}`,id=`#define STANDARD
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
}`,sd=`#define STANDARD
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
}`,rd=`#define TOON
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
}`,od=`#define TOON
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
}`,ad=`uniform float size;
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,hd=`uniform vec3 color;
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
}`,ud=`uniform float rotation;
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
}`,dd=`uniform vec3 diffuse;
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
}`,Le={alphamap_fragment:Oc,alphamap_pars_fragment:Bc,alphatest_fragment:Gc,alphatest_pars_fragment:Vc,aomap_fragment:kc,aomap_pars_fragment:Hc,begin_vertex:Wc,beginnormal_vertex:qc,bsdfs:Xc,iridescence_fragment:jc,bumpmap_pars_fragment:Yc,clipping_planes_fragment:$c,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Kc,clipping_planes_vertex:Jc,color_fragment:Qc,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:sh,defaultnormal_vertex:rh,displacementmap_pars_vertex:oh,displacementmap_vertex:ah,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,encodings_fragment:hh,encodings_pars_fragment:uh,envmap_fragment:dh,envmap_common_pars_fragment:fh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Ah,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:xh,fog_pars_fragment:yh,gradientmap_pars_fragment:Mh,lightmap_fragment:Sh,lightmap_pars_fragment:wh,lights_lambert_fragment:bh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Th,lights_toon_fragment:Ch,lights_toon_pars_fragment:Ph,lights_phong_fragment:Lh,lights_phong_pars_fragment:Rh,lights_physical_fragment:Dh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Nh,lights_fragment_maps:Uh,lights_fragment_end:zh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:Gh,map_fragment:Vh,map_pars_fragment:kh,map_particle_fragment:Hh,map_particle_pars_fragment:Wh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Xh,morphcolor_vertex:jh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:Zh,normal_fragment_begin:Kh,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:eu,normal_vertex:tu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:su,clearcoat_pars_fragment:ru,iridescence_pars_fragment:ou,output_fragment:au,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:hu,dithering_fragment:uu,dithering_pars_fragment:du,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:_u,shadowmask_pars_fragment:vu,skinbase_vertex:xu,skinning_pars_vertex:yu,skinning_vertex:Mu,skinnormal_vertex:Su,specularmap_fragment:wu,specularmap_pars_fragment:bu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:Au,transmission_pars_fragment:Cu,uv_pars_fragment:Pu,uv_pars_vertex:Lu,uv_vertex:Ru,worldpos_vertex:Du,background_vert:Iu,background_frag:Nu,backgroundCube_vert:Uu,backgroundCube_frag:zu,cube_vert:Fu,cube_frag:Ou,depth_vert:Bu,depth_frag:Gu,distanceRGBA_vert:Vu,distanceRGBA_frag:ku,equirect_vert:Hu,equirect_frag:Wu,linedashed_vert:qu,linedashed_frag:Xu,meshbasic_vert:ju,meshbasic_frag:Yu,meshlambert_vert:$u,meshlambert_frag:Zu,meshmatcap_vert:Ku,meshmatcap_frag:Ju,meshnormal_vert:Qu,meshnormal_frag:ed,meshphong_vert:td,meshphong_frag:nd,meshphysical_vert:id,meshphysical_frag:sd,meshtoon_vert:rd,meshtoon_frag:od,points_vert:ad,points_frag:ld,shadow_vert:cd,shadow_frag:hd,sprite_vert:ud,sprite_frag:dd},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},Kt={basic:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:_t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:_t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:_t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:_t([ce.points,ce.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:_t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:_t([ce.common,ce.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:_t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:_t([ce.sprite,ce.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:_t([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:_t([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Kt.physical={uniforms:_t([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const cs={r:0,b:0,g:0};function fd(c,e,t,n,i,s,o){const r=new ke(0);let a=s===!0?0:1,l,h,d=null,u=0,p=null;function g(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x));const S=c.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?_(r,a):x&&x.isColor&&(_(x,1),v=!0),(c.autoClear||v)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xs)?(h===void 0&&(h=new Ut(new Gn(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:_i(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=x.encoding!==Xe,(d!==x||u!==x.version||p!==c.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=c.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ut(new Oi(2,2),new Vn({name:"BackgroundMaterial",uniforms:_i(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=x.encoding!==Xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==c.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=c.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(cs,Va(c)),n.buffers.color.setClear(cs.r,cs.g,cs.b,f,o)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),a=f,_(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,_(r,a)},render:g}}function pd(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},a=m(null);let l=a,h=!1;function d(D,U,O,J,I){let G=!1;if(o){const W=_(J,O,U);l!==W&&(l=W,p(l.object)),G=f(D,J,O,I),G&&v(D,J,O,I)}else{const W=U.wireframe===!0;(l.geometry!==J.id||l.program!==O.id||l.wireframe!==W)&&(l.geometry=J.id,l.program=O.id,l.wireframe=W,G=!0)}I!==null&&t.update(I,34963),(G||h)&&(h=!1,z(D,U,O,J),I!==null&&c.bindBuffer(34963,t.get(I).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?c.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?c.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,U,O){const J=O.wireframe===!0;let I=r[D.id];I===void 0&&(I={},r[D.id]=I);let G=I[U.id];G===void 0&&(G={},I[U.id]=G);let W=G[J];return W===void 0&&(W=m(u()),G[J]=W),W}function m(D){const U=[],O=[],J=[];for(let I=0;I<i;I++)U[I]=0,O[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:J,object:D,attributes:{},index:null}}function f(D,U,O,J){const I=l.attributes,G=U.attributes;let W=0;const ie=O.getAttributes();for(const R in ie)if(ie[R].location>=0){const $=I[R];let ae=G[R];if(ae===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;W++}return l.attributesNum!==W||l.index!==J}function v(D,U,O,J){const I={},G=U.attributes;let W=0;const ie=O.getAttributes();for(const R in ie)if(ie[R].location>=0){let $=G[R];$===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),I[R]=ae,W++}l.attributes=I,l.attributesNum=W,l.index=J}function x(){const D=l.newAttributes;for(let U=0,O=D.length;U<O;U++)D[U]=0}function S(D){M(D,0)}function M(D,U){const O=l.newAttributes,J=l.enabledAttributes,I=l.attributeDivisors;O[D]=1,J[D]===0&&(c.enableVertexAttribArray(D),J[D]=1),I[D]!==U&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),I[D]=U)}function A(){const D=l.newAttributes,U=l.enabledAttributes;for(let O=0,J=U.length;O<J;O++)U[O]!==D[O]&&(c.disableVertexAttribArray(O),U[O]=0)}function L(D,U,O,J,I,G){n.isWebGL2===!0&&(O===5124||O===5125)?c.vertexAttribIPointer(D,U,O,I,G):c.vertexAttribPointer(D,U,O,J,I,G)}function z(D,U,O,J){if(n.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=J.attributes,G=O.getAttributes(),W=U.defaultAttributeValues;for(const ie in G){const R=G[ie];if(R.location>=0){let X=I[ie];if(X===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const $=X.normalized,ae=X.itemSize,ne=t.get(X);if(ne===void 0)continue;const B=ne.buffer,me=ne.type,Se=ne.bytesPerElement;if(X.isInterleavedBufferAttribute){const le=X.data,be=le.stride,Be=X.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<R.locationSize;ye++)M(R.location+ye,le.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<R.locationSize;ye++)S(R.location+ye);c.bindBuffer(34962,B);for(let ye=0;ye<R.locationSize;ye++)L(R.location+ye,ae/R.locationSize,me,$,be*Se,(Be+ae/R.locationSize*ye)*Se)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<R.locationSize;le++)M(R.location+le,X.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<R.locationSize;le++)S(R.location+le);c.bindBuffer(34962,B);for(let le=0;le<R.locationSize;le++)L(R.location+le,ae/R.locationSize,me,$,ae*Se,ae/R.locationSize*le*Se)}}else if(W!==void 0){const $=W[ie];if($!==void 0)switch($.length){case 2:c.vertexAttrib2fv(R.location,$);break;case 3:c.vertexAttrib3fv(R.location,$);break;case 4:c.vertexAttrib4fv(R.location,$);break;default:c.vertexAttrib1fv(R.location,$)}}}}A()}function w(){j();for(const D in r){const U=r[D];for(const O in U){const J=U[O];for(const I in J)g(J[I].object),delete J[I];delete U[O]}delete r[D]}}function E(D){if(r[D.id]===void 0)return;const U=r[D.id];for(const O in U){const J=U[O];for(const I in J)g(J[I].object),delete J[I];delete U[O]}delete r[D.id]}function H(D){for(const U in r){const O=r[U];if(O[D.id]===void 0)continue;const J=O[D.id];for(const I in J)g(J[I].object),delete J[I];delete O[D.id]}}function j(){P(),h=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function md(c,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){c.drawArrays(s,l,h),t.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,p;if(i)u=c,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=a}function gd(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),p=c.getParameter(3379),g=c.getParameter(34076),_=c.getParameter(34921),m=c.getParameter(36347),f=c.getParameter(36348),v=c.getParameter(36349),x=u>0,S=o||e.has("OES_texture_float"),M=x&&S,A=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:A}}function _d(c){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Cn,r=new ze,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=c.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,x=v*4;let S=f.clippingState||null;a.value=S,S=h(g,u,x,p);for(let M=0;M!==x;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=a.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(v,r),o.normal.toArray(m,S),m[S+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vd(c){let e=new WeakMap;function t(o,r){return r===pr?o.mapping=pi:r===mr&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===pr||r===mr)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const l=new Nc(a.height/2);return l.fromEquirectangularTexture(c,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xd extends ka{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,a=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,Ao=[.125,.215,.35,.446,.526,.582],Ln=20,er=new xd,Co=new ke;let tr=null;const Pn=(1+Math.sqrt(5))/2,oi=1/Pn,Po=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Pn,oi),new V(0,Pn,-oi),new V(oi,0,Pn),new V(-oi,0,Pn),new V(Pn,oi,0),new V(-Pn,oi,0)];class Lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tr),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:zi,format:Ht,encoding:Fn,depthBuffer:!1},i=Ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ro(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yd(s)),this._blurMaterial=Md(s,e,t)}return i}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,n,i){const r=new Pt(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Co),h.toneMapping=un,h.autoClear=!1;const p=new wr({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Ut(new Gn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Co),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(r.up.set(0,a[f],0),r.lookAt(l[f],0,0)):v===1?(r.up.set(0,0,a[f]),r.lookAt(0,l[f],0)):(r.up.set(0,a[f],0),r.lookAt(0,0,l[f]));const x=this._cubeSize;hs(i,v*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const a=this._cubeSize;hs(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Po[(i-1)%Po.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ut(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ln-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ln;m>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ln}`);const f=[];let v=0;for(let L=0;L<Ln;++L){const z=L/_,w=Math.exp(-z*z/2);f.push(w),L===0?v+=w:L<m&&(v+=2*w)}for(let L=0;L<f.length;L++)f[L]=f[L]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const S=this._sizeLods[i],M=3*S*(i>x-hi?i-x+hi:0),A=4*(this._cubeSize-S);hs(t,M,A,3*S,2*S),a.setRenderTarget(t),a.render(d,er)}}function yd(c){const e=[],t=[],n=[];let i=c;const s=c-hi+1+Ao.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let a=1/r;o>c-hi?a=Ao[o-c+hi-1]:o===0&&(a=0),n.push(a);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,z=A>2?0:-1,w=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];v.set(w,_*g*A),x.set(u,m*g*A);const E=[A,A,A,A,A,A];S.set(E,f*g*A)}const M=new yn;M.setAttribute("position",new yt(v,_)),M.setAttribute("uv",new yt(x,m)),M.setAttribute("faceIndex",new yt(S,f)),e.push(M),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ro(c,e,t){const n=new On(c,e,t);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function Md(c,e,t){const n=new Float32Array(Ln),i=new V(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Er(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Do(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Io(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Er(){return`

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
	`}function Sd(c){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const a=r.mapping,l=a===pr||a===mr,h=a===pi||a===mi;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new Lo(c)),d=l?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Lo(c));const u=l?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let a=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&a++;return a===l}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wd(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bd(c,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],34962)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const M=v[x+0],A=v[x+1],L=v[x+2];u.push(M,A,A,L,L,M)}}else{const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const M=x+0,A=x+1,L=x+2;u.push(M,A,A,L,L,M)}}const m=new(Ia(u)?Ga:Ba)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:a,getWireframeAttribute:h}}function Ed(c,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function h(u,p){c.drawElements(s,p,r,u*a),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let _,m;if(i)_=c,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,r,u*a,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Td(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ad(c,e){return c[0]-e[0]}function Cd(c,e){return Math.abs(e[1])-Math.abs(c[1])}function Pd(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new je,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let D=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let z=0;v===!0&&(z=1),x===!0&&(z=2),S===!0&&(z=3);let w=h.attributes.position.count*z,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const H=new Float32Array(w*E*4*g),j=new za(H,w,E,g);j.type=In,j.needsUpdate=!0;const P=z*4;for(let U=0;U<g;U++){const O=M[U],J=A[U],I=L[U],G=w*E*4*U;for(let W=0;W<O.count;W++){const ie=W*P;v===!0&&(o.fromBufferAttribute(O,W),H[G+ie+0]=o.x,H[G+ie+1]=o.y,H[G+ie+2]=o.z,H[G+ie+3]=0),x===!0&&(o.fromBufferAttribute(J,W),H[G+ie+4]=o.x,H[G+ie+5]=o.y,H[G+ie+6]=o.z,H[G+ie+7]=0),S===!0&&(o.fromBufferAttribute(I,W),H[G+ie+8]=o.x,H[G+ie+9]=o.y,H[G+ie+10]=o.z,H[G+ie+11]=I.itemSize===4?o.w:1)}}_={count:g,texture:j,size:new Re(w,E)},s.set(h,_),h.addEventListener("dispose",D)}let m=0;for(let v=0;v<u.length;v++)m+=u[v];const f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(c,"morphTargetBaseInfluence",f),d.getUniforms().setValue(c,"morphTargetInfluences",u),d.getUniforms().setValue(c,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(c,"morphTargetsTextureSize",_.size)}else{const p=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){const S=g[x];S[0]=x,S[1]=u[x]}g.sort(Cd);for(let x=0;x<8;x++)x<p&&g[x][1]?(r[x][0]=g[x][0],r[x][1]=g[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(Ad);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const S=r[x],M=S[0],A=S[1];M!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+x)!==_[M]&&h.setAttribute("morphTarget"+x,_[M]),m&&h.getAttribute("morphNormal"+x)!==m[M]&&h.setAttribute("morphNormal"+x,m[M]),i[x]=A,f+=A):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(c,"morphTargetBaseInfluence",v),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Ld(c,e,t,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function o(){i=new WeakMap}function r(a){const l=a.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const qa=new Lt,Xa=new za,ja=new _c,Ya=new Ha,No=[],Uo=[],zo=new Float32Array(16),Fo=new Float32Array(9),Oo=new Float32Array(4);function xi(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=No[i];if(s===void 0&&(s=new Float32Array(i),No[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,c[o].toArray(s,r)}return s}function at(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function lt(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function Ms(c,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function Rd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Dd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2fv(this.addr,e),lt(t,e)}}function Id(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;c.uniform3fv(this.addr,e),lt(t,e)}}function Nd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4fv(this.addr,e),lt(t,e)}}function Ud(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Oo.set(n),c.uniformMatrix2fv(this.addr,!1,Oo),lt(t,n)}}function zd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Fo.set(n),c.uniformMatrix3fv(this.addr,!1,Fo),lt(t,n)}}function Fd(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;zo.set(n),c.uniformMatrix4fv(this.addr,!1,zo),lt(t,n)}}function Od(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Bd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2iv(this.addr,e),lt(t,e)}}function Gd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;c.uniform3iv(this.addr,e),lt(t,e)}}function Vd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4iv(this.addr,e),lt(t,e)}}function kd(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Hd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2uiv(this.addr,e),lt(t,e)}}function Wd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;c.uniform3uiv(this.addr,e),lt(t,e)}}function qd(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4uiv(this.addr,e),lt(t,e)}}function Xd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||qa,i)}function jd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ja,i)}function Yd(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ya,i)}function $d(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xa,i)}function Zd(c){switch(c){case 5126:return Rd;case 35664:return Dd;case 35665:return Id;case 35666:return Nd;case 35674:return Ud;case 35675:return zd;case 35676:return Fd;case 5124:case 35670:return Od;case 35667:case 35671:return Bd;case 35668:case 35672:return Gd;case 35669:case 35673:return Vd;case 5125:return kd;case 36294:return Hd;case 36295:return Wd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return jd;case 35680:case 36300:case 36308:case 36293:return Yd;case 36289:case 36303:case 36311:case 36292:return $d}}function Kd(c,e){c.uniform1fv(this.addr,e)}function Jd(c,e){const t=xi(e,this.size,2);c.uniform2fv(this.addr,t)}function Qd(c,e){const t=xi(e,this.size,3);c.uniform3fv(this.addr,t)}function ef(c,e){const t=xi(e,this.size,4);c.uniform4fv(this.addr,t)}function tf(c,e){const t=xi(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function nf(c,e){const t=xi(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function sf(c,e){const t=xi(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function rf(c,e){c.uniform1iv(this.addr,e)}function of(c,e){c.uniform2iv(this.addr,e)}function af(c,e){c.uniform3iv(this.addr,e)}function lf(c,e){c.uniform4iv(this.addr,e)}function cf(c,e){c.uniform1uiv(this.addr,e)}function hf(c,e){c.uniform2uiv(this.addr,e)}function uf(c,e){c.uniform3uiv(this.addr,e)}function df(c,e){c.uniform4uiv(this.addr,e)}function ff(c,e,t){const n=this.cache,i=e.length,s=Ms(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qa,s[o])}function pf(c,e,t){const n=this.cache,i=e.length,s=Ms(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ja,s[o])}function mf(c,e,t){const n=this.cache,i=e.length,s=Ms(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ya,s[o])}function gf(c,e,t){const n=this.cache,i=e.length,s=Ms(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xa,s[o])}function _f(c){switch(c){case 5126:return Kd;case 35664:return Jd;case 35665:return Qd;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return sf;case 5124:case 35670:return rf;case 35667:case 35671:return of;case 35668:case 35672:return af;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return hf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return gf}}class vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zd(t.type)}}class xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_f(t.type)}}class yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function Bo(c,e){c.seq.push(e),c.map[e.id]=e}function Mf(c,e,t){const n=c.name,i=n.length;for(nr.lastIndex=0;;){const s=nr.exec(n),o=nr.lastIndex;let r=s[1];const a=s[2]==="]",l=s[3];if(a&&(r=r|0),l===void 0||l==="["&&o+2===i){Bo(t,l===void 0?new vf(r,c,e):new xf(r,c,e));break}else{let d=t.map[r];d===void 0&&(d=new yf(r),Bo(t,d)),t=d}}}class gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Mf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],a=n[r.id];a.needsUpdate!==!1&&r.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Go(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let Sf=0;function wf(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function bf(c){switch(c){case Fn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Vo(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+wf(c.getShaderSource(e),o)}else return i}function Ef(c,e){const t=bf(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Tf(c,e){let t;switch(e){case Fl:t="Linear";break;case Ol:t="Reinhard";break;case Bl:t="OptimizedCineon";break;case Gl:t="ACESFilmic";break;case Vl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Af(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.normalMapTangentSpace||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function Cf(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pf(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:c.getAttribLocation(e,o),locationSize:r}}return t}function Ri(c){return c!==""}function ko(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ho(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(c){return c.replace(Lf,Rf)}function Rf(c,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yr(t)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(c){return c.replace(Df,If)}function If(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qo(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nf(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===Ea?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Uf(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ff(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Ca:e="ENVMAP_BLENDING_MULTIPLY";break;case Ul:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function Of(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bf(c,e,t,n){const i=c.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const a=Nf(t),l=Uf(t),h=zf(t),d=Ff(t),u=Of(t),p=t.isWebGL2?"":Af(t),g=Cf(s),_=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ri).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(m=[qo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[p,qo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Le.tonemapping_pars_fragment:"",t.toneMapping!==un?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Ef("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),o=yr(o),o=ko(o,t),o=Ho(o,t),r=yr(r),r=ko(r,t),r=Ho(r,t),o=Wo(o),r=Wo(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,S=v+f+r,M=Go(i,35633,x),A=Go(i,35632,S);if(i.attachShader(_,M),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),c.debug.checkShaderErrors){const w=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(M).trim(),H=i.getShaderInfoLog(A).trim();let j=!0,P=!0;if(i.getProgramParameter(_,35714)===!1)if(j=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(i,_,M,A);else{const D=Vo(i,M,"vertex"),U=Vo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+w+`
`+D+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(E===""||H==="")&&(P=!1);P&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:E,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(M),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new gs(i,_)),L};let z;return this.getAttributes=function(){return z===void 0&&(z=Pf(i,_)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Sf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let Gf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kf(e),t.set(e,n)),n}}class kf{constructor(e){this.id=Gf++,this.code=e,this.usedTimes=0}}function Hf(c,e,t,n,i,s,o){const r=new Fa,a=new Vf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===1?"uv2":"uv"}function m(w,E,H,j,P){const D=j.fog,U=P.geometry,O=w.isMeshStandardMaterial?j.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),I=J&&J.mapping===xs?J.image.height:null,G=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=W!==void 0?W.length:0;let R=0;U.morphAttributes.position!==void 0&&(R=1),U.morphAttributes.normal!==void 0&&(R=2),U.morphAttributes.color!==void 0&&(R=3);let X,$,ae,ne;if(G){const fe=Kt[G];X=fe.vertexShader,$=fe.fragmentShader}else X=w.vertexShader,$=w.fragmentShader,a.update(w),ae=a.getVertexShaderID(w),ne=a.getFragmentShaderID(w);const B=c.getRenderTarget(),me=P.isInstancedMesh===!0,Se=!!w.map,le=!!w.matcap,be=!!J,Be=!!w.aoMap,ye=!!w.lightMap,Ce=!!w.bumpMap,Ze=!!w.normalMap,Ye=!!w.displacementMap,et=!!w.emissiveMap,Ke=!!w.metalnessMap,Oe=!!w.roughnessMap,He=w.clearcoat>0,ut=w.iridescence>0,C=w.sheen>0,b=w.transmission>0,Z=He&&!!w.clearcoatMap,se=He&&!!w.clearcoatNormalMap,oe=He&&!!w.clearcoatRoughnessMap,he=ut&&!!w.iridescenceMap,N=ut&&!!w.iridescenceThicknessMap,te=C&&!!w.sheenColorMap,Y=C&&!!w.sheenRoughnessMap,ue=!!w.specularMap,ge=!!w.specularColorMap,xe=!!w.specularIntensityMap,de=b&&!!w.transmissionMap,ve=b&&!!w.thicknessMap,Te=!!w.gradientMap,De=!!w.alphaMap,Je=w.alphaTest>0,F=!!w.extensions,Q=!!U.attributes.uv2;return{isWebGL2:h,shaderID:G,shaderName:w.type,vertexShader:X,fragmentShader:$,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:me,instancingColor:me&&P.instanceColor!==null,supportsVertexTextures:u,outputEncoding:B===null?c.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Fn,map:Se,matcap:le,envMap:be,envMapMode:be&&J.mapping,envMapCubeUVHeight:I,aoMap:Be,lightMap:ye,bumpMap:Ce,normalMap:Ze,displacementMap:u&&Ye,emissiveMap:et,normalMapObjectSpace:Ze&&w.normalMapType===oc,normalMapTangentSpace:Ze&&w.normalMapType===Ra,decodeVideoTexture:Se&&w.map.isVideoTexture===!0&&w.map.encoding===Xe,metalnessMap:Ke,roughnessMap:Oe,clearcoat:He,clearcoatMap:Z,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:ut,iridescenceMap:he,iridescenceThicknessMap:N,sheen:C,sheenColorMap:te,sheenRoughnessMap:Y,specularMap:ue,specularColorMap:ge,specularIntensityMap:xe,transmission:b,transmissionMap:de,thicknessMap:ve,gradientMap:Te,opaque:w.transparent===!1&&w.blending===ui,alphaMap:De,alphaTest:Je,combine:w.combine,mapUv:Se&&_(w.map.channel),aoMapUv:Be&&_(w.aoMap.channel),lightMapUv:ye&&_(w.lightMap.channel),bumpMapUv:Ce&&_(w.bumpMap.channel),normalMapUv:Ze&&_(w.normalMap.channel),displacementMapUv:Ye&&_(w.displacementMap.channel),emissiveMapUv:et&&_(w.emissiveMap.channel),metalnessMapUv:Ke&&_(w.metalnessMap.channel),roughnessMapUv:Oe&&_(w.roughnessMap.channel),clearcoatMapUv:Z&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:N&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Y&&_(w.sheenRoughnessMap.channel),specularMapUv:ue&&_(w.specularMap.channel),specularColorMapUv:ge&&_(w.specularColorMap.channel),specularIntensityMapUv:xe&&_(w.specularIntensityMap.channel),transmissionMapUv:de&&_(w.transmissionMap.channel),thicknessMapUv:ve&&_(w.thicknessMap.channel),alphaMapUv:De&&_(w.alphaMap.channel),vertexTangents:Ze&&!!U.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs2:Q,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Se||De),fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:R,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&H.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:un,useLegacyLights:c.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jt,flipSided:w.side===St,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:F&&w.extensions.derivatives===!0,extensionFragDepth:F&&w.extensions.fragDepth===!0,extensionDrawBuffers:F&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)E.push(H),E.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(v(E,w),x(E,w),E.push(c.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function x(w,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.matcap&&r.enable(4),E.envMap&&r.enable(5),E.normalMapObjectSpace&&r.enable(6),E.normalMapTangentSpace&&r.enable(7),E.clearcoat&&r.enable(8),E.iridescence&&r.enable(9),E.alphaTest&&r.enable(10),E.vertexColors&&r.enable(11),E.vertexAlphas&&r.enable(12),E.vertexUvs2&&r.enable(13),E.vertexTangents&&r.enable(14),w.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.useLegacyLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.decodeVideoTexture&&r.enable(17),E.opaque&&r.enable(18),E.pointsUvs&&r.enable(19),w.push(r.mask)}function S(w){const E=g[w.type];let H;if(E){const j=Kt[E];H=Lc.clone(j.uniforms)}else H=w.uniforms;return H}function M(w,E){let H;for(let j=0,P=l.length;j<P;j++){const D=l[j];if(D.cacheKey===E){H=D,++H.usedTimes;break}}return H===void 0&&(H=new Bf(c,E,w,s),l.push(H)),H}function A(w){if(--w.usedTimes===0){const E=l.indexOf(w);l[E]=l[l.length-1],l.pop(),w.destroy()}}function L(w){a.remove(w)}function z(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:A,releaseShaderCache:L,programs:l,dispose:z}}function Wf(){let c=new WeakMap;function e(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function t(s){c.delete(s)}function n(s,o,r){c.get(s)[o]=r}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qf(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function Xo(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function jo(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=c[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},c[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function r(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||qf),n.length>1&&n.sort(u||Xo),i.length>1&&i.sort(u||Xo)}function h(){for(let d=e,u=c.length;d<u;d++){const p=c[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:a,finish:h,sort:l}}function Xf(){let c=new WeakMap;function e(n,i){const s=c.get(n);let o;return s===void 0?(o=new jo,c.set(n,[o])):i>=s.length?(o=new jo,s.push(o)):o=s[i],o}function t(){c=new WeakMap}return{get:e,dispose:t}}function jf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ke};break;case"SpotLight":t={position:new V,direction:new V,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new V,halfWidth:new V,halfHeight:new V};break}return c[e.id]=t,t}}}function Yf(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let $f=0;function Zf(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function Kf(c,e){const t=new jf,n=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new V);const s=new V,o=new rt,r=new rt;function a(h,d){let u=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,f=0,v=0,x=0,S=0,M=0,A=0,L=0,z=0;h.sort(Zf);const w=d===!0?Math.PI:1;for(let H=0,j=h.length;H<j;H++){const P=h[H],D=P.color,U=P.intensity,O=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*U*w,p+=D.g*U*w,g+=D.b*U*w;else if(P.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(P.sh.coefficients[I],U);else if(P.isDirectionalLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const G=P.shadow,W=n.get(P);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=I,_++}else if(P.isSpotLight){const I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(D).multiplyScalar(U*w),I.distance=O,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,i.spot[f]=I;const G=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,G.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[f]=G.matrix,P.castShadow){const W=n.get(P);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.spotShadow[f]=W,i.spotShadowMap[f]=J,A++}f++}else if(P.isRectAreaLight){const I=t.get(P);I.color.copy(D).multiplyScalar(U),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=I,v++}else if(P.isPointLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),I.distance=P.distance,I.decay=P.decay,P.castShadow){const G=P.shadow,W=n.get(P);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=I,m++}else if(P.isHemisphereLight){const I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(U*w),I.groundColor.copy(P.groundColor).multiplyScalar(U*w),i.hemi[x]=I,x++}}v>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==S||E.numPointShadows!==M||E.numSpotShadows!==A||E.numSpotMaps!==L)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+L-z,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=z,E.directionalLength=_,E.pointLength=m,E.spotLength=f,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=S,E.numPointShadows=M,E.numSpotShadows=A,E.numSpotMaps=L,i.version=$f++)}function l(h,d){let u=0,p=0,g=0,_=0,m=0;const f=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const S=h[v];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),u++}else if(S.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),r.identity(),o.copy(S.matrixWorld),o.premultiply(f),r.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function Yo(c,e){const t=new Kf(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Jf(c,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Yo(c,e),t.set(s,[a])):o>=r.length?(a=new Yo(c,e),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Qf extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ep extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,np=`uniform sampler2D shadow_pass;
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
}`;function ip(c,e,t){let n=new br;const i=new Re,s=new Re,o=new je,r=new Qf({depthPacking:rc}),a=new ep,l={},h=t.maxTextureSize,d={[xn]:St,[St]:xn,[Jt]:Jt},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:tp,fragmentShader:np}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba,this.render=function(S,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=c.getRenderTarget(),z=c.getActiveCubeFace(),w=c.getActiveMipmapLevel(),E=c.state;E.setBlending(vn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let H=0,j=S.length;H<j;H++){const P=S[H],D=P.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/U.x),i.x=s.x*U.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/U.y),i.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null){const J=this.type!==Li?{minFilter:vt,magFilter:vt}:{};D.map=new On(i.x,i.y,J),D.map.texture.name=P.name+".shadowMap",D.camera.updateProjectionMatrix()}c.setRenderTarget(D.map),c.clear();const O=D.getViewportCount();for(let J=0;J<O;J++){const I=D.getViewport(J);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),E.viewport(o),D.updateMatrices(P,J),n=D.getFrustum(),x(M,A,D.camera,P,this.type)}D.isPointLightShadow!==!0&&this.type===Li&&f(D,A),D.needsUpdate=!1}m.needsUpdate=!1,c.setRenderTarget(L,z,w)};function f(S,M){const A=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new On(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,c.setRenderTarget(S.mapPass),c.clear(),c.renderBufferDirect(M,null,A,u,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,c.setRenderTarget(S.map),c.clear(),c.renderBufferDirect(M,null,A,p,_,null)}function v(S,M,A,L){let z=null;const w=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)z=w;else if(z=A.isPointLight===!0?a:r,c.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const E=z.uuid,H=M.uuid;let j=l[E];j===void 0&&(j={},l[E]=j);let P=j[H];P===void 0&&(P=z.clone(),j[H]=P),z=P}if(z.visible=M.visible,z.wireframe=M.wireframe,L===Li?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:d[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaTest,z.map=M.map,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,A.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const E=c.properties.get(z);E.light=A}return z}function x(S,M,A,L,z){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&z===Li)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const H=e.update(S),j=S.material;if(Array.isArray(j)){const P=H.groups;for(let D=0,U=P.length;D<U;D++){const O=P[D],J=j[O.materialIndex];if(J&&J.visible){const I=v(S,J,L,z);c.renderBufferDirect(A,null,H,I,S,O)}}}else if(j.visible){const P=v(S,j,L,z);c.renderBufferDirect(A,null,H,P,S,null)}}const E=S.children;for(let H=0,j=E.length;H<j;H++)x(E[H],M,A,L,z)}}function sp(c,e,t){const n=t.isWebGL2;function i(){let F=!1;const Q=new je;let re=null;const fe=new je(0,0,0,0);return{setMask:function(Me){re!==Me&&!F&&(c.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){F=Me},setClear:function(Me,We,$e,dt,dn){dn===!0&&(Me*=dt,We*=dt,$e*=dt),Q.set(Me,We,$e,dt),fe.equals(Q)===!1&&(c.clearColor(Me,We,$e,dt),fe.copy(Q))},reset:function(){F=!1,re=null,fe.set(-1,0,0,0)}}}function s(){let F=!1,Q=null,re=null,fe=null;return{setTest:function(Me){Me?B(2929):me(2929)},setMask:function(Me){Q!==Me&&!F&&(c.depthMask(Me),Q=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case Cl:c.depthFunc(512);break;case Pl:c.depthFunc(519);break;case Ll:c.depthFunc(513);break;case fr:c.depthFunc(515);break;case Rl:c.depthFunc(514);break;case Dl:c.depthFunc(518);break;case Il:c.depthFunc(516);break;case Nl:c.depthFunc(517);break;default:c.depthFunc(515)}re=Me}},setLocked:function(Me){F=Me},setClear:function(Me){fe!==Me&&(c.clearDepth(Me),fe=Me)},reset:function(){F=!1,Q=null,re=null,fe=null}}}function o(){let F=!1,Q=null,re=null,fe=null,Me=null,We=null,$e=null,dt=null,dn=null;return{setTest:function(Qe){F||(Qe?B(2960):me(2960))},setMask:function(Qe){Q!==Qe&&!F&&(c.stencilMask(Qe),Q=Qe)},setFunc:function(Qe,Dt,qt){(re!==Qe||fe!==Dt||Me!==qt)&&(c.stencilFunc(Qe,Dt,qt),re=Qe,fe=Dt,Me=qt)},setOp:function(Qe,Dt,qt){(We!==Qe||$e!==Dt||dt!==qt)&&(c.stencilOp(Qe,Dt,qt),We=Qe,$e=Dt,dt=qt)},setLocked:function(Qe){F=Qe},setClear:function(Qe){dn!==Qe&&(c.clearStencil(Qe),dn=Qe)},reset:function(){F=!1,Q=null,re=null,fe=null,Me=null,We=null,$e=null,dt=null,dn=null}}}const r=new i,a=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,S=null,M=null,A=null,L=null,z=null,w=!1,E=null,H=null,j=null,P=null,D=null;const U=c.getParameter(35661);let O=!1,J=0;const I=c.getParameter(7938);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=J>=2);let G=null,W={};const ie=c.getParameter(3088),R=c.getParameter(2978),X=new je().fromArray(ie),$=new je().fromArray(R);function ae(F,Q,re){const fe=new Uint8Array(4),Me=c.createTexture();c.bindTexture(F,Me),c.texParameteri(F,10241,9728),c.texParameteri(F,10240,9728);for(let We=0;We<re;We++)c.texImage2D(Q+We,0,6408,1,1,0,6408,5121,fe);return Me}const ne={};ne[3553]=ae(3553,3553,1),ne[34067]=ae(34067,34069,6),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),B(2929),a.setFunc(fr),Ye(!1),et(Ir),B(2884),Ce(vn);function B(F){u[F]!==!0&&(c.enable(F),u[F]=!0)}function me(F){u[F]!==!1&&(c.disable(F),u[F]=!1)}function Se(F,Q){return p[F]!==Q?(c.bindFramebuffer(F,Q),p[F]=Q,n&&(F===36009&&(p[36160]=Q),F===36160&&(p[36009]=Q)),!0):!1}function le(F,Q){let re=_,fe=!1;if(F)if(re=g.get(Q),re===void 0&&(re=[],g.set(Q,re)),F.isWebGLMultipleRenderTargets){const Me=F.texture;if(re.length!==Me.length||re[0]!==36064){for(let We=0,$e=Me.length;We<$e;We++)re[We]=36064+We;re.length=Me.length,fe=!0}}else re[0]!==36064&&(re[0]=36064,fe=!0);else re[0]!==1029&&(re[0]=1029,fe=!0);fe&&(t.isWebGL2?c.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function be(F){return m!==F?(c.useProgram(F),m=F,!0):!1}const Be={[ci]:32774,[_l]:32778,[vl]:32779};if(n)Be[Fr]=32775,Be[Or]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Be[Fr]=F.MIN_EXT,Be[Or]=F.MAX_EXT)}const ye={[xl]:0,[yl]:1,[Ml]:768,[Ta]:770,[Al]:776,[El]:774,[wl]:772,[Sl]:769,[Aa]:771,[Tl]:775,[bl]:773};function Ce(F,Q,re,fe,Me,We,$e,dt){if(F===vn){f===!0&&(me(3042),f=!1);return}if(f===!1&&(B(3042),f=!0),F!==gl){if(F!==v||dt!==w){if((x!==ci||A!==ci)&&(c.blendEquation(32774),x=ci,A=ci),dt)switch(F){case ui:c.blendFuncSeparate(1,771,1,771);break;case Nr:c.blendFunc(1,1);break;case Ur:c.blendFuncSeparate(0,769,0,1);break;case zr:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ui:c.blendFuncSeparate(770,771,1,771);break;case Nr:c.blendFunc(770,1);break;case Ur:c.blendFuncSeparate(0,769,0,1);break;case zr:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,L=null,z=null,v=F,w=dt}return}Me=Me||Q,We=We||re,$e=$e||fe,(Q!==x||Me!==A)&&(c.blendEquationSeparate(Be[Q],Be[Me]),x=Q,A=Me),(re!==S||fe!==M||We!==L||$e!==z)&&(c.blendFuncSeparate(ye[re],ye[fe],ye[We],ye[$e]),S=re,M=fe,L=We,z=$e),v=F,w=!1}function Ze(F,Q){F.side===Jt?me(2884):B(2884);let re=F.side===St;Q&&(re=!re),Ye(re),F.blending===ui&&F.transparent===!1?Ce(vn):Ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const fe=F.stencilWrite;l.setTest(fe),fe&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(32926):me(32926)}function Ye(F){E!==F&&(F?c.frontFace(2304):c.frontFace(2305),E=F)}function et(F){F!==pl?(B(2884),F!==H&&(F===Ir?c.cullFace(1029):F===ml?c.cullFace(1028):c.cullFace(1032))):me(2884),H=F}function Ke(F){F!==j&&(O&&c.lineWidth(F),j=F)}function Oe(F,Q,re){F?(B(32823),(P!==Q||D!==re)&&(c.polygonOffset(Q,re),P=Q,D=re)):me(32823)}function He(F){F?B(3089):me(3089)}function ut(F){F===void 0&&(F=33984+U-1),G!==F&&(c.activeTexture(F),G=F)}function C(F,Q,re){re===void 0&&(G===null?re=33984+U-1:re=G);let fe=W[re];fe===void 0&&(fe={type:void 0,texture:void 0},W[re]=fe),(fe.type!==F||fe.texture!==Q)&&(G!==re&&(c.activeTexture(re),G=re),c.bindTexture(F,Q||ne[F]),fe.type=F,fe.texture=Q)}function b(){const F=W[G];F!==void 0&&F.type!==void 0&&(c.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{c.compressedTexImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{c.compressedTexImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{c.texSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{c.texSubImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{c.texStorage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{c.texStorage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{c.texImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{c.texImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(F){X.equals(F)===!1&&(c.scissor(F.x,F.y,F.z,F.w),X.copy(F))}function ve(F){$.equals(F)===!1&&(c.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Te(F,Q){let re=d.get(Q);re===void 0&&(re=new WeakMap,d.set(Q,re));let fe=re.get(F);fe===void 0&&(fe=c.getUniformBlockIndex(Q,F.name),re.set(F,fe))}function De(F,Q){const fe=d.get(Q).get(F);h.get(Q)!==fe&&(c.uniformBlockBinding(Q,fe,F.__bindingPointIndex),h.set(Q,fe))}function Je(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},G=null,W={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,S=null,M=null,A=null,L=null,z=null,w=!1,E=null,H=null,j=null,P=null,D=null,X.set(0,0,c.canvas.width,c.canvas.height),$.set(0,0,c.canvas.width,c.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:B,disable:me,bindFramebuffer:Se,drawBuffers:le,useProgram:be,setBlending:Ce,setMaterial:Ze,setFlipSided:Ye,setCullFace:et,setLineWidth:Ke,setPolygonOffset:Oe,setScissorTest:He,activeTexture:ut,bindTexture:C,unbindTexture:b,compressedTexImage2D:Z,compressedTexImage3D:se,texImage2D:ge,texImage3D:xe,updateUBOMapping:Te,uniformBlockBinding:De,texStorage2D:Y,texStorage3D:ue,texSubImage2D:oe,texSubImage3D:he,compressedTexSubImage2D:N,compressedTexSubImage3D:te,scissor:de,viewport:ve,reset:Je}}function rp(c,e,t,n,i,s,o){const r=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return f?new OffscreenCanvas(C,b):_s("canvas")}function x(C,b,Z,se){let oe=1;if((C.width>se||C.height>se)&&(oe=se/Math.max(C.width,C.height)),oe<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=b?cc:Math.floor,N=he(oe*C.width),te=he(oe*C.height);_===void 0&&(_=v(N,te));const Y=Z?v(N,te):_;return Y.width=N,Y.height=te,Y.getContext("2d").drawImage(C,0,0,N,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+N+"x"+te+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return uo(C.width)&&uo(C.height)}function M(C){return r?!1:C.wrapS!==kt||C.wrapT!==kt||C.minFilter!==vt&&C.minFilter!==Nt}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==vt&&C.minFilter!==Nt}function L(C){c.generateMipmap(C)}function z(C,b,Z,se,oe=!1){if(r===!1)return b;if(C!==null){if(c[C]!==void 0)return c[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=b;return b===6403&&(Z===5126&&(he=33326),Z===5131&&(he=33325),Z===5121&&(he=33321)),b===33319&&(Z===5126&&(he=33328),Z===5131&&(he=33327),Z===5121&&(he=33323)),b===6408&&(Z===5126&&(he=34836),Z===5131&&(he=34842),Z===5121&&(he=se===Xe&&oe===!1?35907:32856),Z===32819&&(he=32854),Z===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(C,b,Z){return A(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==vt&&C.minFilter!==Nt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){return C===vt||C===Br||C===Cs?9728:9729}function H(C){const b=C.target;b.removeEventListener("dispose",H),P(b),b.isVideoTexture&&g.delete(b)}function j(C){const b=C.target;b.removeEventListener("dispose",j),U(b)}function P(C){const b=n.get(C);if(b.__webglInit===void 0)return;const Z=C.source,se=m.get(Z);if(se){const oe=se[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&D(C),Object.keys(se).length===0&&m.delete(Z)}n.remove(C)}function D(C){const b=n.get(C);c.deleteTexture(b.__webglTexture);const Z=C.source,se=m.get(Z);delete se[b.__cacheKey],o.memory.textures--}function U(C){const b=C.texture,Z=n.get(C),se=n.get(b);if(se.__webglTexture!==void 0&&(c.deleteTexture(se.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)c.deleteFramebuffer(Z.__webglFramebuffer[oe]),Z.__webglDepthbuffer&&c.deleteRenderbuffer(Z.__webglDepthbuffer[oe]);else{if(c.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&c.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let oe=0;oe<Z.__webglColorRenderbuffer.length;oe++)Z.__webglColorRenderbuffer[oe]&&c.deleteRenderbuffer(Z.__webglColorRenderbuffer[oe]);Z.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,he=b.length;oe<he;oe++){const N=n.get(b[oe]);N.__webglTexture&&(c.deleteTexture(N.__webglTexture),o.memory.textures--),n.remove(b[oe])}n.remove(b),n.remove(C)}let O=0;function J(){O=0}function I(){const C=O;return C>=a&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a),O+=1,C}function G(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function W(C,b){const Z=n.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Z,C,b);return}}t.bindTexture(3553,Z.__webglTexture,33984+b)}function ie(C,b){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){me(Z,C,b);return}t.bindTexture(35866,Z.__webglTexture,33984+b)}function R(C,b){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){me(Z,C,b);return}t.bindTexture(32879,Z.__webglTexture,33984+b)}function X(C,b){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){Se(Z,C,b);return}t.bindTexture(34067,Z.__webglTexture,33984+b)}const $={[gr]:10497,[kt]:33071,[_r]:33648},ae={[vt]:9728,[Br]:9984,[Cs]:9986,[Nt]:9729,[kl]:9985,[Ui]:9987};function ne(C,b,Z){if(Z?(c.texParameteri(C,10242,$[b.wrapS]),c.texParameteri(C,10243,$[b.wrapT]),(C===32879||C===35866)&&c.texParameteri(C,32882,$[b.wrapR]),c.texParameteri(C,10240,ae[b.magFilter]),c.texParameteri(C,10241,ae[b.minFilter])):(c.texParameteri(C,10242,33071),c.texParameteri(C,10243,33071),(C===32879||C===35866)&&c.texParameteri(C,32882,33071),(b.wrapS!==kt||b.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(C,10240,E(b.magFilter)),c.texParameteri(C,10241,E(b.minFilter)),b.minFilter!==vt&&b.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===vt||b.minFilter!==Cs&&b.minFilter!==Ui||b.type===In&&e.has("OES_texture_float_linear")===!1||r===!1&&b.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(c.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function B(C,b){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",H));const se=b.source;let oe=m.get(se);oe===void 0&&(oe={},m.set(se,oe));const he=G(b);if(he!==C.__cacheKey){oe[he]===void 0&&(oe[he]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),oe[he].usedTimes++;const N=oe[C.__cacheKey];N!==void 0&&(oe[C.__cacheKey].usedTimes--,N.usedTimes===0&&D(b)),C.__cacheKey=he,C.__webglTexture=oe[he].texture}return Z}function me(C,b,Z){let se=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=35866),b.isData3DTexture&&(se=32879);const oe=B(C,b),he=b.source;t.bindTexture(se,C.__webglTexture,33984+Z);const N=n.get(he);if(he.version!==N.__version||oe===!0){t.activeTexture(33984+Z),c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const te=M(b)&&S(b.image)===!1;let Y=x(b.image,te,!1,h);Y=ut(b,Y);const ue=S(Y)||r,ge=s.convert(b.format,b.encoding);let xe=s.convert(b.type),de=z(b.internalFormat,ge,xe,b.encoding,b.isVideoTexture);ne(se,b,ue);let ve;const Te=b.mipmaps,De=r&&b.isVideoTexture!==!0,Je=N.__version===void 0||oe===!0,F=w(b,Y,ue);if(b.isDepthTexture)de=6402,r?b.type===In?de=36012:b.type===Dn?de=33190:b.type===di?de=35056:de=33189:b.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Nn&&de===6402&&b.type!==La&&b.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Dn,xe=s.convert(b.type)),b.format===gi&&de===6402&&(de=34041,b.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=di,xe=s.convert(b.type))),Je&&(De?t.texStorage2D(3553,1,de,Y.width,Y.height):t.texImage2D(3553,0,de,Y.width,Y.height,0,ge,xe,null));else if(b.isDataTexture)if(Te.length>0&&ue){De&&Je&&t.texStorage2D(3553,F,de,Te[0].width,Te[0].height);for(let Q=0,re=Te.length;Q<re;Q++)ve=Te[Q],De?t.texSubImage2D(3553,Q,0,0,ve.width,ve.height,ge,xe,ve.data):t.texImage2D(3553,Q,de,ve.width,ve.height,0,ge,xe,ve.data);b.generateMipmaps=!1}else De?(Je&&t.texStorage2D(3553,F,de,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,ge,xe,Y.data)):t.texImage2D(3553,0,de,Y.width,Y.height,0,ge,xe,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Je&&t.texStorage3D(35866,F,de,Te[0].width,Te[0].height,Y.depth);for(let Q=0,re=Te.length;Q<re;Q++)ve=Te[Q],b.format!==Ht?ge!==null?De?t.compressedTexSubImage3D(35866,Q,0,0,0,ve.width,ve.height,Y.depth,ge,ve.data,0,0):t.compressedTexImage3D(35866,Q,de,ve.width,ve.height,Y.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,Q,0,0,0,ve.width,ve.height,Y.depth,ge,xe,ve.data):t.texImage3D(35866,Q,de,ve.width,ve.height,Y.depth,0,ge,xe,ve.data)}else{De&&Je&&t.texStorage2D(3553,F,de,Te[0].width,Te[0].height);for(let Q=0,re=Te.length;Q<re;Q++)ve=Te[Q],b.format!==Ht?ge!==null?De?t.compressedTexSubImage2D(3553,Q,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(3553,Q,de,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,Q,0,0,ve.width,ve.height,ge,xe,ve.data):t.texImage2D(3553,Q,de,ve.width,ve.height,0,ge,xe,ve.data)}else if(b.isDataArrayTexture)De?(Je&&t.texStorage3D(35866,F,de,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,ge,xe,Y.data)):t.texImage3D(35866,0,de,Y.width,Y.height,Y.depth,0,ge,xe,Y.data);else if(b.isData3DTexture)De?(Je&&t.texStorage3D(32879,F,de,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,ge,xe,Y.data)):t.texImage3D(32879,0,de,Y.width,Y.height,Y.depth,0,ge,xe,Y.data);else if(b.isFramebufferTexture){if(Je)if(De)t.texStorage2D(3553,F,de,Y.width,Y.height);else{let Q=Y.width,re=Y.height;for(let fe=0;fe<F;fe++)t.texImage2D(3553,fe,de,Q,re,0,ge,xe,null),Q>>=1,re>>=1}}else if(Te.length>0&&ue){De&&Je&&t.texStorage2D(3553,F,de,Te[0].width,Te[0].height);for(let Q=0,re=Te.length;Q<re;Q++)ve=Te[Q],De?t.texSubImage2D(3553,Q,0,0,ge,xe,ve):t.texImage2D(3553,Q,de,ge,xe,ve);b.generateMipmaps=!1}else De?(Je&&t.texStorage2D(3553,F,de,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,ge,xe,Y)):t.texImage2D(3553,0,de,ge,xe,Y);A(b,ue)&&L(se),N.__version=he.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Se(C,b,Z){if(b.image.length!==6)return;const se=B(C,b),oe=b.source;t.bindTexture(34067,C.__webglTexture,33984+Z);const he=n.get(oe);if(oe.version!==he.__version||se===!0){t.activeTexture(33984+Z),c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const N=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!N&&!te?Y[Q]=x(b.image[Q],!1,!0,l):Y[Q]=te?b.image[Q].image:b.image[Q],Y[Q]=ut(b,Y[Q]);const ue=Y[0],ge=S(ue)||r,xe=s.convert(b.format,b.encoding),de=s.convert(b.type),ve=z(b.internalFormat,xe,de,b.encoding),Te=r&&b.isVideoTexture!==!0,De=he.__version===void 0||se===!0;let Je=w(b,ue,ge);ne(34067,b,ge);let F;if(N){Te&&De&&t.texStorage2D(34067,Je,ve,ue.width,ue.height);for(let Q=0;Q<6;Q++){F=Y[Q].mipmaps;for(let re=0;re<F.length;re++){const fe=F[re];b.format!==Ht?xe!==null?Te?t.compressedTexSubImage2D(34069+Q,re,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(34069+Q,re,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+Q,re,0,0,fe.width,fe.height,xe,de,fe.data):t.texImage2D(34069+Q,re,ve,fe.width,fe.height,0,xe,de,fe.data)}}}else{F=b.mipmaps,Te&&De&&(F.length>0&&Je++,t.texStorage2D(34067,Je,ve,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(te){Te?t.texSubImage2D(34069+Q,0,0,0,Y[Q].width,Y[Q].height,xe,de,Y[Q].data):t.texImage2D(34069+Q,0,ve,Y[Q].width,Y[Q].height,0,xe,de,Y[Q].data);for(let re=0;re<F.length;re++){const Me=F[re].image[Q].image;Te?t.texSubImage2D(34069+Q,re+1,0,0,Me.width,Me.height,xe,de,Me.data):t.texImage2D(34069+Q,re+1,ve,Me.width,Me.height,0,xe,de,Me.data)}}else{Te?t.texSubImage2D(34069+Q,0,0,0,xe,de,Y[Q]):t.texImage2D(34069+Q,0,ve,xe,de,Y[Q]);for(let re=0;re<F.length;re++){const fe=F[re];Te?t.texSubImage2D(34069+Q,re+1,0,0,xe,de,fe.image[Q]):t.texImage2D(34069+Q,re+1,ve,xe,de,fe.image[Q])}}}A(b,ge)&&L(34067),he.__version=oe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function le(C,b,Z,se,oe){const he=s.convert(Z.format,Z.encoding),N=s.convert(Z.type),te=z(Z.internalFormat,he,N,Z.encoding);n.get(b).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,te,b.width,b.height,b.depth,0,he,N,null):t.texImage2D(oe,0,te,b.width,b.height,0,he,N,null)),t.bindFramebuffer(36160,C),Oe(b)?u.framebufferTexture2DMultisampleEXT(36160,se,oe,n.get(Z).__webglTexture,0,Ke(b)):(oe===3553||oe>=34069&&oe<=34074)&&c.framebufferTexture2D(36160,se,oe,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(C,b,Z){if(c.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let se=33189;if(Z||Oe(b)){const oe=b.depthTexture;oe&&oe.isDepthTexture&&(oe.type===In?se=36012:oe.type===Dn&&(se=33190));const he=Ke(b);Oe(b)?u.renderbufferStorageMultisampleEXT(36161,he,se,b.width,b.height):c.renderbufferStorageMultisample(36161,he,se,b.width,b.height)}else c.renderbufferStorage(36161,se,b.width,b.height);c.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const se=Ke(b);Z&&Oe(b)===!1?c.renderbufferStorageMultisample(36161,se,35056,b.width,b.height):Oe(b)?u.renderbufferStorageMultisampleEXT(36161,se,35056,b.width,b.height):c.renderbufferStorage(36161,34041,b.width,b.height),c.framebufferRenderbuffer(36160,33306,36161,C)}else{const se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0;oe<se.length;oe++){const he=se[oe],N=s.convert(he.format,he.encoding),te=s.convert(he.type),Y=z(he.internalFormat,N,te,he.encoding),ue=Ke(b);Z&&Oe(b)===!1?c.renderbufferStorageMultisample(36161,ue,Y,b.width,b.height):Oe(b)?u.renderbufferStorageMultisampleEXT(36161,ue,Y,b.width,b.height):c.renderbufferStorage(36161,Y,b.width,b.height)}}c.bindRenderbuffer(36161,null)}function Be(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const se=n.get(b.depthTexture).__webglTexture,oe=Ke(b);if(b.depthTexture.format===Nn)Oe(b)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,oe):c.framebufferTexture2D(36160,36096,3553,se,0);else if(b.depthTexture.format===gi)Oe(b)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,oe):c.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function ye(C){const b=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,C)}else if(Z){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=c.createRenderbuffer(),be(b.__webglDepthbuffer[se],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=c.createRenderbuffer(),be(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ce(C,b,Z){const se=n.get(C);b!==void 0&&le(se.__webglFramebuffer,C,C.texture,36064,3553),Z!==void 0&&ye(C)}function Ze(C){const b=C.texture,Z=n.get(C),se=n.get(b);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=c.createTexture()),se.__version=b.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,N=S(C)||r;if(oe){Z.__webglFramebuffer=[];for(let te=0;te<6;te++)Z.__webglFramebuffer[te]=c.createFramebuffer()}else{if(Z.__webglFramebuffer=c.createFramebuffer(),he)if(i.drawBuffers){const te=C.texture;for(let Y=0,ue=te.length;Y<ue;Y++){const ge=n.get(te[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&C.samples>0&&Oe(C)===!1){const te=he?b:[b];Z.__webglMultisampledFramebuffer=c.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const ue=te[Y];Z.__webglColorRenderbuffer[Y]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[Y]);const ge=s.convert(ue.format,ue.encoding),xe=s.convert(ue.type),de=z(ue.internalFormat,ge,xe,ue.encoding,C.isXRRenderTarget===!0),ve=Ke(C);c.renderbufferStorageMultisample(36161,ve,de,C.width,C.height),c.framebufferRenderbuffer(36160,36064+Y,36161,Z.__webglColorRenderbuffer[Y])}c.bindRenderbuffer(36161,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=c.createRenderbuffer(),be(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,se.__webglTexture),ne(34067,b,N);for(let te=0;te<6;te++)le(Z.__webglFramebuffer[te],C,b,36064,34069+te);A(b,N)&&L(34067),t.unbindTexture()}else if(he){const te=C.texture;for(let Y=0,ue=te.length;Y<ue;Y++){const ge=te[Y],xe=n.get(ge);t.bindTexture(3553,xe.__webglTexture),ne(3553,ge,N),le(Z.__webglFramebuffer,C,ge,36064+Y,3553),A(ge,N)&&L(3553)}t.unbindTexture()}else{let te=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(r?te=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,se.__webglTexture),ne(te,b,N),le(Z.__webglFramebuffer,C,b,36064,te),A(b,N)&&L(te),t.unbindTexture()}C.depthBuffer&&ye(C)}function Ye(C){const b=S(C)||r,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,oe=Z.length;se<oe;se++){const he=Z[se];if(A(he,b)){const N=C.isWebGLCubeRenderTarget?34067:3553,te=n.get(he).__webglTexture;t.bindTexture(N,te),L(N),t.unbindTexture()}}}function et(C){if(r&&C.samples>0&&Oe(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,se=C.height;let oe=16384;const he=[],N=C.stencilBuffer?33306:36096,te=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,te.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,te.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,te.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){he.push(36064+ue),C.depthBuffer&&he.push(N);const ge=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(ge===!1&&(C.depthBuffer&&(oe|=256),C.stencilBuffer&&(oe|=1024)),Y&&c.framebufferRenderbuffer(36008,36064,36161,te.__webglColorRenderbuffer[ue]),ge===!0&&(c.invalidateFramebuffer(36008,[N]),c.invalidateFramebuffer(36009,[N])),Y){const xe=n.get(b[ue]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,xe,0)}c.blitFramebuffer(0,0,Z,se,0,0,Z,se,oe,9728),p&&c.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ue,36161,te.__webglColorRenderbuffer[ue]);const ge=n.get(b[ue]).__webglTexture;t.bindFramebuffer(36160,te.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ue,3553,ge,0)}t.bindFramebuffer(36009,te.__webglMultisampledFramebuffer)}}function Ke(C){return Math.min(d,C.samples)}function Oe(C){const b=n.get(C);return r&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function ut(C,b){const Z=C.encoding,se=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===vr||Z!==Fn&&(Z===Xe?r===!1?e.has("EXT_sRGB")===!0&&se===Ht?(C.format=vr,C.minFilter=Nt,C.generateMipmaps=!1):b=Na.sRGBToLinear(b):(se!==Ht||oe!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),b}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=ie,this.setTexture3D=R,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function op(c,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===zn)return 5121;if(s===Xl)return 32819;if(s===jl)return 32820;if(s===Hl)return 5120;if(s===Wl)return 5122;if(s===La)return 5123;if(s===ql)return 5124;if(s===Dn)return 5125;if(s===In)return 5126;if(s===zi)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Yl)return 6406;if(s===Ht)return 6408;if(s===$l)return 6409;if(s===Zl)return 6410;if(s===Nn)return 6402;if(s===gi)return 34041;if(s===vr)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Kl)return 6403;if(s===Jl)return 36244;if(s===Ql)return 33319;if(s===ec)return 33320;if(s===tc)return 36249;if(s===Ps||s===Ls||s===Rs||s===Ds)if(o===Xe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gr||s===Vr||s===kr||s===Hr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nc)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wr||s===qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Wr)return o===Xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===qr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xr||s===jr||s===Yr||s===$r||s===Zr||s===Kr||s===Jr||s===Qr||s===eo||s===to||s===no||s===io||s===so||s===ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Xr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$r)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qr)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eo)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===to)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===no)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===io)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===so)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ro)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Is)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===Is)return o===Xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ic||s===oo||s===ao||s===lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(s===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===di?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class ap extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return r!==null&&(r.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cp extends Lt{constructor(e,t,n,i,s,o,r,a,l,h){if(h=h!==void 0?h:Nn,h!==Nn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nn&&(n=Dn),n===void 0&&h===gi&&(n=di),super(null,i,s,o,r,a,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:vt,this.minFilter=a!==void 0?a:vt,this.flipY=!1,this.generateMipmaps=!1}}class hp extends kn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",a=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],x=[],S=new Set,M=new Map,A=new Pt;A.layers.enable(1),A.viewport=new je;const L=new Pt;L.layers.enable(2),L.viewport=new je;const z=[A,L],w=new ap;w.layers.enable(1),w.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=v[X];return $===void 0&&($=new ir,v[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=v[X];return $===void 0&&($=new ir,v[X]=$),$.getGripSpace()},this.getHand=function(X){let $=v[X];return $===void 0&&($=new ir,v[X]=$),$.getHandSpace()};function j(X){const $=x.indexOf(X.inputSource);if($===-1)return;const ae=v[$];ae!==void 0&&ae.dispatchEvent({type:X.type,data:X.inputSource})}function P(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",D);for(let X=0;X<v.length;X++){const $=x[X];$!==null&&(x[X]=null,v[X].disconnect($))}E=null,H=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",P),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),f=new On(p.framebufferWidth,p.framebufferHeight,{format:Ht,type:zn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let $=null,ae=null,ne=null;_.depth&&(ne=_.stencil?35056:33190,$=_.stencil?gi:Nn,ae=_.stencil?di:Dn);const B={colorFormat:32856,depthFormat:ne,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(B),i.updateRenderState({layers:[u]}),f=new On(u.textureWidth,u.textureHeight,{format:Ht,type:zn,depthTexture:new cp(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const me=e.properties.get(f);me.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=await i.requestReferenceSpace(r),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(X){for(let $=0;$<X.removed.length;$++){const ae=X.removed[$],ne=x.indexOf(ae);ne>=0&&(x[ne]=null,v[ne].disconnect(ae))}for(let $=0;$<X.added.length;$++){const ae=X.added[$];let ne=x.indexOf(ae);if(ne===-1){for(let me=0;me<v.length;me++)if(me>=x.length){x.push(ae),ne=me;break}else if(x[me]===null){x[me]=ae,ne=me;break}if(ne===-1)break}const B=v[ne];B&&B.connect(ae)}}const U=new V,O=new V;function J(X,$,ae){U.setFromMatrixPosition($.matrixWorld),O.setFromMatrixPosition(ae.matrixWorld);const ne=U.distanceTo(O),B=$.projectionMatrix.elements,me=ae.projectionMatrix.elements,Se=B[14]/(B[10]-1),le=B[14]/(B[10]+1),be=(B[9]+1)/B[5],Be=(B[9]-1)/B[5],ye=(B[8]-1)/B[0],Ce=(me[8]+1)/me[0],Ze=Se*ye,Ye=Se*Ce,et=ne/(-ye+Ce),Ke=et*-ye;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ke),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const Oe=Se+et,He=le+et,ut=Ze-Ke,C=Ye+(ne-Ke),b=be*le/He*Oe,Z=Be*le/He*Oe;X.projectionMatrix.makePerspective(ut,C,b,Z,Oe,He),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function I(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;w.near=L.near=A.near=X.near,w.far=L.far=A.far=X.far,(E!==w.near||H!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),E=w.near,H=w.far);const $=X.parent,ae=w.cameras;I(w,$);for(let ne=0;ne<ae.length;ne++)I(ae[ne],$);ae.length===2?J(w,A,L):w.projectionMatrix.copy(A.projectionMatrix),G(X,w,$)};function G(X,$,ae){ae===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0);const ne=X.children;for(let B=0,me=ne.length;B<me;B++)ne[B].updateMatrixWorld(!0);X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&p===null))return a},this.setFoveation=function(X){a=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.getPlanes=function(){return S};let W=null;function ie(X,$){if(h=$.getViewerPose(l||o),g=$,h!==null){const ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ne=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let B=0;B<ae.length;B++){const me=ae[B];let Se=null;if(p!==null)Se=p.getViewport(me);else{const be=d.getViewSubImage(u,me);Se=be.viewport,B===0&&(e.setRenderTargetTextures(f,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(f))}let le=z[B];le===void 0&&(le=new Pt,le.layers.enable(B),le.viewport=new je,z[B]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Se.x,Se.y,Se.width,Se.height),B===0&&(w.matrix.copy(le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ne===!0&&w.cameras.push(le)}}for(let ae=0;ae<v.length;ae++){const ne=x[ae],B=v[ae];ne!==null&&B!==void 0&&B.update(ne,$,l||o)}if(W&&W(X,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ae=null;for(const ne of S)$.detectedPlanes.has(ne)||(ae===null&&(ae=[]),ae.push(ne));if(ae!==null)for(const ne of ae)S.delete(ne),M.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of $.detectedPlanes)if(!S.has(ne))S.add(ne),M.set(ne,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const B=M.get(ne);ne.lastChangedTime>B&&(M.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const R=new Wa;R.setAnimationLoop(ie),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}}function up(c,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Va(c)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?a(m,f,v,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===St&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===St&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=c.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===St&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dp(c,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?c.getParameter(35375):0;function a(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function l(v,x){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(v,M);const A=e.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function h(v){const x=d();v.__bindingPointIndex=x;const S=c.createBuffer(),M=v.__size,A=v.usage;return c.bindBuffer(35345,S),c.bufferData(35345,M,A),c.bindBuffer(35345,null),c.bindBufferBase(35345,x,S),S}function d(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],S=v.uniforms,M=v.__cache;c.bindBuffer(35345,x);for(let A=0,L=S.length;A<L;A++){const z=S[A];if(p(z,A,M)===!0){const w=z.__offset,E=Array.isArray(z.value)?z.value:[z.value];let H=0;for(let j=0;j<E.length;j++){const P=E[j],D=_(P);typeof P=="number"?(z.__data[0]=P,c.bufferSubData(35345,w+H,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=P.elements[0],z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=P.elements[0],z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=P.elements[0]):(P.toArray(z.__data,H),H+=D.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,w,z.__data)}}c.bindBuffer(35345,null)}function p(v,x,S){const M=v.value;if(S[x]===void 0){if(typeof M=="number")S[x]=M;else{const A=Array.isArray(M)?M:[M],L=[];for(let z=0;z<A.length;z++)L.push(A[z].clone());S[x]=L}return!0}else if(typeof M=="number"){if(S[x]!==M)return S[x]=M,!0}else{const A=Array.isArray(S[x])?S[x]:[S[x]],L=Array.isArray(M)?M:[M];for(let z=0;z<A.length;z++){const w=A[z];if(w.equals(L[z])===!1)return w.copy(L[z]),!0}}return!1}function g(v){const x=v.uniforms;let S=0;const M=16;let A=0;for(let L=0,z=x.length;L<z;L++){const w=x[L],E={boundary:0,storage:0},H=Array.isArray(w.value)?w.value:[w.value];for(let j=0,P=H.length;j<P;j++){const D=H[j],U=_(D);E.boundary+=U.boundary,E.storage+=U.storage}if(w.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,L>0){A=S%M;const j=M-A;A!==0&&j-E.boundary<0&&(S+=M-A,w.__offset=S)}S+=E.storage}return A=S%M,A>0&&(S+=M-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),c.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const v in i)c.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:a,update:l,dispose:f}}function fp(){const c=_s("canvas");return c.style.display="block",c}class $a{constructor(e={}){const{canvas:t=fp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.useLegacyLights=!0,this.toneMapping=un,this.toneMappingExposure=1;const f=this;let v=!1,x=0,S=0,M=null,A=-1,L=null;const z=new je,w=new je;let E=null,H=t.width,j=t.height,P=1,D=null,U=null;const O=new je(0,0,H,j),J=new je(0,0,H,j);let I=!1;const G=new br;let W=!1,ie=!1,R=null;const X=new rt,$=new V,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return M===null?P:1}let B=n;function me(T,q){for(let K=0;K<T.length;K++){const k=T[K],ee=t.getContext(k,q);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mr}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",De,!1),B===null){const q=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&q.shift(),B=me(q,T),B===null)throw me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,le,be,Be,ye,Ce,Ze,Ye,et,Ke,Oe,He,ut,C,b,Z,se,oe,he,N,te,Y,ue,ge;function xe(){Se=new wd(B),le=new gd(B,Se,e),Se.init(le),Y=new op(B,Se,le),be=new sp(B,Se,le),Be=new Td,ye=new Wf,Ce=new rp(B,Se,be,ye,le,Y,Be),Ze=new vd(f),Ye=new Sd(f),et=new Fc(B,le),ue=new pd(B,Se,et,le),Ke=new bd(B,et,Be,ue),Oe=new Ld(B,Ke,et,Be),he=new Pd(B,le,Ce),Z=new _d(ye),He=new Hf(f,Ze,Ye,Se,le,ue,Z),ut=new up(f,ye),C=new Xf,b=new Jf(Se,le),oe=new fd(f,Ze,Ye,be,Oe,u,a),se=new ip(f,Oe,le),ge=new dp(B,Be,le,be),N=new md(B,Se,Be,le),te=new Ed(B,Se,Be,le),Be.programs=He.programs,f.capabilities=le,f.extensions=Se,f.properties=ye,f.renderLists=C,f.shadowMap=se,f.state=be,f.info=Be}xe();const de=new hp(f,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,q,K=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=q,t.width=Math.floor(T*P),t.height=Math.floor(q*P),K===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(H*P,j*P).floor()},this.setDrawingBufferSize=function(T,q,K){H=T,j=q,P=K,t.width=Math.floor(T*K),t.height=Math.floor(q*K),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,q,K,k){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,q,K,k),be.viewport(z.copy(O).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,q,K,k){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,q,K,k),be.scissor(w.copy(J).multiplyScalar(P).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){be.setScissorTest(I=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T=!0,q=!0,K=!0){let k=0;T&&(k|=16384),q&&(k|=256),K&&(k|=1024),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",De,!1),C.dispose(),b.dispose(),ye.dispose(),Ze.dispose(),Ye.dispose(),Oe.dispose(),ue.dispose(),ge.dispose(),He.dispose(),de.dispose(),de.removeEventListener("sessionstart",Me),de.removeEventListener("sessionend",We),R&&(R.dispose(),R=null),$e.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=Be.autoReset,q=se.enabled,K=se.autoUpdate,k=se.needsUpdate,ee=se.type;xe(),Be.autoReset=T,se.enabled=q,se.autoUpdate=K,se.needsUpdate=k,se.type=ee}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){const q=T.target;q.removeEventListener("dispose",Je),F(q)}function F(T){Q(T),ye.remove(T)}function Q(T){const q=ye.get(T).programs;q!==void 0&&(q.forEach(function(K){He.releaseProgram(K)}),T.isShaderMaterial&&He.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,K,k,ee,we){q===null&&(q=ae);const Ee=ee.isMesh&&ee.matrixWorld.determinant()<0,Ae=rl(T,q,K,k,ee);be.setMaterial(k,Ee);let Pe=K.index,Ie=1;k.wireframe===!0&&(Pe=Ke.getWireframeAttribute(K),Ie=2);const Ne=K.drawRange,Ue=K.attributes.position;let Ve=Ne.start*Ie,mt=(Ne.start+Ne.count)*Ie;we!==null&&(Ve=Math.max(Ve,we.start*Ie),mt=Math.min(mt,(we.start+we.count)*Ie)),Pe!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Pe.count)):Ue!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,Ue.count));const zt=mt-Ve;if(zt<0||zt===1/0)return;ue.setup(ee,k,Ae,K,Pe);let Mn,tt=N;if(Pe!==null&&(Mn=et.get(Pe),tt=te,tt.setIndex(Mn)),ee.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*ne()),tt.setMode(1)):tt.setMode(4);else if(ee.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),be.setLineWidth(Fe*ne()),ee.isLineSegments?tt.setMode(1):ee.isLineLoop?tt.setMode(2):tt.setMode(3)}else ee.isPoints?tt.setMode(0):ee.isSprite&&tt.setMode(4);if(ee.isInstancedMesh)tt.renderInstances(Ve,zt,ee.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bs=Math.min(K.instanceCount,Fe);tt.renderInstances(Ve,zt,bs)}else tt.render(Ve,zt)},this.compile=function(T,q){function K(k,ee,we){k.transparent===!0&&k.side===Jt&&k.forceSinglePass===!1?(k.side=St,k.needsUpdate=!0,Hi(k,ee,we),k.side=xn,k.needsUpdate=!0,Hi(k,ee,we),k.side=Jt):Hi(k,ee,we)}g=b.get(T),g.init(),m.push(g),T.traverseVisible(function(k){k.isLight&&k.layers.test(q.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights(f.useLegacyLights),T.traverse(function(k){const ee=k.material;if(ee)if(Array.isArray(ee))for(let we=0;we<ee.length;we++){const Ee=ee[we];K(Ee,T,k)}else K(ee,T,k)}),m.pop(),g=null};let re=null;function fe(T){re&&re(T)}function Me(){$e.stop()}function We(){$e.start()}const $e=new Wa;$e.setAnimationLoop(fe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){re=T,de.setAnimationLoop(T),T===null?$e.stop():$e.start()},de.addEventListener("sessionstart",Me),de.addEventListener("sessionend",We),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(q),q=de.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,q,M),g=b.get(T,m.length),g.init(),m.push(g),X.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G.setFromProjectionMatrix(X),ie=this.localClippingEnabled,W=Z.init(this.clippingPlanes,ie),p=C.get(T,_.length),p.init(),_.push(p),dt(T,q,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(D,U),W===!0&&Z.beginShadows();const K=g.state.shadowsArray;if(se.render(K,T,q),W===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(p,T),g.setupLights(f.useLegacyLights),q.isArrayCamera){const k=q.cameras;for(let ee=0,we=k.length;ee<we;ee++){const Ee=k[ee];dn(p,T,Ee,Ee.viewport)}}else dn(p,T,q);M!==null&&(Ce.updateMultisampleRenderTarget(M),Ce.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(f,T,q),ue.resetDefaultState(),A=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function dt(T,q,K,k){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){k&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Ee=Oe.update(T),Ae=T.material;Ae.visible&&p.push(T,Ee,Ae,K,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||G.intersectsObject(T))){k&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Ee=Oe.update(T),Ae=T.material;if(Array.isArray(Ae)){const Pe=Ee.groups;for(let Ie=0,Ne=Pe.length;Ie<Ne;Ie++){const Ue=Pe[Ie],Ve=Ae[Ue.materialIndex];Ve&&Ve.visible&&p.push(T,Ee,Ve,K,$.z,Ue)}}else Ae.visible&&p.push(T,Ee,Ae,K,$.z,null)}}const we=T.children;for(let Ee=0,Ae=we.length;Ee<Ae;Ee++)dt(we[Ee],q,K,k)}function dn(T,q,K,k){const ee=T.opaque,we=T.transmissive,Ee=T.transparent;g.setupLightsView(K),W===!0&&Z.setGlobalState(f.clippingPlanes,K),we.length>0&&Qe(ee,we,q,K),k&&be.viewport(z.copy(k)),ee.length>0&&Dt(ee,q,K),we.length>0&&Dt(we,q,K),Ee.length>0&&Dt(Ee,q,K),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Qe(T,q,K,k){if(R===null){const Ae=le.isWebGL2;R=new On(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?zi:zn,minFilter:Ui,samples:Ae&&r===!0?4:0})}const ee=f.getRenderTarget();f.setRenderTarget(R),f.clear();const we=f.toneMapping;f.toneMapping=un,Dt(T,K,k),Ce.updateMultisampleRenderTarget(R),Ce.updateRenderTargetMipmap(R);let Ee=!1;for(let Ae=0,Pe=q.length;Ae<Pe;Ae++){const Ie=q[Ae],Ne=Ie.object,Ue=Ie.geometry,Ve=Ie.material,mt=Ie.group;if(Ve.side===Jt&&Ne.layers.test(k.layers)){const zt=Ve.side;Ve.side=St,Ve.needsUpdate=!0,qt(Ne,K,k,Ue,Ve,mt),Ve.side=zt,Ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ce.updateMultisampleRenderTarget(R),Ce.updateRenderTargetMipmap(R)),f.setRenderTarget(ee),f.toneMapping=we}function Dt(T,q,K){const k=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,we=T.length;ee<we;ee++){const Ee=T[ee],Ae=Ee.object,Pe=Ee.geometry,Ie=k===null?Ee.material:k,Ne=Ee.group;Ae.layers.test(K.layers)&&qt(Ae,q,K,Pe,Ie,Ne)}}function qt(T,q,K,k,ee,we){T.onBeforeRender(f,q,K,k,ee,we),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(f,q,K,k,T,we),ee.transparent===!0&&ee.side===Jt&&ee.forceSinglePass===!1?(ee.side=St,ee.needsUpdate=!0,f.renderBufferDirect(K,q,k,ee,T,we),ee.side=xn,ee.needsUpdate=!0,f.renderBufferDirect(K,q,k,ee,T,we),ee.side=Jt):f.renderBufferDirect(K,q,k,ee,T,we),T.onAfterRender(f,q,K,k,ee,we)}function Hi(T,q,K){q.isScene!==!0&&(q=ae);const k=ye.get(T),ee=g.state.lights,we=g.state.shadowsArray,Ee=ee.state.version,Ae=He.getParameters(T,ee.state,we,q,K),Pe=He.getProgramCacheKey(Ae);let Ie=k.programs;k.environment=T.isMeshStandardMaterial?q.environment:null,k.fog=q.fog,k.envMap=(T.isMeshStandardMaterial?Ye:Ze).get(T.envMap||k.environment),Ie===void 0&&(T.addEventListener("dispose",Je),Ie=new Map,k.programs=Ie);let Ne=Ie.get(Pe);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===Ee)return Pr(T,Ae),Ne}else Ae.uniforms=He.getUniforms(T),T.onBuild(K,Ae,f),T.onBeforeCompile(Ae,f),Ne=He.acquireProgram(Ae,Pe),Ie.set(Pe,Ne),k.uniforms=Ae.uniforms;const Ue=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Z.uniform),Pr(T,Ae),k.needsLights=al(T),k.lightsStateVersion=Ee,k.needsLights&&(Ue.ambientLightColor.value=ee.state.ambient,Ue.lightProbe.value=ee.state.probe,Ue.directionalLights.value=ee.state.directional,Ue.directionalLightShadows.value=ee.state.directionalShadow,Ue.spotLights.value=ee.state.spot,Ue.spotLightShadows.value=ee.state.spotShadow,Ue.rectAreaLights.value=ee.state.rectArea,Ue.ltc_1.value=ee.state.rectAreaLTC1,Ue.ltc_2.value=ee.state.rectAreaLTC2,Ue.pointLights.value=ee.state.point,Ue.pointLightShadows.value=ee.state.pointShadow,Ue.hemisphereLights.value=ee.state.hemi,Ue.directionalShadowMap.value=ee.state.directionalShadowMap,Ue.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ue.spotShadowMap.value=ee.state.spotShadowMap,Ue.spotLightMatrix.value=ee.state.spotLightMatrix,Ue.spotLightMap.value=ee.state.spotLightMap,Ue.pointShadowMap.value=ee.state.pointShadowMap,Ue.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ve=Ne.getUniforms(),mt=gs.seqWithValue(Ve.seq,Ue);return k.currentProgram=Ne,k.uniformsList=mt,Ne}function Pr(T,q){const K=ye.get(T);K.outputEncoding=q.outputEncoding,K.instancing=q.instancing,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function rl(T,q,K,k,ee){q.isScene!==!0&&(q=ae),Ce.resetTextureUnits();const we=q.fog,Ee=k.isMeshStandardMaterial?q.environment:null,Ae=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Fn,Pe=(k.isMeshStandardMaterial?Ye:Ze).get(k.envMap||Ee),Ie=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!K.attributes.tangent,Ue=!!K.morphAttributes.position,Ve=!!K.morphAttributes.normal,mt=!!K.morphAttributes.color,zt=k.toneMapped?f.toneMapping:un,Mn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=Mn!==void 0?Mn.length:0,Fe=ye.get(k),bs=g.state.lights;if(W===!0&&(ie===!0||T!==L)){const bt=T===L&&k.id===A;Z.setState(k,T,bt)}let ct=!1;k.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==bs.state.version||Fe.outputEncoding!==Ae||ee.isInstancedMesh&&Fe.instancing===!1||!ee.isInstancedMesh&&Fe.instancing===!0||ee.isSkinnedMesh&&Fe.skinning===!1||!ee.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Pe||k.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Z.numPlanes||Fe.numIntersection!==Z.numIntersection)||Fe.vertexAlphas!==Ie||Fe.vertexTangents!==Ne||Fe.morphTargets!==Ue||Fe.morphNormals!==Ve||Fe.morphColors!==mt||Fe.toneMapping!==zt||le.isWebGL2===!0&&Fe.morphTargetsCount!==tt)&&(ct=!0):(ct=!0,Fe.__version=k.version);let Sn=Fe.currentProgram;ct===!0&&(Sn=Hi(k,q,ee));let Lr=!1,yi=!1,Es=!1;const gt=Sn.getUniforms(),wn=Fe.uniforms;if(be.useProgram(Sn.program)&&(Lr=!0,yi=!0,Es=!0),k.id!==A&&(A=k.id,yi=!0),Lr||L!==T){if(gt.setValue(B,"projectionMatrix",T.projectionMatrix),le.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),L!==T&&(L=T,yi=!0,Es=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const bt=gt.map.cameraPosition;bt!==void 0&&bt.setValue(B,$.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&gt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ee.isSkinnedMesh)&&gt.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){gt.setOptional(B,ee,"bindMatrix"),gt.setOptional(B,ee,"bindMatrixInverse");const bt=ee.skeleton;bt&&(le.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),gt.setValue(B,"boneTexture",bt.boneTexture,Ce),gt.setValue(B,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ts=K.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&le.isWebGL2===!0)&&he.update(ee,K,Sn),(yi||Fe.receiveShadow!==ee.receiveShadow)&&(Fe.receiveShadow=ee.receiveShadow,gt.setValue(B,"receiveShadow",ee.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wn.envMap.value=Pe,wn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),yi&&(gt.setValue(B,"toneMappingExposure",f.toneMappingExposure),Fe.needsLights&&ol(wn,Es),we&&k.fog===!0&&ut.refreshFogUniforms(wn,we),ut.refreshMaterialUniforms(wn,k,P,j,R),gs.upload(B,Fe.uniformsList,wn,Ce)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(gs.upload(B,Fe.uniformsList,wn,Ce),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&gt.setValue(B,"center",ee.center),gt.setValue(B,"modelViewMatrix",ee.modelViewMatrix),gt.setValue(B,"normalMatrix",ee.normalMatrix),gt.setValue(B,"modelMatrix",ee.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const bt=k.uniformsGroups;for(let As=0,ll=bt.length;As<ll;As++)if(le.isWebGL2){const Rr=bt[As];ge.update(Rr,Sn),ge.bind(Rr,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function ol(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function al(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,q,K){ye.get(T.texture).__webglTexture=q,ye.get(T.depthTexture).__webglTexture=K;const k=ye.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=K===void 0,k.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){const K=ye.get(T);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,K=0){M=T,x=q,S=K;let k=!0,ee=null,we=!1,Ee=!1;if(T){const Pe=ye.get(T);Pe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),k=!1):Pe.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):Pe.__hasExternalTextures&&Ce.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ne=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=Ne[q],we=!0):le.isWebGL2&&T.samples>0&&Ce.useMultisampledRTT(T)===!1?ee=ye.get(T).__webglMultisampledFramebuffer:ee=Ne,z.copy(T.viewport),w.copy(T.scissor),E=T.scissorTest}else z.copy(O).multiplyScalar(P).floor(),w.copy(J).multiplyScalar(P).floor(),E=I;if(be.bindFramebuffer(36160,ee)&&le.drawBuffers&&k&&be.drawBuffers(T,ee),be.viewport(z),be.scissor(w),be.setScissorTest(E),we){const Pe=ye.get(T.texture);B.framebufferTexture2D(36160,36064,34069+q,Pe.__webglTexture,K)}else if(Ee){const Pe=ye.get(T.texture),Ie=q||0;B.framebufferTextureLayer(36160,36064,Pe.__webglTexture,K||0,Ie)}A=-1},this.readRenderTargetPixels=function(T,q,K,k,ee,we,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){be.bindFramebuffer(36160,Ae);try{const Pe=T.texture,Ie=Pe.format,Ne=Pe.type;if(Ie!==Ht&&Y.convert(Ie)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===zi&&(Se.has("EXT_color_buffer_half_float")||le.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ne!==zn&&Y.convert(Ne)!==B.getParameter(35738)&&!(Ne===In&&(le.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-k&&K>=0&&K<=T.height-ee&&B.readPixels(q,K,k,ee,Y.convert(Ie),Y.convert(Ne),we)}finally{const Pe=M!==null?ye.get(M).__webglFramebuffer:null;be.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(T,q,K=0){const k=Math.pow(2,-K),ee=Math.floor(q.image.width*k),we=Math.floor(q.image.height*k);Ce.setTexture2D(q,0),B.copyTexSubImage2D(3553,K,0,0,T.x,T.y,ee,we),be.unbindTexture()},this.copyTextureToTexture=function(T,q,K,k=0){const ee=q.image.width,we=q.image.height,Ee=Y.convert(K.format),Ae=Y.convert(K.type);Ce.setTexture2D(K,0),B.pixelStorei(37440,K.flipY),B.pixelStorei(37441,K.premultiplyAlpha),B.pixelStorei(3317,K.unpackAlignment),q.isDataTexture?B.texSubImage2D(3553,k,T.x,T.y,ee,we,Ee,Ae,q.image.data):q.isCompressedTexture?B.compressedTexSubImage2D(3553,k,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,Ee,q.mipmaps[0].data):B.texSubImage2D(3553,k,T.x,T.y,Ee,Ae,q.image),k===0&&K.generateMipmaps&&B.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(T,q,K,k,ee=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Pe=Y.convert(k.format),Ie=Y.convert(k.type);let Ne;if(k.isData3DTexture)Ce.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)Ce.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment);const Ue=B.getParameter(3314),Ve=B.getParameter(32878),mt=B.getParameter(3316),zt=B.getParameter(3315),Mn=B.getParameter(32877),tt=K.isCompressedTexture?K.mipmaps[0]:K.image;B.pixelStorei(3314,tt.width),B.pixelStorei(32878,tt.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(Ne,ee,q.x,q.y,q.z,we,Ee,Ae,Pe,Ie,tt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,ee,q.x,q.y,q.z,we,Ee,Ae,Pe,tt.data)):B.texSubImage3D(Ne,ee,q.x,q.y,q.z,we,Ee,Ae,Pe,Ie,tt),B.pixelStorei(3314,Ue),B.pixelStorei(32878,Ve),B.pixelStorei(3316,mt),B.pixelStorei(3315,zt),B.pixelStorei(32877,Mn),ee===0&&k.generateMipmaps&&B.generateMipmap(Ne),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){x=0,S=0,M=null,be.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class pp extends $a{}pp.prototype.isWebGL1Renderer=!0;class mp extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class gp extends vi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $o extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Za extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sr=new rt,Zo=new V,Ko=new V;class _p{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new rt,Ei=new V,rr=new V;class vp extends _p{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),rr.copy(n.position),rr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rr),n.updateMatrixWorld(),i.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Jo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo)}}class xp extends Za{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yp extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mr);class Wt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=e.elements,s=t.elements,o=n[0],r=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],_=i[0],m=i[1],f=i[2],v=i[3],x=i[4],S=i[5],M=i[6],A=i[7],L=i[8];return s[0]=o*_+r*v+a*M,s[1]=o*m+r*x+a*A,s[2]=o*f+r*S+a*L,s[3]=l*_+h*v+d*M,s[4]=l*m+h*x+d*A,s[5]=l*f+h*S+d*L,s[6]=u*_+p*v+g*M,s[7]=u*m+p*x+g*A,s[8]=u*f+p*S+g*L,t}scale(e,t){t===void 0&&(t=new Wt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const l=a;let h;const d=4;let u;do{if(o=l-a,s[o+i*o]===0){for(r=o+1;r<l;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<l;r++){const p=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*p;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Wt);const t=3,n=6,i=Mp;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const a=r;let l;const h=n;let d;do{if(s=a-r,i[s+n*s]===0){for(o=s+1;o<a;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<a;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,r=n+n,a=i+i,l=t*o,h=t*r,d=t*a,u=n*r,p=n*a,g=i*a,_=s*o,m=s*r,f=s*a,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+m,v[3*1+0]=h+f,v[3*1+1]=1-(l+g),v[3*1+2]=p-_,v[3*2+0]=d-m,v[3*2+1]=p+_,v[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new Wt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Mp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z;return t.x=r*s-a*i,t.y=a*n-o*s,t.z=o*i-r*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Wt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Sp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=wp;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ea),ea.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Sp=new y,wp=new y,ea=new y;class Rt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(e[0]),r&&r.vmult(s,s),o.copy(s);for(let a=1;a<e.length;a++){let l=e[a];r&&(r.vmult(l,ta),l=ta),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Rt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&r&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,r,a){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),r.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=na,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=na,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,r=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(r,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,a),Math.max(l,h)),Math.max(d,u));return!(g<0||p>g)}}const ta=new y,na=[new y,new y,new y,new y,new y,new y,new y,new y];class ia{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class st{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=bp,i=Ep;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new st);const n=this.x,i=this.y,s=this.z,o=this.w,r=e.x,a=e.y,l=e.z,h=e.w;return t.x=n*h+o*r+i*l-s*a,t.y=i*h+o*a+s*r-n*l,t.z=s*h+o*l+n*a-i*r,t.w=o*h-n*r-i*a-s*l,t}inverse(e){e===void 0&&(e=new st);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new st),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,a=this.z,l=this.w,h=l*n+r*s-a*i,d=l*i+a*n-o*s,u=l*s+o*i-r*n,p=-o*n-r*i-a*s;return t.x=h*l+p*-o+d*-a-u*-r,t.y=d*l+p*-r+u*-o-h*-a,t.z=u*l+p*-a+h*-r-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,r=this.y,a=this.z,l=this.w;switch(t){case"YZX":const h=o*r+a*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,p=a*a;n=Math.atan2(2*r*l-2*o*a,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*r*a,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),r=Math.cos(n/2),a=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="YXZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="ZXY"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="ZYX"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="YZX"?(this.x=a*o*r+s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r-a*l*h):i==="XZY"&&(this.x=a*o*r-s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r+a*l*h),this}clone(){return new st(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new st);const i=this.x,s=this.y,o=this.z,r=this.w;let a=e.x,l=e.y,h=e.z,d=e.w,u,p,g,_,m;return p=i*a+s*l+o*h+r*d,p<0&&(p=-p,a=-a,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),_=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(_=1-t,m=t),n.x=_*i+m*a,n.y=_*s+m*l,n.z=_*o+m*h,n.w=_*r+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new st);const s=e.x*n.x,o=e.y*n.y,r=e.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+o*h-r*l),i.y+=u*(o*d+r*a-s*h),i.z+=u*(r*d+s*l-o*a),i.w+=u*(-s*a-o*l-r*h),i}}const bp=new y,Ep=new y,Tp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class _e{constructor(e){e===void 0&&(e={}),this.id=_e.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}_e.idCounter=0;_e.types=Tp;class Ge{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new st,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ge.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ge.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(sa),sa.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const sa=new st;class Ii extends _e{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:_e.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const o=e[s],r=o.length;for(let a=0;a!==r;a++){const l=(a+1)%r;t[o[a]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ii.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new y,o=new y;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,r,a,l){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new y;m.copy(_),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,p,r,a,l)}findSeparatingAxis(e,t,n,i,s,o,r,a){const l=new y,h=new y,d=new y,u=new y,p=new y,g=new y;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],l);const v=m.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(l))}else{const f=r?r.length:m.faces.length;for(let v=0;v<f;v++){const x=r?r[v]:v;l.copy(m.faceNormals[x]),n.vmult(l,l);const S=m.testSepAxis(l,e,t,n,i,s);if(S===!1)return!1;S<_&&(_=S,o.copy(l))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],h);const v=m.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const f=a?a.length:e.faces.length;for(let v=0;v<f;v++){const x=a?a[v]:v;h.copy(e.faceNormals[x]),s.vmult(h,h);const S=m.testSepAxis(h,e,t,n,i,s);if(S===!1)return!1;S<_&&(_=S,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],p),u.cross(p,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const r=this;Ii.project(r,e,n,i,or),Ii.project(t,e,s,o,ar);const a=or[0],l=or[1],h=ar[0],d=ar[1];if(a<d||h<l)return!1;const u=a-d,p=h-l;return u<p?u:p}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*r*2*r),t.y=1/12*e*(2*s*2*s+2*r*2*r),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,r){const a=new y,l=new y,h=new y,d=new y,u=new y,p=new y,g=new y,_=new y,m=this,f=[],v=i,x=f;let S=-1,M=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){a.copy(m.faceNormals[E]),n.vmult(a,a);const H=a.dot(e);H<M&&(M=H,S=E)}if(S<0)return;const A=m.faces[S];A.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let H=0;H<m.faces[E].length;H++)A.indexOf(m.faces[E][H])!==-1&&E!==S&&A.connectedFaces.indexOf(E)===-1&&A.connectedFaces.push(E);const L=A.length;for(let E=0;E<L;E++){const H=m.vertices[A[E]],j=m.vertices[A[(E+1)%L]];H.vsub(j,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[S]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(H),n.vmult(p,p),t.vadd(p,p);const P=A.connectedFaces[E];g.copy(this.faceNormals[P]);const D=this.getPlaneConstantOfFace(P);_.copy(g),n.vmult(_,_);const U=D-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,U);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[S]);const z=this.getPlaneConstantOfFace(S);_.copy(g),n.vmult(_,_);const w=z-_.dot(t);for(let E=0;E<v.length;E++){let H=_.dot(v[E])+w;if(H<=s&&(console.log(`clamped: depth=${H} to minDist=${s}`),H=s),H<=o){const j=v[E];if(H<=1e-6){const P={point:j,normal:_,depth:H};r.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const r=e.length;if(r<2)return t;let a=e[e.length-1],l=e[0];s=n.dot(a)+i;for(let h=0;h<r;h++){if(l=e[h],o=n.dot(l)+i,s<0)if(o<0){const d=new y;d.copy(l),t.push(d)}else{const d=new y;a.lerp(l,s/(s-o),d),t.push(d)}else if(o<0){const d=new y;a.lerp(l,s/(s-o),d),t.push(d),t.push(l)}a=l,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,r,a,l,h,d,u=new y;for(let p=0;p<s.length;p++){u.copy(s[p]),t.vmult(u,u),e.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new y;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=t[n[r][0]],h=new y;e.vsub(l,h);const d=a.dot(h),u=new y;o.vsub(l,u);const p=a.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,r=Ap;let a=0,l=0;const h=Cp,d=e.vertices;h.setZero(),Ge.vectorToLocalFrame(n,i,t,r),Ge.pointToLocalFrame(n,i,h,h);const u=h.dot(r);l=a=d[0].dot(r);for(let p=1;p<o;p++){const g=d[p].dot(r);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const p=l;l=a,a=p}s[0]=a,s[1]=l}}const or=[],ar=[];new y;const Ap=new y,Cp=new y;class Bi extends _e{constructor(e){super({type:_e.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Ii({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Bi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)_n.set(s[o][0],s[o][1],s[o][2]),t.vmult(_n,_n),e.vadd(_n,_n),n(_n.x,_n.y,_n.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;jt[0].set(s.x,s.y,s.z),jt[1].set(-s.x,s.y,s.z),jt[2].set(-s.x,-s.y,s.z),jt[3].set(-s.x,-s.y,-s.z),jt[4].set(s.x,-s.y,-s.z),jt[5].set(s.x,s.y,-s.z),jt[6].set(-s.x,s.y,-s.z),jt[7].set(s.x,-s.y,s.z);const o=jt[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const a=jt[r];t.vmult(a,a),e.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const _n=new y,jt=[new y,new y,new y,new y,new y,new y,new y,new y],Tr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ar={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends Ka{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new st,this.initQuaternion=new st,this.previousQuaternion=new st,this.interpolatedQuaternion=new st,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Wt,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Wt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Rt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===pe.AWAKE&&n<i?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&n>i?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new st;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const r=t[s].length(),a=o.boundingSphereRadius;r+a>i&&(i=r+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Pp,o=Lp,r=this.quaternion,a=this.aabb,l=Rp;for(let h=0;h!==i;h++){const d=e[h];r.vmult(t[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Dp,i=Ip;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=Up;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const n=zp,i=Fp;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=t,i=Op;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Bp;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const n=Gp,i=Vp;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=kp;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Bi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=r.x*p*u.x,i.y+=r.y*p*u.y,i.z+=r.z*p*u.z;const g=d.elements,_=this.angularFactor,m=a.x*_.x,f=a.y*_.y,v=a.z*_.z;s.x+=e*(g[0]*m+g[1]*f+g[2]*v),s.y+=e*(g[3]*m+g[4]*f+g[5]*v),s.z+=e*(g[6]*m+g[7]*f+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=Tr.DYNAMIC;pe.STATIC=Tr.STATIC;pe.KINEMATIC=Tr.KINEMATIC;pe.AWAKE=Ar.AWAKE;pe.SLEEPY=Ar.SLEEPY;pe.SLEEPING=Ar.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const Pp=new y,Lp=new st,Rp=new Rt,Dp=new Wt,Ip=new Wt,Np=new Wt,Up=new y,zp=new y,Fp=new y,Op=new y,Bp=new y,Gp=new y,Vp=new y,kp=new y;class Hp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Wp;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=qp,i=Xp,s=jp,o=e.length;for(let r=0;r!==o;r++)i[r]=e[r],s[r]=t[r];e.length=0,t.length=0;for(let r=0;r!==o;r++){const a=i[r].id,l=s[r].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const a=n.keys.pop(),l=n[a];e.push(i[l]),t.push(s[l]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Wp=new y;new y;new st;new y;const qp={keys:[]},Xp=[],jp=[];new y;new y;new y;class Yp extends Hp{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,r;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)o=i[a],r=i[l],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class vs{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,r){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let Ja,Qa,el,tl,nl,il,sl;const Cr={CLOSEST:1,ANY:2,ALL:4};Ja=_e.types.SPHERE;Qa=_e.types.PLANE;el=_e.types.BOX;tl=_e.types.CYLINDER;nl=_e.types.CONVEXPOLYHEDRON;il=_e.types.HEIGHTFIELD;sl=_e.types.TRIMESH;class it{get[Ja](){return this._intersectSphere}get[Qa](){return this._intersectPlane}get[el](){return this._intersectBox}get[tl](){return this._intersectConvex}get[nl](){return this._intersectConvex}get[il](){return this._intersectHeightfield}get[sl](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=it.ANY,this.result=new vs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||it.ANY,this.result=t.result||new vs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ra),lr.length=0,e.broadphase.aabbQuery(e,ra,lr),this.intersectBodies(lr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=$p,s=Zp;for(let o=0,r=e.shapes.length;o<r;o++){const a=e.shapes[o];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(hm(s,this.direction,n)>e.boundingSphereRadius)return;const r=this[e.type];r&&r.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,r=this.to,a=this.direction,l=new y(0,0,1);t.vmult(l,l);const h=new y;o.vsub(n,h);const d=h.dot(l);r.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(r)<d)return;const p=l.dot(a);if(Math.abs(p)<this.precision)return;const g=new y,_=new y,m=new y;o.vsub(n,g);const f=-l.dot(g)/p;a.scale(f,_),o.vadd(_,m),this.reportIntersection(l,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Kp;o.from.copy(this.from),o.to.copy(this.to),Ge.pointToLocalFrame(n,t,o.from,o.from),Ge.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const r=Jp;let a,l,h,d;a=l=0,h=d=e.data.length-1;const u=new Rt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),a=Math.max(a,r[0]),l=Math.max(l,r[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let p=a;p<h;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(p,g,!1),Ge.pointToWorldFrame(n,t,e.pillarOffset,us),this._intersectConvex(e.pillarConvex,t,us,i,s,oa),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),Ge.pointToWorldFrame(n,t,e.pillarOffset,us),this._intersectConvex(e.pillarConvex,t,us,i,s,oa)}}}_intersectSphere(e,t,n,i,s){const o=this.from,r=this.to,a=e.radius,l=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-a**2,u=h**2-4*l*d,p=Qp,g=em;if(!(u<0))if(u===0)o.lerp(r,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(_>=0&&_<=1&&(o.lerp(r,_,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(r,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const r=tm,a=aa,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),f=l?l.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<f;x++){const S=l?l[x]:x,M=h[S],A=u[S],L=t,z=n;a.copy(d[M[0]]),L.vmult(a,a),a.vadd(z,a),a.vsub(g,a),L.vmult(A,r);const w=p.dot(r);if(Math.abs(w)<this.precision)continue;const E=r.dot(a)/w;if(!(E<0)){p.scale(E,Mt),Mt.vadd(g,Mt),Gt.copy(d[M[0]]),L.vmult(Gt,Gt),z.vadd(Gt,Gt);for(let H=1;!v.shouldStop&&H<M.length-1;H++){Yt.copy(d[M[H]]),$t.copy(d[M[H+1]]),L.vmult(Yt,Yt),L.vmult($t,$t),z.vadd(Yt,Yt),z.vadd($t,$t);const j=Mt.distanceTo(g);!(it.pointInTriangle(Mt,Gt,Yt,$t)||it.pointInTriangle(Mt,Yt,Gt,$t))||j>m||this.reportIntersection(r,Mt,s,i,S)}}}}_intersectTrimesh(e,t,n,i,s,o){const r=nm,a=lm,l=cm,h=aa,d=im,u=sm,p=rm,g=am,_=om,m=e.indices;e.vertices;const f=this.from,v=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(t),Ge.vectorToLocalFrame(n,t,x,d),Ge.pointToLocalFrame(n,t,f,u),Ge.pointToLocalFrame(n,t,v,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const S=u.distanceSquared(p);e.tree.rayQuery(this,l,a);for(let M=0,A=a.length;!this.result.shouldStop&&M!==A;M++){const L=a[M];e.getNormal(L,r),e.getVertex(m[L*3],Gt),Gt.vsub(u,h);const z=d.dot(r),w=r.dot(h)/z;if(w<0)continue;d.scale(w,Mt),Mt.vadd(u,Mt),e.getVertex(m[L*3+1],Yt),e.getVertex(m[L*3+2],$t);const E=Mt.distanceSquared(u);!(it.pointInTriangle(Mt,Yt,Gt,$t)||it.pointInTriangle(Mt,Gt,Yt,$t))||E>S||(Ge.vectorToWorldFrame(t,r,_),Ge.pointToWorldFrame(n,t,Mt,g),this.reportIntersection(_,g,s,i,L))}a.length=0}reportIntersection(e,t,n,i,s){const o=this.from,r=this.to,a=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case it.ALL:this.hasHit=!0,l.set(o,r,e,t,n,i,a),l.hasHit=!0,this.callback(l);break;case it.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,a));break;case it.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Rn),n.vsub(t,Ti),e.vsub(t,cr);const s=Rn.dot(Rn),o=Rn.dot(Ti),r=Rn.dot(cr),a=Ti.dot(Ti),l=Ti.dot(cr);let h,d;return(h=a*r-o*l)>=0&&(d=s*l-o*r)>=0&&h+d<s*a-o*o}}it.CLOSEST=Cr.CLOSEST;it.ANY=Cr.ANY;it.ALL=Cr.ALL;const ra=new Rt,lr=[],Ti=new y,cr=new y,$p=new y,Zp=new st,Mt=new y,Gt=new y,Yt=new y,$t=new y;new y;new vs;const oa={faceList:[0]},us=new y,Kp=new it,Jp=[],Qp=new y,em=new y,tm=new y;new y;new y;const aa=new y,nm=new y,im=new y,sm=new y,rm=new y,om=new y,am=new y;new Rt;const lm=[],cm=new Ge,Rn=new y,ds=new y;function hm(c,e,t){t.vsub(c,Rn);const n=Rn.dot(e);return e.scale(n,ds),ds.vadd(c,ds),t.distanceTo(ds)}class um{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class la{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ki{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ki.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new la,this.jacobianElementB=new la,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,r)+t.multiplyVectors(o,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,ca),r.scale(h,ha),n.invInertiaWorldSolve.vmult(o,ua),i.invInertiaWorldSolve.vmult(a,da),e.multiplyVectors(ca,ua)+t.multiplyVectors(ha,da)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+o;return r.vmult(e.rotational,fs),l+=fs.dot(e.rotational),a.vmult(t.rotational,fs),l+=fs.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=dm;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ki.idCounter=0;const ca=new y,ha=new y,ua=new y,da=new y,fs=new y,dm=new y;class fm extends ki{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,a=pm,l=mm,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=gm,_=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,a),r.cross(f,l),f.negate(_.spatial),a.negate(_.rotational),m.spatial.copy(f),m.rotational.copy(l),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const v=f.dot(g),x=this.restitution+1,S=x*u.dot(f)-x*h.dot(f)+p.dot(l)-d.dot(a),M=this.computeGiMf();return-v*t-S*n-e*M}getImpactVelocityAlongNormal(){const e=_m,t=vm,n=xm,i=ym,s=Mm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const pm=new y,mm=new y,gm=new y,_m=new y,vm=new y,xm=new y,ym=new y,Mm=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class fa extends ki{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Sm,o=wm,r=this.t;n.cross(r,s),i.cross(r,o);const a=this.jacobianElementA,l=this.jacobianElementB;r.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(r),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Sm=new y,wm=new y;class Ss{constructor(e,t,n){n=um.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ss.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ss.idCounter=0;class ws{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ws.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ws.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new it;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class bm extends _e{constructor(){super({type:_e.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){on.set(0,0,1),t.vmult(on,on);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),on.x===1?i.x=e.x:on.x===-1&&(n.x=e.x),on.y===1?i.y=e.y:on.y===-1&&(n.y=e.y),on.z===1?i.z=e.z:on.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const on=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Rt;new y;new Rt;new y;new y;new y;new y;new y;new y;new y;new Rt;new y;new Ge;new Rt;class Em{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Tm extends Em{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,a=t.bodies,l=a.length,h=e;let d,u,p,g,_,m;if(r!==0)for(let S=0;S!==l;S++)a[S].updateSolveMassProperties();const f=Cm,v=Pm,x=Am;f.length=r,v.length=r,x.length=r;for(let S=0;S!==r;S++){const M=o[S];x[S]=0,v[S]=M.computeB(h),f[S]=1/M.computeC()}if(r!==0){for(let A=0;A!==l;A++){const L=a[A],z=L.vlambda,w=L.wlambda;z.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==r;A++){const L=o[A];d=v[A],u=f[A],m=x[A],_=L.computeGWlambda(),p=u*(d-_-L.eps*m),m+p<L.minForce?p=L.minForce-m:m+p>L.maxForce&&(p=L.maxForce-m),x[A]+=p,g+=p>0?p:-p,L.addToWlambda(p)}if(g*g<s)break}for(let A=0;A!==l;A++){const L=a[A],z=L.velocity,w=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),z.vadd(L.vlambda,z),L.wlambda.vmul(L.angularFactor,L.wlambda),w.vadd(L.wlambda,w)}let S=o.length;const M=1/h;for(;S--;)o[S].multiplier=x[S]*M}return n}}const Am=[],Cm=[],Pm=[];pe.STATIC;class Lm{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Rm extends Lm{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const qe={sphereSphere:_e.types.SPHERE,spherePlane:_e.types.SPHERE|_e.types.PLANE,boxBox:_e.types.BOX|_e.types.BOX,sphereBox:_e.types.SPHERE|_e.types.BOX,planeBox:_e.types.PLANE|_e.types.BOX,convexConvex:_e.types.CONVEXPOLYHEDRON,sphereConvex:_e.types.SPHERE|_e.types.CONVEXPOLYHEDRON,planeConvex:_e.types.PLANE|_e.types.CONVEXPOLYHEDRON,boxConvex:_e.types.BOX|_e.types.CONVEXPOLYHEDRON,sphereHeightfield:_e.types.SPHERE|_e.types.HEIGHTFIELD,boxHeightfield:_e.types.BOX|_e.types.HEIGHTFIELD,convexHeightfield:_e.types.CONVEXPOLYHEDRON|_e.types.HEIGHTFIELD,sphereParticle:_e.types.PARTICLE|_e.types.SPHERE,planeParticle:_e.types.PLANE|_e.types.PARTICLE,boxParticle:_e.types.BOX|_e.types.PARTICLE,convexParticle:_e.types.PARTICLE|_e.types.CONVEXPOLYHEDRON,cylinderCylinder:_e.types.CYLINDER,sphereCylinder:_e.types.SPHERE|_e.types.CYLINDER,planeCylinder:_e.types.PLANE|_e.types.CYLINDER,boxCylinder:_e.types.BOX|_e.types.CYLINDER,convexCylinder:_e.types.CONVEXPOLYHEDRON|_e.types.CYLINDER,heightfieldCylinder:_e.types.HEIGHTFIELD|_e.types.CYLINDER,particleCylinder:_e.types.PARTICLE|_e.types.CYLINDER,sphereTrimesh:_e.types.SPHERE|_e.types.TRIMESH,planeTrimesh:_e.types.PLANE|_e.types.TRIMESH};class Dm{get[qe.sphereSphere](){return this.sphereSphere}get[qe.spherePlane](){return this.spherePlane}get[qe.boxBox](){return this.boxBox}get[qe.sphereBox](){return this.sphereBox}get[qe.planeBox](){return this.planeBox}get[qe.convexConvex](){return this.convexConvex}get[qe.sphereConvex](){return this.sphereConvex}get[qe.planeConvex](){return this.planeConvex}get[qe.boxConvex](){return this.boxConvex}get[qe.sphereHeightfield](){return this.sphereHeightfield}get[qe.boxHeightfield](){return this.boxHeightfield}get[qe.convexHeightfield](){return this.convexHeightfield}get[qe.sphereParticle](){return this.sphereParticle}get[qe.planeParticle](){return this.planeParticle}get[qe.boxParticle](){return this.boxParticle}get[qe.convexParticle](){return this.convexParticle}get[qe.cylinderCylinder](){return this.convexConvex}get[qe.sphereCylinder](){return this.sphereConvex}get[qe.planeCylinder](){return this.planeConvex}get[qe.boxCylinder](){return this.boxConvex}get[qe.convexCylinder](){return this.convexConvex}get[qe.heightfieldCylinder](){return this.heightfieldCylinder}get[qe.particleCylinder](){return this.particleCylinder}get[qe.sphereTrimesh](){return this.sphereTrimesh}get[qe.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Rm,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=e,r.bj=t):r=new fm(e,t),r.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(r.restitution=l.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,r=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(r.frictionGravity||r.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new fa(n,i,u*p),m=g.length?g.pop():new fa(n,i,u*p);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-u*p,_.maxForce=m.maxForce=u*p,_.ri.copy(e.ri),_.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(_.t,m.t),_.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),_.enabled=m.enabled=e.enabled,t.push(_,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];An.setZero(),ai.setZero(),li.setZero();const s=t.bi;t.bj;for(let r=0;r!==e;r++)t=this.result[this.result.length-1-r],t.bi!==s?(An.vadd(t.ni,An),ai.vadd(t.ri,ai),li.vadd(t.rj,li)):(An.vsub(t.ni,An),ai.vadd(t.rj,ai),li.vadd(t.ri,li));const o=1/e;ai.scale(o,n.ri),li.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),An.normalize(),An.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const a=Um,l=zm,h=Im,d=Nm;for(let u=0,p=e.length;u!==p;u++){const g=e[u],_=t[u];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const f=g.type&pe.KINEMATIC&&_.type&pe.STATIC||g.type&pe.STATIC&&_.type&pe.KINEMATIC||g.type&pe.KINEMATIC&&_.type&pe.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],a),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let S=0;S<_.shapes.length;S++){_.quaternion.mult(_.shapeOrientations[S],l),_.quaternion.vmult(_.shapeOffsets[S],d),d.vadd(_.position,d);const M=_.shapes[S];if(!(x.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+M.boundingSphereRadius)continue;let A=null;x.material&&M.material&&(A=n.getContactMaterial(x.material,M.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;const L=x.type|M.type,z=this[L];if(z){let w=!1;x.type<M.type?w=z.call(this,x,M,h,d,a,l,g,_,x,M,f):w=z.call(this,M,x,d,h,l,a,_,g,x,M,f),w&&f&&(n.shapeOverlapKeeper.set(x.id,M.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,o,r,a,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(r,a,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,o,r,a,l,h,d){const u=this.createContactEquation(r,a,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,ps),u.ni.scale(u.ni.dot(ps),pa),ps.vsub(pa,u.rj),-ps.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(r.position,p),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}sphereBox(e,t,n,i,s,o,r,a,l,h,d){const u=this.v3pool,p=lg;n.vsub(i,ms),t.getSideNormals(p,o);const g=e.radius;let _=!1;const m=hg,f=ug,v=dg;let x=null,S=0,M=0,A=0,L=null;for(let O=0,J=p.length;O!==J&&_===!1;O++){const I=rg;I.copy(p[O]);const G=I.length();I.normalize();const W=ms.dot(I);if(W<G+g&&W>0){const ie=og,R=ag;ie.copy(p[(O+1)%3]),R.copy(p[(O+2)%3]);const X=ie.length(),$=R.length();ie.normalize(),R.normalize();const ae=ms.dot(ie),ne=ms.dot(R);if(ae<X&&ae>-X&&ne<$&&ne>-$){const B=Math.abs(W-G-g);if((L===null||B<L)&&(L=B,M=ae,A=ne,x=G,m.copy(I),f.copy(ie),v.copy(R),S++,d))return!0}}}if(S){_=!0;const O=this.createContactEquation(r,a,e,t,l,h);m.scale(-g,O.ri),O.ni.copy(m),O.ni.negate(O.ni),m.scale(x,m),f.scale(M,f),m.vadd(f,m),v.scale(A,v),m.vadd(v,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(a.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let z=u.get();const w=cg;for(let O=0;O!==2&&!_;O++)for(let J=0;J!==2&&!_;J++)for(let I=0;I!==2&&!_;I++)if(z.set(0,0,0),O?z.vadd(p[0],z):z.vsub(p[0],z),J?z.vadd(p[1],z):z.vsub(p[1],z),I?z.vadd(p[2],z):z.vsub(p[2],z),i.vadd(z,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;_=!0;const G=this.createContactEquation(r,a,e,t,l,h);G.ri.copy(w),G.ri.normalize(),G.ni.copy(G.ri),G.ri.scale(g,G.ri),G.rj.copy(z),G.ri.vadd(n,G.ri),G.ri.vsub(r.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(a.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}u.release(z),z=null;const E=u.get(),H=u.get(),j=u.get(),P=u.get(),D=u.get(),U=p.length;for(let O=0;O!==U&&!_;O++)for(let J=0;J!==U&&!_;J++)if(O%3!==J%3){p[J].cross(p[O],E),E.normalize(),p[O].vadd(p[J],H),j.copy(n),j.vsub(H,j),j.vsub(i,j);const I=j.dot(E);E.scale(I,P);let G=0;for(;G===O%3||G===J%3;)G++;D.copy(n),D.vsub(P,D),D.vsub(H,D),D.vsub(i,D);const W=Math.abs(I),ie=D.length();if(W<p[G].length()&&ie<g){if(d)return!0;_=!0;const R=this.createContactEquation(r,a,e,t,l,h);H.vadd(P,R.rj),R.rj.copy(R.rj),D.negate(R.ni),R.ni.normalize(),R.ri.copy(R.rj),R.ri.vadd(i,R.ri),R.ri.vsub(n,R.ri),R.ri.normalize(),R.ri.scale(g,R.ri),R.ri.vadd(n,R.ri),R.ri.vsub(r.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(a.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}}u.release(E,H,j,P,D)}planeBox(e,t,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,r,a,e,t,d)}convexConvex(e,t,n,i,s,o,r,a,l,h,d,u,p){const g=Ag;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,u,p)){const _=[],m=Cg;e.clipAgainstHull(n,s,t,i,o,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(r,a,e,t,l,h),S=x.ri,M=x.rj;g.negate(x.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,S),M.copy(_[v].point),S.vsub(n,S),M.vsub(i,M),S.vadd(n,S),S.vsub(r.position,S),M.vadd(i,M),M.vsub(a.position,M),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,s,o,r,a,l,h,d){const u=this.v3pool;n.vsub(i,fg);const p=t.faceNormals,g=t.faces,_=t.vertices,m=e.radius;let f=!1;for(let v=0;v!==_.length;v++){const x=_[v],S=_g;o.vmult(x,S),i.vadd(S,S);const M=gg;if(S.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;f=!0;const A=this.createContactEquation(r,a,e,t,l,h);A.ri.copy(M),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),S.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(r.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(a.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&f===!1;v++){const S=p[v],M=g[v],A=vg;o.vmult(S,A);const L=xg;o.vmult(_[M[0]],L),L.vadd(i,L);const z=yg;A.scale(-m,z),n.vadd(z,z);const w=Mg;z.vsub(L,w);const E=w.dot(A),H=Sg;if(n.vsub(L,H),E<0&&H.dot(A)>0){const j=[];for(let P=0,D=M.length;P!==D;P++){const U=u.get();o.vmult(_[M[P]],U),i.vadd(U,U),j.push(U)}if(sg(j,A,n)){if(d)return!0;f=!0;const P=this.createContactEquation(r,a,e,t,l,h);A.scale(-m,P.ri),A.negate(P.ni);const D=u.get();A.scale(-E,D);const U=u.get();A.scale(-m,U),n.vsub(i,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(D,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(a.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(r.position,P.ri),u.release(D),u.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let O=0,J=j.length;O!==J;O++)u.release(j[O]);return}else for(let P=0;P!==M.length;P++){const D=u.get(),U=u.get();o.vmult(_[M[(P+1)%M.length]],D),o.vmult(_[M[(P+2)%M.length]],U),i.vadd(D,D),i.vadd(U,U);const O=pg;U.vsub(D,O);const J=mg;O.unit(J);const I=u.get(),G=u.get();n.vsub(D,G);const W=G.dot(J);J.scale(W,I),I.vadd(D,I);const ie=u.get();if(I.vsub(n,ie),W>0&&W*W<O.lengthSquared()&&ie.lengthSquared()<m*m){if(d)return!0;const R=this.createContactEquation(r,a,e,t,l,h);I.vsub(i,R.rj),I.vsub(n,R.ni),R.ni.normalize(),R.ni.scale(m,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(a.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(r.position,R.ri),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let X=0,$=j.length;X!==$;X++)u.release(j[X]);u.release(D),u.release(U),u.release(I),u.release(ie),u.release(G);return}u.release(D),u.release(U),u.release(I),u.release(ie),u.release(G)}for(let P=0,D=j.length;P!==D;P++)u.release(j[P])}}}planeConvex(e,t,n,i,s,o,r,a,l,h,d){const u=wg,p=bg;p.set(0,0,1),s.vmult(p,p);let g=0;const _=Eg;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),p.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(r,a,e,t,l,h),x=Tg;p.scale(p.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(p),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(r.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(a.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}sphereHeightfield(e,t,n,i,s,o,r,a,l,h,d){const u=t.data,p=e.radius,g=t.elementSize,_=Gg,m=Bg;Ge.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,x=Math.floor((m.y-p)/g)-1,S=Math.ceil((m.y+p)/g)+1;if(v<0||S<0||f>u.length||x>u[0].length)return;f<0&&(f=0),v<0&&(v=0),x<0&&(x=0),S<0&&(S=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),S>=u[0].length&&(S=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const M=[];t.getRectMinMax(f,x,v,S,M);const A=M[0],L=M[1];if(m.z-p>L||m.z+p<A)return;const z=this.result;for(let w=f;w<v;w++)for(let E=x;E<S;E++){const H=z.length;let j=!1;if(t.getConvexTrianglePillar(w,E,!1),Ge.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(j=this.sphereConvex(e,t.pillarConvex,n,_,s,o,r,a,e,t,d)),d&&j||(t.getConvexTrianglePillar(w,E,!0),Ge.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(j=this.sphereConvex(e,t.pillarConvex,n,_,s,o,r,a,e,t,d)),d&&j))return!0;if(z.length-H>2)return}}boxHeightfield(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexHeightfield(e,t,n,i,s,o,r,a,l,h,d){const u=t.data,p=t.elementSize,g=e.boundingSphereRadius,_=Fg,m=Og,f=zg;Ge.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-g)/p)-1,x=Math.ceil((f.x+g)/p)+1,S=Math.floor((f.y-g)/p)-1,M=Math.ceil((f.y+g)/p)+1;if(x<0||M<0||v>u.length||S>u[0].length)return;v<0&&(v=0),x<0&&(x=0),S<0&&(S=0),M<0&&(M=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),M>=u[0].length&&(M=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const A=[];t.getRectMinMax(v,S,x,M,A);const L=A[0],z=A[1];if(!(f.z-g>z||f.z+g<L))for(let w=v;w<x;w++)for(let E=S;E<M;E++){let H=!1;if(t.getConvexTrianglePillar(w,E,!1),Ge.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,_,s,o,r,a,null,null,d,m,null)),d&&H||(t.getConvexTrianglePillar(w,E,!0),Ge.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.convexConvex(e,t.pillarConvex,n,_,s,o,r,a,null,null,d,m,null)),d&&H))return!0}}sphereParticle(e,t,n,i,s,o,r,a,l,h,d){const u=Dg;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,r,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,r,a,l,h,d){const u=Pg;u.set(0,0,1),r.quaternion.vmult(u,u);const p=Lg;if(i.vsub(r.position,p),u.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(a,r,t,e,l,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=Rg;u.scale(u.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,r,a,e,t,d)}convexParticle(e,t,n,i,s,o,r,a,l,h,d){let u=-1;const p=Ng,g=Ug;let _=null;const m=Ig;if(m.copy(i),m.vsub(n,m),s.conjugate(ma),ma.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,v=e.faces.length;f!==v;f++){const x=[e.worldVertices[e.faces[f][0]]],S=e.worldFaceNormals[f];i.vsub(x[0],ga);const M=-S.dot(ga);if(_===null||Math.abs(M)<Math.abs(_)){if(d)return!0;_=M,u=f,p.copy(S)}}if(u!==-1){const f=this.createContactEquation(a,r,t,e,l,h);p.scale(_,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,x=f.rj;v.vadd(i,v),v.vsub(a.position,v),x.vadd(n,x),x.vsub(r.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,r,a,l,h,d){return this.convexHeightfield(t,e,i,n,o,s,a,r,l,h,d)}particleCylinder(e,t,n,i,s,o,r,a,l,h,d){return this.convexParticle(t,e,i,n,o,s,a,r,l,h,d)}sphereTrimesh(e,t,n,i,s,o,r,a,l,h,d){const u=Wm,p=qm,g=Xm,_=jm,m=Ym,f=$m,v=Qm,x=Hm,S=Vm,M=eg;Ge.pointToLocalFrame(i,o,n,m);const A=e.radius;v.lowerBound.set(m.x-A,m.y-A,m.z-A),v.upperBound.set(m.x+A,m.y+A,m.z+A),t.getTrianglesInAABB(v,M);const L=km,z=e.radius*e.radius;for(let P=0;P<M.length;P++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[M[P]*3+D],L),L.vsub(m,S),S.lengthSquared()<=z){if(x.copy(L),Ge.pointToWorldFrame(i,o,x,L),L.vsub(n,S),d)return!0;let U=this.createContactEquation(r,a,e,t,l,h);U.ni.copy(S),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(r.position,U.ri),U.rj.copy(L),U.rj.vsub(a.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<M.length;P++)for(let D=0;D<3;D++){t.getVertex(t.indices[M[P]*3+D],u),t.getVertex(t.indices[M[P]*3+(D+1)%3],p),p.vsub(u,g),m.vsub(p,f);const U=f.dot(g);m.vsub(u,f);let O=f.dot(g);if(O>0&&U<0&&(m.vsub(u,f),_.copy(g),_.normalize(),O=f.dot(_),_.scale(O,f),f.vadd(u,f),f.distanceTo(m)<e.radius)){if(d)return!0;const I=this.createContactEquation(r,a,e,t,l,h);f.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(r.position,I.ri),Ge.pointToWorldFrame(i,o,f,f),f.vsub(a.position,I.rj),Ge.vectorToWorldFrame(o,I.ni,I.ni),Ge.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}const w=Zm,E=Km,H=Jm,j=Gm;for(let P=0,D=M.length;P!==D;P++){t.getTriangleVertices(M[P],w,E,H),t.getNormal(M[P],j),m.vsub(w,f);let U=f.dot(j);if(j.scale(U,f),m.vsub(f,f),U=f.distanceTo(m),it.pointInTriangle(f,w,E,H)&&U<e.radius){if(d)return!0;let O=this.createContactEquation(r,a,e,t,l,h);f.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(e.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),Ge.pointToWorldFrame(i,o,f,f),f.vsub(a.position,O.rj),Ge.vectorToWorldFrame(o,O.ni,O.ni),Ge.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,o,r,a,l,h,d){const u=new y,p=Fm;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const _=new y;_.copy(u),Ge.pointToWorldFrame(i,o,_,u);const m=Om;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(r,a,e,t,l,h);v.ni.copy(p);const x=Bm;p.scale(m.dot(p),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(r.position,v.ri),v.rj.copy(u),v.rj.vsub(a.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const An=new y,ai=new y,li=new y,Im=new y,Nm=new y,Um=new st,zm=new st,Fm=new y,Om=new y,Bm=new y,Gm=new y,Vm=new y;new y;const km=new y,Hm=new y,Wm=new y,qm=new y,Xm=new y,jm=new y,Ym=new y,$m=new y,Zm=new y,Km=new y,Jm=new y,Qm=new Rt,eg=[],ps=new y,pa=new y,tg=new y,ng=new y,ig=new y;function sg(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],r=tg;c[(s+1)%i].vsub(o,r);const a=ng;r.cross(e,a);const l=ig;t.vsub(o,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ms=new y,rg=new y,og=new y,ag=new y,lg=[new y,new y,new y,new y,new y,new y],cg=new y,hg=new y,ug=new y,dg=new y,fg=new y,pg=new y,mg=new y,gg=new y,_g=new y,vg=new y,xg=new y,yg=new y,Mg=new y,Sg=new y;new y;new y;const wg=new y,bg=new y,Eg=new y,Tg=new y,Ag=new y,Cg=new y,Pg=new y,Lg=new y,Rg=new y,Dg=new y,ma=new st,Ig=new y;new y;const Ng=new y,ga=new y,Ug=new y,zg=new y,Fg=new y,Og=[0],Bg=new y,Gg=new y;class _a{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[r];)r++;l=h===i[r],l||va(e,h)}r=0;for(let a=0;a<o;a++){let l=!1;const h=i[a];for(;h>n[r];)r++;l=n[r]===h,l||va(t,h)}}}function va(c,e){c.push((e&4294901760)>>16,e&65535)}const hr=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class Vg{constructor(){this.data={keys:[]}}get(e,t){const n=hr(e,t);return this.data[n]}set(e,t,n){const i=hr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=hr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class kg extends Ka{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Yp,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Tm,this.constraints=[],this.narrowphase=new Dm(this),this.collisionMatrix=new ia,this.collisionMatrixPrevious=new ia,this.bodyOverlapKeeper=new _a,this.shapeOverlapKeeper=new _a,this.contactmaterials=[],this.contactMaterialTable=new Vg,this.defaultMaterial=new ws("default"),this.defaultContactMaterial=new Ss(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof vs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ALL,n.from=e,n.to=t,n.callback=i,ur.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ANY,n.from=e,n.to=t,n.result=i,ur.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=it.CLOSEST,n.from=e,n.to=t,n.result=i,ur.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=ot.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=ot.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(ot.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let r=0;r!==this.bodies.length;r++){const a=this.bodies[r];a.previousPosition.lerp(a.position,o,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,o,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=jg,i=Yg,s=this.bodies.length,o=this.bodies,r=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=pe.DYNAMIC;let u=-1/0;const p=this.constraints,g=Xg;a.length();const _=a.x,m=a.y,f=a.z;let v=0;for(l&&(u=ot.now()),v=0;v!==s;v++){const P=o[v];if(P.type===d){const D=P.force,U=P.mass;D.x+=U*_,D.y+=U*m,D.z+=U*f}}for(let P=0,D=this.subsystems.length;P!==D;P++)this.subsystems[P].update();l&&(u=ot.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=ot.now()-u);let x=p.length;for(v=0;v!==x;v++){const P=p[v];if(!P.collideConnected)for(let D=n.length-1;D>=0;D-=1)(P.bodyA===n[D]&&P.bodyB===i[D]||P.bodyB===n[D]&&P.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),l&&(u=ot.now());const S=qg,M=t.length;for(v=0;v!==M;v++)S.push(t[v]);t.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,g),l&&(h.narrowphase=ot.now()-u),l&&(u=ot.now()),v=0;v<this.frictionEquations.length;v++)r.addEquation(this.frictionEquations[v]);const L=t.length;for(let P=0;P!==L;P++){const D=t[P],U=D.bi,O=D.bj,J=D.si,I=D.sj;let G;if(U.material&&O.material?G=this.getContactMaterial(U.material,O.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,U.material&&O.material&&(U.material.friction>=0&&O.material.friction>=0&&U.material.friction*O.material.friction,U.material.restitution>=0&&O.material.restitution>=0&&(D.restitution=U.material.restitution*O.material.restitution)),r.addEquation(D),U.allowSleep&&U.type===pe.DYNAMIC&&U.sleepState===pe.SLEEPING&&O.sleepState===pe.AWAKE&&O.type!==pe.STATIC){const W=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),ie=O.sleepSpeedLimit**2;W>=ie*2&&(U.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===pe.DYNAMIC&&O.sleepState===pe.SLEEPING&&U.sleepState===pe.AWAKE&&U.type!==pe.STATIC){const W=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ie=U.sleepSpeedLimit**2;W>=ie*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,O,!0),this.collisionMatrixPrevious.get(U,O)||(Ai.body=O,Ai.contact=D,U.dispatchEvent(Ai),Ai.body=U,O.dispatchEvent(Ai)),this.bodyOverlapKeeper.set(U.id,O.id),this.shapeOverlapKeeper.set(J.id,I.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=ot.now()-u,u=ot.now()),v=0;v!==s;v++){const P=o[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(x=p.length,v=0;v!==x;v++){const P=p[v];P.update();for(let D=0,U=P.equations.length;D!==U;D++){const O=P.equations[D];r.addEquation(O)}}r.solve(e,this),l&&(h.solve=ot.now()-u),r.removeAllEquations();const z=Math.pow;for(v=0;v!==s;v++){const P=o[v];if(P.type&d){const D=z(1-P.linearDamping,e),U=P.velocity;U.scale(D,U);const O=P.angularVelocity;if(O){const J=z(1-P.angularDamping,e);O.scale(J,O)}}}this.dispatchEvent(Wg),l&&(u=ot.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,E,H);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=ot.now()-u),this.stepnumber+=1,this.dispatchEvent(Hg);let j=!0;if(this.allowSleep)for(j=!1,v=0;v!==s;v++){const P=o[v];P.sleepTick(this.time),P.sleepState!==pe.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(an,ln),e){for(let s=0,o=an.length;s<o;s+=2)Ci.bodyA=this.getBodyById(an[s]),Ci.bodyB=this.getBodyById(an[s+1]),this.dispatchEvent(Ci);Ci.bodyA=Ci.bodyB=null}if(t){for(let s=0,o=ln.length;s<o;s+=2)Pi.bodyA=this.getBodyById(ln[s]),Pi.bodyB=this.getBodyById(ln[s+1]),this.dispatchEvent(Pi);Pi.bodyA=Pi.bodyB=null}an.length=ln.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(an,ln),n){for(let s=0,o=an.length;s<o;s+=2){const r=this.getShapeById(an[s]),a=this.getShapeById(an[s+1]);cn.shapeA=r,cn.shapeB=a,r&&(cn.bodyA=r.body),a&&(cn.bodyB=a.body),this.dispatchEvent(cn)}cn.bodyA=cn.bodyB=cn.shapeA=cn.shapeB=null}if(i){for(let s=0,o=ln.length;s<o;s+=2){const r=this.getShapeById(ln[s]),a=this.getShapeById(ln[s+1]);hn.shapeA=r,hn.shapeB=a,r&&(hn.bodyA=r.body),a&&(hn.bodyB=a.body),this.dispatchEvent(hn)}hn.bodyA=hn.bodyB=hn.shapeA=hn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Rt;const ur=new it,ot=globalThis.performance||{};if(!ot.now){let c=Date.now();ot.timing&&ot.timing.navigationStart&&(c=ot.timing.navigationStart),ot.now=()=>Date.now()-c}new y;const Hg={type:"postStep"},Wg={type:"preStep"},Ai={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},qg=[],Xg=[],jg=[],Yg=[],an=[],ln=[],Ci={type:"beginContact",bodyA:null,bodyB:null},Pi={type:"endContact",bodyA:null,bodyB:null},cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},hn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xa={type:"change"},dr={type:"start"},ya={type:"end"};class $g extends kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",He),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xa),n.update(),s=i.NONE},this.update=function(){const N=new V,te=new Bn().setFromUnitVectors(e.up,new V(0,1,0)),Y=te.clone().invert(),ue=new V,ge=new Bn,xe=2*Math.PI;return function(){const ve=n.object.position;N.copy(ve).sub(n.target),N.applyQuaternion(te),r.setFromVector3(N),n.autoRotate&&s===i.NONE&&w(L()),n.enableDamping?(r.theta+=a.theta*n.dampingFactor,r.phi+=a.phi*n.dampingFactor):(r.theta+=a.theta,r.phi+=a.phi);let Te=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(De)&&(Te<-Math.PI?Te+=xe:Te>Math.PI&&(Te-=xe),De<-Math.PI?De+=xe:De>Math.PI&&(De-=xe),Te<=De?r.theta=Math.max(Te,Math.min(De,r.theta)):r.theta=r.theta>(Te+De)/2?Math.max(Te,r.theta):Math.min(De,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),N.setFromSpherical(r),N.applyQuaternion(Y),ve.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),l=1,d||ue.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o?(n.dispatchEvent(xa),ue.copy(n.object.position),ge.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",Ye),n.domElement.removeEventListener("wheel",Oe),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",He),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new Qo,a=new Qo;let l=1;const h=new V;let d=!1;const u=new Re,p=new Re,g=new Re,_=new Re,m=new Re,f=new Re,v=new Re,x=new Re,S=new Re,M=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function z(){return Math.pow(.95,n.zoomSpeed)}function w(N){a.theta-=N}function E(N){a.phi-=N}const H=function(){const N=new V;return function(Y,ue){N.setFromMatrixColumn(ue,0),N.multiplyScalar(-Y),h.add(N)}}(),j=function(){const N=new V;return function(Y,ue){n.screenSpacePanning===!0?N.setFromMatrixColumn(ue,1):(N.setFromMatrixColumn(ue,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Y),h.add(N)}}(),P=function(){const N=new V;return function(Y,ue){const ge=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;N.copy(xe).sub(n.target);let de=N.length();de*=Math.tan(n.object.fov/2*Math.PI/180),H(2*Y*de/ge.clientHeight,n.object.matrix),j(2*ue*de/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(Y*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),j(ue*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(N){n.object.isPerspectiveCamera?l/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(N){n.object.isPerspectiveCamera?l*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(N){u.set(N.clientX,N.clientY)}function J(N){v.set(N.clientX,N.clientY)}function I(N){_.set(N.clientX,N.clientY)}function G(N){p.set(N.clientX,N.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const te=n.domElement;w(2*Math.PI*g.x/te.clientHeight),E(2*Math.PI*g.y/te.clientHeight),u.copy(p),n.update()}function W(N){x.set(N.clientX,N.clientY),S.subVectors(x,v),S.y>0?D(z()):S.y<0&&U(z()),v.copy(x),n.update()}function ie(N){m.set(N.clientX,N.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m),n.update()}function R(N){N.deltaY<0?U(z()):N.deltaY>0&&D(z()),n.update()}function X(N){let te=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),te=!0;break}te&&(N.preventDefault(),n.update())}function $(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);u.set(N,te)}}function ae(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const N=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);_.set(N,te)}}function ne(){const N=M[0].pageX-M[1].pageX,te=M[0].pageY-M[1].pageY,Y=Math.sqrt(N*N+te*te);v.set(0,Y)}function B(){n.enableZoom&&ne(),n.enablePan&&ae()}function me(){n.enableZoom&&ne(),n.enableRotate&&$()}function Se(N){if(M.length==1)p.set(N.pageX,N.pageY);else{const Y=he(N),ue=.5*(N.pageX+Y.x),ge=.5*(N.pageY+Y.y);p.set(ue,ge)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const te=n.domElement;w(2*Math.PI*g.x/te.clientHeight),E(2*Math.PI*g.y/te.clientHeight),u.copy(p)}function le(N){if(M.length===1)m.set(N.pageX,N.pageY);else{const te=he(N),Y=.5*(N.pageX+te.x),ue=.5*(N.pageY+te.y);m.set(Y,ue)}f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m)}function be(N){const te=he(N),Y=N.pageX-te.x,ue=N.pageY-te.y,ge=Math.sqrt(Y*Y+ue*ue);x.set(0,ge),S.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),D(S.y),v.copy(x)}function Be(N){n.enableZoom&&be(N),n.enablePan&&le(N)}function ye(N){n.enableZoom&&be(N),n.enableRotate&&Se(N)}function Ce(N){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",Ze),n.domElement.addEventListener("pointerup",Ye)),Z(N),N.pointerType==="touch"?ut(N):et(N))}function Ze(N){n.enabled!==!1&&(N.pointerType==="touch"?C(N):Ke(N))}function Ye(N){se(N),M.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(ya),s=i.NONE}function et(N){let te;switch(N.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Hn.DOLLY:if(n.enableZoom===!1)return;J(N),s=i.DOLLY;break;case Hn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;I(N),s=i.PAN}else{if(n.enableRotate===!1)return;O(N),s=i.ROTATE}break;case Hn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;O(N),s=i.ROTATE}else{if(n.enablePan===!1)return;I(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dr)}function Ke(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(N);break;case i.DOLLY:if(n.enableZoom===!1)return;W(N);break;case i.PAN:if(n.enablePan===!1)return;ie(N);break}}function Oe(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(dr),R(N),n.dispatchEvent(ya))}function He(N){n.enabled===!1||n.enablePan===!1||X(N)}function ut(N){switch(oe(N),M.length){case 1:switch(n.touches.ONE){case Wn.ROTATE:if(n.enableRotate===!1)return;$(),s=i.TOUCH_ROTATE;break;case Wn.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),s=i.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dr)}function C(N){switch(oe(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(N),n.update();break;default:s=i.NONE}}function b(N){n.enabled!==!1&&N.preventDefault()}function Z(N){M.push(N)}function se(N){delete A[N.pointerId];for(let te=0;te<M.length;te++)if(M[te].pointerId==N.pointerId){M.splice(te,1);return}}function oe(N){let te=A[N.pointerId];te===void 0&&(te=new Re,A[N.pointerId]=te),te.set(N.pageX,N.pageY)}function he(N){const te=N.pointerId===M[0].pointerId?M[1]:M[0];return A[te.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",Ye),n.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}function Zg(c,e=!1){const t=c[0].index!==null,n=new Set(Object.keys(c[0].attributes)),i=new Set(Object.keys(c[0].morphAttributes)),s={},o={},r=c[0].morphTargetsRelative,a=new yn;let l=0;for(let h=0;h<c.length;++h){const d=c[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(r!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,p,h),l+=p}}if(t){let h=0;const d=[];for(let u=0;u<c.length;++u){const p=c[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=c[u].attributes.position.count}a.setIndex(d)}for(const h in s){const d=Ma(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=Ma(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(g)}}return a}function Ma(c){let e,t,n,i=0;for(let r=0;r<c.length;++r){const a=c[r];if(a.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=a.array.constructor),e!==a.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=a.itemSize),t!==a.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=a.normalized),n!==a.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=a.array.length}const s=new e(i);let o=0;for(let r=0;r<c.length;++r)s.set(c[r].array,o),o+=c[r].array.length;return new yt(s,t,n)}function Kg(c,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=c.getIndex(),i=c.getAttribute("position"),s=n?n.count:i.count;let o=0;const r=Object.keys(c.attributes),a={},l={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let m=0,f=r.length;m<f;m++){const v=r[m],x=c.attributes[v];a[v]=new yt(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const S=c.morphAttributes[v];S&&(l[v]=new yt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}const p=Math.log10(1/e),g=Math.pow(10,p);for(let m=0;m<s;m++){const f=n?n.getX(m):m;let v="";for(let x=0,S=r.length;x<S;x++){const M=r[x],A=c.getAttribute(M),L=A.itemSize;for(let z=0;z<L;z++)v+=`${~~(A[d[z]](f)*g)},`}if(v in t)h.push(t[v]);else{for(let x=0,S=r.length;x<S;x++){const M=r[x],A=c.getAttribute(M),L=c.morphAttributes[M],z=A.itemSize,w=a[M],E=l[M];for(let H=0;H<z;H++){const j=d[H],P=u[H];if(w[P](o,A[j](f)),L)for(let D=0,U=L.length;D<U;D++)E[D][P](o,L[D][j](f))}}t[v]=o,h.push(o),o++}}const _=c.clone();for(const m in c.attributes){const f=a[m];if(_.setAttribute(m,new yt(f.array.slice(0,o*f.itemSize),f.itemSize,f.normalized)),m in l)for(let v=0;v<l[m].length;v++){const x=l[m][v];_.morphAttributes[m][v]=new yt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)}}return _.setIndex(h),_}function Jg(c,e=!1){return console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."),Zg(c,e)}const Qg={id:"threeDcanvas",class:"w-full h-full relative flex justify-center"},e0=Ni("canvas",{id:"canvas",class:"relative z-10"},null,-1),t0=Ni("div",{class:"absolute text-black text-center",style:{top:"-50%"}},[dl("Score: "),Ni("span",{id:"score-result"})],-1),n0={__name:"threeDcanvas",setup(c){const e=cl();let t,n,i,s,o,r,a,l,h;const d=30,u=100,p=[],g={numberOfDice:2,segments:40,edgeRadius:.07,notchRadius:.12,notchDepth:.1},_={mesh:null,physicsBody:null},m={meshes:[],physicsBodies:[]};hl(()=>{t=document.getElementById("threeDcanvas"),n=document.getElementById("canvas"),s=document.getElementById("score-result"),v(),S(),x(),A(),window.addEventListener("resize",f(I=>{console.log("resize event"),A()},300)),M(),U()});function f(I,W){var W=W||100,ie;return function(R){ie&&clearTimeout(ie),ie=setTimeout(I,W,R)}}function v(){i={width:t.clientWidth,height:t.clientHeight,aspect:t.clientWidth/t.clientHeight}}function x(){o=new $a({alpha:!0,antialias:!1,canvas:n}),o.shadowMap.enabled=!0,o.shadowMap.type=Ea,o.setSize(i.width,i.height),r=new mp,a=new Pt(30,i.width/i.height,1,2e3),a.position.set(0,1,0),new $g(a,o.domElement),L(),l=H();for(let I=0;I<g.numberOfDice;I++)p.push(E()),D(p[I])}function S(){h=new kg({allowSleep:!0,gravity:new y(0,-500,0)}),h.defaultContactMaterial.restitution=.3}function M(){h.fixedStep();for(const I of p)I.mesh.position.copy(I.body.position),I.mesh.quaternion.copy(I.body.quaternion);requestAnimationFrame(M),o.render(r,a)}async function A(){console.log("updating scene"),v(),a.aspect=i.aspect,await z(),await w(),i.width<i.height?(console.log("NARROW"),a.position.y=100*i.aspect/a.aspect/(2*Math.tan(d/2*(Math.PI/180)))):(console.log("WIDE"),a.position.y=100*i.aspect/a.aspect/(2*Math.tan(d/2*(Math.PI/180)))),a.updateProjectionMatrix(),o.setSize(i.width,i.height)}function L(){const I=new yp(16777215,.5);r.add(I);const G=new xp(16777215,.5);G.position.set(0,150,20),G.castShadow=!0,G.shadow.mapSize.width=2048,G.shadow.mapSize.height=2048,G.shadow.camera.near=80,G.shadow.camera.far=400,r.add(G)}function z(){return console.log("clearScene !!!!!!!!!!!!!!!!"),new Promise(async(I,G)=>{r.children.forEach(async W=>{W.appClass=="room"&&(console.log("scene object is: %O",W),W.geometry&&W.geometry.dispose(),W.material&&(W.material instanceof Array?await W.material.forEach(ie=>ie.dispose()):await W.material.dispose()),r.remove(W))}),console.log("physicsWorld is: %O",h),h.bodies.forEach(async W=>{W.appClass=="room"&&(console.log("physicsWorld object is: %O",W),await h.removeBody(W))}),I()})}async function w(){console.log("CREATING ROOM ++++++++++++++++++++++++++++++"),_.mesh=null,_.physicsBody=null,m.meshes=[],m.physicsBodies=[];let I=u*i.aspect,G=u;_.mesh=new Ut(new Oi(I,G),new gp({opacity:.1})),_.mesh.receiveShadow=!0,_.mesh.position.y=0,_.mesh.quaternion.setFromAxisAngle(new V(-1,0,0),Math.PI*.5),_.mesh.name="floor",_.mesh.appClass="room",await r.add(_.mesh),_.physicsBody=new pe({type:pe.STATIC,shape:new bm}),_.physicsBody.position.copy(_.mesh.position),_.physicsBody.quaternion.copy(_.mesh.quaternion),_.physicsBody.appClass="room",await h.addBody(_.physicsBody);let W=6,ie=100,R={back:{geometry:[I,W,ie],position:[0,ie/2,-(G/2)-W/2]},left:{geometry:[W,G,ie],position:[-(I/2)-W/2,ie/2,0]},right:{geometry:[W,G,ie],position:[I/2+W/2,ie/2,0]},front:{geometry:[I,W,ie],position:[0,ie/2,G/2+W/2]}},X=new wr({color:255,wireframe:!0});Object.entries(R).forEach(async $=>{let[ae,ne]=$;console.log("wallName %O",ae);let B=new Gn(...ne.geometry),me=new Ut(B,X);me.receiveShadow=!0,me.position.x=ne.position[0],me.position.y=ne.position[1],me.position.z=ne.position[2],me.quaternion.setFromAxisAngle(new V(-1,0,0),Math.PI*.5),me.name=ae,me.appClass="room",await r.add(me),m.meshes.push(me);let Se=new pe({type:pe.STATIC,shape:new Bi(new y(...ne.geometry))});Se.position.copy(me.position),Se.quaternion.copy(me.quaternion),Se.appClass="room",await h.addBody(Se),m.physicsBodies.push(me)})}function E(){const I=l.clone();I.scale.set(20,20,20),r.add(I);const G=new pe({mass:1,shape:new Bi(new y(10,10,10)),sleepTimeLimit:.1});return h.addBody(G),{mesh:I,body:G}}function H(){const I=new $o({color:15658734}),G=new $o({color:0,roughness:0,metalness:1,side:Jt}),W=new Di,ie=new Ut(P(),G),R=new Ut(j(),I);return R.castShadow=!0,W.add(ie,R),W}function j(){let I=new Gn(1,1,1,g.segments,g.segments,g.segments);const G=I.attributes.position,W=.5-g.edgeRadius;for(let ie=0;ie<G.count;ie++){let R=new V().fromBufferAttribute(G,ie);const X=new V(Math.sign(R.x),Math.sign(R.y),Math.sign(R.z)).multiplyScalar(W),$=new V().subVectors(R,X);Math.abs(R.x)>W&&Math.abs(R.y)>W&&Math.abs(R.z)>W?($.normalize().multiplyScalar(g.edgeRadius),R=X.add($)):Math.abs(R.x)>W&&Math.abs(R.y)>W?($.z=0,$.normalize().multiplyScalar(g.edgeRadius),R.x=X.x+$.x,R.y=X.y+$.y):Math.abs(R.x)>W&&Math.abs(R.z)>W?($.y=0,$.normalize().multiplyScalar(g.edgeRadius),R.x=X.x+$.x,R.z=X.z+$.z):Math.abs(R.y)>W&&Math.abs(R.z)>W&&($.x=0,$.normalize().multiplyScalar(g.edgeRadius),R.y=X.y+$.y,R.z=X.z+$.z);const ae=me=>(me=1/g.notchRadius*me,me=Math.PI*Math.max(-1,Math.min(1,me)),g.notchDepth*(Math.cos(me)+1)),ne=me=>ae(me[0])*ae(me[1]),B=.23;R.y===.5?R.y-=ne([R.x,R.z]):R.x===.5?(R.x-=ne([R.y+B,R.z+B]),R.x-=ne([R.y-B,R.z-B])):R.z===.5?(R.z-=ne([R.x-B,R.y+B]),R.z-=ne([R.x,R.y]),R.z-=ne([R.x+B,R.y-B])):R.z===-.5?(R.z+=ne([R.x+B,R.y+B]),R.z+=ne([R.x+B,R.y-B]),R.z+=ne([R.x-B,R.y+B]),R.z+=ne([R.x-B,R.y-B])):R.x===-.5?(R.x+=ne([R.y+B,R.z+B]),R.x+=ne([R.y+B,R.z-B]),R.x+=ne([R.y,R.z]),R.x+=ne([R.y-B,R.z+B]),R.x+=ne([R.y-B,R.z-B])):R.y===-.5&&(R.y+=ne([R.x+B,R.z+B]),R.y+=ne([R.x+B,R.z]),R.y+=ne([R.x+B,R.z-B]),R.y+=ne([R.x-B,R.z+B]),R.y+=ne([R.x-B,R.z]),R.y+=ne([R.x-B,R.z-B])),G.setXYZ(ie,R.x,R.y,R.z)}return I.deleteAttribute("normal"),I.deleteAttribute("uv"),I=Kg(I),I.computeVertexNormals(),I}function P(){const I=new Oi(1-2*g.edgeRadius,1-2*g.edgeRadius),G=.48;return Jg([I.clone().translate(0,0,G),I.clone().translate(0,0,-G),I.clone().rotateX(.5*Math.PI).translate(0,-G,0),I.clone().rotateX(.5*Math.PI).translate(0,G,0),I.clone().rotateY(.5*Math.PI).translate(-G,0,0),I.clone().rotateY(.5*Math.PI).translate(G,0,0)],!1)}function D(I){I.body.addEventListener("sleep",G=>{I.body.allowSleep=!1;const W=new y;G.target.quaternion.toEuler(W);const ie=.1;let R=ne=>Math.abs(ne)<ie,X=ne=>Math.abs(ne-.5*Math.PI)<ie,$=ne=>Math.abs(.5*Math.PI+ne)<ie,ae=ne=>Math.abs(Math.PI-ne)<ie||Math.abs(Math.PI+ne)<ie;R(W.z)?R(W.x)?J(1):X(W.x)?J(4):$(W.x)?J(3):ae(W.x)?J(6):I.body.allowSleep=!0:X(W.z)?J(2):$(W.z)?J(5):I.body.allowSleep=!0})}function U(){s.innerHTML="",p.forEach((I,G)=>{I.body.velocity.setZero(),I.body.angularVelocity.setZero(),I.body.position=new y(O(1,10),(G+1)*50,O(1,10)),I.mesh.position.copy(I.body.position),I.mesh.rotation.set(2*Math.PI*Math.random(),0,2*Math.PI*Math.random()),I.body.quaternion.copy(I.mesh.quaternion);const W=33+55*Math.random();I.body.applyImpulse(new y(O(8,12),W,-O(8,12)),new y(O(8,18),O(4,12),-O(8,18))),I.body.allowSleep=!0})}function O(I,G){return Math.floor(I+Math.random()*(G-I+1))}function J(I){s.innerHTML===""?s.innerHTML+=I:s.innerHTML+="+"+I}return(I,G)=>(Sa(),wa("div",Qg,[e0,Ni("div",{class:"absolute mb-6 pointer-events-auto z-50 flex justify-center",style:ul("bottom:"+(Dr(e).safeAreaInset.bottom+Dr(e).safeAreaPadding)+"px")},[Ni("div",{onClick:G[0]||(G[0]=W=>U()),class:"p-4 px-8 rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer"},"ROLL"),t0],4)]))}},i0={class:"w-full h-full flex justify-center items-center"},c0={__name:"threedtest",setup(c){return(e,t)=>{const n=n0;return Sa(),wa("div",i0,[fl(n)])}}};export{c0 as default};
