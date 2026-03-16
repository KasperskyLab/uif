import{a1 as n,a0 as o,w as s,u as l,R as r,H as d}from"./iframe-DlY6n6Um.js";const m=n(),c=o`
  padding: 0;
  display: flex;
  background: ${m("color")};
  
  ${({direction:e})=>e==="horizontal"?o`
        margin-top: 0;
        margin-bottom: 0;
        width: 100%;
        height: 1px;
      `:o`
        margin-left: 0;
        margin-right: 0;
        width: 1px;
      `}
`,p=e=>s(e,{componentName:"divider",defaultValues:{mode:"bold"}}),u=d.div.withConfig({shouldForwardProp:e=>!["cssConfig","direction"].includes(e)})`
  ${c}
`,h=e=>{const t=p(e),i=l(t);return r.createElement(v,{...i})},v=({testAttributes:e,cssConfig:t,direction:i="horizontal",...a})=>r.createElement(u,{direction:i,cssConfig:t,...e,...a});h.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Direction"},mode:{required:!1,tsType:{name:"union",raw:"'bold' | 'light' | 'onLightStatic' | 'inverted'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'light'"},{name:"literal",value:"'onLightStatic'"},{name:"literal",value:"'inverted'"}]},description:"Color mode"}}};export{h as D};
