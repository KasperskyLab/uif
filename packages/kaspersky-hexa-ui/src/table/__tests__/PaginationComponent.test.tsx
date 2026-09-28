import { MakeRequired } from '@helpers/index'
import { configure, waitFor } from '@testing-library/react'
import React, { useMemo, useState } from 'react'

import { Table, TablePaginationProps } from '..'
import { generatedData, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { renderServer, spyDataSource } from '../test-utils/renderServer'
import { TableTestingClass } from '../test-utils/TableTestingClass'
import { DEFAULT_TABLE_PAGE_SIZE } from '../types'

configure({ testIdAttribute: 'data-testid' })

// Серверные сценарии (мок dataSourceFunction + debounce) не укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

function ControllableTable ({ dataSource, ...args }: MakeRequired<TableMockProps, 'dataSource'>) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const handlePageChange: TablePaginationProps['onChange'] = (current, newPageSize) => {
    setPage(current)

    if (newPageSize) {
      setPageSize(newPageSize)
    }
  }

  const handlePageSizeChange: TablePaginationProps['onShowSizeChange'] = (_, newSize) => {
    setPageSize(newSize)
    setPage(1)
  }

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    return dataSource.slice(startIndex, endIndex)
  }, [dataSource, page, pageSize])

  const paginationProps = {
    total: dataSource.length,
    current: page,
    showSizeChanger: true,
    pageSize,
    onChange: handlePageChange,
    isServerPagination: true,
    onShowSizeChange: handlePageSizeChange
  }

  return <Table {...args} columns={tableColumns} dataSource={paginatedData} pagination={paginationProps} />
}

describe('Table pagination module', () => {
  describe('Controllable pagination', () => {
    it('should correctly handle external pagination control', async () => {
      const initialData = generatedData.slice(0, 30)

      const checkActivePage = (page: number) => {
        expect(table.pagination.getRoot()).toBeInTheDocument()
        expect(table.pagination.isActivePage(page)).toBe(true)
      }

      const table = await TableTestingClass.renderElement(<ControllableTable dataSource={initialData} />)

      checkActivePage(1)
      expect(table.rows.getCount()).toBe(20)

      table.pagination.goToPage(2)

      checkActivePage(2)
      expect(table.rows.getCount()).toBe(10)

      const newData = generatedData.slice(0, 31)

      await table.rerender(<ControllableTable dataSource={newData} />)

      checkActivePage(2)
      expect(table.rows.getCount()).toBe(11)
    })

    it('should not override controlled pageSize with default pageSize on mount', async () => {
      const initialData = generatedData.slice(0, 30)

      const table = await TableTestingClass.renderElement(<ControllableTable dataSource={initialData} />)

      expect(table.rows.getCount()).toBe(20)
    })
  })

  describe('Pagination visibility', () => {
    it('should hide pagination when hideOnSinglePage is true and there is a single page', async () => {
      const table = await TableTestingClass.render({
        columns: tableColumns,
        dataSource: generatedData.slice(0, 5),
        pagination: { pageSize: 20, hideOnSinglePage: true }
      })

      expect(table.query('.ant-pagination')).not.toBeInTheDocument()
    })

    it('should still render pagination on a single page when hideOnSinglePage is not set', async () => {
      const table = await TableTestingClass.render({
        columns: tableColumns,
        dataSource: generatedData.slice(0, 5),
        pagination: { pageSize: 20 }
      })

      expect(table.query('.ant-pagination')).toBeInTheDocument()
    })

    it('should show only the total summary without page controls when showOnlyTotalSummary is true', async () => {
      const table = await TableTestingClass.render({
        columns: tableColumns,
        dataSource: generatedData.slice(0, 30),
        pagination: { pageSize: 20, showOnlyTotalSummary: true }
      })

      expect(table.pagination.getTotal()).toBe(30)
      expect(table.query('.ant-pagination-item')).not.toBeInTheDocument()
    })
  })
})

describe('Table pagination - server (dataSourceFunction)', () => {
  const serverRows = generatedData

  it('should request the initial server page from pagination.current', async () => {
    const { table, dataSourceFunction } = await renderServer({ pagination: { pageSize: 20, current: 3 } }, spyDataSource(serverRows))
    await table.rows.waitForData()

    expect(dataSourceFunction.mock.calls[0][0].page).toBe(2) // current 3 → 0-based page 2
  })

  it('should request the default page size when pagination.pageSize is omitted', async () => {
    const { table, dataSourceFunction } = await renderServer({ pagination: {} }, spyDataSource(serverRows))
    await table.rows.waitForData()

    expect(dataSourceFunction.mock.calls[0][0].pageSize).toBe(DEFAULT_TABLE_PAGE_SIZE)
  })

  it('should hide pagination when the server response sets paginationDisabled', async () => {
    const dataSourceFunction: TableMockProps['dataSourceFunction'] = jest.fn(
      async () => ({ rows: generatedData.slice(0, 5), totalCount: 5, paginationDisabled: true })
    )
    const { table } = await renderServer({ pagination: { pageSize: 20 } }, dataSourceFunction)
    await table.rows.waitForData()

    await waitFor(() => expect(table.query('.ant-pagination')).not.toBeInTheDocument())
  })

  it('should render rows even when the server reports an inconsistent totalCount of 0', async () => {
    const rows = generatedData.slice(0, 15)
    const dataSourceFunction: TableMockProps['dataSourceFunction'] = jest.fn(async () => ({ rows, totalCount: 0 }))
    const { table } = await renderServer({ pagination: { pageSize: 20 } }, dataSourceFunction)

    await table.rows.waitForData(rows.length)
    expect(table.rows.getCount()).toBe(rows.length)
  })

  it('should let the server totalCount override the pagination.total prop', async () => {
    const { table } = await renderServer({ pagination: { pageSize: 20, total: 999 } }, spyDataSource(serverRows))
    await table.rows.waitForData()

    // Серверный totalCount (100) перекрывает проп total (999).
    await waitFor(() => expect(table.pagination.getTotal()).toBe(serverRows.length))
  })

  it('should not call onChange on mount when initialised with current > 1 & total: 0', async () => {
    const handleChange = jest.fn()

    await TableTestingClass.render({
      columns: tableColumns,
      dataSource: generatedData.slice(0, 5),
      pagination:{
        current: 2,
        total: 0,
        pageSize: 10,
        onChange: handleChange
      }
    })

    expect(handleChange).not.toHaveBeenCalled()
  })
})
