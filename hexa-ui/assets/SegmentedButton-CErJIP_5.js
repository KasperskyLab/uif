import{g as S}from"./generateId-BXJELych.js";import{C as y,z as _,a1 as z,ao as E,D as A,aq as R,R as l,w as C,l as $,v as H,H as N,r as q}from"./iframe-4-PRSI1I.js";const t=A(),i=z(E.BTR3),M=y`
  display: flex;
  flex-direction: row;
  width: 100%;

  &.type-checkbox {
    gap: 4px;
    flex-wrap: wrap;
  }

  &.type-radio {
    div:not(:first-child):not(:last-child) {
      &, & label {
        border-radius: 0;
      }
    }
    div:first-child {
      &, & label {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    div:last-child {
      &, & label {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    div:not(:last-child):not(.kl6-segmentedButton-item-checked) {
      &, &:hover, &:active, &:focus-visible {
        border-right-color: transparent;
      }
    }
    div:not(:last-child) {
      margin-right: -1px;
    }
  }

  ${({isStretch:e})=>e&&y`
    & > div {
      flex-grow: 1;

      label {
        justify-content: center;
      }
    }
  `}
`,P=y`
  display: flex;
  transition: all 0.3s ease;
  max-width: 300px;

  &, label {
    border-radius: 8px;
  }

  font-family: ${i.fontFamily};
  font-size: ${i.fontSize};
  line-height: ${i.lineHeight};
  font-weight: ${i.fontWeight};
  font-style: ${i.fontStyle};
  letter-spacing: ${i.letterSpacing};

  background: ${t("unchecked.enabled.background")};
  color: ${t("unchecked.enabled.color")};
  border: 1px solid ${t("unchecked.enabled.border")};

  &:hover {
    background: ${t("unchecked.hover.background")};
  }

  &:active {
    background: ${t("unchecked.active.background")};
  }

  .kl6-segmentedButton-item-input:focus-visible + label {
    box-shadow: ${t("focus.boxShadow")};
  }

  &.kl6-segmentedButton-item-checked:not(.kl6-segmentedButton-item-disabled) {
    z-index: 1;
    background: ${t("checked.enabled.background")};
    color: ${t("checked.enabled.color")};
    border: 1px solid ${t("checked.enabled.border")};

    &:hover {
      background: ${t("checked.hover.background")};
    }

    &:active {
      background: ${t("checked.active.background")};
    }
  }

  &.kl6-segmentedButton-item-disabled {
    &, &:hover, &:active, &:focus-visible {
      background: ${t("unchecked.enabled.background")};
      color: ${t("unchecked.disabled.color")};
      border: 1px solid ${t("unchecked.disabled.border")};

      &.kl6-segmentedButton-item-checked {
        background: ${t("checked.disabled.background")};
        border-color: ${t("checked.disabled.border")};
      }
      label {
        cursor: not-allowed;
      }
    }
  }

  ${({type:e})=>e==="radio"&&y`
    &:not(.kl6-segmentedButton-item-disabled) + .kl6-segmentedButton-item-disabled {
      &, &:hover, &:active, &:focus-visible {
        border-left-color: ${t("unchecked.enabled.border")};
      }
    }
  `}

  .kl6-segmentedButton-item-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .kl6-segmentedButton-item-additional {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .kl6-segmentedButton-item-input {
    position: absolute;
    opacity: 0;
    appearance: none;
  }

  label {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: ${_[2]}px;
    width: 100%;
    height: 100%;
    padding: ${t("padding")};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`,F=e=>R(e,{componentName:"segmentedButton",defaultValues:{mode:"marina",size:"medium"}}),U=N.div.withConfig({shouldForwardProp:e=>!["cssConfig","type"].includes(e)})`
  ${P}
`,B=e=>{const n=F(e);return l.createElement(L,{...n})},L=e=>{const{className:n,id:m,text:v,selectedValues:p,onChange:k,value:o,componentsBefore:r,componentsAfter:f,disabled:d,cssConfig:I,testId:s,tooltip:u,klId:V,...g}=e,{testAttributes:x}=C(e),c=p.includes(o),b=l.createElement(U,{cssConfig:I,className:$(n,"SegmentedButtonItem",{"kl6-segmentedButton-item-disabled":d,"kl6-segmentedButton-item-checked":c}),type:g.type,"data-checked":c,"data-value":o,...x},l.createElement("label",{htmlFor:m,"data-testid":`${s}-label`},l.createElement("input",{...g,id:m,onChange:d?void 0:a=>k(a.target.value,p),"data-testid":s+"-input","data-checked":c,value:o,disabled:d,className:"kl6-segmentedButton-item-input"}),r&&l.createElement("div",{className:"kl6-segmentedButton-item-additional"},r),l.createElement("div",{className:"kl6-segmentedButton-item-text","data-testid":s+"-label-value"},v),f&&l.createElement("div",{className:"kl6-segmentedButton-item-additional"},f)));return u?l.createElement(H,{text:u},b):b};try{B.displayName="SegmentedButtonItem",B.__docgenInfo={description:"",displayName:"SegmentedButtonItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"orange"'},{value:'"grass"'},{value:'"violet"'},{value:'"purple"'},{value:'"grey"'},{value:'"red"'},{value:'"yellow"'},{value:'"emerald"'},{value:'"marengo"'},{value:'"marina"'}]}},componentsBefore:{defaultValue:null,description:"",name:"componentsBefore",required:!1,type:{name:"ReactNode[]"}},componentsAfter:{defaultValue:null,description:"",name:"componentsAfter",required:!1,type:{name:"ReactNode[]"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"SegmentedButtonItemClickFunc"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const D="marina",O=N.div.withConfig({shouldForwardProp:e=>!["isStretch","type"].includes(e)})`
  ${M}
`,w=e=>{const{type:n="radio",theme:m,mode:v,size:p,className:k,disabled:o,items:r,value:f,onChange:d,isStretch:I,style:s}=e,u=q.useMemo(()=>S(),[]),{testAttributes:V}=C(e),g=n==="checkbox",x=n==="radio",c=q.useCallback((a,h)=>{n==="checkbox"?h.includes(a)?d(h.filter(T=>T!==a)):d([...h,a]):h.includes(a)||d([a])},[d,n]),b=q.useMemo(()=>r.map(a=>({...a,id:S(),name:u})),[r,n,u]);return l.createElement(O,{className:$("kl6-segmented-button",k,{"type-checkbox":g},{"type-radio":x}),isStretch:I,style:s,...V},b.map(a=>l.createElement(B,{key:a.id,type:n,selectedValues:f,onChange:c,theme:m,mode:n==="radio"?D:a.mode||v,size:p,...a,disabled:o||a.disabled})))};try{w.displayName="SegmentedButton",w.__docgenInfo={description:"",displayName:"SegmentedButton",props:{type:{defaultValue:null,description:`@deprecated Checkbox or radio behavior the default is radio if checkbox behavior is needed,
use ToggleButtonGroup`,name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},isStretch:{defaultValue:null,description:"Is SegmentedButton stretched to the full container's width",name:"isStretch",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Is disabled",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Array of options",name:"items",required:!0,type:{name:"SegmentedButtonOption[]"}},value:{defaultValue:null,description:"Controlled array value of selected options",name:"value",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Handler",name:"onChange",required:!0,type:{name:"(value: string[]) => void"}},className:{defaultValue:null,description:"Custom class name of the container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mode:{defaultValue:null,description:"@deprecated Not used, always defaults to marina",name:"mode",required:!1,type:{name:"enum",value:[{value:'"orange"'},{value:'"grass"'},{value:'"violet"'},{value:'"purple"'},{value:'"grey"'},{value:'"red"'},{value:'"yellow"'},{value:'"emerald"'},{value:'"marengo"'},{value:'"marina"'}]}},size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{w as S};
