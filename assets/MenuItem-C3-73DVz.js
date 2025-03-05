import{r as l,j as x,H as c}from"./index-ChHXuf40.js";import{g as d,a as p,u as S,f as U,e as D,s as j,c as I,b as F,r as P,m as E}from"./createSimplePaletteValueFilter-CLdyqM5U.js";import{L as $}from"./TextField-MaMPnnBO.js";import{B as G}from"./IconButton-BXLcq7Mr.js";function Q(t){return p("MuiDivider",t)}const M=d("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);function X(t){return p("MuiListItemIcon",t)}const O=d("MuiListItemIcon",["root","alignItemsFlexStart"]);function Y(t){return p("MuiListItemText",t)}const L=d("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function H(t){return p("MuiMenuItem",t)}const r=d("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),N=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.divider&&e.divider,!s.disableGutters&&e.gutters]},z=t=>{const{disabled:e,dense:s,divider:a,disableGutters:n,selected:u,classes:i}=t,o=F({root:["root",s&&"dense",e&&"disabled",!n&&"gutters",a&&"divider",u&&"selected"]},H,i);return{...i,...o}},A=j(G,{shouldForwardProp:t=>P(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:N})(E(({theme:t})=>({...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${r.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${L.root}`]:{marginTop:0,marginBottom:0},[`& .${L.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${O.root} svg`]:{fontSize:"1.25rem"}}}]}))),Z=l.forwardRef(function(e,s){const a=S({props:e,name:"MuiMenuItem"}),{autoFocus:n=!1,component:u="li",dense:i=!1,divider:f=!1,disableGutters:o=!1,focusVisibleClassName:w,role:R="menuitem",tabIndex:v,className:k,...T}=a,b=l.useContext($),y=l.useMemo(()=>({dense:i||b.dense||!1,disableGutters:o}),[b.dense,i,o]),g=l.useRef(null);U(()=>{n&&g.current&&g.current.focus()},[n]);const B={...a,dense:y.dense,divider:f,disableGutters:o},m=z(a),V=D(g,s);let C;return a.disabled||(C=v!==void 0?v:-1),x.jsx($.Provider,{value:y,children:x.jsx(A,{ref:V,role:R,tabIndex:C,component:u,focusVisibleClassName:I(m.focusVisible,w),className:I(m.root,k),...T,ownerState:B,classes:m})})});export{Z as M,X as a,Y as b,Q as g,L as l};
