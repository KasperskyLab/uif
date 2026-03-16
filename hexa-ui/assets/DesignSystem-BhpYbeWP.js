import{j as n}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as c}from"./index-slK-RSG-.js";import{M as r}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Design/Design System"}),`
`,n.jsx(e.h1,{id:"дизайн-система",children:"Дизайн Система"}),`
`,n.jsxs(e.p,{children:["Описание подходов в использовании дизайн системы. Ресурсы находятся по пути ",n.jsx(e.code,{children:"design-system/"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pixso.net/app/share/p/FogVT5SQ2OTg8BmWySHASt7hO1oB2d_d",rel:"nofollow",children:"Ссылка на дизайн систему в Pixso"})}),`
`,n.jsx(e.h2,{id:"ссылки",children:"Ссылки"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/design-colors--docs",children:"Colors"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/docs/design-sizing-spacing--docs",children:"Sizing & Spaces"})}),`
`]}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Цветовая палитра импортируется из пакета ",n.jsx(e.code,{children:"@kaspersky/hexa-ui-core"}),"."]}),`
`,n.jsxs(e.li,{children:["Для каждой темы, на основании токенов, необходимо создать файл c псевдонимами (aliases). Например, ",n.jsx(e.code,{children:"themes/light/colors.ts"}),"."]}),`
`,n.jsxs(e.li,{children:["Если компонент изпользует цветовую палитру для него необходимо создать отдельный файл в папке ",n.jsx(e.code,{children:"themes/"})," для каждой темы. Например, ",n.jsx(e.code,{children:"themes/light/button.ts"})]}),`
`,n.jsx(e.li,{children:"Для стилизации компонента создаются объекты с цветами и размерами (если необходимо). Если у компонента несколько состояний (например, enabled, active, hover), то объект имеет вид:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`const component = {
  enabled: {
    ...
  },
  active: {
    ...
  },
  hover: {
    ...
  }
}
`})}),`
`,n.jsx(e.h3,{id:"структура",children:"Структура"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"themes/*theme*/colors.ts"})," - aliases"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"themes/*theme*/*component*"})," - токены компонентов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"themes/light"})," - базовая тема, остальные расширяют базовую"]}),`
`]}),`
`,n.jsx(e.h3,{id:"использование",children:"Использование"}),`
`,n.jsxs(e.p,{children:["Для стилизации компонента используются ",n.jsx(e.strong,{children:"только токены компонента"}),"."]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Необходимо создать файл токенов компонента для каждой темы."}),`
`,n.jsxs(e.li,{children:["Использовать токены компонента в ",n.jsx(e.code,{children:"Themed Hook"})," для построения ",n.jsx(e.code,{children:"CSS config"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Component View"})," прокидывает ",n.jsx(e.code,{children:"CSS config"})," в стилизованные ",n.jsx(e.code,{children:"styled-components"})," компоненты."]}),`
`,n.jsxs(e.li,{children:["Использовать ",n.jsx(e.code,{children:"CSS config"})," для построения ",n.jsx(e.code,{children:"componentCss"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"использование-цветов-в-продукте",children:"Использование цветов в продукте"}),`
`,n.jsx(e.p,{children:"Для раскрашивания элементов в продукте есть 2 способа:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Предпочтительный"})," - использование css-переменных. Например, если на макете используется цвет ",n.jsx(e.strong,{children:"status/icon/critical"}),", то в коде его можно вытащить через переменную ",n.jsx(e.strong,{children:"var(--status--icon--critical)"}),"."]}),`
`,n.jsxs(e.li,{children:["Использование нужного токена цвета через прямой импорт из библиотеки ",n.jsx(e.code,{children:"@kaspersky/hexa-ui-core"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { componentColors } from '@kaspersky/hexa-ui-core'

const statusColor = componentColors.status.icon.critical
`})})]})}function x(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
