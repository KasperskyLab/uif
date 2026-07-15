import{z as o,a1 as f,a2 as h,C as b,D as g,F as y,w as C,R as a,A as v,H as T}from"./iframe-4-PRSI1I.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import{T as I}from"./TextReducer-JHIejSuK.js";import{B as V}from"./Badge-B3_Y1H2J.js";import{T as w}from"./index-B-OY55d_.js";const t=g(),k=b`
  &.ant-tag-hidden {
    display: none;
  }

  ${f(h.BTM3)};
  display: flex;
  align-items: center;
  height: ${t("height")};
  gap: ${o[2]}px;
  margin: 0;
  padding: ${t("padding")};
  border-radius: ${o[10]}px;
  background: ${t("enabled.background")};
  color: ${t("enabled.color")};
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
    background: ${t("hover.background")};
  }
  &:active {
    background: ${t("active.background")};
  }
  &:focus-visible {
    box-shadow: ${t("focus.boxShadow")};
    outline: none;
  }

  ${e=>e.disabled&&`
  &, &:hover, &:active, &:focus-visible {
    background: ${t("disabled.background")(e)};
    color: ${t("disabled.color")(e)};
    box-shadow: none;
  }`}
`,q=e=>y(e,{componentName:"chip",defaultValues:{size:"medium"},propsToDrill:["size"]}),x=T(w).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${k}`,r=e=>{const l=q(e),n=C(l);return a.createElement($,{...n})},$=({label:e,icon:l,counter:n,disabled:i=!1,onClose:d,testId:E,testAttributes:s,size:u,truncationWidth:c,...p})=>a.createElement(x,{closable:!0,disabled:i,onClose:i?m=>m.preventDefault():d,closeIcon:a.createElement(v,{disabled:i,size:u==="large"?"medium":"small"}),tabIndex:0,...s,...p},l,a.createElement(I,{truncationWidth:c},e),n&&a.createElement(V,{count:n,mode:"neutral"}));try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Chip size",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Chip label",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Icon before label",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},counter:{defaultValue:null,description:"Counter value",name:"counter",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},truncationWidth:{defaultValue:null,description:"The width at which the chip will be truncated",name:"truncationWidth",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Callback executed when tag is closed",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<HTMLElement, MouseEvent>) => void)"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as C};
