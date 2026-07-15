import{G as c,R as r,H as h}from"./iframe-4-PRSI1I.js";import{e as y,g as f,c as P}from"./propPresentation-CfZ5yVim.js";import{S as p}from"./Search-BlloygbR.js";import{s as x}from"./resolveDesignControls-CL29RUJI.js";import{v as b}from"./typesHelpers-tpz7Of7L.js";const v="https://pixso.net/app/design/uxiGK1DPwrKkvgs9BWrKZA",E={pixsoView:v},_=(e,t={})=>y(x[e],t),I={disabled:!1,validationStatus:"default",placeholder:"Search...",value:""},u={disabled:_("disabled",{description:"Недоступное состояние поля поиска"}),validationStatus:{control:"select",description:"Визуальный статус валидации поля",options:[...b]},placeholder:{control:"text",description:"Подсказка в пустом поле"},value:{control:"text",description:"Контролируемое значение поля поиска"}},w=h.div`
  width: 300px;
`,m={argTypes:P(u),args:{...I,testId:"search-test-id",klId:"search-kl-id"},parameters:{badges:[c.stable,c.reviewedByDesign],design:E.pixsoView},decorators:[(e,t)=>r.createElement(w,null,r.createElement(e,{...t}))]},A={title:"Hexa UI Components/Search",component:p,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["searchStorySettings"],...m},D=({value:e,onChange:t,onClearClick:o,...g})=>{const[S,a]=r.useState(e??"");return r.useEffect(()=>{a(e??"")},[e]),r.createElement(p,{...g,value:S,onChange:n=>{a(n),t==null||t(n)},onClearClick:()=>{a(""),o==null||o()}})},s={name:"Playground",render:e=>r.createElement(D,{...e}),parameters:{controls:{include:f(u),sort:"none"}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <SearchPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(searchPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const H=["searchStorySettings","Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:H,default:A,searchStorySettings:m},Symbol.toStringTag,{value:"Module"}));export{G as S,m as s};
