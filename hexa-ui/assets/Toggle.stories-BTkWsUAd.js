import{T as F}from"./Palette-BIyw0yFG.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-ko-fN4O0.js";import{w as K}from"./withMeta-C8MsJeBT.js";import{a as M}from"./Warnings-CEQKHAhO.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-C6gZpmtb.js";import{T as U}from"./Textbox-BJxW5It8.js";import{T as c}from"./Toggle-Cbfk1pXa.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DmjuEKWz.js";import"./StatusOkOutline-Cn4WVFef.js";import"./Tag-IA0Vkdgq.js";import"./TextReducer-C04xZ-9I.js";import"./StatusDangerSolid1-D6q9y8uE.js";import"./Group-u0Sk644W.js";import"./index-C0pCj2SQ.js";import"./type-D7k2Xvr8.js";import"./colors-DQDdeyBZ.js";import"./wave-mrEb6LZp.js";import"./Divider-Cb94-KaG.js";import"./FormLabel-CQC01_Ba.js";import"./Markdown-DLZFx-iU.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CupUWmel.js";import"./useGlobalStyles-DS9Cj9y7.js";import"./useThemedTextbox-Bv0wbbSv.js";import"./typesHelpers-tpz7Of7L.js";import"./input-Csaj_p0D.js";import"./index-Chjiymov.js";import"./index-DVMYwtGz.js";import"./Advertisement-MM8kkiWS.js";import"./ArrowRightMini-DF1T6rop.js";import"./ArrowDown-CYBvo45C.js";import"./ArrowLeft-_-J_3ena.js";import"./Calendar-BMEkZ_wW.js";import"./ArrowRight-DwyJImV1.js";import"./ArrowUp1-BGuAPv_N.js";import"./ExpandUp-DeZADqoy.js";import"./Server-DcRuVry7.js";import"./ArrowForward-BawOyY8N.js";import"./Upload-B_9xiPVv.js";import"./StatusDangerOutlineSquare-kgdVIKQr.js";import"./Help-BDgtW-2j.js";import"./Kira-CMGhl-UP.js";import"./Menu2-DWnsk7T9.js";import"./Menu3-CoJig7cy.js";import"./Unpin-Gisfo2Or.js";import"./Placeholder-BUqYHWNp.js";import"./Plus-B8yyJ2Yj.js";import"./Search1-DPN-mJqd.js";import"./Settings-BbEgSsnZ.js";import"./SettingsGear-DCpcnPJx.js";import"./StatusOkSolid-s3hNP5SL.js";import"./ArrowRight-Bb1kX9bm.js";import"./StatusWarningOutline-DM7Bulb6.js";import"./StatusDangerSolid1-DVKSKjiq.js";import"./ShieldOkSolid-Dq914kEE.js";import"./StatusWarningSolid-CmlcJzjw.js";import"./ArrowDownSolid-C6Ce0L8K.js";import"./ArrowRightSolid-Czcl91ns.js";import"./AccountSearch-BxCEfrN7.js";import"./Connection-2reQWva0.js";import"./KeyCode-BDHZ8Wip.js";import"./SearchOutlined-DX_F6-bx.js";import"./Button-BAMDHgQb.js";import"./Loader-iMImGdt_.js";import"./index-DcNvhb6C.js";import"./button-B01puASn.js";import"./Dropdown-CWozQ77e.js";import"./Overflow-BIuCMRyD.js";import"./focus-Ch4Yfw29.js";import"./v4-BoP187Zn.js";import"./useTranslation-Bz44dUMq.js";import"./IconResolver-Cs1QFkR2.js";import"./index-DN-QLxXT.js";import"./ResizeInput-POdSeeyC.js";import"./index-B4ECjyEQ.js";import"./AdditionalContent-BqWVHi1m.js";import"./HelpMessage-DmzGvLi8.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
