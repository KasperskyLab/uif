import{R as e,b as i}from"./iframe-ko-fN4O0.js";import{S as l}from"./StoryComponents-C6gZpmtb.js";import{l as c}from"./Placeholder-BUqYHWNp.js";import{M as d}from"./meta-BPjjWn3_.js";import{T as m}from"./TagReductionGroup-UVRVVost.js";import"./preload-helper-C1FmrZbK.js";import"./Divider-Cb94-KaG.js";import"./FormLabel-CQC01_Ba.js";import"./Markdown-DLZFx-iU.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IA0Vkdgq.js";import"./TextReducer-C04xZ-9I.js";import"./StatusDangerSolid1-D6q9y8uE.js";import"./Group-u0Sk644W.js";import"./index-C0pCj2SQ.js";import"./type-D7k2Xvr8.js";import"./colors-DQDdeyBZ.js";import"./wave-mrEb6LZp.js";import"./Popover-CupUWmel.js";import"./useImmutableRef-CUn36g4_.js";import"./useResizeObserver-BFHPmBAp.js";const H={title:"Hexa UI Components/Tag/Reduction",component:m,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[i.stable,i.reviewedByDesign],design:d.pixsoView},decorators:[(t,r)=>e.createElement("div",{style:{width:400}},e.createElement(t,{...r}))]},o={render:({items:t,...r})=>e.createElement(l,null,e.createElement(m,{items:t,...r}),e.createElement(m,{items:t.map(p=>({...p,icon:e.createElement(c,null)})),...r}))};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
