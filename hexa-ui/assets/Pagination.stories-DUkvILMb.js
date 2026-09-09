import{M as a,r as s,R as o,H as w}from"./iframe-DedYZBTA.js";import{g as z,c as x}from"./propPresentation-BNIeMkgM.js";import{P as p}from"./Pagination-D5L8svdn.js";const C="https://pixso.net/app/design/hjHUr5zzgcXmN9y0toyllw",I={pixsoView:C},T={current:1,pageSize:25,total:500,disabled:!1,hideOnSinglePage:!1,showSizeChanger:!1,showLessItems:!0,jumper:!1,selected:25,showSelected:!0,cursor:!1,simple:!1,testId:"pagination-test-id",klId:"pagination-kl-id"},d={current:{control:{type:"number",min:1},description:"Номер текущей страницы"},pageSize:{control:{type:"number",min:1},description:"Количество элементов на странице"},total:{control:{type:"number",min:0},description:"Общее количество элементов"},disabled:{control:"boolean",description:"Отключает взаимодействие с пагинацией"},hideOnSinglePage:{control:"boolean",description:"Скрывает пагинацию, если доступна одна страница"},showSizeChanger:{control:"boolean",description:"Показывает выбор количества элементов на странице"},showLessItems:{control:"boolean",description:"Сокращает количество отображаемых номеров страниц"},jumper:{control:"boolean",description:"Показывает поле для перехода к странице по номеру"},selected:{control:{type:"number",min:0},description:"Количество выбранных элементов"},showSelected:{control:"boolean",description:"Показывает количество выбранных элементов в сводке"},cursor:{control:"boolean",description:"Ограничивает переход к последней странице в курсорной пагинации"},simple:{control:"boolean",description:"Скрывает сводку по количеству и выбранным элементам"}},j=w.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
`,g={argTypes:x(d),args:T,parameters:{badges:[a.stable,a.reviewedByDesign],design:I.pixsoView},decorators:[(t,n)=>o.createElement(j,null,o.createElement(t,{...n}))]},_={title:"Hexa UI Components/Pagination",component:p,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["paginationStorySettings","PaginationTemplate"],...g},m=({current:t,pageSize:n,...u})=>{const[S,b]=s.useState(n),[P,h]=s.useState(t),r=(y,f)=>{h(y),b(Number(f))};return o.createElement(p,{...u,pageSize:S,current:P,onChange:r,onShowSizeChange:r})},e={render:m,parameters:{controls:{include:z(d),sort:"none"}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: PaginationTemplate,
  parameters: {
    controls: {
      include: getControlsInclude(paginationPropPresentation),
      sort: 'none'
    }
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const v=["paginationStorySettings","PaginationTemplate","Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,PaginationTemplate:m,Playground:e,__namedExportsOrder:v,default:_,paginationStorySettings:g},Symbol.toStringTag,{value:"Module"}));export{m as P,M as a,g as p};
