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

import { ITableProps, Table } from './index'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource,
    testId: 'test-123',
    borderedStyle: false
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

export { EmptyText } from './stories/Empty'
export { EmptyCellDash } from './stories/EmptyCellDash'
export { EmptyHeightFull } from './stories/EmptyHeightFull'
export { Disabled } from './stories/Disabled'
export { Draggable } from './stories/Draggable'
export { DraggableWithRowSelection } from './stories/DraggableWithRowSelection'
export { HorizontalScroll } from './stories/HorizontalScroll'
export { OnHoverContent } from './stories/OnHoverContent'
export { CellWithTable } from './stories/CellWithTable'
export { TagGroupCell } from './stories/TagGroupCell'
export { ColumnsWidthPercent } from './stories/ColumnsWidthPercent'
export { RowAccordion } from './stories/RowAccordion'
export { BgPattern } from './stories/BgPattern'
export { InSidebar } from './stories/InSidebar'
export { ExpandableText } from './stories/ExpandableText'
export { WithFilters } from './stories/WithFilters'
export { WithIconColumn } from './stories/WithIconColumn'
export { KesTable } from './stories/KesTable'
export { WithContextMenu } from './stories/WithContextMenu'
export { TableSettings } from './stories/TableSettings'
export { Reduction } from './stories/Reduction'
