import{M as e,R as r}from"./iframe-DedYZBTA.js";import{g as u,c as p}from"./propPresentation-BNIeMkgM.js";import{o as m}from"./Placeholder-DXWNW80D.js";import{S as g,M as S}from"./types-BCv73aBE.js";import{S as a}from"./Status-DG_v2bke.js";const y=["none","placeholder"],f={mode:"default",label:"Status",icon:"placeholder"},c={mode:{control:"select",description:"Цветовой режим статуса",options:[...g]},label:{control:"text",description:"Текстовая подпись статуса"},icon:{control:"select",description:"Иконка перед подписью статуса",options:[...y]}},P={none:void 0,placeholder:r.createElement(m,null)},i={argTypes:p(c),args:f,parameters:{badges:[e.stable,e.reviewedByDesign],design:S.pixsoView}},b={title:"Hexa UI Components/Status",component:a,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["statusStorySettings"],...i},t={name:"Playground",render:({icon:l,...d})=>r.createElement(a,{...d,icon:P[l]}),parameters:{controls:{include:u(c),sort:"none"}}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    icon,
    ...args
  }) => <Status {...args} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: getControlsInclude(statusPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["statusStorySettings","Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:x,default:b,statusStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{v as S};
