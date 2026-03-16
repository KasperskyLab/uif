import{ak as u,a0 as n,H as a,aJ as o,u as f,aK as I,R as m}from"./iframe-DlY6n6Um.js";const w="872px",G="1592px",h="400px",C="100%",_=`0 ${u[12]}px`,D=n`
  ${({direction:s})=>s?`grid-auto-flow: ${s};`:""}
  ${({cols:s})=>s?`grid-template-columns: ${s.join(" ")};`:""}
  ${({rows:s})=>s?`grid-template-rows: ${s.join(" ")};`:""}
  ${({areas:s})=>s?`grid-template-areas: "${s.map(i=>i.join(" ")).join('" "')}";`:""}
  ${({withPadding:s})=>s?`padding: ${_};
      box-sizing: content-box;`:""}
  ${({gridType:s})=>{switch(s){case"fix":return`width: ${w};`;case"sidebar":return`width: ${C};`;default:return`max-width: ${G};
          min-width: ${h};
          width: 100%;
        `}}}
`,R=n`
  ${({areaName:s})=>s?`grid-area: ${s};`:""}
  ${({rowSpan:s})=>s?`grid-row: span ${s};`:""}
  ${({span:s,columnSpan:i})=>s||i?`grid-column: span ${s||i};`:""}
`,T=a.div.withConfig({shouldForwardProp:s=>["className","data-testid","kl-id","children"].includes(s)})`${R}`,x=n`
  display: grid;
  gap: ${({gap:s})=>o(s)};
  row-gap: ${({rowGap:s})=>o(s)};
  column-gap: ${({columnGap:s})=>o(s)};
  align-items: ${({alignItems:s=""})=>s};
  justify-items: ${({justifyItems:s=""})=>s};
`,A=n`
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`,E=n`
  grid-template-columns: 0.5fr 1fr;
  grid-template-areas: "left right";
`,H=n`
  grid-template-columns: repeat(12, 1fr);
`,d=a.div.withConfig({shouldForwardProp:s=>["className","data-testid","kl-id","children","data-component-version"].includes(s)})`${x}`;a(d)`${A}`;a(d)`${E}`;a(d)`${H}`;const j=a(d)`${D}`,L=12,S=16,r=s=>{const{children:i,cols:l,layout:e,layoutProperty:t,testAttributes:$,...g}=f(s),c={...g,...$,alignItems:t==null?void 0:t.alignItems,cols:(e==null?void 0:e.cols)??[`repeat(${l??L}, 1fr)`],columnGap:t==null?void 0:t.columnGap,gap:(t==null?void 0:t.gap)??S,justifyItems:t==null?void 0:t.justifyItems,rowGap:t==null?void 0:t.rowGap};if(I(e)){const p=e;return m.createElement(p,{...c},i)}return m.createElement(j,{...c,areas:e==null?void 0:e.areas,direction:e==null?void 0:e.direction,rows:e==null?void 0:e.rows},i)};r.defaultProps={cols:12};r.Item=T;r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{cols:{defaultValue:{value:"12",computed:!1},required:!1}}};export{r as G,T as a};
