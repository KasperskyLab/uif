import{T as W}from"./Palette-DXL8UiT3.js";import{a as w}from"./StoryComponents--bOGC0xv.js";import{c as i,R as e,r as p,H}from"./iframe-DedYZBTA.js";import{o}from"./Placeholder-DXWNW80D.js";import{S as d}from"./SegmentedButton-B-fNJlic.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";const V={title:"Hexa UI Components/SegmentedButton/Stories",component:d,tags:["!autodocs"]},l=({value:t,type:m,..._})=>{const[T,u]=p.useState(t);return p.useEffect(()=>{u(t)},[m,t]),e.createElement(d,{..._,value:T,onChange:u,type:m})},r={render:l,args:{value:["beforeAfter"],items:[{text:"default",value:"default",testId:"testId",klId:"klId"},{text:"disabled",value:"disabled",disabled:!0},{text:"componentsBefore",value:"before",componentsBefore:[e.createElement(o,{key:"icon"})]},{text:"componentsAfter",value:"after",componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"componentsBefore & componentsAfter",value:"beforeAfter",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]}]}},n={render:t=>e.createElement(w,null,e.createElement(d,{...t,type:"radio"})),args:{value:["checked1"],items:[{text:"checked",value:"checked1"},{text:"unchecked",value:"unchecked1"},{text:"checked",value:"checked2"},{text:"unchecked",value:"unchecked2"},{text:"checked",value:"checked3"}],disabled:!0}},M=H.div`
  width: 600px;
`,a={render:t=>e.createElement(M,null,e.createElement(l,{...t})),args:{isStretch:!0,value:["We"],items:["Mo","Tu","We","Th","Fr","Sa","Su"].map(t=>({text:t,value:t}))}},c={render:l,args:{value:["beforeAfter"],items:[{text:"And thou treble-dated crow That thy sable gender mak'st",value:"default",testId:"testId",klId:"klId",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"With the breath thou giv'st and tak'st",value:"disabled",disabled:!0},{text:"'Mongst our mourners shalt thou go",value:"before",componentsBefore:[e.createElement(o,{key:"icon"})]},{text:"Here the anthem doth commence:",value:"after",componentsAfter:[e.createElement(o,{key:"icon"})]},{text:"Love and constancy is dead",value:"beforeAfter",componentsBefore:[e.createElement(o,{key:"icon"})],componentsAfter:[e.createElement(o,{key:"icon"})]}]}},s={args:{source:{segmented_button:i.segmented_button,segmented_button_item:i.segmented_button_item}},render:t=>e.createElement(W,{...t})};var f,h,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: SegmentedButtonProps) => <StoryColumn>
      <SegmentedButton {...args} type="radio" />
    </StoryColumn>,
  args: {
    value: ['checked1'],
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var B,A,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ControllableSegmentedButton,
  args: {
    value: ['beforeAfter'],
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var C,I,P;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: {
      segmented_button: componentColors.segmented_button,
      segmented_button_item: componentColors.segmented_button_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const ee=["Basic","Disabled","Stretched","Overflow","ColorTokens"];export{r as Basic,s as ColorTokens,n as Disabled,c as Overflow,a as Stretched,ee as __namedExportsOrder,V as default};
