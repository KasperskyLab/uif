import React from 'react'
import { StoryObj as Story, Meta } from '@storybook/react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { DataNode, TreeList, TreeListProps, TreeNav, TreeNavProps } from '@src/tree'
import { TreeProps } from 'antd'
import { generateTreeData, getKeys } from './utils'

const meta: Meta = {
  title: 'Molecules/Tree',
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'tree-test-id',
    klId: 'tree-kl-id'
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export default meta

const treeDataMock: DataNode[] = [
  {
    title: 'Main',
    key: '0-0',
    children: [
      {
        title: 'Categorized assets',
        disabled: true,
        key: '0-0-0',
        children: [
          {
            title: 'Address space',
            key: '0-0-0-0',
            children: [
              {
                title: 'Address space',
                key: '0-0-0-0-0'
              }
            ]
          },
          {
            title: 'Business impact',
            key: '0-0-0-1'
          },
          {
            title: 'Location',
            key: '0-0-0-2'
          }
        ]
      }
    ]
  },
  {
    title: 'KUMA Updater',
    key: '0-1',
    children: [
      {
        title: 'Categorized assets',
        key: '0-1-0',
        children: [
          {
            title: 'Address space',
            key: '0-1-0-0'
          },
          {
            title: 'Business impact',
            key: '0-1-0-1'
          },
          {
            title: 'Location',
            key: '0-1-0-2'
          }
        ]
      }
    ]
  },
  {
    title: 'Shared',
    key: '0-2',
    children: [
      {
        title: 'Categorized assets',
        key: '0-2-0',
        children: [
          {
            title: 'Address space',
            key: '0-2-0-0'
          },
          {
            title: 'Business impact',
            key: '0-2-0-1'
          },
          {
            title: 'Location',
            key: '0-2-0-2'
          }
        ]
      },
      {
        title: 'Org chart',
        key: '0-2-1',
        children: [
          {
            title: 'Shared chart',
            key: '0-2-1-0'
          }
        ]
      },
      {
        title: 'Test chart',
        key: '0-2-2',
        children: [
          {
            title: 'Test common',
            key: '0-2-2-0'
          }
        ]
      }
    ]
  }
]

export const TreeListReadOnly: Story = {
  render: () => (
    <TreeList
      mode="readOnly"
      treeData={treeDataMock}
      showLine={{ showLeafIcon: false }}
    />
  )
}

export const TreeListSingleChoice: Story = {
  render: () => (
    <TreeList
      mode="singleChoice"
      treeData={treeDataMock}
      showLine={{ showLeafIcon: false }}
    />
  )
}

export const TreeListMultipleChoice: Story = {
  render: () => (
    <TreeList
      mode="multipleChoice"
      treeData={treeDataMock}
      showLine={{ showLeafIcon: false }}
    />
  )
}

function LoadDataAsynchronously ({ Component, ...props }: { Component: typeof TreeList } & Partial<TreeListProps> | { Component: typeof TreeNav } & Partial<TreeNavProps>) {
  const [treeData, setTreeData] = React.useState<DataNode[]>([
    { key: '0-0', title: '0-0', checkable: false }
  ])

  const updateTreeData = (
    nodes: DataNode[],
    key: React.Key,
    children: DataNode[]
  ): DataNode[] =>
    nodes.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children
        }
      }

      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children)
        }
      }

      return node
    })

  return (
    <Component
      {...props}
      loadData={async (node) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setTreeData(
          updateTreeData(treeData, node.key, [
            {
              key: `${node.key}-0`,
              title: `${node.title}-0`
            },
            {
              key: `${node.key}-1`,
              isLeaf: true,
              title: `${node.title}-1`
            }
          ])
        )
      }}
      treeData={treeData}
    />
  )
}

export const TreeListLoadDataAsynchronously: Story = {
  render: () => <LoadDataAsynchronously Component={TreeList} mode="multipleChoice" />
}

export const TreeNavSingleChoice: Story = {
  render: () => (
    <TreeNav
      multiple={false}
      treeData={treeDataMock}
      showLine={{ showLeafIcon: false }}
    />
  )
}

export const TreeNavMultipleChoice: Story = {
  render: () => (
    <TreeNav
      multiple
      treeData={treeDataMock}
      showLine={{ showLeafIcon: false }}
      onCheck={(checkedKeys) => {
        console.log(checkedKeys)
      }}
    />
  )
}

export const TreeNavMultipleChoiceWithALotOfData: Story = {
  render: () => {
    const treeData = React.useMemo(() => {
      return [
        { key: 'all', title: 'all', children: generateTreeData(400, { depth: 3, width: 10 }) }
      ]
    }, [])
    const defaultExpandedKeys = React.useMemo(() => getKeys(treeData), [treeData])

    return (
      <TreeNav
        defaultExpandedKeys={defaultExpandedKeys}
        multiple
        treeData={treeData}
        showLine={{ showLeafIcon: false }}
      />
    )
  }
}

export const TreeNavLoadDataAsynchronously: Story = {
  render: () => <LoadDataAsynchronously Component={TreeNav} multiple />
}

const defaultData: DataNode[] = generateTreeData(20)

export const Draggable: Story = {
  render: () => {
    const [gData, setGData] = React.useState(defaultData)
    const [expandedKeys] = React.useState(['0-0', '0-0-0', '0-0-0-0'])

    const onDrop: TreeProps['onDrop'] = (info) => {
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
      const data = [...gData]

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
      setGData(data)
    }

    return (
      <TreeNav
        defaultExpandedKeys={expandedKeys}
        draggable
        blockNode
        onDrop={onDrop}
        treeData={gData}
      />
    )
  }
}
