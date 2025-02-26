import { Text } from '@src/typography'
import React from 'react'

import { basicArgTypes, basicDataSource, BasicTableStory, genArgType, Story } from './_commonConstants'

const dataSource = [
  ...basicDataSource.slice(0, 3),
  {
    name: 'Value 4',
    description: 'Description 4',
    accordeon: {
      title: <Text type="BTR4">Accordion header</Text>,
      children: <b>Accordion content</b>
    }
  },
  {
    name: 'Value 5',
    description: 'Description 5',
    accordeon: {
      title: <Text type="BTR3">Accordion2 header</Text>,
      children: <i>Accordion2 content</i>
    }
  },
  ...basicDataSource.slice(5, 8)
].map((item, index) => ({
  ...item,
  key: index + 1
}))

export const RowAccordion: Story = {
  render: BasicTableStory.bind({}),
  args: {
    useAccordion: true,
    dataSource
  },
  argTypes: {
    useAccordion: basicArgTypes.useAccordion,
    dataSource: genArgType(
      'dataSource[n].accordeon.title - title of accordion, ReactNode<br/>' +
      'dataSource[n].accordeon.children - content of accordion'
    )
  },
  parameters: { controls: { exclude: ['columns'] } }
}
