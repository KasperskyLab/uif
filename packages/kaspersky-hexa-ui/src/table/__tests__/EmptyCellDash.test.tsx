import { render } from '@testing-library/react'
import React from 'react'

import { Table } from '../test-utils/shared'

describe('Table EmptyCellDash module', () => {
  it('should find dash in empty cell', () => {
    const { container } = render(<Table
      columns={[
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
      ]}
      dataSource={[
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
      ]}
    />)
    expect(container.querySelectorAll('.hexa-ui-empty-dash-cell')).toHaveLength(1)
  })
  it('should find all dashes in all empty cells', () => {
    const { container } = render(<Table
      columns={[
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
      ]}
      dataSource={[
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
      ]}
    />)
    expect(container.querySelectorAll('.hexa-ui-empty-dash-cell')).toHaveLength(4)
  })
})
