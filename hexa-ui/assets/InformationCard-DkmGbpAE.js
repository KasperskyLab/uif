import{ak as o,a1 as F,al as H,a0 as L,H as r,a2 as D,aw as M,w as A,u as _,R as n,r as m}from"./iframe-DlY6n6Um.js";const t=F(),l=e=>!["type","cssConfig"].includes(e),O=L`
  display: flex;
  flex-direction: ${e=>e.type==="horizontal"?"row":"column"};
  align-items: ${e=>e.type==="center"?"center":"start"};
  gap: ${o[8]}px;
  
  padding: ${t("padding")};
  background: ${t("enabled.background")};
  color: ${t("enabled.color")};
  border: 1px solid ${t("enabled.border")};
  border-radius: ${H[4]}px;
  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  width: ${({width:e})=>typeof e=="string"?e:`${e}px`};

  ${e=>e.$interactive&&`
  cursor: pointer;
  &:hover {
    background: ${t("hover.background")(e)};
  }
  &:active {
    background: ${t("pressed.background")(e)};
  }
  &:focus-visible {
    box-shadow: ${t("focus.boxShadow")(e)};
  }`}

  ${e=>e.disabled&&`
  &, &:hover, &:active {
    cursor: not-allowed;
    background: ${t("disabled.background")(e)};
    color: ${t("disabled.color")(e)};
    border-color: ${t("disabled.border")(e)};
  }`}
`,U=r.div.withConfig({shouldForwardProp:l})`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${e=>e.type==="center"&&"align-items: center"};
  gap: ${o[8]}px;
`,V=r.div.withConfig({shouldForwardProp:l})`
  display: flex;
  gap: ${o[4]}px;
  flex-direction: column;
  ${e=>e.type==="center"&&"align-items: center"};
  width: 100%;
`,j=r.div.withConfig({shouldForwardProp:l})`
  display: flex;
  gap: ${o[4]}px;
  flex-direction: row;
  justify-content: ${e=>e.type==="center"?"center":"space-between"};
  width: 100%;
  font-family: ${t("fontFamily")};
  font-size: ${t("fontSize")};
  font-weight: ${t("fontWeight")};
  font-style: ${t("fontStyle")};
  line-height: ${t("lineHeight")};
  letter-spacing: ${t("letterSpacing")};
`,B=r.div`
  height: ${D(M.H5).lineHeight};
  display: flex;
  align-items: center;
`,W=r.div.withConfig({shouldForwardProp:l})`
  color: ${e=>t(e.disabled?"disabled.color":"enabled.descriptionColor")(e)};
  text-align: ${e=>e.type==="center"?"center":"start"}
`,G=r.div`
  margin-top: auto;
`,J=e=>A(e,{componentName:"informationCard",defaultValues:{size:"medium"}}),K=r.div.withConfig({shouldForwardProp:e=>!["type","cssConfig"].includes(e)})`${O}`,Q=e=>{const a=J(e),s=_(a);return n.createElement(X,{...s})},X=({type:e="vertical",selected:a=!1,disabled:s=!1,interactive:u=!1,width:$="auto",style:v,leftSide:p,title:f,description:g,rightCorner:C,children:h,footer:y,leftSideClassName:w,rightCornerClassName:T,titleClassName:N,descriptionClassName:x,contentClassName:q,footerClassName:S,cssConfig:i,testAttributes:R,...E})=>{const[d,P]=m.useState(a);m.useEffect(()=>{P(a)},[a]);const c=m.useMemo(()=>{const{selected:Y,unselected:Z,...b}=i;return d?{...b,...i.selected}:{...b,...i.unselected}},[i,d]),k=()=>p?n.createElement("div",{className:w},p):null,I=()=>C&&n.createElement(B,{className:T},C),z=()=>n.createElement(U,{type:e},n.createElement(V,{type:e},f&&n.createElement(j,{type:e,cssConfig:c,className:N},f,I()),g&&n.createElement(W,{type:e,cssConfig:c,className:x,disabled:s},g)),h&&n.createElement("div",{className:q},h),y&&n.createElement(G,{className:S},y));return n.createElement(K,{type:e,style:v,selected:d,disabled:s,$interactive:u,width:$,cssConfig:c,tabIndex:u?0:void 0,...R,...E},k(),z())};Q.__docgenInfo={description:"",methods:[],displayName:"InformationCard",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Card size"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Card width"},type:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal' | 'center'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'center'"}]},description:"Card type"},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},interactive:{required:!1,tsType:{name:"boolean"},description:"If interactive"},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"On click handler"},value:{required:!1,tsType:{name:"ReactNode"},description:"Card value"},leftSide:{required:!1,tsType:{name:"ReactNode"},description:"Left icon (with or without badge)"},title:{required:!1,tsType:{name:"ReactNode"},description:"Card title"},description:{required:!1,tsType:{name:"string"},description:"Card description"},rightCorner:{required:!1,tsType:{name:"ReactNode"},description:"Right corner control"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Controls"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content"},className:{required:!1,tsType:{name:"string"},description:"Component className"},leftSideClassName:{required:!1,tsType:{name:"string"},description:"Left icon className"},titleClassName:{required:!1,tsType:{name:"string"},description:"Title className"},descriptionClassName:{required:!1,tsType:{name:"string"},description:"Description className"},rightCornerClassName:{required:!1,tsType:{name:"string"},description:"Right corner className"},contentClassName:{required:!1,tsType:{name:"string"},description:"Content className"},footerClassName:{required:!1,tsType:{name:"string"},description:"Footer className"}}};export{Q as I};
