import { FieldCssConfig } from '../../../../src/field/types'
import { ComponentThemeContext } from '../config'

export const field = ({ colors }: ComponentThemeContext): FieldCssConfig => ({
  mode: {
    normal: {
      helpIconColor: colors.statestatuses.new,
      descriptionColor: colors.textIconsElements.secondary2
    }
  }
})
