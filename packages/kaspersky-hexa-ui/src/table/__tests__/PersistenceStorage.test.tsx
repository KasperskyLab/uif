import {
  configure,
  fireEvent,
  waitFor,
  within
} from '@testing-library/react'

import { generatedData, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

jest.setTimeout(15000)

const STORAGE_KEY = 'table-persistence-test'

const selectableColumns = tableColumns.map(column => ({ ...column, hideColumnAvailable: true }))

const readStorage = (featureKey: string): unknown => {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw)[featureKey] : undefined
}

const render = (props: Partial<TableMockProps> = {}) =>
  TableTestingClass.render({
    columns: selectableColumns,
    dataSource: generatedData,
    storageKey: STORAGE_KEY,
    pagination: { pageSize: 20 },
    ...props
  })

describe('Table persistence via storageKey (localStorage)', () => {
  afterEach(() => localStorage.clear())

  it('should persist column visibility and restore it on remount', async () => {
    const table = render({ toolbar: { showColumns: true, showGrouping: false } })

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()

    await waitFor(() => expect(readStorage('columns')).toBeDefined())
    table.unmount()

    const restored = render({ toolbar: { showColumns: true, showGrouping: false } })
    expect(restored.columns.hasHeader('table.columns.salary')).toBe(false)
  })

  it('should persist applied sidebar filters and restore them on remount', async () => {
    const table = render({ useFiltersSidebar: true, toolbar: { showFilterSidebar: true } })

    table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Egor Kuznetsov')
    table.filters.apply()

    await waitFor(() => expect(readStorage('filters')).toBeDefined())
    table.unmount()

    const restored = render({ useFiltersSidebar: true, toolbar: { showFilterSidebar: true } })
    await waitFor(() => restored.pagination.expectTotal(1, 20))
  })

  it('should persist sorting and restore it on remount', async () => {
    const table = render()

    await table.sorting.sortBy('fullname', 'asc')
    await waitFor(() => expect(readStorage('sorting')).toBeDefined())
    table.unmount()

    const restored = render()
    await waitFor(() => {
      const values = restored.rows.getColumnValues(0)
      expect(values).toEqual([...values].sort())
    })
  })

  it('should persist the grouping selection and restore it on remount', async () => {
    const table = render({ pagination: false, toolbar: { showColumns: false, showGrouping: true } })
    expect(table.rows.getGroupTitles()).toHaveLength(0)

    await table.columnSettings.open()
    const groupingSelector = document.querySelector('.grouping-item') as HTMLElement
    fireEvent.click(within(groupingSelector).getByText('table.columns.group'))
    table.columnSettings.apply()

    await waitFor(() => expect(readStorage('groupBy')).toBe('group'))
    table.unmount()

    const restored = render({ pagination: false, toolbar: { showColumns: false, showGrouping: true } })
    await waitFor(() => expect(restored.rows.getGroupTitles().length).toBeGreaterThan(0))
  })

  it('should restore a persisted pageSize on mount', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ pageSize: 100 }))

    const restored = render()
    await waitFor(() => expect(restored.rows.getCount()).toBe(100))
  })
})
