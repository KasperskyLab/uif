import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from './__meta__/meta.json'
import {
  basicArgTypes,
  basicDataSource,
  BasicTableStory,
  basicTwoColumns,
  Story
} from './stories/_commonConstants'
import TableDocs from './stories/docs/TableDocs.md'
import { HorizontalScroll as HorizontalScrollStory } from './stories/HorizontalScroll'
import { InSidebar as InSidebarStory } from './stories/InSidebar'
import { TableSettings as TableSettingsStory } from './stories/TableSettings'

import { TableMockStory } from './__mocks__/filtersMockData'
import { ITableProps, Table } from './index'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource,
    testId: 'test-123'
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData, TableDocs)
    },
    controls: {
      exclude: ['dataSource', 'columns']
    }
  }
}
export default meta

export const Basic: Story = {
  render: BasicTableStory.bind({}),
  argTypes: { ...basicArgTypes },
  parameters: { controls: { exclude: [] } }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: {
    source: {
      table_row: componentColors.table_row,
      table_cell: componentColors.table_cell,
      table_cell_header: componentColors.table_cell_header
    }
  },
  render: args => <ThemedPalette {...args} />
}

export { Disabled } from './stories/Disabled'
export const HorizontalScroll: Story = {
  ...HorizontalScrollStory,
  name: 'Horizontal scroll'
}
export const InSidebar: TableMockStory = {
  ...InSidebarStory,
  name: 'Table in sidebar'
}
export const TableSettings: Story = {
  ...TableSettingsStory,
  name: 'Table Settings'
}