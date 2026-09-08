import { modifyColumns } from '@src/table/test-utils/helpers'
import { MODES, renderByMode } from '@src/table/test-utils/renderByMode'
import { TableTestingClass } from '@src/table/test-utils/TableTestingClass'
import {
  act,
  configure,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react'

import { generatedData, tableColumns, TableMockProps } from '../../__mocks__/filtersMockData'

configure({ testIdAttribute: 'data-testid' })

// Серверные сценарии (мок dataSourceFunction + debounce) не укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

const TABLE_TEST_ID = 'test-table-test-id'

const defaultProps = {
  klId: 'test-table-kl-id',
  testId: TABLE_TEST_ID,
  columns: tableColumns,
  // Тестам колоночных фильтров не нужен объём данных (проверяют UI дропдауна/сайдбара),
  // а на 100 строках открытие enum-дропдауна + синк с сайдбаром не укладывались в дефолтный таймаут jest.
  dataSource: generatedData.slice(0, 5)
}

const modifiedColumns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })

const renderTable = (props: TableMockProps) => {
  const table = TableTestingClass.render({ ...defaultProps, ...props })
  return { table }
}

describe('Table column dropdown filters', () => {
  describe('Basic rendering', () => {
    it('should render filters in column with custom filters', async () => {
      const dataIndex = 'fullname'
      const { table } = renderTable({ columns: modifiedColumns })

      const popup = await table.header.openColumnDropdown(dataIndex)
      expect(popup).toBeInTheDocument()

      expect(table.header.getDropdownArrow(dataIndex)).toBeInTheDocument()

      expect(table.columnFilters.getOption(dataIndex, '0')).toBeInTheDocument()
      expect(table.columnFilters.getOption(dataIndex, '1')).toBeInTheDocument()
    })

    it('should render enum filters in column with enum options', async () => {
      const dataIndex = 'group'
      const { table } = renderTable({ columns: modifiedColumns })

      const popup = await table.header.openColumnDropdown(dataIndex)
      expect(popup).toBeInTheDocument()

      expect(table.header.getDropdownArrow(dataIndex)).toBeInTheDocument()

      expect(table.columnFilters.getOption(dataIndex, 'Unmanaged', false, true)).toBeInTheDocument()
      expect(table.columnFilters.getOption(dataIndex, 'Sales', false, true)).toBeInTheDocument()
      expect(table.columnFilters.getOption(dataIndex, 'Developers', false, true)).toBeInTheDocument()
    })

    it('should not render dropdown for column without filters and sorting', async () => {
      const dataIndex = 'dateHired'
      const { table } = renderTable({ columns: modifiedColumns })

      const title = screen.getByText('table.columns.dateHired')
      fireEvent.click(title)

      expect(table.header.getDropdownArrow(dataIndex)).not.toBeInTheDocument()

      await waitFor(() => {
        expect(table.header.getDropdown(dataIndex)).not.toBeInTheDocument()
      })
    })
  })

  describe('Filter interactions on group column', () => {
    const columnFilterNames = ['0', '1', '2']
    const enumFilterNames = ['Unmanaged', 'Sales', 'Developers']
    const filterTestCases = [
      {
        name: 'column filters multiple selection',
        allowMultiple: true,
        dataIndex: 'fullname',
        filterNames: columnFilterNames
      },
      {
        name: 'column filters single selection',
        allowMultiple: false,
        dataIndex: 'fullname',
        filterNames: columnFilterNames
      },
      {
        name: 'enum filters multiple selection',
        allowMultiple: true,
        dataIndex: 'group',
        filterNames: enumFilterNames
      },
      {
        name: 'enum filters single selection',
        allowMultiple: false,
        dataIndex: 'group',
        filterNames: enumFilterNames
      }
    ]

    test.each(filterTestCases)('$name', async ({ allowMultiple, dataIndex, filterNames }) => {
      const { table } = renderTable({ columns: modifyColumns(modifiedColumns, dataIndex, { allowMultipleFilters: allowMultiple }) })

      const isEnum = dataIndex === 'group'

      const selectFilter = (value: string) => table.columnFilters.selectFilter(dataIndex, value, allowMultiple, isEnum)
      const isFilterSelected = (value: string) => table.columnFilters.isOptionSelected(dataIndex, value, allowMultiple, isEnum)
      const isDropdownClosed = () => table.header.isDropdownClosed(dataIndex)

      await table.header.openColumnDropdown(dataIndex)

      selectFilter(filterNames[0])
      expect(isDropdownClosed()).toBe(true)

      await table.header.openColumnDropdown(dataIndex)

      expect(isFilterSelected(filterNames[0])).toBe(true)
      expect(isFilterSelected(filterNames[1])).toBe(false)
      expect(isFilterSelected(filterNames[2])).toBe(false)

      selectFilter(filterNames[1])
      expect(isDropdownClosed()).toBe(true)

      await table.header.openColumnDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(filterNames[0])).toBe(true)
        expect(isFilterSelected(filterNames[1])).toBe(true)
        expect(isFilterSelected(filterNames[2])).toBe(false)
      } else {
        expect(isFilterSelected(filterNames[0])).toBe(false)
        expect(isFilterSelected(filterNames[1])).toBe(true)
        expect(isFilterSelected(filterNames[2])).toBe(false)
      }

      selectFilter(filterNames[1])
      expect(isDropdownClosed()).toBe(true)

      await table.header.openColumnDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(filterNames[0])).toBe(true)
        expect(isFilterSelected(filterNames[1])).toBe(false)
        expect(isFilterSelected(filterNames[2])).toBe(false)
      } else {
        expect(isFilterSelected(filterNames[0])).toBe(false)
        expect(isFilterSelected(filterNames[1])).toBe(false)
        expect(isFilterSelected(filterNames[2])).toBe(false)
      }

      selectFilter(filterNames[2])
      expect(isDropdownClosed()).toBe(true)

      await table.header.openColumnDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(filterNames[0])).toBe(true)
        expect(isFilterSelected(filterNames[1])).toBe(false)
        expect(isFilterSelected(filterNames[2])).toBe(true)
      } else {
        expect(isFilterSelected(filterNames[0])).toBe(false)
        expect(isFilterSelected(filterNames[1])).toBe(false)
        expect(isFilterSelected(filterNames[2])).toBe(true)
      }
    })
  })

  describe('Enum filters integration', () => {
    const dataIndex = 'group'
    const filterLabel = 'CEO'
    const additionalProps: TableMockProps = {
      useFiltersSidebar: true,
      toolbar: {
        showFilterSidebar: true
      }
    }

    it('should sync filters when added from column', async () => {
      const { table } = renderTable({ columns: modifiedColumns, ...additionalProps })

      await table.header.openColumnDropdown(dataIndex)
      table.columnFilters.selectFilter(dataIndex, filterLabel, false, true)

      expect(table.filters.getChip({ dataIndex, condition: '=', value: filterLabel })).toBeInTheDocument()

      table.filters.openSidebar()

      expect(table.filters.getItem(0)).toBeInTheDocument()

      expect(table.filters.getSelectedText(0, 'filter-item-property-select-0')).toBe('table.columns.group')
      expect(table.filters.getSelectedText(0, 'filter-item-condition-select-0')).toBe('=')
      expect(table.filters.getSelectedText(0, 'filter-item-value-select-0')).toBe(filterLabel)

      table.filters.remove(0)

      expect(table.filters.getCount()).toBe(0)

      table.filters.apply()

      expect(table.filters.getChip({ dataIndex, condition: '=', value: filterLabel })).not.toBeInTheDocument()

      await table.header.openColumnDropdown(dataIndex)
      expect(table.columnFilters.isOptionSelected(dataIndex, filterLabel, false, true)).toBeFalsy()
    })

    it('should sync filters when added from sidebar', async () => {
      const { table } = renderTable({
        columns: modifyColumns(modifiedColumns, 'fullname', { filteringAvailable: false }),
        ...additionalProps
      })

      table.filters.openSidebar()
      await table.filters.add()
      table.filters.apply()

      expect(table.filters.getChip({ dataIndex, condition: '=', value: filterLabel })).toBeInTheDocument()

      await table.header.openColumnDropdown(dataIndex)
      expect(table.columnFilters.isOptionSelected(dataIndex, filterLabel, false, true)).toBeTruthy()

      table.columnFilters.selectFilter(dataIndex, filterLabel, false, true)
      await waitFor(() => {
        expect(table.filters.getChip({ dataIndex, condition: '=', value: filterLabel })).not.toBeInTheDocument()
      })
    })
  })
})

describe.each(MODES)('Table column filters - $description', ({ mode }) => {
  const data = generatedData.slice(0, 25)

  it('should apply a column enum filter', async () => {
    const columns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })
    const { table, dataSourceFunction } = renderByMode(mode, data, {
      columns,
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      pagination: { pageSize: 20 }
    })
    await table.rows.waitForData()

    await table.header.openColumnDropdown('group')
    table.columnFilters.selectFilter('group', 'CEO', false, true)

    await waitFor(() => expect(table.pagination.getTotal()).toBeLessThan(data.length))
    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).length).toBeGreaterThan(0))
    }
  })

  it('should apply a predicate column filter on the client but not send it to the server', async () => {
    const { table, dataSourceFunction } = renderByMode(mode, data, {
      columns: tableColumns,
      pagination: { pageSize: 20 }
    })
    await table.rows.waitForData()

    await table.header.openColumnDropdown('salary')
    table.columnFilters.selectFilter('salary', '0', false, false)

    if (mode === 'client') {
      await waitFor(() => expect(table.pagination.getTotal()).toBeLessThan(data.length))
    } else {
      // Предикатные колоночные фильтры не сериализуются на сервер: params.filters пустой, набор не меняется.
      await act(async () => { await new Promise(resolve => setTimeout(resolve, 400)) })
      const dsf = dataSourceFunction as jest.Mock
      expect(dsf.mock.lastCall?.[0]?.params.filters ?? []).toEqual([])
      expect(table.pagination.getTotal()).toBe(data.length)
    }
  })
})
