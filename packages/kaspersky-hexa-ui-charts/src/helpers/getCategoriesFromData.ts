import { uniq } from 'lodash'

import { IStackedChartData } from '../types/chartData'

export function getCategoriesFromData (
  data: IStackedChartData<any>,
  categoriesFormat: (tick: any) => string = (v) => v.toString()
): string[] {
  return uniq(data.map((d) => d.data.map((d) => categoriesFormat(d.metric).toString())).flat())
}

export function getValuesFromData (
  data: IStackedChartData<any>,
  valuesFormat: (tick: any) => string = (v: any): string => v
): string[] {
  return uniq(data.map((d) => d.data.map((d) => valuesFormat(d.value).toString())).flat())
}
