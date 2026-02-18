import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Table } from '@src/table'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { Placeholder as PlaceholderComponent } from '../Placeholder'
import { placeholderImageVariants, PlaceholderProps } from '../types'

import componentMeta from './Placeholder.stories'

const imageVariants = ['-', ...placeholderImageVariants] as const

const meta: Meta<PlaceholderProps> = {
  ...componentMeta,
  title: 'Hexa UI Components/Placeholder/Table',
  tags: ['!autodocs']
}
export default meta

const defaultTableColumns = [
  {
    title: 'table.column.name',
    key: 'name',
    dataIndex: 'name',
    width: 500
  },
  {
    title: 'table.column2.name',
    key: 'description',
    dataIndex: 'description',
    width: 500
  },
  {
    title: 'table.column3.name',
    key: 'age',
    dataIndex: 'age',
    width: 500
  }
]

type StoryPlaceholderProps = Omit<PlaceholderProps, 'actionButtons' | 'actionLinks' | 'image'> & {
  image: typeof imageVariants[number],
  actionButtons: boolean,
  actionLinks: boolean
}

type Story = StoryObj<StoryPlaceholderProps>

const processArgs = ({
  actionButtons: actionButtonsRaw,
  actionLinks: actionLinksRaw,
  image: imageRaw,
  ...rest
}: StoryPlaceholderProps) => {
  const image = imageRaw === '-' ? undefined : imageRaw
  const actionButtons: PlaceholderProps['actionButtons'] = actionButtonsRaw
    ? [{ text: 'Button', mode: 'primary' }, { text: 'Button' }]
    : undefined
  const actionLinks = actionLinksRaw ? [{ text: 'Link' }] : undefined

  return { image, actionButtons, actionLinks, ...rest }
}

const StyledPlaceholder = styled(PlaceholderComponent)`
  min-height: 200px;
`

const StyledTable = styled(Table)`
  &&&&&& .ant-table-tbody > tr > td:last-child {
    padding: 0;
  }
`

export const InTable: Story = {
  render: (args) => (
    <Space gap={16}>
      <SectionMessage mode="info" closable={false}>
        <P>If the table is surrounded by form elements, other parts of the interface, or other tables, then the Placeholder takes on a height depending on the content, but not less than 200px.</P>
        <P>Если таблицу окружают элементы формы, другие части интерфейса или другие таблицы, то Placeholder принимает высоту в зависимости от контента, но не менее 200px.</P>
      </SectionMessage>
      <StyledTable
        dataSource={[]}
        columns={defaultTableColumns.slice(0, 2)}
        pagination={false}
        emptyText={<StyledPlaceholder {...processArgs({ ...args, actionButtons: true, actionLinks: true })} />}
      />
      <StyledTable
        dataSource={[]}
        columns={defaultTableColumns.slice(0, 2)}
        pagination={false}
        emptyText={<StyledPlaceholder {...processArgs({ ...args, image: '-' })} />}
      />
    </Space>
  ),
  argTypes: {
    mode: { control: false },
    size: { control: false }
  },
  args: {
    mode: 'filled',
    size: 'small'
  }
}

export const HorizontalScrolling: Story = {
  render: (args) => (
    <Space width="100%" gap={16}>
      <SectionMessage mode="info" closable={false}>
        <P>In this case, the placeholder is arranged according to the rules for tables. It remains fixed when scrolling horizontally. Only the header of the table will be scrolled.</P>
        <P>Placeholder в таком случае располагается по правилам для таблиц. При горизонтальном скролле остаётся неподвижным. Скроллится только шапка таблицы.</P>
      </SectionMessage>
      <StyledTable
        dataSource={[]}
        resizingMode="scroll"
        columns={defaultTableColumns}
        pagination={false}
        emptyText={<StyledPlaceholder {...processArgs({ ...args, actionButtons: true, actionLinks: true })} />}
      />
    </Space>
  ),
  argTypes: {
    mode: { control: false },
    size: { control: false }
  },
  args: {
    mode: 'filled',
    size: 'small'
  }
}
