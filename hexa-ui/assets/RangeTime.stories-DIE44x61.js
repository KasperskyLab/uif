import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DWiAMwiJ.js";import{b as E}from"./imaskDateOptionsGenerator-CISnSrxb.js";import{R as C}from"./RangeSeparator-CGSA8fT4.js";import{T as a}from"./TimeInput-zX8iCVZ_.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-B2s7HE4W.js";import"./index-Chjiymov.js";import"./Textbox-DxSJLgj4.js";import"./useGlobalStyles-C2pT-V_L.js";import"./useThemedTextbox-Diajtsuj.js";import"./typesHelpers-tpz7Of7L.js";import"./index-8QxItO3f.js";import"./Advertisement-DQfHSyu3.js";import"./ArrowRightMini-gPkOxSsi.js";import"./ArrowDown-BWs0l36g.js";import"./ArrowLeft-Ca8_fh7u.js";import"./Calendar-B8-PfgEK.js";import"./ArrowRight-B_N7ww3P.js";import"./ArrowUp1-4Klx2RsA.js";import"./ExpandUp-CqB9PCAl.js";import"./Server-CqYK749A.js";import"./ArrowForward-BBk6FIb2.js";import"./Upload-DmaAd2fn.js";import"./StatusDangerOutlineSquare-Bzm3Eoq6.js";import"./Help-YhEHVOjk.js";import"./Kira-SE3dw07D.js";import"./Menu2-Cfz9uuSl.js";import"./Menu3-C3jJ5KoC.js";import"./Unpin-Czyy1NW_.js";import"./Placeholder-gcAYBGfm.js";import"./Plus-ByoKRrZB.js";import"./Search1-DApd6p3S.js";import"./Settings-5jwRFjQg.js";import"./SettingsGear-B1jFuWrT.js";import"./StatusDangerSolid1-gO3LFKBN.js";import"./StatusOkSolid-C6wKLFlN.js";import"./ArrowRight-CV4HYDj1.js";import"./StatusWarningOutline-0cyyh55g.js";import"./StatusDangerSolid1-DYC207cf.js";import"./ShieldOkSolid-D3HJcw0N.js";import"./StatusOkOutline-DhcbM8A-.js";import"./StatusWarningSolid-C36ARmkY.js";import"./ArrowDownSolid-Ba6dQsXh.js";import"./ArrowRightSolid-DIn4kfpv.js";import"./AccountSearch-DdOVR_-H.js";import"./Connection-Bgg7EE29.js";import"./KeyCode-DZ_meC3q.js";import"./type-C6K9kL-Y.js";import"./SearchOutlined-CTsJ0sxq.js";import"./Button-BrJGDNr9.js";import"./Dropdown-C5JsUnEM.js";import"./Overflow-D-4-IOlY.js";import"./focus-T92Dz4Sb.js";import"./Loader-BAjDiBRp.js";import"./index-DP9ivqwc.js";import"./Divider-2J9VGgGt.js";import"./v4-BoP187Zn.js";import"./button-1_tA5xjV.js";import"./wave-K91TzWO2.js";import"./useTranslation-bJGh7SA8.js";import"./IconResolver-Ce2cmlNb.js";import"./index-D30NZVvd.js";import"./ResizeInput-BWC4sQmQ.js";import"./index-B8Jci6V6.js";import"./Popover-aWS8RO_S.js";const H=x`
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
