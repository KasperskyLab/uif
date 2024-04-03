import { toggle as defaultToggle } from '../light/toggle'
import { ComponentThemeContext } from '../config'
import { ToggleColorConfig } from '@src/toggle/types'

export const toggle = ({ colors }: ComponentThemeContext): ToggleColorConfig => defaultToggle({ colors })
