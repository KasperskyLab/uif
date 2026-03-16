import{T as B}from"./TextReducer-mTsc_fVR.js";import{a1 as F,a0 as x,w as D,u as U,R as n,af as j,T as V,A as K,au as X,j as Y,y as J,H as Q}from"./iframe-DlY6n6Um.js";import{o as W}from"./StatusDangerSolid1-Db-Ba1Fd.js";import{G as Z}from"./Group-C50_emtp.js";import{T as ee}from"./index-q41KpsCE.js";const e=F(),oe=x`
  ${({outlined:t})=>{const o=t?"outlined":"filled";return x`
      max-width: 100%;
      display: inline-flex;
      height: ${e("height")};
      align-items: center;
      border-radius: ${e("borderRadius")};
      border: ${e(`${o}.enabled.border`)};
      padding: ${e("padding")};
      gap: ${e("gap")};
      background: ${e(`${o}.enabled.background`)};
      box-sizing: border-box;
      cursor: default;
      outline: none;
      box-shadow: none;

      .kl-components-tag-text {
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${e(`${o}.enabled.color`)};
      }
      .kl-components-tag-icon {
        color: ${e(`${o}.enabled.icon`)};
      }

      &&.ant-tag.uninteractive {
        &:focus,
        &:focus-visible {
          border: ${e(`${o}.enabled.border`)};
        }
      }

      &&.ant-tag.interactive {
        cursor: pointer;

        &:focus-visible {
          box-shadow: ${e(`${o}.focus.boxShadow`)};
        }

        &:hover {
          color: ${e(`${o}.hover.color`)};
          background: ${e(`${o}.hover.background`)};
          border: ${e(`${o}.hover.border`)};
        }

        &:active {
          color: ${e(`${o}.active.color`)};
          background: ${e(`${o}.active.background`)};
          border: ${e(`${o}.active.border`)};
        }
      }

      &[disabled] {
        color: ${e("disabled.color")};
        background: ${e("disabled.background")};
        border: ${e("disabled.border")};

        .kl-components-tag-text {
          color: ${e("disabled.color")};
        }
        .kl-components-tag-icon {
          color: ${e("disabled.icon")};
        }
      }

      &[readonly] {
        color: ${e("readOnly.color")};
        background: ${e("readOnly.background")};
        border: ${e("readOnly.border")};

        .kl-components-tag-text {
          color: ${e("readOnly.color")};
        }
        .kl-components-tag-icon {
          color: ${e("readOnly.icon")};
        }
      }

      &.ant-tag.invalid {
        color: ${e("invalid.color")};
        background: ${e("invalid.background")};
        border: ${e("invalid.border")};
    
        .tag-invalid-icon {
          color: ${e("invalid.iconStatus")};
        }
      }

      &.ant-tag-hidden {
        display: none;
      }

      &[ant-click-animating-without-extra-node=true]::after,
      .ant-click-animating-node {
        display: none;
      }
    `}}
`,ne=t=>D(t,{componentName:"tag",defaultValues:{mode:"neutral",size:"medium"},propsToDrill:["mode","size"]}),te=Q(ee).withConfig({shouldForwardProp:t=>!["cssConfig","interactive","truncation","outlined"].includes(t)})`
  ${oe}
`,r=t=>{const o=ne(t),i=U(o);return n.createElement(re,{...i})},ae="...",w=50,re=({children:t,icon:o,cssConfig:i,label:C,onClose:p,className:E,closable:M,invalid:s,outlined:b,ref:ie,testAttributes:g,isResponsive:I,...f})=>{const{mode:q,size:P,disabled:l,readOnly:T,interactive:c,truncation:S={},onClick:h}=f,y=!T&&!l&&!s,N=y&&(c||h),R=(!y||!c)&&!h,{maxChars:d,truncationSymbol:v=ae,tooltipPosition:O}=S,z=!b&&q!=="neutral"?"ghostInverted":"ghost",a=t||C,$=d&&d<=w?d:w,k=typeof a=="string"&&a.length>$,A=k?`${a.substring(0,$-v.length)}${v}`:a,{testId:L,klId:G}=j("close-icon",g),H=n.createElement(n.Fragment,null,o&&n.cloneElement(o,{className:"kl-components-tag-icon"}),n.createElement(V,{type:"BTM4",className:"kl-components-tag-text"},A),s&&n.createElement(W,{className:"tag-invalid-icon"}),M&&n.createElement(K,{mode:z,size:P,icon:n.createElement(X,null),disabled:l||T,onClick:u=>{p&&!l&&p(u)},testId:L,klId:G})),_=Y(E,{invalid:s,interactive:N,uninteractive:R}),m=n.createElement(te,{onMouseDown:u=>{u.stopPropagation()},cssConfig:i,tabIndex:c?0:void 0,className:_,outlined:b,...g,...f},H);return k?n.createElement(J,{text:a,placement:O},m):I?n.createElement(B,{tooltip:a},m):m};r.Group=t=>n.createElement(Z,{Component:r,...t});r.Group.displayName="TagGroup";r.__docgenInfo={description:"",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null}],displayName:"Tag",props:{size:{required:!1,tsType:{name:"Extract",elements:[{name:"SizingType"},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Extract<SizingType, 'small' | 'medium'>"},description:"Size"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"tagModes[number]",raw:"typeof tagModes[number]"},description:"Color mode"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon"},closable:{required:!1,tsType:{name:"boolean"},description:"Is it closable?"},truncation:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Maximum number of characters allowed in the tag content */
  maxChars?: number,
  /** Truncation symbol */
  truncationSymbol?: string,
  /** Position of the tooltip when content is truncated */
  tooltipPosition?: TooltipProps['placement']
}`,signature:{properties:[{key:"maxChars",value:{name:"number",required:!1},description:"Maximum number of characters allowed in the tag content"},{key:"truncationSymbol",value:{name:"string",required:!1},description:"Truncation symbol"},{key:"tooltipPosition",value:{name:"TooltipProps['placement']",raw:"TooltipProps['placement']",required:!1},description:"Position of the tooltip when content is truncated"}]}},description:"Config for tag truncation"},outlined:{required:!1,tsType:{name:"boolean"},description:"Is outlined"},interactive:{required:!1,tsType:{name:"boolean"},description:"Make tag interactive"},label:{required:!1,tsType:{name:"ReactNode"},description:"Label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is disabled"},readOnly:{required:!1,tsType:{name:"boolean"},description:"Is readonly"},invalid:{required:!1,tsType:{name:"union",raw:"null | boolean",elements:[{name:"null"},{name:"boolean"}]},description:"Is invalid"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"},{name:"globalThis.MouseEvent"}],raw:"MouseEvent<HTMLElement, globalThis.MouseEvent>"},name:"e"}],return:{name:"void"}}},description:"Callback executed when tag is closed"},isResponsive:{required:!1,tsType:{name:"boolean"},description:`Flag that makes tag responsive
If this option is enabled tag behaves like a block element`}}};export{r as T};
