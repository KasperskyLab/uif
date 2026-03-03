import reverse from 'lodash/reverse'

import { IGroupedStackedChartData } from '../types/chartData'

export function reversedStackedChart<T> (groupedData: IGroupedStackedChartData<T>): IGroupedStackedChartData<T> {
  return groupedData.map(([name, data]) => [name, data.map((d) => ({ ...d, data: reverse(d.data) }))])
}
