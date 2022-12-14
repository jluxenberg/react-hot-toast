var me=Object.create;var Q=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var Se=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var X=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,o)=>(typeof require!="undefined"?require:t)[o]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var U=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var he=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ye(t))!ge.call(e,n)&&n!==o&&Q(e,n,{get:()=>t[n],enumerable:!(r=Te(t,n))||r.enumerable});return e};var xe=(e,t,o)=>(o=e!=null?me(Se(e)):{},he(t||!e||!e.__esModule?Q(o,"default",{value:e,enumerable:!0}):o,e));var ee=U(Z=>{"use strict";var v=X("react");function Ae(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ee=typeof Object.is=="function"?Object.is:Ae,Oe=v.useState,ve=v.useEffect,_e=v.useLayoutEffect,Re=v.useDebugValue;function Pe(e,t){var o=t(),r=Oe({inst:{value:o,getSnapshot:t}}),n=r[0].inst,a=r[1];return _e(function(){n.value=o,n.getSnapshot=t,F(n)&&a({inst:n})},[e,o,t]),ve(function(){return F(n)&&a({inst:n}),e(function(){F(n)&&a({inst:n})})},[e]),Re(o),o}function F(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Ee(e,o)}catch{return!0}}function De(e,t){return t()}var Ie=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?De:Pe;Z.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:Ie});var oe=U(te=>{"use strict";process.env.NODE_ENV!=="production"&&function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=X("react"),t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function o(c){{for(var s=arguments.length,T=new Array(s>1?s-1:0),d=1;d<s;d++)T[d-1]=arguments[d];r("error",c,T)}}function r(c,s,T){{var d=t.ReactDebugCurrentFrame,R=d.getStackAddendum();R!==""&&(s+="%s",T=T.concat([R]));var P=T.map(function(y){return String(y)});P.unshift("Warning: "+s),Function.prototype.apply.call(console[c],console,P)}}function n(c,s){return c===s&&(c!==0||1/c===1/s)||c!==c&&s!==s}var a=typeof Object.is=="function"?Object.is:n,l=e.useState,i=e.useEffect,f=e.useLayoutEffect,p=e.useDebugValue,S=!1,E=!1;function O(c,s,T){S||e.startTransition!==void 0&&(S=!0,o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var d=s();if(!E){var R=s();a(d,R)||(o("The result of getSnapshot should be cached to avoid an infinite loop"),E=!0)}var P=l({inst:{value:d,getSnapshot:s}}),y=P[0].inst,M=P[1];return f(function(){y.value=d,y.getSnapshot=s,I(y)&&M({inst:y})},[c,d,s]),i(function(){I(y)&&M({inst:y});var fe=function(){I(y)&&M({inst:y})};return c(fe)},[c]),p(d),d}function I(c){var s=c.getSnapshot,T=c.value;try{var d=s();return!a(T,d)}catch{return!0}}function m(c,s,T){return s()}var _=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pe=!_,de=pe?m:O,le=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:de;te.useSyncExternalStore=le,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()});var re=U((ht,N)=>{"use strict";process.env.NODE_ENV==="production"?N.exports=ee():N.exports=oe()});var be=e=>typeof e=="function",x=(e,t)=>be(e)?e(t):e;var J=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var ae=xe(re()),we=20;var V=new Map,Ve=1e3,ne=e=>{if(V.has(e))return;let t=setTimeout(()=>{V.delete(e),g({type:4,toastId:e})},Ve);V.set(e,t)},Le=e=>{let t=V.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,we)};case 1:return t.toast.id&&Le(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:o}=t;return e.toasts.find(a=>a.id===o.id)?$(e,{type:1,toast:o}):$(e,{type:0,toast:o});case 3:let{toastId:r}=t;return r?ne(r):e.toasts.forEach(a=>{ne(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},L=[],k={toasts:[],pausedAt:void 0},g=e=>{let t=k;k=$(k,e),L.forEach(o=>{o()})},ke={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B=(e={})=>{let t=(0,ae.useSyncExternalStore)(r=>(L.push(r),()=>{let n=L.indexOf(r);n>-1&&L.splice(n,1)}),()=>k),o=t.toasts.map(r=>{var n,a;return{...e,...e[r.type],...r,duration:r.duration||((n=e[r.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||ke[r.type],style:{...e.style,...(a=e[r.type])==null?void 0:a.style,...r.style}}});return{...t,toasts:o}};var Me=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||J()}),D=e=>(t,o)=>{let r=Me(t,e,o);return g({type:2,toast:r}),r.id},u=(e,t)=>D("blank")(e,t);u.error=D("error");u.success=D("success");u.loading=D("loading");u.custom=D("custom");u.dismiss=e=>{g({type:3,toastId:e})};u.remove=e=>g({type:4,toastId:e});u.promise=(e,t,o)=>{let r=u.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(n=>(u.success(x(t.success,n),{id:r,...o,...o==null?void 0:o.success}),n)).catch(n=>{u.error(x(t.error,n),{id:r,...o,...o==null?void 0:o.error})}),e};import{useEffect as Ue,useCallback as se}from"react";var Fe=(e,t)=>{g({type:1,toast:{id:e,height:t}})},Ne=()=>{g({type:5,time:Date.now()})},W=e=>{let{toasts:t,pausedAt:o}=B(e);Ue(()=>{if(o)return;let a=Date.now(),l=t.map(i=>{if(i.duration===1/0)return;let f=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(f<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),f)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[t,o]);let r=se(()=>{o&&g({type:6,time:Date.now()})},[o]),n=se((a,l)=>{let{reverseOrder:i=!1,gutter:f=8,defaultPosition:p}=l||{},S=t.filter(m=>(m.position||p)===(a.position||p)&&m.height),E=S.findIndex(m=>m.id===a.id),O=S.filter((m,_)=>_<E&&m.visible).length;return S.filter(m=>m.visible).slice(...i?[O+1]:[0,O]).reduce((m,_)=>m+(_.height||0)+f,0)},[t]);return{toasts:t,handlers:{updateHeight:Fe,startPause:Ne,endPause:r,calculateOffset:n}}};import*as h from"react";import{styled as ue,keyframes as ce}from"goober";import*as A from"react";import{styled as K,keyframes as Qe}from"goober";import{styled as $e,keyframes as H}from"goober";var Be=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,We=H`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,He=H`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=$e("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${We} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${He} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;import{styled as ze,keyframes as je}from"goober";var Ge=je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,j=ze("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ge} 1s linear infinite;
`;import{styled as Ke,keyframes as ie}from"goober";var qe=ie`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ye=ie`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=Ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ye} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var Xe=K("div")`
  position: absolute;
`,Je=K("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ze=Qe`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=K("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ze} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:o,iconTheme:r}=e;return t!==void 0?typeof t=="string"?A.createElement(et,null,t):t:o==="blank"?null:A.createElement(Je,null,A.createElement(j,{...r}),o!=="loading"&&A.createElement(Xe,null,o==="error"?A.createElement(z,{...r}):A.createElement(G,{...r})))};var tt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ot=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,rt="0%{opacity:0;} 100%{opacity:1;}",nt="0%{opacity:1;} 100%{opacity:0;}",at=ue("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,st=ue("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,it=(e,t)=>{let r=e.includes("top")?1:-1,[n,a]=w()?[rt,nt]:[tt(r),ot(r)];return{animation:t?`${ce(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ce(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Y=h.memo(({toast:e,position:t,style:o,children:r})=>{let n=e.height?it(e.position||t||"top-center",e.visible):{opacity:0},a=h.createElement(q,{toast:e}),l=h.createElement(st,{...e.ariaProps},x(e.message,e));return h.createElement(at,{className:e.className,style:{...n,...o,...e.style}},typeof r=="function"?r({icon:a,message:l}):h.createElement(h.Fragment,null,a,l))});import{css as ct,setup as ut}from"goober";import*as b from"react";ut(b.createElement);var pt=({id:e,className:t,style:o,onHeightUpdate:r,children:n})=>{let a=b.useCallback(l=>{if(l){let i=()=>{let f=l.getBoundingClientRect().height;r(e,f)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return b.createElement("div",{ref:a,className:t,style:o},n)},dt=(e,t)=>{let o=e.includes("top"),r=o?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...r,...n}},lt=ct`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,ft=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:r,children:n,containerStyle:a,containerClassName:l})=>{let{toasts:i,handlers:f}=W(o);return b.createElement("div",{style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...a},className:l,onMouseEnter:f.startPause,onMouseLeave:f.endPause},i.map(p=>{let S=p.position||t,E=f.calculateOffset(p,{reverseOrder:e,gutter:r,defaultPosition:t}),O=dt(S,E);return b.createElement(pt,{id:p.id,key:p.id,onHeightUpdate:f.updateHeight,className:p.visible?lt:"",style:O},p.type==="custom"?x(p.message,p):n?n(p):b.createElement(Y,{toast:p,position:S}))}))};var ho=u;export{G as CheckmarkIcon,z as ErrorIcon,j as LoaderIcon,Y as ToastBar,q as ToastIcon,ft as Toaster,ho as default,x as resolveValue,u as toast,W as useToaster,B as useToasterStore};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.mjs.map