import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { IBadgeProps, ThemedBadgeProps } from './types'

export const useThemedBadge = (props: IBadgeProps): ThemedBadgeProps => {
  const {
    mode = 'black',
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.badge.colors[mode]),
    ...(THEME_CONFIG[theme.key].components.badge.sizes)
  }), [mode, theme])

  return { ...rest, mode, cssConfig }
}
