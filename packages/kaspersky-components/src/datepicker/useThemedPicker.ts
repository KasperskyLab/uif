import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { ICalendarProps } from './types'

export const useThemedPicker = (props: ICalendarProps) => {
  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.picker.colors)
  }), [theme])
  return { ...props, cssConfig }
}

export const useThemedPickerInput = (props: ICalendarProps) => {
  const theme = useTheme(props)
  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.pickerInput.colors)
  }), [theme])
  return { ...props, cssConfig }
}
