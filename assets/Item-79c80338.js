import{r as c,j as n}from"./index-02b2945e.js";import{M as l}from"./Tooltip-875b66b4.js";const a="#078092",g="rgb(174, 37, 174)",m="#444",u="#555",b="#E996E9",w="_menuContainer_bigw5_4",d="_free_bigw5_19 _menuContainer_bigw5_4",p="_left_bigw5_27 _menuContainer_bigw5_4",C="_right_bigw5_39 _menuContainer_bigw5_4",f="_top_bigw5_51 _menuContainer_bigw5_4",x="_bottom_bigw5_63 _menuContainer_bigw5_4",I="_menuSpacerRow_bigw5_75",S="_menuSpacerColumn_bigw5_82",h="_logoRow_bigw5_89",k="_logoColumn_bigw5_102",y="_selected_bigw5_115",R="_selectedItem_bigw5_119",v="_inline_bigw5_123",j="_inlineSelected_bigw5_132 _inline_bigw5_123",D="_inlineTip_bigw5_137",E="_inlineBar_bigw5_141",_={bgColourful1:a,secondary:g,backgroundDark2:m,backgroundDark3:u,secondaryLight:b,menuContainer:w,free:d,left:p,right:C,top:f,bottom:x,menuSpacerRow:I,menuSpacerColumn:S,logoRow:h,logoColumn:k,selected:y,selectedItem:R,inline:v,inlineSelected:j,inlineTip:D,inlineBar:E},M=c.createContext("left");function L({fullWidth:o,tooltip:s,children:t,hideTip:r,selected:i}){const e=c.useContext(M);return r?n.jsx("div",{style:{width:o?"100%":void 0},className:i?_.selectedItem:void 0,children:t}):n.jsx(l,{title:s,arrow:!0,placement:e==="left"?"right":e==="right"?"left":e==="top"?"bottom":"top",children:n.jsx("div",{style:{width:o?"100%":void 0},className:i?_.selectedItem:void 0,children:t})})}export{L as I,M as a,_ as s};
