import{aC as p,H as r,a1 as c,a2 as m,C as f,D as y,F as g,w as v,R as l,l as h}from"./iframe-4-PRSI1I.js";import{I}from"./Indicator-D1HJCmfp.js";import{G as S}from"./Group-D8YF7Z5T.js";const i=y(),_=f`
  display: flex;
  gap: var(--spacing--gap_dependent);
  color: ${i("color")};
  ${c(m.BTR3)}
`,V=r.span`
  display: flex;
  align-items: center;
  height: ${p["BodyTextRegular/BTR3"].lineHeight};

  svg {
    color: ${i("icon")};
  }

  > span {
    translate: none;
  }
`,q=e=>g(e,{componentName:"status",defaultValues:{mode:"default"},propsToDrill:["mode"]}),T=r.span.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${_}`,t=e=>{const s=q(e),a=v(s);return l.createElement(N,{...a})},N=({icon:e,label:s,mode:a="default",cssConfig:n,testAttributes:o,className:u})=>{const d=e||a!=="default";return l.createElement(T,{cssConfig:n,className:h(u,"kl6-status"),...o},d&&l.createElement(V,{cssConfig:n},e||a!=="default"&&l.createElement(I,{mode:a})),s)};t.Group=e=>l.createElement(S,{Component:t,orientation:"vertical",...e});t.Group.displayName="StatusGroup";try{t.displayName="Status",t.__docgenInfo={description:"",displayName:"Status",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:{value:"default"},description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"default"'},{value:'"critical"'},{value:'"positive"'},{value:'"high"'},{value:'"low"'},{value:'"info"'},{value:'"new"'},{value:'"update"'},{value:'"resolved"'},{value:'"not-active"'},{value:'"inProgress"'},{value:'"inIncident"'}]}},icon:{defaultValue:null,description:"Icon - if not set indicator is used",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{t.Group.displayName="Status.Group",t.Group.__docgenInfo={description:"",displayName:"Status.Group",props:{items:{defaultValue:null,description:"Array of items",name:"items",required:!0,type:{name:"StatusProps[] | ReactElement<StatusProps, string | JSXElementConstructor<any>>[]"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"AlignItems"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as S};
