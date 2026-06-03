import{T as x}from"./Palette-C_Ocq6U1.js";import{b as i,R as e,c as M,H as T}from"./iframe-DNxUu9EZ.js";import{w as v}from"./withMeta-CSumKzG1.js";import{s as P}from"./helpers-BytZKRkB.js";import{S as I}from"./StoryComponents-P_esa1sT.js";import{l as H}from"./Placeholder-D-llqBgK.js";import{M as p}from"./meta-DMfHyE5y.js";import{S as n}from"./Status-CE81OoBQ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-B9jVBwYf.js";import"./StatusOkOutline-HmfsHsEj.js";import"./Divider-BqwESatj.js";import"./FormLabel-Cx4AUgy7.js";import"./Markdown-CCHl0-MZ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CXyjrR-G.js";import"./Tag-Bg9hE3PN.js";import"./TextReducer-BbcQcxF5.js";import"./StatusDangerSolid1-B08ZoF4r.js";import"./Group-COY30YIT.js";import"./index-qOx2FGCH.js";import"./type-rfDjHVUQ.js";import"./colors-5zN7FiNY.js";import"./wave-DYMnJ7p6.js";import"./Indicator-DQaQksXG.js";const b=["default","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],te={title:"Hexa UI Components/Status",component:n,argTypes:{...P(["theme"])},args:{label:"Status",icon:e.createElement(H,null),testId:"status-test-id",klId:"status-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:v(p)},design:p.pixsoView}},o={},w=T.span`
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
