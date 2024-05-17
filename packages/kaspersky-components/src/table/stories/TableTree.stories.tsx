import React, { useState, useEffect } from 'react'
import { badges } from '@sb/badges'
import { Meta } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '@src/table/__meta__/meta.json'
import { ITableProps, Table } from '../index'
import {
  BasicTableStory,
  patchKeys,
  basicArgTypes,
  basicTwoColumns,
  basicTreeDataSource,
  genArgType,
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
  title: 'Organisms/Table/Tree',
  component: Table,
  args: {
    dataSource: patchKeys(basicTreeDataSource),
    columns
  },
  argTypes: {
    columns: basicArgTypes.columns,
    dataSource: genArgType(basicArgTypes.dataSource.description, 'object')
  },
  decorators: [withKnobs],
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns']
    }
  }
}
export default meta

export const Tree: Story = {
  render: BasicTableStory.bind({})
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
