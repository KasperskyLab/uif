import{T as F}from"./Palette-XsZRGwvq.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-DVE_7kq9.js";import{w as K}from"./withMeta-CzPSWtck.js";import{a as M}from"./Warnings-6xokeVvB.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-DU1XkORc.js";import{T as U}from"./Textbox-DwrQKcqo.js";import{T as c}from"./Toggle-CKDI_Dyd.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BGulR29O.js";import"./StatusOkOutline-C-l0Ef9W.js";import"./Tag-osrmA0i2.js";import"./TextReducer-Ct5Blcav.js";import"./StatusDangerSolid1-jJjmvO6K.js";import"./Group-Deg5VM3T.js";import"./index-DGIJDX9_.js";import"./type-CaOsV2Rp.js";import"./colors-Z4HTaick.js";import"./wave-D4avGR4B.js";import"./Divider-B0XUs7Vt.js";import"./FormLabel-CyTz6ltR.js";import"./Markdown-bfgL_FF5.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D2gFaQHm.js";import"./useGlobalStyles-DHuBRWl5.js";import"./useThemedTextbox-D_2Xd42x.js";import"./typesHelpers-tpz7Of7L.js";import"./input-CDGOJlXp.js";import"./index-Chjiymov.js";import"./index-D5q2FrG3.js";import"./Advertisement-CIGY1VwL.js";import"./ArrowRightMini-Bth2ZwrA.js";import"./ArrowDown-Bnehc5FG.js";import"./ArrowLeft-B14b0ZMR.js";import"./Calendar-C7UkSh_L.js";import"./ArrowRight-D6sV46j6.js";import"./ArrowUp1-DZCJGNsg.js";import"./ExpandUp-CQburIiE.js";import"./Server-8yPrkq4K.js";import"./ArrowForward-BPNLUKUu.js";import"./Upload-Yykrgsr5.js";import"./StatusDangerOutlineSquare-Du_eJu5D.js";import"./Help-BHF2pfHX.js";import"./Kira-BvMtESS-.js";import"./Menu2-CCVLlcNR.js";import"./Menu3-BcCBiYxT.js";import"./Unpin-Sik_GMHx.js";import"./Placeholder-BQjnLMm9.js";import"./Plus-COGYOBKv.js";import"./Search1-YkTRWbPj.js";import"./Settings-C3fBGBuG.js";import"./SettingsGear-BhCfl8dc.js";import"./StatusOkSolid-B_R1GfHI.js";import"./ArrowRight-Bbci9Xzn.js";import"./StatusWarningOutline-CnwE134E.js";import"./StatusDangerSolid1-B8bwvaHG.js";import"./ShieldOkSolid-ElvQjY8J.js";import"./StatusWarningSolid-D-HIGMdC.js";import"./ArrowDownSolid-YqOaa2_I.js";import"./ArrowRightSolid-DIMtYxkK.js";import"./AccountSearch-DiFsoafD.js";import"./Connection-fNfKhoji.js";import"./KeyCode-EWEGft3Z.js";import"./SearchOutlined-VqhnVTtC.js";import"./Button-D9s4A7m7.js";import"./Dropdown--DTicSeA.js";import"./Overflow-oyvLW8yL.js";import"./focus-BjQQf_fX.js";import"./Loader-B40QQF8n.js";import"./index-nHA8zgOJ.js";import"./v4-BoP187Zn.js";import"./button-BUGCw8rM.js";import"./useTranslation-2jIOXqSO.js";import"./IconResolver-BhbHcB6m.js";import"./index-CEu_P7ku.js";import"./ResizeInput-DxS6rgVy.js";import"./index-DZ4Kp4wa.js";import"./AdditionalContent-qp5Rkj-D.js";import"./HelpMessage-CpYfwXXh.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
