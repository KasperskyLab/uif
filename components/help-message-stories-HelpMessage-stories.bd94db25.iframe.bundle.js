"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[9643],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/help-message/stories/HelpMessage.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.Basic=exports.AllModes=void 0;var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_AllModes$parameters,_AllModes$parameters2,_AllModes$parameters3,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_HelpMessage=__webpack_require__("./src/help-message/HelpMessage.tsx"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./src/help-message/__meta__/meta.json")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const meta={title:"Atoms/HelpMessage",component:_HelpMessage.HelpMessage,argTypes:{...(0,_storybookHelpers.sbHideControls)(["theme"])},args:{text:"some text",testId:"help-message-test-id",klId:"help-message-kl-id"},parameters:{storySource:{source:"import React from 'react';\nimport { badges } from '@sb/badges';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { HelpMessage } from '../HelpMessage';\nimport { HelpMessageProps } from '../types';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport MetaData from '../__meta__/meta.json';\nconst meta: Meta<HelpMessageProps> = {\n  title: 'Atoms/HelpMessage',\n  component: HelpMessage,\n  argTypes: {\n    ...sbHideControls(['theme'])\n  },\n  args: {\n    text: 'some text',\n    testId: 'help-message-test-id',\n    klId: 'help-message-kl-id'\n  },\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    },\n    design: MetaData.figmaView\n  }\n};\nexport default meta;\ntype Story = StoryObj<HelpMessageProps>;\nexport const Basic: Story = {};\nexport const AllModes: Story = {\n  render: (args: HelpMessageProps) => <>\n      {['error', 'warning', 'success', 'common'].map(mode => <HelpMessage {...args} key={mode} mode={(mode as HelpMessageProps['mode'])} />)}\n    </>\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nAllModes.parameters = {\n  ...AllModes.parameters,\n  docs: {\n    ...AllModes.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: HelpMessageProps) => <>\\n      {['error', 'warning', 'success', 'common'].map(mode => <HelpMessage {...args} key={mode} mode={(mode as HelpMessageProps['mode'])} />)}\\n    </>\\n}\",\n      ...AllModes.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:30},endLoc:{col:30,line:30},startBody:{col:28,line:30},endBody:{col:30,line:30}},"all-modes":{startLoc:{col:31,line:31},endLoc:{col:1,line:35},startBody:{col:31,line:31},endBody:{col:1,line:35}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)},design:_meta.default.figmaView}};exports.default=meta;const Basic=exports.Basic={},AllModes=exports.AllModes={render:args=>(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:["error","warning","success","common"].map((mode=>(0,_react.createElement)(_HelpMessage.HelpMessage,{...args,key:mode,mode})))})};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},AllModes.parameters={...AllModes.parameters,docs:{...null===(_AllModes$parameters=AllModes.parameters)||void 0===_AllModes$parameters?void 0:_AllModes$parameters.docs,source:{originalSource:"{\n  render: (args: HelpMessageProps) => <>\n      {['error', 'warning', 'success', 'common'].map(mode => <HelpMessage {...args} key={mode} mode={(mode as HelpMessageProps['mode'])} />)}\n    </>\n}",...null===(_AllModes$parameters2=AllModes.parameters)||void 0===_AllModes$parameters2||null===(_AllModes$parameters3=_AllModes$parameters2.docs)||void 0===_AllModes$parameters3?void 0:_AllModes$parameters3.source}}};exports.__namedExportsOrder=["Basic","AllModes"]},"./src/help-message/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":true,"storybook":true,"figmaView":true},"component":"Help message","description":"Текст дополняющий различные поля ввода дополнительной информацией. Например валидационный текст","usage":"Вывод текстового значения или состояния UI-элементов","designLink":"https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/01-%5BB2B%5D-Hexa-UI-Components?type=design&node-id=38476%3A139817&mode=dev","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9hiN2DbkqbxbhR9EWRI1VK%2F01-%255BB2B%255D-Hexa-UI-Components%3Ftype%3Ddesign%26node-id%3D38476%253A139817%26mode%3Ddev"}')}}]);