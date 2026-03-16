import{b as p,R as t,r as B}from"./iframe-DlY6n6Um.js";import{w as I}from"./withMeta-B77fl0Sa.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-CgqUalcg.js";import{T as S}from"./Toggle-3Jmrg0tX.js";import{l as c}from"./Placeholder-DRo8POZa.js";import{D as v}from"./DetailsPage-BnaChmEG.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Dropdown-WtVSJYv5.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./type-Cyafuwrq.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Divider-BzNbSw2T.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";import"./AdditionalContent-D1SVuAXm.js";import"./HelpMessage-CfUPOaMw.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./colors-Cs2HIvKh.js";import"./Popover-D8ys_ap7.js";import"./Submenu-Cdzt-E7V.js";import"./SubComponents-CR9vTQlE.js";import"./TextWithTruncation-CKM_ry59.js";import"./Badge-B6JIvdem.js";import"./Indicator-CQY-Y-dA.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./ArrowRightSolid-BZEyC8P2.js";import"./Tabs-BDp1woPZ.js";import"./useLocalization-DgpIUcge.js";import"./useIntersectionChildren-CM3eGnjc.js";import"./useResizeObserver-CIT607-3.js";import"./Locale-kG1oP_Ht.js";import"./generateId-BXJELych.js";import"./index-Bz97onRI.js";import"./addEventListener-DLbRjLat.js";import"./Portal-CDqKrIDu.js";import"./regeneratorRuntime-ChjYfAIJ.js";import"./EllipsisOutlined-DB1qZUai.js";import"./Sidebar-llqutOcL.js";import"./PortalWrapper-BiZl32E3.js";import"./useForceUpdate-Baz3Ps8R.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
