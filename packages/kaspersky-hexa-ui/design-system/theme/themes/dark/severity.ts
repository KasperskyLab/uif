import { ComponentThemeContext } from '../config'
import { severity as defaultSeverity } from '../light/severity'

export const severity = ({ colors, effects }: ComponentThemeContext) => defaultSeverity({ colors, effects })
