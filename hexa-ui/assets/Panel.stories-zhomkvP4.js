import{w as B}from"./withDesignControls-DTwO-e1q.js";import{T as U}from"./Tag-B3SARhhR.js";import{R as e,T as b}from"./iframe-4-PRSI1I.js";import{P as a,O as l,m as t,a as w,s as F}from"./PanelStoryLayout-DAaxM2oh.js";import{P as r}from"./Panel-BXurV7EJ.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";import"./withMeta-BwOuJ6tr.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";const M=["small","medium","large"],ie={component:r,title:"Hexa UI Components/Panel",...B({meta:F})},s={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),argTypes:{resizeHandle:{control:!1}}},i={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{sectionBottom:e.createElement(b,null,"Section bottom ReactNode")},argTypes:{resizeHandle:{control:!1}}},c={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{elementAfter:e.createElement(U,null,"Tag after")},argTypes:{resizeHandle:{control:!1}}},m={render:n=>e.createElement(a,null,e.createElement(l,null),M.map(o=>e.createElement(r,{...n,key:o,title:o.charAt(0).toUpperCase()+o.slice(1),titleSize:o},t))),args:{initialSize:150},argTypes:{title:{control:!1},titleSize:{control:!1},resizeHandle:{control:!1}}},p={render:n=>e.createElement(a,null,e.createElement(r,{...n,resizeHandle:"right",title:"Left Panel"},t),e.createElement(w,null,e.createElement(l,null),e.createElement(r,{...n,resizeHandle:"top",title:"Footer Panel",initialSize:150},t)),e.createElement(r,{...n,title:"Right Panel"},t)),argTypes:{resizeHandle:{control:!1},initialSize:{control:!1},title:{control:!1}},args:{}},d={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n,padding:"medium"},t)),argTypes:{resizeHandle:{control:!1},padding:{control:!1}}};var u,g,P;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(P=(g=s.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var f,T,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  args: {
    sectionBottom: <Text>Section bottom ReactNode</Text>
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var y,E,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  args: {
    elementAfter: <Tag>Tag after</Tag>
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var h,H,A;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        {panelTitleSize.map(size => <Panel {...args} key={size} title={size.charAt(0).toUpperCase() + size.slice(1)} titleSize={size}>
            {mockText}
          </Panel>)}
      </PanelsLayout>;
  },
  args: {
    initialSize: 150
  },
  argTypes: {
    title: {
      control: false
    },
    titleSize: {
      control: false
    },
    resizeHandle: {
      control: false
    }
  }
}`,...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var x,L,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <Panel {...args} resizeHandle="right" title="Left Panel">
          {mockText}
        </Panel>
        <PanelsCol>
          <OtherArea></OtherArea>
          <Panel {...args} resizeHandle="top" title="Footer Panel" initialSize={150}>
            {mockText}
          </Panel>
        </PanelsCol>
        <Panel {...args} title="Right Panel">
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  argTypes: {
    resizeHandle: {
      control: false
    },
    initialSize: {
      control: false
    },
    title: {
      control: false
    }
  },
  args: {}
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var k,C,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <PanelsLayout>
      <OtherArea />
      <Panel {...args} padding="medium">
        {mockText}
      </Panel>
    </PanelsLayout>,
  argTypes: {
    resizeHandle: {
      control: false
    },
    padding: {
      control: false
    }
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const ce=["SinglePanel","SectionBottom","ElementAfterTitle","Headers","Variations","MediumPadding"];export{c as ElementAfterTitle,m as Headers,d as MediumPadding,i as SectionBottom,s as SinglePanel,p as Variations,ce as __namedExportsOrder,ie as default};
