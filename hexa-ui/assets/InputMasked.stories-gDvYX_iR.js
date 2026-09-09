import{M as l,R as t,H as p,S as I,a as b,P as d}from"./iframe-DedYZBTA.js";import{e as A,g as E,c as N}from"./propPresentation-BNIeMkgM.js";import{I as m}from"./InputMasked-Bbhb0bxg.js";import{s as h}from"./resolveDesignControls-CFhBuB_d.js";import{v}from"./typesHelpers-tpz7Of7L.js";const x=["None","Date","Number","Phone","Pattern","Email","IP","MAC"],C=e=>({Date:{mask:Date,lazy:!1,overwrite:!0,autofix:!0},Number:{mask:Number},Phone:{mask:"+7 (000) 000-00-00",lazy:!1,overwrite:!0,autofix:!0},Pattern:{mask:"{#}000[aaa]/NIC-`*[**]",lazy:!1,overwrite:!0,autofix:!0},Email:{mask:"NAME@HOST.CODE",blocks:{NAME:{mask:/^[a-zA-Z0-9_\-.]*$/},HOST:{mask:/^[a-zA-Z0-9_-]*$/},CODE:{mask:/^[a-zA-Zs.]{1,8}$/}}},None:void 0,IP:{mask:"NUM.NUM.NUM.NUM",blocks:{NUM:{mask:/^[0-9]{1,3}$/}}},MAC:{mask:"MACAD:MACAD:MACAD:MACAD",blocks:{MACAD:{mask:/^[0-9a-f]{1,2}$/}},overwrite:!0,autofix:!0}})[e],D=(e,a={})=>A(h[e],a),O={mask:"Phone",validationStatus:"default",disabled:!1,readOnly:!1,placeholder:"Введите значение",value:""},k={mask:{control:"select",description:"Готовый вариант маски для демонстрации",options:[...x]},validationStatus:{control:"select",description:"Визуальный статус валидации поля",options:[...v]},disabled:D("disabled",{description:"Отключённое поле: ввод недоступен"}),readOnly:{control:"boolean",description:"Режим только для чтения: значение отображается, но не редактируется"},placeholder:{control:"text",description:"Подсказка в пустом поле"},value:{control:"text",description:"Контролируемое значение поля"}},R=p.div`
  width: 300px;
`,M=p(m)`
  ${({$disableRtl:e})=>e&&`
    [dir="rtl"] & {
      direction: ltr;

      &:-webkit-input-placeholder,
      &:-moz-placeholder,
      &:-ms-input-placeholder,
      &:placeholder,
      &:placeholder-shown {
        direction: rtl;
      }
    }
  `}
`,g=["None","IP","Number","Mac"],f={argTypes:N(k),args:{...O,testId:"input-masked-test-id",klId:"input-masked-kl-id"},parameters:{badges:[l.stable,l.needsDesignReview]},decorators:[(e,a)=>t.createElement(I,{gap:"grouped"},t.createElement(b,{mode:"info"},t.createElement(d,null,"Input Masked does not support RTL. For masks such as `mail`, `phone`, etc., forcibly specify LTR."),t.createElement(d,null,"Input Masked не поддерживает RTL. Для таких масок, как `mail`, `phone` и т. д., необходимо принудительно задавать LTR.")),t.createElement(R,null,t.createElement(e,{...a})))]},T={title:"Hexa UI Components/Inputs/InputMasked",component:m,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["inputMaskedStorySettings"],...f},z=({mask:e,value:a,onChange:o,...S})=>{const[y,r]=t.useState(a??"");return t.useEffect(()=>{r(a??"")},[a]),t.createElement(M,{...S,$disableRtl:!g.includes(e),maskOptions:C(e),value:y,onChange:(n,P)=>{r(n),o==null||o(n,P)}})},s={name:"Playground",render:e=>t.createElement(z,{...e}),parameters:{controls:{include:E(k),sort:"none"}}};var i,c,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <InputMaskedPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputMaskedPropPresentation),
      sort: 'none'
    }
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const _=["StyledInputMasked","RTLMasks","inputMaskedStorySettings","Playground"],Z=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,RTLMasks:g,StyledInputMasked:M,__namedExportsOrder:_,default:T,inputMaskedStorySettings:f},Symbol.toStringTag,{value:"Module"}));export{Z as I,g as R,M as S,C as g,f as i};
