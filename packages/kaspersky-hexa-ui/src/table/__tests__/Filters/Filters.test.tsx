import { localization } from '@helpers/localization'
import { ITableProps } from '@src/table'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import mockData from '../../__mocks__/table-mock-data.json'
import { FilterOperation, FilterType } from '../../modules/Filters/types'
import { columns } from '../../stories/_commonConstants'
import { Table } from '../../test-utils/shared'

const defaultProps = {
  klId: 'table-filters-kl-id',
  testId: 'table-filters-test-id',
  useFiltersSidebar: true,
  dataSource: mockData,
  columns,
  pagination: {
    pageSize: 5
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

const openFiltersSidebar = (container: HTMLElement) => {
  const toolbarFilterButton = container.querySelector('[data-testid="table-filter-sidebar"]') as HTMLButtonElement
  fireEvent.click(toolbarFilterButton)
}

const applyFilters = () => {
  const applyButton = screen.getByText('Apply')
  fireEvent.click(applyButton)
}

const addFilter = () => {
  const addFilterButton = screen.getByText('Add')
  fireEvent.click(addFilterButton)
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

  it('should disable filtering when there are duplicate filters', async () => {
    const { container, queryAllByText} = render(<DefaultTable />)

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
        .duplicateFilters
      ))
      .toHaveLength(2)

    cancelFiltering()

    expect(getTotalRowsNumber()).toBe(100)
  })

  it('should disable filtering when there are empty filters', async () => {
    const { container, queryAllByText} = render(<DefaultTable />)

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
        .emptyValue
      ))
      .toHaveLength(1)

    cancelFiltering()

    expect(getTotalRowsNumber()).toBe(100)
  })
})
