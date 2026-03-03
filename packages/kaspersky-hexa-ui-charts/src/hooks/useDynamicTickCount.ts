import { useMemo } from 'react'
import { BlockProps } from 'victory'

import { DEFAULT_LEFT_TEXT_OFFSET, DEFAULT_LETTER_SIZE, DEFAULT_RIGHT_TEXT_OFFSET } from '../constants'
import { getCategoriesFromData, getValuesFromData } from '../helpers/getCategoriesFromData'
import { getTickCountByTimeline } from '../helpers/tickCount'
import { IStackedChartData } from '../types/chartData'

export function useDynamicTickCount (
  data: IStackedChartData<unknown>,
  width: number,
  minTickLabelYLength: number,
  chartPadding: BlockProps,
  xTickFormat: (tick: any, index: number, ticks: any[]) => string,
  yTickFormat: (tick: any, index: number, ticks: any[]) => string,
  categoriesFormat: (tick: Date) => string = (v) => v.toString(),
  tickLetterSize = DEFAULT_LETTER_SIZE
): { paddingWithLabel: BlockProps, maxYTextLength: number, xTickCount: number } {
  return useMemo(() => {
    const yValues = getValuesFromData(data)
    const maxYTextLength = Math.max(...yValues.map((c, idx) => yTickFormat(c, idx, yValues).length))
    const maxLabelYLength = Math.min(maxYTextLength, minTickLabelYLength)
    const left = Math.max(maxLabelYLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET)
    const xValues = getCategoriesFromData(data, categoriesFormat).map((s) => Number.parseInt(s))
    const paddingWithLabel = {
      ...chartPadding,
      left: (chartPadding.left ?? 0) + left,
      right: Math.max(chartPadding.right ?? 0, DEFAULT_RIGHT_TEXT_OFFSET)
    }
    const xTickCount = getTickCountByTimeline(
      width - paddingWithLabel.left - paddingWithLabel.right,
      xValues,
      tickLetterSize,
      xTickFormat
    )

    return {
      paddingWithLabel,
      maxYTextLength: maxLabelYLength,
      xTickCount
    }
  }, [chartPadding, data, minTickLabelYLength, yTickFormat, width, xTickFormat, categoriesFormat])
}
