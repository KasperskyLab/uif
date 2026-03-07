import{T as F}from"./Palette-oU4WYbWy.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-zz6a49H8.js";import{w as K}from"./withMeta-CjSZnBk7.js";import{a as M}from"./Warnings-DU1McXrL.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-C4fwEYRs.js";import{T as U}from"./Textbox-O3s0uqSG.js";import{T as c}from"./Toggle-DQagZAli.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./useGlobalStyles-cJLcvPW6.js";import"./useThemedTextbox-BGGAc01B.js";import"./typesHelpers-tpz7Of7L.js";import"./input-Dg6A0g4J.js";import"./index-Chjiymov.js";import"./index-BDzolQnr.js";import"./Advertisement-Yh_igVk5.js";import"./ArrowRightMini-DjD3k9uh.js";import"./ArrowDown-4i-SVD6u.js";import"./ArrowLeft-BenI_L4g.js";import"./Calendar-BZmQdLvd.js";import"./ArrowRight-DPBBrE_M.js";import"./ArrowUp1-DkE_q9S2.js";import"./ExpandUp-D4Xd3vou.js";import"./Server-B83jKXaI.js";import"./ArrowForward-Cfeau0Of.js";import"./Upload-BgoxvLW9.js";import"./StatusDangerOutlineSquare-CfDrKxro.js";import"./Help-DDZoI9w3.js";import"./Kira-D6S8lI4y.js";import"./Menu2-gmgzxp5q.js";import"./Menu3-BhUF3vm5.js";import"./Unpin-nuudWmPx.js";import"./Placeholder-Bv52avk_.js";import"./Plus-C59NrE5b.js";import"./Search1-DZu0ocx7.js";import"./Settings-3sEKraz-.js";import"./SettingsGear-BNA7541v.js";import"./StatusOkSolid-MBCvP7_O.js";import"./ArrowRight-hBQHItJC.js";import"./StatusWarningOutline-DZEZTt6V.js";import"./StatusDangerSolid1-EVPJI7Z8.js";import"./ShieldOkSolid-C-p6gnLF.js";import"./StatusWarningSolid-CRMCvTXn.js";import"./ArrowDownSolid-DU27KX-r.js";import"./ArrowRightSolid-6Unlqm7I.js";import"./AccountSearch-BWuyXyEt.js";import"./Connection-DbW0uygf.js";import"./KeyCode-D_nTN6KT.js";import"./SearchOutlined-tsI9ISqz.js";import"./Button-Djh220XQ.js";import"./Dropdown-D5otA5yN.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./v4-BoP187Zn.js";import"./button-nrifPwP7.js";import"./useTranslation-7a9748wG.js";import"./IconResolver-BTOOgpNr.js";import"./index-DM61bQr0.js";import"./ResizeInput-LnJbjdAp.js";import"./index-Bnrns6p9.js";import"./AdditionalContent-CmOFtI4D.js";import"./HelpMessage-C6l4gLFq.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
