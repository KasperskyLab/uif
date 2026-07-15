import{z as a,H as r,T as u,w as T,r as e,L as x}from"./iframe-4-PRSI1I.js";import{B as k}from"./Button-D2E54Ulj.js";import{s as b}from"./shouldForwardProp-Cdy-RLhZ.js";const E=r.div.withConfig({shouldForwardProp:b})`
  margin-bottom: ${a[16]}px;
  display: flex;
  flex-direction: row;
  gap: ${a[8]}px;
  max-width: 710px;
`,q=r.div`
  flex: 0 0 calc(235px - ${a[8]}px);
`,s=r(u)`
  display: block;
  margin-top: 2px;
  
  span + & {
    margin-top: -1px;
  }
`;var n=(t=>(t.Link="link",t.Button="button",t))(n||{});const p=({actionText:t,description:l,onClick:i,title:d,type:c=n.Link,disabled:o,...m})=>{const f=c===n.Link,{testAttributes:y,...g}=T(m);return e.createElement(E,{...g,...y},f?e.createElement("div",null,e.createElement(x,{disabled:o,onClick:i},d),e.createElement(s,{type:"BTR4",themedColor:"secondary-solid"},l)):e.createElement(e.Fragment,null,e.createElement(q,null,e.createElement(u,{type:"BTM3",themedColor:"secondary2-solid"},d)),e.createElement("div",null,e.createElement(k,{mode:"secondary",onClick:i,disabled:o},t),e.createElement(s,{type:"BTR4",themedColor:"secondary-solid"},l))))};try{p.displayName="FormTrigger",p.__docgenInfo={description:"",displayName:"FormTrigger",props:{testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},actionText:{defaultValue:null,description:"Button text",name:"actionText",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description",name:"description",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Called after clicking",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},title:{defaultValue:null,description:"Title",name:"title",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"FormTriggerType.Link"},description:"Link or Button type",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"button"'}]}},role:{defaultValue:null,description:"HTML role",name:"role",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable component",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{p as F,n as a};
