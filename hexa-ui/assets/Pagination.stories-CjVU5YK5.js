import{T as R}from"./Palette-D399Jy0U.js";import{R as m,b as g,c as Y,r as l,H as K}from"./iframe-DiWy1KYN.js";import{w as Q}from"./withMeta-Bxi4FJS3.js";import{s as X}from"./helpers-BytZKRkB.js";import{P as _}from"./Pagination-DoCWgZ9_.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BI9kXhG1.js";import"./StatusOkOutline-CVg5KvZR.js";import"./Select-CsKBEdWl.js";import"./TextReducer-BeO9eZ_q.js";import"./useGlobalStyles-Drby6BiX.js";import"./Divider-CzZqKtxh.js";import"./Loader-G8s_DU-J.js";import"./index-CmpLDwNs.js";import"./type-CWarxUn6.js";import"./Tag-C9Ggfcps.js";import"./StatusDangerSolid1-CdxRh6YN.js";import"./Group-CMDnr5NI.js";import"./index-Dld2Nkde.js";import"./colors-CH5oW_vd.js";import"./wave-PPlkdWFv.js";import"./KeyCode-BY4DNMR0.js";import"./index-C2f7XXaj.js";import"./addEventListener--UKpTx8o.js";import"./Portal-CghhDhfx.js";import"./Overflow-TLEdl8-N.js";import"./regeneratorRuntime-DMJZ9Sg8.js";import"./pickAttrs-CpNdow35.js";import"./List-D3whX-Ig.js";import"./Checkbox-D5VUB68Z.js";import"./AdditionalContent-DyC_fSNM.js";import"./HelpMessage-DJr5ze18.js";import"./useId-DExBJilu.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./FormLabel-DpFLHhSH.js";import"./Markdown-CYEeQ0YD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DmRRZB2O.js";import"./index-tl4v6NiU.js";import"./index-DbC3ymP-.js";import"./IconSearch-CU5TKC1D.js";import"./Indicator-BC65I4BS.js";import"./Search1-CWUrFQgM.js";import"./useTranslation-DDc5jM4w.js";import"./ArrowLeft-CU8IghxH.js";import"./ArrowRight-BbbEfuNH.js";import"./useThemedTextbox-D_9zr8k6.js";import"./typesHelpers-tpz7Of7L.js";import"./Pagination-Ccm7uJOq.js";import"./LeftOutlined-1foZd7JM.js";import"./iconUtil-CKHPQrwM.js";import"./SearchOutlined-C22t9H04.js";import"./useForceUpdate-Btjvlpbs.js";const Z={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},q="Pagination",F="Компонент для отрисовки пагинации. В качестве основы используется AntdPagination из библиотеки Antd.",G="Структурирование большого объема информации, путем ее разделения на отдельные страницы",$="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=1063%3A4211",ee="https://pixso.net/app/design/hjHUr5zzgcXmN9y0toyllw",u={dod:Z,component:q,description:F,usage:G,designLink:$,pixsoView:ee},re=K.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
`,tr={title:"Hexa UI Components/Pagination",component:_,argTypes:{...X(["theme"])},args:{total:500,disabled:!1,cursor:!1,simple:!1,showSizeChanger:!1,jumper:!1,current:1,pageSize:10,pageSizeOptions:["10","20","50","100"],hideOnSinglePage:!1,selected:25,testId:"pagination-test-id",klId:"pagination-kl-id"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:Q(u)},design:u.pixsoView},decorators:[(r,d)=>m.createElement(re,null,m.createElement(r,{...d}))]},e=({current:r,pageSize:d,...A})=>{const[B,I]=l.useState(d),[U,L]=l.useState(r),c=(M,N)=>{L(M),I(Number(N))};return m.createElement(_,{...A,pageSize:B,current:U,onChange:c,onShowSizeChange:c})},t={render:e.bind({})},o={render:e.bind({}),args:{simple:!0}},a={render:e.bind({}),args:{total:5,hideOnSinglePage:!0}},n={render:e.bind({}),args:{showSizeChanger:!0}},i={render:e.bind({}),args:{jumper:!0,showSizeChanger:!0}},s={render:e.bind({}),args:{showSizeChanger:!0,disabled:!0}},p={args:{source:Y.pagination},render:r=>m.createElement(R,{...r})};var h,S,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({})
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var P,w,C;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    simple: true
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,z,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    total: 5,
    hideOnSinglePage: true
  }
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var k,x,y;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var H,O,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    jumper: true,
    showSizeChanger: true
  }
}`,...(E=(O=i.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var W,j,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true,
    disabled: true
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var v,J,V;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: componentColors.pagination
  },
  render: args => <ThemedPalette {...args} />
}`,...(V=(J=p.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const or=["Basic","Simple","HideOnSinglePage","WithSizeChanger","WithJumper","Disabled","ColorTokens"];export{t as Basic,p as ColorTokens,s as Disabled,a as HideOnSinglePage,o as Simple,i as WithJumper,n as WithSizeChanger,or as __namedExportsOrder,tr as default};
