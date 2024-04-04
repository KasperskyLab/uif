import { ComponentThemeContext } from '../config'
import { KeyValueColorConfig } from '@src/key-value/types'

export const keyValue = ({ colors }: ComponentThemeContext): KeyValueColorConfig => ({
  normal: {
    keyColor: colors.textIconsElements.secondary,
    valueColor: colors.textIconsElements.primary
  }
})
