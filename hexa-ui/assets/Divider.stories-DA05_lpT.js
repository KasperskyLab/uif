import{G as o}from"./iframe-4-PRSI1I.js";import{e as c,g as l,c as p}from"./propPresentation-CfZ5yVim.js";import{D as g}from"./Divider-Cb8Cmzqg.js";import{s as m}from"./resolveDesignControls-CL29RUJI.js";const u="https://pixso.net/app/design/OLGe3169NxKiF9xzs8KAtg",v={pixsoView:u},S=["bold","light","onLightStatic","inverted"],y=["horizontal","vertical"],P=(d,a={})=>c(m[d],a),f={mode:"bold",direction:"horizontal"},s={mode:P("mode",{options:[...S],description:"Цветовой режим линии"}),direction:{description:"Ориентация разделителя",control:"select",options:[...y]}},n={argTypes:p(s),args:{...f,testId:"divider-test-id",klId:"divider-kl-id"},parameters:{badges:[o.stable,o.reviewedByDesign],design:v.pixsoView}},x={title:"Hexa UI Components/Divider",component:g,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["dividerStorySettings"],...n},e={name:"Playground",parameters:{controls:{include:l(s),sort:"none"}}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(dividerPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["dividerStorySettings","Playground"],z=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:b,default:x,dividerStorySettings:n},Symbol.toStringTag,{value:"Module"}));export{z as D,n as d};
