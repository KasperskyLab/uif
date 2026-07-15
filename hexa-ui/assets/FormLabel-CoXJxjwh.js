import{b6 as V,a1 as q,ao as L,F as x,r as N,R as o,b7 as P,b8 as E,l as $,C as R,D as k,w as S,T as h,A as I,am as _,H as A}from"./iframe-4-PRSI1I.js";import{M as F}from"./Markdown-BenFmRMk.js";import{T as B}from"./Tag-B3SARhhR.js";var M=function(e){if(!e)return null;var a=typeof e=="function";return a?e():e};const C={bottom:{offset:[0,-1]},left:{offset:[1,0]},right:{offset:[-1,0]},top:{offset:[0,1]},topLeft:{offset:[-5,1]},topRight:{offset:[5,1]},bottomLeft:{offset:[-5,-1]},bottomRight:{offset:[5,-1]},leftTop:{offset:[1,-5]},leftBottom:{offset:[1,5]},rightTop:{offset:[-1,-5]},rightBottom:{offset:[-1,5]}},s=12,c=4.25,z=(t,e,a)=>{const n=V(q(L.BTR3));return`
  .${e} .ant-popover-inner {
    min-width: 240px;
    min-height: 52px;
    ${(a==null?void 0:a.shouldLimitSize)&&`
    max-width: 560px;
    max-height: 320px;`}

    overflow: auto;
    border-radius: 8px;
    background-color: ${t.background};
    color: ${t.color};
    box-shadow: ${t.boxShadowLine}, ${t.boxShadow};
    ${t.width?`width: ${t.width}px;`:""}
    ${t.height?`height: ${t.height}px;`:""}
    ${n};
  }

  .${e} .ant-popover-title {
    color: ${t.color};
  }

  .${e} .ant-popover-inner-content {
    padding: 16px;
    white-space: pre-wrap;
    color: inherit;
  }

  .${e} .ant-popover-arrow {
    width: ${s}px;
    height: ${s}px;
    border: none;
  }

  .${e} .ant-popover-arrow:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    content: '';
    pointer-events: auto;
    background-color: ${t.background};
    box-shadow: ${t.boxShadowLine}, ${t.arrowBoxShadow};
    width: ${s}px;
    height: ${s}px;
  }

  .${e}.ant-popover-placement-top,
  .${e}.ant-popover-placement-topLeft,
  .${e}.ant-popover-placement-topRight {
    .ant-popover-arrow { 
      bottom: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-right-radius: 2px;
      transform: translateY(-${c}px) rotate(45deg);
    }
  }

  .${e}.ant-popover-placement-right,
  .${e}.ant-popover-placement-rightTop,
  .${e}.ant-popover-placement-rightBottom {
    .ant-popover-arrow {
      left: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-left-radius: 2px;
      transform: translateX(${c}px) rotate(45deg);
    }
  }

  .${e}.ant-popover-placement-bottom,
  .${e}.ant-popover-placement-bottomLeft,
  .${e}.ant-popover-placement-bottomRight {
    .ant-popover-arrow {
      top: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-top-left-radius: 2px;
      transform: translateY(${c}px) rotate(45deg);
    }
  }

  .${e}.ant-popover-placement-left,
  .${e}.ant-popover-placement-leftTop,
  .${e}.ant-popover-placement-leftBottom {
    .ant-popover-arrow {
      right: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-top-right-radius: 2px;
      transform: translateX(-${c}px) rotate(45deg);
    }
  }
  `},O=t=>{const{cssConfig:e,...a}=x(t,{componentName:"popover",defaultValues:{}}),n=N.useMemo(()=>({...e,width:t.width,height:t.height}),[e,t.width,t.height]);return{...a,cssConfig:n}},f=({content:t,defaultVisible:e=!1,placement:a="bottom",overlayClassName:n,shouldLimitSize:p=!0,...l})=>{const d=O(l),[g,m]=o.useState(e),i=o.useRef(null),u=o.useCallback(r=>{r.detail.tooltipRef!==i&&m(!1)},[i]);o.useEffect(()=>(document.addEventListener("kl-components-v6:tooltip-open",u),()=>{document.removeEventListener("kl-components-v6:tooltip-open",u)}),[]);const v=P(d.cssConfig,z,f,{shouldLimitSize:p}),b=o.createElement("div",{className:"ant-popover-inner-content"},M(t));return o.createElement(E,{ref:i,onVisibleChange:r=>{m(r),r&&document.dispatchEvent(new CustomEvent("kl-components-v6:tooltip-open",{detail:{tooltipRef:i}}))},overlayClassName:$(n,v),visible:g,defaultVisible:e,align:C[a],overlay:b,placement:a,prefixCls:"ant-popover",transitionName:"ant-zoom-big",trigger:"click",...d})};try{f.displayName="Popover",f.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},openClassName:{defaultValue:null,description:"",name:"openClassName",required:!1,type:{name:"string"}},arrowPointAtCenter:{defaultValue:null,description:"",name:"arrowPointAtCenter",required:!1,type:{name:"boolean"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean | AdjustOverflow"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode | RenderFunction"}},placement:{defaultValue:{value:"bottom"},description:"Popover position relative to the target",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},shouldLimitSize:{defaultValue:{value:"true"},description:"Should set max width and max height",name:"shouldLimitSize",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height",name:"height",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const y=k(),W=R`
  display: inline;
  
  & .form-label-text {
    color: ${y("text")};
  }
  
  & .form-label-asterisk {
    color: ${y("asterisk")};
  }
  
  & .form-label-info-icon {
    margin-left: 4px;
    height: 10px;
    transform: translateY(3px);
    display: inline-flex;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }

  .form-label-tag {
    margin: 0 0 0 8px;
  }

  .form-label-tag + .form-label-tag {
    margin-left: 4px;
  }
`,Y=t=>x(t,{componentName:"formLabel",defaultValues:{mode:"primary"},propsToDrill:["mode"]}),G=A("label").withConfig({shouldForwardProp:t=>!["cssConfig"].includes(t)})`${W}`,w=t=>{const{disabled:e,mode:a,...n}=t,p=Y({...n,disabled:e,mode:e?"disabled":a}),l=S(p);return o.createElement(X,{...l})},X=({mode:t,children:e,className:a,disabled:n,required:p,tooltip:l,tagsAfter:d=[],testAttributes:g,getPopupContainer:m,popoverPlacement:i,popoverWidth:u,...v})=>{const b=r=>r.parentElement;return o.createElement(G,{...v,...g,className:$("form-label",a)},o.createElement(h,{type:"BTR3",className:"form-label-text"},e),p&&o.createElement(h,{type:"BTR3",className:"form-label-asterisk"},"*"),l&&o.createElement(f,{content:typeof l=="string"?o.createElement(F,{withoutTextStyle:!0,value:l}):l,getPopupContainer:m||b,placement:i,width:u},o.createElement(I,{mode:"ghost",size:"large",interactive:!1,icon:o.createElement(_,null),className:"form-label-info-icon"})),d.map((r,T)=>r&&o.createElement(B,{key:`${r}-${T}`,label:r,className:"form-label-tag",outlined:!(n||t==="disabled")})))};try{w.displayName="FormLabel",w.__docgenInfo={description:"",displayName:"FormLabel",props:{required:{defaultValue:null,description:"Is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Is disabled",name:"disabled",required:!1,type:{name:"boolean"}},tagsAfter:{defaultValue:{value:"[]"},description:"Tags after label",name:"tagsAfter",required:!1,type:{name:"string[]"}},tooltip:{defaultValue:null,description:"Popover content",name:"tooltip",required:!1,type:{name:"ReactNode"}},getPopupContainer:{defaultValue:null,description:"Parent Node which the popover should be rendered to",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},popoverPlacement:{defaultValue:null,description:"Popover position relative to the info icon",name:"popoverPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},popoverWidth:{defaultValue:null,description:"Custom width for popover",name:"popoverWidth",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{w as F,f as P};
