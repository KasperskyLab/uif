import{M as v,R as e,r as T,L as K,H as C}from"./iframe-DedYZBTA.js";import{w as x}from"./withMeta-DvkmiJqW.js";import{s as b}from"./helpers-BytZKRkB.js";import{B as E}from"./Button-Dn3YNhT7.js";import{T as m}from"./Textbox-B-hgsSTM.js";import{T as p}from"./Tag-BKPu3-sD.js";import{K as l}from"./KeyValue-B921E_8r.js";import{C as W}from"./Checkbox-CNZ65EGY.js";import{R as f}from"./Radio-Cpvj7bye.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ZmDutUur.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./TextReducer-DfctGdJH.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./wave-MdFmrsKf.js";import"./FormLabel-a_agw1kt.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./button-D1isEG_A.js";import"./useGlobalStyles-DdWamh97.js";import"./InputMasked-Bbhb0bxg.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./InputNumber-ZzYxxSm4.js";import"./index-DTSNSACu.js";import"./SearchOutlined-DnINVVX9.js";import"./InputPassword-C-5Li4PE.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./index-D9mMt9l0.js";import"./Group-3Po5iaS9.js";import"./useId-D-iZuP_C.js";import"./generateId-BXJELych.js";import"./index-RNU6oZ57.js";import"./index-B_L1GtX7.js";import"./index-Cgmls7nb.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Ключ: Значение»"},S="KeyValue",B="Используется для структурирования информации.",H="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",I={dod:w,component:S,usage:B,description:H},R=[{pairKey:"Input",pairValue:e.createElement(m,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(m.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(E,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:e.createElement(W,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:e.createElement(f,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:e.createElement("div",null,e.createElement(p,{mode:"red",size:"small"},"Tag"),e.createElement(p,{mode:"marengo",size:"small"},"Tag"),e.createElement(p,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:e.createElement(K,{href:"#",target:"_blank",size:"medium"},"Link")}],je={title:"Deprecated/KeyValue",component:l,argTypes:{keyTooltip:{control:{type:"text"}},...b(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:R,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[v.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:x(I)}}},a={},z=C.div`
  ${({keyWidth:t,valueWidth:r})=>`
    .kl-custom-key {
      min-width: ${t}px;
    }
      
    .kl-custom-value {
      width: ${r}px;
    }
  `}
`,o={render:({keyWidth:t,valueWidth:r,...s})=>e.createElement(z,{keyWidth:t,valueWidth:r},e.createElement(l,{...s,wrapperClasses:{keyClassName:"kl-custom-key",valueClassName:"kl-custom-value"}})),args:{keyWidth:200,valueWidth:400}},i={render:()=>{const[t,r]=T.useState("");return e.createElement(l,{data:[{key:"unique_key",pairKey:"Input",pairValue:e.createElement(m,{value:t,onChange:s=>{r(s)}})}]})}};var n,u,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,y,k;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    keyWidth,
    valueWidth,
    ...rest
  }: KeyValueCustomClassesProps) => {
    return <KeyValueWrapper keyWidth={keyWidth} valueWidth={valueWidth}>
        <KeyValue {...rest} wrapperClasses={{
        keyClassName: 'kl-custom-key',
        valueClassName: 'kl-custom-value'
      }} />
      </KeyValueWrapper>;
  },
  args: {
    keyWidth: 200,
    valueWidth: 400
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var V,h,g;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <KeyValue data={[{
      key: 'unique_key',
      pairKey: 'Input',
      pairValue: <Textbox value={value} onChange={(newValue: string) => {
        setValue(newValue);
      }} />
    }]} />;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Ae=["Basic","CustomClasses","KeyValueWithUpdateValueState"];export{a as Basic,o as CustomClasses,i as KeyValueWithUpdateValueState,Ae as __namedExportsOrder,je as default};
