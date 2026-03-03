import { BlockProps } from 'victory'

import { getEllipsisRadius } from './getPieRadius'

export function getRectInsideEllipsis (
  width: number,
  height: number,
  innerRadiusRatio: number,
  padding?: BlockProps
): { x: number, y: number } {
  const { a, b } = getEllipsisRadius(width, height, padding)
  const x = a * innerRadiusRatio * Math.sqrt(2)
  const y = b * innerRadiusRatio * Math.sqrt(2)

  return { x, y }
}
