import{j as v}from"./index-02b2945e.js";import{c as g}from"./IconButton-02bc1303.js";function h(a,n,c,t){let o=a.width,e=a.height;a instanceof HTMLVideoElement&&(o=a.videoWidth,e=a.videoHeight);const d=Math.min(o,e),r=n/d,i=Math.ceil(o*r),l=Math.ceil(e*r),m=i-n,u=l-n;t.width=t.height=n;const s=t.getContext("2d");return s&&(s.drawImage(a,~~(m/2)*-1,~~(u/2)*-1,i,l),c&&(s.scale(-1,1),s.drawImage(t,n*-1,0))),t}function E(a,n=224){return new Promise((c,t)=>{const o=new FileReader;o.onabort=()=>t(),o.onerror=()=>t(),o.onload=()=>{var e,d;const r=document.createElement("canvas");r.width=n,r.height=n;const i=new Image;i.onload=()=>{h(i,n,!1,r),c(r)},i.onerror=()=>{c(r)},i.src=o.result,((d=(e=global==null?void 0:global.process)==null?void 0:e.env)==null?void 0:d.NODE_ENV)==="test"&&i.onload(new Event("onload"))},o.readAsDataURL(a)})}function p(a,n=224){return new Promise((c,t)=>{const o=document.createElement("canvas");o.width=n,o.height=n;const e=new Image;e.crossOrigin="anonymous",e.onload=()=>{h(e,n,!1,o),c(o)},e.onerror=t,e.onabort=t,e.src=a})}const I=g(v.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");export{I as A,h as f,E as m,p as w};
