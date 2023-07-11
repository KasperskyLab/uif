import { useTheme } from '../../design-system/theme/hooks'
import { useMemo } from 'react'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ICheckboxProps, ICheckboxViewProps } from './types'

export const useThemedCheckbox = (props: ICheckboxProps): ICheckboxViewProps => {
  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.checkbox.colors)
  }), [theme])
  return { ...props, cssConfig }
}
