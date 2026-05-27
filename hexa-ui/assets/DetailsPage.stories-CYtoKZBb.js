import{b as p,R as t,r as B}from"./iframe-ko-fN4O0.js";import{w as I}from"./withMeta-C8MsJeBT.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-BAMDHgQb.js";import{T as S}from"./Toggle-Cbfk1pXa.js";import{l as c}from"./Placeholder-BUqYHWNp.js";import{D as v}from"./DetailsPage-DU6Um3np.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DmjuEKWz.js";import"./StatusOkOutline-Cn4WVFef.js";import"./Loader-iMImGdt_.js";import"./index-DcNvhb6C.js";import"./type-D7k2Xvr8.js";import"./button-B01puASn.js";import"./wave-mrEb6LZp.js";import"./Dropdown-CWozQ77e.js";import"./KeyCode-BDHZ8Wip.js";import"./Overflow-BIuCMRyD.js";import"./focus-Ch4Yfw29.js";import"./Divider-Cb94-KaG.js";import"./ArrowRight-DwyJImV1.js";import"./v4-BoP187Zn.js";import"./AdditionalContent-BqWVHi1m.js";import"./HelpMessage-DmzGvLi8.js";import"./FormLabel-CQC01_Ba.js";import"./Markdown-DLZFx-iU.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IA0Vkdgq.js";import"./TextReducer-C04xZ-9I.js";import"./StatusDangerSolid1-D6q9y8uE.js";import"./Group-u0Sk644W.js";import"./index-C0pCj2SQ.js";import"./colors-DQDdeyBZ.js";import"./Popover-CupUWmel.js";import"./Submenu-V74MMjtT.js";import"./SubComponents-CRNSan_x.js";import"./TextWithTruncation-CiJF3Fhx.js";import"./Badge-CE134zO_.js";import"./Indicator-qmMujCEx.js";import"./ArrowDownSolid-C6Ce0L8K.js";import"./ArrowRightSolid-Czcl91ns.js";import"./Tabs-254YNEvE.js";import"./useLocalization-Cj1pOHyJ.js";import"./useIntersectionChildren-ALChUzfp.js";import"./useResizeObserver-BFHPmBAp.js";import"./Locale-Dnowxe1b.js";import"./generateId-BXJELych.js";import"./index-Bnf8aIaf.js";import"./addEventListener-D7QwEpFU.js";import"./Portal-B4E2flWU.js";import"./regeneratorRuntime-CgPH-ZHJ.js";import"./EllipsisOutlined-3U8XVE8Y.js";import"./Sidebar-Cks6eWlE.js";import"./PortalWrapper-DbpU2QAx.js";import"./useForceUpdate-D3H63lQx.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
