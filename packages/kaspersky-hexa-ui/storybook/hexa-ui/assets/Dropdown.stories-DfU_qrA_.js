import{T as te}from"./Palette-oU4WYbWy.js";import{R as e,c as S,b as D,T as y,r as N,C as ne,H as oe,S as re}from"./iframe-zz6a49H8.js";import{w as ie}from"./withDesignControls-Cqk9De58.js";import{w as se}from"./withMeta-CjSZnBk7.js";import{S as ae,C as ce}from"./ScrollableContainer-BCQCkGEe.js";import{S as Z}from"./StoryComponents-C4fwEYRs.js";import{B as s}from"./Badge-DMO-MXiW.js";import{B as r}from"./Button-Djh220XQ.js";import{C as me}from"./Checkbox-CLDGkQjT.js";import{I as z}from"./Indicator-DNWfFabI.js";import{S as de}from"./SegmentedButton-RLIkkpaw.js";import{t as le}from"./Menu3-BhUF3vm5.js";import{l as i}from"./Placeholder-Bv52avk_.js";import{o as pe}from"./Plus-C59NrE5b.js";import{D as t}from"./Dropdown-D5otA5yN.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./Loader-Y1gOuUZF.js";import"./index-BNCbYTB0.js";import"./button-nrifPwP7.js";import"./AdditionalContent-CmOFtI4D.js";import"./HelpMessage-C6l4gLFq.js";import"./useId-BfMMUQXv.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-Cdmbf4py.js";import"./index-CVEKLqO0.js";import"./KeyCode-D_nTN6KT.js";import"./Overflow-8LRqTPgc.js";import"./focus-rl8Tx3sL.js";import"./ArrowRight-DPBBrE_M.js";const ue={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},ge="Dropdown",be="В качестве основы используется Dropdown из библиотеки rc-dropdown.",he="Вспомогательный компонент отображения выпадающего списка с произвольным содержимым",we="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=53702%3A197338",fe="https://pixso.net/app/design/6PCxyuFOPWj8o6dVR59MRA",E={dod:ue,component:ge,description:be,usage:he,designLink:we,pixsoView:fe},X=["bottomLeft","bottomRight","bottom","topLeft","topRight","top"],ye=[{testId:"submenu-item",title:"Submenu",type:"submenu",description:"Some description",children:[{testId:"sub-submenu-item",active:!0,title:"SubSubmenu",type:"submenu",children:[{testId:"action-item",type:"action",onClick:n=>{alert(`some action ${n}`)},children:"action item",description:"With tooltip",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{testId:"typography-item",children:e.createElement(y,{type:"BTR5"},"Typography item")},{testId:"button-item",children:e.createElement(r,null,"Button item")},{type:"innerActions",children:e.createElement(me,null,"Check me, and keep dropdown opened")}]},{testId:"with-tooltip-item",disabled:!0,componentsBefore:[e.createElement(i,{key:"UserAccount icon"})],componentsAfter:[e.createElement(s,{key:"badge",mode:"neutral",text:"25"})],description:"With tooltip",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",children:"Disabled"},{testId:"disabled-item",disabled:!0,children:"Disabled"},{testId:"disabled-submenu-item",title:"Disabled submenu",type:"submenu",disabled:!0,description:"With tooltip",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",children:[{children:"you cant see that"}]}]},{type:"divider",children:null},{title:"Additional components",type:"group",children:[{testId:"with-components-before-item",componentsBefore:[e.createElement(z,{key:"indicator",mode:"high"}),e.createElement(i,{key:"UserAccount icon"})],description:"Some description",children:"With components before"},{testId:"with-components-after-item",componentsAfter:[e.createElement(i,{key:"UserAccount icon"}),e.createElement(s,{key:"badge",mode:"neutral",text:"25"})],description:"Some description",children:"With components after"},{testId:"before-and-after-item",componentsAfter:[e.createElement(s,{key:"badge1",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(i,{key:"UserAccount icon1"})],children:"Before and After"}]},{type:"submenu",testId:"submenu-with-after-item",title:"Submenu with after",componentsAfter:[e.createElement(s,{key:"badge2",mode:"neutral",text:"25"})],children:[{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci."},{children:"Default item 2"}]}],ut={title:"Hexa UI Components/Dropdown",component:t,...ie({componentName:"dropdown",meta:{argTypes:{placement:{control:"select",options:X}},args:{overlay:ye,disabled:!1,loading:!1,placement:"bottomLeft",trigger:["hover"],testId:"dropdown-test-id",klId:"dropdown-kl-id"},parameters:{badges:[D.stable,D.reviewedByDesign],docs:{page:se(E)},design:E.pixsoView}}})},a={render:n=>e.createElement(Z,null,e.createElement(t,{...n},e.createElement(r,null,"Json overlay")),e.createElement(t,{...n},e.createElement(y,null,"Click on span")),e.createElement(t,{...n,overlay:e.createElement(t.Menu,{triggerSubMenuAction:"click"},e.createElement(t.SubMenu,{"data-testid":"submenu-item",title:"Submenu"},e.createElement(t.SubMenu,{"data-testid":"sub-submenu-item",title:"SubSubmenu"},e.createElement(t.MenuItem,{description:"With tooltip",onClick:o=>alert(`some action ${o}`),testId:"action-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"action item"),e.createElement(t.MenuItem,{testId:"typography-item"},e.createElement(y,{type:"BTR5"},"Typography item")),e.createElement(t.MenuItem,{testId:"button-item"},e.createElement(r,null,"Button item"))),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(s,{key:"badge",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(i,{key:"UserAccount icon"})],description:"With tooltip",disabled:!0,testId:"with-tooltip-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"Disabled"),e.createElement(t.MenuItem,{disabled:!0,testId:"disabled-item"},"Disabled"),e.createElement(t.SubMenu,{"data-testid":"disabled-submenu-item",disabled:!0,title:"Disabled submenu"},e.createElement(t.MenuItem,null,"you cant see that"))),e.createElement(t.MenuDivider,null),e.createElement(t.GroupTitle,null,"Additional components"),e.createElement(t.MenuItem,{componentsBefore:[e.createElement(z,{key:"indicator",mode:"high"}),e.createElement(i,{key:"UserAccount icon"})],description:"Some description",testId:"with-components-before-item"},"With components before"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(i,{key:"UserAccount icon"}),e.createElement(s,{key:"badge",mode:"neutral",text:"25"})],description:"Some description",testId:"with-components-after-item"},"With components after"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(s,{key:"badge1",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(i,{key:"UserAccount icon1"})],description:"Some description",testId:"before-and-after-item"},"Before and After"),e.createElement(t.SubMenu,{"data-testid":"submenu-with-after-item",title:"Submenu with after"},e.createElement(t.MenuItem,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci."),e.createElement(t.MenuItem,null,"Default item 2")))},e.createElement(r,null,"Components overlay"))),args:{trigger:["click"]}},c={args:{children:e.createElement(r,{text:"Hover"})}},m={args:{disabled:!0,children:e.createElement(r,{text:"Disabled"})}},Se=oe.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`,d={render:n=>e.createElement(Se,null,X.map(o=>e.createElement(t,{key:o,...n,placement:o},e.createElement(r,null,o)))),args:{trigger:["click"]},parameters:{layout:"centered"}},l={args:{children:e.createElement(r,{mode:"tertiary",iconBefore:e.createElement(le,null)})}},p={render:n=>e.createElement(ae,null,e.createElement(ce,null,e.createElement(t,{...n,getPopupContainer:o=>o.parentElement}))),args:{children:e.createElement(r,null,"Click me and scroll my container"),trigger:["click"]}},De=[{text:"custom item",value:"custom"},{text:"action item",value:"action"},{text:"submenu item",value:"submenu"}],f={testId:"sticky-item",sticky:!0},u={custom:{...f,children:"Custom sticky element"},action:{...f,type:"action",children:e.createElement(re,{gap:"dependent"},e.createElement(pe,null)," Action sticky element")},submenu:{...f,type:"submenu",title:"Submenu sticky element",children:[{children:"Submenu item"}]}},g={render:n=>{const[o,w]=N.useState(["custom"]);return e.createElement(Z,null,e.createElement(de,{items:De,value:o,onChange:w}),e.createElement(t,{...n,header:u[o[0]]},e.createElement(r,null,"Sticky header")),e.createElement(t,{...n,footer:u[o[0]]},e.createElement(r,null,"Sticky footer")),e.createElement(t,{...n,header:u[o[0]],footer:u[o[0]]},e.createElement(r,null,"Sticky header and footer")))},args:{popupMaxHeight:250,trigger:["click"]}},b={render:n=>{const o=N.useRef(null),w={padding:"20px",border:"1px solid green"},ee={overflow:"hidden",height:"50px",border:"1px solid gray"};return e.createElement(ne,{getPopupContainer:()=>o.current},e.createElement("div",{style:w,ref:o},e.createElement("span",null,"popup container"),e.createElement("div",{style:ee},e.createElement(t,{...n}),e.createElement("span",null,"overflow: hidden"))))},args:{children:e.createElement(r,null,"Click"),trigger:["click"]}},h={args:{source:{dropdown:S.dropdown,dropdown_item:S.dropdown_item}},render:n=>e.createElement(te,{...n})};var k,I,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci.
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
    trigger: ['click']
  }
}`,...(C=(I=a.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,v,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <Button text="Hover" />
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var x,A,P;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <Button text="Disabled" />
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var T,U,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <DropdownsContainer>
      {placements.map(placement => <Dropdown key={placement} {...args} placement={placement}>
          <Button>{placement}</Button>
        </Dropdown>)}
    </DropdownsContainer>,
  args: {
    trigger: ['click']
  },
  parameters: {
    layout: 'centered'
  }
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var L,R,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <Button mode="tertiary" iconBefore={<Menu3 />} />
  }
}`,...(H=(R=l.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var q,V,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <ScrollableContainer>
      <ContentContainer>
        <Dropdown {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>,
  args: {
    children: <Button>Click me and scroll my container</Button>,
    trigger: ['click']
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,Q,F;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    const [view, setView] = useState<string[]>(['custom']);
    return <StoryColumn>
        <SegmentedButton items={viewItems} value={view} onChange={setView} />  
        <Dropdown {...args} header={stickyItems[view[0]]}>
          <Button>Sticky header</Button>
        </Dropdown>
        <Dropdown {...args} footer={stickyItems[view[0]]}>
          <Button>Sticky footer</Button>
        </Dropdown>
        <Dropdown {...args} header={stickyItems[view[0]]} footer={stickyItems[view[0]]}>
          <Button>Sticky header and footer</Button>
        </Dropdown>
      </StoryColumn>;
  },
  args: {
    popupMaxHeight: 250,
    trigger: ['click']
  }
}`,...(F=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var G,O,$;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    children: <Button>Click</Button>,
    trigger: ['click']
  }
}`,...($=(O=b.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var j,Y,K;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    source: {
      dropdown: componentColors.dropdown,
      dropdown_item: componentColors.dropdown_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(K=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const gt=["Basic","Hover","Disabled","Placements","ContextMenu","WithinScrollableContainer","WithStickyHeaderAndFooter","CustomPopupContainer","ColorTokens"];export{a as Basic,h as ColorTokens,l as ContextMenu,b as CustomPopupContainer,m as Disabled,c as Hover,d as Placements,g as WithStickyHeaderAndFooter,p as WithinScrollableContainer,gt as __namedExportsOrder,ut as default};
