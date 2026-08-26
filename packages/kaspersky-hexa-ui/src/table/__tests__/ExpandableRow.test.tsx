import { TableColumn, TableRecord } from '@src/table'
import { MODES, renderByMode } from '@src/table/test-utils/renderByMode'
import { configure, waitFor } from '@testing-library/react'

configure({ testIdAttribute: 'data-testid' })

jest.setTimeout(15000)

type TableRow = TableRecord & {
  fullname?: string,
  children?: TableRow[]
}

const columns: TableColumn<TableRow>[] = [{ key: 'fullname', dataIndex: 'fullname', title: 'Name' }]

const treeData: TableRow[] = [
  {
    key: 'parent-1',
    fullname: 'Parent 1',
    children: [
      {
        key: 'child-1a',
        fullname: 'Child 1A',
        children: [{ key: 'grandchild-1a1', fullname: 'Grandchild 1A1' }]
      },
      { key: 'child-1b', fullname: 'Child 1B' }
    ]
  },
  { key: 'leaf-2', fullname: 'Leaf 2' }
]

describe.each(MODES)('Table expandable/tree rows - $description', ({ mode }) => {
  const renderTree = () => renderByMode(mode, treeData, { columns, pagination: { pageSize: 20 } })

  it('should show an expand icon for parents but not for leaf rows', async () => {
    const { table } = await renderTree()

    expect(table.rows.getExpandIcon('parent-1')).toBeInTheDocument()
    expect(table.rows.getExpandIcon('leaf-2')).not.toBeInTheDocument()
  })

  it('should mark the parent expand icon collapsed by default and keep children hidden', async () => {
    const { table } = await renderTree()

    expect(table.rows.isRowExpanded('parent-1')).toBe(false)
    expect(table.rows.getByKey('child-1a')).toBeNull()
  })

  it('should reveal child rows on expand and hide them on collapse', async () => {
    const { table } = await renderTree()

    table.rows.clickExpandIcon('parent-1')
    await table.rows.findByKey('child-1a')
    await table.rows.findByKey('child-1b')
    expect(table.rows.isRowExpanded('parent-1')).toBe(true)

    table.rows.clickExpandIcon('parent-1')
    await waitFor(() => expect(table.rows.getByKey('child-1a')).toBeNull())
  })

  it('should reveal a deeper nesting level when expanding a child row', async () => {
    const { table } = await renderTree()

    expect(table.rows.getByKey('grandchild-1a1')).toBeNull()

    table.rows.clickExpandIcon('parent-1')
    await table.rows.findByKey('child-1a')
    expect(table.rows.getExpandIcon('child-1a')).toBeInTheDocument()

    table.rows.clickExpandIcon('child-1a')
    const grandchild = await table.rows.findByKey('grandchild-1a1')
    expect(grandchild.className).toContain('ant-table-row-level-2')
  })
})
