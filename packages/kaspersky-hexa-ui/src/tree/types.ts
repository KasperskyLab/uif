import { Focus } from '@design-system/tokens/focus'
import { ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import type { TreeNodeProps } from 'antd'
import type { NodeDragEventParams } from 'rc-tree/lib/contextTypes'
import type { BasicDataNode, DataNode as AntdDataNode, EventDataNode, Key } from 'rc-tree/lib/interface'
import React, { PropsWithChildren, ReactNode } from 'react'

export type { EventDataNode, Key, NodeDragEventParams }

export type NodeDropEventParams = NodeDragEventParams & {
  dragNode: EventDataNode,
  dragNodesKeys: Key[],
  dropPosition: number,
  dropToGap: boolean
}

export type DraggableFn = (node: DataNode) => boolean

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
  event: string,
  node: EventDataNode,
  checked: boolean,
  nativeEvent: MouseEvent,
  checkedNodes: (BasicDataNode | AntdDataNode)[],
  halfCheckedKeys?: Key[]
}

export type DataNode = AntdDataNode & {
  _action?: boolean,
  children?: DataNode[]
}

export type TreeCommonProps = TreeThemeProps & TestingProps & {
  /** Load data asynchronously */
  loadData?: (treeNode: EventDataNode) => Promise<void>,
  /** Custom treeNode icon */
  icon?: React.ReactNode | ((props: TreeNodeProps) => React.ReactNode),
  /** Callback function for when the onSelect event occurs */
  onSelect?: (selectedKeys: Key[], info: {
    event: 'select',
    selected: boolean,
    node: EventDataNode,
    selectedNodes: (BasicDataNode | AntdDataNode)[],
    nativeEvent: MouseEvent
  }) => void,
  /** Shows an icon before a TreeNode's title. There is no default for this */
  showIcon?: boolean,
  /** Specifies the keys of the selected treeNodes */
  selectedKeys?: Key[],
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
  onCheck?: (checkedKeys: Key[] | { checked: Key[], halfChecked: Key[] }, e: TreeCheckEvent) => void,
  /** Specifies the keys of the checked treeNodes */
  checkedKeys?: Key[] | undefined,
  /** Callback function for when a treeNode is expanded or collapsed */
  onExpand?: (newExpandedKeys: Key[], info: { node: EventDataNode, expanded: boolean, nativeEvent: MouseEvent }) => void | undefined,
  /** Specifies the keys of the expanded treeNodes */
  expandedKeys?: Key[] | undefined,
  /** Callback function for when a treeNode is loaded by loadData function */
  onLoad?: (loadedKeys: Key[], info: { event: 'load', node: EventDataNode }) => void | undefined,
  /** Specifies the keys of the loaded treeNodes by loadData function */
  loadedKeys?: Key[] | undefined,
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
  /** Custom render action. Children is ActionButton(Gear) */
  renderAction?: ({ children, node }: PropsWithChildren<{ node: DataNode }>) => void,
  /** Custom action icon. Default is <SettingsGear /> */
  actionIcon?: ReactNode,
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
  onSelect?: TreeCommonProps['onSelect']
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
  icon?: TreeCommonProps['icon']
}
