import { ComponentThemeContext } from '../config'
import { FormLabelStateProps } from '@src/form-label'
export const formLabel = ({ colors }: ComponentThemeContext): FormLabelStateProps => ({
  primary: {
    text: colors.textIconsElements.primary,
    asterisk: colors.criticalitystatuses.high,
    icon: colors.textIconsElements.secondary2
  },
  secondary: {
    text: colors.textIconsElements.secondary2,
    asterisk: colors.criticalitystatuses.high,
    icon: colors.textIconsElements.secondary2
  },
  disabled: {
    text: colors.textIconsElements.disabled,
    asterisk: colors.textIconsElements.disabled,
    icon: colors.textIconsElements.secondary2
  }
})
