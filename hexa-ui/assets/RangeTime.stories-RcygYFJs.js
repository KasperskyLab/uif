import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DVE_7kq9.js";import{b as E}from"./imaskDateOptionsGenerator-DmE8x_MD.js";import{R as C}from"./RangeSeparator-WRNMLzDc.js";import{T as a}from"./TimeInput-B5DBYxms.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-CDGOJlXp.js";import"./index-Chjiymov.js";import"./Textbox-DwrQKcqo.js";import"./useGlobalStyles-DHuBRWl5.js";import"./useThemedTextbox-D_2Xd42x.js";import"./typesHelpers-tpz7Of7L.js";import"./index-D5q2FrG3.js";import"./Advertisement-CIGY1VwL.js";import"./ArrowRightMini-Bth2ZwrA.js";import"./ArrowDown-Bnehc5FG.js";import"./ArrowLeft-B14b0ZMR.js";import"./Calendar-C7UkSh_L.js";import"./ArrowRight-D6sV46j6.js";import"./ArrowUp1-DZCJGNsg.js";import"./ExpandUp-CQburIiE.js";import"./Server-8yPrkq4K.js";import"./ArrowForward-BPNLUKUu.js";import"./Upload-Yykrgsr5.js";import"./StatusDangerOutlineSquare-Du_eJu5D.js";import"./Help-BHF2pfHX.js";import"./Kira-BvMtESS-.js";import"./Menu2-CCVLlcNR.js";import"./Menu3-BcCBiYxT.js";import"./Unpin-Sik_GMHx.js";import"./Placeholder-BQjnLMm9.js";import"./Plus-COGYOBKv.js";import"./Search1-YkTRWbPj.js";import"./Settings-C3fBGBuG.js";import"./SettingsGear-BhCfl8dc.js";import"./StatusDangerSolid1-jJjmvO6K.js";import"./StatusOkSolid-B_R1GfHI.js";import"./ArrowRight-Bbci9Xzn.js";import"./StatusWarningOutline-CnwE134E.js";import"./StatusDangerSolid1-B8bwvaHG.js";import"./ShieldOkSolid-ElvQjY8J.js";import"./StatusOkOutline-C-l0Ef9W.js";import"./StatusWarningSolid-D-HIGMdC.js";import"./ArrowDownSolid-YqOaa2_I.js";import"./ArrowRightSolid-DIMtYxkK.js";import"./AccountSearch-DiFsoafD.js";import"./Connection-fNfKhoji.js";import"./KeyCode-EWEGft3Z.js";import"./type-CaOsV2Rp.js";import"./SearchOutlined-VqhnVTtC.js";import"./Button-D9s4A7m7.js";import"./Dropdown--DTicSeA.js";import"./Overflow-oyvLW8yL.js";import"./focus-BjQQf_fX.js";import"./Loader-B40QQF8n.js";import"./index-nHA8zgOJ.js";import"./Divider-B0XUs7Vt.js";import"./v4-BoP187Zn.js";import"./button-BUGCw8rM.js";import"./wave-D4avGR4B.js";import"./Popover-D2gFaQHm.js";import"./useTranslation-2jIOXqSO.js";import"./IconResolver-BhbHcB6m.js";import"./index-CEu_P7ku.js";import"./ResizeInput-DxS6rgVy.js";import"./index-DZ4Kp4wa.js";const H=x`
  display: flex;
  flex-wrap: nowrap;
  height: 32px;
  gap: 4px;
  align-items: center;
  border-radius: 8px;
  padding: 6px 12px;
  border: 1px solid var(--input_datetime_picker--border--enabled);

  &:hover {
    border-color: var(--input_datetime_picker--border--hover);
  }

  &:has(.ant-input:focus, .ant-input:focus-visible) {
    border-color: var(--input_datetime_picker--border--enabled);
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }

  .ant-input.ant-input.ant-input {
    &,
    &:hover,
    &:focus,
    &:focus-visible {
      border: none;
      background: transparent;
      box-shadow: none;
      field-sizing: content;
      width: auto;
      padding: 0;
      border-radius: 0;
      height: auto;
    }
  }

  &:has(input:not(:placeholder-shown), input:focus) .hexa-ui-range-separator {
    color: var(--text--primary);
  }
`,R=_.div`
  ${H}
`,b=({format:o=E,testId:r,klId:n,...i})=>e.createElement(R,{className:"hexa-ui-time-range"},e.createElement(a,{...i,testId:r&&`${r}-start`,format:o}),e.createElement(C,null),e.createElement(a,{...i,testId:r&&`${r}-end`,format:o}));b.__docgenInfo={description:"",methods:[],displayName:"RangeTimeInput",props:{format:{required:!1,tsType:{name:"timeFormat[number]",raw:"typeof timeFormat[number]"},description:"",defaultValue:{value:"DEFAULT_TIME_FORMAT",computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ThemeKey"},description:""},valueStart:{required:!1,tsType:{name:"string"},description:""},valueEnd:{required:!1,tsType:{name:"string"},description:""},onChangeStart:{required:!1,tsType:{name:"TextboxProps['onChange']",raw:"TextboxProps['onChange']"},description:""},onChangeEnd:{required:!1,tsType:{name:"TextboxProps['onChange']",raw:"TextboxProps['onChange']"},description:""}}};const t={table:{disable:!0}},$e={title:"Hexa UI Components/Inputs/DateRanges",component:a,argTypes:{format:{control:{type:"radio"},options:I},theme:t,value:t,onChange:t,klId:t,testId:t,componentId:t,dataTestId:t,className:t,disabled:t,readOnly:t,validationStatus:t},parameters:{badges:[c.stable,c.needsDesignReview]},decorators:[(o,r)=>e.createElement(y,null,e.createElement(o,{...r}))]},y=_.div`
  width: 300px;
`,s={render:o=>{const[r,n]=p.useState(),[i,d]=p.useState();return e.createElement(e.Fragment,null,e.createElement(S,null,"Range time picker is composition of 2 TimeInputs"),e.createElement(v,{gap:4,direction:"horizontal",wrap:"nowrap"},e.createElement(a,{...o,value:r,onChange:n,format:"HH:mm:ss",placeholder:"__:__:__"}),"– ",e.createElement(a,{...o,value:i,onChange:d,format:"HH:mm:ss",placeholder:"__:__:__"})))}},m={args:{testId:"time-input",format:"HH:mm:ss"},render:o=>{const[r,n]=p.useState(),[i,d]=p.useState();return e.createElement(b,{...o,valueStart:r,valueEnd:i,onChangeStart:n,onChangeEnd:d})}};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [firstTime, setFirstTime] = useState<string>();
    const [secondTime, setSecondTime] = useState<string>();
    return <>
      <H6>Range time picker is composition of 2 TimeInputs</H6>
      <Space gap={4} direction="horizontal" wrap="nowrap">
        <TimeInput {...args} value={firstTime} onChange={setFirstTime} format="HH:mm:ss" placeholder="__:__:__" />
        – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format="HH:mm:ss" placeholder="__:__:__" />
      </Space>
    </>;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,h,f;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    testId: 'time-input',
    format: 'HH:mm:ss'
  },
  render: args => {
    const [firstTime, setFirstTime] = useState<string>();
    const [secondTime, setSecondTime] = useState<string>();
    return <RangeTimeInput {...args} valueStart={firstTime} valueEnd={secondTime} onChangeStart={setFirstTime} onChangeEnd={setSecondTime} />;
  }
}`,...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Le=["RangeTimeComposition","RangeTime"];export{m as RangeTime,s as RangeTimeComposition,Le as __namedExportsOrder,$e as default};
