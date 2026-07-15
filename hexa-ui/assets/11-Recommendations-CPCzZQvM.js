import{j as n,M as d}from"./blocks-yA_hxWl_.js";import{useMDXComponents as o}from"./index-CUlJxhH5.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-4-PRSI1I.js";function c(r){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Рекомендации"}),`
`,n.jsx(e.h2,{id:"icon-и-iconresolver",children:"Icon и IconResolver"}),`
`,n.jsxs(e.p,{children:["Использование ",n.jsx(e.code,{children:"Icon"})," и ",n.jsx(e.code,{children:"IconResolver"})," не рекомендуется. Эти компоненты сохранены для обратной совместимости, но использовать их как основной способ работы с иконками не стоит, так как это может сказаться на размере бандла."]}),`
`,n.jsxs(e.p,{children:["Во внутренней реализации иконки переведены на получение паков через глобальный объект ",n.jsx(e.code,{children:"window"}),". Для плагинов, работающих в NWC, обратная совместимость сохранена, и это уже позволило уменьшить размер бандла. Это решение сделано именно для поддержки обратной совместимости, а не как рекомендуемый способ использования в новом коде."]}),`
`,n.jsxs(e.p,{children:["Рекомендуется по возможности постепенно отказаться от использования ",n.jsx(e.code,{children:"Icon"})," и ",n.jsx(e.code,{children:"IconResolver"})," в продуктовом коде."]}),`
`,n.jsx(e.h3,{id:"не-рекомендуется",children:"Не рекомендуется"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Icon } from '@src/icon'

<Icon name="Placeholder" size={16} />
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { IconResolver } from '@src/icon'

<IconResolver name="Placeholder" size={16} />
`})}),`
`,n.jsx(e.h3,{id:"рекомендуемый-вариант",children:"Рекомендуемый вариант"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

<Placeholder />
`})}),`
`,n.jsx(e.h2,{id:"импорт-иконок",children:"Импорт иконок"}),`
`,n.jsx(e.p,{children:"Импорт пака целиком или через namespace-объект также не рекомендуется, так как tree shaking в этом случае работает хуже или становится менее предсказуемым, и в бандл может попадать существенно больше иконок, чем одна фактически используемая."}),`
`,n.jsx(e.h3,{id:"не-рекомендуется-1",children:"Не рекомендуется"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import Icons16 from '@kaspersky/hexa-ui-icons/16'

<Icons16.Placeholder />
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import * as Icons16 from '@kaspersky/hexa-ui-icons/16'

<Icons16.Placeholder />
`})}),`
`,n.jsx(e.h3,{id:"рекомендуемый-вариант-1",children:"Рекомендуемый вариант"}),`
`,n.jsx(e.p,{children:"Следует использовать direct named import конкретной иконки из нужного пака."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

<Placeholder />
`})}),`
`,n.jsx(e.h2,{id:"изменения-в-api-компонентов",children:"Изменения в API компонентов"}),`
`,n.jsx(e.h3,{id:"card-и-inputpassword",children:"Card и Input.Password"}),`
`,n.jsxs(e.p,{children:["Ранее в ",n.jsx(e.code,{children:"Card"})," и ",n.jsx(e.code,{children:"Input.Password"})," использовался формат ",n.jsx(e.code,{children:"icon: string"}),", где иконка далее подставлялась через ",n.jsx(e.code,{children:"IconResolver"}),". Этот подход сохранен для обратной совместимости, но теперь API расширен до ",n.jsx(e.code,{children:"ReactNode"})," начиная с версии 6.347.3."]}),`
`,n.jsx(e.p,{children:"Рекомендуется заменить строковое описание иконки на передачу конкретной иконки напрямую."}),`
`,n.jsx(e.h4,{id:"card",children:"Card"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Было"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<Card icon="Placeholder" />
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Рекомендуемый вариант"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

<Card icon={<Placeholder />} />
`})}),`
`,n.jsx(e.h4,{id:"inputpassword",children:"Input.Password"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Было"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<Input.Password icon="Placeholder" />
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Рекомендуемый вариант"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

<Input.Password icon={<Placeholder />} />
`})}),`
`,n.jsx(e.h2,{id:"toolbar",children:"Toolbar"}),`
`,n.jsxs(e.p,{children:["В ",n.jsx(e.code,{children:"Toolbar"})," у пропов ",n.jsx(e.code,{children:"left"})," и ",n.jsx(e.code,{children:"right"})," использование ",n.jsx(e.code,{children:"type: 'icon'"})," помечено как deprecated."]}),`
`,n.jsx(e.h3,{id:"было",children:"Было"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<Toolbar
  left={[
    { type: 'icon', icon: 'Placeholder' },
  ]}
/>
`})}),`
`,n.jsx(e.h3,{id:"рекомендуемый-вариант-2",children:"Рекомендуемый вариант"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

<Toolbar
  left={[
    { type: 'button', iconBefore: <Placeholder /> },
  ]}
/>
`})})]})}function x(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(c,{...r})}):c(r)}export{x as default};
