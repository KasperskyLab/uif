import{T as h}from"./Palette-DqJNg_8n.js";import{b as i,R as e,c as v,H as x}from"./iframe-DWiAMwiJ.js";import{w as C}from"./withMeta-B2KnXlKz.js";import{s as S}from"./helpers-BytZKRkB.js";import{S as b,b as k}from"./StoryComponents-BDqNr-mg.js";import{D as n}from"./Divider-2J9VGgGt.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BdvuFLTH.js";import"./StatusOkOutline-DhcbM8A-.js";import"./FormLabel-3k_y6lu4.js";import"./Markdown-BpV2EpEd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Ddqi07m5.js";import"./TextReducer-C-XmrgW7.js";import"./StatusDangerSolid1-gO3LFKBN.js";import"./Group-DSKN_3Aa.js";import"./index-BwymO1JM.js";import"./type-C6K9kL-Y.js";import"./colors-CMfgFrbo.js";import"./wave-K91TzWO2.js";import"./Popover-aWS8RO_S.js";const y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},T="Divider",D="Это тонкое и легкое правило, которое группирует контент",f="Для разделения/группировки контента",w="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=1091%3A87128",E="https://pixso.net/app/design/OLGe3169NxKiF9xzs8KAtg",a={dod:y,component:T,description:D,usage:f,designLink:w,pixsoView:E},Z={title:"Hexa UI Components/Divider",component:n,args:{direction:"horizontal",testId:"divider-test-id",klId:"divider-kl-id",mode:"bold"},argTypes:{...S(["theme"])},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:C(a)},design:a.pixsoView}},s=x.div`
  width: 50px;
  height: 50px;
  background: grey;
`,t={render:r=>{const g=r.direction==="horizontal"?b:k;return e.createElement(g,null,e.createElement(s,null),e.createElement(n,{...r}),e.createElement(s,null),e.createElement(n,{...r}),e.createElement(s,null))}},o={args:{source:v.divider},render:r=>e.createElement(h,{...r})};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    const Wrapper = args.direction === 'horizontal' ? StoryColumn : StoryWrapper;
    return <Wrapper>
        <SomeContent />
        <Divider {...args} />
        <SomeContent />
        <Divider {...args} />
        <SomeContent />
      </Wrapper>;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,l,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: componentColors.divider
  },
  render: args => <ThemedPalette {...args} />
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const j=["Basic","ColorTokens"];export{t as Basic,o as ColorTokens,j as __namedExportsOrder,Z as default};
