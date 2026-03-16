import{a0 as f,a2 as A,a1 as I,ak as E,a3 as z,a5 as P,R as r,u as N,j as q,y as _,H as $,r as B}from"./iframe-DlY6n6Um.js";import{v as S}from"./v4-BoP187Zn.js";const e=I(),i=A(z.BTR3),F=f`
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

  ${({isStretch:t})=>t&&f`
    & > div {
      flex-grow: 1;

      label {
        justify-content: center;
      }
    }
  `}
`,M=f`
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

  background: ${e("unchecked.enabled.background")};
  color: ${e("unchecked.enabled.color")};
  border: 1px solid ${e("unchecked.enabled.border")};

  &:hover {
    background: ${e("unchecked.hover.background")};
  }

  &:active {
    background: ${e("unchecked.active.background")};
  }

  .kl6-segmentedButton-item-input:focus-visible + label {
    box-shadow: ${e("focus.boxShadow")};
  }

  &.kl6-segmentedButton-item-checked:not(.kl6-segmentedButton-item-disabled) {
    z-index: 1;
    background: ${e("checked.enabled.background")};
    color: ${e("checked.enabled.color")};
    border: 1px solid ${e("checked.enabled.border")};

    &:hover {
      background: ${e("checked.hover.background")};
    }

    &:active {
      background: ${e("checked.active.background")};
    }
  }

  &.kl6-segmentedButton-item-disabled {
    &, &:hover, &:active, &:focus-visible {
      background: ${e("unchecked.enabled.background")};
      color: ${e("unchecked.disabled.color")};
      border: 1px solid ${e("unchecked.disabled.border")};

      &.kl6-segmentedButton-item-checked {
        background: ${e("checked.disabled.background")};
        border-color: ${e("checked.disabled.border")};
      }
      label {
        cursor: not-allowed;
      }
    }
  }

  ${({type:t})=>t==="radio"&&f`
    &:not(.kl6-segmentedButton-item-disabled) + .kl6-segmentedButton-item-disabled {
      &, &:hover, &:active, &:focus-visible {
        border-left-color: ${e("unchecked.enabled.border")};
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
    gap: ${E[2]}px;
    width: 100%;
    height: 100%;
    padding: ${e("padding")};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`,j=t=>P(t,{componentName:"segmentedButton",defaultValues:{mode:"marina",size:"medium"}}),H=$.div.withConfig({shouldForwardProp:t=>!["cssConfig","type"].includes(t)})`
  ${M}
`,C=t=>{const n=j(t);return r.createElement(O,{...n})},O=t=>{const{className:n,id:u,text:h,selectedValues:p,onChange:k,value:l,componentsBefore:s,componentsAfter:g,disabled:o,cssConfig:w,testId:d,tooltip:m,klId:T,...b}=t,{testAttributes:x}=N(t),c=p.includes(l),v=r.createElement(H,{cssConfig:w,className:q(n,"SegmentedButtonItem",{"kl6-segmentedButton-item-disabled":o,"kl6-segmentedButton-item-checked":c}),type:b.type,"data-checked":c,"data-value":l,...x},r.createElement("label",{htmlFor:u,"data-testid":`${d}-label`},r.createElement("input",{...b,id:u,onChange:o?void 0:a=>k(a.target.value,p),"data-testid":d+"-input","data-checked":c,value:l,disabled:o,className:"kl6-segmentedButton-item-input"}),s&&r.createElement("div",{className:"kl6-segmentedButton-item-additional"},s),r.createElement("div",{className:"kl6-segmentedButton-item-text","data-testid":d+"-label-value"},h),g&&r.createElement("div",{className:"kl6-segmentedButton-item-additional"},g)));return m?r.createElement(_,{text:m},v):v};C.__docgenInfo={description:"",methods:[],displayName:"SegmentedButtonItem",props:{value:{required:!0,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'grey' | 'red' | 'orange' | 'yellow' | 'grass' | 'emerald' | 'marengo' | 'marina' | 'purple' | 'violet'",elements:[{name:"literal",value:"'grey'"},{name:"literal",value:"'red'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'grass'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'marengo'"},{name:"literal",value:"'marina'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'violet'"}]},description:""},componentsBefore:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},componentsAfter:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},id:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(handledValue: string, selectedValues: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"handledValue"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedValues"}],return:{name:"void"}}},description:""}}};const D="marina",G=$.div.withConfig({shouldForwardProp:t=>!["isStretch","type"].includes(t)})`
  ${F}
`,V=t=>{const{type:n="radio",theme:u,mode:h,size:p,className:k,disabled:l,items:s,value:g,onChange:o,isStretch:w,style:d}=t,m=B.useMemo(()=>S(),[]),{testAttributes:T}=N(t),b=n==="checkbox",x=n==="radio",c=B.useCallback((a,y)=>{n==="checkbox"?y.includes(a)?o(y.filter(R=>R!==a)):o([...y,a]):y.includes(a)||o([a])},[o,n]),v=B.useMemo(()=>s.map(a=>({...a,id:S(),name:m})),[s,n,m]);return r.createElement(G,{className:q("kl6-segmented-button",k,{"type-checkbox":b},{"type-radio":x}),isStretch:w,style:d,...T},v.map(a=>r.createElement(C,{key:a.id,type:n,selectedValues:g,onChange:c,theme:u,mode:n==="radio"?D:a.mode||h,size:p,...a,disabled:l||a.disabled})))};V.__docgenInfo={description:"",methods:[],displayName:"SegmentedButton",props:{type:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:`@deprecated Checkbox or radio behavior the default is radio if checkbox behavior is needed,
use ToggleButtonGroup`},isStretch:{required:!1,tsType:{name:"boolean"},description:"Is SegmentedButton stretched to the full container's width"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is disabled"},items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  value: string,
  text?: ReactNode,
  className?: string,
  disabled?: boolean,
  tooltip?: string,
  mode?: SegmentedButtonMode,
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[]
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  value: string,
  text?: ReactNode,
  className?: string,
  disabled?: boolean,
  tooltip?: string,
  mode?: SegmentedButtonMode,
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[]
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"string",required:!1}},{key:"mode",value:{name:"union",raw:"'grey' | 'red' | 'orange' | 'yellow' | 'grass' | 'emerald' | 'marengo' | 'marina' | 'purple' | 'violet'",elements:[{name:"literal",value:"'grey'"},{name:"literal",value:"'red'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'grass'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'marengo'"},{name:"literal",value:"'marina'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'violet'"}],required:!1}},{key:"componentsBefore",value:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]",required:!1}},{key:"componentsAfter",value:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]",required:!1}}]}},{name:"TestingProps"}]}],raw:"SegmentedButtonOption[]"},description:"Array of options"},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled array value of selected options"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name of the container"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'grey' | 'red' | 'orange' | 'yellow' | 'grass' | 'emerald' | 'marengo' | 'marina' | 'purple' | 'violet'",elements:[{name:"literal",value:"'grey'"},{name:"literal",value:"'red'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'grass'"},{name:"literal",value:"'emerald'"},{name:"literal",value:"'marengo'"},{name:"literal",value:"'marina'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'violet'"}]},description:"@deprecated Not used, always defaults to marina"},size:{required:!1,tsType:{name:"segmentedButtonSize[number]",raw:"typeof segmentedButtonSize[number]"},description:"Size"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{V as S};
