import { TableColumn } from '@src/table'
import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'

import { generatedData, MockRow, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { FilterOperation, FilterType } from '../modules/Filters/types'
import { modifyColumns } from '../test-utils/helpers'
import { TableTestingClass, TestTable } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

const data = generatedData.slice(0, 5)
const selectableColumns = tableColumns.map(column => ({ ...column, hideColumnAvailable: true }))

const baseProps: TableMockProps = {
  dataSource: data,
  columns: selectableColumns,
  toolbar: {
    showColumns: true,
    showGrouping: false
  }
}

const renderTable = (props: Partial<TableMockProps> = {}) =>
  TableTestingClass.render({ ...baseProps, ...props })

const onColumnsChange = jest.fn()

const TestComponent = () => {
  const [columns, setColumns] = React.useState(selectableColumns)

  const updateColumns = () => {
    setColumns([...selectableColumns])
  }

  return (
    <>
      <button type="button" onClick={updateColumns}>
        Update Columns
      </button>
      <TestTable
        dataSource={data}
        columns={columns}
        onColumnsChange={onColumnsChange}
        toolbar={{
          showColumns: true,
          showGrouping: false
        }}
      />
    </>
  )
}

describe('ColumnsSelection (Table settings)', () => {
  it('should open with all checkboxes checked by default', async () => {
    const table = renderTable()

    await table.columnSettings.open()

    const ageCb = table.columnSettings.getCheckbox('salary')!
    const countryCb = table.columnSettings.getCheckbox('group')!

    expect(ageCb.checked).toBe(true)
    expect(countryCb.checked).toBe(true)
  })

  it('should not persist column toggle after cancel and reopen', async () => {
    const table = renderTable()

    await table.columnSettings.open()

    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.cancel()

    await table.columnSettings.open()

    const ageCbAgain = table.columnSettings.getCheckbox('salary')!
    expect(ageCbAgain.checked).toBe(true)
  })

  it('should persist column toggle after apply and reopen', async () => {
    const table = renderTable()

    await table.columnSettings.open()

    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()

    await table.columnSettings.open()

    const ageCb = table.columnSettings.getCheckbox('salary')!
    expect(ageCb.checked).toBe(false)
  })

  it('should use latest column render after columns update', () => {
    const TestComponent = () => {
      const [data, setData] = React.useState([
        { key: '1', value: 'value1' }
      ])

      const onClick = () => {
        setData(prev => ([
          ...prev,
          { key: '2', value: 'value2' }
        ]))
      }

      const columns: TableColumn<{ key: string, value: string }>[] = [
        {
          key: 'value',
          dataIndex: 'value',
          title: 'Value',
          render: (value: string) => `${value} ${data.length}`
        }
      ]

      return (
        <>
          <button type="button" onClick={onClick}>
            click me
          </button>
          <TestTable dataSource={data} columns={columns} />
        </>
      )
    }

    render(<TestComponent />)

    expect(screen.getByText('value1 1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('click me'))

    expect(screen.getByText('value1 2')).toBeInTheDocument()
  })

  it('should call onColumnsChange when settings are applied', async () => {
    const table = renderTable({ onColumnsChange })

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()

    expect(onColumnsChange).toHaveBeenCalledTimes(1)
  })

  it('should not call onColumnsChange when columns reference changes', () => {
    const table = TableTestingClass.renderElement(<TestComponent />)

    fireEvent.click(table.scoped.getByText('Update Columns'))

    expect(onColumnsChange).not.toHaveBeenCalled()
  })

  it('should keep column visibility state after columns render update', async () => {
    const table = TableTestingClass.renderElement(<TestComponent />)

    await table.columnSettings.open()

    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()

    await table.columnSettings.open()

    expect(table.columnSettings.getCheckbox('salary')!.checked).toBe(false)
    table.columnSettings.cancel()

    fireEvent.click(screen.getByText('Update Columns'))

    await table.columnSettings.open()

    expect(table.columnSettings.getCheckbox('salary')!.checked).toBe(false)
  })

  it('should reset columns', async () => {
    const table = TableTestingClass.renderElement(<TestComponent />)

    await table.columnSettings.open()

    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()

    await table.columnSettings.open()

    expect(table.columnSettings.getCheckbox('salary')!.checked).toBe(false)
    table.columnSettings.cancel()

    await table.columnSettings.open()

    table.columnSettings.reset()
    table.columnSettings.apply()

    await table.columnSettings.open()

    expect(table.columnSettings.getCheckbox('salary')!.checked).toBe(true)
    table.columnSettings.apply()
  })

  it('should hide a column from the table when toggled off in settings and show it again', async () => {
    const table = renderTable()
    expect(table.columns.hasHeader('table.columns.salary')).toBe(true)

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()
    expect(table.columns.hasHeader('table.columns.salary')).toBe(false)

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('salary')
    table.columnSettings.apply()
    expect(table.columns.hasHeader('table.columns.salary')).toBe(true)
  })

  it('should disable the settings checkbox when hideColumnAvailable is false', async () => {
    const columns = modifyColumns(selectableColumns, 'salary', { hideColumnAvailable: false })
    const table = renderTable({ columns })

    await table.columnSettings.open()

    expect(table.columnSettings.isCheckboxDisabled('group')).toBe(false)
    expect(table.columnSettings.isCheckboxDisabled('salary')).toBe(true)
  })

  it('should toggle only selectable columns via select-all and leave disabled columns intact', async () => {
    const columns = modifyColumns(selectableColumns, 'salary', { hideColumnAvailable: false })
    const table = renderTable({ columns })

    await table.columnSettings.open()
    table.columnSettings.toggleSelectAll()

    expect(table.columnSettings.getCheckbox('fullname')!.checked).toBe(false)
    expect(table.columnSettings.getCheckbox('group')!.checked).toBe(false)
    expect(table.columnSettings.getCheckbox('salary')!.checked).toBe(true)

    table.columnSettings.apply()

    expect(table.columns.hasHeader('table.columns.fullname')).toBe(false)
    expect(table.columns.hasHeader('table.columns.group')).toBe(false)
    expect(table.columns.hasHeader('table.columns.salary')).toBe(true)
  })

  it('should not render a column with show:false by default and render it after enabling in settings', async () => {
    const columns = modifyColumns(selectableColumns, 'isTrainee', { show: false })
    const table = renderTable({ columns })

    expect(table.columns.hasHeader('table.columns.isTrainee')).toBe(false)

    await table.columnSettings.open()
    expect(table.columnSettings.getCheckbox('isTrainee')!.checked).toBe(false)
    table.columnSettings.toggleColumnVisibility('isTrainee')
    table.columnSettings.apply()

    expect(table.columns.hasHeader('table.columns.isTrainee')).toBe(true)
  })

  it('should render a column that has neither dataIndex nor key without crashing', () => {
    const noKeyColumn = {
      title: 'NoKeyCol',
      show: true,
      render: (value: unknown, row: Record<string, unknown>) => String(row.fullname)
    } as unknown as TableColumn<MockRow>
    const table = renderTable({ columns: [...selectableColumns, noKeyColumn] })

    expect(table.rows.getCount()).toBe(data.length)
    expect(table.columns.hasHeader('table.columns.fullname')).toBe(true)
    expect(table.columns.hasHeader('NoKeyCol')).toBe(true)
  })
})

describe('ColumnsSelection — integration', () => {
  it('should keep rendering rows after a sorted column is hidden', async () => {
    const table = renderTable()

    await table.sorting.sortBy('fullname', 'asc')

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('fullname')
    table.columnSettings.apply()

    expect(table.columns.hasHeader('table.columns.fullname')).toBe(false)
    expect(table.rows.getCount()).toBeGreaterThan(0)
  })

  it('should keep a filter active when its column is hidden', async () => {
    const table = renderTable({
      dataSource: generatedData,
      useFiltersSidebar: true,
      toolbar: { showColumns: true, showGrouping: false, showFilterSidebar: true },
      defaultFilters: [{ name: 'fullname', condition: FilterOperation.cont, type: FilterType.Text, value: 'ov' }],
      pagination: { pageSize: 20 }
    })
    await waitFor(() => table.pagination.expectTotal(60, 20))

    await table.columnSettings.open()
    table.columnSettings.toggleColumnVisibility('fullname')
    table.columnSettings.apply()

    expect(table.pagination.getTotal()).toBe(60)
    expect(table.columns.hasHeader('table.columns.fullname')).toBe(false)
  })

  it('should not offer a hidden column in the grouping selector', async () => {
    const columns = modifyColumns(selectableColumns, 'isTrainee', { show: false })
    const table = renderTable({
      columns,
      dataSource: generatedData.slice(0, 10),
      toolbar: { showColumns: false, showGrouping: true }
    })

    await table.columnSettings.open()
    const groupingSelector = document.querySelector('.grouping-item') as HTMLElement

    expect(groupingSelector.textContent).toContain('table.columns.group')
    expect(groupingSelector.textContent).not.toContain('table.columns.isTrainee')
  })
})
