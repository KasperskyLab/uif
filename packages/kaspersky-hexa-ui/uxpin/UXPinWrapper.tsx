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

const mergeComponentStyle: React.CSSProperties = {
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  display: 'block'
}

const UXPinWrapper = ({ children }: UXPinWrapperProps): JSX.Element => (
  <ThemeProvider theme={ThemeKey.Light}>
    <GlobalStyle />
    <div className="merge-component" style={mergeComponentStyle}>{children}</div>
  </ThemeProvider>
)

export default UXPinWrapper
