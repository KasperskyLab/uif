import { ComponentThemeContext } from '../config'
import { dropdown as defaultDropdown } from '../light/dropdown'
import { DropdownColorConfig } from '@src/dropdown/types'

export const dropdown = ({ colors }: ComponentThemeContext): DropdownColorConfig => {
  return {
    ...defaultDropdown({ colors }),
    boxShadowLine: '0px 0px 1px 0px #e0e3e6a3'
  }
}
