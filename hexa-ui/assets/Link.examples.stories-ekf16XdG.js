import{T as O}from"./Palette-CL2qD4Vl.js";import{S as W,r as H}from"./StoryComponents-BWv8uEx9.js";import{c as U,L as t,R as r}from"./iframe-4-PRSI1I.js";import{l as j}from"./Link.stories-Cgv-ZQBf.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./ArrowRight-AkM1Q671.js";import"./Placeholder-DoG1ulbQ.js";import"./SettingsGear-Cqb3tsn_.js";import"./resolveDesignControls-CL29RUJI.js";const q=["medium","large","noSize"],de={title:"Hexa UI Components/Link/Stories",component:t,tags:["!autodocs"],...j},n={args:{href:"#",target:"_top"}},o={args:{href:"https://www.kaspersky.com",target:"_blank",decoration:"icon",isTooltipVisible:!0}},s={render:e=>H([{label:"isTooltipVisible: true",content:r.createElement(t,{...e,isTooltipVisible:!0})},{label:"isTooltipVisible: false",content:r.createElement(t,{...e,isTooltipVisible:!1})}]),argTypes:{isTooltipVisible:{control:!1}},args:{href:"https://www.kaspersky.com",target:"_blank",decoration:"icon",text:"External link"},name:"Is Tooltip Visible"},a={render:e=>r.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",r.createElement(t,{...e})," when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")},i={render:e=>H(q.map(c=>({label:c,content:r.createElement(t,{...e,size:c})}))),argTypes:{size:{control:!1}},args:{href:"#"}},p={render:e=>r.createElement(W,null,r.createElement(t,{...e}),r.createElement(t,{...e,decoration:"icon"})),args:{disabled:!0,href:"#"}},l={render:e=>r.createElement(W,null,r.createElement(t,{...e}),r.createElement(t,{...e,decoration:"icon"})),args:{visited:!0,href:"#"}},m={args:{source:U.link},render:e=>r.createElement(O,{...e})};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    target: '_top'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,b,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: 'https://www.kaspersky.com',
    target: '_blank',
    decoration: 'icon',
    isTooltipVisible: true
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,f,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'isTooltipVisible: true',
    content: <LinkComponent {...args} isTooltipVisible />
  }, {
    label: 'isTooltipVisible: false',
    content: <LinkComponent {...args} isTooltipVisible={false} />
  }], true),
  argTypes: {
    isTooltipVisible: {
      control: false
    }
  },
  args: {
    href: 'https://www.kaspersky.com',
    target: '_blank',
    decoration: 'icon',
    text: 'External link'
  },
  name: 'Is Tooltip Visible'
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var C,S,V;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: LinkProps) => <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, <LinkComponent {...args} /> when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
}`,...(V=(S=a.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var L,w,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => renderVariants(linkSizes.map(size => ({
    label: size,
    content: <LinkComponent {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    href: '#'
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,v,x;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: LinkProps) => <StoryComponentContainer>
      <LinkComponent {...args} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>,
  args: {
    disabled: true,
    href: '#'
  }
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var z,_,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: LinkProps) => <StoryComponentContainer>
      <LinkComponent {...args} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>,
  args: {
    visited: true,
    href: '#'
  }
}`,...(P=(_=l.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var B,D,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    source: componentColors.link
  },
  render: args => <ThemedPalette {...args} />
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ue=["Basic","WithIcon","IsTooltipVisible","InText","Size","Disabled","Visited","ColorTokens"];export{n as Basic,m as ColorTokens,p as Disabled,a as InText,s as IsTooltipVisible,i as Size,l as Visited,o as WithIcon,ue as __namedExportsOrder,de as default};
