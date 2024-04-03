import React, { useState } from 'react'
import { Table } from '@src/table'
import { Story, basicDataSource, basicTwoColumns } from './_commonConstants'
import { FilterItemTagProps } from '../modules/ToolbarIntegration/FilterItems'

const StoryComponent = () => {
  const [filterBtns, setFilterBtns] = useState(['Value 1', 'Value 2', 'Value 3'])

  const items: FilterItemTagProps[] = filterBtns.map(btn => ({
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
