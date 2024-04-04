import { ComponentThemeContext } from '../config'
import { pagination as defaultPagination } from '../light/pagination'
import { PaginationColorConfig } from '@src/pagination/types'

export const pagination = ({ colors }: ComponentThemeContext): PaginationColorConfig => defaultPagination({ colors })
