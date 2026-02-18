export type Gap = 'closest' | 'dependent' | 'related' | 'grouped' | 'section' | 'separated' | number

export function getGapStyle (gap?: Gap | [Gap, Gap]): string {
  if (gap === undefined) {
    return ''
  }

  if (Array.isArray(gap)) {
    return `${getGapStyle(gap[0])} ${getGapStyle(gap[1])}`
  }

  if (typeof gap === 'string') {
    return `var(--spacing--gap_${gap})`
  }

  if (gap === 0) {
    return '0'
  }

  return `${gap}px`
}