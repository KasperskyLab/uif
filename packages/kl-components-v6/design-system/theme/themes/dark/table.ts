import { TableColorConfig } from '../../../../src/table/types'
import { ComponentThemeContext } from '../config'
import { table as defaultTableCreator, tableSizes as defaultTableSizes } from '../light/table'

export const table = ({ colors }: ComponentThemeContext): TableColorConfig => {
  const defaultTable = defaultTableCreator({ colors })

  return defaultTable
}

export const tableSizes = defaultTableSizes
