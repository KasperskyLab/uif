import { TableRecord } from '@src/table'
import { configure, screen } from '@testing-library/react'
import React from 'react'

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: (key: string) => `T:${key}`, i18n: { language: 'en-us' } })
}))

import { TableColumn } from '..'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

type TableRow = TableRecord & { k1?: string, k2?: string }

const TITLE_KEY = 'table.columns.customTitle'

const columns: TableColumn<TableRow>[] = [
  { key: 'k1', dataIndex: 'k1', title: TITLE_KEY },
  { key: 'k2', dataIndex: 'k2', title: <span data-testid="node-title">Node title</span> }
]

const data: TableRow[] = [{ key: 'r1', k1: 'v1', k2: 'v2' }]

const renderTable = () => TableTestingClass.render({ columns, dataSource: data })

describe('Table LocalizeColumnTitles module', () => {
  it('should run string column titles through i18n t()', () => {
    const table = renderTable()

    const headers = table.columns.getHeaders().map(header => header.textContent)
    expect(headers).toContain(`T:${TITLE_KEY}`)
    expect(headers).not.toContain(TITLE_KEY)
  })

  it('should leave a non-string (ReactNode) title unchanged', () => {
    renderTable()

    const nodeTitle = screen.getByTestId('node-title')
    expect(nodeTitle).toHaveTextContent('Node title')
    expect(nodeTitle.textContent).not.toContain('T:')
  })
})
