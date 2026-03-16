import{T as de}from"./Palette-Bcbt30O7.js";import{a1 as ce,a0 as pe,w as ue,R as e,u as ge,r as g,j as M,A as fe,H as be,y as he,aj as ye,b as B,B as I,c as q,S as $}from"./iframe-DlY6n6Um.js";import{w as xe}from"./withMeta-B77fl0Sa.js";import{s as Se}from"./helpers-BytZKRkB.js";import{B as N}from"./Button-CgqUalcg.js";import{D as f}from"./Divider-BzNbSw2T.js";import{l as v}from"./Placeholder-DRo8POZa.js";import{B as ke}from"./Badge-B6JIvdem.js";import{D as ve}from"./Dropdown-WtVSJYv5.js";import{I as Ee}from"./Indicator-CQY-Y-dA.js";import{t as Ce}from"./Menu3-B3FR9-ED.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./type-Cyafuwrq.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";import"./colors-Cs2HIvKh.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./shouldForwardProp-Cdy-RLhZ.js";const n=ce(),Te=pe`
  display: flex;
  border-radius: ${n("radius")};
  background-color: ${n("bar.background")};
  margin-bottom: 10px;
  width: max-content;
  
  .kl6-segmented-control-button,
  .kl6-segmented-control-expander {
    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 16px;
      background-color: ${n("bar.dividerColor")};
    }
  }

  .active + .kl6-segmented-control-button,
  .active + .kl6-segmented-control-expander {
    &:before {
      display: none;
    }
  }
  
  .kl6-segmented-control-button {
    height: ${n("height")};
    background-color: transparent;
    color: ${n("button.enabled.color")};
    border-radius: ${n("radius")};
    border: none;
    cursor: pointer;
    padding: ${n("padding")};
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;

    font-family: ${n("fontFamily")};
    font-size: ${n("fontSize")};
    line-height: ${n("lineHeight")};
    font-weight: ${n("fontWeight")};
    font-style: ${n("fontStyle")};
    letter-spacing: ${n("letterSpacing")};
  
    &:first-child,
    &:focus-visible,
    &.active {
      &:before {
        display: none;
      }
    }
  
    &:hover:not(.active) {
      color: ${n("button.hover.color")};
    }
  
    &:focus,
    &:focus-visible {
      z-index: 1;
    }
  
    &:focus-visible {
      outline: 2px solid ${n("button.focus.boxShadow")};
    }
  
    &.active {
      background-color: ${n("button.active.background")};
      box-shadow: inset 0 0 0 1px ${n("button.active.border")};
    }
  }
  
  .kl6-segmented-control-expander {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    position: relative;
  }
  
  span {
    translate: none;
  }
`,we=t=>ue(t,{componentName:"segmentedControl",defaultValues:{size:"medium"}}),ze=be.div.withConfig({shouldForwardProp:t=>!["cssConfig"].includes(t)})`
  ${Te}
`,De={small:"medium",medium:"medium",large:"large"},ee=t=>{const s=we(t),r=De[t.size||"medium"];return e.createElement(te,{...s,badgeSize:r})},Ie=({className:t,text:s,counter:r,indicator:d,infoTooltip:c,iconBefore:p,disabled:_,onClick:o,badgeSize:E,...C})=>e.createElement("button",{className:M("kl6-segmented-control-button",t),onClick:o,...C},p,e.createElement("span",{className:"text"},s),c&&e.createElement(he,{text:c},e.createElement(ye,null)),r&&e.createElement(ke,{count:r.number,mode:r.mode,size:E}),d&&e.createElement(Ee,{mode:d})),te=({tabsData:t,contentData:s,className:r,cssConfig:d,badgeSize:c,defaultActiveTab:p,..._})=>{const o=p?t.find(a=>a.name===p):t[0],{testAttributes:E}=ge(_),[C,ne]=g.useState(o==null?void 0:o.name),[T,re]=g.useState(o==null?void 0:o.content),[oe,ae]=g.useState(o==null?void 0:o.properties),[w,Re]=g.useState([]),se=({name:a,content:i,properties:z})=>{ne(a),ae(z),T!==i&&re(i)},u=w==null?void 0:w.map(a=>({children:a.text}));return e.createElement("div",{className:"kl6-segmented-control"},e.createElement(ze,{className:M("kl6-segmented-control-bar",r),cssConfig:d,...E},t.map(({name:a,content:i,properties:z,onClick:D,...ie})=>{const le=me=>{se({name:a,content:i,properties:z}),D==null||D(me)};return e.createElement(Ie,{key:`tab_key_${a}`,badgeSize:c,role:"tab",className:M({active:C===a}),onClick:le,name:a,content:i,...ie})}),!!(u!=null&&u.length)&&e.createElement("div",{className:"kl6-segmented-control-expander"},e.createElement(ve,{overlay:u||[],disabled:!1,loading:!1,trigger:["click"],placement:"bottomRight"},e.createElement(fe,{icon:e.createElement(Ce,null)})))),e.createElement("div",null,T&&s[T](oe)))};ee.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{tabsData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  disabled?: boolean,
  className?: string,
  iconBefore?: ReactNode,
  infoTooltip?: string,
  counter?: SegmentedControlItemCounter,
  indicator?: IndicatorMode,
  onClick?: MouseEventHandler<HTMLElement>,
  text?: string,
  role?: string,
  name?: string,
  content?: string,
  properties?: SegmentedContentProperties
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"iconBefore",value:{name:"ReactNode",required:!1}},{key:"infoTooltip",value:{name:"string",required:!1}},{key:"counter",value:{name:"signature",type:"object",raw:`{
  number: number,
  mode?: SegmentedControlCounterMode
}`,signature:{properties:[{key:"number",value:{name:"number",required:!0}},{key:"mode",value:{name:"BadgeLargeMode",required:!1}}]},required:!1}},{key:"indicator",value:{name:"IndicatorMode",required:!1}},{key:"onClick",value:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"role",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"content",value:{name:"string",required:!1}},{key:"properties",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}}],raw:"SegmentedControlItemProps[]"},description:"Tabs Data"},contentData:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"signature",type:"function",raw:"(properties: SegmentedContentProperties | undefined) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"SegmentedContentProperties | undefined",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},{name:"undefined"}]},name:"properties"}],return:{name:"ReactNode"}}}],raw:"Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>"},description:"Content Data"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},defaultActiveTab:{required:!1,tsType:{name:"string"},description:"Initial segmented control item name"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},size:{required:!1,tsType:{name:"literal",value:"`${Exclude<Size, Size.ExtraSmall | Size.ExtraLarge>}`"},description:"Size"}}};te.__docgenInfo={description:"",methods:[],displayName:"SegmentedControlView",props:{badgeSize:{required:!1,tsType:{name:"BadgeSize"},description:""}}};const Me={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},_e="SegmentedControl",Be="Табы с возможностью прокидывать дополнительные проперти-модификаторы в контент",qe="Префильтры, модифицированное представление одной формы несколькими табами",$e="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=104692%3A554430",Ne="https://pixso.net/app/design/AdtmI5-HzUa5gS17g9eGag",He={dod:Me,component:_e,description:Be,usage:qe,designLink:$e,pixsoView:Ne},Pe=[I.Small,I.Medium,I.Large],l=[{name:"one",content:"default",properties:{state:"disabled",text:"im text from tab One properties"},text:"One"},{name:"two",content:"default",properties:{state:"disabled",text:"im text from tab Two properties"},text:"Two"},{name:"three",content:"another",properties:{text:"im text from tab Three properties"},text:"Three"},{name:"four",content:"another",properties:{state:"disabled",text:"im text from tab Four properties"},text:"Four"}],m={default:t=>{const{state:s,text:r}=t||{};return e.createElement($,{direction:"vertical",size:15,align:"flex-start",justify:"normal"},e.createElement(f,null),e.createElement(N,{disabled:s},"Some button"),r&&e.createElement(e.Fragment,null,e.createElement(f,null),e.createElement("div",null,r)))},another:t=>{const{state:s,text:r}=t||{};return e.createElement($,{direction:"vertical",size:15,align:"flex-start",justify:"normal"},e.createElement(f,null),e.createElement(N,{disabled:s},"Another button"),r&&e.createElement(e.Fragment,null,e.createElement(f,null),e.createElement("div",null,r)))}},ct={title:"Hexa UI Components/SegmentedControl",component:ee,argTypes:{size:{options:Pe,control:{type:"radio"}},...Se(["theme","componentType","componentId","dataTestId","klId","contentData"])},args:{size:"large",tabsData:l,contentData:m,defaultActiveTab:"two",testId:"segmented-control-test-id"},parameters:{badges:[B.stable,B.reviewedByDesign],docs:{page:xe(He)},design:!1}},b={},h={args:{size:"large",tabsData:l.map(t=>({...t,iconBefore:e.createElement(v,null)})),contentData:m,testId:"segmented-control-test-id"}},y={args:{size:"large",tabsData:l.map(t=>({...t,iconBefore:e.createElement(v,null),indicator:Math.floor(Math.random()*10)>5?"new":"critical"})),contentData:m,testId:"segmented-control-test-id"}},x={args:{size:"large",tabsData:l.map(t=>({...t,iconBefore:e.createElement(v,null),counter:{number:Math.floor(Math.random()*14),mode:Math.floor(Math.random()*10)>5?"critical_transparent":"neutral_transparent"}})),contentData:m,testId:"segmented-control-test-id"}},S={args:{size:"large",tabsData:l.map(t=>({...t,iconBefore:e.createElement(v,null),infoTooltip:"Lorem ipsum"})),contentData:m,testId:"segmented-control-test-id"}},k={args:{source:{segmented_control:q.segmented_control,segmented_control_item:q.segmented_control_item}},render:t=>e.createElement(de,{...t})};var H,P,R;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var L,F,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var j,A,V;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var O,U,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(U=x.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Y,G,K;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(G=S.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    source: {
      segmented_control: componentColors.segmented_control,
      segmented_control_item: componentColors.segmented_control_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(X=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};const pt=["Basic","Icons","WithIndicator","WithCounter","WithTooltip","ColorTokens"];export{b as Basic,k as ColorTokens,h as Icons,x as WithCounter,y as WithIndicator,S as WithTooltip,pt as __namedExportsOrder,ct as default};
