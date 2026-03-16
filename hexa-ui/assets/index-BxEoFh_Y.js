import{H as w,a0 as I,j as b,R as o,T as P,L as R,u as q,aS as v}from"./iframe-DlY6n6Um.js";import{s as M}from"./shouldForwardProp-Cdy-RLhZ.js";import{t as B,F as $}from"./Field-D0_vkgR2.js";import{B as k}from"./Button-CgqUalcg.js";import{C as f}from"./Checkbox-lkNIXc0L.js";import{C as j}from"./CodeViewer-CqIgjl1m.js";import{T as u}from"./Textbox-BkTLkszj.js";import{R as K}from"./Radio-Br6rqD2P.js";import{S as V}from"./Search-m7dg8BWt.js";import{S as _}from"./SegmentedButton-BYa_mbPF.js";import{S as A}from"./Select-Dfy6UA0z.js";import{S as x}from"./Status-BfypiNrT.js";import{T as O}from"./Tag-Cd3srqW9.js";import{T as U}from"./Toggle-3Jmrg0tX.js";import{a as J}from"./ToggleButtonGroup-DEwTHcI_.js";import{U as X}from"./Uploader-DYFVyYFm.js";import{T as H}from"./TimeInput-DEKO6Dww.js";import{R as L}from"./RangePicker-CGKhcdsN.js";import{C as z}from"./Calendar-DhiYNJky.js";const C=B.map(n=>`.kl6-field-control-box > ${n}`).join(", "),D=w.div.withConfig({shouldForwardProp:M})`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: column;

  .kl6-field:not(:first-child) {
    margin-top: 16px;
  }
`,Q=w($).withConfig({shouldForwardProp:n=>!["marginBefore","fieldClassName"].includes(n)})`
  ${({marginBefore:n})=>{const t=typeof n=="string";return I`
      &&:not(:first-child) {
        margin-top: ${t?n:`${n||16}px`};
      }
      &:has(${C}) + &:has(${C}) {
        margin-top: ${t?n:`${n||8}px`};
      }
    `}}
`,Y=({className:n,wrapperClassNames:t,fieldClassName:e,fieldWrapperClassNames:r})=>{const p=b(n,e);let a;return(t||r)&&(a={},a.labelClassName=b(t==null?void 0:t.labelClassName,r==null?void 0:r.labelClassName),a.controlClassName=b(t==null?void 0:t.controlClassName,r==null?void 0:r.controlClassName)),{className:p,wrapperClassNames:a}},N=n=>{switch(n.component){case"textbox":{const{component:t,...e}=n;return o.createElement(u,{...e})}case"textbox-masked":{const{component:t,...e}=n;return o.createElement(u.Masked,{...e})}case"textbox-number":{const{component:t,...e}=n;return o.createElement(u.Number,{...e})}case"textbox-password":{const{component:t,...e}=n;return o.createElement(u.Password,{...e})}case"textbox-textarea":{const{component:t,...e}=n;return o.createElement(u.Textarea,{...e})}case"select":{const{component:t,...e}=n;return o.createElement(A,{...e})}case"search":{const{component:t,...e}=n;return o.createElement(V,{...e})}case"calendar":{const{component:t,...e}=n;return o.createElement(z,{...e})}case"range-picker":{const{component:t,...e}=n;return o.createElement(L,{...e})}case"time-input":{const{component:t,...e}=n;return o.createElement(H,{...e})}case"code-viewer":{const{component:t,...e}=n;return o.createElement(j,{...e})}case"button":{const{component:t,...e}=n;return o.createElement(k,{...e})}case"split-button":{const{component:t,...e}=n;return o.createElement(k.SplitButton,{...e})}case"segmented-button":{const{component:t,...e}=n;return o.createElement(_,{...e})}case"checkbox":{const{component:t,...e}=n;return o.createElement(f,{...e})}case"checkbox-group":{const{component:t,...e}=n;return o.createElement(f.Group,{...e})}case"radio":{const{component:t,...e}=n;return o.createElement(K,{...e})}case"toggle":{const{component:t,...e}=n;return o.createElement(U,{...e})}case"toggle-button-group":{const{component:t,...e}=n;return o.createElement(J,{...e})}case"link":{const{component:t,...e}=n;return o.createElement(R,{...e})}case"text":{const{component:t,...e}=n;return o.createElement(P,{...e})}case"status":{const{component:t,...e}=n;return o.createElement(x,{...e})}case"tag-group":{const{component:t,...e}=n;return o.createElement(O.Group,{...e})}case"status-group":{const{component:t,...e}=n;return o.createElement(x.Group,{...e})}case"uploader":{const{component:t,...e}=n;return o.createElement(X,{...e})}default:return o.createElement(o.Fragment,null)}};N.__docgenInfo={description:"",methods:[],displayName:"getMappedControl"};const g=n=>{const{className:t,disabled:e,items:r,style:p,testAttributes:a,...s}=q(n);return o.createElement(D,{className:t,style:p,...a},r.map((c,d)=>{if(o.isValidElement(c))return c;const{control:l,...i}=c,{className:m,wrapperClassNames:E,fieldClassName:S,fieldWrapperClassNames:G,...h}=v.objects({skipUndefined:!0})(s,i),T=o.isValidElement(l)?l:N(l),F=Y({className:m,wrapperClassNames:E,fieldClassName:S,fieldWrapperClassNames:G});return o.createElement(Q,{key:i.testId||i.klId||d,...F,...h,control:T})}))};g.__docgenInfo={description:"",methods:[],displayName:"FieldSet",props:{className:{required:!1,tsType:{name:"string"},description:"Custom class name for wrapper of fields"},fieldClassName:{required:!1,tsType:{name:"FieldProps['className']",raw:"FieldProps['className']"},description:"Custom class name for fields"},fieldWrapperClassNames:{required:!1,tsType:{name:"FieldProps['wrapperClassNames']",raw:"FieldProps['wrapperClassNames']"},description:"Custom class name for label and control wrappers of Field"},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"FieldSetItemConfig | ReactElement",elements:[{name:"intersection",raw:`Omit<FieldProps, 'stretch' | 'control'> & {
  control: FieldSetItemControl,
  /** Works only when control is set by object, not JSX */
  disabled?: boolean,
  marginBefore?: string | number
}`,elements:[{name:"Omit",elements:[{name:"FieldProps"},{name:"union",raw:"'stretch' | 'control'",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'control'"}]}],raw:"Omit<FieldProps, 'stretch' | 'control'>"},{name:"signature",type:"object",raw:`{
  control: FieldSetItemControl,
  /** Works only when control is set by object, not JSX */
  disabled?: boolean,
  marginBefore?: string | number
}`,signature:{properties:[{key:"control",value:{name:"union",raw:"ReactElement | FieldSetControlConfig",elements:[{name:"ReactElement"},{name:"union",raw:`({ component: GetComponentName<'textbox'> } & TextboxProps)
| ({ component: GetComponentName<'textbox-masked'> } & TextboxMaskedProps)
| ({ component: GetComponentName<'textbox-number'> } & TextboxNumberProps)
| ({ component: GetComponentName<'textbox-password'> } & TextboxPasswordProps)
| ({ component: GetComponentName<'textbox-textarea'> } & TextboxTextareaProps)
| ({ component: GetComponentName<'select'> } & SelectProps)
| ({ component: GetComponentName<'search'> } & SearchProps)
| ({ component: GetComponentName<'calendar'> } & CalendarProps)
| ({ component: GetComponentName<'range-picker'> } & RangePickerProps)
| ({ component: GetComponentName<'time-input'> } & TimeInputProps)
| ({ component: GetComponentName<'code-viewer'> } & CodeViewerProps<any>)
| ({ component: GetComponentName<'button'> } & ButtonProps)
| ({ component: GetComponentName<'split-button'> } & SplitButtonProps)
| ({ component: GetComponentName<'segmented-button'> } & SegmentedButtonProps)
| ({ component: GetComponentName<'toggle-button-group'> } & ToggleButtonGroupProps)
| ({ component: GetComponentName<'checkbox'> } & CheckboxProps)
| ({ component: GetComponentName<'checkbox-group'> } & CheckboxGroupProps)
| ({ component: GetComponentName<'radio'> } & RadioProps)
| ({ component: GetComponentName<'toggle'> } & ToggleProps)
| ({ component: GetComponentName<'link'> } & LinkProps)
| ({ component: GetComponentName<'text'> } & TextProps)
| ({ component: GetComponentName<'status'> } & StatusProps)
| ({ component: GetComponentName<'tag-group'> } & TagGroupProps)
| ({ component: GetComponentName<'status-group'> } & StatusGroupProps)
| ({ component: GetComponentName<'uploader'> } & UploaderProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],required:!0}},{key:"disabled",value:{name:"boolean",required:!1},description:"Works only when control is set by object, not JSX"},{key:"marginBefore",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}}]},{name:"ReactElement"}]}],raw:"FieldSetItem[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Z={none:"before",top:"top",aside:"before",right:"after"};function W(n){return o.isValidElement(n)?n:typeof n=="string"||typeof n=="number"?o.createElement(P,null,n):o.createElement(o.Fragment,null)}const y=({data:n,gridLayout:t,labelPosition:e,keyRequired:r,keyTooltip:p,padding:a,wrapperClasses:s,testId:c,klId:d})=>{if(!n)return null;const l=n.map(m=>({label:m.pairKey,klId:m.klId||m.pairKey,testId:m.testId||m.pairKey,control:W(m.pairValue),required:r,tooltip:p,marginBefore:a})),i=t!=null&&t.cols?{firstCol:t.cols[0],secondCol:t.cols[1]}:void 0;return o.createElement(g,{gridLayout:i,testId:c,klId:d,labelPosition:e&&Z[e],items:l,fieldWrapperClassNames:{labelClassName:s==null?void 0:s.keyClassName,controlClassName:s==null?void 0:s.valueClassName}})};y.__docgenInfo={description:"",methods:[],displayName:"KeyValueMapper",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(KeyValuePair & TestingProps)[]"},description:""}}};const ee=Object.assign(g,{KeyValueMapper:y});ee.KeyValueMapper.displayName="FieldSet.KeyValueMapper";export{ee as F};
