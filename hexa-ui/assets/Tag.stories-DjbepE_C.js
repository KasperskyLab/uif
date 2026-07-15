import{O as m,G as a,R as r}from"./iframe-4-PRSI1I.js";import{e as g,g as u,c as y}from"./propPresentation-CfZ5yVim.js";import{o as f}from"./Advertisement-DDkY5S4P.js";import{o as b}from"./Placeholder-DoG1ulbQ.js";import{M as P}from"./meta-B-Z3XW2E.js";import{T as c}from"./Tag-B3SARhhR.js";import{s as S}from"./resolveDesignControls-CL29RUJI.js";const t=(o,n={})=>g(S[o],n),T=["none","placeholder","advertisement"],v={mode:"neutral",size:"medium",outlined:!1,disabled:!1,readOnly:!1,invalid:!1,interactive:!1,closable:!1,icon:"none",children:"Tag"},d={mode:t("mode",{options:[...m]}),size:t("size",{options:["small","medium"]}),outlined:{control:{type:"boolean"},description:"Контурный вариант тега"},disabled:t("disabled"),readOnly:{control:{type:"boolean"},description:"Состояние только для чтения"},invalid:{control:{type:"boolean"},description:"Невалидное состояние"},interactive:{control:{type:"boolean"},description:"Интерактивный (кликабельный) тег"},closable:{control:{type:"boolean"},description:"Кнопка закрытия тега"},icon:{control:"select",description:"Иконка перед текстом",options:[...T]},children:{control:"text",description:"Текстовое содержимое тега"}},h={none:void 0,placeholder:r.createElement(b,null),advertisement:r.createElement(f,null)},O={argTypes:y(d),args:v,parameters:{badges:[a.stable,a.reviewedByDesign],design:P.pixsoView}},x={title:"Hexa UI Components/Tag",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["tagStorySettings"],...O},e={name:"Playground",render:({icon:o,children:n,...p})=>r.createElement(c,{...p,icon:h[o]},n),parameters:{controls:{include:u(d),sort:"none"}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
