import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DlY6n6Um.js";import{b as E}from"./imaskDateOptionsGenerator-CI8FIL_N.js";import{R as C}from"./RangeSeparator-BVCpPaOb.js";import{T as a}from"./TimeInput-DEKO6Dww.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-mXow91b_.js";import"./index-Chjiymov.js";import"./Textbox-BkTLkszj.js";import"./useGlobalStyles-DCO_4ztA.js";import"./useThemedTextbox-Bmu1H12-.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BbitUTuv.js";import"./Advertisement-3jfyM1bF.js";import"./ArrowRightMini-DrTKhp28.js";import"./ArrowDown-ChGYdLEl.js";import"./ArrowLeft-5XogGUFt.js";import"./Calendar-C5pFsewt.js";import"./ArrowRight-Db3Ij3DE.js";import"./ArrowUp1-BNZdUcIS.js";import"./ExpandUp-DEeB5DsT.js";import"./Server-YIrZe1tb.js";import"./ArrowForward-B1fQsntD.js";import"./Upload-C_N43VAI.js";import"./StatusDangerOutlineSquare-BLZQfahy.js";import"./Help-CdI7ei6S.js";import"./Kira-YbMWu56z.js";import"./Menu2-BBlUvDgt.js";import"./Menu3-B3FR9-ED.js";import"./Unpin-COYC_WLU.js";import"./Placeholder-DRo8POZa.js";import"./Plus-dack3gHw.js";import"./Search1-BZ2VNUxD.js";import"./Settings-KwZGj1kH.js";import"./SettingsGear-9Bvyt4bA.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./StatusOkSolid-IKyijn-S.js";import"./ArrowRight-D3WqXJji.js";import"./StatusWarningOutline-Dy0bueyW.js";import"./StatusDangerSolid1-Dpju5bSe.js";import"./ShieldOkSolid-D-1MqZXL.js";import"./StatusOkOutline-Da-xLIRt.js";import"./StatusWarningSolid-C-5m-AdQ.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./ArrowRightSolid-BZEyC8P2.js";import"./AccountSearch-Dofz33BR.js";import"./Connection-DgyNCf1D.js";import"./KeyCode-B45xthVk.js";import"./type-Cyafuwrq.js";import"./SearchOutlined-CqDp9aMg.js";import"./Button-CgqUalcg.js";import"./Dropdown-WtVSJYv5.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Divider-BzNbSw2T.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";import"./useTranslation-CGS-Ff88.js";import"./IconResolver-k9Mxg6Vr.js";import"./index-i_d8OMNH.js";import"./ResizeInput-DtUKzJyg.js";import"./index-iGBsBt8Q.js";import"./Popover-D8ys_ap7.js";const H=x`
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
