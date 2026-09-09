import{T as q}from"./Palette-DXL8UiT3.js";import{S as U,r as j}from"./StoryComponents--bOGC0xv.js";import{c as A,L as t,R as o}from"./iframe-DedYZBTA.js";import{l as F,a as i,B as G}from"./Link.stories-DUo6GQvT.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./ArrowRight-DWYHjndK.js";import"./Placeholder-DXWNW80D.js";import"./SettingsGear-Cl0aLKMC.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const J=["medium","large","noSize"],ke={title:"Hexa UI Components/Link/Stories",component:t,tags:["!autodocs"],render:G.bind({}),...F},a={args:{href:"#",target:"_top"}},s={args:{href:"https://www.kaspersky.com",target:"_blank",decoration:"icon",isTooltipVisible:!0}},c={render:({decoration:e,icon:r,...n})=>j([{label:"isTooltipVisible: true",content:o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0,isTooltipVisible:!0})},{label:"isTooltipVisible: false",content:o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0,isTooltipVisible:!1})}]),argTypes:{isTooltipVisible:{control:!1}},args:{href:"https://www.kaspersky.com",target:"_blank",decoration:"icon",text:"External link"},name:"Is Tooltip Visible"},l={render:({decoration:e,icon:r,...n})=>o.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0})," when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")},p={render:({decoration:e,icon:r,...n})=>j(J.map(g=>({label:g,content:o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0,size:g})}))),argTypes:{size:{control:!1}},args:{href:"#"}},m={render:({decoration:e,icon:r,...n})=>o.createElement(U,null,o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0}),o.createElement(t,{...n,decoration:"icon"})),args:{disabled:!0,href:"#"}},d={render:({decoration:e,icon:r,...n})=>o.createElement(U,null,o.createElement(t,{...n,decoration:e,icon:e==="icon"?i[r]:void 0}),o.createElement(t,{...n,decoration:"icon"})),args:{visited:!0,href:"#"}},u={args:{source:A.link},render:e=>o.createElement(q,{...e})};var k,b,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: '#',
    target: '_top'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,h,V;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    href: 'https://www.kaspersky.com',
    target: '_blank',
    decoration: 'icon',
    isTooltipVisible: true
  }
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var T,C,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    decoration,
    icon,
    ...args
  }) => renderVariants([{
    label: 'isTooltipVisible: true',
    content: <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} isTooltipVisible />
  }, {
    label: 'isTooltipVisible: false',
    content: <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} isTooltipVisible={false} />
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
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,v,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    decoration,
    icon,
    ...args
  }) => <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s,  <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} /> when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var L,E,x;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    decoration,
    icon,
    ...args
  }) => renderVariants(linkSizes.map(size => ({
    label: size,
    content: <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    href: '#'
  }
}`,...(x=(E=p.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var z,_,B;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    decoration,
    icon,
    ...args
  }) => <StoryComponentContainer>
      <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>,
  args: {
    disabled: true,
    href: '#'
  }
}`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var D,P,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ({
    decoration,
    icon,
    ...args
  }) => <StoryComponentContainer>
      <LinkComponent {...args} decoration={decoration} icon={decoration === 'icon' ? linkIconVariants[icon] : undefined} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>,
  args: {
    visited: true,
    href: '#'
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,H,O;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    source: componentColors.link
  },
  render: args => <ThemedPalette {...args} />
}`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const be=["Basic","WithIcon","IsTooltipVisible","InText","Size","Disabled","Visited","ColorTokens"];export{a as Basic,u as ColorTokens,m as Disabled,l as InText,c as IsTooltipVisible,p as Size,d as Visited,s as WithIcon,be as __namedExportsOrder,ke as default};
