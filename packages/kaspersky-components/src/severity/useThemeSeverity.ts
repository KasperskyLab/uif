import { useMemo } from 'react'
import { SeverityCssConfig, SeverityProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedSeverity = <T extends SeverityProps>(props: T) => {
  const {
    mode,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<SeverityCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.severity[mode])
  }), [theme, mode])

  return { ...rest, mode, cssConfig }
}
