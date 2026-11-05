import { act, render } from '@testing-library/react'
import React, { useState } from 'react'

import { Table } from '../..'
import { TableColumn, TableRecord } from '../..'

/**
 * The hook builds the body's wrapper and cell components. If it rebuilds them on a
 * render, React sees new component types in the same slots and remounts the whole
 * tbody — every Input, Textarea and RichTextEditor in the table loses its state.
 */

type Row = TableRecord & { text: string }

const columns: TableColumn<Row>[] = [
  { key: 'text', dataIndex: 'text', title: 'Text', render: () => <input className="field" /> }
]
const dataSource: Row[] = [{ key: 'r1', text: 'значение' }]

const TableWithInlineComponents = () => {
  const [, forceRender] = useState(0)

  return (
    <>
      <button type="button" onClick={() => forceRender(n => n + 1)}>перерисовать</button>
      {/* an inline literal: a new object identity on every render, which consumers do write */}
      <Table columns={columns} dataSource={dataSource} components={{}} />
    </>
  )
}

const TableWithoutComponents = () => {
  const [, forceRender] = useState(0)

  return (
    <>
      <button type="button" onClick={() => forceRender(n => n + 1)}>перерисовать</button>
      <Table columns={columns} dataSource={dataSource} />
    </>
  )
}

describe('useBodyWithoutHover', () => {
  it('control: keeps the cells mounted when no components prop is given at all', () => {
    const { container, getByText } = render(<TableWithoutComponents />)

    const field = container.querySelector('input.field') as HTMLInputElement
    field.value = 'введено пользователем'

    act(() => { getByText('перерисовать').click() })

    expect(container.querySelector('input.field')).toBe(field)
  })

  it('keeps the cells mounted when the parent re-renders with a fresh components object', () => {
    const { container, getByText } = render(<TableWithInlineComponents />)

    const field = container.querySelector('input.field') as HTMLInputElement
    expect(field).toBeInTheDocument()
    field.value = 'введено пользователем'
    const td = container.querySelector('tbody td')

    act(() => { getByText('перерисовать').click() })

    // the same nodes, still holding what the user typed
    expect(container.querySelector('tbody td')).toBe(td)
    expect(container.querySelector('input.field')).toBe(field)
    expect((container.querySelector('input.field') as HTMLInputElement).value).toBe('введено пользователем')
  })
})
