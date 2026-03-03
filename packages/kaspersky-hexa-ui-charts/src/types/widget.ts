import {
  IChartDataPoint,
  ICounterChartData,
  IStackedChartDataSeries,
  TStackedBarChartData,
  TTableChartData
} from './chartData'

export interface IWidgetOptions {
  wdgID: string,
  specialKind?: any,
  interval?: number,
  name: string,
  kind: any,
  xMin?: number,
  yMin?: number,
  xMax?: number,
  yMax?: number,
  xDecimals?: number,
  yDecimals?: number,
  color?: string,
  lineWidth?: number,
  pointSize?: number,
  showPrevPeriod?: boolean,
  showLegend?: boolean,
  showNull?: boolean,
  loading?: boolean,
  horizontal?: boolean,
  showTotal?: boolean,
  customParams?: {
    hundredPercentFormat: '' | '100%',
    scale: undefined | 'sqrt' | 'log'
  },
  tenantIDs?: string[],
  search?: any,
  sqlQueryMeta?: any,
  assetsSearch?: any,
  width?: number,
  height?: number,
  x?: number, // Ось x для запоминания позиции в grid layout
  y?: number // Ось y для запоминания позиции в grid layout
}

export type TWidgetData<T> = TStackedBarChartData<T> | IChartDataPoint<T>[] | ICounterChartData | TTableChartData

export type TWidget<T> = IWidgetOptions & { result: TWidgetData<T> }

export type TWidgetStackedBar<T> = TWidget<T> & { result: TStackedBarChartData<T> }

export type TWidgetLine<T> = TWidgetStackedBar<T>

export type TWidgetBar<T> = TWidget<T> & { result: IChartDataPoint<T>[] }

export type TWidgetPie<T> = TWidgetBar<T>

export type TWidgetCounter<T> = TWidget<T> & { result: ICounterChartData }

export type TWidgetTable<T> = TWidget<T> & {
  result: TTableChartData
}
