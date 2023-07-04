import { ComponentThemeContext } from '../config'
import { field as defaultField } from '../light/field'

export const field = ({ colors }: ComponentThemeContext) => defaultField({ colors })
