import{A as q}from"./AdditionalContent-CRQIPW1O.js";import{C as b,w as C,r as V,l as p,x as _,ag as R,R as o,H as E}from"./iframe-4-PRSI1I.js";import{u as T}from"./useId-B0iEqS7b.js";import{F as $}from"./FormLabel-CoXJxjwh.js";import{R as m}from"./index-CsWSl5Dl.js";const N=()=>b`
  // enabled
  .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 4px;
    padding: 0;
    margin: 0;

    color: var(--radio--text--base--enabled);
    white-space: unset;

    & > span + span {
      padding: 0 0 0 4px;
    }
  }
  
  // dot
  .ant-radio-inner {
    width: calc(14px);
    height: calc(14px);
    background-color: var(--radio--bg--base--enabled);
    border-color: var(--radio--border--base--enabled);

    &::after {
      transform: scale(calc(0.5));
      width: calc(16px);
      height: calc(16px);
      margin-top: calc(-8px);
      margin-left: calc(-8px);
      transition: opacity 0.1s ease-in-out !important;
      left: 50%;
      top: 50%;
      background-color: var(--radio--icon--base--enabled_selected);
    }
  }
  
  .ant-radio-checked .ant-radio-inner::after {
    background-color: var(--radio--icon--base--enabled_selected);
  }

  .ant-radio-checked::after {
    display: none;
  }
  
  // hover
  .ant-radio-wrapper:hover {
    .ant-radio-inner {
      border-color: var(--radio--border--base--hover);
      background-color: var(--radio--bg--base--hover);
      
      &::after {
        background-color: var(--radio--icon--base--hover_selected);
      }
    }
  }

  // active
  .ant-radio-wrapper:active, .ant-radio-wrapper:hover:active {
    .ant-radio-inner {
      border-color: var(--radio--border--base--active);
      background-color: var(--radio--bg--base--active);

      &::after {
        background-color: var(--radio--icon--base--active_selected);
      }
    }
  }
  
  // focus
  && .ant-radio-input:focus + .ant-radio-inner {
    border-color: var(--radio--border--base--enabled);
    outline: none;
    box-shadow: none;
  }
  && .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: var(--radio--border--base--enabled);
    outline: none;
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }
  
  // disabled
  .ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        span {
          color: var(--radio--text--base--disabled);
        }
        .ant-radio-inner {
          border-color: var(--radio--border--base--disabled) !important;
          background-color: var(--radio--bg--base--disabled);

          &::after {
            background-color: var(--radio--icon--base--disabled_selected);
          }
        }
      }
    }
  }
`,H=()=>b`
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
          color: var(--radio--text--base--readonly);
        }
        .ant-radio-inner {
          border-color: var(--radio--border--base--readonly) !important;
          background-color: var(--radio--bg--base--readonly);

          &::after {
            background-color: var(--radio--icon--base--readonly_selected);
          }
        }
      }
    }
  }

  // invalid
  &.kl-radio-invalid .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
    &, &:hover, &:active, &:focus {
      .ant-radio-inner {
        border-color: var(--radio--border--danger--enabled);

        &::after {
          background-color: var(--radio--icon--danger--enabled_selected);
        }
      }
      .ant-radio-inner {
        background-color: var(--radio--bg--base--enabled);
      }
    }
  }
  
  ${N()}
`,L=H(),A=E(m.Group)`${L}`,u=a=>{try{M(a.options)}catch(e){console.error(e)}const{vertical:r,invalid:t,disabled:d,readonly:l,options:v,value:f,className:n,theme:i,testAttributes:g,getPopupContainer:y,...h}=C(a),x=T(),k=V.useMemo(()=>p(_(n,i),{"kl-radio-invalid":t,"ant-radio-vertical":r}),[r,t,n,i]),s=R();return o.createElement(A,{className:k,value:f,disabled:d||l,role:"radioList",...g,...h},v.map((e,I)=>{const c=`${x}-${e.value}`;return o.createElement("div",{key:I},o.createElement(m,{id:c,value:e.value,"data-testid":`${a.testId}-${e.value}`,disabled:e.disabled||e.readonly,className:p(n,{"kl-radio-readonly":e.readonly&&!d||l,"radio-string-label":typeof e.label=="string"})},typeof e.label=="string"?o.createElement($,{testId:`${a.testId}-${e.value}-label`,required:e.required,tooltip:e.tooltip,disabled:e.disabled,theme:i,htmlFor:c,getPopupContainer:y??s.getPopupContainer??(w=>s.usePortal?document.body:w.parentElement)},e.label):e.label),o.createElement(q,{description:e.description,dependentElement:e.dependentElement}))}))},M=a=>{const r=a.map(d=>d.value),t=new Set(r);if(r.length!==t.size)throw new Error("Radio options must have unique values")};try{u.displayName="Radio",u.__docgenInfo={description:"",displayName:"Radio",props:{vertical:{defaultValue:null,description:"If orientation is vertical",name:"vertical",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Is disabled",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Is readonly",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"HTML role",name:"role",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"Array of options",name:"options",required:!0,type:{name:"RadioOption[]"}},getPopupContainer:{defaultValue:null,description:"Popup container for tooltips",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{u as R,N as g};
