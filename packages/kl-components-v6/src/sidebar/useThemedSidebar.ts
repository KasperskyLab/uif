import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { SidebarStyleProps, ISidebarProps, SidebarCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'

export const useThemedSidebar = <T extends ISidebarProps>(props: T): Omit<T, keyof SidebarStyleProps> & { cssConfig: SidebarCssConfig} => {
  const {
    theme: themeFromProps,
    size = 'medium',
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<SidebarCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.sidebar.colors,
    ...THEME_CONFIG[theme.key].components.sidebar.sizes[size]
  }), [theme])

  return { ...rest, cssConfig }
}
