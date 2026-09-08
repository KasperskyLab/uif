import React, {
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'

import { TableComponent } from '../modules'
import { ITableProps, TableRecord, TableRef } from '../types'

import {
  createTableStore,
  getDefaultContextData,
  TableStore,
  TableStoreContext
} from './tableStore'

export type { AddMethodToRef, TableContextProviderProps, TableStore, UpdateTableContext } from './tableStore'
export {
  TableStoreContext as TableContext,
  useRefMethod,
  useTableContext,
  useTableStore,
  useTableUpdate
} from './tableStore'

export const TableContextProvider = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
) => React.forwardRef<TableRef, ITableProps<T>>(function TableWithContextProvider ({
  dateFormat,
  filterVersion = 1,
  enableNestedFilters,
  useV3TestId,
  ...props
}, ref) {
  const methodsRef = useRef<TableRef>({} as TableRef)

  const storeRef = useRef<TableStore<T>>()
  if (!storeRef.current) {
    storeRef.current = createTableStore<T>({
      ...getDefaultContextData<T>(),
      dateFormat,
      filterVersion,
      enableNestedFilters,
      useV3TestId
    }, methodsRef)
  }
  const store = storeRef.current

  useEffect(() => {
    store.update({ dateFormat, filterVersion, useV3TestId })
  }, [dateFormat, filterVersion, useV3TestId])

  useImperativeHandle(ref, () => methodsRef.current, [])

  return (
    <TableStoreContext.Provider value={store}>
      <Component {...(props as ITableProps<T>)} ref={ref} />
    </TableStoreContext.Provider>
  )
})
