import { FieldColorConfig } from '@src/field/types'

import { ComponentThemeContext } from '../config'

export const field = ({ colors }: ComponentThemeContext): FieldColorConfig => ({
  helpIconColor: colors.status.icon.low
})
