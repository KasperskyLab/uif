import React from 'react'

import { FormLabel as HexaFormLabel } from '@src/form-label'
import { FormLabelProps } from '@src/form-label/types'

const FormLabel = ({
  children = 'Label',
  ...props
}: FormLabelProps): JSX.Element => (
  <HexaFormLabel {...props}>{children}</HexaFormLabel>
)

export default FormLabel
