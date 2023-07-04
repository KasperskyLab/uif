import { useMemo } from 'react'
import { useTheme } from '@design-system/theme/hooks'
import { THEME_CONFIG } from '@design-system/theme/themes/config'
import { FormLabelProps, FormLabelColorConfig } from '@src/form-label/types'

export const useThemedFormLabel = <T extends FormLabelProps>(props: T) => {
  const {
    theme: themeFromProps,
    mode = 'primary',
    disabled = false,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<FormLabelColorConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.formLabel.colors[disabled ? 'disabled' : mode])
  }), [theme, mode, disabled])

  return { ...rest, disabled, cssConfig }
}
