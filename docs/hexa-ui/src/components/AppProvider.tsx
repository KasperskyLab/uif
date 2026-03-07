import React, { ReactNode, useState } from 'react'

import { ConfigProvider, ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { GlobalStyle as GlobalStyleV6 } from '@kaspersky/hexa-ui/design-system'
import { LangType } from '@kaspersky/hexa-ui/helpers/localization/types'

import '@kaspersky/hexa-ui/design-system/global-style/styles.css'

interface AppProviderProps {
  children: ReactNode;
  theme: ThemeKey;
}

function AppProvider ({ children, theme }: AppProviderProps) {
  const [locale] = useState<LangType>('ru-ru')

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <GlobalStyleV6 />
      {children}
    </ConfigProvider>
  )
}

export default AppProvider
