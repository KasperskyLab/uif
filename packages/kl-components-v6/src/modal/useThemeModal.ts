import { useMemo } from 'react'
import { ModalProps, ModalCssConfig } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks'

export const useThemeModal = <T extends ModalProps>(props: T) => {
  const {
    mode,
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })
  const themeKey = theme.key

  const cssConfig = useMemo<ModalCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.modal.colors.common),
    ...(THEME_CONFIG[theme.key].components.modal.colors[mode])
  }), [theme, mode])

  return { ...rest, mode, theme: themeKey, cssConfig }
}
