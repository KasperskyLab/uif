import { createContext, useContext } from 'react'

import { TableColumn, TableRowSelection } from '../../types'

export type ResizableColumnsContextValue = {
  columns: TableColumn[],
  rowSelection?: TableRowSelection,
  setOverflow: (overflow: boolean) => void
}

export const ResizableColumnsContext = createContext<ResizableColumnsContextValue>({
  columns: [],
  setOverflow: () => { /* Do nothing if the provider isn't connected */ }
})

export function useResizableColumnsContext () {
  return useContext(ResizableColumnsContext)
}

