import { TagReductionGroup } from '@src/tag/TagReductionGroup'
import { TagGroupProps } from '@src/tag/types'
import React from 'react'

import { BasicTableStory, Story } from './_commonConstants'

const columns = [
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description'
  }
]

const tagItems: TagGroupProps['items'] = [
  { label: 'Восточно-Сибирская жд' },
  { label: 'Забайкальская жд' },
  { label: 'Северо-Кавказская жд' },
  { label: 'Московская окружная жд' },
  { label: 'Южно-Уральская жд' },
  { label: 'Октябрьская жд' }
]

const dataSource = [
  {
    tags: <TagReductionGroup items={tagItems}/>,
    description: 'Description',
    key: 'tag-row-1'
  }
]

export const TagGroupCell: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns,
    dataSource,
    resizingMode: 'last'
  },
  parameters: { controls: { exclude: /(dataSource|resizingMode)/ } }
}
