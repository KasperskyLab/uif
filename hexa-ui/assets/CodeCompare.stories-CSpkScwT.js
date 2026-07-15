import{G as y,R as b,r as e}from"./iframe-4-PRSI1I.js";import{e as A,g as M,c as R}from"./propPresentation-CfZ5yVim.js";import{w as H}from"./withMeta-BwOuJ6tr.js";import{C as x}from"./CodeCompare-BhVtyiAO.js";import{s as Q}from"./resolveDesignControls-CL29RUJI.js";const D={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},I="Code compare",N="В качестве основы используется библиотека react-diff-view.",U="Code compare — компонент для визуального сравнения двух версий кода, конфигурационных файлов или данных.",j="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=139590%3A185264",z="https://pixso.net/app/design/R2Ql8OtW_o3hdoS3U6zQiQ",f={dod:D,component:I,description:N,usage:U,designLink:j,pixsoView:z},J=(o,n={})=>A(Q[o],n),W=["split","unified"],l=[{label:"Code 2024-06-05 16:50:54",description:"author.one",value:"base"},{label:"Changed Code 2024-06-05 16:50:54",description:"author.two",value:"changed"}],p=`import React from 'react'

export const App = () => {
  return <div>Hello</div>
}`,u=`import React from 'react'

export const App = () => {
  return <div>Hello, world</div>
}`,Y={options:l,oldVersion:l[0],newVersion:l[1],oldValue:p,newValue:u,compareMode:"split",loading:!1},v={compareMode:{control:"select",description:"Начальный режим отображения diff: split — две колонки, unified — одна.",options:[...W]},loading:J("loading",{description:"Состояние загрузки области сравнения. При отсутствии текстов показывается подсказка ожидания данных."}),oldValue:{control:"text",description:"Текст левой (базовой) версии для сравнения."},newValue:{control:"text",description:"Текст правой (сравниваемой) версии."}},B=({oldValue:o,newValue:n,oldVersion:r,newVersion:d,compareMode:m,...E})=>{const[P,g]=e.useState(r),[T,C]=e.useState(d),[h,c]=e.useState(o),[O,i]=e.useState(n);e.useEffect(()=>{g(r)},[r]),e.useEffect(()=>{C(d)},[d]),e.useEffect(()=>{c(o)},[o]),e.useEffect(()=>{i(n)},[n]);const k=(s,t)=>{g(s),C(t),(s==null?void 0:s.value)==="base"&&c(p),(t==null?void 0:t.value)==="changed"&&i(u),(s==null?void 0:s.value)==="changed"&&c(u),(t==null?void 0:t.value)==="base"&&i(p)};return b.createElement(x,{...E,key:m,compareMode:m,oldVersion:P,newVersion:T,oldValue:h,newValue:O,onVersionChange:k})},_={argTypes:R(v),args:Y,parameters:{badges:[y.stable,y.reviewedByDesign],docs:{page:H(f)},design:f.pixsoView}},G={title:"Hexa UI Components/CodeCompare",component:x,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["codeCompareStorySettings"],..._},a={name:"Playground",render:o=>b.createElement(B,{...o}),parameters:{controls:{include:M(v),sort:"none"}}};var S,V,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <CodeComparePlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(codeComparePlaygroundPresentation),
      sort: 'none'
    }
  }
}`,...(w=(V=a.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const K=["codeCompareStorySettings","Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:K,codeCompareStorySettings:_,default:G},Symbol.toStringTag,{value:"Module"}));export{$ as C,_ as c};
