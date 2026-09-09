import{r as u}from"./StoryComponents--bOGC0xv.js";import{R as e,r as p,S as M}from"./iframe-DedYZBTA.js";import{o as n}from"./Placeholder-DXWNW80D.js";import{T as m}from"./ToggleButton-t01FaFnT.js";import{T as O}from"./ToggleButtonGroup-D4of78Bd.js";import{t as d,a as P}from"./types-CHQbqp6R.js";import{B as c}from"./Badge-MGlXnKsn.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./imaskDateOptionsGenerator-CuWnnqgb.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";const ae={title:"Hexa UI Components/ToggleButton/Stories",component:m,tags:["!autodocs"],args:{text:"Toggle button",value:"toggle-button",iconBefore:e.createElement(n,null)}},r={args:{text:"Toggle button",value:"toggle-button"}},a={render:t=>u(P.map(o=>({label:o,content:e.createElement(m,{...t,mode:o,text:o})})))},l={render:t=>u(d.map(o=>({label:o,content:e.createElement(m,{...t,size:o,text:o})})))},s={render:t=>u(d.map(o=>({label:o,content:e.createElement(m,{...t,iconBefore:e.createElement(n,null),size:o,text:void 0,tooltip:"Tooltip text"})})))},W=t=>{const[o,w]=p.useState(t.value),I=p.useMemo(()=>t.items.map(g=>({...g,size:t.itemsSize||g.size||"medium"})),[t.items,t.itemsSize]);return e.createElement(M,{style:{width:"600px"},gap:"related"},e.createElement(O,{...t,items:I,value:o,onChange:w}))},i={name:"ToggleButtonGroup",render:W,args:{isStretch:!1,disabled:!1,loading:!1,itemsSize:"medium",testId:"toggle-button-group",value:["one"],items:[{text:"One",mode:"marina",iconBefore:e.createElement(n,null),value:"one"},{text:"Two",mode:"red",iconBefore:e.createElement(n,null),elementAfter:e.createElement(c,{count:1}),value:"two"},{text:"Three",mode:"orange",iconBefore:e.createElement(n,null),disabled:!0,value:"three"},{text:"Four",mode:"violet",elementAfter:e.createElement(c,{count:32}),value:"four"},{text:"long ".repeat(50),mode:"violet",elementAfter:e.createElement(c,{count:32}),value:"five"}]},argTypes:{isStretch:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},itemsSize:{options:d,control:{type:"select"}}},parameters:{controls:{include:["isStretch","disabled","loading","itemsSize"]}}};var f,B,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Toggle button',
    value: 'toggle-button'
  }
}`,...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonModes.map(mode => ({
    label: mode,
    content: <ToggleButtonComponent {...args} mode={mode} text={mode} />
  })), true)
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,T,h;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonSizes.map(size => ({
    label: size,
    content: <ToggleButtonComponent {...args} size={size} text={size} />
  })), true)
}`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var E,C,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => renderVariants(toggleButtonSizes.map(size => ({
    label: size,
    content: <ToggleButtonComponent {...args} iconBefore={<Placeholder />} size={size} text={undefined} tooltip="Tooltip text" />
  })), true)
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var G,A,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    }
  }
}`,...(V=(A=i.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const le=["Basic","Mode","Size","IconOnly","ButtonGroupWithControls"];export{r as Basic,i as ButtonGroupWithControls,s as IconOnly,a as Mode,l as Size,le as __namedExportsOrder,ae as default};
