"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[7149],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./docs/GetStarted.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>GetStarted_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");const READMEraw_namespaceObject="# How to start using @kaspersky/components\n\n1. Initialize the project with `React`, `Typescript`, `less` and `antd@4.18` in the way you want. You can simply use:\n\n    ```bash\n    npm create vite my-project-name -- --template react-ts\n    cd my-project-name\n    npm install react@17 react-dom@17 @kaspersky/icons @kaspersky/components\n    npm install -D @types/react@17 @types/react-dom@17 less antd@4.18\n    ```\n\n2. Add this to `vite.config.ts` for correct `less` work:\n\n    ```typescript\n    css: {\n      preprocessorOptions: {\n        less: {\n          math: \"always\",\n          relativeUrls: true,\n          javascriptEnabled: true\n        },\n      },\n    }\n    ```\n\n3. Add important `antd` css imports in root CSS file (index.css in that case):\n    \n    ```css\n    @import \"antd/lib/style/themes/default.less\";\n    @import \"antd/dist/antd.less\";\n    ```\n\n4. Define initial rendering in main.tsx:\n\n    ```typescript\n    import React from 'react'\n    import ReactDOM from 'react-dom'\n    import App from './App.tsx'\n    import './index.css'\n\n    const container = document.getElementById('root')!\n\n    ReactDOM.render(\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>,\n      container\n    )\n    ```\n\n5. Wrap your root layout component (for ex.: App.tsx) by the `ConfigProvider`, add `GlobalStyles` and `Notification` service:\n\n    ```typescript\n    import { useState } from 'react'\n\n    import { ConfigProvider } from '@kaspersky/components/design-system/context/provider'\n    import { GlobalStyle } from '@kaspersky/components/design-system/global-style'\n    import { ThemeKey } from '@kaspersky/components/design-system'\n    import { LangVariants } from '@kaspersky/components/helpers/localization/types'\n\n    import { Notification, H1 } from '@kaspersky/components'\n\n    function App() {\n      const [themeKey] = useState<ThemeKey>(ThemeKey.Light)\n      \n      return (\n        <ConfigProvider theme={themeKey} locale={LangVariants.EnUs}>\n          <GlobalStyle />\n          <Notification/>\n          <H1>Hi there! I am using @kaspersky/components!</H1>\n        </ConfigProvider>\n      )\n    }\n\n    export default App\n    ```\n\n6. Run with `npm run dev`\n";var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({blockquote:"blockquote",p:"p",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Docs/Установка и инициализация"}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The full code is placed here ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/KasperskyLab/uif/tree/master/examples/quick-start",target:"_blank",rel:"nofollow noopener noreferrer",children:"examples/quick-start"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The Demo App — ",(0,jsx_runtime.jsx)(_components.a,{href:"https://kasperskylab.github.io/uif/examples/quick-start/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://kasperskylab.github.io/uif/examples/quick-start/"})]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Установка и инициализация",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const GetStarted_stories=componentMeta}}]);