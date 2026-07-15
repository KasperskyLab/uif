import clsx from 'clsx'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import { Loader, Space } from '@kaspersky/hexa-ui'
import { Size } from '@kaspersky/hexa-ui/design-system'

import { LifecycleObserver, LifecycleObserverProps } from '../../../../components/LifecycleObserver'
import { ResizeObserver } from '../../../WidgetView/ResizeObserver'
import { LegendPosition, TWidgetViewState, WidgetViewI18n, WidgetViewState } from '../../../WidgetView/types'
import { WidgetErrorBoundary } from '../../../WidgetView/WidgetErrorBoundary'
import { WidgetEmpty } from '../WidgetEmpty'
import { WidgetError, WidgetErrorType } from '../WidgetError'

import styles from './WidgetChartSlot.module.scss'

export interface WidgetChartSlotProps {
  header?: ReactNode
  children?: ReactNode
  legend?: React.ReactElement
  legendPosition?: LegendPosition
  chartFooter?: ReactNode
  state?: TWidgetViewState
  errorResetKey?: unknown
  lifecycle?: LifecycleObserverProps
  i18n?: WidgetViewI18n
  className?: string
}

const SlotWrapper: FC<{ header?: ReactNode; className?: string; children: ReactNode }> = ({
  header,
  className,
  children
}) => (
  <Space direction="vertical" wrap="nowrap" align="stretch" gap="grouped" className={clsx(styles.slotRoot, className)}>
    {header}
    {children}
  </Space>
)

export const WidgetChartSlot: FC<WidgetChartSlotProps> = ({
  header,
  children,
  legend,
  legendPosition = LegendPosition.RIGHT,
  chartFooter,
  state = WidgetViewState.READY,
  errorResetKey,
  lifecycle,
  i18n,
  className
}) => {
  const [widgetErrorRender, setWidgetErrorRender] = useState<WidgetErrorType | null>(null)

  useEffect(() => {
    setWidgetErrorRender(null)
  }, [errorResetKey])

  const isLoading = state === WidgetViewState.LOADING
  const isEmpty = state === WidgetViewState.EMPTY
  const isNoData = state === WidgetViewState.NO_DATA
  const hasError = state === WidgetViewState.ERROR || !!widgetErrorRender
  const isReady = state === WidgetViewState.READY

  if (hasError) {
    return (
      <SlotWrapper header={header} className={className}>
        <WidgetError
          reason={i18n?.error?.reason || widgetErrorRender?.reason}
          details={i18n?.error?.details || widgetErrorRender?.details}
          titleText={i18n?.error?.title}
        />
      </SlotWrapper>
    )
  }

  if (isEmpty) {
    return (
      <SlotWrapper header={header} className={className}>
        <WidgetEmpty label={i18n?.empty?.emptyLabel} />
      </SlotWrapper>
    )
  }

  if (isNoData) {
    return (
      <SlotWrapper header={header} className={className}>
        <WidgetEmpty
          showNoData
          noDataDescription={i18n?.empty?.noDataDescription}
          noDataTitle={i18n?.empty?.noDataTitle}
        />
      </SlotWrapper>
    )
  }

  return (
    <SlotWrapper header={header} className={className}>
      <Space
        align="stretch"
        wrap="nowrap"
        className={clsx(
          styles.slot,
          legendPosition === LegendPosition.TOP && styles.positionTop,
          legendPosition === LegendPosition.RIGHT && styles.positionRight,
          legendPosition === LegendPosition.BOTTOM && styles.positionBottom
        )}
      >
        {legend && isReady && (
          <div
            className={clsx(
              legendPosition === LegendPosition.TOP && styles.legendTop,
              legendPosition === LegendPosition.RIGHT && styles.legendRight,
              legendPosition === LegendPosition.BOTTOM && styles.legendTop
            )}
          >
            {legend}
          </div>
        )}

        <Space
          size={20}
          wrap="nowrap"
          align="center"
          className={styles.chartWrapper}
          direction="vertical"
        >
          <LifecycleObserver
            enabled={lifecycle?.enabled && isReady}
            onMount={lifecycle?.onMount}
            onReady={lifecycle?.onReady}
            onUnmount={lifecycle?.onUnmount}
          >
            <WidgetErrorBoundary onError={setWidgetErrorRender} resetKeys={errorResetKey}>
              {isLoading ? (
                <Loader centered size={Size.Medium} />
              ) : (
                <ResizeObserver className={styles.chart}>
                  {children}
                </ResizeObserver>
              )}
            </WidgetErrorBoundary>
          </LifecycleObserver>

          {isReady && chartFooter}
        </Space>
      </Space>
    </SlotWrapper>
  )
}
