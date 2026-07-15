import { createContext, useContext } from 'react'

import { TableColumn, TableRecord } from '../../types'

export type ResizableColumnsContextValue<T extends TableRecord = TableRecord> = {
  columns: TableColumn<T>[],
  hasRowSelection?: boolean,
  setOverflow: (overflow: boolean) => void
}

// Вынуждены использовать any, т.к. при <TableRecord> нельзя нормально типизировать пропы при использовании контекста
export const ResizableColumnsContext = createContext<ResizableColumnsContextValue<any>>({
  columns: [],
  setOverflow: () => {}
})

export function useResizableColumnsContext<T extends TableRecord = TableRecord> () {
  return useContext<ResizableColumnsContextValue<T>>(ResizableColumnsContext)
}
