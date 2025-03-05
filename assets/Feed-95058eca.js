import{j as t,r as n,c as P,I as ie,g as fe,a7 as ue,v as de,h as he,R as Y}from"./index-02b2945e.js";import{s as f,C as ve,a as oe,b as Z,F as be}from"./style.module-950f526a.js";import{c as H,I as me}from"./IconButton-02bc1303.js";import{U as pe}from"./UserListing-e60983b4.js";import{a as we,u as ge,c as xe}from"./content-ab9124ab.js";import{l as je}from"./localiser-c0c9a31b.js";import{C as ye}from"./Close-50ef3ec2.js";import{g as ke,a as Ce,s as se,m as Se,u as Ie,c as Re,b as Ne}from"./createSimplePaletteValueFilter-b2e05aa4.js";import{u as _e}from"./useSlot-050d423d.js";import{L as De}from"./LangSelect-6fc7f25d.js";import{c as Me}from"./configState-6be3aa1d.js";import{u as Te}from"./recommender-9b8a9795.js";import{a as Ee,i as Fe}from"./sessionState-6915fb12.js";const Ae=H(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Pe(e){return ke("MuiAvatar",e)}Ce("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Oe=e=>{const{classes:s,variant:r,colorDefault:l}=e;return Ne({root:["root",r,l&&"colorDefault"],img:["img"],fallback:["fallback"]},Pe,s)},Ue=se("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,s[r.variant],r.colorDefault&&s.colorDefault]}})(Se(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),ze=se("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,s)=>s.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Be=se(Ae,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,s)=>s.fallback})({width:"75%",height:"75%"});function Le({crossOrigin:e,referrerPolicy:s,src:r,srcSet:l}){const[o,i]=n.useState(!1);return n.useEffect(()=>{if(!r&&!l)return;i(!1);let p=!0;const d=new Image;return d.onload=()=>{p&&i("loaded")},d.onerror=()=>{p&&i("error")},d.crossOrigin=e,d.referrerPolicy=s,d.src=r,l&&(d.srcset=l),()=>{p=!1}},[e,s,r,l]),o}const $e=n.forwardRef(function(s,r){const l=Ie({props:s,name:"MuiAvatar"}),{alt:o,children:i,className:p,component:d="div",slots:h={},slotProps:C={},imgProps:x,sizes:M,src:v,srcSet:u,variant:k="circular",...b}=l;let w=null;const m={...l,component:d,variant:k},S=Le({...x,...typeof C.img=="function"?C.img(m):C.img,src:v,srcSet:u}),g=v||u,I=g&&S!=="error";m.colorDefault=!I,delete m.ownerState;const R=Oe(m),[N,j]=_e("img",{className:R.img,elementType:ze,externalForwardedProps:{slots:h,slotProps:{img:{...x,...C.img}}},additionalProps:{alt:o,src:v,srcSet:u,sizes:M},ownerState:m});return I?w=t.jsx(N,{...j}):i||i===0?w=i:g&&o?w=o[0]:w=t.jsx(Be,{ownerState:m,className:R.fallback}),t.jsx(Ue,{as:d,className:Re(R.root,p),ref:r,...b,ownerState:m,children:w})}),He=$e,Ve="#ddd",Ge="_feedView_trlpo_3",We="_footerOuter_trlpo_17",re={borderGrey:Ve,feedView:Ge,footerOuter:We},qe="#ddd",Xe="_container_vbwoy_3",Ke="_placeholder_vbwoy_21",Je="_outer_vbwoy_28",Qe="_blocker_vbwoy_36",Ye="_leaveMessage_vbwoy_52",Ze="_titleOuter_vbwoy_57",et="_title_vbwoy_57",tt="_language_vbwoy_78",T={borderGrey:qe,container:Xe,placeholder:Ke,outer:Je,blocker:Qe,leaveMessage:Ye,titleOuter:Ze,title:et,language:tt},st=H(t.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"}),"ChatBubbleOutline"),nt=H(t.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),ot=H(t.jsx("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11"}),"Reply"),rt=4e3,at=1e3;function ne({onClose:e,children:s,horizontal:r,vertical:l,noTimeout:o}){const i=n.useRef(-1),p=n.useCallback(()=>{i.current!==-1&&clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=-1,e&&e()},at)},[e]),d=n.useCallback(()=>{i.current!==-1&&clearTimeout(i.current)},[]);return n.useEffect(()=>(o||(i.current=window.setTimeout(()=>{i.current=-1,e&&e()},rt)),()=>{i.current!==-1&&clearTimeout(i.current)}),[e,o]),t.jsx("div",{className:`${f.panel} ${f[r]} ${f[l]}`,onMouseLeave:p,onMouseEnter:d,children:s})}function ct({onClose:e,onChange:s}){const{t:r}=P(),l=n.useCallback(o=>{s&&s("public",o[0]),e&&e()},[s,e]);return t.jsx(ne,{horizontal:"hfull",vertical:"vfull",onClose:e,children:t.jsxs("div",{className:f.sharecontainer,"data-testid":"feed-image-share-panel",children:[t.jsx("div",{className:f.shareLabel,children:r("feed.titles.shareWith")}),t.jsx(pe,{onSelect:l})]})})}function lt({onClose:e,onComment:s,id:r,disabled:l}){const{t:o}=P(),[i,p]=n.useState(!1),d=we(r)||[];return t.jsx(ne,{horizontal:"hfull",vertical:"bottom",onClose:e,noTimeout:!0,children:t.jsxs("div",{className:f.commentbubble,"data-testid":"feed-image-comment-panel",children:[!l&&t.jsx(ve,{id:r,onClose:e,onComment:s}),t.jsxs("ul",{className:f.commentList,children:[d.length===0&&t.jsx("li",{children:o("feed.messages.noComments")}),d.length>0&&t.jsxs(t.Fragment,{children:[!i&&t.jsx(oe,{comment:d[0].comment,user:d[0].userId}),i&&d.map((h,C)=>t.jsx(oe,{comment:h.comment,user:h.userId,noLimit:!0},C)),d.length>1&&!i&&t.jsx("li",{children:t.jsx(ie,{"data-testid":"moreComments-button",size:"small",style:{marginLeft:"0.5rem"},onClick:()=>p(!0),children:o("feed.actions.moreComments")})})]})]})]})})}function it({onClose:e,labels:s}){const{i18n:r}=P();return t.jsx(ne,{horizontal:"right",vertical:"top",onClose:e,children:t.jsx("div",{className:f.labelcontainer,"data-testid":"feed-image-label-panel",children:s.slice(0,5).map((l,o)=>t.jsxs("div",{className:f.topicLabel,children:["#",je.getLocalisedLabel(l,r.language)]},o))})})}function ee({count:e,position:s="right",...r}){return t.jsxs("div",{className:Z.button,children:[t.jsx(me,{...r,"data-count":e}),e>0&&t.jsx("div",{className:s==="right"?Z.dot:Z.leftDot,children:e})]})}const ut=10;function dt(e){let s=0,r;for(r=0;r<e.length;r+=1)s=e.charCodeAt(r)+((s<<5)-s);let l="#";for(r=0;r<3;r+=1){const o=s>>r*8&255;l+=`00${o.toString(16)}`.slice(-2)}return l}function mt(e){const s=e.split(" ");return{sx:{bgcolor:dt(e)},children:`${s[0][0].toLocaleUpperCase()}${s.length>1?s[1][0].toLocaleUpperCase():""}`}}function ft({id:e,onClick:s,onLike:r,onFollow:l,onUnfollow:o,onShare:i,onComment:p,onHide:d,active:h,visible:C,noActions:x,showLabels:M,reason:v,noComments:u,noLike:k,noFollow:b,noShare:w}){const{t:m}=P(),S=fe(),[g,I]=ge(e),[R,N]=n.useState("none"),[j,_]=n.useState(!1),[E,D]=n.useState("none"),[O,V]=n.useState(!1),[U,z]=n.useReducer(c=>++c,0),{reactions:F,shares:A}=xe(e),B=n.useCallback(()=>{s&&s(e),D("none")},[s,e]),G=n.useCallback(()=>{N(c=>{const y=c==="none"?"like":"none";return r&&r(e,y),y})},[r,e]),W=n.useCallback((c,y)=>{i&&i(e,c,y)},[i,e]),q=n.useCallback(c=>{p&&(p(e,c),z())},[p,e]),X=n.useCallback(c=>{D("share"),c.stopPropagation()},[D]),K=n.useCallback(c=>{D(y=>y==="comment"?"none":"comment"),c.stopPropagation()},[D]),J=n.useCallback(()=>{V(c=>(l&&!c&&l(e),o&&c&&o(e),!c))},[l,e,o]),a=n.useCallback(()=>{D("none")},[]);return n.useEffect(()=>{h||D("none")},[h]),!C||!I||!g?null:t.jsx("div",{className:f.container,children:t.jsxs("div",{className:h||x?f.activeImageContainer:f.imageContainer,children:[(h||x)&&!v&&t.jsxs("div",{className:f.name,children:[t.jsx(He,{...mt(g.author||"Unknown")}),t.jsx("span",{className:f.author,children:g.author||"Unknown"}),!x&&!b&&t.jsx(ie,{onClick:J,"aria-pressed":O,"data-testid":"feed-image-follow-button",color:"inherit",variant:"outlined",children:m(O?"feed.actions.unfollow":"feed.actions.follow")})]}),v&&t.jsx("div",{className:f.reason,children:v}),h&&!x&&d&&t.jsx("div",{className:f.topRightButtons,children:t.jsx(me,{color:"inherit",onClick:()=>{d(e),_(!0)},"aria-label":m("feed.aria.hide"),children:t.jsx(ye,{color:"inherit",fontSize:"medium"})})}),t.jsx("img",{onClick:B,className:f.instaImage,src:I,alt:"Insta Upload","data-testid":"feed-image-element"}),h&&!x&&t.jsxs("div",{className:f.buttonRow,onClick:B,children:[!k&&t.jsx(ee,{count:F,className:R!=="none"?f.liked:"",onClick:()=>G(),color:"inherit","data-testid":"feed-image-like-button","aria-label":m("feed.aria.showLikeOptions"),children:R!=="none"?t.jsx(be,{color:"inherit",fontSize:"large"}):t.jsx(nt,{color:"inherit",fontSize:"large"})}),!u&&t.jsx(ee,{count:S.getComments(e).length,color:"inherit",onClick:K,"data-testid":"feed-image-comment-button","aria-label":m("feed.aria.showComments"),children:t.jsx(st,{color:"inherit",fontSize:"large"})}),!w&&t.jsx(ee,{count:A,position:"left",color:"inherit",onClick:X,"data-testid":"feed-image-share-button","aria-label":m("feed.aria.showShareOptions"),children:t.jsx(ot,{color:"inherit",fontSize:"large",style:{transform:"scaleX(-1)"}})})]}),h&&M&&E==="none"&&t.jsx(it,{labels:g.labels.filter(c=>c.weight>0).map(c=>c.label)}),h&&E==="share"&&t.jsx(ct,{onClose:a,onChange:W}),h&&E==="comment"&&t.jsx(lt,{id:e,onClose:a,onComment:q,disabled:U>=ut}),j&&t.jsx("div",{className:f.blocker,children:m("feed.labels.hidden")})]})})}function ae({size:e}){var l;const s=n.useRef(null),r=e>0?e*((((l=s.current)==null?void 0:l.clientWidth)||0)+50):0;return t.jsx("div",{ref:s,className:T.placeholder,style:{height:`${r}px`}})}function ht(){const[e,s]=n.useState(!0);return n.useEffect(()=>{const r=()=>{s(!1)},l=()=>{s(!0)};return window.addEventListener("blur",r),window.addEventListener("focus",l),()=>{window.removeEventListener("blur",r),window.removeEventListener("focus",l)}},[s]),e}const ce=5e3,le=130,te=50;function vt({id:e,images:s,onView:r,onMore:l,onLog:o,noActions:i,showLabels:p,alwaysActive:d,noComments:h,noLike:C,noFollow:x,noShare:M,noHeader:v}){const{t:u}=P(),k=n.useRef(null),[b,w]=n.useState(0),m=n.useRef(-1),S=n.useRef(0),g=n.useRef(0),I=n.useRef(),R=n.useRef(!0),N=n.useRef(0),j=ht(),[_,E]=n.useState(!1),D=ue(),O=de();I.current=s[b];const V=d||_&&j;n.useEffect(()=>{const a=Date.now();j?(N.current=a,S.current=a,o({activity:"begin",timestamp:a}),k.current&&k.current.focus()):I.current&&o({activity:"end",timestamp:a,value:a-N.current,id:I.current.contentId})},[j,o]),n.useEffect(()=>{R.current=!0},[s]);const U=n.useCallback(a=>{const c=s[a];c&&o({activity:"seen",id:c.contentId,timestamp:Date.now()})},[s,o]),z=n.useCallback((a,c)=>{o({activity:"dwell",value:a,id:s[c].contentId,timestamp:Date.now()})},[s,o]);n.useEffect(()=>{const a=Date.now();if(b!==m.current){if(m.current>=0){const c=a-S.current;z(c,m.current),D.createEngagementEntry(e,s[m.current].contentId)}U(b),S.current=a,m.current=b}},[b,r,o,s,z,U,D,e]);const F=n.useCallback(()=>{const a=Date.now();a-g.current>ce&&(S.current=a),g.current=a,k.current&&!_&&k.current.focus()},[_]),A=!v,B=n.useCallback(a=>{const c=a.currentTarget.scrollHeight,y=Math.floor((c-(A?le:te))/s.length),L=a.currentTarget.scrollTop+y/2-(A?le:te),Q=Math.floor(L/y+.2),$=Date.now();s.length>0&&$-g.current>ce&&(o({activity:"inactive",value:$-g.current,id:s[Q].contentId,timestamp:Date.now()}),S.current=$),g.current=$,w(Q),l&&Q>=s.length-4&&(R.current&&l(),R.current=!1),k.current&&!_&&k.current.focus()},[s,w,l,_,o,A]),G=n.useCallback((a,c)=>{o(c!=="none"?{activity:c,id:a,timestamp:Date.now()}:{activity:"unreact",id:a,timestamp:Date.now()})},[o]),W=n.useCallback((a,c,y)=>{c==="public"&&o({activity:"share_public",id:a,timestamp:Date.now(),user:y})},[o]),q=n.useCallback(a=>{o({activity:"follow",id:a,timestamp:Date.now()})},[o]),X=n.useCallback(a=>{o({activity:"unfollow",id:a,timestamp:Date.now()})},[o]),K=n.useCallback(a=>{o({activity:"hide",id:a,timestamp:Date.now()})},[o]),J=n.useCallback((a,c)=>{o({activity:"comment",id:a,timestamp:Date.now(),value:c.length,content:c})},[o]);return t.jsx("div",{className:T.outer,children:t.jsxs("div",{ref:k,className:T.container,onScroll:B,onMouseMove:F,onKeyDown:F,onTouchStart:F,onMouseDown:F,tabIndex:0,onFocus:()=>E(!0),onBlur:a=>{a.currentTarget.contains(a.relatedTarget)||E(!1)},children:[t.jsxs("div",{className:T.titleOuter,style:{minHeight:i?"40px":void 0},children:[!i&&!v&&t.jsxs("header",{className:T.title,children:[t.jsx("img",{src:"/logo48_bw.png",alt:"GenAIMedia Logo",width:48,height:48}),t.jsx("h1",{children:u("feed.titles.main")}),t.jsx("div",{className:T.language,children:t.jsx(De,{})})]}),v&&t.jsx("div",{style:{height:`${te}px`}})]}),t.jsx("div",{className:T.topSpacer}),t.jsx(ae,{size:b-4}),s.length===0&&t.jsx(he,{}),s.map((a,c)=>{var y,L;return t.jsx(ft,{id:a.contentId,onLike:G,onFollow:q,onUnfollow:X,onShare:W,onHide:K,onComment:J,noComments:h,noLike:C,noFollow:x,noShare:M,active:V&&(c===b||c===0&&b===-1),visible:Math.abs(c-b)<5,noActions:i,showLabels:p,reason:(y=a.injection)!=null&&y.from&&((L=a.injection)==null?void 0:L.reason)==="share"?u("feed.messages.sharedBy",{name:O.getUserName(a.injection.from)}):void 0},c)}),t.jsx(ae,{size:s.length-b-5})]})})}function _t({onProfile:e,onLog:s,onRecommend:r,id:l,noLog:o,noActions:i,alwaysActive:p,noHeader:d}){const[h,C]=n.useState([]),x=n.useRef(!0),M=de(),v=l||M.getCurrentUser(),u=Y(Me(v)),k=n.useMemo(()=>({...u==null?void 0:u.recommendations,coldStart:!o}),[u,o]),{recommendations:b,more:w}=Te(5,v,k),m=ue(),S=Y(Ee),g=Y(Fe),I=n.useRef(Date.now());n.useEffect(()=>{if(x.current&&b.length>0){const N=g.filter(j=>j.timestamp>I.current).map(j=>({contentId:j.content,injection:j}));C(j=>[...j,...N,...b.map(_=>({contentId:_.contentId,recommendation:_}))]),I.current=Date.now(),x.current=!1,r&&r(b),e&&e(M.getUserProfile(v))}else x.current&&setTimeout(w,2e3)},[b,e,r,M,v,w,g]);const R=n.useCallback(N=>{o||(m.addLogEntry(N,v),s&&s())},[s,o,m,v]);return n.useEffect(()=>{S&&w()},[w,S]),t.jsxs("section",{className:re.feedView,children:[h.length>0&&t.jsx(vt,{id:v,images:h,onMore:()=>{x.current=!0,w()},onLog:R,noHeader:d,noActions:i,showLabels:u==null?void 0:u.showTopicLabels,alwaysActive:(u==null?void 0:u.alwaysActive)||p,noComments:u==null?void 0:u.disableComments,noLike:u==null?void 0:u.disableLiking,noFollow:u==null?void 0:u.disableFollowing,noShare:u==null?void 0:u.disableSharing}),t.jsx("div",{className:re.footerOuter})]})}export{_t as F};
