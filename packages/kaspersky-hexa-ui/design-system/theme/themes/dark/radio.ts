import { RadioColorConfig } from '@src/radio/types'

import { ComponentThemeContext } from '../config'
import { radio as defaultRadio } from '../light/radio'

export const radio = ({ colors, effects }: ComponentThemeContext): RadioColorConfig => defaultRadio({ colors, effects })
