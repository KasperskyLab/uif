import{M as e,G as t,R as g}from"./iframe-4-PRSI1I.js";import{e as m,c as u,g as S}from"./propPresentation-CfZ5yVim.js";import{L as i}from"./Loader-CzWCOjAf.js";import{s as y}from"./resolveDesignControls-CL29RUJI.js";const P="https://pixso.net/app/design/d3TkLc_A__Df0mBKigHugA",f={pixsoView:P},x=["default","inverted"],b=[e.ExtraSmall,e.Small,e.Medium,e.Large,e.ExtraLarge],n=(r,p={})=>m(y[r],p),L={mode:"default",size:e.Small,spinning:!0,centered:!1,delay:0,tip:""},l={mode:n("mode",{options:[...x],description:"Цветовой режим индикатора загрузки"}),size:n("size",{options:[...b],description:"Размер индикатора и подписи"}),spinning:{control:"boolean",description:"Показывать индикатор загрузки"},centered:{control:"boolean",description:"Центрировать индикатор внутри родительского контейнера"},delay:{control:"number",description:"Задержка перед показом индикатора, мс"},tip:{control:"text",description:"Текстовая подпись рядом с индикатором"}},c={argTypes:u(l),args:{...L,testId:"loader-test-id",klId:"loader-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],design:f.pixsoView}},_={title:"Hexa UI Components/Loader",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["loaderStorySettings"],...c},o={name:"Playground",parameters:{controls:{include:S(l),sort:"none"}},render:r=>g.createElement(i,{...r})};var s,a,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loaderPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoaderProps) => <Loader {...args} />
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const z=["loaderStorySettings","Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:z,default:_,loaderStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{E as L,c as l};
