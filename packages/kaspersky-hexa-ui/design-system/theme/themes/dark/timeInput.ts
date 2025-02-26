import { TimeInputColorConfig } from '@src/time-input/types'

import { ComponentThemeContext } from '../config'

import { picker } from './picker'

export const timeInput = ({ colors, effects }: ComponentThemeContext): TimeInputColorConfig => ({
  ...picker({ colors, effects })
})
