import React, { FC } from 'react'
import { Slice, SliceProps } from 'victory'

import { useActiveSliceRadius } from '../hooks/useActiveSliceRadius'

interface PieChartDataComponentProps extends SliceProps {
  index?: number
}

export const PieChartDataComponent: FC<PieChartDataComponentProps> = ({
  index,
  radius: defaultRadius,
  datum,
  ...props
}) => {
  const radius = useActiveSliceRadius(datum, defaultRadius)
  // any type need for untyped field fill
  // TODO move transition to theme object
  const style = { ...props.style, transition: '0.2s', 'pointer-events': datum.active ? 'bounding-box' : undefined } as any

  if (datum.color) {
    style.fill = datum.color
  }

  return <Slice {...props} radius={radius} style={style} />
}
