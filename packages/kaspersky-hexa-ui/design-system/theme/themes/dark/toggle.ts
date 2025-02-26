import { ToggleColorConfig } from '@src/toggle/types'

import { ComponentThemeContext } from '../config'
import { toggle as defaultToggle } from '../light/toggle'

export const toggle = ({ colors, effects }: ComponentThemeContext): ToggleColorConfig => defaultToggle({ colors, effects })
