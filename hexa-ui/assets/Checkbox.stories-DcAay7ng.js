import{G as r,R as n,I as b}from"./iframe-4-PRSI1I.js";import{e as g,g as u,c as h}from"./propPresentation-CfZ5yVim.js";import{w as x}from"./withMeta-BwOuJ6tr.js";import{a as d}from"./Checkbox-C_Wci0Rq.js";import{M as t}from"./meta-QOHxIele.js";import{s as f}from"./resolveDesignControls-CL29RUJI.js";const y=["primary","secondary","disabled"],s=(o,m={})=>g(f[o],m),P={mode:"primary",disabled:!1,readonly:!1,invalid:!1,required:!1,checked:!1,indeterminate:!1,children:"Check me",description:""},l={mode:s("mode",{options:[...y],description:"Режим подписи FormLabel для строкового children"}),disabled:s("disabled",{description:"Недоступное состояние: чекбокс не реагирует на действия пользователя"}),readonly:{control:"boolean",description:"Только для чтения: состояние видно, но изменить его нельзя"},invalid:{control:"boolean",description:"Состояние ошибки валидации"},required:{control:"boolean",description:"Обязательное поле: к подписи добавляется маркер required"},checked:{control:"boolean",description:"Отмеченное состояние в контролируемом режиме"},indeterminate:{control:"boolean",description:"Промежуточное состояние (частичный выбор в группе)"},children:{control:"text",description:"Подпись чекбокса. Для строки рендерится FormLabel с htmlFor"},description:{control:"text",description:"Дополнительный текст под чекбоксом через HelpMessage"}},k=u(l),p={argTypes:h(l),args:{...P,testId:"checkbox-test-id",klId:"checkbox-kl-id"},parameters:{badges:[r.stable,r.reviewedByDesign],docs:{page:x(t)},design:t.pixsoView}},C={title:"Hexa UI Components/Checkbox",component:d,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["checkboxStorySettings"],...p},e={name:"Playground",parameters:{controls:{include:k,sort:"none"}},render:o=>n.createElement(b,{getPopupContainer:()=>document.body},n.createElement(d,{...o},o.children))};var a,c,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: checkboxControlsInclude,
      sort: 'none'
    }
  },
  render: args => <PopupConfigProvider getPopupContainer={() => document.body}>
      <CheckboxComponent {...args}>
        {args.children}
      </CheckboxComponent>
    </PopupConfigProvider>
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const S=["checkboxStorySettings","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:S,checkboxStorySettings:p,default:C},Symbol.toStringTag,{value:"Module"}));export{E as C,p as c};
