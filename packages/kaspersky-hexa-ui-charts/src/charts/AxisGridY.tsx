import React from 'react'
import { LineSegment, LineSegmentProps } from 'victory'

export type AxisGridYProps = LineSegmentProps & {
    ticks?: number[]
}

export const AxisGridY = ({datum, ticks, style, ...rest}: AxisGridYProps) => {
  const minTick = ticks?.length ? Math.min(...ticks) : 0
  const isBaseLine = datum === minTick

  return (
    <LineSegment
      {...rest}
      style={{
        ...style,
        strokeDasharray: isBaseLine ? 'none' : '5, 5'
      }}
    />
  )
}
