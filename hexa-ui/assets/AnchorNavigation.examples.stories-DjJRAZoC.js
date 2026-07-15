import{B as A}from"./Button-D2E54Ulj.js";import{S as v}from"./Sidebar-C9UThsQ5.js";import{R as t,P as d,r as b}from"./iframe-4-PRSI1I.js";import{A as i}from"./DocPageLayout-CZPyVaN8.js";import{a as m,b as f,d as u,r as h}from"./AnchorNavigation.stories-DcdTUBjI.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./PortalWrapper-JelOD9qP.js";import"./Portal-2eAsMGG9.js";import"./useForceUpdate-CA8tDWq_.js";import"./TextWithTruncation-BuGmQSH-.js";import"./preload-helper-Dp1pzeXC.js";import"./blocks-yA_hxWl_.js";import"./SubComponents-EaKLKwRG.js";import"./Badge-B3_Y1H2J.js";import"./Indicator-D1HJCmfp.js";import"./propPresentation-CfZ5yVim.js";import"./withMeta-BwOuJ6tr.js";import"./Grid-CDQgOgKy.js";const gt={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:f.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(v,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => <>
      <P style={{
      marginBottom: '1em'
    }}>{dummyText}</P>

      <AnchorNavigation {...args}>
        {renderAnchorContent(args.items)}
      </AnchorNavigation>
    </>,
  args: {
    items: anchorItems
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => {
    const [isOpen, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Sidebar title="Sidebar" visible={isOpen} onClose={() => setOpen(false)}>
          <P style={{
          marginBottom: '1em'
        }}>{dummyText}</P>

          <AnchorNavigation {...args}>
            {renderAnchorContent(args.items)}
          </AnchorNavigation>
        </Sidebar>
      </>;
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const dt=["WithManyItems","WithSidebar"];export{r as WithManyItems,o as WithSidebar,dt as __namedExportsOrder,gt as default};
