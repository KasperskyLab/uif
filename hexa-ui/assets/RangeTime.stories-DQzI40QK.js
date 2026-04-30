import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-WWmuoJVo.js";import{b as E}from"./imaskDateOptionsGenerator-DWroFM3e.js";import{R as C}from"./RangeSeparator-DzwSe4dH.js";import{T as a}from"./TimeInput-ByBRbRKD.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-BLGQ9wN1.js";import"./index-Chjiymov.js";import"./Textbox-CgORvfF1.js";import"./useGlobalStyles-Bpd6PxO_.js";import"./useThemedTextbox-Bo2zEY4I.js";import"./typesHelpers-tpz7Of7L.js";import"./index-CbLBAv16.js";import"./Advertisement-rvb4QLb8.js";import"./ArrowRightMini-Bw8wbTST.js";import"./ArrowDown-kjt2gGWS.js";import"./ArrowLeft-DvoV4gpD.js";import"./Calendar-BGA3KNcQ.js";import"./ArrowRight-zAcxCSgi.js";import"./ArrowUp1-HcEtioYc.js";import"./ExpandUp-DkLsgt1Z.js";import"./Server-CaDq-4b6.js";import"./ArrowForward-B6D9Vgwv.js";import"./Upload-hAbMBDKo.js";import"./StatusDangerOutlineSquare-BpT9pF-I.js";import"./Help-Dn1W2bdD.js";import"./Kira-uuTNgREj.js";import"./Menu2-BJaOjwtW.js";import"./Menu3-Bb3uscwR.js";import"./Unpin-CkTAnf6T.js";import"./Placeholder-D-9jZmE-.js";import"./Plus-CVRf9IWM.js";import"./Search1-OjZGAJ7z.js";import"./Settings-2mXeSdDg.js";import"./SettingsGear-B9davMAc.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./StatusOkSolid-z0_VKxTZ.js";import"./ArrowRight-CY7To4C_.js";import"./StatusWarningOutline-Dse1Heau.js";import"./StatusDangerSolid1-DmjdBxFs.js";import"./ShieldOkSolid-DztrP7xg.js";import"./StatusOkOutline-D_mkWW8_.js";import"./StatusWarningSolid-DHbCi7JY.js";import"./ArrowDownSolid-HkErgQx9.js";import"./ArrowRightSolid-DBg3_af3.js";import"./AccountSearch-DoQOG2zp.js";import"./Connection-CSTgI3vQ.js";import"./KeyCode-B_Qxrabv.js";import"./type-CH-zv0M5.js";import"./SearchOutlined-BllNSGSA.js";import"./Button-CLoGc_U5.js";import"./Dropdown-BTc89UD8.js";import"./Overflow-BR2bFp5F.js";import"./focus-laSdr2Ty.js";import"./Loader-C4W-_r7-.js";import"./index-1btpB87J.js";import"./Divider-2duFHEPw.js";import"./v4-BoP187Zn.js";import"./button-CF6IFyfC.js";import"./wave-BKxtHpDI.js";import"./Popover-DwSAzC79.js";import"./useTranslation-PRbvrD9U.js";import"./IconResolver-BxeOaCpn.js";import"./index-Bz-v0CtR.js";import"./ResizeInput-DVC5Jgwk.js";import"./index-bI9fxmJx.js";const H=x`
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
