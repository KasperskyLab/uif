import React from 'react'
import { LineSegment, LineSegmentProps } from 'victory'

export type AxisGridXProps = LineSegmentProps & {
    ticks?: number[]
}

export const AxisGridX = ({datum, ticks, style, ...rest}: AxisGridXProps) => {
  const minTick = ticks?.length ? Math.min(...ticks.map(Number)) : 0
  const isBaseLine = Number(datum) === minTick

  return (
    <LineSegment
      {...rest}
      style={{
        ...style,
        strokeWidth: isBaseLine ? 1 : 0
      }}
    />
  )
}
