import{R as e,b as g,t as A,P as u,S as O,y as F}from"./iframe-DlY6n6Um.js";import{w as H}from"./withDesignControls-DgiSFIU-.js";import{w as I}from"./withMeta-B77fl0Sa.js";import{S as s,a as Q}from"./Warnings-DqWOugw8.js";import{r as _}from"./StoryComponents-5Ni7_M0_.js";import{B as r,b as c,a as J,c as R}from"./Badge-B6JIvdem.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D8ys_ap7.js";const U={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},Y="Badge",Z="В качестве основы используется AntdBadge из библиотеки Antd.",K="Компонент Badge предназначен для компактного отображения дополнительной информации, выступая либо в роли счетчика (показывает количество элементов, например, уведомлений), либо текстовой метки.",L="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=1133%3A10682",N="https://pixso.net/app/design/xOC0ZQE58dADD12vHlvF_Q",T={dod:U,component:Y,description:Z,usage:K,designLink:L,pixsoView:N},$={argTypes:{mode:{control:"select",options:c},size:{control:!1,defaultValue:"medium"}},args:{overflowCount:99,count:1,size:"medium",mode:"neutral",text:"",testId:"badge-test-id",klId:"badge-kl-id"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:I(T)},controls:{exclude:/(title|tooltip)/},design:T.pixsoView}},xe={title:"Hexa UI Components/Badge",component:r,...H({componentName:"badge",meta:$})},n={},i={render:t=>_(c.map(a=>({label:a,content:e.createElement(r,{...t,size:"medium",mode:a})})),!0,"medium"),argTypes:{mode:{control:!1},size:{control:!1}}},l={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(A,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(u,null,"The large size is only available for the following two modes: ",e.createElement(s,null,"neutralTransparent"),", ",e.createElement(s,null,"criticalTransparent"),". For all other modes, use medium."),e.createElement(u,null,"Размер large доступен только для двух модов: ",e.createElement(s,null,"neutralTransparent"),", ",e.createElement(s,null,"criticalTransparent"),". Для всех остальных модов используйте medium.")),_(J.map(a=>({label:a,content:e.createElement(O,{gap:16},a==="medium"?c.map(o=>e.createElement(r,{...t,key:o,text:t.text||o,size:"medium",mode:o})):R.map(o=>e.createElement(r,{...t,key:o,text:t.text||o,size:"large",mode:o})))})),!0)),argTypes:{mode:{control:!1},size:{control:!1}}},m={args:{text:"Badge text"}},d={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(Q,null),e.createElement(F,{text:t.tooltip},e.createElement("span",null,e.createElement(r,{...t})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:/(title)/}}},p={args:{count:10,overflowCount:9}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,b,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: BadgeProps) => renderVariants(badgeModes.map(mode => ({
    label: mode,
    content: <BadgeComponent {...args} size="medium" mode={mode} />
  })), true, 'medium'),
  argTypes: {
    mode: {
      control: false
    },
    size: {
      control: false
    }
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,z,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: BadgeProps) => <div style={{
    width: '100%'
  }}>
    <SectionMessage closable={false} mode="info" style={{
      marginBottom: 16
    }}>
      <P>The large size is only available for the following two modes: <StyledTag>neutralTransparent</StyledTag>, <StyledTag>criticalTransparent</StyledTag>. For all other modes, use medium.</P>
      <P>Размер large доступен только для двух модов: <StyledTag>neutralTransparent</StyledTag>, <StyledTag>criticalTransparent</StyledTag>. Для всех остальных модов используйте medium.</P>
    </SectionMessage>
    {renderVariants(badgeSizes.map(size => ({
      label: size,
      content: <Space gap={16}>
            {size === 'medium' ? badgeModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="medium" mode={mode} />) : badgeTransparentModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="large" mode={mode} />)}
          </Space>
    })), true)}
  </div>,
  argTypes: {
    mode: {
      control: false
    },
    size: {
      control: false
    }
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var E,v,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Badge text'
  }
}`,...(C=(v=m.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var M,k,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: BadgeStoryProps) => <div style={{
    width: '100%'
  }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span><BadgeComponent {...args} /></span>
      </Tooltip>
    </div>,
  argTypes: {
    tooltip: {
      control: 'text'
    }
  },
  args: {
    tooltip: 'Tooltip'
  },
  parameters: {
    controls: {
      exclude: /(title)/
    }
  }
}`,...(W=(k=d.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var P,V,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    count: 10,
    overflowCount: 9
  }
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const Se=["Badge","Mode","Size","WithText","WithTooltip","WithOverflow"];export{n as Badge,i as Mode,l as Size,p as WithOverflow,m as WithText,d as WithTooltip,Se as __namedExportsOrder,xe as default};
