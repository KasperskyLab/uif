import{j as e}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as r}from"./index-slK-RSG-.js";import{M as l}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Конфигурирование THEME_CONFIG"}),`
`,e.jsx(n.h1,{id:"theme_config",children:"THEME_CONFIG"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Перед чтением рекомендуется ознакомиться с разделом ",e.jsx(n.a,{href:"?path=/docs/docs-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2--docs",children:"Типизация компонентов"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"THEME_CONFIG"}),` является главным хранилищем информации о дизайн-системе, в частности, о цветах и размерах всех компонентов.
К нему обращается хук `,e.jsx(n.code,{children:"useThemeComponent"})," и достает оттуда необходимые компоненту значения (подробнее об этом позже)."]}),`
`,e.jsx(n.h2,{id:"типизация",children:"Типизация"}),`
`,e.jsxs(n.p,{children:["Выглядит ",e.jsx(n.code,{children:"THEME_CONFIG"})," так:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/theme/themes/config.ts

export const THEME_CONFIG = {
  [ThemeKey.Light]: LIGHT_THEME,
  [ThemeKey.Dark]: DARK_THEME
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"LIGHT_THEME"})," и ",e.jsx(n.code,{children:"DARK_THEME"})," обладают одинаковой структурой, которая задается типом ",e.jsx(n.code,{children:"ThemeConfig"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/types/Theme.ts

export type ThemeConfig = {
  readonly key: ThemeKey,
  readonly colors: typeof colors,
  readonly shapes: {
    readonly borderRadius: typeof BORDER_RADIUS
  },
  readonly spaces: typeof SPACES,
  readonly components: {
    readonly button: { ... },
    readonly checkbox: { ... },
    ...
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Нас интересует поле ",e.jsx(n.code,{children:"components"}),`, ключами которого являются названия компонентов. Представим себе абстрактный
несуществующий компонент `,e.jsx(n.code,{children:"Flower"}),". Тогда тип будет выглядеть так:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/types/Theme.ts

readonly flower: {
  colors: Record<FlowerMode, FlowerColorConfig>,
  sizes: Record<FlowerSize, FlowerSizeConfig>
}
`})}),`
`,e.jsxs(n.p,{children:["Если у компонента нет цветового мода, то ",e.jsx(n.code,{children:"colors: FlowerColorConfig"}),`. Если у компонента нет разных размеров
(small, medium etc.), значит у него не должно быть SizeConfig, а все размеры должны проставляться внутри
`,e.jsx(n.code,{children:"flowerCss.ts"}),`.
Эту запись можно упростить до эквивалентной:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/types/Theme.ts

readonly flower: ComponentConfig<
  Record<FlowerMode, FlowerColorConfig>,
  Record<FlowerSize, FlowerSizeConfig>
>
`})}),`
`,e.jsxs(n.p,{children:["Для примера возьмем ",e.jsx(n.code,{children:"LIGHT_THEME"}),", для ",e.jsx(n.code,{children:"DARK_THEME"})," все будет аналогично. ",e.jsx(n.code,{children:"LIGHT_THEME"})," имеет тип ",e.jsx(n.code,{children:"ThemeConfig"}),`,
описанный выше, а конфигурируется в `,e.jsx(n.code,{children:"/design-system/theme/themes/light/index.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/theme/themes/light/index.ts

import { ThemeKey, ThemeConfig } from '@design-system/types'
import { COMMON_THEME } from '../common-theme'
import { colors } from './colors'
...
import { flower, flowerSize /* если есть */) } from './flower'
...

export const LIGHT_THEME: ThemeConfig = {
  ...COMMON_THEME,
  key: ThemeKey.Light,
  colors,
  components: {
    flower: {
      colors: flower({ colors, effects }),
      sizes: flowerSize /* если есть */
    },
    ...
  }
}
`})}),`
`,e.jsx(n.h2,{id:"конфигурация-lightflowerts",children:"Конфигурация light/flower.ts"}),`
`,e.jsxs(n.p,{children:["У компонента ",e.jsx(n.code,{children:"Flower"})," должен быть файл в директории ",e.jsx(n.code,{children:"/design-system/theme/themes/light/"})," с названием ",e.jsx(n.code,{children:"flower.ts"}),`,
в котором и определяется использованная выше функция `,e.jsx(n.code,{children:"flower"}),`, в которые попадут цвета светлой темы, а также объект
`,e.jsx(n.code,{children:"flowerSize"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/theme/themes/light/flower.ts

export const flower = ({ colors, effects }: ComponentThemeContext): Record<FlowerMode, FlowerColorConfig> => ({
  primary: {
    color: colors.textIconsElements.secondary2
  },
  secondary: {
    color: colors.textIconsElements['secondary2-invert']
  }
})

export const FlowerSize: Record<FlowerSize, FlowerSizeConfig> = {
  small: {
    width: '8px',
    height: '8px',
    gap: '2px',
    ...getTextSizes(TextTypes.BTR4)
  },
  medium: {
    width: '16px',
    height: '16px',
    gap: '4px',
    ...getTextSizes(TextTypes.BTR3)
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Функция ",e.jsx(n.code,{children:"flower"}),` принимает в себя цвета из палитры, где для каждого токена есть вариант для темной и светлой темы.
Соответственно в `,e.jsx(n.code,{children:"/design-system/theme/themes/light/flower.ts"}),` попадут цвета для светлой темы.
Возвращает функция объект, у которого при наличии цветового мода полями являются названия модов, при отсутствии -
сами свойства (пример в компоненте checkbox). У `,e.jsx(n.code,{children:"flowerSize"}),` так же полями являются названия размеров. Если размеров нет,
то и все сайзинги должны быть вынесены в `,e.jsx(n.code,{children:"flowerCss.ts"}),"."]}),`
`,e.jsxs(n.p,{children:["Теперь посмотрим на ",e.jsx(n.code,{children:"dark/flower.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/design-system/theme/themes/dark/flower.ts

import { flower as defaultFlower, flowerSize as defaultFlowerSize } from '../light/flower'

export const flower = ({ colors, effects }: ComponentThemeContext): Record<FlowerMode, FlowerColorConfig> => defaultFlower({ colors, effects })

export const FlowerSize = defaultFlowerSize
`})}),`
`,e.jsxs(n.p,{children:["В идеале ",e.jsx(n.code,{children:"dark/flower.ts"})," файлы должны выглядеть так. Тут мы просто пользуемся функцией ",e.jsx(n.code,{children:"flower"}),` из светлой темы,
так как в идеале токены (названия цветов), должны совпадать в темной и светлой теме. Сюда из
`,e.jsx(n.code,{children:"/design-system/theme/themes/dark/flower.ts"}),` попадут цвета для темной темы, а затем просто пробросятся в функцию
в светлой теме. Сайзинги же от темы не зависят, поэтому просто дублируем то, что есть в
`,e.jsx(n.code,{children:"/design-system/theme/themes/light/flower.ts"}),"."]}),`
`,e.jsxs(n.p,{children:["На выходе в ",e.jsx(n.code,{children:"THEME_CONFIG.light.components.flower"})," мы получим объект следующего содержания:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`THEME_CONFIG.light.components.flower

{
  colors: {
    default: {
      color: "#2a3541b3"
    },
    inverted: {
      color: "#e7eef7a8"
    }
  },
  sizes: {
    medium: {
      fontFamily: "\\"Kaspersky Sans Text\\", \\"Kaspersky Sans\\", Arial, sans-serif"
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      gap: "4px",
      height: "16px",
      letterSpacing: "0px",
      lineHeight: "24px",
      width: "16px"
    },
    small: { ... },
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Что в дальнейшем будет использовано в ",e.jsx(n.code,{children:"useThemedFlower"})," хуке для получения ",e.jsx(n.code,{children:"cssConfig"})," для компонента."]})]})}function x(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{x as default};
