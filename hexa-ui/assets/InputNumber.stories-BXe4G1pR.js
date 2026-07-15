import{G as a,R as r,H as g}from"./iframe-4-PRSI1I.js";import{e as y,g as S,c as f}from"./propPresentation-CfZ5yVim.js";import{I as u}from"./InputNumber-DjFWqf89.js";import{s as P}from"./resolveDesignControls-CL29RUJI.js";import{v as I}from"./typesHelpers-tpz7Of7L.js";const N="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=39947:148539",x={pixsoView:N},E=(e,t={})=>y(P[e],t),v={placeholder:"Placeholder",disabled:!1,readOnly:!1,validationStatus:"default",integerOnly:!1,allowEmpty:!1},p={validationStatus:{description:"Визуальный статус валидации поля",control:"select",options:[...I]},disabled:E("disabled"),readOnly:{description:"Только чтение: поле не редактируется",control:"boolean"},placeholder:{description:"Подсказка в пустом поле",control:"text"},integerOnly:{description:"Разрешить ввод только целых чисел",control:"boolean"},allowEmpty:{description:"Разрешить пустое значение в поле",control:"boolean"},min:{description:"Минимально допустимое значение",control:"number"}},O=g.div`
  width: 300px;
`,c={argTypes:f(p),args:{...v,testId:"input-number-test-id",klId:"input-number-kl-id"},parameters:{badges:[a.stable,a.reviewedByDesign],design:x.pixsoView},decorators:[(e,t)=>r.createElement(O,null,r.createElement(e,{...t}))]},_={title:"Hexa UI Components/Inputs/InputNumber",component:u,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["inputNumberStorySettings"],...c},w=({value:e,onChange:t,...m})=>{const[b,n]=r.useState(e);return r.useEffect(()=>{n(e)},[e]),r.createElement(u,{...m,value:b,onChange:s=>{n(s),t==null||t(s)}})},o={name:"Playground",render:e=>r.createElement(w,{...e}),parameters:{controls:{include:S(p),sort:"none"}}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <InputNumberPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputNumberPropPresentation),
      sort: 'none'
    }
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const h=["inputNumberStorySettings","Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:h,default:_,inputNumberStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{j as I,c as i};
