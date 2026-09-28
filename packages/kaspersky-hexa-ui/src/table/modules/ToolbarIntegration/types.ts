import { TableRecord } from '@src/table'
import { TableRowSelectionData } from '@src/table/types'
import {
  ImportExportButtonProps,
  ImportExportDropdownProps,
  ToolbarItemKey,
  ToolbarItems,
  ToolbarProps as OriginToolbarProps
} from '@src/toolbar/types'
import { ReactNode } from 'react'

import { SidebarFilter, UnitedFilter } from '../Filters'
import { ActiveSorting } from '../SortingAndFilters'

export type GetLeftItemsProps<T extends TableRecord = TableRecord> = {
  filters?: UnitedFilter<T>[],
  sidebarFilters?: SidebarFilter<T>[],
  searchString?: string,
  sorting?: ActiveSorting<T>,
  dataSource?: T[]
} & Partial<TableRowSelectionData<T>>

export type GetLeftItems<
  T = ToolbarItems<ToolbarItemKey>,
  Row extends TableRecord = TableRecord
> = (props: GetLeftItemsProps<Row>) => T[] | Promise<T[]>

export type ToolbarCommonProps<T extends TableRecord = TableRecord> = Omit<OriginToolbarProps, 'right'> & {
  showSearch?: boolean,
  collapsibleSearch?: boolean,
  searchPlaceholder?: string,
  showFilter?: boolean,
  showFilterSidebar?: boolean,
  importExportButton?: ImportExportButtonProps | ImportExportDropdownProps,
  onRefresh?: () => void,
  showSettingsSearch?: boolean,
  /** @deprecated use predefined props for right items toolbar */
  right?: (existingElements: ReactNode[]) => ReactNode[],
  getLeftItems?: GetLeftItems<ToolbarItems, T>
}

export type TabConfigBase = boolean | {
  hideTabHeader?: boolean
}

export type ColumnsTabConfig = TabConfigBase & {
  // дополнительные пропы если потребуются
}

export type GroupingTabConfig = TabConfigBase & {
  // дополнительные пропы если потребуются
}

// все табы, заголовки не скрыты
export type ToolbarWithAllVisibleTabHeaders<T extends TableRecord = TableRecord> = ToolbarCommonProps<T> & {
  showColumns?: true | ColumnsTabConfig & { hideTabHeader?: false },
  showGrouping?: true | GroupingTabConfig & { hideTabHeader?: false }
}

// только один таб с явно скрытым заголовком
export type ToolbarWithOnlyOneHiddenTabHeader<T extends TableRecord = TableRecord> =
  (ToolbarCommonProps<T> & {
    showColumns: ColumnsTabConfig & { hideTabHeader: true },
    showGrouping?: never
  }) |
  (ToolbarCommonProps<T> & {
    showColumns?: never,
    showGrouping: GroupingTabConfig & { hideTabHeader: true }
  })

export type ToolbarProps<T extends TableRecord = TableRecord> =
  ToolbarWithAllVisibleTabHeaders<T> |
  ToolbarWithOnlyOneHiddenTabHeader<T>
