(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const cc="177",Un={ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zp=0,ih=1,Jp=2,Ju=1,$p=2,er=3,lr=0,Vt=1,Ni=2,wr=0,Nn=1,rh=2,nh=3,ah=4,Qp=5,Jr=100,ef=101,tf=102,rf=103,nf=104,af=200,sf=201,of=202,lf=203,il=204,rl=205,cf=206,hf=207,uf=208,df=209,pf=210,ff=211,mf=212,gf=213,_f=214,nl=0,al=1,sl=2,Vn=3,ol=4,ll=5,cl=6,hl=7,$u=0,vf=1,xf=2,Ar=0,yf=1,Mf=2,Tf=3,Qu=4,Sf=5,bf=6,Ef=7,sh="attached",wf="detached",ed=300,Gn=301,Wn=302,ul=303,dl=304,Zs=306,Xn=1e3,yr=1001,Fs=1002,Gt=1003,td=1004,Ma=1005,ai=1006,As=1007,nr=1008,zi=1009,id=1010,rd=1011,La=1012,hc=1013,ln=1014,Ci=1015,Xa=1016,uc=1017,dc=1018,Da=1020,nd=35902,ad=1021,sd=1022,_i=1023,Ia=1026,Ua=1027,pc=1028,fc=1029,od=1030,mc=1031,gc=1033,Rs=33776,Cs=33777,Ps=33778,Ls=33779,pl=35840,fl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,yl=37808,Ml=37809,Tl=37810,Sl=37811,bl=37812,El=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,Ds=36492,Ul=36494,Nl=36495,ld=36283,Ol=36284,Fl=36285,Bl=36286,Na=2300,Oa=2301,so=2302,oh=2400,lh=2401,ch=2402,Af=2500,Rf=0,cd=1,zl=2,Cf=3200,Pf=3201,hd=0,Lf=1,xr="",At="srgb",Xt="srgb-linear",Bs="linear",et="srgb",pn=7680,hh=519,Df=512,If=513,Uf=514,ud=515,Nf=516,Of=517,Ff=518,Bf=519,kl=35044,uh="300 es",ar=2e3,zs=2001;class hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const Ea=Math.PI/180,jn=180/Math.PI;function Pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function _c(r,e){return(r%e+e)%e}function zf(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function kf(r,e,t){return r!==e?(t-r)/(e-r):0}function wa(r,e,t){return(1-t)*r+t*e}function Hf(r,e,t,i){return wa(r,e,1-Math.exp(-t*i))}function Vf(r,e=1){return e-Math.abs(_c(r,e*2)-e)}function Gf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Wf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Xf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jf(r,e){return r+Math.random()*(e-r)}function qf(r){return r*(.5-Math.random())}function Yf(r){r!==void 0&&(dh=r);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kf(r){return r*Ea}function Zf(r){return r*jn}function Jf(r){return(r&r-1)===0&&r!==0}function $f(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function em(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),m=s((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dd={DEG2RAD:Ea,RAD2DEG:jn,generateUUID:Pi,clamp:ze,euclideanModulo:_c,mapLinear:zf,inverseLerp:kf,lerp:wa,damp:Hf,pingpong:Vf,smoothstep:Gf,smootherstep:Wf,randInt:Xf,randFloat:jf,randFloatSpread:qf,seededRandom:Yf,degToRad:Kf,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:$f,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:em,normalize:Je,denormalize:Ai};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=a[s+0],p=a[s+1],m=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==m){let g=1-o;const f=l*d+c*p+h*m+u*_,S=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const C=Math.sqrt(T),E=Math.atan2(C,f*S);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C}const v=o*S;if(l=l*g+d*v,c=c*g+p*v,h=h*g+m*v,u=u*g+_*v,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=a[s],d=a[s+1],p=a[s+2],m=a[s+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(a/2),d=l(i/2),p=l(n/2),m=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-a*n),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=n+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new D,ph=new ki;class Ne{constructor(e,t,i,n,a,s,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],_=n[0],g=n[3],f=n[6],S=n[1],T=n[4],v=n[7],C=n[2],E=n[5],w=n[8];return a[0]=s*_+o*S+l*C,a[3]=s*g+o*T+l*E,a[6]=s*f+o*v+l*w,a[1]=c*_+h*S+u*C,a[4]=c*g+h*T+u*E,a[7]=c*f+h*v+u*w,a[2]=d*_+p*S+m*C,a[5]=d*g+p*T+m*E,a[8]=d*f+p*v+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,p=c*a-s*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lo.makeScale(e,t)),this}rotate(e){return this.premultiply(lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Ne;function pd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tm(){const r=Fa("canvas");return r.style.display="block",r}const fh={};function On(r){r in fh||(fh[r]=!0,console.warn(r))}function im(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function rm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){const r={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===et&&(n.r=sr(n.r),n.g=sr(n.g),n.b=sr(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xr?Bs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return On("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return On("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Xt]:{primaries:e,whitePoint:i,transfer:Bs,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:et,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),r}const Xe=am();function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fn;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fn===void 0&&(fn=Fa("canvas")),fn.width=e.width,fn.height=e.height;const n=fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=fn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=sr(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(co(n[s].image)):a.push(co(n[s]))}else a=co(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function co(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;const ho=new D;class Rt extends hn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=yr,n=yr,a=ai,s=nr,o=_i,l=zi,c=Rt.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Pi(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ed;Rt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,n=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],p=s[2],m=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+m)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,S=(u+1)/2,T=(_+1)/2,v=(l+h)/4,C=(c+p)/4,E=(d+m)/4;return f>S&&f>T?f<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(f),n=v/i,a=C/i):S>T?S<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),i=v/n,a=E/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=C/a,n=E/a),this.set(i,n,a,t),this}let g=Math.sqrt((m-d)*(m-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(m-d)/g,this.y=(c-p)/g,this.z=(h-l)/g,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const n={width:e,height:t,depth:i.depth},a=new Rt(n);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fd extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hm extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,bi):bi.fromBufferAttribute(a,s),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),$a.subVectors(this.max,ua),mn.subVectors(e.a,ua),gn.subVectors(e.b,ua),_n.subVectors(e.c,ua),ur.subVectors(gn,mn),dr.subVectors(_n,gn),kr.subVectors(mn,_n);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-kr.z,kr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,kr.z,0,-kr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-kr.y,kr.x,0];return!uo(t,mn,gn,_n,$a)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,mn,gn,_n,$a))?!1:(Qa.crossVectors(ur,dr),t=[Qa.x,Qa.y,Qa.z],uo(t,mn,gn,_n,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new D,new D,new D,new D,new D,new D,new D,new D],bi=new D,Ja=new Li,mn=new D,gn=new D,_n=new D,ur=new D,dr=new D,kr=new D,ua=new D,$a=new D,Qa=new D,Hr=new D;function uo(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Hr.fromArray(r,a);const o=n.x*Math.abs(Hr.x)+n.y*Math.abs(Hr.y)+n.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),h=i.dot(Hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const um=new Li,da=new D,po=new D;class Gi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):um.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(da,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(po)),this.expandByPoint(da.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new D,fo=new D,es=new D,pr=new D,mo=new D,ts=new D,go=new D;class na{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fo.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(fo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(es),o=pr.dot(this.direction),l=-pr.dot(es),c=pr.lengthSq(),h=Math.abs(1-s*s);let u,d,p,m;if(h>0)if(u=s*l-o,d=s*o-l,m=a*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(fo).addScaledVector(es,d),p}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),n=Ki.dot(Ki)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,n,a){mo.subVectors(t,e),ts.subVectors(i,e),go.crossVectors(mo,ts);let s=this.direction.dot(go),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;pr.subVectors(this.origin,e);const l=o*this.direction.dot(ts.crossVectors(pr,ts));if(l<0)return null;const c=o*this.direction.dot(mo.cross(pr));if(c<0||l+c>s)return null;const h=-o*pr.dot(go);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,n,a,s,o,l,c,h,u,d,p,m,_,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,u,d,p,m,_,g)}set(e,t,i,n,a,s,o,l,c,h,u,d,p,m,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/vn.setFromMatrixColumn(e,0).length(),a=1/vn.setFromMatrixColumn(e,1).length(),s=1/vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,p=s*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-s*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,p=s*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*l,p=s*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=s*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,pm)}lookAt(e,t,i){const n=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),fr.crossVectors(i,ei),fr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),fr.crossVectors(i,ei)),fr.normalize(),is.crossVectors(ei,fr),n[0]=fr.x,n[4]=is.x,n[8]=ei.x,n[1]=fr.y,n[5]=is.y,n[9]=ei.y,n[2]=fr.z,n[6]=is.z,n[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],_=i[6],g=i[10],f=i[14],S=i[3],T=i[7],v=i[11],C=i[15],E=n[0],w=n[4],A=n[8],b=n[12],M=n[1],P=n[5],B=n[9],F=n[13],V=n[2],q=n[6],H=n[10],Z=n[14],G=n[3],te=n[7],ce=n[11],Se=n[15];return a[0]=s*E+o*M+l*V+c*G,a[4]=s*w+o*P+l*q+c*te,a[8]=s*A+o*B+l*H+c*ce,a[12]=s*b+o*F+l*Z+c*Se,a[1]=h*E+u*M+d*V+p*G,a[5]=h*w+u*P+d*q+p*te,a[9]=h*A+u*B+d*H+p*ce,a[13]=h*b+u*F+d*Z+p*Se,a[2]=m*E+_*M+g*V+f*G,a[6]=m*w+_*P+g*q+f*te,a[10]=m*A+_*B+g*H+f*ce,a[14]=m*b+_*F+g*Z+f*Se,a[3]=S*E+T*M+v*V+C*G,a[7]=S*w+T*P+v*q+C*te,a[11]=S*A+T*B+v*H+C*ce,a[15]=S*b+T*F+v*Z+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+a*l*u-n*c*u-a*o*d+i*c*d+n*o*p-i*l*p)+_*(+t*l*p-t*c*d+a*s*d-n*s*p+n*c*h-a*l*h)+g*(+t*c*u-t*o*p-a*s*u+i*s*p+a*o*h-i*c*h)+f*(-n*o*h-t*l*u+t*o*d+n*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],S=u*g*c-_*d*c+_*l*p-o*g*p-u*l*f+o*d*f,T=m*d*c-h*g*c-m*l*p+s*g*p+h*l*f-s*d*f,v=h*_*c-m*u*c+m*o*p-s*_*p-h*o*f+s*u*f,C=m*u*l-h*_*l-m*o*d+s*_*d+h*o*g-s*u*g,E=t*S+i*T+n*v+a*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=S*w,e[1]=(_*d*a-u*g*a-_*n*p+i*g*p+u*n*f-i*d*f)*w,e[2]=(o*g*a-_*l*a+_*n*c-i*g*c-o*n*f+i*l*f)*w,e[3]=(u*l*a-o*d*a-u*n*c+i*d*c+o*n*p-i*l*p)*w,e[4]=T*w,e[5]=(h*g*a-m*d*a+m*n*p-t*g*p-h*n*f+t*d*f)*w,e[6]=(m*l*a-s*g*a-m*n*c+t*g*c+s*n*f-t*l*f)*w,e[7]=(s*d*a-h*l*a+h*n*c-t*d*c-s*n*p+t*l*p)*w,e[8]=v*w,e[9]=(m*u*a-h*_*a-m*i*p+t*_*p+h*i*f-t*u*f)*w,e[10]=(s*_*a-m*o*a+m*i*c-t*_*c-s*i*f+t*o*f)*w,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*p-t*o*p)*w,e[12]=C*w,e[13]=(h*_*n-m*u*n+m*i*d-t*_*d-h*i*g+t*u*g)*w,e[14]=(m*o*n-s*_*n-m*i*l+t*_*l+s*i*g-t*o*g)*w,e[15]=(s*u*n-h*o*n+h*i*l-t*u*l-s*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,p=a*h,m=a*u,_=s*h,g=s*u,f=o*u,S=l*c,T=l*h,v=l*u,C=i.x,E=i.y,w=i.z;return n[0]=(1-(_+f))*C,n[1]=(p+v)*C,n[2]=(m-T)*C,n[3]=0,n[4]=(p-v)*E,n[5]=(1-(d+f))*E,n[6]=(g+S)*E,n[7]=0,n[8]=(m+T)*w,n[9]=(g-S)*w,n[10]=(1-(d+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=vn.set(n[0],n[1],n[2]).length();const s=vn.set(n[4],n[5],n[6]).length(),o=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Ei.copy(this);const l=1/a,c=1/s,h=1/o;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=c,Ei.elements[5]*=c,Ei.elements[6]*=c,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,t.setFromRotationMatrix(Ei),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=ar){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let p,m;if(o===ar)p=-(s+a)/(s-a),m=-2*s*a/(s-a);else if(o===zs)p=-s/(s-a),m=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=ar){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(s-a),d=(t+e)*c,p=(i+n)*h;let m,_;if(o===ar)m=(s+a)*u,_=-2*u;else if(o===zs)m=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vn=new D,Ei=new Ue,dm=new D(0,0,0),pm=new D(1,1,1),fr=new D,is=new D,ei=new D,_h=new Ue,vh=new ki;class Hi{constructor(e=0,t=0,i=0,n=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const xh=new D,xn=new ki,Zi=new Ue,rs=new D,pa=new D,mm=new D,gm=new ki,yh=new D(1,0,0),Mh=new D(0,1,0),Th=new D(0,0,1),Sh={type:"added"},_m={type:"removed"},yn={type:"childadded",child:null},_o={type:"childremoved",child:null};class lt extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new D,t=new Hi,i=new ki,n=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(pa,rs,this.up):Zi.lookAt(rs,pa,this.up),this.quaternion.setFromRotationMatrix(Zi),n&&(Zi.extractRotation(n.matrixWorld),xn.setFromRotationMatrix(Zi),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),yn.child=e,this.dispatchEvent(yn),yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_m),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),yn.child=e,this.dispatchEvent(yn),yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}lt.DEFAULT_UP=new D(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new D,Ji=new D,vo=new D,$i=new D,Mn=new D,Tn=new D,bh=new D,xo=new D,yo=new D,Mo=new D,To=new Ke,So=new Ke,bo=new Ke;class Ri{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),wi.subVectors(e,t),n.cross(wi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){wi.subVectors(n,t),Ji.subVectors(i,t),vo.subVectors(e,t);const s=wi.dot(wi),o=wi.dot(Ji),l=wi.dot(vo),c=Ji.dot(Ji),h=Ji.dot(vo),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,m=(s*h-o*l)*d;return a.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,$i.x),l.addScaledVector(s,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,i,n,a,s){return To.setScalar(0),So.setScalar(0),bo.setScalar(0),To.fromBufferAttribute(e,t),So.fromBufferAttribute(e,i),bo.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(To,a.x),s.addScaledVector(So,a.y),s.addScaledVector(bo,a.z),s}static isFrontFacing(e,t,i,n){return wi.subVectors(i,t),Ji.subVectors(e,t),wi.cross(Ji).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),wi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;Mn.subVectors(n,i),Tn.subVectors(a,i),xo.subVectors(e,i);const l=Mn.dot(xo),c=Tn.dot(xo);if(l<=0&&c<=0)return t.copy(i);yo.subVectors(e,n);const h=Mn.dot(yo),u=Tn.dot(yo);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Mn,s);Mo.subVectors(e,a);const p=Mn.dot(Mo),m=Tn.dot(Mo);if(m>=0&&p<=m)return t.copy(a);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Tn,o);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return bh.subVectors(a,n),o=(u-h)/(u-h+(p-m)),t.copy(n).addScaledVector(bh,o);const f=1/(g+_+d);return s=_*f,o=d*f,t.copy(i).addScaledVector(Mn,s).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Xe.workingColorSpace){if(e=_c(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Eo(s,a,e+1/3),this.g=Eo(s,a,e),this.b=Eo(s,a,e-1/3)}return Xe.colorSpaceToWorking(this,n),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Xe.workingToColorSpace(It.copy(this),e),Math.round(ze(It.r*255,0,255))*65536+Math.round(ze(It.g*255,0,255))*256+Math.round(ze(It.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const i=It.r,n=It.g,a=It.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-i)/u+2;break;case a:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=At){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,n=It.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(ns);const i=wa(mr.h,ns.h,t),n=wa(mr.s,ns.s,t),a=wa(mr.l,ns.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Pe;Pe.NAMES=md;let vm=0;class Bi extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Nn,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Vn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pn,this.stencilZFail=pn,this.stencilZPass=pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mr extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new D,as=new Ce;let xm=0;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),a=Je(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class gd extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _d extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class or extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ym=0;const pi=new Ue,wo=new lt,Sn=new D,ti=new Li,fa=new Li,wt=new D;class Wi extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?_d:gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ne().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new or(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(ti.min,fa.min),ti.expandByPoint(wt),wt.addVectors(ti.max,fa.max),ti.expandByPoint(wt)):(ti.expandByPoint(fa.min),ti.expandByPoint(fa.max))}ti.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)wt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Sn.fromBufferAttribute(e,c),wt.add(Sn)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new D,l[A]=new D;const c=new D,h=new D,u=new D,d=new Ce,p=new Ce,m=new Ce,_=new D,g=new D;function f(A,b,M){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(a,A),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,M),h.sub(c),u.sub(c),p.sub(d),m.sub(d);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),o[A].add(_),o[b].add(_),o[M].add(_),l[A].add(g),l[b].add(g),l[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,b=S.length;A<b;++A){const M=S[A],P=M.start,B=M.count;for(let F=P,V=P+B;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new D,v=new D,C=new D,E=new D;function w(A){C.fromBufferAttribute(n,A),E.copy(C);const b=o[A];T.copy(b),T.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(E,b);const M=v.dot(l[A])<0?-1:1;s.setXYZW(A,T.x,T.y,T.z,M)}for(let A=0,b=S.length;A<b;++A){const M=S[A],P=M.start,B=M.count;for(let F=P,V=P+B;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new D,a=new D,s=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new Ue,Vr=new na,ss=new Gi,wh=new D,os=new D,ls=new D,cs=new D,Ao=new D,hs=new D,Ah=new D,us=new D;class xt extends lt{constructor(e=new Wi,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){hs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Ao.fromBufferAttribute(u,e),s?hs.addScaledVector(Ao,h):hs.addScaledVector(Ao.sub(t),h))}t.add(hs)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(a),Vr.copy(e.ray).recast(e.near),!(ss.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ss,wh)===null||Vr.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(a).invert(),Vr.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=s[g.materialIndex],S=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=T;v<C;v+=3){const E=o.getX(v),w=o.getX(v+1),A=o.getX(v+2);n=ds(this,f,e,i,c,h,u,E,w,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const S=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);n=ds(this,s,e,i,c,h,u,S,T,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=s[g.materialIndex],S=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=T;v<C;v+=3){const E=v,w=v+1,A=v+2;n=ds(this,f,e,i,c,h,u,E,w,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const S=g,T=g+1,v=g+2;n=ds(this,s,e,i,c,h,u,S,T,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function Mm(r,e,t,i,n,a,s,o){let l;if(e.side===Vt?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===lr,o),l===null)return null;us.copy(o),us.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:r}}function ds(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,os),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const h=Mm(r,e,t,i,os,ls,cs,Ah);if(h){const u=new D;Ri.getBarycoord(Ah,os,ls,cs,u),n&&(h.uv=Ri.getInterpolatedAttribute(n,o,l,c,u,new Ce)),a&&(h.uv1=Ri.getInterpolatedAttribute(a,o,l,c,u,new Ce)),s&&(h.normal=Ri.getInterpolatedAttribute(s,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Ri.getNormal(os,ls,cs,d.normal),h.face=d,h.barycoord=u}return h}class aa extends Wi{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,a,0),m("z","y","x",1,-1,i,t,-e,s,a,1),m("x","z","y",1,1,e,i,t,n,s,2),m("x","z","y",1,-1,e,i,-t,n,s,3),m("x","y","z",1,-1,e,t,i,n,a,4),m("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new or(c,3)),this.setAttribute("normal",new or(h,3)),this.setAttribute("uv",new or(u,2));function m(_,g,f,S,T,v,C,E,w,A,b){const M=v/w,P=C/A,B=v/2,F=C/2,V=E/2,q=w+1,H=A+1;let Z=0,G=0;const te=new D;for(let ce=0;ce<H;ce++){const Se=ce*P-F;for(let Oe=0;Oe<q;Oe++){const He=Oe*M-B;te[_]=He*S,te[g]=Se*T,te[f]=V,c.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[f]=E>0?1:-1,h.push(te.x,te.y,te.z),u.push(Oe/w),u.push(1-ce/A),Z+=1}}for(let ce=0;ce<A;ce++)for(let Se=0;Se<w;Se++){const Oe=d+Se+q*ce,He=d+Se+q*(ce+1),W=d+(Se+1)+q*(ce+1),ie=d+(Se+1)+q*ce;l.push(Oe,He,ie),l.push(He,W,ie),G+=6}o.addGroup(p,G,b),p+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const i=qn(r[t]);for(const n in i)e[n]=i[n]}return e}function Tm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Sm={clone:qn,merge:zt};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qn(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xd extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new D,Rh=new Ce,Ch=new Ce;class kt extends xd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jn*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bn=-90,En=1;class wm extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new kt(bn,En,e,t);n.layers=this.layers,this.add(n);const a=new kt(bn,En,e,t);a.layers=this.layers,this.add(a);const s=new kt(bn,En,e,t);s.layers=this.layers,this.add(s);const o=new kt(bn,En,e,t);o.layers=this.layers,this.add(o);const l=new kt(bn,En,e,t);l.layers=this.layers,this.add(l);const c=new kt(bn,En,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ar)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class yd extends Rt{constructor(e=[],t=Gn,i,n,a,s,o,l,c,h){super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yd(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new aa(5,5,5),a=new Pr({name:"CubemapFromEquirect",uniforms:qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:wr});a.uniforms.tEquirect.value=t;const s=new xt(n,a),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=ai),new wm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}class Qr extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Md extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new D;class yc{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),a=Je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ph=new D,Lh=new Ke,Dh=new Ke,Pm=new D,Ih=new Ue,ps=new D,Co=new Gi,Uh=new Ue,Po=new na;class Lm extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ps),this.boundingBox.expandByPoint(ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ps),this.boundingSphere.expandByPoint(ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),e.ray.intersectsSphere(Co)!==!1&&(Uh.copy(n).invert(),Po.copy(e.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Lh.fromBufferAttribute(n.attributes.skinIndex,e),Dh.fromBufferAttribute(n.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=Dh.getComponent(a);if(s!==0){const o=Lh.getComponent(a);Ih.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Pm.copy(Ph).applyMatrix4(Ih),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Td extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sd extends Rt{constructor(e=null,t=1,i=1,n,a,s,o,l,c=Gt,h=Gt,u,d){super(null,s,o,l,c,h,n,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new Ue,Dm=new Ue;class Mc{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:Dm;Nh.multiplyMatrices(o,t[a]),Nh.toArray(i,a*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Sd(t,e,e,_i,Ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const a=e.bones[i];let s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new Td),this.bones.push(s),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,a=t.length;n<a;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Hl extends Wt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wn=new Ue,Oh=new Ue,fs=[],Fh=new Li,Im=new Ue,ma=new xt,ga=new Gi;class bd extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wn),Fh.copy(e.boundingBox).applyMatrix4(wn),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wn),ga.copy(e.boundingSphere).applyMatrix4(wn),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,wn),Oh.multiplyMatrices(i,wn),ma.matrixWorld=Oh,ma.raycast(e,fs);for(let s=0,o=fs.length;s<o;s++){const l=fs[s];l.instanceId=a,l.object=this,t.push(l)}fs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sd(new Float32Array(n*this.count),n,this.count,pc,Ci));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=n*e;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lo=new D,Um=new D,Nm=new Ne;class vr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Lo.subVectors(i,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nm.getNormalMatrix(e),n=this.coplanarPoint(Lo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Gi,ms=new D;class Tc{constructor(e=new vr,t=new vr,i=new vr,n=new vr,a=new vr,s=new vr){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ar){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],m=n[9],_=n[10],g=n[11],f=n[12],S=n[13],T=n[14],v=n[15];if(i[0].setComponents(l-a,d-c,g-p,v-f).normalize(),i[1].setComponents(l+a,d+c,g+p,v+f).normalize(),i[2].setComponents(l+s,d+h,g+m,v+S).normalize(),i[3].setComponents(l-s,d-h,g-m,v-S).normalize(),i[4].setComponents(l-o,d-u,g-_,v-T).normalize(),t===ar)i[5].setComponents(l+o,d+u,g+_,v+T).normalize();else if(t===zs)i[5].setComponents(o,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ms.x=n.normal.x>0?e.max.x:e.min.x,ms.y=n.normal.y>0?e.max.y:e.min.y,ms.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ed extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new D,Hs=new D,Bh=new Ue,_a=new na,gs=new Gi,Do=new D,zh=new D;class Sc extends lt{constructor(e=new Wi,t=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)ks.fromBufferAttribute(t,n-1),Hs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ks.distanceTo(Hs);e.setAttribute("lineDistance",new or(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(n),gs.radius+=a,e.ray.intersectsSphere(gs)===!1)return;Bh.copy(n).invert(),_a.copy(e.ray).applyMatrix4(Bh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,_=p-1;m<_;m+=c){const g=h.getX(m),f=h.getX(m+1),S=_s(this,e,_a,l,g,f,m);S&&t.push(S)}if(this.isLineLoop){const m=h.getX(p-1),_=h.getX(d),g=_s(this,e,_a,l,m,_,p-1);g&&t.push(g)}}else{const d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let m=d,_=p-1;m<_;m+=c){const g=_s(this,e,_a,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=_s(this,e,_a,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function _s(r,e,t,i,n,a,s){const o=r.geometry.attributes.position;if(ks.fromBufferAttribute(o,n),Hs.fromBufferAttribute(o,a),t.distanceSqToSegment(ks,Hs,Do,zh)>i)return;Do.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Do);if(!(l<e.near||l>e.far))return{distance:l,point:zh.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const kh=new D,Hh=new D;class Om extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)kh.fromBufferAttribute(t,n),Hh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+kh.distanceTo(Hh);e.setAttribute("lineDistance",new or(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wd extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new Ue,Vl=new na,vs=new Gi,xs=new D;class Bm extends lt{constructor(e=new Wi,t=new wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(n),vs.radius+=a,e.ray.intersectsSphere(vs)===!1)return;Vh.copy(n).invert(),Vl.copy(e.ray).applyMatrix4(Vh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=u,m=d;p<m;p++){const _=c.getX(p);xs.fromBufferAttribute(h,_),Gh(xs,_,l,n,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,m=d;p<m;p++)xs.fromBufferAttribute(h,p),Gh(xs,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Gh(r,e,t,i,n,a,s){const o=Vl.distanceSqToPoint(r);if(o<t){const l=new D;Vl.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ad extends Rt{constructor(e,t,i=ln,n,a,s,o=Gt,l=Gt,c,h=Ia,u=1){if(h!==Ia&&h!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Js extends Wi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){const S=f*d-s;for(let T=0;T<c;T++){const v=T*u-a;m.push(v,-S,0),_.push(0,0,1),g.push(T/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const T=S+c*f,v=S+c*(f+1),C=S+1+c*(f+1),E=S+1+c*f;p.push(T,v,E),p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new or(m,3)),this.setAttribute("normal",new or(_,3)),this.setAttribute("uv",new or(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yn extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xi extends Yn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zm extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class km extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ys(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vm(r){function e(n,a){return r[n]-r[a]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Wh(r,e,t){const i=r.length,n=new r.constructor(i);for(let a=0,s=0;s!==i;++a){const o=t[a]*e;for(let l=0;l!==e;++l)n[s++]=r[o+l]}return n}function Rd(r,e,t,i){let n=1,a=r[0];for(;a!==void 0&&a[i]===void 0;)a=r[n++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push(...s)),a=r[n++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=r[n++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=r[n++];while(a!==void 0)}class ja{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],a=t[i-1];i:{e:{let s;t:{r:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gm extends ja{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(e,t,i){const n=this.parameterPositions;let a=e-2,s=e+1,o=n[a],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case lh:a=e,o=2*t-i;break;case ch:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:s=e,l=2*i-t;break;case ch:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),_=m*m,g=_*m,f=-d*g+2*d*_-d*m,S=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,T=(-1-p)*g+(1.5+p)*_+.5*m,v=p*g-p*_;for(let C=0;C!==o;++C)a[C]=f*s[h+C]+S*s[c+C]+T*s[l+C]+v*s[u+C];return a}}class Wm extends ja{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}}class Xm extends ja{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let a=0,s=n-1;for(;a!==n&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&Hm(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===so,a=e.length-1;let s=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let m=0;m!==i;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[p+m]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*i,d=s*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Oa;class sa extends Di{constructor(e,t,i){super(e,t,i)}}sa.prototype.ValueTypeName="bool";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=Na;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class Cd extends Di{constructor(e,t,i,n){super(e,t,i,n)}}Cd.prototype.ValueTypeName="color";class Kn extends Di{constructor(e,t,i,n){super(e,t,i,n)}}Kn.prototype.ValueTypeName="number";class jm extends ja{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(a,0,s,c-o,s,c,l);return a}}class Zn extends Di{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new jm(this.times,this.values,this.getValueSize(),e)}}Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends Di{constructor(e,t,i){super(e,t,i)}}oa.prototype.ValueTypeName="string";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=Na;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Jn extends Di{constructor(e,t,i,n){super(e,t,i,n)}}Jn.prototype.ValueTypeName="vector";class qm{constructor(e="",t=-1,i=[],n=Af){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Km(i[s]).scale(n));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(Di.toJSON(i[a]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const a=t.length,s=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const h=Vm(l);l=Wh(l,1,h),c=Wh(c,1,h),!n&&l[0]===0&&(l.push(a),c.push(c[0])),s.push(new Kn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(a);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,m){if(d.length!==0){const _=[],g=[];Rd(d,_,g,p),_.length!==0&&m.push(new h(u,_,g))}},n=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(const m in d){const _=[],g=[];for(let f=0;f!==u[p].morphTargets.length;++f){const S=u[p];_.push(S.time),g.push(S.morphTarget===m?1:0)}n.push(new Kn(".morphTargetInfluence["+m+"]",_,g))}l=d.length*s}else{const d=".bones["+t[h].name+"]";i(Jn,d+".position",u,"pos",n),i(Zn,d+".quaternion",u,"rot",n),i(Jn,d+".scale",u,"scl",n)}}return n.length===0?null:new this(a,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ym(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kn;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return Cd;case"quaternion":return Zn;case"bool":case"boolean":return sa;case"string":return oa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Km(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ym(r.type);if(r.times===void 0){const t=[],i=[];Rd(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Tr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zm{constructor(e,t,i){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const Jm=new Zm;class la{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}la.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class $m extends Error{constructor(e,t){super(e),this.response=t}}class Pd extends la{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Tr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:i,onError:n});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Qi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){S();function S(){u.read().then(({done:T,value:v})=>{if(T)f.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let E=0,w=h.length;E<w;E++){const A=h[E];A.onProgress&&A.onProgress(C)}f.enqueue(v),S()}},T=>{f.error(T)})}}});return new Response(g)}else throw new $m(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Tr.add(e,c);const h=Qi[e];delete Qi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qm extends la{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Tr.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Fa("img");function l(){h(),Tr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){h(),n&&n(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class eg extends la{constructor(e){super(e)}load(e,t,i,n){const a=new Rt,s=new Qm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class qa extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tg extends qa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new Ue,Xh=new D,jh=new D;class bc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ig extends bc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=jn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||n!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=n,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rg extends qa{constructor(e,t,i=0,n=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=n,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qh=new Ue,va=new D,Uo=new D;class ng extends bc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Uo.copy(i.position),Uo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uo),i.updateMatrixWorld(),n.makeTranslation(-va.x,-va.y,-va.z),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}}class Ld extends qa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ec extends xd{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ag extends bc{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sg extends qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Aa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const No=new WeakMap;class og extends la{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Tr.get(e);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(c=>{if(No.has(s)===!0)n&&n(No.get(s)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(c),a.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tr.add(e,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){n&&n(c),No.set(l,c),Tr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Tr.add(e,l),a.manager.itemStart(e)}}class lg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return performance.now()}const Ac="\\[\\]\\.:\\/",hg=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",ug="[^"+Ac.replace("\\.","")+"]",dg=/((?:WC+[\/:])*)/.source.replace("WC",Rc),pg=/(WCOD+)?/.source.replace("WCOD",ug),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),gg=new RegExp("^"+dg+pg+fg+mg+"$"),_g=["material","materials","bones","map"];class vg{constructor(e,t,i){const n=i||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=i.length;n!==a;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class $e{constructor(e,t,i){this.path=t,this.parsedPath=i||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,i):new $e(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(e){const t=gg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const a=i.nodeName.substring(n+1);_g.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let a=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=vg;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Kh=new Ue;class xg{constructor(e,t,i=0,n=1/0){this.ray=new na(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return Gl(e,this,i,t),i.sort(Zh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Gl(e[n],this,i,t);return i.sort(Zh),i}}function Zh(r,e){return r.distance-e.distance}function Gl(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=r.children;for(let s=0,o=a.length;s<o;s++)Gl(a[s],e,t,!0)}}class Jh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yg extends hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $h(r,e,t,i){const n=Mg(i);switch(t){case ad:return r*e;case pc:return r*e/n.components*n.byteLength;case fc:return r*e/n.components*n.byteLength;case od:return r*e*2/n.components*n.byteLength;case mc:return r*e*2/n.components*n.byteLength;case sd:return r*e*3/n.components*n.byteLength;case _i:return r*e*4/n.components*n.byteLength;case gc:return r*e*4/n.components*n.byteLength;case Rs:case Cs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ls:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:case gl:return Math.max(r,16)*Math.max(e,8)/4;case pl:case ml:return Math.max(r,8)*Math.max(e,8)/2;case _l:case vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ds:case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ld:case Ol:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fl:case Bl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mg(r){switch(r){case zi:case id:return{byteLength:1,components:1};case La:case rd:case Xa:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case ln:case hc:case Ci:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Dd(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Tg(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Og=`#ifdef USE_IRIDESCENCE
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
#endif`,Fg=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jg=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,m_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_v=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sv=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Cv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Lv=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fv=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zv=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hv=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Gv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xv=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kv=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Qv=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Sg,alphahash_pars_fragment:bg,alphamap_fragment:Eg,alphamap_pars_fragment:wg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Pg,batching_pars_vertex:Lg,batching_vertex:Dg,begin_vertex:Ig,beginnormal_vertex:Ug,bsdfs:Ng,iridescence_fragment:Og,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Hg,color_fragment:Vg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:jg,cube_uv_reflection_fragment:qg,defaultnormal_vertex:Yg,displacementmap_pars_vertex:Kg,displacementmap_vertex:Zg,emissivemap_fragment:Jg,emissivemap_pars_fragment:$g,colorspace_fragment:Qg,colorspace_pars_fragment:e_,envmap_fragment:t_,envmap_common_pars_fragment:i_,envmap_pars_fragment:r_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:m_,envmap_vertex:a_,fog_vertex:s_,fog_pars_vertex:o_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:u_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:p_,lights_pars_begin:f_,lights_toon_fragment:g_,lights_toon_pars_fragment:__,lights_phong_fragment:v_,lights_phong_pars_fragment:x_,lights_physical_fragment:y_,lights_physical_pars_fragment:M_,lights_fragment_begin:T_,lights_fragment_maps:S_,lights_fragment_end:b_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:R_,map_fragment:C_,map_pars_fragment:P_,map_particle_fragment:L_,map_particle_pars_fragment:D_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:U_,morphinstance_vertex:N_,morphcolor_vertex:O_,morphnormal_vertex:F_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:k_,normal_fragment_maps:H_,normal_pars_fragment:V_,normal_pars_vertex:G_,normal_vertex:W_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:K_,opaque_fragment:Z_,packing:J_,premultiplied_alpha_fragment:$_,project_vertex:Q_,dithering_fragment:ev,dithering_pars_fragment:tv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:av,shadowmap_vertex:sv,shadowmask_pars_fragment:ov,skinbase_vertex:lv,skinning_pars_vertex:cv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:fv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:_v,uv_pars_fragment:vv,uv_pars_vertex:xv,uv_vertex:yv,worldpos_vertex:Mv,background_vert:Tv,background_frag:Sv,backgroundCube_vert:bv,backgroundCube_frag:Ev,cube_vert:wv,cube_frag:Av,depth_vert:Rv,depth_frag:Cv,distanceRGBA_vert:Pv,distanceRGBA_frag:Lv,equirect_vert:Dv,equirect_frag:Iv,linedashed_vert:Uv,linedashed_frag:Nv,meshbasic_vert:Ov,meshbasic_frag:Fv,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:kv,meshmatcap_frag:Hv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:jv,meshphysical_frag:qv,meshtoon_vert:Yv,meshtoon_frag:Kv,points_vert:Zv,points_frag:Jv,shadow_vert:$v,shadow_frag:Qv,sprite_vert:e0,sprite_frag:t0},ne={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Ui={basic:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zt([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zt([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zt([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:zt([ne.common,ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:zt([ne.lights,ne.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ui.physical={uniforms:zt([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ms={r:0,b:0,g:0},Wr=new Hi,i0=new Ue;function r0(r,e,t,i,n,a,s){const o=new Pe(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function m(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const C=m(T);C===null?f(o,l):C&&C.isColor&&(f(C,1),v=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(T,v){const C=m(v);C&&(C.isCubeTexture||C.mapping===Zs)?(h===void 0&&(h=new xt(new aa(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:qn(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wr.copy(v.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Wr)),h.material.toneMapped=Xe.getTransfer(C.colorSpace)!==et,(u!==C||d!==C.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new xt(new Js(2,2),new Pr({name:"BackgroundMaterial",uniforms:qn(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,v){T.getRGB(Ms,vd(r)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,v,s)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,v=1){o.set(T),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:_,addToRenderList:g,dispose:S}}function n0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,s=!1;function o(M,P,B,F,V){let q=!1;const H=u(F,B,P);a!==H&&(a=H,c(a.object)),q=p(M,F,B,V),q&&m(M,F,B,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,v(M,P,B,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,B){const F=B.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let H=q[F];return H===void 0&&(H=d(l()),q[F]=H),H}function d(M){const P=[],B=[],F=[];for(let V=0;V<t;V++)P[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,B,F){const V=a.attributes,q=P.attributes;let H=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){const te=V[G];let ce=q[G];if(ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;H++}return a.attributesNum!==H||a.index!==F}function m(M,P,B,F){const V={},q=P.attributes;let H=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){let te=q[G];te===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),V[G]=ce,H++}a.attributes=V,a.attributesNum=H,a.index=F}function _(){const M=a.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function g(M){f(M,0)}function f(M,P){const B=a.newAttributes,F=a.enabledAttributes,V=a.attributeDivisors;B[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(r.vertexAttribDivisor(M,P),V[M]=P)}function S(){const M=a.newAttributes,P=a.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==M[B]&&(r.disableVertexAttribArray(B),P[B]=0)}function T(M,P,B,F,V,q,H){H===!0?r.vertexAttribIPointer(M,P,B,V,q):r.vertexAttribPointer(M,P,B,F,V,q)}function v(M,P,B,F){_();const V=F.attributes,q=B.getAttributes(),H=P.defaultAttributeValues;for(const Z in q){const G=q[Z];if(G.location>=0){let te=V[Z];if(te===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ce=te.normalized,Se=te.itemSize,Oe=e.get(te);if(Oe===void 0)continue;const He=Oe.buffer,W=Oe.type,ie=Oe.bytesPerElement,ve=W===r.INT||W===r.UNSIGNED_INT||te.gpuType===hc;if(te.isInterleavedBufferAttribute){const oe=te.data,xe=oe.stride,Le=te.offset;if(oe.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)f(G.location+ke,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ke=0;ke<G.locationSize;ke++)g(G.location+ke);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ke=0;ke<G.locationSize;ke++)T(G.location+ke,Se/G.locationSize,W,ce,xe*ie,(Le+Se/G.locationSize*ke)*ie,ve)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)f(G.location+oe,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<G.locationSize;oe++)g(G.location+oe);r.bindBuffer(r.ARRAY_BUFFER,He);for(let oe=0;oe<G.locationSize;oe++)T(G.location+oe,Se/G.locationSize,W,ce,Se*ie,Se/G.locationSize*oe*ie,ve)}}else if(H!==void 0){const ce=H[Z];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(G.location,ce);break;case 3:r.vertexAttrib3fv(G.location,ce);break;case 4:r.vertexAttrib4fv(G.location,ce);break;default:r.vertexAttrib1fv(G.location,ce)}}}}S()}function C(){A();for(const M in i){const P=i[M];for(const B in P){const F=P[B];for(const V in F)h(F[V].object),delete F[V];delete P[B]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const B in P){const F=P[B];for(const V in F)h(F[V].object),delete F[V];delete P[B]}delete i[M.id]}function w(M){for(const P in i){const B=i[P];if(B[M.id]===void 0)continue;const F=B[M.id];for(const V in F)h(F[V].object),delete F[V];delete B[M.id]}}function A(){b(),s=!0,a!==n&&(a=n,c(a.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function a0(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)s(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function s0(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==_i&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==zi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ci&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:C,maxSamples:E}}function o0(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new vr,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=r.get(u);if(!n||m===null||m.length===0||a&&!g)a?h(null):c();else{const S=a?0:i,T=S*4;let v=f.clippingState||null;l.value=v,v=h(m,d,T,p);for(let C=0;C!==T;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let T=0,v=p;T!==_;++T,v+=4)s.copy(u[T]).applyMatrix4(S,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function l0(r){let e=new WeakMap;function t(s,o){return o===ul?s.mapping=Gn:o===dl&&(s.mapping=Wn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ul||o===dl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Am(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Ln=4,Qh=[.125,.215,.35,.446,.526,.582],$r=20,Oo=new Ec,eu=new Pe;let Fo=null,Bo=0,zo=0,ko=!1;const Kr=(1+Math.sqrt(5))/2,An=1/Kr,tu=[new D(-Kr,An,0),new D(Kr,An,0),new D(-An,0,Kr),new D(An,0,Kr),new D(0,Kr,-An),new D(0,Kr,An),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],c0=new D;class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,a={}){const{size:s=256,position:o=c0}=a;Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Bo,zo),this._renderer.xr.enabled=ko,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===Wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Xa,format:_i,colorSpace:Xt,depthBuffer:!1},n=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(a)),this._blurMaterial=u0(a,e,t)}return n}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,n,a){const s=new kt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(eu),c.toneMapping=Ar,c.autoClear=!1;const d=new Mr({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new xt(new aa,d);let m=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,m=!0):(d.color.copy(eu),m=!0);for(let g=0;g<6;g++){const f=g%3;f===0?(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+l[g],a.y,a.z)):f===1?(s.up.set(0,0,o[g]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+l[g],a.z)):(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+l[g]));const S=this._cubeSize;Ts(n,f*S,g>2?S:0,S,S),c.setRenderTarget(n),m&&c.render(p,s),c.render(e,s)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Gn||e.mapping===Wn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new xt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=tu[(n-a-1)%tu.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*$r-1),_=a/m,g=isFinite(a)?1+Math.floor(h*_):$r;g>$r&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);const f=[];let S=0;for(let w=0;w<$r;++w){const A=w/_,b=Math.exp(-A*A/2);f.push(b),w===0?S+=b:w<g&&(S+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=m,d.mipInt.value=T-i;const v=this._sizeLods[n],C=3*v*(n>T-Ln?n-T+Ln:0),E=4*(this._cubeSize-v);Ts(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Oo)}}function h0(r){const e=[],t=[],i=[];let n=r;const a=r-Ln+1+Qh.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-Ln?l=Qh[s-r+Ln-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,_=3,g=2,f=1,S=new Float32Array(_*m*p),T=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,A=E>2?0:-1,b=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];S.set(b,_*m*E),T.set(d,g*m*E);const M=[E,E,E,E,E,E];v.set(M,f*m*E)}const C=new Wi;C.setAttribute("position",new Wt(S,_)),C.setAttribute("uv",new Wt(T,g)),C.setAttribute("faceIndex",new Wt(v,f)),e.push(C),n>Ln&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iu(r,e,t){const i=new cn(r,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function u0(r,e,t){const i=new Float32Array($r),n=new D(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function ru(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function nu(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function d0(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===dl,h=l===Gn||l===Wn;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Wl(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Wl(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function p0(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&On("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function f0(r,e,t,i){const n={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,m=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let T=0,v=S.length;T<v;T+=3){const C=S[T+0],E=S[T+1],w=S[T+2];d.push(C,E,E,w,w,C)}}else if(m!==void 0){const S=m.array;_=m.version;for(let T=0,v=S.length/3-1;T<v;T+=3){const C=T+0,E=T+1,w=T+2;d.push(C,E,E,w,w,C)}}else return;const g=new(pd(d)?_d:gd)(d,1);g.version=_;const f=a.get(u);f&&e.remove(f),a.set(u,g)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function m0(r,e,t){let i;function n(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,p){r.drawElements(i,p,a,d*s),t.update(p,i,1)}function c(d,p,m){m!==0&&(r.drawElementsInstanced(i,p,a,d*s,m),t.update(p,i,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,m);let _=0;for(let g=0;g<m;g++)_+=p[g];t.update(_,i,1)}function u(d,p,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/s,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,_,0,m);let f=0;for(let S=0;S<m;S++)f+=p[S]*_[S];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function _0(r,e,t){const i=new WeakMap,n=new Ke;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let p=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let C=o.attributes.position.count*v,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*E*4*u),A=new fd(w,C,E,u);A.type=Ci,A.needsUpdate=!0;const b=v*4;for(let M=0;M<u;M++){const P=f[M],B=S[M],F=T[M],V=C*E*4*M;for(let q=0;q<P.count;q++){const H=q*b;m===!0&&(n.fromBufferAttribute(P,q),w[V+H+0]=n.x,w[V+H+1]=n.y,w[V+H+2]=n.z,w[V+H+3]=0),_===!0&&(n.fromBufferAttribute(B,q),w[V+H+4]=n.x,w[V+H+5]=n.y,w[V+H+6]=n.z,w[V+H+7]=0),g===!0&&(n.fromBufferAttribute(F,q),w[V+H+8]=n.x,w[V+H+9]=n.y,w[V+H+10]=n.z,w[V+H+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new Ce(C,E)},i.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:a}}function v0(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Id=new Rt,au=new Ad(1,1),Ud=new fd,Nd=new hm,Od=new yd,su=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function ca(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=su[n];if(a===void 0&&(a=new Float32Array(n),su[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function $s(r,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function x0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function M0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function S0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;hu.set(i),r.uniformMatrix2fv(this.addr,!1,hu),St(t,i)}}function b0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;cu.set(i),r.uniformMatrix3fv(this.addr,!1,cu),St(t,i)}}function E0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;lu.set(i),r.uniformMatrix4fv(this.addr,!1,lu),St(t,i)}}function w0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function R0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function P0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function L0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function D0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function U0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(au.compareFunction=ud,a=au):a=Id,t.setTexture2D(e||a,n)}function N0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nd,n)}function O0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Od,n)}function F0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ud,n)}function B0(r){switch(r){case 5126:return x0;case 35664:return y0;case 35665:return M0;case 35666:return T0;case 35674:return S0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}function z0(r,e){r.uniform1fv(this.addr,e)}function k0(r,e){const t=ca(e,this.size,2);r.uniform2fv(this.addr,t)}function H0(r,e){const t=ca(e,this.size,3);r.uniform3fv(this.addr,t)}function V0(r,e){const t=ca(e,this.size,4);r.uniform4fv(this.addr,t)}function G0(r,e){const t=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function W0(r,e){const t=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function X0(r,e){const t=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function j0(r,e){r.uniform1iv(this.addr,e)}function q0(r,e){r.uniform2iv(this.addr,e)}function Y0(r,e){r.uniform3iv(this.addr,e)}function K0(r,e){r.uniform4iv(this.addr,e)}function Z0(r,e){r.uniform1uiv(this.addr,e)}function J0(r,e){r.uniform2uiv(this.addr,e)}function $0(r,e){r.uniform3uiv(this.addr,e)}function Q0(r,e){r.uniform4uiv(this.addr,e)}function ex(r,e,t){const i=this.cache,n=e.length,a=$s(t,n);Tt(i,a)||(r.uniform1iv(this.addr,a),St(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Id,a[s])}function tx(r,e,t){const i=this.cache,n=e.length,a=$s(t,n);Tt(i,a)||(r.uniform1iv(this.addr,a),St(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Nd,a[s])}function ix(r,e,t){const i=this.cache,n=e.length,a=$s(t,n);Tt(i,a)||(r.uniform1iv(this.addr,a),St(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Od,a[s])}function rx(r,e,t){const i=this.cache,n=e.length,a=$s(t,n);Tt(i,a)||(r.uniform1iv(this.addr,a),St(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ud,a[s])}function nx(r){switch(r){case 5126:return z0;case 35664:return k0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return j0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return J0;case 36295:return $0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}class ax{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class sx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}}class ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function uu(r,e){r.seq.push(e),r.map[e.id]=e}function lx(r,e,t){const i=r.name,n=i.length;for(Ho.lastIndex=0;;){const a=Ho.exec(i),s=Ho.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){uu(t,c===void 0?new ax(o,r,e):new sx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new ox(o),uu(t,h)),t=h}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);lx(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function du(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const cx=37297;let hx=0;function ux(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const pu=new Ne;function dx(r){Xe._getMatrix(pu,Xe.workingColorSpace,r);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Bs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fu(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+ux(r.getShaderSource(e),s)}else return n}function px(r,e){const t=dx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fx(r,e){let t;switch(e){case yf:t="Linear";break;case Mf:t="Reinhard";break;case Tf:t="Cineon";break;case Qu:t="ACESFilmic";break;case bf:t="AgX";break;case Ef:t="Neutral";break;case Sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new D;function mx(){Xe.getLuminanceCoefficients(Ss);const r=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function _x(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vx(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Ta(r){return r!==""}function mu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(r){return r.replace(xx,Mx)}const yx=new Map;function Mx(r,e){let t=Be[e];if(t===void 0){const i=yx.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(r){return r.replace(Tx,Sx)}function Sx(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function vu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$p?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gn:case Wn:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wn:e="ENVMAP_MODE_REFRACTION";break}return e}function Ax(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $u:e="ENVMAP_BLENDING_MULTIPLY";break;case vf:e="ENVMAP_BLENDING_MIX";break;case xf:e="ENVMAP_BLENDING_ADD";break}return e}function Rx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cx(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=bx(t),c=Ex(t),h=wx(t),u=Ax(t),d=Rx(t),p=gx(t),m=_x(a),_=n.createProgram();let g,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ta).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ta).join(`
`),f.length>0&&(f+=`
`)):(g=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),f=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ar?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,px("linearToOutputTexel",t.outputColorSpace),mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),s=Xl(s),s=mu(s,t),s=gu(s,t),o=Xl(o),o=mu(o,t),o=gu(o,t),s=_u(s),o=_u(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=S+g+s,v=S+f+o,C=du(n,n.VERTEX_SHADER,T),E=du(n,n.FRAGMENT_SHADER,v);n.attachShader(_,C),n.attachShader(_,E),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(C).trim(),V=n.getShaderInfoLog(E).trim();let q=!0,H=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,C,E);else{const Z=fu(n,C,"vertex"),G=fu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(H=!1);H&&(P.diagnostics={runnable:q,programLog:B,vertexShader:{log:F,prefix:g},fragmentShader:{log:V,prefix:f}})}n.deleteShader(C),n.deleteShader(E),A=new Is(n,_),b=vx(n,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,cx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let Px=0;class Lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dx(e),t.set(e,i)),i}}class Dx{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}}function Ix(r,e,t,i,n,a,s){const o=new xc,l=new Lx,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,B,F){const V=B.fog,q=F.geometry,H=b.isMeshStandardMaterial?B.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=Z&&Z.mapping===Zs?Z.image.height:null,te=m[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Oe=0;q.morphAttributes.position!==void 0&&(Oe=1),q.morphAttributes.normal!==void 0&&(Oe=2),q.morphAttributes.color!==void 0&&(Oe=3);let He,W,ie,ve;if(te){const Ze=Ui[te];He=Ze.vertexShader,W=Ze.fragmentShader}else He=b.vertexShader,W=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),ve=l.getFragmentShaderID(b);const oe=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,ke=F.isBatchedMesh===!0,ot=!!b.map,je=!!b.matcap,bt=!!Z,L=!!b.aoMap,Ot=!!b.lightMap,Ye=!!b.bumpMap,at=!!b.normalMap,ge=!!b.displacementMap,qe=!!b.emissiveMap,Me=!!b.metalnessMap,Fe=!!b.roughnessMap,yt=b.anisotropy>0,R=b.clearcoat>0,x=b.dispersion>0,O=b.iridescence>0,X=b.sheen>0,Y=b.transmission>0,j=yt&&!!b.anisotropyMap,ye=R&&!!b.clearcoatMap,ae=R&&!!b.clearcoatNormalMap,_e=R&&!!b.clearcoatRoughnessMap,ue=O&&!!b.iridescenceMap,J=O&&!!b.iridescenceThicknessMap,he=X&&!!b.sheenColorMap,De=X&&!!b.sheenRoughnessMap,be=!!b.specularMap,re=!!b.specularColorMap,Ie=!!b.specularIntensityMap,I=Y&&!!b.transmissionMap,se=Y&&!!b.thicknessMap,$=!!b.gradientMap,me=!!b.alphaMap,ee=b.alphaTest>0,K=!!b.alphaHash,pe=!!b.extensions;let Ee=Ar;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const Et={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:W,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ke,batchingColor:ke&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Xt,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:je,envMap:bt,envMapMode:bt&&Z.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Ot,bumpMap:Ye,normalMap:at,displacementMap:d&&ge,emissiveMap:qe,normalMapObjectSpace:at&&b.normalMapType===Lf,normalMapTangentSpace:at&&b.normalMapType===hd,metalnessMap:Me,roughnessMap:Fe,anisotropy:yt,anisotropyMap:j,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:x,iridescence:O,iridescenceMap:ue,iridescenceThicknessMap:J,sheen:X,sheenColorMap:he,sheenRoughnessMap:De,specularMap:be,specularColorMap:re,specularIntensityMap:Ie,transmission:Y,transmissionMap:I,thicknessMap:se,gradientMap:$,opaque:b.transparent===!1&&b.blending===Nn&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:b.combine,mapUv:ot&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:Ot&&_(b.lightMap.channel),bumpMapUv:Ye&&_(b.bumpMap.channel),normalMapUv:at&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:qe&&_(b.emissiveMap.channel),metalnessMapUv:Me&&_(b.metalnessMap.channel),roughnessMapUv:Fe&&_(b.roughnessMap.channel),anisotropyMapUv:j&&_(b.anisotropyMap.channel),clearcoatMapUv:ye&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(b.sheenRoughnessMap.channel),specularMapUv:be&&_(b.specularMap.channel),specularColorMapUv:re&&_(b.specularColorMap.channel),specularIntensityMapUv:Ie&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:se&&_(b.thicknessMap.channel),alphaMapUv:me&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(at||yt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(ot||me),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:qe&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ni,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&b.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(M,b),T(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const M=m[b.type];let P;if(M){const B=Ui[M];P=Sm.clone(B.uniforms)}else P=b.uniforms;return P}function C(b,M){let P;for(let B=0,F=h.length;B<F;B++){const V=h[B];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Cx(r,M,b,a),h.push(P)),P}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function Ux(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function Nx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yu(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(u,d,p,m,_,g){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function o(u,d,p,m,_,g){const f=s(u,d,p,m,_,g);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,m,_,g){const f=s(u,d,p,m,_,g);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Nx),i.length>1&&i.sort(d||xu),n.length>1&&n.sort(d||xu)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function Ox(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new yu,r.set(i,[s])):n>=a.length?(s=new yu,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Bx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zx=0;function kx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hx(r){const e=new Fx,t=Bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,a=new Ue,s=new Ue;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,S=0,T=0,v=0,C=0,E=0,w=0;c.sort(kx);for(let b=0,M=c.length;b<M;b++){const P=c[b],B=P.color,F=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],F);w++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(B).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const Z=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(B).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=H,g++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=H,m++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[f]=H,f++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==p||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==f||A.numDirectionalShadows!==S||A.numPointShadows!==T||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=v+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,A.directionalLength=p,A.pointLength=m,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=f,A.numDirectionalShadows=S,A.numPointShadows=T,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=w,i.version=zx++)}function l(c,h){let u=0,d=0,p=0,m=0,_=0;const g=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const T=c[f];if(T.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),u++}else if(T.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),s.identity(),a.copy(T.matrixWorld),a.premultiply(g),s.extractRotation(a),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),m++}else if(T.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Mu(r){const e=new Hx(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Vx(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Mu(r),e.set(n,[o])):a>=s.length?(o=new Mu(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;function Xx(r,e,t){let i=new Tc;const n=new Ce,a=new Ce,s=new Ke,o=new zm({depthPacking:Pf}),l=new km,c={},h=t.maxTextureSize,u={[lr]:Vt,[Vt]:lr,[Ni]:Ni},d=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Gx,fragmentShader:Wx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Wi;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let f=this.type;this.render=function(E,w,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),B=r.state;B.setBlending(wr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==er&&this.type===er,V=f===er&&this.type!==er;for(let q=0,H=E.length;q<H;q++){const Z=E[q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const te=G.getFrameExtents();if(n.multiply(te),a.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/te.x),n.x=a.x*te.x,G.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/te.y),n.y=a.y*te.y,G.mapSize.y=a.y)),G.map===null||F===!0||V===!0){const Se=this.type!==er?{minFilter:Gt,magFilter:Gt}:{};G.map!==null&&G.map.dispose(),G.map=new cn(n.x,n.y,Se),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ce=G.getViewportCount();for(let Se=0;Se<ce;Se++){const Oe=G.getViewport(Se);s.set(a.x*Oe.x,a.y*Oe.y,a.x*Oe.z,a.y*Oe.w),B.viewport(s),G.updateMatrices(Z,Se),i=G.getFrustum(),v(w,A,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===er&&S(G,A),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,r.setRenderTarget(b,M,P)};function S(E,w){const A=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cn(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,A,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,A,p,_,null)}function T(E,w,A,b){let M=null;const P=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=A.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=M.uuid,F=w.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let q=V[F];q===void 0&&(q=M.clone(),V[F]=q,w.addEventListener("dispose",C)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,b===er?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=r.properties.get(M);B.light=A}return M}function v(E,w,A,b,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===er)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const B=e.update(E),F=E.material;if(Array.isArray(F)){const V=B.groups;for(let q=0,H=V.length;q<H;q++){const Z=V[q],G=F[Z.materialIndex];if(G&&G.visible){const te=T(E,G,b,M);E.onBeforeShadow(r,E,w,A,B,te,Z),r.renderBufferDirect(A,null,B,te,E,Z),E.onAfterShadow(r,E,w,A,B,te,Z)}}}else if(F.visible){const V=T(E,F,b,M);E.onBeforeShadow(r,E,w,A,B,V,null),r.renderBufferDirect(A,null,B,V,E,null),E.onAfterShadow(r,E,w,A,B,V,null)}}const P=E.children;for(let B=0,F=P.length;B<F;B++)v(P[B],w,A,b,M)}function C(E){E.target.removeEventListener("dispose",C);for(const w in c){const A=c[w],b=E.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const jx={[nl]:al,[sl]:cl,[ol]:hl,[Vn]:ll,[al]:nl,[cl]:sl,[hl]:ol,[ll]:Vn};function qx(r,e){function t(){let I=!1;const se=new Ke;let $=null;const me=new Ke(0,0,0,0);return{setMask:function(ee){$!==ee&&!I&&(r.colorMask(ee,ee,ee,ee),$=ee)},setLocked:function(ee){I=ee},setClear:function(ee,K,pe,Ee,Et){Et===!0&&(ee*=Ee,K*=Ee,pe*=Ee),se.set(ee,K,pe,Ee),me.equals(se)===!1&&(r.clearColor(ee,K,pe,Ee),me.copy(se))},reset:function(){I=!1,$=null,me.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,$=null,me=null,ee=null;return{setReversed:function(K){if(se!==K){const pe=e.get("EXT_clip_control");K?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),se=K;const Ee=ee;ee=null,this.setClear(Ee)}},getReversed:function(){return se},setTest:function(K){K?oe(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(K){$!==K&&!I&&(r.depthMask(K),$=K)},setFunc:function(K){if(se&&(K=jx[K]),me!==K){switch(K){case nl:r.depthFunc(r.NEVER);break;case al:r.depthFunc(r.ALWAYS);break;case sl:r.depthFunc(r.LESS);break;case Vn:r.depthFunc(r.LEQUAL);break;case ol:r.depthFunc(r.EQUAL);break;case ll:r.depthFunc(r.GEQUAL);break;case cl:r.depthFunc(r.GREATER);break;case hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=K}},setLocked:function(K){I=K},setClear:function(K){ee!==K&&(se&&(K=1-K),r.clearDepth(K),ee=K)},reset:function(){I=!1,$=null,me=null,ee=null,se=!1}}}function n(){let I=!1,se=null,$=null,me=null,ee=null,K=null,pe=null,Ee=null,Et=null;return{setTest:function(Ze){I||(Ze?oe(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!I&&(r.stencilMask(Ze),se=Ze)},setFunc:function(Ze,Mi,qi){($!==Ze||me!==Mi||ee!==qi)&&(r.stencilFunc(Ze,Mi,qi),$=Ze,me=Mi,ee=qi)},setOp:function(Ze,Mi,qi){(K!==Ze||pe!==Mi||Ee!==qi)&&(r.stencilOp(Ze,Mi,qi),K=Ze,pe=Mi,Ee=qi)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Et!==Ze&&(r.clearStencil(Ze),Et=Ze)},reset:function(){I=!1,se=null,$=null,me=null,ee=null,K=null,pe=null,Ee=null,Et=null}}}const a=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,S=null,T=null,v=null,C=null,E=null,w=new Pe(0,0,0),A=0,b=!1,M=null,P=null,B=null,F=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Z>=2);let te=null,ce={};const Se=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),He=new Ke().fromArray(Se),W=new Ke().fromArray(Oe);function ie(I,se,$,me){const ee=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<$;pe++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(se+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return K}const ve={};ve[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),s.setFunc(Vn),Ye(!1),at(ih),oe(r.CULL_FACE),L(wr);function oe(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function xe(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Le(I,se){return u[I]!==se?(r.bindFramebuffer(I,se),u[I]=se,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function ke(I,se){let $=p,me=!1;if(I){$=d.get(se),$===void 0&&($=[],d.set(se,$));const ee=I.textures;if($.length!==ee.length||$[0]!==r.COLOR_ATTACHMENT0){for(let K=0,pe=ee.length;K<pe;K++)$[K]=r.COLOR_ATTACHMENT0+K;$.length=ee.length,me=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,me=!0);me&&r.drawBuffers($)}function ot(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const je={[Jr]:r.FUNC_ADD,[ef]:r.FUNC_SUBTRACT,[tf]:r.FUNC_REVERSE_SUBTRACT};je[rf]=r.MIN,je[nf]=r.MAX;const bt={[af]:r.ZERO,[sf]:r.ONE,[of]:r.SRC_COLOR,[il]:r.SRC_ALPHA,[pf]:r.SRC_ALPHA_SATURATE,[uf]:r.DST_COLOR,[cf]:r.DST_ALPHA,[lf]:r.ONE_MINUS_SRC_COLOR,[rl]:r.ONE_MINUS_SRC_ALPHA,[df]:r.ONE_MINUS_DST_COLOR,[hf]:r.ONE_MINUS_DST_ALPHA,[ff]:r.CONSTANT_COLOR,[mf]:r.ONE_MINUS_CONSTANT_COLOR,[gf]:r.CONSTANT_ALPHA,[_f]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,se,$,me,ee,K,pe,Ee,Et,Ze){if(I===wr){_===!0&&(xe(r.BLEND),_=!1);return}if(_===!1&&(oe(r.BLEND),_=!0),I!==Qp){if(I!==g||Ze!==b){if((f!==Jr||v!==Jr)&&(r.blendEquation(r.FUNC_ADD),f=Jr,v=Jr),Ze)switch(I){case Nn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rh:r.blendFunc(r.ONE,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ah:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Nn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ah:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,T=null,C=null,E=null,w.set(0,0,0),A=0,g=I,b=Ze}return}ee=ee||se,K=K||$,pe=pe||me,(se!==f||ee!==v)&&(r.blendEquationSeparate(je[se],je[ee]),f=se,v=ee),($!==S||me!==T||K!==C||pe!==E)&&(r.blendFuncSeparate(bt[$],bt[me],bt[K],bt[pe]),S=$,T=me,C=K,E=pe),(Ee.equals(w)===!1||Et!==A)&&(r.blendColor(Ee.r,Ee.g,Ee.b,Et),w.copy(Ee),A=Et),g=I,b=!1}function Ot(I,se){I.side===Ni?xe(r.CULL_FACE):oe(r.CULL_FACE);let $=I.side===Vt;se&&($=!$),Ye($),I.blending===Nn&&I.transparent===!1?L(wr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);const me=I.stencilWrite;o.setTest(me),me&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){M!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),M=I)}function at(I){I!==Zp?(oe(r.CULL_FACE),I!==P&&(I===ih?r.cullFace(r.BACK):I===Jp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),P=I}function ge(I){I!==B&&(H&&r.lineWidth(I),B=I)}function qe(I,se,$){I?(oe(r.POLYGON_OFFSET_FILL),(F!==se||V!==$)&&(r.polygonOffset(se,$),F=se,V=$)):xe(r.POLYGON_OFFSET_FILL)}function Me(I){I?oe(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function Fe(I){I===void 0&&(I=r.TEXTURE0+q-1),te!==I&&(r.activeTexture(I),te=I)}function yt(I,se,$){$===void 0&&(te===null?$=r.TEXTURE0+q-1:$=te);let me=ce[$];me===void 0&&(me={type:void 0,texture:void 0},ce[$]=me),(me.type!==I||me.texture!==se)&&(te!==$&&(r.activeTexture($),te=$),r.bindTexture(I,se||ve[I]),me.type=I,me.texture=se)}function R(){const I=ce[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){He.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function De(I){W.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function be(I,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let me=$.get(I);me===void 0&&(me=r.getUniformBlockIndex(se,I.name),$.set(I,me))}function re(I,se){const $=c.get(se).get(I);l.get(se)!==$&&(r.uniformBlockBinding(se,$,I.__bindingPointIndex),l.set(se,$))}function Ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,ce={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,S=null,T=null,v=null,C=null,E=null,w=new Pe(0,0,0),A=0,b=!1,M=null,P=null,B=null,F=null,V=null,He.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:oe,disable:xe,bindFramebuffer:Le,drawBuffers:ke,useProgram:ot,setBlending:L,setMaterial:Ot,setFlipSided:Ye,setCullFace:at,setLineWidth:ge,setPolygonOffset:qe,setScissorTest:Me,activeTexture:Fe,bindTexture:yt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:ue,texImage3D:J,updateUBOMapping:be,uniformBlockBinding:re,texStorage2D:ae,texStorage3D:_e,texSubImage2D:X,texSubImage3D:Y,compressedTexSubImage2D:j,compressedTexSubImage3D:ye,scissor:he,viewport:De,reset:Ie}}function Yx(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,x){return p?new OffscreenCanvas(R,x):Fa("canvas")}function _(R,x,O){let X=1;const Y=yt(R);if((Y.width>O||Y.height>O)&&(X=O/Math.max(Y.width,Y.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(X*Y.width),ye=Math.floor(X*Y.height);u===void 0&&(u=m(j,ye));const ae=x?m(j,ye):u;return ae.width=j,ae.height=ye,ae.getContext("2d").drawImage(R,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+j+"x"+ye+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function g(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,x,O,X,Y=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),x===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),x===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),x===r.RGBA){const ye=Y?Bs:Xe.getTransfer(X);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=ye===et?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,x){let O;return R?x===null||x===ln||x===Da?O=r.DEPTH24_STENCIL8:x===Ci?O=r.DEPTH32F_STENCIL8:x===La&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ln||x===Da?O=r.DEPTH_COMPONENT24:x===Ci?O=r.DEPTH_COMPONENT32F:x===La&&(O=r.DEPTH_COMPONENT16),O}function C(R,x){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==ai?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){const x=R.target;x.removeEventListener("dispose",E),A(x),x.isVideoTexture&&h.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),M(x)}function A(R){const x=i.get(R);if(x.__webglInit===void 0)return;const O=R.source,X=d.get(O);if(X){const Y=X[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(R),Object.keys(X).length===0&&d.delete(O)}i.remove(R)}function b(R){const x=i.get(R);r.deleteTexture(x.__webglTexture);const O=R.source,X=d.get(O);delete X[x.__cacheKey],s.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Y=0;Y<x.__webglFramebuffer[X].length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[X][Y]);else r.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)r.deleteFramebuffer(x.__webglFramebuffer[X]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=R.textures;for(let X=0,Y=O.length;X<Y;X++){const j=i.get(O[X]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(O[X])}i.remove(R)}let P=0;function B(){P=0}function F(){const R=P;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function V(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function q(R,x){const O=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,R,x);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function H(R,x){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ve(O,R,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function Z(R,x){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ve(O,R,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function G(R,x){const O=i.get(R);if(R.version>0&&O.__version!==R.version){oe(O,R,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const te={[Xn]:r.REPEAT,[yr]:r.CLAMP_TO_EDGE,[Fs]:r.MIRRORED_REPEAT},ce={[Gt]:r.NEAREST,[td]:r.NEAREST_MIPMAP_NEAREST,[Ma]:r.NEAREST_MIPMAP_LINEAR,[ai]:r.LINEAR,[As]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},Se={[Df]:r.NEVER,[Bf]:r.ALWAYS,[If]:r.LESS,[ud]:r.LEQUAL,[Uf]:r.EQUAL,[Ff]:r.GEQUAL,[Nf]:r.GREATER,[Of]:r.NOTEQUAL};function Oe(R,x){if(x.type===Ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ai||x.magFilter===As||x.magFilter===Ma||x.magFilter===nr||x.minFilter===ai||x.minFilter===As||x.minFilter===Ma||x.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ce[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==Ma&&x.minFilter!==nr||x.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function He(R,x){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));const X=x.source;let Y=d.get(X);Y===void 0&&(Y={},d.set(X,Y));const j=V(x);if(j!==R.__cacheKey){Y[j]===void 0&&(Y[j]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Y[j].usedTimes++;const ye=Y[R.__cacheKey];ye!==void 0&&(Y[R.__cacheKey].usedTimes--,ye.usedTimes===0&&b(x)),R.__cacheKey=j,R.__webglTexture=Y[j].texture}return O}function W(R,x,O){return Math.floor(Math.floor(R/O)/x)}function ie(R,x,O,X){const Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{Y.sort((ue,J)=>ue.start-J.start);let j=0;for(let ue=1;ue<Y.length;ue++){const J=Y[j],he=Y[ue],De=J.start+J.count,be=W(he.start,x.width,4),re=W(J.start,x.width,4);he.start<=De+1&&be===re&&W(he.start+he.count-1,x.width,4)===be?J.count=Math.max(J.count,he.start+he.count-J.start):(++j,Y[j]=he)}Y.length=j+1;const ye=r.getParameter(r.UNPACK_ROW_LENGTH),ae=r.getParameter(r.UNPACK_SKIP_PIXELS),_e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let ue=0,J=Y.length;ue<J;ue++){const he=Y[ue],De=Math.floor(he.start/4),be=Math.ceil(he.count/4),re=De%x.width,Ie=Math.floor(De/x.width),I=be;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(r.TEXTURE_2D,0,re,Ie,I,1,O,X,x.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ye),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,_e)}}function ve(R,x,O){let X=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=r.TEXTURE_3D);const Y=He(R,x),j=x.source;t.bindTexture(X,R.__webglTexture,r.TEXTURE0+O);const ye=i.get(j);if(j.version!==ye.__version||Y===!0){t.activeTexture(r.TEXTURE0+O);const ae=Xe.getPrimaries(Xe.workingColorSpace),_e=x.colorSpace===xr?null:Xe.getPrimaries(x.colorSpace),ue=x.colorSpace===xr||ae===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let J=_(x.image,!1,n.maxTextureSize);J=Fe(x,J);const he=a.convert(x.format,x.colorSpace),De=a.convert(x.type);let be=T(x.internalFormat,he,De,x.colorSpace,x.isVideoTexture);Oe(X,x);let re;const Ie=x.mipmaps,I=x.isVideoTexture!==!0,se=ye.__version===void 0||Y===!0,$=j.dataReady,me=C(x,J);if(x.isDepthTexture)be=v(x.format===Ua,x.type),se&&(I?t.texStorage2D(r.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,be,J.width,J.height,0,he,De,null));else if(x.isDataTexture)if(Ie.length>0){I&&se&&t.texStorage2D(r.TEXTURE_2D,me,be,Ie[0].width,Ie[0].height);for(let ee=0,K=Ie.length;ee<K;ee++)re=Ie[ee],I?$&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,re.width,re.height,he,De,re.data):t.texImage2D(r.TEXTURE_2D,ee,be,re.width,re.height,0,he,De,re.data);x.generateMipmaps=!1}else I?(se&&t.texStorage2D(r.TEXTURE_2D,me,be,J.width,J.height),$&&ie(x,J,he,De)):t.texImage2D(r.TEXTURE_2D,0,be,J.width,J.height,0,he,De,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,be,Ie[0].width,Ie[0].height,J.depth);for(let ee=0,K=Ie.length;ee<K;ee++)if(re=Ie[ee],x.format!==_i)if(he!==null)if(I){if($)if(x.layerUpdates.size>0){const pe=$h(re.width,re.height,x.format,x.type);for(const Ee of x.layerUpdates){const Et=re.data.subarray(Ee*pe/re.data.BYTES_PER_ELEMENT,(Ee+1)*pe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ee,re.width,re.height,1,he,Et)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,J.depth,he,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,be,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?$&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,J.depth,he,De,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,be,re.width,re.height,J.depth,0,he,De,re.data)}else{I&&se&&t.texStorage2D(r.TEXTURE_2D,me,be,Ie[0].width,Ie[0].height);for(let ee=0,K=Ie.length;ee<K;ee++)re=Ie[ee],x.format!==_i?he!==null?I?$&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,re.width,re.height,he,re.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,be,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?$&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,re.width,re.height,he,De,re.data):t.texImage2D(r.TEXTURE_2D,ee,be,re.width,re.height,0,he,De,re.data)}else if(x.isDataArrayTexture)if(I){if(se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,be,J.width,J.height,J.depth),$)if(x.layerUpdates.size>0){const ee=$h(J.width,J.height,x.format,x.type);for(const K of x.layerUpdates){const pe=J.data.subarray(K*ee/J.data.BYTES_PER_ELEMENT,(K+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,he,De,pe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,De,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,he,De,J.data);else if(x.isData3DTexture)I?(se&&t.texStorage3D(r.TEXTURE_3D,me,be,J.width,J.height,J.depth),$&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,De,J.data)):t.texImage3D(r.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,he,De,J.data);else if(x.isFramebufferTexture){if(se)if(I)t.texStorage2D(r.TEXTURE_2D,me,be,J.width,J.height);else{let ee=J.width,K=J.height;for(let pe=0;pe<me;pe++)t.texImage2D(r.TEXTURE_2D,pe,be,ee,K,0,he,De,null),ee>>=1,K>>=1}}else if(Ie.length>0){if(I&&se){const ee=yt(Ie[0]);t.texStorage2D(r.TEXTURE_2D,me,be,ee.width,ee.height)}for(let ee=0,K=Ie.length;ee<K;ee++)re=Ie[ee],I?$&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,he,De,re):t.texImage2D(r.TEXTURE_2D,ee,be,he,De,re);x.generateMipmaps=!1}else if(I){if(se){const ee=yt(J);t.texStorage2D(r.TEXTURE_2D,me,be,ee.width,ee.height)}$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,De,J)}else t.texImage2D(r.TEXTURE_2D,0,be,he,De,J);g(x)&&f(X),ye.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function oe(R,x,O){if(x.image.length!==6)return;const X=He(R,x),Y=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const j=i.get(Y);if(Y.version!==j.__version||X===!0){t.activeTexture(r.TEXTURE0+O);const ye=Xe.getPrimaries(Xe.workingColorSpace),ae=x.colorSpace===xr?null:Xe.getPrimaries(x.colorSpace),_e=x.colorSpace===xr||ye===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!ue&&!J?he[K]=_(x.image[K],!0,n.maxCubemapSize):he[K]=J?x.image[K].image:x.image[K],he[K]=Fe(x,he[K]);const De=he[0],be=a.convert(x.format,x.colorSpace),re=a.convert(x.type),Ie=T(x.internalFormat,be,re,x.colorSpace),I=x.isVideoTexture!==!0,se=j.__version===void 0||X===!0,$=Y.dataReady;let me=C(x,De);Oe(r.TEXTURE_CUBE_MAP,x);let ee;if(ue){I&&se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ie,De.width,De.height);for(let K=0;K<6;K++){ee=he[K].mipmaps;for(let pe=0;pe<ee.length;pe++){const Ee=ee[pe];x.format!==_i?be!==null?I?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Ee.width,Ee.height,be,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Ee.width,Ee.height,be,re,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ie,Ee.width,Ee.height,0,be,re,Ee.data)}}}else{if(ee=x.mipmaps,I&&se){ee.length>0&&me++;const K=yt(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(J){I?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,be,re,he[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,he[K].width,he[K].height,0,be,re,he[K].data);for(let pe=0;pe<ee.length;pe++){const Ee=ee[pe].image[K].image;I?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Ee.width,Ee.height,be,re,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ie,Ee.width,Ee.height,0,be,re,Ee.data)}}else{I?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,re,he[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,be,re,he[K]);for(let pe=0;pe<ee.length;pe++){const Ee=ee[pe];I?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,be,re,Ee.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ie,be,re,Ee.image[K])}}}g(x)&&f(r.TEXTURE_CUBE_MAP),j.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function xe(R,x,O,X,Y,j){const ye=a.convert(O.format,O.colorSpace),ae=a.convert(O.type),_e=T(O.internalFormat,ye,ae,O.colorSpace),ue=i.get(x),J=i.get(O);if(J.__renderTarget=x,!ue.__hasExternalTextures){const he=Math.max(1,x.width>>j),De=Math.max(1,x.height>>j);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,j,_e,he,De,x.depth,0,ye,ae,null):t.texImage2D(Y,j,_e,he,De,0,ye,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,Y,J.__webglTexture,0,ge(x)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,Y,J.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(R,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const X=x.depthTexture,Y=X&&X.isDepthTexture?X.type:null,j=v(x.stencilBuffer,Y),ye=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=ge(x);qe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,j,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,j,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const X=x.textures;for(let Y=0;Y<X.length;Y++){const j=X[Y],ye=a.convert(j.format,j.colorSpace),ae=a.convert(j.type),_e=T(j.internalFormat,ye,ae,j.colorSpace),ue=ge(x);O&&qe(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,_e,x.width,x.height):qe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,_e,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,_e,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const X=O.__webglTexture,Y=ge(x);if(x.depthTexture.format===Ia)qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else if(x.depthTexture.format===Ua)qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ot(R){const x=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Y)};X.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=X}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=R.texture.mipmaps;X&&X.length>0?ke(x.__webglFramebuffer[0],R):ke(x.__webglFramebuffer,R)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=r.createRenderbuffer(),Le(x.__webglDepthbuffer[X],R,!1);else{const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,j)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Le(x.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(R,x,O){const X=i.get(R);x!==void 0&&xe(X.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ot(R)}function bt(R){const x=R.texture,O=i.get(R),X=i.get(x);R.addEventListener("dispose",w);const Y=R.textures,j=R.isWebGLCubeRenderTarget===!0,ye=Y.length>1;if(ye||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=x.version,s.memory.textures++),j){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let _e=0;_e<x.mipmaps.length;_e++)O.__webglFramebuffer[ae][_e]=r.createFramebuffer()}else O.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)O.__webglFramebuffer[ae]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ae=0,_e=Y.length;ae<_e;ae++){const ue=i.get(Y[ae]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),s.memory.textures++)}if(R.samples>0&&qe(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){const _e=Y[ae];O.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const ue=a.convert(_e.format,_e.colorSpace),J=a.convert(_e.type),he=T(_e.internalFormat,ue,J,_e.colorSpace,R.isXRRenderTarget===!0),De=ge(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,he,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)xe(O.__webglFramebuffer[ae][_e],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else xe(O.__webglFramebuffer[ae],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(x)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,_e=Y.length;ae<_e;ae++){const ue=Y[ae],J=i.get(ue);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Oe(r.TEXTURE_2D,ue),xe(O.__webglFramebuffer,R,ue,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),g(ue)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),Oe(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)xe(O.__webglFramebuffer[_e],R,x,r.COLOR_ATTACHMENT0,ae,_e);else xe(O.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,ae,0);g(x)&&f(ae),t.unbindTexture()}R.depthBuffer&&ot(R)}function L(R){const x=R.textures;for(let O=0,X=x.length;O<X;O++){const Y=x[O];if(g(Y)){const j=S(R),ye=i.get(Y).__webglTexture;t.bindTexture(j,ye),f(j),t.unbindTexture()}}}const Ot=[],Ye=[];function at(R){if(R.samples>0){if(qe(R)===!1){const x=R.textures,O=R.width,X=R.height;let Y=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=i.get(R),ae=x.length>1;if(ae)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const J=i.get(x[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,O,X,0,0,O,X,Y,r.NEAREST),l===!0&&(Ot.length=0,Ye.length=0,Ot.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ot.push(j),Ye.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const J=i.get(x[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,J,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ge(R){return Math.min(n.maxSamples,R.samples)}function qe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(R){const x=s.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Fe(R,x){const O=R.colorSpace,X=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Xt&&O!==xr&&(Xe.getTransfer(O)===et?(X!==_i||Y!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=qe}function Kx(r,e){function t(i,n=xr){let a;const s=Xe.getTransfer(n);if(i===zi)return r.UNSIGNED_BYTE;if(i===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===dc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===id)return r.BYTE;if(i===rd)return r.SHORT;if(i===La)return r.UNSIGNED_SHORT;if(i===hc)return r.INT;if(i===ln)return r.UNSIGNED_INT;if(i===Ci)return r.FLOAT;if(i===Xa)return r.HALF_FLOAT;if(i===ad)return r.ALPHA;if(i===sd)return r.RGB;if(i===_i)return r.RGBA;if(i===Ia)return r.DEPTH_COMPONENT;if(i===Ua)return r.DEPTH_STENCIL;if(i===pc)return r.RED;if(i===fc)return r.RED_INTEGER;if(i===od)return r.RG;if(i===mc)return r.RG_INTEGER;if(i===gc)return r.RGBA_INTEGER;if(i===Rs||i===Cs||i===Ps||i===Ls)if(s===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===fl||i===ml||i===gl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===xl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===_l||i===vl)return s===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===xl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===Ml||i===Tl||i===Sl||i===bl||i===El||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return s===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ds||i===Ul||i===Nl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ds)return s===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ld||i===Ol||i===Fl||i===Bl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ds)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Rt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pr({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends hn{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null;const _=new $x,g=t.getContextAttributes();let f=null,S=null;const T=[],v=[],C=new Ce;let E=null;const w=new kt;w.viewport=new Ke;const A=new kt;A.viewport=new Ke;const b=[w,A],M=new lg;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=T[W];return ie===void 0&&(ie=new Ro,T[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=T[W];return ie===void 0&&(ie=new Ro,T[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=T[W];return ie===void 0&&(ie=new Ro,T[W]=ie),ie.getHandSpace()};function F(W){const ie=v.indexOf(W.inputSource);if(ie===-1)return;const ve=T[ie];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||s),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",q);for(let W=0;W<T.length;W++){const ie=v[W];ie!==null&&(v[W]=null,T[W].disconnect(ie))}P=null,B=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,n=null,S=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",V),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ve=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Ua:Ia,ve=g.stencil?Da:ln);const xe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(xe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new cn(d.textureWidth,d.textureHeight,{format:_i,type:zi,depthTexture:new Ad(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new cn(p.framebufferWidth,p.framebufferHeight,{format:_i,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let ie=0;ie<W.removed.length;ie++){const ve=W.removed[ie],oe=v.indexOf(ve);oe>=0&&(v[oe]=null,T[oe].disconnect(ve))}for(let ie=0;ie<W.added.length;ie++){const ve=W.added[ie];let oe=v.indexOf(ve);if(oe===-1){for(let Le=0;Le<T.length;Le++)if(Le>=v.length){v.push(ve),oe=Le;break}else if(v[Le]===null){v[Le]=ve,oe=Le;break}if(oe===-1)break}const xe=T[oe];xe&&xe.connect(ve)}}const H=new D,Z=new D;function G(W,ie,ve){H.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const oe=H.distanceTo(Z),xe=ie.projectionMatrix.elements,Le=ve.projectionMatrix.elements,ke=xe[14]/(xe[10]-1),ot=xe[14]/(xe[10]+1),je=(xe[9]+1)/xe[5],bt=(xe[9]-1)/xe[5],L=(xe[8]-1)/xe[0],Ot=(Le[8]+1)/Le[0],Ye=ke*L,at=ke*Ot,ge=oe/(-L+Ot),qe=ge*-L;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qe),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xe[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=ke+ge,Fe=ot+ge,yt=Ye-qe,R=at+(oe-qe),x=je*ot/Fe*Me,O=bt*ot/Fe*Me;W.projectionMatrix.makePerspective(yt,R,x,O,Me,Fe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let ie=W.near,ve=W.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),M.near=A.near=w.near=ie,M.far=A.far=w.far=ve,(P!==M.near||B!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),w.layers.mask=W.layers.mask|2,A.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|A.layers.mask;const oe=W.parent,xe=M.cameras;te(M,oe);for(let Le=0;Le<xe.length;Le++)te(xe[Le],oe);xe.length===2?G(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),ce(W,M,oe)};function ce(W,ie,ve){ve===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=jn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Se=null;function Oe(W,ie){if(h=ie.getViewerPose(c||s),m=ie,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let oe=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Le=0;Le<ve.length;Le++){const ke=ve[Le];let ot=null;if(p!==null)ot=p.getViewport(ke);else{const bt=u.getViewSubImage(d,ke);ot=bt.viewport,Le===0&&(e.setRenderTargetTextures(S,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(S))}let je=b[Le];je===void 0&&(je=new kt,je.layers.enable(Le),je.viewport=new Ke,b[Le]=je),je.matrix.fromArray(ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Le===0&&(M.matrix.copy(je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(je)}const xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(ve[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,n.renderState)}}for(let ve=0;ve<T.length;ve++){const oe=v[ve],xe=T[ve];oe!==null&&xe!==void 0&&xe.update(oe,ie,c||s)}Se&&Se(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const He=new Dd;He.setAnimationLoop(Oe),this.setAnimationLoop=function(W){Se=W},this.dispose=function(){}}}const Xr=new Hi,ey=new Ue;function ty(r,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,vd(r)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function n(g,f,S,T,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(g,f):f.isMeshToonMaterial?(a(g,f),u(g,f)):f.isMeshPhongMaterial?(a(g,f),h(g,f)):f.isMeshStandardMaterial?(a(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(a(g,f),m(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),_(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,S,T):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Vt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Vt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const S=e.get(f),T=S.envMap,v=S.envMapRotation;T&&(g.envMap.value=T,Xr.copy(v),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Xr)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,S,T){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=T*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,S){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const S=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function iy(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const v=T.program;i.uniformBlockBinding(S,v)}function c(S,T){let v=n[S.id];v===void 0&&(m(S),v=h(S),n[S.id]=v,S.addEventListener("dispose",g));const C=T.program;i.updateUBOMapping(S,C);const E=e.render.frame;a[S.id]!==E&&(d(S),a[S.id]=E)}function h(S){const T=u();S.__bindingPointIndex=T;const v=r.createBuffer(),C=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,v),v}function u(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=n[S.id],v=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,w=v.length;E<w;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=A.length;b<M;b++){const P=A[b];if(p(P,E,b,C)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<F.length;q++){const H=F[q],Z=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,B+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,T,v,C){const E=S.value,w=T+"_"+v;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const A=C[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return C[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function m(S){const T=S.uniforms;let v=0;const C=16;for(let w=0,A=T.length;w<A;w++){const b=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,P=b.length;M<P;M++){const B=b[M],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=F.length;V<q;V++){const H=F[V],Z=_(H),G=v%C,te=G%Z.boundary,ce=G+te;v+=te,ce!==0&&C-ce<Z.storage&&(v+=C-ce),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Z.storage}}}const E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function _(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function g(S){const T=S.target;T.removeEventListener("dispose",g);const v=s.indexOf(T.__bindingPointIndex);s.splice(v,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete a[T.id]}function f(){for(const S in n)r.deleteBuffer(n[S]);s=[],n={},a={}}return{bind:l,update:c,dispose:f}}class ry{constructor(e={}){const{canvas:t=tm(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const S=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=At;let E=0,w=0,A=null,b=-1,M=null;const P=new Ke,B=new Ke;let F=null;const V=new Pe(0);let q=0,H=t.width,Z=t.height,G=1,te=null,ce=null;const Se=new Ke(0,0,H,Z),Oe=new Ke(0,0,H,Z);let He=!1;const W=new Tc;let ie=!1,ve=!1;const oe=new Ue,xe=new Ue,Le=new D,ke=new Ke,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function bt(){return A===null?G:1}let L=i;function Ot(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",K,!1),L===null){const N="webgl2";if(L=Ot(N,y),L===null)throw Ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ye,at,ge,qe,Me,Fe,yt,R,x,O,X,Y,j,ye,ae,_e,ue,J,he,De,be,re,Ie,I;function se(){Ye=new p0(L),Ye.init(),re=new Kx(L,Ye),at=new s0(L,Ye,e,re),ge=new qx(L,Ye),at.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),qe=new g0(L),Me=new Ux,Fe=new Yx(L,Ye,ge,Me,at,re,qe),yt=new l0(v),R=new d0(v),x=new Tg(L),Ie=new n0(L,x),O=new f0(L,x,qe,Ie),X=new v0(L,O,x,qe),he=new _0(L,at,Fe),_e=new o0(Me),Y=new Ix(v,yt,R,Ye,at,Ie,_e),j=new ty(v,Me),ye=new Ox,ae=new Vx(Ye),J=new r0(v,yt,R,ge,X,p,l),ue=new Xx(v,X,at),I=new iy(L,qe,at,ge),De=new a0(L,Ye,qe),be=new m0(L,Ye,qe),qe.programs=Y.programs,v.capabilities=at,v.extensions=Ye,v.properties=Me,v.renderLists=ye,v.shadowMap=ue,v.state=ge,v.info=qe}se();const $=new Qx(v,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(H,Z,!1))},this.getSize=function(y){return y.set(H,Z)},this.setSize=function(y,N,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,Z=N,t.width=Math.floor(y*G),t.height=Math.floor(N*G),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(H*G,Z*G).floor()},this.setDrawingBufferSize=function(y,N,z){H=y,Z=N,G=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,N,z,k){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,N,z,k),ge.viewport(P.copy(Se).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,N,z,k){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,N,z,k),ge.scissor(B.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(y){ge.setScissorTest(He=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let k=0;if(y){let U=!1;if(A!==null){const Q=A.texture.format;U=Q===gc||Q===mc||Q===fc}if(U){const Q=A.texture.type,le=Q===zi||Q===ln||Q===La||Q===Da||Q===uc||Q===dc,de=J.getClearColor(),fe=J.getClearAlpha(),Ae=de.r,we=de.g,Re=de.b;le?(m[0]=Ae,m[1]=we,m[2]=Re,m[3]=fe,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ae,_[1]=we,_[2]=Re,_[3]=fe,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT),z&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",K,!1),J.dispose(),ye.dispose(),ae.dispose(),Me.dispose(),yt.dispose(),R.dispose(),X.dispose(),Ie.dispose(),I.dispose(),Y.dispose(),$.dispose(),$.removeEventListener("sessionstart",Kc),$.removeEventListener("sessionend",Zc),Fr.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=qe.autoReset,N=ue.enabled,z=ue.autoUpdate,k=ue.needsUpdate,U=ue.type;se(),qe.autoReset=y,ue.enabled=N,ue.autoUpdate=z,ue.needsUpdate=k,ue.type=U}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pe(y){const N=y.target;N.removeEventListener("dispose",pe),Ee(N)}function Ee(y){Et(y),Me.remove(y)}function Et(y){const N=Me.get(y).programs;N!==void 0&&(N.forEach(function(z){Y.releaseProgram(z)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,k,U,Q){N===null&&(N=ot);const le=U.isMesh&&U.matrixWorld.determinant()<0,de=Wp(y,N,z,k,U);ge.setMaterial(k,le);let fe=z.index,Ae=1;if(k.wireframe===!0){if(fe=O.getWireframeAttribute(z),fe===void 0)return;Ae=2}const we=z.drawRange,Re=z.attributes.position;let We=we.start*Ae,it=(we.start+we.count)*Ae;Q!==null&&(We=Math.max(We,Q.start*Ae),it=Math.min(it,(Q.start+Q.count)*Ae)),fe!==null?(We=Math.max(We,0),it=Math.min(it,fe.count)):Re!=null&&(We=Math.max(We,0),it=Math.min(it,Re.count));const ft=it-We;if(ft<0||ft===1/0)return;Ie.setup(U,k,de,z,fe);let Qe,st=De;if(fe!==null&&(Qe=x.get(fe),st=be,st.setIndex(Qe)),U.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*bt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(U.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*bt()),U.isLineSegments?st.setMode(L.LINES):U.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else U.isPoints?st.setMode(L.POINTS):U.isSprite&&st.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)On("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))st.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Ft=U._multiDrawCounts,Br=U._multiDrawCount,Ti=fe?x.get(fe).bytesPerElement:1,dn=Me.get(k).currentProgram.getUniforms();for(let Qt=0;Qt<Br;Qt++)dn.setValue(L,"_gl_DrawID",Qt),st.render(Te[Qt]/Ti,Ft[Qt])}else if(U.isInstancedMesh)st.renderInstances(We,ft,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ft=Math.min(z.instanceCount,Te);st.renderInstances(We,ft,Ft)}else st.render(We,ft)};function Ze(y,N,z){y.transparent===!0&&y.side===Ni&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,Za(y,N,z),y.side=lr,y.needsUpdate=!0,Za(y,N,z),y.side=Ni):Za(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),f=ae.get(z),f.init(N),T.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const de=Q[le];Ze(de,z,U),k.add(de)}else Ze(Q,z,U),k.add(Q)}),f=T.pop(),k},this.compileAsync=function(y,N,z=null){const k=this.compile(y,N,z);return new Promise(U=>{function Q(){if(k.forEach(function(le){Me.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){U(y);return}setTimeout(Q,10)}Ye.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Mi=null;function qi(y){Mi&&Mi(y)}function Kc(){Fr.stop()}function Zc(){Fr.start()}const Fr=new Dd;Fr.setAnimationLoop(qi),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(y){Mi=y,$.setAnimationLoop(y),y===null?Fr.stop():Fr.start()},$.addEventListener("sessionstart",Kc),$.addEventListener("sessionend",Zc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,A),f=ae.get(y,T.length),f.init(N),T.push(f),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(xe),ve=this.localClippingEnabled,ie=_e.init(this.clippingPlanes,ve),g=ye.get(y,S.length),g.init(),S.push(g),$.enabled===!0&&$.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&no(Q,N,-1/0,v.sortObjects)}no(y,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(te,ce),je=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,je&&J.addToRenderList(g,y),this.info.render.frame++,ie===!0&&_e.beginShadows();const z=f.state.shadowsArray;ue.render(z,y,N),ie===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(f.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let le=0,de=Q.length;le<de;le++){const fe=Q[le];$c(k,U,y,fe)}je&&J.render(y);for(let le=0,de=Q.length;le<de;le++){const fe=Q[le];Jc(g,y,fe,fe.viewport)}}else U.length>0&&$c(k,U,y,N),je&&J.render(y),Jc(g,y,N);A!==null&&w===0&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,N),Ie.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],ie===!0&&_e.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function no(y,N,z,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xe);const Q=X.update(y),le=y.material;le.visible&&g.push(y,Q,le,z,ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const Q=X.update(y),le=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),ke.copy(Q.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(xe)),Array.isArray(le)){const de=Q.groups;for(let fe=0,Ae=de.length;fe<Ae;fe++){const we=de[fe],Re=le[we.materialIndex];Re&&Re.visible&&g.push(y,Q,Re,z,ke.z,we)}}else le.visible&&g.push(y,Q,le,z,ke.z,null)}}const U=y.children;for(let Q=0,le=U.length;Q<le;Q++)no(U[Q],N,z,k)}function Jc(y,N,z,k){const U=y.opaque,Q=y.transmissive,le=y.transparent;f.setupLightsView(z),ie===!0&&_e.setGlobalState(v.clippingPlanes,z),k&&ge.viewport(P.copy(k)),U.length>0&&Ka(U,N,z),Q.length>0&&Ka(Q,N,z),le.length>0&&Ka(le,N,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function $c(y,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new cn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Xa:zi,minFilter:nr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const U=f.state.transmissionRenderTarget[k.id],Q=k.viewport||P;U.setSize(Q.z*v.transmissionResolutionScale,Q.w*v.transmissionResolutionScale);const le=v.getRenderTarget();v.setRenderTarget(U),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),je&&J.render(z);const de=v.toneMapping;v.toneMapping=Ar;const fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ie===!0&&_e.setGlobalState(v.clippingPlanes,k),Ka(y,z,k),Fe.updateMultisampleRenderTarget(U),Fe.updateRenderTargetMipmap(U),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let we=0,Re=N.length;we<Re;we++){const We=N[we],it=We.object,ft=We.geometry,Qe=We.material,st=We.group;if(Qe.side===Ni&&it.layers.test(k.layers)){const Te=Qe.side;Qe.side=Vt,Qe.needsUpdate=!0,Qc(it,z,k,ft,Qe,st),Qe.side=Te,Qe.needsUpdate=!0,Ae=!0}}Ae===!0&&(Fe.updateMultisampleRenderTarget(U),Fe.updateRenderTargetMipmap(U))}v.setRenderTarget(le),v.setClearColor(V,q),fe!==void 0&&(k.viewport=fe),v.toneMapping=de}function Ka(y,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const le=y[U],de=le.object,fe=le.geometry,Ae=le.group;let we=le.material;we.allowOverride===!0&&k!==null&&(we=k),de.layers.test(z.layers)&&Qc(de,N,z,fe,we,Ae)}}function Qc(y,N,z,k,U,Q){y.onBeforeRender(v,N,z,k,U,Q),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,N,z,k,y,Q),U.transparent===!0&&U.side===Ni&&U.forceSinglePass===!1?(U.side=Vt,U.needsUpdate=!0,v.renderBufferDirect(z,N,k,U,y,Q),U.side=lr,U.needsUpdate=!0,v.renderBufferDirect(z,N,k,U,y,Q),U.side=Ni):v.renderBufferDirect(z,N,k,U,y,Q),y.onAfterRender(v,N,z,k,U,Q)}function Za(y,N,z){N.isScene!==!0&&(N=ot);const k=Me.get(y),U=f.state.lights,Q=f.state.shadowsArray,le=U.state.version,de=Y.getParameters(y,U.state,Q,N,z),fe=Y.getProgramCacheKey(de);let Ae=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?R:yt).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",pe),Ae=new Map,k.programs=Ae);let we=Ae.get(fe);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===le)return th(y,de),we}else de.uniforms=Y.getUniforms(y),y.onBeforeCompile(de,v),we=Y.acquireProgram(de,fe),Ae.set(fe,we),k.uniforms=de.uniforms;const Re=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=_e.uniform),th(y,de),k.needsLights=jp(y),k.lightsStateVersion=le,k.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=we,k.uniformsList=null,we}function eh(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Is.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function th(y,N){const z=Me.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Wp(y,N,z,k,U){N.isScene!==!0&&(N=ot),Fe.resetTextureUnits();const Q=N.fog,le=k.isMeshStandardMaterial?N.environment:null,de=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xt,fe=(k.isMeshStandardMaterial?R:yt).get(k.envMap||le),Ae=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let ft=Ar;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Qe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=Qe!==void 0?Qe.length:0,Te=Me.get(k),Ft=f.state.lights;if(ie===!0&&(ve===!0||y!==M)){const Pt=y===M&&k.id===b;_e.setState(k,y,Pt)}let Br=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ft.state.version||Te.outputColorSpace!==de||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==fe||k.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==_e.numPlanes||Te.numIntersection!==_e.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==we||Te.morphTargets!==Re||Te.morphNormals!==We||Te.morphColors!==it||Te.toneMapping!==ft||Te.morphTargetsCount!==st)&&(Br=!0):(Br=!0,Te.__version=k.version);let Ti=Te.currentProgram;Br===!0&&(Ti=Za(k,N,U));let dn=!1,Qt=!1,ha=!1;const ct=Ti.getUniforms(),ui=Te.uniforms;if(ge.useProgram(Ti.program)&&(dn=!0,Qt=!0,ha=!0),k.id!==b&&(b=k.id,Qt=!0),dn||M!==y){ge.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),rm(oe),nm(oe),ct.setValue(L,"projectionMatrix",oe)):ct.setValue(L,"projectionMatrix",y.projectionMatrix),ct.setValue(L,"viewMatrix",y.matrixWorldInverse);const Pt=ct.map.cameraPosition;Pt!==void 0&&Pt.setValue(L,Le.setFromMatrixPosition(y.matrixWorld)),at.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Qt=!0,ha=!0)}if(U.isSkinnedMesh){ct.setOptional(L,U,"bindMatrix"),ct.setOptional(L,U,"bindMatrixInverse");const Pt=U.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(L,"boneTexture",Pt.boneTexture,Fe))}U.isBatchedMesh&&(ct.setOptional(L,U,"batchingTexture"),ct.setValue(L,"batchingTexture",U._matricesTexture,Fe),ct.setOptional(L,U,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",U._indirectTexture,Fe),ct.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",U._colorsTexture,Fe));const di=z.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&he.update(U,z,Ti),(Qt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,ct.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ui.envMap.value=fe,ui.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(ui.envMapIntensity.value=N.environmentIntensity),Qt&&(ct.setValue(L,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&Xp(ui,ha),Q&&k.fog===!0&&j.refreshFogUniforms(ui,Q),j.refreshMaterialUniforms(ui,k,G,Z,f.state.transmissionRenderTarget[y.id]),Is.upload(L,eh(Te),ui,Fe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Is.upload(L,eh(Te),ui,Fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(L,"center",U.center),ct.setValue(L,"modelViewMatrix",U.modelViewMatrix),ct.setValue(L,"normalMatrix",U.normalMatrix),ct.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Pt=k.uniformsGroups;for(let Si=0,ao=Pt.length;Si<ao;Si++){const zr=Pt[Si];I.update(zr,Ti),I.bind(zr,Ti)}}return Ti}function Xp(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function jp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,N,z){const k=Me.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Me.get(y.texture).__webglTexture=N,Me.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=Me.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const qp=L.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){A=y,E=N,w=z;let k=!0,U=null,Q=!1,le=!1;if(y){const de=Me.get(y);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)Fe.setupRenderTarget(y);else if(de.__hasExternalTextures)Fe.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const we=y.depthTexture;if(de.__boundDepthTexture!==we){if(we!==null&&Me.has(we)&&(y.width!==we.image.width||y.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(y)}}const fe=y.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(le=!0);const Ae=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?U=Ae[N][z]:U=Ae[N],Q=!0):y.samples>0&&Fe.useMultisampledRTT(y)===!1?U=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[z]:U=Ae,P.copy(y.viewport),B.copy(y.scissor),F=y.scissorTest}else P.copy(Se).multiplyScalar(G).floor(),B.copy(Oe).multiplyScalar(G).floor(),F=He;if(z!==0&&(U=qp),ge.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&ge.drawBuffers(y,U),ge.viewport(P),ge.scissor(B),ge.setScissorTest(F),Q){const de=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,z)}else if(le){const de=Me.get(y.texture),fe=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.__webglTexture,z,fe)}else if(y!==null&&z!==0){const de=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(y,N,z,k,U,Q,le,de=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){ge.bindFramebuffer(L.FRAMEBUFFER,fe);try{const Ae=y.textures[de],we=Ae.format,Re=Ae.type;if(!at.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&z>=0&&z<=y.height-U&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(N,z,k,U,re.convert(we),re.convert(Re),Q))}finally{const Ae=A!==null?Me.get(A).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,k,U,Q,le,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(N>=0&&N<=y.width-k&&z>=0&&z<=y.height-U){ge.bindFramebuffer(L.FRAMEBUFFER,fe);const Ae=y.textures[de],we=Ae.format,Re=Ae.type;if(!at.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(N,z,k,U,re.convert(we),re.convert(Re),0);const it=A!==null?Me.get(A).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,it);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await im(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(We),L.deleteSync(ft),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const k=Math.pow(2,-z),U=Math.floor(y.image.width*k),Q=Math.floor(y.image.height*k),le=N!==null?N.x:0,de=N!==null?N.y:0;Fe.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,le,de,U,Q),ge.unbindTexture()};const Yp=L.createFramebuffer(),Kp=L.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,k=null,U=0,Q=null){Q===null&&(U!==0?(On("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let le,de,fe,Ae,we,Re,We,it,ft;const Qe=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(z!==null)le=z.max.x-z.min.x,de=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,we=z.min.y,Re=z.isBox3?z.min.z:0;else{const di=Math.pow(2,-U);le=Math.floor(Qe.width*di),de=Math.floor(Qe.height*di),y.isDataArrayTexture?fe=Qe.depth:y.isData3DTexture?fe=Math.floor(Qe.depth*di):fe=1,Ae=0,we=0,Re=0}k!==null?(We=k.x,it=k.y,ft=k.z):(We=0,it=0,ft=0);const st=re.convert(N.format),Te=re.convert(N.type);let Ft;N.isData3DTexture?(Fe.setTexture3D(N,0),Ft=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Fe.setTexture2DArray(N,0),Ft=L.TEXTURE_2D_ARRAY):(Fe.setTexture2D(N,0),Ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Br=L.getParameter(L.UNPACK_ROW_LENGTH),Ti=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qt=L.getParameter(L.UNPACK_SKIP_ROWS),ha=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const ct=y.isDataArrayTexture||y.isData3DTexture,ui=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const di=Me.get(y),Pt=Me.get(N),Si=Me.get(di.__renderTarget),ao=Me.get(Pt.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Si.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let zr=0;zr<fe;zr++)ct&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,U,Re+zr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,Q,ft+zr)),L.blitFramebuffer(Ae,we,le,de,We,it,le,de,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||Me.has(y)){const di=Me.get(y),Pt=Me.get(N);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Yp),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kp);for(let Si=0;Si<fe;Si++)ct?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,di.__webglTexture,U,Re+Si):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,di.__webglTexture,U),ui?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,Q,ft+Si):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,Q),U!==0?L.blitFramebuffer(Ae,we,le,de,We,it,le,de,L.COLOR_BUFFER_BIT,L.NEAREST):ui?L.copyTexSubImage3D(Ft,Q,We,it,ft+Si,Ae,we,le,de):L.copyTexSubImage2D(Ft,Q,We,it,Ae,we,le,de);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ui?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ft,Q,We,it,ft,le,de,fe,st,Te,Qe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ft,Q,We,it,ft,le,de,fe,st,Qe.data):L.texSubImage3D(Ft,Q,We,it,ft,le,de,fe,st,Te,Qe):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,We,it,le,de,st,Te,Qe.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,We,it,Qe.width,Qe.height,st,Qe.data):L.texSubImage2D(L.TEXTURE_2D,Q,We,it,le,de,st,Te,Qe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Br),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ti),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ha),Q===0&&N.generateMipmaps&&L.generateMipmap(Ft),ge.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,k=null,U=0){return On('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,k,U)},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&Fe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Fe.setTextureCube(y,0):y.isData3DTexture?Fe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Fe.setTexture2DArray(y,0):Fe.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Tu={type:"change"},Pc={type:"start"},Fd={type:"end"},bs=new na,Su=new vr,ny=Math.cos(70*dd.DEG2RAD),Mt=new D,jt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class ay extends yg{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ki,this._lastTargetPosition=new D,this._quat=new ki().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oy.bind(this),this._onPointerDown=sy.bind(this),this._onPointerUp=ly.bind(this),this._onContextMenu=my.bind(this),this._onMouseWheel=uy.bind(this),this._onKeyDown=dy.bind(this),this._onTouchStart=py.bind(this),this._onTouchMove=fy.bind(this),this._onMouseDown=cy.bind(this),this._onMouseMove=hy.bind(this),this._interceptControlDown=gy.bind(this),this._interceptControlUp=_y.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tu),this.update(),this.state=tt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=jt:i>Math.PI&&(i-=jt),n<-Math.PI?n+=jt:n>Math.PI&&(n-=jt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Mt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(bs.origin.copy(this.object.position),bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bs.direction))<ny?this.object.lookAt(this.target):(Su.setFromNormalAndCoplanarPoint(this.object.up,this.target),bs.intersectPlane(Su,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(Tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Mt.copy(n).sub(this.target);let a=Mt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sy(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function oy(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ly(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fd),this.state=tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cy(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=tt.DOLLY;break;case Un.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tt.ROTATE}break;case Un.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Pc)}function hy(r){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function uy(r){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(r.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fd))}function dy(r){this.enabled!==!1&&this._handleKeyDown(r)}function py(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=tt.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=tt.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Pc)}function fy(r){switch(this._trackPointer(r),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=tt.NONE}}function my(r){this.enabled!==!1&&r.preventDefault()}function gy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _y(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$n={duration:.5,overwrite:!1,delay:0},Lc,Lt,ht,vi=1e8,nt=1/vi,jl=Math.PI*2,vy=jl/4,xy=0,zd=Math.sqrt,yy=Math.cos,My=Math.sin,Ct=function(r){return typeof r=="string"},mt=function(r){return typeof r=="function"},cr=function(r){return typeof r=="number"},Dc=function(r){return typeof r>"u"},Vi=function(r){return typeof r=="object"},Yt=function(r){return r!==!1},Ic=function(){return typeof window<"u"},Es=function(r){return mt(r)||Ct(r)},kd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,Ty=/random\([^)]+\)/g,Sy=/,\s*/g,bu=/(?:-?\.?\d|\.)+/gi,Hd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Dn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vd=/[+-]=-?[.\d]+/,by=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Ii,ql,Uc,ci={},Vs={},Gd,Wd=function(r){return(Vs=Qn(r,ci))&&$t},Nc=function(r,e){return console.warn("Invalid property",r,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ba=function(r,e){return!e&&console.warn(r)},Xd=function(r,e){return r&&(ci[r]=e)&&Vs&&(Vs[r]=e)||ci},za=function(){return 0},wy={suppressEvents:!0,isStart:!0,kill:!1},Us={suppressEvents:!0,kill:!1},Ay={suppressEvents:!0},Oc={},Rr=[],Yl={},jd,ri={},Wo={},Eu=30,Ns=[],Fc="",Bc=function(r){var e=r[0],t,i;if(Vi(e)||mt(e)||(r=[r]),!(t=(e._gsap||{}).harness)){for(i=Ns.length;i--&&!Ns[i].targetTest(e););t=Ns[i]}for(i=r.length;i--;)r[i]&&(r[i]._gsap||(r[i]._gsap=new gp(r[i],t)))||r.splice(i,1);return r},rn=function(r){return r._gsap||Bc(xi(r))[0]._gsap},qd=function(r,e,t){return(t=r[e])&&mt(t)?r[e]():Dc(t)&&r.getAttribute&&r.getAttribute(e)||t},Kt=function(r,e){return(r=r.split(",")).forEach(e)||r},gt=function(r){return Math.round(r*1e5)/1e5||0},ut=function(r){return Math.round(r*1e7)/1e7||0},Bn=function(r,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return r=parseFloat(r),t==="+"?r+i:t==="-"?r-i:t==="*"?r*i:r/i},Ry=function(r,e){for(var t=e.length,i=0;r.indexOf(e[i])<0&&++i<t;);return i<t},Gs=function(){var r=Rr.length,e=Rr.slice(0),t,i;for(Yl={},Rr.length=0,t=0;t<r;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zc=function(r){return!!(r._initted||r._startAt||r.add)},Yd=function(r,e,t,i){Rr.length&&!Lt&&Gs(),r.render(e,t,!!(Lt&&e<0&&zc(r))),Rr.length&&!Lt&&Gs()},Kd=function(r){var e=parseFloat(r);return(e||e===0)&&(r+"").match(by).length<2?e:Ct(r)?r.trim():r},Zd=function(r){return r},hi=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},Cy=function(r){return function(e,t){for(var i in t)i in e||i==="duration"&&r||i==="ease"||(e[i]=t[i])}},Qn=function(r,e){for(var t in e)r[t]=e[t];return r},wu=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Vi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ws=function(r,e){var t={},i;for(i in r)i in e||(t[i]=r[i]);return t},Ra=function(r){var e=r.parent||dt,t=r.keyframes?Cy(Nt(r.keyframes)):hi;if(Yt(r.inherit))for(;e;)t(r,e.vars.defaults),e=e.parent||e._dp;return r},Py=function(r,e){for(var t=r.length,i=t===e.length;i&&t--&&r[t]===e[t];);return t<0},Jd=function(r,e,t,i,n){var a=r[i],s;if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=r[t],r[t]=e),e._next?e._next._prev=e:r[i]=e,e._prev=a,e.parent=e._dp=r,e},Qs=function(r,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:r[t]===e&&(r[t]=a),a?a._prev=n:r[i]===e&&(r[i]=n),e._next=e._prev=e.parent=null},Lr=function(r,e){r.parent&&(!e||r.parent.autoRemoveChildren)&&r.parent.remove&&r.parent.remove(r),r._act=0},nn=function(r,e){if(r&&(!e||e._end>r._dur||e._start<0))for(var t=r;t;)t._dirty=1,t=t.parent;return r},Ly=function(r){for(var e=r.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return r},Kl=function(r,e,t,i){return r._startAt&&(Lt?r._startAt.revert(Us):r.vars.immediateRender&&!r.vars.autoRevert||r._startAt.render(e,!0,i))},Dy=function r(e){return!e||e._ts&&r(e.parent)},Au=function(r){return r._repeat?ea(r._tTime,r=r.duration()+r._rDelay)*r:0},ea=function(r,e){var t=Math.floor(r=ut(r/e));return r&&t===r?t-1:t},Xs=function(r,e){return(r-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},eo=function(r){return r._end=ut(r._start+(r._tDur/Math.abs(r._ts||r._rts||nt)||0))},to=function(r,e){var t=r._dp;return t&&t.smoothChildTiming&&r._ts&&(r._start=ut(t._time-(r._ts>0?e/r._ts:((r._dirty?r.totalDuration():r._tDur)-e)/-r._ts)),eo(r),t._dirty||nn(t,r)),r},$d=function(r,e){var t;if((e._time||!e._dur&&e._initted||e._start<r._time&&(e._dur||!e.add))&&(t=Xs(r.rawTime(),e),(!e._dur||Ya(0,e.totalDuration(),t)-e._tTime>nt)&&e.render(t,!0)),nn(r,e)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(t=r;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;r._zTime=-nt}},Oi=function(r,e,t,i){return e.parent&&Lr(e),e._start=ut((cr(t)?t:t||r!==dt?fi(r,t,e):r._time)+e._delay),e._end=ut(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jd(r,e,"_first","_last",r._sort?"_start":0),Zl(e)||(r._recent=e),i||$d(r,e),r._ts<0&&to(r,r._tTime),r},Qd=function(r,e){return(ci.ScrollTrigger||Nc("scrollTrigger",e))&&ci.ScrollTrigger.create(e,r)},ep=function(r,e,t,i,n){if(Hc(r,e,n),!r._initted)return 1;if(!t&&r._pt&&!Lt&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&jd!==ni.frame)return Rr.push(r),r._lazy=[n,i],1},Iy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zl=function(r){var e=r.data;return e==="isFromStart"||e==="isStart"},Uy=function(r,e,t,i){var n=r.ratio,a=e<0||!e&&(!r._start&&Iy(r)&&!(!r._initted&&Zl(r))||(r._ts<0||r._dp._ts<0)&&!Zl(r))?0:1,s=r._rDelay,o=0,l,c,h;if(s&&r._repeat&&(o=Ya(0,r._tDur,e),c=ea(o,s),r._yoyo&&c&1&&(a=1-a),c!==ea(r._tTime,s)&&(n=1-a,r.vars.repeatRefresh&&r._initted&&r.invalidate())),a!==n||Lt||i||r._zTime===nt||!e&&r._zTime){if(!r._initted&&ep(r,e,i,t,o))return;for(h=r._zTime,r._zTime=e||(t?nt:0),t||(t=e&&!h),r.ratio=a,r._from&&(a=1-a),r._time=0,r._tTime=o,l=r._pt;l;)l.r(a,l.d),l=l._next;e<0&&Kl(r,e,t,!0),r._onUpdate&&!t&&si(r,"onUpdate"),o&&r._repeat&&!t&&r.parent&&si(r,"onRepeat"),(e>=r._tDur||e<0)&&r.ratio===a&&(a&&Lr(r,1),!t&&!Lt&&(si(r,a?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=e)},Ny=function(r,e,t){var i;if(t>e)for(i=r._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=r._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ta=function(r,e,t,i){var n=r._repeat,a=ut(e)||0,s=r._tTime/r._tDur;return s&&!i&&(r._time*=a/r._dur),r._dur=a,r._tDur=n?n<0?1e10:ut(a*(n+1)+r._rDelay*n):a,s>0&&!i&&to(r,r._tTime=r._tDur*s),r.parent&&eo(r),t||nn(r.parent,r),r},Ru=function(r){return r instanceof Ht?nn(r):ta(r,r._dur)},Oy={_start:0,endTime:za,totalDuration:za},fi=function r(e,t,i){var n=e.labels,a=e._recent||Oy,s=e.duration()>=vi?a.endTime(!1):e._dur,o,l,c;return Ct(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Nt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},Ca=function(r,e,t){var i=cr(e[1]),n=(i?2:1)+(r<2?0:1),a=e[n],s,o;if(i&&(a.duration=e[1]),a.parent=t,r){for(s=a,o=t;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=Yt(o.vars.inherit)&&o.parent;a.immediateRender=Yt(s.immediateRender),r<2?a.runBackwards=1:a.startAt=e[n-1]}return new vt(e[0],a,e[n+1])},Or=function(r,e){return r||r===0?e(r):e},Ya=function(r,e,t){return t<r?r:t>e?e:t},Ut=function(r,e){return!Ct(r)||!(e=Ey.exec(r))?"":e[1]},Fy=function(r,e,t){return Or(t,function(i){return Ya(r,e,i)})},Jl=[].slice,tp=function(r,e){return r&&Vi(r)&&"length"in r&&(!e&&!r.length||r.length-1 in r&&Vi(r[0]))&&!r.nodeType&&r!==Ii},By=function(r,e,t){return t===void 0&&(t=[]),r.forEach(function(i){var n;return Ct(i)&&!e||tp(i,1)?(n=t).push.apply(n,xi(i)):t.push(i)})||t},xi=function(r,e,t){return ht&&!e&&ht.selector?ht.selector(r):Ct(r)&&!t&&(ql||!ia())?Jl.call((e||Uc).querySelectorAll(r),0):Nt(r)?By(r,t):tp(r)?Jl.call(r,0):r?[r]:[]},$l=function(r){return r=xi(r)[0]||Ba("Invalid scope")||{},function(e){var t=r.current||r.nativeElement||r;return xi(e,t.querySelectorAll?t:t===r?Ba("Invalid scope")||Uc.createElement("div"):r)}},ip=function(r){return r.sort(function(){return .5-Math.random()})},rp=function(r){if(mt(r))return r;var e=Vi(r)?r:{each:r},t=an(e.ease),i=e.from||0,n=parseFloat(e.base)||0,a={},s=i>0&&i<1,o=isNaN(i)||s,l=e.axis,c=i,h=i;return Ct(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&o&&(c=i[0],h=i[1]),function(u,d,p){var m=(p||e).length,_=a[m],g,f,S,T,v,C,E,w,A;if(!_){if(A=e.grid==="auto"?0:(e.grid||[1,vi])[1],!A){for(E=-vi;E<(E=p[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(_=a[m]=[],g=o?Math.min(A,m)*c-.5:i%A,f=A===vi?0:o?m*h/A-.5:i/A|0,E=0,w=vi,C=0;C<m;C++)S=C%A-g,T=f-(C/A|0),_[C]=v=l?Math.abs(l==="y"?T:S):zd(S*S+T*T),v>E&&(E=v),v<w&&(w=v);i==="random"&&ip(_),_.max=E-w,_.min=w,_.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(A>m?m-1:l?l==="y"?m/A:A:Math.max(A,m/A))||0)*(i==="edges"?-1:1),_.b=m<0?n-m:n,_.u=Ut(e.amount||e.each)||0,t=t&&m<0?pp(t):t}return m=(_[u]-_.min)/_.max||0,ut(_.b+(t?t(m):m)*_.v)+_.u}},Ql=function(r){var e=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var i=ut(Math.round(parseFloat(t)/r)*r*e);return(i-i%1)/e+(cr(t)?0:Ut(t))}},np=function(r,e){var t=Nt(r),i,n;return!t&&Vi(r)&&(i=t=r.radius||vi,r.values?(r=xi(r.values),(n=!cr(r[0]))&&(i*=i)):r=Ql(r.increment)),Or(e,t?mt(r)?function(a){return n=r(a),Math.abs(n-a)<=i?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=vi,c=0,h=r.length,u,d;h--;)n?(u=r[h].x-s,d=r[h].y-o,u=u*u+d*d):u=Math.abs(r[h]-s),u<l&&(l=u,c=h);return c=!i||l<=i?r[c]:a,n||c===a||cr(a)?c:c+Ut(a)}:Ql(r))},ap=function(r,e,t,i){return Or(Nt(r)?!e:t===!0?!!(t=0):!i,function(){return Nt(r)?r[~~(Math.random()*r.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((r-t/2+Math.random()*(e-r+t*.99))/t)*t*i)/i})},zy=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(i){return e.reduce(function(n,a){return a(n)},i)}},ky=function(r,e){return function(t){return r(parseFloat(t))+(e||Ut(t))}},Hy=function(r,e,t){return op(r,e,0,1,t)},sp=function(r,e,t){return Or(t,function(i){return r[~~e(i)]})},Vy=function r(e,t,i){var n=t-e;return Nt(e)?sp(e,r(0,e.length),t):Or(i,function(a){return(n+(a-e)%n)%n+e})},Gy=function r(e,t,i){var n=t-e,a=n*2;return Nt(e)?sp(e,r(0,e.length-1),t):Or(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},ka=function(r){return r.replace(Ty,function(e){var t=e.indexOf("[")+1,i=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(Sy);return ap(t?i:+i[0],t?0:+i[1],+i[2]||1e-5)})},op=function(r,e,t,i,n){var a=e-r,s=i-t;return Or(n,function(o){return t+((o-r)/a*s||0)})},Wy=function r(e,t,i,n){var a=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!a){var s=Ct(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,a=function(p){p*=u;var m=Math.min(d,~~p);return h[m](p-m)},i=t}else n||(e=Qn(Nt(e)?[]:{},e));if(!h){for(l in t)kc.call(o,e,l,"get",t[l]);a=function(p){return Wc(p,o)||(s?e.p:e)}}}return Or(i,a)},Cu=function(r,e,t){var i=r.labels,n=vi,a,s,o;for(a in i)s=i[a]-e,s<0==!!t&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},si=function(r,e,t){var i=r.vars,n=i[e],a=ht,s=r._ctx,o,l,c;if(n)return o=i[e+"Params"],l=i.callbackScope||r,t&&Rr.length&&Gs(),s&&(ht=s),c=o?n.apply(l,o):n.call(l),ht=a,c},Sa=function(r){return Lr(r),r.scrollTrigger&&r.scrollTrigger.kill(!!Lt),r.progress()<1&&si(r,"onInterrupt"),r},In,lp=[],cp=function(r){if(r)if(r=!r.name&&r.default||r,Ic()||r.headless){var e=r.name,t=mt(r),i=e&&!t&&r.init?function(){this._props=[]}:r,n={init:za,render:Wc,add:kc,kill:sM,modifier:aM,rawVars:0},a={targetTest:0,get:0,getSetter:Gc,aliases:{},register:0};if(ia(),r!==i){if(ri[e])return;hi(i,hi(Ws(r,n),a)),Qn(i.prototype,Qn(n,Ws(r,a))),ri[i.prop=e]=i,r.targetTest&&(Ns.push(i),Oc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xd(e,i),r.register&&r.register($t,i,Zt)}else lp.push(r)},rt=255,ba={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Xo=function(r,e,t){return r+=r<0?1:r>1?-1:0,(r*6<1?e+(t-e)*r*6:r<.5?t:r*3<2?e+(t-e)*(2/3-r)*6:e)*rt+.5|0},hp=function(r,e,t){var i=r?cr(r)?[r>>16,r>>8&rt,r&rt]:0:ba.black,n,a,s,o,l,c,h,u,d,p;if(!i){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),ba[r])i=ba[r];else if(r.charAt(0)==="#"){if(r.length<6&&(n=r.charAt(1),a=r.charAt(2),s=r.charAt(3),r="#"+n+n+a+a+s+s+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return i=parseInt(r.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),i=[r>>16,r>>8&rt,r&rt]}else if(r.substr(0,3)==="hsl"){if(i=p=r.match(bu),!e)o=+i[0]%360/360,l=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(l+1):c+l-c*l,n=c*2-a,i.length>3&&(i[3]*=1),i[0]=Xo(o+1/3,n,a),i[1]=Xo(o,n,a),i[2]=Xo(o-1/3,n,a);else if(~r.indexOf("="))return i=r.match(Hd),t&&i.length<4&&(i[3]=1),i}else i=r.match(bu)||ba.transparent;i=i.map(Number)}return e&&!p&&(n=i[0]/rt,a=i[1]/rt,s=i[2]/rt,h=Math.max(n,a,s),u=Math.min(n,a,s),c=(h+u)/2,h===u?o=l=0:(d=h-u,l=c>.5?d/(2-h-u):d/(h+u),o=h===n?(a-s)/d+(a<s?6:0):h===a?(s-n)/d+2:(n-a)/d+4,o*=60),i[0]=~~(o+.5),i[1]=~~(l*100+.5),i[2]=~~(c*100+.5)),t&&i.length<4&&(i[3]=1),i},up=function(r){var e=[],t=[],i=-1;return r.split(Cr).forEach(function(n){var a=n.match(Dn)||[];e.push.apply(e,a),t.push(i+=a.length+1)}),e.c=t,e},Pu=function(r,e,t){var i="",n=(r+i).match(Cr),a=e?"hsla(":"rgba(",s=0,o,l,c,h;if(!n)return r;if(n=n.map(function(u){return(u=hp(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),t&&(c=up(r),o=t.c,o.join(i)!==c.c.join(i)))for(l=r.replace(Cr,"1").split(Dn),h=l.length-1;s<h;s++)i+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(c.length?c:n.length?n:t).shift());if(!l)for(l=r.split(Cr),h=l.length-1;s<h;s++)i+=l[s]+n[s];return i+l[h]},Cr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Xy=/hsl[a]?\(/,dp=function(r){var e=r.join(" "),t;if(Cr.lastIndex=0,Cr.test(e))return t=Xy.test(e),r[1]=Pu(r[1],t),r[0]=Pu(r[0],t,up(r[1])),!0},Ha,ni=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,a=1e3/240,s=a,o=[],l,c,h,u,d,p,m=function _(g){var f=r()-n,S=g===!0,T,v,C,E;if((f>e||f<0)&&(i+=f-t),n+=f,C=n-i,T=C-s,(T>0||S)&&(E=++u.frame,d=C-u.time*1e3,u.time=C=C/1e3,s+=T+(T>=a?4:a-T),v=1),S||(l=c(_)),v)for(p=0;p<o.length;p++)o[p](C,d,E,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Gd&&(!ql&&Ic()&&(Ii=ql=window,Uc=Ii.document||{},ci.gsap=$t,(Ii.gsapVersions||(Ii.gsapVersions=[])).push($t.version),Wd(Vs||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),lp.forEach(cp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,s-u.time*1e3+1|0)},Ha=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=za},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){a=1e3/(_||240),s=u.time*1e3+a},add:function(_,g,f){var S=g?function(T,v,C,E){_(T,v,C,E),u.remove(S)}:_;return u.remove(_),o[f?"unshift":"push"](S),ia(),S},remove:function(_,g){~(g=o.indexOf(_))&&o.splice(g,1)&&p>=g&&p--},_listeners:o},u})(),ia=function(){return!Ha&&ni.wake()},Ge={},jy=/^[\d.\-M][\d.\-,\s]/,qy=/["']/g,Yy=function(r){for(var e={},t=r.substr(1,r.length-3).split(":"),i=t[0],n=1,a=t.length,s,o,l;n<a;n++)o=t[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),e[i]=isNaN(l)?l.replace(qy,"").trim():+l,i=o.substr(s+1).trim();return e},Ky=function(r){var e=r.indexOf("(")+1,t=r.indexOf(")"),i=r.indexOf("(",e);return r.substring(e,~i&&i<t?r.indexOf(")",t+1):t)},Zy=function(r){var e=(r+"").split("("),t=Ge[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~r.indexOf("{")?[Yy(e[1])]:Ky(r).split(",").map(Kd)):Ge._CE&&jy.test(r)?Ge._CE("",r):t},pp=function(r){return function(e){return 1-r(1-e)}},fp=function r(e,t){for(var i=e._first,n;i;)i instanceof Ht?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},an=function(r,e){return r&&(mt(r)?r:Ge[r]||Zy(r))||e},un=function(r,e,t,i){t===void 0&&(t=function(s){return 1-e(1-s)}),i===void 0&&(i=function(s){return s<.5?e(s*2)/2:1-e((1-s)*2)/2});var n={easeIn:e,easeOut:t,easeInOut:i},a;return Kt(r,function(s){Ge[s]=ci[s]=n,Ge[a=s.toLowerCase()]=t;for(var o in n)Ge[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=Ge[s+"."+o]=n[o]}),n},mp=function(r){return function(e){return e<.5?(1-r(1-e*2))/2:.5+r((e-.5)*2)/2}},jo=function r(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),s=a/jl*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*My((c-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:mp(o);return a=jl/a,l.config=function(c,h){return r(e,c,h)},l},qo=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:mp(i);return n.config=function(a){return r(e,a)},n};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;un(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;un("Elastic",jo("in"),jo("out"),jo());(function(r,e){var t=1/e,i=2*t,n=2.5*t,a=function(s){return s<t?r*s*s:s<i?r*Math.pow(s-1.5/e,2)+.75:s<n?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};un("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);un("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});un("Circ",function(r){return-(zd(1-r*r)-1)});un("Sine",function(r){return r===1?1:-yy(r*vy)+1});un("Back",qo("in"),qo("out"),qo());Ge.SteppedEase=Ge.steps=ci.SteppedEase={config:function(r,e){r===void 0&&(r=1);var t=1/r,i=r+(e?0:1),n=e?1:0,a=1-nt;return function(s){return((i*Ya(0,a,s)|0)+n)*t}}};$n.ease=Ge["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Fc+=r+","+r+"Params,"});var gp=function(r,e){this.id=xy++,r._gsap=this,this.target=r,this.harness=e,this.get=e?e.get:qd,this.set=e?e.getSetter:Gc},Va=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ta(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),Ha||ni.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,ta(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(ia(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(to(this,t),!n._dp||n.parent||$d(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Yd(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Au(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Au(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,i):this._repeat?ea(this._tTime,n)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-nt?0:this._rts,this.totalTime(Ya(-Math.abs(this._delay),this.totalDuration(),n),i!==!1),eo(this),Ly(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=ut(t);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Oi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(Yt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=Ay);var i=Lt;return Lt=t,zc(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Lt=i,this},e.globalTime=function(t){for(var i=this,n=arguments.length?t:i.rawTime();i;)n=i._start+n/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ru(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,Ru(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(fi(this,t),Yt(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,Yt(i)),this._dur||(this._zTime=-nt),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=i&&n<this.endTime(!0)-nt)},e.eventCallback=function(t,i,n){var a=this.vars;return arguments.length>1?(i?(a[t]=i,n&&(a[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=i)):delete a[t],this):a[t]},e.then=function(t){var i=this,n=i._prom;return new Promise(function(a){var s=mt(t)?t:Zd,o=function(){var l=i.then;i.then=null,n&&n(),mt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=l),a(s),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Sa(this)},r})();hi(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Ht=(function(r){Bd(e,r);function e(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Yt(i.sortChildren),dt&&Oi(i.parent||dt,tr(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Qd(tr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(i,n,a){return Ca(0,arguments,this),this},t.from=function(i,n,a){return Ca(1,arguments,this),this},t.fromTo=function(i,n,a,s){return Ca(2,arguments,this),this},t.set=function(i,n,a){return n.duration=0,n.parent=this,Ra(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new vt(i,n,fi(this,a),1),this},t.call=function(i,n,a){return Oi(this,vt.delayedCall(0,i,n),a)},t.staggerTo=function(i,n,a,s,o,l,c){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=c,a.parent=this,new vt(i,a,fi(this,o)),this},t.staggerFrom=function(i,n,a,s,o,l,c){return a.runBackwards=1,Ra(a).immediateRender=Yt(a.immediateRender),this.staggerTo(i,n,a,s,o,l,c)},t.staggerFromTo=function(i,n,a,s,o,l,c,h){return s.startAt=a,Ra(s).immediateRender=Yt(s.immediateRender),this.staggerTo(i,n,s,o,l,c,h)},t.render=function(i,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=i<=0?0:ut(i),h=this._zTime<0!=i<0&&(this._initted||!l),u,d,p,m,_,g,f,S,T,v,C,E;if(this!==dt&&c>o&&i>=0&&(c=o),c!==this._tTime||a||h){if(s!==this._time&&l&&(c+=this._time-s,i+=this._time-s),u=c,T=this._start,S=this._ts,g=!S,h&&(l||(s=this._zTime),(i||!n)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,n,a);if(u=ut(c%_),c===o?(m=this._repeat,u=l):(v=ut(c/_),m=~~v,m&&m===v&&(u=l,m--),u>l&&(u=l)),v=ea(this._tTime,_),!s&&this._tTime&&v!==m&&this._tTime-v*_-this._dur<=0&&(v=m),C&&m&1&&(u=l-u,E=1),m!==v&&!this._lock){var w=C&&v&1,A=w===(C&&m&1);if(m<v&&(w=!w),s=w?0:c%l?l:c,this._lock=1,this.render(s||(E?0:ut(m*_)),n,!l)._lock=0,this._tTime=c,!n&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,v=m),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,A&&(this._lock=2,s=w?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;fp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=Ny(this,ut(s),ut(u)),f&&(c-=u-(u=f._start))),this._tTime=c,this._time=u,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&l&&!n&&!v&&(si(this,"onStart"),this._tTime!==c))return this;if(u>=s&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&f!==d){if(d.parent!==this)return this.render(i,n,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,n,a),u!==this._time||!this._ts&&!g){f=0,p&&(c+=this._zTime=-nt);break}}d=p}else{d=this._last;for(var b=i<0?i:u;d;){if(p=d._prev,(d._act||b<=d._end)&&d._ts&&f!==d){if(d.parent!==this)return this.render(i,n,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,n,a||Lt&&zc(d)),u!==this._time||!this._ts&&!g){f=0,p&&(c+=this._zTime=b?-nt:nt);break}}d=p}}if(f&&!n&&(this.pause(),f.render(u>=s?0:-nt)._zTime=u>=s?1:-1,this._ts))return this._start=T,eo(this),this.render(i,n,a);this._onUpdate&&!n&&si(this,"onUpdate",!0),(c===o&&this._tTime>=this.totalDuration()||!c&&s)&&(T===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(c===o&&this._ts>0||!c&&this._ts<0)&&Lr(this,1),!n&&!(i<0&&!s)&&(c||s||!o)&&(si(this,c===o&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,n){var a=this;if(cr(n)||(n=fi(this,n,i)),!(i instanceof Va)){if(Nt(i))return i.forEach(function(s){return a.add(s,n)}),this;if(Ct(i))return this.addLabel(i,n);if(mt(i))i=vt.delayedCall(0,i);else return this}return this!==i?Oi(this,i,n):this},t.getChildren=function(i,n,a,s){i===void 0&&(i=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-vi);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof vt?n&&o.push(l):(a&&o.push(l),i&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},t.getById=function(i){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===i)return n[a]},t.remove=function(i){return Ct(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(i.parent===this&&Qs(this,i),i===this._recent&&(this._recent=this._last),nn(this))},t.totalTime=function(i,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ut(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,n),this._forcing=0,this):this._tTime},t.addLabel=function(i,n){return this.labels[i]=fi(this,n),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,n,a){var s=vt.delayedCall(0,n||za,a);return s.data="isPause",this._hasPause=1,Oi(this,s,fi(this,i))},t.removePause=function(i){var n=this._first;for(i=fi(this,i);n;)n._start===i&&n.data==="isPause"&&Lr(n),n=n._next},t.killTweensOf=function(i,n,a){for(var s=this.getTweensOf(i,a),o=s.length;o--;)Sr!==s[o]&&s[o].kill(i,n);return this},t.getTweensOf=function(i,n){for(var a=[],s=xi(i),o=this._first,l=cr(n),c;o;)o instanceof vt?Ry(o._targets,s)&&(l?(!Sr||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(c=o.getTweensOf(s,n)).length&&a.push.apply(a,c),o=o._next;return a},t.tweenTo=function(i,n){n=n||{};var a=this,s=fi(a,i),o=n,l=o.startAt,c=o.onStart,h=o.onStartParams,u=o.immediateRender,d,p=vt.to(a,hi({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||nt,onStart:function(){if(a.pause(),!d){var m=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==m&&ta(p,m,0,1).render(p._time,!0,!0),d=1}c&&c.apply(p,h||[])}},n));return u?p.render(0):p},t.tweenFromTo=function(i,n,a){return this.tweenTo(n,hi({startAt:{time:fi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Cu(this,fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Cu(this,fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(i=ut(i);s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=i);return nn(this)},t.invalidate=function(i){var n=this._first;for(this._lock=0;n;)n.invalidate(i),n=n._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),nn(this)},t.totalDuration=function(i){var n=0,a=this,s=a._last,o=vi,l,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,Oi(a,s,c-s._delay,1)._lock=0):o=c,c<0&&s._ts&&(n-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ut(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;ta(a,a===dt&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(dt._ts&&(Yd(dt,Xs(i,dt)),jd=ni.frame),ni.frame>=Eu){Eu+=li.autoSleep||120;var n=dt._first;if((!n||!n._ts)&&li.autoSleep&&ni._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ni.sleep()}}},e})(Va);hi(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jy=function(r,e,t,i,n,a,s){var o=new Zt(this._pt,r,e,0,1,Tp,null,n),l=0,c=0,h,u,d,p,m,_,g,f;for(o.b=t,o.e=i,t+="",i+="",(g=~i.indexOf("random("))&&(i=ka(i)),a&&(f=[t,i],a(f,r,e),t=f[0],i=f[1]),u=t.match(Go)||[];h=Go.exec(i);)p=h[0],m=i.substring(l,h.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),p!==u[c++]&&(_=parseFloat(u[c-1])||0,o._pt={_next:o._pt,p:m||c===1?m:",",s:_,c:p.charAt(1)==="="?Bn(_,p)-_:parseFloat(p)-_,m:d&&d<4?Math.round:0},l=Go.lastIndex);return o.c=l<i.length?i.substring(l,i.length):"",o.fp=s,(Vd.test(i)||g)&&(o.e=0),this._pt=o,o},kc=function(r,e,t,i,n,a,s,o,l,c){mt(i)&&(i=i(n||0,r,a));var h=r[e],u=t!=="get"?t:mt(h)?l?r[e.indexOf("set")||!mt(r["get"+e.substr(3)])?e:"get"+e.substr(3)](l):r[e]():h,d=mt(h)?l?iM:yp:Vc,p;if(Ct(i)&&(~i.indexOf("random(")&&(i=ka(i)),i.charAt(1)==="="&&(p=Bn(u,i)+(Ut(u)||0),(p||p===0)&&(i=p))),!c||u!==i||ec)return!isNaN(u*i)&&i!==""?(p=new Zt(this._pt,r,e,+u||0,i-(u||0),typeof h=="boolean"?nM:Mp,0,d),l&&(p.fp=l),s&&p.modifier(s,this,r),this._pt=p):(!h&&!(e in r)&&Nc(e,i),Jy.call(this,r,e,u,i,d,o||li.stringFilter,l))},$y=function(r,e,t,i,n){if(mt(r)&&(r=Pa(r,n,e,t,i)),!Vi(r)||r.style&&r.nodeType||Nt(r)||kd(r))return Ct(r)?Pa(r,n,e,t,i):r;var a={},s;for(s in r)a[s]=Pa(r[s],n,e,t,i);return a},_p=function(r,e,t,i,n,a){var s,o,l,c;if(ri[r]&&(s=new ri[r]).init(n,s.rawVars?e[r]:$y(e[r],i,n,a,t),t,i,a)!==!1&&(t._pt=o=new Zt(t._pt,n,r,0,1,s.render,s,0,s.priority),t!==In))for(l=t._ptLookup[t._targets.indexOf(n)],c=s._props.length;c--;)l[s._props[c]]=o;return s},Sr,ec,Hc=function r(e,t,i){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,p=n.autoRevert,m=e._dur,_=e._startAt,g=e._targets,f=e.parent,S=f&&f.data==="nested"?f.vars.targets:g,T=e._overwrite==="auto"&&!Lc,v=e.timeline,C,E,w,A,b,M,P,B,F,V,q,H,Z;if(v&&(!d||!a)&&(a="none"),e._ease=an(a,$n.ease),e._yEase=u?pp(an(u===!0?a:u,$n.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!n.runBackwards,!v||d&&!n.stagger){if(B=g[0]?rn(g[0]).harness:0,H=B&&n[B.prop],C=Ws(n,Oc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&m?Us:wy),_._lazy=0),s){if(Lr(e._startAt=vt.set(g,hi({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Yt(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!o&&!p)&&e._startAt.revert(Us),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Yt(l),immediateRender:o,stagger:0,parent:f},C),H&&(w[B.prop]=H),Lr(e._startAt=vt.set(g,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(Us):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Yt(l)||l&&!m,E=0;E<g.length;E++){if(b=g[E],P=b._gsap||Bc(g)[E]._gsap,e._ptLookup[E]=V={},Yl[P.id]&&Rr.length&&Gs(),q=S===g?E:S.indexOf(b),B&&(F=new B).init(b,H||C,e,q,S)!==!1&&(e._pt=A=new Zt(e._pt,b,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){V[G]=A}),F.priority&&(M=1)),!B||H)for(w in C)ri[w]&&(F=_p(w,C,e,q,b,S))?F.priority&&(M=1):V[w]=A=kc.call(e,b,w,"get",C[w],q,S,0,n.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),T&&e._pt&&(Sr=e,dt.killTweensOf(b,V,e.globalTime(t)),Z=!e.parent,Sr=0),e._pt&&l&&(Yl[P.id]=1)}M&&Sp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&v.render(vi,!0,!0)},Qy=function(r,e,t,i,n,a,s,o){var l=(r._pt&&r._ptCache||(r._ptCache={}))[e],c,h,u,d;if(!l)for(l=r._ptCache[e]=[],u=r._ptLookup,d=r._targets.length;d--;){if(c=u[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ec=1,r.vars[e]="+=0",Hc(r,s),ec=0,o?Ba(e+" not eligible for reset"):1;l.push(c)}for(d=l.length;d--;)h=l[d],c=h._pt||h,c.s=(i||i===0)&&!n?i:c.s+(i||0)+a*c.c,c.c=t-c.s,h.e&&(h.e=gt(t)+Ut(h.e)),h.b&&(h.b=c.s+Ut(h.b))},eM=function(r,e){var t=r[0]?rn(r[0]).harness:0,i=t&&t.aliases,n,a,s,o;if(!i)return e;n=Qn({},e);for(a in i)if(a in n)for(o=i[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},tM=function(r,e,t,i){var n=e.ease||i||"power1.inOut",a,s;if(Nt(e))s=t[r]||(t[r]=[]),e.forEach(function(o,l){return s.push({t:l/(e.length-1)*100,v:o,e:n})});else for(a in e)s=t[a]||(t[a]=[]),a==="ease"||s.push({t:parseFloat(r),v:e[a],e:n})},Pa=function(r,e,t,i,n){return mt(r)?r.call(e,t,i,n):Ct(r)&&~r.indexOf("random(")?ka(r):r},vp=Fc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xp={};Kt(vp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xp[r]=1});var vt=(function(r){Bd(e,r);function e(i,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=r.call(this,s?n:Ra(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,f=l.yoyoEase,S=n.parent||dt,T=(Nt(i)||kd(i)?cr(i[0]):"length"in n)?[i]:xi(i),v,C,E,w,A,b,M,P;if(o._targets=T.length?Bc(T):Ba("GSAP target "+i+" not found. https://gsap.com",!li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||d||Es(c)||Es(h)){if(n=o.vars,v=o.timeline=new Ht({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:T}),v.kill(),v.parent=v._dp=tr(o),v._start=0,d||Es(c)||Es(h)){if(w=T.length,M=d&&rp(d),Vi(d))for(A in d)~vp.indexOf(A)&&(P||(P={}),P[A]=d[A]);for(C=0;C<w;C++)E=Ws(n,xp),E.stagger=0,f&&(E.yoyoEase=f),P&&Qn(E,P),b=T[C],E.duration=+Pa(c,tr(o),C,b,T),E.delay=(+Pa(h,tr(o),C,b,T)||0)-o._delay,!d&&w===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),v.to(b,E,M?M(C,b,T):0),v._ease=Ge.none;v.duration()?c=h=0:o.timeline=0}else if(m){Ra(hi(v.vars.defaults,{ease:"none"})),v._ease=an(m.ease||n.ease||"none");var B=0,F,V,q;if(Nt(m))m.forEach(function(H){return v.to(T,H,">")}),v.duration();else{E={};for(A in m)A==="ease"||A==="easeEach"||tM(A,m[A],E,m.easeEach);for(A in E)for(F=E[A].sort(function(H,Z){return H.t-Z.t}),B=0,C=0;C<F.length;C++)V=F[C],q={ease:V.e,duration:(V.t-(C?F[C-1].t:0))/100*c},q[A]=V.v,v.to(T,q,B),B+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!Lc&&(Sr=tr(o),dt.killTweensOf(T),Sr=0),Oi(S,tr(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!m&&o._start===ut(S._time)&&Yt(u)&&Dy(tr(o))&&S.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-h)||0)),g&&Qd(tr(o),g),o}var t=e.prototype;return t.render=function(i,n,a){var s=this._time,o=this._tDur,l=this._dur,c=i<0,h=i>o-nt&&!c?o:i<nt?0:i,u,d,p,m,_,g,f,S,T;if(!l)Uy(this,i,n,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,S=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,n,a);if(u=ut(h%m),h===o?(p=this._repeat,u=l):(_=ut(h/m),p=~~_,p&&p===_?(u=l,p--):u>l&&(u=l)),g=this._yoyo&&p&1,g&&(T=this._yEase,u=l-u),_=ea(this._tTime,m),u===s&&!a&&this._initted&&p===_)return this._tTime=h,this;p!==_&&(S&&this._yEase&&fp(S,g),this.vars.repeatRefresh&&!g&&!this._lock&&u!==m&&this._initted&&(this._lock=a=1,this.render(ut(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(ep(this,c?i:u,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,n,a)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=f=(T||this._ease)(u/l),this._from&&(this.ratio=f=1-f),!s&&h&&!n&&!_&&(si(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(f,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),n,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!n&&(c&&Kl(this,i,n,a),si(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!n&&this.parent&&si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Kl(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Lr(this,1),!n&&!(c&&!s)&&(h||s||g)&&(si(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,n,a,s,o){Ha||ni.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hc(this,l),c=this._ease(l/this._dur),Qy(this,i,n,a,s,c,l,o)?this.resetTo(i,n,a,s,1):(to(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,n){if(n===void 0&&(n="all"),!i&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,n,Sr&&Sr.vars.overwrite!==!0)._first||Sa(this),this.parent&&a!==this.timeline.totalDuration()&&ta(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=i?xi(i):s,l=this._ptLookup,c=this._pt,h,u,d,p,m,_,g;if((!n||n==="all")&&Py(s,o))return n==="all"&&(this._pt=0),Sa(this);for(h=this._op=this._op||[],n!=="all"&&(Ct(n)&&(m={},Kt(n,function(f){return m[f]=1}),n=m),n=eM(s,n)),g=s.length;g--;)if(~o.indexOf(s[g])){u=l[g],n==="all"?(h[g]=n,p=u,d={}):(d=h[g]=h[g]||{},p=n);for(m in p)_=u&&u[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Qs(this,_,"_pt"),delete u[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&c&&Sa(this),this},e.to=function(i,n){return new e(i,n,arguments[2])},e.from=function(i,n){return Ca(1,arguments)},e.delayedCall=function(i,n,a,s){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,n,a){return Ca(2,arguments)},e.set=function(i,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(i,n)},e.killTweensOf=function(i,n,a){return dt.killTweensOf(i,n,a)},e})(Va);hi(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new Ht,t=Jl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Vc=function(r,e,t){return r[e]=t},yp=function(r,e,t){return r[e](t)},iM=function(r,e,t,i){return r[e](i.fp,t)},rM=function(r,e,t){return r.setAttribute(e,t)},Gc=function(r,e){return mt(r[e])?yp:Dc(r[e])&&r.setAttribute?rM:Vc},Mp=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e6)/1e6,e)},nM=function(r,e){return e.set(e.t,e.p,!!(e.s+e.c*r),e)},Tp=function(r,e){var t=e._pt,i="";if(!r&&e.b)i=e.b;else if(r===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*r):Math.round((t.s+t.c*r)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Wc=function(r,e){for(var t=e._pt;t;)t.r(r,t.d),t=t._next},aM=function(r,e,t,i){for(var n=this._pt,a;n;)a=n._next,n.p===i&&n.modifier(r,e,t),n=a},sM=function(r){for(var e=this._pt,t,i;e;)i=e._next,e.p===r&&!e.op||e.op===r?Qs(this,e,"_pt"):e.dep||(t=1),e=i;return!t},oM=function(r,e,t,i){i.mSet(r,e,i.m.call(i.tween,t,i.mt),i)},Sp=function(r){for(var e=r._pt,t,i,n,a;e;){for(t=e._next,i=n;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:n=e,(e._next=i)?i._prev=e:a=e,e=t}r._pt=n},Zt=(function(){function r(t,i,n,a,s,o,l,c,h){this.t=i,this.s=a,this.c=s,this.p=n,this.r=o||Mp,this.d=l||this,this.set=c||Vc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(t,i,n){this.mSet=this.mSet||this.set,this.set=oM,this.m=t,this.mt=n,this.tween=i},r})();Kt(Fc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Oc[r]=1});ci.TweenMax=ci.TweenLite=vt;ci.TimelineLite=ci.TimelineMax=Ht;dt=new Ht({sortChildren:!1,defaults:$n,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=dp;var sn=[],Os={},lM=[],Lu=0,cM=0,Yo=function(r){return(Os[r]||lM).map(function(e){return e()})},tc=function(){var r=Date.now(),e=[];r-Lu>2&&(Yo("matchMediaInit"),sn.forEach(function(t){var i=t.queries,n=t.conditions,a,s,o,l;for(s in i)a=Ii.matchMedia(i[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(t.revert(),o&&e.push(t))}),Yo("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Lu=r,Yo("matchMedia"))},bp=(function(){function r(t,i){this.selector=i&&$l(i),this.data=[],this._r=[],this.isReverted=!1,this.id=cM++,t&&this.add(t)}var e=r.prototype;return e.add=function(t,i,n){mt(t)&&(n=i,i=t,t=mt);var a=this,s=function(){var o=ht,l=a.selector,c;return o&&o!==a&&o.data.push(a),n&&(a.selector=$l(n)),ht=a,c=i.apply(a,arguments),mt(c)&&a._r.push(c),ht=o,a.selector=l,a.isReverted=!1,c};return a.last=s,t===mt?s(a,function(o){return a.add(null,o)}):t?a[t]=s:s},e.ignore=function(t){var i=ht;ht=null,t(this),ht=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var n=this;if(t?(function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(t)}),o=n.data.length;o--;)l=n.data[o],l instanceof Ht?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof vt)&&l.revert&&l.revert(t);n._r.forEach(function(c){return c(t,n)}),n.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=sn.length;a--;)sn[a].id===this.id&&sn.splice(a,1)},e.revert=function(t){this.kill(t||{})},r})(),hM=(function(){function r(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=r.prototype;return e.add=function(t,i,n){Vi(t)||(t={matches:t});var a=new bp(0,n||this.scope),s=a.conditions={},o,l,c;ht&&!a.selector&&(a.selector=ht.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=t;for(l in t)l==="all"?c=1:(o=Ii.matchMedia(t[l]),o&&(sn.indexOf(a)<0&&sn.push(a),(s[l]=o.matches)&&(c=1),o.addListener?o.addListener(tc):o.addEventListener("change",tc)));return c&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r})(),js={registerPlugin:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e.forEach(function(i){return cp(i)})},timeline:function(r){return new Ht(r)},getTweensOf:function(r,e){return dt.getTweensOf(r,e)},getProperty:function(r,e,t,i){Ct(r)&&(r=xi(r)[0]);var n=rn(r||{}).get,a=t?Zd:Kd;return t==="native"&&(t=""),r&&(e?a((ri[e]&&ri[e].get||n)(r,e,t,i)):function(s,o,l){return a((ri[s]&&ri[s].get||n)(r,s,o,l))})},quickSetter:function(r,e,t){if(r=xi(r),r.length>1){var i=r.map(function(c){return $t.quickSetter(c,e,t)}),n=i.length;return function(c){for(var h=n;h--;)i[h](c)}}r=r[0]||{};var a=ri[e],s=rn(r),o=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(c){var h=new a;In._pt=0,h.init(r,t?c+t:c,In,0,[r]),h.render(1,h),In._pt&&Wc(1,In)}:s.set(r,o);return a?l:function(c){return l(r,o,t?c+t:c,s,1)}},quickTo:function(r,e,t){var i,n=$t.to(r,hi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),a=function(s,o,l){return n.resetTo(e,s,o,l)};return a.tween=n,a},isTweening:function(r){return dt.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=an(r.ease,$n.ease)),wu($n,r||{})},config:function(r){return wu(li,r||{})},registerEffect:function(r){var e=r.name,t=r.effect,i=r.plugins,n=r.defaults,a=r.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ri[s]&&!ci[s]&&Ba(e+" effect requires "+s+" plugin.")}),Wo[e]=function(s,o,l){return t(xi(s),hi(o||{},n),l)},a&&(Ht.prototype[e]=function(s,o,l){return this.add(Wo[e](s,Vi(o)?o:(l=o)&&{},this),l)})},registerEase:function(r,e){Ge[r]=an(e)},parseEase:function(r,e){return arguments.length?an(r,e):Ge},getById:function(r){return dt.getById(r)},exportRoot:function(r,e){r===void 0&&(r={});var t=new Ht(r),i,n;for(t.smoothChildTiming=Yt(r.smoothChildTiming),dt.remove(t),t._dp=0,t._time=t._tTime=dt._time,i=dt._first;i;)n=i._next,(e||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Oi(t,i,i._start-i._delay),i=n;return Oi(dt,t,0),t},context:function(r,e){return r?new bp(r,e):ht},matchMedia:function(r){return new hM(r)},matchMediaRefresh:function(){return sn.forEach(function(r){var e=r.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&r.revert()})||tc()},addEventListener:function(r,e){var t=Os[r]||(Os[r]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(r,e){var t=Os[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:Vy,wrapYoyo:Gy,distribute:rp,random:ap,snap:np,normalize:Hy,getUnit:Ut,clamp:Fy,splitColor:hp,toArray:xi,selector:$l,mapRange:op,pipe:zy,unitize:ky,interpolate:Wy,shuffle:ip},install:Wd,effects:Wo,ticker:ni,updateRoot:Ht.updateRoot,plugins:ri,globalTimeline:dt,core:{PropTween:Zt,globals:Xd,Tween:vt,Timeline:Ht,Animation:Va,getCache:rn,_removeLinkedListItem:Qs,reverting:function(){return Lt},context:function(r){return r&&ht&&(ht.data.push(r),r._ctx=ht),ht},suppressOverwrites:function(r){return Lc=r}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return js[r]=vt[r]});ni.add(Ht.updateRoot);In=js.to({},{duration:0});var uM=function(r,e){for(var t=r._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},dM=function(r,e){var t=r._targets,i,n,a;for(i in e)for(n=t.length;n--;)a=r._ptLookup[n][i],a&&(a=a.d)&&(a._pt&&(a=uM(a,i)),a&&a.modifier&&a.modifier(e[i],r,t[n],i))},Ko=function(r,e){return{name:r,headless:1,rawVars:1,init:function(t,i,n){n._onInit=function(a){var s,o;if(Ct(i)&&(s={},Kt(i,function(l){return s[l]=1}),i=s),e){s={};for(o in i)s[o]=e(i[o]);i=s}dM(a,i)}}}},$t=js.registerPlugin({name:"attr",init:function(r,e,t,i,n){var a,s,o;this.tween=t;for(a in e)o=r.getAttribute(a)||"",s=this.add(r,"setAttribute",(o||0)+"",e[a],i,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(r,e){for(var t=e._pt;t;)Lt?t.set(t.t,t.p,t.b,t):t.r(r,t.d),t=t._next}},{name:"endArray",headless:1,init:function(r,e){for(var t=e.length;t--;)this.add(r,t,r[t]||0,e[t],0,0,0,0,0,1)}},Ko("roundProps",Ql),Ko("modifiers"),Ko("snap",np))||js;vt.version=Ht.version=$t.version="3.14.2";Gd=1;Ic()&&ia();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Du,br,zn,Xc,en,Iu,jc,pM=function(){return typeof window<"u"},hr={},Zr=180/Math.PI,kn=Math.PI/180,Rn=Math.atan2,Uu=1e8,qc=/([A-Z])/g,fM=/(left|right|width|margin|padding|x)/i,mM=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ic=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},gM=function(r,e){return e.set(e.t,e.p,r===1?e.e:Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},_M=function(r,e){return e.set(e.t,e.p,r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},vM=function(r,e){return e.set(e.t,e.p,r===1?e.e:r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},xM=function(r,e){var t=e.s+e.c*r;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Ep=function(r,e){return e.set(e.t,e.p,r?e.e:e.b,e)},wp=function(r,e){return e.set(e.t,e.p,r!==1?e.b:e.e,e)},yM=function(r,e,t){return r.style[e]=t},MM=function(r,e,t){return r.style.setProperty(e,t)},TM=function(r,e,t){return r._gsap[e]=t},SM=function(r,e,t){return r._gsap.scaleX=r._gsap.scaleY=t},bM=function(r,e,t,i,n){var a=r._gsap;a.scaleX=a.scaleY=t,a.renderTransform(n,a)},EM=function(r,e,t,i,n){var a=r._gsap;a[e]=t,a.renderTransform(n,a)},pt="transform",Jt=pt+"Origin",wM=function r(e,t){var i=this,n=this.target,a=n.style,s=n._gsap;if(e in hr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=rr(n,o)}):this.tfm[e]=s.x?s[e]:rr(n,e),e===Jt&&(this.tfm.zOrigin=s.zOrigin);else return Fi.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(pt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Jt,t,"")),e=pt}(a||t)&&this.props.push(e,t,a[e])},Ap=function(r){r.translate&&(r.removeProperty("translate"),r.removeProperty("scale"),r.removeProperty("rotate"))},AM=function(){var r=this.props,e=this.target,t=e.style,i=e._gsap,n,a;for(n=0;n<r.length;n+=3)r[n+1]?r[n+1]===2?e[r[n]](r[n+2]):e[r[n]]=r[n+2]:r[n+2]?t[r[n]]=r[n+2]:t.removeProperty(r[n].substr(0,2)==="--"?r[n]:r[n].replace(qc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=jc(),(!n||!n.isStart)&&!t[pt]&&(Ap(t),i.zOrigin&&t[Jt]&&(t[Jt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rp=function(r,e){var t={target:r,props:[],revert:AM,save:wM};return r._gsap||$t.core.getCache(r),e&&r.style&&r.nodeType&&e.split(",").forEach(function(i){return t.save(i)}),t},Cp,rc=function(r,e){var t=br.createElementNS?br.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),r):br.createElement(r);return t&&t.style?t:br.createElement(r)},oi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(qc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,ra(t)||t,1)||""},Nu="O,Moz,ms,Ms,Webkit".split(","),ra=function(r,e,t){var i=e||en,n=i.style,a=5;if(r in n&&!t)return r;for(r=r.charAt(0).toUpperCase()+r.substr(1);a--&&!(Nu[a]+r in n););return a<0?null:(a===3?"ms":a>=0?Nu[a]:"")+r},nc=function(){pM()&&window.document&&(Du=window,br=Du.document,zn=br.documentElement,en=rc("div")||{style:{}},rc("div"),pt=ra(pt),Jt=pt+"Origin",en.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cp=!!ra("perspective"),jc=$t.core.reverting,Xc=1)},Ou=function(r){var e=r.ownerSVGElement,t=rc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=r.cloneNode(!0),n;i.style.display="block",t.appendChild(i),zn.appendChild(t);try{n=i.getBBox()}catch{}return t.removeChild(i),zn.removeChild(t),n},Fu=function(r,e){for(var t=e.length;t--;)if(r.hasAttribute(e[t]))return r.getAttribute(e[t])},Pp=function(r){var e,t;try{e=r.getBBox()}catch{e=Ou(r),t=1}return e&&(e.width||e.height)||t||(e=Ou(r)),e&&!e.width&&!e.x&&!e.y?{x:+Fu(r,["x","cx","x1"])||0,y:+Fu(r,["y","cy","y1"])||0,width:0,height:0}:e},Lp=function(r){return!!(r.getCTM&&(!r.parentNode||r.ownerSVGElement)&&Pp(r))},Dr=function(r,e){if(e){var t=r.style,i;e in hr&&e!==Jt&&(e=pt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(qc,"-$1").toLowerCase())):t.removeAttribute(e)}},Er=function(r,e,t,i,n,a){var s=new Zt(r._pt,e,t,0,1,a?wp:Ep);return r._pt=s,s.b=i,s.e=n,r._props.push(t),s},Bu={deg:1,rad:1,turn:1},RM={grid:1,flex:1},Ir=function r(e,t,i,n){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=en.style,l=fM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",p=n==="%",m,_,g,f;if(n===s||!a||Bu[n]||Bu[s])return a;if(s!=="px"&&!d&&(a=r(e,t,i,"px")),f=e.getCTM&&Lp(e),(p||s==="%")&&(hr[t]||~t.indexOf("adius")))return m=f?e.getBBox()[l?"width":"height"]:e[h],gt(p?a/m*u:a/100*m);if(o[l?"width":"height"]=u+(d?s:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===br||!_.appendChild)&&(_=br.body),g=_._gsap,g&&p&&g.width&&l&&g.time===ni.time&&!g.uncache)return gt(a/g.width*u);if(p&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+n,m=e[h],S?e.style[t]=S:Dr(e,t)}else(p||s==="%")&&!RM[oi(_,"display")]&&(o.position=oi(e,"position")),_===e&&(o.position="static"),_.appendChild(en),m=en[h],_.removeChild(en),o.position="absolute";return l&&p&&(g=rn(_),g.time=ni.time,g.width=_[h]),gt(d?m*a/u:m&&a?u/m*a:0)},rr=function(r,e,t,i){var n;return Xc||nc(),e in Fi&&e!=="transform"&&(e=Fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),hr[e]&&e!=="transform"?(n=Wa(r,i),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Ys(oi(r,Jt))+" "+n.zOrigin+"px"):(n=r.style[e],(!n||n==="auto"||i||~(n+"").indexOf("calc("))&&(n=qs[e]&&qs[e](r,e,t)||oi(r,e)||qd(r,e)||(e==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Ir(r,e,n,t)+t:n},CM=function(r,e,t,i){if(!t||t==="none"){var n=ra(e,r,1),a=n&&oi(r,n,1);a&&a!==t?(e=n,t=a):e==="borderColor"&&(t=oi(r,"borderTopColor"))}var s=new Zt(this._pt,r.style,e,0,1,Tp),o=0,l=0,c,h,u,d,p,m,_,g,f,S,T,v;if(s.b=t,s.e=i,t+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(r,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=r.style[e],r.style[e]=i,i=oi(r,e)||i,m?r.style[e]=m:Dr(r,e)),c=[t,i],dp(c),t=c[0],i=c[1],u=t.match(Dn)||[],v=i.match(Dn)||[],v.length){for(;h=Dn.exec(i);)_=h[0],f=i.substring(o,h.index),p?p=(p+1)%5:(f.substr(-5)==="rgba("||f.substr(-5)==="hsla(")&&(p=1),_!==(m=u[l++]||"")&&(d=parseFloat(m)||0,T=m.substr((d+"").length),_.charAt(1)==="="&&(_=Bn(d,_)+T),g=parseFloat(_),S=_.substr((g+"").length),o=Dn.lastIndex-S.length,S||(S=S||li.units[e]||T,o===i.length&&(i+=S,s.e+=S)),T!==S&&(d=Ir(r,e,m,S)||0),s._pt={_next:s._pt,p:f||l===1?f:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});s.c=o<i.length?i.substring(o,i.length):""}else s.r=e==="display"&&i==="none"?wp:Ep;return Vd.test(i)&&(s.e=0),this._pt=s,s},zu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PM=function(r){var e=r.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(r=t,t=i,i=r),e[0]=zu[t]||t,e[1]=zu[i]||i,e.join(" ")},LM=function(r,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,n=e.u,a=t._gsap,s,o,l;if(n==="all"||n===!0)i.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],hr[s]&&(o=1,s=s==="transformOrigin"?Jt:pt),Dr(t,s);o&&(Dr(t,pt),a&&(a.svg&&t.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(t,1),a.uncache=1,Ap(i)))}},qs={clearProps:function(r,e,t,i,n){if(n.data!=="isFromStart"){var a=r._pt=new Zt(r._pt,e,t,0,0,LM);return a.u=i,a.pr=-10,a.tween=n,r._props.push(t),1}}},Ga=[1,0,0,1,0,0],Dp={},Ip=function(r){return r==="matrix(1, 0, 0, 1, 0, 0)"||r==="none"||!r},ku=function(r){var e=oi(r,pt);return Ip(e)?Ga:e.substr(7).match(Hd).map(gt)},Yc=function(r,e){var t=r._gsap||rn(r),i=r.style,n=ku(r),a,s,o,l;return t.svg&&r.getAttribute("transform")?(o=r.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?Ga:n):(n===Ga&&!r.offsetParent&&r!==zn&&!t.svg&&(o=i.display,i.display="block",a=r.parentNode,(!a||!r.offsetParent&&!r.getBoundingClientRect().width)&&(l=1,s=r.nextElementSibling,zn.appendChild(r)),n=ku(r),o?i.display=o:Dr(r,"display"),l&&(s?a.insertBefore(r,s):a?a.appendChild(r):zn.removeChild(r))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},ac=function(r,e,t,i,n,a){var s=r._gsap,o=n||Yc(r,!0),l=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,d=o[0],p=o[1],m=o[2],_=o[3],g=o[4],f=o[5],S=e.split(" "),T=parseFloat(S[0])||0,v=parseFloat(S[1])||0,C,E,w,A;t?o!==Ga&&(E=d*_-p*m)&&(w=T*(_/E)+v*(-m/E)+(m*f-_*g)/E,A=T*(-p/E)+v*(d/E)-(d*f-p*g)/E,T=w,v=A):(C=Pp(r),T=C.x+(~S[0].indexOf("%")?T/100*C.width:T),v=C.y+(~(S[1]||S[0]).indexOf("%")?v/100*C.height:v)),i||i!==!1&&s.smooth?(g=T-l,f=v-c,s.xOffset=h+(g*d+f*m)-g,s.yOffset=u+(g*p+f*_)-f):s.xOffset=s.yOffset=0,s.xOrigin=T,s.yOrigin=v,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!t,r.style[Jt]="0px 0px",a&&(Er(a,s,"xOrigin",l,T),Er(a,s,"yOrigin",c,v),Er(a,s,"xOffset",h,s.xOffset),Er(a,s,"yOffset",u,s.yOffset)),r.setAttribute("data-svg-origin",T+" "+v)},Wa=function(r,e){var t=r._gsap||new gp(r);if("x"in t&&!e&&!t.uncache)return t;var i=r.style,n=t.scaleX<0,a="px",s="deg",o=getComputedStyle(r),l=oi(r,Jt)||"0",c,h,u,d,p,m,_,g,f,S,T,v,C,E,w,A,b,M,P,B,F,V,q,H,Z,G,te,ce,Se,Oe,He,W;return c=h=u=m=_=g=f=S=T=0,d=p=1,t.svg=!!(r.getCTM&&Lp(r)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(i[pt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[pt]!=="none"?o[pt]:"")),i.scale=i.rotate=i.translate="none"),E=Yc(r,t.svg),t.svg&&(t.uncache?(Z=r.getBBox(),l=t.xOrigin-Z.x+"px "+(t.yOrigin-Z.y)+"px",H=""):H=!e&&r.getAttribute("data-svg-origin"),ac(r,H||l,!!H||t.originIsAbsolute,t.smooth!==!1,E)),v=t.xOrigin||0,C=t.yOrigin||0,E!==Ga&&(M=E[0],P=E[1],B=E[2],F=E[3],c=V=E[4],h=q=E[5],E.length===6?(d=Math.sqrt(M*M+P*P),p=Math.sqrt(F*F+B*B),m=M||P?Rn(P,M)*Zr:0,f=B||F?Rn(B,F)*Zr+m:0,f&&(p*=Math.abs(Math.cos(f*kn))),t.svg&&(c-=v-(v*M+C*B),h-=C-(v*P+C*F))):(W=E[6],Oe=E[7],te=E[8],ce=E[9],Se=E[10],He=E[11],c=E[12],h=E[13],u=E[14],w=Rn(W,Se),_=w*Zr,w&&(A=Math.cos(-w),b=Math.sin(-w),H=V*A+te*b,Z=q*A+ce*b,G=W*A+Se*b,te=V*-b+te*A,ce=q*-b+ce*A,Se=W*-b+Se*A,He=Oe*-b+He*A,V=H,q=Z,W=G),w=Rn(-B,Se),g=w*Zr,w&&(A=Math.cos(-w),b=Math.sin(-w),H=M*A-te*b,Z=P*A-ce*b,G=B*A-Se*b,He=F*b+He*A,M=H,P=Z,B=G),w=Rn(P,M),m=w*Zr,w&&(A=Math.cos(w),b=Math.sin(w),H=M*A+P*b,Z=V*A+q*b,P=P*A-M*b,q=q*A-V*b,M=H,V=Z),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,g=180-g),d=gt(Math.sqrt(M*M+P*P+B*B)),p=gt(Math.sqrt(q*q+W*W)),w=Rn(V,q),f=Math.abs(w)>2e-4?w*Zr:0,T=He?1/(He<0?-He:He):0),t.svg&&(H=r.getAttribute("transform"),t.forceCSS=r.setAttribute("transform","")||!Ip(oi(r,pt)),H&&r.setAttribute("transform",H))),Math.abs(f)>90&&Math.abs(f)<270&&(n?(d*=-1,f+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,f+=f<=0?180:-180)),e=e||t.uncache,t.x=c-((t.xPercent=c&&(!e&&t.xPercent||(Math.round(r.offsetWidth/2)===Math.round(-c)?-50:0)))?r.offsetWidth*t.xPercent/100:0)+a,t.y=h-((t.yPercent=h&&(!e&&t.yPercent||(Math.round(r.offsetHeight/2)===Math.round(-h)?-50:0)))?r.offsetHeight*t.yPercent/100:0)+a,t.z=u+a,t.scaleX=gt(d),t.scaleY=gt(p),t.rotation=gt(m)+s,t.rotationX=gt(_)+s,t.rotationY=gt(g)+s,t.skewX=f+s,t.skewY=S+s,t.transformPerspective=T+a,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(i[Jt]=Ys(l)),t.xOffset=t.yOffset=0,t.force3D=li.force3D,t.renderTransform=t.svg?IM:Cp?Up:DM,t.uncache=0,t},Ys=function(r){return(r=r.split(" "))[0]+" "+r[1]},Zo=function(r,e,t){var i=Ut(e);return gt(parseFloat(e)+parseFloat(Ir(r,"x",t+"px",i)))+i},DM=function(r,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Up(r,e)},jr="0deg",xa="0px",qr=") ",Up=function(r,e){var t=e||this,i=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.z,l=t.rotation,c=t.rotationY,h=t.rotationX,u=t.skewX,d=t.skewY,p=t.scaleX,m=t.scaleY,_=t.transformPerspective,g=t.force3D,f=t.target,S=t.zOrigin,T="",v=g==="auto"&&r&&r!==1||g===!0;if(S&&(h!==jr||c!==jr)){var C=parseFloat(c)*kn,E=Math.sin(C),w=Math.cos(C),A;C=parseFloat(h)*kn,A=Math.cos(C),a=Zo(f,a,E*A*-S),s=Zo(f,s,-Math.sin(C)*-S),o=Zo(f,o,w*A*-S+S)}_!==xa&&(T+="perspective("+_+qr),(i||n)&&(T+="translate("+i+"%, "+n+"%) "),(v||a!==xa||s!==xa||o!==xa)&&(T+=o!==xa||v?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+qr),l!==jr&&(T+="rotate("+l+qr),c!==jr&&(T+="rotateY("+c+qr),h!==jr&&(T+="rotateX("+h+qr),(u!==jr||d!==jr)&&(T+="skew("+u+", "+d+qr),(p!==1||m!==1)&&(T+="scale("+p+", "+m+qr),f.style[pt]=T||"translate(0, 0)"},IM=function(r,e){var t=e||this,i=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.rotation,l=t.skewX,c=t.skewY,h=t.scaleX,u=t.scaleY,d=t.target,p=t.xOrigin,m=t.yOrigin,_=t.xOffset,g=t.yOffset,f=t.forceCSS,S=parseFloat(a),T=parseFloat(s),v,C,E,w,A;o=parseFloat(o),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,o+=c),o||l?(o*=kn,l*=kn,v=Math.cos(o)*h,C=Math.sin(o)*h,E=Math.sin(o-l)*-u,w=Math.cos(o-l)*u,l&&(c*=kn,A=Math.tan(l-c),A=Math.sqrt(1+A*A),E*=A,w*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),v*=A,C*=A)),v=gt(v),C=gt(C),E=gt(E),w=gt(w)):(v=h,w=u,C=E=0),(S&&!~(a+"").indexOf("px")||T&&!~(s+"").indexOf("px"))&&(S=Ir(d,"x",a,"px"),T=Ir(d,"y",s,"px")),(p||m||_||g)&&(S=gt(S+p-(p*v+m*E)+_),T=gt(T+m-(p*C+m*w)+g)),(i||n)&&(A=d.getBBox(),S=gt(S+i/100*A.width),T=gt(T+n/100*A.height)),A="matrix("+v+","+C+","+E+","+w+","+S+","+T+")",d.setAttribute("transform",A),f&&(d.style[pt]=A)},UM=function(r,e,t,i,n){var a=360,s=Ct(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?Zr:1),l=o-i,c=i+l+"deg",h,u;return s&&(h=n.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Uu)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Uu)%a-~~(l/a)*a)),r._pt=u=new Zt(r._pt,e,t,i,l,gM),u.e=c,u.u="deg",r._props.push(t),u},Hu=function(r,e){for(var t in e)r[t]=e[t];return r},NM=function(r,e,t){var i=Hu({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=t.style,s,o,l,c,h,u,d,p;i.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),a[pt]=e,s=Wa(t,1),Dr(t,pt),t.setAttribute("transform",l)):(l=getComputedStyle(t)[pt],a[pt]=e,s=Wa(t,1),a[pt]=l);for(o in hr)l=i[o],c=s[o],l!==c&&n.indexOf(o)<0&&(d=Ut(l),p=Ut(c),h=d!==p?Ir(t,o,l,p):parseFloat(l),u=parseFloat(c),r._pt=new Zt(r._pt,s,o,h,u-h,ic),r._pt.u=p||0,r._props.push(o));Hu(s,i)};Kt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",a="Left",s=(e<3?[t,i,n,a]:[t+a,t+i,n+i,n+a]).map(function(o){return e<2?r+o:"border"+o+r});qs[e>1?"border"+r:r]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=s.map(function(m){return rr(o,m,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},s.forEach(function(m,_){return p[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,p,u)}});var Np={name:"css",register:nc,targetTest:function(r){return r.style&&r.nodeType},init:function(r,e,t,i,n){var a=this._props,s=r.style,o=t.vars.startAt,l,c,h,u,d,p,m,_,g,f,S,T,v,C,E,w,A;Xc||nc(),this.styles=this.styles||Rp(r),w=this.styles.props,this.tween=t;for(m in e)if(m!=="autoRound"&&(c=e[m],!(ri[m]&&_p(m,e,t,i,r,n)))){if(d=typeof c,p=qs[m],d==="function"&&(c=c.call(t,i,r,n),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=ka(c)),p)p(this,r,m,c,t)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(r).getPropertyValue(m)+"").trim(),c+="",Cr.lastIndex=0,Cr.test(l)||(_=Ut(l),g=Ut(c),g?_!==g&&(l=Ir(r,m,l,g)+g):_&&(c+=_)),this.add(s,"setProperty",l,c,i,n,0,0,m),a.push(m),w.push(m,0,s[m]);else if(d!=="undefined"){if(o&&m in o?(l=typeof o[m]=="function"?o[m].call(t,i,r,n):o[m],Ct(l)&&~l.indexOf("random(")&&(l=ka(l)),Ut(l+"")||l==="auto"||(l+=li.units[m]||Ut(rr(r,m))||""),(l+"").charAt(1)==="="&&(l=rr(r,m))):l=rr(r,m),u=parseFloat(l),f=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),f&&(c=c.substr(2)),h=parseFloat(c),m in Fi&&(m==="autoAlpha"&&(u===1&&rr(r,"visibility")==="hidden"&&h&&(u=0),w.push("visibility",0,s.visibility),Er(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Fi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),S=m in hr,S){if(this.styles.save(m),A=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=oi(r,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=r.style.perspective;r.style.perspective=c,c=oi(r,"perspective"),b?r.style.perspective=b:Dr(r,"perspective")}h=parseFloat(c)}if(T||(v=r._gsap,v.renderTransform&&!e.parseTransform||Wa(r,e.parseTransform),C=e.smoothOrigin!==!1&&v.smooth,T=this._pt=new Zt(this._pt,s,pt,0,1,v.renderTransform,v,0,-1),T.dep=1),m==="scale")this._pt=new Zt(this._pt,v,"scaleY",v.scaleY,(f?Bn(v.scaleY,f+h):h)-v.scaleY||0,ic),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){w.push(Jt,0,s[Jt]),c=PM(c),v.svg?ac(r,c,0,C,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==v.zOrigin&&Er(this,v,"zOrigin",v.zOrigin,g),Er(this,s,m,Ys(l),Ys(c)));continue}else if(m==="svgOrigin"){ac(r,c,1,C,0,this);continue}else if(m in Dp){UM(this,v,m,u,f?Bn(u,f+c):c);continue}else if(m==="smoothOrigin"){Er(this,v,"smooth",v.smooth,c);continue}else if(m==="force3D"){v[m]=c;continue}else if(m==="transform"){NM(this,c,r);continue}}else m in s||(m=ra(m)||m);if(S||(h||h===0)&&(u||u===0)&&!mM.test(c)&&m in s)_=(l+"").substr((u+"").length),h||(h=0),g=Ut(c)||(m in li.units?li.units[m]:_),_!==g&&(u=Ir(r,m,l,g)),this._pt=new Zt(this._pt,S?v:s,m,u,(f?Bn(u,f+h):h)-u,!S&&(g==="px"||m==="zIndex")&&e.autoRound!==!1?xM:ic),this._pt.u=g||0,S&&A!==c?(this._pt.b=l,this._pt.e=A,this._pt.r=vM):_!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=_M);else if(m in s)CM.call(this,r,m,l,f?f+c:c);else if(m in r)this.add(r,m,l||r[m],f?f+c:c,i,n);else if(m!=="parseTransform"){Nc(m,c);continue}S||(m in s?w.push(m,0,s[m]):typeof r[m]=="function"?w.push(m,2,r[m]()):w.push(m,1,l||r[m])),a.push(m)}}E&&Sp(this)},render:function(r,e){if(e.tween._time||!jc())for(var t=e._pt;t;)t.r(r,t.d),t=t._next;else e.styles.revert()},get:rr,aliases:Fi,getSetter:function(r,e,t){var i=Fi[e];return i&&i.indexOf(",")<0&&(e=i),e in hr&&e!==Jt&&(r._gsap.x||rr(r,"x"))?t&&Iu===t?e==="scale"?SM:TM:(Iu=t||{})&&(e==="scale"?bM:EM):r.style&&!Dc(r.style[e])?yM:~e.indexOf("-")?MM:Gc(r,e)},core:{_removeProperty:Dr,_getMatrix:Yc}};$t.utils.checkPrefix=ra;$t.core.getStyleSaver=Rp;(function(r,e,t,i){var n=Kt(r+","+e+","+t,function(a){hr[a]=1});Kt(e,function(a){li.units[a]="deg",Dp[a]=1}),Fi[n[13]]=r+","+e,Kt(i,function(a){var s=a.split(":");Fi[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});$t.registerPlugin(Np);var on=$t.registerPlugin(Np)||$t;on.core.Tween;function Vu(r,e){if(e===Rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zl||e===cd){let t=r.getIndex();if(t===null){const s=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===zl)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class OM extends la{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new HM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)})}load(e,t,i,n){const a=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=Aa.extractUrlBase(e);s=Aa.resolveURL(c,this.path)}else s=Aa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Pd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let a;const s={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Op){try{s[Ve.KHR_BINARY_GLTF]=new iT(e)}catch(h){n&&n(h);return}a=JSON.parse(s[Ve.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mT(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:s[u]=new zM;break;case Ve.KHR_DRACO_MESH_COMPRESSION:s[u]=new rT(a,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:s[u]=new nT;break;case Ve.KHR_MESH_QUANTIZATION:s[u]=new aT;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,a){i.parse(e,t,n,a)})}}function FM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BM{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const l=new Pe(16777215);s.color!==void 0&&l.setRGB(s.color[0],s.color[1],s.color[2],Xt);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new wc(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Ld(l),o.distance=c;break;case"spot":o=new rg(l),o.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),ir(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),n=Promise.resolve(o),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return i._getNodeRef(t.cache,a,s)})}}class zM{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Mr}extendParams(e,t,i){const n=[];e.color=new Pe(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Xt),e.opacity=s[3]}a.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",a.baseColorTexture,At))}return Promise.all(n)}}class kM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class HM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(a)}}class VM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class GM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class WM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,At)),s.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class XM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class jM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Xt),Promise.all(a)}}class qM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class YM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Xt),s.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,At)),Promise.all(a)}}class KM{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}}class ZM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class JM{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const a=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class $M{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,s.source,l)}}class QM{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,s.source,l)}}class eT{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],a=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,n.mode,n.filter),p})})}else return null}}class tT{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==mi.TRIANGLES&&l.mode!==mi.TRIANGLE_STRIP&&l.mode!==mi.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,s=[],o={};for(const l in a)s.push(this.parser.getDependency("accessor",a[l]).then(c=>(o[l]=c,o[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const p of h){const m=new Ue,_=new D,g=new ki,f=new D(1,1,1),S=new bd(p.geometry,p.material,u);for(let T=0;T<u;T++)o.TRANSLATION&&_.fromBufferAttribute(o.TRANSLATION,T),o.ROTATION&&g.fromBufferAttribute(o.ROTATION,T),o.SCALE&&f.fromBufferAttribute(o.SCALE,T),S.setMatrixAt(T,m.compose(_,g,f));for(const T in o)if(T==="_COLOR_0"){const v=o[T];S.instanceColor=new Hl(v.array,v.itemSize,v.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&p.geometry.setAttribute(T,o[T]);lt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),d.push(S)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const Op="glTF",ya=12,Gu={JSON:1313821514,BIN:5130562};class iT{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ya),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ya,a=new DataView(e,ya);let s=0;for(;s<n;){const o=a.getUint32(s,!0);s+=4;const l=a.getUint32(s,!0);if(s+=4,l===Gu.JSON){const c=new Uint8Array(e,ya+s,o);this.content=i.decode(c)}else if(l===Gu.BIN){const c=ya+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=sc[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=sc[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],p=Hn[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(p){for(const m in p.attributes){const _=p.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(p)},o,c,Xt,d)})})}}class nT{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aT{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Fp extends ja{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[a+s];return t}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,p=d*u,m=e*c,_=m-c,g=-2*p+3*d,f=p-d,S=1-g,T=f-d+u;for(let v=0;v!==o;v++){const C=s[_+v+o],E=s[_+v+l]*h,w=s[m+v+o],A=s[m+v]*h;a[v]=S*C+T*E+g*w+f*A}return a}}const sT=new ki;class oT extends Fp{interpolate_(e,t,i,n){const a=super.interpolate_(e,t,i,n);return sT.fromArray(a).normalize().toArray(a),a}}const mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wu={9728:Gt,9729:ai,9984:td,9985:As,9986:Ma,9987:nr},Xu={33071:yr,33648:Fs,10497:Xn},Jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lT={CUBICSPLINE:void 0,LINEAR:Oa,STEP:Na},$o={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Yn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:lr})),r.DefaultMaterial}function Yr(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hT(r,e,t){let i=!1,n=!1,a=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(a=!0),i&&n&&a)break}if(!i&&!n&&!a)return Promise.resolve(r);const s=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;s.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(a){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),a&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function uT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dT(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qo(t.attributes):e=r.indices+":"+Qo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+Qo(r.targets[i]);return e}function Qo(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function oc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fT=new Ue;class mT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,a=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,s=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||a&&s<98?this.textureLoader=new eg(this.options.manager):this.textureLoader=new og(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return Yr(a,o,n),ir(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,a=t.length;n<a;n++){const s=t[n].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let n=0,a=e.length;n<a;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),a=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,h]of s.children.entries())a(h,o.children[c])};return a(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const a=e(t[n]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":n=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(a,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(a,s){i.load(Aa.resolveURL(t.uri,n.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=Jo[n.type],o=Hn[n.componentType],l=n.normalized===!0,c=new o(n.count*s);return Promise.resolve(new Wt(c,s,l))}const a=[];return n.bufferView!==void 0?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),n.sparse!==void 0&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],l=Jo[n.type],c=Hn[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let _,g;if(p&&p!==u){const f=Math.floor(d/p),S="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let T=t.cache.get(S);T||(_=new c(o,f*p,n.count*p/h),T=new Cm(_,p/h),t.cache.add(S,T)),g=new yc(T,l,d%p/h,m)}else o===null?_=new c(n.count*l):_=new c(o,d,n.count*l),g=new Wt(_,l,m);if(n.sparse!==void 0){const f=Jo.SCALAR,S=Hn[n.sparse.indices.componentType],T=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,C=new S(s[1],T,n.sparse.count*f),E=new c(s[2],v,n.sparse.count*l);o!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,A=C.length;w<A;w++){const b=C[w];if(g.setX(b,E[w*l]),l>=2&&g.setY(b,E[w*l+1]),l>=3&&g.setZ(b,E[w*l+2]),l>=4&&g.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,a=t.images[n];let s=this.textureLoader;if(a.uri){const o=i.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,i){const n=this,a=this.json,s=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[s.sampler]||{};return h.magFilter=Wu[u.magFilter]||ai,h.minFilter=Wu[u.minFilter]||nr,h.wrapS=Xu[u.wrapS]||Xn,h.wrapT=Xu[u.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==ai,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=n.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Rt(_);g.needsUpdate=!0,d(g)}),t.load(Aa.resolveURL(u,a.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ir(u,s),u.userData.mimeType=s.mimeType||pT(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),a.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(s);s=a.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,l)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new wd,Bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ed,Bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||a||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),a&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Yn}loadMaterial(e){const t=this,i=this.json,n=this.extensions,a=i.materials[e];let s;const o={},l=a.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const u=n[Ve.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,At)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Ni);const h=a.alphaMode||$o.OPAQUE;if(h===$o.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$o.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==Mr&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ce(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==Mr&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==Mr){const u=a.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],Xt)}return a.emissiveTexture!==void 0&&s!==Mr&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,At)),Promise.all(c).then(function(){const u=new s(o);return a.name&&(u.name=a.name),ir(u,a),t.associations.set(u,{materials:e}),a.extensions&&Yr(n,u,a),u})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function a(o){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ju(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=dT(c),u=n[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=ju(new Wi,c,t),n[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,a=i.meshes[e],s=a.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?cT(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){const _=h[p],g=s[p];let f;const S=c[p];if(g.mode===mi.TRIANGLES||g.mode===mi.TRIANGLE_STRIP||g.mode===mi.TRIANGLE_FAN||g.mode===void 0)f=a.isSkinnedMesh===!0?new Lm(_,S):new xt(_,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===mi.TRIANGLE_STRIP?f.geometry=Vu(f.geometry,cd):g.mode===mi.TRIANGLE_FAN&&(f.geometry=Vu(f.geometry,zl));else if(g.mode===mi.LINES)f=new Om(_,S);else if(g.mode===mi.LINE_STRIP)f=new Sc(_,S);else if(g.mode===mi.LINE_LOOP)f=new Fm(_,S);else if(g.mode===mi.POINTS)f=new Bm(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&uT(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),ir(f,a),g.extensions&&Yr(n,f,g),t.assignFinalMaterial(f),u.push(f)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&Yr(n,u[0],a),u[0];const d=new Qr;a.extensions&&Yr(n,d,a),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kt(dd.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Ec(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,a=t.joints.length;n<a;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const a=n.pop(),s=n,o=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const d=new Ue;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mc(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,s=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const p=n.channels[u],m=n.samplers[p.sampler],_=p.target,g=_.node,f=n.parameters!==void 0?n.parameters[m.input]:m.input,S=n.parameters!==void 0?n.parameters[m.output]:m.output;_.node!==void 0&&(s.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",S)),c.push(m),h.push(_))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],m=u[2],_=u[3],g=u[4],f=[];for(let S=0,T=d.length;S<T;S++){const v=d[S],C=p[S],E=m[S],w=_[S],A=g[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=i._createAnimationTracks(v,C,E,w,A);if(b)for(let M=0;M<b.length;M++)f.push(b[M])}return new qm(a,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(a){const s=i._getNodeRef(i.meshCache,n.mesh,a);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],a=i._loadNodeShallow(e),s=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)s.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,fT)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?n.createUniqueName(a.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(n.getDependency("camera",a.camera).then(function(c){return n._getNodeRef(n.cameraCache,a.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(a.isBone===!0?h=new Td:c.length>1?h=new Qr:c.length===1?h=c[0]:h=new lt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(a.name&&(h.userData.name=a.name,h.name=s),ir(h,a),a.extensions&&Yr(i,h,a),a.matrix!==void 0){const u=new Ue;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(a.mesh!==void 0&&n.meshCache.refs[a.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,a=new Qr;i.name&&(a.name=n.createUniqueName(i.name)),ir(a,i),i.extensions&&Yr(t,a,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(n.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)a.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of n.associations)(d instanceof Bi||d instanceof Rt)&&u.set(d,p);return h.traverse(d=>{const p=n.associations.get(d);p!=null&&u.set(d,p)}),u};return n.associations=c(a),a})}_createAnimationTracks(e,t,i,n,a){const s=[],o=e.name?e.name:e.uuid,l=[];_r[a.path]===_r.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(_r[a.path]){case _r.weights:c=Kn;break;case _r.rotation:c=Zn;break;case _r.translation:case _r.scale:c=Jn;break;default:switch(i.itemSize){case 1:c=Kn;break;case 2:case 3:default:c=Jn;break}break}const h=n.interpolation!==void 0?lT[n.interpolation]:Oa,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const m=new c(l[d]+"."+_r[a.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),s.push(m)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=oc(t.constructor),n=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)n[a]=t[a]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Zn?oT:Fp;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gT(r,e,t){const i=e.attributes,n=new Li;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=oc(Hn[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new D,l=new D;for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const _=oc(Hn[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const s=new Gi;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=s}function ju(r,e,t){const i=e.attributes,n=[];function a(s,o){return t.getDependency("accessor",s).then(function(l){r.setAttribute(o,l)})}for(const s in i){const o=sc[s]||s.toLowerCase();o in r.attributes||n.push(a(i[s],o))}if(e.indices!==void 0&&!r.index){const s=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(s)}return Xe.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),ir(r,e),gT(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?hT(r,e.targets,t):r})}class _T extends Md{constructor(){super();const e=new aa;e.deleteAttribute("uv");const t=new Yn({side:Vt}),i=new Yn,n=new Ld(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const a=new xt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const s=new bd(e,i,6),o=new lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);const l=new xt(e,Cn(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new xt(e,Cn(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new xt(e,Cn(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new xt(e,Cn(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new xt(e,Cn(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new xt(e,Cn(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Cn(r){const e=new Mr;return e.color.setScalar(r),e}const vT=`Week 2 - Ulises Carrión - Mail Art and the Big Monster from Second Thoughts

In his text, Ulises Carrión refutes the widespread belief that Mail Art is nothing more than art disguised within a mail. Instead, he suggests the postal system is the work's support and not the medium. Like a piece of wood or a canvas within a painting, the post office is the carrier of the piece that supports it but is not the piece itself. He suggests that the importance of Post Art is not the use of the postcard format or what it is but what it occasions: exchanges, actions and reactions that Mail Art instigates.

Carrión challenges artists who reduce Mail Art down to simply producing postcards because that misses the point of the Mail Art. For Carrión, the actual strength of Mail Art is the way it intersects with the vast postal system, the Big Monster of communication and distribution control. Each time an artist posts something, it is at once an act of imagination and a confrontation of that system of rules and bureaucracy and power.

From the reading, the idea that the value of Mail Art isn't found in its aesthetics or craftsmanship, but rather the "echo" it creates (the reaction, connection, and dialogue that is returned) was perhaps the idea that stood out the most. It makes Mail Art not necessarily a lone work of art and rather a collaborative practice that disturbs the ordinary use of the mail. At the very same time, Carrión is careful not to describe it "cheap" or "democratic" because it has to be of value based on whether or not it genuinely produces valid work and not just because it is inexpensive.

- Could digital networks today play the same role for “Mail Art,” or would that change its meaning?
- Does Carrión’s idea that mail is “support” rather than “medium” make sense to you? Why or why not?

Week 3 - Laurel Schwulst & Édouard U - Selections from Creative Independent and Arena How Do You Use the Internet Mindfully

Laurel Schwulst reframes the website as a living place—room, shelf, plant, garden, even puddle—arguing that making and tending our own sites is a way to resist platform logics that optimize for advertising and anxiety. The metaphors matter: if the web is a river and your site a house on its bank, then your ongoing attention shapes both the space and your identity. This pushes back against the “cloud” abstraction; instead of a monolith, the web becomes many small, cared-for nodes where links are the oxygen and maintenance is a creative act.

Édouard U. extends that care inward, proposing “personal knowledge networks” as an antidote to linear, isolated consumption. Surf—don’t just search. Read multiple things in parallel; let ideas collide; trace footnotes; annotate; build Are.na channels. The point isn’t hoarding content but cultivating “personal abstractions”—structures of meaning that emerge from connections you actively make. Taken together, the pieces offer a gentle but radical ethic: make your own small place on the web, and use it to weave your own network of meaning—slowly, seasonally, and in public.

- If you treated your website (or any digital space you control) as a garden, what concrete “seasonal” practices would you adopt to keep it alive without turning it into an exhausting chore?
- How might classrooms or studios evaluate “networked thinking” (links, marginalia, remix) as seriously as finished outputs—without collapsing back into platform metrics like likes and views?

Week 4 - Olia Lialina - STILL THERE Ruins and Templates of Geocities from Lost and Living (in) Archives

Olia Lialina’s essay shows that Geocities wasn’t just “bad design” but a lively community where everyday people learned to build the web. Its templates, neighborhoods, and tiny hacks (like spacer GIFs) shaped a unique, DIY style. When Yahoo! shut it down, many pages became “digital ruins,” revealing how fragile online culture is. The Archive Team’s rescue turned loss into a research resource, letting us study how early web design actually worked. Seeing repeated backgrounds, frames, and broken images helps us feel how the web ages over time.

- What do Geocities pages reveal about how people first expressed themselves online?
- Is it better to keep old websites exactly as they were (even if broken) or fix them so they’re easier to use today?

Week 5 - Alessandro Ludovico & Florian Cramer - Selections from Publishing from Post-Digital-Print

The reading argues that print and digital should not be seen as opposites but as interconnected paradigms, each shaping culture in distinct ways. Unlike music or video, where the carrier medium changed but the experience stayed consistent, the printed page is both content and display, so moving to digital fundamentally alters habits and traditions. Ludovico highlights how DIY zine culture resists the “all-digital” philosophy by emphasizing tactile, collectible objects while still mirroring peer-to-peer networks of the Internet. Hybrid publishing models like Written Images show early experiments in merging digital processes (crowdfunding, algorithmic generation) with physical books, though they remain limited by traditional materiality. Ultimately, both Ludovico and Cramer suggest that the future lies in suspending the binary of print versus digital, envisioning new forms of cultural production and political resistance that combine the strengths of both.

- How does the idea of post-digital print complicate the assumption that digital publishing will fully replace print?
- What unique opportunities—cultural, creative, or political—do hybrid publishing models open that neither print nor digital alone can achieve?

Week 7 - Bojana Coklyat & Shannon Finnegan - Selections from Alt-Text as Poetry Workbook

In Alt-Text as Poetry, Bojana Coklyat and Shannon Finnegan invite readers to think of writing alt-text not as a technical chore, but as a poetic and creative practice. They argue that accessibility can be a form of artistry, where describing an image becomes an act of empathy and expression. By framing alt-text as poetry, the authors highlight the importance of language—its rhythm, tone, and precision—in shaping how meaning is conveyed to blind and low-vision audiences. They also compare alt-text to translation, emphasizing that describing an image always involves interpretation and creative decision-making rather than pure objectivity. The workbook encourages writers to acknowledge their own subjectivity, since every description reflects the describer’s perspective and cultural background. This transparency, they argue, makes accessibility richer and more human. Ultimately, the text calls for alt-text to be treated as an integral part of art and design, blending creativity with responsibility to make the digital world more inclusive.

- How does treating alt-text as a poetic or artistic process change the way we think about accessibility in digital media?
- What challenges arise when balancing creativity and accuracy in alt-text writing, and how might those tensions be productive?

Week 8 - Ramsey Nasser - "A Personal Computer for Children of All Cultures" from Decolonising the Digital

Ramsey Nasser critiques the idea of a “universal” computer as culturally neutral by revealing how deeply English and Western assumptions are embedded in programming languages and digital systems. Through the example of his Arabic programming language "Qalb", he exposes the linguistic bias that defines who can truly “access” technology, showing that even efforts to localize computing often reinforce global hierarchies rather than dismantle them. Nasser argues that the problem is not merely technical but cultural and historical—language itself becomes a gatekeeper to participation in computing. His attempt to create a non-English programming language ultimately demonstrates that modern software infrastructures are built upon and perpetuate colonial power structures. The essay challenges readers to imagine what a truly global and equitable digital future could look like beyond linguistic and cultural dominance.

- How does Nasser’s "Qalb" reveal the cultural and linguistic limitations of modern computing?
- What would it take to create a digital ecosystem that truly transcends English and Western dominance?

Week 9 - David Reinfurt - Selections from A *New* Program for Graphic Design

David Reinfurt’s text explores how Gestalt psychology explains our tendency to perceive unified forms instead of disconnected parts. Referencing Max Wertheimer’s “Dot Essay,” he shows that perception naturally organizes elements into coherent patterns based on relationships like proximity and similarity. Reinfurt connects these ideas to design, arguing that visual compositions rely on the same perceptual laws that shape how we see the world. Understanding these principles helps designers create work that feels structured, balanced, and intuitively meaningful

- How does Reinfurt use Wertheimer’s Gestalt “Dot Essay” to bridge psychology and graphic design?
- In what ways can understanding Gestalt principles like proximity and closure help designers create more effective visual communication?

Week 10 - Ben Duvall - Selections from New Modernism(s)

Ben Duvall talks about how graphic design has changed from modernism to postmodernism and now into what he calls “hypermodernism.” He explains that modernism was all about clarity and direct meaning, while postmodernism played with confusion and multiple interpretations. I think the author is trying to convey that Hypermodernism is about how digital media and the internet connect tons of meanings together through images and icons. Duvall uses Disney imagery as an example of how familiar symbols can hold layers of cultural and political meaning. In sum, the author shows how today’s design world mixes critique and consumer culture, creating visuals that are both overloaded and connected at the same time.

- How does Duvall’s concept of “hyperlinked signs” challenge traditional distinctions between surface and meaning in graphic design?
- In what ways does the use of Disney iconography by critical designers reflect both a critique and a continuation of capitalist visual systems?

Week 12 - Dot Tuer - Beyond the New Media Frame The Poetics of Absence in Vera Frenkel’s String Games

This week's reading text discuss how Vera Frenkel’s "String Games" connects technology, performance, and memory in a really thoughtful way. I found it interesting how Frenkel used early teleconferencing as more than just play. It became a way to show how people can feel both connected and distant through screens. The idea of a “poetics of absence” stood out to me, showing how digital media can both preserve memories and make them feel lost at the same time. It also makes sense how Tuer links this to Frenkel’s later work Body Missing, which continues exploring how technology shapes remembrance and loss.

- How does String Games transform the idea of interactivity from technological play into an exploration of human absence and memory?
- In what ways does Dot Tuer suggest that Frenkel’s later works, like Body Missing, extend or reinterpret the themes first introduced in String Games?

Week 13 - Paul Soulellis - Performing the Feed

This reading made me think a lot about how completely different “publishing” feels now compared to the older, more intentional idea of posting. Soulellis’ distinction between the post as an interruption and the feed as this endless, ambient flow really stuck with me, especially because it reflects how I usually consume media without even realizing it. I was also surprised by how much live-stream culture shapes our sense of watching and being watched, creating this weird mix of passivity and constant engagement. Overall, the reading made me reconsider how much control algorithms have in shaping what becomes public

- How can we meaningfully “interrupt” or resist the smooth flow of feeds when almost everything we encounter online is designed to keep us watching?
- As algorithmic voices become harder to distinguish from human ones, how are we supposed to evaluate authenticity or trust what we’re seeing?

Week 14 - Boris Groys - Art on the Internet

Groys’ argument about the Internet “defictionalizing” art really stood out to me, especially his point that the frame becomes impossible to ignore because we are the ones who create it on our screens. I was surprised by how strongly he connects online transparency to a kind of constant surveillance, where every click and action becomes part of the artwork’s “documentation.” At the same time, his idea that the Internet turns artistic process itself into a public performance made me think about how little privacy artists actually have now. Overall, the reading made me rethink how the Internet collapses production, distribution, and authorship into one continuous space.

- How does collapsing creation and exhibition on the Internet change what counts as “art”?
- If every online action is traceable, can an artist ever reinvent their identity?`,xT=document.querySelector("#experience-canvas"),io=document.querySelector(".overlay"),Ks=document.querySelector("#project-modal"),yT=document.querySelector("#modal-title"),qu=document.querySelector("#modal-description"),ws=document.querySelector("#modal-link"),MT=document.querySelector("#close-modal"),TT=document.querySelector("#reset-camera"),ST=document.querySelector(".loading-screen"),Bp=document.querySelector(".loading-progress"),Yu=document.querySelector(".loading-label"),qt={width:window.innerWidth,height:window.innerHeight},ji=new Md;ji.background=null;const Ur=new kt(45,qt.width/qt.height,.1,100);Ur.position.set(0,2.5,10);ji.add(Ur);const yi=new ry({canvas:xT,antialias:!0,alpha:!0});yi.setSize(qt.width,qt.height);yi.setPixelRatio(Math.min(window.devicePixelRatio,2));yi.toneMapping=Qu;yi.toneMappingExposure=1;yi.outputColorSpace=At;yi.setClearColor(0,0);const bT=new Wl(yi),ET=bT.fromScene(new _T(yi)).texture;ji.environment=ET;ji.environmentIntensity=1.1;const Nr=new ay(Ur,yi.domElement);Nr.enableDamping=!0;Nr.dampingFactor=.08;Nr.enablePan=!1;Nr.minDistance=5;Nr.maxDistance=20;const wT=new sg(16777215,.9);ji.add(wT);const zp=new wc(16777215,1.9);zp.position.set(6,10,6);ji.add(zp);const AT=new tg(16777215,12108495,.45);ji.add(AT);const kp=new wc(16773328,.9);kp.position.set(-6,-4,-6);ji.add(kp);const Ku=new xg,lc=new Ce;let gi=null,ro=!1,ii={x:9,y:4,z:6};const RT=.998,Zu=1.28,tn=[],CT=new OM,Hp=[];let el=0;function PT(r,e={}){return new Promise(t=>{CT.load(r,i=>{const n=i.scene;n.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0,_.material||(_.material=new Yn({color:"#9ca3af",roughness:.22,metalness:.06,envMapIntensity:.95})),_.geometry.computeBoundingSphere(),_.userData.rootRef=n)}),n.updateMatrixWorld(!0);const a=new Li().setFromObject(n),s=a.getSize(new D),o=a.getCenter(new D),l=Math.max(s.x,s.y,s.z),c=1.5,h=e.scaleMul||1,u=l>0?c/l*h*Zu:h*Zu;n.scale.setScalar(u),n.position.sub(o.multiplyScalar(u)),n.position.set(0,0,0),n.updateMatrixWorld(!0);const d=new Li().setFromObject(n).getSize(new D),p=d.length()>0?d.length()/2:.75,m=n.scale.clone();n.userData={...e,velocity:new D((Math.random()-.5)*.25,(Math.random()-.5)*.25,(Math.random()-.5)*.25),angularVelocity:new D((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6),radius:p,initialScale:m},tn.push(n),ji.add(n),t()},void 0,i=>{console.error("Failed to load GLB",r,i),t()})})}const tl=[{file:"book.glb",name:"Reading Responses",description:vT,url:"#"},{file:"cat.glb",name:"6. Tame the Cat",description:"Performance-style “cat taming” game: scripted functions with chance elements, documented as a playable web experience.",url:"https://leebwj.github.io/1020/S3P1/start.html"},{file:"clock.glb",name:"5. p5.js Clock",description:"System-clock-driven p5.js clock sketch: seconds/minutes/hours each drive their own looping visuals, from sketch to prototype.",url:"https://editor.p5js.org/leebwj/full/H0GIyhJEJ",scaleMul:1.3},{file:"cube.glb",name:"8. QuadTree Painter",description:"Generative p5.js “Mondrian” quadtree painter. Randomized splits, de Stijl palette, and user-interactive elements.",url:"https://leebwj.github.io/1020/S3P3/index"},{file:"globe.glb",name:"4. Data Footprints",description:"Single-page interactive site with hover/selector-driven responses, responsive media queries, and optimized imagery. Explore the web-world demo.",url:"https://leebwj.github.io/1020/S2P2/"},{file:"heart.glb",name:"2. CSS Still Life",description:"800x600 CSS still life from classroom objects. Used div layout, gradients, layering, animation. CodePen demo.",url:"https://codepen.io/Brian-Lee-the-styleful/pen/ByoGepb"},{file:"present.glb",name:"7. API Tool Pitch",description:"Team project: IFTTT-linked assistive tool, built via VS Code Live Share; single-page site pitching the concept and documenting the prototype.",url:"https://artofthewebfall2025.github.io/s3a2/"},{file:"tape.glb",name:"3. Blue Mixtape",description:"Multi-page personal music zine with nav flow and flex/grid layout; no page over 5MB. Explore my blue mixtape.",url:"https://leebwj.github.io/1020/S1FP/start.html"},{file:"wheel.glb",name:"1. F1 Race",description:"F1 ASCII animation that races back and forth. CodePen demo for the binary/ASCII project.",url:"https://codepen.io/Brian-Lee-the-styleful/pen/vENzaBO"}];tl.forEach(r=>{let e=1;(r.name==="Clock"||r.name==="Tape")&&(e=1.25),(r.name==="Cube"||r.file==="cube.glb")&&(e=.8),typeof r.scaleMul=="number"&&(e=r.scaleMul);const t=PT(`./models/${r.file}`,{name:r.name,description:r.description,url:r.url,scaleMul:e}).then(()=>{el+=1;const i=Math.min(1,el/tl.length)*100;Bp.style.width=`${i}%`,Yu&&(Yu.textContent=`Loading ${el}/${tl.length}`)});Hp.push(t)});Promise.all(Hp).then(()=>{Bp.style.width="100%",setTimeout(()=>{document.body.classList.add("app-ready"),io.classList.remove("visible"),Ks.classList.remove("visible"),ST.classList.add("hidden")},400)});function LT(r){yT.textContent=r.name;const e=(r.description||"").replace(/(^|\n)(Week\s+\d+[^\n]*)/g,"$1<strong>$2</strong>").replace(/\n/g,"<br>");qu.innerHTML=e;const t=r.name==="Reading Responses";Ks.classList.toggle("wide",t),qu.classList.toggle("long-text",t),r.url&&r.url!=="#"?(ws.href=r.url,ws.textContent="Open project",ws.style.display="inline-block"):ws.style.display="none",io.classList.add("visible"),Ks.classList.add("visible"),ro=!0,on.fromTo(".modal-card",{scale:.8,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(1.7)"})}function Vp(){io.classList.remove("visible"),Ks.classList.remove("visible"),ro=!1,gi=null,document.body.style.cursor="default"}io.addEventListener("click",Vp);MT.addEventListener("click",Vp);TT.addEventListener("click",()=>{on.to(Ur.position,{x:0,y:2.5,z:10,duration:.8,ease:"power2.out",onUpdate:()=>Nr.update()}),on.to(Nr.target,{x:0,y:0,z:0,duration:.8,ease:"power2.out"})});function DT(r){lc.x=r.clientX/qt.width*2-1,lc.y=-(r.clientY/qt.height)*2+1}function IT(){if(ro||!gi)return;const r=gi.userData;r!=null&&r.url&&LT(r)}window.addEventListener("mousemove",DT);window.addEventListener("click",IT);window.addEventListener("resize",()=>{qt.width=window.innerWidth,qt.height=window.innerHeight,Ur.aspect=qt.width/qt.height,Ur.updateProjectionMatrix(),yi.setSize(qt.width,qt.height),yi.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=qt.width/qt.height;ii={x:9*Math.max(1,r*.65),y:4*Math.max(1,1/r*.6),z:6}});function UT(r,e){const t=r.userData.velocity;t.x+=(Math.random()-.5)*6e-4,t.y+=(Math.random()-.5)*6e-4,t.z+=(Math.random()-.5)*6e-4;const i=r.position,n=new D(-i.z,0,i.x);n.lengthSq()>1e-6&&(n.normalize().multiplyScalar(.002),t.add(n));const a=Math.min(e,.02);r.position.addScaledVector(t,a*30);const s=r.userData.radius||.7;r.position.x+s>ii.x?(r.position.x=ii.x-s,t.x*=-.9):r.position.x-s<-ii.x&&(r.position.x=-ii.x+s,t.x*=-.9),r.position.y+s>ii.y?(r.position.y=ii.y-s,t.y*=-.9):r.position.y-s<-ii.y&&(r.position.y=-ii.y+s,t.y*=-.9),r.position.z+s>ii.z?(r.position.z=ii.z-s,t.z*=-.9):r.position.z-s<-ii.z&&(r.position.z=-ii.z+s,t.z*=-.9),t.multiplyScalar(RT);const o=.04;t.lengthSq()>o*o&&t.setLength(o)}const NT=1;function OT(){for(let r=0;r<NT;r++)for(let e=0;e<tn.length;e++)for(let t=e+1;t<tn.length;t++){const i=tn[e],n=tn[t],a=i.position,s=n.position,o=new D().subVectors(s,a),l=o.length(),c=i.userData.radius||.7,h=n.userData.radius||.7,u=c+h;if(l>0&&l<u){const d=(u-l)*.5;o.normalize(),a.addScaledVector(o,-d),s.addScaledVector(o,d);const p=d*.12;i.userData.velocity.addScaledVector(o,-p),n.userData.velocity.addScaledVector(o,p)}}}const FT=new cg;function Gp(){const r=FT.getDelta();if(Nr.update(),tn.forEach(e=>{UT(e,r),e.userData.angularVelocity||(e.userData.angularVelocity=new D((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6));const t=e.userData.angularVelocity;t.multiplyScalar(.999);const i=.6;t.lengthSq()>i*i&&t.setLength(i),e.rotation.x+=t.x*r,e.rotation.y+=t.y*r,e.rotation.z+=t.z*r}),OT(),ro)document.body.style.cursor="default";else{Ku.setFromCamera(lc,Ur);const e=Ku.intersectObjects(tn,!0);if(e.length>0){const t=e[0],i=t.object.userData.rootRef||t.object;if(i!==gi){if(gi){const a=gi.userData.initialScale||new D(1,1,1);on.to(gi.scale,{x:a.x,y:a.y,z:a.z,duration:.2})}gi=i;const n=i.userData.initialScale||new D(1,1,1);on.to(i.scale,{x:n.x*1.08,y:n.y*1.08,z:n.z*1.08,duration:.25,ease:"back.out(2)"}),document.body.style.cursor="pointer"}}else{if(gi){const t=gi.userData.initialScale||new D(1,1,1);on.to(gi.scale,{x:t.x,y:t.y,z:t.z,duration:.2}),gi=null}document.body.style.cursor="default"}}yi.render(ji,Ur),requestAnimationFrame(Gp)}Gp();
