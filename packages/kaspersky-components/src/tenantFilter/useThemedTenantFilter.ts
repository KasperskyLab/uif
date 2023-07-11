import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { TenantFilterCssConfig, ITenantFilterProps, TenantFilterStyleProps } from './types'

export const useThemedTenantFilter = <T extends ITenantFilterProps>(props: T): Omit<T, keyof TenantFilterStyleProps> & { cssConfig: TenantFilterCssConfig } => {
  const { theme: themeFromProps, ...rest } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<TenantFilterCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.tree.colors),
    ...(THEME_CONFIG[theme.key].components.tree.sizes)
  }), [theme])

  return { ...rest, theme, cssConfig }
}
