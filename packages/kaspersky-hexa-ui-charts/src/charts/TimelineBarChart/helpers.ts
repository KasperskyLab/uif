import { get, isFunction, isNumber } from 'lodash'
import { BlockProps, DomainTuple } from 'victory'

import {
  DEFAULT_BAR_WIDTH,
  DEFAULT_BOTTOM_OFFSET,
  DEFAULT_INTERVAL_RATIO,
  DEFAULT_LEFT_TEXT_OFFSET,
  DEFAULT_LETTER_SIZE,
  DEFAULT_RIGHT_TEXT_OFFSET,
  DEFAULT_TIMELINE_DOMAIN_RATIO,
  DEFAULT_TOP_TEXT_OFFSET,
  MIN_TICK_TOTAL,
  TICK_COUNT_RATIO
} from '../../constants'
import { ContainerBaseProps, VictoryAxisElementProps } from '../../types/chart'

import { ContainerTimelineBarChartProps } from './components/ContainerTimelineBarChart'

export function getBarWidth ({
  domain,
  scale,
  timeScaleInterval = 0,
  axis = 'x',
  horizontal = false
}: {
  domain?: ContainerBaseProps['domain'],
  timeScaleInterval?: number,
  scale: ContainerBaseProps['scale'],
  axis?: 'x' | 'y',
  horizontal?: boolean
}): number {
  const scaleAxis = scale?.[axis]
  const domainX = get(domain, 'x') as unknown as DomainTuple

  if (!isFunction(scaleAxis) || !domainX) {
    console.error('wrong scale', scale)
    return DEFAULT_BAR_WIDTH
  }

  let width =
    scaleAxis(typeof domainX[0] === 'number' ? domainX[0] : domainX[0].getTime() + timeScaleInterval) -
    scaleAxis(domainX[0])

  width = horizontal ? -width : width

  return Math.max(Math.ceil(width - 1), 1)
}

export function getAxisLabelProps (
  { minTickLabelXLength = 0, minTickLabelYLength = 0, scale, xTickFormat, yTickFormat, tickLetterSize = DEFAULT_LETTER_SIZE }: ContainerTimelineBarChartProps,
  { horizontal, padding: paddingProps = {} }: VictoryAxisElementProps
): Pick<VictoryAxisElementProps, 'tickFormat' | 'tickCount'> & {
  maxLabelXLength: number,
  maxLabelYLength: number,
  paddingWithLabel: BlockProps
} {
  const padding = isNumber(paddingProps)
    ? { top: paddingProps, right: paddingProps, bottom: paddingProps, left: paddingProps }
    : paddingProps

  if (horizontal) {
    const maxLabelTicksYLength = Math.max(...(scale?.x?.ticks().map(xTickFormat).map((t) => t.toString().length) || []))
    const maxLabelYLength = Math.min(maxLabelTicksYLength, minTickLabelYLength)
    const left = Math.max(maxLabelYLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET)

    return {
      maxLabelXLength: minTickLabelXLength,
      maxLabelYLength: minTickLabelYLength,
      paddingWithLabel: {
        ...padding,
        left: (padding.left ?? 0) + left,
        bottom: (padding.bottom ?? 0) + DEFAULT_BOTTOM_OFFSET,
        right: Math.max(padding.right ?? 0, DEFAULT_RIGHT_TEXT_OFFSET)
      }
    }
  }

  const maxLabelTicksYLength = Math.max(...(scale?.y?.ticks().map(yTickFormat).map((t) => t.toString().length) || []))
  const maxLabelYLength = Math.min(maxLabelTicksYLength, minTickLabelYLength)
  const left = Math.max(maxLabelYLength * tickLetterSize, DEFAULT_LEFT_TEXT_OFFSET) + DEFAULT_LEFT_TEXT_OFFSET

  return {
    maxLabelXLength: minTickLabelXLength,
    maxLabelYLength: minTickLabelYLength,
    paddingWithLabel: {
      ...padding,
      top: Math.max(padding.top ?? 0, DEFAULT_TOP_TEXT_OFFSET),
      bottom: (padding.bottom ?? 0) + DEFAULT_BOTTOM_OFFSET,
      left: (padding.left ?? 0) + left,
      right: Math.max(padding.right ?? 0, DEFAULT_RIGHT_TEXT_OFFSET)
    }
  }
}

export function getTicksProp ({ horizontal, width = 0, height = 0, scale, xTickFormat }: ContainerTimelineBarChartProps): {
  tickCount: number,
  dependantTickCount: number
} {
  const dependantTickCount = Math.ceil(((horizontal ? width : height) || 0) / 75)
  const ticks = scale?.x?.ticks(1)

  if (!ticks || ticks.length === 0) {
    return { tickCount: 0, dependantTickCount: 0 }
  }

  const label = xTickFormat(ticks[0], 0, scale?.x?.ticks() || [])
  const tickCount = Math.max(Math.ceil(width / (TICK_COUNT_RATIO + label.length)), MIN_TICK_TOTAL)

  return { tickCount, dependantTickCount }
}

export function getDomainPadding ({
  horizontal,
  width = 0,
  height = 0,
  timeScaleInterval = 0
}: ContainerTimelineBarChartProps): {
  x: number
} {
  return {
    x:
      timeScaleInterval / DEFAULT_INTERVAL_RATIO +
      Math.pow((horizontal ? height : width) || 0, 2) * DEFAULT_TIMELINE_DOMAIN_RATIO
  }
}
