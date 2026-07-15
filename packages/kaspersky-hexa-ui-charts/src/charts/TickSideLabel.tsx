import React from 'react'
import { VictoryLabel, VictoryLabelProps } from 'victory'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

import { DEFAULT_LEFT_TEXT_OFFSET, DEFAULT_SIDE_LABEL_OFFSET } from '../constants'
import { ISideLabel } from '../types/chartData'

type TickSideLabelProps = Omit<VictoryLabelProps, 'text'> & {
  sideLabelMap: Record<string, ISideLabel>,
  text?: string,
}

export const TickSideLabel: React.FC<TickSideLabelProps> = ({
  text,
  sideLabelMap,
  style,
  ...props
}) => {
  const sideLabel = sideLabelMap[text as string]

  if (!sideLabel?.text) return null

  const labelStyle = Array.isArray(style)
    ? style
    : {
        ...style,
        cursor: sideLabel.href ? 'pointer' : undefined,
        fill: sideLabel.href ? productColors.text.link.light : style?.fill
      }

  const handleClick = () => {
    if (sideLabel.href) {
      window.open(sideLabel.href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <VictoryLabel
      {...props}
      text={sideLabel.text}
      textAnchor="end"
      dx={DEFAULT_LEFT_TEXT_OFFSET - DEFAULT_SIDE_LABEL_OFFSET}
      style={labelStyle}
      events={
        sideLabel.href
          ? {
              onClick: handleClick
            }
          : undefined
      }
    />
  )
}
