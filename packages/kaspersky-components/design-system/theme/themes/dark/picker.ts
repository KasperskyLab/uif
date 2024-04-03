import { picker as defaultPickerCreator } from '../light/picker'
import { ComponentThemeContext } from '../config'
import { PickerColorConfig } from '@src/datepicker/types'

export const picker = ({ colors }: ComponentThemeContext): PickerColorConfig => {
  const defaultPicker = defaultPickerCreator({ colors })

  return {
    ...defaultPicker,
    boxShadow: '0px 3px 5px 0px rgba(24, 24, 34, 0.60), 0px 0px 1px 0px rgba(247, 248, 249, 0.64)'
  }
}
