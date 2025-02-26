import { FormLabelStateProps } from '@src/form-label/types'

import { ComponentThemeContext } from '../config'
import { formLabel as defaultFormLabel } from '../light/formLabel'

export const formLabel = ({ colors, effects }: ComponentThemeContext): FormLabelStateProps =>
  defaultFormLabel({ colors, effects })
