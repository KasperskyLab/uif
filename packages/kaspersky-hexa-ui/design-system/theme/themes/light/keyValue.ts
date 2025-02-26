import { KeyValueColorConfig } from '@src/key-value/types'

import { ComponentThemeContext } from '../config'

export const keyValue = ({ colors }: ComponentThemeContext): KeyValueColorConfig => ({
  enabled: {
    keyColor: colors.label.text.subtle,
    valueColor: colors.label.text.bold
  }
})
