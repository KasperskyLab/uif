import{R as e,b as i}from"./iframe-DlY6n6Um.js";import{S as l}from"./StoryComponents-5Ni7_M0_.js";import{l as c}from"./Placeholder-DRo8POZa.js";import{M as d}from"./meta-BPjjWn3_.js";import{T as m}from"./TagReductionGroup-Ck6EQPtk.js";import"./preload-helper-C1FmrZbK.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Popover-D8ys_ap7.js";import"./useImmutableRef-DwVoIExC.js";import"./useResizeObserver-CIT607-3.js";const H={title:"Hexa UI Components/Tag/Reduction",component:m,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[i.stable,i.reviewedByDesign],design:d.pixsoView},decorators:[(t,r)=>e.createElement("div",{style:{width:400}},e.createElement(t,{...r}))]},o={render:({items:t,...r})=>e.createElement(l,null,e.createElement(m,{items:t,...r}),e.createElement(m,{items:t.map(p=>({...p,icon:e.createElement(c,null)})),...r}))};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    items,
    ...rest
  }: TagReductionGroupProps) => <StoryColumn>
      <TagReductionGroup items={items} {...rest} />
      <TagReductionGroup items={items.map(item => ({
      ...item,
      icon: <Placeholder />
    }))} {...rest} />
    </StoryColumn>
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const I=["ReductionGroup"];export{o as ReductionGroup,I as __namedExportsOrder,H as default};
