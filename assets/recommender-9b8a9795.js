import{m as i,r as m}from"./index-02b2945e.js";const a={random:2,taste:2,coengaged:2,similarUsers:2,popular:2};function w(r,s,t){const{broker:n,profiler:u,recommender:o}=i(),e=s||u.getCurrentUser(),[d,f]=m.useState([]);m.useEffect(()=>{const c=()=>{const l=o.getRecommendations(e,r,t||a);f([...l])};return n.on(`recom-${e}`,c),o.generateNewRecommendations(e,r,t||a,!0),()=>n.off(`recom-${e}`,c)},[e,n,o,r,t]);const g=m.useCallback(()=>{o.generateNewRecommendations(e,r,t||a,!0)},[r,e,o,t]);return{recommendations:d,more:g}}export{w as u};
