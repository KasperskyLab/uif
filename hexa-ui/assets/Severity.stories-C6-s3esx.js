import{R as e,a3 as s,S as c,az as r,G as l}from"./iframe-4-PRSI1I.js";import{w as E}from"./withMeta-BwOuJ6tr.js";import{a as T,s as O}from"./helpers-BytZKRkB.js";import{S as n}from"./Severity-BgRKxSCj.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./useLocalization-45JHytlv.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";const j={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},_="Severity",x="Компонент для установки статуса.",z="Его можно использовать для установления статуса сущностям внутри приложения.",D={dod:j,component:_,description:x,usage:z},m=()=>e.createElement(e.Fragment,null,e.createElement(s,{type:"H4"},"Examples"),e.createElement(s,{type:"H5"},"Базовый"),e.createElement(c,{gap:8,direction:"vertical",align:"flex-start"},e.createElement(s,null,"Medium"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"medium"},t))),e.createElement(s,null,"Small"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"small"},t)))));try{m.displayName="SeverityDocs",m.__docgenInfo={description:"",displayName:"SeverityDocs",props:{}}}catch{}const te={title:"Other/Severity",component:n,argTypes:{...O(["theme","icon"])},args:{testId:"severity-test-id",klId:"severity-kl-id"},parameters:{badges:[l.stable,l.missingDesign],docs:{page:E(D,m)}}},o={render:t=>e.createElement(c,{gap:4,direction:"horizontal"},Object.keys(r.criticalitystatuses).map((p,f)=>e.createElement(n,{...t,key:f,icon:t.icon,mode:p},p))),argTypes:{mode:{options:Object.keys(r.criticalitystatuses),control:!1}}},a={argTypes:{mode:{options:Object.keys(r.criticalitystatuses),...T("positive")}}},i={args:{children:"Severity"},argTypes:{mode:{options:Object.keys(r.criticalitystatuses)}}};var d,y,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: SeverityProps) => <Space gap={4} direction="horizontal">
      {Object.keys(themeColors.criticalitystatuses).map((status, i) => <Severity {...args} key={i} icon={args.icon} mode={status as SeverityProps['mode']}>{status}</Severity>)}
    </Space>,
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      control: false
    }
  }
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,S,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      ...sbSetDefaultValue('positive')
    }
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,b,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Severity'
  },
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses)
    }
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const re=["Basic","L18n","Interactive"];export{o as Basic,i as Interactive,a as L18n,re as __namedExportsOrder,te as default};
