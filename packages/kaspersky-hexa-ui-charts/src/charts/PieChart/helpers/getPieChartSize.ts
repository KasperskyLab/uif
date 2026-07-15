import { BlockProps } from 'victory'

import {
  PIE_CHART_SIZE_BREAKPOINTS,
  PIE_CHART_SIZE_CONFIG,
  PIE_CHART_ZERO_PADDING
} from '../constants'
import type { PieChartSize } from '../constants'

type PieChartSizeParams = {
  width?: number,
  height?: number,
  size?: PieChartSize,
  padding?: BlockProps,
  innerRadiusRatio?: number
}

export const getPieChartSizeByContainerDimension = (dimension: number): PieChartSize => {
  if (dimension >= PIE_CHART_SIZE_BREAKPOINTS.large) {
    return 'large'
  }

  if (dimension >= PIE_CHART_SIZE_BREAKPOINTS.medium) {
    return 'medium'
  }

  return 'small'
}

export const getPieChartSize = ({
  width: widthProp,
  height: heightProp,
  size,
  padding,
  innerRadiusRatio: innerRadiusRatioProp
}: PieChartSizeParams) => {
  const defaultDimension = PIE_CHART_SIZE_CONFIG.large.dimension
  const width = widthProp ?? (size ? PIE_CHART_SIZE_CONFIG[size].dimension : defaultDimension)
  const height = heightProp ?? (size ? PIE_CHART_SIZE_CONFIG[size].dimension : defaultDimension)
  const effectiveSize = size ?? getPieChartSizeByContainerDimension(Math.min(width, height))
  const effectiveSizeConfig = PIE_CHART_SIZE_CONFIG[effectiveSize]
  const pieDimension = effectiveSizeConfig.dimension
  const chartPadding = padding ?? PIE_CHART_ZERO_PADDING
  const chartRadius = pieDimension / 2
  const innerRadiusRatio = innerRadiusRatioProp ?? effectiveSizeConfig.innerRadiusRatio
  const cornerRadius = effectiveSizeConfig.cornerRadius
  const outlineWidth = effectiveSizeConfig.outlineWidth

  return {
    width,
    height,
    pieDimension,
    chartPadding,
    chartRadius,
    innerRadiusRatio,
    cornerRadius,
    outlineWidth
  }
}
