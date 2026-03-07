import{T as S}from"./Palette-oU4WYbWy.js";import{v}from"./typesHelpers-tpz7Of7L.js";import{R as r,b as D,c as o,H as b}from"./iframe-zz6a49H8.js";import{w as y}from"./withMeta-CjSZnBk7.js";import{s as M}from"./helpers-BytZKRkB.js";import{R as P}from"./RangePicker-CAPN7Kop.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./imaskDateOptionsGenerator-wBwCAmst.js";import"./input-Dg6A0g4J.js";import"./index-Chjiymov.js";import"./RangeSeparator-KF6ouy2T.js";import"./WithGlobalStyles-CgeA2Hux.js";import"./useGlobalStyles-cJLcvPW6.js";import"./dateFns-CoF_XGKL.js";import"./useTranslation-7a9748wG.js";import"./useThemedTextbox-BGGAc01B.js";import"./Calendar-BZmQdLvd.js";import"./ArrowRightMini-DjD3k9uh.js";import"./type-CR-gS43P.js";import"./KeyCode-D_nTN6KT.js";import"./index-BUgDoPiZ.js";import"./addEventListener-BKgxKBJK.js";import"./Portal-BrF8T4Qt.js";import"./Overflow-8LRqTPgc.js";import"./regeneratorRuntime-D-GllPJF.js";import"./Button-Djh220XQ.js";import"./Dropdown-D5otA5yN.js";import"./focus-rl8Tx3sL.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./Divider-DNO5OI2y.js";import"./ArrowRight-DPBBrE_M.js";import"./v4-BoP187Zn.js";import"./button-nrifPwP7.js";import"./wave-CA5Glh0A.js";const F={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},A="RangePicker",H="Интерактивный компонент выбора промежутка даты. В качестве основы используется стилизованный компонент `RangePicker` из `antd`, который, в свою очередь, построен на `rc-picker`",V="",I="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=3828%3A16437&item-id=80748%3A348477",B="https://pixso.net/app/design/M7_B6xFkVmGWzArYruGkGA?item-id=6001%3A45944",m={dod:F,component:A,description:H,usage:V,designLink:I,pixsoView:B},G=b.div`
  width: 300px;
`,Ee={title:"Hexa UI Components/Inputs/DateRanges",component:P,argTypes:{validationStatus:{control:{type:"radio"},options:v},...M(["theme"])},args:{testId:"range-picker-test-id",klId:"range-picker-kl-id",validationStatus:"default"},parameters:{badges:[D.stable],docs:{page:y(m)},design:m.pixsoView},decorators:[(e,t)=>r.createElement(G,null,r.createElement(e,{...t}))]},Y=b.div`
  width: 500px;
`,p=({onChange:e,value:t,...E})=>{const[f,W]=r.useState([null,null]);return r.createElement(P,{value:f,onChange:C=>W(C),...E})},a={render:e=>r.createElement(p,{...e})},n={render:({showTime:e,...t})=>r.createElement(p,{...t,showTime:!0}),decorators:[(e,t)=>r.createElement(Y,null,r.createElement(e,{...t}))]},s={render:e=>r.createElement(p,{...e,format:"DD.MM",placeholder:["__.__","__.__"]})},i={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(S,{...e})};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: RangePickerProps) => <RangePickerExample {...args} />
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    showTime,
    ...args
  }: RangePickerProps) => <RangePickerExample {...args} showTime />,
  decorators: [(Story, context) => <WrapperForRangeWithTime>
        <Story {...context} />
      </WrapperForRangeWithTime>]
}`,...(_=(g=n.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var k,h,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: RangePickerProps) => <RangePickerExample {...args} format="DD.MM" placeholder={['__.__', '__.__']} />
}`,...(R=(h=s.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var w,T,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    source: {
      input_datetime_picker: componentColors.input_datetime_picker,
      calendar_dropdown: componentColors.calendar_dropdown,
      calendar_dropdown_button: componentColors.calendar_dropdown_button,
      calendar_preset_button: componentColors.calendar_preset_button
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const fe=["Basic","RangeWithTime","RangeWithFormat","ColorTokens"];export{a as Basic,i as ColorTokens,s as RangeWithFormat,n as RangeWithTime,fe as __namedExportsOrder,Ee as default};
