import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { DropdownCssConfig, DropdownStyleProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'

export const useThemedDropdown = <T extends DropdownStyleProps>(props: T):Omit<T, keyof DropdownStyleProps> & {cssConfig: DropdownCssConfig} => {
  const { theme: themeFromProps, ...rest } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.dropdown.colors),
    ...(THEME_CONFIG[theme.key].components.dropdown.sizes)
  }), [theme])

  return { ...rest, cssConfig }
}
