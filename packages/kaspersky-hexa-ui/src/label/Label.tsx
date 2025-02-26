import { Field, FieldProps, LabelPosition } from '@src/field'
import React, { FC } from 'react'

import { LabelProps } from './types'

/**
 * @deprecated Use Field instead
 */
export const Label: FC<LabelProps> = ({ children, errorText, position, text, ...props }: LabelProps) => {
  let label: FieldProps['label'] = text as FieldProps['label']
  let labelPosition: LabelPosition | undefined

  switch (position) {
    case 'none':
      label = undefined
      labelPosition = undefined
      break
    case 'aside':
    case 'right':
      labelPosition = 'before'
      break
    default:
      labelPosition = 'top'
  }

  return (
    <Field
      control={children as FieldProps['control']}
      label={label}
      labelPosition={labelPosition}
      message={errorText}
      messageMode="error"
      {...props}
    />
  )
}
