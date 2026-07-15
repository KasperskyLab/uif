import{j as e,M as o}from"./blocks-yA_hxWl_.js";import{useMDXComponents as d}from"./index-CUlJxhH5.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-4-PRSI1I.js";function s(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Работа с тестовыми атрибутами (testId, klId, useTestAttribute)"}),`
`,e.jsx(t.h1,{id:"использование-тестовых-атрибутов-для-тестов",children:"Использование тестовых атрибутов для тестов"}),`
`,e.jsxs(t.p,{children:[`Почти каждый компонент дизайна имеет возможность задать тестовые атрибуты.
Для задания тестового атрибута используйте проп `,e.jsx(t.code,{children:"testId"})]}),`
`,e.jsx(t.h1,{id:"добавление-тестовых-атрибутов-в-компоненты-в-рамках-разработки-пакета",children:"Добавление тестовых атрибутов в компоненты в рамках разработки пакета"}),`
`,e.jsxs(t.p,{children:["По соглашению рекомендовано использовать только ",e.jsx(t.code,{children:"testId"})," при добавлении тестовых атрибутов. Для добавления тестовых атрибутов на родительский компонент необходимо использовать хук ",e.jsx(t.code,{children:"useTestAttribute"}),`.
Для дочерних элементов рекомендуется использовать `,e.jsx(t.code,{children:"testId"})," в случае использования компонента или ",e.jsx(t.code,{children:"data-testid"}),` для использования на html элементах.
Тестовые атрибуты для внутренностей компонентов стоит именовать следующим образом:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:"// for hexa components\ntestId=`${testId}-postfix`\n// or for html elements\ndata-testid=`${testId}-postfix`\n"})})]})}function h(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
