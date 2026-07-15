import{C as v,r as s,w as L,R as e,l as _,ah as r,A as N,H as S,ai as A}from"./iframe-4-PRSI1I.js";import{u as d}from"./useLocalization-45JHytlv.js";import{u as w}from"./useResizeObserver-8Hk-mg1Z.js";import{t as R}from"./ArrowUp1-C0N5v1OU.js";const H=v`
  .hexa-ui-expand-container {
    display: flex;
    row-gap: 0;
  }

  .hexa-ui-expand-button {
    margin-top: 4px;
  }

  &.hexa-ui-expand-collapsed .hexa-ui-expand-container {
    overflow: hidden;
  }
`,k=S("div")`
  ${H}
`,z=64,p=({collapsedHeight:t=z,children:u,textToExpand:c=d("expand.toExpand"),textToCollapse:m=d("expand.toCollapse"),className:x,testId:f,klId:y,componentId:E,componentType:g})=>{const[a,h]=s.useState(!0),{testAttributes:l}=L({testId:f,klId:y,componentId:E,componentType:g}),b=a?{maxHeight:`${t}px`}:{},I=a?c:m,T=a?e.createElement(A,null):e.createElement(R,null),i=s.useRef(null),[C,V]=s.useState(!1),o=w(i,150);return s.useLayoutEffect(()=>{const n=i.current;if(!n||!o)return;const q=n.scrollHeight>t;V(q)},[t,o]),e.createElement(k,{className:_("hexa-ui-expand",{"hexa-ui-expand-collapsed":a},x),...l},e.createElement("div",{className:"hexa-ui-expand-container",style:b,...r("body",l),ref:i},u),C&&e.createElement(N,{mode:"ghost",size:"large",elementAfter:T,interactive:!0,noIcon:!0,...r("action-button",l),onClick:()=>h(n=>!n),className:"hexa-ui-expand-button"},I))};try{p.displayName="Expand",p.__docgenInfo={description:"",displayName:"Expand",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textToExpand:{defaultValue:{value:"useLocalization('expand.toExpand')"},description:"",name:"textToExpand",required:!1,type:{name:"string"}},textToCollapse:{defaultValue:{value:"useLocalization('expand.toCollapse')"},description:"",name:"textToCollapse",required:!1,type:{name:"string"}},collapsedHeight:{defaultValue:{value:"64"},description:"",name:"collapsedHeight",required:!1,type:{name:"number"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{p as E};
