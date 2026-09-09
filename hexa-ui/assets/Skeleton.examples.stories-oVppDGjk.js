import{R as e,U as r,S as c}from"./iframe-DedYZBTA.js";import{r as A}from"./StoryComponents--bOGC0xv.js";import{S as t,a as d}from"./Skeleton-DMqYBAAn.js";import{s as B,a as F}from"./Skeleton.stories-u26YcNdQ.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-a_agw1kt.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";const Y={title:"Hexa UI Components/Skeleton/Stories",component:t,tags:["!autodocs"],...B},l={render:n=>e.createElement(t,{...n,style:n.size==="flex"?{height:120,width:640}:{}})},i={render:n=>A(F.map(a=>({label:a,content:e.createElement(t,{...n,size:a,style:a==="flex"?{height:120,width:640}:{}})}))),args:{flexWidth:!1}},s={render:()=>e.createElement(d,null,e.createElement(t,{size:r.Medium}),e.createElement(t,{size:r.Small}))},o={render:()=>e.createElement(d,null,e.createElement(t,{size:r.Medium}),e.createElement(t,{size:r.Small}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Medium}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Medium}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}),e.createElement(t,{size:r.Large,flexWidth:!0}))},m={render:()=>e.createElement(d,{style:{width:568}},e.createElement(c,{gap:16,direction:"vertical"},e.createElement(t,{size:"flex",style:{height:188}}),e.createElement(c,{gap:8},e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}}))))},p={render:()=>e.createElement(d,{style:{width:1018}},e.createElement(c,{gap:8,direction:"vertical"},[...Array(12).keys()].map(n=>e.createElement(c,{gap:8,wrap:"nowrap",key:`skeleton-table-row-${n}`},[...Array(5).keys()].map(a=>e.createElement(t,{size:r.Large,flexWidth:!0,key:`skeleton-table-cell-${n}${a}`,style:a===0?{width:20,flex:"none"}:{}}))))))};var S,h,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Skeleton {...args} style={args.size === 'flex' ? {
    height: 120,
    width: 640
  } : {}} />
}`,...(z=(h=l.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var g,u,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => renderVariants(skeletonSizes.map(size => ({
    label: size,
    content: <Skeleton {...args} size={size} style={size === 'flex' ? {
      height: 120,
      width: 640
    } : {}} />
  })), true),
  args: {
    flexWidth: false
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var y,f,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate>
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Small} />
    </SkeletonTemplate>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,E,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate>
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Small} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
    </SkeletonTemplate>
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var W,L,b;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate style={{
    width: 568
  }}>
      <Space gap={16} direction="vertical">
        <Skeleton size="flex" style={{
        height: 188
      }} />
        <Space gap={8}>
          <Skeleton size="flex" style={{
          height: 20,
          width: 80
        }} />
          <Skeleton size="flex" style={{
          height: 20,
          width: 80
        }} />
          <Skeleton size="flex" style={{
          height: 20,
          width: 80
        }} />
          <Skeleton size="flex" style={{
          height: 20,
          width: 80
        }} />
        </Space>
      </Space>
    </SkeletonTemplate>
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var M,$,v;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate style={{
    width: 1018
  }}>
      <Space gap={8} direction="vertical">
        {[...Array(12).keys()].map(row => <Space gap={8} wrap="nowrap" key={\`skeleton-table-row-\${row}\`}>
            {[...Array(5).keys()].map(cell => <Skeleton size={SizeType.Large} flexWidth={true} key={\`skeleton-table-cell-\${row}\${cell}\`} style={cell === 0 ? {
          width: 20,
          flex: 'none'
        } : {}} />)}
          </Space>)}
      </Space>
    </SkeletonTemplate>
}`,...(v=($=p.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const Z=["Basic","Sizes","TemplateTitle","TemplateForm","TemplateWidget","TemplateTable"];export{l as Basic,i as Sizes,o as TemplateForm,p as TemplateTable,s as TemplateTitle,m as TemplateWidget,Z as __namedExportsOrder,Y as default};
