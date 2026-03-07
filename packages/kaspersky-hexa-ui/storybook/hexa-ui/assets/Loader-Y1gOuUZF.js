import{a1 as h,a0 as r,r as a,j as l,w as u,u as f,R as o,H as d}from"./iframe-zz6a49H8.js";import{S as g}from"./index-BNCbYTB0.js";const t=h(),y=r`
  &.ant-spinner-centered {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  line-height: 0;

  & > svg {
    height: ${t("height")};
    width: ${t("width")};
  }

  .ant-spin-text {
    color: ${t("textColor")};
    font-family: ${t("fontFamily")};
    font-weight: ${t("fontWeight")};
    font-size: ${t("fontSize")};
    font-style: ${t("fontStyle")};
    line-height: ${t("lineHeight")};
    letter-spacing: ${t("letterSpacing")};
    padding-top: ${t("gap")};
  }
`,w=r`
  & path {
    stroke: ${({color:e})=>e}
  }
`,c=({className:e})=>a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:l(["anticon-spin",e])},a.createElement("path",{d:"M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24",strokeWidth:"5",strokeLinecap:"round"}));c.__docgenInfo={description:"",methods:[],displayName:"LoaderIcon",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const S=e=>u(e,{componentName:"loader",defaultValues:{mode:"default",size:"small"}}),$=d(g).withConfig({shouldForwardProp:e=>!["centered","cssConfig"].includes(e)})`
  ${y}
`,T=d(c)`
  ${w}
`,C=e=>{const n=S(e),s=f(n);return o.createElement(v,{...s})},v=({spinning:e=!0,cssConfig:n,className:s,centered:i,testAttributes:p,...m})=>o.createElement($,{className:l(s,{"ant-spinner-centered":i}),centered:i,indicator:o.createElement(T,{color:n.color}),spinning:e,cssConfig:n,...p,...m});C.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{centered:{required:!1,tsType:{name:"boolean"},description:"Is centered"},delay:{required:!1,tsType:{name:"number"},description:"Specifies a delay in milliseconds for loading state (prevent flush)"},spinning:{required:!1,tsType:{name:"boolean"},description:"Whether Spin is visible"},className:{required:!1,tsType:{name:"string"},description:"Spinner className"},tip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Customize description content when Spin has children"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:"Color mode"},size:{required:!1,tsType:{name:"union",raw:"Size | `${Size}`",elements:[{name:"Size"},{name:"literal",value:"`${Size}`"}]},description:"Size"}}};export{C as L};
