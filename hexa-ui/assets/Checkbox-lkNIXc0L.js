import{A as w}from"./AdditionalContent-D1SVuAXm.js";import{ak as t,H as b,al as m,a0 as F,a1 as I,a5 as T,u as p,R as l,j as x,av as N}from"./iframe-DlY6n6Um.js";import{u as R}from"./useId-4A31Gjf8.js";import{F as L}from"./FormLabel-CKFB06hk.js";import{C as v}from"./index-DGKnGyLh.js";const M=I(),H=e=>F`
  color: ${e("default.enabled.color")};
  line-height: ${t[10]}px;

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
    height: ${t[7]}px;
    width: ${t[7]}px;
    border-color: ${e("default.enabled.border")};
    background-color: ${e("default.enabled.background.unselected")};
    border-radius: ${m[2]}px;
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border-color: ${e("default.enabled.background.selected")};
    background-color: ${e("default.enabled.background.selected")};
    &::after {
      border-color: ${e("default.enabled.checkColor")};
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
    background-color: ${e("default.enabled.checkColor")};
    width: ${t[4]}px;
    height: ${t[1]}px;
    border-radius: ${m[2]}px;
  }

  // hover
  &:hover {
    .ant-checkbox-inner {
      background-color: ${e("default.hover.background.unselected")};
      border-color: ${e("default.hover.border")};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${e("default.hover.background.selected")};
      border-color: transparent;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      border-color: ${e("default.hover.checkColor")};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${e("default.hover.checkColor")};
    }
  }    

  // focus
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${e("default.enabled.border")};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }
  .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    box-shadow: ${e("focus.boxShadow")};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner{
    background-color: ${e("default.enabled.background.selected")};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    border-color: ${e("default.enabled.checkColor")};
  }
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: ${e("default.enabled.checkColor")};
  }

  // active
  &:active {
    .ant-checkbox-inner {
      background-color: ${e("default.active.background.unselected")};
      border-color: ${e("default.active.border")};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${e("default.active.background.selected")};
      border-color: ${e("default.active.border")};
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${e("default.active.checkColor")};
    } 
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${e("default.active.checkColor")};
    }
  }

  // invalid
  &&.kl6-checkbox-invalid {
    .ant-checkbox-inner {
      border-color: ${e("invalid.enabled.border")};
      background-color: ${e("invalid.enabled.background.unselected")};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${e("invalid.enabled.background.selected")};
      border-color: ${e("invalid.enabled.border")};
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${e("invalid.enabled.checkColor")};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${e("invalid.enabled.checkColor")};
    }
  }

  // disabled
  &.ant-checkbox-wrapper-disabled, .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled {
    + span {
      color: ${e("default.disabled.color")};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${e("default.disabled.color")};
      }
    }
    .ant-checkbox-inner {
      background-color: ${e("default.disabled.background.unselected")} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${e("default.disabled.background.selected")} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${e("default.disabled.checkColor")} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${e("default.disabled.checkColor")} !important;
    }
  }

  // readonly
  &.kl6-checkbox-readonly.ant-checkbox-wrapper-disabled,
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    cursor: default;
  }
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    + span {
      color: ${e("default.readonly.color")};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${e("default.readonly.color")};
      }
    }
    .ant-checkbox-inner {
      background-color: ${e("default.readonly.background.unselected")} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${e("default.readonly.background.selected")} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${e("default.readonly.checkColor")} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${e("default.readonly.checkColor")} !important;
    }
  }
`,A=H(M),E=b(v.Group)`
  &.kl6-checkbox-group-vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${t[4]}px;
  }
  
  &.kl6-checkbox-group-horizontal {
    display: flex;
    flex-direction: row;
    gap: ${t[8]}px;
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`,G=e=>T({...e,mode:void 0},{componentName:"checkbox",defaultValues:{}}),O=b(v).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${A}`,D=b.div`
  display: flex;
  flex-direction: column;
`,u=e=>{const a=G(e),r=p(a);return l.createElement(V,{role:"checkbox",...r,mode:e.mode})},V=({className:e,invalid:a,children:r,disabled:i,readonly:d,required:c,tooltip:s,mode:o="primary",testAttributes:n,description:g,dependentElement:y,id:C,...$})=>{const h=C||R(),k=N();return l.createElement("div",{...n,className:"kl6-checkbox-wrapper"},l.createElement(O,{id:h,disabled:i||d,className:x(e,{"kl6-checkbox-invalid":a,"kl6-checkbox-readonly":d}),...$},typeof r=="string"?l.createElement(L,{disabled:i,required:c,tooltip:s,mode:o,htmlFor:h,getPopupContainer:k.getPopupContainer??(q=>k.usePortal?document.body:q.parentElement)},r):r),l.createElement(w,{description:g,dependentElement:y}))},f=({direction:e="vertical",options:a,className:r,role:i="checkbox-group",onChange:d,...c})=>{const{testAttributes:s,...o}=p(c);return l.createElement(E,{...s,...o,onChange:d,role:i,className:x(r,{"kl6-checkbox-group-vertical":e==="vertical","kl6-checkbox-group-horizontal":e==="horizontal"})},a==null?void 0:a.map(n=>l.createElement(u,{...o,key:n.value,value:n.value,disabled:n.disabled&&!o.readonly||o.disabled,readonly:n.readonly&&!o.disabled||o.readonly,mode:n.mode||o.mode,description:n.description,invalid:n.invalid||o.invalid,klId:`${c.klId}-${n.value}`,testId:`${c.testId}-${n.value}`},n.label)))};u.Group=f;u.__docgenInfo={description:"",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  direction = 'vertical',
  options,
  className,
  role = 'checkbox-group',
  onChange,
  ...rawProps
}: CheckboxGroupProps`,optional:!1,type:{name:"intersection",raw:`AntdCheckboxGroupProps & CheckboxThemeProps & TestingProps & {
  /** Group options */
  options?: CheckboxOption[],
  /** Is invalid */
  invalid?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Form label mode */
  mode?: FormLabelMode,
  /** Group direction */
  direction?: 'horizontal' | 'vertical',
  /** HTML role */
  role?: string,
  /** Called when the state changes */
  onChange?: (checkedValue: any) => void
}`,elements:[{name:"AntdCheckboxGroupProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: Theme
}`,signature:{properties:[{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"}]}},{name:"TestingProps"},{name:"signature",type:"object",raw:`{
  /** Group options */
  options?: CheckboxOption[],
  /** Is invalid */
  invalid?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Form label mode */
  mode?: FormLabelMode,
  /** Group direction */
  direction?: 'horizontal' | 'vertical',
  /** HTML role */
  role?: string,
  /** Called when the state changes */
  onChange?: (checkedValue: any) => void
}`,signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"intersection",raw:`Omit<CheckboxProps, 'children'> & {
  label: CheckboxProps['children']
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`AntdCheckboxProps & CheckboxThemeProps & TestingProps & WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}>`,elements:[{name:"AntdCheckboxProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: Theme
}`,signature:{properties:[{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"}]}},{name:"TestingProps"},{name:"WithAdditionalContent",elements:[{name:"signature",type:"object",raw:`{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"React children"},{key:"className",value:{name:"string",required:!1},description:"Custom class name"},{key:"readonly",value:{name:"boolean",required:!1},description:"Is readonly"},{key:"invalid",value:{name:"boolean",required:!1},description:"Is invalid"},{key:"role",value:{name:"string",required:!1},description:"HTML role"},{key:"onFocus",value:{name:"FocusEventHandler",required:!1},description:"Called when the checkbox is focused"},{key:"required",value:{name:"boolean",required:!1},description:"If form label is required"},{key:"tooltip",value:{name:"ReactNode",required:!1},description:"Form label tooltip content"},{key:"mode",value:{name:"FormLabelMode",required:!1},description:"Form label mode"}]}}],raw:`WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}>`}]},{name:"literal",value:"'children'"}],raw:"Omit<CheckboxProps, 'children'>"},{name:"signature",type:"object",raw:`{
  label: CheckboxProps['children']
}`,signature:{properties:[{key:"label",value:{name:"intersection['children']",raw:"CheckboxProps['children']",required:!0}}]}}]}],raw:"CheckboxOption[]",required:!1},description:"Group options"},{key:"invalid",value:{name:"boolean",required:!1},description:"Is invalid"},{key:"readonly",value:{name:"boolean",required:!1},description:"Is readonly"},{key:"mode",value:{name:"FormLabelMode",required:!1},description:"Form label mode"},{key:"direction",value:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}],required:!1},description:"Group direction"},{key:"role",value:{name:"string",required:!1},description:"HTML role"},{key:"onChange",value:{name:"signature",type:"function",raw:"(checkedValue: any) => void",signature:{arguments:[{type:{name:"any"},name:"checkedValue"}],return:{name:"void"}},required:!1},description:"Called when the state changes"}]}}],alias:"CheckboxGroupProps"}}],returns:null}],displayName:"Checkbox",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};f.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},options:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<CheckboxProps, 'children'> & {
  label: CheckboxProps['children']
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`AntdCheckboxProps & CheckboxThemeProps & TestingProps & WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}>`,elements:[{name:"AntdCheckboxProps"},{name:"signature",type:"object",raw:`{
  /** Custom theme */
  theme?: Theme
}`,signature:{properties:[{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"}]}},{name:"TestingProps"},{name:"WithAdditionalContent",elements:[{name:"signature",type:"object",raw:`{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"React children"},{key:"className",value:{name:"string",required:!1},description:"Custom class name"},{key:"readonly",value:{name:"boolean",required:!1},description:"Is readonly"},{key:"invalid",value:{name:"boolean",required:!1},description:"Is invalid"},{key:"role",value:{name:"string",required:!1},description:"HTML role"},{key:"onFocus",value:{name:"FocusEventHandler",required:!1},description:"Called when the checkbox is focused"},{key:"required",value:{name:"boolean",required:!1},description:"If form label is required"},{key:"tooltip",value:{name:"ReactNode",required:!1},description:"Form label tooltip content"},{key:"mode",value:{name:"FormLabelMode",required:!1},description:"Form label mode"}]}}],raw:`WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}>`}]},{name:"literal",value:"'children'"}],raw:"Omit<CheckboxProps, 'children'>"},{name:"signature",type:"object",raw:`{
  label: CheckboxProps['children']
}`,signature:{properties:[{key:"label",value:{name:"intersection['children']",raw:"CheckboxProps['children']",required:!0}}]}}]}],raw:"CheckboxOption[]"},description:"Group options"},invalid:{required:!1,tsType:{name:"boolean"},description:"Is invalid"},readonly:{required:!1,tsType:{name:"boolean"},description:"Is readonly"},mode:{required:!1,tsType:{name:"FormLabelMode"},description:"Form label mode"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Group direction",defaultValue:{value:"'vertical'",computed:!1}},role:{required:!1,tsType:{name:"string"},description:"HTML role",defaultValue:{value:"'checkbox-group'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedValue: any) => void",signature:{arguments:[{type:{name:"any"},name:"checkedValue"}],return:{name:"void"}}},description:"Called when the state changes"}}};export{u as C,D as S,f as a,H as g};
