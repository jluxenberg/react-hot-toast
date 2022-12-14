"use strict";var Se=Object.create;var M=Object.defineProperty;var ge=Object.getOwnPropertyDescriptor;var he=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,be=Object.prototype.hasOwnProperty;var Z=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ae=(e,t)=>{for(var o in t)M(e,o,{get:t[o],enumerable:!0})},re=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of he(t))!be.call(e,n)&&n!==o&&M(e,n,{get:()=>t[n],enumerable:!(r=ge(t,n))||r.enumerable});return e};var U=(e,t,o)=>(o=e!=null?Se(xe(e)):{},re(t||!e||!e.__esModule?M(o,"default",{value:e,enumerable:!0}):o,e)),Ee=e=>re(M({},"__esModule",{value:!0}),e);var se=Z(ae=>{"use strict";var v=require("react");function ve(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:ve,Re=v.useState,Pe=v.useEffect,De=v.useLayoutEffect,Ie=v.useDebugValue;function we(e,t){var o=t(),r=Re({inst:{value:o,getSnapshot:t}}),n=r[0].inst,a=r[1];return De(function(){n.value=o,n.getSnapshot=t,ee(n)&&a({inst:n})},[e,o,t]),Pe(function(){return ee(n)&&a({inst:n}),e(function(){ee(n)&&a({inst:n})})},[e]),Ie(o),o}function ee(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!_e(e,o)}catch{return!0}}function Ve(e,t){return t()}var Le=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ve:we;ae.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:Le});var ce=Z(ie=>{"use strict";process.env.NODE_ENV!=="production"&&function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=require("react"),t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function o(c){{for(var s=arguments.length,T=new Array(s>1?s-1:0),d=1;d<s;d++)T[d-1]=arguments[d];r("error",c,T)}}function r(c,s,T){{var d=t.ReactDebugCurrentFrame,I=d.getStackAddendum();I!==""&&(s+="%s",T=T.concat([I]));var w=T.map(function(y){return String(y)});w.unshift("Warning: "+s),Function.prototype.apply.call(console[c],console,w)}}function n(c,s){return c===s&&(c!==0||1/c===1/s)||c!==c&&s!==s}var a=typeof Object.is=="function"?Object.is:n,l=e.useState,i=e.useEffect,f=e.useLayoutEffect,p=e.useDebugValue,S=!1,E=!1;function O(c,s,T){S||e.startTransition!==void 0&&(S=!0,o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var d=s();if(!E){var I=s();a(d,I)||(o("The result of getSnapshot should be cached to avoid an infinite loop"),E=!0)}var w=l({inst:{value:d,getSnapshot:s}}),y=w[0].inst,J=w[1];return f(function(){y.value=d,y.getSnapshot=s,C(y)&&J({inst:y})},[c,d,s]),i(function(){C(y)&&J({inst:y});var ye=function(){C(y)&&J({inst:y})};return c(ye)},[c]),p(d),d}function C(c){var s=c.getSnapshot,T=c.value;try{var d=s();return!a(T,d)}catch{return!0}}function m(c,s,T){return s()}var D=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fe=!D,me=fe?m:O,Te=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:me;ie.useSyncExternalStore=Te,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()});var ue=Z((Tt,te)=>{"use strict";process.env.NODE_ENV==="production"?te.exports=se():te.exports=ce()});var ut={};Ae(ut,{CheckmarkIcon:()=>K,ErrorIcon:()=>z,LoaderIcon:()=>G,ToastBar:()=>Y,ToastIcon:()=>q,Toaster:()=>le,default:()=>ct,resolveValue:()=>g,toast:()=>u,useToaster:()=>H,useToasterStore:()=>W});module.exports=Ee(ut);var Oe=e=>typeof e=="function",g=(e,t)=>Oe(e)?e(t):e;var ne=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var de=U(ue()),ke=20;var N=new Map,Ce=1e3,pe=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),h({type:4,toastId:e})},Ce);N.set(e,t)},Me=e=>{let t=N.get(e);t&&clearTimeout(t)},oe=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ke)};case 1:return t.toast.id&&Me(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:o}=t;return e.toasts.find(a=>a.id===o.id)?oe(e,{type:1,toast:o}):oe(e,{type:0,toast:o});case 3:let{toastId:r}=t;return r?pe(r):e.toasts.forEach(a=>{pe(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},$=[],B={toasts:[],pausedAt:void 0},h=e=>{let t=B;B=oe(B,e),$.forEach(o=>{o()})},Ue={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(e={})=>{let t=(0,de.useSyncExternalStore)(r=>($.push(r),()=>{let n=$.indexOf(r);n>-1&&$.splice(n,1)}),()=>B),o=t.toasts.map(r=>{var n,a;return{...e,...e[r.type],...r,duration:r.duration||((n=e[r.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||Ue[r.type],style:{...e.style,...(a=e[r.type])==null?void 0:a.style,...r.style}}});return{...t,toasts:o}};var Ne=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||ne()}),V=e=>(t,o)=>{let r=Ne(t,e,o);return h({type:2,toast:r}),r.id},u=(e,t)=>V("blank")(e,t);u.error=V("error");u.success=V("success");u.loading=V("loading");u.custom=V("custom");u.dismiss=e=>{h({type:3,toastId:e})};u.remove=e=>h({type:4,toastId:e});u.promise=(e,t,o)=>{let r=u.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(n=>(u.success(g(t.success,n),{id:r,...o,...o==null?void 0:o.success}),n)).catch(n=>{u.error(g(t.error,n),{id:r,...o,...o==null?void 0:o.error})}),e};var L=require("react");var $e=(e,t)=>{h({type:1,toast:{id:e,height:t}})},Be=()=>{h({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:o}=W(e);(0,L.useEffect)(()=>{if(o)return;let a=Date.now(),l=t.map(i=>{if(i.duration===1/0)return;let f=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(f<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),f)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[t,o]);let r=(0,L.useCallback)(()=>{o&&h({type:6,time:Date.now()})},[o]),n=(0,L.useCallback)((a,l)=>{let{reverseOrder:i=!1,gutter:f=8,defaultPosition:p}=l||{},S=t.filter(m=>(m.position||p)===(a.position||p)&&m.height),E=S.findIndex(m=>m.id===a.id),O=S.filter((m,D)=>D<E&&m.visible).length;return S.filter(m=>m.visible).slice(...i?[O+1]:[0,O]).reduce((m,D)=>m+(D.height||0)+f,0)},[t]);return{toasts:t,handlers:{updateHeight:$e,startPause:Be,endPause:r,calculateOffset:n}}};var x=U(require("react")),P=require("goober");var A=U(require("react")),R=require("goober");var _=require("goober"),We=_.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,He=_.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=_.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=(0,_.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${We} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${He} 0.15s ease-out forwards;
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
    animation: ${ze} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var j=require("goober"),je=j.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=(0,j.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${je} 1s linear infinite;
`;var k=require("goober"),Ge=k.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ke=k.keyframes`
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
}`,K=(0,k.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ke} 0.2s ease-out forwards;
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
`;var qe=(0,R.styled)("div")`
  position: absolute;
`,Ye=(0,R.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Qe=R.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Xe=(0,R.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Qe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:o,iconTheme:r}=e;return t!==void 0?typeof t=="string"?A.createElement(Xe,null,t):t:o==="blank"?null:A.createElement(Ye,null,A.createElement(G,{...r}),o!=="loading"&&A.createElement(qe,null,o==="error"?A.createElement(z,{...r}):A.createElement(K,{...r})))};var Je=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ze=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,et="0%{opacity:0;} 100%{opacity:1;}",tt="0%{opacity:1;} 100%{opacity:0;}",ot=(0,P.styled)("div")`
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
`,rt=(0,P.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,nt=(e,t)=>{let r=e.includes("top")?1:-1,[n,a]=F()?[et,tt]:[Je(r),Ze(r)];return{animation:t?`${(0,P.keyframes)(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,P.keyframes)(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Y=x.memo(({toast:e,position:t,style:o,children:r})=>{let n=e.height?nt(e.position||t||"top-center",e.visible):{opacity:0},a=x.createElement(q,{toast:e}),l=x.createElement(rt,{...e.ariaProps},g(e.message,e));return x.createElement(ot,{className:e.className,style:{...n,...o,...e.style}},typeof r=="function"?r({icon:a,message:l}):x.createElement(x.Fragment,null,a,l))});var X=require("goober"),b=U(require("react"));(0,X.setup)(b.createElement);var at=({id:e,className:t,style:o,onHeightUpdate:r,children:n})=>{let a=b.useCallback(l=>{if(l){let i=()=>{let f=l.getBoundingClientRect().height;r(e,f)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return b.createElement("div",{ref:a,className:t,style:o},n)},st=(e,t)=>{let o=e.includes("top"),r=o?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...r,...n}},it=X.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Q=16,le=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:r,children:n,containerStyle:a,containerClassName:l})=>{let{toasts:i,handlers:f}=H(o);return b.createElement("div",{style:{position:"fixed",zIndex:9999,top:Q,left:Q,right:Q,bottom:Q,pointerEvents:"none",...a},className:l,onMouseEnter:f.startPause,onMouseLeave:f.endPause},i.map(p=>{let S=p.position||t,E=f.calculateOffset(p,{reverseOrder:e,gutter:r,defaultPosition:t}),O=st(S,E);return b.createElement(at,{id:p.id,key:p.id,onHeightUpdate:f.updateHeight,className:p.visible?it:"",style:O},p.type==="custom"?g(p.message,p):n?n(p):b.createElement(Y,{toast:p,position:S}))}))};var ct=u;0&&(module.exports={CheckmarkIcon,ErrorIcon,LoaderIcon,ToastBar,ToastIcon,Toaster,resolveValue,toast,useToaster,useToasterStore});
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
//# sourceMappingURL=index.js.map