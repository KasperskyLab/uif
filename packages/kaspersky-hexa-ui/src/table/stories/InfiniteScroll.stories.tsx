import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Field } from '@src/field'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Select } from '@src/select'
import { Sidebar } from '@src/sidebar'
import { Text } from '@src/typography'
import { Meta } from '@storybook/react-webpack5'
import React, { Key, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Table } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps, TablePaginationProps } from '../types'

import {
  basicArgTypes,
  basicDataSource,
  BasicRowType,
  basicTwoColumns,
  Story
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/InfiniteScroll',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource.slice(0, 60)
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns', 'dataSource']
    }
  },
  tags: ['!autodocs']
}
export default meta

const paginationDescription = 'pagination.infiniteScrollPageGetter: (page, pageSize) => Promise ' +
  '- function that returns Promise where you can set new data on resolve() and throw error on reject(); ' +
  'pagination.total: number'

type row = BasicRowType & { index?: number}

const columns = [
  {
    ...basicTwoColumns[0],
    isSortable: true,
    width: 200
  },
  {
    ...basicTwoColumns[1],
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) % 2 === 0
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => false
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) > 20
          return false
        }
      }
    ],
    width: 200
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ],
    width: 200
  }
] as ITableProps['columns']

type Row = {
  name: string | React.ReactNode
  description: string
  key: number,
  index: string
}

const generateData = (size: number) => {
  return Array.from({ length: size }).map((_, index): Row => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    index: `Index ${index + 1}`,
    key: index + 1
  }))
}

const DEFAULT_PAGE_SIZE = 20
const chunkSizeOptions = [
  {
    label: 20,
    value: 20
  }, {
    label: 50,
    value: 50
  }, {
    label: 100,
    value: 100
  }, {
    label: 500,
    value: 500
  }
]
const DATASET_SIZE = 100
const dataSet = generateData(DATASET_SIZE)

const getData = (page: number, pageSize: number = DEFAULT_PAGE_SIZE, data: any) => {
  return new Promise(resolve =>
    setTimeout(() =>
      resolve(data.slice(pageSize * page, pageSize * (page + 1))),
    500))
}

const StyledField = styled(Field)`
  margin-bottom: 8px;
`

export const LazyScrollLoading: Story = {
  render: () => {
    const [selected, setSelected] = useState<Key[]>([])
    const [chunkSize, setChunkSize] = useState<number>(20)
    const paginationProps = useMemo(
      () => ({
        infiniteScrollPageGetter: (page: number) => getData(page, chunkSize, dataSet)
      }),
      [chunkSize]
    ) as TablePaginationProps
    const firstPageData = useMemo(() => {
      return dataSet.slice(0, chunkSize)
    }, [chunkSize])

    return (
      <div>
        <StyledField
          label="Select chunk size"
          labelPosition="before"
          control={<Select
            options={chunkSizeOptions}
            value={chunkSize}
            onChange={setChunkSize}
          />}
          controlWidth={200}
        />
        <Text>Selected: {selected.length}</Text>
        <Table
          columns={columns}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          pagination={paginationProps}
          dataSource={firstPageData}
        />
      </div>
    )
  },
  args: { infiniteScrollEndTableText: 'End table text' },
  argTypes: {
    infiniteScrollEndTableText: basicArgTypes.infiniteScrollEndTableText,
    pagination: { description: paginationDescription }
  }
}

export const LazyScrollLoadingWithTotalSummary: Story = {
  render: () => {
    const [selected, setSelected] = useState<Key[]>([])
    const [chunkSize, setChunkSize] = useState<number>(20)
    const paginationProps = useMemo(
      () => ({
        showOnlyTotalSummary: true,
        total: dataSet.length,
        infiniteScrollPageGetter: (page: number) => getData(page, chunkSize, dataSet)
      }),
      [chunkSize]
    ) as TablePaginationProps
    const firstPageData = useMemo(() => {
      return dataSet.slice(0, chunkSize)
    }, [chunkSize])

    return (
      <div>
        <StyledField
          label="Select chunk size"
          labelPosition="before"
          control={<Select
            options={chunkSizeOptions}
            value={chunkSize}
            onChange={setChunkSize}
          />}
          controlWidth={200}
        />
        <Text>Selected: {selected.length}</Text>
        <Table
          columns={columns}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          pagination={paginationProps}
          stickyFooter
          dataSource={firstPageData}
        />
      </div>
    )
  },
  args: { infiniteScrollEndTableText: 'End table text' },
  argTypes: {
    infiniteScrollEndTableText: basicArgTypes.infiniteScrollEndTableText,
    pagination: { description: paginationDescription }
  }
}

export const LazyScrollLoadingError: Story = {
  render: (args: ITableProps) => (
    <div>
      <Table
        {...args}
        pagination={{
          infiniteScrollPageGetter: () => (
            // eslint-disable-next-line no-async-promise-executor
            new Promise(async (resolve, reject) => {
              await new Promise(resolve => setTimeout(resolve, 1500))
              reject(new Error())
            })
          )
        } as ITableProps['pagination']}
        dataSource={basicDataSource.slice(0, 20)}
      />
    </div>
  ),
  args: {
    infiniteScrollErrorText: 'Error text',
    infiniteScrollRetryText: 'Retry text'
  },
  argTypes: {
    infiniteScrollErrorText: basicArgTypes.infiniteScrollErrorText,
    infiniteScrollRetryText: basicArgTypes.infiniteScrollRetryText,
    pagination: { description: paginationDescription }
  }
}

export const LazyScrollLoadingWithEdit: Story = {
  render: () => {
    const editableDataSet = generateData(DATASET_SIZE)
    const [mockServerSata, setMockServerData] = useState<any>(editableDataSet)
    const [chunkSize, setChunkSize] = useState<number>(20)
    const [selected, setSelected] = useState<Key[]>([])

    const columnsWithEditLink = [
      {
        title: 'table.column.name',
        key: 'name',
        dataIndex: 'name',
        isSortable: true,
        width: 200,
        render: (text: string, row: Row) => <Link onClick={handleEdit(row)}>{text}</Link>
      },
      {
        title: 'table.column2.name',
        key: 'description',
        dataIndex: 'description',
        isSortable: true,
        width: 200
      }
    ] as ITableProps['columns']

    const handleEdit = (selectedRow: any) => (e: any) => {
      e.stopPropagation()
      setEditingRow(selectedRow)
    }

    const paginationProps = useMemo(
      () => ({
        infiniteScrollPageGetter: (page: number) => getData(page, chunkSize, mockServerSata)
      }),
      [chunkSize, mockServerSata]
    ) as TablePaginationProps

    const firstPageData = useMemo(() => {
      return mockServerSata.slice(0, chunkSize)
    }, [chunkSize, mockServerSata])
    const [editingRow, setEditingRow] = useState<any | null>(null)

    const handleEditRow = () => {
      if (!editingRow) return

      setMockServerData((prevRows: any) => {
        return prevRows.map((row: Row) => {
          if ((row.key) === editingRow.key) {
            return {
              ...row,
              ...editingRow
            }
          } else {
            return row
          }
        })
      })

      setEditingRow(null)
    }

    const handleRowChange = (value: string) => {
      setEditingRow((prev: any) => {
        return {
          ...prev,
          description: value
        }
      })
    }

    return (
      <div>
        <StyledField
          label="Select chunk size"
          labelPosition="before"
          control={<Select
            options={chunkSizeOptions}
            value={chunkSize}
            onChange={setChunkSize}
          />}
          controlWidth={200}
        />
        <Text>Selected: {selected.length}</Text>
        <Table
          columns={columnsWithEditLink}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
          pagination={paginationProps}
          dataSource={firstPageData}
        />
        <Sidebar
          size="extraSmall"
          visible={editingRow}
          onClose={() => setEditingRow(null)}
          title="Edit Row"
          footer={
            <Button onClick={handleEditRow}>Apply</Button>
          }
        >
          <Field label="Row description" control={<Textbox value={editingRow?.description} onChange={handleRowChange} />}/>
        </Sidebar>
      </div>
    )
  },
  args: { infiniteScrollEndTableText: 'End table text' },
  argTypes: {
    infiniteScrollEndTableText: basicArgTypes.infiniteScrollEndTableText,
    pagination: { description: paginationDescription }
  }
}