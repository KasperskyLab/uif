import React, { memo, ReactElement, useMemo } from 'react'
import { ForAxes, PaddingType, VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryStack } from 'victory'

import {
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  DEFAULT_X,
  DEFAULT_Y
} from '../../../constants'
import { getPaddings } from '../../../helpers/getPaddings'
import { getColorFromPalette } from '../../../helpers/getPalette'
import { tickNumberFormat, wrapCustomTickFormat } from '../../../helpers/tickFormat'
import { timeScaleTickFormat } from '../../../helpers/timeScaleTickFormat'
import { CustomTheme, useChartTheme } from '../../../hooks/useChartTheme'
import { useCommonEvents } from '../../../hooks/useCommonEvents'
import { useStackedData } from '../../../hooks/useStackedData'
import { useLocale } from '../../../l10n/hooks/useLocale'
import { BaseChartProps } from '../../../types/chart'
import { IStackedChartData } from '../../../types/chartData'
import { TChartEventCallback } from '../../../types/chartEvent'
import { OptionalProperty } from '../../../types/utils'
import { AxisLabel } from '../../AxisLabel'
import { ChartTooltipContent } from '../../ChartTooltipContent/ChartTooltipContent'
import { ChartTooltipWrapper } from '../../ChartTooltipWrapper'
import { ChartTooltipWrapperProps } from '../../ChartTooltipWrapper/ChartTooltipWrapper'
import { SCALE_TOP_OFFSET } from '../../StackedBarChart/constants'

import { ContainerTimelineBarChart, ContainerTimelineBarChartProps } from './ContainerTimelineBarChart'

export type TimelineBarChartProps<T = any> = OptionalProperty<Omit<ContainerTimelineBarChartProps, 'padding' | 'domain'> &
  Pick<
      ChartTooltipWrapperProps, 'tooltipDateFormat'
    > &
  BaseChartProps & {
    domain?: [Date, Date],
    theme?: CustomTheme,
    yScale?: 'linear' | 'sqrt' | 'log',
    yMin?: number,
    yMax?: number,
    showTooltip?: boolean,
    totalLabel?: string,
    showTotal?: boolean,
    data: IStackedChartData<T>,
    chartAfter?: ReactElement | ReactElement[],
    otherLabel?: string,
    maxTooltipItems?: number,
    onClickData?: TChartEventCallback<T>,
    onHoverData?: TChartEventCallback<T>,
    onLeaveData?: TChartEventCallback<T>,
    onMoveData?: TChartEventCallback<T>
  }, 'xTickFormat' | 'yTickFormat'>;

function GenericTimelineBarChart<T> ({
  data,
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
  horizontal = false,
  showTotal,
  totalLabel,
  padding,
  colors,
  yMin,
  yMax,
  yScale = 'linear',
  isStack100: isStack100Prop = false,
  minTickLabelXLength = DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  minTickLabelYLength = DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  standalone = true,
  domain,
  timeScaleInterval,
  showTooltip = true,
  chartAfter,
  otherLabel,
  tickLetterSize,
  maxTooltipItems,
  tooltipDateFormat,
  xTickFormat,
  yTickFormat = tickNumberFormat,
  onClickData,
  onHoverData,
  onLeaveData,
  onMoveData
}: TimelineBarChartProps<T>) {
  const isStack100 = isStack100Prop && data.length > 1
  const events = useCommonEvents(onClickData, onHoverData, onLeaveData, onMoveData)
  const groupedData = useStackedData(data, isStack100)
  const chartTheme = useChartTheme(colors)
  const themeLabelPaddings = getPaddings(chartTheme?.chart?.padding)
  const chartPadding = useMemo(() => ({ ...themeLabelPaddings, ...padding }), [padding, themeLabelPaddings])
  const locale = useLocale()
  const xTickFormatWithLocale = useMemo(() => xTickFormat ? wrapCustomTickFormat(xTickFormat) : timeScaleTickFormat(locale), [locale, xTickFormat])
  const domainPadding = useMemo(() => ({ y: [0, horizontal ? width * SCALE_TOP_OFFSET : height * SCALE_TOP_OFFSET] }) as ForAxes<PaddingType>, [horizontal, width, height])

  return (
    <VictoryChart
      theme={chartTheme}
      height={height}
      width={width}
      horizontal={horizontal}
      standalone={standalone}
      scale={{ y: yScale, x: 'time' }}
      domain={{ x: domain }}
      maxDomain={{ y: yMax || undefined }}
      minDomain={{ y: yMin || undefined }}
      padding={chartPadding}
      domainPadding={domainPadding}
      containerComponent={
        <ContainerTimelineBarChart
          minTickLabelXLength={minTickLabelXLength}
          minTickLabelYLength={minTickLabelYLength}
          singleQuadrantDomainPadding
          timeScaleInterval={timeScaleInterval}
          tickLetterSize={tickLetterSize}
          xTickFormat={xTickFormatWithLocale}
          yTickFormat={yTickFormat}
        />
      }
    >
      <VictoryAxis fixLabelOverlap tickFormat={xTickFormatWithLocale} axisComponent={<></>} />
      <VictoryAxis tickLabelComponent={<AxisLabel />} dependentAxis tickFormat={yTickFormat} crossAxis={false} />
      <VictoryGroup events={events}>
        {groupedData.map(([name, data]) => (
          <VictoryStack key={name}>
            {data.map(({ name, data: barData, color, opacity }, idx) => (
              <VictoryBar
                key={name}
                labelComponent={
                  showTooltip
                    ? (
                    <ChartTooltipWrapper
                      totalLabel={totalLabel}
                      showTotal={showTotal}
                      theme={chartTheme}
                      data={data}
                      tooltipContentComponent={ChartTooltipContent}
                      tooltipDateFormat={tooltipDateFormat}
                      otherLabel={otherLabel}
                      maxTooltipItems={maxTooltipItems}
                      xScale="time"
                    />
                      )
                    : (
                    <></>
                      )
                }
                labels={(d) => `${name}: ${d.datum.originalPayload || d.datum[DEFAULT_Y]}`}
                x={DEFAULT_X}
                y={DEFAULT_Y}
                data={barData}
                alignment="start"
                style={{
                  data: {
                    fill: ({ datum }) => datum.color || color || getColorFromPalette(chartTheme.bar.colorScale, idx),
                    opacity
                  }
                }}
              />
            ))}
          </VictoryStack>
        ))}
      </VictoryGroup>
      {chartAfter}
    </VictoryChart>
  )
}

export const TimelineBarChart = memo(GenericTimelineBarChart) as typeof GenericTimelineBarChart
