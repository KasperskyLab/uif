import { useMemo } from 'react'
import { AlertCssConfig, AlertProps } from './types'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { useTheme } from '@design-system/theme/hooks'

export const useThemedAlert = <T extends AlertProps>(props: T) => {
  const {
    mode,
    type,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const themeKey = theme.key

  const cssConfig = useMemo<AlertCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.alert.colors[mode][type])
  }), [theme, mode, type])

  return { ...rest, mode, type, theme: themeKey, cssConfig }
}
