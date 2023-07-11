import React from 'react'
import { ITextboxProps } from '../input/types'

type StateProps = {
  helpIconColor?: string,
  descriptionColor?: string
}

export type LabelPosition = 'before' | 'after' | 'top'

export type FieldCssConfig = {
  mode: {
    normal: StateProps
  }
}

export type FieldProps = React.PropsWithChildren<
ITextboxProps & {
  label?: string,
  labelPosition?: LabelPosition,
  control?: React.ReactElement,
  klId?: string,
  description?: string,
  message?: string,
  stretch?: boolean,
  helpTrigger?: boolean,
  required?: boolean
}>

export type IFieldViewProps = FieldProps & {
  cssConfig: FieldCssConfig
}
