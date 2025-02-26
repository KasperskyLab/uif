import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Field } from '@src/field'
import { Select } from '@src/select'
import { Text } from '@src/typography'
import { Meta } from '@storybook/react'
import React, { Key, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Table } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

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
  }
}
export default meta

const paginationDescription = 'pagination.infiniteScrollPageGetter: (page, pageSize) => Promise ' +
  '- function that returns Promise where you can set new data on resolve() and throw error on reject()'

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

const generateData = (size: number) => {
  return Array.from({ length: size }).map((_, index): BasicRowType & { key: number, index: string } => ({
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
const DATASET_SIZE = 2000
const dataSet = generateData(DATASET_SIZE)

const getData = (page: number, pageSize: number = DEFAULT_PAGE_SIZE) => {
  return new Promise(resolve =>
    setTimeout(() =>
      resolve(dataSet.slice(pageSize * page, pageSize * (page + 1))),
    500))
}

const StyledField = styled(Field)`
  margin-bottom: 8px;
`

export const LazyScrollLoading: Story = {
  render: (args: ITableProps) => {
    const [selected, setSelected] = useState<Key[]>([])
    const [chunkSize, setChunkSize] = useState<number>(20)
    const paginationProps = useMemo(
      () => ({
        infiniteScrollPageGetter: (page: number) => getData(page, chunkSize)
      }),
      [chunkSize]
    )
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
          pagination={paginationProps as any}
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
