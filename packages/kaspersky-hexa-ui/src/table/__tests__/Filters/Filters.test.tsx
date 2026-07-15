import { localization } from '@helpers/localization'
import { ITableProps, TableRef } from '@src/table'
import { isFilterConfig } from '@src/table/modules/Filters/helpers'
import {
  addFilter,
  applyFilters,
  getFilterChip,
  modifyColumns,
  openFiltersSidebar
} from '@src/table/test-utils/helpers'
import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React, { MutableRefObject } from 'react'
import { act } from 'react-dom/test-utils'

import { generatedData, tableColumns } from '../../__mocks__/filtersMockData'
import mockData from '../../__mocks__/table-mock-data.json'
import { FilterApi } from '../../modules/Filters/FilterApi'
import { FilterOperation, FilterType, NumberFilter, UnitedFilter } from '../../modules/Filters/types'
import { columns } from '../../stories/_commonConstants'
import { Table } from '../../test-utils/shared'

const defaultProps = {
  klId: 'table-filters-kl-id',
  testId: 'table-filters-test-id',
  useFiltersSidebar: true,
  dataSource: mockData,
  columns,
  pagination: {
    pageSize: 20
  },
  toolbar: {
    showFilterSidebar: true
  }
}

const DefaultTable = (props: ITableProps) => <Table {...defaultProps as ITableProps} {...props} />

const getTotalRowsNumber = () => {
  const totalSummary = screen.getByTestId('total').textContent
  if (!totalSummary) return -1
  const match = totalSummary.match(/Total (\d+)/)
  return match && parseInt(match[1])
}

const cancelFiltering = () => {
  const cancelButton = screen.getByText('Cancel')
  fireEvent.click(cancelButton)
}

const changeFilterValue = (index: number, value: string) => {
  const filterItemValue = screen.getByTestId(`filter-item-value-${index}`)
  fireEvent.change(filterItemValue, { target: { value } })
}

describe('Table filters module', () => {
  it('should render by default', () => {
    const container = render(<DefaultTable />).container as HTMLDivElement
    expect(container.querySelector(`[kl-id="${defaultProps.klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  it('should render filters sidebar with correct test id', () => {
    configure({ testIdAttribute: 'data-testid' })
    const container = render(<DefaultTable />).container as HTMLDivElement
    openFiltersSidebar(container)
    const filtersSidebar = screen.getByTestId(`${defaultProps.testId}-filters-sidebar`)
    expect(filtersSidebar).toBeInTheDocument()
  })

  it('should have initial size of dataSource without filters', () => {
    render(<DefaultTable />)
    const expectedRowsCount = 100
    const pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should hide clear all button if there are no filters', () => {
    const container = render(<DefaultTable />).container as HTMLDivElement

    openFiltersSidebar(container)

    expect(screen.queryAllByRole('filter')).toHaveLength(0)
    expect(screen.queryByText('Clear all')).toBeNull()
  })

  it('should filter by one initial filter', () => {
    render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          }
        ]}
      />
    )
    const expectedRowsCount = 72
    const pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should filter by multiple initial filters', () => {
    render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          },
          {
            name: 'country',
            condition: FilterOperation.eq,
            type: FilterType.Enum,
            value: 'Ireland'
          }
        ]}
      />
    )
    const expectedRowsCount = 5
    const pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should hide condition select when filter item is boolean', () => {
    const { container } = render(
      <DefaultTable
        dataSource={generatedData}
        columns={tableColumns}
        defaultFilters={[
          {
            name: 'isTrainee',
            condition: FilterOperation.eq,
            type: FilterType.Boolean,
            value: true
          }
        ]}
      />
    )

    openFiltersSidebar(container)

    const sidebarFilter = screen.queryByRole('filter')!
    expect(sidebarFilter).toBeInTheDocument()

    const conditionSelect = sidebarFilter.querySelector('[data-testid="filter-item-condition-select-0"]')
    expect(conditionSelect).not.toBeInTheDocument()
  })

  it('should clear all filters', () => {
    const container = render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          },
          {
            name: 'country',
            condition: FilterOperation.eq,
            type: FilterType.Enum,
            value: 'Ireland'
          }
        ]}
      />
    ).container as HTMLDivElement
    let expectedRowsCount = 5
    let pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)

    openFiltersSidebar(container)
    expect(screen.queryAllByRole('filter')).toHaveLength(2)

    const clearAllButton = screen.getByText('Clear all')
    fireEvent.click(clearAllButton)

    expect(screen.queryAllByRole('filter')).toHaveLength(0)

    applyFilters()

    expectedRowsCount = 100
    pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should change existing filter', () => {
    const container = render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          },
          {
            name: 'country',
            condition: FilterOperation.eq,
            type: FilterType.Enum,
            value: 'Ireland'
          }
        ]}
      />
    ).container as HTMLDivElement
    let expectedRowsCount = 5
    let pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)

    openFiltersSidebar(container)
    changeFilterValue(0, 'en')
    expect(screen.queryAllByRole('filter')).toHaveLength(2)

    applyFilters()

    expectedRowsCount = 2
    pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should add filter', async () => {
    const container = render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          },
          {
            name: 'country',
            condition: FilterOperation.eq,
            type: FilterType.Enum,
            value: 'Ireland'
          }
        ]}
      />
    ).container as HTMLDivElement
    let expectedRowsCount = 5
    let pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)

    openFiltersSidebar(container)

    expect(screen.queryAllByRole('filter')).toHaveLength(2)

    await act(async () => { addFilter() })

    expect(screen.queryAllByRole('filter')).toHaveLength(3)

    changeFilterValue(2, 'Amelia Craig')
    applyFilters()

    expectedRowsCount = 1
    pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should clear filter', () => {
    const container = render(
      <DefaultTable
        defaultSidebarFilters={[
          {
            name: 'name',
            condition: FilterOperation.cont,
            type: FilterType.Text,
            value: 'e'
          },
          {
            name: 'country',
            condition: FilterOperation.eq,
            type: FilterType.Enum,
            value: 'Ireland'
          }
        ]}
      />
    ).container as HTMLDivElement
    let expectedRowsCount = 5
    let pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)

    openFiltersSidebar(container)

    expect(screen.queryAllByRole('filter')).toHaveLength(2)

    const filterItemRemoveButton = screen.getByTestId('table-filter-item-1-close-icon')
    fireEvent.click(filterItemRemoveButton)

    expect(screen.queryAllByRole('filter')).toHaveLength(1)

    applyFilters()

    expectedRowsCount = 72
    pageCount = Math.ceil(expectedRowsCount / defaultProps.pagination.pageSize)

    expect(screen.getByTitle(pageCount)).toBeTruthy()
    expect(screen.queryByTitle(pageCount + 1)).toBeNull()
    expect(getTotalRowsNumber()).toBe(expectedRowsCount)
  })

  it('should disable client filtering if isServerFiltering = true', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const container = render(
      <DefaultTable
        isServerFiltering={true}
        onSidebarFiltersChange={onSidebarFiltersChangeMock}
      />
    ).container as HTMLDivElement

    openFiltersSidebar(container)
    await act(async () => { addFilter() })
    changeFilterValue(0, 'test')
    applyFilters()

    expect(onSidebarFiltersChangeMock).toHaveBeenCalledTimes(2)
    expect(getTotalRowsNumber()).toBe(100)
  })

  it('should call onSidebarFiltersChange with applied filters', async () => {
    const onSidebarFiltersChangeMock = jest.fn()
    const container = render(
      <DefaultTable
        isServerFiltering={true}
        onSidebarFiltersChange={onSidebarFiltersChangeMock}
      />
    ).container as HTMLDivElement

    openFiltersSidebar(container)

    await act(async () => { addFilter() })

    changeFilterValue(0, 'test')

    applyFilters()

    expect(onSidebarFiltersChangeMock).toHaveBeenCalledTimes(2)
    expect(onSidebarFiltersChangeMock).toHaveBeenCalledWith([
      {
        name: 'name',
        condition: FilterOperation.eq,
        type: FilterType.Text,
        value: 'test',
        isUserDefined: true
      }
    ])
  })

  it('should call onFiltersChange with filter with custom column filter name (column.filterName)', async () => {
    const onFiltersChange = jest.fn()
    const { container } = render(
      <DefaultTable
        columns={modifyColumns(columns, 'name', { filterName: 'fullname' })}
        onFiltersChange={onFiltersChange}
      />
    )

    openFiltersSidebar(container)
    await act(async () => { addFilter() })
    changeFilterValue(0, 'Test name')

    applyFilters()

    await waitFor(() => {
      const lastCall: UnitedFilter[] = onFiltersChange.mock.lastCall[0]
      const filter = lastCall.find(el => isFilterConfig(el))
      expect(filter?.value).toBe('Test name')
      expect(filter?.name).toBe('fullname')
    })
  })

  it('should disable filtering when there are duplicate filters', async () => {
    const { container, queryAllByText } = render(<DefaultTable />)

    openFiltersSidebar(container)

    await act(async () => { addFilter() })
    changeFilterValue(0, 'test')

    await act(async () => { addFilter() })
    changeFilterValue(1, 'test')

    applyFilters()

    expect(
      queryAllByText(localization['en-us']
        .translation
        .table
        .columnsSettings
        .filtering
        .validation
        .duplicateFilters)
    )
      .toHaveLength(2)

    cancelFiltering()

    expect(getTotalRowsNumber()).toBe(100)
  })

  it('should disable filtering when there are empty filters', async () => {
    const { container, queryAllByText } = render(<DefaultTable />)

    openFiltersSidebar(container)

    await act(async () => { addFilter() })

    applyFilters()

    expect(
      queryAllByText(localization['en-us']
        .translation
        .table
        .columnsSettings
        .filtering
        .validation
        .emptyValue)
    )
      .toHaveLength(1)

    cancelFiltering()

    expect(getTotalRowsNumber()).toBe(100)
  })

  it('should reinit FilterApi by ref.current.reinitFilterApi()', async () => {
    configure({ testIdAttribute: 'data-testid' })
    const predefinedFilter: NumberFilter = {
      name: 'age',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }
    const ref: MutableRefObject<TableRef | null> = { current: null }
    render(<Table {...defaultProps as ITableProps} defaultFilters={[predefinedFilter]} ref={ref} />)

    const chip = getFilterChip(predefinedFilter.name, predefinedFilter.condition, predefinedFilter.value!)
    expect(chip).toBeInTheDocument()

    fireEvent.click(chip?.querySelector('.ant-tag-close-icon')!)

    expect(chip).not.toBeInTheDocument()

    await ref.current?.reinitFilterApi?.()

    waitFor(() => {
      expect(getFilterChip(predefinedFilter.name, predefinedFilter.condition, predefinedFilter.value!)).toBeInTheDocument()
    })
  })

  it('should apply defaultFilters that appeared after being initially undefined', async () => {
    configure({ testIdAttribute: 'data-testid' })
    const defaultFilter: NumberFilter = {
      name: 'age',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }

    const { rerender } = render(<Table {...defaultProps as ITableProps} defaultFilters={undefined} />)

    expect(getFilterChip(defaultFilter.name, defaultFilter.condition, defaultFilter.value!)).not.toBeInTheDocument()

    rerender(<Table {...defaultProps as ITableProps} defaultFilters={[defaultFilter]} />)

    await waitFor(() => {
      expect(getFilterChip(defaultFilter.name, defaultFilter.condition, defaultFilter.value!)).toBeInTheDocument()
    })
  })

  it('should apply defaultFilters only once even if they toggle undefined <-> array afterwards', async () => {
    const initDefaultFilters = jest.spyOn(FilterApi.prototype, 'initDefaultFilters')

    const defaultFilter: NumberFilter = {
      name: 'age',
      type: FilterType.Number,
      condition: FilterOperation.gt,
      value: 1
    }

    const { rerender } = render(<Table {...defaultProps as ITableProps} defaultFilters={undefined} />)
    expect(initDefaultFilters).not.toHaveBeenCalled()

    rerender(<Table {...defaultProps as ITableProps} defaultFilters={[defaultFilter]} />)
    await waitFor(() => expect(initDefaultFilters).toHaveBeenCalledTimes(1))

    rerender(<Table {...defaultProps as ITableProps} defaultFilters={undefined} />)
    rerender(<Table {...defaultProps as ITableProps} defaultFilters={[defaultFilter]} />)

    expect(initDefaultFilters).toHaveBeenCalledTimes(1)

    initDefaultFilters.mockRestore()
  })

  it('should render custom sidebar toolbar buttons', async () => {
    configure({ testIdAttribute: 'data-testid' })

    const customButtonTestId = 'custom-button'
    const onClick = jest.fn()
    const getFiltersSidebarToolbarButtons: ITableProps['getFiltersSidebarToolbarButtons'] = async () => {
      return [{
        children: 'Custom button',
        testId: customButtonTestId,
        onClick: onClick
      }]
    }

    const { container } = render(
      <Table {...defaultProps as ITableProps} getFiltersSidebarToolbarButtons={getFiltersSidebarToolbarButtons} />
    )

    await openFiltersSidebar(container)

    const customButton = await screen.findByTestId(customButtonTestId)
    expect(customButton).toBeInTheDocument()

    fireEvent.click(customButton)
    expect(onClick).toHaveBeenCalled()
  })
})
