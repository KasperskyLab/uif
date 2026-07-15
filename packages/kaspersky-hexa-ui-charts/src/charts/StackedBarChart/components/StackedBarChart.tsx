import clsx from 'clsx'
import React, { CSSProperties, memo, ReactElement, useCallback, useMemo } from 'react'
import { VictoryAxis, VictoryBar, VictoryBarProps, VictoryChart, VictoryGroup, VictoryStack } from 'victory'

import { Scrollbar } from '@kaspersky/hexa-ui'

import {
  DEFAULT_BAR_WIDTH,
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
  DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
  DEFAULT_SIDE_LABEL_OFFSET,
  DEFAULT_X,
  DEFAULT_Y
} from '../../../constants'
import { getFontFamily } from '../../../helpers/getFontFamily'
import { getPaddings } from '../../../helpers/getPaddings'
import { getColorFromPalette } from '../../../helpers/getPalette'
import { tickNumberFormat } from '../../../helpers/tickFormat'
import { useChartTheme } from '../../../hooks/useChartTheme'
import { useCommonEvents } from '../../../hooks/useCommonEvents'
import { useStackedData } from '../../../hooks/useStackedData'
import { BaseChartProps } from '../../../types/chart'
import { IStackedChartData } from '../../../types/chartData'
import { TChartEventCallback } from '../../../types/chartEvent'
import { AxisGridX } from '../../AxisGridX'
import { AxisGridY } from '../../AxisGridY'
import { AxisLabel } from '../../AxisLabel'
import { AxisSide } from '../../AxisSide'
import { ChartTooltipWrapper } from '../../ChartTooltipWrapper'
import { Container } from '../../Container/Container'
import { TickSideLabel } from '../../TickSideLabel'
import {
  DEFAULT_DISTANCE_BETWEEN_BARS_IN_GROUP,
  DEFAULT_MAX_DISTANCE_BETWEEN_BAR_GROUPS,
  DEFAULT_MAX_DISTANCE_BETWEEN_BARS,
  DEFAULT_MIN_DISTANCE_BETWEEN_BAR_GROUPS,
  DEFAULT_MIN_DISTANCE_BETWEEN_BARS
} from '../constants'
import { useAxisLabelPadding } from '../hooks/useAxisLabelPadding'
import { useCornerRadius } from '../hooks/useCornerRadius'
import { useSideAxis } from '../hooks/useSideAxis'
import styles from '../stackedBar.module.scss'

const SCROLL_OFFSET = 14
const VICTORY_EMPTY_LABEL_RENDER_TRIGER = () => ' '

export type StackedBarChartProps<T = unknown> = BaseChartProps &
  Partial<Pick<VictoryBarProps, 'cornerRadius'>> & {
    data: IStackedChartData<T>
  stack100Precision?: number
    barWidth?: number
    horizontal?: boolean
    isStack100?: boolean
    showTooltip?: boolean
    showBarValues?: boolean
    showSideLabels?: boolean
    totalLabel?: string
    showTotal?: boolean
    yMin?: number
    yMax?: number
    yScale?: 'linear' | 'sqrt' | 'log'
    distanceBetweenBar?: { min: number; max: number }
    distanceBetweenBarGroup?: { min: number; max: number }
    distanceBetweenBarInGroup?: number
    minTickLabel?: { y: number; xVertical: number; xHorizontal: number }
    chartAfter?: ReactElement | ReactElement[]
    otherLabel?: string
    maxTooltipItems?: number
    tickLetterSize?: number
    axisTickLabelStyle?: CSSProperties
    minStartBarGap?: number
    xTickFormat?: (tick: any, index?: number, ticks?: any[]) => string
    yTickFormat?: (tick: any, index?: number, ticks?: any[]) => string
    xTickHide?: boolean
    yTickHide?: boolean
    onClickData?: TChartEventCallback<T>
    onHoverData?: TChartEventCallback<T>
    onLeaveData?: TChartEventCallback<T>
    onMoveData?: TChartEventCallback<T>
  }

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
  stack100Precision,
  showTooltip = false,
  showBarValues = false,
  showSideLabels: showSideLabelsProp = false, 
  minTickLabel: {
    y: minTickLabelYLength,
    xVertical: minTickLabelXVerticalLength,
    xHorizontal: minTickLabelXHorizontalLength
  } = {
    y: DEFAULT_MAX_TICK_LABEL_Y_LENGTH,
    xVertical: DEFAULT_MAX_TICK_LABEL_X_VERTICAL_LENGTH,
    xHorizontal: DEFAULT_MAX_TICK_LABEL_X_HORIZONTAL_LENGTH
  },
  distanceBetweenBar: { min: minDistanceBetweenBar, max: maxDistanceBetweenBar } = {
    min: DEFAULT_MIN_DISTANCE_BETWEEN_BARS,
    max: DEFAULT_MAX_DISTANCE_BETWEEN_BARS
  },
  distanceBetweenBarGroup: { min: minGroupDistanceBetweenBar, max: maxGroupDistanceBetweenBar } = {
    min: DEFAULT_MIN_DISTANCE_BETWEEN_BAR_GROUPS,
    max: DEFAULT_MAX_DISTANCE_BETWEEN_BAR_GROUPS
  },
  distanceBetweenBarInGroup = DEFAULT_DISTANCE_BETWEEN_BARS_IN_GROUP,
  chartAfter,
  otherLabel,
  maxTooltipItems,
  tickLetterSize,
  axisTickLabelStyle,
  minStartBarGap,
  barWidth = DEFAULT_BAR_WIDTH,
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
  const events = useCommonEvents(
    onClickData,
    onHoverData,
    onLeaveData,
    onMoveData
  )
  const groupedData = useStackedData(data, isStack100, horizontal, stack100Precision)
  const chartTheme = useChartTheme(colors, theme)
  const themeLabelPaddings = getPaddings(
    chartTheme.bar?.padding || chartTheme.chart?.padding
  )
  const chartPadding = useMemo(
    () => ({ ...themeLabelPaddings, ...padding }),
    [padding, themeLabelPaddings]
  )
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
    minStartBarGap,
    yScale,
    height,
    width,
    xTickHide,
    yTickHide
  })

  const cornerRadiusObject = useCornerRadius(data)
  const scrollWidth = horizontal ? width : nearestSize
  const scrollHeight = horizontal ? nearestSize : height
  const axisTickLabelStyleWithFill = useMemo(
    () => ({
      fontSize: 12,
      ...axisTickLabelStyle,
      fontFamily: getFontFamily(),
      fill: 'var(--axis--text--enabled)'
    }),
    [axisTickLabelStyle]
  )

  const { sideLabelMap, showSideLabels, sideLabelWidth } = useSideAxis({
    groupedData,
    horizontal,
    showSideLabelsProp,
    tickLetterSize
  })

  const renderStackComponents = useCallback(
    ({ hideBarValuesInFixedLayer = false } = {}) => (
      <VictoryGroup events={events} offset={groupOffset}>
        {groupedData.map(([name, data]) => (
          <VictoryStack key={name}>
            {data.map(({ name, data: barData, color, opacity }, idx) => (
              <VictoryBar
                key={name}
                labelComponent={
                  (showTooltip || showBarValues) && !hideBarValuesInFixedLayer ? (
                    <ChartTooltipWrapper
                      totalLabel={totalLabel}
                      showTotal={showTotal}
                      barWidth={barWidth}
                      theme={chartTheme}
                      data={data}
                      otherLabel={otherLabel}
                      maxTooltipItems={maxTooltipItems}
                      showTooltip={showTooltip}
                      showBarValues={showBarValues}
                    />
                  ) : (
                    <></>
                  )
                }
                labels={VICTORY_EMPTY_LABEL_RENDER_TRIGER}
                x={DEFAULT_X}
                y={DEFAULT_Y}
                data={barData}
                alignment="start"
                barWidth={barWidth}
                cornerRadius={cornerRadius || cornerRadiusObject}
                style={{
                  data: {
                    fill: ({ datum }) =>
                      datum.color ||
                      color ||
                      getColorFromPalette(chartTheme.bar.colorScale, idx),
                    opacity
                  }
                }}
              />
            ))}
          </VictoryStack>
        ))}
      </VictoryGroup>
    ),
    [
      barWidth,
      chartTheme,
      cornerRadius,
      cornerRadiusObject,
      events,
      groupOffset,
      groupedData,
      maxTooltipItems,
      otherLabel,
      showTooltip,
      showTotal,
      totalLabel
    ]
  )

  const logMin = useMemo(() => {
    if (yScale !== 'log') return undefined

    const values = groupedData
      .flatMap(([, stacks]) => stacks)
      .flatMap((stack) => stack.data)
      .map((p) => p.value)
      .filter((v) => v > 0)

    return values.length ? Math.min(...values) : 1
  }, [groupedData, yScale])
  
  const victoryChartProps = {
    theme: chartTheme,
    height: height,
    width: width,
    maxDomain: { y: yMax || undefined },
    minDomain: { y: yScale === 'log' ? yMin ?? logMin : yMin || undefined },
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
      right: paddingWithLabel.right + SCROLL_OFFSET,
      left: showSideLabels
        ? paddingWithLabel.left + sideLabelWidth
        : paddingWithLabel.left
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
            <VictoryAxis
              tickLabelComponent={<></>}
              tickFormat={xTickFormat}
              axisComponent={<></>}
              gridComponent={horizontal ? <AxisGridX /> : undefined}
              style={horizontal
                ? {
                    grid: {
                      strokeWidth: 1,
                      stroke: 'var(--axis--border--enabled)'
                    }
                  }
                : undefined
              }
            />
            {showSideLabels && (
              <VictoryAxis
                tickLabelComponent={
                  <TickSideLabel sideLabelMap={sideLabelMap} dy={dy} dx={dx} />
                }
                tickFormat={xTickFormat}
                offsetX={sideLabelWidth + DEFAULT_SIDE_LABEL_OFFSET}
                axisComponent={
                  <AxisSide
                    horizontalExtension={
                      sideLabelWidth + DEFAULT_SIDE_LABEL_OFFSET
                    }
                  />
                }
              />
            )}
            <VictoryAxis
              tickLabelComponent={<AxisLabel maxLength={maxLabelYLength} />}
              dependentAxis
              tickFormat={yTickFormat}
              crossAxis={false}
              gridComponent={<AxisGridY />}
            />
            {renderStackComponents({ hideBarValuesInFixedLayer: true })}
          </VictoryChart>
        </div>

        <Scrollbar
          kl-id="StackedBarChart"
          autoHide={false}
          style={{ width, height: height - padding.bottom }}
        >
          <VictoryChart
            {...victoryChartProps}
            height={scrollHeight}
            width={victoryChartProps.width - SCROLL_OFFSET}
            padding={{ ...padding, bottom: 0, top: 0 }}
          >
            {xTickHide ? (
              <></>
            ) : (
              <VictoryAxis
                tickLabelComponent={
                  <AxisLabel
                    style={axisTickLabelStyle}
                    maxLength={maxLabelXLength}
                    angle={angle}
                    textAnchor={textAnchor}
                    dy={dy}
                    dx={dx}
                  />
                }
                axisComponent={<></>}
                tickFormat={xTickFormat}
              />
            )}
            {renderStackComponents()}
            {chartAfter}
          </VictoryChart>
        </Scrollbar>
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
      bottom: (xTickHide ? 0 : paddingWithLabel.bottom) + SCROLL_OFFSET
    }

    return (
      <div className={styles.container} style={{ height, width }}>
        <div className={clsx(styles.containerFixed, styles.containerFixedY)}>
          <VictoryChart
            {...victoryChartProps}
            theme={scrollbarTheme}
            padding={padding}
          >
            <VictoryAxis
              tickLabelComponent={<></>}
              tickFormat={xTickFormat}
              axisComponent={<></>}
              gridComponent={horizontal ? <AxisGridX /> : undefined}
              style={horizontal
                ? {
                    grid: {
                      strokeWidth: 1,
                      stroke: 'var(--axis--border--enabled)'
                    }
                  }
                : undefined
              }
            />
            <VictoryAxis
              tickLabelComponent={
                yTickHide ? (
                  <></>
                ) : (
                  <AxisLabel
                    style={axisTickLabelStyleWithFill}
                    maxLength={maxLabelYLength}
                  />
                )
              }
              dependentAxis
              tickFormat={yTickFormat}
              crossAxis={false}
              gridComponent={<AxisGridY />}
            />
            {renderStackComponents({ hideBarValuesInFixedLayer: true })}
          </VictoryChart>
        </div>

        <Scrollbar
          kl-id="StackedBarChart"
          autoHide={false}
          style={{
            marginLeft: padding.left,
            width: width - padding.left,
            height: height
          }}
          renderTrackVertical={(props) => (
            <div {...props} style={{ ...props.style, display: 'none' }} />
          )}
          renderThumbVertical={(props) => (
            <div {...props} style={{ ...props.style, display: 'none' }} />
          )}
          renderView={(props) => (
            <div 
              {...props}
              style={{
                ...props.style,
                overflowY: 'hidden',
                marginRight: 0
              }} 
            />
          )}
        >
          <VictoryChart
            {...victoryChartProps}
            width={scrollWidth + leftTextOffset}
            padding={{ ...padding, left: leftTextOffset, right: 0 }}
          >
            <VictoryAxis
              tickLabelComponent={
                xTickHide ? (
                  <></>
                ) : (
                  <AxisLabel
                    style={axisTickLabelStyle}
                    maxLength={maxLabelXLength}
                    angle={angle}
                    textAnchor={textAnchor}
                    dy={dy}
                    dx={dx}
                  />
                )
              }
              axisComponent={<></>}
              tickFormat={xTickFormat}
            />
            {renderStackComponents()}
            {chartAfter}
          </VictoryChart>
        </Scrollbar>
      </div>
    )
  }

  const paddingWithSideLabel = showSideLabels
    ? {
        ...paddingWithLabel,
        left: paddingWithLabel.left + sideLabelWidth
      }
    : paddingWithLabel
  return (
    <div className={styles.container} style={{ height, width }}>
      <VictoryChart {...victoryChartProps} padding={paddingWithSideLabel}>
        <VictoryAxis
          tickLabelComponent={
            xTickHide ? (
              <></>
            ) : (
              <AxisLabel
                maxLength={maxLabelXLength}
                angle={angle}
                textAnchor={textAnchor}
                dy={dy}
                dx={dx}
              />
            )
          }
          tickFormat={xTickFormat}
          axisComponent={<></>}
          gridComponent={horizontal ? <AxisGridX /> : undefined}
          style={horizontal
            ? {
                grid: {
                  strokeWidth: 1,
                  stroke: 'var(--axis--border--enabled)'
                }
              }
            : undefined
          }
        />
        {showSideLabels && (
          <VictoryAxis
            tickLabelComponent={
              <TickSideLabel sideLabelMap={sideLabelMap} dy={dy} dx={dx} />
            }
            tickFormat={xTickFormat}
            offsetX={sideLabelWidth + DEFAULT_SIDE_LABEL_OFFSET}
            axisComponent={
              <AxisSide
                horizontalExtension={sideLabelWidth + DEFAULT_SIDE_LABEL_OFFSET}
              />
            }
          />
        )}
        <VictoryAxis
          tickLabelComponent={
            yTickHide ? (
              <></>
            ) : (
              <AxisLabel
                style={axisTickLabelStyleWithFill}
                maxLength={maxLabelYLength}
              />
            )
          }
          tickFormat={yTickFormat}
          dependentAxis
          crossAxis={false}
          gridComponent={<AxisGridY />}
        />
        {renderStackComponents()}
        {chartAfter}
      </VictoryChart>
    </div>
  )
}

export const StackedBarChart = memo(
  GenericStackedBarChart
) as typeof GenericStackedBarChart
