import{j as n}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as t}from"./index-slK-RSG-.js";import{M as c}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function s(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Docs/Архитектура компонентов"}),`
`,n.jsx(e.h1,{id:"архитектура-компонентов",children:"Архитектура компонентов"}),`
`,n.jsx(e.p,{children:"Все компоненты состоят из несколько структурных частей:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Component"})," + ",n.jsx(e.code,{children:"Component View"})," + ",n.jsx(e.code,{children:"CSS config"})," + ",n.jsx(e.code,{children:"Themed Hook"})," + ",n.jsx(e.code,{children:"Hooks"})," = ",n.jsx(e.code,{children:"Component"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Component"})," - точка входа в компонент. Как минимум, использует ",n.jsx(e.code,{children:"Themed Hook"})," и ",n.jsx(e.code,{children:"Component View"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Component View"})," является основой компонента, содержит минимальное необходимо количество логики. Для стилизации оборачивает используемый компонент в ",n.jsx(e.code,{children:"styled-components"}),", который использует ",n.jsx(e.code,{children:"componentCss"}),`.
Должен быть полностью функционирующем компонентом.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"componentCss"})," - CSS стили компонента. Использует ",n.jsx(e.code,{children:"CSS config"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CSS config"}),` – конфигурация стилей компонента, которая включает в себя необходимые цвета, размеры и типографику для элементов.
Возвращает данные в виде объекта, позволяя легко переопределить одну или несколько переменных при необходимости.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Themed Hook"})," - темизация компонента, создание объекта конфигурации стилей компонента - ",n.jsx(e.code,{children:"CSS config"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Hooks"}),` – внутренняя логика компонента. Содержит в себе логику, которая не является “жизненно необходимой” для компонента.
Позволяет переопределять логику работы компонента конечным пользователям.`]}),`
`,n.jsxs(e.p,{children:["Подробнее об архитектуре компонентов можно узнать ",n.jsx(e.a,{href:"https://kaspersky-my.sharepoint.com/:v:/p/pavel_vostrikov/EdIYBlGtfTpCttvSxcHORokBMrujZ0yDqD6q3Aztp9RV6g?isSPOFile=1",rel:"nofollow",children:"тут"}),"."]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`src
└───button
    │   index.ts
    │   Button.tsx          -> содержит компоненты Button и ButtonView
    │   buttonCss.ts        -> содержит стили buttonCss
    │   types.ts            -> содержит типы для компонента (в том числе для пропов)
    │   useThemedButton.ts  -> темизация компонента   
    │   Button.stories.tsx  -> "стори" для сторибука
    └───__tests__
    │       Button.test.tsx -> модульные тесты
    └───__meta__
            meta.json       -> описание компонента для отображения в сторибуке
`})})]})}function l(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{l as default};
