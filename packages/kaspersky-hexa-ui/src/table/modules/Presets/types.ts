import { ToolbarCommonProps } from '@src/table'
import { TableRecord } from '@src/table/types'
import { ReactNode } from 'react'

import { UnitedFilter } from '../Filters/types'
import { ActiveSorting } from '../SortingAndFilters/types'

export type TablePresetDraft<T extends TableRecord = TableRecord> =
  Omit<TablePreset<T>, 'id' | 'system'>

export type TablePresetColumns = Record<string, TablePresetColumn>

export type TablePresetColumn = {
  show?: boolean,
  sortIndex?: number,
  width?: number | string,
  isUserDefinedWidth?: boolean
}

export type TablePreset<T extends TableRecord = TableRecord> = {
  default?: boolean,
  description?: string
  name: string,
  id: string,
  system?: boolean,
  settings: {
    columns?: TablePresetColumns,
    filters?: UnitedFilter<T>[],
    groupBy?: string,
    pageSize?: number,
    sorting?: ActiveSorting<T>
  }
}

export type TableView<T extends TableRecord = TableRecord> = {
  default?: boolean,
  description: string,
  id: string,
  name: string,
  presets: TablePreset<T>[],
  settings?: {
    presetActions?: TablePresetAction<T>[],
    toolbarActions?: ToolbarCommonProps<T>['getLeftItems']
  }
}

export type TablePresetAction<T extends TableRecord = TableRecord, P = TablePreset<T>> = {
  key: string,
  icon?: ReactNode,
  name: string
  onClick: (preset: P) => void | P | Promise<void> | Promise<P>
}

export type TablePresetsProp<T extends TableRecord = TableRecord> = {
  loading?: boolean,
  onCreatePreset: (preset: TablePresetDraft<T>, viewId?: string) => Promise<TablePreset<T>>,
  onDeletePreset: (preset: TablePreset<T>) => Promise<void>
  onUpdatePreset: (preset: TablePreset<T>) => Promise<TablePreset<T>>
  onPresetSelected: (id: string) => Promise<void>
  onViewSelected: (id: string) => Promise<void>,
  presetId?: string,
  presets?: TablePreset<T>[]
  viewId?: string,
  views?: TableView<T>[]
}