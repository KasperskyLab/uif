import{T as C}from"./Palette-Bcbt30O7.js";import{R as e,b as c,t as k,c as x,T as M}from"./iframe-DlY6n6Um.js";import{w as f}from"./withMeta-B77fl0Sa.js";import{s as E,a as w}from"./helpers-BytZKRkB.js";import{S as B}from"./StoryComponents-5Ni7_M0_.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Popover-D8ys_ap7.js";const _={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},I="Section Message",D="Section Message используется как статичное уведомление для акцента на информации вутри контента, требующего внимания или действий.",R="Используется для инлайн уведомлений. Размещается в теле страницы, Section Message не пропадает с течением времени.",O="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=69315%3A242253",V="https://pixso.net/app/design/KkB-rzGoq7IXsGE5wJyzaQ",v={dod:_,component:I,description:D,usage:R,designLink:O,pixsoView:V},H={FIRST_ACTION:{text:"Action1",onClick:()=>console.log("Action1")},SECOND_ACTION:{text:"Action2",onClick:()=>console.log("Action2")}},re={title:"Hexa UI Components/SectionMessage",component:k,argTypes:{...E(["theme"])},args:{title:"Title",mode:"success",testId:"section-message-test-id",klId:"section-message-kl-id"},parameters:{badges:[c.stable,c.reviewedByDesign],docs:{page:f(v)}},decorators:[(s,a)=>e.createElement(B,null,e.createElement(s,{...a}))]},t={},o={args:{children:e.createElement(M,{type:"BTR3"},"Title and actions are optional. Toggle their visibility as needed."),actions:H}},r={render:s=>{const a=["error","success","warning","info"];return e.createElement(e.Fragment,null,a.map(i=>e.createElement(k,{...s,key:i,mode:i})))},argTypes:{expandable:w("true")}},n={args:{source:x.section_message},render:s=>e.createElement(C,{...s})};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,g,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Text type="BTR3">Title and actions are optional. Toggle their visibility as needed.</Text>,
    actions: ActionsButtons
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,S,h;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: SectionMessageProps) => {
    const modes: SectionMessageMode[] = ['error', 'success', 'warning', 'info'];
    return <>
        {modes.map(mode => <SectionMessage {...args} key={mode} mode={mode} />)}
      </>;
  },
  argTypes: {
    expandable: sbSetDefaultValue('true')
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,A,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: componentColors.section_message
  },
  render: args => <ThemedPalette {...args} />
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const ne=["Basic","WithChildrenAndActions","AllModes","ColorTokens"];export{r as AllModes,t as Basic,n as ColorTokens,o as WithChildrenAndActions,ne as __namedExportsOrder,re as default};
