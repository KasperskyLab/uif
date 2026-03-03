import React, { SyntheticEvent } from 'react'

import { IChartDataPoint } from './chartData'

export enum EventType {
  mouseenter = 'mouseenter',
  mouseleave = 'mouseleave',
  mousemove = 'mousemove'
}

export interface ChartHoverProps<T> {
  x: number,
  y: number,
  target: React.ReactNode,
  eventType: EventType,
  data?: IChartDataPoint<T>
}

export type TChartHoverCallback<T = unknown> = (
  event: SyntheticEvent<Element, MouseEvent>,
  value: ChartHoverProps<T>
) => void
