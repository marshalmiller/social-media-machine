import{j as a,aB as f,aC as u,aD as c,av as x}from"./index-02b2945e.js";import{n as m}from"./createSimplePaletteValueFilter-b2e05aa4.js";import{b as y}from"./Portal-a2b43acb.js";function b({styles:t,themeId:e,defaultTheme:o={}}){const n=y(o),s=typeof t=="function"?t(e&&n[e]||n):t;return a.jsx(f,{styles:s})}const h=t=>{var n;const e={systemProps:{},otherProps:{}},o=((n=t==null?void 0:t.theme)==null?void 0:n.unstable_sxConfig)??u;return Object.keys(t).forEach(s=>{o[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e};function P(t){const{sx:e,...o}=t,{systemProps:n,otherProps:s}=h(o);let r;return Array.isArray(e)?r=[n,...e]:typeof e=="function"?r=(...i)=>{const l=e(...i);return c(l)?{...n,...l}:n}:r={...n,...e},{...s,sx:r}}function S(t){return a.jsx(b,{...t,defaultTheme:m,themeId:x})}function E(t){return function(o){return a.jsx(S,{styles:typeof t=="function"?n=>t({theme:n,...o}):t})}}function T(){return P}export{E as g,T as i};
