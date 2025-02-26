import { Tree, TreeListProps } from '@src/tree'
import React from 'react'
import styled from 'styled-components'

const StyledTreeList = styled(Tree)`
  && {
    .ant-tree-treenode {
      margin: 0;
    }
  }
`

export const TreeList: React.FC<TreeListProps> = ({
  mode,
  ...props
}) => {
  switch (mode) {
    case 'readOnly':
      return <StyledTreeList selectable={false} checkable={false} disableNodeBg {...props} />
    case 'singleChoice':
      return <StyledTreeList selectable={false} checkable disableNodeBg multiple={false} allowUncheck={false} {...props} />
    case 'multipleChoice':
      return <StyledTreeList selectable={false} checkable disableNodeBg multiple {...props} />
    default:
      return null
  }
}

TreeList.defaultProps = {
  checkChildren: true,
  checkParents: false,
  checkStrictly: false,
  disabled: false,
  draggable: false,
  invalid: false,
  mode: 'readOnly'
}
