import{T as F}from"./Palette-CL2qD4Vl.js";import{c as f,G as b,M as g,R as e,S as h}from"./iframe-4-PRSI1I.js";import{w as H}from"./withMeta-BwOuJ6tr.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as D}from"./Button-D2E54Ulj.js";import{D as a}from"./Divider-Cb8Cmzqg.js";import{o as d}from"./Placeholder-DoG1ulbQ.js";import{S as U}from"./SegmentedControl-Di2Ukvsj.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./Menu3-BM3aMNYq.js";const V={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},j="SegmentedControl",G="Табы с возможностью прокидывать дополнительные проперти-модификаторы в контент",J="Префильтры, модифицированное представление одной формы несколькими табами",R="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=104692%3A554430",Y="https://pixso.net/app/design/AdtmI5-HzUa5gS17g9eGag",K={dod:V,component:j,description:G,usage:J,designLink:R,pixsoView:Y},Q=[g.Small,g.Medium,g.Large],o=[{name:"one",content:"default",properties:{state:"disabled",text:"im text from tab One properties"},text:"One"},{name:"two",content:"default",properties:{state:"disabled",text:"im text from tab Two properties"},text:"Two"},{name:"three",content:"another",properties:{text:"im text from tab Three properties"},text:"Three"},{name:"four",content:"another",properties:{state:"disabled",text:"im text from tab Four properties"},text:"Four"}],n={default:t=>{const{state:u,text:r}=t||{};return e.createElement(h,{direction:"vertical",size:15,align:"flex-start",justify:"normal"},e.createElement(a,null),e.createElement(D,{disabled:u},"Some button"),r&&e.createElement(e.Fragment,null,e.createElement(a,null),e.createElement("div",null,r)))},another:t=>{const{state:u,text:r}=t||{};return e.createElement(h,{direction:"vertical",size:15,align:"flex-start",justify:"normal"},e.createElement(a,null),e.createElement(D,{disabled:u},"Another button"),r&&e.createElement(e.Fragment,null,e.createElement(a,null),e.createElement("div",null,r)))}},Oe={title:"Hexa UI Components/SegmentedControl",component:U,argTypes:{size:{options:Q,control:{type:"radio"}},...O(["theme","componentType","componentId","dataTestId","klId","contentData"])},args:{size:"large",tabsData:o,contentData:n,defaultActiveTab:"two",testId:"segmented-control-test-id"},parameters:{badges:[b.stable,b.reviewedByDesign],docs:{page:H(K)},design:!1}},s={},i={args:{size:"large",tabsData:o.map(t=>({...t,iconBefore:e.createElement(d,null)})),contentData:n,testId:"segmented-control-test-id"}},m={args:{size:"large",tabsData:o.map(t=>({...t,iconBefore:e.createElement(d,null),indicator:Math.floor(Math.random()*10)>5?"new":"critical"})),contentData:n,testId:"segmented-control-test-id"}},c={args:{size:"large",tabsData:o.map(t=>({...t,iconBefore:e.createElement(d,null),counter:{number:Math.floor(Math.random()*14),mode:Math.floor(Math.random()*10)>5?"critical_transparent":"neutral_transparent"}})),contentData:n,testId:"segmented-control-test-id"}},l={args:{size:"large",tabsData:o.map(t=>({...t,iconBefore:e.createElement(d,null),infoTooltip:"Lorem ipsum"})),contentData:n,testId:"segmented-control-test-id"}},p={args:{source:{segmented_control:f.segmented_control,segmented_control_item:f.segmented_control_item}},render:t=>e.createElement(F,{...t})};var x,T,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,I,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder />
      };
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var M,z,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder />,
        indicator: Math.floor(Math.random() * 10) > 5 ? 'new' : 'critical'
      };
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var w,C,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder />,
        counter: {
          number: Math.floor(Math.random() * 14),
          mode: Math.floor(Math.random() * 10) > 5 ? 'critical_transparent' : 'neutral_transparent'
        }
      };
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var k,v,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    tabsData: tabsData.map(tab => {
      return {
        ...tab,
        iconBefore: <Placeholder />,
        infoTooltip: 'Lorem ipsum'
      };
    }),
    contentData,
    testId: 'segmented-control-test-id'
  }
}`,...(W=(v=l.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var P,L,A;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    source: {
      segmented_control: componentColors.segmented_control,
      segmented_control_item: componentColors.segmented_control_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const Ue=["Basic","Icons","WithIndicator","WithCounter","WithTooltip","ColorTokens"];export{s as Basic,p as ColorTokens,i as Icons,c as WithCounter,m as WithIndicator,l as WithTooltip,Ue as __namedExportsOrder,Oe as default};
