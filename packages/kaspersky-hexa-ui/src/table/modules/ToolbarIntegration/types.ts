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
} & Partial<TableRowSelectionData>

export type GetLeftItems<T = ToolbarItems<ToolbarItemKey>> = (props: GetLeftItemsProps) => T[] | Promise<T[]>

export type ToolbarCommonProps = Omit<OriginToolbarProps, 'right'> & {
  showSearch?: boolean,
  collapsibleSearch?: boolean,
  showFilter?: boolean,
  showFilterSidebar?: boolean,
  importExportButton?: ImportExportButtonProps | ImportExportDropdownProps,
  onRefresh?: () => void,
  showSettingsSearch?: boolean,
  /** @deprecated use predefined props for right items toolbar */
  right?: (existingElements: ReactNode[]) => ReactNode[],
  getLeftItems?: GetLeftItems
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
export type ToolbarWithAllVisibleTabHeaders = ToolbarCommonProps & {
  showColumns?: true | ColumnsTabConfig & { hideTabHeader?: false },
  showGrouping?: true | GroupingTabConfig & { hideTabHeader?: false }
}

// только один таб с явно скрытым заголовком
export type ToolbarWithOnlyOneHiddenTabHeader =
  (ToolbarCommonProps & {
    showColumns: ColumnsTabConfig & { hideTabHeader: true },
    showGrouping?: never
  }) |
  (ToolbarCommonProps & {
    showColumns?: never,
    showGrouping: GroupingTabConfig & { hideTabHeader: true }
  })

export type ToolbarProps =
  | ToolbarWithAllVisibleTabHeaders |
  ToolbarWithOnlyOneHiddenTabHeader
