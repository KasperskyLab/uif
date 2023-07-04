import { ComponentThemeContext } from '../config'
import { divider as defaultDivider, dividerSize as defaultDividerSize } from '../light/divider'

export const divider = ({ colors }: ComponentThemeContext) => defaultDivider({ colors })

export const dividerSize = {
  ...defaultDividerSize
}
