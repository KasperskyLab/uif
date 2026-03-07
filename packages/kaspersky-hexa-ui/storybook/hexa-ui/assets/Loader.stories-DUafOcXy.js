import{T as _}from"./Palette-oU4WYbWy.js";import{b as p,B as e,R as a,c as H,H as w}from"./iframe-zz6a49H8.js";import{w as A}from"./withMeta-CjSZnBk7.js";import{s as B}from"./helpers-BytZKRkB.js";import{L as m}from"./Loader-Y1gOuUZF.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./index-BNCbYTB0.js";import"./type-CR-gS43P.js";const D={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},P="Loader",V="В качестве основы используется AntdSpin из библиотеки Antd.",$="Компонент отвечающий за загрузку и запуск новых процессов",I="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=33851%3A105411",J="https://pixso.net/app/design/d3TkLc_A__Df0mBKigHugA",l={dod:D,component:P,description:V,usage:$,designLink:I,pixsoView:J},G={title:"Hexa UI Components/Loader",component:m,argTypes:{...B(["theme","tip"]),size:{control:"select",options:[e.ExtraSmall,e.Small,e.Medium,e.Large,e.ExtraLarge]}},args:{testId:"loader-test-id",klId:"loader-kl-id"},parameters:{badges:[p.stable,p.reviewedByDesign],docs:{page:A(l)},design:l.pixsoView}},t={},n={render:r=>a.createElement("div",{style:{height:"calc(100vh - 16 * 2px)"}},a.createElement(m,{...r})),args:{centered:!0}},M=w.div`
  display: flex;
  gap: 12px;
`,K=w.div`
  padding: 8px;
  border-radius: 8px;
  ${r=>{var o;return r.mode==="inverted"&&`background-color: ${(o=r.theme.colors)==null?void 0:o.bg["base-invert"]}`}}
`,d={render:r=>{const o=["default","inverted"];return a.createElement(M,null,o.map(s=>a.createElement(K,{key:s,mode:s},a.createElement(m,{mode:s,tip:`${s} loader`,...r}))))},args:{size:e.Large}},i={render:r=>{const o=[e.ExtraSmall,e.Small,e.Medium,e.Large,e.ExtraLarge];return a.createElement(M,null,o.map(s=>a.createElement(m,{key:s,...r,size:s})))},args:{tip:"Loader with Text"}},c={args:{source:H.loader},render:r=>a.createElement(_,{...r})};var g,u,L;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(L=(u=t.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var S,x,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    height: 'calc(100vh - 16 * 2px)'
  }}>
      <Loader {...args} />
    </div>,
  args: {
    centered: true
  }
}`,...(z=(x=n.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var h,C,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var E,T,y;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: LoaderProps) => {
    const sizes: LoaderSize[] = [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large, Size.ExtraLarge];
    return <LoadersContainer>
        {sizes.map(size => <Loader key={size} {...args} size={size} />)}
      </LoadersContainer>;
  },
  args: {
    tip: 'Loader with Text'
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var b,v,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: componentColors.loader
  },
  render: args => <ThemedPalette {...args} />
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const N=["Basic","Centered","Modes","Sizes","ColorTokens"];export{t as Basic,n as Centered,c as ColorTokens,d as Modes,i as Sizes,N as __namedExportsOrder,G as default};
