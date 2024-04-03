import { ComponentThemeContext } from '../config'
import { FormLabelStateProps } from '@src/form-label'

export const formLabel = ({ colors }: ComponentThemeContext): FormLabelStateProps => ({
  primary: {
    text: colors.textIconsElements.primary,
    asterisk: colors.criticalitystatuses.high,
    icon: colors.textIconsElements['secondary-solid']
  },
  secondary: {
    text: colors.textIconsElements['secondary2-solid'],
    asterisk: colors.criticalitystatuses.high,
    icon: colors.textIconsElements['secondary-solid']
  },
  disabled: {
    text: colors.textIconsElements['disabled-solid'],
    asterisk: colors.textIconsElements['disabled-solid'],
    icon: colors.textIconsElements['secondary-solid']
  }
})
