import { Table } from '.'
import { withKnobs } from '@storybook/addon-knobs'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'

export default {
  title: 'Organisms/Table',
  component: Table,
  decorators: [withKnobs],
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export { Basic, BasicControllable } from './stories/Basic'
export { CellWithTable } from './stories/CellWithTable'
export { Draggable } from './stories/Draggable'
export { CustomHeader } from './stories/CustomHeader'
export { Resizable } from './stories/Resizable'
export { SortingAndFilters, FiltersSaving } from './stories/SortingAndFilters'
export { TreeView } from './stories/TreeView'
export { WithoutPagination } from './stories/WithoutPagination'
export { PageLoading } from './stories/PageLoading'
export { InfiniteScroll } from './stories/InfiniteScroll'
export { OnHoverContent } from './stories/OnHoverContent'
export { Search, SearchInRender } from './stories/Search'
export { ColumnsSelection } from './stories/ColumnsSelection'
export { StickyHeader, StickyHeaderWithToolbar } from './stories/StickyHeader'
export { Groupping } from './stories/Groupping'
export { Accordion } from './stories/Accordion'
export { CustomLoader } from './stories/CustomLoader'
export { Reductions } from './stories/Reductions'
export { PaginationSimple, Pagination } from './stories/Pagination'
export { TreeViewCustomColumn } from './stories/TreeViewCustomColumn'
