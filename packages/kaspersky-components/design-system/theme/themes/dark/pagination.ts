import { ComponentThemeContext } from '../config'
import { pagination as defaultPagination, paginationSize as defaultPaginationSize } from '../light/pagination'

export const pagination = ({ colors }: ComponentThemeContext) => defaultPagination({ colors })

export const paginationSize = defaultPaginationSize
