import { useMemo } from 'react'
import { ITableProps, TableCssConfig, ThemedTableProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedTableProps = ({ theme: themeFromProps, ...rest }: ITableProps): ThemedTableProps => {
  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<TableCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.table.colors,
    ...THEME_CONFIG[theme.key].components.table.sizes
  }), [theme])

  return { ...rest, cssConfig, theme: theme.key }
}
