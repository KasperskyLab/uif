import{T as b}from"./Palette-CL2qD4Vl.js";import{c as P,M as t,R as r,H as T}from"./iframe-4-PRSI1I.js";import{L as c}from"./Loader-CzWCOjAf.js";import{l as $}from"./Loader.stories-CJ7BBXEn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CJ8XlVHE.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";const G={title:"Hexa UI Components/Loader/Stories",component:c,tags:["!autodocs"],...$},s={},n={render:e=>r.createElement("div",{style:{height:"calc(100vh - 16 * 2px)"}},r.createElement(c,{...e})),args:{centered:!0}},M=T.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,H=T.div`
  padding: 8px;
  border-radius: 8px;
  ${e=>{var o;return e.mode==="inverted"&&`background-color: ${(o=e.theme.colors)==null?void 0:o.bg["base-invert"]}`}}
`,d={render:e=>{const o=["default","inverted"];return r.createElement(M,null,o.map(a=>r.createElement(H,{key:a,mode:a},r.createElement(c,{mode:a,tip:`${a} loader`,...e}))))},args:{size:t.Large}},i={render:e=>{const o=[t.ExtraSmall,t.Small,t.Medium,t.Large,t.ExtraLarge];return r.createElement(M,null,o.map(a=>r.createElement(c,{key:a,...e,size:a})))},args:{tip:"Loader with Text"}},m={args:{source:P.loader},render:e=>r.createElement(b,{...e})};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,L,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 'calc(100vh - 16 * 2px)'
  }}>
      <Loader {...args} />
    </div>,
  args: {
    centered: true
  }
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var z,x,C;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: LoaderProps) => {
    const modes: LoaderMode[] = ['default', 'inverted'];
    return <LoadersContainer>
        {modes.map(mode => {
        return <LoaderContainer key={mode} mode={mode}>
              <Loader mode={mode} tip={\`\${mode} loader\`} {...args} />
            </LoaderContainer>;
      })}
      </LoadersContainer>;
  },
  args: {
    size: Size.Large
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var E,h,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: LoaderProps) => {
    const sizes: LoaderSize[] = [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large, Size.ExtraLarge];
    return <LoadersContainer>
        {sizes.map(size => <Loader key={size} {...args} size={size} />)}
      </LoadersContainer>;
  },
  args: {
    tip: 'Loader with Text'
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: componentColors.loader
  },
  render: args => <ThemedPalette {...args} />
}`,...(k=(y=m.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const J=["Basic","Centered","Modes","Sizes","ColorTokens"];export{s as Basic,n as Centered,m as ColorTokens,d as Modes,i as Sizes,J as __namedExportsOrder,G as default};
