import { TableTestingClass } from '../test-utils/TableTestingClass'

const getEmptyCellDashes = (table: TableTestingClass): HTMLElement[] => table.queryAll('.hexa-ui-empty-dash-cell')

describe('Table EmptyCellDash module', () => {
  it('should find dash in empty cell', () => {
    const table = TableTestingClass.render({
      columns: [
        {
          title: 'table.column.name',
          key: 'name',
          hasEmptyCellDash: true,
          dataIndex: 'name'
        },
        {
          title: 'table.column2.name',
          key: 'description',
          hasEmptyCellDash: false,
          dataIndex: 'description'
        }
      ],
      dataSource: [
        {
          name: '',
          description: 'description',
          key: 1
        },
        {
          name: 'name',
          description: '',
          key: 2
        }
      ]
    })
    expect(getEmptyCellDashes(table)).toHaveLength(1)
  })
  it('should find all dashes in all empty cells', () => {
    const table = TableTestingClass.render({
      columns: [
        {
          title: 'table.column.name',
          key: 'name',
          hasEmptyCellDash: true,
          dataIndex: 'name'
        },
        {
          title: 'table.column2.name',
          key: 'description',
          hasEmptyCellDash: true,
          dataIndex: 'description'
        }
      ],
      dataSource: [
        {
          name: '',
          description: 'description',
          key: 1
        },
        {
          name: '',
          description: 'description',
          key: 2
        },
        {
          name: 'name',
          description: '',
          key: 3
        },
        {
          name: 'name',
          description: '',
          key: 4
        }
      ]
    })
    expect(getEmptyCellDashes(table)).toHaveLength(4)
  })
})
