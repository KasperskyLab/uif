import { ComponentThemeContext } from '../config'
import { severity as defaultSeverity } from '../light/severity'

export const severity = ({ colors }: ComponentThemeContext) => defaultSeverity({ colors })
