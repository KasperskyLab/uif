import{C as f}from"./Warnings-i-859-qY.js";import{R as e,r as C,S as E,H}from"./iframe-4-PRSI1I.js";import{o as S}from"./Placeholder-DoG1ulbQ.js";import{H as n}from"./HorizontalNav-Cm4oo849.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./preload-helper-Dp1pzeXC.js";const g=H.div`
  flex: 1;
  nav {
    width: 100%;
  }
`,t=[{label:"One",key:"one",componentsAfter:[e.createElement(S,{key:"placeholder-icon"}),e.createElement("span",{key:"badge",style:{fontSize:12,color:"var(--hexa-ui-color-control-neutral-default)"}},"9")]},{label:"Two",key:"two"},{label:"Three",key:"three"},{label:"Four",key:"four"},{label:"Five",key:"five"},{label:"Six",key:"six",disabled:!0},{label:"Seven Eleven",key:"sevenEleven"}],j={title:"Hexa UI Components/HorizontalNav/Stories",component:n,tags:["!autodocs"],parameters:{controls:{exclude:/(componentId|componentType|theme|klId|dataTestId)/}}},a={name:"HorizontalNav",render:r=>e.createElement(g,null,e.createElement(n,{...r,items:t})),args:{items:t}},o={render:r=>e.createElement(g,null,e.createElement(n,{...r,items:t,borderless:!0})),args:{borderless:!0,items:t},parameters:{controls:{exclude:/(borderless|componentId|componentType|theme|klId|dataTestId)/}}},s={name:"Controllable Active Key",render:r=>{const[I,K]=C.useState("two"),k=t.map(l=>({...l,selected:!1,onClick:()=>K(l.key)}));return e.createElement(E,{gap:"separated",direction:"vertical"},e.createElement(f,null),e.createElement(n,{...r,activeKey:I,items:k}))},args:{items:t,activeKey:"two"},parameters:{controls:{include:["activeKey"]}}};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'HorizontalNav',
  render: args => <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} />
    </Wrapper>,
  args: {
    items: baseItems
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,d,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} borderless />
    </Wrapper>,
  args: {
    borderless: true,
    items: baseItems
  },
  parameters: {
    controls: {
      exclude: /(borderless|componentId|componentType|theme|klId|dataTestId)/
    }
  }
}`,...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,y,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Controllable Active Key',
  render: args => {
    const [activeKey, setActiveKey] = useState('two');
    const items = baseItems.map(item => ({
      ...item,
      selected: false,
      onClick: () => setActiveKey(item.key)
    }));
    return <Space gap="separated" direction="vertical">
        <ControllableActiveKeyInfo />
        <HorizontalNavComponent {...args} activeKey={activeKey} items={items} />
      </Space>;
  },
  args: {
    items: baseItems,
    activeKey: 'two'
  },
  parameters: {
    controls: {
      include: ['activeKey']
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["HorizontalNavBasic","Borderless","ControllableActiveKey"];export{o as Borderless,s as ControllableActiveKey,a as HorizontalNavBasic,q as __namedExportsOrder,j as default};
