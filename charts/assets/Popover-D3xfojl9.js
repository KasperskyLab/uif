import{u as g,a as s,T as $}from"./useThemedComponent-Bu04EU6r.js";import{c as x}from"./Typography-CwddtZBH.js";import{r as w,R as r}from"./index-B3FZByPw.js";import{d as T,g as R,T as S}from"./palette-CcbSufZ2.js";var k=function(t){if(!t)return null;var o=typeof t=="function";return o?t():t};const E={bottom:{offset:[0,-1]},left:{offset:[1,0]},right:{offset:[-1,0]},top:{offset:[0,1]},topLeft:{offset:[0,0]},topRight:{offset:[0,0]},bottomLeft:{offset:[0,0]},bottomRight:{offset:[0,0]},leftTop:{offset:[0,0]},leftBottom:{offset:[0,0]},rightTop:{offset:[0,0]},rightBottom:{offset:[0,0]}},i=12,l=4.25,L=(e,t,o)=>{const n=T(R(S.BTR3));return`
  .${t} .ant-popover-inner {
    min-width: 240px;
    min-height: 52px;
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
    width: ${i}px;
    height: ${i}px;
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
    width: ${i}px;
    height: ${i}px;
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
      transform: translateY(-${l}px) rotate(45deg);
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
      transform: translateX(${l}px) rotate(45deg);
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
      transform: translateY(${l}px) rotate(45deg);
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
      transform: translateX(-${l}px) rotate(45deg);
    }
  }
  `},y=e=>{const{cssConfig:t,...o}=g(e,{componentName:"popover",defaultValues:{}}),n=w.useMemo(()=>({...t,width:e.width,height:e.height}),[t,e.width,e.height]);return{...o,cssConfig:n}},B=({content:e,defaultVisible:t=!1,placement:o="bottom",overlayClassName:n,shouldLimitSize:d=!0,...v})=>{const m=y(v),[b,f]=r.useState(t),p=r.useRef(null),c=r.useCallback(a=>{a.detail.tooltipRef!==p&&f(!1)},[p]);r.useEffect(()=>(document.addEventListener("kl-components-v6:tooltip-open",c),()=>{document.removeEventListener("kl-components-v6:tooltip-open",c)}),[]);const u=s(m.cssConfig,L,B,{shouldLimitSize:d}),h=r.createElement("div",{className:"ant-popover-inner-content"},k(e));return r.createElement($,{ref:p,onVisibleChange:a=>{f(a),a&&document.dispatchEvent(new CustomEvent("kl-components-v6:tooltip-open",{detail:{tooltipRef:p}}))},overlayClassName:x(n,u),visible:b,defaultVisible:t,align:E[o],overlay:h,placement:o,prefixCls:"ant-popover",transitionName:"ant-zoom-big",trigger:"click",...m})};export{B as P};
