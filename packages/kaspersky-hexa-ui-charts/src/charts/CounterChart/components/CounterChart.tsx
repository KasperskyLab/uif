import clsx from 'clsx'
import isNil from 'lodash/isNil'
import round from 'lodash/round'
import React, { memo, useState } from 'react'

import { H1, Space, Text } from '@kaspersky/hexa-ui'
import { Minus } from '@kaspersky/hexa-ui-icons/16'
import { ArrowDownSolid } from '@kaspersky/hexa-ui-icons/8'

import { DEFAULT_PRECISION } from '../../../constants'
import { ICounterChartData } from '../../../types/chartData'
import styles from '../counter.module.scss'
import { getTrend } from '../helpers/getTrend'

export interface CounterChartProps<T> {
  data: ICounterChartData,
  width?: number | string,
  height?: number | string,
  biggerBetter?: boolean,
  precision?: number,
  color?: string
}

const TypedCounterChart = <T, >({
  data,
  biggerBetter = true,
  height,
  width,
  precision = 2,
  color
}: CounterChartProps<T>) => {
  const [showAbsolutePrevious, setAbsolutePrevious] = useState(false)
  const hasPreviousValue = !isNil(data.previousValue)
  const isNowBiggerThanPrev = data.value > data.previousValue!
  const isEqual = data.value === data.previousValue!
  const isNowBetterThanPrev =
    hasPreviousValue && ((biggerBetter && isNowBiggerThanPrev) || (!isNowBiggerThanPrev && !biggerBetter)) && !isEqual
  const trend = hasPreviousValue ? getTrend(data.value, data.previousValue!, precision) : 0

  return (
    <Space direction="vertical" gap={0} wrap="nowrap" align="stretch" justify="center" style={{ height, width }}>
      <Space
        align="baseline"
        justify="center"
        direction="horizontal"
        gap={8}
        wrap="nowrap"
        className={styles.counterValues}
      >
        <div className={clsx(styles.valueWrapper, hasPreviousValue && styles.withPreviousValue)}>
          <Text type="H1"
            className={clsx(styles.value)}
            style={{ color }}
          >
            {data.value}
          </Text>
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
            <Text
              mode="BTR2"
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
            </Text>
          </div>
        )}
      </Space>
      <div className={styles.description}>
        <Text mode="BTR4" color="secondary">
          {data.metric}
        </Text>
      </div>
    </Space>
  )
}

export const CounterChart = memo(TypedCounterChart) as <T>(
  props: CounterChartProps<T>
) => ReturnType<typeof TypedCounterChart>
