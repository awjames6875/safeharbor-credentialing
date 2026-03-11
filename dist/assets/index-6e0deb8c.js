(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ya={exports:{}},rl={},Xa={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.element"),uc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,Ja={};function ut(e,n,t){this.props=e,this.context=n,this.refs=Ja,this.updater=t||qa}ut.prototype.isReactComponent={};ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ba(){}ba.prototype=ut.prototype;function Bi(e,n,t){this.props=e,this.context=n,this.refs=Ja,this.updater=t||qa}var Qi=Bi.prototype=new ba;Qi.constructor=Bi;Za(Qi,ut.prototype);Qi.isPureReactComponent=!0;var zo=Array.isArray,eu=Object.prototype.hasOwnProperty,$i={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)eu.call(n,r)&&!nu.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Zt,type:e,key:i,ref:o,props:l,_owner:$i.current}}function Nc(e,n){return{$$typeof:Zt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Gi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt}function Sc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Lo=/\/+/g;function wl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):n.toString(36)}function Cr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Zt:case uc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,zo(l)?(t="",e!=null&&(t=e.replace(Lo,"$&/")+"/"),Cr(l,n,t,"",function(f){return f})):l!=null&&(Gi(l)&&(l=Nc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Lo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",zo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+wl(i,a);o+=Cr(i,n,t,u,l)}else if(u=gc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+wl(i,a++),o+=Cr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function lr(e,n,t){if(e==null)return e;var r=[],l=0;return Cr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Cc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},wr={transition:null},wc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:wr,ReactCurrentOwner:$i};function ru(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:lr,forEach:function(e,n,t){lr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return lr(e,function(){n++}),n},toArray:function(e){return lr(e,function(n){return n})||[]},only:function(e){if(!Gi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=ut;j.Fragment=sc;j.Profiler=dc;j.PureComponent=Bi;j.StrictMode=cc;j.Suspense=hc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;j.act=ru;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Za({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=$i.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)eu.call(n,u)&&!nu.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Zt,type:e.type,key:l,ref:i,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};j.createElement=tu;j.createFactory=function(e){var n=tu.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:mc,render:e}};j.isValidElement=Gi;j.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:Cc}};j.memo=function(e,n){return{$$typeof:yc,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};j.unstable_act=ru;j.useCallback=function(e,n){return ce.current.useCallback(e,n)};j.useContext=function(e){return ce.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};j.useEffect=function(e,n){return ce.current.useEffect(e,n)};j.useId=function(){return ce.current.useId()};j.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return ce.current.useMemo(e,n)};j.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};j.useRef=function(e){return ce.current.useRef(e)};j.useState=function(e){return ce.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return ce.current.useTransition()};j.version="18.3.1";Xa.exports=j;var ae=Xa.exports;const kc=ac(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=ae,Ec=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,_c=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Dc.call(n,r)&&!Tc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Ec,type:e,key:i,ref:o,props:l,_owner:_c.current}}rl.Fragment=Pc;rl.jsx=lu;rl.jsxs=lu;Ya.exports=rl;var d=Ya.exports,Yl={},iu={exports:{}},we={},ou={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,_){var I=D.length;D.push(_);e:for(;0<I;){var V=I-1>>>1,Z=D[V];if(0<l(Z,_))D[V]=_,D[I]=Z,I=V;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var _=D[0],I=D.pop();if(I!==_){D[0]=I;e:for(var V=0,Z=D.length,tr=Z>>>1;V<tr;){var Sn=2*(V+1)-1,Cl=D[Sn],Cn=Sn+1,rr=D[Cn];if(0>l(Cl,I))Cn<Z&&0>l(rr,Cl)?(D[V]=rr,D[Cn]=I,V=Cn):(D[V]=Cl,D[Sn]=I,V=Sn);else if(Cn<Z&&0>l(rr,I))D[V]=rr,D[Cn]=I,V=Cn;else break e}}return _}function l(D,_){var I=D.sortIndex-_.sortIndex;return I!==0?I:D.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],f=[],g=1,y=null,h=3,w=!1,k=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var _=t(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=D)r(f),_.sortIndex=_.expirationTime,n(u,_);else break;_=t(f)}}function c(D){if(x=!1,m(D),!k)if(t(u)!==null)k=!0,Nl(N);else{var _=t(f);_!==null&&Sl(c,_.startTime-D)}}function N(D,_){k=!1,x&&(x=!1,p(P),P=-1),w=!0;var I=h;try{for(m(_),y=t(u);y!==null&&(!(y.expirationTime>_)||D&&!ve());){var V=y.callback;if(typeof V=="function"){y.callback=null,h=y.priorityLevel;var Z=V(y.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?y.callback=Z:y===t(u)&&r(u),m(_)}else r(u);y=t(u)}if(y!==null)var tr=!0;else{var Sn=t(f);Sn!==null&&Sl(c,Sn.startTime-_),tr=!1}return tr}finally{y=null,h=I,w=!1}}var v=!1,C=null,P=-1,T=5,A=-1;function ve(){return!(e.unstable_now()-A<T)}function dt(){if(C!==null){var D=e.unstable_now();A=D;var _=!0;try{_=C(!0,D)}finally{_?ft():(v=!1,C=null)}}else v=!1}var ft;if(typeof s=="function")ft=function(){s(dt)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,oc=Ro.port2;Ro.port1.onmessage=dt,ft=function(){oc.postMessage(null)}}else ft=function(){M(dt,0)};function Nl(D){C=D,v||(v=!0,ft())}function Sl(D,_){P=M(function(){D(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Nl(N))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var I=h;h=_;try{return D()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,_){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=h;h=D;try{return _()}finally{h=I}},e.unstable_scheduleCallback=function(D,_,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,D={id:g++,callback:_,priorityLevel:D,startTime:I,expirationTime:Z,sortIndex:-1},I>V?(D.sortIndex=I,n(f,D),t(u)===null&&D===t(f)&&(x?(p(P),P=-1):x=!0,Sl(c,I-V))):(D.sortIndex=Z,n(u,D),k||w||(k=!0,Nl(N))),D},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(D){var _=h;return function(){var I=h;h=_;try{return D.apply(this,arguments)}finally{h=I}}}})(au);ou.exports=au;var Ic=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=ae,Ce=Ic;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,Mt={};function Mn(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(Mt[e]=n,e=0;e<n.length;e++)uu.add(n[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},Bo={};function Hc(e){return Xl.call(Bo,e)?!0:Xl.call(Uo,e)?!1:jc.test(e)?Bo[e]=!0:(Uo[e]=!0,!1)}function Mc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,n,t,r){if(n===null||typeof n>"u"||Mc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wi,Vi);te[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wi,Vi);te[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wi,Vi);te[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oc(n,t,l,r)&&(t=null),r||l===null?Hc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),cu=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),du=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function pt(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,kl;function Ct(e){if(kl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);kl=n&&n[1]||""}return`
`+kl+e}var xl=!1;function El(e,n){if(!e||xl)return"";xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ct(e):""}function Rc(e){switch(e.tag){case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case Fn:return"Portal";case ql:return"Profiler";case Yi:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Xi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:bl(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return bl(e(n))}catch{}}return null}function Fc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(n);case 8:return n===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zc(e){var n=fu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function or(e){e._valueTracker||(e._valueTracker=zc(e))}function pu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function $o(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function mu(e,n){n=n.checked,n!=null&&Ki(e,"checked",n,!1)}function ni(e,n){mu(e,n);var t=hn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ti(e,n.type,t):n.hasOwnProperty("defaultValue")&&ti(e,n.type,hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Go(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ti(e,n,t){(n!=="number"||Hr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Xn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+hn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ri(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(wt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:hn(t)}}function hu(e,n){var t=hn(n.value),r=hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lc=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(e){Lc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Et[n]=Et[e]})});function gu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Et.hasOwnProperty(e)&&Et[e]?(""+n).trim():n+"px"}function Nu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=gu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Uc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,n){if(n){if(Uc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,qn=null,Zn=null;function Ko(e){if(e=er(e)){if(typeof ui!="function")throw Error(S(280));var n=e.stateNode;n&&(n=ul(n),ui(e.stateNode,e.type,n))}}function Su(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function Cu(){if(qn){var e=qn,n=Zn;if(Zn=qn=null,Ko(e),n)for(e=0;e<n.length;e++)Ko(n[e])}}function wu(e,n){return e(n)}function ku(){}var Pl=!1;function xu(e,n,t){if(Pl)return e(n,t);Pl=!0;try{return wu(e,n,t)}finally{Pl=!1,(qn!==null||Zn!==null)&&(ku(),Cu())}}function Rt(e,n){var t=e.stateNode;if(t===null)return null;var r=ul(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var si=!1;if(Ye)try{var mt={};Object.defineProperty(mt,"passive",{get:function(){si=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch{si=!1}function Bc(e,n,t,r,l,i,o,a,u){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(g){this.onError(g)}}var Pt=!1,Mr=null,Or=!1,ci=null,Qc={onError:function(e){Pt=!0,Mr=e}};function $c(e,n,t,r,l,i,o,a,u){Pt=!1,Mr=null,Bc.apply(Qc,arguments)}function Gc(e,n,t,r,l,i,o,a,u){if($c.apply(this,arguments),Pt){if(Pt){var f=Mr;Pt=!1,Mr=null}else throw Error(S(198));Or||(Or=!0,ci=f)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yo(e){if(On(e)!==e)throw Error(S(188))}function Wc(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Yo(l),e;if(i===r)return Yo(l),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function Pu(e){return e=Wc(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Du(e);if(n!==null)return n;e=e.sibling}return null}var _u=Ce.unstable_scheduleCallback,Xo=Ce.unstable_cancelCallback,Vc=Ce.unstable_shouldYield,Kc=Ce.unstable_requestPaint,K=Ce.unstable_now,Yc=Ce.unstable_getCurrentPriorityLevel,Ji=Ce.unstable_ImmediatePriority,Tu=Ce.unstable_UserBlockingPriority,Rr=Ce.unstable_NormalPriority,Xc=Ce.unstable_LowPriority,Iu=Ce.unstable_IdlePriority,ll=null,Be=null;function qc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:bc,Zc=Math.log,Jc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var ur=64,sr=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=kt(a):(i&=o,i!==0&&(r=kt(i)))}else o=t&~l,o!==0?r=kt(o):i!==0&&(r=kt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),l=1<<t,r|=e[t],n&=~l;return r}function ed(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),a=1<<o,u=l[o];u===-1?(!(a&t)||a&r)&&(l[o]=ed(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Dl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function td(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Me(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function bi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var R=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hu,eo,Mu,Ou,Ru,fi=!1,cr=[],an=null,un=null,sn=null,Ft=new Map,zt=new Map,tn=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Ft.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(n.pointerId)}}function ht(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=er(n),n!==null&&eo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ld(e,n,t,r,l){switch(n){case"focusin":return an=ht(an,e,n,t,r,l),!0;case"dragenter":return un=ht(un,e,n,t,r,l),!0;case"mouseover":return sn=ht(sn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Ft.set(i,ht(Ft.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,zt.set(i,ht(zt.get(i)||null,e,n,t,r,l)),!0}return!1}function Fu(e){var n=xn(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=Eu(t),n!==null){e.blockedOn=n,Ru(e.priority,function(){Mu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ai=r,t.target.dispatchEvent(r),ai=null}else return n=er(t),n!==null&&eo(n),e.blockedOn=t,!1;n.shift()}return!0}function Zo(e,n,t){kr(e)&&t.delete(n)}function id(){fi=!1,an!==null&&kr(an)&&(an=null),un!==null&&kr(un)&&(un=null),sn!==null&&kr(sn)&&(sn=null),Ft.forEach(Zo),zt.forEach(Zo)}function yt(e,n){e.blockedOn===n&&(e.blockedOn=null,fi||(fi=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,id)))}function Lt(e){function n(l){return yt(l,e)}if(0<cr.length){yt(cr[0],e);for(var t=1;t<cr.length;t++){var r=cr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&yt(an,e),un!==null&&yt(un,e),sn!==null&&yt(sn,e),Ft.forEach(n),zt.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)Fu(t),t.blockedOn===null&&tn.shift()}var Jn=Je.ReactCurrentBatchConfig,zr=!0;function od(e,n,t,r){var l=R,i=Jn.transition;Jn.transition=null;try{R=1,no(e,n,t,r)}finally{R=l,Jn.transition=i}}function ad(e,n,t,r){var l=R,i=Jn.transition;Jn.transition=null;try{R=4,no(e,n,t,r)}finally{R=l,Jn.transition=i}}function no(e,n,t,r){if(zr){var l=pi(e,n,t,r);if(l===null)Fl(e,n,r,Lr,t),qo(e,r);else if(ld(l,e,n,t,r))r.stopPropagation();else if(qo(e,r),n&4&&-1<rd.indexOf(e)){for(;l!==null;){var i=er(l);if(i!==null&&Hu(i),i=pi(e,n,t,r),i===null&&Fl(e,n,r,Lr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Fl(e,n,r,null,t)}}var Lr=null;function pi(e,n,t,r){if(Lr=null,e=Zi(r),e=xn(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Lr=e,null}function zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Ji:return 1;case Tu:return 4;case Rr:case Xc:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var ln=null,to=null,xr=null;function Lu(){if(xr)return xr;var e,n=to,t=n.length,r,l="value"in ln?ln.value:ln.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function Jo(){return!1}function ke(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dr:Jo,this.isPropagationStopped=Jo,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=ke(st),bt=G({},st,{view:0,detail:0}),ud=ke(bt),_l,Tl,vt,il=G({},bt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vt&&(vt&&e.type==="mousemove"?(_l=e.screenX-vt.screenX,Tl=e.screenY-vt.screenY):Tl=_l=0,vt=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),bo=ke(il),sd=G({},il,{dataTransfer:0}),cd=ke(sd),dd=G({},bt,{relatedTarget:0}),Il=ke(dd),fd=G({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=ke(fd),md=G({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=ke(md),yd=G({},st,{data:0}),ea=ke(yd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nd[e])?!!n[e]:!1}function lo(){return Sd}var Cd=G({},bt,{key:function(e){if(e.key){var n=vd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=ke(Cd),kd=G({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=ke(kd),xd=G({},bt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Ed=ke(xd),Pd=G({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=ke(Pd),_d=G({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=ke(_d),Id=[9,13,27,32],io=Ye&&"CompositionEvent"in window,Dt=null;Ye&&"documentMode"in document&&(Dt=document.documentMode);var Ad=Ye&&"TextEvent"in window&&!Dt,Uu=Ye&&(!io||Dt&&8<Dt&&11>=Dt),ta=String.fromCharCode(32),ra=!1;function Bu(e,n){switch(e){case"keyup":return Id.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function jd(e,n){switch(e){case"compositionend":return Qu(n);case"keypress":return n.which!==32?null:(ra=!0,ta);case"textInput":return e=n.data,e===ta&&ra?null:e;default:return null}}function Hd(e,n){if(Ln)return e==="compositionend"||!io&&Bu(e,n)?(e=Lu(),xr=to=ln=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uu&&n.locale!=="ko"?null:n.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Md[e.type]:n==="textarea"}function $u(e,n,t,r){Su(r),n=Ur(n,"onChange"),0<n.length&&(t=new ro("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _t=null,Ut=null;function Od(e){es(e,0)}function ol(e){var n=Qn(e);if(pu(n))return e}function Rd(e,n){if(e==="change")return n}var Gu=!1;if(Ye){var Al;if(Ye){var jl="oninput"in document;if(!jl){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),jl=typeof ia.oninput=="function"}Al=jl}else Al=!1;Gu=Al&&(!document.documentMode||9<document.documentMode)}function oa(){_t&&(_t.detachEvent("onpropertychange",Wu),Ut=_t=null)}function Wu(e){if(e.propertyName==="value"&&ol(Ut)){var n=[];$u(n,Ut,e,Zi(e)),xu(Od,n)}}function Fd(e,n,t){e==="focusin"?(oa(),_t=n,Ut=t,_t.attachEvent("onpropertychange",Wu)):e==="focusout"&&oa()}function zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Ut)}function Ld(e,n){if(e==="click")return ol(n)}function Ud(e,n){if(e==="input"||e==="change")return ol(n)}function Bd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:Bd;function Bt(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Xl.call(n,l)||!Re(e[l],n[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,n){var t=aa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=aa(t)}}function Vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ku(){for(var e=window,n=Hr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hr(e.document)}return n}function oo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qd(e){var n=Ku(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vu(t.ownerDocument.documentElement,t)){if(r!==null&&oo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ua(t,i);var o=ua(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=Ye&&"documentMode"in document&&11>=document.documentMode,Un=null,mi=null,Tt=null,hi=!1;function sa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hi||Un==null||Un!==Hr(r)||(r=Un,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tt&&Bt(Tt,r)||(Tt=r,r=Ur(mi,"onSelect"),0<r.length&&(n=new ro("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bn={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Hl={},Yu={};Ye&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function al(e){if(Hl[e])return Hl[e];if(!Bn[e])return e;var n=Bn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yu)return Hl[e]=n[t];return e}var Xu=al("animationend"),qu=al("animationiteration"),Zu=al("animationstart"),Ju=al("transitionend"),bu=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,n){bu.set(e,n),Mn(n,[e])}for(var Ml=0;Ml<ca.length;Ml++){var Ol=ca[Ml],Gd=Ol.toLowerCase(),Wd=Ol[0].toUpperCase()+Ol.slice(1);vn(Gd,"on"+Wd)}vn(Xu,"onAnimationEnd");vn(qu,"onAnimationIteration");vn(Zu,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Ju,"onTransitionEnd");nt("onMouseEnter",["mouseout","mouseover"]);nt("onMouseLeave",["mouseout","mouseover"]);nt("onPointerEnter",["pointerout","pointerover"]);nt("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function da(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Gc(r,n,void 0,e),e.currentTarget=null}function es(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;da(l,a,f),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,f=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;da(l,a,f),i=u}}}if(Or)throw e=ci,Or=!1,ci=null,e}function L(e,n){var t=n[Si];t===void 0&&(t=n[Si]=new Set);var r=e+"__bubble";t.has(r)||(ns(n,e,2,!1),t.add(r))}function Rl(e,n,t){var r=0;n&&(r|=4),ns(t,e,r,n)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[pr]){e[pr]=!0,uu.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Rl(t,!1,e),Rl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pr]||(n[pr]=!0,Rl("selectionchange",!1,n))}}function ns(e,n,t,r){switch(zu(n)){case 1:var l=od;break;case 4:l=ad;break;default:l=no}t=l.bind(null,n,t,e),l=void 0,!si||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Fl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=xn(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xu(function(){var f=i,g=Zi(t),y=[];e:{var h=bu.get(e);if(h!==void 0){var w=ro,k=e;switch(e){case"keypress":if(Er(t)===0)break e;case"keydown":case"keyup":w=wd;break;case"focusin":k="focus",w=Il;break;case"focusout":k="blur",w=Il;break;case"beforeblur":case"afterblur":w=Il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case Xu:case qu:case Zu:w=pd;break;case Ju:w=Dd;break;case"scroll":w=ud;break;case"wheel":w=Td;break;case"copy":case"cut":case"paste":w=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=na}var x=(n&4)!==0,M=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var s=f,m;s!==null;){m=s;var c=m.stateNode;if(m.tag===5&&c!==null&&(m=c,p!==null&&(c=Rt(s,p),c!=null&&x.push($t(s,c,m)))),M)break;s=s.return}0<x.length&&(h=new w(h,k,null,t,g),y.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&t!==ai&&(k=t.relatedTarget||t.fromElement)&&(xn(k)||k[Xe]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=f,k=k?xn(k):null,k!==null&&(M=On(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=f),w!==k)){if(x=bo,c="onMouseLeave",p="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=na,c="onPointerLeave",p="onPointerEnter",s="pointer"),M=w==null?h:Qn(w),m=k==null?h:Qn(k),h=new x(c,s+"leave",w,t,g),h.target=M,h.relatedTarget=m,c=null,xn(g)===f&&(x=new x(p,s+"enter",k,t,g),x.target=m,x.relatedTarget=M,c=x),M=c,w&&k)n:{for(x=w,p=k,s=0,m=x;m;m=Rn(m))s++;for(m=0,c=p;c;c=Rn(c))m++;for(;0<s-m;)x=Rn(x),s--;for(;0<m-s;)p=Rn(p),m--;for(;s--;){if(x===p||p!==null&&x===p.alternate)break n;x=Rn(x),p=Rn(p)}x=null}else x=null;w!==null&&fa(y,h,w,x,!1),k!==null&&M!==null&&fa(y,M,k,x,!0)}}e:{if(h=f?Qn(f):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var N=Rd;else if(la(h))if(Gu)N=Ud;else{N=zd;var v=Fd}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Ld);if(N&&(N=N(e,f))){$u(y,N,t,g);break e}v&&v(e,h,f),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&ti(h,"number",h.value)}switch(v=f?Qn(f):window,e){case"focusin":(la(v)||v.contentEditable==="true")&&(Un=v,mi=f,Tt=null);break;case"focusout":Tt=mi=Un=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,sa(y,t,g);break;case"selectionchange":if($d)break;case"keydown":case"keyup":sa(y,t,g)}var C;if(io)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ln?Bu(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Uu&&t.locale!=="ko"&&(Ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ln&&(C=Lu()):(ln=g,to="value"in ln?ln.value:ln.textContent,Ln=!0)),v=Ur(f,P),0<v.length&&(P=new ea(P,e,null,t,g),y.push({event:P,listeners:v}),C?P.data=C:(C=Qu(t),C!==null&&(P.data=C)))),(C=Ad?jd(e,t):Hd(e,t))&&(f=Ur(f,"onBeforeInput"),0<f.length&&(g=new ea("onBeforeInput","beforeinput",null,t,g),y.push({event:g,listeners:f}),g.data=C))}es(y,n)})}function $t(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ur(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rt(e,t),i!=null&&r.unshift($t(e,i,l)),i=Rt(e,n),i!=null&&r.push($t(e,i,l))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=Rt(t,i),u!=null&&o.unshift($t(t,u,a))):l||(u=Rt(t,i),u!=null&&o.push($t(t,u,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Kd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Yd,"")}function mr(e,n,t){if(n=pa(n),pa(e)!==n&&t)throw Error(S(425))}function Br(){}var yi=null,vi=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,ma=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof ma<"u"?function(e){return ma.resolve(null).then(e).catch(Zd)}:Ni;function Zd(e){setTimeout(function(){throw e})}function zl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Lt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Lt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ct=Math.random().toString(36).slice(2),Ue="__reactFiber$"+ct,Gt="__reactProps$"+ct,Xe="__reactContainer$"+ct,Si="__reactEvents$"+ct,Jd="__reactListeners$"+ct,bd="__reactHandles$"+ct;function xn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ha(e);e!==null;){if(t=e[Ue])return t;e=ha(e)}return n}e=t,t=e.parentNode}return null}function er(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ul(e){return e[Gt]||null}var Ci=[],$n=-1;function gn(e){return{current:e}}function U(e){0>$n||(e.current=Ci[$n],Ci[$n]=null,$n--)}function z(e,n){$n++,Ci[$n]=e.current,e.current=n}var yn={},oe=gn(yn),me=gn(!1),Tn=yn;function tt(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Qr(){U(me),U(oe)}function ya(e,n,t){if(oe.current!==yn)throw Error(S(168));z(oe,n),z(me,t)}function ts(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(S(108,Fc(e)||"Unknown",l));return G({},t,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Tn=oe.current,z(oe,e),z(me,me.current),!0}function va(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=ts(e,n,Tn),r.__reactInternalMemoizedMergedChildContext=e,U(me),U(oe),z(oe,e)):U(me),z(me,t)}var Ge=null,sl=!1,Ll=!1;function rs(e){Ge===null?Ge=[e]:Ge.push(e)}function ef(e){sl=!0,rs(e)}function Nn(){if(!Ll&&Ge!==null){Ll=!0;var e=0,n=R;try{var t=Ge;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,sl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),_u(Ji,Nn),l}finally{R=n,Ll=!1}}return null}var Gn=[],Wn=0,Gr=null,Wr=0,xe=[],Ee=0,In=null,We=1,Ve="";function wn(e,n){Gn[Wn++]=Wr,Gn[Wn++]=Gr,Gr=e,Wr=n}function ls(e,n,t){xe[Ee++]=We,xe[Ee++]=Ve,xe[Ee++]=In,In=e;var r=We;e=Ve;var l=32-Me(r)-1;r&=~(1<<l),t+=1;var i=32-Me(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Me(n)+l|t<<l|r,Ve=i+e}else We=1<<i|t<<l|r,Ve=e}function ao(e){e.return!==null&&(wn(e,1),ls(e,1,0))}function uo(e){for(;e===Gr;)Gr=Gn[--Wn],Gn[Wn]=null,Wr=Gn[--Wn],Gn[Wn]=null;for(;e===In;)In=xe[--Ee],xe[Ee]=null,Ve=xe[--Ee],xe[Ee]=null,We=xe[--Ee],xe[Ee]=null}var Se=null,Ne=null,B=!1,He=null;function is(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ga(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,Ne=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,Ne=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=In!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,Ne=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(B){var n=Ne;if(n){var t=n;if(!ga(e,n)){if(wi(e))throw Error(S(418));n=cn(t.nextSibling);var r=Se;n&&ga(e,n)?is(r,t):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(wi(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function hr(e){if(e!==Se)return!1;if(!B)return Na(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=Ne)){if(wi(e))throw os(),Error(S(418));for(;n;)is(e,n),n=cn(n.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ne=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ne=null}}else Ne=Se?cn(e.stateNode.nextSibling):null;return!0}function os(){for(var e=Ne;e;)e=cn(e.nextSibling)}function rt(){Ne=Se=null,B=!1}function so(e){He===null?He=[e]:He.push(e)}var nf=Je.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function yr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sa(e){var n=e._init;return n(e._payload)}function as(e){function n(p,s){if(e){var m=p.deletions;m===null?(p.deletions=[s],p.flags|=16):m.push(s)}}function t(p,s){if(!e)return null;for(;s!==null;)n(p,s),s=s.sibling;return null}function r(p,s){for(p=new Map;s!==null;)s.key!==null?p.set(s.key,s):p.set(s.index,s),s=s.sibling;return p}function l(p,s){return p=mn(p,s),p.index=0,p.sibling=null,p}function i(p,s,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<s?(p.flags|=2,s):m):(p.flags|=2,s)):(p.flags|=1048576,s)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,s,m,c){return s===null||s.tag!==6?(s=Vl(m,p.mode,c),s.return=p,s):(s=l(s,m),s.return=p,s)}function u(p,s,m,c){var N=m.type;return N===zn?g(p,s,m.props.children,c,m.key):s!==null&&(s.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===en&&Sa(N)===s.type)?(c=l(s,m.props),c.ref=gt(p,s,m),c.return=p,c):(c=jr(m.type,m.key,m.props,null,p.mode,c),c.ref=gt(p,s,m),c.return=p,c)}function f(p,s,m,c){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Kl(m,p.mode,c),s.return=p,s):(s=l(s,m.children||[]),s.return=p,s)}function g(p,s,m,c,N){return s===null||s.tag!==7?(s=_n(m,p.mode,c,N),s.return=p,s):(s=l(s,m),s.return=p,s)}function y(p,s,m){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Vl(""+s,p.mode,m),s.return=p,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ir:return m=jr(s.type,s.key,s.props,null,p.mode,m),m.ref=gt(p,null,s),m.return=p,m;case Fn:return s=Kl(s,p.mode,m),s.return=p,s;case en:var c=s._init;return y(p,c(s._payload),m)}if(wt(s)||pt(s))return s=_n(s,p.mode,m,null),s.return=p,s;yr(p,s)}return null}function h(p,s,m,c){var N=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:a(p,s,""+m,c);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ir:return m.key===N?u(p,s,m,c):null;case Fn:return m.key===N?f(p,s,m,c):null;case en:return N=m._init,h(p,s,N(m._payload),c)}if(wt(m)||pt(m))return N!==null?null:g(p,s,m,c,null);yr(p,m)}return null}function w(p,s,m,c,N){if(typeof c=="string"&&c!==""||typeof c=="number")return p=p.get(m)||null,a(s,p,""+c,N);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ir:return p=p.get(c.key===null?m:c.key)||null,u(s,p,c,N);case Fn:return p=p.get(c.key===null?m:c.key)||null,f(s,p,c,N);case en:var v=c._init;return w(p,s,m,v(c._payload),N)}if(wt(c)||pt(c))return p=p.get(m)||null,g(s,p,c,N,null);yr(s,c)}return null}function k(p,s,m,c){for(var N=null,v=null,C=s,P=s=0,T=null;C!==null&&P<m.length;P++){C.index>P?(T=C,C=null):T=C.sibling;var A=h(p,C,m[P],c);if(A===null){C===null&&(C=T);break}e&&C&&A.alternate===null&&n(p,C),s=i(A,s,P),v===null?N=A:v.sibling=A,v=A,C=T}if(P===m.length)return t(p,C),B&&wn(p,P),N;if(C===null){for(;P<m.length;P++)C=y(p,m[P],c),C!==null&&(s=i(C,s,P),v===null?N=C:v.sibling=C,v=C);return B&&wn(p,P),N}for(C=r(p,C);P<m.length;P++)T=w(C,p,P,m[P],c),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?P:T.key),s=i(T,s,P),v===null?N=T:v.sibling=T,v=T);return e&&C.forEach(function(ve){return n(p,ve)}),B&&wn(p,P),N}function x(p,s,m,c){var N=pt(m);if(typeof N!="function")throw Error(S(150));if(m=N.call(m),m==null)throw Error(S(151));for(var v=N=null,C=s,P=s=0,T=null,A=m.next();C!==null&&!A.done;P++,A=m.next()){C.index>P?(T=C,C=null):T=C.sibling;var ve=h(p,C,A.value,c);if(ve===null){C===null&&(C=T);break}e&&C&&ve.alternate===null&&n(p,C),s=i(ve,s,P),v===null?N=ve:v.sibling=ve,v=ve,C=T}if(A.done)return t(p,C),B&&wn(p,P),N;if(C===null){for(;!A.done;P++,A=m.next())A=y(p,A.value,c),A!==null&&(s=i(A,s,P),v===null?N=A:v.sibling=A,v=A);return B&&wn(p,P),N}for(C=r(p,C);!A.done;P++,A=m.next())A=w(C,p,P,A.value,c),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?P:A.key),s=i(A,s,P),v===null?N=A:v.sibling=A,v=A);return e&&C.forEach(function(dt){return n(p,dt)}),B&&wn(p,P),N}function M(p,s,m,c){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ir:e:{for(var N=m.key,v=s;v!==null;){if(v.key===N){if(N=m.type,N===zn){if(v.tag===7){t(p,v.sibling),s=l(v,m.props.children),s.return=p,p=s;break e}}else if(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===en&&Sa(N)===v.type){t(p,v.sibling),s=l(v,m.props),s.ref=gt(p,v,m),s.return=p,p=s;break e}t(p,v);break}else n(p,v);v=v.sibling}m.type===zn?(s=_n(m.props.children,p.mode,c,m.key),s.return=p,p=s):(c=jr(m.type,m.key,m.props,null,p.mode,c),c.ref=gt(p,s,m),c.return=p,p=c)}return o(p);case Fn:e:{for(v=m.key;s!==null;){if(s.key===v)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){t(p,s.sibling),s=l(s,m.children||[]),s.return=p,p=s;break e}else{t(p,s);break}else n(p,s);s=s.sibling}s=Kl(m,p.mode,c),s.return=p,p=s}return o(p);case en:return v=m._init,M(p,s,v(m._payload),c)}if(wt(m))return k(p,s,m,c);if(pt(m))return x(p,s,m,c);yr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,s!==null&&s.tag===6?(t(p,s.sibling),s=l(s,m),s.return=p,p=s):(t(p,s),s=Vl(m,p.mode,c),s.return=p,p=s),o(p)):t(p,s)}return M}var lt=as(!0),us=as(!1),Vr=gn(null),Kr=null,Vn=null,co=null;function fo(){co=Vn=Kr=null}function po(e){var n=Vr.current;U(Vr),e._currentValue=n}function xi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function bn(e,n){Kr=e,co=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(co!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Kr===null)throw Error(S(308));Vn=e,Kr.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var En=null;function mo(e){En===null?En=[e]:En.push(e)}function ss(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,mo(n)):(t.next=l.next,l.next=t),n.interleaved=t,qe(e,r)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,qe(e,t)}return l=r.interleaved,l===null?(n.next=n,mo(r)):(n.next=l.next,l.next=n),r.interleaved=n,qe(e,t)}function Pr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bi(e,t)}}function Ca(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yr(e,n,t,r){var l=e.updateQueue;nn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=f:a.next=f,g.lastBaseUpdate=u))}if(i!==null){var y=l.baseState;o=0,g=f=u=null,a=i;do{var h=a.lane,w=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(h=n,w=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){y=k.call(w,y,h);break e}y=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(w,y,h):k,h==null)break e;y=G({},y,h);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(f=g=w,u=y):g=g.next=w,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(1);if(g===null&&(u=y),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);jn|=o,e.lanes=o,e.memoizedState=y}}function wa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var nr={},Qe=gn(nr),Wt=gn(nr),Vt=gn(nr);function Pn(e){if(e===nr)throw Error(S(174));return e}function yo(e,n){switch(z(Vt,n),z(Wt,e),z(Qe,nr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:li(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=li(n,e)}U(Qe),z(Qe,n)}function it(){U(Qe),U(Wt),U(Vt)}function ds(e){Pn(Vt.current);var n=Pn(Qe.current),t=li(n,e.type);n!==t&&(z(Wt,e),z(Qe,t))}function vo(e){Wt.current===e&&(U(Qe),U(Wt))}var Q=gn(0);function Xr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ul=[];function go(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Dr=Je.ReactCurrentDispatcher,Bl=Je.ReactCurrentBatchConfig,An=0,$=null,X=null,J=null,qr=!1,It=!1,Kt=0,tf=0;function re(){throw Error(S(321))}function No(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Re(e[t],n[t]))return!1;return!0}function So(e,n,t,r,l,i){if(An=i,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dr.current=e===null||e.memoizedState===null?af:uf,e=t(r,l),It){i=0;do{if(It=!1,Kt=0,25<=i)throw Error(S(301));i+=1,J=X=null,n.updateQueue=null,Dr.current=sf,e=t(r,l)}while(It)}if(Dr.current=Zr,n=X!==null&&X.next!==null,An=0,J=X=$=null,qr=!1,n)throw Error(S(300));return e}function Co(){var e=Kt!==0;return Kt=0,e}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Te(){if(X===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=J===null?$.memoizedState:J.next;if(n!==null)J=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function Yt(e,n){return typeof n=="function"?n(e):n}function Ql(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,f=i;do{var g=f.lane;if((An&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=y,o=r):u=u.next=y,$.lanes|=g,jn|=g}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=a,Re(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,jn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $l(e){var n=Te(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function fs(){}function ps(e,n){var t=$,r=Te(),l=n(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,wo(ys.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,Xt(9,hs.bind(null,t,r,l,n),void 0,null),b===null)throw Error(S(349));An&30||ms(t,n,l)}return l}function ms(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function hs(e,n,t,r){n.value=t,n.getSnapshot=r,vs(n)&&gs(e)}function ys(e,n,t){return t(function(){vs(n)&&gs(e)})}function vs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Re(e,t)}catch{return!0}}function gs(e){var n=qe(e,1);n!==null&&Oe(n,e,1,-1)}function ka(e){var n=Le();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},n.queue=e,e=e.dispatch=of.bind(null,$,e),[n.memoizedState,e]}function Xt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ns(){return Te().memoizedState}function _r(e,n,t,r){var l=Le();$.flags|=e,l.memoizedState=Xt(1|n,t,void 0,r===void 0?null:r)}function cl(e,n,t,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&No(r,o.deps)){l.memoizedState=Xt(n,t,i,r);return}}$.flags|=e,l.memoizedState=Xt(1|n,t,i,r)}function xa(e,n){return _r(8390656,8,e,n)}function wo(e,n){return cl(2048,8,e,n)}function Ss(e,n){return cl(4,2,e,n)}function Cs(e,n){return cl(4,4,e,n)}function ws(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ks(e,n,t){return t=t!=null?t.concat([e]):null,cl(4,4,ws.bind(null,n,e),t)}function ko(){}function xs(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&No(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Es(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&No(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ps(e,n,t){return An&21?(Re(t,n)||(t=Au(),$.lanes|=t,jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function rf(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),n()}finally{R=t,Bl.transition=r}}function Ds(){return Te().memoizedState}function lf(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},_s(e))Ts(n,t);else if(t=ss(e,n,t,r),t!==null){var l=se();Oe(t,e,r,l),Is(t,n,r)}}function of(e,n,t){var r=pn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(_s(e))Ts(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Re(a,o)){var u=n.interleaved;u===null?(l.next=l,mo(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=ss(e,n,l,r),t!==null&&(l=se(),Oe(t,e,r,l),Is(t,n,r))}}function _s(e){var n=e.alternate;return e===$||n!==null&&n===$}function Ts(e,n){It=qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Is(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bi(e,t)}}var Zr={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},af={readContext:_e,useCallback:function(e,n){return Le().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,_r(4194308,4,ws.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _r(4194308,4,e,n)},useInsertionEffect:function(e,n){return _r(4,2,e,n)},useMemo:function(e,n){var t=Le();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Le();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var n=Le();return e={current:e},n.memoizedState=e},useState:ka,useDebugValue:ko,useDeferredValue:function(e){return Le().memoizedState=e},useTransition:function(){var e=ka(!1),n=e[0];return e=rf.bind(null,e[1]),Le().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=$,l=Le();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),b===null)throw Error(S(349));An&30||ms(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,xa(ys.bind(null,r,i,e),[e]),r.flags|=2048,Xt(9,hs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Le(),n=b.identifierPrefix;if(B){var t=Ve,r=We;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uf={readContext:_e,useCallback:xs,useContext:_e,useEffect:wo,useImperativeHandle:ks,useInsertionEffect:Ss,useLayoutEffect:Cs,useMemo:Es,useReducer:Ql,useRef:Ns,useState:function(){return Ql(Yt)},useDebugValue:ko,useDeferredValue:function(e){var n=Te();return Ps(n,X.memoizedState,e)},useTransition:function(){var e=Ql(Yt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:fs,useSyncExternalStore:ps,useId:Ds,unstable_isNewReconciler:!1},sf={readContext:_e,useCallback:xs,useContext:_e,useEffect:wo,useImperativeHandle:ks,useInsertionEffect:Ss,useLayoutEffect:Cs,useMemo:Es,useReducer:$l,useRef:Ns,useState:function(){return $l(Yt)},useDebugValue:ko,useDeferredValue:function(e){var n=Te();return X===null?n.memoizedState=e:Ps(n,X.memoizedState,e)},useTransition:function(){var e=$l(Yt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:fs,useSyncExternalStore:ps,useId:Ds,unstable_isNewReconciler:!1};function Ae(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ei(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dl={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Ke(r,l);i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Oe(n,e,l,r),Pr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),i=Ke(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Oe(n,e,l,r),Pr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=pn(e),l=Ke(t,r);l.tag=2,n!=null&&(l.callback=n),n=dn(e,l,r),n!==null&&(Oe(n,e,r,t),Pr(n,e,r))}};function Ea(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Bt(t,r)||!Bt(l,i):!0}function As(e,n,t){var r=!1,l=yn,i=n.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=he(n)?Tn:oe.current,r=n.contextTypes,i=(r=r!=null)?tt(e,l):yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Pa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dl.enqueueReplaceState(n,n.state,null)}function Pi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ho(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=he(n)?Tn:oe.current,l.context=tt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&dl.enqueueReplaceState(l,l.state,null),Yr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ot(e,n){try{var t="",r=n;do t+=Rc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Gl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Di(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function js(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){br||(br=!0,Fi=r),Di(e,n)},t}function Hs(e,n,t){t=Ke(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Di(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Di(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Da(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=xf.bind(null,e,n,t),n.then(e,e))}function _a(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ta(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var df=Je.ReactCurrentOwner,pe=!1;function ue(e,n,t,r){n.child=e===null?us(n,null,t,r):lt(n,e.child,t,r)}function Ia(e,n,t,r,l){t=t.render;var i=n.ref;return bn(n,l),r=So(e,n,t,r,i,l),t=Co(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(B&&t&&ao(n),n.flags|=1,ue(e,n,r,l),n.child)}function Aa(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Ao(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ms(e,n,i,r,l)):(e=jr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Bt,t(o,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=mn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ms(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Bt(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return _i(e,n,t,r,l)}function Os(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Yn,ge),ge|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,z(Yn,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,z(Yn,ge),ge|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,z(Yn,ge),ge|=r;return ue(e,n,l,t),n.child}function Rs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _i(e,n,t,r,l){var i=he(t)?Tn:oe.current;return i=tt(n,i),bn(n,l),t=So(e,n,t,r,i,l),r=Co(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(B&&r&&ao(n),n.flags|=1,ue(e,n,t,l),n.child)}function ja(e,n,t,r,l){if(he(t)){var i=!0;$r(n)}else i=!1;if(bn(n,l),n.stateNode===null)Tr(e,n),As(n,t,r),Pi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var u=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=_e(f):(f=he(t)?Tn:oe.current,f=tt(n,f));var g=t.getDerivedStateFromProps,y=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Pa(n,o,r,f),nn=!1;var h=n.memoizedState;o.state=h,Yr(n,r,o,l),u=n.memoizedState,a!==r||h!==u||me.current||nn?(typeof g=="function"&&(Ei(n,t,g,r),u=n.memoizedState),(a=nn||Ea(n,t,a,r,h,u,f))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,cs(e,n),a=n.memoizedProps,f=n.type===n.elementType?a:Ae(n.type,a),o.props=f,y=n.pendingProps,h=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=he(t)?Tn:oe.current,u=tt(n,u));var w=t.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==y||h!==u)&&Pa(n,o,r,u),nn=!1,h=n.memoizedState,o.state=h,Yr(n,r,o,l);var k=n.memoizedState;a!==y||h!==k||me.current||nn?(typeof w=="function"&&(Ei(n,t,w,r),k=n.memoizedState),(f=nn||Ea(n,t,f,r,h,k,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Ti(e,n,t,r,i,l)}function Ti(e,n,t,r,l,i){Rs(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&va(n,t,!1),Ze(e,n,i);r=n.stateNode,df.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=lt(n,e.child,null,i),n.child=lt(n,null,a,i)):ue(e,n,a,i),n.memoizedState=r.state,l&&va(n,t,!0),n.child}function Fs(e){var n=e.stateNode;n.pendingContext?ya(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ya(e,n.context,!1),yo(e,n.containerInfo)}function Ha(e,n,t,r,l){return rt(),so(l),n.flags|=256,ue(e,n,t,r),n.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function zs(e,n,t){var r=n.pendingProps,l=Q.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),z(Q,l&1),e===null)return ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,r,0,null),e=_n(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ai(t),n.memoizedState=Ii,e):xo(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ff(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=mn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=_n(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Ai(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xo(e,n){return n=ml({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vr(e,n,t,r){return r!==null&&so(r),lt(n,e.child,null,t),e=xo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ff(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Gl(Error(S(422))),vr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=_n(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&lt(n,e.child,null,o),n.child.memoizedState=Ai(o),n.memoizedState=Ii,i);if(!(n.mode&1))return vr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=Gl(i,r,void 0),vr(e,n,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qe(e,l),Oe(r,e,l,-1))}return Io(),r=Gl(Error(S(421))),vr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Ef.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ne=cn(l.nextSibling),Se=n,B=!0,He=null,e!==null&&(xe[Ee++]=We,xe[Ee++]=Ve,xe[Ee++]=In,We=e.id,Ve=e.overflow,In=n),n=xo(n,r.children),n.flags|=4096,n)}function Ma(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xi(e.return,n,t)}function Wl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ls(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,t,n);else if(e.tag===19)Ma(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(Q,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Xr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Wl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Wl(n,!0,t,null,i);break;case"together":Wl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pf(e,n,t){switch(n.tag){case 3:Fs(n),rt();break;case 5:ds(n);break;case 1:he(n.type)&&$r(n);break;case 4:yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;z(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(z(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?zs(e,n,t):(z(Q,Q.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);z(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ls(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),z(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,Os(e,n,t)}return Ze(e,n,t)}var Us,ji,Bs,Qs;Us=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ji=function(){};Bs=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Pn(Qe.current);var i=null;switch(t){case"input":l=ei(e,l),r=ei(e,r),i=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":l=ri(e,l),r=ri(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}ii(t,r);var o;t=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mt.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(f,t)),t=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mt.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&L("scroll",e),i||a===u||(i=[])):(i=i||[]).push(f,u))}t&&(i=i||[]).push("style",t);var f=i;(n.updateQueue=f)&&(n.flags|=4)}};Qs=function(e,n,t,r){t!==r&&(n.flags|=4)};function Nt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function mf(e,n,t){var r=n.pendingProps;switch(uo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return he(n.type)&&Qr(),le(n),null;case 3:return r=n.stateNode,it(),U(me),U(oe),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(Ui(He),He=null))),ji(e,n),le(n),null;case 5:vo(n);var l=Pn(Vt.current);if(t=n.type,e!==null&&n.stateNode!=null)Bs(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return le(n),null}if(e=Pn(Qe.current),hr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ue]=n,r[Gt]=i,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(l=0;l<xt.length;l++)L(xt[l],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":$o(r,i),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},L("invalid",r);break;case"textarea":Wo(r,i),L("invalid",r)}ii(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,a,e),l=["children",""+a]):Mt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&L("scroll",r)}switch(t){case"input":or(r),Go(r,i,!0);break;case"textarea":or(r),Vo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ue]=n,e[Gt]=r,Us(e,n,!1,!1),n.stateNode=e;e:{switch(o=oi(t,r),t){case"dialog":L("cancel",e),L("close",e),l=r;break;case"iframe":case"object":case"embed":L("load",e),l=r;break;case"video":case"audio":for(l=0;l<xt.length;l++)L(xt[l],e);l=r;break;case"source":L("error",e),l=r;break;case"img":case"image":case"link":L("error",e),L("load",e),l=r;break;case"details":L("toggle",e),l=r;break;case"input":$o(e,r),l=ei(e,r),L("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),L("invalid",e);break;case"textarea":Wo(e,r),l=ri(e,r),L("invalid",e);break;default:l=r}ii(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Nu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vu(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ot(e,u):typeof u=="number"&&Ot(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&L("scroll",e):u!=null&&Ki(e,i,u,o))}switch(t){case"input":or(e),Go(e,r,!1);break;case"textarea":or(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Br)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Qs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Pn(Vt.current),Pn(Qe.current),hr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(i=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:mr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return le(n),null;case 13:if(U(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ne!==null&&n.mode&1&&!(n.flags&128))os(),rt(),n.flags|=98560,i=!1;else if(i=hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ue]=n}else rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),i=!1}else He!==null&&(Ui(He),He=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?q===0&&(q=3):Io())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return it(),ji(e,n),e===null&&Qt(n.stateNode.containerInfo),le(n),null;case 10:return po(n.type._context),le(n),null;case 17:return he(n.type)&&Qr(),le(n),null;case 19:if(U(Q),i=n.memoizedState,i===null)return le(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Nt(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Xr(e),o!==null){for(n.flags|=128,Nt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return z(Q,Q.current&1|2),n.child}e=e.sibling}i.tail!==null&&K()>at&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Nt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return le(n),null}else 2*K()-i.renderingStartTime>at&&t!==1073741824&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=K(),n.sibling=null,t=Q.current,z(Q,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return To(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ge&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function hf(e,n){switch(uo(n),n.tag){case 1:return he(n.type)&&Qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return it(),U(me),U(oe),go(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vo(n),null;case 13:if(U(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(Q),null;case 4:return it(),null;case 10:return po(n.type._context),null;case 22:case 23:return To(),null;case 24:return null;default:return null}}var gr=!1,ie=!1,yf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Kn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Hi(e,n,t){try{t()}catch(r){W(e,n,r)}}var Oa=!1;function vf(e,n){if(yi=zr,e=Ku(),oo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,f=0,g=0,y=e,h=null;n:for(;;){for(var w;y!==t||l!==0&&y.nodeType!==3||(a=o+l),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(w=y.firstChild)!==null;)h=y,y=w;for(;;){if(y===e)break n;if(h===t&&++f===l&&(a=o),h===i&&++g===r&&(u=o),(w=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=w}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(vi={focusedElem:e,selectionRange:t},zr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,M=k.memoizedState,p=n.stateNode,s=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ae(n.type,x),M);p.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(c){W(n,n.return,c)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return k=Oa,Oa=!1,k}function At(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(n,t,i)}l=l.next}while(l!==r)}}function fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Mi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function $s(e){var n=e.alternate;n!==null&&(e.alternate=null,$s(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[Gt],delete n[Si],delete n[Jd],delete n[bd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gs(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,n,t),e=e.sibling;e!==null;)Oi(e,n,t),e=e.sibling}function Ri(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,n,t),e=e.sibling;e!==null;)Ri(e,n,t),e=e.sibling}var ee=null,je=!1;function be(e,n,t){for(t=t.child;t!==null;)Ws(e,n,t),t=t.sibling}function Ws(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ll,t)}catch{}switch(t.tag){case 5:ie||Kn(t,n);case 6:var r=ee,l=je;ee=null,be(e,n,t),ee=r,je=l,ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?zl(e.parentNode,t):e.nodeType===1&&zl(e,t),Lt(e)):zl(ee,t.stateNode));break;case 4:r=ee,l=je,ee=t.stateNode.containerInfo,je=!0,be(e,n,t),ee=r,je=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hi(t,n,o),l=l.next}while(l!==r)}be(e,n,t);break;case 1:if(!ie&&(Kn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){W(t,n,a)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,be(e,n,t),ie=r):be(e,n,t);break;default:be(e,n,t)}}function Fa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new yf),n.forEach(function(r){var l=Pf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,je=!1;break e;case 3:ee=a.stateNode.containerInfo,je=!0;break e;case 4:ee=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ee===null)throw Error(S(160));Ws(i,o,l),ee=null,je=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){W(l,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vs(n,e),n=n.sibling}function Vs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),Fe(e),r&4){try{At(3,e,e.return),fl(3,e)}catch(x){W(e,e.return,x)}try{At(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Ie(n,e),Fe(e),r&512&&t!==null&&Kn(t,t.return);break;case 5:if(Ie(n,e),Fe(e),r&512&&t!==null&&Kn(t,t.return),e.flags&32){var l=e.stateNode;try{Ot(l,"")}catch(x){W(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&mu(l,i),oi(a,o);var f=oi(a,i);for(o=0;o<u.length;o+=2){var g=u[o],y=u[o+1];g==="style"?Nu(l,y):g==="dangerouslySetInnerHTML"?vu(l,y):g==="children"?Ot(l,y):Ki(l,g,y,f)}switch(a){case"input":ni(l,i);break;case"textarea":hu(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Xn(l,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?Xn(l,!!i.multiple,i.defaultValue,!0):Xn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Gt]=i}catch(x){W(e,e.return,x)}}break;case 6:if(Ie(n,e),Fe(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){W(e,e.return,x)}}break;case 3:if(Ie(n,e),Fe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Lt(n.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Ie(n,e),Fe(e);break;case 13:Ie(n,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Do=K())),r&4&&Fa(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(f=ie)||g,Ie(n,e),ie=f):Ie(n,e),Fe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(y=E=g;E!==null;){switch(h=E,w=h.child,h.tag){case 0:case 11:case 14:case 15:At(4,h,h.return);break;case 1:Kn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){W(r,t,x)}}break;case 5:Kn(h,h.return);break;case 22:if(h.memoizedState!==null){La(y);continue}}w!==null?(w.return=h,E=w):La(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{l=y.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gu("display",o))}catch(x){W(e,e.return,x)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(x){W(e,e.return,x)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ie(n,e),Fe(e),r&4&&Fa(e);break;case 21:break;default:Ie(n,e),Fe(e)}}function Fe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Gs(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ot(l,""),r.flags&=-33);var i=Ra(e);Ri(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ra(e);Oi(e,a,o);break;default:throw Error(S(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gf(e,n,t){E=e,Ks(e)}function Ks(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=gr;var f=ie;if(gr=o,(ie=u)&&!f)for(E=l;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Ua(l):u!==null?(u.return=o,E=u):Ua(l);for(;i!==null;)E=i,Ks(i),i=i.sibling;E=l,gr=a,ie=f}za(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):za(e)}}function za(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ae(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&wa(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wa(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&Lt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||n.flags&512&&Mi(n)}catch(h){W(n,n.return,h)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function La(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Ua(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fl(4,n)}catch(u){W(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){W(n,l,u)}}var i=n.return;try{Mi(n)}catch(u){W(n,i,u)}break;case 5:var o=n.return;try{Mi(n)}catch(u){W(n,o,u)}}}catch(u){W(n,n.return,u)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var Nf=Math.ceil,Jr=Je.ReactCurrentDispatcher,Eo=Je.ReactCurrentOwner,De=Je.ReactCurrentBatchConfig,H=0,b=null,Y=null,ne=0,ge=0,Yn=gn(0),q=0,qt=null,jn=0,pl=0,Po=0,jt=null,fe=null,Do=0,at=1/0,$e=null,br=!1,Fi=null,fn=null,Nr=!1,on=null,el=0,Ht=0,zi=null,Ir=-1,Ar=0;function se(){return H&6?K():Ir!==-1?Ir:Ir=K()}function pn(e){return e.mode&1?H&2&&ne!==0?ne&-ne:nf.transition!==null?(Ar===0&&(Ar=Au()),Ar):(e=R,e!==0||(e=window.event,e=e===void 0?16:zu(e.type)),e):1}function Oe(e,n,t,r){if(50<Ht)throw Ht=0,zi=null,Error(S(185));Jt(e,t,r),(!(H&2)||e!==b)&&(e===b&&(!(H&2)&&(pl|=t),q===4&&rn(e,ne)),ye(e,r),t===1&&H===0&&!(n.mode&1)&&(at=K()+500,sl&&Nn()))}function ye(e,n){var t=e.callbackNode;nd(e,n);var r=Fr(e,e===b?ne:0);if(r===0)t!==null&&Xo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xo(t),n===1)e.tag===0?ef(Ba.bind(null,e)):rs(Ba.bind(null,e)),qd(function(){!(H&6)&&Nn()}),t=null;else{switch(ju(r)){case 1:t=Ji;break;case 4:t=Tu;break;case 16:t=Rr;break;case 536870912:t=Iu;break;default:t=Rr}t=nc(t,Ys.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ys(e,n){if(Ir=-1,Ar=0,H&6)throw Error(S(327));var t=e.callbackNode;if(et()&&e.callbackNode!==t)return null;var r=Fr(e,e===b?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=nl(e,r);else{n=r;var l=H;H|=2;var i=qs();(b!==e||ne!==n)&&($e=null,at=K()+500,Dn(e,n));do try{wf();break}catch(a){Xs(e,a)}while(1);fo(),Jr.current=i,H=l,Y!==null?n=0:(b=null,ne=0,n=q)}if(n!==0){if(n===2&&(l=di(e),l!==0&&(r=l,n=Li(e,l))),n===1)throw t=qt,Dn(e,0),rn(e,r),ye(e,K()),t;if(n===6)rn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sf(l)&&(n=nl(e,r),n===2&&(i=di(e),i!==0&&(r=i,n=Li(e,i))),n===1))throw t=qt,Dn(e,0),rn(e,r),ye(e,K()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:kn(e,fe,$e);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=Do+500-K(),10<n)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ni(kn.bind(null,e,fe,$e),n);break}kn(e,fe,$e);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=Ni(kn.bind(null,e,fe,$e),r);break}kn(e,fe,$e);break;case 5:kn(e,fe,$e);break;default:throw Error(S(329))}}}return ye(e,K()),e.callbackNode===t?Ys.bind(null,e):null}function Li(e,n){var t=jt;return e.current.memoizedState.isDehydrated&&(Dn(e,n).flags|=256),e=nl(e,n),e!==2&&(n=fe,fe=t,n!==null&&Ui(n)),e}function Ui(e){fe===null?fe=e:fe.push.apply(fe,e)}function Sf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Po,n&=~pl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function Ba(e){if(H&6)throw Error(S(327));et();var n=Fr(e,0);if(!(n&1))return ye(e,K()),null;var t=nl(e,n);if(e.tag!==0&&t===2){var r=di(e);r!==0&&(n=r,t=Li(e,r))}if(t===1)throw t=qt,Dn(e,0),rn(e,n),ye(e,K()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,fe,$e),ye(e,K()),null}function _o(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(at=K()+500,sl&&Nn())}}function Hn(e){on!==null&&on.tag===0&&!(H&6)&&et();var n=H;H|=1;var t=De.transition,r=R;try{if(De.transition=null,R=1,e)return e()}finally{R=r,De.transition=t,H=n,!(H&6)&&Nn()}}function To(){ge=Yn.current,U(Yn)}function Dn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xd(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:it(),U(me),U(oe),go();break;case 5:vo(r);break;case 4:it();break;case 13:U(Q);break;case 19:U(Q);break;case 10:po(r.type._context);break;case 22:case 23:To()}t=t.return}if(b=e,Y=e=mn(e.current,null),ne=ge=n,q=0,qt=null,Po=pl=jn=0,fe=jt=null,En!==null){for(n=0;n<En.length;n++)if(t=En[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}En=null}return e}function Xs(e,n){do{var t=Y;try{if(fo(),Dr.current=Zr,qr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(An=0,J=X=$=null,It=!1,Kt=0,Eo.current=null,t===null||t.return===null){q=1,qt=n,Y=null;break}e:{var i=e,o=t.return,a=t,u=n;if(n=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=a,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=_a(o);if(w!==null){w.flags&=-257,Ta(w,o,a,i,n),w.mode&1&&Da(i,f,n),n=w,u=f;var k=n.updateQueue;if(k===null){var x=new Set;x.add(u),n.updateQueue=x}else k.add(u);break e}else{if(!(n&1)){Da(i,f,n),Io();break e}u=Error(S(426))}}else if(B&&a.mode&1){var M=_a(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ta(M,o,a,i,n),so(ot(u,a));break e}}i=u=ot(u,a),q!==4&&(q=2),jt===null?jt=[i]:jt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=js(i,u,n);Ca(i,p);break e;case 1:a=u;var s=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fn===null||!fn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var c=Hs(i,a,n);Ca(i,c);break e}}i=i.return}while(i!==null)}Js(t)}catch(N){n=N,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(1)}function qs(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Io(){(q===0||q===3||q===2)&&(q=4),b===null||!(jn&268435455)&&!(pl&268435455)||rn(b,ne)}function nl(e,n){var t=H;H|=2;var r=qs();(b!==e||ne!==n)&&($e=null,Dn(e,n));do try{Cf();break}catch(l){Xs(e,l)}while(1);if(fo(),H=t,Jr.current=r,Y!==null)throw Error(S(261));return b=null,ne=0,q}function Cf(){for(;Y!==null;)Zs(Y)}function wf(){for(;Y!==null&&!Vc();)Zs(Y)}function Zs(e){var n=ec(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?Js(e):Y=n,Eo.current=null}function Js(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=hf(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Y=null;return}}else if(t=mf(t,n,ge),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);q===0&&(q=5)}function kn(e,n,t){var r=R,l=De.transition;try{De.transition=null,R=1,kf(e,n,t,r)}finally{De.transition=l,R=r}return null}function kf(e,n,t,r){do et();while(on!==null);if(H&6)throw Error(S(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(td(e,i),e===b&&(Y=b=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Nr||(Nr=!0,nc(Rr,function(){return et(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=De.transition,De.transition=null;var o=R;R=1;var a=H;H|=4,Eo.current=null,vf(e,t),Vs(t,e),Qd(vi),zr=!!yi,vi=yi=null,e.current=t,gf(t),Kc(),H=a,R=o,De.transition=i}else e.current=t;if(Nr&&(Nr=!1,on=e,el=l),i=e.pendingLanes,i===0&&(fn=null),qc(t.stateNode),ye(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(br)throw br=!1,e=Fi,Fi=null,e;return el&1&&e.tag!==0&&et(),i=e.pendingLanes,i&1?e===zi?Ht++:(Ht=0,zi=e):Ht=0,Nn(),null}function et(){if(on!==null){var e=ju(el),n=De.transition,t=R;try{if(De.transition=null,R=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,el=0,H&6)throw Error(S(331));var l=H;for(H|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(E=f;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:At(8,g,i)}var y=g.child;if(y!==null)y.return=g,E=y;else for(;E!==null;){g=E;var h=g.sibling,w=g.return;if($s(g),g===f){E=null;break}if(h!==null){h.return=w,E=h;break}E=w}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:At(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,E=p;break e}E=i.return}}var s=e.current;for(E=s;E!==null;){o=E;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,E=m;else e:for(o=s;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(N){W(a,a.return,N)}if(a===o){E=null;break e}var c=a.sibling;if(c!==null){c.return=a.return,E=c;break e}E=a.return}}if(H=l,Nn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{R=t,De.transition=n}}return!1}function Qa(e,n,t){n=ot(t,n),n=js(e,n,1),e=dn(e,n,1),n=se(),e!==null&&(Jt(e,1,n),ye(e,n))}function W(e,n,t){if(e.tag===3)Qa(e,e,t);else for(;n!==null;){if(n.tag===3){Qa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=ot(t,e),e=Hs(n,e,1),n=dn(n,e,1),e=se(),n!==null&&(Jt(n,1,e),ye(n,e));break}}n=n.return}}function xf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(ne&t)===t&&(q===4||q===3&&(ne&130023424)===ne&&500>K()-Do?Dn(e,0):Po|=t),ye(e,n)}function bs(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=se();e=qe(e,n),e!==null&&(Jt(e,n,t),ye(e,t))}function Ef(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bs(e,t)}function Pf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),bs(e,t)}var ec;ec=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,pf(e,n,t);pe=!!(e.flags&131072)}else pe=!1,B&&n.flags&1048576&&ls(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Tr(e,n),e=n.pendingProps;var l=tt(n,oe.current);bn(n,t),l=So(null,n,r,e,l,t);var i=Co();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,$r(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ho(n),l.updater=dl,n.stateNode=l,l._reactInternals=n,Pi(n,r,e,t),n=Ti(null,n,r,!0,i,t)):(n.tag=0,B&&i&&ao(n),ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Tr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=_f(r),e=Ae(r,e),l){case 0:n=_i(null,n,r,e,t);break e;case 1:n=ja(null,n,r,e,t);break e;case 11:n=Ia(null,n,r,e,t);break e;case 14:n=Aa(null,n,r,Ae(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),_i(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),ja(e,n,r,l,t);case 3:e:{if(Fs(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,l=i.element,cs(e,n),Yr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=ot(Error(S(423)),n),n=Ha(e,n,r,t,l);break e}else if(r!==l){l=ot(Error(S(424)),n),n=Ha(e,n,r,t,l);break e}else for(Ne=cn(n.stateNode.containerInfo.firstChild),Se=n,B=!0,He=null,t=us(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rt(),r===l){n=Ze(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return ds(n),e===null&&ki(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(n.flags|=32),Rs(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&ki(n),null;case 13:return zs(e,n,t);case 4:return yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=lt(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),Ia(e,n,r,l,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,z(Vr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!me.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ke(-1,t&-t),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),xi(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),xi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,bn(n,t),l=_e(l),r=r(l),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,l=Ae(r,n.pendingProps),l=Ae(r.type,l),Aa(e,n,r,l,t);case 15:return Ms(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),Tr(e,n),n.tag=1,he(r)?(e=!0,$r(n)):e=!1,bn(n,t),As(n,r,l),Pi(n,r,l,t),Ti(null,n,r,!0,e,t);case 19:return Ls(e,n,t);case 22:return Os(e,n,t)}throw Error(S(156,n.tag))};function nc(e,n){return _u(e,n)}function Df(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new Df(e,n,t,r)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return Ao(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===qi)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Ao(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zn:return _n(t.children,l,i,n);case Yi:o=8,l|=8;break;case ql:return e=Pe(12,t,n,l|2),e.elementType=ql,e.lanes=i,e;case Zl:return e=Pe(13,t,n,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Pe(19,t,n,l),e.elementType=Jl,e.lanes=i,e;case du:return ml(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:o=10;break e;case cu:o=9;break e;case Xi:o=11;break e;case qi:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Pe(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function _n(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function ml(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=du,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function Kl(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function jo(e,n,t,r,l,i,o,a,u){return e=new Tf(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Pe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(i),e}function If(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function tc(e){if(!e)return yn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return ts(e,t,n)}return n}function rc(e,n,t,r,l,i,o,a,u){return e=jo(t,r,!0,e,l,i,o,a,u),e.context=tc(null),t=e.current,r=se(),l=pn(t),i=Ke(r,l),i.callback=n??null,dn(t,i,l),e.current.lanes=l,Jt(e,l,r),ye(e,r),e}function hl(e,n,t,r){var l=n.current,i=se(),o=pn(l);return t=tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(l,n,o),e!==null&&(Oe(e,l,o,i),Pr(e,l,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ho(e,n){$a(e,n),(e=e.alternate)&&$a(e,n)}function Af(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}yl.prototype.render=Mo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));hl(e,n,null,null)};yl.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){hl(null,e,null,null)}),n[Xe]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ou();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&Fu(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function jf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=tl(o);i.call(f)}}var o=rc(n,r,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=o,e[Xe]=o.current,Qt(e.nodeType===8?e.parentNode:e),Hn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=tl(u);a.call(f)}}var u=jo(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=u,e[Xe]=u.current,Qt(e.nodeType===8?e.parentNode:e),Hn(function(){hl(n,u,t,r)}),u}function gl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=tl(o);a.call(u)}}hl(n,o,e,l)}else o=jf(t,n,e,l,r);return tl(o)}Hu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(bi(n,t|1),ye(n,K()),!(H&6)&&(at=K()+500,Nn()))}break;case 13:Hn(function(){var r=qe(e,1);if(r!==null){var l=se();Oe(r,e,1,l)}}),Ho(e,1)}};eo=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=se();Oe(n,e,134217728,t)}Ho(e,134217728)}};Mu=function(e){if(e.tag===13){var n=pn(e),t=qe(e,n);if(t!==null){var r=se();Oe(t,e,n,r)}Ho(e,n)}};Ou=function(){return R};Ru=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};ui=function(e,n,t){switch(n){case"input":if(ni(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(S(90));pu(r),ni(r,l)}}}break;case"textarea":hu(e,t);break;case"select":n=t.value,n!=null&&Xn(e,!!t.multiple,n,!1)}};wu=_o;ku=Hn;var Hf={usingClientEntryPoint:!1,Events:[er,Qn,ul,Su,Cu,_o]},St={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:St.bundleType,version:St.version,rendererPackageName:St.rendererPackageName,rendererConfig:St.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:St.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{ll=Sr.inject(Mf),Be=Sr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(n))throw Error(S(200));return If(e,n,null,t)};we.createRoot=function(e,n){if(!Oo(e))throw Error(S(299));var t=!1,r="",l=lc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=jo(e,1,!1,null,null,t,!1,r,l),e[Xe]=n.current,Qt(e.nodeType===8?e.parentNode:e),new Mo(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Pu(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Hn(e)};we.hydrate=function(e,n,t){if(!vl(n))throw Error(S(200));return gl(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Oo(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=lc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=rc(n,null,e,1,t??null,l,!1,i,o),e[Xe]=n.current,Qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new yl(n)};we.render=function(e,n,t){if(!vl(n))throw Error(S(200));return gl(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!vl(e))throw Error(S(40));return e._reactRootContainer?(Hn(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};we.unstable_batchedUpdates=_o;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vl(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return gl(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),iu.exports=we;var Of=iu.exports,Wa=Of;Yl.createRoot=Wa.createRoot,Yl.hydrateRoot=Wa.hydrateRoot;const Rf=`{
  "app_name": "Safe Harbor Behavioral Health \\u2014 Credentialing Command Center",
  "clinic": {
    "name": "Safe Harbor Behavioral Health",
    "location": "Tulsa, Oklahoma",
    "mission": "No child is broken",
    "services": "Trauma-informed behavioral health for children ages 3-17",
    "org_npi_type2": "9876543210",
    "ein": "[FILL IN YOUR EIN]",
    "odmhsas_license": "[FILL IN YOUR LICENSE NUMBER]",
    "liability_insurance": "[FILL IN CARRIER NAME & POLICY NUMBER]"
  },
  "clinicians": [
    {
      "id": "clinician_1",
      "label": "Clinician 1 (Lashauna)",
      "npi_type1": "1234567890",
      "caqh_id": "12345678",
      "license_status": "Current",
      "license_expiry": "2027-06-30",
      "malpractice_status": "Current",
      "malpractice_expiry": "2026-09-01"
    },
    {
      "id": "clinician_2",
      "label": "Clinician 2 (Apollo)",
      "npi_type1": "987654321",
      "caqh_id": "87654321",
      "license_status": "Current",
      "license_expiry": "2026-12-31",
      "malpractice_status": "EXPIRED \\u2014 RENEW IMMEDIATELY",
      "malpractice_expiry": "2026-02-28"
    }
  ],
  "alerts": [
    {
      "level": "CRITICAL",
      "message": "Clinician 2 malpractice insurance EXPIRED February 28, 2026. Must renew before submitting ANY payer applications.",
      "action": "Contact your liability insurance carrier today and request a renewed Certificate of Insurance."
    }
  ],
  "phases": [
    {
      "phase": 1,
      "name": "Foundational Setup",
      "description": "NPI numbers and CAQH profiles \\u2014 must be done before anything else",
      "color": "#1a7a8a"
    },
    {
      "phase": 2,
      "name": "Oklahoma Medicaid & SoonerSelect MCOs",
      "description": "OHCA base enrollment + 3 managed care plans (Humana, Aetna Better Health, OK Complete Health)",
      "color": "#2980b9"
    },
    {
      "phase": 3,
      "name": "Commercial Insurance",
      "description": "BCBS Oklahoma, Aetna Commercial, UnitedHealthcare/Optum, Cigna/Evernorth \\u2014 90-120 day timelines",
      "color": "#8e44ad"
    },
    {
      "phase": 4,
      "name": "Payment Setup (EFT/ERA)",
      "description": "Electronic funds transfer and remittance setup per payer after credentialing approved",
      "color": "#27ae60"
    }
  ],
  "status_legend": [
    {
      "status": "Not Started",
      "color_bg": "#f4cccc",
      "color_text": "#922b21",
      "meaning": "Application not yet submitted; may be waiting on prerequisites",
      "next_action": "Complete prerequisites, then submit application"
    },
    {
      "status": "Ready to Submit",
      "color_bg": "#fce5cd",
      "color_text": "#784212",
      "meaning": "All prerequisites met; application ready but not yet sent",
      "next_action": "Submit application and record confirmation number"
    },
    {
      "status": "Submitted",
      "color_bg": "#fff2cc",
      "color_text": "#7d6608",
      "meaning": "Application sent to payer; waiting for initial review",
      "next_action": "Follow up at Day 7 if no response",
      "typical_duration": "1-2 weeks"
    },
    {
      "status": "In Progress",
      "color_bg": "#cfe2f3",
      "color_text": "#1a5276",
      "meaning": "Payer is actively working on application; documents uploaded",
      "next_action": "Monitor for requests; follow up weekly",
      "typical_duration": "2-4 weeks"
    },
    {
      "status": "Under Review",
      "color_bg": "#9fc5e8",
      "color_text": "#154360",
      "meaning": "File is complete and in credentialing committee review",
      "next_action": "Follow up every 2 weeks for committee schedule",
      "typical_duration": "2-6 weeks"
    },
    {
      "status": "Pending Info",
      "color_bg": "#d9d2e9",
      "color_text": "#4a235a",
      "meaning": "Payer requested additional information or documents",
      "next_action": "Respond ASAP \\u2014 follow up in 3 days"
    },
    {
      "status": "Complete - Attested",
      "color_bg": "#d9ead3",
      "color_text": "#1e8449",
      "meaning": "CAQH profile complete and attested (CAQH only)",
      "next_action": "Authorize all payers; re-attest every 90 days"
    },
    {
      "status": "Approved",
      "color_bg": "#b6d7a8",
      "color_text": "#145a32",
      "meaning": "Credentialing approved; waiting for effective date or contract",
      "next_action": "Sign contract if needed; confirm effective date",
      "typical_duration": "1-2 weeks"
    },
    {
      "status": "Active",
      "color_bg": "#93c47d",
      "color_text": "#0b5345",
      "meaning": "Fully credentialed and active \\u2014 can bill and see patients",
      "next_action": "Monitor for re-credentialing notices (every 3 years)"
    },
    {
      "status": "Denied",
      "color_bg": "#e06666",
      "color_text": "#7b241c",
      "meaning": "Application denied by payer",
      "next_action": "Request written denial reason; correct and resubmit"
    },
    {
      "status": "On Hold",
      "color_bg": "#cccccc",
      "color_text": "#424949",
      "meaning": "Application paused due to external factor",
      "next_action": "Resolve blocking issue and notify payer to resume"
    }
  ],
  "master_tracker": [
    {
      "Payer/Plan": "CAQH ProView",
      "Type": "Foundation",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": "2026-03-03",
      "Method": "Online",
      "Confirmation #": "CAQH-12345",
      "Status": "Complete - Attested",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": "2026-03-03",
      "Effective Date": "2026-03-03",
      "Notes": "Initial attestation complete"
    },
    {
      "Payer/Plan": "CAQH ProView",
      "Type": "Foundation",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": "2026-03-03",
      "Method": "Online",
      "Confirmation #": "CAQH-54321",
      "Status": "In Progress",
      "Missing Items": "CV, Malpractice cert",
      "Follow-Up Date": "2026-03-10",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Waiting on documents from clinician"
    },
    {
      "Payer/Plan": "OHCA SoonerCare",
      "Type": "Medicaid",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": "2025-11-15",
      "Method": "Portal",
      "Confirmation #": "OHCA-GRP-001",
      "Status": "Active",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": "2025-12-01",
      "Effective Date": "2025-12-01",
      "Notes": "Group enrollment confirmed"
    },
    {
      "Payer/Plan": "OHCA SoonerCare",
      "Type": "Medicaid",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": "2026-03-05",
      "Method": "Portal",
      "Confirmation #": "OHCA-IND-101",
      "Status": "Submitted",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-12",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Individual enrollment under group"
    },
    {
      "Payer/Plan": "OHCA SoonerCare",
      "Type": "Medicaid",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "CAQH completion",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Waiting for CAQH attestation"
    },
    {
      "Payer/Plan": "Aetna Better Health OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": "2026-03-06",
      "Method": "Availity",
      "Confirmation #": "AV-ABH-2024",
      "Status": "Under Review",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-13",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Group contract submitted via Availity"
    },
    {
      "Payer/Plan": "Aetna Better Health OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": "2026-03-06",
      "Method": "Availity",
      "Confirmation #": "AV-ABH-2025",
      "Status": "Pending Info",
      "Missing Items": "Liability insurance proof",
      "Follow-Up Date": "2026-03-13",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Need to upload current malpractice cert"
    },
    {
      "Payer/Plan": "Aetna Better Health OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "CAQH, OHCA enrollment",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Prerequisites not met"
    },
    {
      "Payer/Plan": "Humana Healthy Horizons OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-10",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Call provider services 855-223-9868 for group contract"
    },
    {
      "Payer/Plan": "Humana Healthy Horizons OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Pending group approval"
    },
    {
      "Payer/Plan": "Humana Healthy Horizons OK",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract, CAQH",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Multiple prerequisites"
    },
    {
      "Payer/Plan": "Oklahoma Complete Health",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-10",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Visit OklahomaCompleteHealth.com provider portal"
    },
    {
      "Payer/Plan": "Oklahoma Complete Health",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Pending group approval"
    },
    {
      "Payer/Plan": "Oklahoma Complete Health",
      "Type": "SoonerSelect MCO",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract, CAQH",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Multiple prerequisites"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Type": "Commercial",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": "2026-03-07",
      "Method": "CAQH/Portal",
      "Confirmation #": "BCBS-GRP-501",
      "Status": "Submitted",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-14",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Group application via BCBSOK portal"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Ready to Submit",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-14",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "CAQH authorized, waiting for group approval"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "CAQH completion",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Complete CAQH first"
    },
    {
      "Payer/Plan": "Aetna Commercial",
      "Type": "Commercial",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-17",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Plan to submit via Availity week of 3/10"
    },
    {
      "Payer/Plan": "Aetna Commercial",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Pending group approval"
    },
    {
      "Payer/Plan": "Aetna Commercial",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract, CAQH",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Multiple prerequisites"
    },
    {
      "Payer/Plan": "UnitedHealthcare/Optum",
      "Type": "Commercial",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-24",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Lower priority - start after BCBS/Aetna"
    },
    {
      "Payer/Plan": "UnitedHealthcare/Optum",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Pending group approval"
    },
    {
      "Payer/Plan": "UnitedHealthcare/Optum",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract, CAQH",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Multiple prerequisites"
    },
    {
      "Payer/Plan": "Cigna/Evernorth",
      "Type": "Commercial",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-24",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Lower priority - start after BCBS/Aetna"
    },
    {
      "Payer/Plan": "Cigna/Evernorth",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 1",
      "NPI": 1234567890,
      "CAQH ID": 12345678.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Pending group approval"
    },
    {
      "Payer/Plan": "Cigna/Evernorth",
      "Type": "Commercial",
      "Clinician/Group": "Clinician 2",
      "NPI": 987654321,
      "CAQH ID": 87654321.0,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": "Group contract, CAQH",
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Multiple prerequisites"
    },
    {
      "Payer/Plan": "BCBS OK - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": "2026-03-14",
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll via Availity after credentialing approved"
    },
    {
      "Payer/Plan": "Aetna - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll after credentialing approved"
    },
    {
      "Payer/Plan": "Humana - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll after credentialing approved"
    },
    {
      "Payer/Plan": "UHC - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll after credentialing approved"
    },
    {
      "Payer/Plan": "Cigna - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll after credentialing approved"
    },
    {
      "Payer/Plan": "OK Complete Health - EFT/ERA",
      "Type": "Payment Setup",
      "Clinician/Group": "Safe Harbor (Group)",
      "NPI": 9876543210,
      "CAQH ID": NaN,
      "Date Submitted": NaN,
      "Method": NaN,
      "Confirmation #": NaN,
      "Status": "Not Started",
      "Missing Items": NaN,
      "Follow-Up Date": NaN,
      "Approval Date": NaN,
      "Effective Date": NaN,
      "Notes": "Enroll after credentialing approved"
    }
  ],
  "contact_directory": [
    {
      "Payer/Plan": "CAQH ProView",
      "Department": "Provider Support",
      "Phone": "888-599-1771",
      "Hours": "Mon-Fri 8am-8pm ET",
      "Portal/Email": "proview.caqh.org/pr",
      "Notes": "For login, attestation, technical issues"
    },
    {
      "Payer/Plan": "OHCA SoonerCare",
      "Department": "Provider Enrollment",
      "Phone": "405-522-7171",
      "Hours": "Mon-Fri 8am-5pm CT",
      "Portal/Email": "oklahoma.gov/ohca",
      "Notes": "Main OHCA provider line"
    },
    {
      "Payer/Plan": "Aetna Better Health OK",
      "Department": "Provider Services",
      "Phone": "844-365-4385",
      "Hours": "Mon-Fri 8am-5pm CT",
      "Portal/Email": "AetnaBetterHealth.com/Oklahoma",
      "Notes": "Member services line; ask for provider relations"
    },
    {
      "Payer/Plan": "Aetna Better Health OK",
      "Department": "Credentialing/Contracting",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via Availity",
      "Notes": "Applications submitted through Availity portal"
    },
    {
      "Payer/Plan": "Humana Healthy Horizons OK",
      "Department": "Provider Services",
      "Phone": "855-223-9868",
      "Hours": "Mon-Fri 8am-5pm CT",
      "Portal/Email": "Humana.com/Medicaid/Oklahoma",
      "Notes": "Press option for provider services"
    },
    {
      "Payer/Plan": "Humana Healthy Horizons OK",
      "Department": "Provider Services (TTY)",
      "Phone": "711",
      "Hours": "Mon-Fri 8am-5pm CT",
      "Portal/Email": NaN,
      "Notes": "TTY for hearing impaired"
    },
    {
      "Payer/Plan": "Oklahoma Complete Health",
      "Department": "Provider Services",
      "Phone": "833-752-1664",
      "Hours": "Mon-Fri 8am-5pm CT",
      "Portal/Email": "OklahomaCompleteHealth.com",
      "Notes": "Ask for credentialing/network department"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Department": "Provider Services",
      "Phone": "800-942-5837",
      "Hours": "Mon-Fri 7am-6pm CT",
      "Portal/Email": "bcbsok.com/provider",
      "Notes": "General provider line"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Department": "Credentialing",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via CAQH & BCBSOK portal",
      "Notes": "Authorize BCBSOK in CAQH ProView first"
    },
    {
      "Payer/Plan": "BCBS Oklahoma",
      "Department": "EFT/ERA Enrollment",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via Availity",
      "Notes": "Use Availity Transaction Enrollment tool"
    },
    {
      "Payer/Plan": "Aetna Commercial",
      "Department": "Provider Services",
      "Phone": "800-624-0756",
      "Hours": "Mon-Fri 8am-6pm CT",
      "Portal/Email": "Aetna.com/providers",
      "Notes": "Commercial/HMO provider line"
    },
    {
      "Payer/Plan": "Aetna Commercial",
      "Department": "Credentialing",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via Availity",
      "Notes": "Same Availity process as Aetna Better Health"
    },
    {
      "Payer/Plan": "UnitedHealthcare/Optum",
      "Department": "Provider Services",
      "Phone": "800-711-4555",
      "Hours": "Mon-Fri 7am-7pm CT",
      "Portal/Email": "UHCprovider.com",
      "Notes": "Main provider services"
    },
    {
      "Payer/Plan": "UnitedHealthcare/Optum",
      "Department": "Credentialing",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via CAQH & Optum portal",
      "Notes": "Optum Provider Express for contracting"
    },
    {
      "Payer/Plan": "Cigna/Evernorth",
      "Department": "Provider Services",
      "Phone": "800-882-4462",
      "Hours": "24/7",
      "Portal/Email": "Cigna.com/providers",
      "Notes": "Behavioral health services: press option 3"
    },
    {
      "Payer/Plan": "Cigna/Evernorth",
      "Department": "Credentialing",
      "Phone": NaN,
      "Hours": NaN,
      "Portal/Email": "Via CAQH & Cigna portal",
      "Notes": "CignaforHCP.com for credentialing"
    },
    {
      "Payer/Plan": "Availity",
      "Department": "Support",
      "Phone": "800-282-4548",
      "Hours": "24/7",
      "Portal/Email": "availity.com",
      "Notes": "Portal technical support and enrollment help"
    }
  ],
  "call_scripts": [
    {
      "Script Name": "Initial Follow-Up (Day 7)",
      "When to Use": "7 days after submitting application with no response",
      "Script Text": "Hi, this is [Your Name] with Safe Harbor Behavioral Health in Tulsa. I'm calling to follow up on a credentialing application we submitted on [Date] for [Clinician Name / Safe Harbor Group]. Our confirmation number is [Number]. Can you confirm the application was received and let me know if the file is complete for credentialing review? [PAUSE] Great\\u2014and what is the typical timeline for credentialing committee review? Is there a next committee date I can note? [RECORD INFO] Thank you, I'll follow up again on [Date]. Can I have your name for my records? Thanks so much."
    },
    {
      "Script Name": "Status Check (Weekly)",
      "When to Use": "When status is In Progress and you're following up weekly",
      "Script Text": "Hi, this is [Your Name] from Safe Harbor Behavioral Health. I'm checking on the status of our credentialing application for [Clinician/Group], confirmation number [Number], submitted [Date]. Has the file moved to credentialing committee review yet? [PAUSE] And are there any missing items or documents needed from us? [IF YES: What specifically do you need and what's the best way to send it?] [IF NO: Perfect\\u2014when should I follow up again?] Can I confirm your name and a direct callback number? Thank you."
    },
    {
      "Script Name": "Committee Timeline",
      "When to Use": "When status is Under Review",
      "Script Text": "Hi, this is [Your Name] with Safe Harbor Behavioral Health. Our credentialing file for [Clinician/Group], confirmation [Number], is under committee review. Can you tell me when the next credentialing committee meets? [PAUSE] And will our application be reviewed at that meeting, or is it scheduled for a later date? [RECORD DATE] Is there anything we can provide to support timely approval? [PAUSE] Great, I'll plan to follow up after [Committee Date]. May I have your name? Thank you."
    },
    {
      "Script Name": "Document Confirmation",
      "When to Use": "3 days after submitting requested documents (status: Pending Info)",
      "Script Text": "Hi, this is [Your Name] from Safe Harbor Behavioral Health. We submitted [Document Names] on [Date] for [Clinician/Group], confirmation number [Number]. Can you confirm those documents were received and attached to the file? [PAUSE] And does that complete the file for credentialing review, or is anything else needed? [IF COMPLETE: When will it go to committee?] [IF NOT: What else do you need?] Thank you, and can I note your name for follow-up? Thanks."
    },
    {
      "Script Name": "Effective Date Confirmation",
      "When to Use": "Immediately after approval notice",
      "Script Text": "Hi, this is [Your Name] with Safe Harbor Behavioral Health. We received approval notification for [Clinician/Group], confirmation [Number]. Can you confirm the effective date we can begin seeing patients and billing? [PAUSE] And will we receive a formal credentialing letter or contract to sign? [IF YES: When should we expect that and how will it be sent?] Also, can you confirm our group NPI [Number] and clinician NPI [Number] are loaded correctly in your system? [PAUSE] Thank you\\u2014can I get your name and direct number in case we have questions? Appreciate your help."
    },
    {
      "Script Name": "Initiation Script",
      "When to Use": "When starting a new payer application (Not Started status)",
      "Script Text": "Hi, this is [Your Name], credentialing coordinator for Safe Harbor Behavioral Health in Tulsa, Oklahoma. We're a pediatric behavioral health agency licensed by ODMHSAS, and we'd like to apply for network participation as a group practice. Can you direct me to the right department or provide the credentialing/contracting contact? [PAUSE] [IF TRANSFERRED: Repeat intro] We have our Type 2 organizational NPI, EIN, and two clinicians ready to credential. What's the process to apply as a group and attach our rendering providers? [PAUSE] Do you use CAQH ProView, or is there a separate application? [PAUSE] Can you email me the forms or send a portal link? My email is [Email]. And what documents will you need from us? [RECORD ALL INFO] Thank you\\u2014may I have your name and direct number for follow-up? Appreciate it."
    },
    {
      "Script Name": "Denial Response",
      "When to Use": "After receiving a denial notice",
      "Script Text": "Hi, this is [Your Name] from Safe Harbor Behavioral Health. We received a denial notification for [Clinician/Group], confirmation number [Number]. Can you provide the specific reason for the denial in writing, and let me know what steps we need to take to correct the issue and resubmit? [PAUSE] Is this a correctable issue, or is there an appeal process? [PAUSE] Once we address the issue, should we submit a new application or reference the original confirmation number? [RECORD ALL INFO] Can you email the denial details to [Email]? And may I have your name and direct callback number? Thank you."
    },
    {
      "Script Name": "EFT/ERA Setup",
      "When to Use": "After credentialing is approved and you're ready to enroll for payments",
      "Script Text": "Hi, this is [Your Name] with Safe Harbor Behavioral Health. We were recently approved for network participation, and I need to enroll in Electronic Funds Transfer and Electronic Remittance Advice for claims payment. What's the process to set up EFT and ERA for our group? [PAUSE] Do you have an online portal, or do I need to complete paper forms? [IF PAPER: Can you email or fax the forms to me?] [IF ONLINE: What's the portal URL and will I need a login?] Our group NPI is [Number], EIN is [Number], and our legal name is Safe Harbor Behavioral Health. [PAUSE] How long does EFT/ERA enrollment typically take? [RECORD INFO] Can I have your name and a callback number? Thank you."
    },
    {
      "Script Name": "Re-Attestation Reminder",
      "When to Use": "When CAQH sends re-attestation notice",
      "Script Text": "INTERNAL NOTE (not a phone script): Log into CAQH ProView, review all profile sections for accuracy, update any expired documents (license, malpractice, etc.), and click Attest. Record new attestation date in tracker. If any payer applications are in progress, call those payers to notify them the CAQH profile has been updated: 'Hi, this is [Your Name] from Safe Harbor. I wanted to let you know we just re-attested our CAQH profile for [Clinician Name], CAQH ID [Number], so the updated information is available for your review. Confirmation number for our pending application is [Number]. Thanks.'"
    }
  ],
  "weekly_checklist": [
    {
      "Day": "Monday",
      "Task": "Review Master Tracker",
      "Details": "Check all rows; identify items with follow-up dates this week"
    },
    {
      "Day": "Monday",
      "Task": "CAQH attestation check",
      "Details": "Verify both clinicians' CAQH profiles are attested and documents not expired"
    },
    {
      "Day": "Monday",
      "Task": "Prioritize follow-ups",
      "Details": "List all payers/items needing calls this week; prioritize by urgency (Pending Info > Submitted > Under Review)"
    },
    {
      "Day": "Tuesday",
      "Task": "Make follow-up calls",
      "Details": "Use scripts from Call Scripts sheet; update Status, Missing Items, and Notes columns after each call"
    },
    {
      "Day": "Tuesday",
      "Task": "Respond to payer requests",
      "Details": "If any Pending Info items, gather and submit documents same day if possible"
    },
    {
      "Day": "Wednesday",
      "Task": "Submit new applications",
      "Details": "For any Ready to Submit items, submit applications and record Date Submitted, Method, and Confirmation # immediately"
    },
    {
      "Day": "Wednesday",
      "Task": "Update follow-up dates",
      "Details": "For every item you touched this week, calculate and enter next Follow-Up Date per Status Guide rules"
    },
    {
      "Day": "Thursday",
      "Task": "Check email and portals",
      "Details": "Log into Availity, payer portals, and email for credentialing notifications; update tracker with any status changes"
    },
    {
      "Day": "Thursday",
      "Task": "Document review",
      "Details": "Check expiration dates on licenses, malpractice, and other credentials; flag anything expiring in next 60 days"
    },
    {
      "Day": "Friday",
      "Task": "End-of-week tracker update",
      "Details": "Ensure all Status, Notes, and Follow-Up Date fields are current; identify blockers for next week"
    },
    {
      "Day": "Friday",
      "Task": "Weekly summary to leadership",
      "Details": "Send brief email: # active applications, # approved this week, # pending issues, next week's priorities"
    },
    {
      "Day": "As Needed",
      "Task": "Respond to approvals",
      "Details": "When you receive approval: call for Effective Date Confirmation (script), update Status to Active, trigger EFT/ERA enrollment"
    },
    {
      "Day": "As Needed",
      "Task": "Handle denials",
      "Details": "Use Denial Response script immediately; escalate to leadership; create action plan to correct and resubmit"
    }
  ],
  "document_checklist": [
    {
      "Document Type": "State Professional License",
      "Required For": "All payers, CAQH",
      "Clinician 1 Status": "Current",
      "Clinician 1 Expiry": "2027-06-30",
      "Clinician 2 Status": "Current",
      "Clinician 2 Expiry": "2026-12-31",
      "Group/Safe Harbor Status": "N/A (facility license separate)",
      "Group Expiry": NaN,
      "Notes": "Upload to CAQH; verify OHCA has current copy"
    },
    {
      "Document Type": "Professional Liability Insurance",
      "Required For": "All payers, CAQH",
      "Clinician 1 Status": "Current",
      "Clinician 1 Expiry": "2026-09-01",
      "Clinician 2 Status": "Expired - NEED",
      "Clinician 2 Expiry": "2026-02-28",
      "Group/Safe Harbor Status": "Current (group policy)",
      "Group Expiry": "2026-09-01",
      "Notes": "Clinician 2 needs renewal ASAP"
    },
    {
      "Document Type": "CV/Resume",
      "Required For": "CAQH, some MCOs",
      "Clinician 1 Status": "Current",
      "Clinician 1 Expiry": "Update annually",
      "Clinician 2 Status": "Current",
      "Clinician 2 Expiry": "Update annually",
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Keep updated in CAQH"
    },
    {
      "Document Type": "W-9 (Individual)",
      "Required For": "CAQH, credentialing",
      "Clinician 1 Status": "Current",
      "Clinician 1 Expiry": "Update if address/name changes",
      "Clinician 2 Status": "Current",
      "Clinician 2 Expiry": "Update if address/name changes",
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Must match legal name exactly"
    },
    {
      "Document Type": "W-9 (Group)",
      "Required For": "Contracting, EFT",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": "Current",
      "Group Expiry": "Update if EIN/name changes",
      "Notes": "Safe Harbor's W-9 for group contracts"
    },
    {
      "Document Type": "Government-Issued ID",
      "Required For": "Some payers",
      "Clinician 1 Status": "On file",
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": "On file",
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Keep scanned copy ready"
    },
    {
      "Document Type": "NPI Verification (NPPES)",
      "Required For": "All payers",
      "Clinician 1 Status": "Verified 2026-03-03",
      "Clinician 1 Expiry": "Check quarterly",
      "Clinician 2 Status": "Verified 2026-03-03",
      "Clinician 2 Expiry": "Check quarterly",
      "Group/Safe Harbor Status": "Verified 2026-03-03",
      "Group Expiry": "Check quarterly",
      "Notes": "Confirm NPPES matches legal name, address"
    },
    {
      "Document Type": "Articles of Organization/Incorporation",
      "Required For": "Group contracting",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": "On file",
      "Group Expiry": NaN,
      "Notes": "Oklahoma LLC/Corp docs for Safe Harbor"
    },
    {
      "Document Type": "ODMHSAS License",
      "Required For": "Oklahoma Medicaid, SoonerSelect",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": "Current",
      "Group Expiry": "2027-03-31",
      "Notes": "Facility behavioral health license"
    },
    {
      "Document Type": "Voided Check or Bank Letter",
      "Required For": "EFT enrollment",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": "Current",
      "Group Expiry": "Update if bank changes",
      "Notes": "For Safe Harbor's business account"
    },
    {
      "Document Type": "CLIA Certificate",
      "Required For": "If applicable",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Only if conducting lab tests"
    },
    {
      "Document Type": "Board Certification",
      "Required For": "If applicable",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Upload to CAQH if clinician is board-certified"
    },
    {
      "Document Type": "DEA Certificate",
      "Required For": "If prescribing",
      "Clinician 1 Status": NaN,
      "Clinician 1 Expiry": NaN,
      "Clinician 2 Status": NaN,
      "Clinician 2 Expiry": NaN,
      "Group/Safe Harbor Status": NaN,
      "Group Expiry": NaN,
      "Notes": "Only for prescribers; upload to CAQH"
    }
  ],
  "follow_up_rules": {
    "Submitted": "Call on Day 7 after submission",
    "In Progress": "Call every week",
    "Under Review": "Call every 2 weeks",
    "Pending Info": "Call 3 days after submitting requested documents",
    "Approved": "Call immediately to confirm effective date"
  },
  "key_portals": {
    "NPPES (Individual NPI)": "https://nppes.cms.hhs.gov",
    "CAQH ProView": "https://proview.caqh.org",
    "OHCA SoonerCare": "https://oklahoma.gov/ohca",
    "Availity (BCBS, Aetna)": "https://www.availity.com",
    "BCBS Oklahoma": "https://www.bcbsok.com/provider",
    "UnitedHealthcare": "https://www.uhcprovider.com",
    "Cigna": "https://cignaforhcp.cigna.com",
    "Aetna Better Health OK": "https://www.aetnabetterhealth.com/oklahoma",
    "Humana Oklahoma Medicaid": "https://provider.humana.com/medicaid/oklahoma-medicaid",
    "Oklahoma Complete Health": "https://www.oklahomacompletehealth.com"
  },
  "prompt_for_openclaw": "You are rebuilding the Safe Harbor Behavioral Health credentialing tracker app. Use the JSON data provided to populate ALL sections. The app must include: (1) ALERT BANNER at top showing any critical alerts, (2) MASTER TRACKER with all payers grouped by phase, color-coded status badges, date fields, notes, and confirmation number fields, (3) CONTACT DIRECTORY tab with clickable phone numbers and portal links, (4) CALL SCRIPTS tab with 8 expandable scripts and a one-click copy button on each, (5) DOCUMENT CHECKLIST tab showing Clinician 1 vs Clinician 2 side by side with red highlighting on expired documents, (6) WEEKLY CHECKLIST tab with Mon-Fri tasks and resettable checkboxes, (7) STATUS LEGEND always visible as a reference. The clinic serves children ages 3-17 in Tulsa OK. Brand colors: navy #0d2137, teal #1a7a8a, gold #e8a838. All data is pre-loaded from the JSON file provided."
}`,ze={navy:"#0d2137",teal:"#1a7a8a",gold:"#e8a838",red:"#b21e2b",light:"#f4f7fb"},Va="sh-credentialing-v2",F=JSON.parse(Rf.replace(/\bNaN\b/g,"null")),Ff=[{id:"tracker",label:"Master Tracker"},{id:"contacts",label:"Contact Directory"},{id:"scripts",label:"Call Scripts"},{id:"documents",label:"Document Checklist"},{id:"weekly",label:"Weekly Checklist"}],zf={Foundation:"Foundational Setup",Medicaid:"Oklahoma Medicaid & SoonerSelect MCOs","SoonerSelect MCO":"Oklahoma Medicaid & SoonerSelect MCOs",Commercial:"Commercial Insurance","Payment Setup":"Payment Setup (EFT/ERA)"};function O(e){return e==null||e===""?"—":String(e)}function Ka(e){if(!e)return"";const n=String(e);return/^\d{4}-\d{2}-\d{2}$/.test(n)?n:""}function Lf(e){if(!e)return null;const n=String(e).trim();return n.startsWith("http://")||n.startsWith("https://")?n:n.includes(".")&&!n.includes(" ")?`https://${n}`:null}function Uf(e,n){return`${n}-${e["Payer/Plan"]}-${e["Clinician/Group"]}`}function Bf(e){return e&&String(e).replace(/[^\d+]/g,"")||null}function Qf(){const[e,n]=ae.useState("tracker"),[t,r]=ae.useState({}),[l,i]=ae.useState({}),[o,a]=ae.useState(!1),[u,f]=ae.useState(""),[g,y]=ae.useState({trackerEdits:{},weeklyChecks:{}});ae.useEffect(()=>{try{const c=localStorage.getItem(Va);if(c){const N=JSON.parse(c);y({trackerEdits:N.trackerEdits||{},weeklyChecks:N.weeklyChecks||{}})}}catch{y({trackerEdits:{},weeklyChecks:{}})}},[]),ae.useEffect(()=>{localStorage.setItem(Va,JSON.stringify(g))},[g]),ae.useEffect(()=>{if(!u)return;const c=setTimeout(()=>f(""),1800);return()=>clearTimeout(c)},[u]);const h=ae.useMemo(()=>{const c={};return F.status_legend.forEach(N=>{c[N.status]=N}),c},[]),w=ae.useMemo(()=>{const c={"Foundational Setup":[],"Oklahoma Medicaid & SoonerSelect MCOs":[],"Commercial Insurance":[],"Payment Setup (EFT/ERA)":[]};return F.master_tracker.forEach((N,v)=>{const C=zf[N.Type]||N.Type,P=Uf(N,v),T=g.trackerEdits[P]||{};c[C]=c[C]||[],c[C].push({...N,...T,_index:v,_key:P})}),c},[g.trackerEdits]),k=ae.useMemo(()=>{const c=["Monday","Tuesday","Wednesday","Thursday","Friday","As Needed"],N={};return c.forEach(v=>{N[v]=[]}),F.weekly_checklist.forEach((v,C)=>{const P=`${v.Day}-${v.Task}-${C}`,T={...v,_key:P,checked:!!g.weeklyChecks[P]};N[v.Day]||(N[v.Day]=[]),N[v.Day].push(T)}),N},[g.weeklyChecks]),x=F.alerts.filter(c=>c.level==="CRITICAL");function M(c,N,v){y(C=>({...C,trackerEdits:{...C.trackerEdits,[c]:{...C.trackerEdits[c]||{},[N]:v}}}))}function p(c){y(N=>({...N,weeklyChecks:{...N.weeklyChecks,[c]:!N.weeklyChecks[c]}}))}function s(){y(c=>({...c,weeklyChecks:{}}))}async function m(c){try{await navigator.clipboard.writeText(c),f("Script copied")}catch{f("Copy failed")}}return d.jsxs("div",{style:{minHeight:"100vh",background:ze.light,color:ze.navy},children:[d.jsx("style",{children:`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: "Trebuchet MS", "Segoe UI", sans-serif; background: ${ze.light}; }
        a { color: ${ze.teal}; }
        .shell { max-width: 1200px; margin: 0 auto; padding: 0 12px 100px; }
        .card { background: #fff; border: 1px solid #dbe4ef; border-radius: 12px; }
        .chip { border-radius: 999px; padding: 3px 10px; font-size: 12px; font-weight: 700; display: inline-block; }
        .table-wrap { overflow-x: auto; }
        .table { width: 100%; border-collapse: collapse; min-width: 900px; }
        .table th, .table td { border-bottom: 1px solid #e4ebf3; padding: 10px 8px; text-align: left; vertical-align: top; font-size: 13px; }
        .table th { background: #f0f5fa; font-size: 12px; letter-spacing: 0.02em; text-transform: uppercase; color: #2a3e55; }
        .expander { background: #f8fbff; }
        .tab-btn { border: 0; background: transparent; color: #fff; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-weight: 700; white-space: nowrap; }
        .tab-btn.active { background: ${ze.gold}; color: ${ze.navy}; }
        .grid-2 { display: grid; gap: 12px; grid-template-columns: 1fr; }
        .grid-3 { display: grid; gap: 12px; grid-template-columns: 1fr; }
        .input { width: 100%; border: 1px solid #bed0e1; border-radius: 8px; padding: 8px; font-size: 13px; }
        .small { font-size: 12px; color: #4f647b; }
        .danger-cell { background: #ffe0e0; }
        .toast { position: fixed; right: 14px; top: 14px; background: ${ze.navy}; color: #fff; padding: 10px 12px; border-radius: 8px; z-index: 1000; font-size: 13px; }
        @media (min-width: 760px) {
          .grid-2 { grid-template-columns: 1fr 1fr; }
          .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}),u?d.jsx("div",{className:"toast",children:u}):null,x.map((c,N)=>d.jsx("div",{style:{background:ze.red,color:"#fff",padding:"12px 14px",borderBottom:"2px solid #7a1020"},children:d.jsxs("div",{className:"shell",style:{padding:0},children:[d.jsxs("strong",{children:[c.level,":"]})," ",c.message," ",d.jsx("strong",{children:"Action Required:"})," ",c.action]})},`${c.level}-${N}`)),d.jsx("header",{style:{background:ze.navy,color:"#fff",padding:"16px 0 12px"},children:d.jsxs("div",{className:"shell",style:{paddingBottom:0},children:[d.jsx("h1",{style:{margin:0,fontSize:24},children:F.app_name}),d.jsxs("p",{style:{margin:"4px 0 0",opacity:.9},children:[F.clinic.services," | ",F.clinic.location," | Mission: ",F.clinic.mission]}),d.jsxs("div",{className:"grid-3",style:{marginTop:12},children:[d.jsxs("div",{className:"card",style:{padding:10},children:[d.jsx("strong",{children:"Clinic Identifiers"}),d.jsxs("div",{className:"small",children:["Org NPI Type 2: ",F.clinic.org_npi_type2]}),d.jsxs("div",{className:"small",children:["EIN: ",F.clinic.ein]}),d.jsxs("div",{className:"small",children:["ODMHSAS License: ",F.clinic.odmhsas_license]})]}),d.jsxs("div",{className:"card",style:{padding:10},children:[d.jsx("strong",{children:"Insurance"}),d.jsx("div",{className:"small",children:F.clinic.liability_insurance}),d.jsxs("div",{className:"small",children:["Clinic: ",F.clinic.name]})]}),d.jsxs("div",{className:"card",style:{padding:10},children:[d.jsx("strong",{children:"Clinicians"}),F.clinicians.map(c=>d.jsxs("div",{className:"small",style:{marginTop:4},children:[c.label," | NPI: ",c.npi_type1," | CAQH: ",c.caqh_id," | License: ",c.license_status," (",c.license_expiry,") | Malpractice: ",c.malpractice_status," (",c.malpractice_expiry,")"]},c.id))]})]})]})}),d.jsx("nav",{style:{position:"sticky",top:0,zIndex:20,background:ze.teal,borderBottom:"2px solid #14616d"},children:d.jsx("div",{className:"shell",style:{padding:"8px 12px",overflowX:"auto",whiteSpace:"nowrap"},children:Ff.map(c=>d.jsx("button",{className:`tab-btn ${e===c.id?"active":""}`,onClick:()=>n(c.id),children:c.label},c.id))})}),d.jsxs("main",{className:"shell",style:{marginTop:12},children:[e==="tracker"?d.jsxs("section",{className:"card",style:{padding:14},children:[d.jsx("h2",{style:{marginTop:0},children:"Master Tracker"}),d.jsxs("p",{className:"small",children:["All ",F.master_tracker.length," rows grouped by phase. Click any row to edit Date Submitted, Confirmation #, Follow-Up Date, and Notes."]}),d.jsx("div",{className:"grid-2",style:{marginBottom:12},children:F.phases.map(c=>d.jsxs("div",{className:"card",style:{padding:10,borderLeft:`4px solid ${c.color}`},children:[d.jsxs("strong",{children:["Phase ",c.phase,": ",c.name]}),d.jsx("div",{className:"small",children:c.description})]},c.phase))}),Object.entries(w).map(([c,N])=>d.jsxs("div",{style:{marginBottom:18},children:[d.jsx("h3",{style:{marginBottom:8},children:c}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Payer/Plan"}),d.jsx("th",{children:"Clinician/Group"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Date Submitted"}),d.jsx("th",{children:"Confirmation #"}),d.jsx("th",{children:"Missing Items"}),d.jsx("th",{children:"Follow-Up Date"}),d.jsx("th",{children:"Notes"})]})}),d.jsx("tbody",{children:N.map(v=>{const C=h[v.Status]||{},P=!!t[v._key];return d.jsxs(d.Fragment,{children:[d.jsxs("tr",{style:{cursor:"pointer"},onClick:()=>r(T=>({...T,[v._key]:!T[v._key]})),children:[d.jsx("td",{children:O(v["Payer/Plan"])}),d.jsx("td",{children:O(v["Clinician/Group"])}),d.jsx("td",{children:d.jsx("span",{className:"chip",style:{background:C.color_bg||"#eee",color:C.color_text||"#222"},children:O(v.Status)})}),d.jsx("td",{children:O(v["Date Submitted"])}),d.jsx("td",{children:O(v["Confirmation #"])}),d.jsx("td",{children:O(v["Missing Items"])}),d.jsx("td",{children:O(v["Follow-Up Date"])}),d.jsx("td",{children:O(v.Notes)})]},v._key),P?d.jsx("tr",{className:"expander",children:d.jsxs("td",{colSpan:8,children:[d.jsxs("div",{className:"grid-2",children:[d.jsxs("label",{children:[d.jsx("div",{className:"small",children:"Date Submitted"}),d.jsx("input",{className:"input",type:"date",value:Ka(v["Date Submitted"]),onChange:T=>M(v._key,"Date Submitted",T.target.value)})]}),d.jsxs("label",{children:[d.jsx("div",{className:"small",children:"Follow-Up Date"}),d.jsx("input",{className:"input",type:"date",value:Ka(v["Follow-Up Date"]),onChange:T=>M(v._key,"Follow-Up Date",T.target.value)})]}),d.jsxs("label",{children:[d.jsx("div",{className:"small",children:"Confirmation #"}),d.jsx("input",{className:"input",type:"text",value:v["Confirmation #"]||"",onChange:T=>M(v._key,"Confirmation #",T.target.value)})]}),d.jsxs("label",{children:[d.jsx("div",{className:"small",children:"Notes"}),d.jsx("input",{className:"input",type:"text",value:v.Notes||"",onChange:T=>M(v._key,"Notes",T.target.value)})]})]}),d.jsxs("div",{className:"grid-3",style:{marginTop:8},children:[d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Type:"})," ",O(v.Type)]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"NPI:"})," ",O(v.NPI)]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"CAQH ID:"})," ",O(v["CAQH ID"])]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Method:"})," ",O(v.Method)]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Approval Date:"})," ",O(v["Approval Date"])]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Effective Date:"})," ",O(v["Effective Date"])]})]})]})},`${v._key}-expander`):null]})})})]})})]},c)),d.jsxs("div",{className:"card",style:{padding:10,background:"#f6fbff"},children:[d.jsx("strong",{children:"Follow-Up Rules"}),Object.entries(F.follow_up_rules).map(([c,N])=>d.jsxs("div",{className:"small",children:[c,": ",N]},c))]})]}):null,e==="contacts"?d.jsxs("section",{className:"card",style:{padding:14},children:[d.jsx("h2",{style:{marginTop:0},children:"Contact Directory"}),d.jsxs("p",{className:"small",children:[F.contact_directory.length," payer and portal contacts."]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"table",style:{minWidth:760},children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Payer/Plan"}),d.jsx("th",{children:"Department"}),d.jsx("th",{children:"Phone"}),d.jsx("th",{children:"Hours"}),d.jsx("th",{children:"Portal/Email"}),d.jsx("th",{children:"Notes"})]})}),d.jsx("tbody",{children:F.contact_directory.map((c,N)=>{const v=Bf(c.Phone),C=Lf(c["Portal/Email"]);return d.jsxs("tr",{children:[d.jsx("td",{children:O(c["Payer/Plan"])}),d.jsx("td",{children:O(c.Department)}),d.jsx("td",{children:v?d.jsx("a",{href:`tel:${v}`,children:c.Phone}):"—"}),d.jsx("td",{children:O(c.Hours)}),d.jsx("td",{children:C?d.jsx("a",{href:C,target:"_blank",rel:"noreferrer",children:c["Portal/Email"]}):O(c["Portal/Email"])}),d.jsx("td",{children:O(c.Notes)})]},`${c["Payer/Plan"]}-${c.Department}-${N}`)})})]})}),d.jsxs("div",{className:"card",style:{marginTop:12,padding:10},children:[d.jsx("strong",{children:"Key Portals"}),Object.entries(F.key_portals).map(([c,N])=>d.jsxs("div",{className:"small",children:[c,": ",d.jsx("a",{href:N,target:"_blank",rel:"noreferrer",children:N})]},c))]})]}):null,e==="scripts"?d.jsxs("section",{className:"card",style:{padding:14},children:[d.jsx("h2",{style:{marginTop:0},children:"Call Scripts"}),d.jsxs("p",{className:"small",children:[F.call_scripts.length," scripts. Expand to read full text and copy."]}),F.call_scripts.map((c,N)=>{const v=!!l[N];return d.jsxs("div",{className:"card",style:{marginBottom:10,padding:10},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},children:[d.jsxs("div",{children:[d.jsx("strong",{children:c["Script Name"]}),d.jsxs("div",{className:"small",children:["When to Use: ",c["When to Use"]]})]}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsx("button",{className:"input",style:{width:"auto",cursor:"pointer"},onClick:()=>m(c["Script Text"]),children:"📋 Copy"}),d.jsx("button",{className:"input",style:{width:"auto",cursor:"pointer"},onClick:()=>i(C=>({...C,[N]:!C[N]})),children:v?"Hide":"Expand"})]})]}),v?d.jsx("pre",{style:{whiteSpace:"pre-wrap",marginBottom:0,fontFamily:"inherit",color:"#223a53"},children:c["Script Text"]}):null]},`${c["Script Name"]}-${N}`)})]}):null,e==="documents"?d.jsxs("section",{className:"card",style:{padding:14},children:[d.jsx("h2",{style:{marginTop:0},children:"Document Checklist"}),d.jsxs("p",{className:"small",children:[F.document_checklist.length," required documents across both clinicians and group."]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"table",style:{minWidth:1040},children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Document"}),d.jsx("th",{children:"Required For"}),d.jsx("th",{children:"Clinician 1"}),d.jsx("th",{children:"Clinician 1 Expiry"}),d.jsx("th",{children:"Clinician 2"}),d.jsx("th",{children:"Clinician 2 Expiry"}),d.jsx("th",{children:"Group/Safe Harbor"}),d.jsx("th",{children:"Group Expiry"}),d.jsx("th",{children:"Notes"})]})}),d.jsx("tbody",{children:F.document_checklist.map((c,N)=>{const v=O(c["Clinician 1 Status"]),C=O(c["Clinician 2 Status"]),P=O(c["Group/Safe Harbor Status"]),T=/Expired|NEED/i.test(v),A=/Expired|NEED/i.test(C),ve=/Expired|NEED/i.test(P);return d.jsxs("tr",{children:[d.jsx("td",{children:O(c["Document Type"])}),d.jsx("td",{children:O(c["Required For"])}),d.jsx("td",{className:T?"danger-cell":"",children:v}),d.jsx("td",{children:O(c["Clinician 1 Expiry"])}),d.jsx("td",{className:A?"danger-cell":"",children:C}),d.jsx("td",{children:O(c["Clinician 2 Expiry"])}),d.jsx("td",{className:ve?"danger-cell":"",children:P}),d.jsx("td",{children:O(c["Group Expiry"])}),d.jsx("td",{children:O(c.Notes)})]},`${c["Document Type"]}-${N}`)})})]})})]}):null,e==="weekly"?d.jsxs("section",{className:"card",style:{padding:14},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[d.jsx("h2",{style:{margin:0},children:"Weekly Checklist"}),d.jsx("button",{className:"input",style:{width:"auto",cursor:"pointer"},onClick:s,children:"Reset Week"})]}),d.jsx("p",{className:"small",children:"Persistent checkboxes by day (Mon-Fri + As Needed)."}),Object.entries(k).map(([c,N])=>d.jsxs("div",{className:"card",style:{marginBottom:10,padding:10},children:[d.jsx("strong",{children:c}),N.map(v=>d.jsxs("label",{style:{display:"block",marginTop:8},children:[d.jsx("input",{type:"checkbox",checked:v.checked,onChange:()=>p(v._key)})," ",d.jsx("strong",{children:v.Task}),d.jsx("div",{className:"small",style:{marginLeft:22},children:v.Details})]},v._key))]},c))]}):null,d.jsxs("section",{className:"card",style:{padding:14,marginTop:12},children:[d.jsxs("button",{className:"input",style:{width:"auto",cursor:"pointer"},onClick:()=>a(c=>!c),children:[o?"Show":"Hide"," Status Legend"]}),o?null:d.jsx("div",{style:{marginTop:10},children:F.status_legend.map(c=>d.jsxs("div",{className:"card",style:{padding:10,marginBottom:8},children:[d.jsx("span",{className:"chip",style:{background:c.color_bg,color:c.color_text},children:c.status}),d.jsxs("div",{className:"small",style:{marginTop:6},children:[d.jsx("strong",{children:"Meaning:"})," ",c.meaning]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Next Action:"})," ",c.next_action]}),d.jsxs("div",{className:"small",children:[d.jsx("strong",{children:"Typical Duration:"})," ",O(c.typical_duration)]})]},c.status))})]}),d.jsxs("section",{className:"card",style:{padding:14,marginTop:12,background:"#f8fbff"},children:[d.jsx("strong",{children:"Build Context"}),d.jsx("div",{className:"small",style:{marginTop:6},children:F.prompt_for_openclaw})]})]})]})}Yl.createRoot(document.getElementById("root")).render(d.jsx(kc.StrictMode,{children:d.jsx(Qf,{})}));
