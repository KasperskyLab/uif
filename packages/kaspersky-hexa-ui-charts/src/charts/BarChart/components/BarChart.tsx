import React from 'react'

import { StackedBarChart, StackedBarChartProps } from '../../StackedBarChart'
import { DEFAULT_BAR_CORNER_RADIUS } from '../../StackedBarChart/constants'
import { BAR_CHART_SIZE_CONFIG } from '../constants'
import type { BarChartSize } from '../constants'
import { getBarChartCornerRadius } from '../helpers'

export type BarChartProps<T = unknown> = StackedBarChartProps<T> & {
  size?: BarChartSize;
};

export function BarChart<T> ({
  size,
  barWidth,
  cornerRadius,
  axisTickLabelStyle,
  ...props
}: BarChartProps<T>): JSX.Element {
  if (size) {
    const sizeConfig = BAR_CHART_SIZE_CONFIG[size]

    return (
      <StackedBarChart
        {...props}
        barWidth={sizeConfig.barWidth}
        cornerRadius={getBarChartCornerRadius(sizeConfig.cornerRadius)}
        distanceBetweenBar={sizeConfig.distanceBetweenBar}
        distanceBetweenBarGroup={sizeConfig.distanceBetweenBarGroup}
        distanceBetweenBarInGroup={sizeConfig.distanceBetweenBarInGroup}
        tickLetterSize={sizeConfig.tickLetterSize}
        axisTickLabelStyle={{
          ...axisTickLabelStyle,
          fontSize: sizeConfig.axisFontSize
        }}
        minStartBarGap={sizeConfig.padding.min}
      />
    )
  }

  return (
    <StackedBarChart
      {...props}
      barWidth={barWidth}
      cornerRadius={cornerRadius ?? DEFAULT_BAR_CORNER_RADIUS}
    />
  )
}
