import{z as s,B as P,C as H,H as n,D as _,a1 as L,a2 as D,F as M,w as U,R as a,r as u}from"./iframe-4-PRSI1I.js";const t=_(),o=e=>!["type","cssConfig"].includes(e),A=H`
  display: flex;
  flex-direction: ${e=>e.type==="horizontal"?"row":"column"};
  align-items: ${e=>e.type==="center"?"center":"start"};
  gap: ${s[8]}px;
  
  padding: ${t("padding")};
  background: ${t("enabled.background")};
  color: ${t("enabled.color")};
  border: 1px solid ${t("enabled.border")};
  border-radius: ${P[4]}px;
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
`,B=n.div.withConfig({shouldForwardProp:o})`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${e=>e.type==="center"&&"align-items: center"};
  gap: ${s[8]}px;
`,O=n.div.withConfig({shouldForwardProp:o})`
  display: flex;
  gap: ${s[4]}px;
  flex-direction: column;
  ${e=>e.type==="center"&&"align-items: center"};
  width: 100%;
`,j=n.div.withConfig({shouldForwardProp:o})`
  display: flex;
  gap: ${s[4]}px;
  flex-direction: row;
  justify-content: ${e=>e.type==="center"?"center":"space-between"};
  width: 100%;
  font-family: ${t("fontFamily")};
  font-size: ${t("fontSize")};
  font-weight: ${t("fontWeight")};
  font-style: ${t("fontStyle")};
  line-height: ${t("lineHeight")};
  letter-spacing: ${t("letterSpacing")};
`,W=n.div`
  height: ${L(D.H5).lineHeight};
  display: flex;
  align-items: center;
`,G=n.div.withConfig({shouldForwardProp:o})`
  color: ${e=>t(e.disabled?"disabled.color":"enabled.descriptionColor")(e)};
  text-align: ${e=>e.type==="center"?"center":"start"}
`,J=n.div`
  margin-top: auto;
`,K=e=>M(e,{componentName:"informationCard",defaultValues:{size:"medium"}}),Q=n.div.withConfig({shouldForwardProp:e=>!["type","cssConfig"].includes(e)})`${A}`,v=e=>{const l=K(e),r=U(l);return a.createElement(X,{...r})},X=({type:e="vertical",selected:l=!1,disabled:r=!1,interactive:m=!1,width:N="auto",style:$,leftSide:f,title:p,description:g,rightCorner:C,children:y,footer:h,leftSideClassName:w,rightCornerClassName:V,titleClassName:q,descriptionClassName:x,contentClassName:I,footerClassName:S,cssConfig:i,testAttributes:k,...E})=>{const[d,R]=u.useState(l);u.useEffect(()=>{R(l)},[l]);const c=u.useMemo(()=>{const{selected:Y,unselected:Z,...b}=i;return d?{...b,...i.selected}:{...b,...i.unselected}},[i,d]),T=()=>f?a.createElement("div",{className:w},f):null,z=()=>C&&a.createElement(W,{className:V},C),F=()=>a.createElement(B,{type:e},a.createElement(O,{type:e},p&&a.createElement(j,{type:e,cssConfig:c,className:q},p,z()),g&&a.createElement(G,{type:e,cssConfig:c,className:x,disabled:r},g)),y&&a.createElement("div",{className:I},y),h&&a.createElement(J,{className:S},h));return a.createElement(Q,{type:e,style:$,selected:d,disabled:r,$interactive:m,width:N,cssConfig:c,tabIndex:m?0:void 0,...k,...E},T(),F())};try{v.displayName="InformationCard",v.__docgenInfo={description:"",displayName:"InformationCard",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Card size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:{value:"auto"},description:"Card width",name:"width",required:!1,type:{name:"string | number"}},type:{defaultValue:{value:"vertical"},description:"Card type",name:"type",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"center"'}]}},selected:{defaultValue:{value:"false"},description:"Selected state",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"If interactive",name:"interactive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"On click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},value:{defaultValue:null,description:"Card value",name:"value",required:!1,type:{name:"ReactNode"}},leftSide:{defaultValue:null,description:"Left icon (with or without badge)",name:"leftSide",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Card title",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Card description",name:"description",required:!1,type:{name:"string"}},rightCorner:{defaultValue:null,description:"Right corner control",name:"rightCorner",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Controls",name:"footer",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Custom content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Component className",name:"className",required:!1,type:{name:"string"}},leftSideClassName:{defaultValue:null,description:"Left icon className",name:"leftSideClassName",required:!1,type:{name:"string"}},titleClassName:{defaultValue:null,description:"Title className",name:"titleClassName",required:!1,type:{name:"string"}},descriptionClassName:{defaultValue:null,description:"Description className",name:"descriptionClassName",required:!1,type:{name:"string"}},rightCornerClassName:{defaultValue:null,description:"Right corner className",name:"rightCornerClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Content className",name:"contentClassName",required:!1,type:{name:"string"}},footerClassName:{defaultValue:null,description:"Footer className",name:"footerClassName",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{v as I};
