import { Link } from '@src/link'
import { Search } from '@src/search'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import {
  DataNode,
  Key,
  TreeCommonProps,
  TreeList,
  TreeListProps
} from '@src/tree'
import { P, Text } from '@src/typography'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

import { getParents, isRootNode } from '../utils'

const StyledTreeList = styled(TreeList)<{
  $showFoundCount?: boolean
}>`
  ${({ $showFoundCount }) => $showFoundCount && `
    .ant-tree-indent,
    .ant-tree-switcher {
      display: none;
    }
    .ant-tree-list .ant-tree-list-holder .ant-tree-treenode {
      gap: 0;
      padding-inline-start: 0;
      border-inline-start: none;
    }
  `}
`

const getNodeTitle = (node: DataNode): string =>
  typeof node.title === 'string' ? node.title : ''

const isMatched = (node: DataNode, query: string): boolean =>
  getNodeTitle(node).toLowerCase().includes(query.toLowerCase())

const filterTreeData = (nodes: DataNode[], query: string): DataNode[] => {
  const out: DataNode[] = []

  for (const node of nodes) {
    const children = node.children ? filterTreeData(node.children, query) : []

    if (!isMatched(node, query) && !children.length) {
      continue
    }

    if (children.length) {
      out.push({ ...node, children })
    } else if (isRootNode(node, nodes) && node.children) {
      out.push({ ...node, children: node.children })
    } else {
      out.push({ ...node, children: undefined, isLeaf: true })
    }
  }

  return out
}

const collectMatchedNodes = (nodes: DataNode[], query: string, out: DataNode[] = []): DataNode[] => {
  for (const node of nodes) {
    if (isMatched(node, query)) {
      out.push(node)
    }

    if (node.children) {
      collectMatchedNodes(node.children, query, out)
    }
  }

  return out
}

const collectSelectableKeys = (nodes: DataNode[], out: Key[] = []): Key[] => {
  for (const node of nodes) {
    if (!node.disabled) {
      out.push(node.key)
    }

    if (node.children) {
      collectSelectableKeys(node.children, out)
    }
  }

  return out
}

const getNodesByKey = (nodes: DataNode[], out: Record<Key, DataNode> = {}): Record<Key, DataNode> => {
  for (const node of nodes) {
    out[node.key] = node

    if (node.children) {
      getNodesByKey(node.children, out)
    }
  }

  return out
}

type TreeWithSearchProps = TreeListProps & {
  title?: string,
  treeData: DataNode[],
  showFoundCount?: boolean
}

export const TreeWithSearch = ({
  title = 'Title',
  treeData,
  showFoundCount = false,
  ...rest
}: TreeWithSearchProps) => {
  const [query, setQuery] = useState('')
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([])
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(() => new Set())

  const nodesByKey = useMemo(() => getNodesByKey(treeData), [treeData])
  const parents = useMemo(() => getParents(treeData), [treeData])
  const isSearchApplied = query.trim().length > 0

  const visibleTreeData = useMemo(
    () => isSearchApplied ? filterTreeData(treeData, query.trim()) : treeData,
    [treeData, query, isSearchApplied]
  )

  const matchedNodes = useMemo(
    () => isSearchApplied ? collectMatchedNodes(treeData, query.trim()) : [],
    [treeData, query, isSearchApplied]
  )

  const treeCheckedKeys = useMemo(() => {
    const keys = new Set(selectedKeys)

    selectedKeys.forEach(key => {
      let parent = parents[key]

      while (parent && !keys.has(parent.key)) {
        keys.add(parent.key)
        parent = parents[parent.key]
      }
    })

    return Array.from(keys)
  }, [selectedKeys, parents])

  const handleCheck: NonNullable<TreeCommonProps['onCheck']> = (_, event) => {
    const node = nodesByKey[event.node.key]

    if (!node) {
      return
    }

    const subtreeKeys = collectSelectableKeys([node])
    const isChecked = subtreeKeys.every(key => selectedKeys.has(key))
    const next = new Set(selectedKeys)

    subtreeKeys.forEach(key => isChecked ? next.delete(key) : next.add(key))

    setSelectedKeys(next)
  }

  const action = useMemo(() => {
    const selectAll = () => setSelectedKeys(new Set(collectSelectableKeys(treeData)))

    const selectFound = () => setSelectedKeys(new Set(collectSelectableKeys(matchedNodes)))

    const resetAll = () => setSelectedKeys(new Set())

    if (selectedKeys.size > 0) {
      return { text: isSearchApplied ? 'Reset all' : 'Reset', onClick: resetAll }
    }

    if (isSearchApplied) {
      const selectText = showFoundCount
        ? `Select found (${matchedNodes.length})`
        : 'Select found'
      return { text: selectText, onClick: selectFound }
    }

    return { text: 'Select all', onClick: selectAll }
  }, [selectedKeys.size, isSearchApplied, showFoundCount, matchedNodes, treeData])

  return (
    <Space direction="vertical" gap="grouped" align="start" width="300px">
      <Text type="H5">{title}</Text>
      <Search
        value={query}
        onChange={value => setQuery(value)}
        onClearClick={() => setQuery('')}
      />
      <Space gap="related">
        <Text>Selected: {selectedKeys.size}</Text>
        <Link onClick={action.onClick}>{action.text}</Link>
      </Space>
      {visibleTreeData.length
        ? (
            <StyledTreeList
              {...rest}
              $showFoundCount={showFoundCount}
              mode="multipleChoice"
              treeData={visibleTreeData}
              checkedKeys={treeCheckedKeys}
              onCheck={handleCheck}
              expandedKeys={expandedKeys}
              onExpand={keys => setExpandedKeys(keys)}
              autoExpandParent={false}
            />
          )
        : <Text type="BTR3">Nothing found</Text>}
    </Space>
  )
}

export const TreeWithSearchInfo = () => (
  <SectionMessage mode="info">
    <P>
      Композиция «дерево + поиск»: {'<Search />'} фильтрует treeData, оставляя только совпавшие узлы и их родителей.
      По умолчанию ветки не раскрываются и остаются в том состоянии, в котором были до применения поиска.
    </P>
    <P>Пример реализации можно посмотреть в коде данной стори.</P>
    <P>Используемые компоненты: {'<TreeList />'}, {'<Search />'}, {'<Text />'}, {'<Link />'}, {'<Space />'}.</P>
  </SectionMessage>
)
