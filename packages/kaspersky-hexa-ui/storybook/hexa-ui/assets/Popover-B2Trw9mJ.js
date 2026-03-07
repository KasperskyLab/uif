import{aL as b,a2 as $,a3 as w,w as x,r as R,R as r,aM as T,aN as L,j as y}from"./iframe-zz6a49H8.js";var S=function(e){if(!e)return null;var o=typeof e=="function";return o?e():e};const N={bottom:{offset:[0,-1]},left:{offset:[1,0]},right:{offset:[-1,0]},top:{offset:[0,1]},topLeft:{offset:[0,0]},topRight:{offset:[0,0]},bottomLeft:{offset:[0,0]},bottomRight:{offset:[0,0]},leftTop:{offset:[0,0]},leftBottom:{offset:[0,0]},rightTop:{offset:[0,0]},rightBottom:{offset:[0,0]}},i=12,l=4.25,k=(t,e,o)=>{const a=b($(w.BTR3));return`
  .${e} .ant-popover-inner {
    min-width: 240px;
    min-height: 52px;
    ${(o==null?void 0:o.shouldLimitSize)&&`
    max-width: 560px;
    max-height: 320px;`}

    overflow: auto;
    border-radius: 8px;
    background-color: ${t.background};
    color: ${t.color};
    box-shadow: ${t.boxShadowLine}, ${t.boxShadow};
    ${t.width?`width: ${t.width}px;`:""}
    ${t.height?`height: ${t.height}px;`:""}
    ${a};
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
    width: ${i}px;
    height: ${i}px;
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
    width: ${i}px;
    height: ${i}px;
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
      transform: translateY(-${l}px) rotate(45deg);
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
      transform: translateX(${l}px) rotate(45deg);
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
      transform: translateY(${l}px) rotate(45deg);
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
      transform: translateX(-${l}px) rotate(45deg);
    }
  }
  `},B=t=>{const{cssConfig:e,...o}=x(t,{componentName:"popover",defaultValues:{}}),a=R.useMemo(()=>({...e,width:t.width,height:t.height}),[e,t.width,t.height]);return{...o,cssConfig:a}},u=({content:t,defaultVisible:e=!1,placement:o="bottom",overlayClassName:a,shouldLimitSize:c=!0,...s})=>{const m=B(s),[h,d]=r.useState(e),n=r.useRef(null),f=r.useCallback(p=>{p.detail.tooltipRef!==n&&d(!1)},[n]);r.useEffect(()=>(document.addEventListener("kl-components-v6:tooltip-open",f),()=>{document.removeEventListener("kl-components-v6:tooltip-open",f)}),[]);const v=T(m.cssConfig,k,u,{shouldLimitSize:c}),g=r.createElement("div",{className:"ant-popover-inner-content"},S(t));return r.createElement(L,{ref:n,onVisibleChange:p=>{d(p),p&&document.dispatchEvent(new CustomEvent("kl-components-v6:tooltip-open",{detail:{tooltipRef:n}}))},overlayClassName:y(a,v),visible:h,defaultVisible:e,align:N[o],overlay:g,placement:o,prefixCls:"ant-popover",transitionName:"ant-zoom-big",trigger:"click",...m})};u.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | RenderFunction",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"RenderFunction"}]},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'topLeft'"},{name:"literal",value:"'topRight'"},{name:"literal",value:"'bottomLeft'"},{name:"literal",value:"'bottomRight'"},{name:"literal",value:"'leftTop'"},{name:"literal",value:"'leftBottom'"},{name:"literal",value:"'rightTop'"},{name:"literal",value:"'rightBottom'"}]},description:"Popover position relative to the target",defaultValue:{value:"'bottom'",computed:!1}},shouldLimitSize:{required:!1,tsType:{name:"boolean"},description:"Should set max width and max height",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width"},height:{required:!1,tsType:{name:"number"},description:"Height"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},defaultVisible:{defaultValue:{value:"false",computed:!1},required:!1}}};export{u as P};
