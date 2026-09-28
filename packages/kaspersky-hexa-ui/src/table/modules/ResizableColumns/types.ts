import { SetState } from '@helpers/hooks/useStateProps'
import {
  ReactNode
} from 'react'

import { ITableProps, TableColumn, TableRecord } from '../..'

export type SetColumns<T extends TableRecord = TableRecord> = SetState<TableColumn<T>[]>

export type ResizableHeaderCellProps = {
  children: ReactNode
  width: number
  minWidth?: number
  onResize: (width: number) => void
  disabled?: boolean
}

export type ResizeColumnsArgs<T extends TableRecord = TableRecord> = {
  index: number,
  columnWidth: number,
  columns: TableColumn<T>[],
  onManualColumnResize?: ITableProps<T>['onManualColumnResize'],
  columnMinWidth?: number
}
