import{w as Z}from"./withMeta-FY6bIYTP.js";import{r as $,R as j,d as z}from"./iframe-C54-I-iN.js";import{L as B,a as u}from"./Legend-Tpo_QXAT.js";import{l as s}from"./legendItemsStub-BC2KppLC.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./lodash-TNMe4onG.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toString-CaMIQdMU.js";import"./generateId-d8nD6DCH.js";const G={designTokens:!0,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},ee="Legend",te="Легенда используется для отображения обозначений и расшифровки данных на графике. Она помогает пользователям понять, что обозначают цвета и линии в визуализации",se="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?item-id=650%3A243991",oe="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?item-id=156%3A55665",re={dod:G,component:ee,usage:te,designLink:se,pixsoView:oe},{action:o}=__STORYBOOK_MODULE_ACTIONS__,ae=s.map(t=>({...t,selected:!0})),g=[];for(let t=0;t<100;t++)g.push({kind:u.Row,title:`item_${t}`,payload:t,color:z.cg500}),t%10===0&&g.push({kind:u.Divider});const ke={title:"Widget/Legend",component:B,args:{onCheck:o("onClick"),onHover:o("onHover"),onSelect:o("onSelect"),onLeave:o("onLeave"),totalLabel:"totalLabel",selectable:!1},parameters:{docs:{page:Z(re)}}},r={args:{items:s}},a={args:{items:s,widthMode:"flex"}},n={args:{items:s,showTotal:!0}},i={args:{items:s,showPercentage:!0,showTotal:!0}},l={args:{items:s,description:"In elit veniam commodo culpa dolor et cillum aliqua laboris.",showTotal:!0}},c={args:{items:s,legendTitle:"In elit veniam commodo"}},m={args:{items:g,showTotal:!0,description:"In elit veniam commodo culpa dolor et cillum aliqua laboris."}},d={args:{items:g,showTotal:!0,description:"In elit veniam commodo culpa dolor et cillum aliqua laboris.",maxHeightScrollContainer:300}},p={args:{selectable:!0},render:t=>{const[K,S]=$.useState(ae),Q=h=>S(I=>I.map(e=>({...e,selected:e.kind===u.Row&&h.title===e.title?!e.selected:e.selected}))),U=h=>S(I=>I.map(e=>e.kind===u.Row?{...e,checked:h.title===e.title?!e.checked:e.checked}:e));return j.createElement(B,{...t,onSelect:Q,onCheck:U,items:K})}};var w,T,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: legendItems
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var L,f,W;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: legendItems,
    widthMode: 'flex'
  }
}`,...(W=(f=a.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};var b,C,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: legendItems,
    showTotal: true
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var x,v,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: legendItems,
    showPercentage: true,
    showTotal: true
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var H,M,P;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: legendItems,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.',
    showTotal: true
  }
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,q,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: legendItems,
    legendTitle: 'In elit veniam commodo'
  }
}`,...(O=(q=c.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var A,y,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: legendItemsLargeDataset,
    showTotal: true,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.'
  }
}`,...(E=(y=m.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var V,F,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: legendItemsLargeDataset,
    showTotal: true,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.',
    maxHeightScrollContainer: 300
  }
}`,...(Y=(F=d.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var J,N,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  // @ts-expect-error - we use legendItems from hook in render
  args: {
    selectable: true
  },
  render: args => {
    const [legendItems, setlegendItems] = useState(legendItemsSelectable);
    const onSelect: ILegendProps['onSelect'] = itemData => setlegendItems(legendItems => legendItems.map(l => ({
      ...l,
      selected: l.kind === LegendItemType.Row && itemData.title === l.title ? !l.selected : l.selected
    })));
    const onCheck: ILegendProps['onCheck'] = itemData => setlegendItems(legendItems => legendItems.map(l => {
      if (l.kind === LegendItemType.Row) {
        return {
          ...l,
          checked: itemData.title === l.title ? !l.checked : l.checked
        };
      }
      return l;
    }));
    return <Legend {...args} onSelect={onSelect} onCheck={onCheck} items={legendItems} />;
  }
}`,...(X=(N=p.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const Le=["Default","WithWidthModeIsFlex","WithValueAndTotal","WithPercentage","WithDescription","WithTitle","WithDefaultHeightScrollContainer","WithCustomHeightScrollContainer","Selectable"];export{r as Default,p as Selectable,d as WithCustomHeightScrollContainer,m as WithDefaultHeightScrollContainer,l as WithDescription,i as WithPercentage,c as WithTitle,n as WithValueAndTotal,a as WithWidthModeIsFlex,Le as __namedExportsOrder,ke as default};
