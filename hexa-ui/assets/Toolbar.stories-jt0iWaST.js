import{g as d,c as p}from"./propPresentation-BNIeMkgM.js";import{M as n,R as e}from"./iframe-DedYZBTA.js";import{T as t}from"./Toolbar-BZLdf55H.js";const y="https://pixso.net/app/design/BRUbNvpdZSnhGNUQHJg2YQ",g={pixsoView:y},m={autoDropdown:!1,leftLimit:4,sticky:void 0},i={autoDropdown:{control:"boolean",description:"Автоматически переносит не поместившиеся элементы левой части в меню"},leftLimit:{control:{type:"number",min:1,step:1},description:"Количество видимых элементов слева до появления меню"},sticky:{control:"number",description:"Вертикальное смещение закреплённой панели"}},b=[{type:"button",key:"filter",label:"Фильтры",onClick:()=>alert("Фильтры")},{type:"divider",key:"divider"},{type:"button",key:"export",label:"Экспорт",onClick:()=>alert("Экспорт")},{type:"button",key:"settings",label:"Настройки",onClick:()=>alert("Настройки")}],u=[{children:"Действие 1",onClick:()=>alert("Действие 1")},{children:"Действие 2",onClick:()=>alert("Действие 2")}],h=()=>[{type:"button",key:"1",label:"Кнопка 1",onClick:()=>alert("Кнопка 1")},{type:"dropdown",key:"2",label:"Кнопка 2",overlay:u},{type:"divider",key:"divider"},{type:"button",key:"4",label:"Кнопка 4",visible:!1},{type:"button",key:"5",label:"Кнопка 5",disabled:!0}],k=()=>[{type:"children",key:"search",children:e.createElement(t.Search,{placeholder:"Поиск"})},{type:"children",key:"settings",children:e.createElement(t.SettingsItem,{onClick:()=>alert("Настройки")})}],c={argTypes:p(i),args:m,parameters:{badges:[n.stable,n.reviewedByDesign],design:g.pixsoView},decorators:[o=>e.createElement("div",{style:{width:"90vw"}},e.createElement(o,null))]},S={title:"Hexa UI Components/Toolbar",component:t,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["toolbarStorySettings","getItemsLeft","getItemsRight"],...c},r={name:"Playground",render:o=>e.createElement(t,{...o,left:b,right:[{type:"children",key:"search",children:e.createElement(t.Search,{placeholder:"Поиск"})},{type:"children",key:"settings",children:e.createElement(t.SettingsItem,{onClick:()=>alert("Настройки")})}]}),parameters:{controls:{include:d(i),sort:"none"}}};var l,a,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Toolbar {...args} left={playgroundItems} right={[{
    type: 'children',
    key: 'search',
    children: <Toolbar.Search placeholder="Поиск" />
  }, {
    type: 'children',
    key: 'settings',
    children: <Toolbar.SettingsItem onClick={() => alert('Настройки')} />
  }]} />,
  parameters: {
    controls: {
      include: getControlsInclude(toolbarPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["getItemsLeft","getItemsRight","toolbarStorySettings","Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:f,default:S,getItemsLeft:h,getItemsRight:k,toolbarStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{T,h as a,k as g};
