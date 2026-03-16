import{w as B}from"./withDesignControls-DgiSFIU-.js";import{T as N}from"./Tag-Cd3srqW9.js";import{R as e,T as U}from"./iframe-DlY6n6Um.js";import{s as b,P as t,O as l,m as a,a as w}from"./PanelStoryLayout-Ck0s7iN7.js";import{P as r}from"./Panel-CH-6-lgr.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./preload-helper-C1FmrZbK.js";import"./withMeta-B77fl0Sa.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";const F=["small","medium","large"],$={component:r,title:"Hexa UI Components/Panel",...B({componentName:"panel",meta:b})},s={render:n=>e.createElement(t,null,e.createElement(l,null),e.createElement(r,{...n},a)),argTypes:{resizeHandle:{control:!1}}},i={render:n=>e.createElement(t,null,e.createElement(l,null),e.createElement(r,{...n},a)),args:{sectionBottom:e.createElement(U,null,"Section bottom ReactNode")},argTypes:{resizeHandle:{control:!1}}},c={render:n=>e.createElement(t,null,e.createElement(l,null),e.createElement(r,{...n},a)),args:{elementAfter:e.createElement(N,null,"Tag after")},argTypes:{resizeHandle:{control:!1}}},m={render:n=>e.createElement(t,null,e.createElement(l,null),F.map(o=>e.createElement(r,{...n,key:o,title:o.charAt(0).toUpperCase()+o.slice(1),titleSize:o},a))),args:{initialSize:150},argTypes:{title:{control:!1},titleSize:{control:!1},resizeHandle:{control:!1}}},p={render:n=>e.createElement(t,null,e.createElement(r,{...n,resizeHandle:"right",title:"Left Panel"},a),e.createElement(w,null,e.createElement(l,null),e.createElement(r,{...n,resizeHandle:"top",title:"Footer Panel",initialSize:150},a)),e.createElement(r,{...n,title:"Right Panel"},a)),argTypes:{resizeHandle:{control:!1},initialSize:{control:!1},title:{control:!1}},args:{}},d={render:n=>e.createElement(t,null,e.createElement(l,null),e.createElement(r,{...n,padding:"medium"},a)),argTypes:{resizeHandle:{control:!1},padding:{control:!1}}};var u,g,P;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const ee=["SinglePanel","SectionBottom","ElementAfterTitle","Headers","Variations","MediumPadding"];export{c as ElementAfterTitle,m as Headers,d as MediumPadding,i as SectionBottom,s as SinglePanel,p as Variations,ee as __namedExportsOrder,$ as default};
