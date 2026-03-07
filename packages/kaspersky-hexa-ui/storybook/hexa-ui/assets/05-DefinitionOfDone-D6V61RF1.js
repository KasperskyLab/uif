import{j as n}from"./jsx-runtime-CxPCTGSc.js";import{useMDXComponents as r}from"./index-lKYyQ2c7.js";import{M as l}from"./blocks-71x0kO9t.js";import"./iframe-zz6a49H8.js";import"./preload-helper-C1FmrZbK.js";function s(e){const i={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Docs/Definition of done"}),`
`,n.jsx(i.h1,{id:"definition-of-done",children:"Definition of done"}),`
`,n.jsx(i.p,{children:`При работе с компонентами (создание/правки) рекомендуется добавить в описание Pull Request'а чек-лист с критериями законченности и корректности вносимых изменений.
Так называемый Definition Of Done.`}),`
`,n.jsx(i.p,{children:`Отметить галочками каждый пункт и удостовериться, что при разработке ничего не забыто.
Список не строгий и нужен исключительно для самоконтроля.`}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"создание-компонента",children:"Создание компонента:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[x] Создана story с примерами использования компонента"}),`
`,n.jsx(i.li,{children:"[x] Примеры использования достаточно наглядны и всесторонни"}),`
`,n.jsx(i.li,{children:"[x] Поддержана темная тема и добавлен ее пример в story"}),`
`,n.jsx(i.li,{children:"[x] Компонент реэкспортирован в глобальном index файле"}),`
`,n.jsx(i.li,{children:"[x] Поддержаны HTML-аттрибуты для тестирования (если нужны) и возможность их определения извне (через props)"}),`
`,n.jsx(i.li,{children:"[x] Текстовые элементы (если есть) не захардкожены и есть возможность их определения извне (через props)"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"добавление-функциональности-к-существующему-компоненту",children:"Добавление функциональности к существующему компоненту:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[x] Добавлены примеры использования в story"}),`
`,n.jsx(i.li,{children:"[x] Все предыдущие story этого компонента проверены и работают корректно"}),`
`,n.jsx(i.li,{children:"[x] Темная тема работает корректно, в том числе для нового функционала"}),`
`,n.jsx(i.li,{children:"[x] Поддержаны HTML-аттрибуты для тестирования (если нужны) и возможность их определения извне (через props)"}),`
`,n.jsx(i.li,{children:"[x] Текстовые элементы (если есть) не захардкожены и есть возможность их определения извне (через props)"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"исправлениеизменение-функциональности-существующего-компонента",children:"Исправление/изменение функциональности существующего компонента:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[x] Все story этого компонента проверены и работают корректно"}),`
`,n.jsx(i.li,{children:"[x] Темная тема работает корректно"}),`
`]}),`
`,n.jsx(i.h3,{id:"разработка-документации",children:"Разработка документации"}),`
`,n.jsxs(i.p,{children:["Docs каждого компонента должен быть обернут с помощью hoс ",n.jsx(i.code,{children:"WithMeta"}),", который в свою очередь обогащает документацию мета-информацией."]})]})}function c(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{c as default};
