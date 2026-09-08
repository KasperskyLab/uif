import { Placement } from '@src/dropdown/types'
import { TooltipPlacement } from '@src/tooltip/types'

import { Direction } from './useBodyDirection'

export const mirrorPlacement = (placement: TooltipPlacement | NonNullable<Placement>, direction: Direction) => {
  if (direction === 'ltr') return placement

  const swapCase = (src: string, target: string) => {
    if (src === src.toUpperCase()) return target.toUpperCase()
    if (src[0] === src[0].toUpperCase()) return target[0].toUpperCase() + target.slice(1)
    return target
  }

  return placement.replace(/left|right/gi, match => {
    const opposite = match.toLowerCase() === 'left' ? 'right' : 'left'
    return swapCase(match, opposite)
  })
}
