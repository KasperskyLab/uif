import { NumberValue, ScaleLinear, scaleLinear, scaleLog, ScaleLogarithmic, ScalePower, scaleSqrt } from 'd3'

import { DomainPadding } from './types/domainPadding'

export const DELTA_GRAD = 10

export function getTotalBarWith (
  barWidth = 32,
  distanceBetweenBarInGroup = 8,
  groupTotal = 1
): number {
  return groupTotal > 1 ? groupTotal * barWidth + distanceBetweenBarInGroup * (groupTotal - 1) : barWidth
}

export function getNearestSize ({
  targetSize,
  categories = 1,
  barSize = 0,
  maxDistanceBetweenBar = 32,
  minDistanceBetweenBar = 8,
  maxGroupDistanceBetweenBar = 32,
  minGroupDistanceBetweenBar = 16,
  startOffset = 0,
  endOffset = 0,
  totalGroups = 1,
  withStartGup = false
}: {
  targetSize: number,
  barSize: number,
  categories?: number,
  minDistanceBetweenBar?: number,
  maxDistanceBetweenBar?: number,
  maxGroupDistanceBetweenBar?: number,
  minGroupDistanceBetweenBar?: number,
  startOffset?: number,
  endOffset?: number,
  totalGroups?: number,
  withStartGup?: boolean
}): { nearestSize: number, distanceBetweenBar: number } {
  if (categories === 0) {
    return { nearestSize: targetSize, distanceBetweenBar: 0 }
  }

  if (maxDistanceBetweenBar < minDistanceBetweenBar) {
    console.error(
      `StackBarChart: maxDistanceBetweenBar=${maxDistanceBetweenBar} must be greater minDistanceBetweenBar=${minDistanceBetweenBar}`
    )
    maxDistanceBetweenBar = minDistanceBetweenBar
  }
  let total = 0
  let totalWithOffset = 0

  for (
    let distanceBetweenBar = totalGroups > 1 ? maxGroupDistanceBetweenBar : maxDistanceBetweenBar;
    distanceBetweenBar >= (totalGroups > 1 ? minGroupDistanceBetweenBar : minDistanceBetweenBar);
    distanceBetweenBar--
  ) {
    total = (withStartGup ? distanceBetweenBar : 0) + categories * barSize + (categories - 1) * distanceBetweenBar
    totalWithOffset = total + startOffset + endOffset

    if (totalWithOffset <= targetSize) {
      return { nearestSize: totalWithOffset, distanceBetweenBar }
    }
  }

  return { nearestSize: totalWithOffset, distanceBetweenBar: minDistanceBetweenBar }
}

export function addDomainPadding ({ x, y }: DomainPadding, startOffset = 0, endOffset = 0): DomainPadding {
  return { y, ...(x ? { x: [(x[0] || 0) + startOffset, (x[1] || 0) + endOffset] } : {}) }
}

export function getScaleByType<Range, Output> (
  yScale: 'linear' | 'sqrt' | 'log' = 'linear',
  domain: Iterable<NumberValue>,
  range: Iterable<Range>
): ScaleLinear<Range, Output> | ScalePower<Range, Output> | ScaleLogarithmic<Range, Output> {
  switch (yScale) {
    case 'log':
      return scaleLog(domain, range)

    case 'sqrt':
      return scaleSqrt(domain, range)

    default:
      return scaleLinear(domain, range)
  }
}
