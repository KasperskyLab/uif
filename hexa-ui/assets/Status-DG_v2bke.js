import{aG as p,H as r,ai as c,aE as m,C as f,l as y,j as g,u as v,R as l,d as h}from"./iframe-DedYZBTA.js";import{G as S}from"./Group-3Po5iaS9.js";import{I as _}from"./Indicator-Bx9eTEZ-.js";const i=y(),V=f`
  display: flex;
  gap: var(--spacing--gap_dependent);
  color: ${i("color")};
  ${c(m.BTR3)}
`,I=r.span`
  display: flex;
  align-items: center;
  height: ${p["BodyTextRegular/BTR3"].lineHeight};

  svg {
    color: ${i("icon")};
  }

  > span {
    translate: none;
  }
`,q=e=>g(e,{componentName:"status",defaultValues:{mode:"default"},propsToDrill:["mode"]}),N=r.span.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${V}`,t=e=>{const s=q(e),a=v(s);return l.createElement(T,{...a})},T=({icon:e,label:s,mode:a="default",cssConfig:n,testAttributes:u,className:o})=>{const d=e||a!=="default";return l.createElement(N,{cssConfig:n,className:h(o,"kl6-status"),...u},d&&l.createElement(I,{cssConfig:n},e||a!=="default"&&l.createElement(_,{mode:a})),s)};t.Group=e=>l.createElement(S,{Component:t,orientation:"vertical",...e});t.Group.displayName="StatusGroup";try{t.displayName="Status",t.__docgenInfo={description:"",displayName:"Status",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:{value:"default"},description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"info"'},{value:'"new"'},{value:'"update"'},{value:'"resolved"'},{value:'"positive"'},{value:'"low"'},{value:'"high"'},{value:'"critical"'},{value:'"default"'},{value:'"not-active"'},{value:'"inProgress"'},{value:'"inIncident"'}]}},icon:{defaultValue:null,description:"Icon - if not set indicator is used",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{t.Group.displayName="Status.Group",t.Group.__docgenInfo={description:"",displayName:"Status.Group",props:{items:{defaultValue:null,description:"Array of items",name:"items",required:!0,type:{name:"StatusProps[] | ReactElement<StatusProps, string | JSXElementConstructor<any>>[]"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"AlignItems"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as S};
