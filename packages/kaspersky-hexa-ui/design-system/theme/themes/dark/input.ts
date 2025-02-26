import { InputColorConfig } from '@src/input/types'

import { ComponentThemeContext } from '../config'
import { input as defaultInput } from '../light/input'

export const input = ({ colors, effects }: ComponentThemeContext): InputColorConfig => defaultInput({ colors, effects })
