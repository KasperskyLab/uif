import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-CBNIXqWm.js";import{b as E}from"./imaskDateOptionsGenerator-BP63XpEr.js";import{R as C}from"./RangeSeparator-qiuBnsJI.js";import{T as a}from"./TimeInput-CfxcxOti.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-CukqmKZ0.js";import"./index-Chjiymov.js";import"./Textbox-DJ1nJyzm.js";import"./useGlobalStyles-BU6K1Vs_.js";import"./useThemedTextbox-CKIx7skj.js";import"./typesHelpers-tpz7Of7L.js";import"./index-B8rTZcNz.js";import"./Advertisement-0tgBvn-H.js";import"./ArrowRightMini-WAtwWm-P.js";import"./ArrowDown-Y8nc6LUr.js";import"./ArrowLeft-Ct0ZpXbg.js";import"./Calendar-Dr--19yW.js";import"./ArrowRight-DOMqH-A2.js";import"./ArrowUp1-CiQgixFk.js";import"./ExpandUp-B4_yhjTn.js";import"./Server-DX3jIhsG.js";import"./ArrowForward-CTLn1brD.js";import"./Upload-C9JWoNnF.js";import"./StatusDangerOutlineSquare-9vd3YrA5.js";import"./Help-vj8qnM9G.js";import"./Kira-7wgZk1IP.js";import"./Menu2-o6ywPqTf.js";import"./Menu3-Befv1-Ms.js";import"./Unpin-BAFNNKvJ.js";import"./Placeholder-BtGpZ1tA.js";import"./Plus-Wofgsm6R.js";import"./Search1-jsfaA-w0.js";import"./Settings-ZkN9nItr.js";import"./SettingsGear-CXOzO7a9.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./StatusOkSolid-BSyFKt93.js";import"./ArrowRight-mEF8foZ-.js";import"./StatusWarningOutline-C1ojQKjI.js";import"./StatusDangerSolid1-CxusGOyX.js";import"./ShieldOkSolid-CKeyel1N.js";import"./StatusOkOutline-BhzwBS5E.js";import"./StatusWarningSolid-DLIiIj72.js";import"./ArrowDownSolid-Dnc_Zu37.js";import"./ArrowRightSolid-Y7yti10s.js";import"./AccountSearch-CNrOa8Ml.js";import"./Connection-CYP3xHSa.js";import"./KeyCode-BRZB9_MH.js";import"./type-YzYuwFG9.js";import"./SearchOutlined-BLcNcmGc.js";import"./Button-DejaZzBC.js";import"./Dropdown-ees5VvWC.js";import"./Overflow-CmFo4jk3.js";import"./focus-BxWsNqjj.js";import"./Loader-vJbmmTbY.js";import"./index-Cxj_l2qe.js";import"./Divider-ja1HbPIW.js";import"./v4-BoP187Zn.js";import"./button-DLIzkXNO.js";import"./wave-C4_7brB4.js";import"./Popover-BHGhJBJm.js";import"./useTranslation-rAGXttfk.js";import"./IconResolver-CW0gFSHw.js";import"./index-DN3gpxtf.js";import"./ResizeInput-CdMqYzZs.js";import"./index-DJ6yuvO4.js";const H=x`
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
