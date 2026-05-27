import{T as F}from"./Palette-DypzKIWI.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-DijVn6lr.js";import{w as K}from"./withMeta-Cvuu-gnO.js";import{a as M}from"./Warnings-DvINeFpI.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-DmWAqy50.js";import{T as U}from"./Textbox-Do8w9FQx.js";import{T as c}from"./Toggle-B1iun58-.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./Tag-UgBikWKe.js";import"./TextReducer-BIfgSXBQ.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./Group-CAP3cdvx.js";import"./index-tjmVxM9w.js";import"./type-DN7uEUoT.js";import"./colors-CLXBBt7C.js";import"./wave-B_Kd_ldv.js";import"./Divider-D-bCk8Cb.js";import"./FormLabel-671wf7jJ.js";import"./Markdown-DOYaVGrQ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CTNslkPb.js";import"./useGlobalStyles-Clp_neqU.js";import"./useThemedTextbox-COIqB-gx.js";import"./typesHelpers-tpz7Of7L.js";import"./input-D3RvnOrl.js";import"./index-Chjiymov.js";import"./index-BlqrnOjt.js";import"./Advertisement-CowrdAHm.js";import"./ArrowRightMini-lc0ilx02.js";import"./ArrowDown-CaIhkLjp.js";import"./ArrowLeft-dAY6nCFc.js";import"./Calendar-BvhRRbo-.js";import"./ArrowRight-DFM_iKWt.js";import"./ArrowUp1-CqJo2_zZ.js";import"./ExpandUp-B9q_IBTm.js";import"./Server-DfqXxNFK.js";import"./ArrowForward-D__KWItR.js";import"./Upload-NDYqyV2F.js";import"./StatusDangerOutlineSquare-DdQ-_SWm.js";import"./Help-cif6JGJv.js";import"./Kira-CEp6IDBz.js";import"./Menu2-CG_lP8tl.js";import"./Menu3-DfU3vcXs.js";import"./Unpin-CaVgr-PT.js";import"./Placeholder-XNkSpDe-.js";import"./Plus-CtMZBh9J.js";import"./Search1-DOO2nP8F.js";import"./Settings-Ca7K_Yj0.js";import"./SettingsGear-IKcNoBkw.js";import"./StatusOkSolid-kU5hDl8y.js";import"./ArrowRight-kFv3GeJ2.js";import"./StatusWarningOutline-C1xanFFW.js";import"./StatusDangerSolid1-BoAfxRDS.js";import"./ShieldOkSolid-D5hPyBFW.js";import"./StatusWarningSolid-BjUfrWFZ.js";import"./ArrowDownSolid-B6lDi2Ko.js";import"./ArrowRightSolid-x1c4h6Py.js";import"./AccountSearch-LE1oTn1X.js";import"./Connection-oQdKLqfx.js";import"./KeyCode-Dc0kQrxh.js";import"./SearchOutlined-CIJue4Bq.js";import"./Button-PwdEuxbx.js";import"./Dropdown-D0EIrFH4.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./useTranslation-BLQw3CeK.js";import"./IconResolver-DYLYAoT6.js";import"./index-D4RAOcs8.js";import"./ResizeInput-Dyuwuz2a.js";import"./index-DIVbb-zv.js";import"./AdditionalContent-BcbE0Uii.js";import"./HelpMessage-BdtHkJwS.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
