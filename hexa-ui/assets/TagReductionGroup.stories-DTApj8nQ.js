import{R as e,b as i}from"./iframe-BTqAWtZ7.js";import{S as l}from"./StoryComponents-CKSNiFzs.js";import{l as c}from"./Placeholder-BHcqJ4m2.js";import{M as d}from"./meta-BPjjWn3_.js";import{T as m}from"./TagReductionGroup-SzITYJZu.js";import"./preload-helper-C1FmrZbK.js";import"./Divider-KPnt62j1.js";import"./FormLabel-BNKGNgDh.js";import"./Markdown-B5pkzJQc.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-DwHieltF.js";import"./TextReducer-BkZqz3aN.js";import"./StatusDangerSolid1-CztCiRpT.js";import"./Group-ClC4zsiX.js";import"./index-D83RR8U-.js";import"./type-Qe6Yz0Sh.js";import"./colors-t9lelOTz.js";import"./wave-CKMqhJ_H.js";import"./Popover-mmzT_Qk2.js";import"./useImmutableRef-D7Bkh9A1.js";import"./useResizeObserver-CAsID6Q6.js";const H={title:"Hexa UI Components/Tag/Reduction",component:m,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[i.stable,i.reviewedByDesign],design:d.pixsoView},decorators:[(t,r)=>e.createElement("div",{style:{width:400}},e.createElement(t,{...r}))]},o={render:({items:t,...r})=>e.createElement(l,null,e.createElement(m,{items:t,...r}),e.createElement(m,{items:t.map(p=>({...p,icon:e.createElement(c,null)})),...r}))};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
