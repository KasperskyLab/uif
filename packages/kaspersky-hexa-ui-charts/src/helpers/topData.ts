import { t } from 'i18next'

import { StackedChartTooltipPointsData } from '../types/chartData'

export function topStackedChartTooltipPointsData (
  data: StackedChartTooltipPointsData,
  top = 10,
  otherLabel = 'rest'
): StackedChartTooltipPointsData {
  const notEmpty = data.filter(Boolean)

  if (notEmpty.length <= top) {
    return notEmpty
  }

  const sortedData = notEmpty.sort((a, b) => b.value - a.value)
  const otherValue = sortedData.slice(top).reduce((result, d) => result + d.value, 0)

  return [
    ...sortedData.slice(0, top),
    {
      name: otherLabel,
      metric: otherLabel,
      value: otherValue
    } as StackedChartTooltipPointsData[number]
  ]
}
