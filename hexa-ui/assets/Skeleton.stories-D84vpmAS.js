import{B as o,R as g,b as i}from"./iframe-WWmuoJVo.js";import{w as S}from"./withDesignControls-4bH3LeSg.js";import{w as x}from"./withMeta-B27OU3Ju.js";import{r as z}from"./StoryComponents-_lDaatyR.js";import{S as s,M as a}from"./meta-em6BTT8V.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Divider-2duFHEPw.js";import"./FormLabel-C5Hc4K2h.js";import"./Markdown-BGmAiIQ8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DwSAzC79.js";import"./Tag-CZpHHsSN.js";import"./TextReducer-9CK0p8eL.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./Group-DGlPc1vl.js";import"./index-toe1S0SQ.js";import"./type-CH-zv0M5.js";import"./colors-CeinHcp_.js";import"./wave-BKxtHpDI.js";const h=[o.Small,o.Medium,o.Large,"flex"],y={parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:x(a)},controls:{exclude:/(tooltip)/},design:a.pixsoView}},O={title:"Hexa UI Components/Skeleton",component:s,...S({componentName:"skeleton",meta:y})},t={render:({...e})=>g.createElement(s,{...e,style:e.size==="flex"?{height:120,width:640}:{}}),argTypes:{size:{options:h,control:{type:"select"}},flexWidth:{control:{type:"boolean"}}},args:{flexWidth:!1,size:o.Medium}},n={render:({...e})=>z(h.map(r=>({label:r,content:g.createElement(s,{...e,size:r,style:r==="flex"?{height:120,width:640}:{}})})),!0),argTypes:{flexWidth:{control:{type:"boolean"}},size:{control:!1}},args:{flexWidth:!1}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const U=["Skeleton","Size"];export{n as Size,t as Skeleton,U as __namedExportsOrder,O as default};
