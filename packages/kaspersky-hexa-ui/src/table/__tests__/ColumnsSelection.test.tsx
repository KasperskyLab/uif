import { ITableProps, TableColumn } from '@src/table'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import mockData from '../__mocks__/table-mock-data.json'
import { columns as baseColumns } from '../stories/_commonConstants'
import { Table } from '../test-utils/shared'

const baseProps: ITableProps = {
  dataSource: mockData,
  columns: baseColumns,
  toolbar: {
    showColumns: true,
    showGrouping: false
  }
}

const openColumnsDialog = async () => {
  const btn = await screen.findByTestId('table-configuration')
  fireEvent.click(btn)
}

const getColumnCheckbox = (dataIndex: string) => {
  const item = document.querySelector<HTMLInputElement>(`[data-testid="selector-item-${dataIndex}"] input[type="checkbox"]`) as HTMLInputElement
  return item
}

const clickApply = () => {
  const btn = screen.getByText('Apply')
  fireEvent.click(btn)
}
const clickCancel = () => {
  const btn = screen.getByText('Cancel')
  fireEvent.click(btn)
}
const onColumnsChange = jest.fn()

const TestComponent = () => {
  const [columns, setColumns] = React.useState(baseColumns)

  const updateColumns = () => {
    setColumns([...baseColumns])
  }

  return (
    <>
      <button type="button" onClick={updateColumns}>
        Update Columns
      </button>
      <Table
        dataSource={mockData}
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
    render(<Table {...(baseProps as ITableProps)} />)

    await openColumnsDialog()

    const ageCb = await getColumnCheckbox('age')
    const countryCb = await getColumnCheckbox('country')

    expect(ageCb.checked).toBe(true)
    expect(countryCb.checked).toBe(true)
  })

  it('should not persist column toggle after cancel and reopen', async () => {
    render(<Table {...(baseProps as ITableProps)} />)

    await openColumnsDialog()

    fireEvent.click(await getColumnCheckbox('age'))
    clickCancel()

    await openColumnsDialog()

    const ageCbAgain = await getColumnCheckbox('age')
    expect(ageCbAgain.checked).toBe(true)
  })

  it('should persist column toggle after apply and reopen', async () => {
    render(<Table {...(baseProps as ITableProps)} />)

    await openColumnsDialog()

    fireEvent.click(await getColumnCheckbox('age'))
    clickApply()

    await openColumnsDialog()

    const ageCb = await getColumnCheckbox('age')
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

      const columns: TableColumn[] = [
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
          <Table dataSource={data} columns={columns} />
        </>
      )
    }

    render(<TestComponent />)

    expect(screen.getByText('value1 1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('click me'))

    expect(screen.getByText('value1 2')).toBeInTheDocument()
  })

  it('should call onColumnsChange when settings are applied', async () => {
    const props = {
      ...baseProps,
      onColumnsChange
    }

    render(<Table {...(props as ITableProps)} />)

    await openColumnsDialog()
    fireEvent.click(await getColumnCheckbox('age'))
    clickApply()

    expect(onColumnsChange).toHaveBeenCalledTimes(1)
  })

  it('should not call onColumnsChange when columns reference changes', () => {
    render(<TestComponent />)

    fireEvent.click(screen.getByText('Update Columns'))

    expect(onColumnsChange).not.toHaveBeenCalled()
  })

  it('should keep column visibility state after columns render update', async () => {
    render(<TestComponent />)

    await openColumnsDialog()

    fireEvent.click(await getColumnCheckbox('age'))
    clickApply()

    await openColumnsDialog()

    expect((await getColumnCheckbox('age')).checked).toBe(false)
    clickCancel()

    fireEvent.click(screen.getByText('Update Columns'))

    await openColumnsDialog()

    expect((await getColumnCheckbox('age')).checked).toBe(false)
  })

  it('should reset columns', async () => {
    render(<TestComponent />)

    await openColumnsDialog()

    fireEvent.click(await getColumnCheckbox('age'))
    clickApply()

    await openColumnsDialog()

    expect((await getColumnCheckbox('age')).checked).toBe(false)
    clickCancel()

    await openColumnsDialog()

    fireEvent.click(screen.getByText('Reset settings'))
    fireEvent.click(screen.getByText('Reset'))
    clickApply()

    await openColumnsDialog()

    expect((await getColumnCheckbox('age')).checked).toBe(true)
    clickApply()
  })
})
