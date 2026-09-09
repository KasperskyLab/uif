import{R as e,P as c}from"./iframe-DedYZBTA.js";import{L as a}from"./LoadingOverlay-CUsm39zK.js";import{l as g}from"./LoadingOverlay.stories-DkN-wi3N.js";import"./preload-helper-Dp1pzeXC.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";function y({children:r}){return e.createElement("div",{style:{border:"1px solid grey",height:300,padding:20,position:"relative",width:500}},r)}const w={title:"Hexa UI Components/LoadingOverlay/Stories",component:a,tags:["!autodocs"],...g},n={render:r=>e.createElement(y,null,e.createElement(a,{...r}),e.createElement(c,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),name:"Loading Overlay"},t={render:r=>e.createElement("div",{style:{display:"flex",gap:24}},["medium","large"].map(o=>e.createElement(y,{key:o},e.createElement(a,{...r,size:o})))),argTypes:{size:{control:!1}}};var s,i,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <OverlayContainer>
      <LoadingOverlayComponent {...args} />
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </P>
    </OverlayContainer>,
  name: 'Loading Overlay'
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {(['medium', 'large'] as const).map(size => <OverlayContainer key={size}>
          <LoadingOverlayComponent {...args} size={size} />
        </OverlayContainer>)}
    </div>,
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const I=["Basic","Size"];export{n as Basic,t as Size,I as __namedExportsOrder,w as default};
