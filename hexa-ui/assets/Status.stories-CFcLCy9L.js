import{T as M}from"./Palette-CL2qD4Vl.js";import{c as T,G as i,R as e,H as b}from"./iframe-4-PRSI1I.js";import{w as v}from"./withMeta-BwOuJ6tr.js";import{s as P}from"./helpers-BytZKRkB.js";import{a as I}from"./StoryComponents-BWv8uEx9.js";import{o as H}from"./Placeholder-DoG1ulbQ.js";import{M as p}from"./meta-DMfHyE5y.js";import{S as n}from"./Status-DYOQ1RMN.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";const w=["default","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],me={title:"Hexa UI Components/Status",component:n,argTypes:{...P(["theme"])},args:{label:"Status",icon:e.createElement(H,null),testId:"status-test-id",klId:"status-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:v(p)},design:p.pixsoView}},o={},x=b.span`
  padding: 2px 10px;
`,s={render:r=>e.createElement(I,null,w.map(t=>e.createElement(x,{key:t},e.createElement(n,{mode:t,...r}))))},a={render:r=>e.createElement(I,null,w.map(t=>e.createElement(x,{key:t},e.createElement(n,{mode:t,...r})))),args:{icon:void 0}},m={args:{source:T.status},render:r=>e.createElement(M,{...r})};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: StatusProps) => <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,f,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: StatusProps) => <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>,
  args: {
    icon: undefined
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,E,k;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: componentColors.status
  },
  render: args => <ThemedPalette {...args} />
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const ne=["Basic","WithIcons","WithIndicator","ColorTokens"];export{o as Basic,m as ColorTokens,s as WithIcons,a as WithIndicator,ne as __namedExportsOrder,me as default};
