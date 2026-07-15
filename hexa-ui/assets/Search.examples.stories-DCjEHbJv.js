import{T as x}from"./Palette-CL2qD4Vl.js";import{L as T}from"./Locale-b5przm_V.js";import{c as k,r as C,R as e,H as R,T as V}from"./iframe-4-PRSI1I.js";import{E as l}from"./index-C0IykO9V.js";import{S as i}from"./Search-BlloygbR.js";import{s as W}from"./Search.stories-D5h4CB2X.js";import"./useLocalization-45JHytlv.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./Textbox-Dh9d3MYi.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./IconSearch-P_ay4iUp.js";import"./Indicator-D1HJCmfp.js";import"./SearchActive-BuIUfH-Q.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const f=R.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,De={title:"Hexa UI Components/Search/Stories",component:i,tags:["!autodocs"],...W},p={render:r=>{const[t,o]=C.useState("");return e.createElement(f,null,e.createElement(i,{...r,onChange:a=>o(a),onClearClick:()=>o(""),value:t}))}},_=()=>e.createElement(l,{image:l.PRESENTED_IMAGE_SIMPLE,className:"ant-empty-small",description:e.createElement(V,{type:"BTR3"},e.createElement(T,{localizationKey:"common.empty"})),style:{width:"276px",margin:"8px 0"}}),P=Array.from({length:10}).map((r,t)=>({children:`result ${t}`})),s={render:r=>{const[t,o]=C.useState(""),a=P.filter(n=>n.children.indexOf(t)>=0);return e.createElement(f,null,e.createElement(i,{...r,onChange:n=>o(n),onClearClick:()=>o(""),value:t,dropdownOverlay:a.length?a:[{children:e.createElement(_,null)}]}))}},m={args:{source:k.input_search},render:r=>e.createElement(x,{...r})};var c,u,d;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: SearchProps) => {
    const [value, setValue] = useState('');
    return <Wrapper>
        <Search {...args} onChange={value => setValue(value as string)} onClearClick={() => setValue('')} value={value} />
      </Wrapper>;
  }
}`,...(d=(u=p.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,g,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (props: SearchProps) => {
    const [value, setValue] = useState('');
    const overlay = SearchResultsMock.filter(item => item.children.indexOf(value) >= 0);
    return <Wrapper>
        <Search {...props} onChange={value => setValue(value as string)} onClearClick={() => setValue('')} value={value} dropdownOverlay={overlay.length ? overlay : [{
        children: <EmptyData />
      }]} />
      </Wrapper>;
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var v,E,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_search
  },
  render: args => <ThemedPalette {...args} />
}`,...(y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const He=["Basic","WithResult","ColorTokens"];export{p as Basic,m as ColorTokens,s as WithResult,He as __namedExportsOrder,De as default};
