import{G as i,R as o}from"./iframe-4-PRSI1I.js";import{e as u,g as h,b}from"./propPresentation-CfZ5yVim.js";import{w as f}from"./withMeta-BwOuJ6tr.js";import{o as y}from"./Placeholder-DoG1ulbQ.js";import{o as S}from"./Plus-BlzhXYUb.js";import{o as P}from"./Settings-DVTUapLs.js";import{C as r}from"./Chip-D32Bsqf8.js";import{s as C}from"./resolveDesignControls-CL29RUJI.js";const x={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},T="Chip",k="В качестве основы используется AntdTag из библиотеки Antd.",I="",_="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=29925%3A97367",w="https://pixso.net/app/design/JBYs8TT151clF5sO0RSPUg",a={dod:x,component:T,description:k,usage:I,designLink:_,pixsoView:w},z=["medium","large"],A=["none","placeholder","plus","settings"],c=(n,s={})=>u(C[n],s),t={size:"medium",disabled:!1,label:"Label",icon:"none"},m={size:c("size",{options:[...z]}),disabled:c("disabled"),label:{control:"text",description:"Текстовая метка chip"},icon:{control:"select",description:"Иконка перед меткой. Если не передана, иконка отображаться не будет.",options:[...A]},counter:{control:"number",description:"Числовой счётчик справа от метки. Отображается через Badge с mode neutral."},truncationWidth:{control:"number",description:"Максимальная ширина метки в пикселях. При превышении текст обрезается с многоточием."}},V={none:void 0,placeholder:o.createElement(y,{klId:"chip-icon"}),plus:o.createElement(S,{klId:"chip-icon"}),settings:o.createElement(P,{klId:"chip-icon"})},g={argTypes:b(r,m),args:{size:t.size,disabled:t.disabled,label:t.label,testId:"chip-test-id",klId:"chip-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:f(a)},design:a.pixsoView}},E={title:"Hexa UI Components/Chip",component:r,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["chipStorySettings"],...g},e={name:"Playground",args:t,render:({icon:n="none",...s})=>o.createElement(r,{...s,icon:V[n]}),parameters:{controls:{include:h(m),sort:"none"}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Playground',
  args: defaultArgs,
  render: ({
    icon = 'none',
    ...rest
  }) => <ChipComponent {...rest} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: getControlsInclude(chipPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const O=["chipStorySettings","Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:O,chipStorySettings:g,default:E},Symbol.toStringTag,{value:"Module"}));export{j as C,g as c};
