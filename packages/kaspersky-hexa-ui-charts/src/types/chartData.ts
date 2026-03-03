import { ReactNode } from 'react'

export interface IChartDataPoint<T = unknown> {
  metric: number | string | Date,
  title?: ReactNode | ((metric: number | string | Date) => ReactNode),
  value: number,
  originalPayload?: T,
  color?: string,
  emptyMetric?: boolean,
  active?: boolean,
  selected?: boolean,
  aggregatedRecords?: T[]
}

export type IChartData<T = unknown> = IChartDataPoint<T>[];

export interface IStackedChartDataPoint<T = unknown> {
  name: string,
  title?: ReactNode | ((metric: number | string | Date) => ReactNode),
  group?: string,
  data: IChartDataPoint<T>[],
  color?: string,
  opacity?: number,
  emptyName?: boolean,
  selected?: boolean
}

export type IStackedChartData<T = unknown> = IStackedChartDataPoint<T>[];

export type IGroupedStackedChartData<T = unknown> = [string, IStackedChartData<T>][];

export interface ICounterChartData {
  metric: string,
  value: number,
  previousValue?: number
}

export interface ISpeedometerChartData {
  metric: string,
  value: number,
  previousValue: number
}

export type TTableChartData = Record<string, unknown>[];

export type StackedChartTooltipPointsData<T = unknown> = (Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[];
