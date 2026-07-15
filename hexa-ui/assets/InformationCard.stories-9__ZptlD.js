import{G as t,R as C}from"./iframe-4-PRSI1I.js";import{g as u,b as S}from"./propPresentation-CfZ5yVim.js";import{w as V}from"./withMeta-BwOuJ6tr.js";import{M as n,d as y,r as b,a as I,b as v,c as P,i as d}from"./InformationCard.controls-BeqN9qap.js";import{I as o}from"./InformationCard-Dg21BxEF.js";const h=u(d),l={argTypes:S(o,d),args:{...y,testId:"information-card-test-id",klId:"information-card-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:V(n)},design:n.pixsoView}},_={title:"Hexa UI Components/InformationCard",component:o,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["informationCardStorySettings"],...l},r={name:"Playground",parameters:{controls:{include:h,sort:"none"}},render:({leftSideVariant:m,rightCornerVariant:f,contentVariant:c,footerVariant:g,disabled:e,...p})=>C.createElement(o,{...p,disabled:e,leftSide:v(m),rightCorner:I(f,e),footer:b(g,e)},P(c,e))};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: informationCardControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    leftSideVariant,
    rightCornerVariant,
    contentVariant,
    footerVariant,
    disabled,
    ...rest
  }) => <InformationCardComponent {...rest} disabled={disabled} leftSide={resolveLeftSideVariant(leftSideVariant)} rightCorner={resolveRightCornerVariant(rightCornerVariant, disabled)} footer={resolveFooterVariant(footerVariant, disabled)}>
      {resolveContentVariant(contentVariant, disabled)}
    </InformationCardComponent>
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const x=["informationCardStorySettings","Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:x,default:_,informationCardStorySettings:l},Symbol.toStringTag,{value:"Module"}));export{T as I};
