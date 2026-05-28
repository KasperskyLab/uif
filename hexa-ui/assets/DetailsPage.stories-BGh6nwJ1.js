import{b as p,R as t,r as B}from"./iframe-DGvJ380d.js";import{w as I}from"./withMeta-Cn2dTpV4.js";import{s as w}from"./helpers-BytZKRkB.js";import{B as O}from"./Button-wrPqqegB.js";import{T as S}from"./Toggle-CQ9mMjcU.js";import{l as c}from"./Placeholder-BC-YsAW2.js";import{D as v}from"./DetailsPage-BuqbA1-O.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-C_hi_klS.js";import"./StatusOkOutline-DyiwV4SU.js";import"./Dropdown-ZwTwTLgN.js";import"./KeyCode-9RiNU2cC.js";import"./Overflow-C7Z2yQ6d.js";import"./focus-BMBywfst.js";import"./type-fFl6OLJD.js";import"./Loader-CMdXHI8c.js";import"./index-ep_dZgWZ.js";import"./Divider-EZz3gDRj.js";import"./ArrowRight-BIq5osfB.js";import"./v4-BoP187Zn.js";import"./button-MWvA5E08.js";import"./wave-CATF4J87.js";import"./AdditionalContent-CyJPU7m4.js";import"./HelpMessage-D4_NBOsb.js";import"./FormLabel-04WUeFWU.js";import"./Markdown-Dtk4N5jt.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-IWItRl7b.js";import"./TextReducer-ClEwKs4l.js";import"./StatusDangerSolid1-CO9eEuNu.js";import"./Group-DEJL6ANa.js";import"./index-DgDzkQQ-.js";import"./colors-gQKfGPjt.js";import"./Popover-CqARYnm2.js";import"./Submenu-DH1CV3lX.js";import"./SubComponents-CSFJ9nWh.js";import"./TextWithTruncation-CU6FJoyo.js";import"./Badge-BYq-SqRH.js";import"./Indicator-BGiFA17M.js";import"./ArrowDownSolid-DAghjM8o.js";import"./ArrowRightSolid-C5uV6-Lq.js";import"./Tabs-BPpCwfjn.js";import"./useLocalization-Dy6EeyEq.js";import"./useIntersectionChildren-DcO1O92y.js";import"./useResizeObserver-ir5WvKdi.js";import"./Locale-EasBI-Nl.js";import"./generateId-BXJELych.js";import"./index-DiXbnD1z.js";import"./addEventListener-BoxOqZxv.js";import"./Portal--BFuLsqU.js";import"./regeneratorRuntime-CTryT5lx.js";import"./EllipsisOutlined-Cdf855u7.js";import"./Sidebar-wU8ucSgd.js";import"./PortalWrapper-cexOWuJQ.js";import"./useForceUpdate-D5ptZTVt.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",F="",L={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:F},Vt={title:"Hexa UI Components/DetailsPage",component:v,argTypes:{onChange:{},...w(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(L)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(O,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
