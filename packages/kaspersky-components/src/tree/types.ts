import { ThemeKey } from '../../design-system/types'
import { TextSizes } from '../../design-system/tokens'

export type StateProps = {
  color?: string,
  radius?: string,
  bgColor?: string,
  borderColor?: string,
  checkColor?: string,
  checkBgColor?: string,
  outline?: string,
  iconColor?: string
}

export type TreeColorConfig = {
  default?: StateProps,
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}

export type TreeStyleProps = {
  theme?: ThemeKey
}

export type TreeCheckEvent = {
  checked: boolean,
  halfCheckedKeys: [],
  event: Record<string, string>,
  checkedNodes: Record<string, string>[],
  node: { checked: boolean, key: string }
}

export type ITreeProps = TreeStyleProps & {
  /** Unique id */
  componentId?: string,
  /** The treeNodes data Array, if set it then you need not to construct children TreeNode.
   * (key should be unique across the whole array) **/
  treeData?: Record<string, unknown>[],
  /** Add a Checkbox before the treeNodes */
  checkable?: boolean,
  /** Whether disabled the tree */
  disabled?: boolean,
  /** Whether can be selected */
  selectable?: boolean,
  /** Specifies whether this Tree or the node is draggable. */
  draggable?: boolean,
  /** Shows a connecting line **/
  showLine?: boolean | { showLeafIcon: boolean },
  /** Check treeNode precisely; parent treeNode and children treeNodes are not associated **/
  checkStrictly?: boolean,
  /** Callback function for when the onCheck event occurs. */
  onCheck?: (checkedKeys: [], e: TreeCheckEvent) => void | undefined,
  /** Specifies the keys of the checked treeNodes **/
  checkedKeys?: string[] | undefined,
  /** Callback function for when a treeNode is expanded or collapsed **/
  onExpand?: (newExpandedKeys: string[]) => void | undefined,
  /** Specifies the keys of the expanded treeNodes **/
  expandedKeys?: string[] | undefined,
  /** Whether to automatically expand a parent treeNode **/
  autoExpandParent?: boolean
}

export type TreeCssConfig = TreeColorConfig & TextSizes;
