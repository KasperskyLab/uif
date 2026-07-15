import { LocalizationProvider } from '@design-system/context'
import i18n from '@helpers/localization/i18n'
import { ITableProps, Table } from '@src/table'
import { DROPDOWN_PREFIX, modifyColumns, openDropdown as openDropdownCommon } from '@src/table/test-utils/helpers'
import { configure, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'

configure({ testIdAttribute: 'data-testid' })

const TABLE_TEST_ID = 'test-table-test-id'

const defaultProps = {
  klId: 'test-table-kl-id',
  testId: TABLE_TEST_ID,
  dataSource: generatedData
}

const modifiedColumns = modifyColumns(tableColumns, 'group', { showEnumFiltersInColumn: true })

function DefaultTable (props: ITableProps) {
  return <LocalizationProvider i18n={i18n}><Table pagination={{ pageSize: 20 }} {...props} {...defaultProps} /></LocalizationProvider>
}

const openDropdown = async (dataIndex: string, attribute?: string) => {
  const popup = await openDropdownCommon(dataIndex, TABLE_TEST_ID)
  expect(popup).toBeInTheDocument()

  if (attribute) {
    const attributeItem = await getSortItem(`${dataIndex}-sorting-${attribute}`)
    await fireEvent.click(attributeItem.querySelector('div')!)
  }
}

const getSortItem = async (postfix: string) => {
  return await screen.findByTestId(`${TABLE_TEST_ID}-${DROPDOWN_PREFIX}-${postfix}`)
}

const getAllRows = async (): Promise<HTMLTableRowElement[]> => {
  const tableBody = await screen.findByTestId(TABLE_TEST_ID)
  return Array.from(tableBody.querySelectorAll('tr')).slice(1)
}

const getTextContentFromColumn = (rows: HTMLTableRowElement[], columnIndex: number, attribute?: string) => {
  return Array.from(rows).map(row => {
    const cells = row.querySelectorAll('td')
    const cellContent = cells[columnIndex]?.textContent?.trim() || ''

    if (attribute) {
      const regex = new RegExp(`${attribute}:\\s*(.+?)(?=\\n|$)`)
      const match = cellContent.match(regex)
      return match ? match[1].trim() : ''
    }

    return cellContent
  })
}

describe('Table sorting functionality', () => {
  const sortFnAsc = (a: any, b: any) => a - b
  const sortFnDesc = (a: any, b: any) => b - a

  const scenarios: { dataIndex: string, attribute?: string, direction: string, sortFn: (a: any, b: any) => number }[] = [
    { dataIndex: 'fullname' },
    { dataIndex: 'details', attribute: 'email' },
    { dataIndex: 'details', attribute: 'city' }
  ].map(scenario => [
    { ...scenario, direction: 'asc', sortFn: sortFnAsc },
    { ...scenario, direction: 'desc', sortFn: sortFnDesc }
  ]).flat()

  const columnIndexMap = {
    fullname: 0,
    details: 6
  }

  scenarios.forEach(({ direction, sortFn, attribute, dataIndex }) => {
    it(`should sort ${dataIndex} column in ${direction} order${attribute ? ` with attribute ${attribute}` : ''}`, async () => {
      render(<DefaultTable columns={modifiedColumns} />)

      await openDropdown(dataIndex, attribute)

      const sortItemTestId = `${dataIndex}-sorting${attribute ? `-${attribute}` : ''}-${direction}`
      const sortItem = await getSortItem(sortItemTestId)
      fireEvent.click(sortItem)

      const rows = await getAllRows()
      const values = getTextContentFromColumn(rows, columnIndexMap[dataIndex as keyof typeof columnIndexMap], attribute)

      expect(values).toEqual(values.slice().sort(sortFn))

      await openDropdown(dataIndex, attribute)
      expect(await getSortItem(sortItemTestId)).toHaveClass('ant-dropdown-menu-item-selected')
    })
  })

  it('should call column sorter with rows and sort direction when sortable column header is clicked', async () => {
    const sorterFunction = jest.fn(() => 0)

    const mockData = [
      { key: '1', fullname: 'Иван Иванов', salary: 50000 },
      { key: '2', fullname: 'Петр Петров', salary: 60000 }
    ]

    render(
      <DefaultTable
        dataSource={mockData}
        columns={[
          {
            key: 'fullname',
            dataIndex: 'fullname',
            title: 'Title',
            isSortable: true,
            sorter: sorterFunction
          }
        ]}
      />
    )

    fireEvent.click(screen.getByText('Title'))
    fireEvent.click(screen.getByText('Ascending'))

    expect(sorterFunction).toHaveBeenCalledWith(
      expect.objectContaining({ fullname: expect.any(String) }),
      expect.objectContaining({ fullname: expect.any(String) }),
      true
    )
  })
})