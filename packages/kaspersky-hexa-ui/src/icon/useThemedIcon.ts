import { useTheme } from '@design-system/theme/hooks'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { useMemo } from 'react'

import { IconCssConfig, IconProps } from './types'

export const useThemedIcon = <T extends IconProps>(props: T) => {
  const {
    color,
    themedColor,
    iconColor: iconColorName,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const textColor = THEME_CONFIG[theme.key].colors.textIconsElements[themedColor || 'primary']
  const iconColor = iconColorName && THEME_CONFIG[theme.key].colors.product.text[iconColorName]
  const cssConfig = useMemo<IconCssConfig>(() => ({
    color: iconColor || color || textColor
  }), [theme, color])

  return { ...rest, cssConfig }
}
