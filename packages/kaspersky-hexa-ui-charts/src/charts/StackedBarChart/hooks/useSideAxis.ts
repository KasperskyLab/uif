import { useMemo } from 'react'

import { IGroupedStackedChartData, ISideLabel } from '../../../types/chartData'

import { useSideLabelWidth } from './useSideLabelWidth'

type UseSideAxisOptions = {
  groupedData: IGroupedStackedChartData
  horizontal: boolean
  showSideLabelsProp?: boolean
  tickLetterSize?: number
}

export function useSideAxis ({
  groupedData,
  horizontal,
  showSideLabelsProp = false,
  tickLetterSize
}: UseSideAxisOptions) {
  const sideLabelMap = useMemo<Record<string, ISideLabel>>(() => {
    return groupedData.reduce<Record<string, ISideLabel>>((acc, [, group]) => {
      const groupMap = group.reduce<Record<string, ISideLabel>>((map, item) => {
        item.data.forEach(({ metric, sideLabel }) => {
          if (!sideLabel) return

          const key =
            metric instanceof Date
              ? metric.toISOString()
              : String(metric)

          map[key] = sideLabel
        })

        return map
      }, {})

      return { ...acc, ...groupMap }
    }, {})
  }, [groupedData])

  const isExistsAtLeastOneSideLabels = useMemo(() => {
    return Object.values(sideLabelMap).some(Boolean)
  }, [sideLabelMap])

  const showSideLabels = Boolean(
    showSideLabelsProp &&
    horizontal &&
    isExistsAtLeastOneSideLabels
  )

  const { sideLabelWidth } = useSideLabelWidth({
    sideLabelMap,
    tickLetterSize
  })

  return {
    sideLabelMap,
    showSideLabels,
    sideLabelWidth,
    isExistsAtLeastOneSideLabels
  }
}
