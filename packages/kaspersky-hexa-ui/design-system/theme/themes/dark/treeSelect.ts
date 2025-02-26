import { TreeSelectColorConfig } from '@src/tree-select/types'

import { ComponentThemeContext } from '../config'
import { treeSelect as defaultTreeSelect } from '../light/treeSelect'

export const treeSelect = ({ colors, effects }: ComponentThemeContext): TreeSelectColorConfig => defaultTreeSelect({ colors, effects })
