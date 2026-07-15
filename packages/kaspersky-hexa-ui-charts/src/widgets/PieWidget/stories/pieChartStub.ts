import { colors } from '@kaspersky/hexa-ui/design-system/tokens'

import { IChartDataPoint } from '../../../types/chartData'
import { LegendItemType, TLegendItem } from '../../Legend'
import { legendItems } from '../../Legend/stories/legendItemsStub'

export const pieChartStub: IChartDataPoint[] = [
  {
    metric: 'first',
    value: 44,
    originalPayload: ['first', 44],
    color: colors.marengo500
  },
  {
    metric: 'second',
    value: 55,
    originalPayload: ['second', 55],
    color: colors.grass500
  },
  {
    metric: 'third',
    value: 13,
    originalPayload: ['third', 13],
    color: colors.purple500
  },
  {
    metric: 'fourth',
    value: 33,
    originalPayload: ['fourth', 33],
    color: colors.orange500
  }
]

export const extendedPieChartStub: IChartDataPoint[] = [
  ...pieChartStub,
  {
    metric: 'fifth',
    value: 28,
    originalPayload: ['fifth', 28],
    color: colors.cg500
  },
  {
    metric: 'sixth',
    value: 41,
    originalPayload: ['sixth', 41],
    color: colors.dg500
  },
  {
    metric: 'seventh',
    value: 19,
    originalPayload: ['seventh', 19],
    color: colors.emerald500
  },
  {
    metric: 'eighth',
    value: 62,
    originalPayload: ['eighth', 62],
    color: colors.red500
  },
  {
    metric: 'ninth',
    value: 37,
    originalPayload: ['ninth', 37],
    color: colors.lg500
  },
  {
    metric: 'tenth',
    value: 24,
    originalPayload: ['tenth', 24],
    color: colors.marina500
  },
  {
    metric: 'eleventh',
    value: 48,
    originalPayload: ['eleventh', 48],
    color: colors.violet500
  },
  {
    metric: 'twelfth',
    value: 16,
    originalPayload: ['twelfth', 16],
    color: colors.yellow500
  }
]

export const getLegendData = (data: IChartDataPoint[]): TLegendItem[] => {
  return data.map((item, index) => {
    if (!legendItems[index] || legendItems[index].kind === LegendItemType.Divider) {
      return {
        kind: LegendItemType.Row,
        title: item.metric,
        tooltip: item.metric,
        value: item.value,
        color: item.color,
        payload: item,
        checked: item.checked ?? false
      }
    }

    return {
      ...legendItems[index],
      tooltip: item.metric,
      value: item.value,
      color: item.color,
      payload: item,
      checked: item.checked ?? false
    }
  })
}
