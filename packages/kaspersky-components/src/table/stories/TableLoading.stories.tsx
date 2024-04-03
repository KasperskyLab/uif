import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { Table } from '../'
import { ITableProps } from '../types'
import { Loader as LoaderComponent } from '@src/loader'
import { Wrapper, BasicTableStory, basicDataSource, basicTwoColumns, basicArgTypes, genArgType, Story } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table/Loading',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource.slice(0, 60)
  },
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns', 'dataSource']
    }
  }
}
export default meta

export const Loader: Story = {
  render: BasicTableStory.bind({}),
  args: { loading: true },
  argTypes: { loading: basicArgTypes.loading }
}

export const CustomLoader: Story = {
  render: BasicTableStory.bind({}),
  args: {
    loading: true,
    loaderProps: {
      indicator: <LoaderComponent />,
      delay: 1000
    }
  },
  argTypes: {
    loading: basicArgTypes.loading,
    loaderProps: basicArgTypes.loaderProps
  }
}

const createRows = (page: number, pageSize: number) => (
  basicDataSource.slice(pageSize * page, pageSize * (page + 1))
)

export const PageLoading: Story = {
  render: (args: ITableProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState(createRows(0, 10))
    return (
      <Wrapper>
        <Table
          {...args}
          loading={loading}
          pagination={{
            current: currentPage,
            total: 180,
            pageSize,
            onChange: async (page, pageSize) => {
              setLoading(true)
              await new Promise(resolve => setTimeout(resolve, 1000))
              setDataSource(createRows(page - 1, pageSize))
              setCurrentPage(page)
              setLoading(false)
            },
            onShowSizeChange: async (page, pageSize) => {
              setLoading(true)
              await new Promise(resolve => setTimeout(resolve, 1000))
              setDataSource(createRows(page - 1, pageSize))
              setCurrentPage(page)
              setPageSize(pageSize)
              setLoading(false)
            }
          }}
          dataSource={dataSource}
        />
      </Wrapper>
    )
  },
  args: { loading: true },
  argTypes: {
    pagination: genArgType(
      'pagination.current - controlled current page<br/>pageSize - conrolled page size<br/>' +
      'onChange: (page, pageSize) => void, - handler when page is changed. you can put loader switcher there<br/>' +
      'onShowSizeChange: (page, pageSize) => void, - handler then pageSize is changed. you can put loader switcher there'
    )
  }
}

const paginationDescription = 'pagination.infiniteScrollPageGetter: (page, pageSize) => Promise ' +
  '- function that returns Promise where you can set new data on resolve() and throw error on reject()'
export const LazyScrollLoading: Story = {
  render: (args: ITableProps) => {
    const PAGE_SIZE = 20
    return (
      <Wrapper>
        <Table
          {...args}
          pagination={{
            infiniteScrollPageGetter: (page) => (
              // eslint-disable-next-line no-async-promise-executor
              new Promise(async (resolve) => {
                await new Promise(resolve => setTimeout(resolve, 500))
                resolve(
                  page > 2
                    ? null
                    : basicDataSource.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1))
                )
              })
            )
          } as ITableProps['pagination']}
          dataSource={basicDataSource.slice(0, PAGE_SIZE)}
        />
      </Wrapper>
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
    <Wrapper>
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
    </Wrapper>
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
