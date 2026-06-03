import{b as p,R as t,r as B}from"./iframe-CBNIXqWm.js";import{w as I}from"./withMeta-BiY54Lnt.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-DejaZzBC.js";import{T as S}from"./Toggle-Be9eoBq9.js";import{l as c}from"./Placeholder-BtGpZ1tA.js";import{D as v}from"./DetailsPage-Sf5uTFZc.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DRLKWrxC.js";import"./StatusOkOutline-BhzwBS5E.js";import"./Dropdown-ees5VvWC.js";import"./KeyCode-BRZB9_MH.js";import"./Overflow-CmFo4jk3.js";import"./focus-BxWsNqjj.js";import"./type-YzYuwFG9.js";import"./Loader-vJbmmTbY.js";import"./index-Cxj_l2qe.js";import"./Divider-ja1HbPIW.js";import"./ArrowRight-DOMqH-A2.js";import"./v4-BoP187Zn.js";import"./button-DLIzkXNO.js";import"./wave-C4_7brB4.js";import"./AdditionalContent-1M0CuFd6.js";import"./HelpMessage-ur0yPu5r.js";import"./FormLabel-Cy2q2kGk.js";import"./Markdown-CxshTH5T.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-BHGhJBJm.js";import"./Tag-DB-z3Swo.js";import"./TextReducer-BqEbiIRi.js";import"./StatusDangerSolid1-P4rj2y0n.js";import"./Group-Bda88l4J.js";import"./index-DPzFOva3.js";import"./colors-AIlJBz8g.js";import"./Submenu-BQfeejNd.js";import"./SubComponents-DXv5KlSQ.js";import"./TextWithTruncation-jZXLIk_v.js";import"./Badge-Czi2pd5f.js";import"./Indicator-B378i3ea.js";import"./ArrowDownSolid-Dnc_Zu37.js";import"./ArrowRightSolid-Y7yti10s.js";import"./Tabs-Dga4QwWr.js";import"./useLocalization-B33UBcbw.js";import"./useIntersectionChildren-DEGvAlsA.js";import"./useResizeObserver-DOWIPqh0.js";import"./Locale-CIb46SaP.js";import"./generateId-BXJELych.js";import"./index-B28v8bpi.js";import"./addEventListener-bnq5arAQ.js";import"./Portal-2ToDm_pz.js";import"./regeneratorRuntime-DPCN-6D0.js";import"./EllipsisOutlined-CJzGJ-Lh.js";import"./Sidebar-Cv9UFLKL.js";import"./PortalWrapper-gGp8EenB.js";import"./useForceUpdate-CnVJZ6KV.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
