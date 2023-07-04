import { useTheme } from '../../design-system/theme/hooks'
import { useMemo } from 'react'
import { IToggleProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'

export const useThemedToggle = (props: IToggleProps): IToggleProps => {
  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.toggle.colors)
  }), [theme])
  return { ...props, cssConfig }
}
