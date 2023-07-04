import { useMemo } from 'react'
import { useTheme } from '@design-system/theme/hooks'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { LabelCssConfig, ILabelProps } from './types'

export const useThemedLabel = (props: ILabelProps) => {
  const {
    theme: themeFromProps,
    position = 'top',
    type = 'default',
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<LabelCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.label.colors)
  }), [theme])

  return { position, type, ...rest, cssConfig }
}
