import { render } from '@testing-library/react'
import React, { ReactNode, TdHTMLAttributes } from 'react'

import { Table, TableColumn, TableRecord } from '../..'

jest.mock('@helpers/overflow/overflowWatcher', () => ({
  ...jest.requireActual('@helpers/overflow/overflowWatcher'),
  watchOverflow: jest.fn(),
  unwatchOverflow: jest.fn()
}))

// eslint-disable-next-line import/order
import { watchOverflow } from '@helpers/overflow/overflowWatcher'

/**
 * A cell that clips has to be measured, and the only way to a DOM node from React is a ref — which
 * a plain function component cannot take. Consumers do pass such components as
 * `components.body.cell`, and when they did, the cell was never handed to the watcher: no
 * measurement, no clipped state, no expander, and not a word about it outside a development
 * warning. This is the check that the cell reaches the watcher either way.
 */

type Row = TableRecord & { text: string }

const columns: TableColumn<Row>[] = [
  { key: 'text', dataIndex: 'text', title: 'Text', expandableText: true }
]

const dataSource: Row[] = [{ key: 'r1', text: 'значение, которое может не поместиться' }]

type CellProps = TdHTMLAttributes<HTMLTableCellElement> & { children?: ReactNode }

/** What a consumer typically writes: spreads its props onto a cell, and takes no ref. */
const PlainCell = ({ children, ...rest }: CellProps) => <td {...rest}>{children}</td>

/** The same, but putting the children inside something of its own — so the cell is not the parent. */
const NestingCell = ({ children, ...rest }: CellProps) => (
  <td {...rest}><div className="inner">{children}</div></td>
)

const watchedCells = () => (watchOverflow as jest.Mock).mock.calls
  .map(([node]) => node as Element | null)
  .filter(node => node?.tagName === 'TD')

describe('CellOverflow', () => {
  beforeEach(() => {
    (watchOverflow as jest.Mock).mockClear()
  })

  it('control: watches the cell when nothing is supplied and the cell is a plain td', () => {
    render(<Table columns={columns} dataSource={dataSource} />)

    expect(watchedCells().length).toBeGreaterThan(0)
  })

  it('watches the cell when the supplied cell component cannot take a ref', () => {
    render(
      <Table
        columns={columns}
        dataSource={dataSource}
        components={{ body: { cell: PlainCell } }}
      />
    )

    expect(watchedCells().length).toBeGreaterThan(0)
  })

  it('watches the cell, not the wrapper, when the supplied component nests its children', () => {
    render(
      <Table
        columns={columns}
        dataSource={dataSource}
        components={{ body: { cell: NestingCell } }}
      />
    )

    expect(watchedCells().length).toBeGreaterThan(0)
  })
})
