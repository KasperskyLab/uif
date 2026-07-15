import { Tooltip } from '@src/tooltip'
import React from 'react'

import { TableRecord, TableRowSelection } from '../../../types'

export const renderCell: NonNullable<TableRowSelection['renderCell']> = (_, row, __, originNode) => {
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

export const updateKeys = (prev: string[], keysToAdd: string[], keysToRemove: string[]) => {
  let newKeys = [...prev]

  if (keysToAdd.length) {
    newKeys = [...new Set([...newKeys, ...keysToAdd])]
  }

  if (keysToRemove.length) {
    newKeys = newKeys.filter(key => !keysToRemove.includes(key))
  }

  return newKeys
}

export const updateRows = <T extends TableRecord = TableRecord>(prevRows: T[], keys: string[], dataSource: T[]) => {
  const loadedKeys = prevRows.map(row => row.key)
  const notLoadedKeys = keys.filter(key => !loadedKeys.includes(key))

  const validPrevRows = prevRows.filter(row => keys.includes(row.key))

  const newRows = notLoadedKeys.map(key => findRowByKey(dataSource, key)).filter(row => row !== null)

  return [...validPrevRows, ...newRows]
}

export const findRowByKey = <T extends TableRecord>(rows: T[], key: string): T | null => {
  for (const row of rows) {
    if (row.key === key) {
      return row
    }

    if (row.children?.length) {
      const found = findRowByKey(row.children as T[], key)
      if (found) return found
    }
  }

  return null
}