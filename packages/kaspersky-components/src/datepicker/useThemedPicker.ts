import { useMemo } from 'react'
import {
  CalendarProps,
  CalendarViewProps,
  RangePickerProps,
  RangePickerViewProps,
  PickerThemeProps,
  PickerCssConfig
} from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'
import { useThemedTextbox } from '@src/input'

export const useThemedPicker = <T extends CalendarProps | RangePickerProps>(props: T): T extends CalendarProps ? CalendarViewProps : RangePickerViewProps => {
  const { cssConfig: pickerCssConfig, ...rest } = useThemedComponent<
    T,
    PickerCssConfig,
    PickerThemeProps
  >(props, {
    componentName: 'picker',
    defaultValues: {}
  })

  const { cssConfig: inputCssConfig } = useThemedTextbox(props)

  const cssConfig = useMemo(
    () => ({ inputCssConfig, pickerCssConfig }),
    [inputCssConfig, pickerCssConfig]
  )

  return { ...rest, cssConfig }
}
