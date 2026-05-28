import{w as c}from"./withDesignControls-Dajn4y-W.js";import{r as u}from"./StoryComponents-BDqNr-mg.js";import{R as t,H as g}from"./iframe-DWiAMwiJ.js";import{M as b}from"./meta-Bi9iMNKH.js";import{F as d}from"./FileItem-DLcR2V7n.js";import"./Divider-2J9VGgGt.js";import"./FormLabel-3k_y6lu4.js";import"./Markdown-BpV2EpEd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Ddqi07m5.js";import"./TextReducer-C-XmrgW7.js";import"./StatusDangerSolid1-gO3LFKBN.js";import"./Group-DSKN_3Aa.js";import"./index-BwymO1JM.js";import"./type-C6K9kL-Y.js";import"./colors-CMfgFrbo.js";import"./wave-K91TzWO2.js";import"./Popover-aWS8RO_S.js";import"./preload-helper-C1FmrZbK.js";import"./Loader-BAjDiBRp.js";import"./index-DP9ivqwc.js";import"./StatusDangerOutlineSquare-Bzm3Eoq6.js";import"./useTranslation-bJGh7SA8.js";const _={title:"Hexa UI Components/Upload/File Item",component:d,tags:["!autodocs"],...c({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(d)`
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
