import { Meta } from '@storybook/react'
import { badges } from '@sb/badges'
import { withKnobs } from '@storybook/addon-knobs'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { ITableProps, Table } from './index'
import { BasicTableStory, basicArgTypes, basicTwoColumns, basicDataSource, Story } from './stories/_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Organisms/Table',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource,
    testId: 'test-123'
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

export const Basic: Story = {
  render: BasicTableStory.bind({}),
  argTypes: { ...basicArgTypes },
  parameters: { controls: { exclude: [] } }
}

export { EmptyText } from './stories/Empty'
export { Disabled } from './stories/Disabled'
export { Draggable } from './stories/Draggable'
export { Groupping } from './stories/Groupping'
export { OnHoverContent } from './stories/OnHoverContent'
export { CellWithTable } from './stories/CellWithTable'
export { Resizable } from './stories/Resizable'
export { ResizableMax } from './stories/ResizableMax'
export { Settings } from './stories/Settings'
export { ColumnsWidthPercent } from './stories/ColumnsWidthPercent'
export { RowAccordion } from './stories/RowAccordion'
export { Reductions } from './stories/Reductions'
export { WithFilters } from './stories/WithFilters'
