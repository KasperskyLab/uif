import{T as P}from"./Palette-oU4WYbWy.js";import{ak as u,a1 as z,al as b,a0 as V,b as g,R as o,c as B,z as l,H as m}from"./iframe-zz6a49H8.js";import{w as R}from"./withMeta-CjSZnBk7.js";import{M as k,c as i,w as p}from"./common-CTj6igHM.js";import{u as d}from"./useThemedScrollbar-DpI4tOKz.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";const r=z(),h=V`
  ::-webkit-scrollbar {
    height: ${u[4]}px;
    width: ${u[4]}px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${r("enabled.trackColor")};
    border-radius: ${b[2]}px;
  }
    
  ::-webkit-scrollbar-thumb {
    background-color: ${r("enabled.thumbColor")};
    border-radius: ${b[2]}px;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: ${r("hover.trackColor")};
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${r("hover.thumbColor")};
  }

  ::-webkit-scrollbar-track:active {
    background-color: ${r("active.trackColor")};
  }
    
  ::-webkit-scrollbar-thumb:active {
    background-color: ${r("active.thumbColor")};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${r("enabled.trackColor")};
  }

  scrollbar-color: ${r("enabled.thumbColor")} ${r("enabled.trackColor")};
`,J={title:"Hexa UI Components/Scrollbar/Browser",parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:R(k)},design:k.pixsoView}},D=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow-y: scroll;
  overflow-x: hidden;
  ${p}
  ${h}
`,F=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow-y: hidden;
  overflow-x: scroll;
  p { width: 800px; }
  ${p}
  ${h}
`,M=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow: scroll;
  p { width: 600px; }
  ${p}
  ${h}
`,s={render:()=>{const e=l(),{cssConfig:t}=d({theme:e.key});return o.createElement(D,{cssConfig:t,theme:e.key},o.createElement("p",null,i))}},n={render:()=>{const e=l(),{cssConfig:t}=d({theme:e.key});return o.createElement(F,{cssConfig:t,theme:e.key},o.createElement("p",null,i))}},a={render:()=>{const e=l(),{cssConfig:t}=d({theme:e.key});return o.createElement(M,{cssConfig:t,theme:e.key},o.createElement("p",null,i))}},c={args:{source:B.scrollbar},render:e=>o.createElement(P,{...e})};var C,f,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <VerticalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </VerticalWrapper>;
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var $,v,y;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <HorizontalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </HorizontalWrapper>;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,x,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <Wrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </Wrapper>;
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var E,W,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    source: componentColors.scrollbar
  },
  render: args => <ThemedPalette {...args} />
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const K=["Vertical","Horizontal","Both","ColorTokens"];export{a as Both,c as ColorTokens,n as Horizontal,s as Vertical,K as __namedExportsOrder,J as default};
