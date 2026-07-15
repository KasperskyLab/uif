import React from 'react'

type AxisSideProps = {
  x1?: number
  x2?: number
  y1?: number
  y2?: number
  style?: React.CSSProperties
  horizontalExtension?: number
}

export const AxisSide: React.FC<AxisSideProps> = ({
  x1 = 0,
  x2 = 0,
  y1 = 0,
  y2 = 0,
  style,
  horizontalExtension = 0
}) => (
  <g>
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={style}
    />

    {horizontalExtension > 0 && (
      <line
        x1={x2}
        y1={y2}
        x2={x2 + horizontalExtension}
        y2={y2}
        style={style}
      />
    )}
  </g>
)
