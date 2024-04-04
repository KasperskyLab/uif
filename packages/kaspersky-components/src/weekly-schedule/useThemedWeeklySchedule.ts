import { useThemedComponent } from '@helpers/useThemedComponent'
import {
  WeeklyScheduleProps,
  WeeklyScheduleViewProps,
  WeeklyScheduleCssConfig,
  WeeklyScheduleThemeProps
} from '@src/weekly-schedule/types'

export const useThemedWeeklySchedule = (props: WeeklyScheduleProps): WeeklyScheduleViewProps => (
  useThemedComponent<WeeklyScheduleProps, WeeklyScheduleCssConfig, WeeklyScheduleThemeProps>(props, {
    componentName: 'weeklySchedule',
    defaultValues: {}
  })
)
