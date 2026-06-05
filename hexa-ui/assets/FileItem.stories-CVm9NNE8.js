import{w as c}from"./withDesignControls-O0YipJuC.js";import{r as u}from"./StoryComponents-QjNSv2Lj.js";import{R as t,H as g}from"./iframe-DiWy1KYN.js";import{M as b}from"./meta-Bi9iMNKH.js";import{F as d}from"./FileItem-DStwSaiS.js";import"./Divider-CzZqKtxh.js";import"./FormLabel-DpFLHhSH.js";import"./Markdown-CYEeQ0YD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DmRRZB2O.js";import"./Tag-C9Ggfcps.js";import"./TextReducer-BeO9eZ_q.js";import"./StatusDangerSolid1-CdxRh6YN.js";import"./Group-CMDnr5NI.js";import"./index-Dld2Nkde.js";import"./type-CWarxUn6.js";import"./colors-CH5oW_vd.js";import"./wave-PPlkdWFv.js";import"./preload-helper-C1FmrZbK.js";import"./Loader-G8s_DU-J.js";import"./index-CmpLDwNs.js";import"./StatusDangerOutlineSquare-i4W-DjO4.js";import"./useTranslation-DDc5jM4w.js";const _={title:"Hexa UI Components/Upload/File Item",component:d,tags:["!autodocs"],...c({componentName:"uploaderFileItem",meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(d)`
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
