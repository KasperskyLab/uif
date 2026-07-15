import{A as w}from"./AdditionalContent-CRQIPW1O.js";import{H as p,C as T,w as m,ag as E,R as n,l as f,x as v}from"./iframe-4-PRSI1I.js";import{u as N}from"./useId-B0iEqS7b.js";import{F as H}from"./FormLabel-CoXJxjwh.js";import{C as g}from"./index-C07DIHtC.js";const A=()=>T`
  color: var(--checkbox--text--base--enabled);
  line-height: 20px;

  && {
    position: relative;
    display: flex;
    align-items: flex-start;
  }

  &.ant-checkbox-wrapper {
    display: inline-flex;
    flex-direction: row;
    gap: 4px;
  }

  &.ant-checkbox-wrapper + &.ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 3px;
  }

  .ant-checkbox + span {
    padding: 0;
    & .form-label {
      cursor: pointer;
    }
  }

  .ant-checkbox-inner {
    height: 14px;
    width: 14px;
    border-color: var(--checkbox--border--base--enabled);
    background-color: var(--checkbox--bg--base--enabled);
    border-radius: var(--radius--s);
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border-color: var(--checkbox--bg--base--enabled_selected);
    background-color: var(--checkbox--bg--base--enabled_selected);
    &::after {
      border-color: var(--checkbox--icon--base--enabled);
      border-radius: 1px;
      border-bottom-left-radius: 2px;
      border-top-right-radius: 2px;
      width: 5px;
      height: 7.5px;
    }
  }
  .ant-checkbox-checked::after {
    border: none;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: var(--checkbox--icon--base--enabled);
    width: 8px;
    height: 2px;
    border-radius: var(--radius--s);
  }

  // hover
  &:hover {
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--hover);
      border-color: var(--checkbox--border--base--hover);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--hover_selected);
      border-color: transparent;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--hover);
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--hover);
    }
  }    

  // focus
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--checkbox--border--base--enabled);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }
  .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner{
    background-color: var(--checkbox--bg--base--enabled_selected);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    border-color: var(--checkbox--icon--base--enabled);
  }
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: var(--checkbox--icon--base--enabled);
  }

  // active
  &:active {
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--active);
      border-color: var(--checkbox--border--base--active);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--active_selected);
      border-color: var(--checkbox--border--base--active);
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--active);
    } 
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--active);
    }
  }

  // invalid
  &&.kl6-checkbox-invalid {
    .ant-checkbox-inner {
      border-color: var(--checkbox--border--danger--enabled);
      background-color: var(--checkbox--bg--danger--enabled);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--danger--enabled_selected);
      border-color: var(--checkbox--border--danger--enabled);
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--danger--enabled);
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--danger--enabled);
    }
  }

  // disabled
  &.ant-checkbox-wrapper-disabled, .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled {
    + span {
      color: var(--checkbox--text--base--disabled);
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: var(--checkbox--text--base--disabled);
      }
    }
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--disabled) !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--disabled_selected) !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--disabled) !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--disabled) !important;
    }
  }

  // readonly
  &.kl6-checkbox-readonly.ant-checkbox-wrapper-disabled,
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    cursor: default;
  }
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    + span {
      color: var(--checkbox--text--base--readonly);
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: var(--checkbox--text--base--readonly);
      }
    }
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--readonly) !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--readonly_selected) !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--readonly) !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--readonly) !important;
    }
  }
`,F=A(),L=p(g.Group)`
  &.kl6-checkbox-group-vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing--gap_related);
  }
  
  &.kl6-checkbox-group-horizontal {
    display: flex;
    flex-direction: row;
    gap: var(--spacing--gap_grouped);
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`,M=p(g)`${F}`,x=p.div`
  display: flex;
  flex-direction: column;
`,i=({className:r,invalid:o,children:c,disabled:l,readonly:d,required:b,theme:t,tooltip:s,mode:a="primary",description:e,dependentElement:y,id:I,..._})=>{const{testAttributes:q,...V}=m(_),k=I||N(),h=E();return n.createElement("div",{...q,className:"kl6-checkbox-wrapper"},n.createElement(M,{id:k,disabled:l||d,className:f(v(r,t),{"kl6-checkbox-invalid":o,"kl6-checkbox-readonly":d}),role:"checkbox",...V},typeof c=="string"?n.createElement(H,{disabled:l,required:b,tooltip:s,mode:a,htmlFor:k,getPopupContainer:h.getPopupContainer??(C=>h.usePortal?document.body:C.parentElement)},c):c),n.createElement(w,{description:e,dependentElement:y}))},u=({direction:r="vertical",options:o,className:c,role:l="checkbox-group",onChange:d,theme:b,...t})=>{const{testAttributes:s,...a}=m(t);return n.createElement(L,{...s,...a,onChange:d,role:l,className:f(v(c,b),{"kl6-checkbox-group-vertical":r==="vertical","kl6-checkbox-group-horizontal":r==="horizontal"})},o==null?void 0:o.map(e=>n.createElement(i,{...a,key:e.value,value:e.value,disabled:e.disabled&&!a.readonly||a.disabled,readonly:e.readonly&&!a.disabled||a.readonly,mode:e.mode||a.mode,description:e.description,invalid:e.invalid||a.invalid,klId:`${t.klId}-${e.value}`,testId:`${t.testId}-${e.value}`},e.label)))};i.Group=u;try{x.displayName="StyledCheckboxWrapper",x.__docgenInfo={description:"",displayName:"StyledCheckboxWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"Is readonly",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},role:{defaultValue:{value:"checkbox-group"},description:"HTML role",name:"role",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Called when the checkbox is focused",name:"onFocus",required:!1,type:{name:"FocusEventHandler"}},required:{defaultValue:null,description:"If form label is required",name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Form label tooltip content",name:"tooltip",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"primary"},description:"Form label mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},dependentElement:{defaultValue:null,description:"",name:"dependentElement",required:!1,type:{name:"ReactNode"}}}}}catch{}try{u.displayName="CheckboxGroup",u.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Is readonly",name:"readonly",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"primary"},description:"Form label mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'}]}},direction:{defaultValue:{value:"vertical"},description:"Group direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},role:{defaultValue:{value:"checkbox-group"},description:"HTML role",name:"role",required:!1,type:{name:"string"}}}}}catch{}export{u as C,x as S,i as a,A as g};
