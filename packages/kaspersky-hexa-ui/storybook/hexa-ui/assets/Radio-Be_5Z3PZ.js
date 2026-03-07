import{A as R}from"./AdditionalContent-CmOFtI4D.js";import{a0 as u,a1 as q,a5 as E,u as T,R as t,r as N,j as s,av as I,H as A}from"./iframe-zz6a49H8.js";import{u as H}from"./useId-BfMMUQXv.js";import{F as L}from"./FormLabel-BcyH9HgS.js";import{R as b}from"./index-COIsKS-T.js";const p=q(),M=e=>u`
  // enabled
  .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 4px;
    padding: 0;
    margin: 0;

    color: ${e("enabled.color")};
    white-space: unset;

    & > span + span {
      padding: 0 0 0 4px;
    }
  }
  
  // dot
  .ant-radio-inner {
    width: calc(14px);
    height: calc(14px);
    background-color: ${e("enabled.background")};
    border-color: ${e("enabled.border")};

    &::after {
      transform: scale(calc(0.5));
      width: calc(16px);
      height: calc(16px);
      margin-top: calc(-8px);
      margin-left: calc(-8px);
      transition: opacity 0.1s ease-in-out !important;
      left: 50%;
      top: 50%;
      background-color: ${e("enabled.dotColor")};
    }
  }
  
  .ant-radio-checked .ant-radio-inner::after {
    background-color: ${e("enabled.dotColor")};
  }

  .ant-radio-checked::after {
    display: none;
  }
  
  // hover
  .ant-radio-wrapper:hover {
    .ant-radio-inner {
      border-color: ${e("hover.border")};
      background-color: ${e("hover.background")};
      
      &::after {
        background-color: ${e("hover.dotColor")};
      }
    }
  }

  // active
  .ant-radio-wrapper:active, .ant-radio-wrapper:hover:active {
    .ant-radio-inner {
      border-color: ${e("active.border")};
      background-color: ${e("active.background")};

      &::after {
        background-color: ${e("active.dotColor")};
      }
    }
  }
  
  // focus
  && .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${e("enabled.border")};
    outline: none;
    box-shadow: none;
  }
  && .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: ${e("enabled.border")};
    outline: none;
    box-shadow: ${e("focus.boxShadow")};
  }
  
  // disabled
  .ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        span {
          color: ${e("disabled.color")}
        }
        .ant-radio-inner {
          border-color: ${e("disabled.border")} !important;
          background-color: ${e("disabled.background")};

          &::after {
            background-color: ${e("disabled.dotColor")};
          }
        }
      }
    }
  }
`,F=e=>u`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .ant-radio {
    display: flex;
    top: inherit;
    height: 20px;
    align-items: center;
  }

  &.ant-radio-vertical {
    flex-direction: column;
    gap: 8px;
  }

  // readonly
  .kl-radio-readonly.ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        &, * {
          cursor: default;
        }
        span {
          color: ${e("readonly.color")}
        }
        .ant-radio-inner {
          border-color: ${e("readonly.border")} !important;
          background-color: ${e("readonly.background")};

          &::after {
            background-color: ${e("readonly.dotColor")};
          }
        }
      }
    }
  }

  // invalid
  &.kl-radio-invalid .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
    &, &:hover, &:active, &:focus {
      .ant-radio-inner {
        border-color: ${e("invalid.border")};

        &::after {
          background-color: ${e("invalid.dotColor")};
        }
      }
      .ant-radio-inner {
        background-color: ${e("enabled.background")};
      }
    }
  }
  
  ${M(p)}
`,V=F(p),_=e=>E(e,{componentName:"radio",defaultValues:{}}),S=A(b.Group).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${V}`,j=e=>{try{G(e.options)}catch(r){console.error(r)}const o=_(e),{testAttributes:n}=T(o);return t.createElement(g,{role:"radioList",testAttributes:n,...o})},g=({vertical:e,invalid:o,disabled:n,readonly:r,options:m,value:v,className:d,testId:i,theme:y,testAttributes:h,getPopupContainer:f,...$})=>{const k=H(),w=N.useMemo(()=>s(d,{"kl-radio-invalid":o,"ant-radio-vertical":e}),[e,o,d]),l=I();return t.createElement(S,{className:w,value:v,disabled:n||r,...h,...$},m.map((a,x)=>{const c=`${k}-${a.value}`;return t.createElement("div",{key:x},t.createElement(b,{id:c,value:a.value,"data-testid":`${i}-${a.value}`,disabled:a.disabled||a.readonly,className:s(d,{"kl-radio-readonly":a.readonly&&!n||r,"radio-string-label":typeof a.label=="string"})},typeof a.label=="string"?t.createElement(L,{testId:`${i}-${a.value}-label`,required:a.required,tooltip:a.tooltip,disabled:a.disabled,theme:y,htmlFor:c,getPopupContainer:f??l.getPopupContainer??(C=>l.usePortal?document.body:C.parentElement)},a.label):a.label),t.createElement(R,{description:a.description,dependentElement:a.dependentElement}))}))},G=e=>{const o=e.map(r=>r.value),n=new Set(o);if(o.length!==n.size)throw new Error("Radio options must have unique values")};j.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"If orientation is vertical"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is disabled"},readonly:{required:!1,tsType:{name:"boolean"},description:"Is readonly"},invalid:{required:!1,tsType:{name:"boolean"},description:"Is invalid"},role:{required:!1,tsType:{name:"string"},description:"HTML role"},options:{required:!0,tsType:{name:"Array",elements:[{name:"WithAdditionalContent",elements:[{name:"signature",type:"object",raw:`{
  label: Exclude<ReactNode, null | undefined>,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  tooltip?: ReactNode
}`,signature:{properties:[{key:"label",value:{name:"Exclude",elements:[{name:"ReactNode"},{name:"union",raw:"null | undefined",elements:[{name:"null"},{name:"undefined"}]}],raw:"Exclude<ReactNode, null | undefined>",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"readonly",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"ReactNode",required:!1}}]}}],raw:`WithAdditionalContent<{
  label: Exclude<ReactNode, null | undefined>,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  tooltip?: ReactNode
}>`}],raw:"RadioOption[]"},description:"Array of options"},getPopupContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}}},description:"Popup container for tooltips"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};g.__docgenInfo={description:"",methods:[],displayName:"RadioView"};export{j as R,M as g};
