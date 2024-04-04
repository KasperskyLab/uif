import{j as e,a as o,F as s}from"./jsx-runtime-29545a09.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function i(r){const n=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",em:"em",a:"a",h2:"h2",pre:"pre",code:"code"},t(),r.components);return o(s,{children:[e(n.h1,{id:"kasperskyicons",children:"@kaspersky/icons"}),`
`,e(n.p,{children:e(n.strong,{children:"Библиотека иконок имеет две основные реализации:"})}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:[e(n.em,{children:"со стороны Design System:"})," svg пак иконок в ",e(n.a,{href:"https://www.figma.com/file/sFYnrrW2tEOurX8rL2OCki/Icons?type=design&mode=design&t=SLAwY6QlYlkBdfPc-0",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma"}),". Обновлением иконок в Figma и поддержкой пака иконок в актуальном состоянии занимается команда дизайнеров DRO."]}),`
`,o(n.li,{children:[e(n.em,{children:"со стороны UI Kit:"})," npm пакет содержащий все иконки из дизайн системы. Поддержкой npm пакета иконок @kaspersky/icons занимается команда разработки UIF."]}),`
`,e(n.li,{children:e(n.a,{href:"https://kasperskylab.github.io/uif/icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"StoryBook"})}),`
`]}),`
`,e(n.h2,{id:"установка",children:"Установка"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`npm install @kaspersky/icons
yarn add @kaspersky/icons

\`\`\`## Важно
**Не используйте** версии паке **1.5.3** и **1.5.7**

## Использование в проекте
**Импорт из размера:**
\`\`\` js
import { AccountIdentity } from '@kaspersky/icons/24'
import { AccountIdentity, Like } from '@kaspersky/icons/24'
`})}),`
`,o(n.p,{children:[e(n.strong,{children:"Импорт обекта иконок одного размера для обращения к иконке по key крайне не желателен:"}),`
В последствии эта функция будет отключена, не используйте её, она делает невозможным treeShaking.
Вместо передачи ключа иконки через цепочку пропов, передавайте React компонент и используете его в конечной точке.`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`// ToDo: Я так делать не буду и помечу что так сделал, что бы потом поправили
import Icons24 from '@kaspersky/icons/24'
`})}),`
`,e(n.p,{children:e(n.strong,{children:"Пример использования всех вышепредставленных импортов:"})}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:'`<AccountIdentity />`\n`<AccountIdentity color="red" />`\n`<AccountIdentity data-testid="test-icon" />`\n`<Icons24.AccountIdentity" />`\n'})})]})}function h(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e(n,Object.assign({},r,{children:e(i,r)})):i(r)}export{h as default};
//# sourceMappingURL=Documentation-5922e96b.js.map
