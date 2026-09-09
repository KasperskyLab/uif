import{C as w,l as T,j as z,R as t,u as D,r as c,d as C,A,H,I as R,ap as P}from"./iframe-DedYZBTA.js";import{D as B}from"./Dropdown-C8Jtav0F.js";import{o as M}from"./Menu3-CAgzKlIF.js";import{B as F}from"./Badge-MGlXnKsn.js";import{I as L}from"./Indicator-Bx9eTEZ-.js";const e=T(),j=w`
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
`,U=n=>z(n,{componentName:"segmentedControl",defaultValues:{size:"medium"}}),W=H.div.withConfig({shouldForwardProp:n=>!["cssConfig"].includes(n)})`
  ${j}
`,G={small:"medium",medium:"medium",large:"large"},k=n=>{const l=U(n),o=G[n.size||"medium"];return t.createElement(v,{...l,badgeSize:o})},J=({className:n,text:l,counter:o,indicator:i,infoTooltip:d,iconBefore:u,disabled:S,onClick:a,badgeSize:p,...g})=>t.createElement("button",{className:C("kl6-segmented-control-button",n),onClick:a,...g},u,t.createElement("span",{className:"text"},l),d&&t.createElement(R,{text:d},t.createElement(P,null)),o&&t.createElement(F,{count:o.number,mode:o.mode,size:p}),i&&t.createElement(L,{mode:i})),v=({tabsData:n,contentData:l,className:o,cssConfig:i,badgeSize:d,defaultActiveTab:u,...S})=>{const a=u?n.find(r=>r.name===u):n[0],{testAttributes:p}=D(S),[g,V]=c.useState(a==null?void 0:a.name),[f,x]=c.useState(a==null?void 0:a.content),[I,q]=c.useState(a==null?void 0:a.properties),[b,K]=c.useState([]),$=({name:r,content:s,properties:y})=>{V(r),q(y),f!==s&&x(s)},m=b==null?void 0:b.map(r=>({children:r.text}));return t.createElement("div",{className:"kl6-segmented-control"},t.createElement(W,{className:C("kl6-segmented-control-bar",o),cssConfig:i,...p},n.map(({name:r,content:s,properties:y,onClick:h,...N})=>{const _=E=>{$({name:r,content:s,properties:y}),h==null||h(E)};return t.createElement(J,{key:`tab_key_${r}`,badgeSize:d,role:"tab",className:C({active:g===r}),onClick:_,name:r,content:s,...N})}),!!(m!=null&&m.length)&&t.createElement("div",{className:"kl6-segmented-control-expander"},t.createElement(B,{overlay:m||[],disabled:!1,loading:!1,trigger:["click"],placement:"bottomRight"},t.createElement(A,{icon:t.createElement(M,null)})))),t.createElement("div",null,f&&l[f](I)))};try{k.displayName="SegmentedControl",k.__docgenInfo={description:"",displayName:"SegmentedControl",props:{tabsData:{defaultValue:null,description:"Tabs Data",name:"tabsData",required:!0,type:{name:"SegmentedControlItemProps[]"}},contentData:{defaultValue:null,description:"Content Data",name:"contentData",required:!0,type:{name:"Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},defaultActiveTab:{defaultValue:null,description:"Initial segmented control item name",name:"defaultActiveTab",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{v.displayName="SegmentedControlView",v.__docgenInfo={description:"",displayName:"SegmentedControlView",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},tabsData:{defaultValue:null,description:"Tabs Data",name:"tabsData",required:!0,type:{name:"SegmentedControlItemProps[]"}},contentData:{defaultValue:null,description:"Content Data",name:"contentData",required:!0,type:{name:"Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>"}},defaultActiveTab:{defaultValue:null,description:"Initial segmented control item name",name:"defaultActiveTab",required:!1,type:{name:"string"}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"SegmentedControlCssConfig"}},testAttributes:{defaultValue:null,description:"",name:"testAttributes",required:!1,type:{name:"TestingAttributes"}},badgeSize:{defaultValue:null,description:"",name:"badgeSize",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{k as S,v as a};
