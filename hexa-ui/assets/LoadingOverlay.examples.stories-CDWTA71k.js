import{R as e,P as c}from"./iframe-4-PRSI1I.js";import{L as a}from"./LoadingOverlay-1nCL500O.js";import{l as g}from"./LoadingOverlay.stories-BUEshJf2.js";import"./preload-helper-Dp1pzeXC.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./resolveDesignControls-CL29RUJI.js";function y({children:n}){return e.createElement("div",{style:{border:"1px solid grey",height:300,padding:20,position:"relative",width:500}},n)}const S={title:"Hexa UI Components/LoadingOverlay/Stories",component:a,tags:["!autodocs"],...g},r={render:n=>e.createElement(y,null,e.createElement(a,{...n}),e.createElement(c,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),name:"Loading Overlay"},t={render:n=>e.createElement("div",{style:{display:"flex",gap:24}},["medium","large"].map(o=>e.createElement(y,{key:o},e.createElement(a,{...n,size:o})))),argTypes:{size:{control:!1}}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <OverlayContainer>
      <LoadingOverlayComponent {...args} />
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </P>
    </OverlayContainer>,
  name: 'Loading Overlay'
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const w=["Basic","Size"];export{r as Basic,t as Size,w as __namedExportsOrder,S as default};
