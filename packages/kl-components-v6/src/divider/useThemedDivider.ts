import { useMemo } from 'react'

import { DividerCssConfig, IDividerProps, IDividerViewProps } from './types'

import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedDivider = (props: IDividerProps): IDividerViewProps => {
  const {
    mode = 'normal',
    theme: themeFromProps,
    kind = 'horizontal',
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<DividerCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.divider.colors[mode]),
    ...(THEME_CONFIG[theme.key].components.divider.sizes[mode]),
    ...(THEME_CONFIG[theme.key].components.divider.sizes[kind])
  }), [mode, theme])

  return { ...rest, cssConfig, kind }
}
