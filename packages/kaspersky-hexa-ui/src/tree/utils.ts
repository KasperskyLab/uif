import { DataNode, ITreeProps, Key, NodeDropEventParams } from './types'

export function hasUncheckedChildren (node: DataNode, checked: Set<Key>): boolean {
  if (!node.children) {
    return false
  }

  for (const child of node.children) {
    if (!checked.has(child.key)) {
      return true
    }

    if (hasUncheckedChildren(child, checked)) {
      return true
    }
  }

  return false
}

export function checkNode (node: DataNode, checkChildren: boolean, checked: Set<Key>, halfChecked: Set<Key>): void {
  if (checkChildren) {
    checked.add(node.key)
    halfChecked.delete(node.key)

    if (!node.children) {
      return
    }

    for (const child of node.children) {
      checkNode(child, checkChildren, checked, halfChecked)
    }
  } else {
    if (hasUncheckedChildren(node, checked)) {
      halfChecked.add(node.key)
    } else {
      checked.add(node.key)
    }
  }
}

export function uncheckNode (node: DataNode, uncheckChildren: boolean, checked: Set<Key>, halfChecked: Set<Key>): void {
  checked.delete(node.key)
  halfChecked.delete(node.key)

  if (!uncheckChildren || !node.children) {
    return
  }

  for (const child of node.children) {
    uncheckNode(child, uncheckChildren, checked, halfChecked)
  }
}

export function getParents (treeData: ITreeProps['treeData']): Record<Key, DataNode> {
  const out: Record<Key, DataNode> = {}

  const collect = (node: DataNode) => {
    if (!node.children) {
      return
    }

    for (const child of node.children) {
      out[child.key] = node

      collect(child)
    }
  }

  if (treeData) {
    treeData.forEach(collect)
  }

  return out
}

export function getNodes (treeData: ITreeProps['treeData']): Record<Key, DataNode> {
  const out: Record<Key, DataNode> = {}

  const collect = (node: DataNode) => {
    out[node.key] = node

    node.children?.forEach(collect)
  }

  if (treeData) {
    treeData.forEach(collect)
  }

  return out
}

export function sortCheckedKeys (treeData: ITreeProps['treeData'], keys?: Key[]): { checked: Key[], halfChecked: Key[] } {
  if (!keys) {
    return { checked: [], halfChecked: [] }
  }

  const nodes = getNodes(treeData)
  const checked: Key[] = []
  const halfChecked: Key[] = []

  for (const key of keys) {
    if (!nodes[key]) {
      continue
    }

    if (hasUncheckedChildren(nodes[key], new Set(keys))) {
      halfChecked.push(key)
    } else {
      checked.push(key)
    }
  }

  return { checked, halfChecked }
}

export function hasRecursiveChildren (
  node: DataNode,
  checked: Set<Key>,
  shouldBeChecked: boolean
): boolean {
  function check (childNode: DataNode): boolean {
    if (shouldBeChecked) {
      if (checked.has(childNode.key)) return true
    } else {
      if (!checked.has(childNode.key) && node.key !== childNode.key) return true
    }

    const children = childNode.children || []
    for (let i = 0; i < children.length; i++) {
      const childNode = children[i] as DataNode
      if (check(childNode)) {
        return true
      }
    }

    return false
  }

  return check(node)
}

export function applyDropToTreeData (info: NodeDropEventParams, treeData: DataNode[]): DataNode[] {
  // copy pasted from antd docs
  const dropKey = info.node.key
  const dragKey = info.dragNode.key
  const dropPos = info.node.pos.split('-')
  const dropPosition =
    info.dropPosition - Number(dropPos[dropPos.length - 1])

  const loop = (
    data: DataNode[],
    key: React.Key,
    callback: (node: DataNode, i: number, data: DataNode[]) => void
  ) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        return callback(data[i], i, data)
      }
      if (data[i].children) {
        loop(data[i].children!, key, callback)
      }
    }
  }
  const data = [...treeData]

  let dragObj: DataNode
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1)
    dragObj = item
  })

  if (!info.dropToGap) {
    loop(data, dropKey, (item) => {
      item.children = item.children || []
      item.children.unshift(dragObj)
    })
  } else if (
    ((info.node as any).props.children || []).length > 0 &&
    (info.node as any).props.expanded &&
    dropPosition === 1
  ) {
    loop(data, dropKey, (item) => {
      item.children = item.children || []
      item.children.unshift(dragObj)
    })
  } else {
    let ar: DataNode[] = []
    let i: number
    loop(data, dropKey, (_item, index, arr) => {
      ar = arr
      i = index
    })
    if (dropPosition === -1) {
      ar.splice(i!, 0, dragObj!)
    } else {
      ar.splice(i! + 1, 0, dragObj!)
    }
  }

  return data
}
