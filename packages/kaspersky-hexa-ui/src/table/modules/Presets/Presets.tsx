import { openNotification } from '@src/notification'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'

import { PresetStoreValue, usePresetsUpdate, useTableContext } from '../../context/tableStore'
import {
  DEFAULT_TABLE_PAGE_SIZE,
  ITableProps,
  TableRecord,
  TableRef
} from '../../types'
import {
  convertColumnFiltersToFilterFromColumn,
  isFilterFromColumn,
  isSidebarFilter
} from '../Filters/helpers'
import { FilterFromColumn } from '../Filters/types'
import { TableComponent } from '../index'

import {
  findDefault,
  getPresetDirty,
  getPresetNormalizer,
  resolveByIdOrDefault,
  useActiveFilters
} from './helpers'
import { CreatePresetModal, DeletePresetModal, RenamePresetModal } from './Modals'
import { TablePreset, TablePresetDraft, TablePresetsProp, TableView } from './types'

export const Presets = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
) => function PresetsModule ({
  pagination,
  presets: presetsProp,
  ...props
}: ITableProps<T> & React.RefAttributes<TableRef>) {
  const {
    presets: presetsRaw,
    views: viewsRaw,
    onCreatePreset,
    onUpdatePreset,
    onDeletePreset,
    onViewSelected,
    onPresetSelected,
    viewId: defaultActiveViewId,
    presetId: defaultActivePresetId
  } = (presetsProp ?? {}) as TablePresetsProp<T>
  const normalizePreset = useMemo(() => getPresetNormalizer(props.columns), [props.columns])

  const [views, setViews] = useState<TableView<T>[]>([])
  const [presets, setPresets] = useState<TablePreset<T>[]>([])
  const updateContext = usePresetsUpdate<T>()

  useEffect(() => {
    if (viewsRaw) {
      setViews(viewsRaw.map(x => ({ ...x, presets: x.presets.map(normalizePreset) })))
    }

    if (presetsRaw) {
      setPresets(presetsRaw?.map(normalizePreset))
    }
    const { defaultView, defaultPreset } = findDefault(viewsRaw, presetsRaw)

    updateContext({
      currentViewId: defaultActiveViewId ?? defaultView?.id,
      currentPresetId: defaultActivePresetId ?? defaultPreset?.id
    })
  }, [viewsRaw, presetsRaw, updateContext])

  useEffect(() => {
    updateContext({ views })
  }, [views, updateContext])

  useEffect(() => {
    updateContext({ availablePresets: presets })
  }, [presets, updateContext])

  const [currentViewId, currentPresetId] = useTableContext(state => [
    state.presets.currentViewId,
    state.presets.currentPresetId
  ])

  const currentView = resolveByIdOrDefault(views, currentViewId)
  const currentPresets = currentView
    ? currentView.presets
    : presets
  const currentPreset = resolveByIdOrDefault(currentPresets, currentPresetId)

  const prevCurrentPresetRef = useRef(currentPreset)

  // Эффект нужен для того, чтобы переопределить начальное состояние пресета при смене самого пресета или вью
  useEffect(() => {
    prevCurrentPresetRef.current = currentPreset
  }, [currentPresetId, currentViewId])

  useEffect(() => {
    if (currentView) {
      updateContext({ currentView })
      onViewSelected(currentView.id)
    }
  }, [currentView, updateContext])

  useEffect(() => {
    updateContext({ currentPreset })

    if (currentPreset) {
      onPresetSelected(currentPreset.id)
    }
  }, [currentPreset, updateContext])

  const { t } = useTranslation()
  const [
    presetToDelete,
    columnsState,
    filterApi,
    groupBy,
    setGroupBy,
    setPageSize,
    setSorting,
    sorting
  ] = useTableContext(state => [
    state.presets.presetToDelete,
    state.presets.columnsState,
    state.filterApi,
    state.groupBy,
    state.presets.setGroupBy,
    state.pagination?.setPageSize,
    state.setSorting,
    state.sorting
  ])

  useEffect(() => {
    if (!currentPreset) {
      return
    }

    if (currentPreset.settings.pageSize != null) {
      setPageSize?.(currentPreset.settings.pageSize)
    }

    if (currentPreset.settings.columns) {
      updateContext({ columnsState: currentPreset.settings.columns })
    }

    setSorting?.(currentPreset.settings.sorting ?? {})
    setGroupBy?.(currentPreset.settings.groupBy ?? '')

    if (!filterApi) {
      return
    }

    const presetFilters = currentPreset.settings.filters ?? []
    const presetSidebarFilters = presetFilters.filter(isSidebarFilter)
    const presetColumnFilters = presetFilters.filter(item => isFilterFromColumn(item, false))

    filterApi.setExternalSidebarFilters(presetSidebarFilters)

    props.columns?.forEach(column => {
      const groupId = `column.${column.key}`
      const restoredFilters = presetColumnFilters
        .filter(filter => filter.name === column.key)
        .map(filter => {
          const columnFilter = column.filters?.find(availableFilter => availableFilter.name === filter.filterName)
          return columnFilter ? convertColumnFiltersToFilterFromColumn(columnFilter, column.key.toString()) : null
        })
        .filter((filter): filter is FilterFromColumn<T> => filter !== null)

      filterApi.setExternalFilters(restoredFilters, groupId)
    })
  }, [currentPreset, filterApi, updateContext])

  const activeFilters = useActiveFilters()

  const currentPageSize = typeof pagination === 'object' && pagination
    ? pagination.pageSize ?? DEFAULT_TABLE_PAGE_SIZE
    : DEFAULT_TABLE_PAGE_SIZE

  const isPresetDirty = getPresetDirty(
    currentPreset,
    currentPageSize,
    columnsState,
    activeFilters,
    sorting,
    groupBy
  )

  useEffect(() => {
    updateContext({ isPresetDirty })
  }, [isPresetDirty, updateContext])

  const onPresetUpdated: PresetStoreValue<T>['onPresetUpdated'] = useCallback(preset => {
    const normalized = normalizePreset(preset)

    if (currentView) {
      setViews(prev => prev.map(v => {
        if (v.id !== currentView.id) {
          return v
        }

        return { ...v, presets: v.presets.map(x => (x.id === normalized.id ? normalized : x)) }
      }))
    } else {
      setPresets(prev => prev.map(x => (x.id === normalized.id ? normalized : x)))
    }
  }, [normalizePreset, currentView])

  useEffect(() => {
    updateContext({ onPresetUpdated })
  }, [onPresetUpdated, updateContext])

  const createPreset = async (createdPreset: TablePresetDraft<T>) => {
    const created = await onCreatePreset(createdPreset, currentView?.id)
    const normalized = normalizePreset(created)

    if (currentView) {
      setViews(prev => prev.map(view => {
        if (view.id !== currentView.id) {
          return view
        }

        return { ...view, presets: [...view.presets, normalized] }
      }))
    } else {
      setPresets(prev => [...prev, normalized])
    }

    updateContext({ currentPresetId: normalized.id })
  }

  const renamePreset = async (renamedPreset: TablePreset) => {
    const updated = await onUpdatePreset(renamedPreset)
    onPresetUpdated(updated)
  }

  const handleDeletePreset = async () => {
    if (!presetToDelete) return

    if (currentPresetId === presetToDelete.id) {
      throw new Error('Cannot delete the currently active preset')
    }

    await onDeletePreset(presetToDelete)

    if (currentView) {
      setViews(prev => prev.map(view => {
        if (view.id !== currentView.id) {
          return view
        }

        return { ...view, presets: view.presets.filter(p => p.id !== presetToDelete?.id) }
      }))
    } else {
      setPresets(prev => prev.filter(p => p.id !== presetToDelete?.id))
    }

    updateContext({ presetToDelete: undefined })
  }

  const currentSettings = useMemo(() => ({
    columns: columnsState,
    filters: activeFilters,
    groupBy,
    pageSize: currentPageSize,
    sorting
  }), [activeFilters, columnsState, currentPageSize, groupBy, sorting])

  const onUpdatePresetRef = useRef(onUpdatePreset)
  onUpdatePresetRef.current = onUpdatePreset

  const handleUpdatePreset: PresetStoreValue<T>['saveCurrentPreset'] = useCallback(async () => {

    if (!currentPreset) return

    const updatedPreset: TablePreset = {
      ...currentPreset,
      settings: {
        ...currentSettings,
        columns: Object.fromEntries(
          Object.entries(currentSettings.columns ?? {}).map(([key, column]) => [
            key,
            { ...column, isUserDefinedWidth: false }
          ])
        )
      }
    }

    try {
      const updated = await onUpdatePresetRef.current(updatedPreset)
      onPresetUpdated?.(updated)
      openNotification.success(t('tablePresets.presetUpdated', { name: currentPreset.name })!)
      prevCurrentPresetRef.current = updatedPreset
    } catch {
      openNotification.error(t('tablePresets.errors.presetUpdate', { name: currentPreset.name })!)
    }
  }, [currentPreset, onPresetUpdated, t, currentSettings])

  useEffect(() => {
    updateContext({ saveCurrentPreset: handleUpdatePreset, prevCurrentPresetRef })
  }, [handleUpdatePreset, updateContext])

  return (
    <>
      <Component
        {...props}
        pagination={pagination}
        presets={presetsProp}
      />
      <CreatePresetModal onCreate={createPreset} pageSize={currentPageSize} storageKey={props.storageKey} columns={props.columns} />
      <RenamePresetModal onRename={renamePreset} />
      <DeletePresetModal onDelete={handleDeletePreset} />
    </>
  )
}
