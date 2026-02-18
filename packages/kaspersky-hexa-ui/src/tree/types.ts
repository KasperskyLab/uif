import { Focus } from '@design-system/tokens/focus'
import { ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { TreeProps } from 'antd'
import type { NodeDragEventParams } from 'rc-tree/lib/contextTypes'
import type { DataNode as BaseDataNode, EventDataNode, Key } from 'rc-tree/lib/interface'
import React from 'react'

export type { EventDataNode, Key, NodeDragEventParams, TreeProps }

export type NodeDropEventParams = NodeDragEventParams & {
  dragNode: EventDataNode,
  dragNodesKeys: Key[],
  dropPosition: number,
  dropToGap: boolean
}

export type DraggableFn = (node: DataNode) => boolean;

export interface DraggableConfig {
  icon?: React.ReactNode | false,
  nodeDraggable?: DraggableFn
}

export type StateProps = {
  backgroundSelected?: string,
  colorSelected?: string,
  background?: string,
  color?: string,
  lineColor?: string,
  arrowColor?: string
}

export type TreeColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  error: { border: string }
}

export type TreeThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export type TreeCheckEvent = {
  checked: boolean,
  halfCheckedKeys: [],
  event: Record<string, string>,
  checkedNodes: Record<string, string>[],
  node: { checked: boolean, key: string }
}

export type DataNode = BaseDataNode & {
  _action?: boolean,
  children?: DataNode[]
}

type TreeCommonProps = TreeThemeProps & Pick<TreeProps, 'loadData' | 'icon' | 'onSelect' | 'showIcon' | 'selectedKeys'> & TestingProps & {
  /** The treeNodes data Array, if set it then you need not construct children TreeNode.
   * (key should be unique across the whole array) */
  treeData?: DataNode[],
  /** Whether disabled the tree */
  disabled?: boolean,
  /** Specifies whether this Tree or the node is draggable */
  draggable?: DraggableFn | boolean | DraggableConfig,
  /** Show tree line */
  showLine?: boolean,
  /** Whether to check children if the parent node is checked. Has no effect if checkStrictly is true */
  checkChildren?: boolean,
  /** Whether to check/half check/uncheck parents if the node is checked. Has no effect if checkStrictly is true */
  checkParents?: boolean,
  /** Check treeNode precisely; parent treeNode and children treeNodes are not associated */
  checkStrictly?: boolean,
  /** Callback function for when the onCheck event occurs */
  onCheck?: (checkedKeys: Key[], e: TreeCheckEvent) => void | undefined,
  /** Specifies the keys of the checked treeNodes */
  checkedKeys?: string[] | undefined,
  /** Callback function for when a treeNode is expanded or collapsed */
  onExpand?: (newExpandedKeys: string[], info: { node: EventDataNode, expanded: boolean }) => void | undefined,
  /** Specifies the keys of the expanded treeNodes */
  expandedKeys?: string[] | undefined,
  /** Callback function for when a treeNode is loaded by loadData function */
  onLoad?: (newExpandedKeys: string[]) => void | undefined,
  /** Specifies the keys of the loaded treeNodes by loadData function */
  loadedKeys?: string[] | undefined,
  /** Whether to automatically expand a parent treeNode */
  autoExpandParent?: boolean,
  /** Callback function for when the onDragStart event occurs */
  onDragStart?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragEnter event occurs */
  onDragEnter?: (
    info: NodeDragEventParams & {
      expandedKeys: Key[]
    }
  ) => void,
  /** Callback function for when the onDragOver event occurs */
  onDragOver?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragLeave event occurs */
  onDragLeave?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragEnd event occurs */
  onDragEnd?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDrop event occurs */
  onDrop?: (info: NodeDropEventParams) => void,
  /** Callback function for when the onClick event occurs on settings button */
  onActionClick?: (node: DataNode) => void,
  /** Specify the keys of the default checked treeNodes */
  defaultCheckedKeys?: Key[],
  /** Specify the keys of the default expanded treeNodes */
  defaultExpandedKeys?: Key[],
  /** Whether treeNode fill remaining horizontal space */
  blockNode?: boolean,
  /** Whether user can uncheck an item */
  allowUncheck?: boolean,
  /** Config virtual scroll height. Will not support horizontal scroll when enable this */
  height?: number,
  /** Disable virtual scroll when set to false */
  virtual?: boolean,
  /** Is invalid */
  invalid?: boolean
}

export type TreeNavProps = TreeCommonProps & {
  multiple?: boolean,
  selectable?: boolean,
  onSelect?: TreeProps['onSelect']
}

export type TreeListProps = TreeCommonProps & {
  mode?: 'multipleChoice' | 'singleChoice' | 'readOnly'
}

export type ITreeProps = TreeCommonProps & {
  interactive?: boolean,
  checkable?: boolean,
  selectable?: boolean,
  disableNodeBg?: boolean,
  multiple?: boolean,
  icon?: TreeProps['icon']
}
