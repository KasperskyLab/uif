import{u as x}from"./useImmutableRef-owuA66Vn.js";import{u as C}from"./useResizeObserver-LOJkjDvr.js";import{P as q}from"./Popover-B2Trw9mJ.js";import{r as s,R as n,y as S,H as k}from"./iframe-zz6a49H8.js";import{T as M}from"./Tag-DxDPN1QL.js";const L=k.div.withConfig({shouldForwardProp:e=>!["isMultiline"].includes(e)})`
  width: 100%;
  display: flex;
  flex-grow: 1;
  ${({isMultiline:e})=>!e&&"overflow: hidden;"}
  gap: 8px;

  .hexa-tag-reduction-group-shown-tags {
    display: flex;
    gap: 8px;
    ${({isMultiline:e})=>e&&"flex-wrap: wrap;"}
  }

  .hexa-tag-reduction-group-hidden-elements {
    display: flex;
    gap: 8px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`,u=k(M)`
  display: flex;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;

  > span {
    display: block;
  }

  &.hexa-tag-reduction-group-trunc-tag {
    overflow: visible;
  }
`,h=50,y=34,c=8,H=({isMultiline:e=!1,items:a,reductionTag:w})=>{const[m,p]=s.useState(a),[b,g]=s.useState(),[v,f]=s.useState([]),[r,E]=x(),{right:d}=C(r)??{right:0},i=s.useMemo(()=>{if(e)return;if(d<h+c+y)return-1;if(!r.current)return;const t=r.current.querySelector(".hexa-tag-reduction-group-hidden-elements"),o=Array.from((t==null?void 0:t.children)??[]),l=o.findIndex(R=>R.getBoundingClientRect().right+c>d);if(l===-1)return;const T=d-o[l].getBoundingClientRect().left;return(l===o.length-1?T>h:T>h+c+y)?l:l-1},[d,r.current,c,e]),I=!e&&i!==void 0&&!!v.length;return s.useEffect(()=>{switch(i){case void 0:p(a),g(void 0),f([]);break;case-1:p([]),g(void 0),f(a);break;default:p(a.slice(0,i)),g(a[i]),f(a.slice(i+1))}},[i]),n.createElement(L,{ref:E,isMultiline:e},!e&&n.createElement("div",{className:"hexa-tag-reduction-group-hidden-elements"},a.map((t,o)=>n.createElement(u,{key:o,...t}))),!!(m&&m.length)&&n.createElement("div",{className:"hexa-tag-reduction-group-shown-tags"},m.map((t,o)=>n.createElement(u,{key:o,...t}))),b&&n.createElement(S,{text:b.label},n.createElement(u,{...b})),I&&n.createElement(q,{content:n.createElement(M.Group,{items:v})},n.createElement(u,{...w,className:"hexa-tag-reduction-group-trunc-tag"},`+${v.length}`)))};H.__docgenInfo={description:"",methods:[],displayName:"TagReductionGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`TagThemeProps & RefAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
  /** Content */
  children?: ReactNode,
  /** Icon */
  icon?: ReactNode,
  /** Is it closable? */
  closable?: boolean,
  /** Config for tag truncation */
  truncation?: TruncationProps,
  /** Is outlined */
  outlined?: boolean,
  /** Make tag interactive */
  interactive?: boolean,
  /** Label */
  label?: ReactNode,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: null | boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void,
  /**
   * Flag that makes tag responsive
   * If this option is enabled tag behaves like a block element
   */
  isResponsive?: boolean
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  /** Size */
  size?: TagSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: TagMode
}`,signature:{properties:[{key:"size",value:{name:"Extract",elements:[{name:"SizingType"},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Extract<SizingType, 'small' | 'medium'>",required:!1},description:"Size"},{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"},{key:"mode",value:{name:"tagModes[number]",raw:"typeof tagModes[number]",required:!1},description:"Color mode"}]}},{name:"RefAttributes",elements:[{name:"HTMLSpanElement"}],raw:"RefAttributes<HTMLSpanElement>"},{name:"HTMLAttributes",elements:[{name:"HTMLSpanElement"}],raw:"HTMLAttributes<HTMLSpanElement>"},{name:"signature",type:"object",raw:`{
  /** Content */
  children?: ReactNode,
  /** Icon */
  icon?: ReactNode,
  /** Is it closable? */
  closable?: boolean,
  /** Config for tag truncation */
  truncation?: TruncationProps,
  /** Is outlined */
  outlined?: boolean,
  /** Make tag interactive */
  interactive?: boolean,
  /** Label */
  label?: ReactNode,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: null | boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void,
  /**
   * Flag that makes tag responsive
   * If this option is enabled tag behaves like a block element
   */
  isResponsive?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"Content"},{key:"icon",value:{name:"ReactNode",required:!1},description:"Icon"},{key:"closable",value:{name:"boolean",required:!1},description:"Is it closable?"},{key:"truncation",value:{name:"signature",type:"object",raw:`{
  /** Maximum number of characters allowed in the tag content */
  maxChars?: number,
  /** Truncation symbol */
  truncationSymbol?: string,
  /** Position of the tooltip when content is truncated */
  tooltipPosition?: TooltipProps['placement']
}`,signature:{properties:[{key:"maxChars",value:{name:"number",required:!1},description:"Maximum number of characters allowed in the tag content"},{key:"truncationSymbol",value:{name:"string",required:!1},description:"Truncation symbol"},{key:"tooltipPosition",value:{name:"TooltipProps['placement']",raw:"TooltipProps['placement']",required:!1},description:"Position of the tooltip when content is truncated"}]},required:!1},description:"Config for tag truncation"},{key:"outlined",value:{name:"boolean",required:!1},description:"Is outlined"},{key:"interactive",value:{name:"boolean",required:!1},description:"Make tag interactive"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Is disabled"},{key:"readOnly",value:{name:"boolean",required:!1},description:"Is readonly"},{key:"invalid",value:{name:"union",raw:"null | boolean",elements:[{name:"null"},{name:"boolean"}],required:!1},description:"Is invalid"},{key:"onClose",value:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"},{name:"globalThis.MouseEvent"}],raw:"MouseEvent<HTMLElement, globalThis.MouseEvent>"},name:"e"}],return:{name:"void"}},required:!1},description:"Callback executed when tag is closed"},{key:"isResponsive",value:{name:"boolean",required:!1},description:`Flag that makes tag responsive
If this option is enabled tag behaves like a block element`}]}},{name:"TestingProps"}]}],raw:"TagProps[]"},description:"Array of items"},isMultiline:{required:!1,tsType:{name:"boolean"},description:"Should render in multiple lines",defaultValue:{value:"false",computed:!1}},reductionTag:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`TagThemeProps & RefAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
  /** Content */
  children?: ReactNode,
  /** Icon */
  icon?: ReactNode,
  /** Is it closable? */
  closable?: boolean,
  /** Config for tag truncation */
  truncation?: TruncationProps,
  /** Is outlined */
  outlined?: boolean,
  /** Make tag interactive */
  interactive?: boolean,
  /** Label */
  label?: ReactNode,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: null | boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void,
  /**
   * Flag that makes tag responsive
   * If this option is enabled tag behaves like a block element
   */
  isResponsive?: boolean
} & TestingProps`,elements:[{name:"signature",type:"object",raw:`{
  /** Size */
  size?: TagSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: TagMode
}`,signature:{properties:[{key:"size",value:{name:"Extract",elements:[{name:"SizingType"},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Extract<SizingType, 'small' | 'medium'>",required:!1},description:"Size"},{key:"theme",value:{name:"Theme",required:!1},description:"Custom theme"},{key:"mode",value:{name:"tagModes[number]",raw:"typeof tagModes[number]",required:!1},description:"Color mode"}]}},{name:"RefAttributes",elements:[{name:"HTMLSpanElement"}],raw:"RefAttributes<HTMLSpanElement>"},{name:"HTMLAttributes",elements:[{name:"HTMLSpanElement"}],raw:"HTMLAttributes<HTMLSpanElement>"},{name:"signature",type:"object",raw:`{
  /** Content */
  children?: ReactNode,
  /** Icon */
  icon?: ReactNode,
  /** Is it closable? */
  closable?: boolean,
  /** Config for tag truncation */
  truncation?: TruncationProps,
  /** Is outlined */
  outlined?: boolean,
  /** Make tag interactive */
  interactive?: boolean,
  /** Label */
  label?: ReactNode,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: null | boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void,
  /**
   * Flag that makes tag responsive
   * If this option is enabled tag behaves like a block element
   */
  isResponsive?: boolean
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1},description:"Content"},{key:"icon",value:{name:"ReactNode",required:!1},description:"Icon"},{key:"closable",value:{name:"boolean",required:!1},description:"Is it closable?"},{key:"truncation",value:{name:"signature",type:"object",raw:`{
  /** Maximum number of characters allowed in the tag content */
  maxChars?: number,
  /** Truncation symbol */
  truncationSymbol?: string,
  /** Position of the tooltip when content is truncated */
  tooltipPosition?: TooltipProps['placement']
}`,signature:{properties:[{key:"maxChars",value:{name:"number",required:!1},description:"Maximum number of characters allowed in the tag content"},{key:"truncationSymbol",value:{name:"string",required:!1},description:"Truncation symbol"},{key:"tooltipPosition",value:{name:"TooltipProps['placement']",raw:"TooltipProps['placement']",required:!1},description:"Position of the tooltip when content is truncated"}]},required:!1},description:"Config for tag truncation"},{key:"outlined",value:{name:"boolean",required:!1},description:"Is outlined"},{key:"interactive",value:{name:"boolean",required:!1},description:"Make tag interactive"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Is disabled"},{key:"readOnly",value:{name:"boolean",required:!1},description:"Is readonly"},{key:"invalid",value:{name:"union",raw:"null | boolean",elements:[{name:"null"},{name:"boolean"}],required:!1},description:"Is invalid"},{key:"onClose",value:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"},{name:"globalThis.MouseEvent"}],raw:"MouseEvent<HTMLElement, globalThis.MouseEvent>"},name:"e"}],return:{name:"void"}},required:!1},description:"Callback executed when tag is closed"},{key:"isResponsive",value:{name:"boolean",required:!1},description:`Flag that makes tag responsive
If this option is enabled tag behaves like a block element`}]}},{name:"TestingProps"}]},{name:"union",raw:"'size' | 'outlined'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'outlined'"}]}],raw:"Pick<TagProps, 'size' | 'outlined'>"},description:"Reduction tag properties"}}};export{H as T};
