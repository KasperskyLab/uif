import React from 'react'

import { GlobalStyle } from '@design-system/global-style'
import { ThemeProvider } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import 'antd/dist/antd.css'
import '@kaspersky/hexa-ui-core/fonts'
import '@kaspersky/hexa-ui-core/colors/css'
import '@kaspersky/hexa-ui-core/typography/css'
import '../style/styles.less'

interface UXPinWrapperProps {
  children: React.ReactNode
}

const UXPinWrapper = ({ children }: UXPinWrapperProps): JSX.Element => (
  <ThemeProvider theme={ThemeKey.Light}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default UXPinWrapper
