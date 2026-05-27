import{b as p,R as t,r as B}from"./iframe-DijVn6lr.js";import{w as I}from"./withMeta-Cvuu-gnO.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-PwdEuxbx.js";import{T as S}from"./Toggle-B1iun58-.js";import{l as c}from"./Placeholder-XNkSpDe-.js";import{D as v}from"./DetailsPage-lEHv075C.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./Dropdown-D0EIrFH4.js";import"./KeyCode-Dc0kQrxh.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./type-DN7uEUoT.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./Divider-D-bCk8Cb.js";import"./ArrowRight-DFM_iKWt.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./wave-B_Kd_ldv.js";import"./AdditionalContent-BcbE0Uii.js";import"./HelpMessage-BdtHkJwS.js";import"./FormLabel-671wf7jJ.js";import"./Markdown-DOYaVGrQ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-UgBikWKe.js";import"./TextReducer-BIfgSXBQ.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./Group-CAP3cdvx.js";import"./index-tjmVxM9w.js";import"./colors-CLXBBt7C.js";import"./Popover-CTNslkPb.js";import"./Submenu-dqxFZnAy.js";import"./SubComponents-BYoaH9dX.js";import"./TextWithTruncation-ZpW5O1mj.js";import"./Badge-BxwbPOiG.js";import"./Indicator-C31YGlvy.js";import"./ArrowDownSolid-B6lDi2Ko.js";import"./ArrowRightSolid-x1c4h6Py.js";import"./Tabs-CcP53grO.js";import"./useLocalization-BLHqRTJE.js";import"./useIntersectionChildren-oYXg-jOA.js";import"./useResizeObserver-u-jWFSx0.js";import"./Locale-1GHsRnEy.js";import"./generateId-BXJELych.js";import"./index-BqzR3hwt.js";import"./addEventListener-ClnX5cOj.js";import"./Portal-DepVVhUk.js";import"./regeneratorRuntime-CxzpwiJ2.js";import"./EllipsisOutlined-DPd7g4lG.js";import"./Sidebar-CFuQDJVI.js";import"./PortalWrapper-CB39oIHY.js";import"./useForceUpdate-C5uVaAVo.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
