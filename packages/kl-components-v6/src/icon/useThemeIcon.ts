import { useMemo } from 'react'
import { IconCssConfig, IconProps } from './types'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { useTheme } from '@design-system/theme/hooks'

export const useThemedIcon = <T extends IconProps>(props: T) => {
  const {
    color,
    themedColor,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const textColor = THEME_CONFIG[theme.key].colors.textIconsElements[themedColor || 'primary']
  const cssConfig = useMemo<IconCssConfig>(() => ({
    color: color || textColor
  }), [theme, color])

  return { ...rest, cssConfig }
}
