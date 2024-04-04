import {
  CheckCellInSelectedAreaParams,
  InitialSchedule
} from '@src/weekly-schedule/types'

export const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export const parseInitialSchedule = (initial:InitialSchedule, defaultValue: boolean): boolean[] => {
  return weekDays.flatMap((day: string) => {
    if (initial?.[day]?.length !== 24) {
      return Array(24).fill(defaultValue)
    }
    return initial[day].map((el) => Boolean(el))
  })
}

export const toInitialFormat = (draftSchedule: boolean[]): InitialSchedule => {
  const result = {} as InitialSchedule
  const HOURS = 24
  weekDays.forEach((day:string, i:number) => {
    result[day] = draftSchedule.slice(i * HOURS, (i * HOURS + HOURS))
      .map((el: boolean) => el ? 1 : 0)
  })

  return result
}

export const checkCellInSelectedArea = ({
  cellSize,
  startCoordinate,
  endCoordinate
}: CheckCellInSelectedAreaParams
): boolean => {
  const minX = Math.min(startCoordinate.x as number, endCoordinate.x as number)
  const maxX = Math.max(startCoordinate.x as number, endCoordinate.x as number)
  const minY = Math.min(startCoordinate.y as number, endCoordinate.y as number)
  const maxY = Math.max(startCoordinate.y as number, endCoordinate.y as number)

  return (cellSize.y + cellSize.height >= minY &&
    cellSize.y <= maxY &&
    cellSize.x + cellSize.width >= minX &&
    cellSize.x <= maxX
  )
}
