import { useMemo } from 'react'

import { ALL_DATA_FIELD } from '../constants'
import { groupBy100 } from '../helpers/groupBy100'
import { reversedStackedChart } from '../helpers/reversedStackedChart'
import { IGroupedStackedChartData, IStackedChartData } from '../types/chartData'

export function useStackedData (
  data: IStackedChartData,
  isStackedBy100 = false,
  reversed = false
): IGroupedStackedChartData {
  return useMemo(() => {
    // for events
    const dataWithAllData = data.map((ad) => ({ ...ad, data: ad.data.map((d) => ({ ...d, [ALL_DATA_FIELD]: ad })) }))
    const groupedByName = dataWithAllData.reduce((result, d) => {
      const groupName = d.group || ''
      let group = result.get(groupName)
      if (!group) {
        group = []
        result.set(groupName, group)
      }

      group.push(d)

      return result
    }, new Map<string, IStackedChartData>())

    let groupedData = Array.from(groupedByName.entries())

    groupedData = isStackedBy100 ? groupBy100(groupedData) : groupedData

    groupedData = reversed ? reversedStackedChart(groupedData) : groupedData

    return groupedData
  }, [data, isStackedBy100, reversed])
}
