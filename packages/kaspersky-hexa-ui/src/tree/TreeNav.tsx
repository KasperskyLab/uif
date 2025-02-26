import { TreeNodeProps } from 'antd'
import React from 'react'

import { Spinner, Tree, TreeNodeCheckIcon } from './Tree'
import { TreeNavProps } from './types'

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
  ...props
}) => {
  return (
    <Tree
      checkable
      icon={nodeProps => <Icon {...nodeProps} multiple={multiple} />}
      multiple={multiple}
      selectable={false}
      {...props}
    />
  )
}
