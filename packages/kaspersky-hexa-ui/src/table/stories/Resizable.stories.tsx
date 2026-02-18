import { ExpandableText } from '@src/expandable-text'
import { SectionMessage } from '@src/section-message'
import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Meta } from '@storybook/react-webpack5'
import React from 'react'

import { TableViewProps } from '../types'

import { basicArgTypes, basicDataSource, basicTwoColumns, genArgType, Story, Wrapper } from './_commonConstants'

const columnsManual = [
  basicTwoColumns[0],
  {
    key: 'note',
    title: 'table.column2.name',
    dataIndex: 'note',
    width: '30%',
    resizing: { disabled: true },
    render: () => (
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </ExpandableText>
    )
  },
  {
    ...basicTwoColumns[1],
    title: 'table.column3.name'
  }
]

const columns: TableViewProps['columns'] = [
  {
    title: <>Status</>,
    key: 'status',
    dataIndex: 'status',
    width: 100
  },
  {
    title: <>Name</>,
    key: 'name',
    dataIndex: 'name',
    width: 300
  },
  {
    title: <>Rights</>,
    key: 'rights',
    dataIndex: 'rights',
    width: 200
  },
  {
    title: <>Profile</>,
    key: 'profile',
    dataIndex: 'profile',
    width: 200
  }
]

const dataSourceManual = basicDataSource.slice(0, 20).map((item) => ({
  ...item,
  note: 'It will be replaced'
}))

const dataSource = Array(20).fill(null).map((_, i) => ({
  name: `Name ${i + 1}`,
  status: `Status ${i + 1}`,
  rights: `Rights ${i + 1}`,
  profile: `Profile ${i + 1}`
}))

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Resizable',
  component: Table,
  argTypes: {
    columns: genArgType('columns[n].resizing = { disabled: true } - disable resizing for n`th column'),
    onColumnResize: basicArgTypes.onColumnResize,
    resizingMode: basicArgTypes.resizingMode
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
export default meta

export const Resizable: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <SectionMessage mode="info">
        <div>проп таблицы resizingMode = &quot;undefined&quot;</div>
        <div>каждая колонка может ресайзиться, никакой дополнительной логики не добавляется</div>
      </SectionMessage>
      <Table {...args} />
    </Wrapper>
  ),
  args: {
    columns: columnsManual,
    dataSource: dataSourceManual
  }
}

export const ResizableLast: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <SectionMessage mode="info">
        <div>проп таблицы resizingMode = &quot;last&quot;</div>
        <div>Два ключевых вычисления:</div>
        <ul>
          <li>если есть хоть одна колонка таблицы без выставленной ширины, то никаких изменений не последует</li>
          <li>если все колонки имеют свою фиксированную ширину, то у последней колонки значение ширины удаляется (width: null)</li>
        </ul>
        <div>Чаще всего используется в таблицах с малым количеством колонок и шириной меньше чем ширина контейнера (ширина окна браузера), в результате последняя колонка будет занимать оставшееся свободное место контейнера</div>
      </SectionMessage>
      <Table {...args} />
    </Wrapper>
  ),
  args: {
    columns,
    dataSource,
    resizingMode: 'last'
  }
}

export const ResizableMax: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <SectionMessage mode="info">
        <div>проп таблицы resizingMode = &quot;max&quot;</div>
        <div>Три ключевых вычисления:</div>
        <ul>
          <li>если есть хоть одна колонка таблицы без выставленной ширины, то никаких изменений не последует</li>
          <li>если все колонки имеют свою фиксированную ширину, то вычисляется колонка с наибольшей шириной и значение ширины удаляется (width: null)</li>
          <li>если в таблице с наибольшей шириной несколько колонок (две по 300px), то значение width очистится для первой из них</li> 
        </ul>
        <div>Чаще всего используется в таблицах с малым количеством колонок и шириной меньше чем ширина контейнера (ширина окна браузера), в результате определенная колонка будет занимать оставшееся свободное место контейнера</div>
      </SectionMessage>
      <Table {...args} />
    </Wrapper>
  ),
  args: {
    columns,
    dataSource,
    resizingMode: 'max'
  }
}

export { HorizontalScroll } from './HorizontalScroll'