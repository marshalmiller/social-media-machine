import{r as s,ae as f,v as a,af as i}from"./index-02b2945e.js";function l(t,r){const[e,n]=s.useState(t),o=s.useRef();return o.current||(o.current=f(n,r,!0)),[e,o.current[0]]}function m(t){const r=a(),e=t||r.getCurrentUser(),[n,o]=l(void 0,500);return s.useEffect(()=>{const u=()=>{try{o({...r.getUserProfile(e)})}catch(c){console.error(c),o(i(e,"NoName"))}};return r.broker.on(`profile-${e}`,u),()=>r.broker.off(`profile-${e}`,u)},[e,r,o]),n||r.getUserProfile(e)||i(e,"NoName")}function U(t){const r=a();return s.useMemo(()=>r.getSimilarUsers(t.embeddings.taste,{count:11}).filter(e=>e.id!==t.id&&e.weight>0),[t,t.lastUpdated,r])}export{U as a,m as u};
