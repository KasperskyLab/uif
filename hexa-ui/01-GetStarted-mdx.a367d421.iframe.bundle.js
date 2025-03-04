"use strict";(self.webpackChunk_kaspersky_hexa_ui=self.webpackChunk_kaspersky_hexa_ui||[]).push([[6538],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./docs/01-GetStarted.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_uif_uif_packages_kaspersky_hexa_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_uif_uif_packages_kaspersky_hexa_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Docs/Установка и инициализация"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"установка-и-инициализация",children:"Установка и инициализация"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"установка-пакета",children:"Установка пакета"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"npm i @kaspersky/hexa-ui\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Или если вы используете yarn:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"yarn add @kaspersky/hexa-ui\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"добавление-глобальных-стилей",children:"Добавление глобальных стилей"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"// provide theme color to css vars\nimport { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'\n\n// provide base css\nimport '@kaspersky/hexa-ui/design-system/global-style/styles.css'\n\n// App Root\nconst AppRoot = () => (\n  <>\n    <GlobalStyle />\n    <Layout />\n  </>\n)\n\nReactDOM.render(<AppRoot />, document.getElementById('app'))\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"импорт-компонента",children:"Импорт компонента"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import React from 'react'\n\nimport { Button } from '@kaspersky/hexa-ui'\n\nconst Layout = () => {\n  return (\n    <Button\n      text='Click me!'\n      mode='secondary'\n      size='large'\n    />\n  )\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"providers",children:"Providers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"themeprovider",children:"ThemeProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["ThemeProvider принимает проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," и позволяет в дальнейшем взаимодействовать с темами приложения."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import React, { useState } from 'react'\n\nimport { Button } from '@kaspersky/hexa-ui'\n\nimport { ThemeProvider } from '@kaspersky/hexa-ui/design-system/theme'\nimport { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'\n\nconst Layout = () => {\n  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.light)\n\n  return (\n    <ThemeProvider theme={theme}>\n      <Button\n        text='Click me!'\n        mode='secondary'\n        size='large'\n      />\n    </ThemeProvider>\n  )\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"localizationprovider",children:"LocalizationProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["LocalizationProvider принимает проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"locale"})," (язык) и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"i18n"})," (объект i18n). Позволяет в дальнейшем взаимодействовать с\nсистемой локализационных ключей."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import React, { useState } from 'react'\n\nimport { Button } from '@kaspersky/hexa-ui'\n\nimport { ThemeProvider } from '@kaspersky/hexa-ui/design-system/theme'\nimport { LocalizationProvider } from '@kaspersky/hexa-ui/design-system/context'\nimport i18n from '@kaspersky/hexa-ui/helpers/localization/i18n'\n\nimport { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'\nimport { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'\n\nconst Layout = () => {\n  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.light)\n  const [locale, setLocale] = useState<LangType>('en-us')\n\n  return (\n    <LocalizationProvider locale={locale} i18n={i18n}>\n      <ThemeProvider theme={theme}>\n        <Button\n          text='Click me!'\n          mode='secondary'\n          size='large'\n        />\n      </ThemeProvider>\n    </LocalizationProvider>\n  )\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"configprovider",children:"ConfigProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["ConfigProvider является интеграцией ThemeProvider и LocalizationProvider.\nВ качестве пропов принимает ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"locale"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import React, { useState, useCallback, useEffect } from 'react'\n\nimport { Button } from '@kaspersky/hexa-ui'\n\nimport { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context'\n\nimport { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'\nimport { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'\n\nconst Layout = () => {\n  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)\n  const [locale, setLocale] = useState<LangType>('en-us')\n\n  return (\n    <ConfigProvider theme={theme} locale={locale}>\n      <Button\n        text='Click me!'\n        mode='secondary'\n        size='large'\n      />\n    </ConfigProvider>\n  )\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"переключение-темы-и-локализации",children:"Переключение темы и локализации"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"import React, { useState, useCallback, useEffect } from 'react'\n\nimport { Button } from '@kaspersky/hexa-ui'\n\nimport { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context'\n\nimport { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'\nimport { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'\n\nconst Layout = () => {\n  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)\n  const [locale, setLocale] = useState<LangType>('en-us')\n\n  const setLight = useCallback(() => setTheme('light'), [])\n  const setDark = useCallback(() => setTheme('dark'), [])\n  const setEn = useCallback(() => setLocale('en-us'), [])\n  const setRu = useCallback(() => setLocale('ru-ru'), [])\n\n  return (\n    <ConfigProvider theme={theme} locale={locale}>\n      <Button text='Set light' onClick={setLight} />\n      <Button text='Set dark' onClick={setDark} />\n      <Button text='Set en' onClick={setEn} />\n      <Button text='Set ru' onClick={setRu} />\n    </ConfigProvider>\n  )\n}\n"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_uif_uif_packages_kaspersky_hexa_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);