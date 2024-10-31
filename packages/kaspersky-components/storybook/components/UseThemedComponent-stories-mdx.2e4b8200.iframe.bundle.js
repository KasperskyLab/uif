"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[6310],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./docs/UseThemedComponent.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_vostrik_Documents_projects_github_uif_ssh_uif_packages_kaspersky_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",ol:"ol",li:"li",h4:"h4",h5:"h5"},(0,_Users_vostrik_Documents_projects_github_uif_ssh_uif_packages_kaspersky_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Docs/Использование useThemedComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usethemedcomponent",children:"useThemedComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Это хук, преобразующий пропы компонента на входе в пропы для ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"View"})," части компонента. Чаще всего это означает, что во\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"View"})," часть компонента не попадут пропы ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," (последние два - если они вообще есть в компоненте),\nи попадёт проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"cssConfig"}),", полученный на основе глобального объекта ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"THEME_CONFIG"}),"\n(",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/docs-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-theme-config--docs",children:"подробнее"}),") и пропов из ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ComponentThemeProps"}),"\n(",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/docs-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2--docs",children:"подробнее"}),")."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Существует универсальный хук ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/helpers/useThemedComponent.tsx"}),', служащий "конструктором" для хуков ',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemed"})," для\nкаждого отдельного компонента. Давайте разберёмся в его использовании."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"0-шаблон",children:"0. Шаблон"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Пусть у нас есть абстрактный несуществующий компонент с названием ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flower"}),". В дальнейшем, если вы используете эту доку\nкак инструкцию к написанию компонента, то во всех местах можно подставить вместо ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flower"})," свой ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ComponentName"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Так выглядит шаблон для компонента:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/useThemedFlower.ts\n\nimport { useThemedComponent } from '@helpers/useThemedComponent'\n\nexport const useThemedFlower = (props: ):  => (\n  useThemedComponent<, , >(props, {\n    componentName: '',\n    defaultValues: {}\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"В дальнейших шагах мы будем постепенно его заполнять."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"1-типизация",children:"1. Типизация"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Этот шаг нужен, чтобы хук смог проверить валидность введённых вами данных. Все будет отлично работать, если все\nиспользуемые типы были написаны в соответствии с разделом ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/docs-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2--docs",children:"Типизация компонентов"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/useThemedFlower.ts\n\nimport { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'\nimport { useThemedComponent } from '@helpers/useThemedComponent'\n\nexport const useThemedFlower = (props: FlowerProps): FlowerViewProps => (\n  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {\n    componentName: 'flower',\n    defaultValues: {}\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Разберём аргументы дженерика в порядке их следования"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Тип пропов компонента - ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerProps"}),". Обязан в себя включать ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerThemeProps"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Тип ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"cssConfig"}),"-а"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Тип пропов компонента для темезации. Может иметь только ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," пропы. Что делать, если вдруг пропы\nназываются не ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," или не ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),", но выполняют их функцию, будет описано дальше."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"2-componentname",children:"2. componentName"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Это ключ, по которому можно дотянуться до стилей данного компонента в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"THEME_CONFIG"}),". Для простоты понимания:\nкак называется компонент в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"design-system/theme/themes/light/index.ts"})," и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"design-system/theme/themes/dark/index.ts"}),",\nтаким и будет значение у ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"componentName"}),". Хук настроен подсказывать вам название компонента, так что вряд ли ошибётесь.\nВ нашем случае это ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'flower'"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/useThemedFlower.ts\n\nimport { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'\nimport { useThemedComponent } from '@helpers/useThemedComponent'\n\nexport const useThemedFlower = (props: FlowerProps): FlowerViewProps => (\n  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {\n    componentName: 'flower',\n    defaultValues: {}\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Если у компонента ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flower"})," нет ни цветового мода, ни сайзингов - поздравляю! ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemedFlower.ts"})," готов."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"3-defaultvalues",children:"3. defaultValues"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Если же во ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerThemeProps"})," появляются либо ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"}),", либо ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),", либо всё вместе, то хук обязывает в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"defaultValues"}),"\nуказать значения по умолчанию. Они выставляются в случае, если в пропы компонента мы не передали ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," или ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"}),"\n(или и то, и то). Допустим:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/types.ts\n\nimport { Size, Theme } from '@design-system/types'\n\nexport type FlowerMode = 'primary' | 'secondary'\nexport type FlowerSize = `${Extract<Size, 'small' | 'medium'}`\n\n...\n\nexport type FlowerThemeProps = {\n  theme?: Theme,\n  size?: FlowerSize,\n  mode?: FlowerMode\n}\n\nexport type FlowerProps = {\n  prop1: string,\n  ...\n  propN: string\n} & FlowerThemeProps\n\n...\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Тогда ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemedFlower.ts"})," будет выглядеть так:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/useThemedFlower.ts\n\nimport { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'\nimport { useThemedComponent } from '@helpers/useThemedComponent'\n\nexport const useThemedFlower = (props: FlowerProps): FlowerViewProps => (\n  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {\n    componentName: 'flower',\n    defaultValues: { mode: 'primary', size: 'small' }\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Хук подскажет, если вы написали не ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size: small"}),", а ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size: samll"}),", - он ориентируется на тип ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerSize"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["По умолчанию, пропы ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerThemeProps"})," не должны попадать в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerView"})," часть компонента, поэтому хук вернёт объект\nпропов, где ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," и ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," выставлено значение ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"undefined"})," (что равно их отсутствию)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"4-propstodrill",children:"4. propsToDrill"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Иногда возникает ситуация, когда ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," или ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," все таки нужны во ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"View"})," части компонента. Тогда можно использовать\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"propsToDrill"}),", ожидающий в качестве значения массив из ключей типа ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerThemeProps"}),". Запись ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"propsToDrill: ['size']"}),"\nозначает, что если в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemedFlower"})," пришло ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size: 'medium'"}),", то вернёт он тоже пропы с ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size: 'medium'"}),", а не\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size: undefined"}),", как происходит по умолчанию."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Предварительно в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"src/flower/types.ts"})," стоит исключить проп из ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerThemeProps"})," внутри ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowerViewProps"}),".\nИными словами:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/types.ts\n\nimport { ToViewProps } from '@helpers/typesHelpers'\n...\n/* Это: */\nexport type FlowerViewProps = ToViewProps<FlowerProps, FlowerCssConfig, FlowerThemeProps>\n/* превращается в это: */\nexport type FlowerViewProps = ToViewProps<FlowerProps, FlowerCssConfig, Omit<FlowerThemeProps, 'size'>>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["После того как мы поработали с типами, можно выставлять ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"propsToDrill"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/flower/useThemedFlower.ts\n\nimport { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'\nimport { useThemedComponent } from '@helpers/useThemedComponent'\n\nexport const useThemedFlower = (props: FlowerProps): FlowerViewProps => (\n  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {\n    componentName: 'flower',\n    defaultValues: { mode: 'primary', size: 'small' },\n    propsToDrill: ['size']\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"5-нетипичные-ситуации",children:"5. Нетипичные ситуации"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Не всё в нашем программистском мире можно стандартизировать. Однако уже есть протоптанные дорожки в лесе нетипичных\nситуаций."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4,{id:"51-проп-mode-или-size-не-относятся-к-компоненту-напрямую-однако-нужны-для-используемых-внутри-компонентов",children:["5.1 Проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," или ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," не относятся к компоненту напрямую, однако нужны для используемых внутри компонентов"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Такой пример можно увидеть в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/atoms-checkbox--basic",children:"Checkbox"}),". ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," никак не влияет на цвета самого\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Checkbox"}),", однако нужен для используемого внутри него ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FormLabel"})," компонента. Допустим, мы выставили ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode: 'primary'"})," в\nсветлой теме. Хук не умеет понимать, к ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Checkbox"})," или к ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FormLabel"})," относится проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"}),", поэтому он пытается\nдостучаться до ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"THEME_CONFIG.light.components.checkbox.colors.primary"}),". А у ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"checkbox.colors"})," нет поля ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"primary"}),", что\nприводит к ошибке (такой баг уже реально был)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Есть два варианта решения проблемы:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h5,{id:"511-предпочтительный-но-труднореализуемый",children:"5.1.1 Предпочтительный, но труднореализуемый"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Лучше всего было бы вынести относящиеся к ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FormLabel"})," пропы в отдельный проп:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/checkbox/types.ts\n\n...\nexport const CheckboxProps = {\n  ...\n  formLabel: {\n    mode?: FormLabelMode,\n    required?: boolean,\n    ...\n  },\n  ...\n} & CheckboxThemeProps\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Также можно переименовать ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," в ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"formLabelMode"}),", однако первый вариант выглядит более логичным и структурированным.\nТрудность заключается в том, чтобы по пути не потерять обратную совместимость."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h5,{id:"512-костыльный-но-простой",children:"5.1.2 Костыльный, но простой"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Можно принудительно поставить ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode: undefined"})," в первом аргументе для ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemedProps"}),", как будто пропа ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," и нет:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/checkbox/useThemedCheckbox.ts\n\nexport const useThemedCheckbox = <Props, >(props: Props): CheckboxToViewProps<Props> => (\n  useThemedComponent<Props, CheckboxCssConfig, CheckboxThemeProps>({ ...props, mode: undefined }, {\n    componentName: 'checkbox',\n    defaultValues: {}\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["А в самом компоненте пробросить ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," напрямую во ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"View"}),' часть из "сырых" пропов:']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"...\nexport const Checkbox: FC<CheckboxProps> = (rawProps: CheckboxProps) => {\n  const props = useThemedCheckbox(rawProps)\n  return <CheckboxView role='checkbox' {...props} mode={rawProps.mode} />\n}\n...\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4,{id:"52-проп-называется-не-mode-или-size-но-выполняет-функцию-mode-или-size",children:["5.2 Проп называется не ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," или ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),", но выполняет функцию ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mode"})," или ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["В ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Accordion.Panel"})," есть проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"titleSize"}),", который целиком выполняет функцию ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),". В идеале нужно поступить как в\n5.1.1, однако на практике получается по другому. В таком случае мы вытаскиваем ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"titleSize"})," из приходящих к нам в\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useThemedAccordionPanel"})," пропов и прокидываем в хук проп ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),". И пришлось еще немного с типизацией повозиться:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"/src/accordion/useThemedAccordion.ts\n\n...\ntype ToThemeProps<T> = Omit<T, 'titleSize'> & { size?: AccordionTitleSize }\n\nexport const useThemedAccordionPanel = ({\n  titleSize,\n  ...rest\n}: IAccordionPanelProps): AccordionPanelViewProps => (\n  useThemedComponent<\n    ToThemeProps<IAccordionPanelProps>,\n    AccordionPanelCssConfig,\n    ToThemeProps<AccordionPanelThemeProps>\n  >({ ...rest, size: titleSize }, {\n    componentName: 'accordion',\n    defaultValues: { size: 'small' }\n  })\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"53-будет-дополняться",children:"5.3 Будет дополняться"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Использование useThemedComponent",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_vostrik_Documents_projects_github_uif_ssh_uif_packages_kaspersky_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);