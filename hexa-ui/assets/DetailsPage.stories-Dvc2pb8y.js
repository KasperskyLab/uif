import{b as p,R as t,r as B}from"./iframe-DVE_7kq9.js";import{w as I}from"./withMeta-CzPSWtck.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-D9s4A7m7.js";import{T as S}from"./Toggle-CKDI_Dyd.js";import{l as c}from"./Placeholder-BQjnLMm9.js";import{D as v}from"./DetailsPage-C_wZNDYb.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BGulR29O.js";import"./StatusOkOutline-C-l0Ef9W.js";import"./Dropdown--DTicSeA.js";import"./KeyCode-EWEGft3Z.js";import"./Overflow-oyvLW8yL.js";import"./focus-BjQQf_fX.js";import"./type-CaOsV2Rp.js";import"./Loader-B40QQF8n.js";import"./index-nHA8zgOJ.js";import"./Divider-B0XUs7Vt.js";import"./ArrowRight-D6sV46j6.js";import"./v4-BoP187Zn.js";import"./button-BUGCw8rM.js";import"./wave-D4avGR4B.js";import"./AdditionalContent-qp5Rkj-D.js";import"./HelpMessage-CpYfwXXh.js";import"./FormLabel-CyTz6ltR.js";import"./Markdown-bfgL_FF5.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D2gFaQHm.js";import"./Tag-osrmA0i2.js";import"./TextReducer-Ct5Blcav.js";import"./StatusDangerSolid1-jJjmvO6K.js";import"./Group-Deg5VM3T.js";import"./index-DGIJDX9_.js";import"./colors-Z4HTaick.js";import"./Submenu-BvB4jwPU.js";import"./SubComponents-BV9ewZpB.js";import"./TextWithTruncation-BCWQPqcO.js";import"./Badge-3fqFup-t.js";import"./Indicator-BIasTRaI.js";import"./ArrowDownSolid-YqOaa2_I.js";import"./ArrowRightSolid-DIMtYxkK.js";import"./Tabs-DHG9Vxdg.js";import"./useLocalization-BPjmocEr.js";import"./useIntersectionChildren-ttRsN6Pn.js";import"./useResizeObserver-Do10A-kg.js";import"./Locale-D0exbGHl.js";import"./generateId-BXJELych.js";import"./index-DpVB-H6o.js";import"./addEventListener-CMIXNMwq.js";import"./Portal-sm_kSK11.js";import"./regeneratorRuntime-DRUYrVMB.js";import"./EllipsisOutlined-DsaaLJCv.js";import"./Sidebar-BFmG9xyX.js";import"./PortalWrapper-BAvpxo6u.js";import"./useForceUpdate-BwhDy_OH.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
