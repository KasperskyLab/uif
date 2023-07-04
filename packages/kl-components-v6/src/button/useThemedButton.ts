import { useMemo } from 'react'
import { BaseThemedButtonProps, ButtonCssConfig, IButtonProps } from './types'
import { Size } from '../../design-system/types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedButton = <T extends IButtonProps>(props: T): Omit<T, keyof BaseThemedButtonProps> & { cssConfig: ButtonCssConfig} => {
  const {
    mode = 'primaryBlue',
    size = Size.Medium,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<ButtonCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.button.colors[mode]),
    ...(THEME_CONFIG[theme.key].components.button.sizes[size])
  }), [mode, theme, size])

  return { ...rest, cssConfig }
}
