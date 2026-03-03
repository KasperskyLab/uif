import { truncate } from 'lodash'
import React from 'react'
import { BarProps, VictoryLabel } from 'victory'
import { VictoryLabelProps } from 'victory-core'

type AxisLabelYProps = VictoryLabelProps &
  Pick<BarProps, 'scale' | 'style'> & {
    text?: string,
    maxLength?: number
  }

export const AxisLabelY: React.FC<AxisLabelYProps> = ({ text, style, ...props }) => {
  return <VictoryLabel {...props} text={truncate(text, { length: props.maxLength })} />
}
