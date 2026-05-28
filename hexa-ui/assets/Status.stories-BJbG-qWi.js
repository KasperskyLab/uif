import{T as x}from"./Palette-pKPGiK_Z.js";import{b as i,R as e,c as M,H as T}from"./iframe-DGvJ380d.js";import{w as v}from"./withMeta-Cn2dTpV4.js";import{s as P}from"./helpers-BytZKRkB.js";import{S as I}from"./StoryComponents-CK00MLxU.js";import{l as H}from"./Placeholder-BC-YsAW2.js";import{M as p}from"./meta-DMfHyE5y.js";import{S as n}from"./Status-B_rw8rJt.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-C_hi_klS.js";import"./StatusOkOutline-DyiwV4SU.js";import"./Divider-EZz3gDRj.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IWItRl7b.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";import"./type-fFl6OLJD.js";import"./colors-gQKfGPjt.js";import"./wave-CATF4J87.js";import"./Popover-CqARYnm2.js";import"./Indicator-BGiFA17M.js";const b=["default","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],te={title:"Hexa UI Components/Status",component:n,argTypes:{...P(["theme"])},args:{label:"Status",icon:e.createElement(H,null),testId:"status-test-id",klId:"status-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:v(p)},design:p.pixsoView}},o={},w=T.span`
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
