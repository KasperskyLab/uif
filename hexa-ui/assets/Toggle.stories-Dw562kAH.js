import{T as F}from"./Palette-Bcbt30O7.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-DlY6n6Um.js";import{w as K}from"./withMeta-B77fl0Sa.js";import{a as M}from"./Warnings-DqWOugw8.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-5Ni7_M0_.js";import{T as U}from"./Textbox-BkTLkszj.js";import{T as c}from"./Toggle-3Jmrg0tX.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D8ys_ap7.js";import"./useGlobalStyles-DCO_4ztA.js";import"./useThemedTextbox-Bmu1H12-.js";import"./typesHelpers-tpz7Of7L.js";import"./input-mXow91b_.js";import"./index-Chjiymov.js";import"./index-BbitUTuv.js";import"./Advertisement-3jfyM1bF.js";import"./ArrowRightMini-DrTKhp28.js";import"./ArrowDown-ChGYdLEl.js";import"./ArrowLeft-5XogGUFt.js";import"./Calendar-C5pFsewt.js";import"./ArrowRight-Db3Ij3DE.js";import"./ArrowUp1-BNZdUcIS.js";import"./ExpandUp-DEeB5DsT.js";import"./Server-YIrZe1tb.js";import"./ArrowForward-B1fQsntD.js";import"./Upload-C_N43VAI.js";import"./StatusDangerOutlineSquare-BLZQfahy.js";import"./Help-CdI7ei6S.js";import"./Kira-YbMWu56z.js";import"./Menu2-BBlUvDgt.js";import"./Menu3-B3FR9-ED.js";import"./Unpin-COYC_WLU.js";import"./Placeholder-DRo8POZa.js";import"./Plus-dack3gHw.js";import"./Search1-BZ2VNUxD.js";import"./Settings-KwZGj1kH.js";import"./SettingsGear-9Bvyt4bA.js";import"./StatusOkSolid-IKyijn-S.js";import"./ArrowRight-D3WqXJji.js";import"./StatusWarningOutline-Dy0bueyW.js";import"./StatusDangerSolid1-Dpju5bSe.js";import"./ShieldOkSolid-D-1MqZXL.js";import"./StatusWarningSolid-C-5m-AdQ.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./ArrowRightSolid-BZEyC8P2.js";import"./AccountSearch-Dofz33BR.js";import"./Connection-DgyNCf1D.js";import"./KeyCode-B45xthVk.js";import"./SearchOutlined-CqDp9aMg.js";import"./Button-CgqUalcg.js";import"./Dropdown-WtVSJYv5.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./useTranslation-CGS-Ff88.js";import"./IconResolver-k9Mxg6Vr.js";import"./index-i_d8OMNH.js";import"./ResizeInput-DtUKzJyg.js";import"./index-iGBsBt8Q.js";import"./AdditionalContent-D1SVuAXm.js";import"./HelpMessage-CfUPOaMw.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
