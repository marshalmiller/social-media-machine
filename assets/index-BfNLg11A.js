import{j as a,aC as f,aD as u,aE as c,aw as x}from"./index-ChHXuf40.js";import{n as m}from"./createSimplePaletteValueFilter-CLdyqM5U.js";import{b as y}from"./Portal-BpkAKKpt.js";function b({styles:t,themeId:e,defaultTheme:o={}}){const n=y(o),s=typeof t=="function"?t(e&&n[e]||n):t;return a.jsx(f,{styles:s})}const P=t=>{var n;const e={systemProps:{},otherProps:{}},o=((n=t==null?void 0:t.theme)==null?void 0:n.unstable_sxConfig)??c;return Object.keys(t).forEach(s=>{o[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e};function S(t){const{sx:e,...o}=t,{systemProps:n,otherProps:s}=P(o);let r;return Array.isArray(e)?r=[n,...e]:typeof e=="function"?r=(...l)=>{const i=e(...l);return u(i)?{...n,...i}:n}:r={...n,...e},{...s,sx:r}}function h(t){return a.jsx(b,{...t,defaultTheme:m,themeId:x})}function d(t){return function(o){return a.jsx(h,{styles:typeof t=="function"?n=>t({theme:n,...o}):t})}}function C(){return S}export{d as g,C as i};
