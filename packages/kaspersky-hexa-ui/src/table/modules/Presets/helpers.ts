import { isColumnReadonly, isColumnVisible } from '@src/table/helpers/common'
import { TableColumn, TableRecord } from '@src/table/types'
import isEqual from 'lodash/isEqual'
import { useEffect, useState } from 'react'

import { useTableContext } from '../../context/tableStore'
import { getPresetFilters, isGroup } from '../Filters/helpers'
import { UnitedFilter } from '../Filters/types'
import { ActiveSorting } from '../SortingAndFilters'

import {
  TablePreset,
  TablePresetColumns,
  TableView
} from './types'

export function getPresetColumnKeys (columns?: TablePresetColumns): {
  visibleKeys: React.Key[],
  orderKeys: React.Key[],
} | undefined {
  if (!columns) {
    return undefined
  }

  const visibleKeys = Object.entries(columns)
    .filter(entry => entry[1].show === true)
    .map(entry => entry[0])
  const orderKeys = Object.entries(columns)
    .filter(entry => entry[1].sortIndex !== undefined)
    .sort((entryA, entryB) => entryA[1].sortIndex! - entryB[1].sortIndex!)
    .map(entry => entry[0])

  return { visibleKeys, orderKeys }
}

export function resolveByIdOrDefault <T extends TableRecord> (items?: T[], currentId?: string): T | undefined {
  if (!items) {
    return undefined
  }

  if (currentId) {
    const item = items.find(x => x.id === currentId)

    if (item) {
      return item
    }
  }

  return items.find(x => x.default) ?? items[0]
}

export function findDefault <T extends TableRecord> (views?: TableView<T>[], presets?: TablePreset<T>[]): {
  defaultView?: TableView<T>,
  defaultPreset?: TablePreset<T>
} {
  const defaultView = resolveByIdOrDefault(views)

  return {
    defaultView,
    defaultPreset: resolveByIdOrDefault(defaultView?.presets ?? presets)
  }
}

export function isColumnsStateEqual (
  left?: TablePresetColumns,
  right?: TablePresetColumns
): boolean {
  const leftKeys = Object.keys(left ?? {})
  const rightKeys = Object.keys(right ?? {})

  if (leftKeys.length !== rightKeys.length) {
    return false
  }

  return leftKeys.every(key => {
    const leftColumn = left?.[key]
    const rightColumn = right?.[key]

    if (leftColumn?.show !== rightColumn?.show) {
      return false
    }

    if (leftColumn?.sortIndex !== rightColumn?.sortIndex) {
      return false
    }

    return true
  })
}

function sortFilters <T extends TableRecord> (filters?: UnitedFilter<T>[]): UnitedFilter<T>[] {
  return [...(filters ?? [])].sort((a, b) => {
    const aId = isGroup(a) ? a.id : a.name
    const bId = isGroup(b) ? b.id : b.name
    return aId === bId ? 0 : aId > bId ? 1 : -1
  })
}

export function useActiveFilters (): UnitedFilter[] {
  const filterApi = useTableContext(state => state.filterApi)
  const [activeFilters, setActiveFilters] = useState<UnitedFilter[]>([])

  useEffect(() => {
    if (!filterApi) return

    setActiveFilters(getPresetFilters(filterApi.getRootGroupFilters()))

    return filterApi.subscribe(() => {
      setActiveFilters(getPresetFilters(filterApi.getRootGroupFilters()))
    })
  }, [filterApi])

  return activeFilters
}

export function getPresetDirty <T extends TableRecord> (
  preset: TablePreset<T> | undefined,
  currentPageSize: number,
  columnsState: TablePresetColumns | undefined,
  activeFilters: UnitedFilter[] | undefined,
  sorting: ActiveSorting | undefined,
  groupBy: string
): boolean {
  const presetPageSize = preset?.settings.pageSize
  const presetColumns = preset?.settings.columns
  const presetFilters = preset?.settings.filters
  const presetSorting = preset?.settings.sorting
  const presetGroupBy = preset?.settings.groupBy

  const isPageSizeDirty = presetPageSize != null && Number.isFinite(currentPageSize) && currentPageSize !== presetPageSize

  const isColumnsDirty = presetColumns != null && !isColumnsStateEqual(columnsState, presetColumns)

  const isFiltersDirty = presetFilters != null && !isEqual(sortFilters(presetFilters), sortFilters(activeFilters))

  const isSortingDirty = !isEqual(presetSorting ?? {}, sorting ?? {})

  const isGroupByDirty = presetGroupBy != null && presetGroupBy !== groupBy

  return isPageSizeDirty ||
    isColumnsDirty ||
    isFiltersDirty ||
    isSortingDirty ||
    isGroupByDirty
}

export function getPresetDescription <T extends TableRecord> (preset: TablePreset<T>, columns?: TableColumn<T>[]): string | undefined {
  const presetColumnKeys = getPresetColumnKeys(preset.settings.columns)

  if (!presetColumnKeys || !columns) {
    return preset.description
  }

  const columnTitles = presetColumnKeys.orderKeys
    .filter(key => presetColumnKeys.visibleKeys.includes(key))
    .map(key => columns.find(column => column.key === key)?.title)
    .filter(Boolean)
    .join(', ')

  return preset.system
    ? preset.description || columnTitles
    : columnTitles
}

export function getPresetNormalizer <T extends TableRecord> (columns?: TableColumn<T>[]): (preset: TablePreset<T>) => TablePreset<T> {
  const defaultVisibleColumns = (columns ?? [])
    .filter(column => isColumnVisible(column) && !isColumnReadonly(column))
    .map(column => column.key)

  const defaultColumnOrder = (columns ?? [])
    .filter(column => !isColumnReadonly(column))
    .map(column => column.key)

  return (preset: TablePreset<T>): TablePreset<T> => {
    const presetColumns = preset.settings.columns ?? {}

    const hasVisibilitySettings = Object.values(presetColumns)
      .some(column => column?.show !== undefined)

    const { orderKeys: presetColumnsOrder = [] } = getPresetColumnKeys(presetColumns) ?? {}

    const fullColumnsOrder = [
      ...presetColumnsOrder,
      ...defaultColumnOrder.filter(key => !presetColumnsOrder.includes(key))
    ]

    const fullColumns: TablePresetColumns = {}

    fullColumnsOrder.forEach((key, index) => {
      const presetColumn = presetColumns[key]

      const fallbackShow = hasVisibilitySettings
        ? false
        : defaultVisibleColumns.includes(key)

      fullColumns[key] = {
        show: presetColumn?.show ?? fallbackShow,
        sortIndex: presetColumn?.sortIndex ?? index,
        isUserDefinedWidth: presetColumn?.isUserDefinedWidth,
        ...(presetColumn?.width !== undefined && {
          width: presetColumn.width
        })
      }
    })

    return {
      ...preset,
      settings: {
        columns: fullColumns,
        filters: preset.settings.filters ?? [],
        groupBy: preset.settings.groupBy ?? '',
        pageSize: preset.settings.pageSize,
        sorting: preset.settings.sorting
      }
    }
  }
}
