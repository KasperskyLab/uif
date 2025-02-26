import { composeWithModules, tableModules } from './modules'
import { LocalizeColumnTitles } from './modules/LocalizeColumnTitles'
import { Table } from './Table'

const tableWithModules = composeWithModules(Table, tableModules)
const TableWithoutModules = composeWithModules(Table, [LocalizeColumnTitles])

export {
  tableWithModules as Table,
  TableWithoutModules
}

export type {
  ITableProps,
  TableColumn,
  TablePaginationProps,
  TableRecord,
  TableToolbarProps
} from './types'
