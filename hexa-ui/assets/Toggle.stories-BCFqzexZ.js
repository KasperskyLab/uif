import{T as F}from"./Palette-BhMnXOZq.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-WWmuoJVo.js";import{w as K}from"./withMeta-B27OU3Ju.js";import{a as M}from"./Warnings-cwmWAL6A.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-_lDaatyR.js";import{T as U}from"./Textbox-CgORvfF1.js";import{T as c}from"./Toggle-VMHJ5ziV.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Tag-CZpHHsSN.js";import"./TextReducer-9CK0p8eL.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./Group-DGlPc1vl.js";import"./index-toe1S0SQ.js";import"./type-CH-zv0M5.js";import"./colors-CeinHcp_.js";import"./wave-BKxtHpDI.js";import"./Divider-2duFHEPw.js";import"./FormLabel-C5Hc4K2h.js";import"./Markdown-BGmAiIQ8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DwSAzC79.js";import"./useGlobalStyles-Bpd6PxO_.js";import"./useThemedTextbox-Bo2zEY4I.js";import"./typesHelpers-tpz7Of7L.js";import"./input-BLGQ9wN1.js";import"./index-Chjiymov.js";import"./index-CbLBAv16.js";import"./Advertisement-rvb4QLb8.js";import"./ArrowRightMini-Bw8wbTST.js";import"./ArrowDown-kjt2gGWS.js";import"./ArrowLeft-DvoV4gpD.js";import"./Calendar-BGA3KNcQ.js";import"./ArrowRight-zAcxCSgi.js";import"./ArrowUp1-HcEtioYc.js";import"./ExpandUp-DkLsgt1Z.js";import"./Server-CaDq-4b6.js";import"./ArrowForward-B6D9Vgwv.js";import"./Upload-hAbMBDKo.js";import"./StatusDangerOutlineSquare-BpT9pF-I.js";import"./Help-Dn1W2bdD.js";import"./Kira-uuTNgREj.js";import"./Menu2-BJaOjwtW.js";import"./Menu3-Bb3uscwR.js";import"./Unpin-CkTAnf6T.js";import"./Placeholder-D-9jZmE-.js";import"./Plus-CVRf9IWM.js";import"./Search1-OjZGAJ7z.js";import"./Settings-2mXeSdDg.js";import"./SettingsGear-B9davMAc.js";import"./StatusOkSolid-z0_VKxTZ.js";import"./ArrowRight-CY7To4C_.js";import"./StatusWarningOutline-Dse1Heau.js";import"./StatusDangerSolid1-DmjdBxFs.js";import"./ShieldOkSolid-DztrP7xg.js";import"./StatusWarningSolid-DHbCi7JY.js";import"./ArrowDownSolid-HkErgQx9.js";import"./ArrowRightSolid-DBg3_af3.js";import"./AccountSearch-DoQOG2zp.js";import"./Connection-CSTgI3vQ.js";import"./KeyCode-B_Qxrabv.js";import"./SearchOutlined-BllNSGSA.js";import"./Button-CLoGc_U5.js";import"./Dropdown-BTc89UD8.js";import"./Overflow-BR2bFp5F.js";import"./focus-laSdr2Ty.js";import"./Loader-C4W-_r7-.js";import"./index-1btpB87J.js";import"./v4-BoP187Zn.js";import"./button-CF6IFyfC.js";import"./useTranslation-PRbvrD9U.js";import"./IconResolver-BxeOaCpn.js";import"./index-Bz-v0CtR.js";import"./ResizeInput-DVC5Jgwk.js";import"./index-bI9fxmJx.js";import"./AdditionalContent-Cc4OQFBm.js";import"./HelpMessage-Byc1jZxK.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
