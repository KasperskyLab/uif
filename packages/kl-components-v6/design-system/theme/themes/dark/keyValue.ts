import { ComponentThemeContext } from '../config'
import { keyValue as defaultKeyValue } from '../light/keyValue'

export const keyValue = ({ colors }: ComponentThemeContext) => defaultKeyValue({ colors })
