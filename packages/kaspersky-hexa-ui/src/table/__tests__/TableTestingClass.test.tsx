import { configure, waitFor } from '@testing-library/react'

import { generatedData, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

const TABLE_TEST_ID = 'harness-table'
const data = generatedData.slice(0, 5)

const baseProps: Partial<TableMockProps> = {
  testId: TABLE_TEST_ID,
  klId: 'harness-table-kl',
  columns: tableColumns,
  dataSource: data,
  pagination: { pageSize: 3 },
  toolbar: { showFilterSidebar: true },
  useFiltersSidebar: true
}

describe('TableTestingClass', () => {
  describe('rows', () => {
    it('exposes rows count and cell text', () => {
      const table = TableTestingClass.render(baseProps)

      expect(table.getInstance()).toBeInTheDocument()
      // pageSize = 3 → на странице 3 строки
      expect(table.rows.getCount()).toBe(3)
      expect(table.rows.getCellText(0, 0)).toBe(data[0].fullname)
      expect(table.rows.getColumnValues(0)).toEqual(data.slice(0, 3).map(row => row.fullname))
    })
  })

  describe('selection', () => {
    it('toggles a row checkbox and reports checked state', async () => {
      const processSelection = jest.fn()
      const table = TableTestingClass.render({
        ...baseProps,
        rowSelection: { builtInRowSelection: true, processSelection }
      })

      const key = data[0].key
      expect(table.selection.getRowCheckbox(key)).toBeInTheDocument()

      table.selection.toggleRow(key)

      await waitFor(() => {
        expect(processSelection.mock.lastCall[0].selectedRowKeys).toContain(key)
      })
    })

    it('selects all rows via header menu', async () => {
      const processSelection = jest.fn()
      const table = TableTestingClass.render({
        ...baseProps,
        rowSelection: { builtInRowSelection: true, processSelection }
      })

      await table.selection.selectAll()

      await waitFor(() => {
        expect(processSelection.mock.lastCall[0].isSelectedAll).toBe(true)
      })
    })
  })

  describe('sorting', () => {
    it('sorts a column ascending', async () => {
      const table = TableTestingClass.render({ ...baseProps, pagination: undefined })

      await table.sorting.sortBy('fullname', 'asc')

      const values = table.rows.getColumnValues(0)
      expect(values).toEqual([...values].sort())
    })
  })

  describe('filters', () => {
    it('adds and applies a sidebar filter', async () => {
      const table = TableTestingClass.render({ ...baseProps, dataSource: generatedData, pagination: { pageSize: 20 } })

      const initialTotal = table.pagination.getTotal()

      table.filters.openSidebar()
      await table.filters.add()
      table.filters.setValue(0, 'Evgenija')
      table.filters.apply()

      await waitFor(() => {
        expect(table.pagination.getTotal()).toBeLessThan(initialTotal)
      })
    })
  })

  describe('pagination', () => {
    it('navigates between pages', () => {
      const table = TableTestingClass.render({ ...baseProps, dataSource: generatedData, pagination: { pageSize: 20 } })

      expect(table.pagination.getActivePage()).toBe(1)

      table.pagination.goToPage(2)
      expect(table.pagination.getActivePage()).toBe(2)
    })
  })

  describe('toolbar', () => {
    it('renders the toolbar with the filter sidebar button', () => {
      const table = TableTestingClass.render(baseProps)

      expect(table.toolbar.getRoot()).toBeInTheDocument()
      expect(table.toolbar.getCustomItem('missing')).not.toBeInTheDocument()
    })
  })
})
