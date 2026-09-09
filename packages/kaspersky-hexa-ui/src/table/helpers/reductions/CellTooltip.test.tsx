import { configure, fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { TableColumn, TableRecord } from '../..'
import { TableTestingClass } from '../../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })


type Row = TableRecord & { text: string, note: string }

const columns: TableColumn<Row>[] = [
  { key: 'text', dataIndex: 'text', title: 'Text' },
  { key: 'note', dataIndex: 'note', title: 'Note', ellipsisTooltip: (value: unknown) => `свой текст: ${String(value)}` }
]
const dataSource: Row[] = [{ key: 'r1', text: 'очень длинное значение', note: 'заметка' }]

const clip = (cell: Element) => {
  // jsdom has no layout, so the overflow the tooltip keys off is stated directly
  Object.defineProperty(cell, 'scrollWidth', { value: 400, configurable: true })
  Object.defineProperty(cell, 'clientWidth', { value: 100, configurable: true })
}

describe('shared cell tooltip', () => {
  it('mounts no tooltip until a clipped cell is hovered', () => {
    const table = TableTestingClass.render({ columns, dataSource })

    expect(document.querySelector('.ant-tooltip')).not.toBeInTheDocument()
    expect(table.rows.getCell(0, 0)).toHaveClass('hexa-ui-ellipsis-cell')
  })

  it('shows the cell value once a clipped cell is hovered, and hides it after', async () => {
    jest.useFakeTimers()
    const table = TableTestingClass.render({ columns, dataSource })
    const cell = table.rows.getCell(0, 0) as HTMLElement
    clip(cell)

    fireEvent.mouseOver(cell)
    jest.advanceTimersByTime(300)

    await waitFor(() => expect(screen.getByText('очень длинное значение', { selector: '.ant-tooltip *' })).toBeInTheDocument())

    fireEvent.mouseLeave(cell.closest('tbody') as HTMLElement)
    jest.advanceTimersByTime(300)

    await waitFor(() => expect(document.querySelector('.ant-tooltip-hidden')).toBeInTheDocument())

    jest.useRealTimers()
  })

  it('prefers the column ellipsisTooltip text over the cell content', async () => {
    jest.useFakeTimers()
    const table = TableTestingClass.render({ columns, dataSource })
    const cell = table.rows.getCell(0, 1) as HTMLElement

    expect(cell).toHaveAttribute('data-ellipsis-tooltip', 'свой текст: заметка')

    clip(cell)
    fireEvent.mouseOver(cell)
    jest.advanceTimersByTime(300)

    await waitFor(() => expect(screen.getByText('свой текст: заметка', { selector: '.ant-tooltip *' })).toBeInTheDocument())

    jest.useRealTimers()
  })

  it('stays quiet for a cell whose content fits', () => {
    jest.useFakeTimers()
    const table = TableTestingClass.render({ columns, dataSource })
    const cell = table.rows.getCell(0, 0) as HTMLElement
    Object.defineProperty(cell, 'scrollWidth', { value: 100, configurable: true })
    Object.defineProperty(cell, 'clientWidth', { value: 100, configurable: true })

    fireEvent.mouseOver(cell)
    jest.advanceTimersByTime(300)

    expect(document.querySelector('.ant-tooltip')).not.toBeInTheDocument()
    jest.useRealTimers()
  })
})
