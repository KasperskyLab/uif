import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { SearchCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ThemeKey } from '../../design-system/types'

export const useThemedSearch = <T>(props: T & {theme?: ThemeKey}) => {
  const {
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<SearchCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.search.colors
  }), [theme])

  return { ...rest, cssConfig }
}
