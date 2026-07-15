import{c as X,r as i,R as t,I as Y}from"./iframe-4-PRSI1I.js";import{a as Q}from"./StoryComponents-BWv8uEx9.js";import{T as Z}from"./Palette-CL2qD4Vl.js";import{T as $}from"./Textbox-Dh9d3MYi.js";import{R as n}from"./Radio-DUuhhrf2.js";import{r as ee}from"./Radio.stories-BMEKrf01.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./useMergedState-5V6OeSqY.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./index-CsWSl5Dl.js";import"./index-zCYDgB3k.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const st={title:"Hexa UI Components/Radio/Stories",component:n,tags:["!autodocs"],...ee},s=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[o,r]=i.useState();return t.createElement(n,{...e,value:o,onChange:a=>r(a.target.value),options:s})}},u={render:e=>{const[o,r]=i.useState();return t.createElement(n,{...e,value:o,onChange:a=>r(a.target.value),options:s,vertical:!1})},name:"Inline Options"},m={render:e=>t.createElement(Q,null,t.createElement(n,{...e,disabled:!0,value:"1",options:s}),t.createElement(n,{...e,disabled:!0,options:s}))},c={render:e=>t.createElement(Q,null,t.createElement(n,{...e,readonly:!0,value:"1",options:s}),t.createElement(n,{...e,readonly:!0,options:s}))},d={render:e=>{const[o,r]=i.useState();return t.createElement(n,{...e,invalid:!0,value:o,onChange:a=>r(a.target.value),options:s})}},te=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],v={render:e=>{const[o,r]=i.useState();return t.createElement(n,{...e,value:o,onChange:a=>r(a.target.value),options:te})},name:"With Description"},g={render:e=>{const[o,r]=i.useState(),a=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return t.createElement(Y,{getPopupContainer:()=>document.body},t.createElement(n,{...e,value:o,onChange:l=>r(l.target.value),options:a}))},name:"With Tooltip"},O={render:e=>{const[o,r]=i.useState(),a=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:t.createElement($,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return t.createElement(n,{...e,value:o,onChange:l=>r(l.target.value),options:a})},name:"With Dependent Element"},b={render:e=>{const[o,r]=i.useState(),a=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return t.createElement(n,{...e,value:o,onChange:l=>r(l.target.value),options:a})}},h={args:{source:X.radio},render:e=>t.createElement(Z,{...e})};var S,C,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} />;
  }
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,V,y;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} vertical={false} />;
  },
  name: 'Inline Options'
}`,...(y=(V=u.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var P,f,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <StoryColumn>
      <Radio {...args} disabled value="1" options={basicOptions} />
      <Radio {...args} disabled options={basicOptions} />
    </StoryColumn>
}`,...(D=(f=m.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var T,W,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <StoryColumn>
      <Radio {...args} readonly value="1" options={basicOptions} />
      <Radio {...args} readonly options={basicOptions} />
    </StoryColumn>
}`,...(q=(W=c.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var x,I,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} invalid value={value} onChange={e => setValue(e.target.value)} options={basicOptions} />;
  }
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,B,_;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={withDescriptionOptions} />;
  },
  name: 'With Description'
}`,...(_=(B=v.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var H,U,j;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const tooltipOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      tooltip: 'Подсказка к опции'
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <PopupConfigProvider getPopupContainer={() => document.body}>
        <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={tooltipOptions} />
      </PopupConfigProvider>;
  },
  name: 'With Tooltip'
}`,...(j=(U=g.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var z,A,F;O.parameters={...O.parameters,docs:{...(z=O.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const dependentOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      description: 'Описание опции',
      dependentElement: <Textbox placeholder="Зависимый элемент" />
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={dependentOptions} />;
  },
  name: 'With Dependent Element'
}`,...(F=(A=O.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const requiredOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1',
      required: true
    }, {
      label: 'Option 2',
      value: '2',
      required: true
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={requiredOptions} />;
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    source: componentColors.radio
  },
  render: args => <ThemedPalette {...args} />
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const it=["Basic","InlineOptions","Disabled","Readonly","Invalid","WithDescription","WithTooltip","WithDependentElement","Required","ColorTokens"];export{p as Basic,h as ColorTokens,m as Disabled,u as InlineOptions,d as Invalid,c as Readonly,b as Required,O as WithDependentElement,v as WithDescription,g as WithTooltip,it as __namedExportsOrder,st as default};
