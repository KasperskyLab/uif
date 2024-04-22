"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[7350],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/sider/Sider.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.SiderWithMenu=void 0;var _SiderWithMenu$parame,_SiderWithMenu$parame2,_SiderWithMenu$parame3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_meta=_interopRequireDefault(__webpack_require__("./src/sider/__meta__/meta.json")),_antd=__webpack_require__("./node_modules/antd/es/index.js"),_Sider=__webpack_require__("./src/sider/Sider.tsx"),_SiderMenu=__webpack_require__("./src/sider/SiderMenu.tsx"),_badges=__webpack_require__("./.storybook/badges.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_colors=__webpack_require__("./design-system/theme/themes/dark/colors.ts"),_=__webpack_require__("./node_modules/@kaspersky/icons/16/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const meta={title:"Organisms/Sider",component:_Sider.Sider,parameters:{storySource:{source:"import React, { useState } from 'react';\nimport styled from 'styled-components';\nimport { Meta, StoryObj } from '@storybook/react';\nimport MetaData from './__meta__/meta.json';\nimport { Layout as AntLayout, SiderProps } from 'antd';\nimport { Sider, Hamburger } from './Sider';\nimport { Menu, UserMenu } from './SiderMenu';\nimport { badges } from '@sb/badges';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { colors } from '@design-system/theme/themes/dark/colors';\nimport { Grid, UserGroup, Desktop, Store, Search, Server, AppUpdate, UserAccount, Settings2 } from '@kaspersky/icons/16';\nconst meta: Meta<SiderProps> = {\n  title: 'Organisms/Sider',\n  component: Sider,\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\nconst ServicesMenu = styled.div`\n  display: flex;\n  margin: 0 16px;\n  color: ${colors['text-icons-elements'].primary};\n  font-size: 14px;\n\n  .ant-layout-sider-collapsed & {\n    flex-direction: column;\n  }\n\n  .item {\n    cursor: pointer;\n    margin: 8px;\n  }\n`;\nconst RootLayout = styled(AntLayout)`\n  height: 100vh;\n  background: transparent;\n`;\nconst AppLogo = () => {\n  return <StyledAppLogo href={'#'} className='logo-ksc'>\n      <svg className=\"logo-svg\" width=\"128\" height=\"128\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_0_4722)\">\n          <g clip-path=\"url(#clip1_0_4722)\">\n            <g clip-path=\"url(#clip2_0_4722)\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M113.495 33.4495L67.4951 6.93934C65.3318 5.69261 62.6682 5.69261 60.5049 6.93934L14.5049 33.4495C12.3363 34.6993 11 37.0119 11 39.5149V88.4929C11 90.9959 12.3363 93.3085 14.5049 94.5583L60.5049 121.068C62.6682 122.315 65.3318 122.315 67.4951 121.068L113.495 94.5583C115.664 93.3085 117 90.9959 117 88.4929V39.5149C117 37.0119 115.664 34.6993 113.495 33.4495ZM70.4909 1.74043C66.4733 -0.574934 61.5267 -0.574935 57.5091 1.74043L11.5091 28.2506C7.48177 30.5716 5 34.8664 5 39.5149V88.4929C5 93.1414 7.48177 97.4362 11.5091 99.7572L57.5091 126.267C61.5267 128.583 66.4733 128.583 70.4909 126.267L116.491 99.7572C120.518 97.4362 123 93.1414 123 88.4929V39.5149C123 34.8664 120.518 30.5716 116.491 28.2506L70.4909 1.74043Z\" fill=\"#29CCB1\"></path>\n            </g>\n            <path d=\"M45 56C43.8954 56 43 56.8954 43 58C43 59.1046 43.8954 60 45 60H47V79C47 79.5523 47.4477 80 48 80C48.5523 80 49 79.5523 49 79V60H51C52.1046 60 53 59.1046 53 58C53 56.8954 52.1046 56 51 56H45Z\" fill=\"white\"></path>\n            <path d=\"M81 60V57C81 56.4477 80.5523 56 80 56C79.4477 56 79 56.4477 79 57V60H77C75.8954 60 75 60.8954 75 62C75 63.1046 75.8954 64 77 64H79V79C79 79.5523 79.4477 80 80 80C80.5523 80 81 79.5523 81 79V64H83C84.1046 64 85 63.1046 85 62C85 60.8954 84.1046 60 83 60H81Z\" fill=\"white\"></path>\n            <path d=\"M65 57V72H67C68.1046 72 69 72.8954 69 74C69 75.1046 68.1046 76 67 76H65V79C65 79.5523 64.5523 80 64 80C63.4477 80 63 79.5523 63 79V76H61C59.8954 76 59 75.1046 59 74C59 72.8954 59.8954 72 61 72H63V57C63 56.4477 63.4477 56 64 56C64.5523 56 65 56.4477 65 57Z\" fill=\"white\"></path>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30 87C30 88.6569 31.3431 90 33 90H95C96.6569 90 98 88.6569 98 87V41C98 39.3431 96.6569 38 95 38H33C31.3431 38 30 39.3431 30 41V87ZM34 50H94V86H34V50Z\" fill=\"white\"></path>\n          </g>\n        </g>\n        <defs>\n          <clipPath id=\"clip0_0_4722\">\n            <rect width=\"128\" height=\"128\" fill=\"white\"></rect>\n          </clipPath>\n          <clipPath id=\"clip1_0_4722\">\n            <rect width=\"128\" height=\"128\" fill=\"white\"></rect>\n          </clipPath>\n          <clipPath id=\"clip2_0_4722\">\n            <rect width=\"128\" height=\"128\" fill=\"white\"></rect>\n          </clipPath>\n        </defs>\n      </svg>\n      <div className='logo-text'>\n        <div className='logo-text-osmp'>Open Single</div>\n        <div className='logo-text-osmp'>Management Platform</div>\n      </div>\n    </StyledAppLogo>;\n};\nconst StyledAppLogo = styled.a`\n    min-height: 64px;\n    display: flex;\n    margin: 10px 20px 20px 20px;\n    color: #fff;\n    text-decoration: none;\n    overflow: hidden;\n    align-items: center;\n    opacity: 1;\n    position: relative;\n    transition: opacity 0.1s 0.15s ease;\n\n    .logo-text-strong {\n      font-size: 14px;\n      line-height: 1.1;\n      font-weight: 600;\n    }\n\n    .logo-text-light {\n      font-size: 10px;\n      line-height: 1;\n      font-weight: 600;\n      margin-top: 0.2em;\n    }\n\n    .logo-text-osmp {\n      font-size: 14px;\n      line-height: 1.1;\n      font-weight: 600;\n      margin-top: 0.2em;\n    }\n\n    &:active,\n    &:hover,\n    &:focus {\n      color: #fff;\n      text-decoration: none;\n    }\n\n    .logo-svg {\n      position: relative;\n      top: 0;\n      width: 64px;\n      height: 64px;\n      margin: 0 5px;\n    }\n\n    &.logo-ksc {\n      .logo-path-primary {\n        fill: var(--header-logo-ksc-primary-fill);\n      }\n\n      .logo-path-secondary {\n        fill: var(--header-logo-ksc-secondary-fill);\n      }\n    }\n\n    &.logo-ksc-cloud {\n\n      .logo-path-border {\n        fill: none;\n        stroke: #00A88E;\n      }\n\n      .logo-path-icon {\n        fill: var(--header-logo-ksc-cloud-icon-fill);\n      }\n\n      .logo-text-strong {\n        font-size: 14px;\n        line-height: 1;\n        font-weight: 600;\n        margin: 0.2em 0;\n      }\n\n      .logo-text-light {\n        font-size: 10px;\n        line-height: 1;\n        font-weight: 600;\n      }\n    }\n\n    .ant-layout-sider-collapsed & {\n      opacity: 0;\n      transition: opacity 0s 0s ease;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      position: absolute;\n    }\n\n    --header-logo-ksc-primary-fill: #1D1D1B;\n    --header-logo-ksc-secondary-fill: #ffffff;\n    --header-logo-ksc-cloud-icon-fill: #ffffff;\n    --icon-kl_logo-fill-color: #00A88E;\n  `;\nconst menuItems: Record<string, unknown>[] = [{\n  state: 'monitoring',\n  weight: 100,\n  key: 'Monitoring & reporting',\n  iconClass: 'monitoring',\n  icon: Grid,\n  klId: 'navigation.main.monitoring',\n  isRoot: true,\n  items: [{\n    state: 'dashboard',\n    weight: 100,\n    key: 'Dashboard',\n    klId: 'navigation.monitoring.dashboard',\n    onClick: () => alert(123)\n  }, {\n    state: 'reports',\n    weight: 200,\n    key: 'Reports',\n    klId: 'navigation.monitoring.reports',\n    onClick: () => alert(123)\n  }, {\n    state: 'events',\n    weight: 300,\n    key: 'Event selections',\n    klId: 'navigation.selections.events',\n    onClick: () => alert(123)\n  }, {\n    state: 'notifications',\n    weight: 400,\n    key: 'Notifications',\n    klId: 'navigation.selections.notifications',\n    onClick: () => alert(123)\n  }, {\n    state: 'announcements',\n    weight: 500,\n    key: 'Kaspersky announcements',\n    klId: 'navigation.selections.announcements',\n    onClick: () => alert(123)\n  }]\n}, {\n  state: 'management',\n  weight: 200,\n  key: 'Assets (Devices)',\n  iconClass: 'assets',\n  icon: Desktop,\n  klId: 'navigation.main.management',\n  isRoot: true,\n  items: [{\n    state: 'policies',\n    weight: 100,\n    key: 'Policies & profiles',\n    klId: 'navigation.management.policies',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'tasks',\n    weight: 200,\n    key: 'Tasks',\n    klId: 'navigation.management.tasks',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'hosts',\n    weight: 300,\n    key: 'Managed devices',\n    itemClass: null,\n    klId: 'navigation.management.hosts',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'distributionPoints',\n    weight: 400,\n    key: 'navigation.main.distributionPoints',\n    itemClass: '',\n    klId: 'navigation.management.distributionPoints',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'device-relocation-rules-management',\n    weight: 500,\n    key: 'Moving rules',\n    klId: 'relocationRules.displayName',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'device-selections',\n    weight: 600,\n    key: 'Device selections',\n    itemClass: null,\n    klId: 'navigation.selections.deviceSelections',\n    groupsTree: true,\n    onClick: () => alert(123)\n  }, {\n    state: 'all-tags',\n    weight: 700,\n    key: 'Tags',\n    itemClass: null,\n    klId: 'navigation.operations.tags',\n    items: [{\n      state: 'hosts-tags',\n      weight: 100,\n      key: 'Device tags',\n      klId: 'navigation.operations.tags.hostsTags',\n      onClick: () => alert(123)\n    }, {\n      state: 'autotagging-rules',\n      weight: 200,\n      key: 'Auto-tagging rules',\n      klId: 'navigation.operations.tags.autotaggingRules',\n      onClick: () => alert(123)\n    }]\n  }, {\n    state: 'administration-groups',\n    weight: 800,\n    key: 'Hierarchy of groups',\n    itemClass: null,\n    klId: 'navigation.management.administration-groups',\n    onClick: () => alert(123)\n  }]\n}, {\n  state: 'applicationsAndServices',\n  weight: 300,\n  key: 'Applications and Services',\n  iconClass: 'applicationsAndServices',\n  itemClass: '',\n  icon: AppUpdate,\n  klId: 'navigation.main.applicationsAndServices',\n  items: [],\n  isRoot: true,\n  onClick: () => alert(123)\n}, {\n  state: 'users-and-roles',\n  weight: 400,\n  key: 'Users & roles',\n  iconClass: 'usersRoles',\n  icon: UserGroup,\n  itemClass: 'js-tutorial-welcome-step-13-selector',\n  klId: 'navigation.main.usersAndRoles',\n  isRoot: true,\n  items: [{\n    state: 'users',\n    weight: 100,\n    key: 'Users & groups',\n    itemClass: null,\n    klId: 'navigation.users-and-roles.users',\n    onClick: () => alert(123)\n  }, {\n    state: 'roles',\n    weight: 200,\n    key: 'Roles',\n    itemClass: null,\n    klId: 'navigation.users-and-roles.roles',\n    onClick: () => alert(123)\n  }]\n}, {\n  iconClass: 'marketplace',\n  icon: Store,\n  state: 'marketplace',\n  weight: 700,\n  key: 'Marketplace',\n  klId: 'navigation.monitoring.marketplace',\n  isRoot: true,\n  onClick: () => alert(123)\n}];\nconst menuUserItems: Record<string, unknown>[] = [{\n  iconClass: 'settings',\n  icon: Settings2,\n  state: 'settings',\n  weight: 100,\n  key: 'Settings',\n  klId: 'navigation.settings',\n  isRoot: true\n}, {\n  iconClass: 'user',\n  icon: UserAccount,\n  state: 'user',\n  weight: 100,\n  key: 'WIN-BTDS5ATJUI2\\\\Administrator',\n  klId: 'navigation.user',\n  isRoot: true\n}];\nexport const SiderWithMenu: StoryObj<SiderProps> = {\n  render: (args: SiderProps) => {\n    const [menuCollapsed, setMenuCollapsed] = useState(false);\n    return <RootLayout>\n        <Sider {...args} collapsed={menuCollapsed}>\n          <ServicesMenu>\n            <Hamburger className='item left' role='button' name='hamburger' onClick={() => {\n            setMenuCollapsed(!menuCollapsed);\n          }} />\n          </ServicesMenu>\n          <AppLogo />\n          <Menu menuItems={menuItems} collapsed={menuCollapsed} />\n          <UserMenu menuItems={menuUserItems} collapsed={menuCollapsed} />\n        </Sider>\n      </RootLayout>;\n  },\n  args: {\n    width: 280,\n    trigger: null,\n    collapsedWidth: 64,\n    collapsible: true\n  }\n};\nSiderWithMenu.parameters = {\n  ...SiderWithMenu.parameters,\n  docs: {\n    ...SiderWithMenu.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: SiderProps) => {\\n    const [menuCollapsed, setMenuCollapsed] = useState(false);\\n    return <RootLayout>\\n        <Sider {...args} collapsed={menuCollapsed}>\\n          <ServicesMenu>\\n            <Hamburger className='item left' role='button' name='hamburger' onClick={() => {\\n            setMenuCollapsed(!menuCollapsed);\\n          }} />\\n          </ServicesMenu>\\n          <AppLogo />\\n          <Menu menuItems={menuItems} collapsed={menuCollapsed} />\\n          <UserMenu menuItems={menuUserItems} collapsed={menuCollapsed} />\\n        </Sider>\\n      </RootLayout>;\\n  },\\n  args: {\\n    width: 280,\\n    trigger: null,\\n    collapsedWidth: 64,\\n    collapsible: true\\n  }\\n}\",\n      ...SiderWithMenu.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"sider-with-menu":{startLoc:{col:51,line:351},endLoc:{col:1,line:373},startBody:{col:51,line:351},endBody:{col:1,line:373}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const ServicesMenu=_styledComponents.default.div.withConfig({displayName:"Siderstories__ServicesMenu",componentId:"sc-t5aedu-0"})(["display:flex;margin:0 16px;color:",";font-size:14px;.ant-layout-sider-collapsed &{flex-direction:column;}.item{cursor:pointer;margin:8px;}"],_colors.colors["text-icons-elements"].primary),RootLayout=(0,_styledComponents.default)(_antd.Layout).withConfig({displayName:"Siderstories__RootLayout",componentId:"sc-t5aedu-1"})(["height:100vh;background:transparent;"]),AppLogo=()=>(0,_jsxRuntime.jsxs)(StyledAppLogo,{href:"#",className:"logo-ksc",children:[(0,_jsxRuntime.jsxs)("svg",{className:"logo-svg",width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,_jsxRuntime.jsx)("g",{"clip-path":"url(#clip0_0_4722)",children:(0,_jsxRuntime.jsxs)("g",{"clip-path":"url(#clip1_0_4722)",children:[(0,_jsxRuntime.jsx)("g",{"clip-path":"url(#clip2_0_4722)",children:(0,_jsxRuntime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M113.495 33.4495L67.4951 6.93934C65.3318 5.69261 62.6682 5.69261 60.5049 6.93934L14.5049 33.4495C12.3363 34.6993 11 37.0119 11 39.5149V88.4929C11 90.9959 12.3363 93.3085 14.5049 94.5583L60.5049 121.068C62.6682 122.315 65.3318 122.315 67.4951 121.068L113.495 94.5583C115.664 93.3085 117 90.9959 117 88.4929V39.5149C117 37.0119 115.664 34.6993 113.495 33.4495ZM70.4909 1.74043C66.4733 -0.574934 61.5267 -0.574935 57.5091 1.74043L11.5091 28.2506C7.48177 30.5716 5 34.8664 5 39.5149V88.4929C5 93.1414 7.48177 97.4362 11.5091 99.7572L57.5091 126.267C61.5267 128.583 66.4733 128.583 70.4909 126.267L116.491 99.7572C120.518 97.4362 123 93.1414 123 88.4929V39.5149C123 34.8664 120.518 30.5716 116.491 28.2506L70.4909 1.74043Z",fill:"#29CCB1"})}),(0,_jsxRuntime.jsx)("path",{d:"M45 56C43.8954 56 43 56.8954 43 58C43 59.1046 43.8954 60 45 60H47V79C47 79.5523 47.4477 80 48 80C48.5523 80 49 79.5523 49 79V60H51C52.1046 60 53 59.1046 53 58C53 56.8954 52.1046 56 51 56H45Z",fill:"white"}),(0,_jsxRuntime.jsx)("path",{d:"M81 60V57C81 56.4477 80.5523 56 80 56C79.4477 56 79 56.4477 79 57V60H77C75.8954 60 75 60.8954 75 62C75 63.1046 75.8954 64 77 64H79V79C79 79.5523 79.4477 80 80 80C80.5523 80 81 79.5523 81 79V64H83C84.1046 64 85 63.1046 85 62C85 60.8954 84.1046 60 83 60H81Z",fill:"white"}),(0,_jsxRuntime.jsx)("path",{d:"M65 57V72H67C68.1046 72 69 72.8954 69 74C69 75.1046 68.1046 76 67 76H65V79C65 79.5523 64.5523 80 64 80C63.4477 80 63 79.5523 63 79V76H61C59.8954 76 59 75.1046 59 74C59 72.8954 59.8954 72 61 72H63V57C63 56.4477 63.4477 56 64 56C64.5523 56 65 56.4477 65 57Z",fill:"white"}),(0,_jsxRuntime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30 87C30 88.6569 31.3431 90 33 90H95C96.6569 90 98 88.6569 98 87V41C98 39.3431 96.6569 38 95 38H33C31.3431 38 30 39.3431 30 41V87ZM34 50H94V86H34V50Z",fill:"white"})]})}),(0,_jsxRuntime.jsxs)("defs",{children:[(0,_jsxRuntime.jsx)("clipPath",{id:"clip0_0_4722",children:(0,_jsxRuntime.jsx)("rect",{width:"128",height:"128",fill:"white"})}),(0,_jsxRuntime.jsx)("clipPath",{id:"clip1_0_4722",children:(0,_jsxRuntime.jsx)("rect",{width:"128",height:"128",fill:"white"})}),(0,_jsxRuntime.jsx)("clipPath",{id:"clip2_0_4722",children:(0,_jsxRuntime.jsx)("rect",{width:"128",height:"128",fill:"white"})})]})]}),(0,_jsxRuntime.jsxs)("div",{className:"logo-text",children:[(0,_jsxRuntime.jsx)("div",{className:"logo-text-osmp",children:"Open Single"}),(0,_jsxRuntime.jsx)("div",{className:"logo-text-osmp",children:"Management Platform"})]})]});AppLogo.displayName="AppLogo";const StyledAppLogo=_styledComponents.default.a.withConfig({displayName:"Siderstories__StyledAppLogo",componentId:"sc-t5aedu-2"})(["min-height:64px;display:flex;margin:10px 20px 20px 20px;color:#fff;text-decoration:none;overflow:hidden;align-items:center;opacity:1;position:relative;transition:opacity 0.1s 0.15s ease;.logo-text-strong{font-size:14px;line-height:1.1;font-weight:600;}.logo-text-light{font-size:10px;line-height:1;font-weight:600;margin-top:0.2em;}.logo-text-osmp{font-size:14px;line-height:1.1;font-weight:600;margin-top:0.2em;}&:active,&:hover,&:focus{color:#fff;text-decoration:none;}.logo-svg{position:relative;top:0;width:64px;height:64px;margin:0 5px;}&.logo-ksc{.logo-path-primary{fill:var(--header-logo-ksc-primary-fill);}.logo-path-secondary{fill:var(--header-logo-ksc-secondary-fill);}}&.logo-ksc-cloud{.logo-path-border{fill:none;stroke:#00A88E;}.logo-path-icon{fill:var(--header-logo-ksc-cloud-icon-fill);}.logo-text-strong{font-size:14px;line-height:1;font-weight:600;margin:0.2em 0;}.logo-text-light{font-size:10px;line-height:1;font-weight:600;}}.ant-layout-sider-collapsed &{opacity:0;transition:opacity 0s 0s ease;width:0;height:0;overflow:hidden;position:absolute;}--header-logo-ksc-primary-fill:#1D1D1B;--header-logo-ksc-secondary-fill:#ffffff;--header-logo-ksc-cloud-icon-fill:#ffffff;--icon-kl_logo-fill-color:#00A88E;"]),menuItems=[{state:"monitoring",weight:100,key:"Monitoring & reporting",iconClass:"monitoring",icon:_.Grid,klId:"navigation.main.monitoring",isRoot:!0,items:[{state:"dashboard",weight:100,key:"Dashboard",klId:"navigation.monitoring.dashboard",onClick:()=>alert(123)},{state:"reports",weight:200,key:"Reports",klId:"navigation.monitoring.reports",onClick:()=>alert(123)},{state:"events",weight:300,key:"Event selections",klId:"navigation.selections.events",onClick:()=>alert(123)},{state:"notifications",weight:400,key:"Notifications",klId:"navigation.selections.notifications",onClick:()=>alert(123)},{state:"announcements",weight:500,key:"Kaspersky announcements",klId:"navigation.selections.announcements",onClick:()=>alert(123)}]},{state:"management",weight:200,key:"Assets (Devices)",iconClass:"assets",icon:_.Desktop,klId:"navigation.main.management",isRoot:!0,items:[{state:"policies",weight:100,key:"Policies & profiles",klId:"navigation.management.policies",groupsTree:!0,onClick:()=>alert(123)},{state:"tasks",weight:200,key:"Tasks",klId:"navigation.management.tasks",groupsTree:!0,onClick:()=>alert(123)},{state:"hosts",weight:300,key:"Managed devices",itemClass:null,klId:"navigation.management.hosts",groupsTree:!0,onClick:()=>alert(123)},{state:"distributionPoints",weight:400,key:"navigation.main.distributionPoints",itemClass:"",klId:"navigation.management.distributionPoints",groupsTree:!0,onClick:()=>alert(123)},{state:"device-relocation-rules-management",weight:500,key:"Moving rules",klId:"relocationRules.displayName",groupsTree:!0,onClick:()=>alert(123)},{state:"device-selections",weight:600,key:"Device selections",itemClass:null,klId:"navigation.selections.deviceSelections",groupsTree:!0,onClick:()=>alert(123)},{state:"all-tags",weight:700,key:"Tags",itemClass:null,klId:"navigation.operations.tags",items:[{state:"hosts-tags",weight:100,key:"Device tags",klId:"navigation.operations.tags.hostsTags",onClick:()=>alert(123)},{state:"autotagging-rules",weight:200,key:"Auto-tagging rules",klId:"navigation.operations.tags.autotaggingRules",onClick:()=>alert(123)}]},{state:"administration-groups",weight:800,key:"Hierarchy of groups",itemClass:null,klId:"navigation.management.administration-groups",onClick:()=>alert(123)}]},{state:"applicationsAndServices",weight:300,key:"Applications and Services",iconClass:"applicationsAndServices",itemClass:"",icon:_.AppUpdate,klId:"navigation.main.applicationsAndServices",items:[],isRoot:!0,onClick:()=>alert(123)},{state:"users-and-roles",weight:400,key:"Users & roles",iconClass:"usersRoles",icon:_.UserGroup,itemClass:"js-tutorial-welcome-step-13-selector",klId:"navigation.main.usersAndRoles",isRoot:!0,items:[{state:"users",weight:100,key:"Users & groups",itemClass:null,klId:"navigation.users-and-roles.users",onClick:()=>alert(123)},{state:"roles",weight:200,key:"Roles",itemClass:null,klId:"navigation.users-and-roles.roles",onClick:()=>alert(123)}]},{iconClass:"marketplace",icon:_.Store,state:"marketplace",weight:700,key:"Marketplace",klId:"navigation.monitoring.marketplace",isRoot:!0,onClick:()=>alert(123)}],menuUserItems=[{iconClass:"settings",icon:_.Settings2,state:"settings",weight:100,key:"Settings",klId:"navigation.settings",isRoot:!0},{iconClass:"user",icon:_.UserAccount,state:"user",weight:100,key:"WIN-BTDS5ATJUI2\\Administrator",klId:"navigation.user",isRoot:!0}],SiderWithMenu=exports.SiderWithMenu={render:args=>{const[menuCollapsed,setMenuCollapsed]=(0,_react.useState)(!1);return(0,_jsxRuntime.jsx)(RootLayout,{children:(0,_jsxRuntime.jsxs)(_Sider.Sider,{...args,collapsed:menuCollapsed,children:[(0,_jsxRuntime.jsx)(ServicesMenu,{children:(0,_jsxRuntime.jsx)(_Sider.Hamburger,{className:"item left",role:"button",name:"hamburger",onClick:()=>{setMenuCollapsed(!menuCollapsed)}})}),(0,_jsxRuntime.jsx)(AppLogo,{}),(0,_jsxRuntime.jsx)(_SiderMenu.Menu,{menuItems,collapsed:menuCollapsed}),(0,_jsxRuntime.jsx)(_SiderMenu.UserMenu,{menuItems:menuUserItems,collapsed:menuCollapsed})]})})},args:{width:280,trigger:null,collapsedWidth:64,collapsible:!0}};SiderWithMenu.parameters={...SiderWithMenu.parameters,docs:{...null===(_SiderWithMenu$parame=SiderWithMenu.parameters)||void 0===_SiderWithMenu$parame?void 0:_SiderWithMenu$parame.docs,source:{originalSource:"{\n  render: (args: SiderProps) => {\n    const [menuCollapsed, setMenuCollapsed] = useState(false);\n    return <RootLayout>\n        <Sider {...args} collapsed={menuCollapsed}>\n          <ServicesMenu>\n            <Hamburger className='item left' role='button' name='hamburger' onClick={() => {\n            setMenuCollapsed(!menuCollapsed);\n          }} />\n          </ServicesMenu>\n          <AppLogo />\n          <Menu menuItems={menuItems} collapsed={menuCollapsed} />\n          <UserMenu menuItems={menuUserItems} collapsed={menuCollapsed} />\n        </Sider>\n      </RootLayout>;\n  },\n  args: {\n    width: 280,\n    trigger: null,\n    collapsedWidth: 64,\n    collapsible: true\n  }\n}",...null===(_SiderWithMenu$parame2=SiderWithMenu.parameters)||void 0===_SiderWithMenu$parame2||null===(_SiderWithMenu$parame3=_SiderWithMenu$parame2.docs)||void 0===_SiderWithMenu$parame3?void 0:_SiderWithMenu$parame3.source}}};exports.__namedExportsOrder=["SiderWithMenu"]},"./src/sider/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":false,"useThemedHook":false,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"Sider","description":"В качестве основы используется Layout.Sider из библиотеки Antd.","usage":"Боковая панель, область навигации приложения.","designLink":""}')}}]);