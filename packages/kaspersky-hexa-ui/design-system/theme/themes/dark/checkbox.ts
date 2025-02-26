import { CheckboxColorConfig } from '@src/checkbox/types'

import { ComponentThemeContext } from '../config'
import { checkbox as defaultCheckbox } from '../light/checkbox'

export const checkbox = ({ colors, effects }: ComponentThemeContext): CheckboxColorConfig =>
  defaultCheckbox({ colors, effects })
