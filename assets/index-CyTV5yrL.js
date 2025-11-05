var ft=Object.defineProperty;var gt=(i,t,e)=>t in i?ft(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var f=(i,t,e)=>gt(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,J=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Y=new WeakMap;let lt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const mt=i=>new lt(typeof i=="string"?i:i+"",void 0,Z),R=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new lt(e,i,Z)},bt=(i,t)=>{if(J)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),o=D.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},G=J?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return mt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:vt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:_t,getOwnPropertySymbols:xt,getPrototypeOf:At}=Object,b=globalThis,Q=b.trustedTypes,Et=Q?Q.emptyScript:"",I=b.reactiveElementPolyfillSupport,C=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?Et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},dt=(i,t)=>!$t(i,t),tt={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&vt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:r}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const l=o==null?void 0:o.call(this);r==null||r.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[..._t(e),...xt(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(G(o))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var r;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var r,n;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=s.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:B;this._$Em=o;const h=a.fromAttribute(e,l.type);this[o]=h??((n=this._$Ej)==null?void 0:n.get(o))??h,this._$Em=null}}requestUpdate(t,e,s){var o;if(t!==void 0){const r=this.constructor,n=this[t];if(s??(s=r.getPropertyOptions(t)),!((s.hasChanged??dt)(n,e)||s.useDefault&&s.reflect&&n===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o){const{wrapped:l}=n,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,I==null||I({ReactiveElement:E}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,H=T.trustedTypes,et=H?H.createPolicy("lit-html",{createHTML:i=>i}):void 0,ht="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+m,St=`<${ct}>`,A=document,P=()=>A.createComment(""),M=i=>i===null||typeof i!="object"&&typeof i!="function",X=Array.isArray,kt=i=>X(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",L=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,ot=/>/g,v=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,pt=/^(?:script|style|textarea|title)$/i,wt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=wt(1),S=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),nt=new WeakMap,y=A.createTreeWalker(A,129);function ut(i,t){if(!X(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Ct=(i,t)=>{const e=i.length-1,s=[];let o,r=t===2?"<svg>":t===3?"<math>":"",n=w;for(let l=0;l<e;l++){const a=i[l];let h,p,d=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===w?p[1]==="!--"?n=st:p[1]!==void 0?n=ot:p[2]!==void 0?(pt.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=o??w,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?v:p[3]==='"'?rt:it):n===rt||n===it?n=v:n===st||n===ot?n=w:(n=v,o=void 0);const g=n===v&&i[l+1].startsWith("/>")?" ":"";r+=n===w?a+St:d>=0?(s.push(h),a.slice(0,d)+ht+a.slice(d)+m+g):a+m+(d===-2?l:g)}return[ut(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[h,p]=Ct(t,e);if(this.el=O.createElement(h,s),y.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=y.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ht)){const u=p[n++],g=o.getAttribute(d).split(m),N=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:N[2],strings:g,ctor:N[1]==="."?Pt:N[1]==="?"?Mt:N[1]==="@"?Ot:z}),o.removeAttribute(d)}else d.startsWith(m)&&(a.push({type:6,index:r}),o.removeAttribute(d));if(pt.test(o.tagName)){const d=o.textContent.split(m),u=d.length-1;if(u>0){o.textContent=H?H.emptyScript:"";for(let g=0;g<u;g++)o.append(d[g],P()),y.nextNode(),a.push({type:2,index:++r});o.append(d[u],P())}}}else if(o.nodeType===8)if(o.data===ct)a.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:r}),d+=m.length-1}r++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function k(i,t,e=i,s){var n,l;if(t===S)return t;let o=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=M(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=o:e._$Cl=o),o!==void 0&&(t=k(i,o._$AS(i,t.values),o,s)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=((t==null?void 0:t.creationScope)??A).importNode(e,!0);y.currentNode=o;let r=y.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new U(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new Ut(r,this,t)),this._$AV.push(h),a=s[++l]}n!==(a==null?void 0:a.index)&&(r=y.nextNode(),n++)}return y.currentNode=A,o}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),M(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(ut(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(e);else{const n=new Tt(o,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new O(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const r of t)o===e.length?e.push(s=new U(this.O(P()),this.O(P()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,o){const r=this.strings;let n=!1;if(r===void 0)t=k(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const l=t;let a,h;for(t=r[0],a=0;a<r.length-1;a++)h=k(this,l[s+a],e,a),h===S&&(h=this._$AH[a]),n||(n=!M(h)||h!==this._$AH[a]),h===c?t=c:t!==c&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!o&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Mt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Ot extends z{constructor(t,e,s,o,r){super(t,e,s,o,r),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??c)===S)return;const s=this._$AH,o=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const V=T.litHtmlPolyfillSupport;V==null||V(O,U),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.1");const Nt=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let o=s._$litPart$;if(o===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=o=new U(t.insertBefore(P(),r),r,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class $ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var at;$._$litElement$=!0,$.finalized=!0,(at=x.litElementHydrateSupport)==null||at.call(x,{LitElement:$});const j=x.litElementPolyfillSupport;j==null||j({LitElement:$});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.1");class Dt{constructor(t){this.storageService=t,this.todos=this.storageService.load("items",[]),this.listeners=[],this.nextId=this.storageService.load("nextId",1)}subscribe(t){this.listeners.push(t)}notify(){this.listeners.forEach(t=>t())}addTodo(t){if(!t||t.trim()==="")return;const e={id:this.nextId++,text:t.trim(),completed:!1,createdAt:new Date().toISOString()};this.todos.push(e),this.save(),this.notify()}toggleComplete(t){const e=this.todos.find(s=>s.id===t);e&&(e.completed=!e.completed,this.save(),this.notify())}updateTodo(t,e){const s=this.todos.find(o=>o.id===t);s&&e&&e.trim()!==""&&(s.text=e.trim(),this.save(),this.notify())}deleteTodo(t){this.todos=this.todos.filter(e=>e.id!==t),this.save(),this.notify()}clearCompleted(){this.todos=this.todos.filter(t=>!t.completed),this.save(),this.notify()}clearAll(){this.todos=[],this.save(),this.notify()}get activeCount(){return this.todos.filter(t=>!t.completed).length}get completedCount(){return this.todos.filter(t=>t.completed).length}save(){this.storageService.save("items",this.todos),this.storageService.save("nextId",this.nextId)}}class Ht{constructor(t="todos"){this.storageKey=t}save(t,e){try{const s=`${this.storageKey}_${t}`;localStorage.setItem(s,JSON.stringify(e))}catch(s){console.error("Failed to save to localStorage:",s)}}load(t,e=null){try{const s=`${this.storageKey}_${t}`,o=localStorage.getItem(s);return o?JSON.parse(o):e}catch(s){return console.error("Failed to load from localStorage:",s),e}}remove(t){try{const e=`${this.storageKey}_${t}`;localStorage.removeItem(e)}catch(e){console.error("Failed to remove from localStorage:",e)}}clear(){try{const t=[];for(let e=0;e<localStorage.length;e++){const s=localStorage.key(e);s&&s.startsWith(this.storageKey)&&t.push(s)}t.forEach(e=>localStorage.removeItem(e))}catch(t){console.error("Failed to clear localStorage:",t)}}}class K extends ${constructor(){super(),this.inputValue=""}handleSubmit(t){t.preventDefault();const e=this.inputValue.trim();e&&(this.dispatchEvent(new CustomEvent("add-todo",{detail:{text:e},bubbles:!0,composed:!0})),this.inputValue="")}handleInput(t){this.inputValue=t.target.value}render(){return _`
            <form @submit=${this.handleSubmit}>
                <input
                        type="text"
                        placeholder="What needs to be done?"
                        .value=${this.inputValue}
                        @input=${this.handleInput}
                        aria-label="New todo"
                        autofocus
                />
                <button type="submit" ?disabled=${!this.inputValue.trim()}>
                    Add
                </button>
            </form>
        `}}f(K,"properties",{inputValue:{state:!0}}),f(K,"styles",R`
        :host {
            display: block;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            gap: 8px;
        }

        input {
            flex: 1;
            padding: 12px 16px;
            font-size: 16px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s;
        }

        input:focus {
            border-color: #667eea;
        }

        button {
            padding: 12px 24px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background: #5568d3;
        }

        button:active {
            transform: translateY(1px);
        }

        button:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
    `);customElements.define("todo-form",K);class W extends ${constructor(){super(),this.isEditing=!1,this.editValue=""}handleToggle(){this.dispatchEvent(new CustomEvent("toggle-todo",{detail:{id:this.todo.id},bubbles:!0,composed:!0}))}handleDelete(){confirm("Delete this todo?")&&this.dispatchEvent(new CustomEvent("delete-todo",{detail:{id:this.todo.id},bubbles:!0,composed:!0}))}handleEdit(){this.isEditing=!0,this.editValue=this.todo.text}handleSave(){this.editValue.trim()&&(this.dispatchEvent(new CustomEvent("update-todo",{detail:{id:this.todo.id,text:this.editValue},bubbles:!0,composed:!0})),this.isEditing=!1)}handleCancel(){this.isEditing=!1,this.editValue=""}handleKeyDown(t){t.key==="Enter"?this.handleSave():t.key==="Escape"&&this.handleCancel()}render(){return this.isEditing?_`
                <div class="todo-item">
                    <input
                            class="edit-input"
                            type="text"
                            .value=${this.editValue}
                            @input=${t=>this.editValue=t.target.value}
                            @keydown=${this.handleKeyDown}
                            autofocus
                    />
                    <div class="button-group">
                        <button class="save-btn" @click=${this.handleSave}>Save</button>
                        <button class="cancel-btn" @click=${this.handleCancel}>Cancel</button>
                    </div>
                </div>
            `:_`
            <div class="todo-item">
                <input
                        type="checkbox"
                        class="checkbox"
                        .checked=${this.todo.completed}
                        @change=${this.handleToggle}
                        aria-label="Toggle todo"
                />
                <span class="todo-text ${this.todo.completed?"completed":""}">
          ${this.todo.text}
        </span>
                <div class="button-group">
                    <button
                            class="edit-btn"
                            @click=${this.handleEdit}
                            ?disabled=${this.todo.completed}
                            aria-label="Edit todo">
                        Edit
                    </button>
                    <button
                            class="delete-btn"
                            @click=${this.handleDelete}
                            aria-label="Delete todo">
                        Delete
                    </button>
                </div>
            </div>
        `}}f(W,"properties",{todo:{type:Object},isEditing:{state:!0},editValue:{state:!0}}),f(W,"styles",R`
        :host {
            display: block;
        }

        .todo-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background: white;
            border-radius: 8px;
            margin-bottom: 8px;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .todo-item:hover {
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .checkbox {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .todo-text {
            flex: 1;
            font-size: 16px;
            color: #333;
            word-break: break-word;
        }

        .todo-text.completed {
            text-decoration: line-through;
            color: #999;
        }

        .edit-input {
            flex: 1;
            padding: 8px;
            font-size: 16px;
            border: 2px solid #667eea;
            border-radius: 4px;
            outline: none;
        }

        .button-group {
            display: flex;
            gap: 8px;
        }

        button {
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.2s;
        }

        .edit-btn {
            background: #4CAF50;
            color: white;
        }

        .edit-btn:hover {
            background: #45a049;
        }

        .delete-btn {
            background: #f44336;
            color: white;
        }

        .delete-btn:hover {
            background: #da190b;
        }

        .save-btn {
            background: #2196F3;
            color: white;
        }

        .save-btn:hover {
            background: #0b7dda;
        }

        .cancel-btn {
            background: #757575;
            color: white;
        }

        .cancel-btn:hover {
            background: #616161;
        }
    `);customElements.define("todo-item",W);class q extends ${constructor(){super(),this.todos=[]}render(){return this.todos.length===0?_`
                <div class="empty-state">
                    <div class="empty-icon">📝</div>
                    <p>No todos yet. Add one above!</p>
                </div>
            `:_`
            <div class="list-container">
                ${this.todos.map(t=>_`
                    <todo-item .todo=${t}></todo-item>
                `)}
            </div>
        `}}f(q,"properties",{todos:{type:Array}}),f(q,"styles",R`
        :host {
            display: block;
        }

        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: white;
            font-size: 18px;
        }

        .empty-icon {
            font-size: 48px;
            margin-bottom: 16px;
        }

        .list-container {
            max-height: 500px;
            overflow-y: auto;
        }

        /* Custom scrollbar */
        .list-container::-webkit-scrollbar {
            width: 8px;
        }

        .list-container::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }

        .list-container::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }

        .list-container::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
        }
    `);customElements.define("todo-list",q);class F extends ${constructor(){super(),this.storageService=new Ht,this.model=new Dt(this.storageService),this.todos=this.model.todos,this.isDarkMode=localStorage.getItem("darkMode")==="true",this.model.subscribe(()=>{this.todos=[...this.model.todos]})}handleAddTodo(t){this.model.addTodo(t.detail.text)}handleToggleTodo(t){this.model.toggleComplete(t.detail.id)}handleDeleteTodo(t){this.model.deleteTodo(t.detail.id)}handleUpdateTodo(t){this.model.updateTodo(t.detail.id,t.detail.text)}handleClearCompleted(){confirm("Clear all completed todos?")&&this.model.clearCompleted()}handleClearAll(){confirm("Clear ALL todos? This cannot be undone.")&&this.model.clearAll()}handleDarkModeToggle(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("darkMode",this.isDarkMode),this.toggleAttribute("dark",this.isDarkMode)}render(){return _`
            <div class="app-container">
                <h1>My Tasks</h1>
                <p class="subtitle">Stay organized and productive</p>

                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-value">${this.todos.length}</div>
                        <div class="stat-label">Total</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${this.model.activeCount}</div>
                        <div class="stat-label">Active</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${this.model.completedCount}</div>
                        <div class="stat-label">Completed</div>
                    </div>
                </div>

                <todo-form
                        @add-todo=${this.handleAddTodo}>
                </todo-form>

                <todo-list
                        .todos=${this.todos}
                        @toggle-todo=${this.handleToggleTodo}
                        @delete-todo=${this.handleDeleteTodo}
                        @update-todo=${this.handleUpdateTodo}>
                </todo-list>

                <div class="actions">
                    <button
                            class="clear-completed"
                            @click=${this.handleClearCompleted}
                            ?disabled=${this.model.completedCount===0}>
                        Clear Completed
                    </button>
                    <button
                            class="clear-all"
                            @click=${this.handleClearAll}
                            ?disabled=${this.todos.length===0}>
                        Clear All
                    </button>
                    <button class="dark-toggle" @click=${this.handleDarkModeToggle}>
                        ${this.isDarkMode?"☀️ Light":"🌙 Dark"}
                    </button>
                </div>

                <div class="footer">
                    Lab 9: The final battle!
                </div>
            </div>
        `}}f(F,"properties",{todos:{state:!0},isDarkMode:{type:Boolean}}),f(F,"styles",R`
        :host {
            display: block;
        }

        .app-container {
            background: var(--bg-color, white);
            color: var(--text-color, #333);
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            padding: 32px;
            min-height: 400px;
            transition: background 0.3s, color 0.3s;
        }

        :host([dark]) .app-container {
            --bg-color: #1e1e1e;
            --text-color: #e0e0e0;
            color: var(--text-color);
        }

        :host([dark]) h1 {
            color: var(--text-color);
        }

        :host([dark]) .subtitle {
            color: #bbb;
        }

        :host([dark]) .stats {
            background: #2a2a2a;
        }

        :host([dark]) .stat-label {
            color: #aaa;
        }

        :host([dark]) .stat-value {
            color: #4a90e2;
        }

        :host([dark]) .actions button {
            background: #333;
            color: #e0e0e0;
        }

        :host([dark]) .actions button:hover {
            background: #555;
        }

        :host([dark]) .footer {
            border-top-color: #444;
            color: #bbb;
        }

        h1 {
            margin: 0 0 8px 0;
            color: var(--text-color, #333);
            font-size: 32px;
            font-weight: 700;
        }

        .subtitle {
            color: #666;
            margin-bottom: 24px;
            font-size: 14px;
        }

        .stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            background: #f5f5f5;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #667eea;
        }

        .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .actions {
            display: flex;
            gap: 8px;
            margin-top: 20px;
        }

        button {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .clear-completed {
            background: #ff9800;
            color: white;
        }

        .clear-completed:hover {
            background: #f57c00;
        }

        .clear-all {
            background: #f44336;
            color: white;
        }

        .clear-all:hover {
            background: #da190b;
        }

        .dark-toggle {
            background: #667eea;
            color: white;
            flex: none;
            min-width: auto;
            padding: 10px 16px;
        }

        .dark-toggle:hover {
            background: #5568d3;
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 12px;
        }

        :host([dark]) .footer {
            border-top-color: #444;
            color: #bbb;
        }
    `);customElements.define("todo-app",F);
