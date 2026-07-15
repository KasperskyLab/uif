import{T as I}from"./Palette-CL2qD4Vl.js";import{R as e,c as k,H as T}from"./iframe-4-PRSI1I.js";import{i as h}from"./Indicator.stories-Ta5vouJw.js";import{I as n,a as l}from"./Indicator-D1HJCmfp.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./withMeta-BwOuJ6tr.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Grid-CDQgOgKy.js";import"./resolveDesignControls-CL29RUJI.js";const N={title:"Hexa UI Components/Indicator/Stories",component:n,tags:["!autodocs"],...h},t={},i=T.span`
  width: 15px;
  height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
`,a={render:o=>e.createElement(e.Fragment,null,e.createElement("div",{style:{background:"#2735448c",borderRadius:5,marginBottom:16}},e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(n,{...o,mode:r}))))),e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(n,{...o,mode:r}))))),argTypes:{mode:{control:!1},border:{control:!1}},args:{border:!0}},s={render:o=>e.createElement(e.Fragment,null,e.createElement("div",{style:{background:"#2735448c",borderRadius:5,marginBottom:16}},e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(n,{...o,mode:r,border:!1}))))),e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(n,{...o,mode:r,border:!1}))))),argTypes:{mode:{control:!1},border:{control:!1}}},d={render:()=>e.createElement(I,{source:k.indicator}),argTypes:{mode:{control:!1},border:{control:!1}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,y,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: IndicatorProps) => <>
      <div style={{
      background: '#2735448c',
      borderRadius: 5,
      marginBottom: 16
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
        </div>
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
      </div>
    </>,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  },
  args: {
    border: true
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: IndicatorProps) => <>
      <div style={{
      background: '#2735448c',
      borderRadius: 5,
      marginBottom: 16
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
        </div>
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
      </div>
    </>,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,C,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ThemedPalette source={componentColors.indicator} />,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Q=["Basic","Modes","WithoutBorder","ColorTokens"];export{t as Basic,d as ColorTokens,a as Modes,s as WithoutBorder,Q as __namedExportsOrder,N as default};
