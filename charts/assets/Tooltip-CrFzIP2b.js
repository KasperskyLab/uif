import{R as a}from"./index-B3FZByPw.js";import{u}from"./Typography-CwddtZBH.js";import{u as x,a as b,T as g}from"./useThemedComponent-Bu04EU6r.js";import{d,g as $,T}from"./palette-CcbSufZ2.js";const w=a.createContext({}),v=o=>{const t=a.useContext(w);return{...o,...t}},p=7,e=6.5,R=(o,t)=>{const n=d($(T.BTR4));return`
  .${t} .ant-tooltip-inner {
      border-radius: 8px;
      padding: 8px 12px;
      background-color: var(--tooltip--bg, ${o.background});
      color: var(--tooltip--text, ${o.color});
      box-shadow: 0px 8px 12px 0px var(--elevation--medium--2, ${o.boxShadow}),
        0px 0px 1px 0px var(--elevation--medium--1, ${o.boxShadowLine});
      ${n};
  }

  .${t} .ant-tooltip-arrow:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      margin: auto;
      content: '';
      pointer-events: auto;
      background-color: var(--tooltip--bg, ${o.background});
      width: ${p}px;
      height: ${p}px;
  }

  .${t}.ant-tooltip-placement-top,
  .${t}.ant-tooltip-placement-topLeft,
  .${t}.ant-tooltip-placement-topRight {
    .ant-tooltip-arrow { 
      bottom: -5px !important;
      transform: translateX(-50%);
    }

    .ant-tooltip-arrow:before {
      border-bottom-right-radius: 2px;
      transform: translateY(-${e}px) rotate(45deg);
    }
  }

  .${t}.ant-tooltip-placement-right,
  .${t}.ant-tooltip-placement-rightTop,
  .${t}.ant-tooltip-placement-rightBottom {
    .ant-tooltip-arrow {
      left: -5px !important;
      transform: translateY(-50%);
    }

    .ant-tooltip-arrow:before {
      border-bottom-left-radius: 2px;
      transform: translateX(${e}px) rotate(45deg);
    }
  }

  .${t}.ant-tooltip-placement-bottom,
  .${t}.ant-tooltip-placement-bottomLeft,
  .${t}.ant-tooltip-placement-bottomRight {
    .ant-tooltip-arrow {
      top: -5px !important;
      transform: translateX(-50%);
    }

    .ant-tooltip-arrow:before {
      border-top-left-radius: 2px;
      transform: translateY(${e}px) rotate(45deg);
    }
  }

  .${t}.ant-tooltip-placement-left,
  .${t}.ant-tooltip-placement-leftTop,
  .${t}.ant-tooltip-placement-leftBottom {
    .ant-tooltip-arrow {
      right: -5px !important;
      transform: translateY(-50%);
    }

    .ant-tooltip-arrow:before {
      border-top-right-radius: 2px;
      transform: translateX(-${e}px) rotate(45deg);
    }
  }
  `},h={bottom:{offset:[0,-1]},left:{offset:[1,0]},right:{offset:[-1,0]},top:{offset:[0,1]},topLeft:{offset:[0,0]},topRight:{offset:[0,0]},bottomLeft:{offset:[0,0]},bottomRight:{offset:[0,0]},leftTop:{offset:[0,0]},leftBottom:{offset:[0,0]},rightTop:{offset:[0,0]},rightBottom:{offset:[0,0]}},S=o=>x(o,{componentName:"tooltip",defaultValues:{}}),y=({placement:o="top",defaultAlign:t=!1,...n})=>{const{cssConfig:i,getPopupContainer:r,testAttributes:l,text:m,...f}=u(S(n)),s=v(),c=b(i,R,y);return a.createElement(g,{align:t?void 0:h[o],getPopupContainer:r??s.getPopupContainer,mouseEnterDelay:.2,mouseLeaveDelay:0,overlayClassName:c,placement:o,title:m,...l,...f})};export{y as T,v as u};
