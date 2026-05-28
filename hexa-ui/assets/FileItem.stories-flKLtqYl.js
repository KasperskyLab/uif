import{w as c}from"./withDesignControls-BJW3n3fk.js";import{r as u}from"./StoryComponents-CK00MLxU.js";import{R as t,H as g}from"./iframe-DGvJ380d.js";import{M as b}from"./meta-Bi9iMNKH.js";import{F as d}from"./FileItem-5NKgeuxS.js";import"./Divider-EZz3gDRj.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IWItRl7b.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";import"./type-fFl6OLJD.js";import"./colors-gQKfGPjt.js";import"./wave-CATF4J87.js";import"./Popover-CqARYnm2.js";import"./preload-helper-C1FmrZbK.js";import"./Loader-CMdXHI8c.js";import"./index-ep_dZgWZ.js";import"./StatusDangerOutlineSquare-Xa4nOcc_.js";import"./useTranslation-DicaTb9e.js";const _={title:"Hexa UI Components/Upload/File Item",component:d,tags:["!autodocs"],...c({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(d)`
  max-width: 540px;
`,o={render:e=>t.createElement(r,{...e}),name:"File Item"},a={render:e=>u([{label:"default",content:t.createElement(r,{...e,status:"done"})},{label:"uploading",content:t.createElement(r,{...e,percent:50,status:"uploading"})},{label:"error",content:t.createElement(r,{...e,status:"error"})},{label:"disabled",content:t.createElement(r,{...e,disabled:!0,status:"done"})}],!0)};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <StyledFileItem {...args} />,
  name: 'File Item'
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'default',
    content: <StyledFileItem {...args} status="done" />
  }, {
    label: 'uploading',
    content: <StyledFileItem {...args} percent={50} status="uploading" />
  }, {
    label: 'error',
    content: <StyledFileItem {...args} status="error" />
  }, {
    label: 'disabled',
    content: <StyledFileItem {...args} disabled status="done" />
  }], true)
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["FileItemStory","Status"];export{o as FileItemStory,a as Status,O as __namedExportsOrder,_ as default};
