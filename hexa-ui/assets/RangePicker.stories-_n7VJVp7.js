import{T as S}from"./Palette-XsZRGwvq.js";import{v}from"./typesHelpers-tpz7Of7L.js";import{R as r,b as D,c as o,H as b}from"./iframe-DVE_7kq9.js";import{w as y}from"./withMeta-CzPSWtck.js";import{s as M}from"./helpers-BytZKRkB.js";import{R as P}from"./RangePicker-DQ01ca3P.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BGulR29O.js";import"./StatusOkOutline-C-l0Ef9W.js";import"./imaskDateOptionsGenerator-DmE8x_MD.js";import"./input-CDGOJlXp.js";import"./index-Chjiymov.js";import"./RangeSeparator-WRNMLzDc.js";import"./WithGlobalStyles-C26za5MB.js";import"./useGlobalStyles-DHuBRWl5.js";import"./dateFns-Bxj6brMV.js";import"./useTranslation-2jIOXqSO.js";import"./useThemedTextbox-D_2Xd42x.js";import"./Calendar-C7UkSh_L.js";import"./ArrowRightMini-Bth2ZwrA.js";import"./type-CaOsV2Rp.js";import"./KeyCode-EWEGft3Z.js";import"./index-DpVB-H6o.js";import"./addEventListener-CMIXNMwq.js";import"./Portal-sm_kSK11.js";import"./Overflow-oyvLW8yL.js";import"./regeneratorRuntime-DRUYrVMB.js";import"./Button-D9s4A7m7.js";import"./Dropdown--DTicSeA.js";import"./focus-BjQQf_fX.js";import"./Loader-B40QQF8n.js";import"./index-nHA8zgOJ.js";import"./Divider-B0XUs7Vt.js";import"./ArrowRight-D6sV46j6.js";import"./v4-BoP187Zn.js";import"./button-BUGCw8rM.js";import"./wave-D4avGR4B.js";const F={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},A="RangePicker",H="Интерактивный компонент выбора промежутка даты. В качестве основы используется стилизованный компонент `RangePicker` из `antd`, который, в свою очередь, построен на `rc-picker`",V="",I="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=3828%3A16437&item-id=80748%3A348477",B="https://pixso.net/app/design/M7_B6xFkVmGWzArYruGkGA?item-id=6001%3A45944",m={dod:F,component:A,description:H,usage:V,designLink:I,pixsoView:B},G=b.div`
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
