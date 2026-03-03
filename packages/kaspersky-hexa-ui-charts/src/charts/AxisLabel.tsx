import truncate from 'lodash/truncate'
import React from 'react'
import { BarProps, VictoryLabel } from 'victory'
import { VictoryLabelProps } from 'victory-core'

type AxisLabelProps = Omit<VictoryLabelProps, 'textAnchor'> &
  Pick<BarProps, 'style'> & {
    text?: string,
    textAnchor?: string,
    maxLength?: number
  }

export const AxisLabel: React.FC<AxisLabelProps> = ({ text, style, textAnchor, maxLength, ...props }) => {
  const labelText = maxLength && maxLength > 0 ? truncate(text, { length: maxLength }) : ''
  return <VictoryLabel {...props} style={{ ...style, textAnchor }} text={labelText} />
}
