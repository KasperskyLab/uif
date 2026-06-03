import{w as I}from"./withDesignControls-CUCSz6At.js";import{w as _}from"./withMeta-BiY54Lnt.js";import{r as d}from"./StoryComponents-BG6DEix0.js";import{B as i}from"./Badge-Czi2pd5f.js";import{R as e,r as g,S as D}from"./iframe-CBNIXqWm.js";import{l as m}from"./Placeholder-BtGpZ1tA.js";import{o as L}from"./Plus-Wofgsm6R.js";import{r as Q}from"./Settings-ZkN9nItr.js";import{T as c,a as Z}from"./ToggleButtonGroup-C1Sn111M.js";import"./Grid-DRLKWrxC.js";import"./StatusOkOutline-BhzwBS5E.js";import"./Divider-ja1HbPIW.js";import"./FormLabel-Cy2q2kGk.js";import"./Markdown-CxshTH5T.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-BHGhJBJm.js";import"./Tag-DB-z3Swo.js";import"./TextReducer-BqEbiIRi.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./Group-Bda88l4J.js";import"./index-DPzFOva3.js";import"./type-YzYuwFG9.js";import"./colors-AIlJBz8g.js";import"./wave-C4_7brB4.js";import"./preload-helper-C1FmrZbK.js";import"./imaskDateOptionsGenerator-BP63XpEr.js";import"./input-CukqmKZ0.js";import"./index-Chjiymov.js";import"./v4-BoP187Zn.js";const G=["grey","red","orange","yellow","grass","emerald","marengo","marina","purple","violet"],p=["extraSmall","small","medium"],j={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},F="ToggleButton",H="Компонент ToggleButton предназначен для управления состояниями внутри интерфейса, где требуется переключение между несколькими взаимосвязанными вариантами",J="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=165938%3A227743",N="https://pixso.net/app/design/03WtWL7_119TmMDBZQ0rkw",f={dod:j,component:F,usage:H,designLink:J,pixsoView:N},R="https://pixso.net/app/design/03WtWL7_119TmMDBZQ0rkw?item-id=6151%3A3440",U={pixsoView:R},B={"-":null,Placeholder:e.createElement(m,null),Plus:e.createElement(L,null),Settings:e.createElement(Q,null)},x={"-":null,Badge:e.createElement(i,{count:1})},Y={component:c,args:{text:"Toggle Button",disabled:!1,loading:!1,size:"medium",mode:"marina",iconBefore:"Placeholder",elementAfter:"-",onChange:()=>{},value:"toggle-value",testId:"toggle-button"},argTypes:{size:{options:p,control:{type:"select"}},mode:{options:G,control:{type:"select"}},iconBefore:{options:Object.keys(B),control:{type:"select"},mapping:B},elementAfter:{options:Object.keys(x),control:{type:"select"},mapping:x},onChange:{control:!1}},parameters:{docs:{page:_(f)},controls:{exclude:/(testId|componentType|theme|style|className|id)/},design:f.pixsoView}},Ee={title:"Hexa UI Components/ToggleButton",...I({componentName:"toggleButton",meta:Y,designArgs:{iconBefore:"Placeholder",elementAfter:"-"}})},n={},r={render:t=>d(G.map(o=>({label:o,content:e.createElement(c,{...t,mode:o,text:o})})),!0),argTypes:{mode:{control:!1},text:{control:!1}}},s={render:t=>d(p.map(o=>({label:o,content:e.createElement(c,{...t,size:o,text:o})})),!0),argTypes:{size:{control:!1},text:{control:!1}}},a={render:t=>d(p.map(o=>({label:o,content:e.createElement(c,{...t,size:o,text:void 0,tooltip:"tooltip text"})})),!0),argTypes:{text:{control:!1},size:{control:!1},iconBefore:{control:!1},elementAfter:{control:!1}}},K=t=>{const[o,P]=g.useState(t.value||["default"]),W=g.useMemo(()=>t.items.map(u=>({...u,size:t.itemsSize||u.size||"medium"})),[t.items,t.itemsSize]);return e.createElement(D,{style:{width:"600px"},gap:"related"},e.createElement(Z,{...t,items:W,value:o,onChange:P}))},l={name:"ToggleButtonGroup",render:K,args:{isStretch:!1,disabled:!1,loading:!1,itemsSize:"medium",testId:"toggle-button-group",value:["one"],items:[{text:"One",mode:"marina",iconBefore:e.createElement(m,null),value:"one"},{text:"Two",mode:"red",iconBefore:e.createElement(m,null),elementAfter:e.createElement(i,{count:1}),value:"two"},{text:"Three",mode:"orange",iconBefore:e.createElement(m,null),disabled:!0,value:"three"},{text:"Four",mode:"violet",elementAfter:e.createElement(i,{count:32}),value:"four"},{text:"long ".repeat(50),mode:"violet",elementAfter:e.createElement(i,{count:32}),value:"five"}]},argTypes:{isStretch:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},itemsSize:{options:p,control:{type:"select"}}},parameters:{controls:{include:["isStretch","disabled","loading","itemsSize"]},design:U.pixsoView}};var T,S,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,z,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var A,V,M;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(V=a.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var k,C,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}>`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const Ae=["Basic","Mode","Size","IconOnly","ButtonGroupWithControls"];export{n as Basic,l as ButtonGroupWithControls,a as IconOnly,r as Mode,s as Size,Ae as __namedExportsOrder,Ee as default};
