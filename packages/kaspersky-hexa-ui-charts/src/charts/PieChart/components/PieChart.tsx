import { isFunction } from 'lodash'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { CallbackArgs, SliceProps, VictoryContainer, VictoryLabel, VictoryPie } from 'victory'

import { H4 } from '@kaspersky/hexa-ui'

import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH, DEFAULT_X, DEFAULT_Y } from '../../../constants'
import { useChartTheme } from '../../../hooks/useChartTheme'
import { useCommonEvents } from '../../../hooks/useCommonEvents'
import { BaseChartProps } from '../../../types/chart'
import { IChartDataPoint } from '../../../types/chartData'
import { TChartEventCallback } from '../../../types/chartEvent'
import { PIE_CHART_CORNER_RADIUS, PIE_CHART_INNER_PAD_ANGLE, PIE_CHART_INNER_RADIUS_RATIO, PIE_CHART_RADIUS_HOVER_INCREASE } from '../constants'
import { usePieChartTextComponent } from '../hooks/usePieChartTextComponent'
import { useStandalonePie } from '../hooks/useStandalonePie'

import { ChartTooltipWrapper } from './ChartTooltipWrapper/ChartTooltipWrapper'
import { PieChartDataComponent } from './PieChartDataComponent'

export type InnerRadiusCallbackArgs = CallbackArgs & {
  radius?: number,
  origin?: { x: number, y: number }
};

export type PieChartProps<T> = BaseChartProps & {
  data: IChartDataPoint<T>[],
  showTotal?: boolean,
  showTooltip?: boolean,
  innerRadiusRatio?: number,
  padAngle?: number,
  description?: string,
  standalone?: boolean,
  onClickData?: TChartEventCallback<T>,
  onHoverData?: TChartEventCallback<T>,
  onLeaveData?: TChartEventCallback<T>,
  onMoveData?: TChartEventCallback<T>
};

function GenericPieChart<T> ({
  data,
  padding,
  innerRadiusRatio = PIE_CHART_INNER_RADIUS_RATIO,
  padAngle = PIE_CHART_INNER_PAD_ANGLE,
  showTooltip = false,
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
  showTotal = false,
  colors,
  theme,
  description,
  standalone = true,
  onClickData,
  onHoverData,
  onLeaveData,
  onMoveData
}: PieChartProps<T>) {
  const { data: innerStateData, onHover: handleOnHover, onLeave: handleOnLeave } = useStandalonePie(data, standalone, onHoverData, onLeaveData)

  const commonEvents = useCommonEvents(onClickData, handleOnHover, handleOnLeave, onMoveData)
  const chartTheme = useChartTheme(colors, theme)
  const { total, compactTotal } = useMemo(() => {
    let total = 0

    for (const record of innerStateData) {
      if (record.active) {
        total = record.value
        break
      }

      total += record.value
    }

    return { total, compactTotal: Intl.NumberFormat('en', { notation: 'compact' }).format(total) }
  }, [innerStateData])

  const innerRadius = useCallback(
    (d: InnerRadiusCallbackArgs) => (d.radius || (d?.origin?.x || 0) - 50) * innerRadiusRatio,
    [innerRadiusRatio]
  )

  const labelRadius = useCallback(
    (d: SliceProps) => {
      const innerRadius = isFunction(d?.innerRadius) ? d?.innerRadius?.(d) : d?.innerRadius || 0
      const radius = +(d.radius || 0) || (d?.origin?.x || 0) - 50

      return innerRadius + ((radius - innerRadius) / 2) + PIE_CHART_RADIUS_HOVER_INCREASE
    },
    []
  )

  const TextComponent = usePieChartTextComponent(width, height, total, innerRadiusRatio, description, padding)

  return (
    <VictoryContainer theme={chartTheme} width={width} height={height} style={{ width, height }}>
      <VictoryPie
        theme={chartTheme}
        data={innerStateData}
        height={height}
        width={width}
        x={DEFAULT_X}
        y={DEFAULT_Y}
        padding={padding}
        cornerRadius={PIE_CHART_CORNER_RADIUS}
        innerRadius={innerRadius}
        labelRadius={labelRadius}
        events={commonEvents}
        labelComponent={
          showTooltip ? <ChartTooltipWrapper theme={chartTheme} data={data} /> : <></>
        }
        padAngle={padAngle}
        standalone={false}
        dataComponent={<PieChartDataComponent />}
      />
      {showTotal
        ? (
        <VictoryLabel
          textAnchor="middle"
          style={{ ...chartTheme.labels?.style }}
          x={width / 2}
          y={height / 2}
          text={compactTotal}
          textComponent={<TextComponent />}
          tspanComponent={<H4 />}
        />
          )
        : (
        <></>
          )}
    </VictoryContainer>
  )
}

export const PieChart = memo(GenericPieChart) as typeof GenericPieChart
