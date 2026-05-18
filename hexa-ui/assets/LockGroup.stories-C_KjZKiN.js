import{a1 as Y,a0 as z,a5 as B,u as Q,j as L,R as e,T as k,y as K,A as Z,aj as X,H as N,aQ as P,b as ee,r as f,aw as te}from"./iframe-DDLZRCVO.js";import{w as oe}from"./withDesignControls-C1p721fq.js";import{w as ne}from"./withMeta-Owz_jkP-.js";import{T as re}from"./Textbox-DS0pLFfi.js";import{s as se}from"./shouldForwardProp-Cdy-RLhZ.js";import{H as _,I as ae,J as ie}from"./index-BgUPx9iB.js";import{P as le}from"./Popover-NgWZ2JmQ.js";import{T as ce}from"./Tag-DDqt8ImQ.js";import{T as pe}from"./Toggle-BGU7vbwQ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-B8vtpcrq.js";import"./StatusOkOutline-HQaRO0CP.js";import"./useGlobalStyles-BiX_I9VT.js";import"./useThemedTextbox-DKqC11z1.js";import"./typesHelpers-tpz7Of7L.js";import"./input-CVo2IfWI.js";import"./index-Chjiymov.js";import"./KeyCode-DFdnluzg.js";import"./type-BAl6LeTY.js";import"./SearchOutlined-Bz9UglGq.js";import"./Button-wVQP-Ef_.js";import"./Dropdown-D13KR3Lp.js";import"./Overflow-Dz5ksMd5.js";import"./focus-D5iHM89J.js";import"./Loader-BqLObxDG.js";import"./index-tsevXCrq.js";import"./Divider-D4PVCF9a.js";import"./ArrowRight-B8y0Q0Nm.js";import"./v4-BoP187Zn.js";import"./button-YtfEiZDA.js";import"./wave-B_l4DZPA.js";import"./StatusOkSolid-Kmd0br57.js";import"./useTranslation-C9Y5TKyv.js";import"./IconResolver-BkyqBNHO.js";import"./index-9a9ZIQ0D.js";import"./ResizeInput-z_3zlGh2.js";import"./Placeholder-BI9wa67U.js";import"./index-Bru8Ph5-.js";import"./Advertisement-w3xzTnv7.js";import"./ArrowRightMini-lFWG7kb0.js";import"./ArrowDown-CeB7bPav.js";import"./ArrowLeft-DdaCor9i.js";import"./Calendar-CO2AAQrq.js";import"./ArrowUp1-Dx57B1Bv.js";import"./ExpandUp-CrqDH45I.js";import"./Server-BIP1NLmo.js";import"./ArrowForward-D7YDvTgg.js";import"./Upload-JU1VL0zY.js";import"./StatusDangerOutlineSquare-Bu_OuNjB.js";import"./Help-YSNuCE1R.js";import"./Kira-CxDpQFKM.js";import"./Menu2-BufBnz2j.js";import"./Menu3-DD9ses80.js";import"./Unpin-D5CoAbyi.js";import"./Plus-BIaF0m4-.js";import"./Search1-Br9EB_H6.js";import"./Settings-DhgXavWy.js";import"./SettingsGear-DYiSxKCJ.js";import"./StatusDangerSolid1-DidKQF1_.js";import"./ArrowRight-eXLa7Z0j.js";import"./StatusWarningOutline-DgPf3LfO.js";import"./StatusDangerSolid1-DhOEo6Gn.js";import"./ShieldOkSolid-D8DLreMf.js";import"./StatusWarningSolid-WFjNAuqI.js";import"./ArrowDownSolid-DX-__RrW.js";import"./ArrowRightSolid-nWTj5AhI.js";import"./AccountSearch-BUCXxeNt.js";import"./Connection-BRyOCjRA.js";import"./TextReducer-BAs_iNPz.js";import"./Group-Bf6OWnSx.js";import"./index-6kwzVjNc.js";import"./colors-DiQKrWLJ.js";import"./AdditionalContent-Ct_u5nIp.js";import"./HelpMessage-D1M8EhP5.js";import"./FormLabel-C_hbxEn3.js";import"./Markdown-DxXmCea8.js";const a=Y(),de=z`
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
`,ge=({isLockStatusNotDefined:t,isLockClosed:n})=>t?e.createElement(P,{className:"lock-group-control-icon"}):n?e.createElement(ae,{className:"lock-group-control-icon"}):e.createElement(ie,{className:"lock-group-control-icon"}),fe={warning:_},T=t=>{const n=me(t),i=Q(n),{children:r,informationText:l,isHideLock:s,isHideControl:D,isLockClosed:b,isLockStatusNotDefined:h=!1,isLockDisabled:S,isGroupDisabled:F,isStandalone:m=!1,onLockChange:R,statusText:x,title:y,titleLevel:$="H6",titleTags:u=[],isChildrenOutlined:V=!1,testAttributes:A,statusIcon:c,statusTooltip:O,...j}=i,g=o=>t.klId||t.testId?{"data-testid":t.testId&&o+t.testId,"kl-id":t.klId&&o+t.klId}:{},W=L({"lock-group":!0,"lock-group--standalone":m}),J=L({"lock-group__children":!0,"lock-group__children--outlined":V}),M=c?fe[c]:_;return e.createElement(ue,{...A,...j},e.createElement("div",{className:W,...g("lock-group-")},!m&&e.createElement("div",{className:"lock-group-caption"},y&&e.createElement("div",{className:"lock-group-caption__title"},e.createElement(k,{...g("lock-group-title-"),type:$},y)),u&&u.length>0&&e.createElement("div",{className:"lock-group-caption__tags"},u.map((o,U)=>e.createElement(ce,{key:U,mode:"neutral",outlined:!0},o)))),!D&&e.createElement("div",{className:"lock-group-control",...g("lock-group-control-")},c&&e.createElement(K,{text:O},e.createElement(M,{color:`var(--icon--status--status${c})`,className:"lock-group-status-icon"})),!s&&e.createElement(ge,{isLockClosed:b,isLockStatusNotDefined:h}),x&&e.createElement(k,{klId:t.klId&&"lock-group-status-text-"+t.klId,testId:t.testId&&"lock-group-status-text-"+t.testId,type:"BTR3",className:"lock-group-control-label"},x),e.createElement(pe,{klId:t.klId&&"lock-group-toggle-"+t.klId,testId:t.testId&&"lock-group-toggle-"+t.testId,disabled:S||h,onChange:R,checked:b}),l&&e.createElement(le,{placement:"bottomLeft",content:l},e.createElement(Z,{interactive:!1,icon:e.createElement(X,{className:"information-text-icon"})})))),!m&&!!r&&e.createElement("div",{className:J},F?e.Children.map(r,o=>e.isValidElement(o)?e.cloneElement(o,{disabled:!0}):o):r))};T.__docgenInfo={description:"",methods:[],displayName:"LockGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Dependant from LockGroup components"},className:{required:!1,tsType:{name:"string"},description:"CSS class to customize predefined LockGroup styles"},informationText:{required:!1,tsType:{name:"union",raw:"string | ReactNode | FC",elements:[{name:"string"},{name:"ReactNode"},{name:"FC"}]},description:"Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip"},isHideLock:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags"},isHideControl:{required:!1,tsType:{name:"boolean"},description:"Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default, they managed by different flags"},isLockClosed:{required:!1,tsType:{name:"boolean"},description:"Flag to open or close lock and enable or disable Toggle"},isLockStatusNotDefined:{required:!1,tsType:{name:"boolean"},description:"Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies"},isLockDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable Toggle, it will be impossible to change lock status"},isGroupDisabled:{required:!1,tsType:{name:"boolean"},description:"Flag to disable dependant components"},isStandalone:{required:!1,tsType:{name:"boolean"},description:"Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components"},onLockChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback to handle Toggle change (and lock)"},statusText:{required:!1,tsType:{name:"ReactNode"},description:"Text near Toggle and lock"},isChildrenOutlined:{required:!1,tsType:{name:"boolean"},description:"Flag to show border around dependant components"},title:{required:!1,tsType:{name:"ReactNode"},description:"Text which will be shown in LockGroup Header"},titleLevel:{required:!1,tsType:{name:"Extract",elements:[{name:"unknown"},{name:"union",raw:"'H6' | 'H5' | 'H4'",elements:[{name:"literal",value:"'H6'"},{name:"literal",value:"'H5'"},{name:"literal",value:"'H4'"}]}],raw:"Extract<TextType, 'H6' | 'H5' | 'H4'>"},description:"Level for LockGroup Header — H6, H5, H4"},titleTags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"List of Tags near Header. Used for example to show supported operating system for LockGroup"},statusIcon:{required:!1,tsType:{name:"statusIcons[number]",raw:"typeof statusIcons[number]"},description:"Status icon"},statusTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text for status icon"}}};const ke={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},Te="LockGroup",be="Компонент, показывающий статус распространения и наследования настроек по иерархии серверов",he="Замок открыт — редактировать связанные с замком настройки можно, замок закрыт — редактирование распространяемой настройки запрещено",xe="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=112315%3A375167",ye="https://pixso.net/app/design/y1rTfOAVY5_kEIL9zCuTjw",I={dod:ke,component:Te,description:be,usage:he,designLink:xe,pixsoView:ye},Le=["warning"],Ie=N.div`
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
