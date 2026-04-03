import React from 'react'

import { Checkbox as HexaCheckbox } from '@src/checkbox'
import { CheckboxProps } from '@src/checkbox/types'

const Checkbox = ({ children = 'Checkbox', ...props }: CheckboxProps): JSX.Element => (
  <HexaCheckbox {...props}>{children}</HexaCheckbox>
)

export default Checkbox