import{b as p,R as t,r as B}from"./iframe-DDLZRCVO.js";import{w as I}from"./withMeta-Owz_jkP-.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-wVQP-Ef_.js";import{T as S}from"./Toggle-BGU7vbwQ.js";import{l as c}from"./Placeholder-BI9wa67U.js";import{D as v}from"./DetailsPage-Bku_e--4.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-B8vtpcrq.js";import"./StatusOkOutline-HQaRO0CP.js";import"./Dropdown-D13KR3Lp.js";import"./KeyCode-DFdnluzg.js";import"./Overflow-Dz5ksMd5.js";import"./focus-D5iHM89J.js";import"./type-BAl6LeTY.js";import"./Loader-BqLObxDG.js";import"./index-tsevXCrq.js";import"./Divider-D4PVCF9a.js";import"./ArrowRight-B8y0Q0Nm.js";import"./v4-BoP187Zn.js";import"./button-YtfEiZDA.js";import"./wave-B_l4DZPA.js";import"./AdditionalContent-Ct_u5nIp.js";import"./HelpMessage-D1M8EhP5.js";import"./FormLabel-C_hbxEn3.js";import"./Markdown-DxXmCea8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-NgWZ2JmQ.js";import"./Tag-DDqt8ImQ.js";import"./TextReducer-BAs_iNPz.js";import"./StatusDangerSolid1-DidKQF1_.js";import"./Group-Bf6OWnSx.js";import"./index-6kwzVjNc.js";import"./colors-DiQKrWLJ.js";import"./Submenu-D_ec3yVh.js";import"./SubComponents-OA5Nrhze.js";import"./TextWithTruncation-eXyaFxEJ.js";import"./Badge-sg085yfW.js";import"./Indicator-3l8y9pjH.js";import"./ArrowDownSolid-DX-__RrW.js";import"./ArrowRightSolid-nWTj5AhI.js";import"./Tabs-BJAwsWTz.js";import"./useLocalization-8fnpXsnX.js";import"./useIntersectionChildren-CkB6Asfg.js";import"./useResizeObserver-B4wJKVMb.js";import"./Locale-cbDoWrDj.js";import"./generateId-BXJELych.js";import"./index-Rp4OOj6C.js";import"./addEventListener-B9vO-_93.js";import"./Portal-B6ZcGHfv.js";import"./regeneratorRuntime-Bo-tNpBX.js";import"./EllipsisOutlined-BqrIghfb.js";import"./Sidebar-CLMLUoVP.js";import"./PortalWrapper-Rhh3F6w9.js";import"./useForceUpdate-D7uGACng.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
