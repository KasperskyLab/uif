import { MakeRequired } from '@helpers/index'
import { fireEvent, render, screen } from '@testing-library/react'
import React, { useMemo, useState } from 'react'

import { ITableProps, TablePaginationProps } from '..'
import { Table } from '../test-utils/shared'

function ControllableTable ({ dataSource, ...args }: MakeRequired<ITableProps, 'dataSource'>) {
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

  return <Table {...args} dataSource={paginatedData} pagination={paginationProps} />
}

describe('Table pagination module', () => {
  describe('Controllable pagination', () => {
    it('should correctly handle external pagination control', async () => {
      const initialData = Array.from({ length: 30 }, (_, i) => ({
        key: i.toString(),
        name: `Item ${i}`,
        description: `Description ${i}`
      }))

      const checkActivePage = (page: number) => {
        const paginationElement = screen.getByTestId('table-pagination')
        expect(paginationElement).toBeInTheDocument()

        const activePageElement = screen.getByTitle(page.toString())
        expect(activePageElement).toHaveClass('ant-pagination-item-active')
      }

      const getVisibleRowsCount = () => {
        const rows = screen.getAllByRole('row')

        return rows.length - 1
      }

      const { rerender } = render(<ControllableTable dataSource={initialData} />)

      checkActivePage(1)
      expect(getVisibleRowsCount()).toBe(20)

      const secondPageButton = screen.getByText('2')
      fireEvent.click(secondPageButton)

      checkActivePage(2)
      expect(getVisibleRowsCount()).toBe(10)

      const newData = [...initialData, {
        key: '30',
        name: 'New Item',
        description: 'New Description'
      }]

      rerender(<ControllableTable dataSource={newData} />)

      checkActivePage(2)
      expect(getVisibleRowsCount()).toBe(11)
    })

    it('should not override controlled pageSize with default pageSize on mount', () => {
      const initialData = Array.from({ length: 30 }, (_, i) => ({
        key: i.toString(),
        name: `Item ${i}`,
        description: `Description ${i}`
      }))

      const getVisibleRowsCount = () => {
        const rows = screen.getAllByRole('row')

        return rows.length - 1
      }

      render(<ControllableTable dataSource={initialData} />)

      expect(getVisibleRowsCount()).toBe(20)
    })
  })
})
