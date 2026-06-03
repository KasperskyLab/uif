import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DNxUu9EZ.js";import{b as E}from"./imaskDateOptionsGenerator-mV6z3nTF.js";import{R as C}from"./RangeSeparator-_J7J8i8F.js";import{T as a}from"./TimeInput-BPN7Kfxa.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-BVOUg_-L.js";import"./index-Chjiymov.js";import"./Textbox-DGmYib5R.js";import"./useGlobalStyles-Cp5L9cJa.js";import"./useThemedTextbox-Iy1HOhuV.js";import"./typesHelpers-tpz7Of7L.js";import"./index-CjROSVe0.js";import"./Advertisement-wZXFNxox.js";import"./ArrowRightMini-fHYnFk2d.js";import"./ArrowDown-DYkpwcN1.js";import"./ArrowLeft-ChwU4BEm.js";import"./Calendar-BjTMvEz3.js";import"./ArrowRight-CS88a_sf.js";import"./ArrowUp1-DqeZXRyg.js";import"./ExpandUp-U8jVpYn-.js";import"./Server-CG08y0pZ.js";import"./ArrowForward-iUEYLJFb.js";import"./Upload-Di-ZvBWE.js";import"./StatusDangerOutlineSquare-BwwUvQ46.js";import"./Help-DSJecN5a.js";import"./Kira-wf7yJhpX.js";import"./Menu2-DcQqrY5-.js";import"./Menu3-quIf9QEM.js";import"./Unpin-h1iwIlIM.js";import"./Placeholder-D-llqBgK.js";import"./Plus-perKoKN9.js";import"./Search1-CO2cf8Td.js";import"./Settings-BiuHtPNZ.js";import"./SettingsGear-zXytkKp6.js";import"./StatusDangerSolid1-B08ZoF4r.js";import"./StatusOkSolid-DgyhOutv.js";import"./ArrowRight--hKezqiG.js";import"./StatusWarningOutline-T2SbIbNj.js";import"./StatusDangerSolid1-Cq5zQ2bK.js";import"./ShieldOkSolid-CMnNkVY1.js";import"./StatusOkOutline-HmfsHsEj.js";import"./StatusWarningSolid-CBES72QM.js";import"./ArrowDownSolid-Q8nCx2m4.js";import"./ArrowRightSolid-BlJskUAV.js";import"./AccountSearch-CduuOzUL.js";import"./Connection-B-9fpkpz.js";import"./KeyCode-CkhLsK6Z.js";import"./type-rfDjHVUQ.js";import"./SearchOutlined-B1Vz4LF1.js";import"./Button-CQvV2N_z.js";import"./Dropdown-CKjJUOpc.js";import"./Overflow-C82F7PuR.js";import"./focus-D4KycEDp.js";import"./Loader-BaqUX3zQ.js";import"./index-Bew-gYUl.js";import"./Divider-BqwESatj.js";import"./v4-BoP187Zn.js";import"./button-qTwxWmX-.js";import"./wave-DYMnJ7p6.js";import"./Popover-CXyjrR-G.js";import"./useTranslation-C9WxYpsi.js";import"./IconResolver-QsfFAW7x.js";import"./index-BA_a7zg7.js";import"./ResizeInput-IbxTZsXz.js";import"./index-DQiuB98R.js";const H=x`
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
