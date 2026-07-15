import { LocalizationProvider } from '@design-system/context'
import i18n from '@helpers/localization/i18n'
import { ITableProps, Table } from '@src/table'
import {
  addFilter,
  applyFilters,
  DROPDOWN_PREFIX as TEST_ID_PREFIX,
  getFilterChip as getFilterChipCommon,
  modifyColumns,
  openDropdown as openDropdownCommon,
  openFiltersSidebar
} from '@src/table/test-utils/helpers'
import {
  act,
  configure,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'

import { generatedData, tableColumns } from '../../__mocks__/filtersMockData'

configure({ testIdAttribute: 'data-testid' })

const TABLE_TEST_ID = 'test-table-test-id'

const defaultProps = {
  klId: 'test-table-kl-id',
  testId: TABLE_TEST_ID,
  dataSource: generatedData
}

const modifiedColumns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })

const withTestId = (postfix: string) => {
  return `${TABLE_TEST_ID}-${postfix}`
}

function DefaultTable (props: ITableProps) {
  return <LocalizationProvider i18n={i18n}><Table {...props} {...defaultProps} /></LocalizationProvider>
}

const openDropdown = async (dataIndex: string) => openDropdownCommon(dataIndex, TABLE_TEST_ID)

const getColumnFilter = (value: string, allowMultiple: boolean, isEnumFilter: boolean, dataIndex: string) => {
  const filterElement = screen.getByTestId(
    isEnumFilter
      ? withTestId(`${TEST_ID_PREFIX}-${dataIndex}-enum-filter-${value}`)
      : withTestId(`${TEST_ID_PREFIX}-${value}-filters`)
  )

  if (allowMultiple) {
    return filterElement.querySelector('.ant-checkbox') as HTMLElement
  }

  return filterElement
}

const isColumnFilterSelected = (element: HTMLElement, allowMultiple: boolean) => {
  if (allowMultiple) {
    return element.classList.contains('ant-checkbox-checked')
  }
  return element.classList.contains('ant-dropdown-menu-item-selected')
}

const getFilterChip = (dataIndex: string, value: string) => getFilterChipCommon(dataIndex, '=', value)

describe('Table column dropdown filters', () => {
  describe('Basic rendering', () => {
    it('should render filters in column with custom filters', async () => {
      const dataIndex = 'fullname'
      render(<DefaultTable columns={modifiedColumns} />)

      const popup = await openDropdown(dataIndex)
      expect(popup).toBeInTheDocument()

      const dropdownArrow = screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-arrow-${dataIndex}`))
      expect(dropdownArrow).toBeInTheDocument()

      expect(screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-0-filters`))).toBeInTheDocument()
      expect(screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-1-filters`))).toBeInTheDocument()
    })

    it('should render enum filters in column with enum options', async () => {
      const dataIndex = 'group'
      render(<DefaultTable columns={modifiedColumns} />)

      const popup = await openDropdown(dataIndex)
      expect(popup).toBeInTheDocument()

      const dropdownArrow = screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-arrow-${dataIndex}`))
      expect(dropdownArrow).toBeInTheDocument()

      expect(screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-group-enum-filter-Unmanaged`))).toBeInTheDocument()
      expect(screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-group-enum-filter-Sales`))).toBeInTheDocument()
      expect(screen.getByTestId(withTestId(`${TEST_ID_PREFIX}-group-enum-filter-Developers`))).toBeInTheDocument()
    })

    it('should not render dropdown for column without filters and sorting', async () => {
      const dataIndex = 'dateHired'
      render(<DefaultTable columns={modifiedColumns} />)

      const title = screen.getByText('table.columns.dateHired')
      fireEvent.click(title)

      const dropdownArrow = screen.queryByTestId(withTestId(`${TEST_ID_PREFIX}-arrow-${dataIndex}`))
      expect(dropdownArrow).not.toBeInTheDocument()

      await waitFor(() => {
        expect(screen.queryByTestId(withTestId(`${TEST_ID_PREFIX}-${dataIndex}-popup`))).not.toBeInTheDocument()
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
      const columns = modifyColumns(modifiedColumns, dataIndex, { allowMultipleFilters: allowMultiple })

      render(<DefaultTable columns={columns} />)

      const isEnumFilter = dataIndex === 'group'

      const getFilter = (value: string) => getColumnFilter(value, allowMultiple, isEnumFilter, dataIndex)

      const isFilterSelected = (element: HTMLElement) => isColumnFilterSelected(element, allowMultiple)

      const isDropdownClosed = () => {
        const popup = screen.queryByTestId(withTestId(`${TEST_ID_PREFIX}-${dataIndex}-popup`))
        if (!popup) return true

        const popupParent = popup.parentElement
        return popupParent?.classList.contains('ant-dropdown-hidden') ?? true
      }

      await openDropdown(dataIndex)

      fireEvent.click(getFilter(filterNames[0]))
      expect(isDropdownClosed()).toBe(true)

      await openDropdown(dataIndex)

      expect(isFilterSelected(getFilter(filterNames[0]))).toBe(true)
      expect(isFilterSelected(getFilter(filterNames[1]))).toBe(false)
      expect(isFilterSelected(getFilter(filterNames[2]))).toBe(false)

      fireEvent.click(getFilter(filterNames[1]))
      expect(isDropdownClosed()).toBe(true)

      await openDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(true)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(true)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(false)
      } else {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(true)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(false)
      }

      fireEvent.click(getFilter(filterNames[1]))
      expect(isDropdownClosed()).toBe(true)

      await openDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(true)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(false)
      } else {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(false)
      }

      fireEvent.click(getFilter(filterNames[2]))
      expect(isDropdownClosed()).toBe(true)

      await openDropdown(dataIndex)

      if (allowMultiple) {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(true)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(true)
      } else {
        expect(isFilterSelected(getFilter(filterNames[0]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[1]))).toBe(false)
        expect(isFilterSelected(getFilter(filterNames[2]))).toBe(true)
      }
    })
  })

  describe('Enum filters integration', () => {
    const dataIndex = 'group'
    const filterLabel = 'CEO'
    const getColumnFilterLocal = (name: string) => getColumnFilter(name, false, true, dataIndex)
    const additionalProps: ITableProps = {
      useFiltersSidebar: true,
      toolbar: {
        showFilterSidebar: true
      }
    }

    const propertySelectSelector = 'filter-item-property-select-0'

    const getFilterInfo = (filter: HTMLElement, testId: string) => {
      const filterItem = filter.querySelector(`[data-testid="${testId}"]`)
      return filterItem?.querySelector('.ant-select-selection-item')?.textContent
    }

    it('should sync filters when added from column', async () => {
      const { container } = render(
        <DefaultTable columns={modifiedColumns} {...additionalProps} />
      )

      await openDropdown(dataIndex)
      fireEvent.click(getColumnFilterLocal(filterLabel))

      expect(getFilterChip(dataIndex, filterLabel)).toBeInTheDocument()

      openFiltersSidebar(container)

      const sidebarFilter = screen.queryByRole('filter')!
      expect(sidebarFilter).toBeInTheDocument()

      const property = getFilterInfo(sidebarFilter, propertySelectSelector)
      const condition = getFilterInfo(sidebarFilter, 'filter-item-condition-select-0')
      const value = getFilterInfo(sidebarFilter, 'filter-item-value-select-0')

      expect(property).toBe('table.columns.group')
      expect(condition).toBe('=')
      expect(value).toBe(filterLabel)

      const closeFilter = screen.getByTestId('table-filter-item-0-close-icon')
      fireEvent.click(closeFilter)

      expect(screen.queryByRole('filter')).not.toBeInTheDocument()

      applyFilters()

      expect(getFilterChip(dataIndex, filterLabel)).not.toBeInTheDocument()

      await openDropdown(dataIndex)
      expect(isColumnFilterSelected(getColumnFilterLocal(filterLabel), false)).toBeFalsy()
    })

    it('should sync filters when added from sidebar', async () => {
      const columns = modifyColumns(modifiedColumns, 'fullname', { filteringAvailable: false })
      const { container } = render(
        <DefaultTable columns={columns} {...additionalProps} />
      )

      openFiltersSidebar(container)
      await act(async () => { addFilter() })
      applyFilters()

      expect(getFilterChip(dataIndex, filterLabel)).toBeInTheDocument()

      await openDropdown(dataIndex)
      const columnFilter = getColumnFilterLocal(filterLabel)
      expect(isColumnFilterSelected(columnFilter, false)).toBeTruthy()

      fireEvent.click(columnFilter)
      await waitFor(() => {
        expect(getFilterChip(dataIndex, filterLabel)).not.toBeInTheDocument()
      })
    })
  })
})