import{M as n,R as g,G as i}from"./iframe-4-PRSI1I.js";import{w as S}from"./withDesignControls-DTwO-e1q.js";import{w as x}from"./withMeta-BwOuJ6tr.js";import{r as z}from"./StoryComponents-BWv8uEx9.js";import{M as a}from"./meta-1N84hBEJ.js";import{S as s}from"./Skeleton-CzMM9yFj.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";const h=[n.Small,n.Medium,n.Large,"flex"],y={parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:x(a)},controls:{exclude:/(tooltip)/},design:a.pixsoView}},J={title:"Hexa UI Components/Skeleton",component:s,...S({meta:y})},t={render:({...e})=>g.createElement(s,{...e,style:e.size==="flex"?{height:120,width:640}:{}}),argTypes:{size:{options:h,control:{type:"select"}},flexWidth:{control:{type:"boolean"}}},args:{flexWidth:!1,size:n.Medium}},o={render:({...e})=>z(h.map(r=>({label:r,content:g.createElement(s,{...e,size:r,style:r==="flex"?{height:120,width:640}:{}})}))),argTypes:{flexWidth:{control:{type:"boolean"}},size:{control:!1}},args:{flexWidth:!1}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...rest
  }: SkeletonProps) => <SkeletonComponent {...rest} style={rest.size === 'flex' ? {
    height: 120,
    width: 640
  } : {}} />,
  argTypes: {
    size: {
      options: skeletonSizes,
      control: {
        type: 'select'
      }
    },
    flexWidth: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    flexWidth: false,
    size: SizeType.Medium
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    ...rest
  }: SkeletonProps) => renderVariants(skeletonSizes.map(size => ({
    label: size,
    content: <SkeletonComponent {...rest} size={size} style={size === 'flex' ? {
      height: 120,
      width: 640
    } : {}} />
  })), true),
  argTypes: {
    flexWidth: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: false
    }
  },
  args: {
    flexWidth: false
  }
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const K=["Skeleton","Size"];export{o as Size,t as Skeleton,K as __namedExportsOrder,J as default};
