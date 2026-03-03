import { toString } from 'lodash'

import { getPercent } from '../../../helpers/getPercent'
import { LegendItemType, TLegendItem, TLegendItemRow } from '../types'

import { defaultGetNumberFromData } from './defaultGetNumberFromData'

function isLegendItemRow<T> (item: TLegendItem<T>): item is TLegendItemRow<T> {
  return item.kind === LegendItemType.Row
}

export function getMaxPercentLength (items: TLegendItem[], getNumberFromData: (item: TLegendItem) => number = defaultGetNumberFromData, precision?: number): number {
  const total = items.reduce((sum, d) => sum + getNumberFromData(d), 0)

  return items.reduce((result, item) => {
    if (isLegendItemRow(item)) {
      const percent = getPercent(getNumberFromData(item), total, precision)
      return Math.max(result, toString(percent).length)
    }

    return result
  }, 0)
}
