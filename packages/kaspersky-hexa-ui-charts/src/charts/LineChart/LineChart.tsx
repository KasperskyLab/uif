import React, { memo, ReactElement, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  DomainPropType,
  ScaleName,
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryVoronoiContainerProps
} from 'victory'

import {
  ALL_DATA_FIELD,
  DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  DEFAULT_X,
  DEFAULT_Y,
  LINE_CHART_SCATTER_LAYER_NAME
} from '../../constants'
import { getPaddings } from '../../helpers/getPaddings'
import { getColorFromPalette } from '../../helpers/getPalette'
import { tickNumberOrDateFormat, wrapCustomTickFormat } from '../../helpers/tickFormat'
import { useChartTheme } from '../../hooks/useChartTheme'
import { useCommonEvents } from '../../hooks/useCommonEvents'
import { useDynamicTickCount } from '../../hooks/useDynamicTickCount'
import { useLocale } from '../../l10n/hooks/useLocale'
import { BaseChartProps } from '../../types/chart'
import { IStackedChartData } from '../../types/chartData'
import { TChartEventCallback } from '../../types/chartEvent'
import { AxisLabel } from '../AxisLabel'

import { ChartTooltipWrapper, ChartTooltipWrapperProps } from './components/ChartTooltipWrapper/ChartTooltipWrapper'
import { MAX_LINES_FOR_GRADIENT } from './constants'
import { getGlobalId } from './helpers'
import styles from './line.module.scss'

const DEFAULT_LABELS_PROP: VictoryVoronoiContainerProps['labels'] = (a) => a

export type LineChartProps<T = unknown> = BaseChartProps &
  Pick<
    ChartTooltipWrapperProps,
    'tooltipComponent' | 'lineComponent' | 'tooltipContentComponent' | 'metricLineWidth' | 'tooltipDateFormat'
  > & {
    data: IStackedChartData<T>,
    xMin?: number,
    xMax?: number,
    yMin?: number,
    yMax?: number,
    totalLabel?: string,
    showTotal?: boolean,
    lineWidth?: number,
    pointSize?: number,
    xScale?: ScaleName,
    yScale?: ScaleName,
    chartAfter?: ReactElement | ReactElement[],
    minTickLabelYLength?: number,
    yFixLabelOverlap?: boolean,
    xTickFormat?: (tick: any, index: number, ticks: any[], supposedFormat?: string) => string,
    yTickFormat?: (tick: any, index: number, ticks: any[]) => string,
    yTickCount?: number,
    showTooltip?: boolean,
    gradient?: boolean,
    maxLinesForGradient?: number,
    domain?: DomainPropType,
    otherLabel?: string,
    tickLetterSize?: number,
    onClickData?: TChartEventCallback<T>,
    onHoverData?: TChartEventCallback<T>,
    onLeaveData?: TChartEventCallback<T>,
    onMoveData?: TChartEventCallback<T>
  };

function GenericLineChart<T> ({
  data,
  padding,
  lineWidth,
  pointSize = 0,
  xMax,
  xMin,
  yMax,
  yMin,
  showTotal,
  totalLabel,
  width = 400,
  height = 400,
  xScale = 'linear',
  yScale = 'linear',
  metricLineWidth,
  colors,
  theme,
  standalone = true,
  minTickLabelYLength = DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  yFixLabelOverlap,
  yTickCount,
  xTickFormat,
  yTickFormat,
  showTooltip,
  gradient,
  maxLinesForGradient = MAX_LINES_FOR_GRADIENT,
  tooltipComponent,
  lineComponent,
  tooltipContentComponent,
  chartAfter,
  domain,
  otherLabel,
  tickLetterSize,
  tooltipDateFormat,
  onClickData,
  onHoverData,
  onLeaveData,
  onMoveData
}: LineChartProps<T>) {
  const events = useCommonEvents<T>(undefined, onHoverData, onLeaveData, onMoveData)
  const chartTheme = useChartTheme(colors, theme)
  const themeLabelPaddings = getPaddings(chartTheme.line?.padding || chartTheme.chart?.padding)
  const chartPadding = useMemo(() => ({ ...themeLabelPaddings, ...padding }), [padding, themeLabelPaddings])
  const gradientId = useMemo(uuidv4, [])
  const dataWithAllData = useMemo(
    () => data.map((stack) => ({ ...stack, data: stack.data.map((d) => ({ ...d, [ALL_DATA_FIELD]: stack })) })),
    [data]
  )
  const locale = useLocale()
  const { xTickFormatWithLocale, yTickFormatWithLocale } = useMemo(() => ({ xTickFormatWithLocale: xTickFormat ? wrapCustomTickFormat(xTickFormat) : tickNumberOrDateFormat(locale), yTickFormatWithLocale: yTickFormat || tickNumberOrDateFormat(locale) }), [locale, xTickFormat, yTickFormat])
  const showGradient = gradient && dataWithAllData.length <= maxLinesForGradient
  const { paddingWithLabel, maxYTextLength, xTickCount } = useDynamicTickCount(
    dataWithAllData,
    width,
    minTickLabelYLength,
    chartPadding,
    xTickFormatWithLocale,
    yTickFormatWithLocale,
    (v: Date): string => v.toString(),
    tickLetterSize
  )

  return (
    <>
      {showGradient && (
        <svg className={styles.svgGradient}>
          <defs>
            {dataWithAllData.map(({ color }, idx) => {
              const currentColor = color || getColorFromPalette(chartTheme.line.colorScale, idx)

              return (
                <linearGradient id={`${getGlobalId(gradientId, idx)}`} x1="0" x2="0" y1="1" y2="0" key={idx}>
                  <stop offset="0" stopOpacity={0} stopColor={currentColor} />
                  <stop offset="100%" stopOpacity={0.4} stopColor={currentColor} />
                </linearGradient>
              )
            })}
          </defs>
        </svg>
      )}
      <VictoryChart
        containerComponent={
          showTooltip
            ? (
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={DEFAULT_LABELS_PROP}
              labelComponent={
                <ChartTooltipWrapper
                  totalLabel={totalLabel}
                  showTotal={showTotal}
                  tooltipComponent={tooltipComponent}
                  lineComponent={lineComponent}
                  tooltipContentComponent={tooltipContentComponent}
                  metricLineWidth={metricLineWidth}
                  padding={paddingWithLabel}
                  xScale={xScale}
                  yScale={yScale}
                  otherLabel={otherLabel}
                  tooltipDateFormat={tooltipDateFormat}
                  onClick={onClickData}
                />
              }
            />
              )
            : undefined
        }
        width={width}
        height={height}
        theme={chartTheme}
        padding={paddingWithLabel}
        domain={domain}
        maxDomain={{ x: xMax || undefined, y: yMax || undefined }}
        minDomain={{ x: xMin || undefined, y: yMin || undefined }}
        scale={{ x: xScale, y: yScale }}
        events={events}
        standalone={standalone}
        horizontal={false}
      >
        <VictoryAxis tickFormat={xTickFormatWithLocale} tickCount={xTickCount} axisComponent={<></>} />
        <VictoryAxis
          dependentAxis
          tickLabelComponent={<AxisLabel maxLength={maxYTextLength} />}
          fixLabelOverlap={yFixLabelOverlap ?? true}
          tickFormat={yTickFormatWithLocale}
          tickCount={yTickCount}
        />
        {dataWithAllData.map(({ name, data, color }, idx) => {
          const currentColor = color || getColorFromPalette(chartTheme.line.colorScale, idx)

          return [
            <VictoryArea
              key={name}
              x={DEFAULT_X}
              y={DEFAULT_Y}
              data={data}
              style={{
                data: {
                  fill: showGradient ? `url(#${getGlobalId(gradientId, idx)})` : 'none',
                  stroke: currentColor,
                  strokeWidth: lineWidth
                }
              }}
            />,
            pointSize
              ? (
              <VictoryScatter
                name={LINE_CHART_SCATTER_LAYER_NAME}
                key={name}
                data={data}
                x={DEFAULT_X}
                y={DEFAULT_Y}
                size={(d) => (d.active ? pointSize * 1.5 : pointSize)}
                style={{
                  data: {
                    fill: currentColor
                  }
                }}
              />
                )
              : null
          ]
        })}
        {chartAfter}
      </VictoryChart>
    </>
  )
}

export const LineChart = memo(GenericLineChart) as typeof GenericLineChart
