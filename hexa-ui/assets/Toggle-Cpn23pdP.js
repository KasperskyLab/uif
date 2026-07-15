import{A as L}from"./AdditionalContent-CRQIPW1O.js";import{r,k as z,b as A,l as O,m as C,n as F,H as P,C as K,D as j,aq as D,w as U,R as y}from"./iframe-4-PRSI1I.js";import{F as W}from"./FormLabel-CoXJxjwh.js";import{u as G}from"./useMergedState-5V6OeSqY.js";import{K as $}from"./KeyCode-c5NdJp32.js";import{d as B,a as J,S as Q,c as X}from"./index-C0IykO9V.js";import{W as Y}from"./wave-DF9O9Ycp.js";var _=r.forwardRef(function(e,o){var t,a=e.prefixCls,l=a===void 0?"rc-switch":a,u=e.className,b=e.checked,v=e.defaultChecked,p=e.disabled,m=e.loadingIcon,h=e.checkedChildren,w=e.unCheckedChildren,f=e.onClick,d=e.onChange,i=e.onKeyDown,g=z(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),s=G(!1,{value:b,defaultValue:v}),x=A(s,2),k=x[0],R=x[1];function q(c,T){var I=k;return p||(I=c,R(I),d==null||d(I,T)),I}function S(c){c.which===$.LEFT?q(!1,c):c.which===$.RIGHT&&q(!0,c),i==null||i(c)}function M(c){var T=q(!k,c);f==null||f(T,c)}var H=O(l,u,(t={},C(t,"".concat(l,"-checked"),k),C(t,"".concat(l,"-disabled"),p),t));return r.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":k,disabled:p,className:H,ref:o,onKeyDown:S,onClick:M}),m,r.createElement("span",{className:"".concat(l,"-inner")},k?h:w))});_.displayName="Switch";var Z=function(e,o){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)o.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},N=r.forwardRef(function(e,o){var t,a=e.prefixCls,l=e.size,u=e.loading,b=e.className,v=b===void 0?"":b,p=e.disabled,m=Z(e,["prefixCls","size","loading","className","disabled"]);B("checked"in m||!("value"in m),"Switch","`value` is not a valid prop, do you mean `checked`?");var h=r.useContext(J),w=h.getPrefixCls,f=h.direction,d=r.useContext(Q),i=w("switch",a),g=r.createElement("div",{className:"".concat(i,"-handle")},u&&r.createElement(X,{className:"".concat(i,"-loading-icon")})),s=O((t={},C(t,"".concat(i,"-small"),(l||d)==="small"),C(t,"".concat(i,"-loading"),u),C(t,"".concat(i,"-rtl"),f==="rtl"),t),v);return r.createElement(Y,{insertExtraNode:!0},r.createElement(_,F({},m,{prefixCls:i,className:s,disabled:p||u,ref:o,loadingIcon:g})))});N.__ANT_SWITCH=!0;N.displayName="Switch";const n=j(),ee=K`
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
`,te=P.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
`,V=e=>D(e,{componentName:"toggle",defaultValues:{}});try{V.displayName="useThemedToggle",V.__docgenInfo={description:"",displayName:"useThemedToggle",props:{children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},readonly:{defaultValue:null,description:"Readonly state",name:"readonly",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"Label position",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"after"'},{value:'"before"'}]}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If form label is required",name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Form label tooltip",name:"tooltip",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},dependentElement:{defaultValue:null,description:"",name:"dependentElement",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}const ae=P(N).withConfig({shouldForwardProp:e=>!["cssConfig","readonly","labelPosition"].includes(e)})`${ee}`,E=e=>{const o=V(e),t=U(o);return y.createElement(ne,{...t})},ne=({onChange:e,checked:o,children:t,disabled:a,readonly:l,cssConfig:u,labelPosition:b="after",required:v,tooltip:p,testAttributes:m,description:h,dependentElement:w,...f})=>{const[d,i]=r.useState(!!o);r.useEffect(()=>{o===void 0||d===o||i(!!o)},[o]);const g=(s,x)=>{e==null||e(s,x),o===void 0&&i(s)};return y.createElement("div",{className:"ant-toggle-wrapper",role:"toggle"},y.createElement(te,null,y.createElement(ae,{onChange:g,checked:d,cssConfig:u,disabled:a||l,readonly:l,labelPosition:t?b:void 0,...m,...f}),typeof t=="string"?y.createElement(W,{onClick:()=>!a&&!l&&g(!d,new MouseEvent("click")),className:"toggle-label",disabled:a,required:v,tooltip:p},t):r.Children.map(t,s=>r.isValidElement(s)?r.cloneElement(s,{onClick:()=>!a&&g(!d,new MouseEvent("click"))}):s)),y.createElement(L,{description:h,dependentElement:w,_margin:36}))};try{E.displayName="Toggle",E.__docgenInfo={description:"",displayName:"Toggle",props:{children:{defaultValue:null,description:"React children",name:"children",required:!1,type:{name:"ReactNode"}},readonly:{defaultValue:null,description:"Readonly state",name:"readonly",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"after"},description:"Label position",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"after"'},{value:'"before"'}]}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If form label is required",name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Form label tooltip",name:"tooltip",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},dependentElement:{defaultValue:null,description:"",name:"dependentElement",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{E as T};
