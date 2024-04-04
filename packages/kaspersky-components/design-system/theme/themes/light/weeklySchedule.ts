import { WeeklyScheduleColorConfig } from '@src/weekly-schedule/types'
import { ComponentThemeContext } from '../config'

export const weeklySchedule = ({ colors }: ComponentThemeContext): WeeklyScheduleColorConfig => ({
  normal: {
    color: colors.defaultPalette.marina100
  },
  selected: {
    color: colors.defaultPalette.marina500
  }
})
