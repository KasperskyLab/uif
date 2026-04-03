import React from 'react'

import { WeeklySchedule as HexaWeeklySchedule } from '@src/weekly-schedule'
import { WeeklyScheduleProps } from '@src/weekly-schedule/types'

import {
  previewDaysOfWeek,
  previewLegend,
  previewWeeklyScheduleState
} from '../../preview'

const WeeklySchedule = ({
  daysOfWeek = previewDaysOfWeek,
  initialState = previewWeeklyScheduleState,
  legend = previewLegend,
  onChange,
  ...props
}: WeeklyScheduleProps): JSX.Element => {
  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    setState(initialState)
  }, [initialState])

  return (
    <HexaWeeklySchedule
      daysOfWeek={daysOfWeek}
      initialState={state}
      legend={legend}
      onChange={(nextValue) => {
        setState(nextValue)
        onChange(nextValue)
      }}
      {...props}
    />
  )
}

export default WeeklySchedule
