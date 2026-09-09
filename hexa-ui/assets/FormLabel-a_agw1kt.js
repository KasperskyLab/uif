const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Markdown-Bfn0KgDg.js","./iframe-DedYZBTA.js","./preload-helper-Dp1pzeXC.js","./iframe-BsXfUTIR.css","./index-_nYjx9Ua.js","./shouldForwardProp-Cdy-RLhZ.js"])))=>i.map(i=>d[i]);
import{R as a,r as $,ba as E,ai as R,aj as I,j as P,bb as S,d as q,u as M,J as A,T as k,A as B,ap as C}from"./iframe-DedYZBTA.js";import{_ as O}from"./preload-helper-Dp1pzeXC.js";import{T as z}from"./Tag-BKPu3-sD.js";function x(e){return JSON.stringify(e).split("").reduce((o,n)=>(o<<5)-o+n.charCodeAt(0)|0,0)}function W(e){return e.displayName||e.name||"Component"}function j(e,t,o,n){const i=W(o),l=a.useMemo(()=>{const r=x(e),d=n?x(n):void 0;return[i,r,d].filter(Boolean).join("-").replace(/[()]/g,"_")},[e,i,n]);return a.useEffect(()=>{try{if(!document.querySelector(`head > style.${l}`)){const r=document.createElement("style");r.className=l,r.textContent=t(e,l,n),document.head.appendChild(r)}}catch(r){console.error(`Hexa UI: failed to set styles for ${i}. The reason is: ${r}`)}},[l]),l}const F=a.lazy(()=>O(async()=>{const{Markdown:e}=await import("./Markdown-Bfn0KgDg.js");return{Markdown:e}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({Markdown:e})=>({default:e}))),w=e=>a.createElement($.Suspense,{fallback:null},a.createElement(F,{...e}));try{w.displayName="LazyMarkdown",w.__docgenInfo={description:"Code-split wrapper around {@link Markdown}.\n\n`Markdown` statically pulls in `markdown-it` + `dompurify` (~170KB). Components\nthat only render markdown for optional/interactive content (tooltips, hints)\nshould use `LazyMarkdown` so those deps land in a separate async chunk instead\nof every consumer bundle that touches the host component.",displayName:"LazyMarkdown",props:{testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},withoutTextStyle:{defaultValue:null,description:"Returns markdown data inside <span /> (no inner styles applied)",name:"withoutTextStyle",required:!1,type:{name:"boolean"}},themedColor:{defaultValue:null,description:"",name:"themedColor",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondary2"'},{value:'"base-icon"'},{value:'"baseicon"'},{value:'"secondary-solid"'},{value:'"secondary2-solid"'},{value:'"base-icon-solid"'},{value:'"disabled-solid"'},{value:'"primary-invert"'},{value:'"secondary-invert"'},{value:'"secondary2-invert"'},{value:'"base-icon-invert"'},{value:'"baseicon-invert"'},{value:'"disabled-invert"'},{value:'"secondary-invert-solid"'},{value:'"secondary2-invert-solid"'},{value:'"base-icon-invert-solid"'},{value:'"disabled-invert-solid"'}]}},purify:{defaultValue:null,description:"Enable DOMPurify sanitize",name:"purify",required:!1,type:{name:"boolean"}},breaks:{defaultValue:null,description:"Render soft line breaks (\\n) as <br>",name:"breaks",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}var D=function(t){if(!t)return null;var o=typeof t=="function";return o?t():t};const G={bottom:{offset:[0,-1]},left:{offset:[1,0]},right:{offset:[-1,0]},top:{offset:[0,1]},topLeft:{offset:[-5,1]},topRight:{offset:[5,1]},bottomLeft:{offset:[-5,-1]},bottomRight:{offset:[5,-1]},leftTop:{offset:[1,-5]},leftBottom:{offset:[1,5]},rightTop:{offset:[-1,-5]},rightBottom:{offset:[-1,5]}},f=12,v=4.25,X=(e,t,o)=>{const n=E(R(I.BTR3));return`
  .${t} .ant-popover-inner {
    min-width: 240px;
    min-height: 52px;
    text-align: start;
    ${(o==null?void 0:o.shouldLimitSize)&&`
    max-width: 560px;
    max-height: 320px;`}

    overflow: auto;
    border-radius: 8px;
    background-color: ${e.background};
    color: ${e.color};
    box-shadow: ${e.boxShadowLine}, ${e.boxShadow};
    ${e.width?`width: ${e.width}px;`:""}
    ${e.height?`height: ${e.height}px;`:""}
    ${n};
  }

  .${t} .ant-popover-title {
    color: ${e.color};
  }

  .${t} .ant-popover-inner-content {
    padding: 16px;
    white-space: pre-wrap;
    color: inherit;
  }

  .${t} .ant-popover-arrow {
    width: ${f}px;
    height: ${f}px;
    border: none;
  }

  .${t} .ant-popover-arrow:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    content: '';
    pointer-events: auto;
    background-color: ${e.background};
    box-shadow: ${e.boxShadowLine}, ${e.arrowBoxShadow};
    width: ${f}px;
    height: ${f}px;
  }

  .${t}.ant-popover-placement-top,
  .${t}.ant-popover-placement-topLeft,
  .${t}.ant-popover-placement-topRight {
    .ant-popover-arrow { 
      bottom: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-right-radius: 2px;
      transform: translateY(-${v}px) rotate(45deg);
    }
  }

  .${t}.ant-popover-placement-right,
  .${t}.ant-popover-placement-rightTop,
  .${t}.ant-popover-placement-rightBottom {
    .ant-popover-arrow {
      left: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-left-radius: 2px;
      transform: translateX(${v}px) rotate(45deg);
    }
  }

  .${t}.ant-popover-placement-bottom,
  .${t}.ant-popover-placement-bottomLeft,
  .${t}.ant-popover-placement-bottomRight {
    .ant-popover-arrow {
      top: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-top-left-radius: 2px;
      transform: translateY(${v}px) rotate(45deg);
    }
  }

  .${t}.ant-popover-placement-left,
  .${t}.ant-popover-placement-leftTop,
  .${t}.ant-popover-placement-leftBottom {
    .ant-popover-arrow {
      right: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-top-right-radius: 2px;
      transform: translateX(-${v}px) rotate(45deg);
    }
  }
  `},Y=e=>{const{cssConfig:t,...o}=P(e,{componentName:"popover",defaultValues:{}}),n=$.useMemo(()=>({...t,width:e.width,height:e.height}),[t,e.width,e.height]);return{...o,cssConfig:n}},y=({content:e,defaultVisible:t=!1,placement:o="top",overlayClassName:n,shouldLimitSize:i=!0,...l})=>{const r=Y(l),[d,m]=a.useState(t),s=a.useRef(null),c=a.useCallback(p=>{p.detail.tooltipRef!==s&&m(!1)},[s]);a.useEffect(()=>(document.addEventListener("kl-components-v6:tooltip-open",c),()=>{document.removeEventListener("kl-components-v6:tooltip-open",c)}),[]);const b=j(r.cssConfig,X,y,{shouldLimitSize:i}),h=a.createElement("div",{className:"ant-popover-inner-content"},D(e));return a.createElement(S,{ref:s,onVisibleChange:p=>{m(p),p&&document.dispatchEvent(new CustomEvent("kl-components-v6:tooltip-open",{detail:{tooltipRef:s}}))},overlayClassName:q(n,b),visible:d,defaultVisible:t,align:G[o],overlay:h,placement:o,prefixCls:"ant-popover",transitionName:"ant-zoom-big",trigger:"click",...r})};try{y.displayName="Popover",y.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},getPopupContainer:{defaultValue:null,description:"",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},builtinPlacements:{defaultValue:null,description:"",name:"builtinPlacements",required:!1,type:{name:"BuildInPlacements"}},openClassName:{defaultValue:null,description:"",name:"openClassName",required:!1,type:{name:"string"}},arrowPointAtCenter:{defaultValue:null,description:"",name:"arrowPointAtCenter",required:!1,type:{name:"boolean"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean | AdjustOverflow"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode | RenderFunction"}},placement:{defaultValue:{value:"top"},description:"Popover position relative to the target",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},shouldLimitSize:{defaultValue:{value:"true"},description:"Should set max width and max height",name:"shouldLimitSize",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height",name:"height",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const U="_formLabel_km1r8_1",J="_primary_km1r8_6",K="_secondary_km1r8_12",Z="_disabled_km1r8_18",Q="_readOnly_km1r8_24",H="_textContainer_km1r8_30",u={formLabel:U,primary:J,secondary:K,disabled:Z,readOnly:Q,textContainer:H},T=e=>{const{mode:t="primary",children:o,className:n,disabled:i,readOnly:l,required:r,tooltip:d,tagsAfter:m=[],testAttributes:s,getPopupContainer:c,popoverPlacement:b,popoverWidth:h,theme:p,...V}=M(e),N=g=>g.parentElement,L=m.some(Boolean),_=i||t==="disabled"||l;return a.createElement("label",{...V,...s,className:q("form-label",u.formLabel,A(n,p),{[u.primary]:t==="primary"&&!_,[u.secondary]:t==="secondary"&&!_,[u.disabled]:i??t==="disabled",[u.readOnly]:l})},a.createElement("span",{className:u.textContainer},a.createElement(k,{type:"BTR3",className:"form-label-text"},o),r&&a.createElement(k,{type:"BTR3",className:"form-label-asterisk"},"*"),d&&a.createElement(y,{content:typeof d=="string"?a.createElement(w,{withoutTextStyle:!0,value:d}):d,getPopupContainer:c||N,placement:b,width:h},a.createElement(B,{mode:"ghost",size:"large",interactive:!1,icon:a.createElement(C,null),className:"form-label-info-icon"}))),L&&a.createElement(z.Group,{items:m.filter(Boolean).map(g=>({label:g,outlined:!(i||t==="disabled")}))}))};try{T.displayName="FormLabel",T.__docgenInfo={description:"",displayName:"FormLabel",props:{required:{defaultValue:null,description:"Is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},tagsAfter:{defaultValue:null,description:"Tags after label",name:"tagsAfter",required:!1,type:{name:"string[]"}},tooltip:{defaultValue:null,description:"Popover content",name:"tooltip",required:!1,type:{name:"ReactNode"}},getPopupContainer:{defaultValue:null,description:"Parent Node which the popover should be rendered to",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},popoverPlacement:{defaultValue:null,description:"Popover position relative to the info icon",name:"popoverPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},popoverWidth:{defaultValue:null,description:"Custom width for popover",name:"popoverWidth",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{T as F,y as P,j as u};
