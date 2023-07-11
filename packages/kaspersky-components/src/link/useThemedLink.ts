import { useMemo } from 'react'
import { LinkCssConfig, LinkStyleProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'
import { textLevels, textStyle } from '../../design-system/tokens'

export const useThemedLink = <T extends LinkStyleProps>(props: T): T & { cssConfig: LinkCssConfig } => {
  const { type = 'BTR3' } = props

  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.link.colors),
    ...(THEME_CONFIG[theme.key].components.link.sizes),
    ...textStyle[textLevels[type]]
  }), [theme, type])

  return { ...props, cssConfig }
}
