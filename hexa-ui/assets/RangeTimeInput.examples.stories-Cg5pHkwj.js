import{T as Q}from"./Palette-CL2qD4Vl.js";import{c as i,r as e,R as t,Q as U,S as j}from"./iframe-4-PRSI1I.js";import{R as r}from"./RangeTimeInput-CYLai2LW.js";import{T as l}from"./TimeInput-ufExk_If.js";import{r as q}from"./RangeTimeInput.stories-ClQTHPRg.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./RangeSeparator-C-wzpZs9.js";import"./Textbox-Dh9d3MYi.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./wave-DF9O9Ycp.js";import"./useMergedState-5V6OeSqY.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Divider-Cb8Cmzqg.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./types-uVm4-zKu.js";import"./resolveDesignControls-CL29RUJI.js";const Jt={title:"Hexa UI Components/DateTime Pickers/RangeTimeInput/Stories",component:r,tags:["!autodocs"],...q},p={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState();return t.createElement(r,{...n,valueStart:a,valueEnd:s,onChangeStart:o,onChangeEnd:m})}},c={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState(),[w,R]=e.useState(),[k,V]=e.useState(),[F,x]=e.useState(),[P,z]=e.useState(),[B,y]=e.useState(),[D,O]=e.useState();return t.createElement(t.Fragment,null,"HH:mm",t.createElement(r,{...n,format:"HH:mm",valueStart:a,valueEnd:s,onChangeStart:o,onChangeEnd:m}),t.createElement("br",null),"HH:mm:ss",t.createElement(r,{...n,format:"HH:mm:ss",valueStart:w,valueEnd:k,onChangeStart:R,onChangeEnd:V}),t.createElement("br",null),"HH:mm:ss.ms",t.createElement(r,{...n,format:"HH:mm:ss.ms",valueStart:F,valueEnd:P,onChangeStart:x,onChangeEnd:z}),t.createElement("br",null),"h:mm am/pm",t.createElement(r,{...n,format:"h:mm aaa",valueStart:B,valueEnd:D,onChangeStart:y,onChangeEnd:O}))}},d={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState();return t.createElement(t.Fragment,null,t.createElement(U,null,"Range time picker is composition of 2 TimeInputs"),t.createElement(j,{gap:4,direction:"horizontal",wrap:"nowrap"},t.createElement(l,{...n,value:a,onChange:o,format:"HH:mm:ss",placeholder:"__:__:__"}),"– ",t.createElement(l,{...n,value:s,onChange:m,format:"HH:mm:ss",placeholder:"__:__:__"})))}},u={args:{source:{input_datetime_picker:i.input_datetime_picker,calendar_dropdown:i.calendar_dropdown,calendar_dropdown_button:i.calendar_dropdown_button,calendar_preset_button:i.calendar_preset_button}},render:n=>t.createElement(Q,{...n})};var S,g,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [valueStart, setValueStart] = useState<string>();
    const [valueEnd, setValueEnd] = useState<string>();
    return <RangeTimeInput {...args} valueStart={valueStart} valueEnd={valueEnd} onChangeStart={setValueStart} onChangeEnd={setValueEnd} />;
  }
}`,...(E=(g=p.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,h,H;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [start1, setStart1] = useState<string>();
    const [end1, setEnd1] = useState<string>();
    const [start2, setStart2] = useState<string>();
    const [end2, setEnd2] = useState<string>();
    const [start3, setStart3] = useState<string>();
    const [end3, setEnd3] = useState<string>();
    const [start4, setStart4] = useState<string>();
    const [end4, setEnd4] = useState<string>();
    return <>
        HH:mm
        <RangeTimeInput {...args} format="HH:mm" valueStart={start1} valueEnd={end1} onChangeStart={setStart1} onChangeEnd={setEnd1} />
        <br />
        HH:mm:ss
        <RangeTimeInput {...args} format="HH:mm:ss" valueStart={start2} valueEnd={end2} onChangeStart={setStart2} onChangeEnd={setEnd2} />
        <br />
        HH:mm:ss.ms
        <RangeTimeInput {...args} format="HH:mm:ss.ms" valueStart={start3} valueEnd={end3} onChangeStart={setStart3} onChangeEnd={setEnd3} />
        <br />
        h:mm am/pm
        <RangeTimeInput {...args} format="h:mm aaa" valueStart={start4} valueEnd={end4} onChangeStart={setStart4} onChangeEnd={setEnd4} />
      </>;
  }
}`,...(H=(h=c.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var C,T,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,I,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: {
      input_datetime_picker: componentColors.input_datetime_picker,
      calendar_dropdown: componentColors.calendar_dropdown,
      calendar_dropdown_button: componentColors.calendar_dropdown_button,
      calendar_preset_button: componentColors.calendar_preset_button
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(b=(I=u.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const Kt=["Basic","Variants","TimeInputComposition","ColorTokens"];export{p as Basic,u as ColorTokens,d as TimeInputComposition,c as Variants,Kt as __namedExportsOrder,Jt as default};
