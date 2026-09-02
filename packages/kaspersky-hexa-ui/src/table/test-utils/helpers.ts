import { fireEvent, screen } from '@testing-library/react'

import { TableColumn, TableRecord } from '..'

export const DROPDOWN_PREFIX = 'table-header-dropdown'

export const openFiltersSidebar = (container: HTMLElement) => {
  const toolbarFilterButton = container.querySelector('[data-testid="table-filter-sidebar"]') as HTMLButtonElement
  fireEvent.click(toolbarFilterButton)
}

export const applyFilters = () => {
  const applyButton = screen.getByText('Apply')
  fireEvent.click(applyButton)
}

export const addFilter = () => {
  const addFilterButton = screen.getByText('Add')
  fireEvent.click(addFilterButton)
}

export const getFilterChip = (dataIndex: string, condition: string, value: string | number) => {
  const testId = `table-active-filter-${dataIndex}${condition}:${value}`
  return screen.queryByTestId(testId)
}

export const modifyColumns = <T extends TableRecord = TableRecord, U extends T = T>(
  columns: TableColumn<T>[],
  dataIndex: string,
  updates: Partial<TableColumn<U>>
): TableColumn<U>[] => {
  const newColumn = {
    ...columns.find(column => column.dataIndex === dataIndex)!,
    ...updates
  } as TableColumn<U>
  return columns.map(column => column.dataIndex === dataIndex ? newColumn : column as TableColumn<U>)
}

export const openDropdown = async (dataIndex: string, testId: string) => {
  const title = screen.getByTestId(`${testId}-${DROPDOWN_PREFIX}-${dataIndex}-title`)
  fireEvent.click(title)

  return await screen.findByTestId(`${testId}-${DROPDOWN_PREFIX}-${dataIndex}-popup`)
}
