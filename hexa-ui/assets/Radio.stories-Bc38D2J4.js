import{M as n,r as u,R as g}from"./iframe-DedYZBTA.js";import{e as m,g as b,b as y}from"./propPresentation-BNIeMkgM.js";import{R as a}from"./Radio-Cpvj7bye.js";import{s as v}from"./resolveDesignControls-CFhBuB_d.js";const S="https://pixso.net/app/design/-zdH_8-w6aHEaUwGaHkaEA",f={pixsoView:S},P=(o,t={})=>m(v[o],t),x={disabled:!1,readonly:!1,vertical:!0,invalid:!1},l={disabled:P("disabled",{description:"Недоступное состояние: все опции группы не реагируют на действия пользователя. Отдельную опцию можно настроить через `disabled` в объекте `options` — значение опции перекрывает групповое"}),readonly:{control:"boolean",description:"Только для чтения: выбор виден, но изменить его нельзя. Отдельную опцию можно настроить через `readonly` в объекте `options` — значение опции перекрывает групповое"},vertical:{control:"boolean",description:"Вертикальное расположение опций. По умолчанию — `true`"},invalid:{control:"boolean",description:"Состояние ошибки валидации: применяет стиль invalid к опциям группы. Отдельную опцию можно настроить через `invalid` в объекте `options` — значение опции перекрывает групповое"}},d={argTypes:y(a,l),args:{...x,testId:"radio-test-id",klId:"radio-kl-id"},parameters:{badges:[n.stable,n.reviewedByDesign],design:f.pixsoView}},O=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],R={title:"Hexa UI Components/Radio",component:a,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["radioStorySettings"],...d},e={name:"Playground",render:o=>{const[t,p]=u.useState();return g.createElement(a,{...o,value:t,onChange:c=>p(c.target.value),options:O})},parameters:{controls:{include:b(l),sort:"none"}}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={playgroundOptions} />;
  },
  parameters: {
    controls: {
      include: getControlsInclude(radioPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["radioStorySettings","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:h,default:R,radioStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{E as R,d as r};
