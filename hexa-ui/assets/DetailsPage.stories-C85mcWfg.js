import{b as p,R as t,r as B}from"./iframe-WWmuoJVo.js";import{w as I}from"./withMeta-B27OU3Ju.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-CLoGc_U5.js";import{T as S}from"./Toggle-VMHJ5ziV.js";import{l as c}from"./Placeholder-D-9jZmE-.js";import{D as v}from"./DetailsPage-CLIZvha8.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Dropdown-BTc89UD8.js";import"./KeyCode-B_Qxrabv.js";import"./Overflow-BR2bFp5F.js";import"./focus-laSdr2Ty.js";import"./type-CH-zv0M5.js";import"./Loader-C4W-_r7-.js";import"./index-1btpB87J.js";import"./Divider-2duFHEPw.js";import"./ArrowRight-zAcxCSgi.js";import"./v4-BoP187Zn.js";import"./button-CF6IFyfC.js";import"./wave-BKxtHpDI.js";import"./AdditionalContent-Cc4OQFBm.js";import"./HelpMessage-Byc1jZxK.js";import"./FormLabel-C5Hc4K2h.js";import"./Markdown-BGmAiIQ8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DwSAzC79.js";import"./Tag-CZpHHsSN.js";import"./TextReducer-9CK0p8eL.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./Group-DGlPc1vl.js";import"./index-toe1S0SQ.js";import"./colors-CeinHcp_.js";import"./Submenu-DXz9ZSpO.js";import"./SubComponents-BLltZMm3.js";import"./TextWithTruncation-MkXQggoI.js";import"./Badge-DfvA_Ft9.js";import"./Indicator-CgAlXPGm.js";import"./ArrowDownSolid-HkErgQx9.js";import"./ArrowRightSolid-DBg3_af3.js";import"./Tabs-CMoLsmdU.js";import"./useLocalization-BcRo-pnl.js";import"./useIntersectionChildren-CG1G4Pxk.js";import"./useResizeObserver-DPyyNTuX.js";import"./Locale-D140DgSn.js";import"./generateId-BXJELych.js";import"./index-Cb62TBaU.js";import"./addEventListener-CahBV2Or.js";import"./Portal-DRw3DWI_.js";import"./regeneratorRuntime-DZNAYNzX.js";import"./EllipsisOutlined-C5rB07qE.js";import"./Sidebar-CGZ5G3d2.js";import"./PortalWrapper-BeeXx6eN.js";import"./useForceUpdate-Dek5mP28.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
