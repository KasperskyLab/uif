import{T as _}from"./Palette-Bcbt30O7.js";import{b as S,y as r,R as e,c as A,T as d,t as F,P as y}from"./iframe-DlY6n6Um.js";import{w as I}from"./withMeta-B77fl0Sa.js";import{S as Y,C as G}from"./ScrollableContainer-g797ok1S.js";import{S as a}from"./Warnings-DqWOugw8.js";import{s as J}from"./helpers-BytZKRkB.js";import{S as u}from"./StoryComponents-5Ni7_M0_.js";import{B as T}from"./Button-CgqUalcg.js";import{F as K}from"./Field-D0_vkgR2.js";import{S as Q}from"./SegmentedButton-BYa_mbPF.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D8ys_ap7.js";import"./Dropdown-WtVSJYv5.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./HelpMessage-CfUPOaMw.js";import"./Help-CdI7ei6S.js";const X={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},Z="Tooltip",j="Компонент для отрисовки подсказок. В качестве основы используется Tooltip из библиотеки Antd.",q="Элемент появляется при наведении на родительский элемент, к которому присвоен Tooltip",$="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=29814%3A96714",ee="https://pixso.net/app/design/4XYVGB274R5-e8c7lGsxDA",x={dod:X,component:Z,description:j,usage:q,designLink:$,pixsoView:ee},Oe={title:"Hexa UI Components/Tooltip",component:r,argTypes:{text:{control:{type:"text"}},...J(["theme"])},args:{text:"Lorem ipsum"},parameters:{badges:[S.stable,S.reviewedByDesign],docs:{page:I(x)},design:x.pixsoView}},s={render:t=>e.createElement(u,{style:{paddingLeft:"200px"}},e.createElement(d,{type:"BTM5",themedColor:"primary"},"Tooltip here:"),e.createElement(r,{...t},e.createElement(T,null,"hover me to see Tooltip")))},l={render:t=>e.createElement(u,{style:{paddingLeft:"200px"}},e.createElement(d,{type:"BTM5"},"Tooltip here:"),e.createElement(r,{...t,text:e.createElement(d,{type:"BTM3",themedColor:"primary-invert"},"I'm a Text component")},e.createElement(T,null,"hover me to see Tooltip")))},i={render:t=>e.createElement(u,null,e.createElement(F,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(y,null,"Use wrapper for ",e.createElement(a,null,"disabled")," components inside ",e.createElement(a,null,"Tooltip")," if it's not working"),e.createElement(y,null,"Используйте обёртку для ",e.createElement(a,null,"disabled")," компонентов внутри ",e.createElement(a,null,"Tooltip")," если тултип не отображается")),e.createElement(r,{...t},e.createElement("span",null,e.createElement(T,{disabled:!0,text:"Button"}))))},p={render:t=>e.createElement(Y,null,e.createElement(G,null,e.createElement(r,{...t,getPopupContainer:n=>n.parentElement}))),args:{children:e.createElement(T,null,"Click me and scroll my container"),trigger:"click"}},m={render:t=>{const[n,N]=e.useState(10),O=e.useMemo(()=>{const o=[];for(let g=0;g<=n;g++)o.push(g);return o},[n]),U=[{value:"10",text:"10"},{value:"100",text:"100"},{value:"1000",text:"1000"}];return e.createElement(u,null,e.createElement(K,{control:e.createElement(Q,{value:[n.toString()],type:"radio",items:U,onChange:o=>{N(Number(o[0]))}}),label:"Number of tooltips on page"}),O.map(o=>e.createElement(r,{...t,key:o,text:o,destroyTooltipOnHide:!0},e.createElement(d,null,o,": hover me to see Tooltip"))))}},c={args:{source:A.tooltip},render:t=>e.createElement(_,{...t})};var C,f,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn style={{
    paddingLeft: '200px'
  }}>
      <Text type="BTM5" themedColor="primary">
        Tooltip here:
      </Text>
      <Tooltip {...args}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var h,b,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn style={{
    paddingLeft: '200px'
  }}>
      <Text type="BTM5">
        Tooltip here:
      </Text>
      <Tooltip {...args} text={<Text type="BTM3" themedColor="primary-invert">I&apos;m a Text component</Text>}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var v,P,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn>
    <SectionMessage closable={false} mode="info" style={{
      marginBottom: 16
    }}>
      <P>Use wrapper for <StyledTag>disabled</StyledTag> components inside <StyledTag>Tooltip</StyledTag> if it&apos;s not working</P>
      <P>Используйте обёртку для <StyledTag>disabled</StyledTag> компонентов внутри <StyledTag>Tooltip</StyledTag> если тултип не отображается</P>
    </SectionMessage>
    <Tooltip {...args}>
      <span><Button disabled={true} text="Button" /></span>
    </Tooltip>
  </StoryColumn>
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var M,w,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <ScrollableContainer>
      <ContentContainer>
        <Tooltip {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>,
  args: {
    children: <Button>Click me and scroll my container</Button>,
    trigger: 'click'
  }
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var L,W,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: TooltipProps) => {
    const [performSize, setPerformSize] = React.useState(10);
    const tooltips = React.useMemo(() => {
      const arr: number[] = [];
      for (let i = 0; i <= performSize; i++) {
        arr.push(i);
      }
      return arr;
    }, [performSize]);
    const items: SegmentedButtonOption[] = [{
      value: '10',
      text: '10'
    }, {
      value: '100',
      text: '100'
    }, {
      value: '1000',
      text: '1000'
    }];
    return <StoryColumn>
        <Field control={<SegmentedButton value={[performSize.toString()]} type="radio" items={items} onChange={value => {
        setPerformSize(Number(value[0]));
      }} />} label="Number of tooltips on page" />
        {tooltips.map(t => <Tooltip {...args} key={t} text={t} destroyTooltipOnHide>
            <Text>{t}: hover me to see Tooltip</Text>
          </Tooltip>)}
      </StoryColumn>;
  }
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var H,R,V;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    source: componentColors.tooltip
  },
  render: args => <ThemedPalette {...args} />
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const Ue=["Basic","WithTextComponent","WithDisabledComponent","WithinScrollableContainer","PerformanceExample","ColorTokens"];export{s as Basic,c as ColorTokens,m as PerformanceExample,i as WithDisabledComponent,l as WithTextComponent,p as WithinScrollableContainer,Ue as __namedExportsOrder,Oe as default};
