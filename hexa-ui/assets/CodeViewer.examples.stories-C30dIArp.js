import{C as x,j as U}from"./CodeViewer-BmyiNSrY.js";import{T as $}from"./Palette-DXL8UiT3.js";import{a as q}from"./StoryComponents--bOGC0xv.js";import{c as D,r as G,O as K,R as t,H as Q}from"./iframe-DedYZBTA.js";import{h as Z,j as Y,t as ee,x as re,y as te,c as ae,b as oe}from"./CodeViewer.stories-LIDyaU08.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./index-Chjiymov.js";import"./ResizeInput-Bwz4NNbm.js";import"./StatusWarningSolid-BBMHc-36.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./withMeta-DvkmiJqW.js";import"./DocPageLayout-ZmDutUur.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Badge-MGlXnKsn.js";import"./Indicator-Bx9eTEZ-.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const ne=Q.div`
  font-size: 12px;
  border: 1px solid lightgray;
  padding: 4px;
  white-space: pre-wrap;
  ${({theme:r})=>r==="light"?"color: black;":"color: white;"}
`,Ie={title:"Hexa UI Components/CodeViewer/Stories",component:x,tags:["!autodocs"],...ae},s={render:r=>{const[o,e]=G.useState(oe),a=K();return t.createElement(q,null,t.createElement(x,{...r,onChange:e}),t.createElement(ne,{theme:a.key},"Current value:",t.createElement("br",null),o))}},i={args:{initialValue:Z,language:"html"}},m={args:{initialValue:Y,language:"json"}},se=r=>async e=>{const a=[],n=e.state.doc.toString();return n.includes("hello")||a.push({from:n.indexOf("title"),to:n.indexOf("title")+5,message:"Error",severity:r}),a};function ie(){const r=o=>{const e=o.matchBefore(/\w*/);return(e==null?void 0:e.from)===(e==null?void 0:e.to)&&!o.explicit?null:{from:e==null?void 0:e.from,options:[{label:"match",type:"keyword"},{label:"hello",type:"variable",info:"(World)"},{label:"magic",type:"text",apply:"⠁⭒*.✩.*⭒⠁",detail:"macro"}]}};return U.data.of({autocomplete:r})}const l={args:{initialValue:Y,language:"json",resizeAxis:"y",width:1e3,height:300,completions:ie(),linter:se("error")}},c={args:{initialValue:re,language:"xml"}},p={args:{initialValue:te,language:"yara"}},u={args:{initialValue:ee,language:"tsx",width:600,height:600}},h=r=>async e=>{const a=[],n=e.state.doc.toString();return n.includes("function main(")||a.push({from:0,to:n.length,message:"Function should include a `main` function for code execution",severity:r}),a},g={render:r=>t.createElement(t.Fragment,null,t.createElement(x,{...r,linter:h("error")}),t.createElement(x,{...r,linter:h("warning")}))},d={args:{source:D.input_code_viewer},render:r=>t.createElement($,{...r})};var C,E,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: CodeViewerPropsStory) => {
    const [currentValue, setCurrentValue] = useState(basicExample);
    const theme = useTheme();
    return <StoryColumn>
        <CodeViewerComponent {...args} onChange={setCurrentValue} />
        <ValueContainer theme={theme.key}>
          Current value:<br />{currentValue}
        </ValueContainer>
      </StoryColumn>;
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,f,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    initialValue: htmlExample,
    language: 'html'
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,L,b;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json'
  }
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var T,j,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json',
    resizeAxis: 'y',
    width: 1000,
    height: 300,
    completions: createCustomCompletions(),
    linter: createJSONCustomLinter('error')
  }
}`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var k,v,J;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    initialValue: xmlExample,
    language: 'xml'
  }
}`,...(J=(v=c.parameters)==null?void 0:v.docs)==null?void 0:J.source}}};var N,_,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialValue: yaraExample,
    language: 'yara'
  }
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var W,M,P;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    initialValue: tsxExample,
    language: 'tsx',
    width: 600,
    height: 600
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var X,z,B;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (args: CodeViewerPropsStory) => <>
      <CodeViewerComponent {...args} linter={createCustomLinter('error')} />
      <CodeViewerComponent {...args} linter={createCustomLinter('warning')} />
    </>
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var A,F,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_code_viewer
  },
  render: args => <ThemedPalette {...args} />
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const Ue=["Basic","ExampleHTML","ExampleJSON","ExampleJSONWithCompletions","ExampleXML","ExampleYara","ExampleTSX","WithLinter","ColorTokens"];export{s as Basic,d as ColorTokens,i as ExampleHTML,m as ExampleJSON,l as ExampleJSONWithCompletions,u as ExampleTSX,c as ExampleXML,p as ExampleYara,g as WithLinter,Ue as __namedExportsOrder,Ie as default};
