import { TableRecord } from '@src/table'
import { configure, fireEvent, screen } from '@testing-library/react'

import { TableColumn } from '..'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

type TableRow = TableRecord & {
  key: string
  a?: string,
  b?: string
}

const columns: TableColumn<TableRow>[] = [
  { key: 'a', dataIndex: 'a', title: 'A' },
  { key: 'b', dataIndex: 'b', title: 'B' }
]

const data: TableRow[] = [
  { key: 'normal', a: 'Normal A', b: 'Normal B' },
  { key: 'acc1', a: 'x', b: 'y', accordeon: { title: 'Acc One', children: 'Content One' } },
  { key: 'acc2', a: 'p', b: 'q', accordeon: { title: 'Acc Two', children: 'Content Two' } }
]

const renderTable = (props = {}) => TableTestingClass.render({ columns, dataSource: data, useAccordion: true, ...props })

describe('Table Accordion module', () => {
  it('should not render accordion when useAccordion=false', () => {
    const table = renderTable({ useAccordion: false })

    expect(table.queryAll('.table-accordion-icon')).toHaveLength(0)
    expect(screen.queryByText('Acc One')).not.toBeInTheDocument()
  })

  it('should show the accordion title collapsed by default', () => {
    renderTable()

    expect(screen.getByText('Acc One')).toBeInTheDocument()
    expect(screen.queryByText('Content One')).not.toBeInTheDocument()
  })

  it('should expand and collapse content on header click', () => {
    renderTable()

    fireEvent.click(screen.getByText('Acc One'))
    expect(screen.getByText('Content One')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Acc One'))
    expect(screen.queryByText('Content One')).not.toBeInTheDocument()
  })

  it('should keep accordion rows independent', () => {
    renderTable()

    fireEvent.click(screen.getByText('Acc One'))

    expect(screen.getByText('Content One')).toBeInTheDocument()
    expect(screen.queryByText('Content Two')).not.toBeInTheDocument()
  })

  it('should span the accordion row first cell across all columns', () => {
    const table = renderTable()

    const firstCell = table.rows.getByKey('acc1')?.querySelectorAll('td')[0]
    expect(firstCell?.getAttribute('colspan')).toBe(String(columns.length))
    expect(firstCell?.className).toContain('accordeon-row')
  })

  it('should render normal rows with regular cell content', () => {
    const table = renderTable()

    const normalRow = table.rows.getByKey('normal')
    expect(normalRow?.textContent).toContain('Normal A')
    expect(normalRow?.textContent).toContain('Normal B')
    expect(normalRow?.querySelector('.table-accordion-icon')).not.toBeInTheDocument()
  })
})
