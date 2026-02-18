import { Table } from '@src/table'
import React, { useState } from 'react'

import { TableInternalFilterItemsTagProps } from '../types'

import { basicDataSource, basicTwoColumns, Story } from './_commonConstants'

const StoryComponent = () => {
  const value_1 = 'Value 1 '.repeat(50)
  const [filterBtns, setFilterBtns] = useState([value_1, 'Value 2', 'Value 3'])

  const items: TableInternalFilterItemsTagProps[] = filterBtns.map(btn => ({
    text: btn,
    onClose: (e) => {
      e?.preventDefault()

      setFilterBtns(filterBtns.filter(filter => filter !== btn))
    }
  }))

  const getFilteredData = () => basicDataSource.filter(data => filterBtns.includes(data.name))

  return (
    <div style={{ width: '100%' }}>
      <Table
        toolbar={{ showSearch: true }}
        dataSource={filterBtns.length > 0 ? getFilteredData() : basicDataSource}
        columns={basicTwoColumns}
        filterItems={{ items, clearLinkText: 'Reset', onClear: () => setFilterBtns([]) }}
      />
    </div>
  )
}

export const WithFilters: Story = {
  render: StoryComponent
}
