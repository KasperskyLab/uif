import { SetState } from '@helpers/hooks/useStateProps'
import { MakeRequired } from '@helpers/typesHelpers'
import { useRefMethod } from '@src/table/context/TableContext'
import { TableRowSelection as RowSelectionAntd } from 'antd/lib/table/interface'
import React, { useCallback, useEffect, useState } from 'react'

import { useTableContext } from '../../../context/TableContext'
import { ITableProps, TableRecord, TableRowSelection, TableRowSelectionData } from '../../../types'
import { UsePaginationConfigReturn } from '../usePaginationConfig'

import { HeaderCheckbox } from './HeaderCheckbox'
import { renderCell, updateKeys, updateRows } from './helpers'
import { getGroupCheckboxOnChange, renderGroupCell } from './useGroupRowSelection'

type UseRowSelectionProps<T extends TableRecord = TableRecord> = {
  disabled: boolean,
  setSelected?: SetState<number | undefined>,
  tableId?: string,
  withSelection: boolean,
  useDataSourceFunction: boolean
} & MakeRequired<Pick<ITableProps<T>, 'rowSelection' | 'dataSource' | '__EXPERIMENTAL__GROUP__SELECTION'>, 'dataSource'> &
  Pick<UsePaginationConfigReturn['pagination'], 'current' | 'pageSize' | 'total'>

export const useRowSelection = <T extends TableRecord = TableRecord> ({
  __EXPERIMENTAL__GROUP__SELECTION,
  rowSelection: rowSelectionProps,
  current,
  dataSource,
  disabled,
  tableId,
  pageSize,
  setSelected,
  total,
  withSelection,
  useDataSourceFunction
}: UseRowSelectionProps<T>): RowSelectionAntd<T> | undefined => {
  const { updateContext } = useTableContext()

  const {
    getPreselectedRows,
    hasSelectAll = true,
    processSelection,
    builtInRowSelection,
    renderCell: rawRenderCell,
    ...restRowSelection
  } = rowSelectionProps ?? {}

  const getCheckboxProps: TableRowSelection['getCheckboxProps'] = (row) => ({
    'data-testid': row.key ? `table-row__select-${row.key}` : 'table-row__select',
    className: withSelection ? 'table-row-has-expandable' : undefined,
    disabled: disabled || row._disabled || row._selectionDisabled
  })

  useEffect(() => {
    if (rowSelectionProps && !builtInRowSelection && rowSelectionProps.selectedRowKeys) {
      updateContext({ rowSelection: { selectedRowKeys: rowSelectionProps.selectedRowKeys as string[] } })
    }
  }, [rowSelectionProps?.selectedRowKeys, builtInRowSelection])

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  const [deselectedRowKeys, setDeselectedRowKeys] = useState<string[]>([])
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  const [selectedRows, setSelectedRows] = useState<T[]>([])
  const [deselectedRows, setDeselectedRows] = useState<T[]>([])

  useEffect(() => {
    if (!builtInRowSelection) return
    setSelectedRows(prevRows => updateRows(prevRows, selectedRowKeys, dataSource))
  }, [selectedRowKeys])

  useEffect(() => {
    if (!builtInRowSelection) return
    setDeselectedRows(prevRows => updateRows(prevRows, deselectedRowKeys, dataSource))
  }, [deselectedRowKeys, dataSource])

  const { groupsMap } = useTableContext()

  const renderCellWithGroups: TableRowSelection<T>['renderCell'] = (_, row, __, originNode) => {
    if (row.isGroupTitle && groupsMap && __EXPERIMENTAL__GROUP__SELECTION) {
      if (rowSelectionProps?.type === 'radio') {
        return null
      }

      const groupItemKeys = groupsMap.get(row.groupKey) || []

      const onChange = getGroupCheckboxOnChange({
        groupItemKeys,
        isSelectedAll,
        setSelectedRowKeys,
        setDeselectedRowKeys,
        useDataSourceFunction
      })

      return renderGroupCell({
        groupItemKeys,
        isSelectedAll,
        selectedRowKeys,
        deselectedRowKeys,
        useDataSourceFunction,
        checkboxProps: {
          onChange,
          disabled: row._disabled || disabled
        }
      })
    } else if (rawRenderCell) {
      return rawRenderCell(_, row, __, originNode)
    } else {
      return renderCell(_, row, __, originNode)
    }
  }

  useEffect(() => {
    if (!builtInRowSelection) return
    // isSelectedAll for server pagination can be set only from SelectAll dropdown
    if (!useDataSourceFunction) {
      setIsSelectedAll(dataSource.length !== 0 && selectedRowKeys.length === dataSource.length)
    }
  }, [useDataSourceFunction, selectedRowKeys.length, dataSource.length])

  useEffect(() => {
    if (!builtInRowSelection) return

    if (setSelected) {
      if (isSelectedAll) {
        if (useDataSourceFunction) {
          setSelected(total ? total - deselectedRowKeys.length : total)
        } else {
          setSelected(total)
        }
      } else {
        setSelected(selectedRowKeys.length)
      }
    }
  }, [useDataSourceFunction, isSelectedAll, setSelected, selectedRowKeys, deselectedRowKeys, total])

  useEffect(() => {
    if (!builtInRowSelection) return

    const rowSelectionData: TableRowSelectionData = {
      selectedRowKeys,
      selectedRows,
      deselectedRowKeys,
      deselectedRows,
      isSelectedAll
    }

    updateContext({
      rowSelection: rowSelectionData
    })

    processSelection?.(rowSelectionData)
    /* Excluding selectedRowKeys, deselectedRowKeys and isSelectedAll from deps to prevent double processSelection calls,
     * because all of them cause selectedRows/deselectedRows recalculation.
     */
  }, [selectedRows, deselectedRows])

  const selectAllRows = (rowsToSelect: T[], shouldClearDeselected = false) => {
    if (shouldClearDeselected) {
      setDeselectedRowKeys([])
    }
    const itemsToProcess = rowsToSelect.map(row => ({
      key: row.key,
      isSelected: true
    }))
    processItemsSelection(itemsToProcess)
  }

  const processItemsSelection = useCallback((items: { key: string, isSelected: boolean }[]) => {
    const validItems = items.filter(item => {
      const row = dataSource.find(row => row.key === item.key)
      return !row?._disabled && !row?._selectionDisabled
    })

    if (validItems.length === 0) return

    if (rowSelectionProps?.type === 'radio') {
      const lastSelected = validItems[validItems.length - 1]
      if (lastSelected.isSelected) {
        setSelectedRowKeys([lastSelected.key])
      }
      return
    }

    const keysToAdd = validItems
      .filter(item => item.isSelected)
      .map(item => item.key)

    const keysToRemove = validItems
      .filter(item => !item.isSelected)
      .map(item => item.key)

    setSelectedRowKeys(prev => updateKeys(prev, keysToAdd, keysToRemove))

    if (useDataSourceFunction) {
      setDeselectedRowKeys(prev => updateKeys(prev, keysToRemove, keysToAdd))
    }
  }, [dataSource, rowSelectionProps?.type, useDataSourceFunction])

  useEffect(() => {
    if (!builtInRowSelection) return
    if (isSelectedAll) {
      selectAllRows(dataSource.filter(row => !deselectedRowKeys.includes(row.key)))
    }
  }, [dataSource])

  const [triggerPreselectedRows, setTriggerPreselectedRows] = useState(false)

  useEffect(() => {
    if (!builtInRowSelection) return

    const updateSelectedRows = async () => {
      let preselectedKeys: string[] = []

      if (getPreselectedRows) {
        preselectedKeys = await getPreselectedRows(dataSource)
      } else {
        dataSource.forEach(row => {
          if (row._selected && !deselectedRowKeys.includes(row.id)) {
            preselectedKeys.push(row.key)
          }
        })
      }

      if (preselectedKeys.length) {
        setSelectedRowKeys(prev => Array.from(new Set([...prev, ...preselectedKeys])))
      }
    }

    dataSource.length && updateSelectedRows()
  }, [dataSource, getPreselectedRows, triggerPreselectedRows])

  useRefMethod('setPreselectedRows', () => setTriggerPreselectedRows(prev => !prev))

  const resetSelection = useCallback(() => {
    setSelectedRowKeys([])
    setDeselectedRowKeys([])
    setIsSelectedAll(false)
  }, [])

  useRefMethod('resetSelection', resetSelection)

  const onSelectAll = () => {
    selectAllRows(dataSource, true)
    setIsSelectedAll(true)
  }

  const onSelectCurrentPage = () => {
    selectAllRows(
      useDataSourceFunction
        ? dataSource
        : dataSource.slice((current - 1) * pageSize, current * pageSize)
    )
  }

  if (!rowSelectionProps) return

  if (!builtInRowSelection) {
    return {
      ...rowSelectionProps,
      getCheckboxProps: rowSelectionProps?.getCheckboxProps ?? getCheckboxProps
    }
  }

  const rowSelection: RowSelectionAntd<T> = {
    ...restRowSelection,
    columnWidth: 0,
    columnTitle: hasSelectAll && restRowSelection.type !== 'radio' && (
      <HeaderCheckbox
        tableId={tableId}
        disableSelectAll={dataSource.length === 0 || dataSource.every(row => row._disabled) || disabled}
        selectedRowsLength={selectedRowKeys.length}
        deselectedRowsLength={deselectedRowKeys.length}
        useDataSourceFunction={useDataSourceFunction}
        isSelectedAll={isSelectedAll}
        resetSelection={resetSelection}
        onSelectAll={onSelectAll}
        onSelectCurrentPage={onSelectCurrentPage}
      />
    ),
    hideSelectAll: hasSelectAll === false,
    onSelect: (row, isSelected) => {
      if (!row.isGroupTitle) {
        processItemsSelection([{ key: row.key, isSelected }])
      }
    },
    selectedRowKeys,
    renderCell: renderCellWithGroups,
    getCheckboxProps: restRowSelection.getCheckboxProps ?? getCheckboxProps
  }

  return rowSelection
}
