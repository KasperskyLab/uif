import { IGroupedStackedChartData } from '../types/chartData'

export function groupBy100<T> (groupedData: IGroupedStackedChartData<T>): IGroupedStackedChartData<T> {
  const xTotals = groupedData.reduce((result, [group, d]) => {
    let xGroupTotals = result.get(group)

    if (!xGroupTotals) {
      xGroupTotals = new Map<string, number>()
      result.set(group, xGroupTotals)
    }

    for (const record of d) {
      for (const chartData of record.data) {
        const xValue = chartData.metric.toString()
        xGroupTotals.set(xValue, (xGroupTotals.get(xValue) || 0) + chartData.value)
      }
    }

    return result
  }, new Map<string, Map<string, number>>())

  return groupedData.map(([group, stackChartDatas]) => {
    const xGroupTotals = xTotals.get(group)

    if (!xGroupTotals) {
      return [group, stackChartDatas]
    }

    const groupedDataBy100 = stackChartDatas.map((stackChartData) => ({
      ...stackChartData,
      data: stackChartData.data.map((d) => {
        const value = xGroupTotals.get(d.metric.toString())

        if (!value || value === 0) {
          return {
            ...d,
            value: 0
          }
        }

        return {
          ...d,
          value: (d.value / value) * 100
        }
      })
    }))

    return [group, groupedDataBy100]
  })
}
