import{a1 as R,a0 as H,w as M,u as S,R as t,j as k,A,aj as j,H as D}from"./iframe-DlY6n6Um.js";import{F as W}from"./FormLabel-CKFB06hk.js";import{H as _}from"./HelpMessage-CfUPOaMw.js";import{M as P}from"./Markdown-9a6sqH5b.js";import{o as B}from"./Help-CdI7ei6S.js";import{P as G}from"./Popover-D8ys_ap7.js";const l={p_6:"6fr",p_8:"8fr",p_12:"12fr",p_3_6:"3fr 6fr",p_4_6:"4fr 6fr",p_3_8:"3fr 8fr",p_4_8:"4fr 8fr"},q="872px",p="235px",O="200px",U=[".ant-input",".ant-input-affix-wrapper",".ant-input-number",".ant-input-password","div > .kl-v6-textarea","div > .ant-select","div > .ant-picker",".ant-picker",".kl6-code-viewer",".ant-btn",".kl6-segmented-button",".hexa-upload",'label[class*="toggleBtn"]'],V=[".kl6-checkbox-wrapper",".ant-checkbox-group",".ant-radio-group"],ie=[".kl6-link",".kl6-status",".kl6-text"],X=U.map(e=>`.kl6-field-control-box ${e}`).join(", "),z=V.map(e=>`.kl6-field-control-box > ${e}`).join(", "),J=R();function i(e){return`
    max-width: none;
    grid-template-areas: "label control .";
    grid-template-columns: ${e};
    gap: 16px;
  `}function b(e){return`
    max-width: none;
    grid-template-areas: "label ." "control .";
    grid-template-columns: ${e}};
  `}function K({gridLayout:e,gridPreset:s,controlWidth:d}){if(!e&&s)switch(s){case l.p_6:return b("6fr 6fr");case l.p_8:return b("8fr 4fr");case l.p_12:return b("12fr 0fr");case l.p_3_6:return i("3fr 6fr 3fr");case l.p_3_8:return i("3fr 8fr 1fr");case l.p_4_6:return i("4fr 6fr 2fr");case l.p_4_8:return i("4fr 8fr")}if(typeof e=="string")return i(e);const c=(e==null?void 0:e.firstCol)||p,f=d||(e==null?void 0:e.secondCol)||"auto";return`
    grid-template-areas: "label control";
    grid-template-columns: ${c} ${f};
  `}const Q=H`
  width: 100%;
  max-width: ${q};
  display: flex;

  .kl6-field-label {
    grid-area: label;
  }

  .kl6-field-control-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 4px;
    grid-area: control;

    .kl6-field-control-box {
      display: flex;
      align-items: center;
      gap: 8px;
      ${({controlWidth:e})=>e?`width: ${e}px; flex: none;`:`min-width: ${O};`}

      .kl6-field-control-additional {
        width: 16px;
        height: 16px;
        cursor: pointer;

        .kl6-field-help-icon {
          color: ${J("helpIconColor")};
        }
      }
    }
  }

  // control should stretch when there is no label
  &&:not(:has( > .kl6-field-label)) .kl6-field-control-wrapper {
    flex: 1;
  }

  // offset for different controls
  .kl6-field-control-wrapper:has(${z}) {
    > :not(.kl6-field-control-box) {
      margin-left: 18px;
    }
  }

  .kl6-field-control-wrapper:has( > div > .ant-toggle-wrapper > .form-label) {
    > :not(.kl6-field-control-box) {
      margin-left: 36px;
    }
  }

  // Label positions
  &.kl6-field-label-position-before {
    .kl6-field-label {
      padding-right: 16px;
    }
  }

  &.kl6-field-label-position-after {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .kl6-field-label {
      padding-left: 16px;
    }
  }

  &.kl6-field-label-position-top {
    flex-direction: column;
    gap: 4px;
  }

  &.kl6-field-label-position-before {
    &.kl6-field-label-type-default {
      .kl6-field-label {
        width: ${p};
      }
      .kl6-field-control-wrapper {
        flex: 1;
        min-width: initial;
      }
    }

    &.kl6-field-label-type-full {
      .kl6-field-label {
        flex: 1;
        min-width: ${p};
      }
      .kl6-field-control-wrapper {
        flex: none;
      }
    }

    &.kl6-field-label-type-stretch {
      .kl6-field-label {
        min-width: auto;
      }
      .kl6-field-control-wrapper {
        flex: 1;
      }
    }
  }
  
  &.kl6-field-grid-layout {
    display: grid;
    ${K}
  }

  &.kl6-field-grid-layout,
  &.kl6-field-label-position-before,
  &.kl6-field-label-position-after {
    &.kl6-field-label-type-default,
    &.kl6-field-label-type-full {
      .kl6-field-label + .kl6-field-control-wrapper {
        max-width: ${({controlWidth:e})=>e||`calc(${q} - ${p})`};
      }
    }
    &:has(${X}) .kl6-field-label {
      padding-top: 6px;
    }
  }

  ${({controlWidth:e})=>e&&"&& .kl6-field-control-wrapper { flex: none; }"}
`,Y=e=>M(e,{componentName:"field",defaultValues:{}}),Z=D.div.withConfig({shouldForwardProp:e=>!["cssConfig","labelType","controlWidth","gridLayout","gridPreset"].includes(e)})`${Q}`,ee=e=>{const{additionalComponent:s,className:d,control:c,controlWidth:f,cssConfig:$,description:g,getPopupContainer:h,gridLayout:o,gridPreset:n,label:m,labelPosition:u="top",labelType:x="default",message:y,messageMode:N="error",onHelpClick:w,popoverPlacement:v,popoverWidth:C,required:E=!1,style:L,testAttributes:F,tooltip:a,wrapperClassNames:r}=S(Y(e)),T=I=>I.parentElement;return t.createElement(Z,{className:k(d,"kl6-field",{"kl6-field-grid-layout":o||n,[`kl6-field-label-type-${x}`]:!o&&!n&&u==="before",[`kl6-field-label-position-${u}`]:!o&&!n,[`_label-${u}`]:!o&&!n}),cssConfig:$,labelType:x,controlWidth:f,gridLayout:o,gridPreset:n,style:L,...F},m&&t.createElement("div",{className:k("kl6-field-label",r==null?void 0:r.labelClassName),"data-role":"kv-key"},t.createElement(W,{tooltip:a,required:E,mode:"secondary",popoverPlacement:v,popoverWidth:C,getPopupContainer:h||T},m)),t.createElement("div",{className:k("kl6-field-control-wrapper",r==null?void 0:r.controlClassName)},t.createElement("div",{className:"kl6-field-control-box","data-role":"kv-value"},c,!m&&a&&t.createElement("div",{className:"kl6-field-control-additional"},t.createElement(G,{content:typeof a=="string"?t.createElement(P,{withoutTextStyle:!0,value:a}):a,getPopupContainer:h||T,placement:v,width:C},t.createElement(A,{interactive:!1,icon:t.createElement(j,null)}))),w&&t.createElement("div",{className:"kl6-field-control-additional"},t.createElement(B,{onClick:w,className:"kl6-field-help-icon"}))),g&&t.createElement(_,{text:t.createElement(P,{value:g,withoutTextStyle:!0})}),y&&t.createElement(_,{mode:N,text:y}),s))};ee.__docgenInfo={description:"",methods:[],displayName:"Field",props:{className:{required:!1,tsType:{name:"string"},description:"Custom class name of the field wrapper or fiels items"},wrapperClassNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  labelClassName?: string,
  controlClassName?: string
}`,signature:{properties:[{key:"labelClassName",value:{name:"string",required:!1}},{key:"controlClassName",value:{name:"string",required:!1}}]}},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label text. If undefined, label isn't shown"},labelPosition:{required:!1,tsType:{name:"union",raw:"'before' | 'after' | 'top'",elements:[{name:"literal",value:"'before'"},{name:"literal",value:"'after'"},{name:"literal",value:"'top'"}]},description:"Position of the label"},labelType:{required:!1,tsType:{name:"LabelType"},description:"Label type"},control:{required:!1,tsType:{name:"ReactElement"},description:"Control item"},controlWidth:{required:!1,tsType:{name:"number"},description:"Custom width of control in px"},additionalComponent:{required:!1,tsType:{name:"ReactNode"},description:"Additional component after description and message"},description:{required:!1,tsType:{name:"string"},description:"Text under control"},message:{required:!1,tsType:{name:"string"},description:"Message text"},messageMode:{required:!1,tsType:{name:"HelpMessageMode"},description:"Message color mode"},onHelpClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler on help icon click"},getPopupContainer:{required:!1,tsType:{name:"PopoverProps['getPopupContainer']",raw:"PopoverProps['getPopupContainer']"},description:"Parent Node which the popover should be rendered to"},gridLayout:{required:!1,tsType:{name:"union",raw:`string | {
  firstCol?: string,
  secondCol?: string
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  firstCol?: string,
  secondCol?: string
}`,signature:{properties:[{key:"firstCol",value:{name:"string",required:!1}},{key:"secondCol",value:{name:"string",required:!1}}]}}]},description:"Grid values for grid-template-columns. If it is set, it overrides labelPosition and labelType"},gridPreset:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof LayoutPreset)[keyof typeof LayoutPreset]"},description:""},popoverPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'left' | 'right' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"Popover position relative to the info icon"},popoverWidth:{required:!1,tsType:{name:"number"},description:"Custom width for popover"},required:{required:!1,tsType:{name:"boolean"},description:"Is required"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"Popover content"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{ee as F,l as L,ie as t};
