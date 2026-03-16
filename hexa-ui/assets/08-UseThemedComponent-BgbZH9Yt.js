import{j as e}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as r}from"./index-slK-RSG-.js";import{M as d}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Docs/Использование useThemedComponent"}),`
`,e.jsx(o.h1,{id:"usethemedcomponent",children:"useThemedComponent"}),`
`,e.jsxs(o.p,{children:["Это хук, преобразующий пропы компонента на входе в пропы для ",e.jsx(o.code,{children:"View"}),` части компонента. Чаще всего это означает, что во
`,e.jsx(o.code,{children:"View"})," часть компонента не попадут пропы ",e.jsx(o.code,{children:"theme"}),", ",e.jsx(o.code,{children:"mode"})," и ",e.jsx(o.code,{children:"size"}),` (последние два - если они вообще есть в компоненте),
и попадёт проп `,e.jsx(o.code,{children:"cssConfig"}),", полученный на основе глобального объекта ",e.jsx(o.code,{children:"THEME_CONFIG"}),`
(`,e.jsx(o.a,{href:"?path=/docs/docs-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-theme-config--docs",children:"подробнее"}),") и пропов из ",e.jsx(o.code,{children:"ComponentThemeProps"}),`
(`,e.jsx(o.a,{href:"?path=/docs/docs-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2--docs",children:"подробнее"}),")."]}),`
`,e.jsxs(o.p,{children:["Существует универсальный хук ",e.jsx(o.code,{children:"/helpers/useThemedComponent.tsx"}),', служащий "конструктором" для хуков ',e.jsx(o.code,{children:"useThemed"}),` для
каждого отдельного компонента. Давайте разберёмся в его использовании.`]}),`
`,e.jsx(o.h2,{id:"0-шаблон",children:"0. Шаблон"}),`
`,e.jsxs(o.p,{children:["Пусть у нас есть абстрактный несуществующий компонент с названием ",e.jsx(o.code,{children:"Flower"}),`. В дальнейшем, если вы используете эту доку
как инструкцию к написанию компонента, то во всех местах можно подставить вместо `,e.jsx(o.code,{children:"Flower"})," свой ",e.jsx(o.code,{children:"ComponentName"}),"."]}),`
`,e.jsx(o.p,{children:"Так выглядит шаблон для компонента:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/useThemedFlower.ts

import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFlower = (props: ):  => (
  useThemedComponent<, , >(props, {
    componentName: '',
    defaultValues: {}
  })
)
`})}),`
`,e.jsx(o.p,{children:"В дальнейших шагах мы будем постепенно его заполнять."}),`
`,e.jsx(o.h2,{id:"1-типизация",children:"1. Типизация"}),`
`,e.jsxs(o.p,{children:[`Этот шаг нужен, чтобы хук смог проверить валидность введённых вами данных. Все будет отлично работать, если все
используемые типы были написаны в соответствии с разделом `,e.jsx(o.a,{href:"?path=/docs/docs-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2--docs",children:"Типизация компонентов"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/useThemedFlower.ts

import { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFlower = (props: FlowerProps): FlowerViewProps => (
  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {
    componentName: 'flower',
    defaultValues: {}
  })
)
`})}),`
`,e.jsx(o.p,{children:"Разберём аргументы дженерика в порядке их следования"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:["Тип пропов компонента - ",e.jsx(o.code,{children:"FlowerProps"}),". Обязан в себя включать ",e.jsx(o.code,{children:"FlowerThemeProps"})]}),`
`,e.jsxs(o.li,{children:["Тип ",e.jsx(o.code,{children:"cssConfig"}),"-а"]}),`
`,e.jsxs(o.li,{children:["Тип пропов компонента для темезации. Может иметь только ",e.jsx(o.code,{children:"size"}),", ",e.jsx(o.code,{children:"mode"})," и ",e.jsx(o.code,{children:"theme"}),` пропы. Что делать, если вдруг пропы
называются не `,e.jsx(o.code,{children:"mode"})," или не ",e.jsx(o.code,{children:"size"}),", но выполняют их функцию, будет описано дальше."]}),`
`]}),`
`,e.jsx(o.h2,{id:"2-componentname",children:"2. componentName"}),`
`,e.jsxs(o.p,{children:["Это ключ, по которому можно дотянуться до стилей данного компонента в ",e.jsx(o.code,{children:"THEME_CONFIG"}),`. Для простоты понимания:
как называется компонент в `,e.jsx(o.code,{children:"design-system/theme/themes/light/index.ts"})," и ",e.jsx(o.code,{children:"design-system/theme/themes/dark/index.ts"}),`,
таким и будет значение у `,e.jsx(o.code,{children:"componentName"}),`. Хук настроен подсказывать вам название компонента, так что вряд ли ошибётесь.
В нашем случае это `,e.jsx(o.code,{children:"'flower'"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/useThemedFlower.ts

import { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFlower = (props: FlowerProps): FlowerViewProps => (
  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {
    componentName: 'flower',
    defaultValues: {}
  })
)
`})}),`
`,e.jsxs(o.p,{children:["Если у компонента ",e.jsx(o.code,{children:"Flower"})," нет ни цветового мода, ни сайзингов - поздравляю! ",e.jsx(o.code,{children:"useThemedFlower.ts"})," готов."]}),`
`,e.jsx(o.h2,{id:"3-defaultvalues",children:"3. defaultValues"}),`
`,e.jsxs(o.p,{children:["Если же во ",e.jsx(o.code,{children:"FlowerThemeProps"})," появляются либо ",e.jsx(o.code,{children:"mode"}),", либо ",e.jsx(o.code,{children:"size"}),", либо всё вместе, то хук обязывает в ",e.jsx(o.code,{children:"defaultValues"}),`
указать значения по умолчанию. Они выставляются в случае, если в пропы компонента мы не передали `,e.jsx(o.code,{children:"size"})," или ",e.jsx(o.code,{children:"mode"}),`
(или и то, и то). Допустим:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

import { Size, Theme } from '@design-system/types'

export type FlowerMode = 'primary' | 'secondary'
export type FlowerSize = \`\${Extract<Size, 'small' | 'medium'}\`

...

export type FlowerThemeProps = {
  theme?: Theme,
  size?: FlowerSize,
  mode?: FlowerMode
}

export type FlowerProps = {
  prop1: string,
  ...
  propN: string
} & FlowerThemeProps

...
`})}),`
`,e.jsxs(o.p,{children:["Тогда ",e.jsx(o.code,{children:"useThemedFlower.ts"})," будет выглядеть так:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/useThemedFlower.ts

import { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFlower = (props: FlowerProps): FlowerViewProps => (
  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {
    componentName: 'flower',
    defaultValues: { mode: 'primary', size: 'small' }
  })
)
`})}),`
`,e.jsxs(o.p,{children:["Хук подскажет, если вы написали не ",e.jsx(o.code,{children:"size: small"}),", а ",e.jsx(o.code,{children:"size: samll"}),", - он ориентируется на тип ",e.jsx(o.code,{children:"FlowerSize"}),"."]}),`
`,e.jsxs(o.p,{children:["По умолчанию, пропы ",e.jsx(o.code,{children:"FlowerThemeProps"})," не должны попадать в ",e.jsx(o.code,{children:"FlowerView"}),` часть компонента, поэтому хук вернёт объект
пропов, где `,e.jsx(o.code,{children:"theme"}),", ",e.jsx(o.code,{children:"mode"})," и ",e.jsx(o.code,{children:"size"})," выставлено значение ",e.jsx(o.code,{children:"undefined"})," (что равно их отсутствию)."]}),`
`,e.jsx(o.h2,{id:"4-propstodrill",children:"4. propsToDrill"}),`
`,e.jsxs(o.p,{children:["Иногда возникает ситуация, когда ",e.jsx(o.code,{children:"theme"}),", ",e.jsx(o.code,{children:"mode"})," или ",e.jsx(o.code,{children:"size"})," все таки нужны во ",e.jsx(o.code,{children:"View"}),` части компонента. Тогда можно использовать
`,e.jsx(o.code,{children:"propsToDrill"}),", ожидающий в качестве значения массив из ключей типа ",e.jsx(o.code,{children:"FlowerThemeProps"}),". Запись ",e.jsx(o.code,{children:"propsToDrill: ['size']"}),`
означает, что если в `,e.jsx(o.code,{children:"useThemedFlower"})," пришло ",e.jsx(o.code,{children:"size: 'medium'"}),", то вернёт он тоже пропы с ",e.jsx(o.code,{children:"size: 'medium'"}),`, а не
`,e.jsx(o.code,{children:"size: undefined"}),", как происходит по умолчанию."]}),`
`,e.jsxs(o.p,{children:["Предварительно в ",e.jsx(o.code,{children:"src/flower/types.ts"})," стоит исключить проп из ",e.jsx(o.code,{children:"FlowerThemeProps"})," внутри ",e.jsx(o.code,{children:"FlowerViewProps"}),`.
Иными словами:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

import { ToViewProps } from '@helpers/typesHelpers'
...
/* Это: */
export type FlowerViewProps = ToViewProps<FlowerProps, FlowerCssConfig, FlowerThemeProps>
/* превращается в это: */
export type FlowerViewProps = ToViewProps<FlowerProps, FlowerCssConfig, Omit<FlowerThemeProps, 'size'>>
`})}),`
`,e.jsxs(o.p,{children:["После того как мы поработали с типами, можно выставлять ",e.jsx(o.code,{children:"propsToDrill"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/useThemedFlower.ts

import { FlowerProps, FlowerViewProps, FlowerCssConfig, FlowerThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFlower = (props: FlowerProps): FlowerViewProps => (
  useThemedComponent<FlowerProps, FlowerCssConfig, FlowerThemeProps>(props, {
    componentName: 'flower',
    defaultValues: { mode: 'primary', size: 'small' },
    propsToDrill: ['size']
  })
)
`})}),`
`,e.jsx(o.h2,{id:"5-нетипичные-ситуации",children:"5. Нетипичные ситуации"}),`
`,e.jsx(o.p,{children:`Не всё в нашем программистском мире можно стандартизировать. Однако уже есть протоптанные дорожки в лесе нетипичных
ситуаций.`}),`
`,e.jsxs(o.h4,{id:"51-проп-mode-или-size-не-относятся-к-компоненту-напрямую-однако-нужны-для-используемых-внутри-компонентов",children:["5.1 Проп ",e.jsx(o.code,{children:"mode"})," или ",e.jsx(o.code,{children:"size"})," не относятся к компоненту напрямую, однако нужны для используемых внутри компонентов"]}),`
`,e.jsxs(o.p,{children:["Такой пример можно увидеть в ",e.jsx(o.a,{href:"?path=/story/hexa-ui-components-checkbox--basic",children:"Checkbox"}),". ",e.jsx(o.code,{children:"mode"}),` никак не влияет на цвета самого
`,e.jsx(o.code,{children:"Checkbox"}),", однако нужен для используемого внутри него ",e.jsx(o.code,{children:"FormLabel"})," компонента. Допустим, мы выставили ",e.jsx(o.code,{children:"mode: 'primary'"}),` в
светлой теме. Хук не умеет понимать, к `,e.jsx(o.code,{children:"Checkbox"})," или к ",e.jsx(o.code,{children:"FormLabel"})," относится проп ",e.jsx(o.code,{children:"mode"}),`, поэтому он пытается
достучаться до `,e.jsx(o.code,{children:"THEME_CONFIG.light.components.checkbox.colors.primary"}),". А у ",e.jsx(o.code,{children:"checkbox.colors"})," нет поля ",e.jsx(o.code,{children:"primary"}),`, что
приводит к ошибке (такой баг уже реально был).`]}),`
`,e.jsx(o.p,{children:"Есть два варианта решения проблемы:"}),`
`,e.jsx(o.h5,{id:"511-предпочтительный-но-труднореализуемый",children:"5.1.1 Предпочтительный, но труднореализуемый"}),`
`,e.jsxs(o.p,{children:["Лучше всего было бы вынести относящиеся к ",e.jsx(o.code,{children:"FormLabel"})," пропы в отдельный проп:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/checkbox/types.ts

...
export const CheckboxProps = {
  ...
  formLabel: {
    mode?: FormLabelMode,
    required?: boolean,
    ...
  },
  ...
} & CheckboxThemeProps
`})}),`
`,e.jsxs(o.p,{children:["Также можно переименовать ",e.jsx(o.code,{children:"mode"})," в ",e.jsx(o.code,{children:"formLabelMode"}),`, однако первый вариант выглядит более логичным и структурированным.
Трудность заключается в том, чтобы по пути не потерять обратную совместимость.`]}),`
`,e.jsx(o.h5,{id:"512-костыльный-но-простой",children:"5.1.2 Костыльный, но простой"}),`
`,e.jsxs(o.p,{children:["Можно принудительно поставить ",e.jsx(o.code,{children:"mode: undefined"})," в первом аргументе для ",e.jsx(o.code,{children:"useThemedProps"}),", как будто пропа ",e.jsx(o.code,{children:"mode"})," и нет:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/checkbox/useThemedCheckbox.ts

export const useThemedCheckbox = <Props, >(props: Props): CheckboxToViewProps<Props> => (
  useThemedComponent<Props, CheckboxCssConfig, CheckboxThemeProps>({ ...props, mode: undefined }, {
    componentName: 'checkbox',
    defaultValues: {}
  })
)
`})}),`
`,e.jsxs(o.p,{children:["А в самом компоненте пробросить ",e.jsx(o.code,{children:"mode"})," напрямую во ",e.jsx(o.code,{children:"View"}),' часть из "сырых" пропов:']}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`...
export const Checkbox: FC<CheckboxProps> = (rawProps: CheckboxProps) => {
  const props = useThemedCheckbox(rawProps)
  return <CheckboxView role='checkbox' {...props} mode={rawProps.mode} />
}
...
`})}),`
`,e.jsxs(o.h4,{id:"52-проп-называется-не-mode-или-size-но-выполняет-функцию-mode-или-size",children:["5.2 Проп называется не ",e.jsx(o.code,{children:"mode"})," или ",e.jsx(o.code,{children:"size"}),", но выполняет функцию ",e.jsx(o.code,{children:"mode"})," или ",e.jsx(o.code,{children:"size"})]}),`
`,e.jsxs(o.p,{children:["В ",e.jsx(o.code,{children:"Accordion.Panel"})," есть проп ",e.jsx(o.code,{children:"titleSize"}),", который целиком выполняет функцию ",e.jsx(o.code,{children:"size"}),`. В идеале нужно поступить как в
5.1.1, однако на практике получается по другому. В таком случае мы вытаскиваем `,e.jsx(o.code,{children:"titleSize"}),` из приходящих к нам в
`,e.jsx(o.code,{children:"useThemedAccordionPanel"})," пропов и прокидываем в хук проп ",e.jsx(o.code,{children:"size"}),". И пришлось еще немного с типизацией повозиться:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/accordion/useThemedAccordion.ts

...
type ToThemeProps<T> = Omit<T, 'titleSize'> & { size?: AccordionTitleSize }

export const useThemedAccordionPanel = ({
  titleSize,
  ...rest
}: IAccordionPanelProps): AccordionPanelViewProps => (
  useThemedComponent<
    ToThemeProps<IAccordionPanelProps>,
    AccordionPanelCssConfig,
    ToThemeProps<AccordionPanelThemeProps>
  >({ ...rest, size: titleSize }, {
    componentName: 'accordion',
    defaultValues: { size: 'small' }
  })
)
`})}),`
`,e.jsx(o.h4,{id:"53-будет-дополняться",children:"5.3 Будет дополняться"})]})}function m(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
