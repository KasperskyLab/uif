import{g as d,c as m}from"./propPresentation-BNIeMkgM.js";import{R as o}from"./iframe-DedYZBTA.js";import{o as p}from"./Placeholder-DXWNW80D.js";import{o as u}from"./Plus-k0o_2j9Z.js";import{o as f}from"./Settings-5WzWAE_r.js";import{T as s}from"./ToggleButton-t01FaFnT.js";import{t as B,a as S}from"./types-CHQbqp6R.js";import{B as y}from"./Badge-MGlXnKsn.js";const b=["none","placeholder","plus","settings"],A=["none","badge"],P={mode:"marina",size:"medium",selected:!1,disabled:!1,loading:!1,text:"Toggle button",iconBefore:"placeholder",elementAfter:"none",tooltip:"Подсказка"},l={mode:{control:"select",description:"Цветовой режим выбранной кнопки",options:[...S]},size:{control:"select",description:"Размер кнопки",options:[...B]},selected:{control:"boolean",description:"Выбранное состояние кнопки"},disabled:{control:"boolean",description:"Неактивное состояние кнопки"},loading:{control:"boolean",description:"Отображение состояния загрузки"},text:{control:"text",description:"Текст кнопки"},iconBefore:{control:"select",description:"Иконка перед текстом",options:[...b]},elementAfter:{control:"select",description:"Элемент после текста",options:[...A]},tooltip:{control:"text",description:"Текст всплывающей подсказки"}},T={none:void 0,placeholder:o.createElement(p,null),plus:o.createElement(u,null),settings:o.createElement(f,null)},x={none:void 0,badge:o.createElement(y,{count:1})},a={argTypes:m(l),args:P},E={title:"Hexa UI Components/ToggleButton",component:s,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["toggleButtonStorySettings"],...a},e={name:"Playground",render:({iconBefore:i,elementAfter:c,...g})=>o.createElement(s,{...g,iconBefore:T[i],elementAfter:x[c]}),parameters:{controls:{include:d(l),sort:"none"}}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    iconBefore,
    elementAfter,
    ...args
  }) => <ToggleButtonComponent {...args} iconBefore={iconVariants[iconBefore]} elementAfter={elementAfterVariants[elementAfter]} />,
  parameters: {
    controls: {
      include: getControlsInclude(toggleButtonPropPresentation),
      sort: 'none'
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const _=["toggleButtonStorySettings","Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:_,default:E,toggleButtonStorySettings:a},Symbol.toStringTag,{value:"Module"}));export{M as T};
