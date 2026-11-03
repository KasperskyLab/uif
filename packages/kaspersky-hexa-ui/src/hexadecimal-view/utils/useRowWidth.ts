import { useResizeObserver } from '@helpers/useResizeObserver'
import React, { RefObject } from 'react'

import { BYTES_PER_ROW } from '../constants'

// sorted in decreasing order
const SORTED_BYTES_PER_ROW_ENTRIES = Object.entries(BYTES_PER_ROW)
  .map(([media, cols]) => ([Number(media), cols]))
  .sort(([left], [right]) => right - left)

export const useRowWidth = (tableRef: RefObject<HTMLDivElement>) => {
  const tableRect = useResizeObserver(tableRef)
  const bytesPerRow = React.useMemo(() => {
    if (!tableRect?.width) {
      return SORTED_BYTES_PER_ROW_ENTRIES[0][1]
    }

    const len = SORTED_BYTES_PER_ROW_ENTRIES.length
    for (let i = 0; i < len; i++) {
      // eslint-disable-next-line security/detect-object-injection
      const [mediaQuery, rows] = SORTED_BYTES_PER_ROW_ENTRIES[i]
      if (tableRect.width >= mediaQuery) {
        return rows
      }
    }

    return SORTED_BYTES_PER_ROW_ENTRIES[len - 1][1]
  }, [tableRect?.width])

  return bytesPerRow
}