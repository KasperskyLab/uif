import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { KeyValueCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ThemeKey } from '../../design-system/types'

export const useThemedKeyValue = <T>(props: T & {theme?: ThemeKey}) => {
  const {
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<KeyValueCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.keyValue.colors
  }), [theme])

  return { ...rest, cssConfig }
}
