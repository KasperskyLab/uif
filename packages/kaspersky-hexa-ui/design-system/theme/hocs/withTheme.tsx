import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeKey } from '../../types'
import { THEME_CONFIG } from '../themes/config'

export type PropsWithTheme<P extends Record<string, unknown>> = P & { readonly theme?: ThemeKey };

export function withTheme<P extends Record<string, unknown>> (
  Component: React.FC<P>
): React.FC<PropsWithTheme<P>> {
  return ((props: PropsWithTheme<P>) => {
    const { theme } = props

    if (theme === ThemeKey.Dark) {
      document.body.classList.add('theme-dark')
    } else {
      document.body.classList.remove('theme-dark')
    }

    return (
      <StyledThemeProvider theme={THEME_CONFIG[theme || ThemeKey.Light]}>
        <Component {...props} />
      </StyledThemeProvider>
    )
  }) as React.FC<P>
}
