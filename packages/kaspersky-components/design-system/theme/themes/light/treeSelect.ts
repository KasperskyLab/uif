import { ComponentThemeContext } from '../config'
import { select } from './select'
import { tree } from './tree'
import { TreeSelectColorConfig } from '@src/tree-select/types'

export const treeSelect = ({ colors }: ComponentThemeContext): TreeSelectColorConfig => ({
  select: select({ colors }),
  tree: tree({ colors })
})
