import{g as i,c as T}from"./propPresentation-BNIeMkgM.js";import{M as n,R as e,H as d}from"./iframe-DedYZBTA.js";import{M as P}from"./meta-DCj7gsmK.js";import{T as a}from"./Tabs-BUVjZPCj.js";import{t as m}from"./types-D1pYS17c.js";const p={tabPosition:"top",defaultActiveKey:"1",padding:!1,noMargin:!1,destroyInactiveTabPane:!1},l={tabPosition:{control:"select",options:[...m]},padding:{control:"boolean"},noMargin:{control:"boolean"},destroyInactiveTabPane:{control:"boolean"}},g=d.div`
  width: 100%;
`,u={title:"Hexa UI Components/Tabs",component:a,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["defaultArgs","tabsPropPresentation"],argTypes:T(l),args:p,parameters:{badges:[n.stable,n.reviewedByDesign],design:P.pixsoView},decorators:[(o,c)=>e.createElement(g,null,e.createElement(o,{...c}))]},t={render:o=>e.createElement(a,{...o},e.createElement(a.TabPane,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),e.createElement(a.TabPane,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),e.createElement(a.TabPane,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")),parameters:{controls:{include:i(l),sort:"none"}}};var r,s,b;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
    </Tabs>,
  parameters: {
    controls: {
      include: getControlsInclude(tabsPropPresentation),
      sort: 'none'
    }
  }
}`,...(b=(s=t.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};const f=["Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{v as T};
