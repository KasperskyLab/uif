import{b as y}from"./imaskDateOptionsGenerator-CH929rNC.js";import{R as h}from"./RangeSeparator-C-wzpZs9.js";import{C as x,R as a,H as k}from"./iframe-4-PRSI1I.js";import{T as _}from"./TimeInput-ufExk_If.js";const I=x`
  display: flex;
  flex-wrap: nowrap;
  height: 32px;
  gap: 4px;
  align-items: center;
  border-radius: 8px;
  padding: 6px 12px;
  border: 1px solid var(--input_datetime_picker--border--enabled);

  &.error:not(:has(.kl6-textbox-readonly)):not(:has(.kl6-textbox-disabled)) {
    border-color: var(--input_datetime_picker--border--error)
  }

  &.success:not(:has(.kl6-textbox-readonly)):not(:has(.kl6-textbox-disabled)) {
    border-color: var(--input_datetime_picker--border--success)
  }

  &:has(.kl6-textbox-readonly, .kl6-textbox-disabled) {
    border-color: var(--input_datetime_picker--border--disabled)
  }

  &:hover {
    border-color: var(--input_datetime_picker--border--hover);
  }

  &:has(.ant-input:focus, .ant-input:focus-visible) {
    border-color: var(--input_datetime_picker--border--enabled);
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }

  .ant-input.ant-input.ant-input {
    &,
    &:hover,
    &:focus,
    &:focus-visible {
      border: none;
      background: transparent;
      box-shadow: none;
      field-sizing: content;
      width: auto;
      padding: 0;
      border-radius: 0;
      height: auto;
    }
  }

  &:has(input:not(:placeholder-shown), input:focus) .hexa-ui-range-separator {
    color: var(--text--primary);
  }
`,V=k.div`
  ${I}
`,l=({format:t=y,testId:e,placeholder:i,theme:d,valueStart:o,valueEnd:s,onChangeStart:u,onChangeEnd:p,className:m,disabled:c,readOnly:f,validationStatus:r})=>{const n=(b,g,v)=>a.createElement(_,{value:b,testId:v,format:t,placeholder:i,onChange:g,theme:d,className:m,disabled:c,readOnly:f,validationStatus:r});return a.createElement(V,{className:`hexa-ui-time-range ${r}`},n(o,u,e&&`${e}-start`),a.createElement(h,null),n(s,p,e&&`${e}-end`))};try{l.displayName="RangeTimeInput",l.__docgenInfo={description:"",displayName:"RangeTimeInput",props:{format:{defaultValue:{value:"HH:mm:ss"},description:"",name:"format",required:!1,type:{name:"enum",value:[{value:'"HH:mm"'},{value:'"HH:mm:ss"'},{value:'"HH:mm:ss.ms"'},{value:'"h:mm aaa"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},valueStart:{defaultValue:null,description:"",name:"valueStart",required:!1,type:{name:"string"}},valueEnd:{defaultValue:null,description:"",name:"valueEnd",required:!1,type:{name:"string"}},onChangeStart:{defaultValue:null,description:"",name:"onChangeStart",required:!1,type:{name:"((value: string, mask?: any) => void)"}},onChangeEnd:{defaultValue:null,description:"",name:"onChangeEnd",required:!1,type:{name:"((value: string, mask?: any) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Read only",name:"readOnly",required:!1,type:{name:"boolean"}},validationStatus:{defaultValue:null,description:"Validation status",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{l as R};
