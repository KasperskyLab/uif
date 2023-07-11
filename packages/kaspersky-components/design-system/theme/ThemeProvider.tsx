import React from 'react'
import { withTheme } from './hocs'

export const ThemeProvider = withTheme(
  ({ children }: { children: React.ReactNode }) => <>{children}</>
)
