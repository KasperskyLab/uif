import { ComponentThemeContext } from '../config'
import { toolbar as defaultToolbar } from '../light/toolbar'

export const toolbar = ({ colors }: ComponentThemeContext) => defaultToolbar({ colors })
