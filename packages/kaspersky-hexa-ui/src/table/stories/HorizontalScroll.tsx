import { SectionMessage } from '@src/section-message'
import React from 'react'

import mockData from '../__mocks__/table-mock-data.json'
import { TableColumn } from '../types'

import { BasicTableStory, Story } from './_commonConstants'

const createColumn = (name: string, width?: number, show = true, hideColumnAvailable = true) => ({
  key: name,
  title: name,
  dataIndex: name,
  width: `${width}%`,
  show,
  hideColumnAvailable,
  groupingAvailable: true
})

export const columns = [
  createColumn('name', 19, true, false),
  createColumn('country', 13),
  createColumn('numberrange', 10),
  createColumn('city', 17),
  createColumn('date', 18),
  createColumn('isSortable', 10),
  createColumn('sorter', 10),
  createColumn('sorterIsSortable', 10)
]

const dataSource = mockData.map((el, i) => {
  return {
    ...el,
    date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString(),
    isSortable: i === 3 ? 'aaaaaaaaaaa' : new Array(i).fill('a').join(''),
    sorter: i === 4 ? 'aaaaaaaaaaaa' : new Array(i).fill('a').join(''),
    sorterIsSortable: i === 5 ? 'aaaaaaaaaaaaa' : new Array(i).fill('a').join('')
  }
})

export const HorizontalScroll: Story = {
  render: (args) => {
    return <>
      <SectionMessage mode="info">
        <div>Проп таблицы resizingMode = &quot;scroll&quot;</div>
        <div>Режим scroll используется для таблиц с большим количеством колонок и под капотом включает кастомный горизонтальный скроллбар</div>
      </SectionMessage>
      <BasicTableStory {...args} />
    </>
    
  },
  args: {
    pagination: {
      pageSize: 20,
      restoreCurrentWhenDataChange: true
    },
    columns: columns as TableColumn[],
    dataSource,
    resizingMode: 'scroll'
  }
}
