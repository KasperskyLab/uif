import { useState, useEffect } from 'react'
import { Layout } from './Layout'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { LangVariants } from '@kaspersky/hexa-ui/helpers/localization/types'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import { Notification } from '@kaspersky/hexa-ui'
import { injectChartPaletteAliases } from './chartPaletteAliases'

function App () {
  const [themeKey, setThemeKey] = useState<ThemeKey>(ThemeKey.Light)

  useEffect(() => {
    injectChartPaletteAliases()
  }, [])

  return (
    <ConfigProvider theme={themeKey} locale={LangVariants.EnUs}>
      <GlobalStyle />
      <Notification/>
      <Layout
        themeKey={themeKey}
        setThemeKey={setThemeKey}
      />
    </ConfigProvider>
  )
}

export default App
