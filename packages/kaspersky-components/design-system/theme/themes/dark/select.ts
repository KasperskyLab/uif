import { ComponentThemeContext } from '../config'
import { SelectColorConfig } from '@src/select/types'
import { select as defaultSelectCreator } from '../light/select'

export const select = ({ colors }: ComponentThemeContext): SelectColorConfig => {
  const defaultSelect = defaultSelectCreator({ colors })

  return {
    ...defaultSelect,
    normal: {
      ...defaultSelect.normal,
      dropdown: {
        ...defaultSelect.normal.dropdown,
        boxShadow: '0px 3px 5px 0px rgba(24, 24, 34, 0.60), 0px 0px 1px 0px rgba(247, 248, 249, 0.64)'
      }
    }
  }
}
