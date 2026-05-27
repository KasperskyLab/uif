import{T as D}from"./Palette-DypzKIWI.js";import{b,R as e,c as _,z as p,r as I,H as u}from"./iframe-DijVn6lr.js";import{w as O}from"./withMeta-Cvuu-gnO.js";import{s as U}from"./helpers-BytZKRkB.js";import{B as T}from"./Button-PwdEuxbx.js";import{M as S,c as i,w as d}from"./common-CvU9GAv6.js";import{S as n}from"./Scrollbar-DBzSLmvt.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./Dropdown-D0EIrFH4.js";import"./KeyCode-Dc0kQrxh.js";import"./Overflow-DkuW95mG.js";import"./focus-C71cxy8r.js";import"./type-DN7uEUoT.js";import"./Loader-D2XHvBNY.js";import"./index-Coa4z_GS.js";import"./Divider-D-bCk8Cb.js";import"./ArrowRight-DFM_iKWt.js";import"./v4-BoP187Zn.js";import"./button-ncLxIWef.js";import"./wave-B_Kd_ldv.js";import"./index-Chjiymov.js";import"./useThemedScrollbar-Doe2eWQl.js";const ue={title:"Hexa UI Components/Scrollbar/Component",component:n,argTypes:{autoHide:{description:"Will the scrollbars be hidden when the element is not active"},...U(["theme"])},args:{autoHide:!1},parameters:{badges:[b.stable,b.reviewedByDesign],docs:{page:O(S)},design:S.pixsoView}},v=u.div`
  ${d}
`,j=u.div`
  p { width: 800px; }
  ${d}
`,q=u.div`
  p { width: 600px; }
  ${d}
`,a={render:t=>{const r=p();return e.createElement(v,{theme:r.key},e.createElement(n,{...t,theme:r.key},e.createElement("p",null,i)))}},s={render:t=>{const r=p();return e.createElement(j,{theme:r.key},e.createElement(n,{...t,theme:r.key},e.createElement("p",null,i)))}},c={render:t=>{const r=p();return e.createElement(q,{theme:r.key},e.createElement(n,{...t,theme:r.key},e.createElement("p",null,i)))}},l={render:t=>{const r=p(),h=I.useRef(null),M=()=>{var o;(o=h.current)==null||o.scrollToBottom()},$=()=>{var o;(o=h.current)==null||o.scrollToTop()};return e.createElement(v,{theme:r.key},e.createElement(n,{...t,theme:r.key,ref:h},e.createElement(T,{onClick:M},"Scroll to bottom"),e.createElement("p",null,i),e.createElement(T,{onClick:$},"Scroll to top")))}},m={args:{source:_.scrollbar},render:t=>e.createElement(D,{...t})};var g,k,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: ScrollbarProps) => {
    const theme = useTheme();
    return <VerticalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </VerticalWrapper>;
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,E,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: ScrollbarProps) => {
    const theme = useTheme();
    return <HorizontalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </HorizontalWrapper>;
  }
}`,...(B=(E=s.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var W,C,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: ScrollbarProps) => {
    const theme = useTheme();
    return <Wrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </Wrapper>;
  }
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var w,V,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: ScrollbarProps) => {
    const theme = useTheme();
    const ref = useRef<Scrollbars | null>(null);
    const scrollToBottom = () => {
      ref.current?.scrollToBottom();
    };
    const scrollToTop = () => {
      ref.current?.scrollToTop();
    };
    return <VerticalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key} ref={ref}>
          <Button onClick={scrollToBottom}>Scroll to bottom</Button>
          <p>{content}</p>
          <Button onClick={scrollToTop}>Scroll to top</Button>
        </Scrollbar>
      </VerticalWrapper>;
  }
}`,...(x=(V=l.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var z,P,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: componentColors.scrollbar
  },
  render: args => <ThemedPalette {...args} />
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const de=["Vertical","Horizontal","Both","WithRef","ColorTokens"];export{c as Both,m as ColorTokens,s as Horizontal,a as Vertical,l as WithRef,de as __namedExportsOrder,ue as default};
