import{T as n,S as E}from"./Palette-CL2qD4Vl.js";import{w as h}from"./withMeta-BwOuJ6tr.js";import{c as M,Z as T,$ as k,a0 as x,R as e,a as b,P as w}from"./iframe-4-PRSI1I.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./preload-helper-Dp1pzeXC.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";const D="Техническая страница для отображения цветов дизайн системы.",R={description:D},L={title:"Design/Colors",component:n,parameters:{docs:{page:h(R)},controls:{exclude:/.*/g}}},o={args:{source:x},render:r=>e.createElement(E,{...r})},s={args:{source:T},render:r=>e.createElement(n,{...r})},t={args:{source:k},render:r=>e.createElement(n,{...r})},a={args:{source:M},render:r=>e.createElement(e.Fragment,null,e.createElement(b,{mode:"info",closable:!1},e.createElement(w,null,"Component tokens is deprecated. Use semantic tokens")),e.createElement(n,{...r}))};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: colors
  },
  render: args => <StaticPalette {...args} />
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: productColors
  },
  render: args => <ThemedPalette {...args} />
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: semanticColors
  },
  render: args => <ThemedPalette {...args} />
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var S,P,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: componentColors
  },
  render: args => <>
      <SectionMessage mode={'info'} closable={false}>
        <P>
          Component tokens is deprecated. Use semantic tokens
        </P>
      </SectionMessage>
      <ThemedPalette {...args} />
    </>
}`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const N=["StaticColors","ProductColors","SemanticColors","ComponentColors"];export{a as ComponentColors,s as ProductColors,t as SemanticColors,o as StaticColors,N as __namedExportsOrder,L as default};
