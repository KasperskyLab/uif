import{T as D}from"./TextReducer-JHIejSuK.js";import{R as n,t as F,C,D as H,F as U,w as X,ah as J,T as K,A as Y,aA as j,l as Q,v as W,H as Z}from"./iframe-4-PRSI1I.js";import{T as ee}from"./index-B-OY55d_.js";import{G as ae}from"./Group-D8YF7Z5T.js";const te=n.forwardRef((t,a)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:a,...t},n.createElement("path",{fill:F(t.color)||t.color||"currentColor",fillRule:"evenodd",d:"M4 2c-1.1046 0-2 .8954-2 2v8c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2V4c0-1.1046-.8954-2-2-2zm4 2.4434a.75.75 0 0 1 .75.75v2.91a.75.75 0 1 1-1.5 0v-2.91a.75.75 0 0 1 .75-.75m.8499 6.2748a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0",clipRule:"evenodd"}))),w=n.memo(n.forwardRef((t,a)=>{const{klId:r,testId:d,...i}=t;return n.createElement(te,{"kl-id":r,"data-testid":d,ref:a,...i})}));w.displayName="StatusDangerSolid1";const e=H(),ne=C`
  ${({outlined:t})=>{const a=t?"outlined":"filled";return C`
      max-width: 100%;
      display: inline-flex;
      height: ${e("height")};
      align-items: center;
      border-radius: ${e("borderRadius")};
      border: ${e(`${a}.enabled.border`)};
      padding: ${e("padding")};
      gap: ${e("gap")};
      background: ${e(`${a}.enabled.background`)};
      box-sizing: border-box;
      cursor: default;
      outline: none;
      box-shadow: none;

      .kl-components-tag-text {
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${e(`${a}.enabled.color`)};
      }
      .kl-components-tag-icon {
        color: ${e(`${a}.enabled.icon`)};
      }

      &&.ant-tag.uninteractive {
        &:focus,
        &:focus-visible {
          border: ${e(`${a}.enabled.border`)};
        }
      }

      &&.ant-tag.interactive {
        cursor: pointer;

        &:focus-visible {
          box-shadow: ${e(`${a}.focus.boxShadow`)};
        }

        &:hover {
          color: ${e(`${a}.hover.color`)};
          background: ${e(`${a}.hover.background`)};
          border: ${e(`${a}.hover.border`)};
        }

        &:active {
          color: ${e(`${a}.active.color`)};
          background: ${e(`${a}.active.background`)};
          border: ${e(`${a}.active.border`)};
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
`,oe=t=>U(t,{componentName:"tag",defaultValues:{mode:"neutral",size:"medium"},propsToDrill:["mode","size"]}),le=Z(ee).withConfig({shouldForwardProp:t=>!["cssConfig","interactive","truncation","outlined"].includes(t)})`
  ${ne}
`,o=t=>{const a=oe(t),r=X(a);return n.createElement(ie,{...r})},re="...",V=50,ie=({children:t,icon:a,cssConfig:r,label:d,onClose:i,className:x,closable:q,invalid:s,outlined:f,ref:de,testAttributes:b,isResponsive:E,...v})=>{const{mode:_,size:M,disabled:c,readOnly:y,interactive:u,truncation:N={},onClick:h}=v,$=!y&&!c&&!s,R=$&&(u||h),S=(!$||!u)&&!h,{maxChars:m,truncationSymbol:T=re,tooltipPosition:A}=N,O=!f&&_!=="neutral"?"ghostInverted":"ghost",l=t||d,k=m&&m<=V?m:V,I=typeof l=="string"&&l.length>k,P=I?`${l.substring(0,k-T.length)}${T}`:l,{testId:z,klId:G}=J("close-icon",b),L=n.createElement(n.Fragment,null,a&&n.cloneElement(a,{className:"kl-components-tag-icon"}),n.createElement(K,{type:"BTM4",className:"kl-components-tag-text"},P),s&&n.createElement(w,{className:"tag-invalid-icon"}),q&&n.createElement(Y,{mode:O,size:M,icon:n.createElement(j,null),disabled:c||y,onClick:g=>{i&&!c&&i(g)},testId:z,klId:G})),B=Q(x,{invalid:s,interactive:R,uninteractive:S}),p=n.createElement(le,{onMouseDown:g=>{g.stopPropagation()},cssConfig:r,tabIndex:u?0:void 0,className:B,outlined:f,...b,...v},L);return I?n.createElement(W,{text:l,placement:A},p):E?n.createElement(D,{tooltip:l},p):p};o.Group=t=>n.createElement(ae,{Component:o,...t});o.Group.displayName="TagGroup";try{o.displayName="Tag",o.__docgenInfo={description:"",displayName:"Tag",props:{size:{defaultValue:null,description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"ai"'},{value:'"orange"'},{value:'"grass"'},{value:'"violet"'},{value:'"purple"'},{value:'"grey"'},{value:'"red"'},{value:'"yellow"'},{value:'"emerald"'},{value:'"marengo"'},{value:'"marina"'}]}},icon:{defaultValue:null,description:"Icon",name:"icon",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Is it closable?",name:"closable",required:!1,type:{name:"boolean"}},truncation:{defaultValue:null,description:"Config for tag truncation",name:"truncation",required:!1,type:{name:"TruncationProps"}},outlined:{defaultValue:null,description:"Is outlined",name:"outlined",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tag interactive",name:"interactive",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Is readonly",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean | null"}},onClose:{defaultValue:null,description:"Callback executed when tag is closed",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<HTMLElement, MouseEvent>) => void)"}},isResponsive:{defaultValue:null,description:`Flag that makes tag responsive
If this option is enabled tag behaves like a block element`,name:"isResponsive",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}try{o.Group.displayName="Tag.Group",o.Group.__docgenInfo={description:"",displayName:"Tag.Group",props:{items:{defaultValue:null,description:"Array of items",name:"items",required:!0,type:{name:"TagProps[] | ReactElement<TagProps, string | JSXElementConstructor<any>>[]"}},orientation:{defaultValue:null,description:"Direction of the elements",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"AlignItems"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{o as T,w as o};
