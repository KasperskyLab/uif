import { TableColorConfig } from '@src/table/types'

import { ComponentThemeContext } from '../config'
import { table as defaultTable } from '../light/table'

export const table = ({ colors, effects }: ComponentThemeContext): TableColorConfig => defaultTable({ colors, effects })
