import { useMemo } from 'react'
import { TagCssConfig, TagProps } from './types'
import { Size } from '../../design-system/types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedTag = <T extends TagProps>(props: T) => {
  const {
    backgroundColor = 'neutral',
    overrides,
    size = Size.Medium,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const tagTextColor = overrides?.textColor ?? THEME_CONFIG[theme.key].colors.textIconsElements.primary
  const tagBackgroundColor = overrides?.backgroundColor ?? THEME_CONFIG[theme.key].colors.tags[backgroundColor || 'neutral']
  const iconColor = overrides?.iconColor ?? THEME_CONFIG[theme.key].colors.textIconsElements.primary
  const closableIconColor = overrides?.closableIconColor ?? THEME_CONFIG[theme.key].colors.textIconsElements.primary

  const cssConfig = useMemo<TagCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.tag.sizes[size]),
    backgroundColor: tagBackgroundColor,
    color: tagTextColor,
    iconColor,
    closableIconColor,
    disabled: {
      color: overrides?.disabledTextColor ?? THEME_CONFIG[theme.key].colors.textIconsElements.disabled,
      backgroundColor: overrides?.disabledBackgroundColor ?? THEME_CONFIG[theme.key].colors.elements.seporator
    }
  }), [theme, size, backgroundColor, { ...overrides }])

  return { ...rest, cssConfig }
}
