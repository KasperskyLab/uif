import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-zz6a49H8.js";import{b as E}from"./imaskDateOptionsGenerator-wBwCAmst.js";import{R as C}from"./RangeSeparator-KF6ouy2T.js";import{T as a}from"./TimeInput-BZB7Et3p.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-Dg6A0g4J.js";import"./index-Chjiymov.js";import"./Textbox-O3s0uqSG.js";import"./useGlobalStyles-cJLcvPW6.js";import"./useThemedTextbox-BGGAc01B.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BDzolQnr.js";import"./Advertisement-Yh_igVk5.js";import"./ArrowRightMini-DjD3k9uh.js";import"./ArrowDown-4i-SVD6u.js";import"./ArrowLeft-BenI_L4g.js";import"./Calendar-BZmQdLvd.js";import"./ArrowRight-DPBBrE_M.js";import"./ArrowUp1-DkE_q9S2.js";import"./ExpandUp-D4Xd3vou.js";import"./Server-B83jKXaI.js";import"./ArrowForward-Cfeau0Of.js";import"./Upload-BgoxvLW9.js";import"./StatusDangerOutlineSquare-CfDrKxro.js";import"./Help-DDZoI9w3.js";import"./Kira-D6S8lI4y.js";import"./Menu2-gmgzxp5q.js";import"./Menu3-BhUF3vm5.js";import"./Unpin-nuudWmPx.js";import"./Placeholder-Bv52avk_.js";import"./Plus-C59NrE5b.js";import"./Search1-DZu0ocx7.js";import"./Settings-3sEKraz-.js";import"./SettingsGear-BNA7541v.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./StatusOkSolid-MBCvP7_O.js";import"./ArrowRight-hBQHItJC.js";import"./StatusWarningOutline-DZEZTt6V.js";import"./StatusDangerSolid1-EVPJI7Z8.js";import"./ShieldOkSolid-C-p6gnLF.js";import"./StatusOkOutline-BBn674wO.js";import"./StatusWarningSolid-CRMCvTXn.js";import"./ArrowDownSolid-DU27KX-r.js";import"./ArrowRightSolid-6Unlqm7I.js";import"./AccountSearch-BWuyXyEt.js";import"./Connection-DbW0uygf.js";import"./KeyCode-D_nTN6KT.js";import"./type-CR-gS43P.js";import"./SearchOutlined-tsI9ISqz.js";import"./Button-Djh220XQ.js";import"./Dropdown-D5otA5yN.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./Divider-DNO5OI2y.js";import"./v4-BoP187Zn.js";import"./button-nrifPwP7.js";import"./wave-CA5Glh0A.js";import"./Popover-B2Trw9mJ.js";import"./useTranslation-7a9748wG.js";import"./IconResolver-BTOOgpNr.js";import"./index-DM61bQr0.js";import"./ResizeInput-LnJbjdAp.js";import"./index-Bnrns6p9.js";const H=x`
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
