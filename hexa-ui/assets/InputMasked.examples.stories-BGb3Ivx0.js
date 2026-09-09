import{r as f}from"./StoryComponents--bOGC0xv.js";import{r as O,R as c}from"./iframe-DedYZBTA.js";import{I as P}from"./InputMasked-Bbhb0bxg.js";import{i as R,S as k,g as I,R as M}from"./InputMasked.stories-gDvYX_iR.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./useGlobalStyles-DdWamh97.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./resolveDesignControls-CFhBuB_d.js";const W={title:"Hexa UI Components/Inputs/InputMasked/Stories",component:P,tags:["!autodocs"],...R},n={render:({mask:t,value:e,onChange:r,...g})=>{const[v,b]=O.useState(e??"");return c.createElement(k,{...g,$disableRtl:!M.includes(t),maskOptions:I(t),value:v,onChange:(o,S)=>{b(o),r==null||r(o,S)}})}},a=(t,e)=>c.createElement(k,{...t,$disableRtl:!M.includes(e),maskOptions:I(e)}),s={args:{value:void 0,testId:void 0,klId:void 0},render:({mask:t,...e})=>f([{label:"phone",content:a(e,"Phone")},{label:"date",content:a(e,"Date")},{label:"IP address",content:a(e,"IP")},{label:"MAC address",content:a(e,"MAC")}])};var d,p,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    mask,
    value: valueProp,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(valueProp ?? '');
    return <StyledInputMasked {...args} $disableRtl={!RTLMasks.includes(mask)} maskOptions={getInputMaskOptions(mask)} value={value} onChange={(newValue, maskOptions) => {
      setValue(newValue);
      onChange?.(newValue, maskOptions);
    }} />;
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: undefined,
    testId: undefined,
    klId: undefined
  },
  render: ({
    mask: _mask,
    ...args
  }) => renderVariants([{
    label: 'phone',
    content: renderInputMasked(args, 'Phone')
  }, {
    label: 'date',
    content: renderInputMasked(args, 'Date')
  }, {
    label: 'IP address',
    content: renderInputMasked(args, 'IP')
  }, {
    label: 'MAC address',
    content: renderInputMasked(args, 'MAC')
  }], true)
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const X=["Basic","CommonMasks"];export{n as Basic,s as CommonMasks,X as __namedExportsOrder,W as default};
