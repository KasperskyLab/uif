import { Table } from './Table'
import { tableModules, composeWithModules } from './modules'
import { LocalizeColumnTitles } from './modules/LocalizeColumnTitles'

const tableWithModules = composeWithModules(Table, tableModules)
const TableWithoutModules = composeWithModules(Table, [LocalizeColumnTitles])

export {
  TableWithoutModules,
  tableWithModules as Table
}

export * from './types'
