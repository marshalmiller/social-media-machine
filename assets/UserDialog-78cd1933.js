import{c as n,j as s}from"./index-02b2945e.js";import{U as c}from"./UserListing-e60983b4.js";import{C as x}from"./Close-50ef3ec2.js";import{D as p,a as m}from"./DialogContent-d100c3e0.js";import{D as d}from"./DialogTitle-3bd65ba4.js";import{I as h}from"./IconButton-02bc1303.js";function U({open:a,onClose:t,onSelect:e,preSelected:l,multiple:r}){const{t:i}=n();return s.jsxs(p,{open:a,onClose:t,scroll:"paper",maxWidth:"xs",fullWidth:!0,children:[s.jsx(d,{children:i(r?"dashboard.titles.usersSelect":"dashboard.titles.userSelect")}),s.jsx(h,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:o=>o.palette.grey[500]},children:s.jsx(x,{})}),s.jsx(m,{sx:{display:"flex",padding:0,maxHeight:"600px"},children:s.jsx(c,{onSelect:o=>{e(o),t()},multiple:r,preSelected:l})})]})}export{U};
