import{r as u,j as I,H as re,az as se}from"./index-ChHXuf40.js";import{a as J,g as Q,u as Z,s as G,c as z,b as _,m as fe,e as V}from"./createSimplePaletteValueFilter-CLdyqM5U.js";import{u as pe,g as me,a as H,o as j,e as Re,P as Te}from"./Portal-BpkAKKpt.js";import{a as ie}from"./IconButton-BXLcq7Mr.js";import{T as Pe,g as ae,r as ke,u as Y}from"./useSlot-BVU38s2u.js";function le(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function we(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}function Ce(e){return J("MuiPaper",e)}Q("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Se=e=>{const{square:t,elevation:o,variant:n,classes:s}=e,r={root:["root",n,!t&&"rounded",n==="elevation"&&`elevation${o}`]};return _(r,Ce,s)},Ie=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(fe(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),it=u.forwardRef(function(t,o){var p;const n=Z({props:t,name:"MuiPaper"}),s=pe(),{className:r,component:a="div",elevation:i=1,square:f=!1,variant:h="elevation",...E}=n,v={...n,component:a,elevation:i,square:f,variant:h},x=Se(v);return I.jsx(Ie,{as:a,ownerState:v,className:z(x.root,r),ref:o,...E,style:{...h==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[i],...s.vars&&{"--Paper-overlay":(p=s.vars.overlays)==null?void 0:p[i]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${re("#fff",se(i))}, ${re("#fff",se(i))})`}},...E.style}})}),Me={entering:{opacity:1},entered:{opacity:1}},Ne=u.forwardRef(function(t,o){const n=pe(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:i,easing:f,in:h,onEnter:E,onEntered:v,onEntering:x,onExit:p,onExited:m,onExiting:M,style:y,timeout:P=s,TransitionComponent:k=Pe,...l}=t,b=u.useRef(null),w=V(b,me(i),o),R=g=>c=>{if(g){const d=b.current;c===void 0?g(d):g(d,c)}},T=R(x),C=R((g,c)=>{ke(g);const d=ae({style:y,timeout:P,easing:f},{mode:"enter"});g.style.webkitTransition=n.transitions.create("opacity",d),g.style.transition=n.transitions.create("opacity",d),E&&E(g,c)}),S=R(v),F=R(M),O=R(g=>{const c=ae({style:y,timeout:P,easing:f},{mode:"exit"});g.style.webkitTransition=n.transitions.create("opacity",c),g.style.transition=n.transitions.create("opacity",c),p&&p(g)}),B=R(m),D=g=>{r&&r(b.current,g)};return I.jsx(k,{appear:a,in:h,nodeRef:b,onEnter:C,onEntered:S,onEntering:T,onExit:O,onExited:B,onExiting:F,addEndListener:D,timeout:P,...l,children:(g,{ownerState:c,...d})=>u.cloneElement(i,{style:{opacity:0,visibility:g==="exited"&&!h?"hidden":void 0,...Me[g],...y,...i.props.style},ref:w,...d})})});function Fe(e){return J("MuiBackdrop",e)}Q("MuiBackdrop",["root","invisible"]);const Ae=e=>{const{classes:t,invisible:o}=e;return _({root:["root",o&&"invisible"]},Fe,t)},Oe=G("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Be=u.forwardRef(function(t,o){const n=Z({props:t,name:"MuiBackdrop"}),{children:s,className:r,component:a="div",invisible:i=!1,open:f,components:h={},componentsProps:E={},slotProps:v={},slots:x={},TransitionComponent:p,transitionDuration:m,...M}=n,y={...n,component:a,invisible:i},P=Ae(y),k={transition:p,root:h.Root,...x},l={...E,...v},b={slots:k,slotProps:l},[w,R]=Y("root",{elementType:Oe,externalForwardedProps:b,className:z(P.root,r),ownerState:y}),[T,C]=Y("transition",{elementType:Ne,externalForwardedProps:b,ownerState:y});return I.jsx(T,{in:f,timeout:m,...M,...C,children:I.jsx(w,{"aria-hidden":!0,...R,classes:P,ref:o,children:s})})});function Le(e){const t=j(e);return t.body===e?H(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function $(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(H(e).getComputedStyle(e).paddingRight,10)||0}function De(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function de(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,a=>{const i=!r.includes(a),f=!De(a);i&&f&&$(a,s)})}function X(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function je(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Le(n)){const a=we(H(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+a}px`;const i=j(n).querySelectorAll(".mui-fixed");[].forEach.call(i,f=>{o.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${ce(f)+a}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const a=n.parentElement,i=H(n);r=(a==null?void 0:a.nodeName)==="HTML"&&i.getComputedStyle(a).overflowY==="scroll"?a:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:a,property:i})=>{r?a.style.setProperty(i,r):a.style.removeProperty(i)})}}function Ue(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class $e{constructor(){this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&$(t.modalRef,!1);const s=Ue(o);de(o,t.mount,t.modalRef,s,!0);const r=X(this.containers,a=>a.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=X(this.containers,r=>r.modals.includes(t)),s=this.containers[n];s.restore||(s.restore=je(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=X(this.containers,a=>a.modals.includes(t)),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&$(t.modalRef,o),de(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&$(a.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Ke=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function We(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function qe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function ze(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||qe(e))}function He(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ke)).forEach((n,s)=>{const r=We(n);r===-1||!ze(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ye(){return!0}function Ge(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=He,isEnabled:a=Ye,open:i}=e,f=u.useRef(!1),h=u.useRef(null),E=u.useRef(null),v=u.useRef(null),x=u.useRef(null),p=u.useRef(!1),m=u.useRef(null),M=V(me(t),m),y=u.useRef(null);u.useEffect(()=>{!i||!m.current||(p.current=!o)},[o,i]),u.useEffect(()=>{if(!i||!m.current)return;const l=j(m.current);return m.current.contains(l.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),p.current&&m.current.focus()),()=>{s||(v.current&&v.current.focus&&(f.current=!0,v.current.focus()),v.current=null)}},[i]),u.useEffect(()=>{if(!i||!m.current)return;const l=j(m.current),b=T=>{y.current=T,!(n||!a()||T.key!=="Tab")&&l.activeElement===m.current&&T.shiftKey&&(f.current=!0,E.current&&E.current.focus())},w=()=>{var S,F;const T=m.current;if(T===null)return;if(!l.hasFocus()||!a()||f.current){f.current=!1;return}if(T.contains(l.activeElement)||n&&l.activeElement!==h.current&&l.activeElement!==E.current)return;if(l.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!p.current)return;let C=[];if((l.activeElement===h.current||l.activeElement===E.current)&&(C=r(m.current)),C.length>0){const O=!!((S=y.current)!=null&&S.shiftKey&&((F=y.current)==null?void 0:F.key)==="Tab"),B=C[0],D=C[C.length-1];typeof B!="string"&&typeof D!="string"&&(O?D.focus():B.focus())}else T.focus()};l.addEventListener("focusin",w),l.addEventListener("keydown",b,!0);const R=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&w()},50);return()=>{clearInterval(R),l.removeEventListener("focusin",w),l.removeEventListener("keydown",b,!0)}},[o,n,s,a,i,r]);const P=l=>{v.current===null&&(v.current=l.relatedTarget),p.current=!0,x.current=l.target;const b=t.props.onFocus;b&&b(l)},k=l=>{v.current===null&&(v.current=l.relatedTarget),p.current=!0};return I.jsxs(u.Fragment,{children:[I.jsx("div",{tabIndex:i?0:-1,onFocus:k,ref:h,"data-testid":"sentinelStart"}),u.cloneElement(t,{ref:M,onFocus:P}),I.jsx("div",{tabIndex:i?0:-1,onFocus:k,ref:E,"data-testid":"sentinelEnd"})]})}function Ve(e){return typeof e=="function"?e():e}function Xe(e){return e?e.props.hasOwnProperty("in"):!1}const ue=()=>{},q=new $e;function Je(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,closeAfterTransition:s=!1,onTransitionEnter:r,onTransitionExited:a,children:i,onClose:f,open:h,rootRef:E}=e,v=u.useRef({}),x=u.useRef(null),p=u.useRef(null),m=V(p,E),[M,y]=u.useState(!h),P=Xe(i);let k=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(k=!1);const l=()=>j(x.current),b=()=>(v.current.modalRef=p.current,v.current.mount=x.current,v.current),w=()=>{q.mount(b(),{disableScrollLock:n}),p.current&&(p.current.scrollTop=0)},R=ie(()=>{const c=Ve(t)||l().body;q.add(b(),c),p.current&&w()}),T=()=>q.isTopModal(b()),C=ie(c=>{x.current=c,c&&(h&&T()?w():p.current&&$(p.current,k))}),S=u.useCallback(()=>{q.remove(b(),k)},[k]);u.useEffect(()=>()=>{S()},[S]),u.useEffect(()=>{h?R():(!P||!s)&&S()},[h,S,P,s,R]);const F=c=>d=>{var N;(N=c.onKeyDown)==null||N.call(c,d),!(d.key!=="Escape"||d.which===229||!T())&&(o||(d.stopPropagation(),f&&f(d,"escapeKeyDown")))},O=c=>d=>{var N;(N=c.onClick)==null||N.call(c,d),d.target===d.currentTarget&&f&&f(d,"backdropClick")};return{getRootProps:(c={})=>{const d=Re(e);delete d.onTransitionEnter,delete d.onTransitionExited;const N={...d,...c};return{role:"presentation",...N,onKeyDown:F(N),ref:m}},getBackdropProps:(c={})=>{const d=c;return{"aria-hidden":!0,...d,onClick:O(d),open:h}},getTransitionProps:()=>{const c=()=>{y(!1),r&&r()},d=()=>{y(!0),a&&a(),s&&S()};return{onEnter:le(c,(i==null?void 0:i.props.onEnter)??ue),onExited:le(d,(i==null?void 0:i.props.onExited)??ue)}},rootRef:m,portalRef:C,isTopModal:T,exited:M,hasTransition:P}}function Qe(e){return J("MuiModal",e)}Q("MuiModal",["root","hidden","backdrop"]);const Ze=e=>{const{open:t,exited:o,classes:n}=e;return _({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Qe,n)},_e=G("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(fe(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),et=G(Be,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),at=u.forwardRef(function(t,o){const n=Z({name:"MuiModal",props:t}),{BackdropComponent:s=et,BackdropProps:r,classes:a,className:i,closeAfterTransition:f=!1,children:h,container:E,component:v,components:x={},componentsProps:p={},disableAutoFocus:m=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:y=!1,disablePortal:P=!1,disableRestoreFocus:k=!1,disableScrollLock:l=!1,hideBackdrop:b=!1,keepMounted:w=!1,onBackdropClick:R,onClose:T,onTransitionEnter:C,onTransitionExited:S,open:F,slotProps:O={},slots:B={},theme:D,...g}=n,c={...n,closeAfterTransition:f,disableAutoFocus:m,disableEnforceFocus:M,disableEscapeKeyDown:y,disablePortal:P,disableRestoreFocus:k,disableScrollLock:l,hideBackdrop:b,keepMounted:w},{getRootProps:d,getBackdropProps:N,getTransitionProps:ve,portalRef:be,isTopModal:he,exited:ee,hasTransition:te}=Je({...c,rootRef:o}),U={...c,exited:ee},A=Ze(U),K={};if(h.props.tabIndex===void 0&&(K.tabIndex="-1"),te){const{onEnter:L,onExited:W}=ve();K.onEnter=L,K.onExited=W}const ne={...g,slots:{root:x.Root,backdrop:x.Backdrop,...B},slotProps:{...p,...O}},[ge,Ee]=Y("root",{elementType:_e,externalForwardedProps:ne,getSlotProps:d,additionalProps:{ref:o,as:v},ownerState:U,className:z(i,A==null?void 0:A.root,!U.open&&U.exited&&(A==null?void 0:A.hidden))}),[xe,oe]=Y("backdrop",{elementType:s,externalForwardedProps:ne,additionalProps:r,getSlotProps:L=>N({...L,onClick:W=>{R&&R(W),L!=null&&L.onClick&&L.onClick(W)}}),className:z(r==null?void 0:r.className,A==null?void 0:A.backdrop),ownerState:U}),ye=V(r==null?void 0:r.ref,oe.ref);return!w&&!F&&(!te||ee)?null:I.jsx(Te,{ref:be,container:E,disablePortal:P,children:I.jsxs(ge,{...Ee,children:[!b&&s?I.jsx(xe,{...oe,ref:ye}):null,I.jsx(Ge,{disableEnforceFocus:M,disableAutoFocus:m,disableRestoreFocus:k,isEnabled:he,open:F,children:u.cloneElement(h,K)})]})})});export{Be as B,Ne as F,at as M,it as P,Ge as a,le as c,we as g};
