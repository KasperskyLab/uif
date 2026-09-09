import{U as t,M as n,R as c}from"./iframe-DedYZBTA.js";import{g as p,c as g}from"./propPresentation-BNIeMkgM.js";import{S as l}from"./Skeleton-DMqYBAAn.js";const m="https://pixso.net/app/design/w0W4gLFjwQpE8XQ6Kyh3nQ",u={pixsoView:m},S=[t.Small,t.Medium,t.Large,"flex"],y={flexWidth:!1,size:t.Medium},i={size:{control:"select",options:[...S],description:"Размер и габариты заглушки"},flexWidth:{control:"boolean",description:"Растягивать заглушку на доступную ширину"}},d={argTypes:g(i),args:y,parameters:{badges:[n.stable,n.reviewedByDesign],design:u.pixsoView}},f={title:"Hexa UI Components/Skeleton",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["skeletonStorySettings"],...d},e={name:"Playground",parameters:{controls:{include:p(i),sort:"none"}},render:o=>c.createElement(l,{...o,style:o.size==="flex"?{height:120,width:640}:{}})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(skeletonPropPresentation),
      sort: 'none'
    }
  },
  render: (rest: SkeletonProps) => <SkeletonComponent {...rest} style={rest.size === 'flex' ? {
    height: 120,
    width: 640
  } : {}} />
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["skeletonStorySettings","Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:x,default:f,skeletonStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{b as S,S as a,d as s};
