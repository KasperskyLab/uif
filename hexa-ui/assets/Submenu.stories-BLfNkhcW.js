import{M as n,r as m,R as e,H as d}from"./iframe-DedYZBTA.js";import{g as p,c as b}from"./propPresentation-BNIeMkgM.js";import{B as S}from"./Button-Dn3YNhT7.js";import{S as l}from"./Submenu-DH5AzpW9.js";import{m as g}from"./mocks-BqL-S2Fj.js";import{S as f}from"./Sidebar-t3wS3LLT.js";const y={collapseOnTextClick:!0,truncateText:!1},i={truncateText:{control:"boolean",description:"Сокращать длинный текст с многоточием"},collapseOnTextClick:{control:"boolean",description:"Раскрывать и сворачивать вложенные пункты по клику на текст"}},O=d(f)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,C={title:"Hexa UI Components/Submenu",component:l,tags:["!autodocs"],includeStories:["Playground"],argTypes:b(i),args:y,parameters:{badges:[n.stable,n.reviewedByDesign]}},t={name:"Playground",parameters:{controls:{include:p(i),sort:"none"}},render:u=>{const[c,r]=m.useState(!1);return e.createElement(e.Fragment,null,e.createElement(S,{onClick:()=>r(!0)},"Open"),e.createElement(O,{title:"Sidebar",visible:c,onClose:()=>r(!1)},e.createElement(l,{...u,items:g})))}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(submenuPropPresentation),
      sort: 'none'
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu title="Sidebar" visible={isOpen} onClose={() => setIsOpen(false)}>
          <SubmenuComponent {...args} items={mockedItems} />
        </StyledSidebarWithSubmenu>
      </>;
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const P=["Playground"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:P,default:C},Symbol.toStringTag,{value:"Module"}));export{h as S};
