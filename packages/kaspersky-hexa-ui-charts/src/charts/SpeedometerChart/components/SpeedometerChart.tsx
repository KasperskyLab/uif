import { isUndefined } from 'lodash'
import React, { FC, memo, useMemo } from 'react'

import { H4, Space, Text } from '@kaspersky/hexa-ui'

import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { getPaddings } from '../../../helpers/getPaddings'
import { useChartTheme } from '../../../hooks/useChartTheme'
import { BaseChartProps } from '../../../types/chart'
import { Gauge } from '../../../vendor/Gauge'
import { calculatePercentage } from '../../../vendor/Gauge/hooks/utils'
import { GaugeProps } from '../../../vendor/Gauge/types/GaugeProps'
import { DEFAULT_TICK_LINE_CONFIG } from '../constants'
import styles from '../speedometer.module.scss'

export type SpeedometerChartProps = BaseChartProps &
  Pick<GaugeProps, 'value'> & {
    ticksGroup?: number,
    ticksUnitInGroup?: number,
    tickUnitLength?: number,
    ticksUnitInGroupLength?: number,
    segments: number[],
    labelDescription?: string,
    showLabels?: 'always' | 'hide' | 'bySegments',
    showTotal?: boolean
  };

export const SpeedometerChart: FC<SpeedometerChartProps> = memo(
  ({
    ticksGroup = 10,
    ticksUnitInGroup = 10,
    tickUnitLength = 4,
    ticksUnitInGroupLength = 8,
    segments = [],
    value,
    theme,
    padding = {},
    width = 180,
    height = 180,
    colors,
    labelDescription = '',
    showLabels = 'always',
    showTotal = true
  }) => {
    const chartTheme = useChartTheme(colors, theme)
    const themeLabelPaddings = getPaddings(chartTheme?.speedometer?.padding)
    const chartPadding = useMemo(() => ({ ...themeLabelPaddings, ...padding }), [padding, themeLabelPaddings])
    const style = useMemo(
      () =>
        ({
          width,
          height,
          position: 'relative',
          paddingTop: chartPadding.top,
          paddingRight: chartPadding.right,
          paddingBottom: chartPadding.bottom,
          paddingLeft: chartPadding.left
        }) as React.CSSProperties,
      [width, height, chartPadding.top, chartPadding.right, chartPadding.bottom, chartPadding.left]
    )
    // Magic for scaling
    const marginInPercent = useMemo(() => ({ top: 0, bottom: 8.3 / height + 0.00000009 * Math.pow(height, 2), left: 0.0, right: 0.0 }), [height])

    const { ticks, min, max, subArcs } = useMemo(() => {
      if (segments.length <= 0) {
        return { ticks: [], min: undefined, max: undefined }
      }

      const min = segments.at(0) || 0
      const max = segments.at(-1) || 1
      const totalTicks = ticksGroup * ticksUnitInGroup
      const unit = (max - min) / totalTicks
      const unitInGroup = ticksUnitInGroup * unit

      const subArcs = segments.map((s, idx) => ({ limit: s, isStart: idx === 0, isEnd: idx === segments.length - 1 }))
      const ticks = Array.from({ length: ticksGroup })
        .map((_, group) => {
          return Array.from({ length: ticksUnitInGroup }).map((_, units) => {
            const value = min + unitInGroup * group + units * unit
            const isLast = group === ticksGroup - 1 && units === ticksUnitInGroup - 1

            if (showLabels === 'hide') {
              if (units === 0) {
                return {
                  value,
                  lineConfig: { length: ticksUnitInGroupLength, hide: false }
                }
              }

              if (isLast) {
                return [
                  {
                    value,
                    lineConfig: { length: tickUnitLength, hide: false }
                  }, {
                    value: value + unit,
                    lineConfig: { length: ticksUnitInGroupLength, hide: false }
                  }
                ]
              }

              return {
                value,
                lineConfig: { length: tickUnitLength, hide: false }
              }
            }

            if (showLabels === 'bySegments') {
              const isValueEqSegment = segments.some((s) => s === (isLast ? value + unit : value))
              const valueConfig = isValueEqSegment ? { hide: false } : { }

              if (units === 0) {
                return {
                  value,
                  lineConfig: { length: ticksUnitInGroupLength, hide: false },
                  valueConfig
                }
              }

              if (isLast) {
                return [
                  {
                    value,
                    lineConfig: { length: tickUnitLength, hide: false }
                  }, {
                    value: value + unit,
                    valueConfig,
                    lineConfig: { length: ticksUnitInGroupLength, hide: false }
                  }
                ]
              }

              return {
                value,
                valueConfig,
                lineConfig: { length: tickUnitLength, hide: false }
              }
            }

            if (units === 0) {
              return {
                value,
                valueConfig: { hide: false },
                lineConfig: { length: ticksUnitInGroupLength, hide: false }
              }
            }

            if (isLast) {
              return [
                {
                  value,
                  lineConfig: { length: tickUnitLength, hide: false }
                }, {
                  value: value + unit, valueConfig: { hide: false }, lineConfig: { length: ticksUnitInGroupLength, hide: false }
                }
              ]
            }

            return {
              value,
              lineConfig: { length: tickUnitLength, hide: false }
            }
          })
        })
        .flat().flat()

      return { ticks, min, max, subArcs }
    }, [segments, ticksGroup, ticksUnitInGroup, showLabels, tickUnitLength, ticksUnitInGroupLength])

    const percentage = useMemo(() => {
      if (!showTotal || isUndefined(value) || isUndefined(min) || isUndefined(max)) {
        return undefined
      }

      const result = calculatePercentage(min, max, value) * 100

      return result.toFixed(0)
    }, [value, min, max, showTotal])

    return (
      <div className={styles.container} style={style}>
        {percentage && (
          <div className={styles.titleContainer}>
            <H4>{`${percentage}%`}</H4>
            <Text className={styles.description} type="BTR5">{labelDescription}</Text>
          </div>
        )}
        <Gauge
          className={styles.gauge}
          value={value}
          height={height}
          minValue={min}
          maxValue={max}
          type="radial"
          marginInPercent={marginInPercent}
          labels={{
            tickLabels: {
              type: 'inner',
              ticks,
              defaultTickLineConfig: {
                ...DEFAULT_TICK_LINE_CONFIG,
                color: chartTheme?.speedometer?.style?.tick.fill,
                hide: true
              },
              defaultTickValueConfig: {
                style: {
                  ...chartTheme?.speedometer?.style?.tickLabel
                },
                hide: true
              }
            }
          }}
          arc={{
            colorArray: chartTheme.speedometer.colorScale,
            subArcs,
            padding: 0,
            width: 0.18,
            cornerRadius: 0
          }}
          pointer={{
            type: 'arrow',
            elastic: true,
            animationDelay: 0,
            width: 19,
            length: 0.14,
            color: chartTheme?.speedometer?.style?.pointer?.fill
          }}
        />
      </div>
    )
  }
)

SpeedometerChart.displayName = 'SpeedometerChart'
