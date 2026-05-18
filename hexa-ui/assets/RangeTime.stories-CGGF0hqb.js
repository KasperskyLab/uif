import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DDLZRCVO.js";import{b as E}from"./imaskDateOptionsGenerator-CIxuNJWY.js";import{R as C}from"./RangeSeparator-QIH2Ykpd.js";import{T as a}from"./TimeInput-CkU8ukgh.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-CVo2IfWI.js";import"./index-Chjiymov.js";import"./Textbox-DS0pLFfi.js";import"./useGlobalStyles-BiX_I9VT.js";import"./useThemedTextbox-DKqC11z1.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BgUPx9iB.js";import"./Advertisement-w3xzTnv7.js";import"./ArrowRightMini-lFWG7kb0.js";import"./ArrowDown-CeB7bPav.js";import"./ArrowLeft-DdaCor9i.js";import"./Calendar-CO2AAQrq.js";import"./ArrowRight-B8y0Q0Nm.js";import"./ArrowUp1-Dx57B1Bv.js";import"./ExpandUp-CrqDH45I.js";import"./Server-BIP1NLmo.js";import"./ArrowForward-D7YDvTgg.js";import"./Upload-JU1VL0zY.js";import"./StatusDangerOutlineSquare-Bu_OuNjB.js";import"./Help-YSNuCE1R.js";import"./Kira-CxDpQFKM.js";import"./Menu2-BufBnz2j.js";import"./Menu3-DD9ses80.js";import"./Unpin-D5CoAbyi.js";import"./Placeholder-BI9wa67U.js";import"./Plus-BIaF0m4-.js";import"./Search1-Br9EB_H6.js";import"./Settings-DhgXavWy.js";import"./SettingsGear-DYiSxKCJ.js";import"./StatusDangerSolid1-DidKQF1_.js";import"./StatusOkSolid-Kmd0br57.js";import"./ArrowRight-eXLa7Z0j.js";import"./StatusWarningOutline-DgPf3LfO.js";import"./StatusDangerSolid1-DhOEo6Gn.js";import"./ShieldOkSolid-D8DLreMf.js";import"./StatusOkOutline-HQaRO0CP.js";import"./StatusWarningSolid-WFjNAuqI.js";import"./ArrowDownSolid-DX-__RrW.js";import"./ArrowRightSolid-nWTj5AhI.js";import"./AccountSearch-BUCXxeNt.js";import"./Connection-BRyOCjRA.js";import"./KeyCode-DFdnluzg.js";import"./type-BAl6LeTY.js";import"./SearchOutlined-Bz9UglGq.js";import"./Button-wVQP-Ef_.js";import"./Dropdown-D13KR3Lp.js";import"./Overflow-Dz5ksMd5.js";import"./focus-D5iHM89J.js";import"./Loader-BqLObxDG.js";import"./index-tsevXCrq.js";import"./Divider-D4PVCF9a.js";import"./v4-BoP187Zn.js";import"./button-YtfEiZDA.js";import"./wave-B_l4DZPA.js";import"./Popover-NgWZ2JmQ.js";import"./useTranslation-C9Y5TKyv.js";import"./IconResolver-BkyqBNHO.js";import"./index-9a9ZIQ0D.js";import"./ResizeInput-z_3zlGh2.js";import"./index-Bru8Ph5-.js";const H=x`
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
