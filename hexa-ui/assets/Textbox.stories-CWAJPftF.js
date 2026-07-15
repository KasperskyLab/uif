import{G as a,R as o,H as g}from"./iframe-4-PRSI1I.js";import{e as b,g as y,c as S}from"./propPresentation-CfZ5yVim.js";import{T as c}from"./Textbox-Dh9d3MYi.js";import{s as f}from"./resolveDesignControls-CL29RUJI.js";import{v as P}from"./typesHelpers-tpz7Of7L.js";const T=(e,t={})=>b(f[e],t),v={disabled:!1,readOnly:!1,validationStatus:"default",placeholder:"Placeholder",showClearButton:!1,value:""},p={disabled:T("disabled",{description:"Отключённое поле: ввод недоступен"}),readOnly:{control:"boolean",description:"Режим только для чтения: значение отображается, но не редактируется"},validationStatus:{control:"select",description:"Визуальный статус валидации поля",options:[...P]},placeholder:{control:"text",description:"Подсказка в пустом поле"},showClearButton:{control:"boolean",description:"Показывать кнопку очистки значения справа, когда поле не пустое"},value:{control:"text",description:"Контролируемое значение поля"}},I=g.div`
  width: 300px;
`,_="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148276",u={argTypes:S(p),args:{...v,testId:"input-test-id",klId:"input-kl-id"},parameters:{badges:[a.stable,a.reviewedByDesign],design:_},decorators:[(e,t)=>o.createElement(I,null,o.createElement(e,{...t}))]},E={title:"Hexa UI Components/Inputs/Textbox",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["textboxStorySettings"],...u},h=({value:e,onChange:t,...m})=>{const[x,s]=o.useState(e);return o.useEffect(()=>{s(e)},[e]),o.createElement(c,{...m,value:x,onChange:n=>{s(n),t==null||t(n)}})},r={name:"Playground",render:e=>o.createElement(h,{...e}),parameters:{controls:{include:y(p),sort:"none"}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <TextboxPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(textboxPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const O=["textboxStorySettings","Playground"],W=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:O,default:E,textboxStorySettings:u},Symbol.toStringTag,{value:"Module"}));export{W as T,u as t};
