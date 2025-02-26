import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbFixArrayArgs, sbMergeActions } from '@sb/helpers'
import { applyDropToTreeData, DataNode, TreeList, TreeListProps, TreeNav, TreeNavProps } from '@src/tree'
import { Meta, StoryObj as Story } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'

import { generateTreeData, getKeys } from './utils'

const meta: Meta<typeof TreeList> = {
  title: 'Hexa UI Components/Tree',
  component: TreeList,
  argTypes: {
    allowUncheck: { control: 'boolean' },
    autoExpandParent: { control: 'boolean' },
    blockNode: { control: 'boolean' },
    checkChildren: { control: 'boolean' },
    checkParents: { control: 'boolean' },
    checkStrictly: { control: 'boolean' },
    checkedKeys: { control: 'object' },
    defaultCheckedKeys: { control: 'object' },
    defaultExpandedKeys: { control: 'object' },
    disabled: { control: 'boolean' },
    expandedKeys: { control: 'object' },
    invalid: { control: 'boolean' },
    loadData: {},
    loadedKeys: { control: 'object' },
    treeData: { control: 'object' }
  },
  args: {
    klId: 'tree-kl-id',
    testId: 'tree-test-id'
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*)' },
    badges: [badges.stable, badges.reviewedByDesign],
    controls: {
      exclude: /(componentId|componentType|dataTestId|showLine|theme)/,
      sort: 'alpha'
    },
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

function TreeWrapper ({ Component, ...props }: { Component: typeof TreeList } & Partial<TreeListProps> | { Component: typeof TreeNav } & Partial<TreeNavProps>) {
  const [checkedKeys, setCheckedKeys] = React.useState(props.checkedKeys!)

  React.useEffect(
    () => setCheckedKeys(props.checkedKeys!),
    [props.checkedKeys]
  )

  const props2 = sbMergeActions(
    sbFixArrayArgs({ ...props, checkedKeys }, ['checkedKeys', 'defaultCheckedKeys', 'defaultExpandedKeys', 'expandedKeys']),
    {
      onCheck: keys => setCheckedKeys([...keys as any])
    }
  )

  return <Component {...props2} />
}

export const TreeListBasic: Story<typeof TreeList> = {
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock
  }
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
        props.loadData?.(node)
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

export const TreeListLoadDataAsynchronously: Story<typeof TreeList> = {
  render: (args) => <LoadDataAsynchronously {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice'
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*|loadData)' },
    controls: {
      exclude: /(componentId|componentType|dataTestId|showLine|theme|treeData)/
    }
  }
}

export const TreeNavBasic: Story<typeof TreeNav> = {
  render: (args) => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    multiple: true,
    treeData: treeDataMock
  },
  parameters: {
    controls: {
      exclude: /(componentId|componentType|mode|showLine|theme)/
    }
  }
}

export const TreeNavMultipleChoiceWithALotOfData: Story<typeof TreeNav> = {
  ...TreeNavBasic,
  render: (args) => {
    const treeData = React.useMemo(() => {
      return [
        { key: 'all', title: 'all', children: generateTreeData(400, { depth: 3, width: 10 }) }
      ]
    }, [])
    const defaultExpandedKeys = React.useMemo(() => getKeys(treeData), [treeData])

    return (
      <TreeNav
        {...args}
        defaultExpandedKeys={defaultExpandedKeys}
        treeData={treeData}
      />
    )
  },
  args: {
    checkParents: true,
    multiple: true
  },
  parameters: {
    controls: {
      exclude: /(componentId|componentType|defaultExpandedKeys|mode|showLine|theme|treeData)/
    }
  }
}

export const TreeNavLoadDataAsynchronously: Story<typeof TreeNav> = {
  ...TreeNavBasic,
  render: (args) => <LoadDataAsynchronously {...args} Component={TreeNav} />,
  args: {
    multiple: true
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*|loadData)' },
    controls: {
      exclude: /(componentId|componentType|dataTestId|mode|showLine|theme|treeData)/
    }
  }
}

const defaultData: DataNode[] = generateTreeData(20)

export const TreeNavDraggable: Story<typeof TreeNav> = {
  ...TreeNavBasic,
  render: (args) => {
    const [gData, setGData] = React.useState(args.treeData!)

    return (
      <TreeNav
        {...args}
        onDrop={info => {
          args.onDrop?.(info)
          setGData(applyDropToTreeData(info, gData))
        }}
        treeData={gData}
      />
    )
  },
  args: {
    blockNode: true,
    defaultExpandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    draggable: true,
    checkParents: true,
    treeData: defaultData
  }
}

type PaletteStory = Story<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { tree: componentColors.tree } },
  render: args => <ThemedPalette {...args} />,
  parameters: {
    controls: {
      include: /(source)/
    }
  }
}
