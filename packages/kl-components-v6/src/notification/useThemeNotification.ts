import { useMemo } from 'react'
import { NotificationCssConfig, NotificationProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemedNotification = <T extends NotificationProps>(props: T) => {
  const {
    mode,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<NotificationCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.notification.colors.common),
    ...(THEME_CONFIG[theme.key].components.notification.colors[mode])
  }), [theme, mode])

  return { ...rest, mode, cssConfig }
}
