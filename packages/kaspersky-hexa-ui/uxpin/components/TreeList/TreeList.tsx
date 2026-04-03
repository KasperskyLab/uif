import React from 'react'

import { TreeList as HexaTreeList } from '@src/tree'
import { TreeListProps } from '@src/tree/types'

import { previewTreeData } from '../../preview'

const TreeList = ({
  mode = 'multipleChoice',
  treeData = previewTreeData,
  ...props
}: TreeListProps): JSX.Element => <HexaTreeList mode={mode} treeData={treeData} {...props} />

export default TreeList
