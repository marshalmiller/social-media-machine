import{m as d,j as a,r as c}from"./index-02b2945e.js";import{s,T as p}from"./TableToolbar-006034e4.js";import{D as u}from"./DataGrid-d15b9d8f.js";import{a as h}from"./events-63b5f19e.js";import"./createSimplePaletteValueFilter-b2e05aa4.js";import"./EventManager-36c7dc68.js";import"./TextField-43fc95d4.js";import"./useSlot-050d423d.js";import"./IconButton-02bc1303.js";import"./Portal-a2b43acb.js";import"./useFormControl-e419a457.js";import"./Popover-f0f4a007.js";import"./Modal-2fc077e7.js";import"./debounce-517eeb3c.js";import"./Grow-605dc19c.js";import"./useSlotProps-2393cf25.js";import"./index-720786c4.js";import"./MenuItem-97c66a8d.js";import"./Typography-0738e1b3.js";import"./Close-223ffcde.js";import"./Popper-912b4204.js";import"./Chip-3c6505fa.js";import"./FormControlLabel-5a6070f0.js";import"./SwitchBase-b2e27e4d.js";import"./Button-c681e6d6.js";import"./InputAdornment-0277bb49.js";import"./Tooltip-875b66b4.js";import"./LinearProgress-51654afb.js";import"./useThemeProps-e50455dd.js";function f(e){const t=e/1e3;return t>60*60?`${(t/3600).toFixed(1)}h`:t>60?`${(t/60).toFixed(1)}m`:`${t.toFixed(1)}s`}const v=[{field:"timestamp",headerName:"Timestamp",width:200,renderCell:e=>new Date(e.value).toLocaleString()},{field:"activity",headerName:"Action",width:130},{field:"image",headerName:"Image",width:80,renderCell:e=>e.value?a.jsx("img",{src:e.value,width:48,height:48}):null},{field:"name",headerName:"Owner",width:200},{field:"owner",headerName:"Owner ID",width:200},{field:"value",headerName:"Value",width:100,renderCell:e=>e.value===void 0?null:e.row.activity==="dwell"||e.row.activity==="end"||e.row.activity==="inactive"?f(e.value):`${e.value.toFixed(1)}`},{field:"text",headerName:"Text",width:200}];function g(){const{actionLog:e,graph:t,profiler:o}=d(),l=t.getNodesByType("user").map(r=>e.getActionLog(r).map(i=>({id:`${r}:${i.activity}:${i.timestamp}`,timestamp:i.timestamp,activity:i.activity,image:i.id?o.content.getContentData(i.id):void 0,value:i.value,user:i.user,owner:r,name:o.getUserName(r),text:i.content}))),n=[];return l.forEach(r=>{n.push(...r)}),n.sort((r,m)=>m.timestamp-r.timestamp),a.jsx("div",{className:s.container,children:a.jsx("div",{className:s.tableContainer,"data-testid":"log-table",children:a.jsx(u,{localeText:{},slots:{toolbar:p},rows:n,columns:v,initialState:{columns:{columnVisibilityModel:{owner:!1,text:!1}}}})})})}function P(){const[e,t]=c.useReducer(o=>++o,0);return h(()=>{t()},[],"refresh_graph"),a.jsx(g,{},`k-${e}`)}export{P as Component};
