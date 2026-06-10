import{T as x}from"./Palette-XsZRGwvq.js";import{b as i,R as e,c as M,H as T}from"./iframe-DVE_7kq9.js";import{w as v}from"./withMeta-CzPSWtck.js";import{s as P}from"./helpers-BytZKRkB.js";import{S as I}from"./StoryComponents-DU1XkORc.js";import{l as H}from"./Placeholder-BQjnLMm9.js";import{M as p}from"./meta-DMfHyE5y.js";import{S as n}from"./Status-CnWnidjq.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BGulR29O.js";import"./StatusOkOutline-C-l0Ef9W.js";import"./Divider-B0XUs7Vt.js";import"./FormLabel-CyTz6ltR.js";import"./Markdown-bfgL_FF5.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D2gFaQHm.js";import"./Tag-osrmA0i2.js";import"./TextReducer-Ct5Blcav.js";import"./StatusDangerSolid1-jJjmvO6K.js";import"./Group-Deg5VM3T.js";import"./index-DGIJDX9_.js";import"./type-CaOsV2Rp.js";import"./colors-Z4HTaick.js";import"./wave-D4avGR4B.js";import"./Indicator-BIasTRaI.js";const b=["default","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],te={title:"Hexa UI Components/Status",component:n,argTypes:{...P(["theme"])},args:{label:"Status",icon:e.createElement(H,null),testId:"status-test-id",klId:"status-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:v(p)},design:p.pixsoView}},o={},w=T.span`
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
