import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { useTableContext } from '../../context/TableContext'
import { isColumnReadonly } from '../../helpers/common'
import { getPersistentStorageValue, updatePersistentStorage } from '../../helpers/persistentStorage'
import { TableColumn, TableRecord } from '../../types'
import { useInitTableSorters } from '../hooks/useInitTableSorters'
import { TableModule } from '../index'

import { DropdownColumnTitle } from './DropdownColumnTitle'
import { customSortFunctionWrapper, defaultSortFunction } from './sortFunction'
import { ActiveSorting } from './types'

const hasFiltersOrSorting = (columns: TableColumn[]) => {
  return columns.some(({ filters, isSortable }) => filters || isSortable)
}

const EMPTY_OBJ = Object.freeze({})

export const SortingAndFilters: TableModule = Component => function SortingAndFiltersModule ({
  columns,
  dataSource,
  onSortChange,
  onDropdownFiltersChange,
  isDefaultSortDisabled,
  externalSorting,
  setExternalSorting,
  storageKey,
  ...props
}): React.ReactElement {
  if (!columns || !Array.isArray(dataSource)) {
    return <Component {...props} storageKey={storageKey} />
  }

  if (!hasFiltersOrSorting(columns)) {
    return <Component {...props} columns={columns} dataSource={dataSource} storageKey={storageKey} />
  }

  const { filterApi, pagination, updateContext } = useTableContext()

  const initialSorting: ActiveSorting = props.initialSorting || EMPTY_OBJ

  const [activeSorting, setActiveSorting] = useState<ActiveSorting>(initialSorting)
  const [sortingWithExternal, setSortingWithExternal] = useState<ActiveSorting>(activeSorting || initialSorting)
  const { columnsSortersConfig } = useInitTableSorters({ columns })

  useEffect(() => {
    setSortingWithExternal(activeSorting || initialSorting)
  }, [props.initialSorting, activeSorting])
  

  useEffect(() => {
    updateContext({ sorting: sortingWithExternal })
  }, [sortingWithExternal])

  useEffect(() => {
    if (!props.initialSorting && !externalSorting && storageKey) {
      const savedSorting = getPersistentStorageValue({ storageKey, featureKey: 'sorting' })
      if (savedSorting) {
        setActiveSorting(savedSorting)
      }
    }
  }, [props.initialSorting, externalSorting])

  const processedColumns = useMemo(() => (
    columns.map((column: TableColumn, index: number): TableColumn => {
      if (!(column.isSortable || column.filters || column.sorter) || isColumnReadonly(column)) {
        return column
      }

      return {
        ...column,
        sorter: undefined,
        filters: undefined,
        key: column.dataIndex || index,
        title:
          <DropdownColumnTitle
            testId={props?.testId}
            klId={props?.klId}
            allowMultipleFilters={Boolean(column.allowMultipleFilters)}
            closeDropdownOnSelect={column.closeDropdownOnSelect}
            title={column.title}
            columnId={column.columnId}
            dataIndex={column.dataIndex!}
            availableFilters={column.filters}
            isSortable={column.isSortable}
            sortingAttributes={column.sortingAttributes}
            sorter={column.sorter}
            filterApi={filterApi}
            onDropdownFiltersChange={onDropdownFiltersChange}
            activeSorting={activeSorting}
            setActiveSorting={setExternalSorting || setActiveSorting}
            showFilterIcon={column.showFilterIcon}
          />
      }
    })
  ), [columns, activeSorting])

  const preparedData = useMemo(() => {
    const shouldSort = 'field' in (sortingWithExternal) && !isDefaultSortDisabled && !pagination.useDataSourceFunction

    let resultDataSource: TableRecord[] = dataSource as TableRecord[]

    if (shouldSort) {
      const field = sortingWithExternal.columnId || sortingWithExternal.field
      const attribute = sortingWithExternal.attribute
      const sortWithNestedItems = (data: TableRecord[]) => {
        if (!field) {
          return data
        }

        let customSorter = sortingWithExternal.customSorter

        if (!customSorter) {
          customSorter = columns.find(el => el.dataIndex === field)?.sorter
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

        sortedData.forEach(item => {
          if (item._hasChildren) {
            item.children = sortWithNestedItems(item.children as TableRecord[])
          }
        })
        return sortedData
      }

      resultDataSource = sortWithNestedItems(resultDataSource as TableRecord[])
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

  return <Component
    {...props}
    dataSource={preparedData}
    columns={processedColumns}
    storageKey={storageKey}
  />
}
