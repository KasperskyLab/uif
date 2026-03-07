import{a2 as p,a1 as h,ak as i,aw as g,a0 as b,w as f,u as T,R as a,A as v,H as C}from"./iframe-zz6a49H8.js";import"./imaskDateOptionsGenerator-wBwCAmst.js";import{T as w}from"./TextReducer-CXi1K97e.js";import{B as E}from"./Badge-DMO-MXiW.js";import{T as x}from"./index-C1mxiEMc.js";const t=h(),y=b`
  &.ant-tag-hidden {
    display: none;
  }

  ${p(g.BTM3)};
  display: flex;
  align-items: center;
  height: ${t("height")};
  gap: ${i[2]}px;
  margin: 0;
  padding: ${t("padding")};
  border-radius: ${i[10]}px;
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
`,$=e=>f(e,{componentName:"chip",defaultValues:{size:"medium"},propsToDrill:["size"]}),k=C(x).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${y}`,M=e=>{const o=$(e),n=T(o);return a.createElement(R,{...n})},R=({label:e,icon:o,counter:n,disabled:s=!1,onClose:r,testId:q,testAttributes:l,size:d,truncationWidth:c,...u})=>a.createElement(k,{closable:!0,disabled:s,onClose:s?m=>m.preventDefault():r,closeIcon:a.createElement(v,{disabled:s,size:d==="large"?"medium":"small"}),tabIndex:0,...l,...u},o,a.createElement(w,{truncationWidth:c},e),n&&a.createElement(E,{count:n,mode:"neutral"}));M.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Chip size"},label:{required:!1,tsType:{name:"ReactNode"},description:"Chip label"},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Icon before label"},counter:{required:!1,tsType:{name:"number"},description:"Counter value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},truncationWidth:{required:!1,tsType:{name:"intersection['truncationWidth']",raw:"TextReducerProps['truncationWidth']"},description:"The width at which the chip will be truncated"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"},{name:"globalThis.MouseEvent"}],raw:"MouseEvent<HTMLElement, globalThis.MouseEvent>"},name:"e"}],return:{name:"void"}}},description:"Callback executed when tag is closed"}}};export{M as C};
