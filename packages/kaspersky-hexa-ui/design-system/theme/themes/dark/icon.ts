import { ComponentThemeContext } from '../config'
import { icon as defaultIcon } from '../light/icon'

export const icon = ({ colors, effects }: ComponentThemeContext) => defaultIcon({ colors, effects })
