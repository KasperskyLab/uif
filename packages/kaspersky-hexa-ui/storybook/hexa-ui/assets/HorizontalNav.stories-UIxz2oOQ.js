import{R as e,b as s,r as b,S as f,H as h}from"./iframe-zz6a49H8.js";import{w}from"./withDesignControls-Cqk9De58.js";import{w as z}from"./withMeta-CjSZnBk7.js";import{C as H}from"./Warnings-DU1McXrL.js";import{B as I}from"./Badge-DMO-MXiW.js";import{I as K}from"./Indicator-DNWfFabI.js";import{l as E}from"./Placeholder-Bv52avk_.js";import{H as k}from"./HorizontalNav-HdsgURnU.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";import"./shouldForwardProp-Cdy-RLhZ.js";const S={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},x="HorizontalNav",A="Отображает панель с элементами навигации и управления в некоторых продуктах.",N="HorizontalNav — это интерактивный компонент...",T="",F="",i={dod:S,component:x,description:A,usage:N,designLink:T,pixsoView:F},B=h.div`
  flex: 1;
  nav {
    width: 100%;
  }
`,g=[{label:"One",key:"one",testId:"horizontal-nav-item-one-test-id",klId:"horizontal-nav-item-one-kl-id",componentsAfter:[e.createElement(E,{key:"placeholder-icon"}),e.createElement(I,{key:"badge",mode:"neutral",text:"9"})],onClick:()=>console.log("Click One")},{label:"Two",key:"two",testId:"horizontal-nav-item-two-test-id",klId:"horizontal-nav-item-two-kl-id",onClick:()=>console.log("Click Two")},{label:"Three",key:"three",onClick:()=>console.log("Click Three"),selected:!0},{label:"Four",key:"four",componentsAfter:[e.createElement(K,{key:"indicator"})],onClick:()=>console.log("Click Four")},{label:"Five",key:"five",onClick:()=>console.log("Click Five")},{label:"Six",key:"six",onClick:()=>console.log("Click Six"),disabled:!0},{label:"Seven Eleven",key:"sevenEleven",onClick:()=>console.log("Click Seven Eleven")}],D={argTypes:{items:{control:"object"},borderless:{control:"boolean"}},args:{testId:"horizontal-nav-test-id",klId:"horizontal-nav-kl-id",items:g,borderless:!1},parameters:{badges:[s.stable,s.reviewedByDesign],docs:{page:z(i)},design:i.pixsoView},decorators:[(n,r)=>e.createElement(B,null,e.createElement(n,{...r}))]},te={title:"Hexa UI Components/HorizontalNav",component:k,...w({componentName:"horizontalNav",meta:D})},t={},a={render:n=>{const[r,y]=b.useState("two"),C=o=>{console.log("new active key is",o),y(o)},u=g.map(o=>({...o,selected:!1,onClick:()=>{C(o.key)}}));return e.createElement(f,{gap:"separated",direction:"vertical"},e.createElement(H,null),e.createElement(k,{...n,activeKey:r,items:u}))}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [activeKey, setActiveKey] = useState('two');
    const handleActiveKeyChange = (key: string) => {
      console.log('new active key is', key);
      setActiveKey(key);
    };
    const newItems = items.map(item => ({
      ...item,
      selected: false,
      onClick: () => {
        handleActiveKeyChange(item.key);
      }
    }));
    return <Space gap="separated" direction="vertical">
        <ControllableActiveKeyInfo />
        <HorizontalNavComponent {...args} activeKey={activeKey} items={newItems} />
      </Space>;
  }
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const ae=["HorizontalNav","HorizontalNavControllableActiveKey"];export{t as HorizontalNav,a as HorizontalNavControllableActiveKey,ae as __namedExportsOrder,te as default};
