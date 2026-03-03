import { SyntheticEvent } from 'react'

import { IChartDataPoint } from '../types/chartData'
import { ChartHoverProps, EventType } from '../types/chartHoverProps'

export const getChartHoverProps = <T = any>(
  event: SyntheticEvent<unknown>,
  eventType: EventType,
  data: IChartDataPoint<T>
): ChartHoverProps<T> => {
  if (!(event.nativeEvent instanceof MouseEvent)) {
    return {
      x: -1,
      y: -1,
      target: null,
      data,
      eventType
    }
  }

  return {
    x: event.nativeEvent.x,
    y: event.nativeEvent.y,
    target: null,
    data,
    eventType
  }
}
