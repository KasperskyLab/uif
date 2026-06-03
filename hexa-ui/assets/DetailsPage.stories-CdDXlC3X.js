import{b as p,R as t,r as B}from"./iframe-DNxUu9EZ.js";import{w as I}from"./withMeta-CSumKzG1.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-CQvV2N_z.js";import{T as S}from"./Toggle-DhrERiGa.js";import{l as c}from"./Placeholder-D-llqBgK.js";import{D as v}from"./DetailsPage-B0ekmE41.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-B9jVBwYf.js";import"./StatusOkOutline-HmfsHsEj.js";import"./Dropdown-CKjJUOpc.js";import"./KeyCode-CkhLsK6Z.js";import"./Overflow-C82F7PuR.js";import"./focus-D4KycEDp.js";import"./type-rfDjHVUQ.js";import"./Loader-BaqUX3zQ.js";import"./index-Bew-gYUl.js";import"./Divider-BqwESatj.js";import"./ArrowRight-CS88a_sf.js";import"./v4-BoP187Zn.js";import"./button-qTwxWmX-.js";import"./wave-DYMnJ7p6.js";import"./AdditionalContent-B0qqui4V.js";import"./HelpMessage-AeD0a8su.js";import"./FormLabel-Cx4AUgy7.js";import"./Markdown-CCHl0-MZ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-CXyjrR-G.js";import"./Tag-Bg9hE3PN.js";import"./TextReducer-BbcQcxF5.js";import"./StatusDangerSolid1-B08ZoF4r.js";import"./Group-COY30YIT.js";import"./index-qOx2FGCH.js";import"./colors-5zN7FiNY.js";import"./Submenu-DIrISv9S.js";import"./SubComponents-RjPcSJ52.js";import"./TextWithTruncation-BidfppHZ.js";import"./Badge-DwsSy4TT.js";import"./Indicator-DQaQksXG.js";import"./ArrowDownSolid-Q8nCx2m4.js";import"./ArrowRightSolid-BlJskUAV.js";import"./Tabs-Ky9b0L2J.js";import"./useLocalization-DiGdLizq.js";import"./useIntersectionChildren-aG-OVoYf.js";import"./useResizeObserver-CduMX8g7.js";import"./Locale-BSP4PkRM.js";import"./generateId-BXJELych.js";import"./index-Dtv0NCnZ.js";import"./addEventListener-B4jMzAom.js";import"./Portal-CWFrYe3G.js";import"./regeneratorRuntime-CWYYwC8W.js";import"./EllipsisOutlined-BrebZ5GL.js";import"./Sidebar-CDZpRykb.js";import"./PortalWrapper-CCZMeEoZ.js";import"./useForceUpdate-C7TvifDt.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
