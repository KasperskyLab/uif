import { localization } from '@helpers/localization'
import { TableColumn, TableRef } from '@src/table'
import { isFilterConfig } from '@src/table/modules/Filters/helpers'
import { modifyColumns } from '@src/table/test-utils/helpers'
import { MODES, renderByMode } from '@src/table/test-utils/renderByMode'
import { TableTestingClass, TestTable } from '@src/table/test-utils/TableTestingClass'
import {
  configure,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { MutableRefObject } from 'react'

import { generatedData, tableColumns, TableMockProps } from '../../__mocks__/filtersMockData'
import { FilterApi } from '../../modules/Filters/FilterApi'
import {
  CustomFilterOperations,
  FilterOperation,
  FilterType,
  NumberFilter,
  UnitedFilter
} from '../../modules/Filters/types'

configure({ testIdAttribute: 'data-testid' })

// Серверные сценарии (мок dataSourceFunction + debounce) не укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

const pageSize = 20

const defaultProps: TableMockProps = {
  klId: 'table-filters-kl-id',
  testId: 'table-filters-test-id',
  useFiltersSidebar: true,
  dataSource: generatedData,
  columns: tableColumns,
  pagination: {
    pageSize
  },
  toolbar: {
    showFilterSidebar: true
  }
}

const renderTable = (props: Partial<TableMockProps> = {}) => {
  const table = TableTestingClass.render({ ...defaultProps, ...props })
  return { table }
}

describe('Table filters module', () => {
  it('should render by default', () => {
    const { table } = renderTable()
    const instance = table.getInstance()
    expect(instance).toHaveAttribute('kl-id', defaultProps.klId)
    expect(instance).toHaveAttribute('data-testid', defaultProps.testId)
  })

  it('should render filters sidebar with correct test id', () => {
    const { table } = renderTable()
    table.filters.openSidebar()
    expect(table.filters.getSidebar()).toBeInTheDocument()
  })

  it('should have initial size of dataSource without filters', () => {
    const { table } = renderTable()
    table.pagination.expectTotal(100, pageSize)
  })

  it('should hide clear all button if there are no filters', () => {
    const { table } = renderTable()

    table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(0)
    expect(screen.queryByText('Clear all')).toBeNull()
  })

  it('should filter by one initial filter', () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        }
      ]
    })

    table.pagination.expectTotal(60, pageSize)
  })

  it('should filter by multiple initial filters', () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        },
        {
          name: 'group',
          condition: FilterOperation.eq,
          type: FilterType.Enum,
          value: 'CEO'
        }
      ]
    })

    table.pagination.expectTotal(6, pageSize)
  })

  it('should hide condition select when filter item is boolean', () => {
    const { table } = renderTable({
      defaultFilters: [
        {
          name: 'isTrainee',
          condition: FilterOperation.eq,
          type: FilterType.Boolean,
          value: true
        }
      ]
    })

    table.filters.openSidebar()

    expect(table.filters.getItem(0)).toBeInTheDocument()
    expect(table.filters.getConditionSelect(0)).not.toBeInTheDocument()
  })

  it('should clear all filters', () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        },
        {
          name: 'group',
          condition: FilterOperation.eq,
          type: FilterType.Enum,
          value: 'CEO'
        }
      ]
    })

    table.pagination.expectTotal(6, pageSize)

    table.filters.openSidebar()
    expect(table.filters.getCount()).toBe(2)

    table.filters.clearAll()

    expect(table.filters.getCount()).toBe(0)

    table.filters.apply()

    table.pagination.expectTotal(100, pageSize)
  })

  it('should change existing filter', () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        },
        {
          name: 'group',
          condition: FilterOperation.eq,
          type: FilterType.Enum,
          value: 'CEO'
        }
      ]
    })

    table.pagination.expectTotal(6, pageSize)

    table.filters.openSidebar()
    table.filters.setValue(0, 'ova')
    expect(table.filters.getCount()).toBe(2)

    table.filters.apply()

    table.pagination.expectTotal(3, pageSize)
  })

  it('should add filter', async () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        },
        {
          name: 'group',
          condition: FilterOperation.eq,
          type: FilterType.Enum,
          value: 'CEO'
        }
      ]
    })

    table.pagination.expectTotal(6, pageSize)

    table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(2)

    await table.filters.add()

    expect(table.filters.getCount()).toBe(3)

    table.filters.setValue(2, 'Egor Kuznetsov')
    table.filters.apply()

    table.pagination.expectTotal(1, pageSize)
  })

  it('should clear filter', () => {
    const { table } = renderTable({
      defaultSidebarFilters: [
        {
          name: 'fullname',
          condition: FilterOperation.cont,
          type: FilterType.Text,
          value: 'ov'
        },
        {
          name: 'group',
          condition: FilterOperation.eq,
          type: FilterType.Enum,
          value: 'CEO'
        }
      ]
    })

    table.pagination.expectTotal(6, pageSize)

    table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(2)

    table.filters.remove(1)

    expect(table.filters.getCount()).toBe(1)

    table.filters.apply()

    table.pagination.expectTotal(60, pageSize)
  })

  it('should disable client filtering if isServerFiltering = true', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const { table } = renderTable({
      isServerFiltering: true,
      onSidebarFiltersChange: onSidebarFiltersChangeMock
    })

    table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'test')
    table.filters.apply()

    expect(onSidebarFiltersChangeMock).toHaveBeenCalledTimes(2)
    expect(table.pagination.getTotal()).toBe(100)
  })

  it('should call onSidebarFiltersChange with applied filters', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const { table } = renderTable({
      isServerFiltering: true,
      onSidebarFiltersChange: onSidebarFiltersChangeMock
    })

    table.filters.openSidebar()

    await table.filters.add()

    table.filters.setValue(0, 'test')

    table.filters.apply()

    expect(onSidebarFiltersChangeMock).toHaveBeenCalledTimes(2)
    expect(onSidebarFiltersChangeMock).toHaveBeenCalledWith([
      {
        name: 'fullname',
        condition: FilterOperation.eq,
        type: FilterType.Text,
        value: 'test',
        isUserDefined: true
      }
    ])
  })

  it('should call onFiltersChange with filter with custom column filter name (column.filterName)', async () => {
    const onFiltersChange = jest.fn()
    const { table } = renderTable({
      columns: modifyColumns(tableColumns, 'fullname', { filterName: 'custom_fullname' }),
      onFiltersChange
    })

    table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Test name')

    table.filters.apply()

    await waitFor(() => {
      const lastCall: UnitedFilter[] = onFiltersChange.mock.lastCall[0]
      const filter = lastCall.find(el => isFilterConfig(el))
      expect(filter?.value).toBe('Test name')
      expect(filter?.name).toBe('custom_fullname')
    })
  })

  it('should disable filtering when there are duplicate filters', async () => {
    const { table } = renderTable()

    table.filters.openSidebar()

    await table.filters.add()
    table.filters.setValue(0, 'test')

    await table.filters.add()
    table.filters.setValue(1, 'test')

    table.filters.apply()

    expect(
      screen.queryAllByText(localization['en-us']
        .translation
        .table
        .columnsSettings
        .filtering
        .validation
        .duplicateFilters)
    )
      .toHaveLength(2)

    table.filters.cancel()

    expect(table.pagination.getTotal()).toBe(100)
  })

  it('should disable filtering when there are empty filters', async () => {
    const { table } = renderTable()

    table.filters.openSidebar()

    await table.filters.add()

    table.filters.apply()

    expect(
      screen.queryAllByText(localization['en-us']
        .translation
        .table
        .columnsSettings
        .filtering
        .validation
        .emptyValue)
    )
      .toHaveLength(1)

    table.filters.cancel()

    expect(table.pagination.getTotal()).toBe(100)
  })

  it('should reinit FilterApi by ref.current.reinitFilterApi()', async () => {
    const predefinedFilter: NumberFilter = {
      name: 'salary',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }
    const ref: MutableRefObject<TableRef | null> = { current: null }
    const table = TableTestingClass.render({ ...defaultProps, defaultFilters: [predefinedFilter], ref })

    const chip = table.filters.getChip(predefinedFilter)
    expect(chip).toBeInTheDocument()

    fireEvent.click(chip?.querySelector('.ant-tag-close-icon')!)

    expect(chip).not.toBeInTheDocument()

    await ref.current?.reinitFilterApi?.()

    waitFor(() => {
      expect(table.filters.getChip(predefinedFilter)).toBeInTheDocument()
    })
  })

  it('should apply defaultFilters that appeared after being initially undefined', async () => {
    const defaultFilter: NumberFilter = {
      name: 'salary',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }

    const table = TableTestingClass.render({ ...defaultProps, defaultFilters: undefined })

    expect(table.filters.getChip(defaultFilter)).not.toBeInTheDocument()

    table.rerender(<TestTable {...defaultProps} defaultFilters={[defaultFilter]} />)

    await waitFor(() => {
      expect(table.filters.getChip(defaultFilter)).toBeInTheDocument()
    })
  })

  it('should apply defaultFilters only once even if they toggle undefined <-> array afterwards', async () => {
    const initDefaultFilters = jest.spyOn(FilterApi.prototype, 'initDefaultFilters')

    const defaultFilter: NumberFilter = {
      name: 'salary',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }

    const table = TableTestingClass.render({ ...defaultProps, defaultFilters: undefined })
    expect(initDefaultFilters).not.toHaveBeenCalled()

    table.rerender(<TestTable {...defaultProps} defaultFilters={[defaultFilter]} />)
    await waitFor(() => expect(initDefaultFilters).toHaveBeenCalledTimes(1))

    table.rerender(<TestTable {...defaultProps} defaultFilters={undefined} />)
    table.rerender(<TestTable {...defaultProps} defaultFilters={[defaultFilter]} />)

    expect(initDefaultFilters).toHaveBeenCalledTimes(1)

    initDefaultFilters.mockRestore()
  })

  it('should render custom sidebar toolbar buttons', async () => {
    const customButtonTestId = 'custom-button'
    const onClick = jest.fn()
    const getFiltersSidebarToolbarButtons: TableMockProps['getFiltersSidebarToolbarButtons'] = async () => {
      return [{
        children: 'Custom button',
        testId: customButtonTestId,
        onClick: onClick
      }]
    }

    const { table } = renderTable({ getFiltersSidebarToolbarButtons })

    table.filters.openSidebar()

    const customButton = await screen.findByTestId(customButtonTestId)
    expect(customButton).toBeInTheDocument()

    fireEvent.click(customButton)
    expect(onClick).toHaveBeenCalled()
  })

  it('should render custom filter operations', async () => {
    const groupColumn = tableColumns.find(column => column.key === 'group')!
    const operations: CustomFilterOperations<FilterType.Enum> = [
      { operation: FilterOperation.cont_or },
      { operation: FilterOperation.eq, label: 'Equals123' }
    ]
    const props: TableMockProps = {
      ...defaultProps,
      columns: modifyColumns(tableColumns, 'group', {
        filterType: {
          ...groupColumn.filterType,
          operations
        } as TableColumn['filterType']
      }),
      defaultFilters: [
        {
          name: 'group',
          type: FilterType.Enum,
          condition: FilterOperation.eq,
          value: 'CEO'
        }
      ]
    }

    const { table } = renderTable(props)

    table.filters.openSidebar()

    const conditionSelect = table.filters.getSelectedItem(0, 'filter-item-condition-select-0')!
    await userEvent.click(conditionSelect)

    const conditionSelectDropdown = (await screen
      .findByTestId('filter-item-condition-select-0-select-dropdown'))
      .querySelectorAll('.ant-select-item-option-content')

    expect(conditionSelectDropdown[0].textContent).toBe('Is one of')
    expect(conditionSelectDropdown[1].textContent).toBe('Equals123')
  })
})

describe.each(MODES)('Table sidebar filters - $description', ({ mode }) => {
  it('should apply a default sidebar filter', async () => {
    const { table, dataSourceFunction } = renderByMode(mode, generatedData, {
      columns: tableColumns,
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      defaultFilters: [{ name: 'fullname', condition: FilterOperation.cont, type: FilterType.Text, value: 'ov' }],
      pagination: { pageSize }
    })
    await table.rows.waitForData()

    await waitFor(() => table.pagination.expectTotal(60, pageSize))

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() =>
        expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).some((f: { name: string }) => f.name === 'fullname')).toBe(true))
    }
  })

  it('should reflect adding and removing a sidebar filter', async () => {
    const { table, dataSourceFunction } = renderByMode(mode, generatedData, {
      columns: tableColumns,
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      pagination: { pageSize }
    })
    await table.rows.waitForData()

    table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Egor Kuznetsov')
    table.filters.apply()

    await waitFor(() => table.pagination.expectTotal(1, pageSize))
    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).length).toBeGreaterThan(0))
    }

    table.filters.openSidebar()
    table.filters.remove(0)
    table.filters.apply()

    await waitFor(() => table.pagination.expectTotal(100, pageSize))
    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).length).toBe(0))
    }
  })
})
