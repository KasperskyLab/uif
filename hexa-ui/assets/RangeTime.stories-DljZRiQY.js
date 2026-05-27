import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-ko-fN4O0.js";import{b as E}from"./imaskDateOptionsGenerator-C4CJZvky.js";import{R as C}from"./RangeSeparator-CvM3E_Y-.js";import{T as a}from"./TimeInput-Yx2vDeBW.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-Csaj_p0D.js";import"./index-Chjiymov.js";import"./Textbox-BJxW5It8.js";import"./useGlobalStyles-DS9Cj9y7.js";import"./useThemedTextbox-Bv0wbbSv.js";import"./typesHelpers-tpz7Of7L.js";import"./index-DVMYwtGz.js";import"./Advertisement-MM8kkiWS.js";import"./ArrowRightMini-DF1T6rop.js";import"./ArrowDown-CYBvo45C.js";import"./ArrowLeft-_-J_3ena.js";import"./Calendar-BMEkZ_wW.js";import"./ArrowRight-DwyJImV1.js";import"./ArrowUp1-BGuAPv_N.js";import"./ExpandUp-DeZADqoy.js";import"./Server-DcRuVry7.js";import"./ArrowForward-BawOyY8N.js";import"./Upload-B_9xiPVv.js";import"./StatusDangerOutlineSquare-kgdVIKQr.js";import"./Help-BDgtW-2j.js";import"./Kira-CMGhl-UP.js";import"./Menu2-DWnsk7T9.js";import"./Menu3-CoJig7cy.js";import"./Unpin-Gisfo2Or.js";import"./Placeholder-BUqYHWNp.js";import"./Plus-B8yyJ2Yj.js";import"./Search1-DPN-mJqd.js";import"./Settings-BbEgSsnZ.js";import"./SettingsGear-DCpcnPJx.js";import"./StatusDangerSolid1-D6q9y8uE.js";import"./StatusOkSolid-s3hNP5SL.js";import"./ArrowRight-Bb1kX9bm.js";import"./StatusWarningOutline-DM7Bulb6.js";import"./StatusDangerSolid1-DVKSKjiq.js";import"./ShieldOkSolid-Dq914kEE.js";import"./StatusOkOutline-Cn4WVFef.js";import"./StatusWarningSolid-CmlcJzjw.js";import"./ArrowDownSolid-C6Ce0L8K.js";import"./ArrowRightSolid-Czcl91ns.js";import"./AccountSearch-BxCEfrN7.js";import"./Connection-2reQWva0.js";import"./KeyCode-BDHZ8Wip.js";import"./type-D7k2Xvr8.js";import"./SearchOutlined-DX_F6-bx.js";import"./Button-BAMDHgQb.js";import"./Loader-iMImGdt_.js";import"./index-DcNvhb6C.js";import"./button-B01puASn.js";import"./wave-mrEb6LZp.js";import"./Dropdown-CWozQ77e.js";import"./Overflow-BIuCMRyD.js";import"./focus-Ch4Yfw29.js";import"./Divider-Cb94-KaG.js";import"./v4-BoP187Zn.js";import"./useTranslation-Bz44dUMq.js";import"./IconResolver-Cs1QFkR2.js";import"./index-DN-QLxXT.js";import"./ResizeInput-POdSeeyC.js";import"./index-B4ECjyEQ.js";import"./Popover-CupUWmel.js";const H=x`
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
