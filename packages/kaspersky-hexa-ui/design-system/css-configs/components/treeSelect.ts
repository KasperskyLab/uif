import { ComponentContext } from '@design-system/css-configs/types'
import { TreeSelectColorConfig } from '@src/tree-select/types'

import { select } from './select'
import { tree } from './tree'

export const treeSelect = ({ effects }: ComponentContext): TreeSelectColorConfig => ({
  select: select({ effects }),
  tree: tree({ effects })
})
