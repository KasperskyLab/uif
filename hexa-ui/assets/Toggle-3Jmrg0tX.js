import{A as W}from"./AdditionalContent-D1SVuAXm.js";import{r,i as A,a as D,j as T,k as x,l as F,H as P,a1 as M,a0 as V,a5 as _,u as H,R as w}from"./iframe-DlY6n6Um.js";import{F as L}from"./FormLabel-CKFB06hk.js";import{u as q,K as S}from"./KeyCode-B45xthVk.js";import{d as G,a as B,S as J,c as Q}from"./type-Cyafuwrq.js";import{W as U}from"./wave-CgaPvuQn.js";var I=r.forwardRef(function(e,l){var o,a=e.prefixCls,t=a===void 0?"rc-switch":a,g=e.className,m=e.checked,v=e.defaultChecked,h=e.disabled,b=e.loadingIcon,p=e.checkedChildren,C=e.unCheckedChildren,u=e.onClick,s=e.onChange,c=e.onKeyDown,f=A(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),i=q(!1,{value:m,defaultValue:v}),y=D(i,2),k=y[0],j=y[1];function N(d,E){var $=k;return h||($=d,j($),s==null||s($,E)),$}function z(d){d.which===S.LEFT?N(!1,d):d.which===S.RIGHT&&N(!0,d),c==null||c(d)}function K(d){var E=N(!k,d);u==null||u(E,d)}var R=T(t,g,(o={},x(o,"".concat(t,"-checked"),k),x(o,"".concat(t,"-disabled"),h),o));return r.createElement("button",Object.assign({},f,{type:"button",role:"switch","aria-checked":k,disabled:h,className:R,ref:l,onKeyDown:z,onClick:K}),b,r.createElement("span",{className:"".concat(t,"-inner")},k?p:C))});I.displayName="Switch";var X=function(e,l){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)l.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(o[a[t]]=e[a[t]]);return o},O=r.forwardRef(function(e,l){var o,a=e.prefixCls,t=e.size,g=e.loading,m=e.className,v=m===void 0?"":m,h=e.disabled,b=X(e,["prefixCls","size","loading","className","disabled"]);G("checked"in b||!("value"in b),"Switch","`value` is not a valid prop, do you mean `checked`?");var p=r.useContext(B),C=p.getPrefixCls,u=p.direction,s=r.useContext(J),c=C("switch",a),f=r.createElement("div",{className:"".concat(c,"-handle")},g&&r.createElement(Q,{className:"".concat(c,"-loading-icon")})),i=T((o={},x(o,"".concat(c,"-small"),(t||s)==="small"),x(o,"".concat(c,"-loading"),g),x(o,"".concat(c,"-rtl"),u==="rtl"),o),v);return r.createElement(U,{insertExtraNode:!0},r.createElement(I,F({},b,{prefixCls:c,className:i,disabled:h||g,ref:l,loadingIcon:f})))});O.__ANT_SWITCH=!0;O.displayName="Switch";const n=M(),Y=V`
  background-color: ${n("enabled.bgOff")};
  box-shadow: none;
  ${({labelPosition:e})=>{switch(e){case"before":return{order:100,margin:"0 0 0 4px;"};case"after":return{order:0,margin:"0 4px 0 0;"};default:return{order:0,margin:0}}}}
  
  &:last-child {
    translate: none;
  }

  &:not(.ant-switch-small) {
    height: 20px;
    min-width: 32px;
    
    & .ant-switch-handle {
      width: 16px;
      height: 16px;
    }

    & .ant-switch-loading-icon.anticon {
      top: 2px;
    }
  }
  
  & .ant-switch-handle {
    &::before {
      box-shadow: none;
      background-color: ${n("enabled.knob")};
    }
  }
  &.ant-switch-checked {
    background-color: ${n("enabled.bgOn")};
    & .ant-switch-handle::before {
      box-shadow: none;
      background-color: ${n("enabled.knob")};
    }

    &:not(.ant-switch-small) {
      & .ant-switch-handle {
        left: calc(100% - 16px - 2px);
      }
    }
  }
  & .ant-click-animating-node {
    display: none;
  }

  // hover
  &:hover:not(:disabled),
  .ant-toggle-wrapper:hover &:not(:disabled) {
    background-color: ${n("hover.bgOff")};
    &.ant-switch-checked {
      background-color: ${n("hover.bgOn")};
    }
  }

  // active
  &:hover:active,
  &:active,
  .ant-toggle-wrapper:active &,
  .ant-toggle-wrapper:hover:active & {
    &:not(:disabled) {
      background-color: ${n("active.bgOff")};
      &.ant-switch-checked {
        background-color: ${n("active.bgOn")};
        .ant-switch-handle:before {
          left: 0;
        }
      }
      .ant-switch-handle:before {
        right: 0;
      }
    }
  }

  // focus
  &:not(:disabled) {
    &, &:hover, &:active {
      &:focus, &:focus-within {
        outline: none;
        box-shadow: none;
      }
      &:focus-visible {
        outline: none;
        box-shadow: ${n("focus.boxShadow")};
      }
    }
  }

  // disabled
  &.ant-switch-disabled, &:disabled {
    opacity: 1;
    background-color: ${n("disabled.bgOff")};
    & .ant-switch-handle:before {
      background-color: ${n("disabled.knob")};
      box-shadow: none;
    }
    &.ant-switch-checked {
      background-color: ${n("disabled.bgOn")};
      & .ant-switch-handle:before {
        background-color: ${n("disabled.knob")};
        box-shadow: none;
      }
    }
  }

  &.ant-switch-disabled ~ .toggle-label span {
    color: ${n("disabled.color")};
  }

  // readonly
  ${e=>e.readonly&&`
  && {
    background-color: ${n("readonly.bgOff")(e)};
    .ant-switch-handle::before {
      background-color: ${n("readonly.knob")(e)};
    }

    &, * {
      cursor: default;
    }
  }
  &&.ant-switch-checked {
    background-color: ${n("readonly.bgOn")(e)};
    .ant-switch-handle::before {
      background-color: ${n("readonly.knob")(e)};
    }
  }

  && ~ .toggle-label span {
    color: ${n("readonly.color")(e)};
  }
  `}
  
  + .toggle-label {
    line-height: 20px;

    .ant-table-cell & {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &:not(:disabled) + .toggle-label {
    cursor: pointer;
    user-select: none;
  }

  &:disabled + .toggle-label {
    cursor: not-allowed;
    user-select: none;
  }
`,Z=P.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
`,ee=e=>_(e,{componentName:"toggle",defaultValues:{}}),oe=P(O).withConfig({shouldForwardProp:e=>!["cssConfig","readonly","labelPosition"].includes(e)})`${Y}`,ae=e=>{const l=ee(e),o=H(l);return w.createElement(ne,{...o})},ne=({onChange:e,checked:l,children:o,disabled:a,readonly:t,cssConfig:g,labelPosition:m="after",required:v,tooltip:h,testAttributes:b,description:p,dependentElement:C,...u})=>{const[s,c]=r.useState(!!l);r.useEffect(()=>{l===void 0||s===l||c(!!l)},[l]);const f=(i,y)=>{e==null||e(i,y),l===void 0&&c(i)};return w.createElement("div",{className:"ant-toggle-wrapper",role:"toggle"},w.createElement(Z,null,w.createElement(oe,{onChange:f,checked:s,cssConfig:g,disabled:a||t,readonly:t,labelPosition:o?m:void 0,...b,...u}),typeof o=="string"?w.createElement(L,{onClick:()=>!a&&!t&&f(!s,new MouseEvent("click")),className:"toggle-label",disabled:a,required:v,tooltip:h},o):r.Children.map(o,i=>r.isValidElement(i)?r.cloneElement(i,{onClick:()=>!a&&f(!s,new MouseEvent("click"))}):i)),w.createElement(W,{description:p,dependentElement:C,_margin:36}))};ae.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{ae as T};
