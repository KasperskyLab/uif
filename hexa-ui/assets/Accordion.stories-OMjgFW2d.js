import{M as d,R as e,S as B}from"./iframe-DedYZBTA.js";import{g as E,b as w}from"./propPresentation-BNIeMkgM.js";import{w as O}from"./withMeta-DvkmiJqW.js";import{T as C}from"./Tag-BKPu3-sD.js";import{A as i,a as f,t as V}from"./AccordionPanel-BABIWV5y.js";import{o as A}from"./StatusOkSolid-OcpnRZV_.js";import{o as _}from"./UserAccount-BotbArDw.js";import{b as y,d as D}from"./Accordion.controls-PEEqc9Pf.js";import{I as M}from"./Indicator-Bx9eTEZ-.js";const z={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},I="Accordion",j=`Компонент аккордеона. В качестве основы используется Collapse из библиотеки rc-collapse.

В заголовке аккордеона можно включать дополнительные элементы: tagBefore, indicator, tagAfter, additionalText. Каждый из них включается независимо, можно включить один или сразу несколько.`,K="Компонент Accordion используется для группировки связанного контента, который можно разворачивать и сворачивать. В тело аккордеона можно помещать любой контент (текст / форму и т. д.).",L="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=8415%3A35985",N="https://pixso.net/app/design/YvaWvrS3oaOTkwbdXGoF4Q?page-id=0%3A1",m={dod:z,component:I,description:j,usage:K,designLink:L,pixsoView:N},R={none:void 0,statusOkSolid:e.createElement(A,null),star:e.createElement(V,null),indicator:e.createElement(M,null)},Y={none:void 0,statusOkSolid:e.createElement(A,null),userAccount:e.createElement(B,{gap:4},e.createElement(_,null),"10/10")},F={none:void 0,default:[{value:"Action 1",onClick:t=>t.domEvent.stopPropagation()},{value:"Action 2",onClick:t=>t.domEvent.stopPropagation()}]},H=(t,r)=>{const s=Object.keys(r).filter(o=>!t.includes(o)),a={};for(const o of[...t,...s])a[o]=r[o];return a},b=E(y),S={args:H(b,D),argTypes:w([i,f],y),parameters:{actions:{argTypesRegex:"^on.*"},badges:[d.stable,d.reviewedByDesign],docs:{page:O(m)},design:m.pixsoView}},J={component:i,title:"Hexa UI Components/Accordion",tags:["!autodocs"],includeStories:["Playground"],excludeStories:["accordionStorySettings"],...S},n={name:"Playground",parameters:{controls:{include:b,sort:"none"}},render:({actions:t,additionalText:r,className:s,disabled:a,elementAfter:o,elementBefore:T,shouldDisableActions:k,title:x,titleSize:P,tagAfterLabel:c,tagAfterMode:v,withBorder:l,...h})=>e.createElement(i,{...h,withBorder:l},e.createElement(f,{key:1,actions:F[t],additionalText:r,className:s,disabled:a,elementBefore:R[T],elementAfter:l?Y[o]:void 0,shouldDisableActions:k,tagAfter:c?e.createElement(C,{label:c,mode:v}):void 0,title:x,titleSize:P},"Accordion content"))};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: accordionControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    actions,
    additionalText,
    className,
    disabled,
    elementAfter,
    elementBefore,
    shouldDisableActions,
    title,
    titleSize,
    tagAfterLabel,
    tagAfterMode,
    withBorder,
    ...rest
  }: StoryAccordionProps) => <AccordionComponent {...rest} withBorder={withBorder}>
      <AccordionPanel key={1} actions={actionsVariants[actions]} additionalText={additionalText} className={className} disabled={disabled} elementBefore={elementBeforeVariants[elementBefore]} elementAfter={withBorder ? elementAfterVariants[elementAfter] : undefined} shouldDisableActions={shouldDisableActions} tagAfter={tagAfterLabel ? <Tag label={tagAfterLabel} mode={tagAfterMode} /> : undefined} title={title} titleSize={titleSize}>
        Accordion content
      </AccordionPanel>
    </AccordionComponent>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const Q=["accordionStorySettings","Playground"],oe=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:Q,accordionStorySettings:S,default:J},Symbol.toStringTag,{value:"Module"}));export{oe as A};
