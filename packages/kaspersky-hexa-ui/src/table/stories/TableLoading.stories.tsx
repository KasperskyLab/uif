import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Loader as LoaderComponent } from '@src/loader'
import { Meta } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import { Table } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import {
  basicArgTypes,
  basicDataSource,
  BasicTableStory,
  basicTwoColumns,
  genArgType,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Loading',
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
