import{a0 as x,R as e,H as _,b as c,r as p,ap as S,S as v}from"./iframe-DGvJ380d.js";import{b as E}from"./imaskDateOptionsGenerator-DALiqpzQ.js";import{R as C}from"./RangeSeparator-aB1orO4M.js";import{T as a}from"./TimeInput-BmX5BNLC.js";import{t as I}from"./types-c4IFTsjS.js";import"./preload-helper-C1FmrZbK.js";import"./input-BgwJBdwY.js";import"./index-Chjiymov.js";import"./Textbox-Bj82W6hS.js";import"./useGlobalStyles-BnCND3-l.js";import"./useThemedTextbox-DDqIKI60.js";import"./typesHelpers-tpz7Of7L.js";import"./index-D_eARAu6.js";import"./Advertisement-DZMq2A2I.js";import"./ArrowRightMini-BtUJy5zG.js";import"./ArrowDown-JHp814TH.js";import"./ArrowLeft-QlQoL3Uv.js";import"./Calendar-jD1LiYvB.js";import"./ArrowRight-BIq5osfB.js";import"./ArrowUp1-D978ntm3.js";import"./ExpandUp-DwZ0xw3Z.js";import"./Server-bjy7rWzI.js";import"./ArrowForward-yn00LQNd.js";import"./Upload-Bbcz3gJY.js";import"./StatusDangerOutlineSquare-Xa4nOcc_.js";import"./Help-BHz4HfbM.js";import"./Kira-DCerKgdo.js";import"./Menu2-A8wINVoI.js";import"./Menu3-aE1LzNse.js";import"./Unpin-yxiIE5eY.js";import"./Placeholder-BC-YsAW2.js";import"./Plus-mV3zMH_V.js";import"./Search1-Ol0-CDvK.js";import"./Settings-D_C3tDq9.js";import"./SettingsGear-Bo8a4pcF.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./StatusOkSolid-DiDlzqjt.js";import"./ArrowRight-CRc5t_d0.js";import"./StatusWarningOutline-CyfwEAaI.js";import"./StatusDangerSolid1-BUjHgziF.js";import"./ShieldOkSolid-LRR42IKW.js";import"./StatusOkOutline-DyiwV4SU.js";import"./StatusWarningSolid-bKJvYwK4.js";import"./ArrowDownSolid-DAghjM8o.js";import"./ArrowRightSolid-C5uV6-Lq.js";import"./AccountSearch-BhlMg2QY.js";import"./Connection-DAxkMV1X.js";import"./KeyCode-9RiNU2cC.js";import"./type-fFl6OLJD.js";import"./SearchOutlined-ByulGkQJ.js";import"./Button-wrPqqegB.js";import"./Dropdown-ZwTwTLgN.js";import"./Overflow-C7Z2yQ6d.js";import"./focus-BMBywfst.js";import"./Loader-CMdXHI8c.js";import"./index-ep_dZgWZ.js";import"./Divider-EZz3gDRj.js";import"./v4-BoP187Zn.js";import"./button-MWvA5E08.js";import"./wave-CATF4J87.js";import"./useTranslation-DicaTb9e.js";import"./IconResolver-ByaTDbvK.js";import"./index-CNr6redr.js";import"./ResizeInput-NOLn3HZy.js";import"./index-BR6sRKB7.js";import"./Popover-CqARYnm2.js";const H=x`
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
