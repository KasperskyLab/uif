import{r as E}from"./StoryComponents--bOGC0xv.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{r as p,R as O}from"./iframe-DedYZBTA.js";import{T as w}from"./Textbox-B-hgsSTM.js";import{t as I}from"./Textarea.stories-DAaFdGWp.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./useGlobalStyles-DdWamh97.js";import"./InputMasked-Bbhb0bxg.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./InputNumber-ZzYxxSm4.js";import"./index-DTSNSACu.js";import"./SearchOutlined-DnINVVX9.js";import"./button-D1isEG_A.js";import"./useMergedState-Rc5-DXZ5.js";import"./InputPassword-C-5Li4PE.js";import"./Button-Dn3YNhT7.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(textareaValue);
    const [emptyValue, setEmptyValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 400
    }}>
        {renderTextarea(args, value, v => setValue(v))}
        {renderTextarea({
        ...args,
        placeholder: 'Empty textarea',
        rows: 5
      }, emptyValue, v => setEmptyValue(v))}
      </div>;
  }
}`,...(x=(c=o.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var y,b,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(textareaValue);
    return renderVariants([{
      label: 'default',
      content: renderTextarea(args, value, v => setValue(v))
    }, {
      label: 'readonly',
      content: renderTextarea({
        ...args,
        readOnly: true
      }, textareaValue)
    }, {
      label: 'disabled',
      content: renderTextarea({
        ...args,
        disabled: true
      }, textareaValue)
    }], true);
  },
  argTypes: {
    disabled: {
      control: false,
      table: {
        disable: true
      }
    },
    readOnly: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  args: {
    disabled: false,
    readOnly: false
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var V,g,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => renderVariants(validationStatuses.map(status => ({
    label: status,
    content: renderTextarea({
      ...args,
      validationStatus: status
    }, textareaValue)
  })), true)
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,T,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Текст в поле с ограничением.');
    return renderTextarea({
      ...args,
      showCount: true,
      maxLength: 100
    }, value, v => setValue(v));
  }
}`,...(h=(T=m.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const Oe=["Basic","State","ValidationStatus","WithCounter"];export{o as Basic,l as State,i as ValidationStatus,m as WithCounter,Oe as __namedExportsOrder,Ee as default};
