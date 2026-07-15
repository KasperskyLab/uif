import{T as ne}from"./Palette-CL2qD4Vl.js";import{c as D,R as e,T as S,r as Z,I as oe,H as re,S as ie}from"./iframe-4-PRSI1I.js";import{S as ae,C as se}from"./ScrollableContainer-BA6BbvEe.js";import{a as ee}from"./StoryComponents-BWv8uEx9.js";import{B as b}from"./Badge-B3_Y1H2J.js";import{B as r}from"./Button-D2E54Ulj.js";import{I as me}from"./Indicator-D1HJCmfp.js";import{S as ce}from"./SegmentedButton-CErJIP_5.js";import{o as le}from"./Menu3-BM3aMNYq.js";import{o as a}from"./Placeholder-DoG1ulbQ.js";import{o as de}from"./Plus-BlzhXYUb.js";import{D as t}from"./Dropdown-BZXGqesC.js";import{d as i,a as pe,b as ue}from"./Dropdown.stories-DPGARuK8.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./button-DY_DOuYn.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./propPresentation-CfZ5yVim.js";import"./blocks-yA_hxWl_.js";import"./withMeta-BwOuJ6tr.js";import"./DocPageLayout-CZPyVaN8.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Grid-CDQgOgKy.js";import"./Checkbox-C_Wci0Rq.js";import"./useId-B0iEqS7b.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";const ge=re.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`,ye=[{text:"custom item",value:"custom"},{text:"action item",value:"action"},{text:"submenu item",value:"submenu"}],f={testId:"sticky-item",sticky:!0},v={custom:{...f,children:"Custom sticky element"},action:{...f,type:"action",children:e.createElement(ie,{key:"action-sticky-space",gap:"dependent"},e.createElement(de,null)," Action sticky element")},submenu:{...f,type:"submenu",title:"Submenu sticky element",children:[{children:"Submenu item"}]}},yt={title:"Hexa UI Components/Dropdown/Stories",component:t,tags:["!autodocs"],...pe},s={render:o=>e.createElement(ee,null,e.createElement(t,{...o},e.createElement(r,null,"Json overlay")),e.createElement(t,{...o},e.createElement(S,null,"Click on span")),e.createElement(t,{...o,overlay:e.createElement(t.Menu,{triggerSubMenuAction:"click"},e.createElement(t.SubMenu,{"data-testid":"submenu-item",title:"Submenu"},e.createElement(t.SubMenu,{"data-testid":"sub-submenu-item",title:"SubSubmenu"},e.createElement(t.MenuItem,{description:"With tooltip",onClick:n=>alert(`some action ${n}`),testId:"action-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"action item"),e.createElement(t.MenuItem,{testId:"typography-item"},e.createElement(S,{type:"BTR5"},"Typography item")),e.createElement(t.MenuItem,{testId:"button-item"},e.createElement(r,null,"Button item"))),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(b,{key:"badge",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(a,{key:"UserAccount icon"})],description:"With tooltip",disabled:!0,testId:"with-tooltip-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"Disabled"),e.createElement(t.MenuItem,{disabled:!0,testId:"disabled-item"},"Disabled"),e.createElement(t.SubMenu,{"data-testid":"disabled-submenu-item",disabled:!0,title:"Disabled submenu"},e.createElement(t.MenuItem,null,"you cant see that"))),e.createElement(t.MenuDivider,null),e.createElement(t.GroupTitle,null,"Additional components"),e.createElement(t.MenuItem,{componentsBefore:[e.createElement(me,{key:"indicator",mode:"high"}),e.createElement(a,{key:"UserAccount icon"})],description:"Some description",testId:"with-components-before-item"},"With components before"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(a,{key:"UserAccount icon"}),e.createElement(b,{key:"badge",mode:"neutral",text:"25"})],description:"Some description",testId:"with-components-after-item"},"With components after"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(b,{key:"badge1",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(a,{key:"UserAccount icon1"})],description:"Some description",testId:"before-and-after-item"},"Before and After"),e.createElement(t.SubMenu,{"data-testid":"submenu-with-after-item",title:"Submenu with after"},e.createElement(t.MenuItem,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci."),e.createElement(t.MenuItem,null,"Default item 2")))},e.createElement(r,null,"Components overlay"))),args:{overlay:i,trigger:["click"]}},m={args:{overlay:i,trigger:["hover"],children:e.createElement(r,{text:"Hover"})}},c={args:{overlay:i,disabled:!0,children:e.createElement(r,{text:"Disabled"})}},l={render:o=>e.createElement(ge,null,ue.map(n=>e.createElement(t,{key:n,...o,placement:n},e.createElement(r,null,n)))),args:{overlay:i,trigger:["click"]},parameters:{layout:"centered"}},d={args:{overlay:i,children:e.createElement(r,{mode:"tertiary",iconBefore:e.createElement(le,null)})}},p={render:o=>e.createElement(ae,null,e.createElement(se,null,e.createElement(t,{...o,getPopupContainer:n=>n.parentElement}))),args:{overlay:i,children:e.createElement(r,null,"Click me and scroll my container"),trigger:["click"]}},u={render:o=>{const[n,h]=Z.useState(["custom"]);return e.createElement(ee,null,e.createElement(ce,{items:ye,value:n,onChange:h}),e.createElement(t,{...o,header:v[n[0]],footer:v[n[0]]},e.createElement(r,null,"Sticky header and footer")))},args:{overlay:i,popupMaxHeight:250,trigger:["click"]}},g={args:{overlay:i,popupMaxHeight:200,children:e.createElement(r,{text:"Open"})}},y={render:o=>{const n=Z.useRef(null),h={padding:"20px",border:"1px solid green"},te={overflow:"hidden",height:"50px",border:"1px solid gray"};return e.createElement(oe,{getPopupContainer:()=>n.current},e.createElement("div",{style:h,ref:n},e.createElement("span",null,"popup container"),e.createElement("div",{style:te},e.createElement(t,{...o}),e.createElement("span",null,"overflow: hidden"))))},args:{overlay:i,children:e.createElement(r,null,"Click"),trigger:["click"]}},w={args:{source:{dropdown:D.dropdown,dropdown_item:D.dropdown_item}},render:o=>e.createElement(ne,{...o})};var E,I,M;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <StoryColumn>
      <Dropdown {...args}>
        <Button>Json overlay</Button>
      </Dropdown>
      <Dropdown {...args}>
        <Text>Click on span</Text>
      </Dropdown>
      <Dropdown {...args} overlay={<Dropdown.Menu triggerSubMenuAction="click">
            <Dropdown.SubMenu data-testid="submenu-item" title="Submenu">
              <Dropdown.SubMenu data-testid="sub-submenu-item" title="SubSubmenu">
                <Dropdown.MenuItem description="With tooltip" onClick={menuInfo => alert(\`some action \${menuInfo}\`)} testId="action-item" tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                  action item
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="typography-item">
                  <Text type="BTR5">Typography item</Text>
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="button-item">
                  <Button>Button item</Button>
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>

              <Dropdown.MenuItem componentsAfter={[<Badge key="badge" mode="neutral" text="25" />]} componentsBefore={[<Placeholder key="UserAccount icon" />]} description="With tooltip" disabled testId="with-tooltip-item" tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.MenuItem disabled testId="disabled-item">
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.SubMenu data-testid="disabled-submenu-item" disabled title="Disabled submenu">
                <Dropdown.MenuItem>
                  you cant see that
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>
            </Dropdown.SubMenu>

            <Dropdown.MenuDivider />

            <Dropdown.GroupTitle>Additional components</Dropdown.GroupTitle>
            <Dropdown.MenuItem componentsBefore={[<Indicator key="indicator" mode="high" />, <Placeholder key="UserAccount icon" />]} description="Some description" testId="with-components-before-item">
              With components before
            </Dropdown.MenuItem>
            <Dropdown.MenuItem componentsAfter={[<Placeholder key="UserAccount icon" />, <Badge key="badge" mode="neutral" text="25" />]} description="Some description" testId="with-components-after-item">
              With components after
            </Dropdown.MenuItem>
            <Dropdown.MenuItem componentsAfter={[<Badge key="badge1" mode="neutral" text="25" />]} componentsBefore={[<Placeholder key="UserAccount icon1" />]} description="Some description" testId="before-and-after-item">
              Before and After
            </Dropdown.MenuItem>

            <Dropdown.SubMenu data-testid="submenu-with-after-item" title="Submenu with after">
              <Dropdown.MenuItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque.
                Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien,
                sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor
                venenatis non nec odio. Ut orci.
              </Dropdown.MenuItem>

              <Dropdown.MenuItem>
                Default item 2
              </Dropdown.MenuItem>
            </Dropdown.SubMenu>
          </Dropdown.Menu>}>
        <Button>Components overlay</Button>
      </Dropdown>
    </StoryColumn>,
  args: {
    overlay: defaultDropdownOverlay,
    trigger: ['click']
  }
}`,...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var C,k,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    overlay: defaultDropdownOverlay,
    trigger: ['hover'],
    children: <Button text="Hover" />
  }
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,P,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    overlay: defaultDropdownOverlay,
    disabled: true,
    children: <Button text="Disabled" />
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var T,H,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <DropdownsContainer>
      {dropdownPlacements.map(placement => <Dropdown key={placement} {...args} placement={placement}>
          <Button>{placement}</Button>
        </Dropdown>)}
    </DropdownsContainer>,
  args: {
    overlay: defaultDropdownOverlay,
    trigger: ['click']
  },
  parameters: {
    layout: 'centered'
  }
}`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var O,U,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    overlay: defaultDropdownOverlay,
    children: <Button mode="tertiary" iconBefore={<Menu3 />} />
  }
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var q,L,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <ScrollableContainer>
      <ContentContainer>
        <Dropdown {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>,
  args: {
    overlay: defaultDropdownOverlay,
    children: <Button>Click me and scroll my container</Button>,
    trigger: ['click']
  }
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var V,$,G;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    const [view, setView] = useState<string[]>(['custom']);
    return <StoryColumn>
        <SegmentedButton items={viewItems} value={view} onChange={setView} />
        <Dropdown {...args} header={stickyItems[view[0]]} footer={stickyItems[view[0]]}>
          <Button>Sticky header and footer</Button>
        </Dropdown>
      </StoryColumn>;
  },
  args: {
    overlay: defaultDropdownOverlay,
    popupMaxHeight: 250,
    trigger: ['click']
  }
}`,...(G=($=u.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var F,J,Q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    overlay: defaultDropdownOverlay,
    popupMaxHeight: 200,
    children: <Button text="Open" />
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var j,z,K;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const containerStyle: CSSProperties = {
      padding: '20px',
      border: '1px solid green'
    };
    const hiddenContainer: CSSProperties = {
      overflow: 'hidden',
      height: '50px',
      border: '1px solid gray'
    };
    return <PopupConfigProvider getPopupContainer={() => containerRef.current!}>
        <div style={containerStyle} ref={containerRef}>
          <span>popup container</span>
          <div style={hiddenContainer}>
            <Dropdown {...args} />
            <span>overflow: hidden</span>
          </div>
        </div>
      </PopupConfigProvider>;
  },
  args: {
    overlay: defaultDropdownOverlay,
    children: <Button>Click</Button>,
    trigger: ['click']
  }
}`,...(K=(z=y.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var N,X,Y;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: {
      dropdown: componentColors.dropdown,
      dropdown_item: componentColors.dropdown_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const wt=["Basic","Hover","Disabled","Placements","ContextMenu","WithinScrollableContainer","WithStickyHeaderAndFooter","WithPopupMaxHeight","CustomPopupContainer","ColorTokens"];export{s as Basic,w as ColorTokens,d as ContextMenu,y as CustomPopupContainer,c as Disabled,m as Hover,l as Placements,g as WithPopupMaxHeight,u as WithStickyHeaderAndFooter,p as WithinScrollableContainer,wt as __namedExportsOrder,yt as default};
