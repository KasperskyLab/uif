import{M as s,G as r,r as a,R as p}from"./iframe-4-PRSI1I.js";import{e as v,g as x,c as P}from"./propPresentation-CfZ5yVim.js";import{w as B}from"./withMeta-BwOuJ6tr.js";import{o as z}from"./Placeholder-DoG1ulbQ.js";import{S as m}from"./SegmentedButton-CErJIP_5.js";import{s as V}from"./resolveDesignControls-CL29RUJI.js";const k={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},w="SegmentedButton",O="Framework-agnostic компонент с функциями single- и multi-выбора в виде группы кнопок",T="Выбор одного или нескольких однотипных опций, например, дней недели",_="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=51361%3A404617",C="https://pixso.net/app/design/b8ZoOY7zLKJjP75ryBEvtA",i={dod:k,component:w,description:O,usage:T,designLink:_,pixsoView:C},E=[s.Medium,s.Large],d=(e,n={})=>v(V[e],n),M={size:"medium",disabled:!1,isStretch:!1},g={size:d("size",{options:[...E]}),disabled:d("disabled",{description:"Переводит все элементы в недоступное состояние"}),isStretch:{control:{type:"boolean"},description:"Растягивает компонент на всю ширину контейнера"}},S={argTypes:P(g),args:{...M,value:["opt2"],items:[{text:"Option 1",value:"opt1"},{text:"Option 2",value:"opt2",componentsBefore:[p.createElement(z,{key:"icon"})]},{text:"Option 3",value:"opt3"},{text:"Option 4",value:"opt4",disabled:!0}],onChange:()=>{}},parameters:{badges:[r.stable,r.reviewedByDesign],docs:{page:B(i)},design:i.pixsoView}},A={title:"Hexa UI Components/SegmentedButton",component:m,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["segmentedButtonStorySettings"],...S},t={name:"Playground",render:({value:e,disabled:n,size:f,isStretch:y,items:b})=>{const[h,o]=a.useState(e);return a.useEffect(()=>{o(e)},[e]),p.createElement(m,{items:b,value:h,onChange:o,disabled:n,size:f,isStretch:y})},parameters:{controls:{include:x(g),sort:"none"}}};var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    value: defaultValue,
    disabled,
    size,
    isStretch,
    items
  }) => {
    const [value, setValue] = useState<string[]>(defaultValue);
    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);
    return <SegmentedButton items={items} value={value} onChange={setValue} disabled={disabled} size={size} isStretch={isStretch} />;
  },
  parameters: {
    controls: {
      include: getControlsInclude(segmentedButtonPropPresentation),
      sort: 'none'
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const L=["segmentedButtonStorySettings","Playground"],K=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:L,default:A,segmentedButtonStorySettings:S},Symbol.toStringTag,{value:"Module"}));export{K as S};
