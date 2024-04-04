import { useState } from 'react'
import { Layout } from './Layout'
import { ConfigProvider } from '@kaspersky/components/design-system/context/provider'
import { ThemeKey } from '@kaspersky/components/design-system'
import { LangVariants } from '@kaspersky/components/helpers/localization/types'
import { GlobalStyle } from '@kaspersky/components/design-system/global-style'
import { Notification } from '@kaspersky/components'


function App() {
  const [themeKey, setThemeKey] = useState<ThemeKey>(ThemeKey.Light)

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
