import{B as l}from"./Button-Dn3YNhT7.js";import{H as n,R as t}from"./iframe-DedYZBTA.js";import{S as b}from"./Sidebar-t3wS3LLT.js";import{T as i}from"./Tabs-BUVjZPCj.js";import{S as h}from"./Submenu-DH5AzpW9.js";const y=n(i)`
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
`,g=n.div`
  padding: 24px;
  min-height: 100%;
`,T=n(b).withConfig({shouldForwardProp:a=>!["hasNavigation"].includes(a)})`
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
`,C=n.div`
  display: flex;
  gap: 8px;
`,o=({navigation:a,children:d,actions:e,defaultActiveKey:s,onChange:u,...m})=>t.createElement(T,{...m,hasNavigation:!!a,size:"large",footer:e&&t.createElement(C,null,e.FIRST_ACTION&&t.createElement(l,{size:"medium",...e.FIRST_ACTION},e.FIRST_ACTION.text),e.SECOND_ACTION&&t.createElement(l,{size:"medium",mode:"secondary",...e.SECOND_ACTION},e.SECOND_ACTION.text),e.THIRD_ACTION&&t.createElement(l,{size:"medium",mode:"secondary",...e.THIRD_ACTION},e.THIRD_ACTION.text))},a?t.createElement(y,{tabPosition:"top",defaultActiveKey:s,onChange:u},a.map(({key:p,content:f,navigation:r,...c})=>t.createElement(i.TabPane,{key:p,tab:t.createElement(i.TabPaneHead,{...c})},r?t.createElement(h,{...r}):t.createElement(g,null,f)))):d);try{o.displayName="DetailsPage",o.__docgenInfo={description:"",displayName:"DetailsPage",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"The title of the Sidebar",name:"title",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The class name of the container of the Sidebar dialog",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},visible:{defaultValue:null,description:"Whether the Sidebar dialog is visible or not",name:"visible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Specify a callback that will be called when a user clicks mask, close button or Cancel button",name:"onClose",required:!1,type:{name:"((e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void)"}},mask:{defaultValue:null,description:"Whether to show mask or not",name:"mask",required:!1,type:{name:"boolean"}},afterVisibleChange:{defaultValue:null,description:"Callback after the animation ends when switching drawers",name:"afterVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},zIndex:{defaultValue:null,description:"The z-index of the Sidebar",name:"zIndex",required:!1,type:{name:"number"}},destroyOnClose:{defaultValue:null,description:"Whether to unmount child components on closing Sidebar or not",name:"destroyOnClose",required:!1,type:{name:"boolean"}},getContainer:{defaultValue:null,description:"The node where Sidebar will be put",name:"getContainer",required:!1,type:{name:"string | false | HTMLElement | getContainerFunc"}},bodyStyle:{defaultValue:null,description:"Style of the Sidebar content part",name:"bodyStyle",required:!1,type:{name:"CSSProperties"}},flex:{defaultValue:null,description:"Is Sidebar adaptive to viewport",name:"flex",required:!1,type:{name:"boolean"}},headerActions:{defaultValue:null,description:"Header actions should be placed at corner of Sidebar",name:"headerActions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"The subtitle of the Sidebar",name:"subtitle",required:!1,type:{name:"ReactNode"}},titlePostfix:{defaultValue:null,description:"The element that is showing after the title",name:"titlePostfix",required:!1,type:{name:"ReactNode"}},titlePrefix:{defaultValue:null,description:"The element that is showing before the title",name:"titlePrefix",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"An element placed below the Title at the bottom of the Header",name:"subHeader",required:!1,type:{name:"ReactNode"}},footerLeft:{defaultValue:null,description:"The footerRight of the Sidebar",name:"footerLeft",required:!1,type:{name:"ReactNode"}},footerRight:{defaultValue:null,description:"The footerLeft of the Sidebar",name:"footerRight",required:!1,type:{name:"ReactNode"}},truncateTitle:{defaultValue:null,description:"@deprecated use titleLineClamp. If titleLineClamp >= 1 then truncateTitle: true",name:"truncateTitle",required:!1,type:{name:"boolean"}},titleLineClamp:{defaultValue:null,description:"Number of not truncated lines, see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-clamp",name:"titleLineClamp",required:!1,type:{name:"number"}},noPaddingContent:{defaultValue:null,description:"Remove padding from content",name:"noPaddingContent",required:!1,type:{name:"boolean"}},closeTestId:{defaultValue:null,description:"Specific testId for close button, is needed for autotests",name:"closeTestId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback executed when active submenu item is changed",name:"onChange",required:!1,type:{name:"((activeKey: string) => void)"}},defaultActiveKey:{defaultValue:null,description:"Initial submenu item key, if activeKey is not set",name:"defaultActiveKey",required:!1,type:{name:"string"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"DetailsPageTabPane[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:'Partial<Record<"FIRST_ACTION" | "SECOND_ACTION" | "THIRD_ACTION", ActionType>>'}}}}}catch{}export{o as D};
