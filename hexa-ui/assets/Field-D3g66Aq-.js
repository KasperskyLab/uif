import{C as H,D as M,F as R,w as A,R as l,l as b,A as S,am as W,H as D}from"./iframe-4-PRSI1I.js";import{F as U,P as j}from"./FormLabel-CoXJxjwh.js";import{H as q}from"./HelpMessage-B93eXAoX.js";import{M as V}from"./Markdown-BenFmRMk.js";import{r as B}from"./Help-C_e3rqgL.js";const P="872px",s="235px",G="200px",O=[".ant-input",".ant-input-affix-wrapper",".ant-input-number",".ant-input-password","div > .kl-v6-textarea","div > .ant-select","div > .ant-picker",".ant-picker",".kl6-code-viewer",".ant-btn",".kl6-segmented-button",".hexa-upload",'label[class*="toggleBtn"]'],X=[".kl6-checkbox-wrapper",".ant-checkbox-group",".ant-radio-group"],oe=[".kl6-link",".kl6-status",".kl6-text"],t={p_6:"6fr",p_8:"8fr",p_12:"12fr",p_3_6:"3fr 6fr",p_4_6:"4fr 6fr",p_3_8:"3fr 8fr",p_4_8:"4fr 8fr"},J=O.map(e=>`.kl6-field-control-box ${e}`).join(", "),z=X.map(e=>`.kl6-field-control-box > ${e}`).join(", "),K=M();function i(e){return`
    max-width: none;
    grid-template-areas: "label control .";
    grid-template-columns: ${e};
    gap: 16px;
  `}function k(e){return`
    max-width: none;
    grid-template-areas: "label ." "control .";
    grid-template-columns: ${e}};
  `}function Q({gridLayout:e,gridPreset:d,controlWidth:p}){if(!e&&d)switch(d){case t.p_6:return k("6fr 6fr");case t.p_8:return k("8fr 4fr");case t.p_12:return k("12fr 0fr");case t.p_3_6:return i("3fr 6fr 3fr");case t.p_3_8:return i("3fr 8fr 1fr");case t.p_4_6:return i("4fr 6fr 2fr");case t.p_4_8:return i("4fr 8fr")}if(typeof e=="string")return i(e);const u=(e==null?void 0:e.firstCol)||s,f=p||(e==null?void 0:e.secondCol)||"auto";return`
    grid-template-areas: "label control";
    grid-template-columns: ${u} ${f};
  `}const Y=H`
  width: 100%;
  max-width: ${P};
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
      ${({controlWidth:e})=>e?`width: ${e}px; flex: none;`:`min-width: ${G};`}

      .kl6-field-control-additional {
        width: 16px;
        height: 16px;
        cursor: pointer;

        .kl6-field-help-icon {
          color: ${K("helpIconColor")};
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
        width: ${s};
      }
      .kl6-field-control-wrapper {
        flex: 1;
        min-width: initial;
      }
    }

    &.kl6-field-label-type-full {
      .kl6-field-label {
        flex: 1;
        min-width: ${s};
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
    ${Q}
  }

  &.kl6-field-grid-layout,
  &.kl6-field-label-position-before,
  &.kl6-field-label-position-after {
    &.kl6-field-label-type-default,
    &.kl6-field-label-type-full {
      .kl6-field-label + .kl6-field-control-wrapper {
        max-width: ${({controlWidth:e})=>e||`calc(${P} - ${s})`};
      }
    }
    &:has(${J}) .kl6-field-label {
      padding-top: 6px;
    }
  }

  ${({controlWidth:e})=>e&&"&& .kl6-field-control-wrapper { flex: none; }"}
`,Z=e=>R(e,{componentName:"field",defaultValues:{}}),ee=D.div.withConfig({shouldForwardProp:e=>!["cssConfig","labelType","controlWidth","gridLayout","gridPreset"].includes(e)})`${Y}`,E=e=>{const{additionalComponent:d,className:p,control:u,controlWidth:f,cssConfig:N,description:g,getPopupContainer:h,gridLayout:n,gridPreset:r,label:c,labelPosition:m="top",labelType:v="default",message:y,messageMode:I="error",onHelpClick:x,popoverPlacement:w,popoverWidth:C,required:T=!1,style:$,testAttributes:L,tooltip:o,wrapperClassNames:a}=A(Z(e)),_=F=>F.parentElement;return l.createElement(ee,{className:b(p,"kl6-field",{"kl6-field-grid-layout":n||r,[`kl6-field-label-type-${v}`]:!n&&!r&&m==="before",[`kl6-field-label-position-${m}`]:!n&&!r,[`_label-${m}`]:!n&&!r}),cssConfig:N,labelType:v,controlWidth:f,gridLayout:n,gridPreset:r,style:$,...L},c&&l.createElement("div",{className:b("kl6-field-label",a==null?void 0:a.labelClassName),"data-role":"kv-key"},l.createElement(U,{tooltip:o,required:T,mode:"secondary",popoverPlacement:w,popoverWidth:C,getPopupContainer:h||_},c)),l.createElement("div",{className:b("kl6-field-control-wrapper",a==null?void 0:a.controlClassName)},l.createElement("div",{className:"kl6-field-control-box","data-role":"kv-value"},u,!c&&o&&l.createElement("div",{className:"kl6-field-control-additional"},l.createElement(j,{content:typeof o=="string"?l.createElement(V,{withoutTextStyle:!0,value:o}):o,getPopupContainer:h||_,placement:w,width:C},l.createElement(S,{interactive:!1,icon:l.createElement(W,null)}))),x&&l.createElement("div",{className:"kl6-field-control-additional"},l.createElement(B,{onClick:x,className:"kl6-field-help-icon"}))),g&&l.createElement(q,{text:l.createElement(V,{value:g,withoutTextStyle:!0})}),y&&l.createElement(q,{mode:I,text:y}),d))};try{E.displayName="Field",E.__docgenInfo={description:"",displayName:"Field",props:{className:{defaultValue:null,description:"Custom class name of the field wrapper or fiels items",name:"className",required:!1,type:{name:"string"}},wrapperClassNames:{defaultValue:null,description:"",name:"wrapperClassNames",required:!1,type:{name:"{ labelClassName?: string; controlClassName?: string; } | undefined"}},label:{defaultValue:null,description:"Label text. If undefined, label isn't shown",name:"label",required:!1,type:{name:"ReactNode"}},labelPosition:{defaultValue:null,description:"Position of the label",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"after"'},{value:'"before"'},{value:'"top"'}]}},labelType:{defaultValue:null,description:"Label type",name:"labelType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"full"'},{value:'"stretch"'}]}},control:{defaultValue:null,description:"Control item",name:"control",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},controlWidth:{defaultValue:null,description:"Custom width of control in px",name:"controlWidth",required:!1,type:{name:"number"}},additionalComponent:{defaultValue:null,description:"Additional component after description and message",name:"additionalComponent",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Text under control",name:"description",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message text",name:"message",required:!1,type:{name:"string"}},messageMode:{defaultValue:null,description:"Message color mode",name:"messageMode",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"common"'}]}},onHelpClick:{defaultValue:null,description:"Handler on help icon click",name:"onHelpClick",required:!1,type:{name:"(() => void)"}},getPopupContainer:{defaultValue:null,description:"Parent Node which the popover should be rendered to",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},gridLayout:{defaultValue:null,description:"Grid values for grid-template-columns. If it is set, it overrides labelPosition and labelType",name:"gridLayout",required:!1,type:{name:"string | { firstCol?: string; secondCol?: string; } | undefined"}},gridPreset:{defaultValue:null,description:"",name:"gridPreset",required:!1,type:{name:"enum",value:[{value:'"6fr"'},{value:'"8fr"'},{value:'"12fr"'},{value:'"3fr 6fr"'},{value:'"4fr 6fr"'},{value:'"3fr 8fr"'},{value:'"4fr 8fr"'}]}},popoverPlacement:{defaultValue:null,description:"Popover position relative to the info icon",name:"popoverPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},popoverWidth:{defaultValue:null,description:"Custom width for popover",name:"popoverWidth",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"Is required",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tooltip:{defaultValue:null,description:"Popover content",name:"tooltip",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{E as F,t as L,oe as t};
