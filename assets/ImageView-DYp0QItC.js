import{l as p,j as t,u as d}from"./index-ChHXuf40.js";import{V as u}from"./ViewContainer-Dnv2NFVH.js";import{u as x,a as C}from"./content-CTNkBplU.js";import{F as _,C as j,a as v}from"./CommentBox-7mwBcOn9.js";import"./uiState-D0gkpRWk.js";import"./IconButton-BXLcq7Mr.js";import"./createSimplePaletteValueFilter-CLdyqM5U.js";import"./TextField-MaMPnnBO.js";import"./useSlot-BVU38s2u.js";import"./Portal-BpkAKKpt.js";import"./useFormControl-BOywDUuq.js";import"./Popover-3SaqCWbK.js";import"./Grow-B-eHZ5Kq.js";import"./debounce-Be36O1Ab.js";import"./Modal-DQ9h7Q_m.js";import"./index-BfNLg11A.js";import"./useSlotProps-BP5ya9qr.js";const h="_container_n4yt5_3",y="_outerContainer_n4yt5_19",f="_details_n4yt5_30",g="_reactions_n4yt5_46",I="_comments_n4yt5_52",e={container:h,outerContainer:y,details:f,reactions:g,comments:I};function N({id:n}){const[,i]=x(n),{content:m,profiler:a,actionLog:c}=p(),s=m.getContentStats(n),r=C(n);return t.jsx("div",{className:e.outerContainer,children:t.jsxs("div",{className:e.container,tabIndex:0,children:[t.jsx("img",{src:i,alt:""}),t.jsxs("div",{className:e.details,children:[t.jsxs("div",{className:e.reactions,children:[t.jsx(_,{htmlColor:"#444"}),t.jsxs("span",{children:[(s==null?void 0:s.reactions)||0," likes"]})]}),t.jsxs("div",{className:e.comments,children:[t.jsx(j,{id:n,onComment:o=>{c.addLogEntry({activity:"comment",id:n,content:o,value:o.length,timestamp:Date.now()},a.getCurrentUser())}}),r&&r.map((o,l)=>t.jsx(v,{comment:o.comment,user:o.userId},l))]})]})]})})}function H(){const{contentId:n}=d();return t.jsx(u,{children:t.jsx(N,{id:n})})}export{H as Component};
