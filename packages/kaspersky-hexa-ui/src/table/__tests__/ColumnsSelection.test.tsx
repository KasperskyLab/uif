import { ITableProps } from '@src/table'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import mockData from '../__mocks__/table-mock-data.json'
import { columns as baseColumns } from '../stories/_commonConstants'
import { Table } from '../test-utils/shared'

const baseProps: ITableProps = {
  dataSource: mockData,
  columns: baseColumns,
  pagination: { pageSize: 5 },
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
})
