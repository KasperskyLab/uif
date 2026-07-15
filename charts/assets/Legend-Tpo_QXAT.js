import{c as D}from"./clsx-B-dksMZM.js";import{r as m,R as i,C as xe,H}from"./iframe-C54-I-iN.js";import{T as ee,b as Re}from"./TextTruncateWithPopup-BlhaZ82M.js";import{l as ae}from"./lodash-TNMe4onG.js";import{a0 as qe,a1 as Ne,a2 as we,a3 as G,a4 as _e,a5 as Be,a6 as F,a7 as E,a8 as A,a9 as Q,aa as Y,f as ne,ab as Ce,ac as te,T as K,S as $}from"./Link-B6aRyTdF.js";import{C as re,o as Me,d as Ie,F as Se,c as Pe,D as Le}from"./FormLabel-SCvX2okj.js";import{g as Ee}from"./generateId-d8nD6DCH.js";function De(){return m.useMemo(()=>Ee(),[])}var le=function(e){qe(l,e);var t=Ne(l);function l(n){var a;we(this,l),a=t.call(this,n),a.handleChange=function(o){var v=a.props,d=v.disabled,p=v.onChange;d||("checked"in a.props||a.setState({checked:o.target.checked}),p&&p({target:G(G({},a.props),{},{checked:o.target.checked}),stopPropagation:function(){o.stopPropagation()},preventDefault:function(){o.preventDefault()},nativeEvent:o.nativeEvent}))},a.saveInput=function(o){a.input=o};var r="checked"in n?n.checked:n.defaultChecked;return a.state={checked:r},a}return _e(l,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var a,r=this.props,o=r.prefixCls,v=r.className,d=r.style,p=r.name,g=r.id,b=r.type,R=r.disabled,y=r.readOnly,u=r.tabIndex,q=r.onClick,k=r.onFocus,T=r.onBlur,c=r.onKeyDown,M=r.onKeyPress,x=r.onKeyUp,h=r.autoFocus,w=r.value,I=r.required,f=Be(r,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(f).reduce(function(L,P){return(P.substr(0,5)==="aria-"||P.substr(0,5)==="data-"||P==="role")&&(L[P]=f[P]),L},{}),_=this.state.checked,S=F(o,v,(a={},E(a,"".concat(o,"-checked"),_),E(a,"".concat(o,"-disabled"),R),a));return i.createElement("span",{className:S,style:d},i.createElement("input",A({name:p,id:g,type:b,required:I,readOnly:y,disabled:R,tabIndex:u,className:"".concat(o,"-input"),checked:!!_,onClick:q,onFocus:k,onBlur:T,onKeyUp:x,onKeyDown:c,onKeyPress:M,onChange:this.handleChange,autoFocus:h,ref:this.saveInput,value:w},N)),i.createElement("span",{className:"".concat(o,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(a,r){return"checked"in a?G(G({},r),{},{checked:a.checked}):null}}]),l}(m.Component);le.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var Oe=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l},oe=m.createContext(null),Ve=function(t,l){var n=t.defaultValue,a=t.children,r=t.options,o=r===void 0?[]:r,v=t.prefixCls,d=t.className,p=t.style,g=t.onChange,b=Oe(t,["defaultValue","children","options","prefixCls","className","style","onChange"]),R=m.useContext(re),y=R.getPrefixCls,u=R.direction,q=m.useState(b.value||n||[]),k=Q(q,2),T=k[0],c=k[1],M=m.useState([]),x=Q(M,2),h=x[0],w=x[1];m.useEffect(function(){"value"in b&&c(b.value||[])},[b.value]);var I=function(){return o.map(function(C){return typeof C=="string"||typeof C=="number"?{label:C,value:C}:C})},f=function(C){w(function(V){return V.filter(function(j){return j!==C})})},N=function(C){w(function(V){return[].concat(Y(V),[C])})},_=function(C){var V=T.indexOf(C.value),j=Y(T);V===-1?j.push(C.value):j.splice(V,1),"value"in b||c(j);var J=I();g==null||g(j.filter(function(U){return h.indexOf(U)!==-1}).sort(function(U,ge){var he=J.findIndex(function(W){return W.value===U}),Te=J.findIndex(function(W){return W.value===ge});return he-Te}))},S=y("checkbox",v),L="".concat(S,"-group"),P=Me(b,["value","disabled"]);o&&o.length>0&&(a=I().map(function(B){return m.createElement(X,{prefixCls:S,key:B.value.toString(),disabled:"disabled"in B?B.disabled:b.disabled,value:B.value,checked:T.indexOf(B.value)!==-1,onChange:B.onChange,className:"".concat(L,"-item"),style:B.style},B.label)}));var ke={toggleOption:_,value:T,disabled:b.disabled,name:b.name,registerValue:N,cancelValue:f},fe=F(L,E({},"".concat(L,"-rtl"),u==="rtl"),d);return m.createElement("div",A({className:fe,style:p},P,{ref:l}),m.createElement(oe.Provider,{value:ke},a))},je=m.forwardRef(Ve);const Fe=m.memo(je);var $e=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l},Ke=function(t,l){var n,a=t.prefixCls,r=t.className,o=t.children,v=t.indeterminate,d=v===void 0?!1:v,p=t.style,g=t.onMouseEnter,b=t.onMouseLeave,R=t.skipGroup,y=R===void 0?!1:R,u=$e(t,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),q=m.useContext(re),k=q.getPrefixCls,T=q.direction,c=m.useContext(oe),M=m.useRef(u.value);m.useEffect(function(){c==null||c.registerValue(u.value),Ie("checked"in u||!!c||!("value"in u),"Checkbox","`value` is not a valid prop, do you mean `checked`?")},[]),m.useEffect(function(){if(!y)return u.value!==M.current&&(c==null||c.cancelValue(M.current),c==null||c.registerValue(u.value),M.current=u.value),function(){return c==null?void 0:c.cancelValue(u.value)}},[u.value]);var x=k("checkbox",a),h=A({},u);c&&!y&&(h.onChange=function(){u.onChange&&u.onChange.apply(u,arguments),c.toggleOption&&c.toggleOption({label:o,value:u.value})},h.name=c.name,h.checked=c.value.indexOf(u.value)!==-1,h.disabled=u.disabled||c.disabled);var w=F((n={},E(n,"".concat(x,"-wrapper"),!0),E(n,"".concat(x,"-rtl"),T==="rtl"),E(n,"".concat(x,"-wrapper-checked"),h.checked),E(n,"".concat(x,"-wrapper-disabled"),h.disabled),n),r),I=F(E({},"".concat(x,"-indeterminate"),d));return m.createElement("label",{className:w,style:p,onMouseEnter:g,onMouseLeave:b},m.createElement(le,A({},h,{prefixCls:x,className:I,ref:l})),o!==void 0&&m.createElement("span",null,o))},X=m.forwardRef(Ke);X.displayName="Checkbox";var z=X;z.Group=Fe;z.__ANT_CHECKBOX=!0;const Ge=()=>xe`
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
`,Ae=Ge(),ze=H(z.Group)`
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
`,Ue=H(z)`${Ae}`;H.div`
  display: flex;
  flex-direction: column;
`;const Z=({className:e,invalid:t,children:l,disabled:n,readonly:a,required:r,theme:o,tooltip:v,mode:d="primary",description:p,dependentElement:g,id:b,...R})=>{var y;const{testAttributes:u,...q}=ne(R),k=b||De(),T=Ce();return i.createElement("div",{...u,className:"kl6-checkbox-wrapper"},i.createElement(Ue,{id:k,disabled:n||a,className:F(te(e,o),{"kl6-checkbox-invalid":t,"kl6-checkbox-readonly":a}),role:"checkbox",...q},typeof l=="string"?i.createElement(Se,{disabled:n,required:r,tooltip:v,mode:d,htmlFor:k,getPopupContainer:(y=T.getPopupContainer)!==null&&y!==void 0?y:c=>T.usePortal?document.body:c.parentElement},l):l),i.createElement(Pe,{description:p,dependentElement:g}))},We=({direction:e="vertical",options:t,className:l,role:n="checkbox-group",onChange:a,theme:r,...o})=>{const{testAttributes:v,...d}=ne(o);return i.createElement(ze,{...v,...d,onChange:a,role:n,className:F(te(l,r),{"kl6-checkbox-group-vertical":e==="vertical","kl6-checkbox-group-horizontal":e==="horizontal"})},t==null?void 0:t.map(p=>i.createElement(Z,{...d,key:p.value,value:p.value,disabled:p.disabled&&!d.readonly||d.disabled,readonly:p.readonly&&!d.disabled||d.readonly,mode:p.mode||d.mode,description:p.description,invalid:p.invalid||d.invalid,klId:`${o.klId}-${p.value}`,testId:`${o.testId}-${p.value}`},p.label)))};Z.Group=We;var O=(e=>(e[e.Row=0]="Row",e[e.Divider=1]="Divider",e))(O||{});const ie=e=>e.kind===O.Row&&ae.toNumber(e.value)||0,ce=(e,t)=>ae.round(e,t),se=(e,t,l)=>ce(e/t*100,l);function He(e){return e.kind===O.Row}function Xe(e,t=ie,l){const n=e.reduce((a,r)=>a+t(r),0);return e.reduce((a,r)=>{if(He(r)){const o=se(t(r),n,l);return Math.max(a,o.toFixed(l).length)}return a},0)}const Ze="_legend_y953m_6",Je="_mediumWidth_y953m_10",Qe="_resetPadding_y953m_13",Ye="_legendHorizontal_y953m_18",ea="_legendScrollContainer_y953m_24",aa="_legendVertical_y953m_28",na="_withTitle_y953m_34",ta="_noTitle_y953m_37",ra="_legendDivider_y953m_66",la="_legendTotal_y953m_75",oa="_legendTitle_y953m_79",ia="_legendFooter_y953m_89",ca="_legendDescription_y953m_92",sa="_legendItem_y953m_101",da="_itemSelectable_y953m_106",ua="_itemActive_y953m_109",ma="_itemSelected_y953m_112",pa="_prevSelected_y953m_121",ba="_nextSelected_y953m_125",va="_legendItemValue_y953m_132",ya="_legendItemValuePercentage_y953m_136",ka="_legendItemText_y953m_143",fa="_legendItemDivider_y953m_150",ga="_checkbox_y953m_154",ha="_colorMark_y953m_172",s={legend:Ze,mediumWidth:Je,resetPadding:Qe,legendHorizontal:Ye,legendScrollContainer:ea,legendVertical:aa,withTitle:na,noTitle:ta,legendDivider:ra,legendTotal:la,legendTitle:oa,legendFooter:ia,legendDescription:ca,legendItem:sa,itemSelectable:da,itemActive:ua,itemSelected:ma,prevSelected:pa,nextSelected:ba,legendItemValue:va,legendItemValuePercentage:ya,legendItemText:ka,legendItemDivider:fa,checkbox:ga,colorMark:ha},de=({value:e})=>i.createElement(K,{className:s.legendDescription,type:"BTR4",color:"secondary"},e);de.__docgenInfo={description:"",methods:[],displayName:"LegendDescription",props:{value:{required:!0,tsType:{name:"string"},description:""}}};const ue=({color:e})=>i.createElement("div",{className:s.colorMark,style:{backgroundColor:e}});ue.__docgenInfo={description:"",methods:[],displayName:"LegendItemColorMark",props:{color:{required:!1,tsType:{name:"string"},description:""}}};const Ta=8.5,me=({value:e,valueType:t,total:l,showPercentage:n,precision:a,maxPercentLength:r,percentFontSize:o=Ta})=>{const v=se(e,l,a).toFixed(a),d=r?r*o+o:void 0;return i.createElement($,{gap:8,wrap:"nowrap",direction:"horizontal",align:"center",className:s.legendItemValue},n&&i.createElement(K,{className:s.legendItemValuePercentage,style:{width:d},type:"MTR3"},v,"%"),i.createElement(K,{type:t??"MTR3"},e))};me.__docgenInfo={description:"",methods:[],displayName:"LegendItemValue",props:{value:{required:!0,tsType:{name:"number"},description:""},valueType:{required:!1,tsType:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}]},description:""},total:{required:!0,tsType:{name:"number"},description:""},showPercentage:{required:!1,tsType:{name:"boolean"},description:""},precision:{required:!1,tsType:{name:"number"},description:""},maxPercentLength:{required:!1,tsType:{name:"number"},description:""},percentFontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8.5",computed:!1}}}};const pe=({item:e,value:t,valueType:l,isSelectable:n,multiselect:a,noPadding:r=!1,disabled:o,total:v,showPercentage:d,precision:p,maxPercentLength:g,isPrevSelected:b,isNextSelected:R,onHover:y,onLeave:u,onCheck:q,onSelect:k})=>{const[T,c]=m.useState(!1),M=e.tooltip??(typeof e.title=="string"?e.title:void 0),x=m.useMemo(()=>a?i.createElement(Z,{className:D(e.color&&s.checkbox),checked:e.checked,onChange:_=>q==null?void 0:q(e,_.target.checked),disabled:o,onClick:_=>_.stopPropagation(),style:{"--checkbox-background":e.color}}):e.color?i.createElement(ue,{color:e.color}):null,[o,a,e,k]),h=m.useCallback(()=>c(!0),[]),w=m.useCallback(()=>c(!1),[]),I=m.useCallback(()=>y==null?void 0:y(e),[y,e]),f=m.useCallback(()=>{u==null||u(e),c(!1)},[u,e]),N=m.useCallback(()=>{n&&(k==null||k(e,!e.selected))},[n,k,e]);return i.createElement($,{gap:8,align:"center",wrap:"nowrap",direction:"horizontal",className:D(s.legendItem,r&&s.resetPadding,T&&s.itemActive,n&&s.itemSelectable,e.selected&&s.itemSelected,e.selected&&b&&s.prevSelected,e.selected&&R&&s.nextSelected,e.className),onMouseDown:h,onMouseUp:w,onMouseOver:I,onMouseLeave:f,onClick:N},x,e.icon,i.createElement("div",{className:s.legendItemText},i.createElement(ee,{customTooltipContent:M,type:e.titleType??"BTM3"},e.title)),i.createElement(me,{value:t,valueType:l,total:v,showPercentage:d&&v>0,precision:p,maxPercentLength:g}))};pe.__docgenInfo={description:"",methods:[],displayName:"LegendItem",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},description:""},value:{required:!0,tsType:{name:"number"},description:""},valueType:{required:!1,tsType:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}]},description:""},isSelectable:{required:!0,tsType:{name:"boolean"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},total:{required:!0,tsType:{name:"number"},description:""},showPercentage:{required:!1,tsType:{name:"boolean"},description:""},precision:{required:!1,tsType:{name:"number"},description:""},maxPercentLength:{required:!1,tsType:{name:"number"},description:""},percentFontSize:{required:!1,tsType:{name:"number"},description:""},isPrevSelected:{required:!1,tsType:{name:"boolean"},description:""},isNextSelected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>, show: boolean) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"},{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>, show: boolean) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"},{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},onLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""}}};const be=Le,ve=({value:e,precision:t,description:l})=>i.createElement($,{direction:"vertical",align:"stretch",className:s.legendTotal},i.createElement(be,{className:s.legendItemDivider}),i.createElement($,{gap:16,justify:"space-between"},i.createElement(K,{type:"BTR3"},l),i.createElement(K,{type:"MTR3"},ce(e,t))));ve.__docgenInfo={description:"",methods:[],displayName:"LegendTotal",props:{value:{required:!0,tsType:{name:"number"},description:""},precision:{required:!1,tsType:{name:"number"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const ye=({className:e,items:t,getNumberFromData:l=ie,showTotal:n,showPercentage:a,legendTitle:r,selectable:o,multiselect:v,noPadding:d,orientation:p="vertical",description:g,precision:b=Re,percentFontSize:R,widthMode:y="medium",maxHeightScrollContainer:u=192,totalLabel:q,onCheck:k,onSelect:T,onHover:c,onLeave:M})=>{const x=t.filter(f=>f.kind===O.Row&&f.checked).length===1,h=n||a?t.reduce((f,N)=>f+l(N),0):0,w=p==="vertical",I=Xe(t,l,b);return i.createElement("div",{className:D(s.legend,y==="medium"&&s.mediumWidth,w?s.legendVertical:s.legendHorizontal,w&&(r?s.withTitle:s.noTitle),d&&s.resetPadding,e)},w&&r&&i.createElement($,{className:D(s.legendTitle,d&&s.resetPadding),align:"center"},typeof r=="string"?i.createElement(ee,{type:"BTM3"},r):r),i.createElement("div",{className:D(s.legendScrollContainer,d&&s.resetPadding),style:{maxHeight:`${u}px`}},t.map((f,N)=>{if(f.kind===O.Divider)return i.createElement(be,{key:N,className:D(s.legendDivider,d&&s.resetPadding)});const _=N>0?t[N-1]:null,S=N<t.length-1?t[N+1]:null,L=(_==null?void 0:_.kind)===O.Row&&_.selected,P=(S==null?void 0:S.kind)===O.Row&&S.selected;return i.createElement(pe,{key:N,item:f,value:l(f),valueType:f.valueType,showPercentage:a,isSelectable:!!o,multiselect:v,noPadding:d,total:h,disabled:x&&f.checked,precision:b,maxPercentLength:I,percentFontSize:R,isPrevSelected:L,isNextSelected:P,onSelect:T,onCheck:k,onHover:c,onLeave:M})})),w&&i.createElement($,{wrap:"nowrap",direction:"vertical",align:"stretch",justify:"stretch",gap:4,className:D(s.legendFooter,d&&s.resetPadding)},n&&i.createElement(ve,{value:h,precision:b,description:q}),g&&i.createElement(de,{value:g})))},Ca=m.memo(ye);ye.__docgenInfo={description:"",methods:[],displayName:"LegendGeneric",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"TLegendItemDivider | TLegendItemRow<T>",elements:[{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Divider
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Divider",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}]}],raw:"TLegendItem<T>[]"},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""},showPercentage:{required:!1,tsType:{name:"boolean"},description:""},getNumberFromData:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItem<T>) => number",signature:{arguments:[{type:{name:"union",raw:"TLegendItemDivider | TLegendItemRow<T>",elements:[{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Divider
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Divider",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}]},name:"item"}],return:{name:"number"}}},description:"",defaultValue:{value:`(item: TLegendItem<unknown>): number =>
(item.kind === LegendItemType.Row && toNumber(item.value)) || 0`,computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},legendTitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},totalLabel:{required:!1,tsType:{name:"string"},description:""},precision:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},percentFontSize:{required:!1,tsType:{name:"number"},description:""},widthMode:{required:!1,tsType:{name:"union",raw:"'medium' | 'flex'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'flex'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},maxHeightScrollContainer:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"192",computed:!1}},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>, show: boolean) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"},{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>, show: boolean) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"},{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},onLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TLegendItemRow<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  kind: LegendItemType.Row,
  title: ReactNode,
  titleType?: 'BTR3' | 'BTM3',
  tooltip?: ReactNode,
  icon?: ReactNode,
  value?: number | ReactNode,
  valueType?: 'MTR3' | 'BTR3',
  color?: string,
  selected?: boolean,
  checked?: boolean,
  payload?: T,
  // style?: CSSProperties,
  className?: string
}`,signature:{properties:[{key:"kind",value:{name:"LegendItemType.Row",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"titleType",value:{name:"union",raw:"'BTR3' | 'BTM3'",elements:[{name:"literal",value:"'BTR3'"},{name:"literal",value:"'BTM3'"}],required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"union",raw:"number | ReactNode",elements:[{name:"number"},{name:"ReactNode"}],required:!1}},{key:"valueType",value:{name:"union",raw:"'MTR3' | 'BTR3'",elements:[{name:"literal",value:"'MTR3'"},{name:"literal",value:"'BTR3'"}],required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"boolean",required:!1}},{key:"payload",value:{name:"T",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""}}};export{Ca as L,O as a,pe as b};
