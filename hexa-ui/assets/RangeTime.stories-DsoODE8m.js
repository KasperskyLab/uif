import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DiWy1KYN.js";import{b as E}from"./imaskDateOptionsGenerator-gATa5t3A.js";import{R as C}from"./RangeSeparator-CblduL05.js";import{T as a}from"./TimeInput-DgYfJkuT.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-ClPuXHPp.js";import"./index-Chjiymov.js";import"./Textbox-bxSHn5EF.js";import"./useGlobalStyles-Drby6BiX.js";import"./useThemedTextbox-D_9zr8k6.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BVtS2_Nx.js";import"./Advertisement-CKz4rEPI.js";import"./ArrowRightMini-C1hrVF24.js";import"./ArrowDown-jbdDHNjg.js";import"./ArrowLeft-CU8IghxH.js";import"./Calendar-B79Om2Bi.js";import"./ArrowRight-BbbEfuNH.js";import"./ArrowUp1-CmzeHxln.js";import"./ExpandUp-HN8jxHjL.js";import"./Server-gcWKJaoz.js";import"./ArrowForward-CqjyLEeO.js";import"./Upload-CEYKPp0N.js";import"./StatusDangerOutlineSquare-i4W-DjO4.js";import"./Help-ElsHFUMP.js";import"./Kira-CBw8h2vh.js";import"./Menu2-BhJXUHvU.js";import"./Menu3-C2XoVw2W.js";import"./Unpin-DE4hVOUh.js";import"./Placeholder-D7e87NXL.js";import"./Plus-BV7RhOWs.js";import"./Search1-CWUrFQgM.js";import"./Settings-B_hyHiPr.js";import"./SettingsGear-BM1fnwvI.js";import"./StatusDangerSolid1-CdxRh6YN.js";import"./StatusOkSolid-ojVhfh4d.js";import"./ArrowRight-P3HYe-kZ.js";import"./StatusWarningOutline-DHW6qbWC.js";import"./StatusDangerSolid1-1eVpKeiw.js";import"./ShieldOkSolid-BDPWnEo-.js";import"./StatusOkOutline-CVg5KvZR.js";import"./StatusWarningSolid--5gidT9A.js";import"./ArrowDownSolid-CqrJrSKt.js";import"./ArrowRightSolid-Zkcei8iz.js";import"./AccountSearch-Vt0bS_7h.js";import"./Connection-C4gUEENI.js";import"./KeyCode-BY4DNMR0.js";import"./type-CWarxUn6.js";import"./SearchOutlined-C22t9H04.js";import"./Button-BY2tOC9A.js";import"./Dropdown-Bqv3QVMW.js";import"./Overflow-TLEdl8-N.js";import"./focus-D0oyTwSA.js";import"./Loader-G8s_DU-J.js";import"./index-CmpLDwNs.js";import"./Divider-CzZqKtxh.js";import"./v4-BoP187Zn.js";import"./button-CZMOKgb_.js";import"./wave-PPlkdWFv.js";import"./Popover-DmRRZB2O.js";import"./useTranslation-DDc5jM4w.js";import"./IconResolver-2Wck3Ngn.js";import"./index-CiBTSPf_.js";import"./ResizeInput-Bn-eJJ2z.js";import"./index-2PT5-QuA.js";const H=x`
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
