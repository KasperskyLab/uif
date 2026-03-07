import{j as e}from"./jsx-runtime-CxPCTGSc.js";import{useMDXComponents as o}from"./index-lKYyQ2c7.js";import{M as s}from"./blocks-71x0kO9t.js";import"./iframe-zz6a49H8.js";import"./preload-helper-C1FmrZbK.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Установка и инициализация"}),`
`,e.jsx(n.h1,{id:"установка-и-инициализация",children:"Установка и инициализация"}),`
`,e.jsx(n.h2,{id:"установка-пакета",children:"Установка пакета"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm i @kaspersky/hexa-ui
`})}),`
`,e.jsx(n.p,{children:"Или если вы используете yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`yarn add @kaspersky/hexa-ui
`})}),`
`,e.jsx(n.p,{children:"Не забудьте также про настройку registry (если еще не делали):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm config set registry https://registry.npmjs.org/
`})}),`
`,e.jsx(n.h2,{id:"добавление-глобальных-стилей",children:"Добавление глобальных стилей"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`// provide theme color to css vars
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'

// provide base css
import '@kaspersky/hexa-ui/design-system/global-style/styles.css'

// App Root
const AppRoot = () => (
  <>
    <GlobalStyle />
    <Layout />
  </>
)

ReactDOM.render(<AppRoot />, document.getElementById('app'))
`})}),`
`,e.jsx(n.h2,{id:"импорт-компонента",children:"Импорт компонента"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import React from 'react'

import { Button } from '@kaspersky/hexa-ui'

const Layout = () => {
  return (
    <Button
      text='Click me!'
      mode='secondary'
      size='large'
    />
  )
}
`})}),`
`,e.jsx(n.h2,{id:"providers",children:"Providers"}),`
`,e.jsx(n.h3,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["ThemeProvider принимает проп ",e.jsx(n.code,{children:"theme"})," и позволяет в дальнейшем взаимодействовать с темами приложения."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import React, { useState } from 'react'

import { Button } from '@kaspersky/hexa-ui'

import { ThemeProvider } from '@kaspersky/hexa-ui/design-system/theme'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.light)

  return (
    <ThemeProvider theme={theme}>
      <Button
        text='Click me!'
        mode='secondary'
        size='large'
      />
    </ThemeProvider>
  )
}
`})}),`
`,e.jsx(n.h3,{id:"localizationprovider",children:"LocalizationProvider"}),`
`,e.jsxs(n.p,{children:["LocalizationProvider принимает проп ",e.jsx(n.code,{children:"locale"})," (язык) и ",e.jsx(n.code,{children:"i18n"}),` (объект i18n). Позволяет в дальнейшем взаимодействовать с
системой локализационных ключей.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import React, { useState } from 'react'

import { Button } from '@kaspersky/hexa-ui'

import { ThemeProvider } from '@kaspersky/hexa-ui/design-system/theme'
import { LocalizationProvider } from '@kaspersky/hexa-ui/design-system/context'
import i18n from '@kaspersky/hexa-ui/helpers/localization/i18n'

import { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'
import { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.light)
  const [locale, setLocale] = useState<LangType>('en-us')

  return (
    <LocalizationProvider locale={locale} i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Button
          text='Click me!'
          mode='secondary'
          size='large'
        />
      </ThemeProvider>
    </LocalizationProvider>
  )
}
`})}),`
`,e.jsx(n.h3,{id:"configprovider",children:"ConfigProvider"}),`
`,e.jsxs(n.p,{children:[`ConfigProvider является интеграцией ThemeProvider и LocalizationProvider.
В качестве пропов принимает `,e.jsx(n.code,{children:"theme"})," и ",e.jsx(n.code,{children:"locale"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import React, { useState, useCallback, useEffect } from 'react'

import { Button } from '@kaspersky/hexa-ui'

import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context'

import { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'
import { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)
  const [locale, setLocale] = useState<LangType>('en-us')

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <Button
        text='Click me!'
        mode='secondary'
        size='large'
      />
    </ConfigProvider>
  )
}
`})}),`
`,e.jsx(n.h2,{id:"переключение-темы-и-локализации",children:"Переключение темы и локализации"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import React, { useState, useCallback, useEffect } from 'react'

import { Button } from '@kaspersky/hexa-ui'

import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context'

import { ThemeKey } from '@kaspersky/hexa-ui/design-system/types'
import { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'

const Layout = () => {
  const [theme, setTheme] = useState<ThemeKey>(ThemeKey.Light)
  const [locale, setLocale] = useState<LangType>('en-us')

  const setLight = useCallback(() => setTheme('light'), [])
  const setDark = useCallback(() => setTheme('dark'), [])
  const setEn = useCallback(() => setLocale('en-us'), [])
  const setRu = useCallback(() => setLocale('ru-ru'), [])

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <Button text='Set light' onClick={setLight} />
      <Button text='Set dark' onClick={setDark} />
      <Button text='Set en' onClick={setEn} />
      <Button text='Set ru' onClick={setRu} />
    </ConfigProvider>
  )
}
`})})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{l as default};
