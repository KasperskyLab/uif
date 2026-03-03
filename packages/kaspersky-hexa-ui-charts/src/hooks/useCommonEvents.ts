import { SyntheticEvent, useMemo } from 'react'
import { CallbackArgs } from 'victory'
import { EventPropTypeInterface } from 'victory-core'

import { ALL_DATA_FIELD } from '../constants'
import { getEventParams } from '../helpers/getEventParams'
import { TChartEventCallback } from '../types/chartEvent'

export type VictoryEvents = EventPropTypeInterface<'data' | 'labels' | 'parent', number | string>[];

export function useCommonEvents<T> (
  onClick?: TChartEventCallback<T>,
  onHover?: TChartEventCallback<T>,
  onLeave?: TChartEventCallback<T>,
  onMove?: TChartEventCallback<T>,
  onMetricHover?: TChartEventCallback<T>
): VictoryEvents {
  return useMemo(
    () => [
      {
        childName: 'all',
        target: 'data',
        eventHandlers: {
          ...(onClick
            ? {
                onClick: (event: SyntheticEvent<any>, props: CallbackArgs): void =>
                  onClick?.(getEventParams(event), props.datum || props.data, props.datum?.[ALL_DATA_FIELD])
              }
            : {}),
          ...(onHover
            ? {
                onMouseOver: (event: SyntheticEvent<any>, props: CallbackArgs): void =>
                  onHover?.(getEventParams(event), props.datum || props.data, props.datum?.[ALL_DATA_FIELD])
              }
            : {}),
          ...(onLeave
            ? {
                onMouseLeave: (event: SyntheticEvent<any>, props: CallbackArgs): void =>
                  onLeave?.(getEventParams(event), props.datum || props.data, props.datum?.[ALL_DATA_FIELD])
              }
            : {}),
          ...(onMove
            ? {
                onMouseMove: (event: SyntheticEvent<any>, props: CallbackArgs): void =>
                  onMove?.(getEventParams(event), props.datum || props.data, props.datum?.[ALL_DATA_FIELD])
              }
            : {})
        }
      },
      {
        childName: 'all',
        target: 'grid',
        eventHandlers: {
          ...(onMetricHover
            ? {
                onMouseOver: (event: SyntheticEvent<any>, props: CallbackArgs): void => {
                  console.log('onMouseOver', { event, props })
                  // onMetricHover?.(getEventParams(event), props.datum || props.data, props.datum?.[ALL_DATA_FIELD])
                }
              }
            : {})
        }
      } as any
    ],
    [onClick, onHover, onLeave, onMove, onMetricHover]
  )
}
