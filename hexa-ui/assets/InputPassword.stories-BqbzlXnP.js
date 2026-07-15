import{G as a,R as o,H as P}from"./iframe-4-PRSI1I.js";import{e as y,g as f,c as S}from"./propPresentation-CfZ5yVim.js";import{I as c}from"./InputPassword-DhvDhl9J.js";import{s as w}from"./resolveDesignControls-CL29RUJI.js";import{v as b}from"./typesHelpers-tpz7Of7L.js";const I=(e,t={})=>y(w[e],t),v={placeholder:"Password",disabled:!1,readOnly:!1,validationStatus:"default",clearBeforeFirstChange:!1,showVisibilityIcon:!0,value:""},p={validationStatus:{description:"Визуальный статус валидации поля",control:"select",options:[...b]},disabled:I("disabled"),readOnly:{description:"Только чтение: поле не редактируется",control:"boolean"},clearBeforeFirstChange:{description:"Очищать значение при первом фокусе до первого изменения",control:"boolean"},showVisibilityIcon:{description:"Показывать иконку переключения видимости пароля",control:"boolean"},placeholder:{description:"Подсказка в пустом поле",control:"text"},value:{description:"Контролируемое значение поля",control:"text"}},x=P.div`
  width: 300px;
`,u={argTypes:S(p),args:{...v,testId:"input-password-test-id",klId:"input-password-kl-id"},parameters:{badges:[a.stable,a.reviewedByDesign],design:"https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=80545:342493"},decorators:[(e,t)=>o.createElement(x,null,o.createElement(e,{...t}))]},h={title:"Hexa UI Components/Inputs/InputPassword",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["inputPasswordStorySettings"],...u},_=({value:e,onChange:t,...m})=>{const[g,r]=o.useState(e??"");return o.useEffect(()=>{r(e??"")},[e]),o.createElement(c,{...m,value:g,onChange:n=>{r(n),t==null||t(n)}})},s={name:"Playground",render:e=>o.createElement(_,{...e}),parameters:{controls:{include:f(p),sort:"none"}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <InputPasswordPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputPasswordPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["inputPasswordStorySettings","Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:E,default:h,inputPasswordStorySettings:u},Symbol.toStringTag,{value:"Module"}));export{T as I,u as i};
