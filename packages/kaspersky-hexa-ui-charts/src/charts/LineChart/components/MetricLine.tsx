import React, { memo, MouseEventHandler } from 'react'
import { BlockProps, ScaleName } from 'victory'

import { CustomTheme } from '../../../hooks/useChartTheme'

export interface MetricLineProps {
  theme?: CustomTheme,
  padding?: BlockProps,
  height?: number,
  metricLineWidth?: number,
  xScale?: ScaleName,
  yScale?: ScaleName,
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const MetricLine: React.FC<MetricLineProps> = memo(({ theme, height = 0, metricLineWidth = 2, padding, onClick }) => (
  <div
    style={{
      height: height - (padding?.bottom || 0),
      width: metricLineWidth,
      background: theme?.line.metricLineColor
    }}
    onClick={onClick}
  />
))
