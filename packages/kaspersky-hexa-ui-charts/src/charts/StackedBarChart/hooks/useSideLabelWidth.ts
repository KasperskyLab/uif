import { useMemo } from 'react'

import {
  DEFAULT_LEFT_TEXT_OFFSET,
  DEFAULT_LETTER_SIZE
} from '../../../constants'
import { ISideLabel } from '../../../types/chartData'

export function useSideLabelWidth ({
  sideLabelMap,
  tickLetterSize = DEFAULT_LETTER_SIZE
}: {
  sideLabelMap: Record<string, ISideLabel>
  tickLetterSize?: number
}): {
  sideLabelWidth: number
  maxSideLabelLength: number
} {
  return useMemo(() => {
    const maxSideLabelLength = Math.max(
      0,
      ...Object.values(sideLabelMap).map(({ text }) => text.length)
    )

    const sideLabelWidth = maxSideLabelLength * tickLetterSize + DEFAULT_LEFT_TEXT_OFFSET

    return {
      sideLabelWidth,
      maxSideLabelLength
    }
  }, [sideLabelMap, tickLetterSize])
}
