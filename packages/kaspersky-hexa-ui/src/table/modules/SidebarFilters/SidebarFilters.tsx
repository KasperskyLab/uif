import { useLocalization } from '@helpers/localization/useLocalization'
import { MakeRequired } from '@helpers/typesHelpers'
import { Button, ButtonProps } from '@src/button'
import { Divider } from '@src/divider'
import { Locale } from '@src/locale'
import { Sidebar, SidebarHandle } from '@src/sidebar'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { TableComponent } from '..'
import { useTableContext } from '../../context/TableContext'
import { ITableProps, TableRecord } from '../../types'
import { FilterApi, SidebarFilterGroupInternal, SidebarFilterInternal } from '../Filters'
import {
  addId,
  findColumnByName,
  isFilterConfig,
  isFilterConfigInternal,
  isSidebarFilter,
  isSidebarGroupInternal,
  removeId,
  validate
} from '../Filters/helpers'

import { FilterItem } from './FilterItem'
import { getNewFilter } from './filters'
import FilterToolbar from './FilterToolbar'
import { addDefaultDates } from './helpers'
import { InvalidFilter } from './items/types'
import styles from './SidebarFilters.module.scss'
import { SidebarFilterHandler } from './types'

export const SidebarFilters = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function SidebarFiltersModuleCallback ({
  useFiltersSidebar,
  columns,
  ...rest
}) {
  const { filterApi } = useTableContext<T>()

  if (!columns) {
    return <Component {...rest} />
  }

  if (!useFiltersSidebar || !filterApi) {
    return <Component {...rest} columns={columns} />
  }

  return <SidebarFiltersModule<T> {...rest} Component={Component} filterApi={filterApi} columns={columns} />
}

type SidebarFiltersModuleProps<T extends TableRecord = TableRecord> = MakeRequired<Omit<ITableProps<T>, 'useSidebarFilters'>, 'columns'> & {
  Component: FC<ITableProps<T>>,
  filterApi: FilterApi<T>
}

function SidebarFiltersModule<T extends TableRecord = TableRecord> ({
  Component,
  onCloseFilterSidebar,
  showFilterSidebar,
  onSidebarFiltersChange,
  isServerFiltering,
  getFiltersSidebarToolbarButtons,
  filterApi,
  ...rest
}: SidebarFiltersModuleProps<T>) {
  const { columns, testId } = rest

  const { t } = useTranslation()

  const { sorting, setSorting, enableNestedFilters } = useTableContext<T>()

  const availableColumns = useMemo(() => {
    return (columns || []).filter(column => (
      column.show && column.filteringAvailable !== false || column.filteringAvailable || column.onlyForFiltering
    ))
  }, [columns])

  const [filters, setFilters] = useState(addId(filterApi.getSidebarFilters()))
  const [invalidFilters, setInvalidFilters] = useState<InvalidFilter[]>([])
  const [filtersForRestore, setFiltersForRestore] = useState(addId(filterApi.getSidebarFilters()))

  useEffect(() => {
    /** @deprecated Only to support old contract */
    onSidebarFiltersChange?.(removeId(filters).filter(isFilterConfig))

    return filterApi.subscribe(() => {
      const newFilters = addId(filterApi.getSidebarFilters())
      setFilters(newFilters)
      setFiltersForRestore(newFilters)
    })
  }, [filterApi])

  const handleApply = () => {
    const filtersWithDefaultDates = addDefaultDates(filters)

    const invalidFilterItems = validate(filtersWithDefaultDates)
    setInvalidFilters(invalidFilterItems)

    if (invalidFilterItems.length > 0) return

    setFiltersForRestore(filtersWithDefaultDates)

    const filtersWithoutId = removeId(filtersWithDefaultDates).filter(isSidebarFilter)

    /** @deprecated Only to support old contract */
    onSidebarFiltersChange?.(filtersWithoutId.filter(isFilterConfig))
    filterApi.setExternalSidebarFilters(filtersWithoutId)
    onCloseFilterSidebar?.()
  }

  const handleRemove: SidebarFilterHandler<T>['handleRemove'] = useCallback((filterToRemove) => {
    setFilters(filters => filters.filter(filter => filter.id !== filterToRemove.id))
  }, [])

  const handleFilterChange: SidebarFilterHandler<T>['handleFilterChange'] = useCallback((filterTo, id) => {
    const updateFilterById = (
      filters: SidebarFilterInternal<T>[],
      filterTo: SidebarFilterInternal<T>,
      id: string
    ): SidebarFilterInternal<T>[] => (
      filters.map(filter => {
        if (isSidebarGroupInternal(filter)) {
          if (filter.id === id) {
            return filterTo
          }
          return {
            ...filter,
            items: updateFilterById(filter.items || [], filterTo, id)
          }
        }

        return filter.id === id ? filterTo : filter
      })
    )

    setInvalidFilters(filters => filters && filters.filter(invalidFilter => invalidFilter.id !== id))
    setFilters(updateFilterById(filters, filterTo, id))
  }, [filters, invalidFilters])

  const handlePropertyChange: SidebarFilterHandler<T>['handlePropertyChange'] = useCallback(async (name, id, attribute) => {
    const column = findColumnByName(availableColumns, name)

    if (column) {
      const newFilter = await getNewFilter(column, attribute)
      handleFilterChange(newFilter, id)
    }
  }, [availableColumns, handleFilterChange])

  const handleFilterAdd: SidebarFilterHandler<T>['handleFilterAdd'] = useCallback(async (name, id) => {
    const filterToExtend = filters.find(filter => filter.id === id)
    const column = findColumnByName(availableColumns, name)

    if (filterToExtend && column) {
      if (isFilterConfigInternal(filterToExtend)) {
        const newFilter = await getNewFilter(column, filterToExtend.attribute?.name)
        const newFilterGroup: SidebarFilterGroupInternal<T> = { id: uuid(), logicOperation: 'OR', items: [filterToExtend, newFilter] }
        handleFilterChange(newFilterGroup, id)
      } else if (filterToExtend.items.length && isFilterConfigInternal(filterToExtend.items[0])) {
        const newFilter = await getNewFilter(column, filterToExtend.items[0].attribute?.name)
        const newFilterGroup = { ...filterToExtend, items: [...filterToExtend.items, newFilter] }
        handleFilterChange(newFilterGroup, id)
      }
    }
  }, [availableColumns, filters, handleFilterChange])

  const handleRemoveFilterRow: SidebarFilterHandler<T>['handleRemoveFilterRow'] = useCallback((groupId, id) => {
    const filterToModify = filters.filter(isSidebarGroupInternal).find(filter => filter.id === groupId)

    if (filterToModify) {
      const newFilterGroup = {
        ...filterToModify,
        items: filterToModify.items.filter(item => isFilterConfigInternal(item) && item.id !== id)
      }

      if (newFilterGroup.items.length === 1) {
        handleFilterChange(newFilterGroup.items[0], groupId)
      } else {
        handleFilterChange(newFilterGroup, groupId)
      }
    }
  }, [handleFilterChange])

  const sidebarRef = React.useRef<SidebarHandle>(null)

  const handleCancel = () => {
    setFilters(filtersForRestore)
    onCloseFilterSidebar?.()
  }

  const handleClose = () => {
    sidebarRef.current?.reassignTopmostSidebar()
    handleCancel()
  }

  const [additionalButtons, setAdditionalButtons] = useState<ButtonProps[] | undefined>()

  useEffect(() => {
    getFiltersSidebarToolbarButtons?.({
      sidebarFilters: filters,
      setSidebarFilters: (filters) => setFilters(addId(filters).filter(isSidebarFilter)),
      applyFilters: handleApply,
      sorting,
      setSorting,
      columns
    }).then(setAdditionalButtons)
  }, [filterApi, filters, sorting, setSorting, columns])

  return (
    <>
      <Sidebar
        size="small"
        ref={sidebarRef}
        onClose={handleCancel}
        visible={showFilterSidebar}
        title={useLocalization('common.filters')}
        testId={testId ? `${testId}-filters-sidebar` : 'filters-sidebar'}
        subHeader={(
          <Space gap="section" >
            <FilterToolbar<T>
              columns={availableColumns}
              filters={filters}
              onChange={setFilters}
              additionalButtons={additionalButtons}
            />
            <Divider />
          </Space>
        )}
        footer={(
          <div className={styles.filtersFooter}>
            <Button
              onClick={handleApply}
              testId="table-filters-apply-button"
              klId="filters-button_apply"
            >
              <Locale localizationKey="table.columnsSettings.apply" />
            </Button>
            <Button
              onClick={handleClose}
              mode="secondary"
              testId="table-filters-cancel-button"
              klId="filters-button_cancel"
            >
              <Locale localizationKey="table.columnsSettings.cancel" />
            </Button>
          </div>
        )}
      >
        <div className={styles.filtersList} style={{ '--gap': enableNestedFilters ? '0px' : 'var(--spacing--gap_grouped)' }}>
          {filters.map((item, index) => (
            <div key={item.id}>
              <FilterItem
                key={`filter-item-${item.id ?? index}`}
                index={index}
                columnsToShow={availableColumns}
                filter={item}
                handleRemove={handleRemove}
                handlePropertyChange={handlePropertyChange}
                handleFilterChange={handleFilterChange}
                handleFilterAdd={handleFilterAdd}
                handleRemoveFilterRow={handleRemoveFilterRow}
                invalidFilters={invalidFilters}
              />
              {enableNestedFilters && index !== filters.length - 1 && (
                <span className={styles.filtersSeparator}>
                  <Text color="disabled" type="BTR4">{t('table.columnsSettings.filtering.operators.and')}</Text>
                </span>
              )}
            </div>
          ))}
        </div>
      </Sidebar>
      <Component {...rest} />
    </>
  )
}
