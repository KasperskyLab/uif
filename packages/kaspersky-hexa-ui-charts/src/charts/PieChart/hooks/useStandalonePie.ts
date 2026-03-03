import { useCallback, useMemo, useState } from 'react'

import { IChartDataPoint } from '../../../types/chartData'
import { TChartEventCallback } from '../../../types/chartEvent'

export const useStandalonePie = <T>(
  data: IChartDataPoint[],
  standalone?: boolean,
  onHover?: TChartEventCallback<T>,
  onLeave?: TChartEventCallback<T>
): {data: IChartDataPoint[], onHover?: TChartEventCallback<T>, onLeave?: TChartEventCallback<T>} => {
  const [hoveredSlices, setHoveresSlices] = useState<IChartDataPoint['metric'][]>([])

  const interceptOnHover: TChartEventCallback<T> = useCallback((_, point, stackedPoints) => {
    setHoveresSlices(slices => {
      return [...slices, point.metric]
    })
    onHover?.(_, point, stackedPoints)
  }, [])

  const interceptOnLeave: TChartEventCallback<T> = useCallback((_, point, stackedPoints) => {
    setHoveresSlices(slices => {
      return slices.filter(slice => slice !== point.metric)
    })
    onLeave?.(_, point, stackedPoints)
  }, [])

  return useMemo(() => {
    if (!standalone) {
      return { data, onHover, onLeave }
    }

    return {
      data: data.map(record => {
        return {
          ...record,
          active: hoveredSlices.indexOf(record.metric) >= 0
        }
      }),
      onHover: interceptOnHover,
      onLeave: interceptOnLeave
    }
  }, [data, hoveredSlices, interceptOnHover, interceptOnLeave])
}
