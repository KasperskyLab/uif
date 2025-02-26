import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'
import { useThemedTextbox } from '@src/input/useThemedTextbox'
import { useMemo } from 'react'

import {
  CalendarProps,
  CalendarViewProps,
  PickerCssConfig,
  PickerThemeProps,
  RangePickerProps,
  RangePickerViewProps
} from './types'

export const useThemedPicker = <T extends CalendarProps | Omit<RangePickerProps, 'mode'>>(props: T): T extends CalendarProps ? CalendarViewProps : RangePickerViewProps => {
  const { cssConfig: pickerCssConfig, ...rest } = useComponentCssConfig<
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
