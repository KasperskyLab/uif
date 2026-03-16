import{B as r}from"./Button-CgqUalcg.js";import{S as g}from"./Submenu-Cdzt-E7V.js";import{T as o}from"./Tabs-BDp1woPZ.js";import{H as n,R as t}from"./iframe-DlY6n6Um.js";import{S as T}from"./Sidebar-llqutOcL.js";const b=n(o)`
  min-height: 100%;
  height: 100%;
  overflow: visible;

  .ant-tabs-top .ant-tabs-nav {
    margin: 0;
    padding: 0 24px;

    .ant-tabs-nav-list::before {
      left: -24px;
      right: -24px;
    }
  }

  .ant-tabs-content-top {
    height: 100%;
  }
`,y=n.div`
  padding: 24px;
  min-height: 100%;
`,P=n(T).withConfig({shouldForwardProp:a=>!["hasNavigation"].includes(a)})`
  ${({hasNavigation:a})=>a&&`
    .ant-drawer-title > div:last-child {
      display: none;
    }
    .ant-drawer-body {
      padding: 0;
    }
  `}

  .ant-drawer-body {
    overflow: visible;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,f=n.div`
  display: flex;
  gap: 8px;
`,R=({navigation:a,children:s,actions:e,defaultActiveKey:m,onChange:d,...l})=>t.createElement(P,{...l,hasNavigation:!!a,size:"large",footer:e&&t.createElement(f,null,e.FIRST_ACTION&&t.createElement(r,{size:"medium",...e.FIRST_ACTION},e.FIRST_ACTION.text),e.SECOND_ACTION&&t.createElement(r,{size:"medium",mode:"secondary",...e.SECOND_ACTION},e.SECOND_ACTION.text),e.THIRD_ACTION&&t.createElement(r,{size:"medium",mode:"secondary",...e.THIRD_ACTION},e.THIRD_ACTION.text))},a?t.createElement(b,{tabPosition:"top",defaultActiveKey:m,onChange:d},a.map(({key:p,content:c,navigation:i,...u})=>t.createElement(o.TabPane,{key:p,tab:t.createElement(o.TabPaneHead,{...u})},i?t.createElement(g,{...i}):t.createElement(y,null,c)))):s);R.__docgenInfo={description:"",methods:[],displayName:"DetailsPage",props:{navigation:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`DetailsPageTabPaneInner & {
  navigation?: SubmenuProps
}`,elements:[{name:"intersection",raw:`TabPaneHeadProps & {
  key: string,
  content?: React.ReactNode
}`,elements:[{name:"TabPaneHeadProps"},{name:"signature",type:"object",raw:`{
  key: string,
  content?: React.ReactNode
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  navigation?: SubmenuProps
}`,signature:{properties:[{key:"navigation",value:{name:"SubmenuProps",required:!1}}]}}]}],raw:"DetailsPageTabPane[]"},description:""},actions:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown"},{name:"intersection",raw:"ButtonProps & TestingProps",elements:[{name:"ButtonProps"},{name:"TestingProps"}]}],raw:"Record<keyof typeof ActionsMap, ActionType>"}],raw:"Partial<Record<keyof typeof ActionsMap, ActionType>>"},description:""}}};export{R as D};
