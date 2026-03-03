import { get, set } from 'lodash'
import React, { FC, memo, useMemo } from 'react'
import { ScaleName, VictoryTooltipProps } from 'victory'

import { CustomTheme } from '../../hooks/useChartTheme'
import { IChartDataPoint, IStackedChartData } from '../../types/chartData'
import { ChartTooltip } from '../ChartTooltip/ChartTooltip'
import { ChartTooltipContent, ChartTooltipContentProps } from '../ChartTooltipContent/ChartTooltipContent'

import styles from './ChartTooltipWrapper.module.scss'

export type ChartTooltipWrapperProps = Omit<VictoryTooltipProps, 'theme' | 'data'> & {
  data: IStackedChartData,
  theme?: CustomTheme,
  tooltipComponent?: FC,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  active?: boolean,
  barWidth?: number,
  otherLabel?: string,
  xScale?: ScaleName,
  maxTooltipItems?: number,
  totalLabel?: string,
  showTotal?: boolean,
  tooltipDateFormat?: (date: Date | number, supposedFormat: string) => string
};

export const ChartTooltipWrapper: React.FC<ChartTooltipWrapperProps> = memo(
  ({
    tooltipComponent: TooltipComponent = ChartTooltip,
    tooltipContentComponent = ChartTooltipContent,
    height = 0,
    width = 0,
    x = 0,
    y = 0,
    theme,
    active = false,
    datum,
    barWidth = 0,
    horizontal = false,
    data,
    index = 0,
    otherLabel,
    xScale,
    maxTooltipItems,
    showTotal,
    totalLabel,
    tooltipDateFormat
  }) => {
    const enrichedData = useMemo(
      () =>
        data.map((d) => {
          const bar = get(d.data, index) || {}

          return {
            ...d,
            ...bar,
            color: bar.color || d.color
          }
        }),
      [data, index]
    )

    const xTooltip = Math.min(Math.max(x + (horizontal ? 0 : barWidth / 2), 0), width)
    const yTooltip = Math.min(Math.max(y - (horizontal ? barWidth / 2 : 0), 0), height)

    return active
      ? (
      <foreignObject
        x={xTooltip}
        y={yTooltip}
        width={0}
        height={0}
        className={styles.foreignObjectContainer}
      >
        <TooltipComponent
          {...{
            height,
            width,
            tooltipContentComponent,
            activeRecord: datum as IChartDataPoint,
            enrichedData,
            theme,
            horizontal,
            otherLabel,
            tooltipDateFormat,
            maxTooltipItems,
            showTotal,
            totalLabel,
            xScale
          }}
        />
      </foreignObject>
        )
      : null
  }
)

ChartTooltipWrapper.displayName = 'ChartTooltipWrapper'

set(ChartTooltipWrapper, 'defaultEvents', () => {
  const activate = [{ target: 'labels', mutation: () => ({ active: true }) }]
  const deactivate = [{ target: 'labels', mutation: () => ({ active: undefined }) }]

  return [
    {
      target: 'data',
      eventHandlers: {
        onMouseOver: () => activate,
        onFocus: () => activate,
        onMouseOut: () => deactivate,
        onBlur: () => deactivate
      }
    }
  ]
})
