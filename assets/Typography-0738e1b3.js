import{x as l,r as T,j as C}from"./index-02b2945e.js";import{a as B,g as S,s as w,m as j,d as W,u as M,c as P,b as R}from"./createSimplePaletteValueFilter-b2e05aa4.js";import{i as $}from"./index-720786c4.js";function O(r){return S("MuiTypography",r)}const U=B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),J=U,A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=$(),D=r=>{const{align:a,gutterBottom:t,noWrap:e,paragraph:n,variant:p,classes:s}=r,o={root:["root",p,r.align!=="inherit"&&`align${l(a)}`,t&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return R(o,O,s)},N=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${l(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(j(({theme:r})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,e])=>t!=="inherit"&&e&&typeof e=="object").map(([t,e])=>({props:{variant:t},style:e})),...Object.entries(r.palette).filter(W()).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((a=r.palette)==null?void 0:a.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${l(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},V=T.forwardRef(function(a,t){const{color:e,...n}=M({props:a,name:"MuiTypography"}),p=!A[e],s=E({...n,...p&&{color:e}}),{align:o="inherit",className:g,component:h,gutterBottom:x=!1,noWrap:d=!1,paragraph:y=!1,variant:i="body1",variantMapping:c=f,...u}=s,m={...s,align:o,color:e,className:g,component:h,gutterBottom:x,noWrap:d,paragraph:y,variant:i,variantMapping:c},b=h||(y?"p":c[i]||f[i])||"span",v=D(m);return C.jsx(N,{as:b,ref:t,className:P(v.root,g),...u,ownerState:m,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...u.style}})}),L=V;export{L as T,J as t};
