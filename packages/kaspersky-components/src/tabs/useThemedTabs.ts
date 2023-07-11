import { useMemo } from 'react'
import { TabsStyleProps, TabsCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks/useTheme'

export const useThemedTabs = <T extends TabsStyleProps>(props: T): Omit<T, 'theme'> & {cssConfig: TabsCssConfig} => {
  const { theme: themeFromProps, ...rest } = props
  const theme = useTheme(themeFromProps)

  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.tabs.colors),
    ...(THEME_CONFIG[theme.key].components.tabs.sizes)
  }), [theme])

  return { ...rest, cssConfig }
}
