import * as React from 'react'
import { ThemeKey } from '@design-system/types'
import type { NodeDragEventParams } from 'rc-tree/lib/contextTypes'
import type { EventDataNode, Key, DataNode } from 'rc-tree/lib/interface'
import { TreeProps } from 'antd'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type { NodeDragEventParams, EventDataNode, Key, DataNode, TreeProps }

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
  textColor?: string,
  lineColor?: string,
  arrowColor?: string,
  background?: string,
  borderColor?: string
}

type treeNodeStateProps = {
  textColor?: string,
  background?: string,
  borderColor?: string
}

type treeNodeState = {
  normal?: treeNodeStateProps,
  hover?: treeNodeStateProps,
  active?: treeNodeStateProps,
  focus?: treeNodeStateProps,
  disabled?: treeNodeStateProps,
  drag?: treeNodeStateProps
}

export type TreeColorConfig = {
  normal?: StateProps,
  focus?: StateProps,
  dropIndicator?: StateProps,
  treeNode?: {
    unselected: treeNodeState,
    selected: treeNodeState
  }
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

type TreeCommonProps = TreeThemeProps & Pick<TreeProps, 'loadData'> & TestingProps & {
  /** The treeNodes data Array, if set it then you need not construct children TreeNode.
   * (key should be unique across the whole array) **/
  treeData?: TreeProps['treeData'],
  /** Whether disabled the tree */
  disabled?: boolean,
  /** Specifies whether this Tree or the node is draggable */
  draggable?: DraggableFn | boolean | DraggableConfig,
  /** Shows a connecting line **/
  showLine?: boolean | { showLeafIcon: boolean },
  /** Whether to check children if the parent node is checked. Has no effect if checkStrictly is true **/
  checkChildren?: boolean,
  /** Check treeNode precisely; parent treeNode and children treeNodes are not associated **/
  checkStrictly?: boolean,
  /** Callback function for when the onCheck event occurs */
  onCheck?: (checkedKeys: Key[], e: TreeCheckEvent) => void | undefined,
  /** Specifies the keys of the checked treeNodes **/
  checkedKeys?: string[] | undefined,
  /** Callback function for when a treeNode is expanded or collapsed **/
  onExpand?: (newExpandedKeys: string[]) => void | undefined,
  /** Specifies the keys of the expanded treeNodes **/
  expandedKeys?: string[] | undefined,
  /** Whether to automatically expand a parent treeNode **/
  autoExpandParent?: boolean,
  /** Callback function for when the onDragStart event occurs **/
  onDragStart?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragEnter event occurs **/
  onDragEnter?: (
    info: NodeDragEventParams & {
      expandedKeys: Key[]
    }
  ) => void,
  /** Callback function for when the onDragOver event occurs **/
  onDragOver?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragLeave event occurs **/
  onDragLeave?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDragEnd event occurs **/
  onDragEnd?: (info: NodeDragEventParams) => void,
  /** Callback function for when the onDrop event occurs **/
  onDrop?: (info: NodeDropEventParams) => void,
  /** Specify the keys of the default checked treeNodes **/
  defaultCheckedKeys?: Key[],
  /** Specify the keys of the default expanded treeNodes **/
  defaultExpandedKeys?: Key[],
  /** Whether treeNode fill remaining horizontal space **/
  blockNode?: boolean,
  /** Whether user can uncheck an item **/
  allowUncheck?: boolean
}

export type TreeNavProps = TreeCommonProps & {
  multiple?: boolean
}

export type TreeListProps = TreeCommonProps & {
  mode?: 'multipleChoice' | 'singleChoice' | 'readOnly'
}

export type ITreeProps = TreeCommonProps & {
  checkable?: boolean,
  selectable?: boolean,
  disableNodeBg?: boolean,
  multiple?: boolean,
  icon?: TreeProps['icon']
}

export type TreeCssConfig = TreeColorConfig

export type TreeViewProps = ToViewProps<ITreeProps, TreeCssConfig, TreeThemeProps>
