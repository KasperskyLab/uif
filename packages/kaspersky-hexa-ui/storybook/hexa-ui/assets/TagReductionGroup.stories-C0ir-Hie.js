import{R as e,b as i}from"./iframe-zz6a49H8.js";import{S as l}from"./StoryComponents-C4fwEYRs.js";import{l as c}from"./Placeholder-Bv52avk_.js";import{M as d}from"./meta-BPjjWn3_.js";import{T as m}from"./TagReductionGroup-CsggUlLJ.js";import"./preload-helper-C1FmrZbK.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./useImmutableRef-owuA66Vn.js";import"./useResizeObserver-LOJkjDvr.js";const H={title:"Hexa UI Components/Tag/Reduction",component:m,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[i.stable,i.reviewedByDesign],design:d.pixsoView},decorators:[(t,r)=>e.createElement("div",{style:{width:400}},e.createElement(t,{...r}))]},o={render:({items:t,...r})=>e.createElement(l,null,e.createElement(m,{items:t,...r}),e.createElement(m,{items:t.map(p=>({...p,icon:e.createElement(c,null)})),...r}))};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
