import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { useTableContext, useTableUpdate } from '../../context/TableContext'
import { isColumnReadonly, isColumnVisible } from '../../helpers/common'
import { getPersistentStorageValue, updatePersistentStorage } from '../../helpers/persistentStorage'
import { TableColumn, TableRecord } from '../../types'
import { FilterOperation, FilterType } from '../Filters'
import { useInitTableSorters } from '../hooks/useInitTableSorters'
import { TableComponent } from '../index'

import { DropdownColumnTitle } from './DropdownColumnTitle'
import { hasFiltersOrSorting } from './helpers'
import { customSortFunctionWrapper, defaultSortFunction } from './sortFunction'
import { ActiveSorting } from './types'

const EMPTY_OBJ = Object.freeze({})

export const SortingAndFilters = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function SortingAndFiltersModule ({
  columns,
  dataSource,
  onSortChange,
  onDropdownFiltersChange,
  isDefaultSortDisabled,
  externalSorting,
  setExternalSorting,
  storageKey,
  ...props
}) {
  if (!columns || !Array.isArray(dataSource)) {
    return <Component {...props} storageKey={storageKey} />
  }

  if (!columns.some(hasFiltersOrSorting)) {
    return <Component {...props} columns={columns} dataSource={dataSource} storageKey={storageKey} />
  }

  const { filterApi, useDataSourceFunction, filterVersion } = useTableContext(state => ({
    filterApi: state.filterApi,
    useDataSourceFunction: state.useDataSourceFunction,
    filterVersion: state.filterVersion
  }))
  const updateContext = useTableUpdate<T>()

  const initialSorting: ActiveSorting = props.initialSorting || EMPTY_OBJ

  const [activeSorting, setActiveSorting] = useState<ActiveSorting<T>>(initialSorting)
  const [sortingWithExternal, setSortingWithExternal] = useState<ActiveSorting<T>>(activeSorting || initialSorting)
  const { columnsSortersConfig } = useInitTableSorters({ columns })

  useEffect(() => {
    setSortingWithExternal(activeSorting || initialSorting)
  }, [props.initialSorting, activeSorting])

  useEffect(() => {
    updateContext({
      sorting: sortingWithExternal,
      setSorting: setSortingWithExternal
    })
  }, [sortingWithExternal])

  useEffect(() => {
    if (!props.initialSorting && !externalSorting && storageKey) {
      const savedSorting = getPersistentStorageValue({ storageKey, featureKey: 'sorting' })
      if (savedSorting) {
        setActiveSorting(savedSorting)
      }
    }
  }, [props.initialSorting, externalSorting, storageKey])

  const processedColumns = useMemo(() => (
    columns.map((column, index): TableColumn<T> => {
      if (!isColumnVisible(column) || !hasFiltersOrSorting(column) || isColumnReadonly(column)) {
        return column
      }

      const hasMultichoiceEnumFilter = column.filterType?.type === FilterType.Enum && (
        column.filterType.operations?.map(item => item.operation).includes(FilterOperation.cont_or) ||
        !column.filterType.operations && filterVersion === 2
      )

      return {
        ...column,
        sorter: undefined,
        filters: undefined,
        key: column.filterName || column.key || String(index),
        title:
            <DropdownColumnTitle
              testId={props?.testId}
              klId={props?.klId}
              allowMultipleFilters={Boolean(column.allowMultipleFilters)}
              closeDropdownOnSelect={column.closeDropdownOnSelect}
              title={column.title}
              columnId={column.columnId}
              columnServerField={column.columnServerField}
              columnKey={String(column.key)}
              filterName={column.filterName}
              showEnumFiltersInColumn={column.showEnumFiltersInColumn}
              filters={column.filters}
              isSortable={Boolean(column.isSortable || column.sorter)}
              sortingAttributes={column.sortingAttributes}
              filterApi={filterApi}
              onDropdownFiltersChange={onDropdownFiltersChange}
              activeSorting={activeSorting}
              setActiveSorting={setExternalSorting || setActiveSorting}
              showFilterIcon={column.showFilterIcon}
              enumOptionsGetter={column.filterType?.type === FilterType.Enum ? column?.filterType?.getAvailableOptions : undefined}
              hasMultichoiceEnumFilter={hasMultichoiceEnumFilter}
            />
      }
    })
  ), [filterApi, columns, activeSorting, filterVersion])

  const preparedData = useMemo(() => {
    const shouldSort = 'field' in (sortingWithExternal) && !isDefaultSortDisabled && !useDataSourceFunction

    let resultDataSource = [...dataSource]

    if (shouldSort) {
      const field = sortingWithExternal.columnServerField || sortingWithExternal.columnId || sortingWithExternal.field
      const attribute = sortingWithExternal.attribute
      const sortWithNestedItems = (data: T[]): T[] => {
        if (!field) {
          return data
        }

        let customSorter = sortingWithExternal.customSorter

        if (!customSorter) {
          customSorter = columns.find(el => el.key === field)?.sorter
        }

        const isAsc = sortingWithExternal.direction === 'asc'

        const sortFunction = columnsSortersConfig.get(field) || defaultSortFunction

        const sortedData = customSorter
          ? customSortFunctionWrapper(
              data,
              customSorter,
              isAsc
            )
          : sortFunction(data, field as string, isAsc, attribute as string)

        return sortedData.map((item) => (
          item._hasChildren
            ? { ...item, children: sortWithNestedItems(item.children as T[]) }
            : item
        ))
      }

      resultDataSource = sortWithNestedItems(resultDataSource)
    }

    return resultDataSource
  }, [dataSource, sortingWithExternal, columns, columnsSortersConfig, isDefaultSortDisabled])

  const prevSorting = useRef(sortingWithExternal)

  useEffect(() => {
    if (onSortChange && activeSorting !== prevSorting.current) {
      prevSorting.current = sortingWithExternal
      onSortChange(sortingWithExternal)
    }

    if (storageKey) {
      updatePersistentStorage({
        storageKey,
        featureKey: 'sorting',
        updatedValue: {
          field: sortingWithExternal.field,
          direction: sortingWithExternal.direction,
          columnId: sortingWithExternal.columnId,
          columnServerField: sortingWithExternal.columnServerField,
          isDefaultSortDisabled: sortingWithExternal.isDefaultSortDisabled
        }
      })
    }
  }, [activeSorting, sortingWithExternal, onSortChange, storageKey, isDefaultSortDisabled])

  useEffect(() => {
    if (externalSorting) setActiveSorting(externalSorting)
  }, [externalSorting])

  return (
    <Component
      {...props}
      dataSource={preparedData}
      columns={processedColumns}
      storageKey={storageKey}
    />
  )
}
