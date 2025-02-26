import { ScrollbarColorConfig } from '@src/scrollbar/types'

import { ComponentThemeContext } from '../config'
import { scrollbar as defaultScrollbar } from '../light/scrollbar'

export const scrollbar = ({ colors, effects }: ComponentThemeContext): ScrollbarColorConfig => defaultScrollbar({ colors, effects })
