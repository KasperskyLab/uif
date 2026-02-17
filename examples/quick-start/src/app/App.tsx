import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { DefaultContentOutlet } from './DefaultContentOutlet'
import { FormShowcaseApp } from './form-showcase/FormShowcaseApp'
import { B2bTypicalScenarioApp } from './b2b-typical-scenario/B2bTypicalScenarioApp'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { LangVariants } from '@kaspersky/hexa-ui/helpers/localization/types'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import { FormaI18nInit } from '../shared/Forma'

function App() {
  const [themeKey, setThemeKey] = useState<ThemeKey>(ThemeKey.Light)

  return (
    <ConfigProvider theme={themeKey} locale={LangVariants.EnUs}>
      <FormaI18nInit>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout themeKey={themeKey} setThemeKey={setThemeKey} />}>
              <Route index element={<DefaultContentOutlet />} />
              <Route path="form-showcase/*" element={<FormShowcaseApp />} />
              <Route path="b2b-typical-scenario/*" element={<B2bTypicalScenarioApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormaI18nInit>
    </ConfigProvider>
  )
}

export default App
