import { TreeSelectColorConfig } from '@src/tree-select/types'

import { ComponentThemeContext } from '../config'

import { select } from './select'
import { tree } from './tree'

export const treeSelect = ({ colors, effects }: ComponentThemeContext): TreeSelectColorConfig => ({
  select: select({ colors, effects }),
  tree: tree({ colors, effects })
})
