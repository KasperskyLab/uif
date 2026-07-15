import{G as t,R as o,H as p}from"./iframe-4-PRSI1I.js";import{e as u,g as m,c as g}from"./propPresentation-CfZ5yVim.js";import{w as y}from"./withMeta-BwOuJ6tr.js";import{o as v}from"./Placeholder-DoG1ulbQ.js";import{H as b}from"./HorizontalNav-Cm4oo849.js";const f={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},S="HorizontalNav",h="Отображает панель с элементами навигации и управления в некоторых продуктах.",k="HorizontalNav — это интерактивный компонент...",x="",z="",r={dod:f,component:S,description:h,usage:k,designLink:x,pixsoView:z},P={borderless:!1},l={activeKey:{control:"text",description:"Ключ активного пункта навигации в контролируемом режиме"},borderless:u({control:{type:"boolean"}})},H=p.div`
  flex: 1;
  nav {
    width: 100%;
  }
`,N=[{label:"One",key:"one",componentsAfter:[o.createElement(v,{key:"placeholder-icon"}),o.createElement("span",{key:"badge",style:{fontSize:12,color:"var(--hexa-ui-color-control-neutral-default)"}},"9")]},{label:"Two",key:"two"},{label:"Three",key:"three",selected:!0},{label:"Four",key:"four"},{label:"Five",key:"five"},{label:"Six",key:"six",disabled:!0},{label:"Seven Eleven",key:"sevenEleven"}],i={argTypes:g(l),args:{...P,items:N},parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:y(r)},design:r.pixsoView},decorators:[(c,d)=>o.createElement(H,null,o.createElement(c,{...d}))]},T={title:"Hexa UI Components/HorizontalNav",component:b,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["horizontalNavStorySettings"],...i},e={name:"Playground",parameters:{controls:{include:m(l),sort:"none"}}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(horizontalNavPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["horizontalNavStorySettings","Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:w,default:T,horizontalNavStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{I as H};
