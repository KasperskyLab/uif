import{b as p,R as t,r as B}from"./iframe-BRHEU44b.js";import{w as I}from"./withMeta-DRekEB-t.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-C0fUEtRn.js";import{T as S}from"./Toggle-CeugcNRG.js";import{l as c}from"./Placeholder-xYqG3kDP.js";import{D as v}from"./DetailsPage-KA8hXQ5o.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Bb2qq9gO.js";import"./StatusOkOutline-DIU7SOim.js";import"./Dropdown-CfWBMvGn.js";import"./KeyCode-3nj2UE0z.js";import"./Overflow-CMzOzC0c.js";import"./focus-Bk20jhWG.js";import"./type-C7NSKp6S.js";import"./Loader-CDcSa16C.js";import"./index-BsfcY517.js";import"./Divider-BztJ3dOK.js";import"./ArrowRight-B1uw3U95.js";import"./v4-BoP187Zn.js";import"./button-BiQ5G3qA.js";import"./wave-Bs5MIFvx.js";import"./AdditionalContent-CaNN7mfg.js";import"./HelpMessage-DMzajr4e.js";import"./FormLabel-C1G9QKAr.js";import"./Markdown-WIxY-tBy.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D7JZ43Jf.js";import"./Tag-BIcD16gu.js";import"./TextReducer-CWApg1Kv.js";import"./StatusDangerSolid1-BdPlzuOB.js";import"./Group-Br3zlCvh.js";import"./index-DUIAU5F9.js";import"./colors-BZiHKXSQ.js";import"./Submenu-CZB_ttNs.js";import"./SubComponents-C8HMLIT2.js";import"./TextWithTruncation-D7ZQDdFm.js";import"./Badge-w9p2rFSJ.js";import"./Indicator-CEAAwJap.js";import"./ArrowDownSolid-BqYk5Jzi.js";import"./ArrowRightSolid-CZnOfwCW.js";import"./Tabs-C0HTd0Ts.js";import"./useLocalization-Bi4XzMnz.js";import"./useIntersectionChildren-BVo_OGIY.js";import"./useResizeObserver-DTyQ_5GA.js";import"./Locale-CHia4d6g.js";import"./generateId-BXJELych.js";import"./index-CqCYO4OY.js";import"./addEventListener-BCiT9w1f.js";import"./Portal-B8pD_BNF.js";import"./regeneratorRuntime-ABVNBsVc.js";import"./EllipsisOutlined-KdKpoffC.js";import"./Sidebar-BiuvV6In.js";import"./PortalWrapper-CUpwNVGr.js";import"./useForceUpdate-BBHNNYgH.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,b,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: {
      ...actions,
      THIRD_ACTION: {
        text: 'Action 3',
        onClick: () => alert('Action 3')
      }
    }
  }
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,h,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: undefined
  }
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var D,C,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    navigation: undefined,
    children: 'Content'
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var P,k,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    defaultActiveKey: 'tab-1',
    actions: undefined
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const Ut=["Basic","WithThreeActions","WithoutActions","WithoutNavigation","WithDefaultActiveKey"];export{r as Basic,s as WithDefaultActiveKey,a as WithThreeActions,n as WithoutActions,i as WithoutNavigation,Ut as __namedExportsOrder,Vt as default};
