import { ComponentThemeContext } from '../config'
import { dropdown as defaultDropdown, dropdownSize as defaultDropdownSize } from '../light/dropdown'

export const dropdown = ({ colors }: ComponentThemeContext) => defaultDropdown({ colors })

export const dropdownSize = defaultDropdownSize
