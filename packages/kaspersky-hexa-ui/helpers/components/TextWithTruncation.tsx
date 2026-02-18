import { TextReducer } from '@helpers/components/TextReducer'
import React, { ReactNode } from 'react'

export type TextWithTruncationProps = {
  lineClamp?: number,
  /* @deprecated Use lineClamp={1} instead */ 
  truncate?: boolean
  text: ReactNode
  tooltip?: ReactNode
  className?: string
}

export const TextWithTruncation: React.FC<TextWithTruncationProps> = ({
  lineClamp,
  truncate = false,
  text,
  tooltip,
  className
}) => {

  if (truncate || (lineClamp && lineClamp >= 1)) {
    return (
      <TextReducer lineClamp={lineClamp} tooltip={tooltip ?? (typeof text === 'string' ? text : undefined)}>
        <span className={className}>{text}</span>
      </TextReducer>
    )
  }
  return <span className={className}>{text}</span>
}