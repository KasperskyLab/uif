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
  usePresetsUpdate,
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
      useV3TestId,
      isServerFiltering: !!props.isServerFiltering
    }, methodsRef)
  }
  const store = storeRef.current

  useEffect(() => {
    store.update({
      dateFormat,
      filterVersion,
      useV3TestId,
      isServerFiltering: !!props.isServerFiltering
    })
  }, [dateFormat, filterVersion, useV3TestId, props.isServerFiltering])

  useImperativeHandle(ref, () => methodsRef.current, [])

  const tableProps = props.presets
    ? { ...props, storageKey: undefined }
    : props

  return (
    <TableStoreContext.Provider value={store}>
      <Component {...(tableProps as ITableProps<T>)} ref={ref} />
    </TableStoreContext.Provider>
  )
})
