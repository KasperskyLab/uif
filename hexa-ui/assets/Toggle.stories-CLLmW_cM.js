import{T as F}from"./Palette-CpDmDXeM.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-CBNIXqWm.js";import{w as K}from"./withMeta-BiY54Lnt.js";import{a as M}from"./Warnings-DnOC_BbX.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-BG6DEix0.js";import{T as U}from"./Textbox-DJ1nJyzm.js";import{T as c}from"./Toggle-Be9eoBq9.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DRLKWrxC.js";import"./StatusOkOutline-BhzwBS5E.js";import"./Tag-DB-z3Swo.js";import"./TextReducer-BqEbiIRi.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./Group-Bda88l4J.js";import"./index-DPzFOva3.js";import"./type-YzYuwFG9.js";import"./colors-AIlJBz8g.js";import"./wave-C4_7brB4.js";import"./Divider-ja1HbPIW.js";import"./FormLabel-Cy2q2kGk.js";import"./Markdown-CxshTH5T.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-BHGhJBJm.js";import"./useGlobalStyles-BU6K1Vs_.js";import"./useThemedTextbox-CKIx7skj.js";import"./typesHelpers-tpz7Of7L.js";import"./input-CukqmKZ0.js";import"./index-Chjiymov.js";import"./index-B8rTZcNz.js";import"./Advertisement-0tgBvn-H.js";import"./ArrowRightMini-WAtwWm-P.js";import"./ArrowDown-Y8nc6LUr.js";import"./ArrowLeft-Ct0ZpXbg.js";import"./Calendar-Dr--19yW.js";import"./ArrowRight-DOMqH-A2.js";import"./ArrowUp1-CiQgixFk.js";import"./ExpandUp-B4_yhjTn.js";import"./Server-DX3jIhsG.js";import"./ArrowForward-CTLn1brD.js";import"./Upload-C9JWoNnF.js";import"./StatusDangerOutlineSquare-9vd3YrA5.js";import"./Help-vj8qnM9G.js";import"./Kira-7wgZk1IP.js";import"./Menu2-o6ywPqTf.js";import"./Menu3-Befv1-Ms.js";import"./Unpin-BAFNNKvJ.js";import"./Placeholder-BtGpZ1tA.js";import"./Plus-Wofgsm6R.js";import"./Search1-jsfaA-w0.js";import"./Settings-ZkN9nItr.js";import"./SettingsGear-CXOzO7a9.js";import"./StatusOkSolid-BSyFKt93.js";import"./ArrowRight-mEF8foZ-.js";import"./StatusWarningOutline-C1ojQKjI.js";import"./StatusDangerSolid1-CxusGOyX.js";import"./ShieldOkSolid-CKeyel1N.js";import"./StatusWarningSolid-DLIiIj72.js";import"./ArrowDownSolid-Dnc_Zu37.js";import"./ArrowRightSolid-Y7yti10s.js";import"./AccountSearch-CNrOa8Ml.js";import"./Connection-CYP3xHSa.js";import"./KeyCode-BRZB9_MH.js";import"./SearchOutlined-BLcNcmGc.js";import"./Button-DejaZzBC.js";import"./Dropdown-ees5VvWC.js";import"./Overflow-CmFo4jk3.js";import"./focus-BxWsNqjj.js";import"./Loader-vJbmmTbY.js";import"./index-Cxj_l2qe.js";import"./v4-BoP187Zn.js";import"./button-DLIzkXNO.js";import"./useTranslation-rAGXttfk.js";import"./IconResolver-CW0gFSHw.js";import"./index-DN3gpxtf.js";import"./ResizeInput-CdMqYzZs.js";import"./index-DJ6yuvO4.js";import"./AdditionalContent-1M0CuFd6.js";import"./HelpMessage-ur0yPu5r.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
