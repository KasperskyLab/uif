import { useMemo } from 'react'
import { BlockProps, DomainPaddingPropType } from 'victory'

import { DEFAULT_BOTTOM_OFFSET, DEFAULT_HORIZONTAL_BOTTOM_OFFSET, DEFAULT_HORIZONTAL_LEFT_OFFSET, DEFAULT_LEFT_TEXT_OFFSET, DEFAULT_LETTER_SIZE, DEFAULT_MAX_LABEL_ANGLE, DEFAULT_RIGHT_TEXT_OFFSET, DEFAULT_TEXT_ROTATION_STEP, DEFAULT_TICK_LABEL_OVERSIZE_RATIO, DEFAULT_TOP_TEXT_OFFSET, GUP_MAX_TICK_LABEL_Y_LENGTH, MIN_BOTTOM_OFFSET } from '../../../constants'
import { getCategoriesFromData } from '../../../helpers/getCategoriesFromData'
import { IGroupedStackedChartData } from '../../../types/chartData'
import { SCALE_TOP_OFFSET } from '../constants'
import { addDomainPadding, DELTA_GRAD, getNearestSize, getScaleByType, getTotalBarWith } from '../helpers'
import { DomainPadding } from '../types/domainPadding'

export function useAxisLabelPadding ({
  data, padding, categoriesFormat, valueFormat = (v: any): string => v, minTickLabelXHorizontalLength, horizontal, height, width, maxDistanceBetweenBar, minDistanceBetweenBar, maxGroupDistanceBetweenBar, minGroupDistanceBetweenBar, minTickLabelYLength, minTickLabelXVerticalLength, barWidth, distanceBetweenBarInGroup, yScale, tickLetterSize = DEFAULT_LETTER_SIZE
}: {
  data: IGroupedStackedChartData,
  padding: Required<BlockProps>,
  categoriesFormat?: (tick: any) => string,
  valueFormat?: (tick: any) => string,
  minTickLabelXHorizontalLength: number,
  horizontal: boolean,
  height: number,
  width: number,
  maxDistanceBetweenBar: number,
  minDistanceBetweenBar: number,
  maxGroupDistanceBetweenBar?: number,
  minGroupDistanceBetweenBar?: number,
  minTickLabelYLength: number,
  minTickLabelXVerticalLength: number,
  barWidth: number,
  distanceBetweenBarInGroup: number,
  yScale?: 'linear' | 'sqrt' | 'log',
  tickLetterSize?: number
}): {
  maxLabelXLength: number,
  maxLabelYLength: number,
  paddingWithLabel: Required<BlockProps>,
  angle: number,
  textAnchor: string,
  dy: number,
  dx: number,
  nearestSize: number,
  domainPadding: DomainPaddingPropType,
  leftTextOffset: number
} {
  return useMemo(() => {
    const totalBarWidth = getTotalBarWith(barWidth, distanceBetweenBarInGroup, data.length)
    const totalGroups = data.length
    const stackedData = data[0]?.[1]

    if (!stackedData) {
      return {
        maxLabelXLength: minTickLabelXVerticalLength,
        maxLabelYLength: minTickLabelYLength,
        paddingWithLabel: padding,
        angle: 0,
        textAnchor: 'middle',
        dy: 0,
        dx: totalBarWidth / 2,
        nearestSize: width,
        domainPadding: {},
        leftTextOffset: 0
      }
    }

    const categories = getCategoriesFromData(stackedData, categoriesFormat)
    const totalCategories = categories.length
    const maxXTextLength = Math.max(0, ...categories.map((c) => c.toString().length))
    const y = [0, horizontal ? width * SCALE_TOP_OFFSET : height * SCALE_TOP_OFFSET] as [number, number]

    if (horizontal) {
      const minLabelXLength = Math.min(maxXTextLength, minTickLabelXHorizontalLength)
      const left = Math.max(minLabelXLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET)
      const paddingWithLabel = {
        ...padding,
        left: padding.left + left + DEFAULT_HORIZONTAL_LEFT_OFFSET,
        bottom: padding.bottom + DEFAULT_HORIZONTAL_BOTTOM_OFFSET,
        right: Math.max(padding.right, DEFAULT_RIGHT_TEXT_OFFSET)
      }
      const { nearestSize } = getNearestSize({
        barSize: totalBarWidth,
        targetSize: height - paddingWithLabel.bottom,
        categories: totalCategories,
        maxDistanceBetweenBar,
        minDistanceBetweenBar,
        maxGroupDistanceBetweenBar,
        minGroupDistanceBetweenBar,
        startOffset: paddingWithLabel.top,
        totalGroups,
        withStartGup: false
      })
      let domainPadding: DomainPadding = { x: [0, 0], y }

      if (nearestSize < height - paddingWithLabel.bottom) {
        domainPadding = addDomainPadding(domainPadding, 0, height - nearestSize)
      } else {
        domainPadding = addDomainPadding(domainPadding, 0, paddingWithLabel.bottom + 2)
      }

      if (totalGroups > 1) {
        domainPadding = addDomainPadding(domainPadding, totalBarWidth / 4, totalBarWidth / 4 + MIN_BOTTOM_OFFSET)
      }

      return {
        maxLabelXLength: minLabelXLength,
        maxLabelYLength: minTickLabelYLength,
        paddingWithLabel,
        angle: 0,
        textAnchor: 'end',
        dy: -totalBarWidth / (totalGroups > 1 ? 2 + totalGroups : 1 + totalGroups),
        dx: 0,
        nearestSize,
        domainPadding,
        leftTextOffset: 0
      }
    }

    const scale = getScaleByType(
      yScale,
      [0, height],
      [0, ...stackedData.map((d) => d.data.map((point) => point.value)).flat()]
    )
    const maxYTextLength = Math.max(...scale.ticks().map((point) => valueFormat(point).toString().length))
    const maxLabelYLength = Math.min(maxYTextLength + GUP_MAX_TICK_LABEL_Y_LENGTH, minTickLabelYLength)
    const left = maxLabelYLength * tickLetterSize + DEFAULT_LEFT_TEXT_OFFSET
    const paddingWithLabel: Required<BlockProps> = {
      ...padding,
      top: Math.max(padding.top, DEFAULT_TOP_TEXT_OFFSET),
      left: padding.left + left,
      right: Math.max(padding.right, DEFAULT_RIGHT_TEXT_OFFSET)
    }
    const { nearestSize, distanceBetweenBar } = getNearestSize({
      barSize: totalBarWidth,
      targetSize: width - paddingWithLabel.left,
      categories: totalCategories,
      maxDistanceBetweenBar,
      minDistanceBetweenBar,
      maxGroupDistanceBetweenBar,
      minGroupDistanceBetweenBar,
      totalGroups,
      withStartGup: true
    })
    let domainPadding: DomainPadding = { x: [distanceBetweenBar, 0], y }

    if (nearestSize <= width - paddingWithLabel.left) {
      domainPadding = addDomainPadding(
        domainPadding,
        0,
        width - paddingWithLabel.left - nearestSize + distanceBetweenBar
      )
    } else {
      domainPadding = addDomainPadding(domainPadding, 0, totalGroups > 1 ? totalBarWidth / 2 : totalBarWidth)
    }

    if (totalGroups > 1) {
      domainPadding = addDomainPadding(domainPadding, totalBarWidth / 4, totalBarWidth / 4)
    }

    const labelGup = distanceBetweenBar * DEFAULT_TICK_LABEL_OVERSIZE_RATIO
    const maxLabelXLength = Math.floor(
      Math.max((totalBarWidth + labelGup) / tickLetterSize, Math.min(minTickLabelXVerticalLength, maxXTextLength))
    )
    const labelWidth = Math.floor(tickLetterSize * maxLabelXLength)

    if (totalBarWidth + labelGup >= labelWidth) {
      return {
        maxLabelXLength,
        maxLabelYLength: minTickLabelYLength,
        paddingWithLabel: {
          ...paddingWithLabel,
          bottom: paddingWithLabel.bottom + DEFAULT_BOTTOM_OFFSET
        },
        angle: 0,
        textAnchor: 'middle',
        dy: 0,
        dx: totalBarWidth / (totalGroups > 1 ? 2 + totalGroups : 1 + totalGroups),
        nearestSize,
        domainPadding,
        leftTextOffset: 0
      }
    }

    const b = totalBarWidth + DEFAULT_TEXT_ROTATION_STEP
    const c = labelWidth
    const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))
    const angle = Math.min((Math.atan(a / b) * 180) / Math.PI || 0, DEFAULT_MAX_LABEL_ANGLE)

    const bottom = Math.max(labelWidth * Math.cos(((angle + DELTA_GRAD) * Math.PI) / 180), DEFAULT_BOTTOM_OFFSET)
    const leftTextOffset = labelWidth * Math.sin(((angle + DELTA_GRAD) * Math.PI) / 180)

    const paddingWithBottom = {
      ...paddingWithLabel,
      left: Math.max(bottom / 1.8, paddingWithLabel.left),
      bottom: Math.max(paddingWithLabel.bottom + bottom, DEFAULT_BOTTOM_OFFSET)
    }

    return {
      maxLabelXLength,
      maxLabelYLength: minTickLabelYLength,
      paddingWithLabel: paddingWithBottom,
      angle: -angle,
      textAnchor: angle > 0 ? 'end' : 'middle',
      dy: angle > 60 ? -6 : 8,
      dx: 16 / (angle * 0.06),
      nearestSize,
      domainPadding,
      leftTextOffset
    }
  }, [
    yScale,
    data,
    padding,
    categoriesFormat,
    valueFormat,
    minTickLabelXHorizontalLength,
    horizontal,
    height,
    width,
    maxDistanceBetweenBar,
    minDistanceBetweenBar,
    maxGroupDistanceBetweenBar,
    minGroupDistanceBetweenBar,
    minTickLabelYLength,
    minTickLabelXVerticalLength,
    barWidth,
    distanceBetweenBarInGroup,
    tickLetterSize
  ])
}
