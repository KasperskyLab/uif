import{w as c}from"./withDesignControls-yuab2QJ2.js";import{r as u}from"./StoryComponents-DU1XkORc.js";import{R as t,H as g}from"./iframe-DVE_7kq9.js";import{M as b}from"./meta-Bi9iMNKH.js";import{F as d}from"./FileItem-CO_t9hSd.js";import"./Divider-B0XUs7Vt.js";import"./FormLabel-CyTz6ltR.js";import"./Markdown-bfgL_FF5.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D2gFaQHm.js";import"./Tag-osrmA0i2.js";import"./TextReducer-Ct5Blcav.js";import"./StatusDangerSolid1-jJjmvO6K.js";import"./Group-Deg5VM3T.js";import"./index-DGIJDX9_.js";import"./type-CaOsV2Rp.js";import"./colors-Z4HTaick.js";import"./wave-D4avGR4B.js";import"./preload-helper-C1FmrZbK.js";import"./Loader-B40QQF8n.js";import"./index-nHA8zgOJ.js";import"./StatusDangerOutlineSquare-Du_eJu5D.js";import"./useTranslation-2jIOXqSO.js";const _={title:"Hexa UI Components/Upload/File Item",component:d,tags:["!autodocs"],...c({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(d)`
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
