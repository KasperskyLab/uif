import { mixWhite } from '@wojtekmaj/color-utils'

import { CustomTheme } from '../hooks/useChartTheme'
import { IChartData, IStackedChartData } from '../types/chartData'

import { getColorFromPalette } from './getPalette'
import { isChartDataPoint } from './isChartDataPoint'
import { isStackedChartDataPoint } from './isStackedData'

export function defaultAddColorToData<T, D extends IStackedChartData<T> | IChartData<T>> (
  data: D,
  theme: CustomTheme,
  opacity = 0.3
): D {
  const colorMap = new Map()

  return data.map((d) => {
    if (d.color) {
      return d
    }

    const name = isChartDataPoint(d) ? d.metric : d.name
    const group = isChartDataPoint(d) ? undefined : d.group
    let color = colorMap.get(name)

    if (!color) {
      color = getColorFromPalette(theme.line.colorScale, colorMap.size)
      colorMap.set(name, color)
    }

    const previousPeriodGroupName = 'previous'

    if (group === previousPeriodGroupName) {
      color = mixWhite(color, opacity)

      if (isStackedChartDataPoint(d)) {
        d.data = d.data.map((cd) => ({ ...cd, color: cd.color ? mixWhite(cd.color, opacity) : undefined }))
      }
    }

    return {
      ...d,
      color
    }
  }) as D
}
