import clsx from 'clsx'
import isNil from 'lodash/isNil'
import round from 'lodash/round'
import React, { CSSProperties, memo, useMemo, useState } from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'
import { Minus } from '@kaspersky/hexa-ui-icons/16'
import { ArrowDownSolid } from '@kaspersky/hexa-ui-icons/8'

import { TextTruncateWithPopup } from '../../../components/TextTruncateWithPopup/TextTruncateWithPopup'
import { DEFAULT_PRECISION } from '../../../constants'
import { ICounterChartData } from '../../../types/chartData'
import { COUNTER_CHART_SIZE_CONFIG, CounterChartSize } from '../constants'
import styles from '../counter.module.scss'
import { getTrend } from '../helpers/getTrend'

export interface CounterChartProps {
  data: ICounterChartData,
  size?: CounterChartSize,
  width?: number | string,
  height?: number | string,
  biggerBetter?: boolean,
  precision?: number,
  color?: string,
  prefix?: string,
  suffix?: string,
}

const TypedCounterChart = ({
  data,
  size,
  biggerBetter = true,
  height,
  width,
  precision = 2,
  color,
  prefix,
  suffix
}: CounterChartProps) => {
  const [showAbsolutePrevious, setAbsolutePrevious] = useState(false)
  const hasPreviousValue = !isNil(data.previousValue)
  const isNowBiggerThanPrev = data.value > data.previousValue!
  const isEqual = data.value === data.previousValue!
  const isNowBetterThanPrev =
    hasPreviousValue &&
    ((biggerBetter && isNowBiggerThanPrev) ||
      (!isNowBiggerThanPrev && !biggerBetter)) &&
    !isEqual
  const trend = hasPreviousValue
    ? getTrend(data.value, data.previousValue!, precision)
    : 0
  const sizeConfig = size ? COUNTER_CHART_SIZE_CONFIG[size] : undefined
  const sizeStyle = useMemo(() => {
    if (!sizeConfig) {
      return undefined
    }

    return {
      '--counter-trend-top': `${sizeConfig.trendTop}px`,
      '--counter-prefix-offset': `${sizeConfig.prefixOffset}px`,
      '--counter-previous-offset': `${sizeConfig.previousValueOffset}px`
    } as CSSProperties
  }, [sizeConfig])

  return (
    <Space
      direction="vertical"
      gap={0}
      wrap="nowrap"
      align="stretch"
      justify="center"
      style={{
        ...sizeStyle,
        height: height ?? sizeConfig?.height,
        width
      }}
    >
      <Space
        align="baseline"
        justify="center"
        direction="horizontal"
        gap={sizeConfig?.gap ?? 8}
        wrap="nowrap"
        className={styles.counterValues}
      >
        <div
          className={clsx(
            styles.valueWrapper,
            hasPreviousValue && styles.withPreviousValue
          )}
        >
          <Space
            direction="horizontal"
            gap={0}
            align="stretch"
            justify="flex-end"
            wrap="nowrap"
          >
            {prefix && (
              <div className={styles.prefixWrapper}>
                <Text className={styles.prefix} type={sizeConfig?.prefix ?? 'H5'}>
                  {prefix}
                </Text>
              </div>
            )}
            <Space className={styles.valueTextWrapper}>
              <TextTruncateWithPopup
                type={sizeConfig?.value ?? 'H1'}
                className={clsx(styles.value)}
                style={{ color }}
              >
                {data.value}
              </TextTruncateWithPopup>
            </Space>
            {suffix && (
              <div className={styles.suffixWrapper}>
                <Text className={styles.suffix} type={sizeConfig?.suffix ?? 'H5'}>
                  {suffix}
                </Text>
              </div>
            )}
          </Space>
          {hasPreviousValue && (
            <>
              {isEqual
                ? (
                    <Minus className={clsx(styles.trend, styles.equal)} />
                  )
                : (
                    <ArrowDownSolid
                      className={clsx(styles.trend, {
                        [styles.bigger]: isNowBiggerThanPrev,
                        [styles.good]: isNowBetterThanPrev,
                        [styles.bad]: !isNowBetterThanPrev
                      })}
                    />
                  )}
            </>
          )}
        </div>
        {hasPreviousValue && (
          <div className={styles.previousValueWrapper}>
            <TextTruncateWithPopup
              type={sizeConfig?.previousValue ?? 'BTR2'}
              className={clsx(styles.previousValue, {
                [styles.equal]: isEqual,
                [styles.good]: isNowBetterThanPrev,
                [styles.bad]: !isEqual && !isNowBetterThanPrev
              })}
              onClick={() => {
                setAbsolutePrevious((v) => !v)
              }}
            >
              {round(data.value - data.previousValue!, precision || DEFAULT_PRECISION)} (
              {showAbsolutePrevious ? data.previousValue! : trend})
            </TextTruncateWithPopup>
          </div>
        )}
      </Space>
      <Space justify="center">
        <TextTruncateWithPopup type={sizeConfig?.description ?? 'BTR4'} color="secondary">
          {data.metric}
        </TextTruncateWithPopup>
      </Space>
    </Space>
  )
}

export const CounterChart = memo(TypedCounterChart) as <T>(
  props: CounterChartProps
) => ReturnType<typeof TypedCounterChart>
