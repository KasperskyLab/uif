import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeKey } from '../../types'
import { THEME_CONFIG } from '../themes/config'

export type PropsWithTheme<P extends Record<string, unknown>> = P & { readonly theme?: ThemeKey };

export function withTheme<P extends Record<string, unknown>> (
  Component: React.FC<P>
): React.FC<PropsWithTheme<P>> {
  return ((props: PropsWithTheme<P>) => {
    let { theme } = props

    // TODO: remove when updating storybook to version >=10.2, see - https://github.com/storybookjs/storybook/pull/33276
    // @ts-ignore
    if (theme === '_reset') { theme = ThemeKey.Light }

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
