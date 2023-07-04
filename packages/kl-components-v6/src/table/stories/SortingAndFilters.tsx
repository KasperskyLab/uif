import React from 'react'
import { Table } from '..'
import styled from 'styled-components'
import { ActiveFilter, ActiveSorting } from '../modules/SortingAndFilters'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

type row = { name: string, description: string, index?: number }

const data: row[] = [{
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}]

const initialFilters: ActiveFilter = {
  description: {
    'Initial False': (): boolean => {
      return false
    }
  }
}

const initialSorting: ActiveSorting = {
  field: 'name',
  direction: 'asc'
}

export const SortingAndFilters = () => {
  const rows: row[] = []
  const columns = [{
    title: 'table.column.name',
    key: 'name',
    dataIndex: 'name',
    isSortable: true,
    width: 300
  }, {
    title: 'table.column2.name',
    key: 'description',
    dataIndex: 'description',
    isSortable: true,
    width: 300,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) {
            return Number(numbers[0]) % 2 === 0
          }
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => {
          return false
        }
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) {
            return Number(numbers[0]) > 20
          }
          return false
        }
      }
    ]
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ]
  }]

  const generatedRows = Array.from({ length: 10 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index, arr) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (arr.length - index),
      index: index + 1,
      key: index
    }))
  return (
    <Wrapper>
      <Table
        initialFilters={initialFilters}
        initialSorting={initialSorting}
        onFilterChange={(arg: any) => console.log('onFilterChange', arg)}
        onSortChange={(arg: any) => console.log('onSortChange', arg)}
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={dataSource}
        columns={columns as any} />
    </Wrapper>
  )
}

export const FiltersSaving = () => {
  const rows: row[] = []
  const columns = [{
    title: 'table.column.name',
    key: 'name',
    dataIndex: 'name',
    isSortable: true,
    width: 300
  }, {
    title: 'table.column2.name',
    key: 'description',
    dataIndex: 'description',
    isSortable: true,
    width: 300,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) {
            return Number(numbers[0]) % 2 === 0
          }
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => {
          return false
        }
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) {
            return Number(numbers[0]) > 20
          }
          return false
        }
      }
    ]
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ]
  }]

  const generatedRows = Array.from({ length: 10 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index, arr) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (arr.length - index),
      index: index + 1,
      key: index
    }))
  return (
    <Wrapper>
      <Table
        saveFilters={ { storageKey: 'storybook-table-saved-filters' } }
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={dataSource}
        columns={columns as any} />
    </Wrapper>
  )
}
