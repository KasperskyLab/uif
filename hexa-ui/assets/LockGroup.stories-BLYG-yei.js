import{a1 as Y,a0 as z,a5 as B,u as K,j as L,R as e,T as k,y as Q,A as Z,aj as X,H as N,aP as P,b as ee,r as f,aw as te}from"./iframe-DijVn6lr.js";import{w as oe}from"./withDesignControls-DYdUnTzL.js";import{w as ne}from"./withMeta-Cvuu-gnO.js";import{T as re}from"./Textbox-Do8w9FQx.js";import{s as se}from"./shouldForwardProp-Cdy-RLhZ.js";import{H as _,I as ae,J as ie}from"./index-BlqrnOjt.js";import{T as le}from"./Tag-UgBikWKe.js";import{T as ce}from"./Toggle-B1iun58-.js";import{P as pe}from"./Popover-CTNslkPb.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./useGlobalStyles-Clp_neqU.js";import"./useThemedTextbox-COIqB-gx.js";import"./typesHelpers-tpz7Of7L.js";import"./input-D3RvnOrl.js";import"./index-Chjiymov.js";import"./KeyCode-Dc0kQrxh.js";import"./type-DN7uEUoT.js";import"./SearchOutlined-CIJue4Bq.js";import"./Button-PwdEuxbx.js";import"./Dropdown-D0EIrFH4.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./Divider-D-bCk8Cb.js";import"./ArrowRight-DFM_iKWt.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./wave-B_Kd_ldv.js";import"./StatusOkSolid-kU5hDl8y.js";import"./useTranslation-BLQw3CeK.js";import"./IconResolver-DYLYAoT6.js";import"./index-D4RAOcs8.js";import"./ResizeInput-Dyuwuz2a.js";import"./Placeholder-XNkSpDe-.js";import"./index-DIVbb-zv.js";import"./Advertisement-CowrdAHm.js";import"./ArrowRightMini-lc0ilx02.js";import"./ArrowDown-CaIhkLjp.js";import"./ArrowLeft-dAY6nCFc.js";import"./Calendar-BvhRRbo-.js";import"./ArrowUp1-CqJo2_zZ.js";import"./ExpandUp-B9q_IBTm.js";import"./Server-DfqXxNFK.js";import"./ArrowForward-D__KWItR.js";import"./Upload-NDYqyV2F.js";import"./StatusDangerOutlineSquare-DdQ-_SWm.js";import"./Help-cif6JGJv.js";import"./Kira-CEp6IDBz.js";import"./Menu2-CG_lP8tl.js";import"./Menu3-DfU3vcXs.js";import"./Unpin-CaVgr-PT.js";import"./Plus-CtMZBh9J.js";import"./Search1-DOO2nP8F.js";import"./Settings-Ca7K_Yj0.js";import"./SettingsGear-IKcNoBkw.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./ArrowRight-kFv3GeJ2.js";import"./StatusWarningOutline-C1xanFFW.js";import"./StatusDangerSolid1-BoAfxRDS.js";import"./ShieldOkSolid-D5hPyBFW.js";import"./StatusWarningSolid-BjUfrWFZ.js";import"./ArrowDownSolid-B6lDi2Ko.js";import"./ArrowRightSolid-x1c4h6Py.js";import"./AccountSearch-LE1oTn1X.js";import"./Connection-oQdKLqfx.js";import"./TextReducer-BIfgSXBQ.js";import"./Group-CAP3cdvx.js";import"./index-tjmVxM9w.js";import"./colors-CLXBBt7C.js";import"./AdditionalContent-BcbE0Uii.js";import"./HelpMessage-BdtHkJwS.js";import"./FormLabel-671wf7jJ.js";import"./Markdown-DOYaVGrQ.js";const a=Y(),de=z`
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
`,ge=({isLockStatusNotDefined:t,isLockClosed:n})=>t?e.createElement(P,{className:"lock-group-control-icon"}):n?e.createElement(ae,{className:"lock-group-control-icon"}):e.createElement(ie,{className:"lock-group-control-icon"}),fe={warning:_},T=t=>{const n=me(t),i=K(n),{children:r,informationText:l,isHideLock:s,isHideControl:D,isLockClosed:b,isLockStatusNotDefined:h=!1,isLockDisabled:S,isGroupDisabled:F,isStandalone:m=!1,onLockChange:R,statusText:x,title:y,titleLevel:$="H6",titleTags:u=[],isChildrenOutlined:V=!1,testAttributes:A,statusIcon:c,statusTooltip:O,...j}=i,g=o=>t.klId||t.testId?{"data-testid":t.testId&&o+t.testId,"kl-id":t.klId&&o+t.klId}:{},W=L({"lock-group":!0,"lock-group--standalone":m}),J=L({"lock-group__children":!0,"lock-group__children--outlined":V}),M=c?fe[c]:_;return e.createElement(ue,{...A,...j},e.createElement("div",{className:W,...g("lock-group-")},!m&&e.createElement("div",{className:"lock-group-caption"},y&&e.createElement("div",{className:"lock-group-caption__title"},e.createElement(k,{...g("lock-group-title-"),type:$},y)),u&&u.length>0&&e.createElement("div",{className:"lock-group-caption__tags"},u.map((o,U)=>e.createElement(le,{key:U,mode:"neutral",outlined:!0},o)))),!D&&e.createElement("div",{className:"lock-group-control",...g("lock-group-control-")},c&&e.createElement(Q,{text:O},e.createElement(M,{color:`var(--icon--status--status${c})`,className:"lock-group-status-icon"})),!s&&e.createElement(ge,{isLockClosed:b,isLockStatusNotDefined:h}),x&&e.createElement(k,{klId:t.klId&&"lock-group-status-text-"+t.klId,testId:t.testId&&"lock-group-status-text-"+t.testId,type:"BTR3",className:"lock-group-control-label"},x),e.createElement(ce,{klId:t.klId&&"lock-group-toggle-"+t.klId,testId:t.testId&&"lock-group-toggle-"+t.testId,disabled:S||h,onChange:R,checked:b}),l&&e.createElement(pe,{placement:"bottomLeft",content:l},e.createElement(Z,{interactive:!1,icon:e.createElement(X,{className:"information-text-icon"})})))),!m&&!!r&&e.createElement("div",{className:J},F?e.Children.map(r,o=>e.isValidElement(o)?e.cloneElement(o,{disabled:!0}):o):r))};T.__docgenInfo={description:"",methods:[],displayName:"LockGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Dependant from LockGroup components"},className:{required:!1,tsType:{name:"string"},description:"CSS class to customize predefined LockGroup styles"},informationText:{required:!1,tsType:{name:"union",raw:"string | ReactNode | FC",elements:[{name:"string"},{name:"ReactNode"},{name:"FC"}]},description:"Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip"},isHideLock:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags"},isHideControl:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default, they managed by different flags"},isLockClosed:{required:!1,tsType:{name:"boolean"},description:"Flag to open or close lock and enable or disable Toggle"},isLockStatusNotDefined:{required:!1,tsType:{name:"boolean"},description:"Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies"},isLockDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable Toggle, it will be impossible to change lock status"},isGroupDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable dependant components"},isStandalone:{required:!1,tsType:{name:"boolean"},description:"Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components"},onLockChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback to handle Toggle change (and lock)"},statusText:{required:!1,tsType:{name:"ReactNode"},description:"Text near Toggle and lock"},isChildrenOutlined:{required:!1,tsType:{name:"boolean"},description:"Flag to show border around dependant components"},title:{required:!1,tsType:{name:"ReactNode"},description:"Text which will be shown in LockGroup Header"},titleLevel:{required:!1,tsType:{name:"Extract",elements:[{name:"unknown"},{name:"union",raw:"'H6' | 'H5' | 'H4'",elements:[{name:"literal",value:"'H6'"},{name:"literal",value:"'H5'"},{name:"literal",value:"'H4'"}]}],raw:"Extract<TextType, 'H6' | 'H5' | 'H4'>"},description:"Level for LockGroup Header — H6, H5, H4"},titleTags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of Tags near Header. Used for example to show supported operating system for LockGroup"},statusIcon:{required:!1,tsType:{name:"statusIcons[number]",raw:"typeof statusIcons[number]"},description:"Status icon"},statusTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text for status icon"}}};const ke={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},Te="LockGroup",be="Компонент, показывающий статус распространения и наследования настроек по иерархии серверов",he="Замок открыт — редактировать связанные с замком настройки можно, замок закрыт — редактирование распространяемой настройки запрещено",xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=112315%3A375167",ye="https://pixso.net/app/design/y1rTfOAVY5_kEIL9zCuTjw",I={dod:ke,component:Te,description:be,usage:he,designLink:xe,pixsoView:ye},Le=["warning"],Ie=N.div`
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
