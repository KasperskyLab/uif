import clsx from 'clsx'
import { get } from 'lodash'
import React, { memo, ReactElement, useMemo } from 'react'
import { VictoryAxis, VictoryBar, VictoryBarProps, VictoryChart, VictoryGroup, VictoryStack } from 'victory'

import {
  DEFAULT_BAR_WIDTH,
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  DEFAULT_X,
  DEFAULT_Y
} from '../../../constants'
import { getPaddings } from '../../../helpers/getPaddings'
import { getColorFromPalette } from '../../../helpers/getPalette'
import { tickNumberFormat } from '../../../helpers/tickFormat'
import { useChartTheme } from '../../../hooks/useChartTheme'
import { useCommonEvents } from '../../../hooks/useCommonEvents'
import { useStackedData } from '../../../hooks/useStackedData'
import { BaseChartProps } from '../../../types/chart'
import { IStackedChartData } from '../../../types/chartData'
import { TChartEventCallback } from '../../../types/chartEvent'
import { AxisLabel } from '../../AxisLabel'
import { ChartTooltipWrapper } from '../../ChartTooltipWrapper'
import { Container } from '../../Container/Container'
import { DEFAULT_DISTANCE_BETWEEN_BARS_IN_GROUP, DEFAULT_MAX_DISTANCE_BETWEEN_BAR_GROUPS, DEFAULT_MAX_DISTANCE_BETWEEN_BARS, DEFAULT_MIN_DISTANCE_BETWEEN_BAR_GROUPS, DEFAULT_MIN_DISTANCE_BETWEEN_BARS } from '../constants'
import { useAxisLabelPadding } from '../hooks/useAxisLabelPadding'
import { useCornerRadius } from '../hooks/useCornerRadius'
import styles from '../stackedBar.module.scss'

const SCROLL_OFFSET = 14

export type StackedBarChartProps<T = unknown> = BaseChartProps & Pick<VictoryBarProps, 'cornerRadius'> & {
  data: IStackedChartData<T>,
  horizontal?: boolean,
  isStack100?: boolean,
  showTooltip?: boolean,
  totalLabel?: string,
  showTotal?: boolean,
  yMin?: number,
  yMax?: number,
  yScale?: 'linear' | 'sqrt' | 'log',
  distanceBetweenBar?: { min: number, max: number },
  distanceBetweenBarGroup?: { min: number, max: number },
  distanceBetweenBarInGroup?: number,
  minTickLabel?: { y: number, xVertical: number, xHorizontal: number },
  chartAfter?: ReactElement | ReactElement[],
  otherLabel?: string,
  maxTooltipItems?: number,
  tickLetterSize?: number,
  xTickFormat?: (tick: any, index?: number, ticks?: any[]) => string,
  yTickFormat?: (tick: any, index?: number, ticks?: any[]) => string,
  xTickHide?: boolean,
  yTickHide?: boolean,
  onClickData?: TChartEventCallback<T>,
  onHoverData?: TChartEventCallback<T>,
  onLeaveData?: TChartEventCallback<T>,
  onMoveData?: TChartEventCallback<T>
};

function GenericStackedBarChart<T> ({
  data,
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
  horizontal = false,
  showTotal,
  totalLabel,
  padding = {},
  colors,
  theme,
  yMin,
  yMax,
  yScale = 'linear',
  isStack100: isStack100Prop = false,
  showTooltip = false,
  minTickLabel: { y: minTickLabelYLength, xVertical: minTickLabelXVerticalLength, xHorizontal: minTickLabelXHorizontalLength } = {
    y: DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
    xVertical: DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
    xHorizontal: DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH
  },
  distanceBetweenBar: { min: minDistanceBetweenBar, max: maxDistanceBetweenBar } = { min: DEFAULT_MIN_DISTANCE_BETWEEN_BARS, max: DEFAULT_MAX_DISTANCE_BETWEEN_BARS },
  distanceBetweenBarGroup: { min: minGroupDistanceBetweenBar, max: maxGroupDistanceBetweenBar } = { min: DEFAULT_MIN_DISTANCE_BETWEEN_BAR_GROUPS, max: DEFAULT_MAX_DISTANCE_BETWEEN_BAR_GROUPS },
  distanceBetweenBarInGroup = DEFAULT_DISTANCE_BETWEEN_BARS_IN_GROUP,
  chartAfter,
  otherLabel,
  maxTooltipItems,
  tickLetterSize,
  cornerRadius,
  xTickFormat,
  yTickFormat = tickNumberFormat,
  xTickHide,
  yTickHide,
  onClickData,
  onHoverData,
  onLeaveData,
  onMoveData
}: StackedBarChartProps<T>) {
  const isStack100 = isStack100Prop && data.length > 1
  const events = useCommonEvents(onClickData, onHoverData, onLeaveData, onMoveData)
  const groupedData = useStackedData(data, isStack100, horizontal)
  const chartTheme = useChartTheme(colors, theme)
  const themeLabelPaddings = getPaddings(chartTheme.bar?.padding || chartTheme.chart?.padding)
  const chartPadding = useMemo(() => ({ ...themeLabelPaddings, ...padding }), [padding, themeLabelPaddings])
  const barWidth = DEFAULT_BAR_WIDTH
  const groupOffset = barWidth + distanceBetweenBarInGroup
  const {
    maxLabelXLength,
    maxLabelYLength,
    paddingWithLabel,
    angle,
    textAnchor,
    dy,
    dx,
    nearestSize,
    domainPadding,
    leftTextOffset
  } = useAxisLabelPadding({
    data: groupedData,
    padding: chartPadding,
    barWidth,
    distanceBetweenBarInGroup,
    maxDistanceBetweenBar,
    minDistanceBetweenBar,
    maxGroupDistanceBetweenBar,
    minGroupDistanceBetweenBar,
    horizontal,
    minTickLabelXVerticalLength,
    minTickLabelXHorizontalLength,
    minTickLabelYLength,
    valueFormat: yTickFormat,
    categoriesFormat: xTickFormat,
    tickLetterSize,
    height,
    width
  })

  const cornerRadiusObject = useCornerRadius(data)
  const scrollWidth = horizontal ? width : nearestSize
  const scrollHeight = horizontal ? nearestSize : height
  const stackComponents = useMemo(
    () => (
      <VictoryGroup events={events} offset={groupOffset}>
        {groupedData.map(([name, data]) => (
          <VictoryStack key={name}>
            {data.map(({ name, data: barData, color, opacity }, idx) => (
              <VictoryBar
                key={name}
                labelComponent={
                  showTooltip ? <ChartTooltipWrapper totalLabel={totalLabel} showTotal={showTotal} barWidth={barWidth} theme={chartTheme} data={data} otherLabel={otherLabel} maxTooltipItems={maxTooltipItems} /> : <></>
                }
                labels={(d) => `${name}: ${d.datum.originalPayload || d.datum[DEFAULT_Y]}`}
                x={DEFAULT_X}
                y={DEFAULT_Y}
                data={barData}
                alignment="start"
                barWidth={barWidth}
                cornerRadius={cornerRadius || cornerRadiusObject}
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
    ),
    [events, groupedData, showTooltip, chartTheme.bar.colorScale, groupOffset, barWidth, chartTheme]
  )

  const victoryChartProps = {
    theme: chartTheme,
    height: height,
    width: width,
    maxDomain: { y: yMax || undefined },
    minDomain: { y: yMin || undefined },
    horizontal,
    standalone: true,
    scale: { y: yScale },
    padding: paddingWithLabel,
    domainPadding,
    containerComponent: <Container />
  }

  if (horizontal && scrollHeight > height - (paddingWithLabel?.bottom || 0)) {
    const scrollbarTheme = {
      ...chartTheme,
      bar: {
        style: {
          data: { display: 'none' }
        }
      }
    }
    const padding = {
      ...paddingWithLabel,
      right: paddingWithLabel.right + SCROLL_OFFSET
    }

    return (
      <div className={styles.container} style={{ height, width }}>
        <div className={clsx(styles.containerFixed, styles.containerFixedY)}>
          <VictoryChart
            {...victoryChartProps}
            theme={scrollbarTheme}
            width={victoryChartProps.width - SCROLL_OFFSET}
            padding={padding}
          >
            <VictoryAxis tickLabelComponent={<></>} tickFormat={xTickFormat} axisComponent={<></>} />
            <VictoryAxis
              tickLabelComponent={<AxisLabel maxLength={maxLabelYLength} />}
              dependentAxis
              tickFormat={yTickFormat}
              crossAxis={false}
            />
            {stackComponents}
          </VictoryChart>
        </div>

        <div
          className={clsx(styles.containerGraph, styles.containerGraphScrollY)}
          style={{ height: height - padding.bottom }}
        >
          <VictoryChart
            {...victoryChartProps}
            height={scrollHeight}
            width={victoryChartProps.width - SCROLL_OFFSET}
            padding={{ ...padding, bottom: 0, top: 0 }}
          >
            <VictoryAxis
              tickLabelComponent={
                <AxisLabel maxLength={maxLabelXLength} angle={angle} textAnchor={textAnchor} dy={dy} dx={dx} />
              }
              axisComponent={<></>}
              tickFormat={xTickFormat}
            />
            {stackComponents}
            {chartAfter}
          </VictoryChart>
        </div>
      </div>
    )
  }

  if (!horizontal && scrollWidth > width - (paddingWithLabel?.left || 0)) {
    const scrollbarTheme = {
      ...chartTheme,
      bar: {
        style: {
          data: { display: 'none' }
        }
      }
    }
    const padding = {
      ...paddingWithLabel,
      bottom: paddingWithLabel.bottom + SCROLL_OFFSET
    }

    return (
      <div className={styles.container} style={{ height, width }}>
        <div className={clsx(styles.containerFixed, styles.containerFixedY)}>
          <VictoryChart {...victoryChartProps} theme={scrollbarTheme} padding={padding}>
            <VictoryAxis tickLabelComponent={<></>} tickFormat={xTickFormat} axisComponent={<></>} />
            <VictoryAxis
              tickLabelComponent={<AxisLabel maxLength={maxLabelYLength} />}
              dependentAxis
              tickFormat={yTickFormat}
              crossAxis={false}
            />
            {stackComponents}
          </VictoryChart>
        </div>

        <div
          className={clsx(styles.containerGraph, styles.containerGraphScrollX)}
          style={{ marginLeft: padding.left, width: width - padding.left }}
        >
          <VictoryChart
            {...victoryChartProps}
            width={scrollWidth + leftTextOffset}
            padding={{ ...padding, left: leftTextOffset, right: 0 }}
          >
            <VictoryAxis
              tickLabelComponent={
                <AxisLabel maxLength={maxLabelXLength} angle={angle} textAnchor={textAnchor} dy={dy} dx={dx} />
              }
              axisComponent={<></>}
              tickFormat={xTickFormat}
            />
            {stackComponents}
            {chartAfter}
          </VictoryChart>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container} style={{ height, width }}>
      <VictoryChart {...victoryChartProps}>
        <VictoryAxis
          tickLabelComponent={
            xTickHide ? <></> : <AxisLabel maxLength={maxLabelXLength} angle={angle} textAnchor={textAnchor} dy={dy} dx={dx} />
          }
          tickFormat={xTickFormat}
          axisComponent={<></>}
        />
        <VictoryAxis
          tickLabelComponent={yTickHide ? <></> : <AxisLabel maxLength={maxLabelYLength} />}
          tickFormat={yTickFormat}
          dependentAxis
          crossAxis={false}
        />
        {stackComponents}
        {chartAfter}
      </VictoryChart>
    </div>
  )
}

export const StackedBarChart = memo(GenericStackedBarChart) as typeof GenericStackedBarChart
