import React, { createContext, useContext } from 'react'

import { TableModule } from '../modules'
import { TableCssConfig } from '../types'
import { useThemedTableProps } from '../useThemedTable'

export type TableContextProviderProps = {
  cssConfig: TableCssConfig | null
}

const TableContext = createContext<TableContextProviderProps>({
  cssConfig: null
})

export const useTableContext = () => useContext(TableContext)

export const TableContextProvider: TableModule = Component => rawProps => {
  const { cssConfig, ...props } = useThemedTableProps(rawProps)

  return (
    <TableContext.Provider value={{ cssConfig }}>
      <Component {...props} />
    </TableContext.Provider>
  )
}
