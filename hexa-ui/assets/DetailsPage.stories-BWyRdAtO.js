import{b as p,R as t,r as B}from"./iframe-DiWy1KYN.js";import{w as I}from"./withMeta-Bxi4FJS3.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-BY2tOC9A.js";import{T as S}from"./Toggle-B0YrBWJf.js";import{l as c}from"./Placeholder-D7e87NXL.js";import{D as v}from"./DetailsPage-B4vmyAQD.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BI9kXhG1.js";import"./StatusOkOutline-CVg5KvZR.js";import"./Dropdown-Bqv3QVMW.js";import"./KeyCode-BY4DNMR0.js";import"./Overflow-TLEdl8-N.js";import"./focus-D0oyTwSA.js";import"./type-CWarxUn6.js";import"./Loader-G8s_DU-J.js";import"./index-CmpLDwNs.js";import"./Divider-CzZqKtxh.js";import"./ArrowRight-BbbEfuNH.js";import"./v4-BoP187Zn.js";import"./button-CZMOKgb_.js";import"./wave-PPlkdWFv.js";import"./AdditionalContent-DyC_fSNM.js";import"./HelpMessage-DJr5ze18.js";import"./FormLabel-DpFLHhSH.js";import"./Markdown-CYEeQ0YD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DmRRZB2O.js";import"./Tag-C9Ggfcps.js";import"./TextReducer-BeO9eZ_q.js";import"./StatusDangerSolid1-CdxRh6YN.js";import"./Group-CMDnr5NI.js";import"./index-Dld2Nkde.js";import"./colors-CH5oW_vd.js";import"./Submenu-D0US5h_q.js";import"./SubComponents-aplPLZ6b.js";import"./TextWithTruncation-rIYa_qGg.js";import"./Badge-CWliRpFJ.js";import"./Indicator-BC65I4BS.js";import"./ArrowDownSolid-CqrJrSKt.js";import"./ArrowRightSolid-Zkcei8iz.js";import"./Tabs-C8fURhOU.js";import"./useLocalization-BgS7ONeC.js";import"./useIntersectionChildren-CSd29Qef.js";import"./useResizeObserver-C3SylIKu.js";import"./Locale-DAWrqLnn.js";import"./generateId-BXJELych.js";import"./index-C2f7XXaj.js";import"./addEventListener--UKpTx8o.js";import"./Portal-CghhDhfx.js";import"./regeneratorRuntime-DMJZ9Sg8.js";import"./EllipsisOutlined-ElawIMLL.js";import"./Sidebar-DAGEhrec.js";import"./PortalWrapper-CLvV2_gc.js";import"./useForceUpdate-Btjvlpbs.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
