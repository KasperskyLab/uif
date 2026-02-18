import { MakeRequired } from '@helpers/typesHelpers'
import { Tooltip } from '@src/tooltip'
import { TableRowSelection as RowSelectionAntd } from 'antd/lib/table/interface'
import React, { useCallback, useEffect, useState } from 'react'

import { ITableProps, TableRecord } from '../../..'
import { TableRowSelection } from '../../../types'
import { UsePaginationConfigReturn } from '../usePaginationConfig'

import { HeaderCheckbox } from './HeaderCheckbox'

const renderCell: TableRowSelection['renderCell'] = (_, row, __, originNode) => {
  return (
    row._disabled && row._disabledHint
      ? (
          <Tooltip
            text={row._disabledHint}
            key={`${row.key}-disabled-hint-tooltip`}
          >
            {originNode}
          </Tooltip>
        )
      : originNode
  )
}

type UseRowSelectionProps = {
  disabled: boolean,
  tableId?: string,
  withSelection: boolean,
  useDataSourceFunction: boolean
} & MakeRequired<Pick<ITableProps, 'rowSelection' | 'dataSource'>, 'dataSource'>
  & Pick<UsePaginationConfigReturn['pagination'], 'current' | 'pageSize'>

export const useRowSelection = ({
  rowSelection: rowSelectionProps,
  current,
  dataSource,
  disabled,
  tableId,
  pageSize,
  withSelection,
  useDataSourceFunction
}: UseRowSelectionProps): RowSelectionAntd<TableRecord> | undefined => {
  if (!rowSelectionProps) return

  const {
    getPreselectedRows,
    hasSelectAll = true,
    processSelection,
    builtInRowSelection,
    ...restRowSelection
  } = rowSelectionProps

  if (!rowSelectionProps.builtInRowSelection) return rowSelectionProps

  const getCheckboxProps: TableRowSelection['getCheckboxProps'] = (row) => ({
    'data-testid': row.key ? `table-row__select-${row.key}` : 'table-row__select',
    className: withSelection ? 'table-row-has-expandable' : undefined,
    disabled: disabled || row._disabled || row._selectionDisabled
  })

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  const [deselectedRowKeys, setDeselectedRowKeys] = useState<string[]>([])
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  useEffect(() => {
    // isSelectedAll for server pagination can be set only from SelectAll dropdown
    if (!useDataSourceFunction) {
      setIsSelectedAll(dataSource.length !== 0 && selectedRowKeys.length === dataSource.length)
    }
  }, [useDataSourceFunction, selectedRowKeys.length, dataSource.length])

  useEffect(() => {
    processSelection?.({ selectedRowKeys, deselectedRowKeys, isSelectedAll })
  }, [selectedRowKeys, deselectedRowKeys, isSelectedAll])

  const selectAllRows = (rowsToSelect: TableRecord[]) => {
    rowsToSelect.forEach(rowToSelect => processItemSelection(rowToSelect.key, true))
  }

  const processItemSelection = (processingKey: string, isSelected: boolean) => {
    if (dataSource.find(row => row.key === processingKey)?._disabled) return

    if (rowSelectionProps.type === 'radio') {
      setSelectedRowKeys([processingKey])
    } else {
      if (isSelected) {
        setDeselectedRowKeys(prev => prev.filter(key => key !== processingKey))
        if (!selectedRowKeys.includes(processingKey)) {
          setSelectedRowKeys(prev => [...prev, processingKey])
        }
      } else {
        setSelectedRowKeys(prev => prev.filter(key => key !== processingKey))
        if (useDataSourceFunction) setDeselectedRowKeys(prev => [...prev, processingKey])
      }
    }
  }

  useEffect(() => {
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

      setSelectedRowKeys(prev => Array.from(new Set([...prev, ...preselectedKeys])))
    }

    dataSource.length && updateSelectedRows()
  }, [dataSource, getPreselectedRows])

  const resetSelection = useCallback(() => {
    setSelectedRowKeys([])
    setDeselectedRowKeys([])
    setIsSelectedAll(false)
  }, [])

  const onSelectAll = () => {
    resetSelection()
    selectAllRows(dataSource)
    setIsSelectedAll(true)
  }

  const onSelectCurrentPage = () => {
    selectAllRows(
      useDataSourceFunction
        ? dataSource
        : dataSource.slice((current - 1) * pageSize, current * pageSize)
    )
  }

  const rowSelection: RowSelectionAntd<TableRecord> = {
    ...restRowSelection,
    columnWidth: 0,
    columnTitle: hasSelectAll && (
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
    onSelect: (row, isSelected) => processItemSelection(row.key, isSelected),
    selectedRowKeys,
    renderCell: restRowSelection.renderCell ?? renderCell,
    getCheckboxProps: restRowSelection.getCheckboxProps ?? getCheckboxProps
  }

  return rowSelection
}