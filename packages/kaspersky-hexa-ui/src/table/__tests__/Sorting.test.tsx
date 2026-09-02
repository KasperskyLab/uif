import { modifyColumns } from '@src/table/test-utils/helpers'
import { MODES, renderByMode, TableMode } from '@src/table/test-utils/renderByMode'
import { configure, fireEvent, screen, waitFor } from '@testing-library/react'

import { generatedData, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'

configure({ testIdAttribute: 'data-testid' })

jest.setTimeout(15000)

const sortData = generatedData.slice(0, 20)
const modifiedColumns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })

const renderSorting = (mode: TableMode, props: Partial<TableMockProps> = {}) =>
  renderByMode(mode, sortData, { columns: modifiedColumns, ...props })

const extractAttribute = (cellContent: string, attribute?: string): string => {
  if (!attribute) return cellContent
  const match = cellContent.match(new RegExp(`${attribute}:\\s*(.+?)(?=\\n|$)`))
  return match ? match[1].trim() : ''
}

const columnIndexMap = { fullname: 0, details: 6 }

describe.each(MODES)('Table sorting - $description', ({ mode }) => {
  const baseScenarios: { dataIndex: keyof typeof columnIndexMap, attribute?: string }[] = [
    { dataIndex: 'fullname' },
    { dataIndex: 'details', attribute: 'email' },
    { dataIndex: 'details', attribute: 'city' }
  ]
  const scenarios = baseScenarios.flatMap(scenario => [
    { ...scenario, direction: 'asc' as const },
    { ...scenario, direction: 'desc' as const }
  ])

  scenarios.forEach(({ direction, attribute, dataIndex }) => {
    it(`should sort ${dataIndex} column in ${direction} order${attribute ? ` with attribute ${attribute}` : ''}`, async () => {
      const { table, dataSourceFunction } = renderSorting(mode)
      await table.rows.waitForData()

      await table.sorting.sortBy(dataIndex, direction, attribute)

      if (mode === 'server') {
        const dsf = dataSourceFunction as jest.Mock
        await waitFor(() => {
          const sorting = dsf.mock.lastCall?.[0]?.sorting
          expect(sorting?.isAsc).toBe(direction === 'asc')
          if (attribute) {
            expect(sorting?.attribute).toBe(attribute)
          }
        })
      }

      const columnIndex = columnIndexMap[dataIndex]
      await waitFor(() => {
        const values = table.rows.getColumnValues(columnIndex).map(value => extractAttribute(value, attribute))
        const sorted = [...values].sort()
        expect(values).toEqual(direction === 'asc' ? sorted : sorted.reverse())
      })

      expect(await table.sorting.isActive(dataIndex, direction, attribute)).toBe(true)
    })
  })
})

describe('Table sorting - client-only', () => {
  it('should not client-sort the data when isDefaultSortDisabled is true', async () => {
    const { table } = await renderByMode('client', sortData, {
      columns: modifiedColumns,
      initialSorting: { field: 'fullname', direction: 'asc' },
      isDefaultSortDisabled: true
    })

    const values = table.rows.getColumnValues(columnIndexMap.fullname)
    expect(values).toEqual(sortData.map(row => row.fullname))
  })

  it('should call column sorter with rows and sort direction when sortable column header is clicked', () => {
    const sorterFunction = jest.fn(() => 0)

    const mockData = [
      { key: '1', fullname: 'Иван Иванов', salary: 50000 },
      { key: '2', fullname: 'Петр Петров', salary: 60000 }
    ]

    renderByMode('client', mockData, {
      columns: [
        {
          key: 'fullname',
          dataIndex: 'fullname',
          title: 'Title',
          isSortable: true,
          sorter: sorterFunction
        }
      ]
    })

    fireEvent.click(screen.getByText('Title'))
    fireEvent.click(screen.getByText('Ascending'))

    expect(sorterFunction).toHaveBeenCalledWith(
      expect.objectContaining({ fullname: expect.any(String) }),
      expect.objectContaining({ fullname: expect.any(String) }),
      true
    )
  })
})

describe('Table sorting - server data specifics', () => {
  it('should send columnServerField as sorting.field when configured', async () => {
    const columns = modifyColumns(modifiedColumns, 'fullname', { columnServerField: 'server_fullname' })
    const { table, dataSourceFunction } = renderSorting('server', { columns })
    await table.rows.waitForData()

    await table.sorting.sortBy('fullname', 'asc')

    const dsf = dataSourceFunction as jest.Mock
    await waitFor(() => expect(dsf.mock.lastCall?.[0]?.sorting?.field).toBe('server_fullname'))
  })

  it('should switch the request sorting attribute from email to city within one session', async () => {
    const { table, dataSourceFunction } = renderSorting('server')
    await table.rows.waitForData()
    const dsf = dataSourceFunction as jest.Mock

    await table.sorting.sortBy('details', 'asc', 'email')
    await waitFor(() => {
      expect(dsf.mock.lastCall?.[0]?.sorting?.attribute).toBe('email')
      expect(dsf.mock.lastCall?.[0]?.sorting?.field).toBe('details')
    })

    await table.sorting.sortBy('details', 'desc', 'city')
    await waitFor(() => {
      expect(dsf.mock.lastCall?.[0]?.sorting?.attribute).toBe('city')
      expect(dsf.mock.lastCall?.[0]?.sorting?.field).toBe('details')
      expect(dsf.mock.lastCall?.[0]?.sorting?.isAsc).toBe(false)
    })
  })
})

describe.each(MODES)('Table sorting - controlled & callbacks - $description', ({ mode }) => {
  it('should apply initialSorting to the initial state', async () => {
    const { table, dataSourceFunction } = await renderSorting(mode, { initialSorting: { field: 'fullname', direction: 'asc' } })

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => {
        expect(dsf.mock.lastCall?.[0]?.sorting?.field).toBe('fullname')
        expect(dsf.mock.lastCall?.[0]?.sorting?.isAsc).toBe(true)
      })
    } else {
      await waitFor(() => {
        const values = table.rows.getColumnValues(columnIndexMap.fullname)
        expect(values).toEqual([...values].sort())
      })
    }
  })

  it('should apply externalSorting (controlled) to the sort state', async () => {
    const { table, dataSourceFunction } = await renderSorting(mode, { externalSorting: { field: 'fullname', direction: 'desc' } })

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => {
        expect(dsf.mock.lastCall?.[0]?.sorting?.field).toBe('fullname')
        expect(dsf.mock.lastCall?.[0]?.sorting?.isAsc).toBe(false)
      })
    } else {
      await waitFor(() => {
        const values = table.rows.getColumnValues(columnIndexMap.fullname)
        expect(values).toEqual([...values].sort().reverse())
      })
    }
  })

  it('should call onSortChange when the user changes sorting', async () => {
    const onSortChange = jest.fn()
    const { table } = await renderSorting(mode, { onSortChange })

    await table.sorting.sortBy('fullname', 'asc')

    await waitFor(() => {
      expect(onSortChange).toHaveBeenCalled()
      const arg = onSortChange.mock.lastCall[0]
      expect(arg.field).toBe('fullname')
      expect(arg.direction).toBe('asc')
    })
  })
})
