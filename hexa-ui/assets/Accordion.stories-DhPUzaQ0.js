import{G as d,R as e,S as B}from"./iframe-4-PRSI1I.js";import{g as E,b as w}from"./propPresentation-CfZ5yVim.js";import{w as O}from"./withMeta-BwOuJ6tr.js";import{I as C}from"./Indicator-D1HJCmfp.js";import{T as V}from"./Tag-B3SARhhR.js";import{t as _}from"./ArrowRight-CuhTodaW.js";import{o as f}from"./StatusOkSolid-D4PIpJ4i.js";import{o as D}from"./UserAccount-DABOZSyI.js";import{A as i,a as A}from"./AccordionPanel-B5gd3z85.js";import{b as y,d as M}from"./Accordion.controls-FS-coXnO.js";const z={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},I="Accordion",j=`Компонент аккордеона. В качестве основы используется Collapse из библиотеки rc-collapse.

В заголовке аккордеона можно включать дополнительные элементы: tagBefore, indicator, tagAfter, additionalText. Каждый из них включается независимо, можно включить один или сразу несколько.`,K="Компонент Accordion используется для группировки связанного контента, который можно разворачивать и сворачивать. В тело аккордеона можно помещать любой контент (текст / форму и т. д.).",L="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=8415%3A35985",N="https://pixso.net/app/design/YvaWvrS3oaOTkwbdXGoF4Q?page-id=0%3A1",m={dod:z,component:I,description:j,usage:K,designLink:L,pixsoView:N},R={none:void 0,statusOkSolid:e.createElement(f,null),star:e.createElement(_,null),indicator:e.createElement(C,null)},Y={none:void 0,statusOkSolid:e.createElement(f,null),userAccount:e.createElement(B,{gap:4},e.createElement(D,null),"10/10")},F={none:void 0,default:[{value:"Action 1",onClick:t=>t.domEvent.stopPropagation()},{value:"Action 2",onClick:t=>t.domEvent.stopPropagation()}]},G=(t,r)=>{const s=Object.keys(r).filter(o=>!t.includes(o)),a={};for(const o of[...t,...s])a[o]=r[o];return a},b=E(y),S={args:G(b,M),argTypes:w([i,A],y),parameters:{actions:{argTypesRegex:"^on.*"},badges:[d.stable,d.reviewedByDesign],docs:{page:O(m)},design:m.pixsoView}},H={component:i,title:"Hexa UI Components/Accordion",tags:["!autodocs"],includeStories:["Playground"],excludeStories:["accordionStorySettings"],...S},n={name:"Playground",parameters:{controls:{include:b,sort:"none"}},render:({actions:t,additionalText:r,className:s,disabled:a,elementAfter:o,elementBefore:T,shouldDisableActions:k,title:x,titleSize:P,tagAfterLabel:c,tagAfterMode:v,withBorder:l,...h})=>e.createElement(i,{...h,withBorder:l},e.createElement(A,{key:1,actions:F[t],additionalText:r,className:s,disabled:a,elementBefore:R[T],elementAfter:l?Y[o]:void 0,shouldDisableActions:k,tagAfter:c?e.createElement(V,{label:c,mode:v}):void 0,title:x,titleSize:P},"Accordion content"))};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const J=["accordionStorySettings","Playground"],ne=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:J,accordionStorySettings:S,default:H},Symbol.toStringTag,{value:"Module"}));export{ne as A};
