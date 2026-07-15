import{w as P}from"./withDesignControls-DTwO-e1q.js";import{S as s,T as W}from"./Warnings-i-859-qY.js";import{r as C}from"./StoryComponents-BWv8uEx9.js";import{R as e,a as k,P as d,S as O,v as V}from"./iframe-4-PRSI1I.js";import{B as a,b as M,a as F,c as R}from"./Badge-B3_Y1H2J.js";import{b as _}from"./Badge.stories-Co6P6R-_.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./withMeta-BwOuJ6tr.js";import"./DocPageLayout-CZPyVaN8.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./resolveDesignControls-CL29RUJI.js";const ce={title:"Hexa UI Components/Badge/Stories",component:a,tags:["!autodocs"],...P({meta:_})},n={render:t=>C(M.map(o=>({label:o,content:e.createElement(a,{...t,size:"medium",mode:o})})),!0,"medium"),argTypes:{mode:{control:!1},size:{control:!1}}},l={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(k,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(d,null,"The large size is only available for the following two modes: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". For all other modes, use medium."),e.createElement(d,null,"Размер large доступен только для двух модов: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". Для всех остальных модов используйте medium.")),C(F.map(o=>({label:o,content:e.createElement(O,{gap:16},o==="medium"?M.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"medium",mode:r})):R.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"large",mode:r})))})))),argTypes:{mode:{control:!1},size:{control:!1}}},m={args:{text:"Badge text"}},i={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(W,null),e.createElement(V,{text:t.tooltip},e.createElement("span",null,e.createElement(a,{...t})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:/(title)/}}},p={args:{count:10,overflowCount:9}};var c,g,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,S,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: BadgeProps) => <div style={{
    width: '100%'
  }}>
      <SectionMessage closable={false} mode="info" style={{
      marginBottom: 16
    }}>
        <P>
          The large size is only available for the following two modes: <StyledTag>neutralTransparent</StyledTag>,
          <StyledTag>criticalTransparent</StyledTag>. For all other modes, use medium.
        </P>
        <P>
          Размер large доступен только для двух модов: <StyledTag>neutralTransparent</StyledTag>,
          <StyledTag>criticalTransparent</StyledTag>. Для всех остальных модов используйте medium.
        </P>
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,x,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Badge text'
  }
}`,...(b=(x=m.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var z,E,h;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(h=(E=i.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var w,B,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    count: 10,
    overflowCount: 9
  }
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const ge=["Mode","Size","WithText","WithTooltip","WithOverflow"];export{n as Mode,l as Size,p as WithOverflow,m as WithText,i as WithTooltip,ge as __namedExportsOrder,ce as default};
