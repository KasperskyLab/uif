import{aE as d,M as t,R as o}from"./iframe-DedYZBTA.js";import{g as p,c as x}from"./propPresentation-BNIeMkgM.js";import{T as f}from"./TextDiff-DnwtAEVE.js";const g="https://pixso.net/app/design/qs-kMW-Up7rNo1Mioc4UOQ",m={pixsoView:g},u={newText:"Новая версия текста",oldText:"Предыдущая версия текста",textType:"BTR3"},a={newText:{description:"Добавленный текст",control:"text"},oldText:{description:"Удалённый текст",control:"text"},textType:{description:"Типографический стиль текста",control:"select",options:Object.keys(d)}},i={argTypes:x(a),args:u,parameters:{badges:[t.stable,t.reviewedByDesign],design:m.pixsoView},decorators:[(c,l)=>o.createElement("div",{style:{width:200}},o.createElement(c,{...l}))]},y={title:"Hexa UI Components/TextDiff",component:f,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["textDiffStorySettings"],...i},e={parameters:{controls:{include:p(a),sort:"none"}}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: getControlsInclude(textDiffPropPresentation),
      sort: 'none'
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const T=["textDiffStorySettings","Playground"],P=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:T,default:y,textDiffStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{P as T,i as t};
