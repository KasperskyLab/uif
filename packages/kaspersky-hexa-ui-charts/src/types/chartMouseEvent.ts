import { SyntheticEvent } from 'react'

import { IChartDataPoint } from './chartData'
import { EventType } from './chartHoverProps'

export type TChartMouseEvent = MouseEvent & { type: EventType }

export type TChartMouseClickCallback<T = unknown> = (
  event: SyntheticEvent<Element, PointerEvent>,
  selected: IChartDataPoint<T>
) => void
