"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[7674],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/scrollbar/component/Scrollbar.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WithRef=exports.Vertical=exports.Horizontal=exports.Both=void 0;var _Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_Horizontal$parameter,_Horizontal$parameter2,_Horizontal$parameter3,_Both$parameters,_Both$parameters2,_Both$parameters2$doc,_WithRef$parameters,_WithRef$parameters2,_WithRef$parameters2$,_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_badges=__webpack_require__("./.storybook/badges.ts"),_theme=__webpack_require__("./design-system/theme/index.ts"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_button=__webpack_require__("./src/button/index.ts"),_meta=_interopRequireDefault(__webpack_require__("./src/scrollbar/__meta__/meta.json")),_Scrollbar=__webpack_require__("./src/scrollbar/component/Scrollbar.tsx"),_common=__webpack_require__("./src/scrollbar/common.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const meta={title:"Atoms/Scrollbar/Component",component:_Scrollbar.Scrollbar,argTypes:{autoHide:{description:"Will the scrollbars be hidden when the element is not active"},...(0,_storybookHelpers.sbHideControls)(["theme"])},args:{autoHide:!1},parameters:{storySource:{source:"import React, { useRef } from 'react';\nimport styled from 'styled-components';\nimport Scrollbars from 'react-custom-scrollbars-2';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport { useTheme } from '@design-system/theme';\nimport { ThemeKey } from '@design-system/types';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { Button } from '@src/button';\nimport MetaData from '../__meta__/meta.json';\nimport { Scrollbar } from './Scrollbar';\nimport { ScrollbarProps } from './types';\nimport { content, wrapperCss } from '../common';\nconst meta: Meta = {\n  title: 'Atoms/Scrollbar/Component',\n  component: Scrollbar,\n  argTypes: {\n    autoHide: {\n      description: 'Will the scrollbars be hidden when the element is not active'\n    },\n    ...sbHideControls(['theme'])\n  },\n  args: {\n    autoHide: false\n  },\n  parameters: {\n    badges: [badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    },\n    design: MetaData.figmaView\n  }\n};\nexport default meta;\nconst VerticalWrapper = styled.div<{\n  theme: ThemeKey;\n}>`\n  ${wrapperCss}\n`;\nconst HorizontalWrapper = styled.div<{\n  theme: ThemeKey;\n}>`\n  p { width: 800px; }\n  ${wrapperCss}\n`;\nconst Wrapper = styled.div<{\n  theme: ThemeKey;\n}>`\n  p { width: 600px; }\n  ${wrapperCss}\n`;\nexport const Vertical: StoryObj<ScrollbarProps> = {\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <VerticalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </VerticalWrapper>;\n  }\n};\nexport const Horizontal: StoryObj<ScrollbarProps> = {\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <HorizontalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </HorizontalWrapper>;\n  }\n};\nexport const Both: StoryObj<ScrollbarProps> = {\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <Wrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </Wrapper>;\n  }\n};\nexport const WithRef: StoryObj<ScrollbarProps> = {\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    const ref = useRef<Scrollbars | null>(null);\n    const scrollToBottom = () => {\n      ref.current?.scrollToBottom();\n    };\n    const scrollToTop = () => {\n      ref.current?.scrollToTop();\n    };\n    return <VerticalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key} ref={ref}>\n          <Button onClick={scrollToBottom}>Scroll to bottom</Button>\n          <p>{content}</p>\n          <Button onClick={scrollToTop}>Scroll to top</Button>\n        </Scrollbar>\n      </VerticalWrapper>;\n  }\n};\nVertical.parameters = {\n  ...Vertical.parameters,\n  docs: {\n    ...Vertical.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: ScrollbarProps) => {\\n    const theme = useTheme();\\n    return <VerticalWrapper theme={theme.key}>\\n        <Scrollbar {...args} theme={theme.key}>\\n          <p>{content}</p>\\n        </Scrollbar>\\n      </VerticalWrapper>;\\n  }\\n}\",\n      ...Vertical.parameters?.docs?.source\n    }\n  }\n};\nHorizontal.parameters = {\n  ...Horizontal.parameters,\n  docs: {\n    ...Horizontal.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: ScrollbarProps) => {\\n    const theme = useTheme();\\n    return <HorizontalWrapper theme={theme.key}>\\n        <Scrollbar {...args} theme={theme.key}>\\n          <p>{content}</p>\\n        </Scrollbar>\\n      </HorizontalWrapper>;\\n  }\\n}\",\n      ...Horizontal.parameters?.docs?.source\n    }\n  }\n};\nBoth.parameters = {\n  ...Both.parameters,\n  docs: {\n    ...Both.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: ScrollbarProps) => {\\n    const theme = useTheme();\\n    return <Wrapper theme={theme.key}>\\n        <Scrollbar {...args} theme={theme.key}>\\n          <p>{content}</p>\\n        </Scrollbar>\\n      </Wrapper>;\\n  }\\n}\",\n      ...Both.parameters?.docs?.source\n    }\n  }\n};\nWithRef.parameters = {\n  ...WithRef.parameters,\n  docs: {\n    ...WithRef.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: ScrollbarProps) => {\\n    const theme = useTheme();\\n    const ref = useRef<Scrollbars | null>(null);\\n    const scrollToBottom = () => {\\n      ref.current?.scrollToBottom();\\n    };\\n    const scrollToTop = () => {\\n      ref.current?.scrollToTop();\\n    };\\n    return <VerticalWrapper theme={theme.key}>\\n        <Scrollbar {...args} theme={theme.key} ref={ref}>\\n          <Button onClick={scrollToBottom}>Scroll to bottom</Button>\\n          <p>{content}</p>\\n          <Button onClick={scrollToTop}>Scroll to top</Button>\\n        </Scrollbar>\\n      </VerticalWrapper>;\\n  }\\n}\",\n      ...WithRef.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{vertical:{startLoc:{col:50,line:53},endLoc:{col:1,line:62},startBody:{col:50,line:53},endBody:{col:1,line:62}},horizontal:{startLoc:{col:52,line:63},endLoc:{col:1,line:72},startBody:{col:52,line:63},endBody:{col:1,line:72}},both:{startLoc:{col:46,line:73},endLoc:{col:1,line:82},startBody:{col:46,line:73},endBody:{col:1,line:82}},"with-ref":{startLoc:{col:49,line:83},endLoc:{col:1,line:101},startBody:{col:49,line:83},endBody:{col:1,line:101}}}},badges:[_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)},design:_meta.default.figmaView}};exports.default=meta;const VerticalWrapper=_styledComponents.default.div.withConfig({displayName:"Scrollbarstories__VerticalWrapper",componentId:"sc-1fwev9b-0"})(["",""],_common.wrapperCss),HorizontalWrapper=_styledComponents.default.div.withConfig({displayName:"Scrollbarstories__HorizontalWrapper",componentId:"sc-1fwev9b-1"})(["p{width:800px;}",""],_common.wrapperCss),Wrapper=_styledComponents.default.div.withConfig({displayName:"Scrollbarstories__Wrapper",componentId:"sc-1fwev9b-2"})(["p{width:600px;}",""],_common.wrapperCss),Vertical=exports.Vertical={render:args=>{const theme=(0,_theme.useTheme)();return(0,_jsxRuntime.jsx)(VerticalWrapper,{theme:theme.key,children:(0,_jsxRuntime.jsx)(_Scrollbar.Scrollbar,{...args,theme:theme.key,children:(0,_jsxRuntime.jsx)("p",{children:_common.content})})})}},Horizontal=exports.Horizontal={render:args=>{const theme=(0,_theme.useTheme)();return(0,_jsxRuntime.jsx)(HorizontalWrapper,{theme:theme.key,children:(0,_jsxRuntime.jsx)(_Scrollbar.Scrollbar,{...args,theme:theme.key,children:(0,_jsxRuntime.jsx)("p",{children:_common.content})})})}},Both=exports.Both={render:args=>{const theme=(0,_theme.useTheme)();return(0,_jsxRuntime.jsx)(Wrapper,{theme:theme.key,children:(0,_jsxRuntime.jsx)(_Scrollbar.Scrollbar,{...args,theme:theme.key,children:(0,_jsxRuntime.jsx)("p",{children:_common.content})})})}},WithRef=exports.WithRef={render:args=>{const theme=(0,_theme.useTheme)(),ref=(0,_react.useRef)(null);return(0,_jsxRuntime.jsx)(VerticalWrapper,{theme:theme.key,children:(0,_jsxRuntime.jsxs)(_Scrollbar.Scrollbar,{...args,theme:theme.key,ref,children:[(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{var _ref$current;null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.scrollToBottom()},children:"Scroll to bottom"}),(0,_jsxRuntime.jsx)("p",{children:_common.content}),(0,_jsxRuntime.jsx)(_button.Button,{onClick:()=>{var _ref$current2;null===(_ref$current2=ref.current)||void 0===_ref$current2||_ref$current2.scrollToTop()},children:"Scroll to top"})]})})}};Vertical.parameters={...Vertical.parameters,docs:{...null===(_Vertical$parameters=Vertical.parameters)||void 0===_Vertical$parameters?void 0:_Vertical$parameters.docs,source:{originalSource:"{\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <VerticalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </VerticalWrapper>;\n  }\n}",...null===(_Vertical$parameters2=Vertical.parameters)||void 0===_Vertical$parameters2||null===(_Vertical$parameters3=_Vertical$parameters2.docs)||void 0===_Vertical$parameters3?void 0:_Vertical$parameters3.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...null===(_Horizontal$parameter=Horizontal.parameters)||void 0===_Horizontal$parameter?void 0:_Horizontal$parameter.docs,source:{originalSource:"{\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <HorizontalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </HorizontalWrapper>;\n  }\n}",...null===(_Horizontal$parameter2=Horizontal.parameters)||void 0===_Horizontal$parameter2||null===(_Horizontal$parameter3=_Horizontal$parameter2.docs)||void 0===_Horizontal$parameter3?void 0:_Horizontal$parameter3.source}}},Both.parameters={...Both.parameters,docs:{...null===(_Both$parameters=Both.parameters)||void 0===_Both$parameters?void 0:_Both$parameters.docs,source:{originalSource:"{\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    return <Wrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key}>\n          <p>{content}</p>\n        </Scrollbar>\n      </Wrapper>;\n  }\n}",...null===(_Both$parameters2=Both.parameters)||void 0===_Both$parameters2||null===(_Both$parameters2$doc=_Both$parameters2.docs)||void 0===_Both$parameters2$doc?void 0:_Both$parameters2$doc.source}}},WithRef.parameters={...WithRef.parameters,docs:{...null===(_WithRef$parameters=WithRef.parameters)||void 0===_WithRef$parameters?void 0:_WithRef$parameters.docs,source:{originalSource:"{\n  render: (args: ScrollbarProps) => {\n    const theme = useTheme();\n    const ref = useRef<Scrollbars | null>(null);\n    const scrollToBottom = () => {\n      ref.current?.scrollToBottom();\n    };\n    const scrollToTop = () => {\n      ref.current?.scrollToTop();\n    };\n    return <VerticalWrapper theme={theme.key}>\n        <Scrollbar {...args} theme={theme.key} ref={ref}>\n          <Button onClick={scrollToBottom}>Scroll to bottom</Button>\n          <p>{content}</p>\n          <Button onClick={scrollToTop}>Scroll to top</Button>\n        </Scrollbar>\n      </VerticalWrapper>;\n  }\n}",...null===(_WithRef$parameters2=WithRef.parameters)||void 0===_WithRef$parameters2||null===(_WithRef$parameters2$=_WithRef$parameters2.docs)||void 0===_WithRef$parameters2$?void 0:_WithRef$parameters2$.source}}};exports.__namedExportsOrder=["Vertical","Horizontal","Both","WithRef"]},"./src/scrollbar/common.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.wrapperCss=exports.content=void 0;var _styledComponents=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");exports.content="\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi justo, interdum ut cursus ac,\nimperdiet non enim. Ut ultrices quis purus in accumsan. Duis nec velit eu odio scelerisque gravida nec in velit.\nEtiam id cursus mi, sed porttitor felis. Proin cursus lacus erat, vel congue arcu viverra ut.\nPhasellus ornare nisl sodales dui pretium, et sagittis ex feugiat.\nVivamus sollicitudin molestie tortor ac pretium.\nSuspendisse lectus purus, tincidunt congue purus nec, bibendum efficitur odio.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi justo, interdum ut cursus ac,\nimperdiet non enim. Ut ultrices quis purus in accumsan. Duis nec velit eu odio scelerisque gravida nec in velit.\nEtiam id cursus mi, sed porttitor felis. Proin cursus lacus erat, vel congue arcu viverra ut.\nPhasellus ornare nisl sodales dui pretium, et sagittis ex feugiat.\nVivamus sollicitudin molestie tortor ac pretium.\nSuspendisse lectus purus, tincidunt congue purus nec, bibendum efficitur odio.\n",exports.wrapperCss=(0,_styledComponents.css)(["height:200px;width:400px;p{margin:0;}",""],(_ref=>{let{theme}=_ref;return"light"===theme?"color: black; background: white;":"color: white; background: #1D1C28;"}))},"./src/scrollbar/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":false,"screenshotTests":false,"migration":true,"apiTable":true,"storybook":true,"designLink":true,"figmaView":true},"component":"Scrollbar","description":"Компонент Scrollbar представляет собой полосу прокрутки. Scrollbar предназначен для просмотра содержимого, размеры которого превышают размеры контейнера, в который это содержимое размещено.","usage":"Компонент реализован в двух видах: как стилизация браузерного скроллбара (следует импортировать переменную scrollbarCss) и как React компонент.","designLink":"https://www.figma.com/file/7TGvGlgGfTltMG1OBgLq8p/00-%5BB2B%5D-Hexa-UI-Kit?node-id=1072%3A87122&mode=dev","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9hiN2DbkqbxbhR9EWRI1VK%2F01-%255BB2B%255D-Hexa-UI-Components%3Ftype%3Ddesign%26node-id%3D57127%253A221741%26mode%3Ddev"}')}}]);