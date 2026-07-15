import{T as v}from"./Palette-CL2qD4Vl.js";import{w as $}from"./withDesignControls-DTwO-e1q.js";import{B as S}from"./Button-D2E54Ulj.js";import{c as P,J as l,R as e,r as _,H as u}from"./iframe-4-PRSI1I.js";import{c as i,w as d}from"./common-CX3Ap7n_.js";import{S as n}from"./Scrollbar-DKQRie9d.js";import{s as D}from"./Scrollbar.stories-BJDyb34a.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./preload-helper-Dp1pzeXC.js";import"./useThemedScrollbar-Cg6KmBOg.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";const We={title:"Hexa UI Components/Scrollbar/Stories",component:n,tags:["!autodocs"],...$({meta:D})},z=u.div`
  ${d}
`,I=u.div`
  p { width: 800px; }
  ${d}
`,J=u.div`
  p { width: 600px; }
  ${d}
`,m={render:r=>{const t=l();return e.createElement(z,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},a={render:r=>{const t=l();return e.createElement(I,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},s={render:r=>{const t=l();return e.createElement(J,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},p={render:r=>{const t=l(),h=_.useRef(null);return e.createElement(z,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key,ref:h},e.createElement(S,{onClick:()=>{var o;return(o=h.current)==null?void 0:o.scrollToBottom()}},"Scroll to bottom"),e.createElement("p",null,i),e.createElement(S,{onClick:()=>{var o;return(o=h.current)==null?void 0:o.scrollToTop()}},"Scroll to top")))}},c={args:{source:P.scrollbar},render:r=>e.createElement(v,{...r})};var k,g,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </VerticalWrapper>;
  }
}`,...(C=(g=m.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,y,E;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <HorizontalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </HorizontalWrapper>;
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var b,T,W;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <Wrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </Wrapper>;
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var B,H,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    const ref = useRef<Scrollbars | null>(null);
    return <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key} ref={ref}>
          <Button onClick={() => ref.current?.scrollToBottom()}>Scroll to bottom</Button>
          <p>{content}</p>
          <Button onClick={() => ref.current?.scrollToTop()}>Scroll to top</Button>
        </ScrollbarComponent>
      </VerticalWrapper>;
  }
}`,...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var w,x,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    source: componentColors.scrollbar
  },
  render: args => <ThemedPalette {...args} />
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const Be=["Vertical","Horizontal","Both","WithRef","ColorTokens"];export{s as Both,c as ColorTokens,a as Horizontal,m as Vertical,p as WithRef,Be as __namedExportsOrder,We as default};
