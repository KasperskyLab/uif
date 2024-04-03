import { ComponentThemeContext } from '../config'
import { TimeInputColorConfig } from '@src/time-input'
import { picker } from './picker'

export const timeInput = ({ colors }: ComponentThemeContext): TimeInputColorConfig => ({
  ...picker({ colors })
})
