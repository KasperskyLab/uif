import { DataNode, Key, ITreeProps } from './types'

export function hasUncheckedChildren (node: DataNode, checked: Set<Key>): boolean {
  if (!node.children) {
    return false
  }

  for (const child of node.children) {
    if (!checked.has(child.key)) {
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
