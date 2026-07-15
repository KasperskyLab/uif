import{T as y}from"./Palette-CL2qD4Vl.js";import{c as P,R as m}from"./iframe-4-PRSI1I.js";import{h as A}from"./HelpMessage.stories-sgmq3-jT.js";import{H as w}from"./HelpMessage-B93eXAoX.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./withMeta-BwOuJ6tr.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./resolveDesignControls-CL29RUJI.js";const R=["error","warning","success","common"],ee={title:"Hexa UI Components/HelpMessage/Stories",component:w,tags:["!autodocs"],...A},e={args:{mode:"error",text:"Error message text"}},r={args:{mode:"warning",text:"Warning message text"}},s={args:{mode:"success",text:"Success message text"}},o={args:{mode:"common",text:"Common message text"}},t={render:n=>m.createElement(m.Fragment,null,R.map(c=>m.createElement(w,{...n,key:c,mode:c})))},a={args:{source:P.help_message},render:n=>m.createElement(y,{...n})};var p,g,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    mode: 'error',
    text: 'Error message text'
  }
}`,...(i=(g=e.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'warning',
    text: 'Warning message text'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,S,M;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: 'success',
    text: 'Success message text'
  }
}`,...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var C,h,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mode: 'common',
    text: 'Common message text'
  }
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var H,f,T;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: HelpMessageProps) => <>
      {helpMessageModes.map(mode => <HelpMessage {...args} key={mode} mode={mode} />)}
    </>
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,W,_;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    source: componentColors.help_message
  },
  render: args => <ThemedPalette {...args} />
}`,...(_=(W=a.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const re=["Error","Warning","Success","Common","AllModes","ColorTokens"];export{t as AllModes,a as ColorTokens,o as Common,e as Error,s as Success,r as Warning,re as __namedExportsOrder,ee as default};
