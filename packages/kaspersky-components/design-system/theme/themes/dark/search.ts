import { ComponentThemeContext } from '../config'
import { search as defaultSearch } from '../light/search'

export const search = ({ colors }: ComponentThemeContext) => defaultSearch({ colors })
