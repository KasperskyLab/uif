import React, { FC, ReactNode } from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { LifecycleObserverProps } from '../../../LifecycleObserver'
import { LegendPosition, TWidgetViewState, WidgetAdditionalElementProps, WidgetViewI18n } from '../../../WidgetView/types'
import { WidgetChartSlot } from '../WidgetChartSlot'

import styles from './WidgetContent.module.scss'

interface WidgetContentProps {
  header?: ReactNode
  children?: ReactNode
  legend?: React.ReactElement
  legendPosition?: LegendPosition
  chartFooter?: ReactNode
  state?: TWidgetViewState
  errorResetKey?: unknown
  lifecycle?: LifecycleObserverProps
  i18n?: WidgetViewI18n
  elementAfter?: WidgetAdditionalElementProps
  elementBottom?: WidgetAdditionalElementProps
}

export const WidgetContent: FC<WidgetContentProps> = ({
  header,
  children,
  legend,
  legendPosition,
  chartFooter,
  state,
  errorResetKey,
  lifecycle,
  i18n,
  elementAfter,
  elementBottom
}) => {
  const { chart: afterChart, ...afterProps } = elementAfter ?? {}
  const { chart: bottomChart, ...bottomProps } = elementBottom ?? {}

  return (
    <Space
      direction="vertical"
      wrap="nowrap"
      align="stretch"
      gap="section"
      className={styles.chartsLayout}
    >
      <Space
        wrap="nowrap"
        align="stretch"
        gap="section"
        className={styles.chartsRow}>
        <WidgetChartSlot
          header={header}
          legend={legend}
          legendPosition={legendPosition}
          chartFooter={chartFooter}
          state={state}
          errorResetKey={errorResetKey}
          lifecycle={lifecycle}
          i18n={i18n}
          className={styles.chartSlot}
        >
          {children}
        </WidgetChartSlot>

        {elementAfter && (
          <WidgetChartSlot
            {...afterProps}
            className={styles.chartSlot}
          >
            {afterChart}
          </WidgetChartSlot>
        )}
      </Space>

      {elementBottom && (
        <WidgetChartSlot
          {...bottomProps}
          className={styles.chartBottom}
        >
          {bottomChart}
        </WidgetChartSlot>
      )}
    </Space>
  )
}
