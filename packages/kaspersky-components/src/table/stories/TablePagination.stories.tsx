import React, { useState } from 'react'
import styled from 'styled-components'
import { badges } from '@sb/badges'
import { Meta } from '@storybook/react'
import { number, select, withKnobs } from '@storybook/addon-knobs'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Checkbox } from '@src/checkbox'
import MetaData from '@src/table/__meta__/meta.json'
import { ITableProps, Table } from '../index'
import {
  BasicTableStory,
  basicTwoColumns,
  basicDataSource,
  basicArgTypes,
  Story,
  Wrapper
} from './_commonConstants'

const defaultPagination = {
  current: number('Current page', 2),
  pageSize: select('Page size', [5, 10, 20, 50, 100], 5),
  simple: false
}

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table/Pagination',
  component: Table,
  args: {
    pagination: defaultPagination,
    dataSource: basicDataSource,
    columns: basicTwoColumns
  },
  argTypes: {
    pagination: basicArgTypes
  },
  decorators: [withKnobs],
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['rowSelection', 'dataSource', 'columns']
    }
  }
}
export default meta

export const Pagination: Story = { render: BasicTableStory.bind({}) }

export const PaginationSimple: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      simple: true
    }
  }
}

export const WithoutPagination: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: false
  }
}

const getRowKeysFromStorage = (): React.Key[] | null => {
  const rowKeys = localStorage.getItem('selectedRowKeys')
  return rowKeys && JSON.parse(rowKeys)
}

const setRowKeysInStorage = (rowKeys: React.Key[]) => {
  localStorage.setItem('selectedRowKeys', JSON.stringify(rowKeys))
}

const HeaderCheckbox = styled(Checkbox)`
  justify-content: center;
`

export const SelectedRowsMemorization: Story = {
  render: (props: ITableProps) => {
    const { dataSource, rowSelection, ...rest } = props
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
      () => getRowKeysFromStorage() || rowSelection?.selectedRowKeys || []
    )

    const onChange = (newSelectedRowKeys: React.Key[]) => {
      console.log(`selectedRowKeys changed: ${newSelectedRowKeys}`)

      setSelectedRowKeys(newSelectedRowKeys)
      setRowKeysInStorage(newSelectedRowKeys)
    }

    const toggleSelectAll = () => {
      if (!dataSource) {
        return
      }

      if (selectedRowKeys.length === dataSource.length) {
        onChange([])
      } else {
        onChange(dataSource.map(x => x.key))
      }
    }

    const columnTitle = (
      <HeaderCheckbox
        checked={selectedRowKeys && selectedRowKeys.length > 0}
        indeterminate={
          dataSource && selectedRowKeys.length > 0 && selectedRowKeys.length < dataSource.length
        }
        onChange={toggleSelectAll}
      />
    )

    return (
      <Wrapper>
        <Table
          {...rest}
          dataSource={dataSource}
          rowSelection={{
            ...rowSelection,
            selectedRowKeys,
            columnTitle,
            onChange,
            preserveSelectedRowKeys: true
          }}
        />
      </Wrapper>
    )
  }
}
