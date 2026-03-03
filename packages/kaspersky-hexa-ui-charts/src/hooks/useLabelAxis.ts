import { isNil } from 'lodash'
import { useMemo } from 'react'
import { BlockProps, Helpers } from 'victory'

import {
  DEFAULT_BOTTOM_OFFSET,
  DEFAULT_LEFT_TEXT_OFFSET,
  DEFAULT_LETTER_SIZE,
  DEFAULT_LOG_LEFT_TEXT_OFFSET,
  DEFAULT_MAX_LABEL_ANGLE,
  DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  DEFAULT_TEXT_ROTATION_STEP,
  DEFAULT_TICK_LABEL_OVERSIZE_RATIO,
  GUP_MAX_TICK_LABEL_Y_LENGTH
} from '../constants'
import { getBarWidth } from '../helpers/getBarWidth'
import { getCategoriesFromData } from '../helpers/getCategoriesFromData'
import { BaseChartProps } from '../types/chart'
import { IStackedChartData } from '../types/chartData'

export type useLabelAxisProps = BaseChartProps & {
  data: IStackedChartData,
  horizontal?: boolean,
  minTickLabelXVerticalLength?: number,
  minTickLabelXHorizontalLength?: number,
  minTickLabelYLength?: number,
  textRotationStep?: number,
  scaleX?: 'time' | 'linear',
  scaleY?: 'log' | 'linear' | 'sqrt',
  tickLetterSize?: number
};

export function useLabelAxis ({
  data,
  horizontal = false,
  minTickLabelXVerticalLength = DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  minTickLabelXHorizontalLength = DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH,
  minTickLabelYLength = DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  textRotationStep = DEFAULT_TEXT_ROTATION_STEP,
  height = 0,
  width = 0,
  padding = {},
  scaleX = 'linear',
  scaleY = 'linear',
  tickLetterSize = DEFAULT_LETTER_SIZE
}: useLabelAxisProps): {
  maxLabelXLength: number,
  maxLabelYLength: number,
  paddingWithLabel: BlockProps,
  angle: number,
  textAnchor: string,
  dy: number
} {
  return useMemo(() => {
    const categoriesTotal = getCategoriesFromData(data)
    const maxXTextLength = Math.max(...categoriesTotal.map((c) => c.toString().length))

    if (horizontal) {
      const minLabelXLength = Math.min(maxXTextLength, minTickLabelXHorizontalLength)
      const left = Math.max(minLabelXLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET)

      return {
        maxLabelXLength: minTickLabelXHorizontalLength,
        maxLabelYLength: minTickLabelYLength,
        paddingWithLabel: {
          ...padding,
          left: (padding.left ?? 0) + left,
          bottom: (padding.bottom ?? 0) + DEFAULT_BOTTOM_OFFSET
        },
        angle: 0,
        textAnchor: 'end',
        dy: 0
      }
    }

    const maxYTextLength = Math.max(
      ...data
        .map((d) =>
          d.data.map((d) => {
            const value = d.value
            if (isNil(value)) {
              return 0
            }
            return value.toString().length
          })
        )
        .flat()
    )
    const isScaleYLog = scaleY === 'log'
    const totalDotY = Math.floor(maxYTextLength / 3)
    const maxLabelYLength = Math.min(maxYTextLength + totalDotY + GUP_MAX_TICK_LABEL_Y_LENGTH, minTickLabelYLength)
    const left = Math.max(
      maxLabelYLength * tickLetterSize,
      isScaleYLog ? DEFAULT_LOG_LEFT_TEXT_OFFSET : DEFAULT_LEFT_TEXT_OFFSET
    )
    const range = Helpers.getRange({ height, width, padding: { ...padding, left: (padding.left ?? 0) + left } }, 'x')
    const { barWidth, gupBetweenBar } = getBarWidth(range, categoriesTotal.length)
    const labelGup = gupBetweenBar * DEFAULT_TICK_LABEL_OVERSIZE_RATIO
    const maxLabelXLength = Math.floor(
      Math.max((barWidth + labelGup) / tickLetterSize, Math.min(minTickLabelXVerticalLength, maxXTextLength))
    )
    const bottom = Math.max(maxLabelXLength * tickLetterSize, DEFAULT_BOTTOM_OFFSET)
    const labelWidth = Math.floor(tickLetterSize * maxLabelXLength)

    if (barWidth + labelGup >= labelWidth || scaleX === 'time') {
      return {
        maxLabelXLength,
        maxLabelYLength: minTickLabelYLength,
        paddingWithLabel: {
          ...padding,
          bottom: (padding.bottom ?? 0) + DEFAULT_BOTTOM_OFFSET,
          left: (padding.left ?? 0) + left
        },
        angle: 0,
        textAnchor: 'middle',
        dy: 0
      }
    }

    const b = barWidth + textRotationStep
    const c = labelWidth
    const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))
    const angle = Math.min((Math.atan(a / b) * 180) / Math.PI || 0, DEFAULT_MAX_LABEL_ANGLE)

    return {
      maxLabelXLength,
      maxLabelYLength: minTickLabelYLength,
      paddingWithLabel: { ...padding, bottom: (padding.bottom ?? 0) + bottom, left: (padding.left ?? 0) + left },
      angle: -angle,
      textAnchor: angle > 0 ? 'end' : 'middle',
      dy: angle > 60 ? -6 : 0
    }
  }, [
    horizontal,
    minTickLabelXHorizontalLength,
    minTickLabelXVerticalLength,
    minTickLabelYLength,
    textRotationStep,
    data,
    height,
    width,
    padding,
    scaleX,
    scaleY
  ])
}
