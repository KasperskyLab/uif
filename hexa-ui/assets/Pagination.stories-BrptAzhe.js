import{T as Z}from"./Palette-CL2qD4Vl.js";import{c as F,G as g,R as m,r as l,H as M}from"./iframe-4-PRSI1I.js";import{w as R}from"./withMeta-BwOuJ6tr.js";import{s as Y}from"./helpers-BytZKRkB.js";import{D as K,a as Q,P as j}from"./Pagination-CpX14myU.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./Select-Bfc69stS.js";import"./useGlobalStyles-B7OAA5LN.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./omit-DXgDXInf.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./useMergedState-5V6OeSqY.js";import"./KeyCode-c5NdJp32.js";import"./index-8yXvUTGn.js";import"./addEventListener-DmCE5wjQ.js";import"./Portal-2eAsMGG9.js";import"./isEqual-vUrjsNbx.js";import"./regeneratorRuntime-Co2DlCyH.js";import"./pickAttrs-ACVbvRAI.js";import"./List-CY7M4ryI.js";import"./Checkbox-C_Wci0Rq.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./FormLabel-CoXJxjwh.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";import"./IconSearch-P_ay4iUp.js";import"./SearchActive-BuIUfH-Q.js";import"./useTranslation-jUtuSwd5.js";import"./Pagination-BzLE57dV.js";import"./RightOutlined-DiymIenV.js";import"./iconUtil-DiU6VZER.js";import"./DownOutlined-Dw9vwDGv.js";import"./SearchOutlined-p7LyB4Dy.js";import"./useForceUpdate-CA8tDWq_.js";import"./ArrowLeft-CKUW7D3Z.js";import"./ArrowRight-AkM1Q671.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";const X={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},q="Pagination",$="Компонент для отрисовки пагинации. В качестве основы используется AntdPagination из библиотеки Antd.",ee="Структурирование большого объема информации, путем ее разделения на отдельные страницы",re="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=1063%3A4211",te="https://pixso.net/app/design/hjHUr5zzgcXmN9y0toyllw",u={dod:X,component:q,description:$,usage:ee,designLink:re,pixsoView:te},oe=M.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
`,dr={title:"Hexa UI Components/Pagination",component:j,argTypes:{...Y(["theme"])},args:{total:500,disabled:!1,cursor:!1,simple:!1,showSizeChanger:!1,jumper:!1,current:1,pageSize:Q,pageSizeOptions:K,hideOnSinglePage:!1,selected:25,testId:"pagination-test-id",klId:"pagination-kl-id"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:R(u)},design:u.pixsoView},decorators:[(r,d)=>m.createElement(oe,null,m.createElement(r,{...d}))]},e=({current:r,pageSize:d,...B})=>{const[U,v]=l.useState(d),[J,V]=l.useState(r),c=(G,N)=>{V(G),v(Number(N))};return m.createElement(j,{...B,pageSize:U,current:J,onChange:c,onShowSizeChange:c})},t={render:e.bind({})},o={render:e.bind({}),args:{simple:!0}},a={render:e.bind({}),args:{total:5,hideOnSinglePage:!0}},i={render:e.bind({}),args:{showSizeChanger:!0}},s={render:e.bind({}),args:{jumper:!0,showSizeChanger:!0}},n={render:e.bind({}),args:{showSizeChanger:!0,disabled:!0}},p={args:{source:F.pagination},render:r=>m.createElement(Z,{...r})};var h,S,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({})
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var P,T,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    simple: true
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,z,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    total: 5,
    hideOnSinglePage: true
  }
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var E,_,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var x,y,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    jumper: true,
    showSizeChanger: true
  }
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var O,D,H;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true,
    disabled: true
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,L,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    source: componentColors.pagination
  },
  render: args => <ThemedPalette {...args} />
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const cr=["Basic","Simple","HideOnSinglePage","WithSizeChanger","WithJumper","Disabled","ColorTokens"];export{t as Basic,p as ColorTokens,n as Disabled,a as HideOnSinglePage,o as Simple,s as WithJumper,i as WithSizeChanger,cr as __namedExportsOrder,dr as default};
