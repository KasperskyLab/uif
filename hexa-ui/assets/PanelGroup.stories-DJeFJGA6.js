import{w as P}from"./withDesignControls-DgiSFIU-.js";import{R as e}from"./iframe-DlY6n6Um.js";import{s as d,P as u,m as r,O as z,a as b}from"./PanelStoryLayout-Ck0s7iN7.js";import{P as a}from"./Panel-CH-6-lgr.js";import"./preload-helper-C1FmrZbK.js";import"./withMeta-B77fl0Sa.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";const L={component:a,title:"Hexa UI Components/Panel/PanelGroup",...P({componentName:"panel",meta:d}),tags:["!autodocs"],argTypes:{resizeHandle:{control:!1},padding:{control:!1}},args:{closable:!1,title:"",resizeHandle:"right",parentLayout:!0,initialSize:350}},t={render:s=>e.createElement(u,null,e.createElement(a,{...s,resizable:!0},e.createElement(a,{resizeHandle:"bottom",title:"Top",closable:!1,resizable:!0,initialSize:250},r),e.createElement(a,{closable:!1,title:"Bottom",resizable:!1},r)),e.createElement(z,null))},l={render:s=>e.createElement(u,null,e.createElement(b,null,e.createElement(z,null),e.createElement(a,{...s,resizable:!0},e.createElement(a,{resizeHandle:"right",title:"Left",closable:!1,resizable:!0,initialSize:450},r),e.createElement(a,{closable:!1,title:"Right",resizable:!1},r)))),args:{resizeHandle:"top",initialSize:250}};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <PanelsLayout>
      <Panel {...args} resizable={true}>
        <Panel resizeHandle="bottom" title="Top" closable={false} resizable={true} initialSize={250}>{mockText}</Panel>
        <Panel closable={false} title="Bottom" resizable={false}>{mockText}</Panel>
      </Panel>
      <OtherArea />
    </PanelsLayout>
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <PanelsLayout>
      <PanelsCol>
        <OtherArea></OtherArea>
        <Panel {...args} resizable={true}>
          <Panel resizeHandle="right" title="Left" closable={false} resizable={true} initialSize={450}>{mockText}</Panel>
          <Panel closable={false} title="Right" resizable={false}>{mockText}</Panel>
        </Panel>
      </PanelsCol>
    </PanelsLayout>,
  args: {
    resizeHandle: 'top',
    initialSize: 250
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["PanelGroupVertical","PanelGroupHorizontal"];export{l as PanelGroupHorizontal,t as PanelGroupVertical,T as __namedExportsOrder,L as default};
