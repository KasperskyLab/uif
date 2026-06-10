import{a1 as Y,a0 as z,a5 as B,u as K,j as L,R as e,T as k,y as Q,A as Z,aj as X,H as N,aP as P,b as ee,r as f,aw as te}from"./iframe-BTqAWtZ7.js";import{w as oe}from"./withDesignControls-BRlYKsUr.js";import{w as ne}from"./withMeta-CcVYKngh.js";import{T as re}from"./Textbox-__eV9eR7.js";import{s as se}from"./shouldForwardProp-Cdy-RLhZ.js";import{I as _,J as ae,K as ie}from"./index-CZSh-iRU.js";import{T as le}from"./Tag-DwHieltF.js";import{T as ce}from"./Toggle-BuYCy85D.js";import{P as pe}from"./Popover-mmzT_Qk2.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CG1GRMfV.js";import"./StatusOkOutline-lrTYU_cr.js";import"./useGlobalStyles-yVmYTnAO.js";import"./useThemedTextbox-BeVMGWRB.js";import"./typesHelpers-tpz7Of7L.js";import"./input-BLpFDoFv.js";import"./index-Chjiymov.js";import"./KeyCode-Bslz2nuw.js";import"./type-Qe6Yz0Sh.js";import"./SearchOutlined-lEiiTSzX.js";import"./Button-BshtoBSx.js";import"./Dropdown-CnlNBihq.js";import"./Overflow-YfqnCquf.js";import"./focus-iTloRQcb.js";import"./Loader-GevLMjlq.js";import"./index-BxRvj_MD.js";import"./Divider-KPnt62j1.js";import"./ArrowRight-BECW_anK.js";import"./v4-BoP187Zn.js";import"./button-DFmMxOVw.js";import"./wave-CKMqhJ_H.js";import"./StatusOkSolid-BCpBJdBw.js";import"./useTranslation-92nYyB7z.js";import"./IconResolver-D7OY2khi.js";import"./index-CXKeALR0.js";import"./ResizeInput-DLL0-57U.js";import"./Placeholder-BHcqJ4m2.js";import"./index-BZc0GCNk.js";import"./Advertisement-DNLU6j1d.js";import"./ArrowRightMini-DcXMOUZM.js";import"./ArrowDown-CmblaFws.js";import"./ArrowLeft-DzV3Pwej.js";import"./Calendar-C4euPsXD.js";import"./ArrowUp1-CeFsk3eX.js";import"./ExpandUp-VnFa6867.js";import"./Server-CXTbtgpb.js";import"./ArrowForward-D569Ekao.js";import"./Upload-FpghvWbN.js";import"./StatusDangerOutlineSquare-C8yRaZCe.js";import"./Help-CJK_dk08.js";import"./Kira-pPshgjGx.js";import"./Menu2-Zv80GjD8.js";import"./Menu3-14PZSC-7.js";import"./Unpin-bS66BwYL.js";import"./Plus-BlqV6XvD.js";import"./Search1-BSH1_159.js";import"./Settings-DWIFL17Y.js";import"./SettingsGear-CML7-gsl.js";import"./StatusDangerSolid1-CztCiRpT.js";import"./ArrowRight-Rh1Dhktb.js";import"./StatusWarningOutline-BUYqM3rG.js";import"./StatusDangerSolid1-BOZXNarI.js";import"./ShieldOkSolid-Dcn-T8TF.js";import"./StatusWarningSolid-BAbdcJl8.js";import"./ArrowDownSolid-BZ856B2m.js";import"./ArrowRightSolid-DTTYrwmS.js";import"./AccountSearch-DbxbfvJY.js";import"./Connection-VIYAuiri.js";import"./TextReducer-BkZqz3aN.js";import"./Group-ClC4zsiX.js";import"./index-D83RR8U-.js";import"./colors-t9lelOTz.js";import"./AdditionalContent-D42GTXoH.js";import"./HelpMessage-CHnCRGuv.js";import"./FormLabel-BNKGNgDh.js";import"./Markdown-B5pkzJQc.js";const a=Y(),de=z`
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
