import { ComponentThemeContext } from '../config'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { checkbox as defaultCheckboxCreator } from '../light/checkbox'

export const checkbox = ({ colors }: ComponentThemeContext): CheckboxColorConfig => {
  const defaultCheckbox = defaultCheckboxCreator({ colors })

  return {
    ...defaultCheckbox,
    normal: {
      ...defaultCheckbox.normal,
      checkColor: colors.textIconsElements['primary-invert']
    },
    hover: {
      ...defaultCheckbox.hover,
      checkColor: colors.textIconsElements['primary-invert']
    },
    invalid: {
      ...defaultCheckbox.invalid,
      checkColor: colors.textIconsElements['primary-invert']
    }
  }
}
