import{r as f,j as r,x as m}from"./index-ChHXuf40.js";import{g as E,a as C,u as I,s as P,c as A,b as j,m as L}from"./createSimplePaletteValueFilter-CLdyqM5U.js";import{u as S,F as z}from"./useFormControl-BOywDUuq.js";import{T as R}from"./Typography-8VlALfQ4.js";function w(t){return C("MuiInputAdornment",t)}const h=E("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b;const F=(t,e)=>{const{ownerState:n}=t;return[e.root,e[`position${m(n.position)}`],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},T=t=>{const{classes:e,disablePointerEvents:n,hiddenLabel:a,position:s,size:i,variant:l}=t,p={root:["root",n&&"disablePointerEvents",s&&`position${m(s)}`,l,a&&"hiddenLabel",i&&`size${m(i)}`]};return j(p,w,e)},$=P("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:F})(L(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),H=f.forwardRef(function(e,n){const a=I({props:e,name:"MuiInputAdornment"}),{children:s,className:i,component:l="div",disablePointerEvents:p=!1,disableTypography:x=!1,position:c,variant:u,...g}=a,o=S()||{};let d=u;u&&o.variant,o&&!d&&(d=o.variant);const v={...a,hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:p,position:c,variant:d},y=T(v);return r.jsx(z.Provider,{value:null,children:r.jsx($,{as:l,ownerState:v,className:A(y.root,i),ref:n,...g,children:typeof s=="string"&&!x?r.jsx(R,{color:"textSecondary",children:s}):r.jsxs(f.Fragment,{children:[c==="start"?b||(b=r.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,s]})})})});export{H as I};
