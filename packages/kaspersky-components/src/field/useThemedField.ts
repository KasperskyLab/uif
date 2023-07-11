import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { FieldCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ThemeKey } from '../../design-system/types'

export const useThemedField = <T>(props: T & {theme?: ThemeKey}) => {
  const {
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<FieldCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.field.colors
  }), [theme])

  return { ...rest, cssConfig }
}
