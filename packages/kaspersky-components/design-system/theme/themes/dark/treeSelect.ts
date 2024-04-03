import { ComponentThemeContext } from '../config'
import { treeSelect as defaultTreeSelect } from '../light/treeSelect'
import { TreeSelectColorConfig } from '@src/tree-select/types'

export const treeSelect = ({ colors }: ComponentThemeContext): TreeSelectColorConfig => defaultTreeSelect({ colors })
