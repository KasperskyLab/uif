import{j as e}from"./jsx-runtime-CxPCTGSc.js";import{useMDXComponents as r}from"./index-lKYyQ2c7.js";import{M as o}from"./blocks-71x0kO9t.js";import"./iframe-zz6a49H8.js";import"./preload-helper-C1FmrZbK.js";function i(s){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Шаблон документации компонентов"}),`
`,e.jsx(n.h1,{id:"шаблон-документации-компонентов",children:"Шаблон документации компонентов"}),`
`,e.jsx(n.h3,{id:"документация-компонента-должна-состоять-из-следующих-пунктов",children:"Документация компонента должна состоять из следующих пунктов:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Список ",e.jsx(n.code,{children:"Defenition of Done"}),", добавленный с помощью hoс ",e.jsx(n.code,{children:"WithMeta"}),":"]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"designTokens"})," - использованы ли дизайн-токены,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useThemedHook"})," - использован ли хук для темизации,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"unitTests"})," - написаны ли юнит-тесты,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"screenshotTests"})," - написаны ли скриншот-тесты,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"migration"})," - описана ли миграция с другой библиотеки компонентов,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"apiTable"})," - добавлена ли таблица с описанием интерфейса компонента,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"storybook"})," - есть ли ",e.jsx(n.code,{children:"stories"})," с основными видами использования компонента,"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pixsoView"})," - добавлена ли документация из pixso"]}),`
`]}),`
`]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Название компонента, назначение с техническими особенностями, ссылка на дизайн и ссылка на ",e.jsx(n.code,{children:"Pixso View"}),`.
В описание следует указать, был ли взят за основу компонент из `,e.jsx(n.strong,{children:"antd"})," или был использован нативный элемент."]}),`
`]}),`
`,e.jsx(n.h4,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`{
  "dod": {
    "designTokens": true,
    "useThemedHook": true,
    "unitTests": true,
    "screenshotTests": false,
    "migration": true,
    "apiTable": true,
    "storybook": true,
    "pixsoView": true
  },
  "component": "Button",
  "description": "Компонент для отрисовки кнопок. В качестве основы используется AntdButton из библиотеки Antd.",
  "usage": "Элемент, при нажатии на который происходит какое-то действие",
  "designLink": "https://example-link",
  "pixsoView": "https://example-link"
}
`})}),`
`,e.jsxs(n.p,{children:["Также необходимо добавить ",e.jsx(n.code,{children:"badge"}),"-ы:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stable"}),": The component is used in real projects, no major known issues"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"deprecated"}),": The component is no longer supported"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"missingDesign"}),": The component doesn't have layout page in pixso"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reviewedByDesign"}),": The component is reviewed by design team and no further actions are required"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"needsDesignReview"}),": The component is implemented, but needs to be reviewed by design team"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"dev"}),": It is neseccary to demonstrate some dev features, no need in design sync"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"notProdReady"}),": This is experimental feature, not ready to use in production"]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"пример-1",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`...
import { withMeta } from '@helpers/hooks/MetaComponent/withMeta'
import { Alert } from './Alert'
import { AlertProps } from './types'
import { AlertDocs } from './docs'
import Meta from './meta.json'

export default {
  title: 'Hexa UI Components/Alert',
  component: Alert,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}
...
`})})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
