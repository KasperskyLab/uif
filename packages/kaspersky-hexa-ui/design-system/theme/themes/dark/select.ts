import { SelectColorConfig } from '@src/select/types'

import { ComponentThemeContext } from '../config'
import { select as defaultSelect } from '../light/select'

export const select = ({ colors, effects }: ComponentThemeContext): SelectColorConfig =>
  defaultSelect({ colors, effects })
