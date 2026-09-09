import{M as n,A as o,R as e,aB as g}from"./iframe-DedYZBTA.js";import{g as f,b as h}from"./propPresentation-BNIeMkgM.js";import{w as A}from"./withMeta-DvkmiJqW.js";import{t as b}from"./ArrowRight-DWYHjndK.js";import{o as B}from"./CrossM-DucbsMYv.js";import{o as y}from"./Delete-27yiPRcg.js";import{o as S}from"./Heart-DrE4rlRx.js";import{o as I}from"./Placeholder-DXWNW80D.js";import{r as w}from"./SettingsGear-Cl0aLKMC.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},x="ActionButton",E="",T="",k="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=37351%3A135400",M="https://pixso.net/app/design/baMVlwjdCPNeNIdlgKHIYA",s={dod:v,component:x,description:E,usage:T,designLink:k,pixsoView:M},P=["small","medium","large"],R=["ghost","ghostInverted","filled","filledInverted","onLight"],V=["heart","placeholder","settingsGear","crossM","delete","none"],_=["arrowRight","crossM","none"],l={mode:{control:"select",description:"Стиль кнопки",options:R},size:{control:"select",description:"Размер кнопки",options:P},children:{control:"text",description:"Текст кнопки"},interactive:{control:"boolean",description:"Включает hover и active состояния"},disabled:{control:"boolean",description:"Отключенное состояние"},noIcon:{control:"boolean",description:"Скрывает иконку"},icon:{control:"select",description:"Иконка или ReactNode перед текстом",options:[...V]},elementAfter:{control:"select",description:"Иконка или ReactNode после текста",options:[..._]}},z=f(l),r={placeholder:e.createElement(I,null),close:e.createElement(g,null),crossM:e.createElement(B,null),heart:e.createElement(S,null),settingsGear:e.createElement(w,null),delete:e.createElement(y,null),arrowRight:e.createElement(b,null),none:void 0},d={args:{mode:"ghost",size:"medium",children:"Action",interactive:!0,disabled:!1,noIcon:!1,testId:"action-button-test-id",klId:"action-button-kl-id"},parameters:{badges:[n.stable,n.reviewedByDesign],docs:{page:A(s)},design:s.pixsoView}},C={title:"Hexa UI Components/ActionButton",component:o,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["actionButtonStorySettings"],...d,argTypes:h(o,l),args:{mode:"ghost",size:"medium",children:"Action",interactive:!0,disabled:!1,noIcon:!1,testId:"action-button-test-id",klId:"action-button-kl-id",icon:"placeholder",elementAfter:"none"}},t={args:{mode:"filled",size:"large",icon:"settingsGear",elementAfter:"arrowRight",children:"This is ActionButton"},name:"Playground",render:({icon:m,elementAfter:p,...u})=>e.createElement(o,{...u,elementAfter:r[p],icon:r[m]}),parameters:{controls:{include:z,sort:"none"}}};var i,a,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'filled',
    size: 'large',
    icon: 'settingsGear',
    elementAfter: 'arrowRight',
    children: 'This is ActionButton'
  },
  name: 'Playground',
  render: ({
    icon,
    elementAfter,
    ...rest
  }) => <ActionButtonComponent {...rest} elementAfter={iconVariants[elementAfter]} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: actionButtonControlsOrder,
      sort: 'none'
    }
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const O=["actionButtonStorySettings","Playground"],L=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:O,actionButtonStorySettings:d,default:C},Symbol.toStringTag,{value:"Module"}));export{L as A,d as a};
