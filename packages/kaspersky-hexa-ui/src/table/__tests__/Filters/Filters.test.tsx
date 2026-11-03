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

import { fileSizeColumn, generatedData, tableColumns, TableMockProps } from '../../__mocks__/filtersMockData'
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

const renderTable = (props?: Partial<TableMockProps>) => TableTestingClass.render({ ...defaultProps, ...props })

describe('Table filters module', () => {
  it('should render by default', async () => {
    const table = await renderTable()
    const instance = table.getInstance()
    expect(instance).toHaveAttribute('kl-id', defaultProps.klId)
    expect(instance).toHaveAttribute('data-testid', defaultProps.testId)
  })

  it('should render filters sidebar with correct test id', async () => {
    const table = await renderTable()
    await table.filters.openSidebar()
    expect(table.filters.getSidebar()).toBeInTheDocument()
  })

  it('should have initial size of dataSource without filters', async () => {
    const table = await renderTable()
    table.pagination.expectTotal(100, pageSize)
  })

  it('should hide clear all button if there are no filters', async () => {
    const table = await renderTable()

    await table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(0)
    expect(screen.queryByText('Clear all')).toBeNull()
  })

  it('should filter by one initial filter', async () => {
    const table = await renderTable({
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

  it('should filter by multiple initial filters', async () => {
    const table = await renderTable({
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

  it('should hide condition select when filter item is boolean', async () => {
    const table = await renderTable({
      defaultFilters: [
        {
          name: 'isTrainee',
          condition: FilterOperation.eq,
          type: FilterType.Boolean,
          value: true
        }
      ]
    })

    await table.filters.openSidebar()

    expect(table.filters.getItem(0)).toBeInTheDocument()
    expect(table.filters.getConditionSelect(0)).not.toBeInTheDocument()
  })

  it('should clear all filters', async () => {
    const table = await renderTable({
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

    await table.filters.openSidebar()
    expect(table.filters.getCount()).toBe(2)

    table.filters.clearAll()

    expect(table.filters.getCount()).toBe(0)

    await table.filters.apply()

    table.pagination.expectTotal(100, pageSize)
  })

  it('should change existing filter', async () => {
    const table = await renderTable({
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

    await table.filters.openSidebar()
    table.filters.setValue(0, 'ova')
    expect(table.filters.getCount()).toBe(2)

    await table.filters.apply()

    table.pagination.expectTotal(3, pageSize)
  })

  it('should reset current page to 1 when a filter is applied on a non-first page', async () => {
    const table = await renderTable()

    table.pagination.goToPage(2)
    expect(table.pagination.getActivePage()).toBe(2)

    await table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Egor Kuznetsov')
    await table.filters.apply()

    await waitFor(() => expect(table.pagination.getActivePage()).toBe(1))
    table.pagination.expectTotal(1, pageSize)
  })

  it('should add filter', async () => {
    const table = await renderTable({
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

    await table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(2)

    await table.filters.add()

    expect(table.filters.getCount()).toBe(3)

    table.filters.setValue(2, 'Egor Kuznetsov')
    await table.filters.apply()

    table.pagination.expectTotal(1, pageSize)
  })

  it('should clear filter', async () => {
    const table = await renderTable({
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

    await table.filters.openSidebar()

    expect(table.filters.getCount()).toBe(2)

    table.filters.remove(1)

    expect(table.filters.getCount()).toBe(1)

    await table.filters.apply()

    table.pagination.expectTotal(60, pageSize)
  })

  it('should disable client filtering if isServerFiltering = true', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const table = await renderTable({
      isServerFiltering: true,
      onSidebarFiltersChange: onSidebarFiltersChangeMock
    })

    await table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'test')
    await table.filters.apply()

    expect(onSidebarFiltersChangeMock).toHaveBeenCalledTimes(2)
    expect(table.pagination.getTotal()).toBe(100)
  })

  it('should call onSidebarFiltersChange with applied filters', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const table = await renderTable({
      isServerFiltering: true,
      onSidebarFiltersChange: onSidebarFiltersChangeMock
    })

    await table.filters.openSidebar()

    await table.filters.add()

    table.filters.setValue(0, 'test')

    await table.filters.apply()

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
    const table = await renderTable({
      columns: modifyColumns(tableColumns, 'fullname', { filterName: 'custom_fullname' }),
      onFiltersChange
    })

    await table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Test name')

    await table.filters.apply()

    await waitFor(() => {
      const lastCall: UnitedFilter[] = onFiltersChange.mock.lastCall[0]
      const filter = lastCall.find(el => isFilterConfig(el))
      expect(filter?.value).toBe('Test name')
      expect(filter?.name).toBe('custom_fullname')
    })
  })

  it('should disable filtering when there are duplicate filters', async () => {
    const table = await renderTable()

    await table.filters.openSidebar()

    await table.filters.add()
    table.filters.setValue(0, 'test')

    await table.filters.add()
    table.filters.setValue(1, 'test')

    await table.filters.apply()

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
    const table = await renderTable()

    await table.filters.openSidebar()

    await table.filters.add()

    await table.filters.apply()

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
    const table = await TableTestingClass.render({ ...defaultProps, defaultFilters: [predefinedFilter], ref })

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

    const table = await TableTestingClass.render({ ...defaultProps, defaultFilters: undefined })

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

    const table = await TableTestingClass.render({ ...defaultProps, defaultFilters: undefined })
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

    const table = await renderTable({ getFiltersSidebarToolbarButtons })

    await table.filters.openSidebar()

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

    const table = await renderTable(props)

    await table.filters.openSidebar()

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
    const { table, dataSourceFunction } = await renderByMode(mode, generatedData, {
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
    const { table, dataSourceFunction } = await renderByMode(mode, generatedData, {
      columns: tableColumns,
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      pagination: { pageSize }
    })
    await table.rows.waitForData()

    await table.filters.openSidebar()
    await table.filters.add()
    table.filters.setValue(0, 'Egor Kuznetsov')
    await table.filters.apply()

    await waitFor(() => table.pagination.expectTotal(1, pageSize))
    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).length).toBeGreaterThan(0))
    }

    await table.filters.openSidebar()
    table.filters.remove(0)
    await table.filters.apply()

    await waitFor(() => table.pagination.expectTotal(100, pageSize))
    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect((dsf.mock.lastCall?.[0]?.params.filters ?? []).length).toBe(0))
    }
  })
})

describe('Table filters: units of measure', () => {
  const unitsOptions = [
    { value: 'r', label: '₽' },
    { value: 'd', label: '$' },
    { value: 'e', label: '€' }
  ]

  const columnWithUnits = (control: 'select' | 'segmented-button'): TableMockProps['columns'] =>
    modifyColumns(tableColumns, 'salary', {
      filterType: { type: FilterType.Number, min: 0, units: { control, options: unitsOptions } }
    })

  const unitsDefaultFilter: NumberFilter = {
    name: 'salary',
    type: FilterType.Number,
    condition: FilterOperation.gt,
    value: 100,
    unit: 'r'
  }

  it('should enable unit select for server-side filtering and show the unit in the chip', async () => {
    const table = await renderTable({
      isServerFiltering: true,
      columns: columnWithUnits('select'),
      defaultSidebarFilters: [unitsDefaultFilter]
    })

    await table.filters.openSidebar()

    const unitSelect = table.filters.getItemPart(0, 'filter-item-unit-select')
    expect(unitSelect).toBeInTheDocument()
    expect(unitSelect).not.toHaveClass('ant-select-disabled')

    const chip = table.filters.getChip(unitsDefaultFilter)
    expect(chip).toBeInTheDocument()
    expect(chip!.textContent).toContain('₽')
  })

  it('should render segmented unit control for a number column', async () => {
    const table = await renderTable({
      isServerFiltering: true,
      columns: columnWithUnits('segmented-button'),
      defaultSidebarFilters: [unitsDefaultFilter]
    })

    await table.filters.openSidebar()

    const unitSegmented = table.filters.getItemPart(0, 'filter-item-unit-segmented')
    expect(unitSegmented).toBeInTheDocument()

    const chip = table.filters.getChip(unitsDefaultFilter)
    expect(chip).toBeInTheDocument()
    expect(chip!.textContent).toContain('₽')
  })

  it('should send the filter unit to the server', async () => {
    const { table, dataSourceFunction } = await renderByMode('server', generatedData, {
      columns: columnWithUnits('select'),
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      defaultSidebarFilters: [unitsDefaultFilter],
      pagination: { pageSize }
    })
    await table.rows.waitForData()

    const dsf = dataSourceFunction as jest.Mock
    await waitFor(() => {
      const filters = (dsf.mock.lastCall?.[0]?.params.filters ?? []) as NumberFilter[]
      expect(filters.some(filter => filter.type === FilterType.Number && filter.unit === 'r')).toBe(true)
    })
  })

  it('should filter server-side by units', async () => {
    const { table } = await renderByMode('server', generatedData, {
      columns: [...tableColumns, fileSizeColumn('select')],
      useFiltersSidebar: true,
      toolbar: { showFilterSidebar: true },
      defaultSidebarFilters: [
        {
          name: 'fileSize',
          type: FilterType.Number,
          condition: FilterOperation.gt,
          value: 1,
          unit: 'gb'
        }
      ],
      pagination: { pageSize: 100 }
    })
    await table.rows.waitForData()

    const expectedCount = generatedData.filter(row => (row.fileSize ?? 0) > 1000).length
    table.pagination.expectTotal(expectedCount, 100)
  })
})

describe.each([
  { control: 'select', unitTestId: 'filter-item-unit-select' },
  { control: 'segmented-button', unitTestId: 'filter-item-unit-segmented' }
] as const)('Table filters: units of measure interactions ($control)', ({ control, unitTestId }) => {
  const UNITS = [
    { value: 'r', label: '₽' },
    { value: 'd', label: '$' },
    { value: 'e', label: '€' }
  ]

  const salaryFilter = (unit: 'r' | 'd' | 'e' = 'r'): NumberFilter => ({
    name: 'salary',
    type: FilterType.Number,
    condition: FilterOperation.gt,
    value: 100,
    unit
  })

  const columnsWithSalaryFirst = (): TableMockProps['columns'] => [
    {
      ...tableColumns.find(column => column.dataIndex === 'salary')!,
      filterType: { type: FilterType.Number, min: 0, units: { control, options: UNITS } }
    },
    ...tableColumns.filter(column => column.dataIndex !== 'salary')
  ]

  const getUnitSelectedValue = (table: TableTestingClass, index: number): string => {
    const unitControl = table.filters.getItemPart(index, unitTestId)
    if (!unitControl) return ''

    if (control === 'segmented-button') {
      return unitControl.querySelector<HTMLInputElement>('input:checked')?.value ?? ''
    }

    const label = table.filters.getSelectedText(index, unitTestId) ?? ''
    return UNITS.find(option => option.label === label)?.value ?? ''
  }

  const switchUnitTo = async (table: TableTestingClass, index: number, unit: 'r' | 'd' | 'e'): Promise<void> => {
    const unitControl = table.filters.getItemPart(index, unitTestId)!

    if (control === 'segmented-button') {
      userEvent.click(unitControl.querySelector(`input[value="${unit}"]`)!)
      return
    }

    userEvent.click(table.filters.getSelectedItem(index, unitTestId)!)
    const dropdown = await screen.findByTestId(`${unitTestId}-select-dropdown`)
    const label = UNITS.find(option => option.value === unit)!.label
    const option = [...dropdown.querySelectorAll('.ant-select-item-option')]
      .find(option => option.textContent?.trim() === label)
    userEvent.click(option!)
  }

  it('should set the first unit option as default when adding a new number filter', async () => {
    const onSidebarFiltersChange = jest.fn()
    const table = await renderTable({
      isServerFiltering: true,
      columns: columnsWithSalaryFirst(),
      onSidebarFiltersChange
    })

    await table.filters.openSidebar()
    expect(table.filters.getCount()).toBe(0)

    await table.filters.add()
    await waitFor(() => expect(getUnitSelectedValue(table, 0)).toBe('r'))

    table.filters.setValue(0, '100')
    await table.filters.apply()

    expect(onSidebarFiltersChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: 'salary', type: FilterType.Number, unit: 'r' })
      ])
    )
  })

  it('should switch the unit of a newly added number filter', async () => {
    const onSidebarFiltersChange = jest.fn()
    const table = await renderTable({
      isServerFiltering: true,
      columns: columnsWithSalaryFirst(),
      onSidebarFiltersChange
    })

    await table.filters.openSidebar()
    await table.filters.add()
    await waitFor(() => expect(getUnitSelectedValue(table, 0)).toBe('r'))

    await switchUnitTo(table, 0, 'd')

    expect(getUnitSelectedValue(table, 0)).toBe('d')

    table.filters.setValue(0, '100')
    await table.filters.apply()

    expect(onSidebarFiltersChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: 'salary', type: FilterType.Number, unit: 'd' })
      ])
    )
  })

  it('should switch the unit of an existing number filter', async () => {
    const onSidebarFiltersChange = jest.fn()
    const table = await renderTable({
      isServerFiltering: true,
      columns: columnsWithSalaryFirst(),
      defaultSidebarFilters: [salaryFilter('r')],
      onSidebarFiltersChange
    })

    await table.filters.openSidebar()
    expect(getUnitSelectedValue(table, 0)).toBe('r')

    await switchUnitTo(table, 0, 'd')
    expect(getUnitSelectedValue(table, 0)).toBe('d')

    table.filters.setValue(0, '100')
    await table.filters.apply()

    expect(onSidebarFiltersChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: 'salary', type: FilterType.Number, unit: 'd' })
      ])
    )
  })
})
