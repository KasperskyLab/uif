import React, { FC } from 'react'
import styled from 'styled-components'
import { Tree as TreeAntd } from 'antd'
import { useThemedTree } from './useThemedTree'
import { ITreeProps, TreeCssConfig } from './types'
import { treeCss } from './treeCss'

const StyledTreeView = styled(TreeAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${treeCss}`

export const TreeView: FC<ITreeProps & { cssConfig: TreeCssConfig }> = ({
  componentId,
  treeData,
  checkable = false,
  disabled = false,
  selectable = true,
  draggable = false,
  showLine = false,
  checkStrictly = false,
  onCheck = undefined,
  ...props
}) => {
  return (
    <StyledTreeView
      data-component-id={componentId}
      treeData={treeData}
      checkable={checkable}
      disabled={disabled}
      selectable={selectable}
      draggable={draggable}
      showLine={showLine}
      checkStrictly={checkStrictly}
      // @ts-ignore
      onCheck={onCheck}
      {...props}
    />
  )
}

export const Tree = (rawProps: ITreeProps): JSX.Element => {
  const props = useThemedTree(rawProps)
  return <TreeView {...props} />
}
