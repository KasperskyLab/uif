import{C as E,D as w,F as z,R as t,w as D,r as c,l as v,A,H,v as R,am as P}from"./iframe-4-PRSI1I.js";import{B as U}from"./Badge-B3_Y1H2J.js";import{D as B}from"./Dropdown-BZXGqesC.js";import{I as F}from"./Indicator-D1HJCmfp.js";import{o as M}from"./Menu3-BM3aMNYq.js";const e=w(),L=E`
  display: flex;
  border-radius: ${e("radius")};
  background-color: ${e("bar.background")};
  margin-bottom: 10px;
  width: max-content;
  
  .kl6-segmented-control-button,
  .kl6-segmented-control-expander {
    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 16px;
      background-color: ${e("bar.dividerColor")};
    }
  }

  .active + .kl6-segmented-control-button,
  .active + .kl6-segmented-control-expander {
    &:before {
      display: none;
    }
  }
  
  .kl6-segmented-control-button {
    height: ${e("height")};
    background-color: transparent;
    color: ${e("button.enabled.color")};
    border-radius: ${e("radius")};
    border: none;
    cursor: pointer;
    padding: ${e("padding")};
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;

    font-family: ${e("fontFamily")};
    font-size: ${e("fontSize")};
    line-height: ${e("lineHeight")};
    font-weight: ${e("fontWeight")};
    font-style: ${e("fontStyle")};
    letter-spacing: ${e("letterSpacing")};
  
    &:first-child,
    &:focus-visible,
    &.active {
      &:before {
        display: none;
      }
    }
  
    &:hover:not(.active) {
      color: ${e("button.hover.color")};
    }
  
    &:focus,
    &:focus-visible {
      z-index: 1;
    }
  
    &:focus-visible {
      outline: 2px solid ${e("button.focus.boxShadow")};
    }
  
    &.active {
      background-color: ${e("button.active.background")};
      box-shadow: inset 0 0 0 1px ${e("button.active.border")};
    }
  }
  
  .kl6-segmented-control-expander {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    position: relative;
  }
  
  span {
    translate: none;
  }
`,j=n=>z(n,{componentName:"segmentedControl",defaultValues:{size:"medium"}}),W=H.div.withConfig({shouldForwardProp:n=>!["cssConfig"].includes(n)})`
  ${L}
`,G={small:"medium",medium:"medium",large:"large"},S=n=>{const l=j(n),o=G[n.size||"medium"];return t.createElement(C,{...l,badgeSize:o})},J=({className:n,text:l,counter:o,indicator:d,infoTooltip:i,iconBefore:u,disabled:I,onClick:a,badgeSize:p,...g})=>t.createElement("button",{className:v("kl6-segmented-control-button",n),onClick:a,...g},u,t.createElement("span",{className:"text"},l),i&&t.createElement(R,{text:i},t.createElement(P,null)),o&&t.createElement(U,{count:o.number,mode:o.mode,size:p}),d&&t.createElement(F,{mode:d})),C=({tabsData:n,contentData:l,className:o,cssConfig:d,badgeSize:i,defaultActiveTab:u,...I})=>{const a=u?n.find(r=>r.name===u):n[0],{testAttributes:p}=D(I),[g,k]=c.useState(a==null?void 0:a.name),[f,V]=c.useState(a==null?void 0:a.content),[q,x]=c.useState(a==null?void 0:a.properties),[b,K]=c.useState([]),$=({name:r,content:s,properties:y})=>{k(r),x(y),f!==s&&V(s)},m=b==null?void 0:b.map(r=>({children:r.text}));return t.createElement("div",{className:"kl6-segmented-control"},t.createElement(W,{className:v("kl6-segmented-control-bar",o),cssConfig:d,...p},n.map(({name:r,content:s,properties:y,onClick:h,...N})=>{const T=_=>{$({name:r,content:s,properties:y}),h==null||h(_)};return t.createElement(J,{key:`tab_key_${r}`,badgeSize:i,role:"tab",className:v({active:g===r}),onClick:T,name:r,content:s,...N})}),!!(m!=null&&m.length)&&t.createElement("div",{className:"kl6-segmented-control-expander"},t.createElement(B,{overlay:m||[],disabled:!1,loading:!1,trigger:["click"],placement:"bottomRight"},t.createElement(A,{icon:t.createElement(M,null)})))),t.createElement("div",null,f&&l[f](q)))};try{S.displayName="SegmentedControl",S.__docgenInfo={description:"",displayName:"SegmentedControl",props:{tabsData:{defaultValue:null,description:"Tabs Data",name:"tabsData",required:!0,type:{name:"SegmentedControlItemProps[]"}},contentData:{defaultValue:null,description:"Content Data",name:"contentData",required:!0,type:{name:"Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},defaultActiveTab:{defaultValue:null,description:"Initial segmented control item name",name:"defaultActiveTab",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{C.displayName="SegmentedControlView",C.__docgenInfo={description:"",displayName:"SegmentedControlView",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},tabsData:{defaultValue:null,description:"Tabs Data",name:"tabsData",required:!0,type:{name:"SegmentedControlItemProps[]"}},contentData:{defaultValue:null,description:"Content Data",name:"contentData",required:!0,type:{name:"Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>"}},defaultActiveTab:{defaultValue:null,description:"Initial segmented control item name",name:"defaultActiveTab",required:!1,type:{name:"string"}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"SegmentedControlCssConfig"}},testAttributes:{defaultValue:null,description:"",name:"testAttributes",required:!1,type:{name:"TestingAttributes"}},badgeSize:{defaultValue:null,description:"",name:"badgeSize",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{S,C as a};
