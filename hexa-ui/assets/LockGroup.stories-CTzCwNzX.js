import{a1 as Y,a0 as z,a5 as B,u as K,j as L,R as e,T as k,y as Q,A as Z,aj as X,H as N,aP as P,b as ee,r as f,aw as te}from"./iframe-CBNIXqWm.js";import{w as oe}from"./withDesignControls-CUCSz6At.js";import{w as ne}from"./withMeta-BiY54Lnt.js";import{T as re}from"./Textbox-DJ1nJyzm.js";import{s as se}from"./shouldForwardProp-Cdy-RLhZ.js";import{H as _,I as ae,J as ie}from"./index-B8rTZcNz.js";import{P as le}from"./Popover-BHGhJBJm.js";import{T as ce}from"./Tag-DB-z3Swo.js";import{T as pe}from"./Toggle-Be9eoBq9.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DRLKWrxC.js";import"./StatusOkOutline-BhzwBS5E.js";import"./useGlobalStyles-BU6K1Vs_.js";import"./useThemedTextbox-CKIx7skj.js";import"./typesHelpers-tpz7Of7L.js";import"./input-CukqmKZ0.js";import"./index-Chjiymov.js";import"./KeyCode-BRZB9_MH.js";import"./type-YzYuwFG9.js";import"./SearchOutlined-BLcNcmGc.js";import"./Button-DejaZzBC.js";import"./Dropdown-ees5VvWC.js";import"./Overflow-CmFo4jk3.js";import"./focus-BxWsNqjj.js";import"./Loader-vJbmmTbY.js";import"./index-Cxj_l2qe.js";import"./Divider-ja1HbPIW.js";import"./ArrowRight-DOMqH-A2.js";import"./v4-BoP187Zn.js";import"./button-DLIzkXNO.js";import"./wave-C4_7brB4.js";import"./StatusOkSolid-BSyFKt93.js";import"./useTranslation-rAGXttfk.js";import"./IconResolver-CW0gFSHw.js";import"./index-DN3gpxtf.js";import"./ResizeInput-CdMqYzZs.js";import"./Placeholder-BtGpZ1tA.js";import"./index-DJ6yuvO4.js";import"./Advertisement-0tgBvn-H.js";import"./ArrowRightMini-WAtwWm-P.js";import"./ArrowDown-Y8nc6LUr.js";import"./ArrowLeft-Ct0ZpXbg.js";import"./Calendar-Dr--19yW.js";import"./ArrowUp1-CiQgixFk.js";import"./ExpandUp-B4_yhjTn.js";import"./Server-DX3jIhsG.js";import"./ArrowForward-CTLn1brD.js";import"./Upload-C9JWoNnF.js";import"./StatusDangerOutlineSquare-9vd3YrA5.js";import"./Help-vj8qnM9G.js";import"./Kira-7wgZk1IP.js";import"./Menu2-o6ywPqTf.js";import"./Menu3-Befv1-Ms.js";import"./Unpin-BAFNNKvJ.js";import"./Plus-Wofgsm6R.js";import"./Search1-jsfaA-w0.js";import"./Settings-ZkN9nItr.js";import"./SettingsGear-CXOzO7a9.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./ArrowRight-mEF8foZ-.js";import"./StatusWarningOutline-C1ojQKjI.js";import"./StatusDangerSolid1-CxusGOyX.js";import"./ShieldOkSolid-CKeyel1N.js";import"./StatusWarningSolid-DLIiIj72.js";import"./ArrowDownSolid-Dnc_Zu37.js";import"./ArrowRightSolid-Y7yti10s.js";import"./AccountSearch-CNrOa8Ml.js";import"./Connection-CYP3xHSa.js";import"./TextReducer-BqEbiIRi.js";import"./Group-Bda88l4J.js";import"./index-DPzFOva3.js";import"./colors-AIlJBz8g.js";import"./AdditionalContent-1M0CuFd6.js";import"./HelpMessage-ur0yPu5r.js";import"./FormLabel-Cy2q2kGk.js";import"./Markdown-CxshTH5T.js";const a=Y(),de=z`
  & {
    .lock-group {
      color: ${a("color")};
      border-bottom: 1px solid ${a("borderColor")};
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
      border: 1px solid ${a("borderColor")};
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
        fill: ${a("iconColor")};
      }
    }

    .information-text-icon {
      & path {
        fill: ${a("iconColor")};
      }
    }
    
    .lock-group-status-icon {
      margin-right: var(--spacing--gap_related);
    }
  }
`,me=t=>B(t,{componentName:"lockGroup",defaultValues:{}}),ue=N.div.withConfig({shouldForwardProp:se})`
  ${de}
`,ge=({isLockStatusNotDefined:t,isLockClosed:n})=>t?e.createElement(P,{className:"lock-group-control-icon"}):n?e.createElement(ae,{className:"lock-group-control-icon"}):e.createElement(ie,{className:"lock-group-control-icon"}),fe={warning:_},T=t=>{const n=me(t),i=K(n),{children:r,informationText:l,isHideLock:s,isHideControl:D,isLockClosed:b,isLockStatusNotDefined:h=!1,isLockDisabled:S,isGroupDisabled:F,isStandalone:m=!1,onLockChange:R,statusText:x,title:y,titleLevel:$="H6",titleTags:u=[],isChildrenOutlined:V=!1,testAttributes:A,statusIcon:c,statusTooltip:O,...j}=i,g=o=>t.klId||t.testId?{"data-testid":t.testId&&o+t.testId,"kl-id":t.klId&&o+t.klId}:{},W=L({"lock-group":!0,"lock-group--standalone":m}),J=L({"lock-group__children":!0,"lock-group__children--outlined":V}),M=c?fe[c]:_;return e.createElement(ue,{...A,...j},e.createElement("div",{className:W,...g("lock-group-")},!m&&e.createElement("div",{className:"lock-group-caption"},y&&e.createElement("div",{className:"lock-group-caption__title"},e.createElement(k,{...g("lock-group-title-"),type:$},y)),u&&u.length>0&&e.createElement("div",{className:"lock-group-caption__tags"},u.map((o,U)=>e.createElement(ce,{key:U,mode:"neutral",outlined:!0},o)))),!D&&e.createElement("div",{className:"lock-group-control",...g("lock-group-control-")},c&&e.createElement(Q,{text:O},e.createElement(M,{color:`var(--icon--status--status${c})`,className:"lock-group-status-icon"})),!s&&e.createElement(ge,{isLockClosed:b,isLockStatusNotDefined:h}),x&&e.createElement(k,{klId:t.klId&&"lock-group-status-text-"+t.klId,testId:t.testId&&"lock-group-status-text-"+t.testId,type:"BTR3",className:"lock-group-control-label"},x),e.createElement(pe,{klId:t.klId&&"lock-group-toggle-"+t.klId,testId:t.testId&&"lock-group-toggle-"+t.testId,disabled:S||h,onChange:R,checked:b}),l&&e.createElement(le,{placement:"bottomLeft",content:l},e.createElement(Z,{interactive:!1,icon:e.createElement(X,{className:"information-text-icon"})})))),!m&&!!r&&e.createElement("div",{className:J},F?e.Children.map(r,o=>e.isValidElement(o)?e.cloneElement(o,{disabled:!0}):o):r))};T.__docgenInfo={description:"",methods:[],displayName:"LockGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Dependant from LockGroup components"},className:{required:!1,tsType:{name:"string"},description:"CSS class to customize predefined LockGroup styles"},informationText:{required:!1,tsType:{name:"union",raw:"string | ReactNode | FC",elements:[{name:"string"},{name:"ReactNode"},{name:"FC"}]},description:"Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip"},isHideLock:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags"},isHideControl:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default, they managed by different flags"},isLockClosed:{required:!1,tsType:{name:"boolean"},description:"Flag to open or close lock and enable or disable Toggle"},isLockStatusNotDefined:{required:!1,tsType:{name:"boolean"},description:"Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies"},isLockDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable Toggle, it will be impossible to change lock status"},isGroupDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable dependant components"},isStandalone:{required:!1,tsType:{name:"boolean"},description:"Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components"},onLockChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback to handle Toggle change (and lock)"},statusText:{required:!1,tsType:{name:"ReactNode"},description:"Text near Toggle and lock"},isChildrenOutlined:{required:!1,tsType:{name:"boolean"},description:"Flag to show border around dependant components"},title:{required:!1,tsType:{name:"ReactNode"},description:"Text which will be shown in LockGroup Header"},titleLevel:{required:!1,tsType:{name:"Extract",elements:[{name:"unknown"},{name:"union",raw:"'H6' | 'H5' | 'H4'",elements:[{name:"literal",value:"'H6'"},{name:"literal",value:"'H5'"},{name:"literal",value:"'H4'"}]}],raw:"Extract<TextType, 'H6' | 'H5' | 'H4'>"},description:"Level for LockGroup Header — H6, H5, H4"},titleTags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of Tags near Header. Used for example to show supported operating system for LockGroup"},statusIcon:{required:!1,tsType:{name:"statusIcons[number]",raw:"typeof statusIcons[number]"},description:"Status icon"},statusTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text for status icon"}}};const ke={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},Te="LockGroup",be="Компонент, показывающий статус распространения и наследования настроек по иерархии серверов",he="Замок открыт — редактировать связанные с замком настройки можно, замок закрыт — редактирование распространяемой настройки запрещено",xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=112315%3A375167",ye="https://pixso.net/app/design/y1rTfOAVY5_kEIL9zCuTjw",I={dod:ke,component:Te,description:be,usage:he,designLink:xe,pixsoView:ye},Le=["warning"],Ie=N.div`
  width: 100%;
`,Ce={options:Object.keys(te).filter(t=>["H6","H5","H4"].includes(t)),control:{type:"inline-radio"}},zt={title:"Hexa UI Components/LockGroup",component:T,...oe({componentName:"lockGroup",meta:{args:{title:"Title",titleLevel:"H6",statusIcon:"warning",statusTooltip:"Attention"},argTypes:{titleLevel:{...Ce},title:{control:"text"},statusText:{control:"text"},informationText:{control:"text"},statusIcon:{control:"select",options:[...Le,null]}},parameters:{badges:[ee.stable],docs:{page:ne(I)},design:I.pixsoView}}})},q=t=>{const[n,i]=f.useState(!1),[r,l]=f.useState("12345");return f.useEffect(()=>{i(!!t.isLockClosed)},[t.isLockClosed]),e.createElement(Ie,null,e.createElement(T,{...t,isLockClosed:n,onLockChange:s=>i(s)},e.createElement(re,{value:r,onChange:s=>l(String(s))})))},p={render:q.bind({}),args:{title:"Title",isGroupDisabled:!1,isLockDisabled:!1,statusText:"statusText"}},d={render:q.bind({}),args:{informationText:()=>e.createElement(k,null,"Information text with ",e.createElement("a",null,"Information link"))}};var C,E,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: StoryDefaultRender.bind({}),
  args: {
    title: 'Title',
    isGroupDisabled: false,
    isLockDisabled: false,
    statusText: 'statusText'
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var v,w,G;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: StoryDefaultRender.bind({}),
  args: {
    informationText: () => <Text>Information text with <a>Information link</a></Text>
  }
}`,...(G=(w=d.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const Bt=["LockGroup","WithInformationText"];export{p as LockGroup,d as WithInformationText,Bt as __namedExportsOrder,zt as default};
