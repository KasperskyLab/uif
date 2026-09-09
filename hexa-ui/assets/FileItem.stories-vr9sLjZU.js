import{w as d}from"./withDesignControls-DTwO-e1q.js";import{r as u}from"./StoryComponents--bOGC0xv.js";import{R as t,H as g}from"./iframe-DedYZBTA.js";import{M as b}from"./meta-DGlVGJ6F.js";import{F as p}from"./FileItem-DxEC4fKm.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./Download2-CuwAL7pw.js";import"./Reload-DfpUPU2e.js";import"./useTranslation-od-Kmf1k.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";const U={title:"Hexa UI Components/Uploader/Stories",component:p,tags:["!autodocs"],...d({meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:b.pixsoView}}})},r=g(p)`
  max-width: 540px;
`,o={render:e=>t.createElement(r,{...e}),name:"File Item"},a={render:e=>u([{label:"default",content:t.createElement(r,{...e,status:"done"})},{label:"uploading",content:t.createElement(r,{...e,percent:50,status:"uploading"})},{label:"success",content:t.createElement(r,{...e,status:"success"})},{label:"error",content:t.createElement(r,{...e,status:"error"})},{label:"disabled",content:t.createElement(r,{...e,disabled:!0,status:"done"})}])};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <StyledFileItem {...args} />,
  name: 'File Item'
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'default',
    content: <StyledFileItem {...args} status="done" />
  }, {
    label: 'uploading',
    content: <StyledFileItem {...args} percent={50} status="uploading" />
  }, {
    label: 'success',
    content: <StyledFileItem {...args} status="success" />
  }, {
    label: 'error',
    content: <StyledFileItem {...args} status="error" />
  }, {
    label: 'disabled',
    content: <StyledFileItem {...args} disabled status="done" />
  }], true)
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const _=["FileItemStory","Status"];export{o as FileItemStory,a as Status,_ as __namedExportsOrder,U as default};
