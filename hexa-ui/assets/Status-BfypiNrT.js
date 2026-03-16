import{ax as c,a1 as m,H as n,a2 as d,aw as f,a0 as y,w as g,u as h,R as s,j as T}from"./iframe-DlY6n6Um.js";import{I as S}from"./Indicator-CQY-Y-dA.js";import{G as R}from"./Group-C50_emtp.js";const l=m(),C=y`
  display: flex;
  gap: var(--spacing--gap_dependent);
  color: ${l("color")};
  ${d(f.BTR3)}
`,w=n.span`
  display: flex;
  align-items: center;
  height: ${c["BodyTextRegular/BTR3"].lineHeight};

  svg {
    color: ${l("icon")};
  }

  > span {
    translate: none;
  }
`,x=e=>g(e,{componentName:"status",defaultValues:{mode:"default"},propsToDrill:["mode"]}),E=n.span.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${C}`,a=e=>{const o=x(e),t=h(o);return s.createElement(N,{...t})},N=({icon:e,label:o,mode:t="default",cssConfig:r,testAttributes:i,className:p})=>{const u=e||t!=="default";return s.createElement(E,{cssConfig:r,className:T(p,"kl6-status"),...i},u&&s.createElement(w,{cssConfig:r},e||t!=="default"&&s.createElement(S,{mode:t})),o)};a.Group=e=>s.createElement(R,{Component:a,orientation:"vertical",...e});a.Group.displayName="StatusGroup";a.__docgenInfo={description:"",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null}],displayName:"Status",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"StatusModes[number]",raw:"typeof StatusModes[number]"},description:"Color mode"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon - if not set indicator is used"},label:{required:!1,tsType:{name:"string"},description:"Label"},className:{required:!1,tsType:{name:"string"},description:"Custom class"}}};export{a as S};
