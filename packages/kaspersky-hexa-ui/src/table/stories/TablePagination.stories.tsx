import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Checkbox } from '@src/checkbox'
import MetaData from '@src/table/__meta__/meta.json'
import { Meta } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { ITableProps, Table } from '../index'

import {
  basicArgTypes,
  basicDataSource,
  BasicTableStory,
  basicTwoColumns,
  generateDataSource,
  Story,
  Wrapper
} from './_commonConstants'

const defaultPagination = {
  current: 2,
  pageSize: 20,
  jumper: false,
  simple: false
}

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Pagination',
  component: Table,
  args: {
    pagination: defaultPagination,
    dataSource: basicDataSource,
    columns: basicTwoColumns
  },
  argTypes: {
    pagination: basicArgTypes
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['rowSelection', 'dataSource', 'columns']
    }
  },
  tags: ['!autodocs']
}
export default meta

export const Pagination: Story = { render: BasicTableStory.bind({}) }

export const WithSizeChanger: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      showSizeChanger: true
    }
  }
}

export const WithJumper: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      showSizeChanger: true,
      jumper: true
    }
  }
}

export const WithPersistentPageSize: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      showSizeChanger: true
    },
    storageKey: 'table::story::WitPersistentPageSize'
  }
}

export const CursorPagination: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      cursor: true
    }
  }
}

export const SimplePagination: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      simple: true
    }
  }
}

export const PaginationHideOnSinglePage: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      ...defaultPagination,
      current: 1,
      hideOnSinglePage: true
    },
    dataSource: generateDataSource(5)
  }
}

export const WithStickyPagination: Story = {
  render: BasicTableStory.bind({}),
  args: {
    stickyFooter: true,
    pagination: {
      ...defaultPagination,
      pageSize: 20
    }
  }
}

export const WithShowOnlyTotalSummary: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      showOnlyTotalSummary: true
    }
  }
}

export const WithSmallDatasource: Story = {
  render: BasicTableStory.bind({}),
  args: {
    pagination: {
      showOnlyTotalSummary: true
    },
    dataSource: basicDataSource.slice(0, 10)
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
