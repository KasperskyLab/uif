import{T as h}from"./Palette-Bcbt30O7.js";import{b as d,R as e,c as I,H as S}from"./iframe-DlY6n6Um.js";import{w as T}from"./withMeta-B77fl0Sa.js";import{s as E}from"./helpers-BytZKRkB.js";import{S as m}from"./StoryComponents-5Ni7_M0_.js";import{a as n,I as i}from"./Indicator-CQY-Y-dA.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Popover-D8ys_ap7.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},M="Indicator",H="Компонент для цветовой индикации.",R="",V="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=50458%3A391378",_="https://pixso.net/app/design/2AUio1HxjxE7CpaF8r38Sw",p={dod:w,component:M,description:H,usage:R,designLink:V,pixsoView:_},ee={title:"Hexa UI Components/Indicator",component:i,argTypes:{mode:{control:"select",options:n},...E(["theme"])},args:{testId:"indicator-test-id",klId:"indicator-kl-id"},parameters:{badges:[d.stable,d.reviewedByDesign],docs:{page:T(p)},design:p.pixsoView}},r={},c=S.span`
  width: 15px;
  height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
`,s={render:t=>e.createElement(e.Fragment,null,e.createElement(m,{style:{background:"#2735448c",borderRadius:5}},n.map(o=>e.createElement(c,{key:o},e.createElement(i,{...t,mode:o})))),e.createElement(m,null,n.map(o=>e.createElement(c,{key:o},e.createElement(i,{...t,mode:o}))))),args:{border:!0}},a={args:{source:I.indicator},render:t=>e.createElement(h,{...t})};var l,g,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: IndicatorProps) => <>
      <StoryColumn style={{
      background: '#2735448c',
      borderRadius: 5
    }}>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
      <StoryColumn>
        {IndicatorModes.map(mode => <Cell key={mode}><Indicator {...args} mode={mode} /></Cell>)}
      </StoryColumn>
    </>,
  args: {
    border: true
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,k,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: componentColors.indicator
  },
  render: args => <ThemedPalette {...args} />
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const oe=["Basic","Modes","ColorTokens"];export{r as Basic,a as ColorTokens,s as Modes,oe as __namedExportsOrder,ee as default};
