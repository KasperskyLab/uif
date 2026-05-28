import{T as F}from"./Palette-pKPGiK_Z.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-DGvJ380d.js";import{w as K}from"./withMeta-Cn2dTpV4.js";import{a as M}from"./Warnings-BxHb4V5-.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-CK00MLxU.js";import{T as U}from"./Textbox-Bj82W6hS.js";import{T as c}from"./Toggle-CQ9mMjcU.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-C_hi_klS.js";import"./StatusOkOutline-DyiwV4SU.js";import"./Tag-IWItRl7b.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";import"./type-fFl6OLJD.js";import"./colors-gQKfGPjt.js";import"./wave-CATF4J87.js";import"./Divider-EZz3gDRj.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CqARYnm2.js";import"./useGlobalStyles-BnCND3-l.js";import"./useThemedTextbox-DDqIKI60.js";import"./typesHelpers-tpz7Of7L.js";import"./input-BgwJBdwY.js";import"./index-Chjiymov.js";import"./index-D_eARAu6.js";import"./Advertisement-DZMq2A2I.js";import"./ArrowRightMini-BtUJy5zG.js";import"./ArrowDown-JHp814TH.js";import"./ArrowLeft-QlQoL3Uv.js";import"./Calendar-jD1LiYvB.js";import"./ArrowRight-BIq5osfB.js";import"./ArrowUp1-D978ntm3.js";import"./ExpandUp-DwZ0xw3Z.js";import"./Server-bjy7rWzI.js";import"./ArrowForward-yn00LQNd.js";import"./Upload-Bbcz3gJY.js";import"./StatusDangerOutlineSquare-Xa4nOcc_.js";import"./Help-BHz4HfbM.js";import"./Kira-DCerKgdo.js";import"./Menu2-A8wINVoI.js";import"./Menu3-aE1LzNse.js";import"./Unpin-yxiIE5eY.js";import"./Placeholder-BC-YsAW2.js";import"./Plus-mV3zMH_V.js";import"./Search1-Ol0-CDvK.js";import"./Settings-D_C3tDq9.js";import"./SettingsGear-Bo8a4pcF.js";import"./StatusOkSolid-DiDlzqjt.js";import"./ArrowRight-CRc5t_d0.js";import"./StatusWarningOutline-CyfwEAaI.js";import"./StatusDangerSolid1-BUjHgziF.js";import"./ShieldOkSolid-LRR42IKW.js";import"./StatusWarningSolid-bKJvYwK4.js";import"./ArrowDownSolid-DAghjM8o.js";import"./ArrowRightSolid-C5uV6-Lq.js";import"./AccountSearch-BhlMg2QY.js";import"./Connection-DAxkMV1X.js";import"./KeyCode-9RiNU2cC.js";import"./SearchOutlined-ByulGkQJ.js";import"./Button-wrPqqegB.js";import"./Dropdown-ZwTwTLgN.js";import"./Overflow-C7Z2yQ6d.js";import"./focus-BMBywfst.js";import"./Loader-CMdXHI8c.js";import"./index-ep_dZgWZ.js";import"./v4-BoP187Zn.js";import"./button-MWvA5E08.js";import"./useTranslation-DicaTb9e.js";import"./IconResolver-ByaTDbvK.js";import"./index-CNr6redr.js";import"./ResizeInput-NOLn3HZy.js";import"./index-BR6sRKB7.js";import"./AdditionalContent-CyJPU7m4.js";import"./HelpMessage-D4_NBOsb.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
