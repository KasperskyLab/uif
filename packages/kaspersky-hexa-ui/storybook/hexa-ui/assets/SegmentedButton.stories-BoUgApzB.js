import{T as W}from"./Palette-oU4WYbWy.js";import{B as u,b as p,R as e,c as h,r as k,H as L}from"./iframe-zz6a49H8.js";import{w as z}from"./withMeta-CjSZnBk7.js";import{s as D}from"./helpers-BytZKRkB.js";import{S as O}from"./StoryComponents-C4fwEYRs.js";import{l as o}from"./Placeholder-Bv52avk_.js";import{S as d}from"./SegmentedButton-RLIkkpaw.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./v4-BoP187Zn.js";const F={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},J="SegmentedButton",V="Framework-agnostic компонент с функциями single- и multi-выбора в виде группы кнопок",Y="Выбор одного или нескольких однотипных опций, например, дней недели",K="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=51361%3A404617",R="https://pixso.net/app/design/b8ZoOY7zLKJjP75ryBEvtA",f={dod:F,component:J,description:V,usage:Y,designLink:K,pixsoView:R},U=[u.Medium,u.Large],ge={title:"Hexa UI Components/SegmentedButton",component:d,argTypes:{size:{options:U,control:{type:"select"}},...D(["theme"])},args:{type:"radio",size:"medium",disabled:!1,testId:"segmented-button-test-id",klId:"segmented-button-kl-id"},parameters:{badges:[p.stable,p.reviewedByDesign],docs:{page:z(f)},design:f.pixsoView}},m=({value:t,type:l,...H})=>{const[M,i]=k.useState(t);return k.useEffect(()=>{i(t)},[l,t]),e.createElement(d,{...H,value:M,onChange:i,type:l})},r={render:m,args:{value:["beforeAfter"],items:[{text:"default",value:"default",testId:"testId",klId:"klId"},{text:"disabled",value:"disabled",disabled:!0},{text:"componentsBefore",value:"before",componentsBefore:[e.createElement(o,{key:"icon"})]},{text:"componentsAfter",value:"after",componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"componentsBefore & componentsAfter",value:"beforeAfter",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]}]}},n={render:t=>e.createElement(O,null,e.createElement(d,{...t,type:"checkbox"}),e.createElement(d,{...t,type:"radio"})),args:{value:["checked1","checked2","checked3"],items:[{text:"checked",value:"checked1"},{text:"unchecked",value:"unchecked1"},{text:"checked",value:"checked2"},{text:"unchecked",value:"unchecked2"},{text:"checked",value:"checked3"}],disabled:!0}},Z=L.div`
  width: 600px;
`,s={render:t=>e.createElement(Z,null,e.createElement(m,{...t})),args:{isStretch:!0,value:["We"],items:["Mo","Tu","We","Th","Fr","Sa","Su"].map(t=>({text:t,value:t}))}},a={render:m,args:{value:["beforeAfter"],type:"checkbox",items:[{text:"And thou treble-dated crow That thy sable gender mak'st",value:"default",testId:"testId",klId:"klId",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"With the breath thou giv'st and tak'st",value:"disabled",disabled:!0},{text:"'Mongst our mourners shalt thou go",value:"before",componentsBefore:[e.createElement(o,{key:"icon"})]},{text:"Here the anthem doth commence:",value:"after",componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"Love and constancy is dead",value:"beforeAfter",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]}]}},c={args:{source:{segmented_button:h.segmented_button,segmented_button_item:h.segmented_button_item}},render:t=>e.createElement(W,{...t})};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControllableSegmentedButton,
  args: {
    value: ['beforeAfter'],
    items: [{
      text: 'default',
      value: 'default',
      testId: 'testId',
      klId: 'klId'
    }, {
      text: 'disabled',
      value: 'disabled',
      disabled: true
    }, {
      text: 'componentsBefore',
      value: 'before',
      componentsBefore: [<Placeholder key="icon" />]
    }, {
      text: 'componentsAfter',
      value: 'after',
      componentsAfter: [<Placeholder key="icon" />]
    }, {
      text: 'componentsBefore & componentsAfter',
      value: 'beforeAfter',
      componentsBefore: [<Placeholder key="icon" />],
      componentsAfter: [<Placeholder key="icon" />]
    }]
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: SegmentedButtonProps) => <StoryColumn>
      <SegmentedButton {...args} type="checkbox" />
      <SegmentedButton {...args} type="radio" />
    </StoryColumn>,
  args: {
    value: ['checked1', 'checked2', 'checked3'],
    items: [{
      text: 'checked',
      value: 'checked1'
    }, {
      text: 'unchecked',
      value: 'unchecked1'
    }, {
      text: 'checked',
      value: 'checked2'
    }, {
      text: 'unchecked',
      value: 'unchecked2'
    }, {
      text: 'checked',
      value: 'checked3'
    }],
    disabled: true
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var B,A,E;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: SegmentedButtonProps) => <StyledContainer>
      <ControllableSegmentedButton {...args} />
    </StyledContainer>,
  args: {
    isStretch: true,
    value: ['We'],
    items: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(item => ({
      text: item,
      value: item
    }))
  }
}`,...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,C,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ControllableSegmentedButton,
  args: {
    value: ['beforeAfter'],
    type: 'checkbox',
    items: [{
      text: 'And thou treble-dated crow That thy sable gender mak\\'st',
      value: 'default',
      testId: 'testId',
      klId: 'klId',
      componentsBefore: [<Placeholder key="icon" />],
      componentsAfter: [<Placeholder key="icon" />]
    }, {
      text: 'With the breath thou giv\\'st and tak\\'st',
      value: 'disabled',
      disabled: true
    }, {
      text: '\\'Mongst our mourners shalt thou go',
      value: 'before',
      componentsBefore: [<Placeholder key="icon" />]
    }, {
      text: 'Here the anthem doth commence:',
      value: 'after',
      componentsAfter: [<Placeholder key="icon" />]
    }, {
      text: 'Love and constancy is dead',
      value: 'beforeAfter',
      componentsBefore: [<Placeholder key="icon" />],
      componentsAfter: [<Placeholder key="icon" />]
    }]
  }
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,P,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    source: {
      segmented_button: componentColors.segmented_button,
      segmented_button_item: componentColors.segmented_button_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const be=["Basic","Disabled","Stretched","Overflow","ColorTokens"];export{r as Basic,c as ColorTokens,n as Disabled,a as Overflow,s as Stretched,be as __namedExportsOrder,ge as default};
