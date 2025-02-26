import { PaginationColorConfig } from '@src/pagination/types'

import { ComponentThemeContext } from '../config'
import { pagination as defaultPagination } from '../light/pagination'

export const pagination = ({ colors, effects }: ComponentThemeContext): PaginationColorConfig =>
  defaultPagination({ colors, effects })
