import{T as u}from"./Palette-CL2qD4Vl.js";import{a as g,b as C}from"./StoryComponents-BWv8uEx9.js";import{c as S,R as r,H as v}from"./iframe-4-PRSI1I.js";import{D as a}from"./Divider-Cb8Cmzqg.js";import{d as E}from"./Divider.stories-DA05_lpT.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const n=v.div`
  width: 50px;
  height: 50px;
  background: grey;
`,A={title:"Hexa UI Components/Divider/Stories",component:a,tags:["!autodocs"],...E},o={render:e=>{const l=e.direction==="horizontal"?g:C;return r.createElement(l,null,r.createElement(n,null),r.createElement(a,{...e}),r.createElement(n,null),r.createElement(a,{...e}),r.createElement(n,null))}},t={args:{source:S.divider},render:e=>r.createElement(u,{...e})};var m,i,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    const Wrapper = args.direction === 'horizontal' ? StoryColumn : StoryWrapper;
    return <Wrapper>
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
      </Wrapper>;
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: componentColors.divider
  },
  render: args => <ThemedPalette {...args} />
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const F=["Basic","ColorTokens"];export{o as Basic,t as ColorTokens,F as __namedExportsOrder,A as default};
