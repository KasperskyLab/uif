import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbFixArrayArgs, sbMergeActions } from '@sb/helpers'
import { Panel } from '@src/panel'
import { applyDropToTreeData, DataNode, TreeList, TreeListProps, TreeNav, TreeNavProps } from '@src/tree'
import { Meta, StoryObj as Story } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'

import { treeDataMock, treeDataMockWithIcons } from './mocks'
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
    treeData: { control: 'object' },
    showLine: { control: 'boolean' }
  },
  args: {
    klId: 'tree-kl-id',
    testId: 'tree-test-id',
    showLine: false
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export default meta

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

export const TreeListWithLines: Story<typeof TreeList> = {
  render: args => <TreeWrapper {...args} Component={TreeList} />,
  args: {
    mode: 'multipleChoice',
    treeData: treeDataMock,
    showLine: true
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
    onActionClick: undefined,
    mode: 'multipleChoice'
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*|loadData)' },
    controls: {
      exclude: /(componentId|componentType|dataTestId|theme|treeData)/
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
      exclude: /(componentId|componentType|mode|theme)/
    }
  }
}

export const TreeNavWithLines: Story<typeof TreeNav> = {
  render: args => <TreeWrapper {...args} Component={TreeNav} />,
  args: {
    treeData: treeDataMock,
    showLine: true
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
      exclude: /(componentId|componentType|defaultExpandedKeys|mode|theme|treeData)/
    }
  }
}

export const TreeNavLoadDataAsynchronously: Story<typeof TreeNav> = {
  ...TreeNavBasic,
  render: (args) => <LoadDataAsynchronously {...args} Component={TreeNav} />,
  args: {
    onActionClick: undefined,
    multiple: true
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*|loadData)' },
    controls: {
      exclude: /(componentId|componentType|dataTestId|mode|theme|treeData)/
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

const StyledPanel = styled(Panel)`
  height: calc(100vh - 48px);
`

export const TreeNavWithIconsInPanel: Story<typeof TreeNav> = {
  render: (args) => (
    <StyledPanel resizable resizeHandle="right" padding="medium">
      <TreeWrapper {...args} Component={TreeNav} />
    </StyledPanel>
  ),
  args: {
    multiple: true,
    treeData: treeDataMockWithIcons
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*)' },
    controls: {
      exclude: /(componentId|componentType|mode|theme)/
    }
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
