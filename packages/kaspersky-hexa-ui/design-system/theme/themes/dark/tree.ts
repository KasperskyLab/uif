import { TreeColorConfig } from '@src/tree/types'

import { ComponentThemeContext } from '../config'
import { tree as defaultTree } from '../light/tree'

export const tree = ({ colors, effects }: ComponentThemeContext): TreeColorConfig => defaultTree({ colors, effects })
