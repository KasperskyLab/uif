import { TableColorConfig } from '@src/table'
import { ComponentThemeContext } from '../config'
import { table as defaultTable } from '../light/table'

export const table = ({ colors }: ComponentThemeContext): TableColorConfig => defaultTable({ colors })
