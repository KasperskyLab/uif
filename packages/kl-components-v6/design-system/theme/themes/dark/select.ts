import { ComponentThemeContext } from '../config'
import { select as defaultSelect, selectSizes as defaultSelectSizes } from '../light/select'

export const select = ({ colors }: ComponentThemeContext) => defaultSelect({ colors })

export const selectSizes = {
  ...defaultSelectSizes
}
