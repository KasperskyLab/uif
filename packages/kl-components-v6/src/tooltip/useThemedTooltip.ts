import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ITooltipProps, TooltipCssConfig } from './types'

export type ThemedTooltipProps = ITooltipProps & { cssConfig: TooltipCssConfig }

export const useThemedTooltip = (props: ITooltipProps): ThemedTooltipProps => {
  const {
    theme: themeFromProps
  } = props
  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo(() => ({
    background: THEME_CONFIG[theme.key].colors.bg['base-invert'],
    color: THEME_CONFIG[theme.key].colors['text-icons-elements']['primary-invert']
  }), [theme])

  return { ...props, cssConfig }
}
