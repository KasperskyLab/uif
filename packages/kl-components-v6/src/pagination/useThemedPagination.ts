import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { PaginationCssConfig, PaginationStyleProps } from './types'

export const useThemedPagination = <T extends PaginationStyleProps>(props: T): Omit<T, keyof PaginationStyleProps> & {cssConfig: PaginationCssConfig} => {
  const { size = 'medium', theme: themeFromProps, ...rest } = props

  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.pagination.colors),
    ...(THEME_CONFIG[theme.key].components.pagination.sizes[size])
  }), [theme])

  return { cssConfig, size, ...rest }
}
