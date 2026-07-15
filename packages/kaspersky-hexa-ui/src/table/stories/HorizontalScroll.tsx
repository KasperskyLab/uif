import { SectionMessage } from '@src/section-message'
import React from 'react'

import mockData from '../__mocks__/table-mock-data.json'
import { TableColumn } from '../types'

import { BasicTableStory, Story } from './_commonConstants'

type StoryColumn = {
  name: string,
  width?: number,
  show?: boolean,
  minWidth?: number,
  hideColumnAvailable?: boolean
}

const createColumn = ({
  name,
  width,
  show = true,
  hideColumnAvailable,
  minWidth
}: StoryColumn) => ({
  key: name,
  title: name,
  dataIndex: name,
  width,
  minWidth,
  show,
  hideColumnAvailable,
  groupingAvailable: true,
  hasEmptyCellDash: true
})

export const columns = [
  createColumn({ name: 'name', width: 190, hideColumnAvailable: false }),
  createColumn({ name: 'country', width: 190, minWidth: 50 }),
  createColumn({ name: 'city', width: 270, minWidth: 240 }),
  createColumn({ name: 'date', width: 180 }),
  createColumn({ name: 'isSortable', width: 150 }),
  createColumn({ name: 'sorter', width: 150 }),
  createColumn({ name: 'sorterIsSortable', width: 150 })
]

export const dataSource = mockData.map((el, i) => {
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
    return (
      <>
        <SectionMessage mode="info">
          <div>Проп таблицы resizingMode = &quot;scroll&quot;</div>
          <div>Режим scroll используется для таблиц с большим количеством колонок и под капотом включает кастомный горизонтальный скроллбар</div>
        </SectionMessage>
        <BasicTableStory {...args} />
      </>
    )

  },
  args: {
    pagination: {
      pageSize: 20,
      restoreCurrentWhenDataChange: true
    },
    columns: columns as TableColumn[],
    dataSource,
    resizingMode: 'scroll',
    afterColumn: true,
    borderedStyle: false,
    stickyHeader: 0,
    stickyFooter: false
  }
}
