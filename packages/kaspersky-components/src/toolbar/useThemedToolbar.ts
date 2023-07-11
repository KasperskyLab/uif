import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { ToolbarStyleProps, ToolbarProps, ToolbarCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'

export const useThemedToolbar = <T extends ToolbarProps>(props: T): Omit<T, keyof ToolbarStyleProps> & { cssConfig: ToolbarCssConfig } => {
  const {
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<ToolbarCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.toolbar.colors
  }), [theme])

  return { ...rest, theme, cssConfig }
}
