import React, { SyntheticEvent } from 'react'

import { IEventParams } from '../types/chartEvent'

export const getEventParams = <T = any>(event: SyntheticEvent<any>): IEventParams<T> => {
  if (!(event.nativeEvent instanceof MouseEvent)) {
    return {
      x: -1,
      y: -1,
      target: null,
      event: event.nativeEvent as unknown as React.MouseEvent
    }
  }

  return {
    x: event.nativeEvent.x,
    y: event.nativeEvent.y,
    target: null,
    event: event.nativeEvent as unknown as React.MouseEvent
  }
}
