import{C as S,D as A,aq as R,w as U,l as k,R as e,T as y,v as $,A as M,am as O,H as z,ak as B}from"./iframe-4-PRSI1I.js";import{s as j}from"./shouldForwardProp-Cdy-RLhZ.js";import{t as J,a as K}from"./Unlock2-NvaAxZhy.js";import{o as b}from"./StatusWarningSolid-y7bEFQLk.js";import{P as Q}from"./FormLabel-CoXJxjwh.js";import{T as W}from"./Tag-B3SARhhR.js";import{T as X}from"./Toggle-Cpn23pdP.js";const o=A(),Y=S`
  & {
    .lock-group {
      color: ${o("color")};
      border-bottom: 1px solid ${o("borderColor")};
      padding: 0 0 4px;
      display: flex;

      &--standalone {
        border-bottom: none;
      }
    }

    .lock-group__children {
      padding-top: 20px;
    }

    .lock-group__children--outlined {
      border: 1px solid ${o("borderColor")};
      border-top: none;
      padding: 20px;
    }

    .lock-group-caption {
      flex: 1;
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-gap: 10px;

      &__title {
        white-space: nowrap;
      }
    }

    .lock-group-control {
      display: flex;
      align-items: center;
      gap: var(--spacing--gap_dependent)
    }

    .lock-group-control-icon {
      & path {
        fill: ${o("iconColor")};
      }
    }

    .information-text-icon {
      & path {
        fill: ${o("iconColor")};
      }
    }
    
    .lock-group-status-icon {
      margin-right: var(--spacing--gap_related);
    }
  }
`,u=t=>R(t,{componentName:"lockGroup",defaultValues:{}});try{u.displayName="useThemedLockGroup",u.__docgenInfo={description:"",displayName:"useThemedLockGroup",props:{children:{defaultValue:null,description:"Dependant from LockGroup components",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class to customize predefined LockGroup styles",name:"className",required:!1,type:{name:"string"}},informationText:{defaultValue:null,description:"Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip",name:"informationText",required:!1,type:{name:"ReactNode | FC"}},isHideLock:{defaultValue:null,description:"Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags",name:"isHideLock",required:!1,type:{name:"boolean"}},isHideControl:{defaultValue:null,description:`Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default,
they managed by different flags`,name:"isHideControl",required:!1,type:{name:"boolean"}},isLockClosed:{defaultValue:null,description:"Flag to open or close lock and enable or disable Toggle",name:"isLockClosed",required:!1,type:{name:"boolean"}},isLockStatusNotDefined:{defaultValue:null,description:"Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies",name:"isLockStatusNotDefined",required:!1,type:{name:"boolean"}},isLockDisabled:{defaultValue:null,description:"Flag to disable Toggle, it will be impossible to change lock status",name:"isLockDisabled",required:!1,type:{name:"boolean"}},isGroupDisabled:{defaultValue:null,description:"Flag to disable dependant components",name:"isGroupDisabled",required:!1,type:{name:"boolean"}},isStandalone:{defaultValue:null,description:"Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components",name:"isStandalone",required:!1,type:{name:"boolean"}},onLockChange:{defaultValue:null,description:"Callback to handle Toggle change (and lock)",name:"onLockChange",required:!1,type:{name:"((checked: boolean) => void)"}},statusText:{defaultValue:null,description:"Text near Toggle and lock",name:"statusText",required:!1,type:{name:"ReactNode"}},isChildrenOutlined:{defaultValue:null,description:"Flag to show border around dependant components",name:"isChildrenOutlined",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Text which will be shown in LockGroup Header",name:"title",required:!1,type:{name:"ReactNode"}},titleLevel:{defaultValue:null,description:"Level for LockGroup Header — H6, H5, H4",name:"titleLevel",required:!1,type:{name:"enum",value:[{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTags:{defaultValue:null,description:`@deprecated Use titleElementAfterInstead. List of Tags near Header. Used for example to show supported
operating system for LockGroup`,name:"titleTags",required:!1,type:{name:"string[]"}},titleElementAfter:{defaultValue:null,description:"Element to render after title",name:"titleElementAfter",required:!1,type:{name:"ReactNode"}},statusIcon:{defaultValue:null,description:"Status icon",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"warning"'}]}},statusTooltip:{defaultValue:null,description:"Tooltip text for status icon",name:"statusTooltip",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}const Z=z.div.withConfig({shouldForwardProp:j})`
  ${Y}
`,P=({isLockStatusNotDefined:t,isLockClosed:n})=>t?e.createElement(B,{className:"lock-group-control-icon"}):n?e.createElement(J,{className:"lock-group-control-icon"}):e.createElement(K,{className:"lock-group-control-icon"}),ee={warning:b},h=t=>{const n=u(t),T=U(n),{children:i,informationText:c,isHideLock:L,isHideControl:I,isLockClosed:p,isLockStatusNotDefined:m=!1,isLockDisabled:V,isGroupDisabled:q,isStandalone:s=!1,onLockChange:C,statusText:f,title:g,titleLevel:v="H6",titleTags:r=[],titleElementAfter:H,isChildrenOutlined:N=!1,testAttributes:x,statusIcon:l,statusTooltip:G,..._}=T,d=a=>t.klId||t.testId?{"data-testid":t.testId&&a+t.testId,"kl-id":t.klId&&a+t.klId}:{},E=k({"lock-group":!0,"lock-group--standalone":s}),w=k({"lock-group__children":!0,"lock-group__children--outlined":N}),D=l?ee[l]:b;return e.createElement(Z,{...x,..._},e.createElement("div",{className:E,...d("lock-group-")},!s&&e.createElement("div",{className:"lock-group-caption"},g&&e.createElement("div",{className:"lock-group-caption__title"},e.createElement(y,{...d("lock-group-title-"),type:v},g)),r&&r.length>0&&e.createElement("div",{className:"lock-group-caption__tags"},r.map((a,F)=>e.createElement(W,{key:F,mode:"neutral",outlined:!0},a))),H),!I&&e.createElement("div",{className:"lock-group-control",...d("lock-group-control-")},l&&e.createElement($,{text:G},e.createElement(D,{color:`var(--icon--status--status${l})`,className:"lock-group-status-icon"})),!L&&e.createElement(P,{isLockClosed:p,isLockStatusNotDefined:m}),f&&e.createElement(y,{klId:t.klId&&"lock-group-status-text-"+t.klId,testId:t.testId&&"lock-group-status-text-"+t.testId,type:"BTR3",className:"lock-group-control-label"},f),e.createElement(X,{klId:t.klId&&"lock-group-toggle-"+t.klId,testId:t.testId&&"lock-group-toggle-"+t.testId,disabled:V||m,onChange:C,checked:p}),c&&e.createElement(Q,{placement:"bottomLeft",content:c},e.createElement(M,{interactive:!1,icon:e.createElement(O,{className:"information-text-icon"})})))),!s&&!!i&&e.createElement("div",{className:w},q?e.Children.map(i,a=>e.isValidElement(a)?e.cloneElement(a,{disabled:!0}):a):i))};try{h.displayName="LockGroup",h.__docgenInfo={description:"",displayName:"LockGroup",props:{children:{defaultValue:null,description:"Dependant from LockGroup components",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class to customize predefined LockGroup styles",name:"className",required:!1,type:{name:"string"}},informationText:{defaultValue:null,description:"Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip",name:"informationText",required:!1,type:{name:"ReactNode | FC"}},isHideLock:{defaultValue:null,description:"Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags",name:"isHideLock",required:!1,type:{name:"boolean"}},isHideControl:{defaultValue:null,description:`Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default,
they managed by different flags`,name:"isHideControl",required:!1,type:{name:"boolean"}},isLockClosed:{defaultValue:null,description:"Flag to open or close lock and enable or disable Toggle",name:"isLockClosed",required:!1,type:{name:"boolean"}},isLockStatusNotDefined:{defaultValue:null,description:"Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies",name:"isLockStatusNotDefined",required:!1,type:{name:"boolean"}},isLockDisabled:{defaultValue:null,description:"Flag to disable Toggle, it will be impossible to change lock status",name:"isLockDisabled",required:!1,type:{name:"boolean"}},isGroupDisabled:{defaultValue:null,description:"Flag to disable dependant components",name:"isGroupDisabled",required:!1,type:{name:"boolean"}},isStandalone:{defaultValue:null,description:"Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components",name:"isStandalone",required:!1,type:{name:"boolean"}},onLockChange:{defaultValue:null,description:"Callback to handle Toggle change (and lock)",name:"onLockChange",required:!1,type:{name:"((checked: boolean) => void)"}},statusText:{defaultValue:null,description:"Text near Toggle and lock",name:"statusText",required:!1,type:{name:"ReactNode"}},isChildrenOutlined:{defaultValue:null,description:"Flag to show border around dependant components",name:"isChildrenOutlined",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Text which will be shown in LockGroup Header",name:"title",required:!1,type:{name:"ReactNode"}},titleLevel:{defaultValue:null,description:"Level for LockGroup Header — H6, H5, H4",name:"titleLevel",required:!1,type:{name:"enum",value:[{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},titleTags:{defaultValue:null,description:`@deprecated Use titleElementAfterInstead. List of Tags near Header. Used for example to show supported
operating system for LockGroup`,name:"titleTags",required:!1,type:{name:"string[]"}},titleElementAfter:{defaultValue:null,description:"Element to render after title",name:"titleElementAfter",required:!1,type:{name:"ReactNode"}},statusIcon:{defaultValue:null,description:"Status icon",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"warning"'}]}},statusTooltip:{defaultValue:null,description:"Tooltip text for status icon",name:"statusTooltip",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"any"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string | ComponentType<any>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"string | ComponentType<any>"}}}}}catch{}export{h as L};
