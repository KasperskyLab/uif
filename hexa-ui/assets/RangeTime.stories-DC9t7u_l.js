import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-BTqAWtZ7.js";import{b as E}from"./imaskDateOptionsGenerator-By9eFNv8.js";import{R as C}from"./RangeSeparator-A3LbwYVg.js";import{T as a}from"./TimeInput-Yvzedgmr.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-BLpFDoFv.js";import"./index-Chjiymov.js";import"./Textbox-__eV9eR7.js";import"./useGlobalStyles-yVmYTnAO.js";import"./useThemedTextbox-BeVMGWRB.js";import"./typesHelpers-tpz7Of7L.js";import"./index-CZSh-iRU.js";import"./Advertisement-DNLU6j1d.js";import"./ArrowRightMini-DcXMOUZM.js";import"./ArrowDown-CmblaFws.js";import"./ArrowLeft-DzV3Pwej.js";import"./Calendar-C4euPsXD.js";import"./ArrowRight-BECW_anK.js";import"./ArrowUp1-CeFsk3eX.js";import"./ExpandUp-VnFa6867.js";import"./Server-CXTbtgpb.js";import"./ArrowForward-D569Ekao.js";import"./Upload-FpghvWbN.js";import"./StatusDangerOutlineSquare-C8yRaZCe.js";import"./Help-CJK_dk08.js";import"./Kira-pPshgjGx.js";import"./Menu2-Zv80GjD8.js";import"./Menu3-14PZSC-7.js";import"./Unpin-bS66BwYL.js";import"./Placeholder-BHcqJ4m2.js";import"./Plus-BlqV6XvD.js";import"./Search1-BSH1_159.js";import"./Settings-DWIFL17Y.js";import"./SettingsGear-CML7-gsl.js";import"./StatusDangerSolid1-CztCiRpT.js";import"./StatusOkSolid-BCpBJdBw.js";import"./ArrowRight-Rh1Dhktb.js";import"./StatusWarningOutline-BUYqM3rG.js";import"./StatusDangerSolid1-BOZXNarI.js";import"./ShieldOkSolid-Dcn-T8TF.js";import"./StatusOkOutline-lrTYU_cr.js";import"./StatusWarningSolid-BAbdcJl8.js";import"./ArrowDownSolid-BZ856B2m.js";import"./ArrowRightSolid-DTTYrwmS.js";import"./AccountSearch-DbxbfvJY.js";import"./Connection-VIYAuiri.js";import"./KeyCode-Bslz2nuw.js";import"./type-Qe6Yz0Sh.js";import"./SearchOutlined-lEiiTSzX.js";import"./Button-BshtoBSx.js";import"./Dropdown-CnlNBihq.js";import"./Overflow-YfqnCquf.js";import"./focus-iTloRQcb.js";import"./Loader-GevLMjlq.js";import"./index-BxRvj_MD.js";import"./Divider-KPnt62j1.js";import"./v4-BoP187Zn.js";import"./button-DFmMxOVw.js";import"./wave-CKMqhJ_H.js";import"./useTranslation-92nYyB7z.js";import"./IconResolver-D7OY2khi.js";import"./index-CXKeALR0.js";import"./ResizeInput-DLL0-57U.js";import"./index-BZc0GCNk.js";import"./Popover-mmzT_Qk2.js";const H=x`
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
