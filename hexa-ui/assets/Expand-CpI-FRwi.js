import{a0 as S,r as n,u as L,R as e,j as N,af as l,A,H as q,ag as z}from"./iframe-DlY6n6Um.js";import{u as c}from"./useLocalization-DgpIUcge.js";import{u as I}from"./useResizeObserver-CIT607-3.js";import{t as V}from"./ArrowUp1-BNZdUcIS.js";const _=S`
  .hexa-ui-expand-container {
    line-height: 0px
  }

  .hexa-ui-expand-button {
    margin-top: 4px;
  }

  &.hexa-ui-expand-collapsed .hexa-ui-expand-container {
    overflow: hidden;
  }
`,w=q("div")`
  ${_}
`,B=64,H=({collapsedHeight:s=B,children:u,textToExpand:d=c("expand.toExpand"),textToCollapse:p=c("expand.toCollapse"),className:x,testId:m,klId:f,componentId:E,componentType:h})=>{const[t,g]=n.useState(!0),{testAttributes:o}=L({testId:m,klId:f,componentId:E,componentType:h}),T=t?{maxHeight:`${s}px`}:{},b=t?d:p,v=t?e.createElement(z,null):e.createElement(V,null),i=n.useRef(null),[y,C]=n.useState(!1),r=I(i,150);return n.useLayoutEffect(()=>{const a=i.current;if(!a||!r)return;const R=a.scrollHeight>s;C(R)},[s,r]),e.createElement(w,{className:N("hexa-ui-expand",{"hexa-ui-expand-collapsed":t},x),...o},e.createElement("div",{className:"hexa-ui-expand-container",style:T,...l("body",o),ref:i},u),y&&e.createElement(A,{mode:"ghost",size:"large",elementAfter:v,interactive:!0,noIcon:!0,...l("action-button",o),onClick:()=>g(a=>!a),className:"hexa-ui-expand-button"},b))};H.__docgenInfo={description:"",methods:[],displayName:"Expand",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},textToExpand:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"useLocalization('expand.toExpand')",computed:!0}},textToCollapse:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"useLocalization('expand.toCollapse')",computed:!0}},collapsedHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"64",computed:!1}}}};export{H as E};
