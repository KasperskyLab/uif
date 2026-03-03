import { get } from 'lodash'
import { useMemo } from 'react'
import { NumberOrCallback, VictoryBarProps } from 'victory'

import { IStackedChartData } from '../../../types/chartData'
import { DEFAULT_BAR_CORNER_RADIUS } from '../constants'

export function useCornerRadius (data: IStackedChartData): VictoryBarProps['cornerRadius'] {
  return useMemo(() => {
    const heightCache: Record<string, Record<string, number>> = {}

    const cornerRadiusFunc: NumberOrCallback = ({ datum, y = 0, x = 0, index = 0, ...rest }) => {
      const height = get(rest, 'y0', 0) - y || x - get(rest, 'x0', 0)
      const stack = datum._stack
      const totalStack = data.length || 0

      if (!heightCache[index]) {
        heightCache[index] = {}
      }
      const cacheByIndex = heightCache[index]

      if (!cacheByIndex?.[stack]) {
        cacheByIndex[stack] = height
      }
      const totalHeight = Array.from({ length: totalStack - stack }).reduce<number>((result, _, idx) => result + cacheByIndex[totalStack - idx], 0)

      if (totalHeight < DEFAULT_BAR_CORNER_RADIUS) {
        return totalHeight ? DEFAULT_BAR_CORNER_RADIUS - totalHeight - 1 : DEFAULT_BAR_CORNER_RADIUS
      }

      return 0
    }

    return {
      topLeft: cornerRadiusFunc,
      topRight: cornerRadiusFunc
    }
  }, [data])
}
