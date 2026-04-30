import{T as x}from"./Palette-BhMnXOZq.js";import{b as i,R as e,c as M,H as T}from"./iframe-WWmuoJVo.js";import{w as v}from"./withMeta-B27OU3Ju.js";import{s as P}from"./helpers-BytZKRkB.js";import{S as I}from"./StoryComponents-_lDaatyR.js";import{l as H}from"./Placeholder-D-9jZmE-.js";import{M as p}from"./meta-DMfHyE5y.js";import{S as n}from"./Status-CS0_VFeB.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Divider-2duFHEPw.js";import"./FormLabel-C5Hc4K2h.js";import"./Markdown-BGmAiIQ8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DwSAzC79.js";import"./Tag-CZpHHsSN.js";import"./TextReducer-9CK0p8eL.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./Group-DGlPc1vl.js";import"./index-toe1S0SQ.js";import"./type-CH-zv0M5.js";import"./colors-CeinHcp_.js";import"./wave-BKxtHpDI.js";import"./Indicator-CgAlXPGm.js";const b=["default","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],te={title:"Hexa UI Components/Status",component:n,argTypes:{...P(["theme"])},args:{label:"Status",icon:e.createElement(H,null),testId:"status-test-id",klId:"status-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:v(p)},design:p.pixsoView}},o={},w=T.span`
  padding: 2px 10px;
`,s={render:r=>e.createElement(I,null,b.map(t=>e.createElement(w,{key:t},e.createElement(n,{mode:t,...r}))))},a={render:r=>e.createElement(I,null,b.map(t=>e.createElement(w,{key:t},e.createElement(n,{mode:t,...r})))),args:{icon:void 0}},m={args:{source:M.status},render:r=>e.createElement(x,{...r})};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const oe=["Basic","WithIcons","WithIndicator","ColorTokens"];export{o as Basic,m as ColorTokens,s as WithIcons,a as WithIndicator,oe as __namedExportsOrder,te as default};
