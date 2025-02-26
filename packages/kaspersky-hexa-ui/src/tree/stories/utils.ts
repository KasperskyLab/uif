import { DataNode, Key } from '../types'

export function getKeys (nodes: DataNode[]) {
  const out: Key[] = []

  for (const node of nodes) {
    out.push(node.key)

    if (node.children) {
      out.push(...getKeys(node.children))
    }
  }

  return out
}

export function generateTreeData (num: number, config = { depth: 3, width: 3 }): DataNode[] {
  const nodes: DataNode[] = []
  let currentRootWidth = 0
  let currentNum = 0

  function isNumberOfNodesExceeded () {
    return currentNum >= num
  }

  function flipCoin () {
    return Math.random() < 0.5
  }

  function createNode (key: string, currentDepth: number): DataNode {
    const node: DataNode = {
      key,
      isLeaf: true,
      title: key
    }
    currentNum++

    if (!isNumberOfNodesExceeded() && config.depth > currentDepth && flipCoin()) {
      node.isLeaf = false
      node.children = []

      let childrenNumber = 0

      while (true) {
        node.children.push(createNode(`${key}-${childrenNumber++}`, currentDepth + 1))

        if (isNumberOfNodesExceeded() || config.width === childrenNumber || flipCoin()) {
          break
        }
      }
    }

    return node
  }

  function createRootNode (): DataNode {
    return createNode(`0-${currentRootWidth++}`, 1)
  }

  while (!isNumberOfNodesExceeded()) {
    nodes.push(createRootNode())
  }

  return nodes
}
