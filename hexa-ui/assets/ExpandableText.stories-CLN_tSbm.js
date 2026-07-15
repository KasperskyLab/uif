import{Z as m,G as u,R as r}from"./iframe-4-PRSI1I.js";import{e as T,b as _,g}from"./propPresentation-CfZ5yVim.js";import{w as y}from"./withMeta-BwOuJ6tr.js";import{a as b}from"./StoryComponents-BWv8uEx9.js";import{E as c}from"./ExpandableText-D26g3ja6.js";import{s as f}from"./resolveDesignControls-CL29RUJI.js";const B={designTokens:!1,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},C="ExpandableText",A="",P="",S="",D={dod:B,component:C,description:A,usage:P,designLink:S},h="Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.",a=Array(8).fill(h).join(" "),s=Array(3).fill(a).join(`
`),o=`const expandableTextLong = ${JSON.stringify(a)}
const expandableTextPreviewStyle = { minWidth: 100, maxWidth: 400 }`,d=`${o}
const ExpandableTextOnExpandExample = () => {
  const skipInitialReset = React.useRef(true)
  const handleExpand = (expanded) => {
    if (skipInitialReset.current && !expanded) {
      skipInitialReset.current = false
      return
    }
    alert('expanded: ' + expanded)
  }
  return (
    <div style={expandableTextPreviewStyle}>
      <ExpandableText onExpand={handleExpand}>{expandableTextLong}</ExpandableText>
    </div>
  )
}`;try{a.displayName="EXPANDABLE_TEXT_MOCK_BODY",a.__docgenInfo={description:"Длинный текст для Playground, Examples и документации",displayName:"EXPANDABLE_TEXT_MOCK_BODY",props:{}}}catch{}try{s.displayName="EXPANDABLE_TEXT_MOCK_WITH_BREAKS",s.__docgenInfo={description:"Тот же текст с переносами строк — для примеров с многострочным отображением",displayName:"EXPANDABLE_TEXT_MOCK_WITH_BREAKS",props:{}}}catch{}try{o.displayName="expandableTextLongExampleCode",o.__docgenInfo={description:"setupCode для react-live в ExpandableText.documentation.mdx",displayName:"expandableTextLongExampleCode",props:{}}}catch{}try{d.displayName="expandableTextOnExpandExampleSetupCode",d.__docgenInfo={description:"setupCode для блока onExpand: игнорирует программный onExpand(false) при монтировании",displayName:"expandableTextOnExpandExampleSetupCode",props:{}}}catch{}const R=["BTR2","BTR3","BTR4","BTR5","BTM2","BTM3","BTM4","BTM5","MTR3","MTR4"],O=Object.keys(m.text).filter(e=>e!=="link"),I=(e,n={})=>T(f[e],n),N={children:a,type:"BTR3",useGradient:!1},x={type:{description:"Типографический стиль текста",control:"select",options:[...R]},color:{description:"Цвет текста",control:"select",options:[...O]},useGradient:{description:"Режим обрезки с градиентным затуханием справа вместо многоточия",control:"boolean"},children:I("children",{description:"Содержимое блока: строка или произвольный React-узел (например, Link)."}),altText:{description:"Альтернативный текст для атрибута title при обрезке. Если не задан, используется строковое содержимое children",control:"text"}},E={argTypes:_(c,x),args:{...N,testId:"expandable-text-test-id",klId:"expandable-text-kl-id"},decorators:[(e,n)=>r.createElement(b,{style:{minWidth:"100px",maxWidth:"400px"}},r.createElement(e,{...n}))],parameters:{badges:[u.stable,u.missingDesign],docs:{page:y(D)}}},L={title:"Hexa UI Components/ExpandableText",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["expandableTextStorySettings"],...E},t={name:"Playground",parameters:{controls:{include:g(x),sort:"none"}}};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(expandableTextPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const M=["expandableTextStorySettings","Playground"],H=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:M,default:L,expandableTextStorySettings:E},Symbol.toStringTag,{value:"Module"}));export{H as E,d as a,s as b,E as c,a as d,o as e};
