import{b as p,R as t,r as B}from"./iframe-BTqAWtZ7.js";import{w as I}from"./withMeta-CcVYKngh.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-BshtoBSx.js";import{T as S}from"./Toggle-BuYCy85D.js";import{l as c}from"./Placeholder-BHcqJ4m2.js";import{D as v}from"./DetailsPage-BQjTu3RC.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CG1GRMfV.js";import"./StatusOkOutline-lrTYU_cr.js";import"./Dropdown-CnlNBihq.js";import"./KeyCode-Bslz2nuw.js";import"./Overflow-YfqnCquf.js";import"./focus-iTloRQcb.js";import"./type-Qe6Yz0Sh.js";import"./Loader-GevLMjlq.js";import"./index-BxRvj_MD.js";import"./Divider-KPnt62j1.js";import"./ArrowRight-BECW_anK.js";import"./v4-BoP187Zn.js";import"./button-DFmMxOVw.js";import"./wave-CKMqhJ_H.js";import"./AdditionalContent-D42GTXoH.js";import"./HelpMessage-CHnCRGuv.js";import"./FormLabel-BNKGNgDh.js";import"./Markdown-B5pkzJQc.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-DwHieltF.js";import"./TextReducer-BkZqz3aN.js";import"./StatusDangerSolid1-CztCiRpT.js";import"./Group-ClC4zsiX.js";import"./index-D83RR8U-.js";import"./colors-t9lelOTz.js";import"./Popover-mmzT_Qk2.js";import"./Submenu-HFM1vA-r.js";import"./SubComponents-DSO_hKfX.js";import"./TextWithTruncation-My_0N7g_.js";import"./Badge-BqxbPYWC.js";import"./Indicator-D68joLsL.js";import"./ArrowDownSolid-BZ856B2m.js";import"./ArrowRightSolid-DTTYrwmS.js";import"./Tabs-B5KYNjuP.js";import"./useLocalization-CgEqMuBR.js";import"./useIntersectionChildren-CXwtL2g4.js";import"./useResizeObserver-CAsID6Q6.js";import"./Locale-30ptPop6.js";import"./generateId-BXJELych.js";import"./index-SWxFEXDy.js";import"./addEventListener-CG6IXGiR.js";import"./Portal-CkV8X2Gv.js";import"./regeneratorRuntime-aw_4L5Yb.js";import"./EllipsisOutlined-0La_u9IK.js";import"./Sidebar-DU_tvpEz.js";import"./PortalWrapper-Cj26YUNM.js";import"./useForceUpdate-fTBbxRF6.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
