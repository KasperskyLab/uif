import{C as u,D as y,r as s,l as p,F as g,w as h,R as l,H as m}from"./iframe-4-PRSI1I.js";import{S as v}from"./index-CJ8XlVHE.js";const a=y(),I=u`
  &.ant-spinner-centered {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  line-height: 0;

  & > svg {
    height: ${a("height")};
    width: ${a("width")};
  }

  .ant-spin-text {
    color: ${a("textColor")};
    font-family: ${a("fontFamily")};
    font-weight: ${a("fontWeight")};
    font-size: ${a("fontSize")};
    font-style: ${a("fontStyle")};
    line-height: ${a("lineHeight")};
    letter-spacing: ${a("letterSpacing")};
    padding-top: ${a("gap")};
  }
`,V=u`
  & path {
    stroke: ${({color:e})=>e}
  }
`,i=({className:e})=>s.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p(["anticon-spin",e])},s.createElement("path",{d:"M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24",strokeWidth:"5",strokeLinecap:"round"}));try{i.displayName="LoaderIcon",i.__docgenInfo={description:"",displayName:"LoaderIcon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const r=e=>g(e,{componentName:"loader",defaultValues:{mode:"default",size:"small"}});try{r.displayName="useThemedLoader",r.__docgenInfo={description:"",displayName:"useThemedLoader",props:{centered:{defaultValue:null,description:"Is centered",name:"centered",required:!1,type:{name:"boolean"}},delay:{defaultValue:null,description:"Specifies a delay in milliseconds for loading state (prevent flush)",name:"delay",required:!1,type:{name:"number"}},spinning:{defaultValue:null,description:"Whether Spin is visible",name:"spinning",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Spinner className",name:"className",required:!1,type:{name:"string"}},tip:{defaultValue:null,description:"Customize description content when Spin has children",name:"tip",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'},{value:'"extraLarge"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}const q=m(v).withConfig({shouldForwardProp:e=>!["centered","cssConfig"].includes(e)})`
  ${I}
`,_=m(i)`
  ${V}
`,o=e=>{const t=r(e),n=h(t);return l.createElement(b,{...n})},b=({spinning:e=!0,cssConfig:t,className:n,centered:d,testAttributes:c,...f})=>l.createElement(q,{className:p(n,{"ant-spinner-centered":d}),centered:d,indicator:l.createElement(_,{color:t.color}),spinning:e,cssConfig:t,...c,...f});try{o.displayName="Loader",o.__docgenInfo={description:"",displayName:"Loader",props:{centered:{defaultValue:null,description:"Is centered",name:"centered",required:!1,type:{name:"boolean"}},delay:{defaultValue:null,description:"Specifies a delay in milliseconds for loading state (prevent flush)",name:"delay",required:!1,type:{name:"number"}},spinning:{defaultValue:{value:"true"},description:"Whether Spin is visible",name:"spinning",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Spinner className",name:"className",required:!1,type:{name:"string"}},tip:{defaultValue:null,description:"Customize description content when Spin has children",name:"tip",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'},{value:'"extraLarge"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{o as L};
