import{T as x}from"./Palette-CL2qD4Vl.js";import{r as T}from"./StoryComponents-BWv8uEx9.js";import{c as C,r as m,R as u}from"./iframe-4-PRSI1I.js";import{I as c}from"./InputNumber-DjFWqf89.js";import{i as O}from"./InputNumber.stories-BXe4G1pR.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-B7OAA5LN.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const te={title:"Hexa UI Components/Inputs/InputNumber/Stories",component:c,tags:["!autodocs"],...O},n=(e,r,t)=>u.createElement(c,{...e,value:r,onChange:t}),a={render:e=>{const[r,t]=m.useState();return u.createElement(c,{...e,value:r,onChange:t})}},o={render:e=>{const[r,t]=m.useState(150);return T([{label:"default",content:n(e,r,t)},{label:"readonly",content:n({...e,readOnly:!0},150)},{label:"disabled",content:n({...e,disabled:!0},150)},{label:"error",content:n({...e,validationStatus:"error"},r,t)},{label:"success",content:n({...e,validationStatus:"success"},r,t)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}},validationStatus:{control:!1,table:{disable:!0}}}},s={args:{integerOnly:!0},render:e=>{const[r,t]=m.useState();return u.createElement(c,{...e,value:r,onChange:t})}},l={args:{source:C.input_text},render:e=>u.createElement(x,{...e})};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<TextboxNumberProps['value']>();
    return <InputNumber {...args} value={value} onChange={setValue} />;
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,g,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<TextboxNumberProps['value']>(150);
    return renderVariants([{
      label: 'default',
      content: renderInputNumber(args, value, setValue)
    }, {
      label: 'readonly',
      content: renderInputNumber({
        ...args,
        readOnly: true
      }, 150)
    }, {
      label: 'disabled',
      content: renderInputNumber({
        ...args,
        disabled: true
      }, 150)
    }, {
      label: 'error',
      content: renderInputNumber({
        ...args,
        validationStatus: 'error'
      }, value, setValue)
    }, {
      label: 'success',
      content: renderInputNumber({
        ...args,
        validationStatus: 'success'
      }, value, setValue)
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
    },
    validationStatus: {
      control: false,
      table: {
        disable: true
      }
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,I,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    integerOnly: true
  },
  render: args => {
    const [value, setValue] = useState<TextboxNumberProps['value']>();
    return <InputNumber {...args} value={value} onChange={setValue} />;
  }
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var N,y,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_text
  },
  render: args => <ThemedPalette {...args} />
}`,...(V=(y=l.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const ne=["Basic","State","IntegerOnly","ColorTokens"];export{a as Basic,l as ColorTokens,s as IntegerOnly,o as State,ne as __namedExportsOrder,te as default};
