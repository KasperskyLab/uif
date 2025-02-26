import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

type StateProps = {
  color?: string
}

export type WeeklyScheduleColorConfig = {
  enabled?: StateProps,
  selected?: StateProps
}

export type WeeklyScheduleCssConfig = WeeklyScheduleColorConfig

export type WeeklyScheduleThemeProps = {
  theme?: Theme
}

type DaySchedule = number[]

export type InitialSchedule = {
  [key: string]: DaySchedule,
  monday: DaySchedule,
  tuesday: DaySchedule,
  wednesday: DaySchedule,
  thursday: DaySchedule,
  friday: DaySchedule,
  saturday: DaySchedule,
  sunday: DaySchedule
}

export type DaysOfWeek = {
  [key: string]: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string
}

export type Legend = {
  selected: string,
  notSelected: string
}

export type WeeklyScheduleProps = {
  /** Initial state of the schedule,
   *  specified as an object with days of the week,
   *  each day of the week consists of array x24(one index - one hour) consisting of 0|1,
   *  when 0 - not selected, 1 - selected.
   *  If you have not filled in a day, the component will fill it in with 0 on its own */
  initialState: InitialSchedule,
  /** function that saves the schedule from component */
  onChange: (value: InitialSchedule) => void,
  /** dictionaries for days of the week */
  daysOfWeek: DaysOfWeek,
  /** dictionaries for legend */
  legend: Legend
} & TestingProps & WeeklyScheduleThemeProps

export type Coordinate = {
  x: number | null,
  y: number | null
}

export type WeeklyScheduleViewProps = ToViewProps<WeeklyScheduleProps, WeeklyScheduleCssConfig, WeeklyScheduleThemeProps>

export type ScheduleLegendProps = {
  cssConfig: WeeklyScheduleCssConfig,
  legend: Legend
}

export type ScheduleHeaderProps = {
  daysOfWeek: DaysOfWeek
}

type CellSize = {
  height: number,
  width: number,
  x: number,
  y: number
}

export type CheckCellInSelectedAreaParams = {
  cellSize: CellSize,
  startCoordinate: Coordinate,
  endCoordinate: Coordinate
}
