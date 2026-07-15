import{G as a,R as o,H as S}from"./iframe-4-PRSI1I.js";import{e as y,g as I,c as P}from"./propPresentation-CfZ5yVim.js";import{t as b,M as T}from"./types-uVm4-zKu.js";import{T as m}from"./TimeInput-ufExk_If.js";import{s as x}from"./resolveDesignControls-CL29RUJI.js";import{v}from"./typesHelpers-tpz7Of7L.js";const E=(e,t={})=>y(x[e],t),_={format:"HH:mm:ss",disabled:!1,readOnly:!1,validationStatus:"default"},c={format:{description:"Формат отображения времени в поле ввода",control:"select",options:[...b]},placeholder:{description:"Подсказка в пустом поле. Если не задана, формируется из format",control:"text"},disabled:E("disabled"),readOnly:{description:"Только чтение: поле не редактируется",control:"boolean"},validationStatus:{description:"Визуальный статус валидации поля",control:"select",options:[...v]}},H=S.div`
  width: 300px;
`,p={argTypes:P(c),args:{..._,testId:"time-input-test-id",klId:"time-input-kl-id"},parameters:{badges:[a.stable,a.needsDesignReview],design:T.pixsoView},decorators:[(e,t)=>o.createElement(H,null,o.createElement(e,{...t}))]},O={title:"Hexa UI Components/DateTime Pickers/TimeInput",component:m,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["timeInputStorySettings"],...p},k=({value:e,onChange:t,...u})=>{const[g,s]=o.useState(e);return o.useEffect(()=>{s(e)},[e]),o.createElement(m,{...u,value:g,onChange:(n,f)=>{s(n),t==null||t(n,f)}})},r={name:"Playground",render:e=>o.createElement(k,{...e}),parameters:{controls:{include:I(c),sort:"none"}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <TimeInputPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(timeInputPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const D=["timeInputStorySettings","Playground"],z=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:D,default:O,timeInputStorySettings:p},Symbol.toStringTag,{value:"Module"}));export{z as T,p as t};
