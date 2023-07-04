import { KeyValueCssConfig } from '../../../../src/key-value/types'
import { ComponentThemeContext } from '../config'

export const keyValue = ({ colors }: ComponentThemeContext): KeyValueCssConfig => ({
  normal: {
    keyColor: colors.textIconsElements.secondary,
    valueColor: colors.textIconsElements.primary,
    iconColor: colors.textIconsElements.primary
  }
})
