import{k as o,ai as f,aE as h,C as b,l as g,j as y,u as C,R as t,A as v,H as T}from"./iframe-DedYZBTA.js";import"./imaskDateOptionsGenerator-CuWnnqgb.js";import{T as k}from"./TextReducer-DfctGdJH.js";import{T as w}from"./index-D9mMt9l0.js";import{B as x}from"./Badge-MGlXnKsn.js";const a=g(),V=b`
  &.ant-tag-hidden {
    display: none;
  }

  ${f(h.BTM3)};
  display: flex;
  align-items: center;
  height: ${a("height")};
  gap: ${o[2]}px;
  margin: 0;
  padding: ${a("padding")};
  border-radius: ${o[10]}px;
  background: ${a("enabled.background")};
  color: ${a("enabled.color")};
  cursor: default;
  border: none;
  outline: none;
  max-width: 100%;
  
  .ant-tag-close-icon {
    margin: 0;
    display: flex;
    align-items: center;
  }

  &:hover {
    background: ${a("hover.background")};
  }
  &:active {
    background: ${a("active.background")};
  }
  &:focus-visible {
    box-shadow: ${a("focus.boxShadow")};
    outline: none;
  }

  ${e=>e.disabled&&`
  &, &:hover, &:active, &:focus-visible {
    background: ${a("disabled.background")(e)};
    color: ${a("disabled.color")(e)};
    box-shadow: none;
  }`}
`,$=e=>y(e,{componentName:"chip",defaultValues:{size:"medium"},propsToDrill:["size"]}),q=T(w).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${V}`,r=e=>{const l=$(e),n=C(l);return t.createElement(E,{...n})},E=({label:e,icon:l,counter:n,disabled:i=!1,onClose:s,testId:I,testAttributes:d,size:u,truncationWidth:c,...m})=>t.createElement(q,{closable:!0,disabled:i,onClose:i?p=>p.preventDefault():s,closeIcon:t.createElement(v,{disabled:i,size:u==="large"?"medium":"small"}),tabIndex:0,...d,...m},l,t.createElement(k,{truncationWidth:c},e),n&&t.createElement(x,{count:n,mode:"neutral"}));try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Chip size",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Chip label",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Icon before label",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},counter:{defaultValue:null,description:"Counter value",name:"counter",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},truncationWidth:{defaultValue:null,description:"The width at which the chip will be truncated",name:"truncationWidth",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Callback executed when tag is closed",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<HTMLElement, MouseEvent>) => void)"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as C};
