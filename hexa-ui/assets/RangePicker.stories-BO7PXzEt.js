import{T as S}from"./Palette-DqJNg_8n.js";import{v}from"./typesHelpers-tpz7Of7L.js";import{R as r,b as D,c as o,H as b}from"./iframe-DWiAMwiJ.js";import{w as y}from"./withMeta-B2KnXlKz.js";import{s as M}from"./helpers-BytZKRkB.js";import{R as P}from"./RangePicker-LbJUsqsJ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BdvuFLTH.js";import"./StatusOkOutline-DhcbM8A-.js";import"./imaskDateOptionsGenerator-CISnSrxb.js";import"./input-B2s7HE4W.js";import"./index-Chjiymov.js";import"./RangeSeparator-CGSA8fT4.js";import"./WithGlobalStyles-CxNPxbFo.js";import"./useGlobalStyles-C2pT-V_L.js";import"./dateFns-B1ADUGq7.js";import"./useTranslation-bJGh7SA8.js";import"./useThemedTextbox-Diajtsuj.js";import"./Calendar-B8-PfgEK.js";import"./ArrowRightMini-gPkOxSsi.js";import"./type-C6K9kL-Y.js";import"./KeyCode-DZ_meC3q.js";import"./index-C9RUByr5.js";import"./addEventListener-j4UgXOKx.js";import"./Portal-BxOaI8fB.js";import"./Overflow-D-4-IOlY.js";import"./regeneratorRuntime-D_v0jtrA.js";import"./Button-BrJGDNr9.js";import"./Dropdown-C5JsUnEM.js";import"./focus-T92Dz4Sb.js";import"./Loader-BAjDiBRp.js";import"./index-DP9ivqwc.js";import"./Divider-2J9VGgGt.js";import"./ArrowRight-B_N7ww3P.js";import"./v4-BoP187Zn.js";import"./button-1_tA5xjV.js";import"./wave-K91TzWO2.js";const F={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},A="RangePicker",H="Интерактивный компонент выбора промежутка даты. В качестве основы используется стилизованный компонент `RangePicker` из `antd`, который, в свою очередь, построен на `rc-picker`",V="",I="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=3828%3A16437&item-id=80748%3A348477",B="https://pixso.net/app/design/M7_B6xFkVmGWzArYruGkGA?item-id=6001%3A45944",m={dod:F,component:A,description:H,usage:V,designLink:I,pixsoView:B},G=b.div`
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
