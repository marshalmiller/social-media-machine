import{r as t,j as f,a5 as M,R as S,a2 as B}from"./index-02b2945e.js";import{G as b}from"./Graph-d1b46b16.js";import{y as A,z as G,A as v,B as D}from"./settingsState-c28045a5.js";import{a as U}from"./graph-01dd06dc.js";import{a as q}from"./events-63b5f19e.js";import"./colours.module-29b309d0.js";import"./FileSaver.min-7671c644.js";import"./svgToPNG-975d57d1.js";import"./ProgressDialog-7226fde1.js";import"./DialogContent-d100c3e0.js";import"./createSimplePaletteValueFilter-b2e05aa4.js";import"./Portal-a2b43acb.js";import"./Modal-2fc077e7.js";import"./IconButton-02bc1303.js";import"./useSlot-050d423d.js";import"./DialogTitle-3bd65ba4.js";import"./Typography-0738e1b3.js";import"./index-720786c4.js";import"./LinearProgress-51654afb.js";const F="rgb(174, 37, 174)",P="_group_1wpop_3",W="_outerCircle_1wpop_3",Z="_selectedCircle_1wpop_15",$="_pulse_1wpop_1",C={secondary:F,group:P,outerCircle:W,selectedCircle:Z,pulse:$};function H({id:i,selected:a,onResize:o}){const u=t.useRef(null),[l,g]=t.useState(100),c=l;return t.useEffect(()=>{if(u.current){const n=u.current.querySelector("text"),w=n&&n.getBBox?n.getBBox():null;if(w){const m=Math.floor(w.width/2+30);g(m),o(i,m)}}},[i,o]),f.jsxs("g",{className:C.group,ref:u,"data-testid":"topic-node",children:[f.jsx("circle",{className:a?C.selectedCircle:C.outerCircle,"data-testid":"profile-selected",r:a?c+20:c}),f.jsx("circle",{"data-nodeitem":!0,"data-testid":"profile-circle",r:c,fill:"white",stroke:"#0A869A",strokeWidth:10}),f.jsx("text",{y:0,x:0,fontSize:"40px",dominantBaseline:"middle",textAnchor:"middle",children:M(i)})]})}function I(i,a){const o=new Map;return i.getRelated("topic",a,{count:10}).forEach(l=>{i.getRelated("topic",l.id,{count:10}).forEach(c=>{const n=l.weight*c.weight;n>0&&o.set(c.id,(o.get(c.id)||0)+n)})}),Array.from(o).map(([l,g])=>({id:l,weight:g}))}function J(){const[i,a]=t.useState([]),o=t.useRef(new Map),[u,l]=t.useState([]),g=S(A),c=S(G),n=S(v),w=S(D),m=U("topic"),k=B(),_=t.useMemo(()=>{const e=new Map;return m.forEach(p=>{var d;const h=I(k,p);h.sort((r,L)=>L.weight-r.weight);const s=((d=h[0])==null?void 0:d.weight)||0;e.set(p,h.filter(r=>r.weight>=(1-n)*s))}),e},[m,n,k]),[y,R]=t.useState(),[N,E]=t.useState(5),[T,z]=t.useState(),x=t.useCallback(()=>{const e=m.filter(s=>{var d;return(((d=_.get(s))==null?void 0:d.length)||0)>0});l(e.map(s=>({id:s,size:o.current.get(s)||20})));const p=[];let h=0;e.forEach(s=>{const d=_.get(s);d&&d.forEach(r=>{r.weight>0&&s!==r.id&&(p.push({source:s,target:r.id,strength:r.weight,actualStrength:r.weight}),h=Math.max(h,r.weight))})}),p.forEach(s=>{s.strength/=h}),a(p)},[m,_]),j=t.useCallback((e,p)=>{o.current.set(e,p),x()},[x]);return t.useEffect(()=>{x()},[x]),f.jsx(b,{links:i,nodes:u,linkScale:g,charge:w,showLines:c,onSelect:e=>{y||E(3),z([e.x||0,e.y||0]),R(e.id)},onUnselect:()=>{R(void 0),E(5),z([0,0])},focusNode:y,zoom:N,center:T,defaultLinkStyle:{opacity:e=>e.strength*.9,width:e=>1+Math.floor(e.strength*60)},children:u.map(e=>f.jsx(H,{id:e.id,selected:e.id===y,onResize:j},e.id))})}function me(){const[i,a]=t.useReducer(o=>++o,0);return q(()=>{a()},[],"refresh_graph"),f.jsx(J,{},`k-${i}`)}export{me as Component};
