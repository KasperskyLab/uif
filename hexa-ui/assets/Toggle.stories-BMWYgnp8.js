import{T as F}from"./Palette-Bg03s3su.js";import{b as g,R as o,c as H,r as u,T as I,y as Q}from"./iframe-BRHEU44b.js";import{w as K}from"./withMeta-DRekEB-t.js";import{a as M}from"./Warnings-CJ56ANWh.js";import{s as N}from"./helpers-BytZKRkB.js";import{S as R}from"./StoryComponents-C0mbreER.js";import{T as U}from"./Textbox-DMvZEd4r.js";import{T as c}from"./Toggle-CeugcNRG.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Bb2qq9gO.js";import"./StatusOkOutline-DIU7SOim.js";import"./Tag-BIcD16gu.js";import"./TextReducer-CWApg1Kv.js";import"./StatusDangerSolid1-BdPlzuOB.js";import"./Group-Br3zlCvh.js";import"./index-DUIAU5F9.js";import"./type-C7NSKp6S.js";import"./colors-BZiHKXSQ.js";import"./wave-Bs5MIFvx.js";import"./Divider-BztJ3dOK.js";import"./FormLabel-C1G9QKAr.js";import"./Markdown-WIxY-tBy.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D7JZ43Jf.js";import"./useGlobalStyles--soGWtLF.js";import"./useThemedTextbox-CZaI63J7.js";import"./typesHelpers-tpz7Of7L.js";import"./input-Chj-xsqd.js";import"./index-Chjiymov.js";import"./index-BuvmpY3z.js";import"./Advertisement-D2PLrSja.js";import"./ArrowRightMini-jBO8Jx_u.js";import"./ArrowDown-BMfG984_.js";import"./ArrowLeft-mnxhmUK3.js";import"./Calendar-bjYjAnbC.js";import"./ArrowRight-B1uw3U95.js";import"./ArrowUp1-DCSMBo8z.js";import"./ExpandUp-DfLNQYRj.js";import"./Server-D97yiB2w.js";import"./ArrowForward-CAJFNyjD.js";import"./Upload-kWNB5Ir9.js";import"./StatusDangerOutlineSquare-Dliu1iWq.js";import"./Help-BvQfaVs8.js";import"./Kira-CgGiGk0a.js";import"./Menu2-CEpL5mXF.js";import"./Menu3-Cri8rJ7g.js";import"./Unpin-BQEGe0Oe.js";import"./Placeholder-xYqG3kDP.js";import"./Plus-9hAOzZMY.js";import"./Search1-p1E82GX0.js";import"./Settings-j4GCSvvj.js";import"./SettingsGear-BUstfdq6.js";import"./StatusOkSolid-CqgV7k50.js";import"./ArrowRight-gOqyfufR.js";import"./StatusWarningOutline-Uho-eXkK.js";import"./StatusDangerSolid1-BjfRukoQ.js";import"./ShieldOkSolid-DuzcUZ8E.js";import"./StatusWarningSolid-BJdsPxQv.js";import"./ArrowDownSolid-BqYk5Jzi.js";import"./ArrowRightSolid-CZnOfwCW.js";import"./AccountSearch-DxKYZ86h.js";import"./Connection-C4tm8lwN.js";import"./KeyCode-3nj2UE0z.js";import"./SearchOutlined-CKnrVu9U.js";import"./Button-C0fUEtRn.js";import"./Dropdown-CfWBMvGn.js";import"./Overflow-CMzOzC0c.js";import"./focus-Bk20jhWG.js";import"./Loader-CDcSa16C.js";import"./index-BsfcY517.js";import"./v4-BoP187Zn.js";import"./button-BiQ5G3qA.js";import"./useTranslation-vVsTWxBT.js";import"./IconResolver-BT7ws94k.js";import"./index-CI8DiPS8.js";import"./ResizeInput-D0Lqy0Ug.js";import"./index-BNNg-bPZ.js";import"./AdditionalContent-CaNN7mfg.js";import"./HelpMessage-DMzajr4e.js";const Y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},Z="Toggle",j="Компонент для отрисовки переключателей. В качестве основы используется AntdSwitch из библиотеки Antd.",q="Элемент, при нажатии на который происходит переключение Boolean состояния",z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=32959%3A116557",G="https://pixso.net/app/design/u7KQ8mwSPSbdesEcdJJlsQ",T={dod:Y,component:Z,description:j,usage:q,designLink:z,pixsoView:G},ke={title:"Hexa UI Components/Toggle",component:c,argTypes:{labelPosition:{options:["after","before"],control:{type:"radio"}},tooltip:{control:"text"},...N(["theme","icon"])},args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",testId:"toggle-test-id",klId:"toggle-kl-id",children:"Label"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:K(T)},controls:{exclude:/(compositionTooltip|componentType)/},design:T.pixsoView}},n={},s={args:{children:null}},i={render:e=>{const[r,V]=u.useState(!0),[_,D]=u.useState(!0),l=t=>t?"On":"Off",d=console.log;return o.createElement(R,null,o.createElement(c,{...e,checked:r,onChange:t=>{V(t),d({first:t})}},l(r)),!r&&o.createElement(I,null,"second onChange does not work"),o.createElement(c,{...e,checked:_,onChange:t=>{r&&(D(t),d({second:t}))}},l(r)))}},p={args:{description:"Some description",dependentElement:o.createElement(U,{placeholder:"dependentElement"})}},a={render:e=>o.createElement("div",null,o.createElement(M,{propName:"compositionTooltip"}),o.createElement("div",{style:{width:"min-content"}},o.createElement(Q,{text:e.compositionTooltip},o.createElement("span",null,o.createElement(c,{...e}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toogle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},m={args:{source:H.toggle},render:e=>o.createElement(F,{...e})};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
