import{T as F}from"./Palette-jA6_Pfdr.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-BTqAWtZ7.js";import{w as K}from"./withMeta-CcVYKngh.js";import{a as M}from"./Warnings-CW-bUS4F.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-CKSNiFzs.js";import{T as U}from"./Textbox-__eV9eR7.js";import{T as c}from"./Toggle-BuYCy85D.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CG1GRMfV.js";import"./StatusOkOutline-lrTYU_cr.js";import"./Tag-DwHieltF.js";import"./TextReducer-BkZqz3aN.js";import"./StatusDangerSolid1-CztCiRpT.js";import"./Group-ClC4zsiX.js";import"./index-D83RR8U-.js";import"./type-Qe6Yz0Sh.js";import"./colors-t9lelOTz.js";import"./wave-CKMqhJ_H.js";import"./Divider-KPnt62j1.js";import"./FormLabel-BNKGNgDh.js";import"./Markdown-B5pkzJQc.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-mmzT_Qk2.js";import"./useGlobalStyles-yVmYTnAO.js";import"./useThemedTextbox-BeVMGWRB.js";import"./typesHelpers-tpz7Of7L.js";import"./input-BLpFDoFv.js";import"./index-Chjiymov.js";import"./index-CZSh-iRU.js";import"./Advertisement-DNLU6j1d.js";import"./ArrowRightMini-DcXMOUZM.js";import"./ArrowDown-CmblaFws.js";import"./ArrowLeft-DzV3Pwej.js";import"./Calendar-C4euPsXD.js";import"./ArrowRight-BECW_anK.js";import"./ArrowUp1-CeFsk3eX.js";import"./ExpandUp-VnFa6867.js";import"./Server-CXTbtgpb.js";import"./ArrowForward-D569Ekao.js";import"./Upload-FpghvWbN.js";import"./StatusDangerOutlineSquare-C8yRaZCe.js";import"./Help-CJK_dk08.js";import"./Kira-pPshgjGx.js";import"./Menu2-Zv80GjD8.js";import"./Menu3-14PZSC-7.js";import"./Unpin-bS66BwYL.js";import"./Placeholder-BHcqJ4m2.js";import"./Plus-BlqV6XvD.js";import"./Search1-BSH1_159.js";import"./Settings-DWIFL17Y.js";import"./SettingsGear-CML7-gsl.js";import"./StatusOkSolid-BCpBJdBw.js";import"./ArrowRight-Rh1Dhktb.js";import"./StatusWarningOutline-BUYqM3rG.js";import"./StatusDangerSolid1-BOZXNarI.js";import"./ShieldOkSolid-Dcn-T8TF.js";import"./StatusWarningSolid-BAbdcJl8.js";import"./ArrowDownSolid-BZ856B2m.js";import"./ArrowRightSolid-DTTYrwmS.js";import"./AccountSearch-DbxbfvJY.js";import"./Connection-VIYAuiri.js";import"./KeyCode-Bslz2nuw.js";import"./SearchOutlined-lEiiTSzX.js";import"./Button-BshtoBSx.js";import"./Dropdown-CnlNBihq.js";import"./Overflow-YfqnCquf.js";import"./focus-iTloRQcb.js";import"./Loader-GevLMjlq.js";import"./index-BxRvj_MD.js";import"./v4-BoP187Zn.js";import"./button-DFmMxOVw.js";import"./useTranslation-92nYyB7z.js";import"./IconResolver-D7OY2khi.js";import"./index-CXKeALR0.js";import"./ResizeInput-DLL0-57U.js";import"./index-BZc0GCNk.js";import"./AdditionalContent-D42GTXoH.js";import"./HelpMessage-CHnCRGuv.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: null
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,E,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true);
    const [second, setSecond] = useState<boolean>(true);
    const getLabel = (value: boolean) => value ? 'On' : 'Off';
    const changeState = console.log;
    return <StoryColumn>
        <Toggle {...args} checked={first} onChange={value => {
        setFirst(value);
        changeState({
          first: value
        });
      }}>
          {getLabel(first)}
        </Toggle>
        {!first && <Text>second onChange does not work</Text>}
        <Toggle {...args} checked={second} onChange={value => {
        if (!first) return;
        setSecond(value);
        changeState({
          second: value
        });
      }}>
          {getLabel(first)}
        </Toggle>
      </StoryColumn>;
  }
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var v,w,L;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var W,P,A;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: any) => <div>
    <TooltipCompositionWarning propName="compositionTooltip" />
    <div style={{
      width: 'min-content'
    }}>
      <Tooltip text={args.compositionTooltip}>
        <span><Toggle {...args}></Toggle></span>
      </Tooltip>
    </div>
  </div>,
  argTypes: {
    compositionTooltip: {
      control: 'text'
    }
  },
  args: {
    compositionTooltip: 'Toogle tooltip'
  },
  parameters: {
    controls: {
      exclude: /(tooltip|componentType)/
    }
  }
}`,...(A=(P=a.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var O,B,J;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    source: componentColors.toggle
  },
  render: args => <ThemedPalette {...args} />
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const ve=["Basic","WithoutLabel","Control","WithAdditionalContent","WithTooltip","ColorTokens"];export{n as Basic,m as ColorTokens,i as Control,p as WithAdditionalContent,a as WithTooltip,s as WithoutLabel,ve as __namedExportsOrder,ke as default};
