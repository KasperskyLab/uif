import{R as e,b as R,C as L,r as s,u as N,d as _,aD as m,A,H as S,Y as V}from"./iframe-DedYZBTA.js";import{u as q}from"./TextReducer-DfctGdJH.js";import{u as k}from"./useTranslation-od-Kmf1k.js";const H=e.forwardRef((t,a)=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:a,...t},e.createElement("path",{fill:R(t.color)||t.color||"currentColor",fillRule:"evenodd",d:"M3.3223 10.6369a.65.65 0 0 0 .919-.0131L7.995 6.7612l3.7641 3.8632a.65.65 0 1 0 .9311-.9072L8.4599 5.3756a.65.65 0 0 0-.9316.0006L3.309 9.7178a.65.65 0 0 0 .0131.9191",clipRule:"evenodd"}))),x=e.memo(e.forwardRef((t,a)=>{const{klId:r,testId:o,...i}=t;return e.createElement(H,{"kl-id":r,"data-testid":o,ref:a,...i})}));x.displayName="ArrowUp1";const B=L`
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
`,D=S("div")`
  ${B}
`,M=64,f=({collapsedHeight:t=M,children:a,textToExpand:r,textToCollapse:o,className:i,testId:E,klId:g,componentType:h})=>{const[n,y]=s.useState(!0),{t:u}=k(),{testAttributes:d}=N({testId:E,klId:g,componentType:h}),b=n?{maxHeight:`${t}px`}:{},w=n?r??u("expand.toExpand"):o??u("expand.toCollapse"),v=n?e.createElement(V,null):e.createElement(x,null),c=s.useRef(null),[T,C]=s.useState(!1),p=q(c,150);return s.useLayoutEffect(()=>{const l=c.current;if(!l||!p)return;const I=l.scrollHeight>t;C(I)},[t,p]),e.createElement(D,{className:_("hexa-ui-expand",{"hexa-ui-expand-collapsed":n},i),...d},e.createElement("div",{className:"hexa-ui-expand-container",style:b,...m("body",d,!1,!0),ref:c},a),T&&e.createElement(A,{mode:"ghost",size:"large",elementAfter:v,interactive:!0,noIcon:!0,...m("action-button",d,!1,!0),onClick:()=>y(l=>!l),className:"hexa-ui-expand-button"},w))};try{f.displayName="Expand",f.__docgenInfo={description:"",displayName:"Expand",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},textToExpand:{defaultValue:null,description:"",name:"textToExpand",required:!1,type:{name:"string"}},textToCollapse:{defaultValue:null,description:"",name:"textToCollapse",required:!1,type:{name:"string"}},collapsedHeight:{defaultValue:{value:"64"},description:"",name:"collapsedHeight",required:!1,type:{name:"number"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{f as E,x as t};
