import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DijVn6lr.js";import{b as E}from"./imaskDateOptionsGenerator-BPeBMtTp.js";import{R as C}from"./RangeSeparator-BhNU0tij.js";import{T as a}from"./TimeInput-DvUkyTKI.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-D3RvnOrl.js";import"./index-Chjiymov.js";import"./Textbox-Do8w9FQx.js";import"./useGlobalStyles-Clp_neqU.js";import"./useThemedTextbox-COIqB-gx.js";import"./typesHelpers-tpz7Of7L.js";import"./index-BlqrnOjt.js";import"./Advertisement-CowrdAHm.js";import"./ArrowRightMini-lc0ilx02.js";import"./ArrowDown-CaIhkLjp.js";import"./ArrowLeft-dAY6nCFc.js";import"./Calendar-BvhRRbo-.js";import"./ArrowRight-DFM_iKWt.js";import"./ArrowUp1-CqJo2_zZ.js";import"./ExpandUp-B9q_IBTm.js";import"./Server-DfqXxNFK.js";import"./ArrowForward-D__KWItR.js";import"./Upload-NDYqyV2F.js";import"./StatusDangerOutlineSquare-DdQ-_SWm.js";import"./Help-cif6JGJv.js";import"./Kira-CEp6IDBz.js";import"./Menu2-CG_lP8tl.js";import"./Menu3-DfU3vcXs.js";import"./Unpin-CaVgr-PT.js";import"./Placeholder-XNkSpDe-.js";import"./Plus-CtMZBh9J.js";import"./Search1-DOO2nP8F.js";import"./Settings-Ca7K_Yj0.js";import"./SettingsGear-IKcNoBkw.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./StatusOkSolid-kU5hDl8y.js";import"./ArrowRight-kFv3GeJ2.js";import"./StatusWarningOutline-C1xanFFW.js";import"./StatusDangerSolid1-BoAfxRDS.js";import"./ShieldOkSolid-D5hPyBFW.js";import"./StatusOkOutline-rTkgZuSC.js";import"./StatusWarningSolid-BjUfrWFZ.js";import"./ArrowDownSolid-B6lDi2Ko.js";import"./ArrowRightSolid-x1c4h6Py.js";import"./AccountSearch-LE1oTn1X.js";import"./Connection-oQdKLqfx.js";import"./KeyCode-Dc0kQrxh.js";import"./type-DN7uEUoT.js";import"./SearchOutlined-CIJue4Bq.js";import"./Button-PwdEuxbx.js";import"./Dropdown-D0EIrFH4.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./Divider-D-bCk8Cb.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./wave-B_Kd_ldv.js";import"./useTranslation-BLQw3CeK.js";import"./IconResolver-DYLYAoT6.js";import"./index-D4RAOcs8.js";import"./ResizeInput-Dyuwuz2a.js";import"./index-DIVbb-zv.js";import"./Popover-CTNslkPb.js";const H=x`
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
