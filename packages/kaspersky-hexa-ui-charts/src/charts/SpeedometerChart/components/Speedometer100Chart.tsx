import React, { FC, useMemo } from 'react'

import { calculatePercentage } from '../../../vendor/Gauge/hooks/utils'

import { SpeedometerChart, SpeedometerChartProps } from './SpeedometerChart'

export type Speedometer100ChartProps = SpeedometerChartProps & {
  minValue?: number,
  maxValue: number
};

export const Speedometer100Chart: FC<Speedometer100ChartProps> = ({
  ticksGroup = 10,
  ticksUnitInGroup = 10,
  value = 0,
  minValue = 0,
  maxValue,
  segments = [0, 30, 70, 100],
  showLabels = 'bySegments',
  ...props
}) => {
  const value100: number = useMemo(() => {
    try {
      const percents = calculatePercentage(minValue, maxValue, value) * 100
      if (isNaN(percents)) {
        return 0
      }

      return percents
    } catch (e) {
      return 0
    }
  }, [minValue, maxValue, value])

  return (
    <SpeedometerChart
      ticksGroup={ticksGroup}
      ticksUnitInGroup={ticksUnitInGroup}
      segments={segments}
      showLabels={showLabels}
      {...props}
      value={value100}
    />
  )
}
