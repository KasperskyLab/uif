import{M as a,R as r}from"./iframe-DedYZBTA.js";import{e as m,g,c as u}from"./propPresentation-BNIeMkgM.js";import{o as y}from"./Advertisement-BnmHQOA4.js";import{o as f}from"./Placeholder-DXWNW80D.js";import{M as b}from"./meta-B-Z3XW2E.js";import{t as P,T as c}from"./Tag-BKPu3-sD.js";import{s as S}from"./resolveDesignControls-CFhBuB_d.js";const o=(n,t={})=>m(S[n],t),T=["none","placeholder","advertisement"],v={mode:"neutral",size:"medium",outlined:!1,disabled:!1,readOnly:!1,invalid:!1,interactive:!1,closable:!1,icon:"none",children:"Tag"},d={mode:o("mode",{options:[...P]}),size:o("size",{options:["small","medium"]}),outlined:{control:{type:"boolean"},description:"Контурный вариант тега"},disabled:o("disabled"),readOnly:o("readOnly"),invalid:{control:{type:"boolean"},description:"Невалидное состояние"},interactive:{control:{type:"boolean"},description:"Интерактивный (кликабельный) тег"},closable:{control:{type:"boolean"},description:"Кнопка закрытия тега"},icon:{control:"select",description:"Иконка перед текстом",options:[...T]},children:{control:"text",description:"Текстовое содержимое тега"}},h={none:void 0,placeholder:r.createElement(f,null),advertisement:r.createElement(y,null)},O={argTypes:u(d),args:v,parameters:{badges:[a.stable,a.reviewedByDesign],design:b.pixsoView}},x={title:"Hexa UI Components/Tag",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["tagStorySettings"],...O},e={name:"Playground",render:({icon:n,children:t,...p})=>r.createElement(c,{...p,icon:h[n]},t),parameters:{controls:{include:g(d),sort:"none"}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    icon: iconKey,
    children,
    ...args
  }) => <Tag {...args} icon={tagIconVariants[iconKey as typeof tagIconOptions[number]]}>
      {children}
    </Tag>,
  parameters: {
    controls: {
      include: getControlsInclude(tagPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Playground"],w=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{w as T};
