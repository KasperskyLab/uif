import React from 'react'

import { LifecycleObserverProps } from '../LifecycleObserver'

export enum LegendPosition {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export enum WidgetViewState {
  READY = 'ready',
  LOADING = 'loading',
  ERROR = 'error',
  NO_DATA = 'no-data',
  EMPTY = 'empty'
}

export enum WidgetViewPadding {
  MEDIUM = 'medium',
  LARGE = 'large'
}

export type TWidgetViewPadding = `${WidgetViewPadding}`

export type TWidgetViewState = `${WidgetViewState}`

export interface WidgetViewI18n {
  empty?: {
    noDataTitle?: string
    noDataDescription?: string
    emptyLabel?: string
  }
  error?: {
    title?: string
    reason?: string
    details?: string
  }
}

export interface WidgetProps {
  children?: React.ReactNode
  header?: React.ReactNode
  chartFooter?: React.ReactNode
  legend?: React.ReactElement
  legendPosition?: LegendPosition
  state?: TWidgetViewState
  errorResetKey?: unknown
  lifecycle?: LifecycleObserverProps
  i18n?: WidgetViewI18n

  elementAfter?: WidgetAdditionalElementProps
  elementBottom?: WidgetAdditionalElementProps

  invalid?: boolean
  active?: boolean
  padding?: TWidgetViewPadding
}

export interface WidgetAdditionalElementProps
  extends Omit<WidgetProps, 'invalid' | 'active' | 'elementAfter' | 'elementBottom' | 'children' | 'padding'> {
  chart?: React.ReactNode
}
