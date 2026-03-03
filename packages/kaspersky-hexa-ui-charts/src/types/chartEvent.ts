import { SyntheticEvent } from 'react'

import { IChartDataPoint, IStackedChartDataPoint } from './chartData'

export type TChartMouseEvent = MouseEvent & { type: EventType };

export type TChartMouseClickCallback<T = unknown> = (
  event: SyntheticEvent<Element, PointerEvent>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void;

export interface IEventParams<T> {
  x: number,
  y: number,
  target: React.ReactNode,
  event: React.MouseEvent
}

export type TChartEventCallback<T = unknown> = (
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void;

export enum ChartEventType {
  enter = 'enter',
  leave = 'leave',
  move = 'move',
  click = 'click',
}

export enum EventType {
  mouseenter = 'mouseenter',
  mouseleave = 'mouseleave',
  mousemove = 'mousemove',
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
) => void;
