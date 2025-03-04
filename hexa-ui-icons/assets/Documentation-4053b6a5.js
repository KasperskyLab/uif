import{j as e,a as i,F as s}from"./jsx-runtime-29545a09.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function t(r){const n=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",em:"em",a:"a",h2:"h2",pre:"pre",code:"code"},o(),r.components);return i(s,{children:[e(n.h1,{id:"kasperskyhexa-ui-icons",children:"@kaspersky/hexa-ui-icons"}),`
`,e(n.p,{children:e(n.strong,{children:"Библиотека иконок имеет две основные реализации:"})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.em,{children:"со стороны Design System:"})," svg пак иконок в ",e(n.a,{href:"https://www.figma.com/file/sFYnrrW2tEOurX8rL2OCki/Icons?type=design&mode=design&t=SLAwY6QlYlkBdfPc-0",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma"}),". Обновлением иконок в Figma и поддержкой пака иконок в актуальном состоянии занимается команда дизайнеров DRO."]}),`
`,i(n.li,{children:[e(n.em,{children:"со стороны UI Kit:"})," npm пакет, содержащий все иконки из дизайн системы. Поддержкой npm пакета иконок @kaspersky/hexa-ui-icons занимается команда разработки UIF."]}),`
`,e(n.li,{children:e(n.a,{href:"https://kasperskylab.github.io/uif/icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"StoryBook"})}),`
`]}),`
`,e(n.h2,{id:"установка",children:"Установка"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`npm install @kaspersky/hexa-ui-icons
yarn add @kaspersky/hexa-ui-icons

\`\`\`## Важно
**Не используйте** версии пакета **1.5.3** и **1.5.7**

## Использование в проекте
**Импорт из размера:**
\`\`\` js
import { AccountIdentity } from '@kaspersky/hexa-ui-icons/24'
import { AccountIdentity, Like } from '@kaspersky/hexa-ui-icons/24'
`})}),`
`,i(n.p,{children:[e(n.strong,{children:"Импорт объекта иконок одного размера для обращения к иконке по key крайне нежелателен:"}),`
Впоследствии эта функция будет отключена, не используйте её, она делает невозможным treeShaking.
Вместо передачи ключа иконки через цепочку пропов, передавайте React компонент и используете его в конечной точке.`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import Icons24 from '@kaspersky/hexa-ui-icons/24'
`})}),`
`,e(n.p,{children:e(n.strong,{children:"Пример использования всех вышепредставленных импортов:"})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:'`<AccountIdentity />`\n`<AccountIdentity color="red" />`\n`<AccountIdentity data-testid="test-icon" />`\n`<Icons24.AccountIdentity" />`\n'})})]})}function h(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}export{h as default};
//# sourceMappingURL=Documentation-4053b6a5.js.map
