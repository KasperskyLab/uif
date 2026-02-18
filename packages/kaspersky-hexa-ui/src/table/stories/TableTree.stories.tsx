import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { TableTreeInfo } from '@sb/components/Warnings'
import { Link } from '@src/link'
import MetaData from '@src/table/__meta__/meta.json'
import { Meta } from '@storybook/react-webpack5'
import React, { useEffect, useState } from 'react'

import { ITableProps, Table } from '../index'

import {
  basicArgTypes,
  BasicTableStory,
  basicTreeDataSource,
  basicTwoColumns,
  genArgType,
  patchKeys,
  Story,
  Wrapper
} from './_commonConstants'

const columns = [
  {
    ...basicTwoColumns[0],
    show: true,
    hideColumnAvailable: true,
    isSortable: true
  },
  {
    ...basicTwoColumns[1],
    show: true,
    hideColumnAvailable: true
  },
  {
    key: 'age',
    title: 'table.column3.name',
    dataIndex: 'age',
    width: 200,
    show: true,
    hideColumnAvailable: false
  }
]

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Tree',
  component: Table,
  args: {
    dataSource: patchKeys(basicTreeDataSource),
    columns,
    pagination: {
      pageSize: 5,
      showSizeChanger: true
    }
  },
  argTypes: {
    columns: basicArgTypes.columns,
    dataSource: genArgType(basicArgTypes.dataSource.description, 'object')
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns']
    }
  },
  tags: ['!autodocs']
}
export default meta

export const Tree: Story = {
  render: (args) => {
    return <>
      <TableTreeInfo />
      <BasicTableStory {...args} />
    </>
  }
}

export const TreeWithoutRowSelectionColumn: Story = {
  render: (args) => (
    <>
      <TableTreeInfo />
      <BasicTableStory {...args} />
    </>
  ),
  args: {
    rowSelection: undefined
  }
}

const treeWithLinks = {
  name: <Link href="#">James Doe</Link>,
  description: 'Noble man',
  age: 65,
  children: [
    {
      name: <Link href="#">Mary Sue</Link>,
      description: 'Dubious character',
      age: 41,
      children: [{
        name: <Link href="#">Dirk Gently</Link>,
        description: 'Best detective',
        age: 15
      }]
    },
    {
      name: <Link href="#">John Snow</Link>,
      description: 'Knows nothing',
      age: 45
    }
  ]
}

export const TreeWithLinks: Story = {
  render: BasicTableStory.bind({}),
  args: {
    dataSource: patchKeys([...basicTreeDataSource.map((el) => el.name === 'James Doe' ? treeWithLinks : el)])
  }
}

export const TreeCustomColumn: Story = {
  render: BasicTableStory.bind({}),
  args: {
    expandable: { expandColumnName: 'description' },
    columns: [
      columns[0],
      {
        ...columns[1],
        show: false
      },
      columns[2]
    ]
  },
  argTypes: { expandable: basicArgTypes.expandable }
}

type RowKeys = Readonly<React.Key[]>

const getRowKeysFromStorage = (): RowKeys | null => {
  const rowKeys = localStorage.getItem('expandedRowKeys')
  return rowKeys && JSON.parse(rowKeys)
}

const setRowKeysInStorage = (rowKeys: RowKeys) => {
  localStorage.setItem('expandedRowKeys', JSON.stringify(rowKeys))
}

export const ExpandedRowsMemorization: Story = {
  render: (props: ITableProps) => {
    const { expandable, ...rest } = props
    const [expandedRowKeys, setExpandedRowKeys] = useState<RowKeys | undefined>(
      expandable?.expandedRowKeys
    )

    useEffect(() => {
      const preexpanded = getRowKeysFromStorage()
      setExpandedRowKeys(preexpanded || [])
    }, [])

    const onExpandedRowsChange = (newExpandedRowKeys: RowKeys) => {
      console.log(`expandedRowKeys changed: ${newExpandedRowKeys}`)

      setExpandedRowKeys(newExpandedRowKeys)
      setRowKeysInStorage(newExpandedRowKeys)
    }

    return (
      <Wrapper>
        <Table
          {...rest}
          expandable={{
            ...expandable,
            expandedRowKeys,
            onExpandedRowsChange
          }}
        />
      </Wrapper>
    )
  }
}
