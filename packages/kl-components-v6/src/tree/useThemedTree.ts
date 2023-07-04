import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { TreeCssConfig, ITreeProps, TreeStyleProps } from './types'

export const useThemedTree = <T extends ITreeProps>(props: T): Omit<T, keyof TreeStyleProps> & { cssConfig: TreeCssConfig } => {
  const { theme: themeFromProps, ...rest } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<TreeCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.tree.colors),
    ...(THEME_CONFIG[theme.key].components.tree.sizes)
  }), [theme])

  return { ...rest, theme, cssConfig }
}
