import { ComponentThemeContext } from '../config'
import { alert as defaultAlert } from '../light/alert'

export const alert = ({ colors }: ComponentThemeContext) => defaultAlert({ colors })
