import{u as R,r as o,R as s,j as u}from"./iframe-DlY6n6Um.js";const I="_borderless_ul7bd_152",C="_additionalComponent_ul7bd_172",x="_selected_ul7bd_176",n={"hexa-ui-horizontal-nav-item":"_hexa-ui-horizontal-nav-item_ul7bd_100","hexa-ui-horizontal-nav-item-inner":"_hexa-ui-horizontal-nav-item-inner_ul7bd_100","hexa-ui-horizontal-nav":"_hexa-ui-horizontal-nav_ul7bd_100",borderless:I,additionalComponent:C,selected:x},z=({className:m,items:e,borderless:p=!1,activeKey:r,...b})=>{var d;const{testAttributes:f,...v}=R(b),[y,i]=o.useState((d=e==null?void 0:e.filter(a=>a.selected)[0])==null?void 0:d.key),h=o.useRef(null);return o.useEffect(()=>{if(!r){const a=e==null?void 0:e.find(t=>t.selected);a&&i(a.key)}},[e]),s.createElement("nav",{...f,...v,ref:h,className:u(m,n["hexa-ui-horizontal-nav"],{[n.borderless]:p})},e==null?void 0:e.map(({key:a,onClick:t,label:g,disabled:c,componentsAfter:l,testId:_,klId:q})=>s.createElement("button",{key:a,"data-testid":_,className:u(n["hexa-ui-horizontal-nav-item"],a===(r||y)&&n.selected),onClick:()=>{c||(r||i(a),t==null||t())},disabled:c},s.createElement("span",{className:n["hexa-ui-horizontal-nav-item-inner"]},g,l==null?void 0:l.map((k,N)=>s.createElement("span",{key:N,className:n.additionalComponent},k))))))};z.__docgenInfo={description:"",methods:[],displayName:"HorizontalNav",props:{activeKey:{required:!1,tsType:{name:"string"},description:"Current horizontal navigation item key"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  /** Custom class name */
  className?: string,
  /* Item key */
  key?: string,
  /* Item text */
  label?: string,
  /* Is item selected */
  selected?: boolean,
  /* Is item disabled */
  disabled?: boolean,
  /** Components after label */
  componentsAfter?: React.ReactNode[],
  /* Item click handler */
  onClick?: () => void
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  /** Custom class name */
  className?: string,
  /* Item key */
  key?: string,
  /* Item text */
  label?: string,
  /* Is item selected */
  selected?: boolean,
  /* Is item disabled */
  disabled?: boolean,
  /** Components after label */
  componentsAfter?: React.ReactNode[],
  /* Item click handler */
  onClick?: () => void
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Custom class name"},{key:"key",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"componentsAfter",value:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]",required:!1},description:"Components after label"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},{name:"TestingProps"}]}],raw:"HorizontalNavItemProps[]"},description:""}}};export{z as H};
