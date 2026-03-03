import { toNumber } from 'lodash'

import { LegendItemType, TLegendItem } from '../types'

export const defaultGetNumberFromData = (item: TLegendItem<unknown>): number =>
  (item.kind === LegendItemType.Row && toNumber(item.value)) || 0
