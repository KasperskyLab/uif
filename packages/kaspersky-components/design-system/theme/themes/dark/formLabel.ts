import { ComponentThemeContext } from '../config'
import { FormLabelStateProps } from '@src/form-label/types'
import { formLabel as defaultFormLabel } from '../light/formLabel'

export const formLabel = ({ colors }: ComponentThemeContext): FormLabelStateProps =>
  defaultFormLabel({ colors })
