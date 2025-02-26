import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  WeeklyScheduleCssConfig,
  WeeklyScheduleProps,
  WeeklyScheduleThemeProps,
  WeeklyScheduleViewProps
} from './types'

export const useThemedWeeklySchedule = (props: WeeklyScheduleProps): WeeklyScheduleViewProps => (
  useThemedComponent<WeeklyScheduleProps, WeeklyScheduleCssConfig, WeeklyScheduleThemeProps>(props, {
    componentName: 'weeklySchedule',
    defaultValues: {}
  })
)
