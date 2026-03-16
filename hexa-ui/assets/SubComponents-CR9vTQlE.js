import{T as _}from"./TextReducer-mTsc_fVR.js";import{T as v}from"./TextWithTruncation-CKM_ry59.js";import{B as T}from"./Badge-B6JIvdem.js";import{D as N}from"./Divider-BzNbSw2T.js";import{I as R}from"./Indicator-CQY-Y-dA.js";import{R as t,$ as u,A as m,j as s}from"./iframe-DlY6n6Um.js";import{t as x}from"./ArrowDownSolid-BE7bAzAG.js";import{o as h}from"./ArrowRightSolid-BZEyC8P2.js";const B="_wrapper_12p6c_1",P="_content_12p6c_6",q="_submenu_12p6c_12",E="_itemsStack_12p6c_21",C="_arrowButton_12p6c_30",A="_elementBefore_12p6c_35",I="_elementAfter_12p6c_39",S="_divider_12p6c_44",L="_title_12p6c_51",M="_titleText_12p6c_62",j="_description_12p6c_70",D="_disabled_12p6c_73",Z="_rowTextCol_12p6c_77",U="_row_12p6c_77",H="_rowText_12p6c_77",O="_rowBlock_12p6c_99",z="_hoverRowBlock_12p6c_100",K="_selected_12p6c_142",W="_truncateText_12p6c_179",n={wrapper:B,content:P,submenu:q,itemsStack:E,arrowButton:C,elementBefore:A,elementAfter:I,divider:S,title:L,titleText:M,description:j,disabled:D,rowTextCol:Z,row:U,rowText:H,rowBlock:O,hoverRowBlock:z,selected:K,truncateText:W},i=e=>t.createElement("span",{...e,className:s(e.className,n.rowBlock)}),y=e=>t.createElement("span",{...e,className:s(e.className,n.hoverRowBlock)}),b=({disabled:e,leftOffset:a,selected:o,truncateText:c,...r})=>t.createElement("div",{...r,className:s(r.className,n.row,{[n.disabled]:e,[n.selected]:o,[n.truncateText]:c}),style:{...r.style,"--left-offset":a}}),k=e=>t.createElement(u,{...e,className:n.rowText}),g=e=>t.createElement("div",{...e,className:n.rowTextCol}),$=({row:e,truncateText:a,selected:o,collapsible:c,onCollapsibleClick:r,onClick:w})=>{var p,f;const l=e!=null&&e.disabled?void 0:w;return t.createElement(b,{className:"hexa-ui-submenu-row",disabled:e==null?void 0:e.disabled,leftOffset:8+((e==null?void 0:e.level)||0)*20+((e==null?void 0:e.extraLeftPadding)||0),onClick:l,onKeyDown:d=>d.key==="Enter"?l==null?void 0:l():void 0,selected:o,tabIndex:0,truncateText:a,...e.testAttributes},c&&t.createElement(m,{className:n.arrowButton,interactive:!1,onClick:r,icon:e.opened?t.createElement(x,null):t.createElement(h,null),size:"small"}),e.iconBefore&&t.createElement(i,null,e.iconBefore),t.createElement(g,null,t.createElement(k,null,t.createElement(v,{truncate:a,text:e.text})),e.description&&t.createElement(u,{className:s(n.description,e.disabled&&n.disabled),type:"BTR4"},t.createElement(v,{truncate:a,text:e.description}))),e.elementAfter&&t.createElement(i,null,e.elementAfter),e.notification&&(e.notification.type==="badge"?t.createElement(i,null,t.createElement(T,{...e.notification})):t.createElement(i,null,t.createElement(R,{...e.notification}))),e.action&&t.createElement(i,null,t.createElement(m,{onClick:(p=e.action)==null?void 0:p.onClick,icon:(f=e.action)==null?void 0:f.icon})),e.hoverElementAfter&&t.createElement(y,{onClick:d=>d.stopPropagation()},e.hoverElementAfter))},F=e=>{var a,o;return t.createElement("div",{className:n.title,...e.testAttributes},t.createElement(u,{className:n.titleText,type:"BTR4"},t.createElement(_,null,e.text)),e.action&&t.createElement(m,{icon:(a=e.action)==null?void 0:a.icon,onClick:(o=e.action)==null?void 0:o.onClick}))},G=()=>t.createElement(N,{className:n.divider,mode:"light"});i.__docgenInfo={description:"",methods:[],displayName:"StyledRowBlock"};y.__docgenInfo={description:"",methods:[],displayName:"HoverRowBlock"};b.__docgenInfo={description:"",methods:[],displayName:"StyledRow",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},leftOffset:{required:!0,tsType:{name:"number"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},truncateText:{required:!1,tsType:{name:"boolean"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"StyledRowText"};g.__docgenInfo={description:"",methods:[],displayName:"StyledRowTextCol"};$.__docgenInfo={description:"",methods:[],displayName:"SubmenuRow",props:{row:{required:!0,tsType:{name:"intersection",raw:`RowProps & {
  level?: number,
  opened?: boolean,
  extraLeftPadding?: number,
  testAttributes?: TestingAttributes,
  children?: LeveledRowProps[]
}`,elements:[{name:"intersection",raw:`{
  type: 'row',
  key: string,
  text: string,
  description?: string, 
  content?: ReactNode,
  contentClassName?: string,
  disabled?: boolean,
  draggable?: boolean,
  iconBefore?: ReactNode,
  elementAfter?: ReactNode,
  hoverElementAfter?: ReactNode,
  notification?: BadgeNotification | IndicatorNotification,
  action?: ActionProps,
  children?: RowProps[],
  /** Callback triggered when a submenu row is clicked 
   * Useful when the product wants to fully control click behavior
   * to display custom content.
   * 
   * If callback returns false - it prevents the default submenu activation
  */
  onClick?: (key: string, row?: RowProps) => boolean | void | Promise<boolean | void>
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  type: 'row',
  key: string,
  text: string,
  description?: string, 
  content?: ReactNode,
  contentClassName?: string,
  disabled?: boolean,
  draggable?: boolean,
  iconBefore?: ReactNode,
  elementAfter?: ReactNode,
  hoverElementAfter?: ReactNode,
  notification?: BadgeNotification | IndicatorNotification,
  action?: ActionProps,
  children?: RowProps[],
  /** Callback triggered when a submenu row is clicked 
   * Useful when the product wants to fully control click behavior
   * to display custom content.
   * 
   * If callback returns false - it prevents the default submenu activation
  */
  onClick?: (key: string, row?: RowProps) => boolean | void | Promise<boolean | void>
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'row'",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"contentClassName",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"draggable",value:{name:"boolean",required:!1}},{key:"iconBefore",value:{name:"ReactNode",required:!1}},{key:"elementAfter",value:{name:"ReactNode",required:!1}},{key:"hoverElementAfter",value:{name:"ReactNode",required:!1}},{key:"notification",value:{name:"union",raw:"BadgeNotification | IndicatorNotification",elements:[{name:"intersection",raw:`{
  type: 'badge',
  mode: BadgeNotificationMode
} & Pick<BadgeProps, 'title' | 'count' | 'text' | 'overflowCount' | 'showZero'>`,elements:[{name:"signature",type:"object",raw:`{
  type: 'badge',
  mode: BadgeNotificationMode
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'badge'",required:!0}},{key:"mode",value:{name:"Extract",elements:[{name:"BadgeMode"},{name:"union",raw:"'new' | 'critical'",elements:[{name:"literal",value:"'new'"},{name:"literal",value:"'critical'"}]}],raw:"Extract<BadgeMode, 'new' | 'critical'>",required:!0}}]}},{name:"Pick",elements:[{name:"BadgeProps"},{name:"union",raw:"'title' | 'count' | 'text' | 'overflowCount' | 'showZero'",elements:[{name:"literal",value:"'title'"},{name:"literal",value:"'count'"},{name:"literal",value:"'text'"},{name:"literal",value:"'overflowCount'"},{name:"literal",value:"'showZero'"}]}],raw:"Pick<BadgeProps, 'title' | 'count' | 'text' | 'overflowCount' | 'showZero'>"}]},{name:"signature",type:"object",raw:`{
  type: 'indicator',
  mode: IndicatorNotificationMode
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'indicator'",required:!0}},{key:"mode",value:{name:"Extract",elements:[{name:"IndicatorMode"},{name:"union",raw:"'new' | 'critical' | 'medium'",elements:[{name:"literal",value:"'new'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'medium'"}]}],raw:"Extract<IndicatorMode, 'new' | 'critical' | 'medium'>",required:!0}}]}}],required:!1}},{key:"action",value:{name:"Pick",elements:[{name:"ActionButtonProps"},{name:"union",raw:"'onClick' | 'icon'",elements:[{name:"literal",value:"'onClick'"},{name:"literal",value:"'icon'"}]}],raw:"Pick<ActionButtonProps, 'onClick' | 'icon'>",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"RowProps"}],raw:"RowProps[]",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(key: string, row?: RowProps) => boolean | void | Promise<boolean | void>",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"RowProps"},name:"row"}],return:{name:"union",raw:"boolean | void | Promise<boolean | void>",elements:[{name:"boolean"},{name:"void"},{name:"Promise",elements:[{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}],raw:"Promise<boolean | void>"}]}},required:!1},description:`Callback triggered when a submenu row is clicked 
Useful when the product wants to fully control click behavior
to display custom content.

If callback returns false - it prevents the default submenu activation`}]}},{name:"TestingProps"}]},{name:"signature",type:"object",raw:`{
  level?: number,
  opened?: boolean,
  extraLeftPadding?: number,
  testAttributes?: TestingAttributes,
  children?: LeveledRowProps[]
}`,signature:{properties:[{key:"level",value:{name:"number",required:!1}},{key:"opened",value:{name:"boolean",required:!1}},{key:"extraLeftPadding",value:{name:"number",required:!1}},{key:"testAttributes",value:{name:"TestingAttributes",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"LeveledRowProps"}],raw:"LeveledRowProps[]",required:!1}}]}}]},description:""},selected:{required:!0,tsType:{name:"boolean"},description:""},collapsible:{required:!0,tsType:{name:"boolean"},description:""},onCollapsibleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"SubmenuTitle",props:{type:{required:!0,tsType:{name:"literal",value:"'title'"},description:""},key:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"Pick",elements:[{name:"ActionButtonProps"},{name:"union",raw:"'onClick' | 'icon'",elements:[{name:"literal",value:"'onClick'"},{name:"literal",value:"'icon'"}]}],raw:"Pick<ActionButtonProps, 'onClick' | 'icon'>"},description:""},testAttributes:{required:!0,tsType:{name:"TestingAttributes"},description:""}}};G.__docgenInfo={description:"",methods:[],displayName:"SubmenuDivider",props:{type:{required:!0,tsType:{name:"literal",value:"'divider'"},description:""}}};export{G as S,F as a,$ as b,b as c,g as d,k as e,i as f,n as s};
