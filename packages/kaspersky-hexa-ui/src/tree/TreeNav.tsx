import { TreeNodeProps } from 'antd'
import React from 'react'

import { Spinner, Tree, TreeNodeCheckIcon } from './Tree'
import { DataNode, TreeNavProps } from './types'

function Icon (props: TreeNodeProps & { multiple?: boolean }) {
  if (props.multiple) {
    return (
      <>
        {props.loading && <Spinner />}
        <TreeNodeCheckIcon {...props} multiple />
      </>
    )
  }

  if (props.loading) {
    return <Spinner />
  }

  return null
}

export const TreeNav: React.FC<TreeNavProps> = ({
  multiple = false,
  selectable = true,
  ...props
}) => {
  const hasIcons = (treeData: DataNode[]): boolean =>
    treeData.some(node => {
      if (node.icon) return true
      if (node.children) return hasIcons(node.children)
      return false
    })

  const treeDataHasIcons = props.treeData ? hasIcons(props.treeData) : false

  return (
    <Tree
      interactive
      checkable
      icon={treeDataHasIcons ? () => null : nodeProps => <Icon {...nodeProps} multiple={multiple} />}
      multiple={multiple}
      selectable={selectable}
      {...props}
    />
  )
}
