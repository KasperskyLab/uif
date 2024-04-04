import React, { ReactNode } from 'react'
import { Meta } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { badges } from '@sb/badges'
import { ITableProps, Table } from '../'
import { BasicTableStory, patchKeys, basicArgTypes, basicTwoColumns, basicTreeDataSource, genArgType, Story } from './_commonConstants'
import { Link } from '@src/link'

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table/Search',
  component: Table,
  args: {
    toolbar: { showSearch: true },
    columns: basicTwoColumns,
    dataSource: patchKeys(basicTreeDataSource),
    enableSearchHighlighting: true
  },
  argTypes: {
    toolbar: genArgType('You need to set "{ showSearch: true }" to enable the search'),
    enableSearchHighlighting: basicArgTypes.enableSearchHighlighting
  },
  decorators: [withKnobs],
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['dataSource', 'columns']
    }
  }
}
export default meta

export const Search: Story = { render: BasicTableStory.bind({}) }

export const SearchInRender: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns: [
      {
        ...basicTwoColumns[0],
        render: (data: ReactNode) => ({
          children: <b>{data} in jsx</b>,
          props: {}
        })
      },
      {
        ...basicTwoColumns[0],
        render: (data: ReactNode) => ({
          children: <>
            <span dangerouslySetInnerHTML={{ __html: '<a href="">Text in jsx</a>' }} />
            <b> {data}</b>
          </>,
          props: {}
        })
      },
      {
        ...basicTwoColumns[1],
        render: (data: ReactNode) => <Link href='#' >Link: {data}</Link>
      }
    ]
  },
  argTypes: { filterItems: basicArgTypes.filterItems }
}
