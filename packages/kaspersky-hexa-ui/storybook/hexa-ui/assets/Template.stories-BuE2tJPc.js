import{R as e,b as c,B as n,S as i}from"./iframe-zz6a49H8.js";import{w as C}from"./withDesignControls-Cqk9De58.js";import{w as W}from"./withMeta-CjSZnBk7.js";import{S as t,M as S,a as s}from"./meta-CcTGf3d_.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";const L={parameters:{badges:[c.stable,c.reviewedByDesign],docs:{page:W(S)},controls:{exclude:/(tooltip)/},design:S.pixsoView}},I={title:"Hexa UI Components/Skeleton/Templates",component:t,...C({componentName:"skeleton",meta:L})},r={parameters:{title:"Hexa UI Components/Skeleton/Template/Title"},render:()=>e.createElement(s,null,e.createElement(t,{size:n.Medium}),e.createElement(t,{size:n.Small})),argTypes:{},args:{}},a={render:()=>e.createElement(s,null,e.createElement(t,{size:n.Medium}),e.createElement(t,{size:n.Small}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Medium}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Medium}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0}),e.createElement(t,{size:n.Large,flexWidth:!0})),argTypes:{},args:{}},l={render:()=>e.createElement(s,{style:{width:568}},e.createElement(i,{gap:16,direction:"vertical"},e.createElement(t,{size:"flex",style:{height:188}}),e.createElement(i,{gap:8},e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}}),e.createElement(t,{size:"flex",style:{height:20,width:80}})))),argTypes:{},args:{}},o={render:()=>e.createElement(s,{style:{width:1018}},e.createElement(i,{gap:8,direction:"vertical"},[...Array(12).keys()].map(m=>e.createElement(i,{gap:8,wrap:"nowrap",key:`skeleton-table-row-${m}`},[...Array(5).keys()].map(p=>e.createElement(t,{size:n.Large,flexWidth:!0,key:`skeleton-table-cell-${m}${p}`,style:p===0?{width:20,flex:"none"}:{}})))))),argTypes:{},args:{}};var d,g,z;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    title: 'Hexa UI Components/Skeleton/Template/Title'
  },
  render: () => <SkeletonTemplate>
      <SkeletonComponent size={SizeType.Medium} />
      <SkeletonComponent size={SizeType.Small} />
    </SkeletonTemplate>,
  argTypes: {},
  args: {}
}`,...(z=(g=r.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var h,k,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate>
      <SkeletonComponent size={SizeType.Medium} />
      <SkeletonComponent size={SizeType.Small} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Medium} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Medium} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
      <SkeletonComponent size={SizeType.Large} flexWidth={true} />
    </SkeletonTemplate>,
  argTypes: {},
  args: {}
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,u,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate style={{
    width: 568
  }}>
      <Space gap={16} direction="vertical">
        <SkeletonComponent size="flex" style={{
        height: 188
      }} />
        <Space gap={8}>
          <SkeletonComponent size="flex" style={{
          height: 20,
          width: 80
        }} />
          <SkeletonComponent size="flex" style={{
          height: 20,
          width: 80
        }} />
          <SkeletonComponent size="flex" style={{
          height: 20,
          width: 80
        }} />
          <SkeletonComponent size="flex" style={{
          height: 20,
          width: 80
        }} />
        </Space>
      </Space>

    </SkeletonTemplate>,
  argTypes: {},
  args: {}
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,E,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SkeletonTemplate style={{
    width: 1018
  }}>
      <Space gap={8} direction="vertical">
        {[...Array(12).keys()].map(row => {
        return <Space gap={8} wrap="nowrap" key={\`skeleton-table-row-\${row}\`}>
              {[...Array(5).keys()].map(cell => {
            return <SkeletonComponent size={SizeType.Large} flexWidth={true} key={\`skeleton-table-cell-\${row}\${cell}\`} style={cell === 0 ? {
              width: 20,
              flex: 'none'
            } : {}} />;
          })}
            </Space>;
      })}
      </Space>
    </SkeletonTemplate>,
  argTypes: {},
  args: {}
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const U=["SkeletonTemplateTitle","SkeletonTemplateForm","SkeletonTemplateWidget","SkeletonTemplateTable"];export{a as SkeletonTemplateForm,o as SkeletonTemplateTable,r as SkeletonTemplateTitle,l as SkeletonTemplateWidget,U as __namedExportsOrder,I as default};
