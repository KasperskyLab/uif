import{k as a,H as n,T as p,u as T,r as e,L as k}from"./iframe-DedYZBTA.js";import{B as x}from"./Button-Dn3YNhT7.js";import{s as b}from"./shouldForwardProp-Cdy-RLhZ.js";const E=n.div.withConfig({shouldForwardProp:b})`
  margin-bottom: ${a[16]}px;
  display: flex;
  flex-direction: row;
  gap: ${a[8]}px;
  max-width: 710px;
`,L=n.div`
  flex: 0 0 calc(235px - ${a[8]}px);
`,s=n(p)`
  display: block;
  margin-top: 2px;
  
  span + & {
    margin-top: -1px;
  }
`;var r=(t=>(t.Link="link",t.Button="button",t))(r||{});const u=({actionText:t,description:l,onClick:i,title:o,type:c=r.Link,disabled:d,...m})=>{const f=c===r.Link,{testAttributes:y,...g}=T(m);return e.createElement(E,{...g,...y},f?e.createElement("div",null,e.createElement(k,{disabled:d,onClick:i},o),e.createElement(s,{type:"BTR4",themedColor:"secondary-solid"},l)):e.createElement(e.Fragment,null,e.createElement(L,null,e.createElement(p,{type:"BTM3",themedColor:"secondary2-solid"},o)),e.createElement("div",null,e.createElement(x,{mode:"secondary",onClick:i,disabled:d},t),e.createElement(s,{type:"BTR4",themedColor:"secondary-solid"},l))))};try{u.displayName="FormTrigger",u.__docgenInfo={description:"",displayName:"FormTrigger",props:{testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},actionText:{defaultValue:null,description:"Button text",name:"actionText",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description",name:"description",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Called after clicking",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},title:{defaultValue:null,description:"Title",name:"title",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"FormTriggerType.Link"},description:"Link or Button type",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"button"'}]}},role:{defaultValue:null,description:"HTML role",name:"role",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable component",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{u as F,r as a};
