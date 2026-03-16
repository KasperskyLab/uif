import{j as t}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as o}from"./index-slK-RSG-.js";import{M as d}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function s(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Docs/Работа с тестовыми атрибутами (testId, klId, useTestAttribute)"}),`
`,t.jsx(e.h1,{id:"использование-тестовых-атрибутов-для-тестов",children:"Использование тестовых атрибутов для тестов"}),`
`,t.jsxs(e.p,{children:[`Почти каждый компонент дизайна имеет возможность задать тестовые атрибуты.
Для задания тестового атрибута используйте проп `,t.jsx(e.code,{children:"testId"})]}),`
`,t.jsx(e.h1,{id:"добавление-тестовых-атрибутов-в-компоненты-в-рамках-разработки-пакета",children:"Добавление тестовых атрибутов в компоненты в рамках разработки пакета"}),`
`,t.jsxs(e.p,{children:["По соглашению рекомендовано использовать только ",t.jsx(e.code,{children:"testId"})," при добавлении тестовых атрибутов. Для добавления тестовых атрибутов на родительский компонент необходимо использовать хук ",t.jsx(e.code,{children:"useTestAttribute"}),`.
Для дочерних элементов рекомендуется использовать `,t.jsx(e.code,{children:"testId"})," в случае использования компонента или ",t.jsx(e.code,{children:"data-testid"}),` для использования на html элементах.
Тестовые атрибуты для внутренностей компонентов стоит именовать следующим образом:`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{children:"// for hexa components\ntestId=`${testId}-postfix`\n// or for html elements\ndata-testid=`${testId}-postfix`\n"})})]})}function l(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{l as default};
