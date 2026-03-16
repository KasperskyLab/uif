import{j as e}from"./jsx-runtime-C2lXZex4.js";import{useMDXComponents as s}from"./index-slK-RSG-.js";import{M as c}from"./blocks-DNzP1dU7.js";import"./iframe-DlY6n6Um.js";import"./preload-helper-C1FmrZbK.js";function r(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs/Типизация компонентов"}),`
`,e.jsx(o.h1,{id:"типизация-компонентов",children:"Типизация компонентов"}),`
`,e.jsxs(o.p,{children:["Представим себе абстрактный несуществующий компонент ",e.jsx(o.code,{children:"Flower"}),". Скорее всего он будет иметь такую структуру:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/Flower.tsx

const StyledFlower = styled(AntdFlower).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})\`
  \${flowerCss}
\`

export const Flower: FC<FlowerProps> = (rawProps: FlowerProps) => {
  const props = useThemedFlower(rawProps)
  return <FlowerView {...props} />
}

const FlowerView: FC<FlowerViewProps> = ({
  prop1,
  ...
  propN,
  ...rest
}: FlowerViewProps) => {
  /* some logic */
  return <FlowerComponent {...propsWithLogic} />
}
`})}),`
`,e.jsx(o.p,{children:"Рассмотрим стандартно используемые типы в компоненте."}),`
`,e.jsx(o.h2,{id:"componentprops",children:"ComponentProps"}),`
`,e.jsx(o.p,{children:"Единственный тип, которым должен пользоваться разработчик извне. Тут прописываются все необходимые компоненту пропы."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

export type FlowerProps = {
  prop1?: type1,
  ...
  propN?: typeN
} & FlowerThemeProps
`})}),`
`,e.jsx(o.h2,{id:"componentthemeprops",children:"ComponentThemeProps"}),`
`,e.jsxs(o.p,{children:["С ",e.jsx(o.code,{children:"FlowerProps"})," соединяются пропы ",e.jsx(o.code,{children:"FlowerThemeProps"}),", которые должны быть темезированы в хуке ",e.jsx(o.code,{children:"useThemedFlower"}),`
(`,e.jsx(o.a,{href:"?path=/docs/docs-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-usethemedcomponent--docs",children:"подробнее"}),")."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

import { Theme } from '@design-system/types'

export type FlowerThemeProps = {
  theme?: Theme,
  mode?: FlowerMode,
  size?: FlowerSize
}
`})}),`
`,e.jsxs(o.p,{children:["Проп ",e.jsx(o.code,{children:"theme"})," должен быть всегда, если внутри ",e.jsx(o.code,{children:"componentCss.ts"}),` используются какие-либо цвета из дизайн-системы.
`,e.jsx(o.code,{children:"mode"})," и ",e.jsx(o.code,{children:"size"})," опциональны."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"NB!"})," Стоит задавать компоненту пропы ",e.jsx(o.code,{children:"mode"})," или ",e.jsx(o.code,{children:"size"}),` только в том случае, если они относятся именно к нему.
Если проп относится к внутрилежащему компоненту, то лучше назвать его по другому. Пример: у `,e.jsx(o.code,{children:"Checkbox"}),` есть
проп `,e.jsx(o.code,{children:"mode"}),", однако он не используется при темезации чекбокса, а прокидывается в лежащий внутри компонент ",e.jsx(o.code,{children:"FormLabel"}),`.
Лучше было бы назвать такой проп `,e.jsx(o.code,{children:"formLabelMode"})," или сделать для ",e.jsx(o.code,{children:"Checkbox"})," проп ",e.jsx(o.code,{children:"formLabel"}),`, внутри которого можно было бы положить
относящийся к нему `,e.jsx(o.code,{children:"mode"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"componentviewprops",children:"ComponentViewProps"}),`
`,e.jsxs(o.p,{children:["Пропы, которые попадают в ",e.jsx(o.code,{children:"FlowerView"}),". В них, чаще всего, нет пропов из ",e.jsx(o.code,{children:"FlowerThemeProps"})," и есть ",e.jsx(o.code,{children:"cssConfig"}),`,
который в дальнейшем попадает в `,e.jsx(o.code,{children:"StyledFlower"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

import { ToViewProps } from '@helpers/typeHelpers'

...

export type FlowertViewProps = ToViewProps<ComponentProps, ComponentCssConfig, ComponentThemeProps>
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"ToViewProps"})," работает по следующему принципу: к ",e.jsx(o.code,{children:"ComponentProps"})," добавляется ",e.jsx(o.code,{children:"cssConfig"}),` и убираются
`,e.jsx(o.code,{children:"ComponentThemeProps"}),". Формирование ",e.jsx(o.code,{children:"ComponentCssConfig"})," будет рассмотрено ниже. Реализация ",e.jsx(o.code,{children:"ToViewProps"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/helpers/typesHelpers.ts

export type ToViewProps<BaseType, CssConfig, ToExclude = ''> = Omit<BaseType, keyof ToExclude> & { cssConfig: CssConfig }
`})}),`
`,e.jsx(o.h3,{id:"субкомпонент",children:"Субкомпонент"}),`
`,e.jsxs(o.p,{children:["Если же у компонента есть субкомпоненты, каждому из которых требуется свой отдельный тип ",e.jsx(o.code,{children:"SubComponentViewProps"}),`,
но `,e.jsx(o.code,{children:"ComponentThemeProps"})," и ",e.jsx(o.code,{children:"cssConfig"})," одинаковые, то можно создать ",e.jsx(o.code,{children:"ComponentToViewProps"}),". Рассмотрим в качестве примера ",e.jsx(o.code,{children:"input"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/input/types.ts

import { ToViewProps } from '@helpers/typesHelpers'

export type TextboxToViewProps<T> = ToViewProps<T, InputCssConfig, TextboxThemeProps>

export type TextboxProps = {
 ...
} & TextboxThemeProps
export type TextboxViewProps = TextboxToViewProps<TextboxProps>

export type TextboxNumberProps = {
 ...
} & TextboxThemeProps
export type TextboxNumberViewProps = TextboxToViewProps<TextboxNumberProps>

export type TextboxPasswordProps = {
 ...
} & TextboxThemeProps
export type TextboxPasswordViewProps = TextboxToViewProps<TextboxPasswordProps>

...
`})}),`
`,e.jsx(o.h2,{id:"componentcssconfig",children:"ComponentCssConfig"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

export type FlowerCssConfig = FlowerColorConfig & FlowerSizeConfig
`})}),`
`,e.jsxs(o.p,{children:["Если же ",e.jsx(o.code,{children:"FlowerSizeConfig"}),` конфиг отсутствует, то лучше все равно оставлять запись
`,e.jsx(o.code,{children:"export type FlowerCssConfig = FlowerColorConfig"}),`, так как в будущем размеры могут быть добавлены, и придется
выполнять лишние действия по замене типов, да и код не будет унифицированным.`]}),`
`,e.jsx(o.h3,{id:"componentcolorconfig",children:"ComponentColorConfig"}),`
`,e.jsx(o.p,{children:`Внутри него может лежать что угодно, но если компонент подразумевает разные состояния (hover, active, focus etc), то
есть устоявшаяся структура:`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

type StateProps = {
  background?: string,
  color?: string,
  ...whatever you need...
}

export type FlowerColorConfig = {
  enabled?: StateProps,
  hover?: StateProps,
  ...whatever you need...
}
`})}),`
`,e.jsxs(o.p,{children:["Если у компонента подразумевается цветовой мод, то ",e.jsx(o.code,{children:"export type FlowerMode = 'mode1' | 'mode2' | ... | 'modeN'"}),`.
При этом не нужно включать `,e.jsx(o.code,{children:"FlowerMode"})," в ",e.jsx(o.code,{children:"FlowerColorConfig"}),", так как в ",e.jsx(o.code,{children:"cssConfig"}),", полученный в ",e.jsx(o.code,{children:"useThemedFlower"}),`,
будут включены только значения, относящиеся к выбранному разработчиком извне `,e.jsx(o.code,{children:"mode"}),". ",e.jsx(o.code,{children:"FlowerMode"}),` будет использован
в `,e.jsx(o.a,{href:"?path=/docs/docs-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-theme-config--docs",children:"конфигурировании THEME_CONFIG"}),"."]}),`
`,e.jsx(o.h3,{id:"componentsizeconfig",children:"ComponentSizeConfig"}),`
`,e.jsxs(o.p,{children:["Без наличия разных размеров у компонента, ",e.jsx(o.code,{children:"FlowerSizeConfig"}),` бессмысленен. В таком случае все размеры должны быть проставлены
непосредственно в `,e.jsx(o.code,{children:"flowerCss.ts"}),". Задать ",e.jsx(o.code,{children:"FlowerSize"})," можно двумя способами:"]}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"${Extract<Size, 'small' | 'medium' | etc}"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"${Exclude<Size, 'small' | 'medium' | etc}"})}),`
`]}),`
`,e.jsx(o.p,{children:`Первый способ "вытаскивает" только указанные размеры, а второй "вытаскивает" все, кроме указанных. Используйте тот, который
требует ввода меньшего количества размеров.`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`/src/flower/types.ts

import { SizingType } from '@design-system/types'
import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export FlowerSize = \`\${Extract<SizingType, 'small' | 'medium'}\`

export FlowerSizeConfig = {
  height?: string,
  borderRadius: string,
  ...whatever you need...
} & TextSizes
`})}),`
`,e.jsxs(o.p,{children:["Используйте тип ",e.jsx(o.code,{children:"TextSizes"}),", если в ",e.jsx(o.code,{children:"FlowerSizeConfig"})," будут размеры шрифта."]})]})}function x(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{x as default};
