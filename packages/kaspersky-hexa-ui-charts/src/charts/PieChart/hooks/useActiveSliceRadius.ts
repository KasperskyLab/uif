import { isFunction } from 'lodash'
import { useMemo } from 'react'
import { NumberOrCallback } from 'victory'

import { PIE_CHART_RADIUS_HOVER_INCREASE } from '../constants'

export function useActiveSliceRadius (datum: any, defaultRadius?: NumberOrCallback): number | undefined {
  return useMemo(() => {
    let radius: number | undefined
    if (isFunction(defaultRadius)) {
      radius = defaultRadius(datum)
    } else {
      radius = defaultRadius && datum.active ? defaultRadius + PIE_CHART_RADIUS_HOVER_INCREASE : defaultRadius
    }

    return radius
  }, [datum, defaultRadius])
}
