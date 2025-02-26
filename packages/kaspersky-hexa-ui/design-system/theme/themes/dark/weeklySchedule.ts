import { WeeklyScheduleColorConfig } from '@src/weekly-schedule/types'

import { ComponentThemeContext } from '../config'
import { weeklySchedule as defaultWeeklySchedule } from '../light/weeklySchedule'

export const weeklySchedule = ({ colors, effects }: ComponentThemeContext): WeeklyScheduleColorConfig =>
  defaultWeeklySchedule({ colors, effects })
