const DEFAULT_BAR_RATIO = 0.5

export function getBarWidth (range: [number, number], ticksTotal: number): { barWidth: number, gupBetweenBar: number } {
  const extent = Math.abs(range[1] - range[0])
  const defaultWidth = Math.floor(DEFAULT_BAR_RATIO * (extent / ticksTotal))
  const barWidth = Math.max(1, defaultWidth)
  const gupBetweenBar = Math.floor(extent / ticksTotal - barWidth)

  return { barWidth, gupBetweenBar }
}
