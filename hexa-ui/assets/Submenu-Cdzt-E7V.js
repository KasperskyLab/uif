import{R as r,u as k,r as v,j as g,aa as A}from"./iframe-DlY6n6Um.js";import{S as x,a as B,b as T,s as c}from"./SubComponents-CR9vTQlE.js";const y=({items:e,...n})=>r.createElement(r.Fragment,null,e.map((t,a)=>{const i=k(t);switch(i.type){case"row":return r.createElement(E,{...n,row:i,key:i.key});case"title":return r.createElement(B,{...i,key:i.key});case"divider":return r.createElement(x,{...i,key:a});default:return null}})),E=({row:e,...n})=>{const{children:t}=e,[a,i]=v.useState(e.opened),m=async()=>{var s;await((s=e.onClick)==null?void 0:s.call(e,e.key,e))!==!1&&n.handleActiveRowChange(e),n.collapseOnTextClick&&l()},l=()=>{t&&i(!a)};return r.createElement(r.Fragment,null,r.createElement(T,{...n,row:{...e,opened:a},selected:n.activeRowKey===e.key,collapsible:!!t,onCollapsibleClick:l,onClick:m}),t&&a&&r.createElement(y,{...n,items:t}))};y.__docgenInfo={description:"",methods:[],displayName:"SubmenuItems",props:{truncateText:{required:!0,tsType:{name:"boolean"},description:""},collapseOnTextClick:{required:!0,tsType:{name:"boolean"},description:""},activeRowKey:{required:!1,tsType:{name:"string"},description:""},handleActiveRowChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: LeveledRowProps) => void",signature:{arguments:[{type:{name:"intersection",raw:`RowProps & {
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
}`,signature:{properties:[{key:"level",value:{name:"number",required:!1}},{key:"opened",value:{name:"boolean",required:!1}},{key:"extraLeftPadding",value:{name:"number",required:!1}},{key:"testAttributes",value:{name:"TestingAttributes",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"LeveledRowProps"}],raw:"LeveledRowProps[]",required:!1}}]}}]},name:"row"}],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DividerProps | TitleProps | LeveledRowProps",elements:[{name:"signature",type:"object",raw:`{
  type: 'divider'
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'divider'",required:!0}}]}},{name:"intersection",raw:`{
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'title'",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"action",value:{name:"Pick",elements:[{name:"ActionButtonProps"},{name:"union",raw:"'onClick' | 'icon'",elements:[{name:"literal",value:"'onClick'"},{name:"literal",value:"'icon'"}]}],raw:"Pick<ActionButtonProps, 'onClick' | 'icon'>",required:!1}}]}},{name:"TestingProps"}]},{name:"intersection",raw:`RowProps & {
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
}`,signature:{properties:[{key:"level",value:{name:"number",required:!1}},{key:"opened",value:{name:"boolean",required:!1}},{key:"extraLeftPadding",value:{name:"number",required:!1}},{key:"testAttributes",value:{name:"TestingAttributes",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"LeveledRowProps"}],raw:"LeveledRowProps[]",required:!1}}]}}]}]}],raw:"LeveledSubmenuItemProps[]"},description:""}}};const I=e=>{const{activeKey:n,collapseOnTextClick:t=!0,defaultActiveKey:a,elementAfter:i,elementBefore:m,items:l,onChange:s,testAttributes:h,truncateText:q=!0,...R}=k(e),o=v.useMemo(()=>b(l,n||a),[l,n,a]),w=o==null?void 0:o[o.length-1],f=v.useMemo(()=>P(l,o==null?void 0:o.map(p=>p.key).slice(0,-1)),[o]),[d,N]=v.useState(o?w:M(f)),C=p=>{n||N(p),s==null||s(p.key)},u=n?w:d;return r.createElement("div",{className:c.wrapper},r.createElement("div",{...R,...h,className:g(c.submenu,A(e))},m&&r.createElement("div",{className:c.elementBefore},m),r.createElement("div",{className:c.itemsStack},r.createElement(y,{handleActiveRowChange:C,truncateText:q,collapseOnTextClick:t,items:f,activeRowKey:n||(d==null?void 0:d.key)})),i&&r.createElement("div",{className:c.elementAfter},i)),(u==null?void 0:u.content)&&r.createElement("div",{className:g(c.content,u.contentClassName)},u.content))},M=e=>e.find(n=>n.type==="row"),b=(e,n)=>{for(const t of e)if(t.type==="row"){if(t.key===n)return[t];if(t!=null&&t.children){const a=b(t.children,n);if(a)return[t,...a]}}},P=(e,n=[],t=0)=>e.map(a=>a.type==="row"?{...a,level:t,opened:n.includes(a.key),extraLeftPadding:a.children?0:20,children:a.children&&P(a.children,n,t+1)}:a);I.__docgenInfo={description:"",methods:[],displayName:"Submenu",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DividerProps | TitleProps | RowProps",elements:[{name:"signature",type:"object",raw:`{
  type: 'divider'
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'divider'",required:!0}}]}},{name:"intersection",raw:`{
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'title'",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"action",value:{name:"Pick",elements:[{name:"ActionButtonProps"},{name:"union",raw:"'onClick' | 'icon'",elements:[{name:"literal",value:"'onClick'"},{name:"literal",value:"'icon'"}]}],raw:"Pick<ActionButtonProps, 'onClick' | 'icon'>",required:!1}}]}},{name:"TestingProps"}]},{name:"intersection",raw:`{
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

If callback returns false - it prevents the default submenu activation`}]}},{name:"TestingProps"}]}]}],raw:"SubmenuItemProps[]"},description:"Array of submenu items"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"Initial submenu item key, if activeKey is not set"},activeKey:{required:!1,tsType:{name:"string"},description:"Current submenu item key"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeKey: string) => void",signature:{arguments:[{type:{name:"string"},name:"activeKey"}],return:{name:"void"}}},description:"Callback executed when active submenu item is changed"},truncateText:{required:!1,tsType:{name:"boolean"},description:"Should truncate text if the text is too long"},collapseOnTextClick:{required:!1,tsType:{name:"boolean"},description:"Should collapse submenu item tree when clicking on its text"},elementBefore:{required:!1,tsType:{name:"ReactNode"},description:"Element before"},elementAfter:{required:!1,tsType:{name:"ReactNode"},description:"Element after"}}};export{I as S};
