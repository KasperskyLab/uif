import { useLocalization } from '@helpers/localization/useLocalization'
import { Button } from '@src/button'
import { Divider } from '@src/divider'
import { Locale } from '@src/locale'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { TableModule } from '..'
import { useTableContext } from '../../context/TableContext'
import { ITableProps } from '../../types'
import { FilterApi, FilterConfig, FilterConfigInternal } from '../Filters'
import { addId, isFilterConfig, isFilterConfigInternal, removeId, validate } from '../Filters/helpers'

import { FilterItem } from './FilterItem'
import { getNewFilter } from './filters'
import FilterToolbar from './FilterToolbar'
import { addDefaultDates } from './helpers'
import { InvalidFilter } from './items/types'
import styles from './SidebarFilters.module.scss'

export const SidebarFilters: TableModule = (Component) => function SidebarFiltersModuleCallback ({ useFiltersSidebar, ...rest }: ITableProps) {
  const { filterApi } = useTableContext()

  if (!useFiltersSidebar || !filterApi) {
    return <Component {...rest} />
  }

  return <SidebarFiltersModule {...rest} Component={Component} filterApi={filterApi} />
}

function SidebarFiltersModule ({
  Component,
  onCloseFilterSidebar,
  showFilterSidebar,
  onSidebarFiltersChange,
  isServerFiltering,
  filterApi,
  ...rest
}: Omit<ITableProps, 'useSidebarFilters'> & { Component: FC<ITableProps>, filterApi: FilterApi }) {
  const { columns } = rest

  const availableColumns = useMemo(() => {
    return (columns || []).filter(column => (
      column.show && column.filteringAvailable !== false || column.filteringAvailable
    ))
  }, [columns])

  const [filters, setFilters] = useState<FilterConfigInternal[]>(addId(filterApi.getRootGroupFilters()).filter(isFilterConfigInternal))
  const [invalidFilters, setInvalidFilters] = useState<InvalidFilter[]>([])
  const [filtersForRestore, setFiltersForRestore] = useState<FilterConfigInternal[]>(addId(filterApi.getRootGroupFilters()).filter(isFilterConfigInternal))

  useEffect(() => {
    /** @deprecated Only for support old contract */ 
    onSidebarFiltersChange?.(removeId(filters).filter(isFilterConfig))

    return filterApi.subscribe(() => {
      const newFilters = addId(filterApi.getRootGroupFilters()).filter(isFilterConfigInternal)
      setFilters(newFilters)
      setFiltersForRestore(newFilters)
    })
  }, [filterApi])

  const handleApply = () => {
    const filtersWithDefaultDates: FilterConfigInternal[] = addDefaultDates(filters)

    const invalidFilterItems = validate(filtersWithDefaultDates)
    setInvalidFilters(invalidFilterItems)

    if (invalidFilterItems.length > 0) return

    setFiltersForRestore(filtersWithDefaultDates)

    const filterConfigsWithoutId: FilterConfig[] = removeId(filtersWithDefaultDates).filter(isFilterConfig)

    onSidebarFiltersChange?.(filterConfigsWithoutId)
    filterApi.setExternalSidebarFilters(filterConfigsWithoutId)
    onCloseFilterSidebar?.()
  }

  const handleRemove = useCallback((filterToRemove: FilterConfigInternal) => {
    setFilters(filters => filters.filter(filter => filter.id !== filterToRemove.id))
  }, [])

  const handleFilterChange = useCallback((filterTo: FilterConfigInternal, id?: string) => {
    const newFilters: FilterConfigInternal[] = filters.map(filter => filter.id === id ? filterTo : filter)

    setInvalidFilters(filters => filters && filters.filter(filter => filter.id !== id))
    setFilters(newFilters)
  }, [filters, invalidFilters])

  const handlePropertyChange = useCallback(async (colIndex: string, id?: string, attribute?: string) => {
    const column = availableColumns.find(column => column.dataIndex === colIndex)

    if (column) {
      const newFilter = await getNewFilter(column, attribute)
      handleFilterChange(newFilter, id)
    }
  }, [availableColumns, handleFilterChange])

  const handleCancel = () => {
    setFilters(filtersForRestore)
    onCloseFilterSidebar?.()
  }

  return (
    <>
      <Sidebar
        size="small"
        onClose={handleCancel}
        visible={showFilterSidebar}
        title={useLocalization('common.filters')}
        subHeader={
          <Space gap="section" >
            <FilterToolbar columns={availableColumns} filters={filters} onChange={setFilters} />
            <Divider/>
          </Space>
        }
        footer={
          <div className={styles.filtersFooter}>
            <Button
              onClick={handleApply}
              testId="table-filters-apply-button"
              klId="filters-button_apply"
            >
              <Locale localizationKey="table.columnsSettings.apply" />
            </Button>
            <Button
              onClick={handleCancel}
              mode="secondary"
              testId="table-filters-cancel-button"
              klId="filters-button_cancel"
            >
              <Locale localizationKey="table.columnsSettings.cancel" />
            </Button>
          </div>
        }
      >
        <div className={styles.filtersList}>
          {filters.map((item, index) => (
            <FilterItem
              key={`filter-item-${index}`}
              index={index}
              columnsToShow={availableColumns}
              filter={item}
              handleRemove={handleRemove}
              handlePropertyChange={handlePropertyChange}
              handleFilterChange={handleFilterChange}
              validationMessage={invalidFilters.find(filter => filter.id === item.id)?.validationMessage}
            />
          ))}
        </div>
      </Sidebar>
      <Component {...rest} />
    </>
  )
}
