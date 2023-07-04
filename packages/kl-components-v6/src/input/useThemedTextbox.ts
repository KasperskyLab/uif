import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { IInputStyleProps, InputCssConfig } from './types'

export const useThemedTextbox = <T extends IInputStyleProps>(props: T) => {
  const {
    theme: themeFromProps,
    size = 'medium',
    ...rest
  } = props
  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<InputCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.input.colors),
    ...(THEME_CONFIG[theme.key].components.input.sizes[size])
  }), [theme, size])
  return { ...rest, size, cssConfig }
}
