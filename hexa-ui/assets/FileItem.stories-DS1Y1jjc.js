import{w as c}from"./withDesignControls-CUCSz6At.js";import{r as u}from"./StoryComponents-BG6DEix0.js";import{R as t,H as g}from"./iframe-CBNIXqWm.js";import{M as b}from"./meta-Bi9iMNKH.js";import{F as d}from"./FileItem-CsrXHrCA.js";import"./Divider-ja1HbPIW.js";import"./FormLabel-Cy2q2kGk.js";import"./Markdown-CxshTH5T.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-BHGhJBJm.js";import"./Tag-DB-z3Swo.js";import"./TextReducer-BqEbiIRi.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./Group-Bda88l4J.js";import"./index-DPzFOva3.js";import"./type-YzYuwFG9.js";import"./colors-AIlJBz8g.js";import"./wave-C4_7brB4.js";import"./preload-helper-C1FmrZbK.js";import"./Loader-vJbmmTbY.js";import"./index-Cxj_l2qe.js";import"./StatusDangerOutlineSquare-9vd3YrA5.js";import"./useTranslation-rAGXttfk.js";const _={title:"Hexa UI Components/Upload/File Item",component:d,tags:["!autodocs"],...c({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(d)`
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
