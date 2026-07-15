import{C as i,D as l,F as o,w as s,R as n,H as u}from"./iframe-4-PRSI1I.js";const p=l(),m=i`
  padding: 0;
  display: flex;
  background: ${p("color")};
  
  ${({direction:e})=>e==="horizontal"?i`
        margin-top: 0;
        margin-bottom: 0;
        width: 100%;
        height: 1px;
      `:i`
        margin-left: 0;
        margin-right: 0;
        width: 1px;
      `}
`,c=e=>o(e,{componentName:"divider",defaultValues:{mode:"bold"}}),f=u.div.withConfig({shouldForwardProp:e=>!["cssConfig","direction"].includes(e)})`
  ${m}
`,d=e=>{const t=c(e),a=s(t);return n.createElement(g,{...a})},g=({testAttributes:e,cssConfig:t,direction:a="horizontal",...r})=>n.createElement(f,{direction:a,cssConfig:t,...e,...r});try{d.displayName="Divider",d.__docgenInfo={description:"",displayName:"Divider",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"inverted"'},{value:'"bold"'},{value:'"onLightStatic"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{d as D};
