import { Placeholder, PlaceholderProps } from '@src/placeholder'
import { placeholderImageVariants } from '@src/placeholder/types'
import React from 'react'
import styled from 'styled-components'

import { Table } from '..'
import { ITableProps } from '../types'

import { basicArgTypes, genArgType, Story } from './_commonConstants'

export const Wrapper = styled.div`
  flex: 1;
  align-self: normal;
  display: flex;
  flex-direction: column;
`

const placeHolderProps = {
  image: 'noData',
  title: 'Placeholder title',
  description: 'Description',
  mode: 'filled',
  size: 'medium',
  testId: 'placeholder-test-id',
  klId: 'placeholder-kl-id',
  actionButtons: [{ text: 'Button', mode: 'primary' }, { text: 'Button' }],
  actionLinks: [{ text: 'Link' }]
}

const customEmptyText = () => (
  <Placeholder {...placeHolderProps as PlaceholderProps} />
)

export const EmptyHeightFull: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <Table {...args} emptyText={customEmptyText}/>
    </Wrapper>
  ),
  args: {
    dataSource: [],
    pagination: false,
    fullHeight: true,
    toolbar: {
      left: [
        {
          type: 'button',
          key: '1',
          label: 'Tool 1',
          disabled: true,
          onClick: () => console.log('Tool 1'),
          testId: 'item-1'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '2',
          label: 'Tool 2',
          disabled: true,
          onClick: () => console.log('Tool 2'),
          testId: 'item-2'
        }
      ]
    }
  },
  argTypes: {
    emptyText: basicArgTypes.emptyText,
    dataSource: genArgType('Empty text is shown when dataSource contains nothing')
  },
  parameters: { controls: { exclude: ['pagination', 'columns'] } }
}
