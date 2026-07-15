import{G as t,R as r}from"./iframe-4-PRSI1I.js";import{e as p,g as c,c as m}from"./propPresentation-CfZ5yVim.js";import{L as i}from"./LoadingOverlay-1nCL500O.js";import{s as y}from"./resolveDesignControls-CL29RUJI.js";const u="https://pixso.net/app/design/i8fXxTZRpzYH0MorPCNhzA",v={pixsoView:u},O=["medium","large"],P=(e,g={})=>p(y[e],g),S={size:"medium",description:"help text"},l={size:P("size",{options:[...O],description:"Размер индикатора загрузки"}),description:{control:"text",description:"Текстовая подсказка под индикатором"}},d={argTypes:m(l),args:{...S,testId:"loading-overlay-test-id"},parameters:{badges:[t.stable,t.reviewedByDesign],design:v.pixsoView}},f={title:"Hexa UI Components/LoadingOverlay",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["loadingOverlayStorySettings"],...d};function x({children:e}){return r.createElement("div",{style:{border:"1px solid grey",height:300,padding:20,position:"relative",width:500}},e)}const o={name:"Playground",parameters:{controls:{include:c(l),sort:"none"}},render:e=>r.createElement(x,null,r.createElement(i,{...e}))};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loadingOverlayPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoadingOverlayProps) => <OverlayContainer>
      <LoadingOverlayComponent {...args} />
    </OverlayContainer>
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["loadingOverlayStorySettings","Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:C,default:f,loadingOverlayStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{_ as L,d as l};
