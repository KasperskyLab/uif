import{w as P}from"./withDesignControls-DTwO-e1q.js";import{w as _}from"./withMeta-BwOuJ6tr.js";import{r as d}from"./StoryComponents-BWv8uEx9.js";import{B as i}from"./Badge-B3_Y1H2J.js";import{R as e,r as g,S as D}from"./iframe-4-PRSI1I.js";import{o as m}from"./Placeholder-DoG1ulbQ.js";import{o as L}from"./Plus-BlzhXYUb.js";import{o as Q}from"./Settings-DVTUapLs.js";import{T as c}from"./ToggleButton-Bg-O3qie.js";import{T as Z}from"./ToggleButtonGroup-DA0k7xyv.js";import{t as p,a as G}from"./types-CHQbqp6R.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./preload-helper-Dp1pzeXC.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";const $={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},j="ToggleButton",F="Компонент ToggleButton предназначен для управления состояниями внутри интерфейса, где требуется переключение между несколькими взаимосвязанными вариантами",H="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=165938%3A227743",J="https://pixso.net/app/design/03WtWL7_119TmMDBZQ0rkw",f={dod:$,component:j,usage:F,designLink:H,pixsoView:J},R="https://pixso.net/app/design/03WtWL7_119TmMDBZQ0rkw?item-id=6151%3A3440",U={pixsoView:R},B={"-":null,Placeholder:e.createElement(m,null),Plus:e.createElement(L,null),Settings:e.createElement(Q,null)},x={"-":null,Badge:e.createElement(i,{count:1})},Y={component:c,args:{text:"Toggle Button",disabled:!1,loading:!1,size:"medium",mode:"marina",iconBefore:"Placeholder",elementAfter:"-",onChange:()=>{},value:"toggle-value",testId:"toggle-button"},argTypes:{size:{options:p,control:{type:"select"}},mode:{options:G,control:{type:"select"}},iconBefore:{options:Object.keys(B),control:{type:"select"},mapping:B},elementAfter:{options:Object.keys(x),control:{type:"select"},mapping:x},onChange:{control:!1}},parameters:{docs:{page:_(f)},controls:{exclude:/(testId|componentType|theme|style|className|id)/},design:f.pixsoView}},Oe={title:"Hexa UI Components/ToggleButton",...P({meta:Y})},n={},r={render:t=>d(G.map(o=>({label:o,content:e.createElement(c,{...t,mode:o,text:o})}))),argTypes:{mode:{control:!1},text:{control:!1}}},s={render:t=>d(p.map(o=>({label:o,content:e.createElement(c,{...t,size:o,text:o})}))),argTypes:{size:{control:!1},text:{control:!1}}},a={render:t=>d(p.map(o=>({label:o,content:e.createElement(c,{...t,size:o,text:void 0,tooltip:"tooltip text"})}))),argTypes:{text:{control:!1},size:{control:!1},iconBefore:{control:!1},elementAfter:{control:!1}}},K=t=>{const[o,W]=g.useState(t.value||["default"]),I=g.useMemo(()=>t.items.map(u=>({...u,size:t.itemsSize||u.size||"medium"})),[t.items,t.itemsSize]);return e.createElement(D,{style:{width:"600px"},gap:"related"},e.createElement(Z,{...t,items:I,value:o,onChange:W}))},l={name:"ToggleButtonGroup",render:K,args:{isStretch:!1,disabled:!1,loading:!1,itemsSize:"medium",testId:"toggle-button-group",value:["one"],items:[{text:"One",mode:"marina",iconBefore:e.createElement(m,null),value:"one"},{text:"Two",mode:"red",iconBefore:e.createElement(m,null),elementAfter:e.createElement(i,{count:1}),value:"two"},{text:"Three",mode:"orange",iconBefore:e.createElement(m,null),disabled:!0,value:"three"},{text:"Four",mode:"violet",elementAfter:e.createElement(i,{count:32}),value:"four"},{text:"long ".repeat(50),mode:"violet",elementAfter:e.createElement(i,{count:32}),value:"five"}]},argTypes:{isStretch:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},itemsSize:{options:p,control:{type:"select"}}},parameters:{controls:{include:["isStretch","disabled","loading","itemsSize"]},design:U.pixsoView}};var T,S,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,z,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonModes.map(m => ({
    label: m,
    content: <ToggleButton {...args} mode={m} text={m} />
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    text: {
      control: false
    }
  }
}`,...(y=(z=r.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var v,w,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonSizes.map(s => ({
    label: s,
    content: <ToggleButton {...args} size={s} text={s} />
  })), true),
  argTypes: {
    size: {
      control: false
    },
    text: {
      control: false
    }
  }
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var V,M,A;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonSizes.map(s => ({
    label: s,
    content: <ToggleButton {...args} size={s} text={undefined} tooltip="tooltip text" />
  })), true),
  argTypes: {
    text: {
      control: false
    },
    size: {
      control: false
    },
    iconBefore: {
      control: false
    },
    elementAfter: {
      control: false
    }
  }
}`,...(A=(M=a.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var k,C,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'ToggleButtonGroup',
  render: ControllableToggleButtonGroup,
  args: {
    isStretch: false,
    disabled: false,
    loading: false,
    itemsSize: 'medium',
    testId: 'toggle-button-group',
    value: ['one'],
    items: [{
      text: 'One',
      mode: 'marina',
      iconBefore: <Placeholder />,
      value: 'one'
    }, {
      text: 'Two',
      mode: 'red',
      iconBefore: <Placeholder />,
      elementAfter: <Badge count={1} />,
      value: 'two'
    }, {
      text: 'Three',
      mode: 'orange',
      iconBefore: <Placeholder />,
      disabled: true,
      value: 'three'
    }, {
      text: 'Four',
      mode: 'violet',
      elementAfter: <Badge count={32} />,
      value: 'four'
    }, {
      text: 'long '.repeat(50),
      mode: 'violet',
      elementAfter: <Badge count={32} />,
      value: 'five'
    }]
  },
  argTypes: {
    isStretch: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    itemsSize: {
      options: toggleButtonSizes,
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    controls: {
      include: ['isStretch', 'disabled', 'loading', 'itemsSize']
    },
    design: toggleButtonMeta.pixsoView
  }
} as Meta<ToggleButtonGroupProps & {
  itemsSize?: ToggleButtonSize;
}>`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const Ge=["Basic","Mode","Size","IconOnly","ButtonGroupWithControls"];export{n as Basic,l as ButtonGroupWithControls,a as IconOnly,r as Mode,s as Size,Ge as __namedExportsOrder,Oe as default};
