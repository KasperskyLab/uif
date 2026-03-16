import{u as T,r as w,R as n,j as f,y as x,T as N,S as I}from"./iframe-DlY6n6Um.js";import"./imaskDateOptionsGenerator-CI8FIL_N.js";import{T as A}from"./TextReducer-mTsc_fVR.js";import{v as E}from"./v4-BoP187Zn.js";const R="_container_1jp2e_1",z="_red_1jp2e_1",P="_input_1jp2e_1",M="_toggleBtn_1jp2e_1",V="_text_1jp2e_14",O="_extraSmall_1jp2e_26",D="_orange_1jp2e_51",L="_yellow_1jp2e_101",G="_grass_1jp2e_151",$="_emerald_1jp2e_201",F="_marengo_1jp2e_251",H="_marina_1jp2e_301",J="_purple_1jp2e_351",K="_violet_1jp2e_401",Q="_grey_1jp2e_451",U="_medium_1jp2e_501",W="_iconOnly_1jp2e_509",X="_small_1jp2e_514",Y="_reducer_1jp2e_551",Z="_toggleBtnLoading_1jp2e_604",ee="_iconBefore_1jp2e_628",te="_elementAfter_1jp2e_629",ne="_content_1jp2e_634",oe="_stretched_1jp2e_641",e={container:R,red:z,input:P,toggleBtn:M,text:V,extraSmall:O,orange:D,yellow:L,grass:G,emerald:$,marengo:F,marina:H,purple:J,violet:K,grey:Q,medium:U,iconOnly:W,small:X,reducer:Y,toggleBtnLoading:Z,"toggle-spin":"_toggle-spin_1jp2e_1",iconBefore:ee,elementAfter:te,content:ne,stretched:oe},B=r=>{const{disabled:p,loading:g,onChange:i,className:l,size:o="medium",style:d,iconBefore:c,elementAfter:m,text:a,mode:h="marina",tooltip:t,testId:s,value:u,selected:y}=r,{testAttributes:C}=T(r),_=w.useMemo(()=>E(),[]),q=S=>{i&&i(u,S.currentTarget.checked)},b=a==null||a==="",j=o==="medium"?"BTM3":"BTM4",k=b?null:n.createElement(A,{tooltip:a,placement:"left",className:e.reducer},n.createElement(N,{type:j,className:e.text},a)),v=n.createElement("span",{className:e.content},c&&n.createElement("span",{className:e.iconBefore},c),k,m&&n.createElement("span",{className:e.elementAfter},m));return n.createElement("div",{className:f(e.container,e[o],e[h],l),style:d,"data-checked":y,"data-value":u,...C},n.createElement("input",{id:_,type:"checkbox",className:e.input,disabled:p||g,onChange:q,checked:y,"data-testid":s?`${s}-input`:void 0}),n.createElement("label",{htmlFor:_,className:f(e.toggleBtn,b&&e.iconOnly,g&&e.toggleBtnLoading,l),"data-testid":s?`${s}-label`:void 0},t?n.createElement(x,{text:t},v):v))};B.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{id:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the control."},loading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading state."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, checked: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler."},className:{required:!1,tsType:{name:"string"},description:"Custom class name."},size:{required:!1,tsType:{name:"toggleButtonSizes[number]",raw:"typeof toggleButtonSizes[number]"},description:"Visual size of the control."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the wrapper."},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:"Icon rendered before the text."},elementAfter:{required:!1,tsType:{name:"ReactNode"},description:"Element rendered after the text."},mode:{required:!1,tsType:{name:"toggleButtonModes[number]",raw:"typeof toggleButtonModes[number]"},description:"Color mode used when the control is selected."},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme injection."},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip content shown on hover/focus."},text:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:"Value that identifies this button"},selected:{required:!1,tsType:{name:"boolean"},description:"Is selected"}}};const ae=r=>{const{testAttributes:p}=T(r),{className:g,style:i,items:l,value:o,onChange:d,loading:c,isStretch:m,disabled:a}=r,h=w.useCallback((t,s)=>{d(s?Array.from(new Set([...o,t])):o.filter(u=>u!==t))},[o,d]);return n.createElement(I,{gap:"dependent",wrap:"wrap",align:"center",...p,style:i,className:f(m&&e.stretched)},l.map(t=>n.createElement(B,{key:t.value,...t,selected:o.includes(t.value),onChange:h,disabled:a||t.disabled,loading:c||t.loading})))};ae.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{isStretch:{required:!1,tsType:{name:"boolean"},description:"Is ToggleButton.Group stretched to the full container's width"},items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  id?: string,
  /** Disables the control. */
  disabled?: boolean,
  /** Shows a loading state. */
  loading?: boolean,
  /** Change handler. */
  onChange?: (value: string, checked: boolean) => void
  /** Custom class name. */
  className?: string,
  /** Visual size of the control. */
  size?: ToggleButtonSize,
  /** Inline styles for the wrapper. */
  style?: React.CSSProperties,
  /** Icon rendered before the text. */
  iconBefore?: ReactNode,
  /** Element rendered after the text. */
  elementAfter?: ReactNode,
  /** Color mode used when the control is selected. */
  mode?: ToggleButtonMode,
  /** Custom theme injection. */
  theme?: Theme,
  /** Tooltip content shown on hover/focus. */
  tooltip?: string,
  text?: string,
  /** Value that identifies this button */
  value: string,
  /** Is selected */
  selected?: boolean,
} & Pick<TestingProps, 'testId' | 'componentType'>`,elements:[{name:"signature",type:"object",raw:`{
  id?: string,
  /** Disables the control. */
  disabled?: boolean,
  /** Shows a loading state. */
  loading?: boolean,
  /** Change handler. */
  onChange?: (value: string, checked: boolean) => void
  /** Custom class name. */
  className?: string,
  /** Visual size of the control. */
  size?: ToggleButtonSize,
  /** Inline styles for the wrapper. */
  style?: React.CSSProperties,
  /** Icon rendered before the text. */
  iconBefore?: ReactNode,
  /** Element rendered after the text. */
  elementAfter?: ReactNode,
  /** Color mode used when the control is selected. */
  mode?: ToggleButtonMode,
  /** Custom theme injection. */
  theme?: Theme,
  /** Tooltip content shown on hover/focus. */
  tooltip?: string,
  text?: string,
  /** Value that identifies this button */
  value: string,
  /** Is selected */
  selected?: boolean,
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1},description:"Disables the control."},{key:"loading",value:{name:"boolean",required:!1},description:"Shows a loading state."},{key:"onChange",value:{name:"signature",type:"function",raw:"(value: string, checked: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}},required:!1},description:"Change handler."},{key:"className",value:{name:"string",required:!1},description:"Custom class name."},{key:"size",value:{name:"toggleButtonSizes[number]",raw:"typeof toggleButtonSizes[number]",required:!1},description:"Visual size of the control."},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:"Inline styles for the wrapper."},{key:"iconBefore",value:{name:"ReactNode",required:!1},description:"Icon rendered before the text."},{key:"elementAfter",value:{name:"ReactNode",required:!1},description:"Element rendered after the text."},{key:"mode",value:{name:"toggleButtonModes[number]",raw:"typeof toggleButtonModes[number]",required:!1},description:"Color mode used when the control is selected."},{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme injection."},{key:"tooltip",value:{name:"string",required:!1},description:"Tooltip content shown on hover/focus."},{key:"text",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0},description:"Value that identifies this button"},{key:"selected",value:{name:"boolean",required:!1},description:"Is selected"}]}},{name:"Pick",elements:[{name:"TestingProps"},{name:"union",raw:"'testId' | 'componentType'",elements:[{name:"literal",value:"'testId'"},{name:"literal",value:"'componentType'"}]}],raw:"Pick<TestingProps, 'testId' | 'componentType'>"}]}],raw:"ToggleButtonProps[]"},description:"Array of options"},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled array value of selected options"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Handler for group value change"}}};export{B as T,ae as a};
