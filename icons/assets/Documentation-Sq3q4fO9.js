import{j as n}from"./jsx-runtime-Xd4z3NZ5.js";import{useMDXComponents as o}from"./index-D3o9IPAT.js";import"./index-ChG7qhfk.js";function i(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"kasperskyhexa-ui-icons",children:"@kaspersky/hexa-ui-icons"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Библиотека иконок имеет две основные реализации:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"со стороны Design System:"})," svg пак иконок в ",n.jsx(e.a,{href:"https://pixso.net/app/design/OMHorA_MCv1V-96GDDwD7Q?icon_type=1&page-id=0%3A1",rel:"nofollow",children:"Pixso"}),". Обновлением иконок в Figma и поддержкой пака иконок в актуальном состоянии занимается команда дизайнеров DRO."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"со стороны UI Kit:"})," npm пакет, содержащий все иконки из дизайн системы. Поддержкой npm пакета иконок @kaspersky/hexa-ui-icons занимается команда разработки UIF."]}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://storybook.s1.ksc-web.avp.ru/icons/",rel:"nofollow",children:"StoryBook"})}),`
`]}),`
`,n.jsx(e.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`npm install @kaspersky/hexa-ui-icons
yarn add @kaspersky/hexa-ui-icons

\`\`\`## Важно
**Не используйте** версии пакета **1.5.3** и **1.5.7**

## Использование в проекте
**Импорт из размера:**
\`\`\` js
import { AccountIdentity } from '@kaspersky/hexa-ui-icons/24'
import { AccountIdentity, Like } from '@kaspersky/hexa-ui-icons/24'
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Импорт объекта иконок одного размера для обращения к иконке по key крайне нежелателен:"}),`
Впоследствии эта функция будет отключена, не используйте её, она делает невозможным treeShaking.
Вместо передачи ключа иконки через цепочку пропов, передавайте React компонент и используете его в конечной точке.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// ToDo: Я так делать не буду и помечу, что так сделал, чтобы потом поправили
import Icons24 from '@kaspersky/hexa-ui-icons/24'
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Пример использования всех вышепредставленных импортов:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:'`<AccountIdentity />`\n`<AccountIdentity color="red" />`\n`<AccountIdentity data-testid="test-icon" />`\n`<Icons24.AccountIdentity" />`\n'})})]})}function a(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
