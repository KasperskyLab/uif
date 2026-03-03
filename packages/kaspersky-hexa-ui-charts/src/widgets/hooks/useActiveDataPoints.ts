import { useCallback, useEffect, useState } from 'react'

import { isChartDataPoint } from '../../helpers/isChartDataPoint'
import { IChartDataPoint, IStackedChartDataPoint } from '../../types/chartData'

type ChartPoint = IChartDataPoint | IStackedChartDataPoint;

export const useActiveDataPoints = <T>(
  data: IChartDataPoint<T>[]
): {
  widgetData: IChartDataPoint<T>[],
  updateActiveSlice: (metric: ChartPoint | undefined) => void
} => {
  const [widgetData, setWidgetData] = useState<IChartDataPoint<T>[]>(data)

  useEffect(() => {
    setWidgetData(data)
  }, [data])

  const updateActiveSlice = useCallback((point: ChartPoint | undefined) => {
    setWidgetData((data) => {
      return data.map((record) => {
        if (!point) {
          return { ...record, active: false }
        }

        const key = isChartDataPoint(point) ? point.metric : point.name

        return {
          ...record,
          active: record.metric === key
        }
      })
    })
  }, [])

  return { widgetData, updateActiveSlice }
}
