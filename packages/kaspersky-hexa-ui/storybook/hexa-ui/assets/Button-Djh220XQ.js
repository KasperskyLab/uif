import{u as _,R as e,at as q,j as p,aa as b,af as E,ag as S}from"./iframe-zz6a49H8.js";import{D as k}from"./Dropdown-D5otA5yN.js";import{L as R}from"./Loader-Y1gOuUZF.js";import{B as h}from"./button-nrifPwP7.js";const x="_h1_gcnhg_1",M="_h2_gcnhg_10",L="_h4_gcnhg_28",N="_h5_gcnhg_37",C="_h6_gcnhg_46",D="_btr2_gcnhg_55",H="_btr3_gcnhg_64",z="_btr4_gcnhg_73",O="_btr5_gcnhg_82",A="_btm2_gcnhg_91",G="_extraLarge_gcnhg_91",I="_buttonText_gcnhg_91",j="_btm3_gcnhg_100",F="_medium_gcnhg_100",V="_large_gcnhg_100",W="_btm4_gcnhg_109",$="_small_gcnhg_109",J="_btm5_gcnhg_118",X="_mtr3_gcnhg_127",K="_mtr4_gcnhg_136",Q="_buttonGroup_gcnhg_145",U="_splitButton_gcnhg_158",Y="_primary_gcnhg_158",Z="_dangerFilled_gcnhg_159",ee="_secondary_gcnhg_163",te="_button_gcnhg_91",ne="_buttonLoading_gcnhg_201",re="_buttonPressed_gcnhg_216",oe="_tertiary_gcnhg_262",ae="_dangerOutlined_gcnhg_318",se="_ai_gcnhg_347",ie="_iconOnly_gcnhg_386",t={h1:x,h2:M,h4:L,h5:N,h6:C,btr2:D,btr3:H,btr4:z,btr5:O,btm2:A,extraLarge:G,buttonText:I,btm3:j,medium:F,large:V,btm4:W,small:$,btm5:J,mtr3:X,mtr4:K,buttonGroup:Q,splitButton:U,primary:Y,dangerFilled:Z,secondary:ee,button:te,buttonLoading:ne,buttonPressed:re,tertiary:oe,dangerOutlined:ae,ai:se,iconOnly:ie},le=["primary","secondary","tertiary","dangerFilled","dangerOutlined","ai"],ge=["primary","secondary","dangerFilled"],y=(n,r)=>e.isValidElement(n)?e.cloneElement(n,{key:r}):n,c=({children:n,className:r,iconBefore:o,iconAfter:a,isPressed:i,loading:l,mode:s="primary",size:d="medium",text:m,theme:T,type:v,...P})=>{const{testAttributes:g,...B}=_(P),w=e.useMemo(()=>le.includes(s)?s:(q("mode",s),"primary"),[s]),u=m||n;return e.createElement(h,{...g,...B,className:p(b(r,T),"hexa-ui-button",t.button,t[d],t[w],i&&t.buttonPressed,l&&t.buttonLoading,!u&&t.iconOnly),htmlType:v,icon:void 0,loading:l},u?[y(o,"iconBefore"),e.createElement("span",{key:"radio",className:t.buttonText}," ",u," "),y(a,"iconAfter")]:o||a,l&&e.createElement(R,{size:"small",...E("loader",g)}))},f=n=>{const{testAttributes:r,className:o,...a}=_(n);return e.createElement(h.Group,{...r,...a,className:p(o,t.buttonGroup)})},ce=({className:n,disabled:r,loading:o,style:a,mode:i="primary",theme:l,items:s,dropdownPlacement:d,...m})=>e.createElement(f,{className:p(b(n,l),t.splitButton,t[i]),style:a},e.createElement(c,{mode:i,loading:o,disabled:r,...m,iconAfter:void 0,isPressed:void 0,size:void 0}),e.createElement(k,{disabled:r,trigger:["click"],overlay:s,placement:d},e.createElement(c,{disabled:r,mode:i,iconBefore:e.createElement(S,null)})));c.Group=f;c.SplitButton=ce;c.__docgenInfo={description:"",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`AntdButtonGroupProps & {
  /** React children */
  children?: ReactNode
} & TestingProps`,elements:[{name:"AntdButtonGroupProps"},{name:"signature",type:"object",raw:`{
  /** React children */
  children?: ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"React children"}]}},{name:"TestingProps"}],alias:"ButtonGroupProps"}}],returns:{type:{name:"JSX.Element"}}},{name:"SplitButton",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  disabled,
  loading,
  style,
  mode = 'primary',
  theme,
  items,
  dropdownPlacement,
  ...props
}: SplitButtonProps`,optional:!1,type:{name:"intersection",raw:`Omit<ButtonProps, 'size' | 'mode' | 'iconAfter' | 'isPressed'> & {
  /** Color mode */
  mode?: SplitButtonMode,
  /** Dropdown overlay */
  items: DropdownProps['overlay'],
  /** Dropdown items */
  dropdownPlacement?: DropdownProps['placement']
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`BaseThemedButtonProps & {
  /** Element id */
  id?: string;
  /** Disabled state */
  disabled?: boolean,
  /** Loading state */
  loading?: boolean,
  /** Css class */
  className?: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** On click handler */
  onClick?: MouseEventHandler<HTMLElement>,
  /** Text */
  text?: string,
  /** HTML attribute 'type' */
  type?: ButtonHTMLType,
  /** Display in :active state */
  isPressed?: boolean,
  /** React children */
  children?: ReactNode,
  style?: React.CSSProperties
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  /** Size */
  size?: ButtonSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ButtonMode
}`,signature:{properties:[{key:"size",value:{name:"literal",value:"`${Exclude<Size, Size.ExtraSmall>}`",required:!1},description:"Size"},{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"},{key:"mode",value:{name:"buttonModes[number]",raw:"typeof buttonModes[number]",required:!1},description:"Color mode"}]}},{name:"signature",type:"object",raw:`{
  /** Element id */
  id?: string;
  /** Disabled state */
  disabled?: boolean,
  /** Loading state */
  loading?: boolean,
  /** Css class */
  className?: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** On click handler */
  onClick?: MouseEventHandler<HTMLElement>,
  /** Text */
  text?: string,
  /** HTML attribute 'type' */
  type?: ButtonHTMLType,
  /** Display in :active state */
  isPressed?: boolean,
  /** React children */
  children?: ReactNode,
  style?: React.CSSProperties
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"Element id"},{key:"disabled",value:{name:"boolean",required:!1},description:"Disabled state"},{key:"loading",value:{name:"boolean",required:!1},description:"Loading state"},{key:"className",value:{name:"string",required:!1},description:"Css class"},{key:"iconBefore",value:{name:"ReactNode",required:!1},description:"Icon before text"},{key:"iconAfter",value:{name:"ReactNode",required:!1},description:"Icon after text"},{key:"onClick",value:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>",required:!1},description:"On click handler"},{key:"text",value:{name:"string",required:!1},description:"Text"},{key:"type",value:{name:"ButtonHTMLType",required:!1},description:"HTML attribute 'type'"},{key:"isPressed",value:{name:"boolean",required:!1},description:"Display in :active state"},{key:"children",value:{name:"ReactNode",required:!1},description:"React children"},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}},{name:"TestingProps"}]},{name:"union",raw:"'size' | 'mode' | 'iconAfter' | 'isPressed'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'mode'"},{name:"literal",value:"'iconAfter'"},{name:"literal",value:"'isPressed'"}]}],raw:"Omit<ButtonProps, 'size' | 'mode' | 'iconAfter' | 'isPressed'>"},{name:"signature",type:"object",raw:`{
  /** Color mode */
  mode?: SplitButtonMode,
  /** Dropdown overlay */
  items: DropdownProps['overlay'],
  /** Dropdown items */
  dropdownPlacement?: DropdownProps['placement']
}`,signature:{properties:[{key:"mode",value:{name:"splitButtonModes[number]",raw:"typeof splitButtonModes[number]",required:!1},description:"Color mode"},{key:"items",value:{name:"DropdownProps['overlay']",raw:"DropdownProps['overlay']",required:!0},description:"Dropdown overlay"},{key:"dropdownPlacement",value:{name:"DropdownProps['placement']",raw:"DropdownProps['placement']",required:!1},description:"Dropdown items"}]}}],alias:"SplitButtonProps"}}],returns:{type:{name:"JSX.Element"}}}],displayName:"Button",props:{size:{required:!1,tsType:{name:"literal",value:"`${Exclude<Size, Size.ExtraSmall>}`"},description:"Size",defaultValue:{value:"'medium'",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"buttonModes[number]",raw:"typeof buttonModes[number]"},description:"Color mode",defaultValue:{value:"'primary'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Element id"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state"},className:{required:!1,tsType:{name:"string"},description:"Css class"},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:"Icon before text"},iconAfter:{required:!1,tsType:{name:"ReactNode"},description:"Icon after text"},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"On click handler"},text:{required:!1,tsType:{name:"string"},description:"Text"},type:{required:!1,tsType:{name:"ButtonHTMLType"},description:"HTML attribute 'type'"},isPressed:{required:!1,tsType:{name:"boolean"},description:"Display in :active state"},children:{required:!1,tsType:{name:"ReactNode"},description:"React children"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{c as B,t as a,le as b,ge as s};
