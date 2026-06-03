import{B as o,R as g,b as i}from"./iframe-DNxUu9EZ.js";import{w as S}from"./withDesignControls-BSfDTNns.js";import{w as x}from"./withMeta-CSumKzG1.js";import{r as z}from"./StoryComponents-P_esa1sT.js";import{S as s,M as a}from"./meta-DUzhz--I.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-B9jVBwYf.js";import"./StatusOkOutline-HmfsHsEj.js";import"./Divider-BqwESatj.js";import"./FormLabel-Cx4AUgy7.js";import"./Markdown-CCHl0-MZ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CXyjrR-G.js";import"./Tag-Bg9hE3PN.js";import"./TextReducer-BbcQcxF5.js";import"./StatusDangerSolid1-B08ZoF4r.js";import"./Group-COY30YIT.js";import"./index-qOx2FGCH.js";import"./type-rfDjHVUQ.js";import"./colors-5zN7FiNY.js";import"./wave-DYMnJ7p6.js";const h=[o.Small,o.Medium,o.Large,"flex"],y={parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:x(a)},controls:{exclude:/(tooltip)/},design:a.pixsoView}},O={title:"Hexa UI Components/Skeleton",component:s,...S({componentName:"skeleton",meta:y})},t={render:({...e})=>g.createElement(s,{...e,style:e.size==="flex"?{height:120,width:640}:{}}),argTypes:{size:{options:h,control:{type:"select"}},flexWidth:{control:{type:"boolean"}}},args:{flexWidth:!1,size:o.Medium}},n={render:({...e})=>z(h.map(r=>({label:r,content:g.createElement(s,{...e,size:r,style:r==="flex"?{height:120,width:640}:{}})})),!0),argTypes:{flexWidth:{control:{type:"boolean"}},size:{control:!1}},args:{flexWidth:!1}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
