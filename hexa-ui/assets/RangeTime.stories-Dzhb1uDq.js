import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-BRHEU44b.js";import{b as E}from"./imaskDateOptionsGenerator-P7694WT8.js";import{R as C}from"./RangeSeparator-ugJOrYpx.js";import{T as a}from"./TimeInput-Blo1wyz2.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-Chj-xsqd.js";import"./index-Chjiymov.js";import"./Textbox-DMvZEd4r.js";import"./useGlobalStyles--soGWtLF.js";import"./useThemedTextbox-CZaI63J7.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BuvmpY3z.js";import"./Advertisement-D2PLrSja.js";import"./ArrowRightMini-jBO8Jx_u.js";import"./ArrowDown-BMfG984_.js";import"./ArrowLeft-mnxhmUK3.js";import"./Calendar-bjYjAnbC.js";import"./ArrowRight-B1uw3U95.js";import"./ArrowUp1-DCSMBo8z.js";import"./ExpandUp-DfLNQYRj.js";import"./Server-D97yiB2w.js";import"./ArrowForward-CAJFNyjD.js";import"./Upload-kWNB5Ir9.js";import"./StatusDangerOutlineSquare-Dliu1iWq.js";import"./Help-BvQfaVs8.js";import"./Kira-CgGiGk0a.js";import"./Menu2-CEpL5mXF.js";import"./Menu3-Cri8rJ7g.js";import"./Unpin-BQEGe0Oe.js";import"./Placeholder-xYqG3kDP.js";import"./Plus-9hAOzZMY.js";import"./Search1-p1E82GX0.js";import"./Settings-j4GCSvvj.js";import"./SettingsGear-BUstfdq6.js";import"./StatusDangerSolid1-BdPlzuOB.js";import"./StatusOkSolid-CqgV7k50.js";import"./ArrowRight-gOqyfufR.js";import"./StatusWarningOutline-Uho-eXkK.js";import"./StatusDangerSolid1-BjfRukoQ.js";import"./ShieldOkSolid-DuzcUZ8E.js";import"./StatusOkOutline-DIU7SOim.js";import"./StatusWarningSolid-BJdsPxQv.js";import"./ArrowDownSolid-BqYk5Jzi.js";import"./ArrowRightSolid-CZnOfwCW.js";import"./AccountSearch-DxKYZ86h.js";import"./Connection-C4tm8lwN.js";import"./KeyCode-3nj2UE0z.js";import"./type-C7NSKp6S.js";import"./SearchOutlined-CKnrVu9U.js";import"./Button-C0fUEtRn.js";import"./Dropdown-CfWBMvGn.js";import"./Overflow-CMzOzC0c.js";import"./focus-Bk20jhWG.js";import"./Loader-CDcSa16C.js";import"./index-BsfcY517.js";import"./Divider-BztJ3dOK.js";import"./v4-BoP187Zn.js";import"./button-BiQ5G3qA.js";import"./wave-Bs5MIFvx.js";import"./Popover-D7JZ43Jf.js";import"./useTranslation-vVsTWxBT.js";import"./IconResolver-BT7ws94k.js";import"./index-CI8DiPS8.js";import"./ResizeInput-D0Lqy0Ug.js";import"./index-BNNg-bPZ.js";const H=x`
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
