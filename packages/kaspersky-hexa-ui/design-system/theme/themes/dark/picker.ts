import { PickerColorConfig } from '@src/datepicker/types'

import { ComponentThemeContext } from '../config'
import { picker as defaultPicker } from '../light/picker'

export const picker = ({ colors, effects }: ComponentThemeContext): PickerColorConfig =>
  defaultPicker({ colors, effects })
