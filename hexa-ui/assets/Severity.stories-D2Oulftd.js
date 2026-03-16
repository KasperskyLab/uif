import{a1 as j,a0 as x,w,u as z,R as t,H as D,$ as a,S as l,ar as r,b as p}from"./iframe-DlY6n6Um.js";import{w as H}from"./withMeta-B77fl0Sa.js";import{s as I,a as P}from"./helpers-BytZKRkB.js";import{u as _}from"./useLocalization-DgpIUcge.js";import{T as M}from"./Tag-Cd3srqW9.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";const L={critical:"severity.critical",high:"severity.high",medium:"severity.medium",low:"severity.low",info:"severity.info",positive:"severity.positive"},d=j(),V=x`
  background: ${d("background")};
  color: ${d("color")};
`,$=e=>w(e,{componentName:"severity",defaultValues:{mode:"medium"},propsToDrill:["mode"]}),F=D(M).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  ${V}
`,i=e=>{const s=$(e),o=z(s);return t.createElement(N,{...o})},N=({children:e,mode:s,testAttributes:o,...E})=>{const C=_(L[s]),O=e||C;return t.createElement(F,{...o,...E},O)};i.__docgenInfo={description:"",methods:[],displayName:"Severity",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!0,tsType:{name:"SeverityModes[number]",raw:"typeof SeverityModes[number]"},description:"Color mode"}}};const q={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},B="Severity",R="Компонент для установки статуса.",A="Его можно использовать для установления статуса сущностям внутри приложения.",U={dod:q,component:B,description:R,usage:A},k=()=>t.createElement(t.Fragment,null,t.createElement(a,{type:"H4"},"Examples"),t.createElement(a,{type:"H5"},"Базовый"),t.createElement(l,{gap:8,direction:"vertical",align:"flex-start"},t.createElement(a,null,"Medium"),t.createElement(l,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(e=>t.createElement(i,{key:e,mode:e,size:"medium"},e))),t.createElement(a,null,"Small"),t.createElement(l,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(e=>t.createElement(i,{key:e,mode:e,size:"small"},e)))));k.__docgenInfo={description:"",methods:[],displayName:"SeverityDocs"};const ne={title:"Hexa UI Components/Severity",component:i,argTypes:{...I(["theme","icon"])},args:{testId:"severity-test-id",klId:"severity-kl-id"},parameters:{badges:[p.stable,p.missingDesign],docs:{page:H(U,k)}}},n={render:e=>t.createElement(l,{gap:4,direction:"horizontal"},Object.keys(r.criticalitystatuses).map((s,o)=>t.createElement(i,{...e,key:o,icon:e.icon,mode:s},s))),argTypes:{mode:{options:Object.keys(r.criticalitystatuses),control:!1}}},c={argTypes:{mode:{options:Object.keys(r.criticalitystatuses),...P("positive")}}},m={args:{children:"Severity"},argTypes:{mode:{options:Object.keys(r.criticalitystatuses)}}};var y,u,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: SeverityProps) => <Space gap={4} direction="horizontal">
      {Object.keys(themeColors.criticalitystatuses).map((status, i) => <Severity {...args} key={i} icon={args.icon} mode={status as SeverityProps['mode']}>{status}</Severity>)}
    </Space>,
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      control: false
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      ...sbSetDefaultValue('positive')
    }
  }
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,b,T;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Severity'
  },
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses)
    }
  }
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const ce=["Basic","L18n","Interactive"];export{n as Basic,m as Interactive,c as L18n,ce as __namedExportsOrder,ne as default};
