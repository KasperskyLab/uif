import { ButtonProps } from '@src/button'
import { TableColumn, TableRecord } from '@src/table'

import { ExtractFilterConditions, FilterConfigInternal, FilterType, SidebarFilterInternal } from '../Filters'

import { FilterValidation, InvalidFilter } from './items/types'

export type SidebarFilterHandler<T extends TableRecord = TableRecord> = {
  handlePropertyChange: (name: string, id: string, attribute?: string) => Promise<void>,
  handleFilterChange: (filterTo: SidebarFilterInternal<T>, id: string) => void,
  handleRemove: (filter: SidebarFilterInternal<T>) => void,
  handleFilterAdd: (name: string, id: string) => Promise<void>,
  handleRemoveFilterRow: (groupId: string, id: string) => void
}

export type FilterItemProps<T extends TableRecord = TableRecord> = {
  index: number,
  filter: SidebarFilterInternal<T>,
  columnsToShow: TableColumn<T>[],
  invalidFilters: InvalidFilter[]
} & SidebarFilterHandler<T>

export type FilterItemConditionProps<T extends TableRecord = TableRecord> = {
  index: number,
  filter: FilterConfigInternal,
  operations: ExtractFilterConditions<FilterType>
} & Pick<SidebarFilterHandler<T>, 'handleFilterChange'>

export type FilterItemRowProps<T extends TableRecord = TableRecord> = {
  index: number,
  filter: FilterConfigInternal,
  column?: TableColumn<T>,
  handleRemoveFilterRow?: () => void,
  showOperator?: boolean
} & FilterValidation & Pick<SidebarFilterHandler<T>, 'handleFilterChange'>

export type FilterItemValueProps<T extends TableRecord = TableRecord> = {
  index?: number,
  filter: FilterConfigInternal,
  column?: TableColumn<T>,
  onChange: (filter: FilterConfigInternal) => void
} & FilterValidation

export type FilterToolbarProps<T extends TableRecord = TableRecord> = {
  filters: SidebarFilterInternal<T>[],
  columns: TableColumn<T>[],
  additionalButtons?: ButtonProps[],
  onChange: (filters: SidebarFilterInternal<T>[]) => void
}
