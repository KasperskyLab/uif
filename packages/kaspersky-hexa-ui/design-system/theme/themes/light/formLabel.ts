import { FormLabelStateProps } from '@src/form-label/types'

import { ComponentThemeContext } from '../config'

export const formLabel = ({ colors }: ComponentThemeContext): FormLabelStateProps => ({
  primary: {
    text: colors.label.text.bold,
    asterisk: colors.label.text.required
  },
  secondary: {
    text: colors.label.text.subtle,
    asterisk: colors.label.text.required
  },
  disabled: {
    text: colors.label.text.disabled,
    asterisk: colors.label.text.disabled
  }
})
