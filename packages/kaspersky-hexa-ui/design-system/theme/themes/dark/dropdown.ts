import { DropdownColorConfig } from '@src/dropdown/types'

import { ComponentThemeContext } from '../config'
import { dropdown as defaultDropdown } from '../light/dropdown'

export const dropdown = ({ colors, effects }: ComponentThemeContext): DropdownColorConfig =>
  defaultDropdown({ colors, effects })
