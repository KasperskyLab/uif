import{R as e,b as i}from"./iframe-DWiAMwiJ.js";import{S as l}from"./StoryComponents-BDqNr-mg.js";import{l as c}from"./Placeholder-gcAYBGfm.js";import{M as d}from"./meta-BPjjWn3_.js";import{T as m}from"./TagReductionGroup-CYQcu1bj.js";import"./preload-helper-C1FmrZbK.js";import"./Divider-2J9VGgGt.js";import"./FormLabel-3k_y6lu4.js";import"./Markdown-BpV2EpEd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Ddqi07m5.js";import"./TextReducer-C-XmrgW7.js";import"./StatusDangerSolid1-gO3LFKBN.js";import"./Group-DSKN_3Aa.js";import"./index-BwymO1JM.js";import"./type-C6K9kL-Y.js";import"./colors-CMfgFrbo.js";import"./wave-K91TzWO2.js";import"./Popover-aWS8RO_S.js";import"./useImmutableRef-DOW13AJ9.js";import"./useResizeObserver-DTLOcOjv.js";const H={title:"Hexa UI Components/Tag/Reduction",component:m,argTypes:{},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},parameters:{badges:[i.stable,i.reviewedByDesign],design:d.pixsoView},decorators:[(t,r)=>e.createElement("div",{style:{width:400}},e.createElement(t,{...r}))]},o={render:({items:t,...r})=>e.createElement(l,null,e.createElement(m,{items:t,...r}),e.createElement(m,{items:t.map(p=>({...p,icon:e.createElement(c,null)})),...r}))};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
