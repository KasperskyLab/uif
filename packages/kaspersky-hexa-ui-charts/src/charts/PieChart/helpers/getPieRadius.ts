import { BlockProps } from 'victory'

export function getEllipsisRadius (width: number, height: number, padding?: BlockProps): { a: number, b: number } {
  const size = Math.min(width, height)
  return {
    a: (size - (padding?.left || 0) - (padding?.right || 0)) / 2,
    b: (size - (padding?.top || 0) - (padding?.bottom || 0)) / 2
  }
}
