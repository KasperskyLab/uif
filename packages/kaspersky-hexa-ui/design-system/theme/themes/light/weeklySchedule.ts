import { WeeklyScheduleColorConfig } from '@src/weekly-schedule/types'

import { ComponentThemeContext } from '../config'

export const weeklySchedule = ({ colors }: ComponentThemeContext): WeeklyScheduleColorConfig => ({
  enabled: {
    color: colors.calendar_dropdown_button.bg.between.enabled
  },
  selected: {
    color: colors.calendar_dropdown_button.bg.selected.enabled
  }
})
