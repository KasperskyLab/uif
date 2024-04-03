import { Table } from './Table'
import { tableModules, composeWithModules } from './modules'

const tableWithModules = composeWithModules(Table, tableModules)

export {
  tableWithModules as Table
}

export * from './types'
