import{R as t,C as l,b as C,H as i,N as _,r as b,p as w}from"./iframe-C54-I-iN.js";import{r as y,ay as u,f as G,S as c,T as S,az as p,M as v,L as H}from"./Link-B6aRyTdF.js";const L=t.forwardRef((e,o)=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",ref:o,...e},t.createElement("path",{fill:y(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m0-2c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8m-5-8c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1"}))),E=t.memo(t.forwardRef((e,o)=>{const{klId:r,testId:s,...d}=e;return t.createElement(L,{"kl-id":r,"data-testid":s,ref:o,...d})}));E.displayName="StatusNoThreadOutline";const P=t.forwardRef((e,o)=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",ref:o,...e},t.createElement("path",{fill:y(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m0-2c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8m4.7071-10.7071c.3905.3905.3905 1.0237 0 1.4142l-5 5c-.3905.3905-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L11 13.5858l4.2929-4.2929c.3905-.3905 1.0237-.3905 1.4142 0"}))),x=t.memo(t.forwardRef((e,o)=>{const{klId:r,testId:s,...d}=e;return t.createElement(P,{"kl-id":r,"data-testid":s,ref:o,...d})}));x.displayName="StatusOkOutline";const M="872px",A="1592px",j="400px",N="100%",z=`0 ${C[12]}px`,B=l`
  ${({direction:e})=>e?`grid-auto-flow: ${e};`:""}
  ${({cols:e})=>e?`grid-template-columns: ${e.join(" ")};`:""}
  ${({rows:e})=>e?`grid-template-rows: ${e.join(" ")};`:""}
  ${({areas:e})=>e?`grid-template-areas: "${e.map(o=>o.join(" ")).join('" "')}";`:""}
  ${({withPadding:e})=>e?`padding: ${z};
    box-sizing: content-box;`:""}
  ${({gridType:e})=>{switch(e){case"fix":return`width: ${M};`;case"sidebar":return`width: ${N};`;default:return`max-width: ${A};
          min-width: ${j};
          width: 100%;
        `}}}
`,F=l`
  ${({areaName:e})=>e?`grid-area: ${e};`:""}
  ${({rowSpan:e})=>e?`grid-row: span ${e};`:""}
  ${({span:e,columnSpan:o})=>e||o?`grid-column: span ${e||o};`:""}
`,I=i.div.withConfig({shouldForwardProp:e=>["className","data-testid","kl-id","children"].includes(e)})`${F}`,O=l`
  display: grid;
  gap: ${({gap:e})=>u(e)};
  row-gap: ${({rowGap:e})=>u(e)};
  column-gap: ${({columnGap:e})=>u(e)};
  align-items: ${({alignItems:e=""})=>e};
  justify-items: ${({justifyItems:e=""})=>e};
`,V=l`
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`,W=l`
  grid-template-columns: 0.5fr 1fr;
  grid-template-areas: "left right";
`,U=l`
  grid-template-columns: repeat(12, 1fr);
`,m=i.div.withConfig({shouldForwardProp:e=>["className","data-testid","kl-id","children","data-component-version"].includes(e)})`${O}`;i(m)`${V}`;i(m)`${W}`;i(m)`${U}`;const X=i(m)`${B}`,q=12,K=16,g=e=>{var o,r;const{children:s,cols:d,layout:n,layoutProperty:a,testAttributes:D,...T}=G(e),f={...T,...D,alignItems:a==null?void 0:a.alignItems,cols:(o=n==null?void 0:n.cols)!==null&&o!==void 0?o:[`repeat(${d??q}, 1fr)`],columnGap:a==null?void 0:a.columnGap,gap:(r=a==null?void 0:a.gap)!==null&&r!==void 0?r:K,justifyItems:a==null?void 0:a.justifyItems,rowGap:a==null?void 0:a.rowGap};if(_(n)){const R=n;return t.createElement(R,{...f},s)}return t.createElement(X,{...f,areas:n==null?void 0:n.areas,direction:n==null?void 0:n.direction,rows:n==null?void 0:n.rows},s)};g.defaultProps={cols:12};g.Item=I;const h={designTokens:"Design tokens",unitTests:"Unit tests",screenshotTests:"Screenshot tests",storybook:"Storybook",pixsoView:"Pixso"},k=({list:e})=>{const o=b.useMemo(()=>Object.keys(h),[]);return t.createElement(g,{layout:{cols:["repeat(2, 240px)"]}},o.map(r=>t.createElement(I,{key:r},t.createElement(c,{size:8},e[r]?t.createElement(x,{color:w.icon.status.statusgrass.light}):t.createElement(E,{color:w.icon.status.statusneutral.light}),t.createElement(S,null,h[r])))))};k.__docgenInfo={description:"",methods:[],displayName:"MetaDod",props:{list:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof metaDod",elements:[{name:"literal",value:"designTokens"},{name:"literal",value:"unitTests"},{name:"literal",value:"screenshotTests"},{name:"literal",value:"storybook"},{name:"literal",value:"pixsoView"}]},{name:"boolean"}],raw:"Record<keyof typeof metaDod, boolean>"}],raw:"Partial<Record<keyof typeof metaDod, boolean>>"},description:""}}};const J=i(p)`
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
`,$=i(H)`
  height: 20px !important;
  > span {
    font-family: inherit !important;
    font-size: inherit !important;
  }
`;function Z(e,o){return s=>t.createElement(c,{gap:32,direction:"vertical",align:"start"},t.createElement(c,{gap:16,direction:"vertical",align:"start"},t.createElement(J,{type:"H2"},e==null?void 0:e.component),((e==null?void 0:e.pixsoView)||(e==null?void 0:e.designLink))&&t.createElement(c,{gap:16},(e==null?void 0:e.pixsoView)&&t.createElement($,{href:e.pixsoView,target:"_blank",decoration:"icon",size:"medium"},"Документация в Pixso"),(e==null?void 0:e.designLink)&&t.createElement($,{href:e.designLink,target:"_blank",decoration:"icon",size:"medium"},"Компонент в Pixso"))),t.createElement(c,{gap:16,direction:"vertical",align:"start"},t.createElement(p,{type:"H4"},"Назначение"),t.createElement(v,{value:(e==null?void 0:e.usage)||"-"})),(e==null?void 0:e.description)&&t.createElement(c,{gap:16,direction:"vertical",align:"start"},t.createElement(p,{type:"H4"},"Технические особенности"),t.createElement(v,{value:(e==null?void 0:e.description)??"-"})),(e==null?void 0:e.dod)&&t.createElement(k,{list:e.dod}),o)}export{Z as w};
