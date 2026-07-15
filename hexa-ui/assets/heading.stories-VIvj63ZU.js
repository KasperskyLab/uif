import{R as e,T as n,S as g,aw as h,ax as C,an as b,K as w,au as k,Q as v,G as l,ay as s,Z as A,az as I}from"./iframe-4-PRSI1I.js";import{w as S}from"./withMeta-BwOuJ6tr.js";import{s as u,a as T}from"./helpers-BytZKRkB.js";import{M as p}from"./meta-C8fT5Hsm.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";const D=()=>e.createElement(e.Fragment,null,e.createElement(n,{type:"H4"},"Заголовки"),e.createElement(n,{type:"H6"},"Стили используются как в заголовках страниц, так и в мелких компонентах, таких как карточки и алерты"),e.createElement(g,{gap:16,direction:"vertical"},e.createElement(h,null,"Header/H1"),e.createElement(C,null,"Header/H2"),e.createElement(b,null,"Header/H3"),e.createElement(w,null,"Header/H4"),e.createElement(k,null,"Header/H5"),e.createElement(v,null,"Header/H6"))),x=["H1","H2","H3","H4","H5","H6"],E={options:Object.keys(A.text).filter(t=>t!=="link"),control:{type:"select"}},f={options:x,control:{type:"select"},...T("H1")},W={title:"Hexa UI Components/Typography/Heading",component:s,argTypes:{storyText:{control:{type:"text"}},color:{...E},themedColor:{options:Object.keys(I["text-icons-elements"]),control:{type:"select"},...T("primary")},type:{...f},...u(["theme","as","forwardedAs","ref"])},args:{storyText:"I'm header",color:void 0,themedColor:"primary",testId:"heading-test-id",klId:"heading-kl-id"},parameters:{badges:[l.stable,l.reviewedByDesign],docs:{page:S(p,D)},design:p.pixsoView},decorators:[(t,r)=>e.createElement(g,{gap:16,direction:"vertical"},e.createElement(t,{...r}))]},o={render:t=>e.createElement(s,{color:t.color,type:t.type,...t},t.storyText," ",t.type," ",t.color),argTypes:{storyText:{control:{type:"text"}},color:{...E},type:{...f},...u(["themedColor"])}},a={render:t=>e.createElement("div",null,x.map(r=>e.createElement(s,{key:r,color:t.color,type:r,...t},"I'm header with type ",r)))};var c,i,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <Heading color={args.color} type={args.type} {...args}>
      {args.storyText} {args.type} {args.color}
    </Heading>,
  argTypes: {
    storyText: {
      control: {
        type: 'text'
      }
    },
    color: {
      ...defaultATColor
    },
    type: {
      ...defaultATType
    },
    ...sbHideControls(['themedColor'])
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,H;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <div>
      {defaultTypes.map(type => <Heading key={type} color={args.color} type={type} {...args}>
          I&apos;m header with type {type}
        </Heading>)}
    </div>
}`,...(H=(y=a.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const X=["Basic","AllTypes"];export{a as AllTypes,o as Basic,X as __namedExportsOrder,W as default};
